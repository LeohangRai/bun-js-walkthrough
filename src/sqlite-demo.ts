import { Database } from 'bun:sqlite';
import { TABLE_NAMES } from './enums/table-names.enum';
import { createQuotesTableQuery, createUsersTableQuery } from './queries';
import { getUsersSeedDataFormattedString } from './seeds/users.seeder';
import { getQuotesSeedDataFormattedString } from './seeds/tasks.seeder';

/*
  Opening an in-memory database
  Database(':memory:'), Database() and Database('') are equivalent 
*/
const inMemoryDb = new Database(':memory:');
const query = inMemoryDb.query(
  `select 'Hello from in-memory SQLite' as message;`
);
console.log(query.get());

/* Opens or creates an SQLite3 database */
const myDb = new Database('my-db.sqlite', { create: true });

// create "users" table
myDb.query(createUsersTableQuery).run();

// seed data to the "users" table
const usersSeedData = getUsersSeedDataFormattedString();
myDb
  .query(
    `INSERT INTO "${TABLE_NAMES.USERS}" (fullName, email, username) VALUES ${usersSeedData};`
  )
  .run();

// create "quotes" table
myDb.query(createQuotesTableQuery).run();

// seed data to the "quotes" table
const quotesSeedData = getQuotesSeedDataFormattedString();
myDb
  .query(
    `INSERT INTO "${TABLE_NAMES.QUOTES}" (quote, reference, stars) VALUES ${quotesSeedData};`
  )
  .run();

// .all() returns the values as an array of objects
const usersTableData = myDb.query(`SELECT * FROM "${TABLE_NAMES.USERS}"`).all();
console.table(usersTableData);

// .values() returns the values as an array of arrays
const usersTableData2 = myDb
  .query(`SELECT * FROM "${TABLE_NAMES.USERS}"`)
  .values();
console.table(usersTableData2);

// .finalize() destroys the query Statement and frees any resources associated with it.
const quotesQuery = myDb.query(`SELECT "quote" FROM "quotes"`);
console.log(quotesQuery.all());
quotesQuery.finalize();

/*
  Since the 'quotesQuery' statement has been destroyed by calling the .finalize() method, if you now call any methods on the quotesQuery statement (eg: 'quotesQuery.values()'), it will throw the following error:
  "error: Statement has finalized"
*/

// Transactions
const insertQuotesStatement = myDb.prepare(
  `INSERT INTO "${TABLE_NAMES.QUOTES}" (quote) VALUES ($newQuote)`
);
const insertQuotesTransaction = myDb.transaction((quotes: []) => {
  for (const quote of quotes) insertQuotesStatement.run(quote);
  return quotes.length;
});

const insertCount = insertQuotesTransaction([
  {
    $newQuote:
      'There are two ways to write error-free programs; only the third one works.'
  },
  { $newQuote: 'One man’s crappy software is another man’s full-time job.' }
]);

console.log(`Inserted ${insertCount} quotes using Transaction.`);
