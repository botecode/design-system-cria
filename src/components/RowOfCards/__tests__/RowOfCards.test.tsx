import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RowOfCards } from '../RowOfCards';
import { Card } from '../../Card';

// Mock data for testing
const mockCards = [
  { id: '1', title: 'Card 1', content: 'Content 1' },
  { id: '2', title: 'Card 2', content: 'Content 2' },
  { id: '3', title: 'Card 3', content: 'Content 3' },
  { id: '4', title: 'Card 4', content: 'Content 4' },
  { id: '5', title: 'Card 5', content: 'Content 5' },
  { id: '6', title: 'Card 6', content: 'Content 6' },
  { id: '7', title: 'Card 7', content: 'Content 7' },
  { id: '8', title: 'Card 8', content: 'Content 8' },
];

describe('RowOfCards', () => {
  const defaultProps = {
    cards: mockCards,
    renderCard: (card: any) => (
      <Card key={card.id}>
        <h3>{card.title}</h3>
        <p>{card.content}</p>
      </Card>
    ),
  };

  it('renders with correct card layout', () => {
    render(<RowOfCards {...defaultProps} />);
    
    // Should render first 6 cards by default (cardsPerPage = 6)
    expect(screen.getByText('Card 1')).toBeInTheDocument();
    expect(screen.getByText('Card 2')).toBeInTheDocument();
    expect(screen.getByText('Card 6')).toBeInTheDocument();
    
    // Should not render cards beyond first page
    expect(screen.queryByText('Card 7')).not.toBeInTheDocument();
    expect(screen.queryByText('Card 8')).not.toBeInTheDocument();
  });

  it('renders with custom cardsPerPage', () => {
    render(<RowOfCards {...defaultProps} cardsPerPage={3} />);
    
    // Should render only first 3 cards
    expect(screen.getByText('Card 1')).toBeInTheDocument();
    expect(screen.getByText('Card 2')).toBeInTheDocument();
    expect(screen.getByText('Card 3')).toBeInTheDocument();
    
    // Should not render cards beyond first page
    expect(screen.queryByText('Card 4')).not.toBeInTheDocument();
  });

  it('displays pagination controls when needed', () => {
    render(<RowOfCards {...defaultProps} cardsPerPage={3} />);
    
    // Should show pagination controls since we have more than 3 cards
    expect(screen.getByText('1')).toBeInTheDocument(); // Current page
    expect(screen.getByText('3')).toBeInTheDocument(); // Total pages
  });

  it('does not display pagination controls when not needed', () => {
    const fewCards = mockCards.slice(0, 3);
    render(<RowOfCards {...defaultProps} cards={fewCards} cardsPerPage={6} />);
    
    // Should not show pagination since all cards fit on one page
    expect(screen.queryByText('1')).not.toBeInTheDocument();
  });

  it('pagination functionality works properly', async () => {
    const user = userEvent.setup();
    render(<RowOfCards {...defaultProps} cardsPerPage={3} />);
    
    // Initially on page 1
    expect(screen.getByText('Card 1')).toBeInTheDocument();
    expect(screen.queryByText('Card 4')).not.toBeInTheDocument();
    
    // Click next page
    const nextButton = screen.getByLabelText('Go to next page');
    await user.click(nextButton);
    
    // Should now show page 2 cards
    expect(screen.queryByText('Card 1')).not.toBeInTheDocument();
    expect(screen.getByText('Card 4')).toBeInTheDocument();
    expect(screen.getByText('Card 5')).toBeInTheDocument();
    expect(screen.getByText('Card 6')).toBeInTheDocument();
  });

  it('previous page functionality works properly', async () => {
    const user = userEvent.setup();
    render(<RowOfCards {...defaultProps} cardsPerPage={3} />);
    
    // Go to page 2 first
    const nextButton = screen.getByLabelText('Go to next page');
    await user.click(nextButton);
    
    // Now go back to page 1
    const prevButton = screen.getByLabelText('Go to previous page');
    await user.click(prevButton);
    
    // Should show page 1 cards again
    expect(screen.getByText('Card 1')).toBeInTheDocument();
    expect(screen.getByText('Card 2')).toBeInTheDocument();
    expect(screen.getByText('Card 3')).toBeInTheDocument();
    expect(screen.queryByText('Card 4')).not.toBeInTheDocument();
  });

  it('handles empty cards array', () => {
    render(<RowOfCards {...defaultProps} cards={[]} />);
    
    expect(screen.getByText('No cards to display')).toBeInTheDocument();
    expect(screen.queryByText('Card 1')).not.toBeInTheDocument();
  });

  it('handles single card', () => {
    const singleCard = [mockCards[0]];
    render(<RowOfCards {...defaultProps} cards={singleCard} />);
    
    expect(screen.getByText('Card 1')).toBeInTheDocument();
    expect(screen.queryByText('1')).not.toBeInTheDocument(); // No pagination
  });

  it('applies custom className', () => {
    const { container } = render(
      <RowOfCards {...defaultProps} className="custom-row-of-cards" />
    );
    
    expect(container.firstChild).toHaveClass('custom-row-of-cards');
  });

  it('applies custom styles', () => {
    const customStyle = { backgroundColor: 'red' };
    const { container } = render(
      <RowOfCards {...defaultProps} style={customStyle} />
    );
    
    expect(container.firstChild).toHaveStyle('background-color: red');
  });

  it('supports data attributes', () => {
    render(<RowOfCards {...defaultProps} data-testid="row-of-cards" />);
    
    expect(screen.getByTestId('row-of-cards')).toBeInTheDocument();
  });

  it('announces navigation information to screen readers', async () => {
    const user = userEvent.setup();
    render(<RowOfCards {...defaultProps} cardsPerPage={3} />);
    
    // Check that pagination info is announced
    expect(screen.getByText('Page 1 of 3')).toBeInTheDocument();
    
    // Navigate to next page
    const nextButton = screen.getByLabelText('Go to next page');
    await user.click(nextButton);
    
    // Check that page info is updated
    expect(screen.getByText('Page 2 of 3')).toBeInTheDocument();
  });

  it('handles keyboard navigation', async () => {
    const user = userEvent.setup();
    render(<RowOfCards {...defaultProps} cardsPerPage={3} />);
    
    const nextButton = screen.getByLabelText('Go to next page');
    
    // Focus and activate with keyboard
    nextButton.focus();
    expect(nextButton).toHaveFocus();
    
    await user.keyboard('{Enter}');
    
    // Should navigate to next page
    expect(screen.queryByText('Card 1')).not.toBeInTheDocument();
    expect(screen.getByText('Card 4')).toBeInTheDocument();
  });

  it('calls onPageChange when page changes', async () => {
    const onPageChange = jest.fn();
    const user = userEvent.setup();
    render(<RowOfCards {...defaultProps} cardsPerPage={3} onPageChange={onPageChange} />);
    
    const nextButton = screen.getByLabelText('Go to next page');
    await user.click(nextButton);
    
    expect(onPageChange).toHaveBeenCalledWith(2);
  });

  it('renders with responsive grid layout', () => {
    const { container } = render(<RowOfCards {...defaultProps} />);
    
    const gridContainer = container.querySelector('.row-of-cards-grid');
    expect(gridContainer).toBeInTheDocument();
    expect(gridContainer).toHaveClass('row-of-cards-grid');
  });
});
