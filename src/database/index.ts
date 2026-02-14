export const DATABASE = "little-lemon.db";

import * as SQLite from "expo-sqlite";

let db: SQLite.SQLiteDatabase;

export const initDatabase = async () => {
  db = await SQLite.openDatabaseAsync(DATABASE);

  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS dishes (
      id TEXT PRIMARY KEY NOT NULL,
      name TEXT NOT NULL,
      description TEXT,
      image TEXT,
      price REAL,
      category TEXT
    );
  `);

  return db;
};

export function getDatabase() {
  if (!db) {
    throw new Error("Database not initialized");
  }
  return db;
}
