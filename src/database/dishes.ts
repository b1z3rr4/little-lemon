import * as SQLite from "expo-sqlite";

import type { Dish } from "../interfaces/dish";
import { DATABASE } from ".";
import type { DatabaseActions, ModelReturn } from "./interface";

export const dishes: Pick<DatabaseActions<Dish>, "getAll" | "insertAll"> = {
  getAll: async () => {
    const db = await SQLite.openDatabaseAsync(DATABASE);

    const result = db.getAllSync<ModelReturn<Dish>>("SELECT * FROM dishes;");
    return result;
  },
  insertAll: async (dishes) => {
    const db = await SQLite.openDatabaseAsync(DATABASE);

    const insertQuery = `
    INSERT OR REPLACE INTO dishes
    (id, name, description, image, price)
    VALUES (?, ?, ?, ?, ?);
  `;

    try {
      for (const dish of dishes) {
        const id = crypto.randomUUID();
        db.runSync(insertQuery, [
          id,
          dish.name,
          dish.description,
          dish.image,
          dish.price,
        ]);
      }

      return true;
    } catch {
      return false;
    }
  },
};
