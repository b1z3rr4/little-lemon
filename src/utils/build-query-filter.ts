export type Filter =
  | { field: string; operator: "IN"; value: (string | number)[] }
  | {
      field: string;
      operator: "=" | "LIKE" | ">" | "<";
      value: string | number;
    };

export function buildQueryWithFilters(baseQuery: string, filters: Filter[]) {
  let query = baseQuery;
  const params: (string | number)[] = [];

  if (filters.length > 0) {
    query += " WHERE ";
  }

  const conditions = filters.map((filter) => {
    if (filter.operator === "IN") {
      const placeholders = filter.value.map(() => "?").join(",");
      params.push(...filter.value);
      return `${filter.field} IN (${placeholders})`;
    }

    params.push(filter.value);
    return `${filter.field} ${filter.operator} ?`;
  });

  query += conditions.join(" AND ");

  return { query, params };
}
