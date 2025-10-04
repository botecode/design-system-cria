import React, { forwardRef, useRef, useImperativeHandle, useCallback } from 'react';
import { Typography } from '../Typography';
import { Eye, EyeSlash, X, Check, WarningCircle } from 'phosphor-react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * Input label
   */
  label?: string;
  
  /**
   * Input placeholder
   */
  placeholder?: string;
  
  /**
   * Input size
   */
  size?: 'sm' | 'md' | 'lg';
  
  /**
   * Input variant
   */
  variant?: 'default' | 'filled' | 'outlined' | 'underlined';
  
  /**
   * Input state
   */
  state?: 'default' | 'success' | 'warning' | 'error';
  
  /**
   * Whether the input is disabled
   */
  disabled?: boolean;
  
  /**
   * Whether the input is required
   */
  required?: boolean;
  
  /**
   * Whether the input is read-only
   */
  readOnly?: boolean;
  
  /**
   * Whether to show password toggle for password inputs
   */
  showPasswordToggle?: boolean;
  
  /**
   * Whether to show clear button
   */
  showClearButton?: boolean;
  
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
   * Left icon
   */
  leftIcon?: React.ReactNode;
  
  /**
   * Right icon
   */
  rightIcon?: React.ReactNode;
  
  /**
   * Custom class name for the input container
   */
  className?: string;
  
  /**
   * Custom styles for the input container
   */
  style?: React.CSSProperties;
  
  /**
   * Callback fired when the input value changes
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  
  /**
   * Callback fired when the input is cleared
   */
  onClear?: () => void;
  
  /**
   * Callback fired when the input is focused
   */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  
  /**
   * Callback fired when the input is blurred
   */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export interface InputRef {
  focus: () => void;
  blur: () => void;
  select: () => void;
  getValue: () => string;
  setValue: (value: string) => void;
}

/**
 * Input component for text input with various states and features
 */
