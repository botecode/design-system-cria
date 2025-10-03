import * as React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Checkbox } from '../Checkbox';

describe('Checkbox - TDD Tests', () => {
  describe('Basic Rendering', () => {
    it('renders with correct label', () => {
      render(<Checkbox label="Test Checkbox" />);
      
      const checkbox = screen.getByRole('checkbox');
      const label = screen.getByText('Test Checkbox');
      
      expect(checkbox).toBeInTheDocument();
      expect(label).toBeInTheDocument();
      expect(checkbox).toHaveAttribute('aria-label', 'Test Checkbox');
    });

    it('renders without label', () => {
      render(<Checkbox />);
      
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeInTheDocument();
    });
  });

  describe('State Management', () => {
    it('toggles checked/unchecked state on click', async () => {
      const user = userEvent.setup();
      render(<Checkbox label="Test Checkbox" />);
      
      const checkbox = screen.getByRole('checkbox');
      
      // Initially unchecked
      expect(checkbox).not.toBeChecked();
      
      // Click to check
      await user.click(checkbox);
      expect(checkbox).toBeChecked();
      
      // Click to uncheck
      await user.click(checkbox);
      expect(checkbox).not.toBeChecked();
    });

    it('supports controlled checked state', () => {
      const { rerender } = render(<Checkbox label="Test Checkbox" checked={false} />);
      
      let checkbox = screen.getByRole('checkbox');
      expect(checkbox).not.toBeChecked();
      
      rerender(<Checkbox label="Test Checkbox" checked={true} />);
      checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeChecked();
    });

    it('supports disabled state', () => {
      render(<Checkbox label="Test Checkbox" disabled />);
      
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeDisabled();
    });

    it('does not toggle when disabled', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();
      
      render(<Checkbox label="Test Checkbox" disabled onChange={handleChange} />);
      
      const checkbox = screen.getByRole('checkbox');
      
      await user.click(checkbox);
      expect(handleChange).not.toHaveBeenCalled();
      expect(checkbox).not.toBeChecked();
    });
  });

  describe('Event Handling', () => {
    it('emits onChange event', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();
      
      render(<Checkbox label="Test Checkbox" onChange={handleChange} />);
      
      const checkbox = screen.getByRole('checkbox');
      
      await user.click(checkbox);
      
      expect(handleChange).toHaveBeenCalledWith(true, expect.any(Object));
      
      await user.click(checkbox);
      
      expect(handleChange).toHaveBeenCalledWith(false, expect.any(Object));
    });

    it('calls onClick handler', async () => {
      const user = userEvent.setup();
      const handleClick = jest.fn();
      
      render(<Checkbox label="Test Checkbox" onClick={handleClick} />);
      
      const checkbox = screen.getByRole('checkbox');
      
      await user.click(checkbox);
      
      expect(handleClick).toHaveBeenCalled();
    });
  });

  describe('Accessibility', () => {
    it('has correct role="checkbox"', () => {
      render(<Checkbox label="Test Checkbox" />);
      
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeInTheDocument();
    });

    it('has correct aria-checked attribute', () => {
      const { rerender } = render(<Checkbox label="Test Checkbox" checked={false} />);
      
      let checkbox = screen.getByRole('checkbox');
      expect(checkbox).toHaveAttribute('aria-checked', 'false');
      
      rerender(<Checkbox label="Test Checkbox" checked={true} />);
      checkbox = screen.getByRole('checkbox');
      expect(checkbox).toHaveAttribute('aria-checked', 'true');
    });

    it('supports keyboard toggle with space key', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();
      
      render(<Checkbox label="Test Checkbox" onChange={handleChange} />);
      
      const checkbox = screen.getByRole('checkbox');
      checkbox.focus();
      
      // Press space key
      await user.keyboard(' ');
      
      expect(handleChange).toHaveBeenCalledWith(true, expect.any(Object));
    });

    it('supports keyboard toggle with enter key', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();
      
      render(<Checkbox label="Test Checkbox" onChange={handleChange} />);
      
      const checkbox = screen.getByRole('checkbox');
      checkbox.focus();
      
      // Press enter key
      await user.keyboard('{Enter}');
      
      expect(handleChange).toHaveBeenCalledWith(true, expect.any(Object));
    });

    it('can be focused with keyboard navigation', async () => {
      const user = userEvent.setup();
      
      render(<Checkbox label="Test Checkbox" />);
      
      const checkbox = screen.getByRole('checkbox');
      
      await user.tab();
      
      expect(checkbox).toHaveFocus();
    });

    it('has proper label association', () => {
      render(<Checkbox label="Test Checkbox" id="test-checkbox" />);
      
      const checkbox = screen.getByRole('checkbox');
      const label = screen.getByText('Test Checkbox').closest('label');
      
      expect(checkbox).toHaveAttribute('id', 'test-checkbox');
      expect(label).toHaveAttribute('for', 'test-checkbox');
    });

    it('supports aria-describedby for helper text', () => {
      render(
        <Checkbox 
          label="Test Checkbox" 
          helperText="This is helper text"
          id="test-checkbox"
        />
      );
      
      const checkbox = screen.getByRole('checkbox');
      const helperText = screen.getByText('This is helper text');
      
      expect(checkbox).toHaveAttribute('aria-describedby', 'test-checkbox-helper');
      expect(helperText).toHaveAttribute('id', 'test-checkbox-helper');
    });

    it('supports aria-invalid for error state', () => {
      render(<Checkbox label="Test Checkbox" errorMessage="This is an error" />);
      
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toHaveAttribute('aria-invalid', 'true');
    });
  });

  describe('Indeterminate State', () => {
    it('supports indeterminate state', () => {
      render(<Checkbox label="Test Checkbox" indeterminate />);
      
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toHaveAttribute('aria-checked', 'mixed');
    });

    it('handles indeterminate to checked transition', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();
      
      render(<Checkbox label="Test Checkbox" indeterminate onChange={handleChange} />);
      
      const checkbox = screen.getByRole('checkbox');
      
      await user.click(checkbox);
      
      expect(handleChange).toHaveBeenCalledWith(true, expect.any(Object));
    });
  });

  describe('Form Integration', () => {
    it('supports name and value attributes', () => {
      render(<Checkbox label="Test Checkbox" name="test-field" value="test-value" />);
      
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toHaveAttribute('name', 'test-field');
      expect(checkbox).toHaveAttribute('value', 'test-value');
    });

    it('supports required attribute', () => {
      render(<Checkbox label="Test Checkbox" required />);
      
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeRequired();
    });
  });

  describe('Visual States', () => {
    it('applies custom className', () => {
      render(<Checkbox label="Test Checkbox" className="custom-class" />);
      
      const container = screen.getByRole('checkbox').closest('.cria-checkbox');
      expect(container).toHaveClass('custom-class');
    });

    it('applies custom styles', () => {
      render(<Checkbox label="Test Checkbox" style={{ backgroundColor: 'red' }} />);
      
      const container = screen.getByRole('checkbox').closest('.cria-checkbox');
      expect(container).toHaveStyle('background-color: rgb(255, 0, 0)');
    });

    it('shows error message when provided', () => {
      render(<Checkbox label="Test Checkbox" errorMessage="This is an error" />);
      
      expect(screen.getByText('This is an error')).toBeInTheDocument();
    });

    it('shows helper text when provided', () => {
      render(<Checkbox label="Test Checkbox" helperText="This is helper text" />);
      
      expect(screen.getByText('This is helper text')).toBeInTheDocument();
    });
  });
});
