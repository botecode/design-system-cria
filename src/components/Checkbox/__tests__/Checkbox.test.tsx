import * as React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Checkbox } from '../Checkbox';

describe('Checkbox', () => {
  it('renders with default props', () => {
    render(<Checkbox />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });

  it('renders with label', () => {
    render(<Checkbox label="Test checkbox" />);
    expect(screen.getByText('Test checkbox')).toBeInTheDocument();
    expect(screen.getByLabelText('Test checkbox')).toBeInTheDocument();
  });

  it('renders as checked when checked prop is true', () => {
    render(<Checkbox checked={true} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });

  it('renders as disabled when disabled prop is true', () => {
    render(<Checkbox disabled={true} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeDisabled();
  });

  it('renders as required when required prop is true', () => {
    render(<Checkbox required={true} label="Required checkbox" />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeRequired();
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('renders as read-only when readOnly prop is true', () => {
    render(<Checkbox readOnly={true} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('readOnly');
  });

  it('renders with helper text', () => {
    render(<Checkbox helperText="This is helper text" />);
    expect(screen.getByText('This is helper text')).toBeInTheDocument();
  });

  it('renders with error message', () => {
    render(<Checkbox errorMessage="This is an error" />);
    expect(screen.getByText('This is an error')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toHaveAttribute('aria-invalid', 'true');
  });

  it('renders with warning message', () => {
    render(<Checkbox warningMessage="This is a warning" />);
    expect(screen.getByText('This is a warning')).toBeInTheDocument();
  });

  it('renders in indeterminate state', () => {
    render(<Checkbox indeterminate={true} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('aria-checked', 'mixed');
  });

  it('calls onChange when clicked', async () => {
    const handleChange = jest.fn();
    render(<Checkbox onChange={handleChange} />);
    
    const checkbox = screen.getByRole('checkbox');
    await userEvent.click(checkbox);
    
    expect(handleChange).toHaveBeenCalledWith(true, expect.any(Object));
  });

  it('does not call onChange when disabled', async () => {
    const handleChange = jest.fn();
    render(<Checkbox disabled={true} onChange={handleChange} />);
    
    const checkbox = screen.getByRole('checkbox');
    await userEvent.click(checkbox);
    
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('does not call onChange when read-only', async () => {
    const handleChange = jest.fn();
    render(<Checkbox readOnly={true} onChange={handleChange} />);
    
    const checkbox = screen.getByRole('checkbox');
    await userEvent.click(checkbox);
    
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('calls onClick when clicked', async () => {
    const handleClick = jest.fn();
    render(<Checkbox onClick={handleClick} />);
    
    const checkbox = screen.getByRole('checkbox');
    await userEvent.click(checkbox);
    
    expect(handleClick).toHaveBeenCalled();
  });

  it('calls onFocus when focused', async () => {
    const handleFocus = jest.fn();
    render(<Checkbox onFocus={handleFocus} />);
    
    const checkbox = screen.getByRole('checkbox');
    await userEvent.tab();
    
    expect(handleFocus).toHaveBeenCalled();
  });

  it('calls onBlur when blurred', async () => {
    const handleBlur = jest.fn();
    render(<Checkbox onBlur={handleBlur} />);
    
    const checkbox = screen.getByRole('checkbox');
    checkbox.focus();
    checkbox.blur();
    
    expect(handleBlur).toHaveBeenCalled();
  });

  it('applies custom className', () => {
    render(<Checkbox className="custom-class" />);
    const container = screen.getByRole('checkbox').closest('.cria-checkbox');
    expect(container).toHaveClass('custom-class');
  });

  it('applies custom style', () => {
    render(<Checkbox style={{ backgroundColor: 'red' }} />);
    const container = screen.getByRole('checkbox').closest('.cria-checkbox');
    expect(container).toHaveStyle('background-color: rgb(255, 0, 0)');
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Checkbox size="sm" />);
    let container = screen.getByRole('checkbox').closest('.cria-checkbox');
    expect(container).toHaveClass('cria-checkbox--sm');

    rerender(<Checkbox size="md" />);
    container = screen.getByRole('checkbox').closest('.cria-checkbox');
    expect(container).toHaveClass('cria-checkbox--md');

    rerender(<Checkbox size="lg" />);
    container = screen.getByRole('checkbox').closest('.cria-checkbox');
    expect(container).toHaveClass('cria-checkbox--lg');
  });

  it('renders with different variants', () => {
    const { rerender } = render(<Checkbox variant="default" />);
    let container = screen.getByRole('checkbox').closest('.cria-checkbox');
    expect(container).toHaveClass('cria-checkbox--default');

    rerender(<Checkbox variant="filled" />);
    container = screen.getByRole('checkbox').closest('.cria-checkbox');
    expect(container).toHaveClass('cria-checkbox--filled');

    rerender(<Checkbox variant="outlined" />);
    container = screen.getByRole('checkbox').closest('.cria-checkbox');
    expect(container).toHaveClass('cria-checkbox--outlined');
  });

  it('renders with different colors', () => {
    const { rerender } = render(<Checkbox color="primary" />);
    let container = screen.getByRole('checkbox').closest('.cria-checkbox');
    expect(container).toHaveClass('cria-checkbox--primary');

    rerender(<Checkbox color="secondary" />);
    container = screen.getByRole('checkbox').closest('.cria-checkbox');
    expect(container).toHaveClass('cria-checkbox--secondary');

    rerender(<Checkbox color="success" />);
    container = screen.getByRole('checkbox').closest('.cria-checkbox');
    expect(container).toHaveClass('cria-checkbox--success');

    rerender(<Checkbox color="warning" />);
    container = screen.getByRole('checkbox').closest('.cria-checkbox');
    expect(container).toHaveClass('cria-checkbox--warning');

    rerender(<Checkbox color="error" />);
    container = screen.getByRole('checkbox').closest('.cria-checkbox');
    expect(container).toHaveClass('cria-checkbox--error');
  });

  it('applies input props', () => {
    render(<Checkbox inputProps={{ 'data-testid': 'custom-input' }} />);
    const checkbox = screen.getByTestId('custom-input');
    expect(checkbox).toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    render(
      <Checkbox 
        id="test-checkbox"
        name="test-name"
        value="test-value"
        helperText="Helper text"
        errorMessage="Error message"
      />
    );
    
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('id', 'test-checkbox');
    expect(checkbox).toHaveAttribute('name', 'test-name');
    expect(checkbox).toHaveAttribute('value', 'test-value');
    expect(checkbox).toHaveAttribute('aria-describedby');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<any>();
    render(<Checkbox ref={ref} />);
    expect(ref.current).toBeDefined();
    expect(typeof ref.current.focus).toBe('function');
    expect(typeof ref.current.blur).toBe('function');
  });

  it('can be focused with keyboard', async () => {
    render(<Checkbox />);
    
    const checkbox = screen.getByRole('checkbox');
    checkbox.focus();
    
    expect(checkbox).toHaveFocus();
  });

  it('renders with all states combined', () => {
    render(
      <Checkbox
        checked={true}
        indeterminate={false}
        disabled={false}
        required={true}
        readOnly={false}
        label="Complex checkbox"
        helperText="Helper text"
        size="lg"
        variant="filled"
        color="success"
        className="custom-class"
      />
    );
    
    const checkbox = screen.getByRole('checkbox');
    const container = checkbox.closest('.cria-checkbox');
    
    expect(checkbox).toBeChecked();
    expect(checkbox).toBeRequired();
    expect(container).toHaveClass('cria-checkbox--checked');
    expect(container).toHaveClass('cria-checkbox--required');
    expect(container).toHaveClass('cria-checkbox--lg');
    expect(container).toHaveClass('cria-checkbox--filled');
    expect(container).toHaveClass('cria-checkbox--success');
    expect(container).toHaveClass('custom-class');
    expect(screen.getByText('Complex checkbox')).toBeInTheDocument();
    expect(screen.getByText('Helper text')).toBeInTheDocument();
  });
});
