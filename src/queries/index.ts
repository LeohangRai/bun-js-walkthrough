import { TABLE_NAMES } from '../enums/table-names.enum';

export const createUsersTableQuery = `
  CREATE TABLE IF NOT EXISTS "${TABLE_NAMES.USERS}" (
    "id" INTEGER,
    "fullName" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    PRIMARY KEY("id") 
  );
`;

export const createQuotesTableQuery = `
  CREATE TABLE IF NOT EXISTS "${TABLE_NAMES.QUOTES}" (
	  "id" INTEGER,
	  "quote"	TEXT,
	  "reference" TEXT,
    "stars" INTEGER DEFAULT 0,
	  PRIMARY KEY("id")
  );
`;
