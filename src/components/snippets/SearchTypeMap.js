/**
 * Search filter options.
 */
export const searchTypeMap = [
  {key: "STARTS_WITH", label: "Starts With", filter: ((a, b) => a.startsWith(b))},
  {key: "ENDS_WITH", label: "Ends With", filter: ((a, b) => a.endsWith(b))},
  {key: "CONTAINS", label: "Contains", filter: ((a, b) => a.includes(b))}
];
