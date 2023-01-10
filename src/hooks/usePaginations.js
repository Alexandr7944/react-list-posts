import { useMemo } from "react";

export const usePaginations = (totalPages) => {
  const paginations = useMemo(() => {
    const pagesArray = [];
    for (let i = 0; i < totalPages; i++) {
      pagesArray.push(i + 1);
    }
    return pagesArray;
  }, [totalPages]);
  return paginations;
}