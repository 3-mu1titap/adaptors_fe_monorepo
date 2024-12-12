'use client';
import React from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../pagenation';

interface PaginationProps {
  currentPage: number; // 현재 페이지
  totalPages: number; // 전체 페이지 수
  categoryCode: string;
}

const CustomPagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  categoryCode,
}) => {
  // Helper function to create a range of pages
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPageToShow = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxPageToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPageToShow - 1);

    if (endPage - startPage < maxPageToShow - 1) {
      startPage = Math.max(1, endPage - maxPageToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  return (
    <Pagination>
      <PaginationContent>
        {/* 이전 버튼 */}
        {currentPage != 0 && (
          <PaginationItem>
            <PaginationPrevious
              href={`?category=${categoryCode}&page=${currentPage - 3}`}
            />
          </PaginationItem>
        )}

        {/* 동적 페이지 번호 */}
        {getPageNumbers().map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href={`?category=${categoryCode}&page=${page}`}
              isActive={page === currentPage}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* 중간 생략(엘리시스) */}
        {currentPage < totalPages - 2 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {/* 다음 버튼 */}
        <PaginationItem>
          <PaginationNext
            href={`?category=${categoryCode}&page=${currentPage + 3}`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default CustomPagination;
