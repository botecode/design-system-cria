import * as React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Switch } from '../Switch';

describe('Switch', () => {
  it('renders with default props', () => {
    render(<Switch />);
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toBeInTheDocument();
    expect(switchElement).not.toBeChecked();
  });

  it('renders with label', () => {
    render(<Switch label="Test switch" />);
    expect(screen.getByText('Test switch')).toBeInTheDocument();
    expect(screen.getByLabelText('Test switch')).toBeInTheDocument();
  });

  it('renders as checked when checked prop is true', () => {
    render(<Switch checked={true} />);
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toBeChecked();
  });

  it('renders as disabled when disabled prop is true', () => {
    render(<Switch disabled={true} />);
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toBeDisabled();
  });

  it('renders as required when required prop is true', () => {
    render(<Switch required={true} label="Required switch" />);
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toBeRequired();
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('renders as read-only when readOnly prop is true', () => {
    render(<Switch readOnly={true} />);
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toHaveAttribute('readOnly');
  });

  it('renders with helper text', () => {
    render(<Switch helperText="This is helper text" />);
    expect(screen.getByText('This is helper text')).toBeInTheDocument();
  });

  it('renders with error message', () => {
    render(<Switch errorMessage="This is an error" />);
    expect(screen.getByText('This is an error')).toBeInTheDocument();
    expect(screen.getByRole('switch')).toHaveAttribute('aria-invalid', 'true');
  });

  it('renders with warning message', () => {
    render(<Switch warningMessage="This is a warning" />);
    expect(screen.getByText('This is a warning')).toBeInTheDocument();
  });

  it('calls onChange when clicked', async () => {
    const handleChange = jest.fn();
    render(<Switch onChange={handleChange} />);
    
    const switchElement = screen.getByRole('switch');
    await userEvent.click(switchElement);
    
    expect(handleChange).toHaveBeenCalledWith(true, expect.any(Object));
  });

  it('does not call onChange when disabled', async () => {
    const handleChange = jest.fn();
    render(<Switch disabled={true} onChange={handleChange} />);
    
    const switchElement = screen.getByRole('switch');
    await userEvent.click(switchElement);
    
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('does not call onChange when read-only', async () => {
    const handleChange = jest.fn();
    render(<Switch readOnly={true} onChange={handleChange} />);
    
    const switchElement = screen.getByRole('switch');
    await userEvent.click(switchElement);
    
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('calls onClick when clicked', async () => {
    const handleClick = jest.fn();
    render(<Switch onClick={handleClick} />);
    
    const switchElement = screen.getByRole('switch');
    await userEvent.click(switchElement);
    
    expect(handleClick).toHaveBeenCalled();
  });

  it('calls onFocus when focused', async () => {
    const handleFocus = jest.fn();
    render(<Switch onFocus={handleFocus} />);
    
    const switchElement = screen.getByRole('switch');
    await userEvent.tab();
    
    expect(handleFocus).toHaveBeenCalled();
  });

  it('calls onBlur when blurred', async () => {
    const handleBlur = jest.fn();
    render(<Switch onBlur={handleBlur} />);
    
    const switchElement = screen.getByRole('switch');
    switchElement.focus();
    switchElement.blur();
    
    expect(handleBlur).toHaveBeenCalled();
  });

  it('applies custom className', () => {
    render(<Switch className="custom-class" />);
    const container = screen.getByRole('switch').closest('.cria-switch');
    expect(container).toHaveClass('custom-class');
  });

  it('applies custom style', () => {
    render(<Switch style={{ backgroundColor: 'red' }} />);
    const container = screen.getByRole('switch').closest('.cria-switch');
    expect(container).toHaveStyle('background-color: rgb(255, 0, 0)');
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Switch size="sm" />);
    let container = screen.getByRole('switch').closest('.cria-switch');
    expect(container).toHaveClass('cria-switch--sm');

    rerender(<Switch size="md" />);
    container = screen.getByRole('switch').closest('.cria-switch');
    expect(container).toHaveClass('cria-switch--md');

    rerender(<Switch size="lg" />);
    container = screen.getByRole('switch').closest('.cria-switch');
    expect(container).toHaveClass('cria-switch--lg');
  });

  it('renders with different variants', () => {
    const { rerender } = render(<Switch variant="default" />);
    let container = screen.getByRole('switch').closest('.cria-switch');
    expect(container).toHaveClass('cria-switch--default');

    rerender(<Switch variant="filled" />);
    container = screen.getByRole('switch').closest('.cria-switch');
    expect(container).toHaveClass('cria-switch--filled');

    rerender(<Switch variant="outlined" />);
    container = screen.getByRole('switch').closest('.cria-switch');
    expect(container).toHaveClass('cria-switch--outlined');
  });

  it('renders with different colors', () => {
    const { rerender } = render(<Switch color="primary" />);
    let container = screen.getByRole('switch').closest('.cria-switch');
    expect(container).toHaveClass('cria-switch--primary');

    rerender(<Switch color="secondary" />);
    container = screen.getByRole('switch').closest('.cria-switch');
    expect(container).toHaveClass('cria-switch--secondary');

    rerender(<Switch color="success" />);
    container = screen.getByRole('switch').closest('.cria-switch');
    expect(container).toHaveClass('cria-switch--success');

    rerender(<Switch color="warning" />);
    container = screen.getByRole('switch').closest('.cria-switch');
    expect(container).toHaveClass('cria-switch--warning');

    rerender(<Switch color="error" />);
    container = screen.getByRole('switch').closest('.cria-switch');
    expect(container).toHaveClass('cria-switch--error');
  });

  it('applies input props', () => {
    render(<Switch inputProps={{ 'data-testid': 'custom-input' }} />);
    const switchElement = screen.getByTestId('custom-input');
    expect(switchElement).toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    render(
      <Switch 
        id="test-switch"
        name="test-name"
        value="test-value"
        helperText="Helper text"
        errorMessage="Error message"
      />
    );
    
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toHaveAttribute('id', 'test-switch');
    expect(switchElement).toHaveAttribute('name', 'test-name');
    expect(switchElement).toHaveAttribute('value', 'test-value');
    expect(switchElement).toHaveAttribute('aria-describedby');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<any>();
    render(<Switch ref={ref} />);
    expect(ref.current).toBeDefined();
    expect(typeof ref.current.focus).toBe('function');
    expect(typeof ref.current.blur).toBe('function');
  });

  it('can be focused with keyboard', async () => {
    render(<Switch />);
    
    const switchElement = screen.getByRole('switch');
    switchElement.focus();
    
    expect(switchElement).toHaveFocus();
  });

  it('renders with all states combined', () => {
    render(
      <Switch
        checked={true}
        disabled={false}
        required={true}
        readOnly={false}
        label="Complex switch"
        helperText="Helper text"
        size="lg"
        variant="filled"
        color="success"
        className="custom-class"
      />
    );
    
    const switchElement = screen.getByRole('switch');
    const container = switchElement.closest('.cria-switch');
    
    expect(switchElement).toBeChecked();
    expect(switchElement).toBeRequired();
    expect(container).toHaveClass('cria-switch--checked');
    expect(container).toHaveClass('cria-switch--required');
    expect(container).toHaveClass('cria-switch--lg');
    expect(container).toHaveClass('cria-switch--filled');
    expect(container).toHaveClass('cria-switch--success');
    expect(container).toHaveClass('custom-class');
    expect(screen.getByText('Complex switch')).toBeInTheDocument();
    expect(screen.getByText('Helper text')).toBeInTheDocument();
  });
});
