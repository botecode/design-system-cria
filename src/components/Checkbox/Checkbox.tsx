import React, { forwardRef, useRef, useImperativeHandle, useCallback } from 'react';
import { Typography } from '../Typography';
import { Check } from 'phosphor-react';

export interface CheckboxProps {
  /** Whether the checkbox is checked */
  checked?: boolean;
  /** Whether the checkbox is in an indeterminate state */
  indeterminate?: boolean;
  /** Whether the checkbox is disabled */
  disabled?: boolean;
  /** Whether the checkbox is required */
  required?: boolean;
  /** Whether the checkbox is read-only */
  readOnly?: boolean;
  /** The label text for the checkbox */
  label?: string;
  /** Helper text displayed below the checkbox */
  helperText?: string;
  /** Error message displayed below the checkbox */
  errorMessage?: string;
  /** Warning message displayed below the checkbox */
  warningMessage?: string;
  /** The size of the checkbox */
  size?: 'sm' | 'md' | 'lg';
  /** The variant style of the checkbox */
  variant?: 'default' | 'filled' | 'outlined';
  /** The color theme of the checkbox */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  /** Custom class name */
  className?: string;
  /** Custom styles */
  style?: React.CSSProperties;
  /** Change handler */
  onChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Click handler */
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
  /** Focus handler */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** Blur handler */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** The value of the checkbox (for form handling) */
  value?: string;
  /** The name of the checkbox (for form handling) */
  name?: string;
  /** The id of the checkbox */
  id?: string;
  /** Additional props for the input element */
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

export interface CheckboxRef {
  /** Focus the checkbox */
  focus: () => void;
  /** Blur the checkbox */
  blur: () => void;
  /** Get the current checked state */
  getChecked: () => boolean;
  /** Set the checked state */
  setChecked: (checked: boolean) => void;
}

export const Checkbox = forwardRef<CheckboxRef, CheckboxProps>(({
  checked = false,
  indeterminate = false,
  disabled = false,
  required = false,
  readOnly = false,
  label,
  helperText,
  errorMessage,
  warningMessage,
  size = 'md',
  variant = 'default',
  color = 'primary',
  className = '',
  style,
  onChange,
  onClick,
  onFocus,
  onBlur,
  value,
  name,
  id,
  inputProps = {},
  ...props
}, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Expose methods to parent component
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
    blur: () => inputRef.current?.blur(),
    getChecked: () => inputRef.current?.checked || false,
    setChecked: (newChecked: boolean) => {
      if (inputRef.current) {
        inputRef.current.checked = newChecked;
      }
    },
  }));

  // Handle change events
  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled || readOnly) return;
    onChange?.(event.target.checked, event);
  }, [disabled, readOnly, onChange]);

  // Handle click events
  const handleClick = useCallback((event: React.MouseEvent<HTMLInputElement>) => {
    if (disabled || readOnly) return;
    onClick?.(event);
  }, [disabled, readOnly, onClick]);

  // Build CSS classes
  const checkboxClasses = [
    'cria-checkbox',
    `cria-checkbox--${size}`,
    `cria-checkbox--${variant}`,
    `cria-checkbox--${color}`,
    checked && 'cria-checkbox--checked',
    indeterminate && 'cria-checkbox--indeterminate',
    disabled && 'cria-checkbox--disabled',
    readOnly && 'cria-checkbox--readonly',
    required && 'cria-checkbox--required',
    errorMessage && 'cria-checkbox--error',
    warningMessage && 'cria-checkbox--warning',
    className,
  ].filter(Boolean).join(' ');

  const inputClasses = [
    'cria-checkbox__input',
    `cria-checkbox__input--${size}`,
    `cria-checkbox__input--${variant}`,
    `cria-checkbox__input--${color}`,
  ].filter(Boolean).join(' ');

  const labelClasses = [
    'cria-checkbox__label',
    `cria-checkbox__label--${size}`,
    disabled && 'cria-checkbox__label--disabled',
    readOnly && 'cria-checkbox__label--readonly',
  ].filter(Boolean).join(' ');

  // Determine the state for styling
  const state = errorMessage ? 'error' : warningMessage ? 'warning' : 'default';

  return (
    <div className={checkboxClasses} style={style} {...props}>
      <div className="cria-checkbox__container">
        <input
          ref={inputRef}
          type="checkbox"
          id={id || (label ? `${name || 'checkbox'}-input` : undefined)}
          name={name}
          value={value}
          checked={checked}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          className={inputClasses}
          onChange={handleChange}
          onClick={handleClick}
          onFocus={onFocus}
          onBlur={onBlur}
          aria-describedby={
            [
              helperText && `${id || name || 'checkbox'}-helper`,
              errorMessage && `${id || name || 'checkbox'}-error`,
              warningMessage && `${id || name || 'checkbox'}-warning`,
            ].filter(Boolean).join(' ') || undefined
          }
          aria-invalid={!!errorMessage}
          aria-checked={indeterminate ? 'mixed' : checked}
          {...inputProps}
        />
        
        <div className="cria-checkbox__checkmark">
          {indeterminate ? (
            <div className="cria-checkbox__indeterminate" />
          ) : (
            <Check size={size === 'sm' ? 12 : size === 'lg' ? 20 : 16} />
          )}
        </div>
        
        {label && (
          <label htmlFor={id || (label ? `${name || 'checkbox'}-input` : undefined)} className={labelClasses}>
            <Typography 
              variant="body" 
              size={size === 'sm' ? 'sm' : size === 'lg' ? 'md' : 'sm'}
              color={disabled ? 'secondary' : 'default'}
            >
              {label}
              {required && <span className="cria-checkbox__required" aria-label="required"> *</span>}
            </Typography>
          </label>
        )}
      </div>
      
      {/* Helper text */}
      {helperText && !errorMessage && !warningMessage && (
        <Typography 
          variant="caption" 
          color="secondary" 
          className="cria-checkbox__helper-text"
          id={`${id || name || 'checkbox'}-helper`}
        >
          {helperText}
        </Typography>
      )}
      
      {/* Error message */}
      {errorMessage && (
        <Typography 
          variant="caption" 
          color="error" 
          className="cria-checkbox__error-message"
          id={`${id || name || 'checkbox'}-error`}
        >
          {errorMessage}
        </Typography>
      )}
      
      {/* Warning message */}
      {warningMessage && (
        <Typography 
          variant="caption" 
          color="warning" 
          className="cria-checkbox__warning-message"
          id={`${id || name || 'checkbox'}-warning`}
        >
          {warningMessage}
        </Typography>
      )}
    </div>
  );
});

Checkbox.displayName = 'Checkbox';
