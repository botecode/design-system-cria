import * as React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Switch } from '../Switch';

describe('Switch - TDD Tests', () => {
  describe('Basic Rendering', () => {
    it('renders with correct label', () => {
      render(<Switch label="Test Switch" />);
      
      const switchElement = screen.getByRole('switch');
      const label = screen.getByText('Test Switch');
      
      expect(switchElement).toBeInTheDocument();
      expect(label).toBeInTheDocument();
      expect(switchElement).toHaveAttribute('aria-label', 'Test Switch');
    });

    it('renders without label', () => {
      render(<Switch />);
      
      const switchElement = screen.getByRole('switch');
      expect(switchElement).toBeInTheDocument();
    });
  });

  describe('State Management', () => {
    it('toggles between on/off states', async () => {
      const user = userEvent.setup();
      render(<Switch label="Test Switch" />);
      
      const switchElement = screen.getByRole('switch');
      
      // Initially off
      expect(switchElement).not.toBeChecked();
      
      // Click to turn on
      await user.click(switchElement);
      expect(switchElement).toBeChecked();
      
      // Click to turn off
      await user.click(switchElement);
      expect(switchElement).not.toBeChecked();
    });

    it('supports controlled checked state', () => {
      const { rerender } = render(<Switch label="Test Switch" checked={false} />);
      
      let switchElement = screen.getByRole('switch');
      expect(switchElement).not.toBeChecked();
      
      rerender(<Switch label="Test Switch" checked={true} />);
      switchElement = screen.getByRole('switch');
      expect(switchElement).toBeChecked();
    });

    it('respects disabled state', () => {
      render(<Switch label="Test Switch" disabled />);
      
      const switchElement = screen.getByRole('switch');
      expect(switchElement).toBeDisabled();
    });

    it('does not toggle when disabled', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();
      
      render(<Switch label="Test Switch" disabled onChange={handleChange} />);
      
      const switchElement = screen.getByRole('switch');
      
      await user.click(switchElement);
      expect(handleChange).not.toHaveBeenCalled();
      expect(switchElement).not.toBeChecked();
    });
  });

  describe('Event Handling', () => {
    it('emits onChange event', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();
      
      render(<Switch label="Test Switch" onChange={handleChange} />);
      
      const switchElement = screen.getByRole('switch');
      
      await user.click(switchElement);
      
      expect(handleChange).toHaveBeenCalledWith(true, expect.any(Object));
      
      await user.click(switchElement);
      
      expect(handleChange).toHaveBeenCalledWith(false, expect.any(Object));
    });

    it('calls onClick handler', async () => {
      const user = userEvent.setup();
      const handleClick = jest.fn();
      
      render(<Switch label="Test Switch" onClick={handleClick} />);
      
      const switchElement = screen.getByRole('switch');
      
      await user.click(switchElement);
      
      expect(handleClick).toHaveBeenCalled();
    });
  });

  describe('Accessibility', () => {
    it('has correct role="switch"', () => {
      render(<Switch label="Test Switch" />);
      
      const switchElement = screen.getByRole('switch');
      expect(switchElement).toBeInTheDocument();
    });

    it('has correct aria-checked attribute', () => {
      const { rerender } = render(<Switch label="Test Switch" checked={false} />);
      
      let switchElement = screen.getByRole('switch');
      expect(switchElement).toHaveAttribute('aria-checked', 'false');
      
      rerender(<Switch label="Test Switch" checked={true} />);
      switchElement = screen.getByRole('switch');
      expect(switchElement).toHaveAttribute('aria-checked', 'true');
    });

    it('supports keyboard toggle with space key', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();
      
      render(<Switch label="Test Switch" onChange={handleChange} />);
      
      const switchElement = screen.getByRole('switch');
      switchElement.focus();
      
      // Press space key
      await user.keyboard(' ');
      
      expect(handleChange).toHaveBeenCalledWith(true, expect.any(Object));
    });

    it('supports keyboard toggle with enter key', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();
      
      render(<Switch label="Test Switch" onChange={handleChange} />);
      
      const switchElement = screen.getByRole('switch');
      switchElement.focus();
      
      // Press enter key
      await user.keyboard('{Enter}');
      
      expect(handleChange).toHaveBeenCalledWith(true, expect.any(Object));
    });

    it('can be focused with keyboard navigation', async () => {
      const user = userEvent.setup();
      
      render(<Switch label="Test Switch" />);
      
      const switchElement = screen.getByRole('switch');
      
      await user.tab();
      
      expect(switchElement).toHaveFocus();
    });

    it('has proper label association', () => {
      render(<Switch label="Test Switch" id="test-switch" />);
      
      const switchElement = screen.getByRole('switch');
      const label = screen.getByText('Test Switch').closest('label');
      
      expect(switchElement).toHaveAttribute('id', 'test-switch');
      expect(label).toHaveAttribute('for', 'test-switch');
    });

    it('supports aria-describedby for helper text', () => {
      render(
        <Switch 
          label="Test Switch" 
          helperText="This is helper text"
          id="test-switch"
        />
      );
      
      const switchElement = screen.getByRole('switch');
      const helperText = screen.getByText('This is helper text');
      
      expect(switchElement).toHaveAttribute('aria-describedby', 'test-switch-helper');
      expect(helperText).toHaveAttribute('id', 'test-switch-helper');
    });

    it('supports aria-invalid for error state', () => {
      render(<Switch label="Test Switch" errorMessage="This is an error" />);
      
      const switchElement = screen.getByRole('switch');
      expect(switchElement).toHaveAttribute('aria-invalid', 'true');
    });
  });

  describe('Form Integration', () => {
    it('supports name and value attributes', () => {
      render(<Switch label="Test Switch" name="test-field" value="test-value" />);
      
      const switchElement = screen.getByRole('switch');
      expect(switchElement).toHaveAttribute('name', 'test-field');
      expect(switchElement).toHaveAttribute('value', 'test-value');
    });

    it('supports required attribute', () => {
      render(<Switch label="Test Switch" required />);
      
      const switchElement = screen.getByRole('switch');
      expect(switchElement).toBeRequired();
    });
  });

  describe('Visual States', () => {
    it('applies custom className', () => {
      render(<Switch label="Test Switch" className="custom-class" />);
      
      const container = screen.getByRole('switch').closest('.cria-switch');
      expect(container).toHaveClass('custom-class');
    });

    it('applies custom styles', () => {
      render(<Switch label="Test Switch" style={{ backgroundColor: 'red' }} />);
      
      const container = screen.getByRole('switch').closest('.cria-switch');
      expect(container).toHaveStyle('background-color: rgb(255, 0, 0)');
    });

    it('shows error message when provided', () => {
      render(<Switch label="Test Switch" errorMessage="This is an error" />);
      
      expect(screen.getByText('This is an error')).toBeInTheDocument();
    });

    it('shows helper text when provided', () => {
      render(<Switch label="Test Switch" helperText="This is helper text" />);
      
      expect(screen.getByText('This is helper text')).toBeInTheDocument();
    });
  });

  describe('Read-only State', () => {
    it('supports read-only state', () => {
      render(<Switch label="Test Switch" readOnly />);
      
      const switchElement = screen.getByRole('switch');
      expect(switchElement).toHaveAttribute('readOnly');
    });

    it('does not toggle when read-only', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();
      
      render(<Switch label="Test Switch" readOnly onChange={handleChange} />);
      
      const switchElement = screen.getByRole('switch');
      
      await user.click(switchElement);
      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  describe('Size Variants', () => {
    it('renders with small size', () => {
      render(<Switch label="Test Switch" size="sm" />);
      
      const container = screen.getByRole('switch').closest('.cria-switch');
      expect(container).toHaveClass('cria-switch--sm');
    });

    it('renders with medium size (default)', () => {
      render(<Switch label="Test Switch" size="md" />);
      
      const container = screen.getByRole('switch').closest('.cria-switch');
      expect(container).toHaveClass('cria-switch--md');
    });

    it('renders with large size', () => {
      render(<Switch label="Test Switch" size="lg" />);
      
      const container = screen.getByRole('switch').closest('.cria-switch');
      expect(container).toHaveClass('cria-switch--lg');
    });
  });

  describe('Color Variants', () => {
    it('renders with primary color (default)', () => {
      render(<Switch label="Test Switch" color="primary" />);
      
      const container = screen.getByRole('switch').closest('.cria-switch');
      expect(container).toHaveClass('cria-switch--primary');
    });

    it('renders with secondary color', () => {
      render(<Switch label="Test Switch" color="secondary" />);
      
      const container = screen.getByRole('switch').closest('.cria-switch');
      expect(container).toHaveClass('cria-switch--secondary');
    });

    it('renders with success color', () => {
      render(<Switch label="Test Switch" color="success" />);
      
      const container = screen.getByRole('switch').closest('.cria-switch');
      expect(container).toHaveClass('cria-switch--success');
    });

    it('renders with warning color', () => {
      render(<Switch label="Test Switch" color="warning" />);
      
      const container = screen.getByRole('switch').closest('.cria-switch');
      expect(container).toHaveClass('cria-switch--warning');
    });

    it('renders with error color', () => {
      render(<Switch label="Test Switch" color="error" />);
      
      const container = screen.getByRole('switch').closest('.cria-switch');
      expect(container).toHaveClass('cria-switch--error');
    });
  });
});
