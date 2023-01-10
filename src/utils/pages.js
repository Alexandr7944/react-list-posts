export const getPageCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit);
}

export const getPagesArray = (totalPages) => {
  const tesult = [];
  for (let i = 0; i < totalPages; i++) {
    tesult.push(i + 1);
  }
  return tesult;
}