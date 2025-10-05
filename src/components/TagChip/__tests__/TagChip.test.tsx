import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TagChip } from '../TagChip';
import { X, Check, Star } from 'phosphor-react';

describe('TagChip', () => {
  const mockOnClick = jest.fn();
  const mockOnRemove = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders with basic props', () => {
    render(<TagChip label="Test Tag" />);
    expect(screen.getByText('Test Tag')).toBeInTheDocument();
  });

  it('renders with different variants', () => {
    const { rerender } = render(<TagChip label="Default" variant="default" />);
    expect(screen.getByText('Default')).toBeInTheDocument();

    rerender(<TagChip label="Primary" variant="primary" />);
    expect(screen.getByText('Primary')).toBeInTheDocument();

    rerender(<TagChip label="Secondary" variant="secondary" />);
    expect(screen.getByText('Secondary')).toBeInTheDocument();

    rerender(<TagChip label="Success" variant="success" />);
    expect(screen.getByText('Success')).toBeInTheDocument();

    rerender(<TagChip label="Warning" variant="warning" />);
    expect(screen.getByText('Warning')).toBeInTheDocument();

    rerender(<TagChip label="Error" variant="error" />);
    expect(screen.getByText('Error')).toBeInTheDocument();

    rerender(<TagChip label="Info" variant="info" />);
    expect(screen.getByText('Info')).toBeInTheDocument();
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<TagChip label="Small" size="sm" />);
    expect(screen.getByText('Small')).toBeInTheDocument();

    rerender(<TagChip label="Medium" size="md" />);
    expect(screen.getByText('Medium')).toBeInTheDocument();

    rerender(<TagChip label="Large" size="lg" />);
    expect(screen.getByText('Large')).toBeInTheDocument();
  });

  it('renders with different styles', () => {
    const { rerender } = render(<TagChip label="Filled" visualStyle="filled" />);
    expect(screen.getByText('Filled')).toBeInTheDocument();

    rerender(<TagChip label="Outlined" visualStyle="outlined" />);
    expect(screen.getByText('Outlined')).toBeInTheDocument();

    rerender(<TagChip label="Soft" visualStyle="soft" />);
    expect(screen.getByText('Soft')).toBeInTheDocument();

    rerender(<TagChip label="Ghost" visualStyle="ghost" />);
    expect(screen.getByText('Ghost')).toBeInTheDocument();
  });

  it('renders with icon', () => {
    render(<TagChip label="With Icon" icon={<Star data-testid="star-icon" />} />);
    expect(screen.getByText('With Icon')).toBeInTheDocument();
    expect(screen.getByTestId('star-icon')).toBeInTheDocument();
  });

  it('renders with close button when removable', () => {
    render(<TagChip label="Removable" removable onRemove={mockOnRemove} />);
    expect(screen.getByText('Removable')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('handles click events when clickable', () => {
    render(<TagChip label="Clickable" clickable onClick={mockOnClick} />);
    const chip = screen.getByText('Clickable');
    fireEvent.click(chip);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('handles remove button click', () => {
    render(<TagChip label="Removable" removable onRemove={mockOnRemove} />);
    const removeButton = screen.getByRole('button');
    fireEvent.click(removeButton);
    expect(mockOnRemove).toHaveBeenCalledTimes(1);
  });

  it('does not trigger click when disabled', () => {
    render(<TagChip label="Disabled" clickable onClick={mockOnClick} disabled />);
    const chip = screen.getByText('Disabled');
    fireEvent.click(chip);
    expect(mockOnClick).not.toHaveBeenCalled();
  });

  it('does not trigger remove when disabled', () => {
    render(<TagChip label="Disabled" removable onRemove={mockOnRemove} disabled />);
    const removeButton = screen.getByRole('button');
    fireEvent.click(removeButton);
    expect(mockOnRemove).not.toHaveBeenCalled();
  });

  it('supports keyboard navigation when clickable', () => {
    render(<TagChip label="Clickable" clickable onClick={mockOnClick} />);
    const chip = screen.getByRole('button');
    chip.focus();
    expect(chip).toHaveFocus();
    
    fireEvent.keyDown(chip, { key: 'Enter' });
    expect(mockOnClick).toHaveBeenCalled();
    
    fireEvent.keyDown(chip, { key: ' ' });
    expect(mockOnClick).toHaveBeenCalledTimes(2);
  });

  it('supports keyboard navigation for remove button', () => {
    render(<TagChip label="Removable" removable onRemove={mockOnRemove} />);
    const removeButton = screen.getByRole('button');
    removeButton.focus();
    expect(removeButton).toHaveFocus();
    
    fireEvent.keyDown(removeButton, { key: 'Enter' });
    expect(mockOnRemove).toHaveBeenCalled();
    
    fireEvent.keyDown(removeButton, { key: ' ' });
    expect(mockOnRemove).toHaveBeenCalledTimes(2);
  });

  it('applies custom className and style', () => {
    render(
      <TagChip
        label="Custom"
        className="custom-class"
        style={{ backgroundColor: 'red' }}
      />
    );
    
    const chip = screen.getByText('Custom').closest('.tag-chip');
    expect(chip).toHaveClass('custom-class');
    expect(chip).toHaveStyle('background-color: rgb(255, 0, 0)');
  });

  it('has proper accessibility attributes', () => {
    render(<TagChip label="Accessible" clickable onClick={mockOnClick} />);
    const chip = screen.getByRole('button');
    expect(chip).toHaveAttribute('aria-label', 'Accessible');
  });

  it('has proper accessibility attributes for removable chip', () => {
    render(<TagChip label="Removable" removable onRemove={mockOnRemove} />);
    const removeButton = screen.getByRole('button');
    expect(removeButton).toHaveAttribute('aria-label', 'Remove Removable');
  });

  it('renders with loading state', () => {
    render(<TagChip label="Loading" loading />);
    expect(screen.getByText('Loading')).toBeInTheDocument();
    // Should show loading indicator
  });

  it('renders with selected state', () => {
    render(<TagChip label="Selected" selected />);
    expect(screen.getByText('Selected')).toBeInTheDocument();
    // Should have selected styling
  });

  it('renders without icon when icon is null', () => {
    render(<TagChip label="No Icon" icon={null} />);
    expect(screen.getByText('No Icon')).toBeInTheDocument();
    expect(screen.queryByTestId('star-icon')).not.toBeInTheDocument();
  });

  it('handles long labels with proper text truncation', () => {
    const longLabel = 'This is a very long tag label that should be truncated properly';
    render(<TagChip label={longLabel} />);
    expect(screen.getByText(longLabel)).toBeInTheDocument();
  });

  it('renders with custom close icon', () => {
    render(
      <TagChip 
        label="Custom Close" 
        removable 
        onRemove={mockOnRemove}
        closeIcon={<Check data-testid="custom-close" />}
      />
    );
    expect(screen.getByText('Custom Close')).toBeInTheDocument();
    expect(screen.getByTestId('custom-close')).toBeInTheDocument();
  });

  it('prevents event propagation on remove button click', () => {
    const handleParentClick = jest.fn();
    render(
      <div onClick={handleParentClick}>
        <TagChip label="Nested" removable onRemove={mockOnRemove} />
      </div>
    );
    
    const removeButton = screen.getByRole('button');
    fireEvent.click(removeButton);
    
    expect(mockOnRemove).toHaveBeenCalled();
    expect(handleParentClick).not.toHaveBeenCalled();
  });
});
