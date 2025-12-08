import React from 'react';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface PaginationControlProps {
  currentPage: number;
  totalPages: number;
  siblingCount?: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationControlProps> = ({
  currentPage,
  totalPages,
  siblingCount = 1,
  onPageChange
}) => {
  const generatePaginationItems = () => {
    const items = [];
    items.push(1);

    const rangeStart = Math.max(2, currentPage - siblingCount);
    const rangeEnd = Math.min(totalPages - 1, currentPage + siblingCount);

    if (rangeStart > 2) {
      items.push('ellipsis-1');
    }

    for (let i = rangeStart; i <= rangeEnd; i++) {
      items.push(i);
    }

    if (rangeEnd < totalPages - 1) {
      items.push('ellipsis-2');
    }

    if (totalPages > 1) {
      items.push(totalPages);
    }

    return items;
  };

  const paginationItems = generatePaginationItems();

  if (totalPages <= 1) return null;

  return (
    <nav className="flex items-center justify-center gap-2 py-6" aria-label="Pagination">
      {/* Previous */}
      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="h-9 w-9 rounded-md border border-gray-300 text-gray-600 dark:text-gray-400 hover:border-brand-500 hover:text-brand-500 disabled:opacity-50"
        aria-label="Previous page"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {/* Page Numbers */}
      {paginationItems.map((item) =>
        item === 'ellipsis-1' || item === 'ellipsis-2' ? (
          <span
            key={item}
            className="flex h-9 w-9 items-center justify-center text-gray-400"
            aria-hidden="true"
          >
            <MoreHorizontal className="h-4 w-4" />
          </span>
        ) : (
          <button
            key={`page-${item}`}
            onClick={() => onPageChange(item as number)}
            aria-current={currentPage === item ? 'page' : undefined}
            aria-label={`Page ${item}`}
            className={`h-9 w-9 rounded-md text-sm font-medium transition-all duration-150
              ${currentPage === item
                ? 'bg-brand-500 text-white'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#18181B] hover:text-brand-500'
              }`}
          >
            {item}
          </button>
        )
      )}

      {/* Next */}
      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="h-9 w-9 rounded-md border border-gray-300 text-gray-600 dark:text-gray-400 hover:border-brand-500 hover:text-brand-500 disabled:opacity-50"
        aria-label="Next page"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </nav>
  );
};

export default Pagination;
