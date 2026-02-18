import type { Filter } from "../utils/build-query-filter";

export type ModelReturn<T> = T & {
  id: string;
};

export interface DatabaseActions<T> {
  getAll: () => ModelReturn<T>[];
  getById: (id: string) => ModelReturn<T>;
  insertAll: (data: T[]) => boolean;
  insert: (data: T) => ModelReturn<T>;
  deleteAll: () => boolean;
  deleteById: (id: string) => boolean;
  getByFilters: (filters: Filter[]) => ModelReturn<T>[];
}
