import React, { forwardRef, useRef, useImperativeHandle, useCallback } from 'react';
import { Typography } from '../Typography';

export interface SwitchProps {
  /** Whether the switch is on/checked */
  checked?: boolean;
  /** Whether the switch is disabled */
  disabled?: boolean;
  /** Whether the switch is required */
  required?: boolean;
  /** Whether the switch is read-only */
  readOnly?: boolean;
  /** The label text for the switch */
  label?: string;
  /** Helper text displayed below the switch */
  helperText?: string;
  /** Error message displayed below the switch */
  errorMessage?: string;
  /** Warning message displayed below the switch */
  warningMessage?: string;
  /** The size of the switch */
  size?: 'sm' | 'md' | 'lg';
  /** The variant style of the switch */
  variant?: 'default' | 'filled' | 'outlined';
  /** The color theme of the switch */
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
  /** The value of the switch (for form handling) */
  value?: string;
  /** The name of the switch (for form handling) */
  name?: string;
  /** The id of the switch */
  id?: string;
  /** Additional props for the input element */
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

export interface SwitchRef {
  /** Focus the switch */
  focus: () => void;
  /** Blur the switch */
  blur: () => void;
  /** Get the current checked state */
  getChecked: () => boolean;
  /** Set the checked state */
  setChecked: (checked: boolean) => void;
}

export const Switch = forwardRef<SwitchRef, SwitchProps>(({
  checked = false,
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
  const switchClasses = [
    'cria-switch',
    `cria-switch--${size}`,
    `cria-switch--${variant}`,
    `cria-switch--${color}`,
    checked && 'cria-switch--checked',
    disabled && 'cria-switch--disabled',
    readOnly && 'cria-switch--readonly',
    required && 'cria-switch--required',
    errorMessage && 'cria-switch--error',
    warningMessage && 'cria-switch--warning',
    className,
  ].filter(Boolean).join(' ');

  const inputClasses = [
    'cria-switch__input',
    `cria-switch__input--${size}`,
    `cria-switch__input--${variant}`,
    `cria-switch__input--${color}`,
  ].filter(Boolean).join(' ');

  const labelClasses = [
    'cria-switch__label',
    `cria-switch__label--${size}`,
    disabled && 'cria-switch__label--disabled',
    readOnly && 'cria-switch__label--readonly',
  ].filter(Boolean).join(' ');

  return (
    <div className={switchClasses} style={style} {...props}>
      <div className="cria-switch__container">
        <input
          ref={inputRef}
          type="checkbox"
          role="switch"
          id={id || (label ? `${name || 'switch'}-input` : undefined)}
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
              helperText && `${id || name || 'switch'}-helper`,
              errorMessage && `${id || name || 'switch'}-error`,
              warningMessage && `${id || name || 'switch'}-warning`,
            ].filter(Boolean).join(' ') || undefined
          }
          aria-invalid={!!errorMessage}
          {...inputProps}
        />
        
        <div className="cria-switch__track">
          <div className="cria-switch__thumb" />
        </div>
        
        {label && (
          <label htmlFor={id || (label ? `${name || 'switch'}-input` : undefined)} className={labelClasses}>
            <Typography 
              variant="body" 
              color={disabled ? 'secondary' : 'content'}
            >
              {label}
              {required && <span className="cria-switch__required" aria-label="required"> *</span>}
            </Typography>
          </label>
        )}
      </div>
      
      {/* Helper text */}
      {helperText && !errorMessage && !warningMessage && (
        <Typography 
          variant="caption" 
          color="secondary" 
          className="cria-switch__helper-text"
          id={`${id || name || 'switch'}-helper`}
        >
          {helperText}
        </Typography>
      )}
      
      {/* Error message */}
      {errorMessage && (
        <Typography 
          variant="caption" 
          color="error" 
          className="cria-switch__error-message"
          id={`${id || name || 'switch'}-error`}
        >
          {errorMessage}
        </Typography>
      )}
      
      {/* Warning message */}
      {warningMessage && (
        <Typography 
          variant="caption" 
          color="warning" 
          className="cria-switch__warning-message"
          id={`${id || name || 'switch'}-warning`}
        >
          {warningMessage}
        </Typography>
      )}
    </div>
  );
});

Switch.displayName = 'Switch';
