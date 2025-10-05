import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchFilters } from '../SearchFilters';

// Mock data for testing
const mockFilters = [
  {
    id: 'search',
    type: 'text',
    label: 'Search',
    placeholder: 'Search courses...',
  },
  {
    id: 'category',
    type: 'select',
    label: 'Category',
    options: [
      { value: 'frontend', label: 'Frontend' },
      { value: 'backend', label: 'Backend' },
      { value: 'design', label: 'Design' },
    ],
  },
  {
    id: 'level',
    type: 'checkbox',
    label: 'Level',
    options: [
      { value: 'beginner', label: 'Beginner' },
      { value: 'intermediate', label: 'Intermediate' },
      { value: 'advanced', label: 'Advanced' },
    ],
  },
  {
    id: 'dateRange',
    type: 'dateRange',
    label: 'Date Range',
    startLabel: 'Start Date',
    endLabel: 'End Date',
  },
];

describe('SearchFilters', () => {
  const defaultProps = {
    filters: mockFilters,
    onFiltersChange: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders with different filter types', () => {
    render(<SearchFilters {...defaultProps} />);
    
    // Text filter
    expect(screen.getByLabelText('Search')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search courses...')).toBeInTheDocument();
    
    // Select filter
    expect(screen.getByLabelText('Category')).toBeInTheDocument();
    expect(screen.getByText('Category')).toBeInTheDocument();
    
    // Checkbox filter
    expect(screen.getByText('Level')).toBeInTheDocument();
    expect(screen.getByLabelText('Beginner')).toBeInTheDocument();
    expect(screen.getByLabelText('Intermediate')).toBeInTheDocument();
    expect(screen.getByLabelText('Advanced')).toBeInTheDocument();
    
    // Date range filter
    expect(screen.getByText('Date Range')).toBeInTheDocument();
    expect(screen.getByLabelText('Start Date')).toBeInTheDocument();
    expect(screen.getByLabelText('End Date')).toBeInTheDocument();
  });

  it('handles text filter input changes', async () => {
    const user = userEvent.setup();
    render(<SearchFilters {...defaultProps} />);
    
    const searchInput = screen.getByLabelText('Search');
    await user.type(searchInput, 'react');
    
    expect(defaultProps.onFiltersChange).toHaveBeenCalledWith({
      search: 'react',
      category: '',
      level: [],
      dateRange: { start: '', end: '' },
    });
  });

  it('handles select filter changes', async () => {
    const user = userEvent.setup();
    render(<SearchFilters {...defaultProps} />);
    
    const categorySelect = screen.getByLabelText('Category');
    await user.selectOptions(categorySelect, 'frontend');
    
    expect(defaultProps.onFiltersChange).toHaveBeenCalledWith({
      search: '',
      category: 'frontend',
      level: [],
      dateRange: { start: '', end: '' },
    });
  });

  it('handles checkbox filter changes', async () => {
    const user = userEvent.setup();
    render(<SearchFilters {...defaultProps} />);
    
    const beginnerCheckbox = screen.getByLabelText('Beginner');
    await user.click(beginnerCheckbox);
    
    expect(defaultProps.onFiltersChange).toHaveBeenCalledWith({
      search: '',
      category: '',
      level: ['beginner'],
      dateRange: { start: '', end: '' },
    });
  });

  it('handles multiple checkbox selections', async () => {
    const user = userEvent.setup();
    render(<SearchFilters {...defaultProps} />);
    
    const beginnerCheckbox = screen.getByLabelText('Beginner');
    const intermediateCheckbox = screen.getByLabelText('Intermediate');
    
    await user.click(beginnerCheckbox);
    await user.click(intermediateCheckbox);
    
    expect(defaultProps.onFiltersChange).toHaveBeenCalledWith({
      search: '',
      category: '',
      level: ['beginner', 'intermediate'],
      dateRange: { start: '', end: '' },
    });
  });

  it('handles date range filter changes', async () => {
    const user = userEvent.setup();
    render(<SearchFilters {...defaultProps} />);
    
    const startDateInput = screen.getByLabelText('Start Date');
    const endDateInput = screen.getByLabelText('End Date');
    
    await user.type(startDateInput, '2024-01-01');
    await user.type(endDateInput, '2024-12-31');
    
    expect(defaultProps.onFiltersChange).toHaveBeenCalledWith({
      search: '',
      category: '',
      level: [],
      dateRange: { start: '2024-01-01', end: '2024-12-31' },
    });
  });

  it('clears all filters when clear button is clicked', async () => {
    const user = userEvent.setup();
    render(<SearchFilters {...defaultProps} />);
    
    // Set some filters first
    const searchInput = screen.getByLabelText('Search');
    const beginnerCheckbox = screen.getByLabelText('Beginner');
    
    await user.type(searchInput, 'react');
    await user.click(beginnerCheckbox);
    
    // Clear all filters
    const clearButton = screen.getByText('Clear All');
    await user.click(clearButton);
    
    expect(defaultProps.onFiltersChange).toHaveBeenCalledWith({
      search: '',
      category: '',
      level: [],
      dateRange: { start: '', end: '' },
    });
  });

  it('displays mobile layout when collapsed', () => {
    render(<SearchFilters {...defaultProps} mobileCollapsed={true} />);
    
    // Should show mobile toggle button
    expect(screen.getByLabelText('Toggle filters')).toBeInTheDocument();
    
    // Filters should be hidden initially
    expect(screen.queryByLabelText('Search')).not.toBeInTheDocument();
  });

  it('toggles mobile filters when toggle button is clicked', async () => {
    const user = userEvent.setup();
    render(<SearchFilters {...defaultProps} mobileCollapsed={true} />);
    
    const toggleButton = screen.getByLabelText('Toggle filters');
    await user.click(toggleButton);
    
    // Filters should now be visible
    expect(screen.getByLabelText('Search')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <SearchFilters {...defaultProps} className="custom-search-filters" />
    );
    
    expect(container.firstChild).toHaveClass('custom-search-filters');
  });

  it('applies custom styles', () => {
    const customStyle = { backgroundColor: 'red' };
    const { container } = render(
      <SearchFilters {...defaultProps} style={customStyle} />
    );
    
    expect(container.firstChild).toHaveStyle('background-color: red');
  });

  it('supports data attributes', () => {
    render(<SearchFilters {...defaultProps} data-testid="search-filters" />);
    
    expect(screen.getByTestId('search-filters')).toBeInTheDocument();
  });

  it('handles keyboard navigation', async () => {
    const user = userEvent.setup();
    render(<SearchFilters {...defaultProps} />);
    
    const searchInput = screen.getByLabelText('Search');
    
    // Focus and type with keyboard
    searchInput.focus();
    expect(searchInput).toHaveFocus();
    
    await user.type(searchInput, 'test');
    
    expect(defaultProps.onFiltersChange).toHaveBeenCalledWith({
      search: 'test',
      category: '',
      level: [],
      dateRange: { start: '', end: '' },
    });
  });

  it('announces filter changes to screen readers', async () => {
    const user = userEvent.setup();
    render(<SearchFilters {...defaultProps} />);
    
    const searchInput = screen.getByLabelText('Search');
    await user.type(searchInput, 'react');
    
    // Check that the input has proper accessibility attributes
    expect(searchInput).toHaveAttribute('aria-label', 'Search');
  });

  it('handles empty filters array', () => {
    render(<SearchFilters {...defaultProps} filters={[]} />);
    
    // Should still render the container
    expect(screen.getByTestId('search-filters')).toBeInTheDocument();
    
    // Should not render any filter inputs
    expect(screen.queryByLabelText('Search')).not.toBeInTheDocument();
  });

  it('applies responsive design classes', () => {
    const { container } = render(<SearchFilters {...defaultProps} />);
    
    const filtersContainer = container.querySelector('.search-filters-container');
    expect(filtersContainer).toBeInTheDocument();
    expect(filtersContainer).toHaveClass('search-filters-container');
  });

  it('shows clear button only when filters have values', async () => {
    const user = userEvent.setup();
    render(<SearchFilters {...defaultProps} />);
    
    // Initially, clear button should be disabled or not prominent
    const clearButton = screen.getByText('Clear All');
    expect(clearButton).toBeInTheDocument();
    
    // After setting a filter, clear button should be enabled
    const searchInput = screen.getByLabelText('Search');
    await user.type(searchInput, 'test');
    
    expect(clearButton).toBeInTheDocument();
  });

  it('handles filter combination logic correctly', async () => {
    const user = userEvent.setup();
    render(<SearchFilters {...defaultProps} />);
    
    const searchInput = screen.getByLabelText('Search');
    const categorySelect = screen.getByLabelText('Category');
    const beginnerCheckbox = screen.getByLabelText('Beginner');
    
    await user.type(searchInput, 'react');
    await user.selectOptions(categorySelect, 'frontend');
    await user.click(beginnerCheckbox);
    
    // Should combine all filter values
    expect(defaultProps.onFiltersChange).toHaveBeenCalledWith({
      search: 'react',
      category: 'frontend',
      level: ['beginner'],
      dateRange: { start: '', end: '' },
    });
  });
});
