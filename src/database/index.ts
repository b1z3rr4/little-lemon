export const DATABASE = "little-lemon.db";

import * as SQLite from "expo-sqlite";

export const initDatabase = async () => {
  const db = await SQLite.openDatabaseAsync(DATABASE);

  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS dishes (
      id TEXT PRIMARY KEY NOT NULL,
      name TEXT NOT NULL,
      description TEXT,
      image TEXT,
      price REAL
    );
  `);

  return db;
};
