/* eslint-disable no-shadow */
/// <reference types="react-scripts" />

interface UsePaginationProps {
  contentPerPage: number,
  count: number,
}
interface UsePaginationReturn {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
  nextPage: () => void;
  prevPage: () => void;
  firstContentIndex: number;
  lastContentIndex: number;
  gaps: { before: boolean; paginationGroup: number[]; after: boolean };
}
export type UsePagination = (UsePaginationProps) => (UsePaginationReturn);
