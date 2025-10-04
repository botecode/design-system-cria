import React, { forwardRef, useMemo } from 'react';
import { CaretLeft, CaretRight } from 'phosphor-react';

export interface PaginationProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onClick'> {
  /**
   * Current active page (1-based)
   */
  currentPage: number;
  
  /**
   * Total number of pages
   */
  totalPages: number;
  
  /**
   * Callback when page changes
   */
  onPageChange: (page: number) => void;
  
  /**
   * Number of pages to show on each side of current page
   */
  siblingCount?: number;
  
  /**
   * Whether to show first and last page buttons
   */
  showFirstLast?: boolean;
  
  /**
   * Whether to show previous/next buttons
   */
  showPrevNext?: boolean;
  
  /**
   * Label for previous button
   */
  previousLabel?: string;
  
  /**
   * Label for next button
   */
  nextLabel?: string;
  
  /**
   * Label for first button
   */
  firstLabel?: string;
  
  /**
   * Label for last button
   */
  lastLabel?: string;
  
  /**
   * Whether to show page size selector
   */
  showPageSize?: boolean;
  
  /**
   * Current page size
   */
  pageSize?: number;
  
  /**
   * Available page size options
   */
  pageSizeOptions?: number[];
  
  /**
   * Callback when page size changes
   */
  onPageSizeChange?: (pageSize: number) => void;
  
  /**
   * Whether to show page information
   */
  showPageInfo?: boolean;
  
  /**
   * Total number of items
   */
  totalItems?: number;
  
  /**
   * Pagination variant
   */
  variant?: 'default' | 'compact' | 'minimal';
  
  /**
   * Custom aria-label
   */
  ariaLabel?: string;
  
  /**
   * Custom class name
   */
  className?: string;
  
  /**
   * Custom styles
   */
  style?: React.CSSProperties;
}

/**
 * Pagination component for navigating through paged content
 */
