import { useState } from 'react';

type UsePaginationProps = {
  totalItems: number;
  itemsPerPage: number;
  initialPage?: number;
};

type UsePaginationReturn = {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  setCurrentPage: (page: number) => void;
  nextPage: () => void;
  prevPage: () => void;
  offset: number;
};

export const usePagination = ({
  totalItems,
  itemsPerPage,
  initialPage = 1,
}: UsePaginationProps): UsePaginationReturn => {
  const [currentPage, setCurrentPage] = useState(initialPage); // 현재 페이지
  const totalPages = Math.ceil(totalItems / itemsPerPage); // 총 페이지 수

  // 다음 페이지로 이동
  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  // 이전 페이지로 이동
  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  // 현재 페이지에 해당하는 아이템 범위
  const offset = (currentPage - 1) * itemsPerPage;

  return {
    currentPage,
    totalPages,
    itemsPerPage,
    setCurrentPage,
    nextPage,
    prevPage,
    offset,
  };
};
