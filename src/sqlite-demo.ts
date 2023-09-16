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
const query = inMemoryDb.query(`select 'Hello from in-memory SQLite' as message;`);
console.log(query.get());

/* Opens or creates an SQLite3 database */
const myDb = new Database('my-db.sqlite', { create: true });

// create "users" table
myDb.query(createUsersTableQuery).run();

// seed data to the "users" table
const usersSeedData = getUsersSeedDataFormattedString();
myDb.query(`INSERT INTO "${TABLE_NAMES.USERS}" (fullName, email, username) VALUES ${usersSeedData};`)
.run()

// create "quotes" table
myDb.query(createQuotesTableQuery).run();

// seed data to the "quotes" table
const quotesSeedData = getQuotesSeedDataFormattedString();
myDb.query(`INSERT INTO "${TABLE_NAMES.QUOTES}" (quote, reference, stars) VALUES ${quotesSeedData};`).run();


const usersTableData = myDb.query(`SELECT * FROM "${TABLE_NAMES.USERS}"`).all();
console.table(usersTableData)