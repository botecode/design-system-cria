import React, { useState, useMemo } from 'react';
import { Button } from '../Button';
import { Card } from '../Card';
import { CriaTextBody1, CriaTextBody2 } from '../TextTokens';
import { colors, spacing, radii, shadows, typography } from '../../tokens';
import { CaretLeft, CaretRight } from 'phosphor-react';

export interface RowOfCardsProps<T = any> {
  /**
   * Array of card data to display
   */
  cards: T[];
  
  /**
   * Function to render each card
   */
  renderCard: (card: T, index: number) => React.ReactNode;
  
  /**
   * Number of cards to display per page (default: 6)
   */
  cardsPerPage?: number;
  
  /**
   * Callback when page changes
   */
  onPageChange?: (page: number) => void;
  
  /**
   * Custom className
   */
  className?: string;
  
  /**
   * Custom styles
   */
  style?: React.CSSProperties;
  
  /**
   * Data attributes for testing
   */
  'data-testid'?: string;
}

export function RowOfCards<T = any>({
  cards,
  renderCard,
  cardsPerPage = 6,
  onPageChange,
  className,
  style,
  'data-testid': dataTestId,
}: RowOfCardsProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate pagination
  const pagination = useMemo(() => {
    const totalPages = Math.ceil(cards.length / cardsPerPage);
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const currentCards = cards.slice(startIndex, endIndex);
    
    return {
      totalPages,
      currentCards,
      hasNextPage: currentPage < totalPages,
      hasPrevPage: currentPage > 1,
    };
  }, [cards, cardsPerPage, currentPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    onPageChange?.(newPage);
  };

  const handleNextPage = () => {
    if (pagination.hasNextPage) {
      handlePageChange(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (pagination.hasPrevPage) {
      handlePageChange(currentPage - 1);
    }
  };

  // Empty state
  if (cards.length === 0) {
    return (
      <div
        className={`row-of-cards ${className || ''}`}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: spacing[50],
          padding: spacing[8],
          ...style,
        }}
        data-testid={dataTestId}
      >
        <Card variant="outlined">
          <div style={{ textAlign: 'center', padding: spacing[8] }}>
            <CriaTextBody1 style={{ color: colors.text.secondary }}>
              No cards to display
            </CriaTextBody1>
          </div>
        </Card>
      </div>
    );
  }

  // Single page - no pagination needed
  if (pagination.totalPages <= 1) {
    return (
      <div
        className={`row-of-cards ${className || ''}`}
        style={{
          ...style,
        }}
        data-testid={dataTestId}
      >
        <div className="row-of-cards-grid" style={gridStyles}>
          {pagination.currentCards.map((card, index) => 
            renderCard(card, index)
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`row-of-cards ${className || ''}`}
      style={{
        ...style,
      }}
      data-testid={dataTestId}
    >
      {/* Cards Grid */}
      <div className="row-of-cards-grid" style={gridStyles}>
        {pagination.currentCards.map((card, index) => 
          renderCard(card, index)
        )}
      </div>

      {/* Pagination Controls */}
      <div 
        className="row-of-cards-pagination"
        style={paginationStyles}
        role="navigation"
        aria-label="Cards pagination"
      >
        {/* Page Info */}
        <div style={pageInfoStyles}>
          <CriaTextBody2 
            style={{ 
              fontFamily: typography.fontFamily.primary,
              fontSize: typography.fontSize.caption,
              color: colors.text.secondary,
            }}
          >
            Page {currentPage} of {pagination.totalPages}
          </CriaTextBody2>
        </div>

        {/* Navigation Buttons */}
        <div style={navButtonsStyles}>
          <Button
            variant="outlined"
            size="small"
            onClick={handlePrevPage}
            disabled={!pagination.hasPrevPage}
            aria-label="Go to previous page"
            style={navButtonStyles}
          >
            <CaretLeft size={16} />
            Previous
          </Button>
          
          <Button
            variant="outlined"
            size="small"
            onClick={handleNextPage}
            disabled={!pagination.hasNextPage}
            aria-label="Go to next page"
            style={navButtonStyles}
          >
            Next
            <CaretRight size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}

// Styles using design tokens
const gridStyles: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fill, minmax(${spacing[75]}, 1fr))`,
  gap: spacing[6],
  marginBottom: spacing[8],
  padding: spacing[4],
};

const paginationStyles: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: `${spacing[4]} ${spacing[6]}`,
  backgroundColor: colors.background.secondary,
  border: `1px solid ${colors.border.light}`,
  borderRadius: radii.md,
  boxShadow: shadows.sm,
};

const pageInfoStyles: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
};

const navButtonsStyles: React.CSSProperties = {
  display: 'flex',
  gap: spacing[3],
};

const navButtonStyles: React.CSSProperties = {
  minWidth: spacing[25],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: spacing[2],
};
