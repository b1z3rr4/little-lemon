export type ModelReturn<T> = T & {
  id: string;
};

export interface DatabaseActions<T> {
  getAll: () => Promise<ModelReturn<T>[]>;
  getById: (id: string) => Promise<ModelReturn<T>>;
  insertAll: (data: T[]) => Promise<boolean>;
  insert: (data: T) => Promise<ModelReturn<T>>;
  deleteAll: () => Promise<boolean>;
  deleteById: (id: string) => Promise<boolean>;
}
