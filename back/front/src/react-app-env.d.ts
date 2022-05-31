/* eslint-disable no-shadow */
/// <reference types="react-scripts" />

interface UsePaginationProps {
  contentPerPage: number,
  count: number,
}
interface UsePaginationReturn {
  page: number;
  totalPages: number;
  firstContentIndex: number;
  lastContentIndex: number;
  nextPage: () => void;
  prevPage: () => void;
  setPage: (page: number) => void;
}
export type UsePagination = (UsePaginationProps) => (UsePaginationReturn);
