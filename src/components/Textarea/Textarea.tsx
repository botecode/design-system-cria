import React, { forwardRef, useRef, useImperativeHandle, useCallback, useEffect } from 'react';
import { Typography } from '../Typography';
import { Check, WarningCircle } from 'phosphor-react';

export interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  /**
   * Textarea label
   */
  label?: string;
  
  /**
   * Textarea placeholder
   */
  placeholder?: string;
  
  /**
   * Textarea size
   */
  size?: 'sm' | 'md' | 'lg';
  
  /**
   * Textarea variant
   */
  variant?: 'default' | 'filled' | 'outlined' | 'underlined';
  
  /**
   * Textarea state
   */
  state?: 'default' | 'success' | 'warning' | 'error';
  
  /**
   * Whether the textarea is disabled
   */
  disabled?: boolean;
  
  /**
   * Whether the textarea is required
   */
  required?: boolean;
  
  /**
   * Whether the textarea is read-only
   */
  readOnly?: boolean;
  
  /**
   * Whether to show character count
   */
  showCharacterCount?: boolean;
  
  /**
   * Maximum character count
   */
  maxLength?: number;
  
  /**
   * Helper text
   */
  helperText?: string;
  
  /**
   * Error message
   */
  errorMessage?: string;
  
  /**
   * Success message
   */
  successMessage?: string;
  
  /**
   * Warning message
   */
  warningMessage?: string;
  
  /**
   * Whether to enable auto-resize
   */
  autoResize?: boolean;
  
  /**
   * Resize behavior
   */
  resize?: 'none' | 'both' | 'horizontal' | 'vertical';
  
  /**
   * Custom class name for the textarea container
   */
  className?: string;
  
  /**
   * Custom styles for the textarea container
   */
  style?: React.CSSProperties;
  
  /**
   * Callback fired when the textarea value changes
   */
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  
  /**
   * Callback fired when the textarea is focused
   */
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  
  /**
   * Callback fired when the textarea is blurred
   */
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
}

export interface TextareaRef {
  focus: () => void;
  blur: () => void;
  select: () => void;
  getValue: () => string;
  setValue: (value: string) => void;
}

/**
 * Textarea component for multi-line text input with various states and features
 */