export const Pagination = forwardRef<HTMLElement, PaginationProps>(({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  showFirstLast = false,
  showPrevNext = true,
  previousLabel = 'Previous',
  nextLabel = 'Next',
  firstLabel = 'First',
  lastLabel = 'Last',
  showPageSize = false,
  pageSize,
  pageSizeOptions = [5, 10, 20, 50],
  onPageSizeChange,
  showPageInfo = false,
  totalItems,
  variant = 'default',
  ariaLabel = 'Pagination',
  className = '',
  style,
  ...props
}, ref) => {
  // Generate page numbers with ellipsis
  const pageNumbers = useMemo(() => {
    if (totalPages <= 1) return [1];
    
    const pages: (number | string)[] = [];
    const totalVisiblePages = 7; // 1 + 2*siblingCount + 2 (first/last) + 2 (ellipsis)
    
    if (totalPages <= totalVisiblePages) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);
      
      // Calculate range around current page
      const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
      const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);
      
      // Show ellipsis if needed
      const shouldShowLeftEllipsis = leftSiblingIndex > 2;
      const shouldShowRightEllipsis = rightSiblingIndex < totalPages - 1;
      
      if (shouldShowLeftEllipsis) {
        pages.push('...');
      }
      
      // Show pages around current page
      for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
        if (i !== 1 && i !== totalPages) {
          pages.push(i);
        }
      }
      
      if (shouldShowRightEllipsis) {
        pages.push('...');
      }
      
      // Always show last page
      if (totalPages > 1) {
        pages.push(totalPages);
      }
    }
    
    return pages;
  }, [currentPage, totalPages, siblingCount]);
  
  // Calculate page info
  const pageInfo = useMemo(() => {
    if (!showPageInfo || !totalItems || !pageSize) return '';
    
    const startItem = (currentPage - 1) * pageSize + 1;
    const endItem = Math.min(currentPage * pageSize, totalItems);
    
    return `Showing ${startItem}-${endItem} of ${totalItems}`;
  }, [showPageInfo, totalItems, pageSize, currentPage]);
  
  // Generate CSS classes
  const paginationClasses = [
    'cria-pagination',
    variant !== 'default' && `cria-pagination--${variant}`,
    className,
  ].filter(Boolean).join(' ');
  
  // Handle page change
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };
  
  // Handle page size change
  const handlePageSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newPageSize = parseInt(event.target.value, 10);
    onPageSizeChange?.(newPageSize);
  };
  
  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent, action: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };
  
  // Don't render if no pages
  if (totalPages <= 0) {
    return null;
  }
  
  return (
    <nav
      ref={ref}
      className={paginationClasses}
      aria-label={ariaLabel}
      style={style}
      {...props}
    >
      <div className="cria-pagination__content">
        {/* Page Size Selector */}
        {showPageSize && (
          <div className="cria-pagination__page-size">
            <label htmlFor="page-size-select" className="cria-pagination__page-size-label">
              Items per page:
            </label>
            <select
              id="page-size-select"
              className="cria-pagination__page-size-select"
              value={pageSize}
              onChange={handlePageSizeChange}
              aria-label="Items per page"
            >
              {pageSizeOptions.map(size => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
        )}
        
        {/* Page Info */}
        {showPageInfo && pageInfo && (
          <div className="cria-pagination__info">
            <span className="cria-pagination__info-text">{pageInfo}</span>
          </div>
        )}
        
        {/* Navigation Buttons */}
        <div className="cria-pagination__navigation">
          {/* First Button */}
          {showFirstLast && currentPage > 1 && (
            <button
              className="cria-pagination__button cria-pagination__button--first"
              onClick={() => handlePageChange(1)}
              onKeyDown={(e) => handleKeyDown(e, () => handlePageChange(1))}
              aria-label={firstLabel}
            >
              {firstLabel}
            </button>
          )}
          
          {/* Previous Button */}
          {showPrevNext && (
            <button
              className={`cria-pagination__button cria-pagination__button--prev ${
                currentPage <= 1 ? 'cria-pagination__button--disabled' : ''
              }`}
              onClick={() => handlePageChange(currentPage - 1)}
              onKeyDown={(e) => handleKeyDown(e, () => handlePageChange(currentPage - 1))}
              disabled={currentPage <= 1}
              aria-disabled={currentPage <= 1}
              aria-label={previousLabel}
            >
              <CaretLeft size={16} />
              {variant !== 'minimal' && <span className="cria-pagination__button-text">{previousLabel}</span>}
            </button>
          )}
          
          {/* Page Numbers */}
          <div className="cria-pagination__pages">
            {pageNumbers.map((page, index) => {
              if (page === '...') {
                return (
                  <span
                    key={`ellipsis-${index}`}
                    className="cria-pagination__ellipsis"
                    aria-hidden="true"
                  >
                    ...
                  </span>
                );
              }
              
              const pageNum = page as number;
              const isActive = pageNum === currentPage;
              
              return (
                <button
                  key={pageNum}
                  className={`cria-pagination__page ${
                    isActive ? 'cria-pagination__page--active' : ''
                  }`}
                  onClick={() => handlePageChange(pageNum)}
                  onKeyDown={(e) => handleKeyDown(e, () => handlePageChange(pageNum))}
                  aria-current={isActive ? 'page' : undefined}
                  aria-label={isActive ? `Page ${pageNum}, current page` : `Page ${pageNum}`}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>
          
          {/* Next Button */}
          {showPrevNext && (
            <button
              className={`cria-pagination__button cria-pagination__button--next ${
                currentPage >= totalPages ? 'cria-pagination__button--disabled' : ''
              }`}
              onClick={() => handlePageChange(currentPage + 1)}
              onKeyDown={(e) => handleKeyDown(e, () => handlePageChange(currentPage + 1))}
              disabled={currentPage >= totalPages}
              aria-disabled={currentPage >= totalPages}
              aria-label={nextLabel}
            >
              {variant !== 'minimal' && <span className="cria-pagination__button-text">{nextLabel}</span>}
              <CaretRight size={16} />
            </button>
          )}
          
          {/* Last Button */}
          {showFirstLast && currentPage < totalPages && (
            <button
              className="cria-pagination__button cria-pagination__button--last"
              onClick={() => handlePageChange(totalPages)}
              onKeyDown={(e) => handleKeyDown(e, () => handlePageChange(totalPages))}
              aria-label={lastLabel}
            >
              {lastLabel}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
});

Pagination.displayName = 'Pagination';

export default Pagination;
