import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Pagination } from '../Pagination';

describe('Pagination', () => {
  const defaultProps = {
    currentPage: 1,
    totalPages: 10,
    onPageChange: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders pagination with proper structure', () => {
    render(<Pagination {...defaultProps} />);
    
    const pagination = screen.getByRole('navigation', { name: /pagination/i });
    expect(pagination).toBeInTheDocument();
    expect(pagination).toHaveClass('cria-pagination');
  });

  it('renders page numbers with correct active page', () => {
    render(<Pagination {...defaultProps} currentPage={3} />);
    
    // Should show page 1, 2, 3, 4, ..., 10 (based on siblingCount=1)
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('...')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
    
    // Current page should be highlighted
    const activeButton = screen.getByText('3');
    expect(activeButton).toHaveClass('cria-pagination__page--active');
    expect(activeButton).toHaveAttribute('aria-current', 'page');
  });

  it('renders previous and next buttons', () => {
    render(<Pagination {...defaultProps} />);
    
    const prevButton = screen.getByRole('button', { name: /previous/i });
    const nextButton = screen.getByRole('button', { name: /next/i });
    
    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  it('disables previous button on first page', () => {
    render(<Pagination {...defaultProps} currentPage={1} />);
    
    const prevButton = screen.getByRole('button', { name: /previous/i });
    expect(prevButton).toHaveAttribute('aria-disabled', 'true');
    expect(prevButton).toHaveClass('cria-pagination__button--disabled');
  });

  it('disables next button on last page', () => {
    render(<Pagination {...defaultProps} currentPage={10} totalPages={10} />);
    
    const nextButton = screen.getByRole('button', { name: /next/i });
    expect(nextButton).toHaveAttribute('aria-disabled', 'true');
    expect(nextButton).toHaveClass('cria-pagination__button--disabled');
  });

  it('calls onPageChange when page is clicked', () => {
    const onPageChange = jest.fn();
    render(<Pagination {...defaultProps} onPageChange={onPageChange} />);
    
    const pageButton = screen.getByText('2');
    fireEvent.click(pageButton);
    
    expect(onPageChange).toHaveBeenCalledWith(2);
  });

  it('calls onPageChange when previous button is clicked', () => {
    const onPageChange = jest.fn();
    render(<Pagination {...defaultProps} currentPage={3} onPageChange={onPageChange} />);
    
    const prevButton = screen.getByRole('button', { name: /previous/i });
    fireEvent.click(prevButton);
    
    expect(onPageChange).toHaveBeenCalledWith(2);
  });

  it('calls onPageChange when next button is clicked', () => {
    const onPageChange = jest.fn();
    render(<Pagination {...defaultProps} currentPage={3} onPageChange={onPageChange} />);
    
    const nextButton = screen.getByRole('button', { name: /next/i });
    fireEvent.click(nextButton);
    
    expect(onPageChange).toHaveBeenCalledWith(4);
  });

  it('supports keyboard navigation', async () => {
    const user = userEvent.setup();
    const onPageChange = jest.fn();
    render(<Pagination {...defaultProps} currentPage={3} onPageChange={onPageChange} />);
    
    const prevButton = screen.getByRole('button', { name: /previous/i });
    const nextButton = screen.getByRole('button', { name: /next/i });
    
    // Tab to previous button
    await user.tab();
    expect(prevButton).toHaveFocus();
    
    // Press Enter to go to previous page
    await user.keyboard('{Enter}');
    expect(onPageChange).toHaveBeenCalledWith(2);
    
    // Focus next button directly since tab order includes page numbers
    nextButton.focus();
    expect(nextButton).toHaveFocus();
    
    // Press Enter to go to next page
    await user.keyboard('{Enter}');
    expect(onPageChange).toHaveBeenCalledWith(4);
  });

  it('shows ellipsis for long ranges', () => {
    render(<Pagination {...defaultProps} currentPage={5} totalPages={20} />);
    
    const ellipsis = screen.getAllByText('...');
    expect(ellipsis.length).toBeGreaterThan(0);
  });

  it('handles single page correctly', () => {
    render(<Pagination {...defaultProps} currentPage={1} totalPages={1} />);
    
    // Should only show page 1
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.queryByText('2')).not.toBeInTheDocument();
    
    // Previous and next should be disabled
    const prevButton = screen.getByRole('button', { name: /previous/i });
    const nextButton = screen.getByRole('button', { name: /next/i });
    expect(prevButton).toHaveAttribute('aria-disabled', 'true');
    expect(nextButton).toHaveAttribute('aria-disabled', 'true');
  });

  it('handles two pages correctly', () => {
    render(<Pagination {...defaultProps} currentPage={1} totalPages={2} />);
    
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.queryByText('...')).not.toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Pagination {...defaultProps} className="custom-pagination" />);
    
    const pagination = screen.getByRole('navigation');
    expect(pagination).toHaveClass('custom-pagination');
  });

  it('applies custom styles', () => {
    render(<Pagination {...defaultProps} style={{ color: 'red' }} />);
    
    const pagination = screen.getByRole('navigation');
    expect(pagination).toHaveStyle({ color: 'rgb(255, 0, 0)' });
  });

  it('supports custom aria-label', () => {
    render(<Pagination {...defaultProps} ariaLabel="Custom pagination navigation" />);
    
    const pagination = screen.getByRole('navigation');
    expect(pagination).toHaveAttribute('aria-label', 'Custom pagination navigation');
  });

  it('supports custom button labels', () => {
    render(
      <Pagination 
        {...defaultProps} 
        previousLabel="Go Back"
        nextLabel="Go Forward"
      />
    );
    
    expect(screen.getByRole('button', { name: /go back/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /go forward/i })).toBeInTheDocument();
  });

  it('shows page size selector when enabled', () => {
    const onPageSizeChange = jest.fn();
    render(
      <Pagination 
        {...defaultProps} 
        showPageSize
        pageSize={10}
        pageSizeOptions={[5, 10, 20, 50]}
        onPageSizeChange={onPageSizeChange}
      />
    );
    
    const pageSizeSelect = screen.getByRole('combobox', { name: /items per page/i });
    expect(pageSizeSelect).toBeInTheDocument();
    expect(pageSizeSelect).toHaveValue('10');
  });

  it('calls onPageSizeChange when page size is changed', () => {
    const onPageSizeChange = jest.fn();
    render(
      <Pagination 
        {...defaultProps} 
        showPageSize
        pageSize={10}
        pageSizeOptions={[5, 10, 20, 50]}
        onPageSizeChange={onPageSizeChange}
      />
    );
    
    const pageSizeSelect = screen.getByRole('combobox', { name: /items per page/i });
    fireEvent.change(pageSizeSelect, { target: { value: '20' } });
    
    expect(onPageSizeChange).toHaveBeenCalledWith(20);
  });

  it('shows page info when enabled', () => {
    render(
      <Pagination 
        {...defaultProps} 
        showPageInfo
        currentPage={3}
        totalPages={10}
        totalItems={100}
        pageSize={10}
      />
    );
    
    expect(screen.getByText(/showing 21-30 of 100/i)).toBeInTheDocument();
  });

  it('handles edge case with currentPage greater than totalPages', () => {
    render(<Pagination {...defaultProps} currentPage={15} totalPages={10} />);
    
    // Should not crash and should handle gracefully
    expect(screen.getByText('10')).toBeInTheDocument();
  });

  it('handles edge case with totalPages of 0', () => {
    render(<Pagination {...defaultProps} totalPages={0} />);
    
    // Should not crash and should return null for 0 pages
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLElement>();
    render(<Pagination {...defaultProps} ref={ref} />);
    
    expect(ref.current).toBeInstanceOf(HTMLElement);
    expect(ref.current).toHaveClass('cria-pagination');
  });

  it('renders with proper accessibility attributes', () => {
    render(<Pagination {...defaultProps} currentPage={3} totalPages={10} />);
    
    const pagination = screen.getByRole('navigation');
    expect(pagination).toHaveAttribute('aria-label', 'Pagination');
    
    // Active page should have aria-current
    const activePage = screen.getByText('3');
    expect(activePage).toHaveAttribute('aria-current', 'page');
    
    // Disabled buttons should have aria-disabled
    const prevButton = screen.getByRole('button', { name: /previous/i });
    expect(prevButton).not.toHaveAttribute('aria-disabled', 'true'); // Not on first page
  });

  it('announces current page to screen readers', () => {
    render(<Pagination {...defaultProps} currentPage={5} totalPages={10} />);
    
    const activePage = screen.getByText('5');
    expect(activePage).toHaveAttribute('aria-current', 'page');
    expect(activePage).toHaveAttribute('aria-label', 'Page 5, current page');
  });

  it('supports compact mode', () => {
    render(<Pagination {...defaultProps} variant="compact" />);
    
    const pagination = screen.getByRole('navigation');
    expect(pagination).toHaveClass('cria-pagination--compact');
  });

  it('supports minimal mode', () => {
    render(<Pagination {...defaultProps} variant="minimal" />);
    
    const pagination = screen.getByRole('navigation');
    expect(pagination).toHaveClass('cria-pagination--minimal');
  });

  it('handles large page counts efficiently', () => {
    render(<Pagination {...defaultProps} currentPage={50} totalPages={1000} />);
    
    // Should show ellipsis and not render all 1000 pages
    const ellipsis = screen.getAllByText('...');
    expect(ellipsis.length).toBeGreaterThan(0);
    expect(screen.queryByText('1000')).toBeInTheDocument();
  });
});