export const Textarea = forwardRef<TextareaRef, TextareaProps>(({
  label,
  placeholder,
  size = 'md',
  variant = 'default',
  state = 'default',
  disabled = false,
  required = false,
  readOnly = false,
  showCharacterCount = false,
  maxLength,
  helperText,
  errorMessage,
  successMessage,
  warningMessage,
  autoResize = false,
  resize = 'vertical',
  className = '',
  style,
  onChange,
  onFocus,
  onBlur,
  value,
  defaultValue,
  rows = 4,
  cols,
  ...props
}, ref) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isFocused, setIsFocused] = React.useState(false);
  
  // Expose methods to parent component
  useImperativeHandle(ref, () => ({
    focus: () => textareaRef.current?.focus(),
    blur: () => textareaRef.current?.blur(),
    select: () => textareaRef.current?.select(),
    getValue: () => textareaRef.current?.value || '',
    setValue: (newValue: string) => {
      if (textareaRef.current) {
        textareaRef.current.value = newValue;
        if (autoResize) {
          adjustHeight();
        }
      }
    },
  }));
  
  // Auto-resize functionality
  const adjustHeight = useCallback(() => {
    if (textareaRef.current && autoResize) {
      const textarea = textareaRef.current;
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [autoResize]);
  
  // Handle input changes
  const handleChange = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (autoResize) {
      adjustHeight();
    }
    onChange?.(event);
  }, [onChange, autoResize, adjustHeight]);
  
  // Handle focus
  const handleFocus = useCallback((event: React.FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(true);
    onFocus?.(event);
  }, [onFocus]);
  
  // Handle blur
  const handleBlur = useCallback((event: React.FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(false);
    onBlur?.(event);
  }, [onBlur]);
  
  // Adjust height on mount and when value changes
  useEffect(() => {
    if (autoResize) {
      adjustHeight();
    }
  }, [value, autoResize, adjustHeight]);
  
  // Determine current state
  const currentState = errorMessage ? 'error' : successMessage ? 'success' : warningMessage ? 'warning' : state;
  
  // Generate unique IDs for accessibility
  const textareaId = React.useId();
  const labelId = `${textareaId}-label`;
  const helperId = `${textareaId}-helper`;
  const errorId = `${textareaId}-error`;
  const successId = `${textareaId}-success`;
  const warningId = `${textareaId}-warning`;
  const countId = `${textareaId}-count`;
  
  // Generate CSS classes
  const containerClasses = [
    'cria-textarea-container',
    `cria-textarea-container--${size}`,
    `cria-textarea-container--${variant}`,
    `cria-textarea-container--${currentState}`,
    disabled && 'cria-textarea-container--disabled',
    readOnly && 'cria-textarea-container--readonly',
    isFocused && 'cria-textarea-container--focused',
    autoResize && 'cria-textarea-container--auto-resize',
    className,
  ].filter(Boolean).join(' ');
  
  const textareaClasses = [
    'cria-textarea',
    `cria-textarea--${size}`,
    `cria-textarea--${variant}`,
    `cria-textarea--${currentState}`,
    disabled && 'cria-textarea--disabled',
    readOnly && 'cria-textarea--readonly',
    isFocused && 'cria-textarea--focused',
    autoResize && 'cria-textarea--auto-resize',
  ].filter(Boolean).join(' ');
  
  // Get current value for character count
  const currentValue = value !== undefined ? value : (textareaRef.current?.value || '');
  const characterCount = String(currentValue).length;
  
  // Build aria-describedby attribute
  const describedBy = [
    helperText && !errorMessage && !successMessage && !warningMessage ? helperId : null,
    errorMessage ? errorId : null,
    successMessage ? successId : null,
    warningMessage ? warningId : null,
    showCharacterCount && maxLength ? countId : null,
  ].filter(Boolean).join(' ') || undefined;
  
  return (
    <div className={containerClasses} style={style}>
      {/* Label */}
      {label && (
        <label htmlFor={textareaId} id={labelId} className="cria-textarea__label">
          <Typography variant="body" weight="medium" color="primary">
            {label}
            {required && <span className="cria-textarea__required" aria-label="required"> *</span>}
          </Typography>
        </label>
      )}
      
      {/* Textarea */}
      <textarea
        ref={textareaRef}
        id={textareaId}
        className={textareaClasses}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        maxLength={maxLength}
        value={value}
        defaultValue={defaultValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        rows={rows}
        cols={cols}
        style={{
          resize: autoResize ? 'none' : resize,
        }}
        aria-describedby={describedBy}
        aria-required={required}
        aria-invalid={currentState === 'error'}
        {...props}
      />
      
      {/* Helper Text / Messages */}
      {(helperText || errorMessage || successMessage || warningMessage || showCharacterCount) && (
        <div className="cria-textarea__messages">
          {/* Helper Text */}
          {helperText && !errorMessage && !successMessage && !warningMessage && (
            <Typography 
              variant="body" 
              color="secondary" 
              className="cria-textarea__helper-text"
              id={helperId}
            >
              {helperText}
            </Typography>
          )}
          
          {/* Error Message */}
          {errorMessage && (
            <Typography 
              variant="body" 
              color="error" 
              className="cria-textarea__error-message"
              id={errorId}
              role="alert"
            >
              <WarningCircle size={14} style={{ marginRight: '4px' }} />
              {errorMessage}
            </Typography>
          )}
          
          {/* Success Message */}
          {successMessage && (
            <Typography 
              variant="body" 
              color="success" 
              className="cria-textarea__success-message"
              id={successId}
            >
              <Check size={14} style={{ marginRight: '4px' }} />
              {successMessage}
            </Typography>
          )}
          
          {/* Warning Message */}
          {warningMessage && (
            <Typography 
              variant="body" 
              color="warning" 
              className="cria-textarea__warning-message"
              id={warningId}
            >
              <WarningCircle size={14} style={{ marginRight: '4px' }} />
              {warningMessage}
            </Typography>
          )}
          
          {/* Character Count */}
          {showCharacterCount && maxLength && (
            <Typography 
              variant="body" 
              color="secondary" 
              className="cria-textarea__character-count"
              id={countId}
            >
              {characterCount}/{maxLength}
            </Typography>
          )}
        </div>
      )}
    </div>
  );
});

Textarea.displayName = 'Textarea';

export default Textarea;
