import { useState } from 'react';
import { UsePagination } from '../react-app-env';

const usePagination: UsePagination = ({ contentPerPage, count }) => {
  const [page, setPage] = useState(1);

  const pageCount = Math.ceil(count / contentPerPage);

  let lastContentIndex = page * contentPerPage;

  let firstContentIndex = lastContentIndex - contentPerPage;

  if (pageCount === 0) {
    lastContentIndex = 0;

    firstContentIndex = -1;
  }

  const changePage = (direction: boolean) => {
    setPage((state) => {
      if (direction) {
        if (state === pageCount || pageCount === 0) {
          return state;
        }
        return state + 1;
      }

      if (state === 1) {
        return state;
      }
      return state - 1;
    });
  };

  const setPageSAFE = (num: number) => {
    if (num > pageCount) {
      setPage(pageCount);
    } else if (num < 1) {
      setPage(1);
    } else {
      setPage(num);
    }
  };

  return {
    totalPages: pageCount,
    nextPage: () => changePage(true),
    prevPage: () => changePage(false),
    setPage: setPageSAFE,
    firstContentIndex,
    lastContentIndex,
    page,
  };
};

export default usePagination;
