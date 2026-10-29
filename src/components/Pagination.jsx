import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  isLoading
}) {
  if (!totalPages || totalPages <= 1) {
    return null;
  }

  const isFirstPage = currentPage <= 1;
  const isLastPage = currentPage >= totalPages;

  return (
    <nav
      className="pagination-container"
      role="navigation"
      aria-label="Pagination navigation"
    >
      <button
        type="button"
        className="pagination-btn"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={isFirstPage || isLoading}
        aria-label="Go to previous page"
      >
        <ChevronLeft size={18} />
        <span>Previous</span>
      </button>

      <div className="pagination-status" aria-current="page">
        <span>Page</span>
        <span className="pagination-current">{currentPage}</span>
        <span>of</span>
        <span>{totalPages.toLocaleString()}</span>
      </div>

      <button
        type="button"
        className="pagination-btn"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={isLastPage || isLoading}
        aria-label="Go to next page"
      >
        <span>Next</span>
        <ChevronRight size={18} />
      </button>
    </nav>
  );
}
