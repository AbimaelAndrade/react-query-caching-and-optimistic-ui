import { useMemo } from "react";

type PaginationProps = {
  currentPage: number;
  total: number;
  take: number;
};

type UsePagination = {
  next: number | null;
  previous: number | null;
  lastPage: number;
};

export const usePagination = ({
  currentPage,
  total,
  take = 10,
}: PaginationProps): UsePagination => {
  const lastPage = useMemo(() => Math.ceil(total / take), [total]);
  const next = useMemo(
    () => (currentPage < lastPage ? currentPage + 1 : null),
    [currentPage, lastPage]
  );

  const previous = useMemo(
    () => (currentPage > 1 ? currentPage - 1 : null),
    [currentPage]
  );

  return {
    next,
    previous,
    lastPage,
  };
};
