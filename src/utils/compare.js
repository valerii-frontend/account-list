const compareValues = (value1, value2, direction) => {
  if (value1 === value2) return 0;

  if (typeof value1 === "string" && typeof value2 === "string") {
    return direction === "asc" ? value1.localeCompare(value2) : value2.localeCompare(value1);
  }

  return direction === "asc" ? value1 - value2 : value2 - value1;
};
export default compareValues;
