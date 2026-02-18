import type { Dish } from "@/interfaces/dish";
import { buildQueryWithFilters } from "@/utils/build-query-filter";
import { getDatabase } from ".";
import type { DatabaseActions, ModelReturn } from "./interface";

export const CATEGORIES = [
  "Starters",
  "Mains",
  "Desserts",
  "Drinks",
  "Specials",
];

export const dishes: Pick<
  DatabaseActions<Dish>,
  "getAll" | "insertAll" | "getByFilters"
> = {
  getAll: () => {
    const db = getDatabase();

    const result = db.getAllSync<ModelReturn<Dish>>("SELECT * FROM dishes;");
    return result;
  },
  getByFilters: (filters) => {
    const db = getDatabase();

    const { query, params } = buildQueryWithFilters(
      "SELECT * FROM dishes",
      filters
    );

    const result = db.getAllSync<ModelReturn<Dish>>(query, params);

    return result;
  },
  insertAll: (dishes) => {
    const db = getDatabase();

    const insertQuery = `
    INSERT OR REPLACE INTO dishes
    (id, name, description, image, price, category)
    VALUES (?, ?, ?, ?, ?, ?);
  `;

    try {
      for (const dish of dishes) {
        db.runSync(insertQuery, [
          dish.name,
          dish.name,
          dish.description,
          dish.image,
          dish.price,
          dish.category,
        ]);
      }

      return true;
    } catch {
      return false;
    }
  },
};