export const Input = forwardRef<InputRef, InputProps>(({
  label,
  placeholder,
  size = 'md',
  variant = 'default',
  state = 'default',
  disabled = false,
  required = false,
  readOnly = false,
  showPasswordToggle = false,
  showClearButton = false,
  showCharacterCount = false,
  maxLength,
  helperText,
  errorMessage,
  successMessage,
  warningMessage,
  leftIcon,
  rightIcon,
  className = '',
  style,
  onChange,
  onClear,
  onFocus,
  onBlur,
  type = 'text',
  value,
  defaultValue,
  ...props
}, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [showPassword, setShowPassword] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);
  
  // Expose methods to parent component
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
    blur: () => inputRef.current?.blur(),
    select: () => inputRef.current?.select(),
    getValue: () => inputRef.current?.value || '',
    setValue: (newValue: string) => {
      if (inputRef.current) {
        inputRef.current.value = newValue;
      }
    },
  }));
  
  // Handle password toggle
  const handlePasswordToggle = useCallback(() => {
    setShowPassword(!showPassword);
  }, [showPassword]);
  
  // Handle clear button
  const handleClear = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.value = '';
      inputRef.current.focus();
      onChange?.({
        target: inputRef.current,
        currentTarget: inputRef.current,
      } as React.ChangeEvent<HTMLInputElement>);
      onClear?.();
    }
  }, [onChange, onClear]);
  
  // Handle focus
  const handleFocus = useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    onFocus?.(event);
  }, [onFocus]);
  
  // Handle blur
  const handleBlur = useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    onBlur?.(event);
  }, [onBlur]);
  
  // Determine current state
  const currentState = errorMessage ? 'error' : successMessage ? 'success' : warningMessage ? 'warning' : state;
  
  // Determine input type
  const inputType = type === 'password' && showPassword ? 'text' : type;
  
  // Generate CSS classes
  const containerClasses = [
    'cria-input-container',
    `cria-input-container--${size}`,
    `cria-input-container--${variant}`,
    `cria-input-container--${currentState}`,
    disabled && 'cria-input-container--disabled',
    readOnly && 'cria-input-container--readonly',
    isFocused && 'cria-input-container--focused',
    leftIcon && 'cria-input-container--with-left-icon',
    (rightIcon || showPasswordToggle || showClearButton) && 'cria-input-container--with-right-icon',
    className,
  ].filter(Boolean).join(' ');
  
  const inputClasses = [
    'cria-input',
    `cria-input--${size}`,
    `cria-input--${variant}`,
    `cria-input--${currentState}`,
    disabled && 'cria-input--disabled',
    readOnly && 'cria-input--readonly',
    isFocused && 'cria-input--focused',
  ].filter(Boolean).join(' ');
  
  // Get current value for character count
  const currentValue = value || inputRef.current?.value || '';
  const characterCount = String(currentValue).length;
  
  // Determine if clear button should be shown
  const shouldShowClearButton = showClearButton && currentValue && !disabled && !readOnly;
  
  // Determine if password toggle should be shown
  const shouldShowPasswordToggle = showPasswordToggle && type === 'password' && !disabled && !readOnly;
  
  return (
    <div className={containerClasses} style={style}>
      {/* Label */}
      {label && (
        <label className="cria-input__label">
          <Typography variant="body" weight="medium" color="primary">
            {label}
            {required && <span className="cria-input__required"> *</span>}
          </Typography>
        </label>
      )}
      
      {/* Input Container */}
      <div className="cria-input__wrapper">
        {/* Left Icon */}
        {leftIcon && (
          <div className="cria-input__left-icon">
            {leftIcon}
          </div>
        )}
        
        {/* Input */}
        <input
          ref={inputRef}
          type={inputType}
          className={inputClasses}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          maxLength={maxLength}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
        
        {/* Right Icons */}
        {(rightIcon || shouldShowPasswordToggle || shouldShowClearButton) && (
          <div className="cria-input__right-icons">
            {shouldShowClearButton && (
              <button
                type="button"
                className="cria-input__clear-button"
                onClick={handleClear}
                aria-label="Clear input"
              >
                <X size={16} />
              </button>
            )}
            
            {shouldShowPasswordToggle && (
              <button
                type="button"
                className="cria-input__password-toggle"
                onClick={handlePasswordToggle}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeSlash size={16} /> : <Eye size={16} />}
              </button>
            )}
            
            {rightIcon && (
              <div className="cria-input__right-icon">
                {rightIcon}
              </div>
            )}
          </div>
        )}
      </div>
      
      {/* Helper Text / Messages */}
      {(helperText || errorMessage || successMessage || warningMessage || showCharacterCount) && (
        <div className="cria-input__messages">
          {/* Helper Text */}
          {helperText && !errorMessage && !successMessage && !warningMessage && (
            <Typography variant="body" color="secondary" className="cria-input__helper-text">
              {helperText}
            </Typography>
          )}
          
          {/* Error Message */}
          {errorMessage && (
            <Typography variant="body" color="error" className="cria-input__error-message">
              <WarningCircle size={14} style={{ marginRight: '4px' }} />
              {errorMessage}
            </Typography>
          )}
          
          {/* Success Message */}
          {successMessage && (
            <Typography variant="body" color="success" className="cria-input__success-message">
              <Check size={14} style={{ marginRight: '4px' }} />
              {successMessage}
            </Typography>
          )}
          
          {/* Warning Message */}
          {warningMessage && (
            <Typography variant="body" color="warning" className="cria-input__warning-message">
              <WarningCircle size={14} style={{ marginRight: '4px' }} />
              {warningMessage}
            </Typography>
          )}
          
          {/* Character Count */}
          {showCharacterCount && maxLength && (
            <Typography variant="body" color="secondary" className="cria-input__character-count">
              {characterCount}/{maxLength}
            </Typography>
          )}
        </div>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
