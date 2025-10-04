import React, { useState } from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Textarea, TextareaRef } from '../Textarea';

describe('Textarea', () => {
  const defaultProps = {
    label: 'Test Label',
    placeholder: 'Enter your message...',
    name: 'test-textarea',
  };

  it('renders textarea with proper structure', () => {
    render(<Textarea {...defaultProps} />);
    
    const textarea = screen.getByRole('textbox', { name: /test label/i });
    const label = screen.getByText(/test label/i);
    
    expect(textarea).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(textarea).toHaveAttribute('placeholder', 'Enter your message...');
    expect(textarea).toHaveAttribute('name', 'test-textarea');
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Textarea {...defaultProps} size="sm" />);
    expect(screen.getByRole('textbox')).toHaveClass('cria-textarea--sm');
    
    rerender(<Textarea {...defaultProps} size="md" />);
    expect(screen.getByRole('textbox')).toHaveClass('cria-textarea--md');
    
    rerender(<Textarea {...defaultProps} size="lg" />);
    expect(screen.getByRole('textbox')).toHaveClass('cria-textarea--lg');
  });

  it('renders with different variants', () => {
    const { rerender } = render(<Textarea {...defaultProps} variant="default" />);
    expect(screen.getByRole('textbox')).toHaveClass('cria-textarea--default');
    
    rerender(<Textarea {...defaultProps} variant="filled" />);
    expect(screen.getByRole('textbox')).toHaveClass('cria-textarea--filled');
    
    rerender(<Textarea {...defaultProps} variant="outlined" />);
    expect(screen.getByRole('textbox')).toHaveClass('cria-textarea--outlined');
    
    rerender(<Textarea {...defaultProps} variant="underlined" />);
    expect(screen.getByRole('textbox')).toHaveClass('cria-textarea--underlined');
  });

  it('handles different states correctly', () => {
    const { rerender } = render(<Textarea {...defaultProps} state="success" />);
    expect(screen.getByRole('textbox')).toHaveClass('cria-textarea--success');
    
    rerender(<Textarea {...defaultProps} state="warning" />);
    expect(screen.getByRole('textbox')).toHaveClass('cria-textarea--warning');
    
    rerender(<Textarea {...defaultProps} state="error" />);
    expect(screen.getByRole('textbox')).toHaveClass('cria-textarea--error');
  });

  it('handles disabled state', () => {
    render(<Textarea {...defaultProps} disabled />);
    
    const textarea = screen.getByRole('textbox');
    expect(textarea).toBeDisabled();
    expect(textarea).toHaveClass('cria-textarea--disabled');
  });

  it('handles read-only state', () => {
    render(<Textarea {...defaultProps} readOnly />);
    
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('readonly');
    expect(textarea).toHaveClass('cria-textarea--readonly');
  });

  it('handles required state', () => {
    render(<Textarea {...defaultProps} required />);
    
    const textarea = screen.getByRole('textbox');
    const label = screen.getByText(/test label/i);
    
    expect(textarea).toBeRequired();
    expect(label).toHaveTextContent('*');
  });

  it('displays helper text', () => {
    render(<Textarea {...defaultProps} helperText="This is helper text" />);
    
    expect(screen.getByText('This is helper text')).toBeInTheDocument();
  });

  it('displays error message with proper styling', () => {
    render(<Textarea {...defaultProps} errorMessage="This field is required" />);
    
    const errorMessage = screen.getByText('This field is required');
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveClass('cria-textarea__error-message');
  });

  it('displays success message', () => {
    render(<Textarea {...defaultProps} successMessage="Looks good!" />);
    
    const successMessage = screen.getByText('Looks good!');
    expect(successMessage).toBeInTheDocument();
    expect(successMessage).toHaveClass('cria-textarea__success-message');
  });

  it('displays warning message', () => {
    render(<Textarea {...defaultProps} warningMessage="Please review" />);
    
    const warningMessage = screen.getByText('Please review');
    expect(warningMessage).toBeInTheDocument();
    expect(warningMessage).toHaveClass('cria-textarea__warning-message');
  });

  it('handles value changes', async () => {
    const handleChange = jest.fn();
    render(<Textarea {...defaultProps} onChange={handleChange} />);
    
    const textarea = screen.getByRole('textbox');
    await userEvent.type(textarea, 'Hello world');
    
    expect(handleChange).toHaveBeenCalled();
    expect(textarea).toHaveValue('Hello world');
  });

  it('handles focus and blur events', () => {
    const handleFocus = jest.fn();
    const handleBlur = jest.fn();
    render(<Textarea {...defaultProps} onFocus={handleFocus} onBlur={handleBlur} />);
    
    const textarea = screen.getByRole('textbox');
    
    fireEvent.focus(textarea);
    expect(handleFocus).toHaveBeenCalled();
    expect(textarea).toHaveClass('cria-textarea--focused');
    
    fireEvent.blur(textarea);
    expect(handleBlur).toHaveBeenCalled();
  });

  it('handles controlled value', () => {
    const { rerender } = render(<Textarea {...defaultProps} value="Initial value" />);
    
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveValue('Initial value');
    
    rerender(<Textarea {...defaultProps} value="Updated value" />);
    expect(textarea).toHaveValue('Updated value');
  });

  it('handles uncontrolled value with defaultValue', () => {
    render(<Textarea {...defaultProps} defaultValue="Default value" />);
    
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveValue('Default value');
  });

  it('shows character count when enabled', () => {
    render(<Textarea {...defaultProps} showCharacterCount maxLength={100} />);
    
    expect(screen.getByText('0/100')).toBeInTheDocument();
  });

  it('updates character count when typing', async () => {
    const TestComponent = () => {
      const [value, setValue] = useState('');
      return (
        <Textarea 
          {...defaultProps} 
          value={value}
          onChange={(e) => setValue(e.target.value)}
          showCharacterCount 
          maxLength={100} 
        />
      );
    };
    
    render(<TestComponent />);
    
    const textarea = screen.getByRole('textbox');
    await userEvent.type(textarea, 'Hello');
    
    // Check that the character count updates
    const characterCountElement = screen.getByText('5/100');
    expect(characterCountElement).toBeInTheDocument();
  });

  it('respects maxLength attribute', () => {
    render(<Textarea {...defaultProps} maxLength={10} />);
    
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('maxlength', '10');
  });

  it('handles resize property', () => {
    const { rerender } = render(<Textarea {...defaultProps} resize="vertical" />);
    expect(screen.getByRole('textbox')).toHaveStyle({ resize: 'vertical' });
    
    rerender(<Textarea {...defaultProps} resize="horizontal" />);
    expect(screen.getByRole('textbox')).toHaveStyle({ resize: 'horizontal' });
    
    rerender(<Textarea {...defaultProps} resize="both" />);
    expect(screen.getByRole('textbox')).toHaveStyle({ resize: 'both' });
    
    rerender(<Textarea {...defaultProps} resize="none" />);
    expect(screen.getByRole('textbox')).toHaveStyle({ resize: 'none' });
  });

  it('applies custom className and styles', () => {
    render(
      <Textarea 
        {...defaultProps} 
        className="custom-class"
        style={{ backgroundColor: 'red' }}
      />
    );
    
    const container = screen.getByRole('textbox').closest('.cria-textarea-container');
    expect(container).toHaveClass('custom-class');
    // Check if the style attribute is present (even if CSS overrides it)
    expect(container).toHaveAttribute('style');
    expect(container?.getAttribute('style')).toContain('background-color: red');
  });

  // Accessibility tests
  it('has proper accessibility attributes', () => {
    render(<Textarea {...defaultProps} required />);
    
    const textarea = screen.getByRole('textbox');
    const label = screen.getByText(/test label/i);
    
    expect(textarea).toHaveAttribute('aria-required', 'true');
    // Check that the label has a for attribute that matches the textarea id
    const textareaId = textarea.getAttribute('id');
    const labelElement = label.closest('label');
    const labelFor = labelElement?.getAttribute('for');
    expect(labelFor).toBe(textareaId);
  });

  it('associates error message with textarea', () => {
    render(<Textarea {...defaultProps} errorMessage="Error message" />);
    
    const textarea = screen.getByRole('textbox');
    const errorMessage = screen.getByText('Error message');
    
    expect(textarea).toHaveAttribute('aria-describedby');
    expect(errorMessage).toHaveAttribute('id');
    expect(textarea.getAttribute('aria-describedby')).toContain(errorMessage.getAttribute('id'));
  });

  it('supports keyboard navigation', async () => {
    render(<Textarea {...defaultProps} />);
    
    const textarea = screen.getByRole('textbox');
    
    // Tab to focus
    await userEvent.tab();
    expect(textarea).toHaveFocus();
    
    // Type content
    await userEvent.type(textarea, 'Test content');
    expect(textarea).toHaveValue('Test content');
  });

  it('handles auto-resize when enabled', async () => {
    render(<Textarea {...defaultProps} autoResize />);
    
    const textarea = screen.getByRole('textbox') as HTMLTextAreaElement;
    
    // Simulate typing multiple lines
    fireEvent.input(textarea, { 
      target: { value: 'Line 1\nLine 2\nLine 3' }
    });
    
    await waitFor(() => {
      expect(textarea.style.height).not.toBe('');
    });
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<TextareaRef>();
    render(<Textarea {...defaultProps} ref={ref} />);
    
    expect(ref.current).toBeDefined();
    expect(ref.current).toHaveProperty('focus');
    expect(ref.current).toHaveProperty('blur');
    expect(ref.current).toHaveProperty('select');
    expect(ref.current).toHaveProperty('getValue');
    expect(ref.current).toHaveProperty('setValue');
  });

  it('handles custom rows and cols', () => {
    render(<Textarea {...defaultProps} rows={5} cols={50} />);
    
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('rows', '5');
    expect(textarea).toHaveAttribute('cols', '50');
  });
});
