import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FilterDropdown, FilterOption } from '../FilterDropdown';

const mockOptions: FilterOption[] = [
  { value: 'all', label: 'All Categories' },
  { value: 'programming', label: 'Programming' },
  { value: 'design', label: 'Design' },
  { value: 'business', label: 'Business' },
];

const defaultProps = {
  label: 'Category',
  options: mockOptions,
  onChange: jest.fn(),
};

describe('FilterDropdown', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders with label and placeholder', () => {
    render(<FilterDropdown {...defaultProps} placeholder="Select category" />);
    
    expect(screen.getByText('Category')).toBeInTheDocument();
    expect(screen.getByText('Select category')).toBeInTheDocument();
  });

  it('shows selected option when value is provided', () => {
    render(<FilterDropdown {...defaultProps} value="programming" />);
    
    expect(screen.getByText('Programming')).toBeInTheDocument();
  });

  it('opens dropdown when trigger is clicked', async () => {
    render(<FilterDropdown {...defaultProps} />);
    
    const trigger = screen.getByRole('button');
    fireEvent.click(trigger);
    
    await waitFor(() => {
      expect(screen.getByRole('listbox')).toBeInTheDocument();
    });
    
    mockOptions.forEach(option => {
      expect(screen.getByText(option.label)).toBeInTheDocument();
    });
  });

  it('closes dropdown when clicking outside', async () => {
    render(<FilterDropdown {...defaultProps} />);
    
    const trigger = screen.getByRole('button');
    fireEvent.click(trigger);
    
    await waitFor(() => {
      expect(screen.getByRole('listbox')).toBeInTheDocument();
    });
    
    fireEvent.click(document.body);
    
    await waitFor(() => {
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });
  });

  it('calls onChange when option is selected', async () => {
    const onChange = jest.fn();
    render(<FilterDropdown {...defaultProps} onChange={onChange} />);
    
    const trigger = screen.getByRole('button');
    fireEvent.click(trigger);
    
    await waitFor(() => {
      expect(screen.getByRole('listbox')).toBeInTheDocument();
    });
    
    const programmingOption = screen.getByText('Programming');
    fireEvent.click(programmingOption);
    
    expect(onChange).toHaveBeenCalledWith('programming');
  });

  it('shows checkmark for selected option', async () => {
    render(<FilterDropdown {...defaultProps} value="design" />);
    
    const trigger = screen.getByRole('button');
    fireEvent.click(trigger);
    
    await waitFor(() => {
      const designOption = screen.getByRole('option', { name: /design/i });
      expect(designOption).toHaveAttribute('aria-selected', 'true');
    });
  });

  it('handles keyboard navigation', async () => {
    render(<FilterDropdown {...defaultProps} />);
    
    const trigger = screen.getByRole('button');
    trigger.focus();
    
    // Press Enter to open
    fireEvent.keyDown(trigger, { key: 'Enter' });
    
    await waitFor(() => {
      expect(screen.getByRole('listbox')).toBeInTheDocument();
    });
    
    // Press Escape to close
    fireEvent.keyDown(trigger, { key: 'Escape' });
    
    await waitFor(() => {
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });
  });

  it('handles option selection with keyboard', async () => {
    const onChange = jest.fn();
    render(<FilterDropdown {...defaultProps} onChange={onChange} />);
    
    const trigger = screen.getByRole('button');
    fireEvent.click(trigger);
    
    await waitFor(() => {
      expect(screen.getByRole('listbox')).toBeInTheDocument();
    });
    
    const programmingOption = screen.getByText('Programming');
    fireEvent.keyDown(programmingOption, { key: 'Enter' });
    
    expect(onChange).toHaveBeenCalledWith('programming');
  });

  it('is disabled when disabled prop is true', () => {
    render(<FilterDropdown {...defaultProps} disabled />);
    
    const trigger = screen.getByRole('button');
    expect(trigger).toBeDisabled();
  });

  it('does not open when disabled', () => {
    render(<FilterDropdown {...defaultProps} disabled />);
    
    const trigger = screen.getByRole('button');
    fireEvent.click(trigger);
    
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('applies custom styles', () => {
    const customStyle = { backgroundColor: 'red' };
    render(<FilterDropdown {...defaultProps} style={customStyle} />);
    
    const container = screen.getByRole('button').parentElement;
    expect(container).toHaveStyle('background-color: red');
  });

  it('applies custom className', () => {
    render(<FilterDropdown {...defaultProps} className="custom-dropdown" />);
    
    const container = screen.getByRole('button').parentElement;
    expect(container).toHaveClass('custom-dropdown');
  });

  it('handles empty options array', () => {
    render(<FilterDropdown {...defaultProps} options={[]} />);
    
    const trigger = screen.getByRole('button');
    fireEvent.click(trigger);
    
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('focuses trigger after option selection', async () => {
    render(<FilterDropdown {...defaultProps} />);
    
    const trigger = screen.getByRole('button');
    fireEvent.click(trigger);
    
    await waitFor(() => {
      expect(screen.getByRole('listbox')).toBeInTheDocument();
    });
    
    const programmingOption = screen.getByText('Programming');
    fireEvent.click(programmingOption);
    
    await waitFor(() => {
      expect(trigger).toHaveFocus();
    });
  });

  it('has proper accessibility attributes', () => {
    render(<FilterDropdown {...defaultProps} />);
    
    const trigger = screen.getByRole('button');
    expect(trigger).toHaveAttribute('aria-haspopup', 'listbox');
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
    expect(trigger).toHaveAttribute('aria-label', 'Category dropdown');
  });

  it('updates accessibility attributes when opened', async () => {
    render(<FilterDropdown {...defaultProps} />);
    
    const trigger = screen.getByRole('button');
    fireEvent.click(trigger);
    
    await waitFor(() => {
      expect(trigger).toHaveAttribute('aria-expanded', 'true');
      expect(screen.getByRole('listbox')).toHaveAttribute('aria-label', 'Category options');
    });
  });
});
