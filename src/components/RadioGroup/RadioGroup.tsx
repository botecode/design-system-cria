import React, { useState, useRef, useEffect } from 'react';

export interface RadioOption {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  description?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  name?: string;
  orientation?: 'horizontal' | 'vertical';
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'card';
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  value,
  onChange,
  label,
  description,
  error,
  disabled = false,
  required = false,
  className,
  name,
  orientation = 'vertical',
  size = 'medium',
  variant = 'default',
}) => {
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const [internalValue, setInternalValue] = useState<string>(value || '');
  const radioGroupRef = useRef<HTMLDivElement>(null);
  const radioRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Update internal value when external value changes
  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  const handleChange = (optionValue: string) => {
    if (!disabled) {
      setInternalValue(optionValue);
      if (onChange) {
        onChange(optionValue);
      }
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (disabled) return;

    let newIndex = focusedIndex;

    // If no option is focused yet, start with the first one
    if (focusedIndex === -1) {
      newIndex = 0;
    }

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        newIndex = newIndex < options.length - 1 ? newIndex + 1 : 0;
        break;
      case 'ArrowUp':
        event.preventDefault();
        newIndex = newIndex > 0 ? newIndex - 1 : options.length - 1;
        break;
      case 'Home':
        event.preventDefault();
        newIndex = 0;
        break;
      case 'End':
        event.preventDefault();
        newIndex = options.length - 1;
        break;
      case ' ':
      case 'Enter':
        event.preventDefault();
        if (newIndex >= 0 && newIndex < options.length) {
          const option = options[newIndex];
          if (!option.disabled) {
            handleChange(option.value);
          }
        }
        return;
      default:
        return;
    }

    setFocusedIndex(newIndex);
    radioRefs.current[newIndex]?.focus();
  };

  const handleFocus = (index: number) => {
    setFocusedIndex(index);
  };

  const handleBlur = () => {
    setFocusedIndex(-1);
  };

  useEffect(() => {
    if (focusedIndex >= 0 && radioRefs.current[focusedIndex]) {
      radioRefs.current[focusedIndex]?.focus();
    }
  }, [focusedIndex]);

  const radioGroupId = `radio-group-${Math.random().toString(36).substr(2, 9)}`;
  const labelId = label ? `${radioGroupId}-label` : undefined;
  const descriptionId = description ? `${radioGroupId}-description` : undefined;
  const errorId = error ? `${radioGroupId}-error` : undefined;

  const radioGroupClasses = ['cria-radio-group', className].filter(Boolean).join(' ');
  
  return (
    <div className={radioGroupClasses}>
      {label && (
        <label
          id={labelId}
          className="cria-radio-group__label"
          htmlFor={radioGroupId}
        >
          {label}
          {required && <span className="cria-radio-group__required"> *</span>}
        </label>
      )}
      
      {description && (
        <div id={descriptionId} className="cria-radio-group__description">
          {description}
        </div>
      )}

      <div
        ref={radioGroupRef}
        role="radiogroup"
        id={radioGroupId}
        className={[
          'cria-radio-group__container',
          `cria-radio-group__container--${orientation}`,
          variant !== 'default' ? `cria-radio-group--${variant}` : '',
          disabled ? 'cria-radio-group__container--disabled' : '',
          error ? 'cria-radio-group__container--error' : '',
          className,
        ].filter(Boolean).join(' ')}
        aria-labelledby={labelId}
        aria-describedby={descriptionId || errorId}
        aria-required={required}
        aria-invalid={error ? 'true' : 'false'}
        aria-orientation={orientation}
        onKeyDown={handleKeyDown}
        tabIndex={-1}
      >
        {options.map((option, index) => {
          const optionClasses = [
            'cria-radio-group__option',
            `cria-radio-group__option--${size}`,
            `cria-radio-group__option--${variant}`,
            (disabled || option.disabled) ? 'cria-radio-group__option--disabled' : '',
            focusedIndex === index ? 'cria-radio-group__option--focused' : '',
            value === option.value ? 'cria-radio-group__option--checked' : '',
          ].filter(Boolean).join(' ');
          
          return (
            <div
              key={option.value}
              className={optionClasses}
            >
              <input
                ref={(el) => (radioRefs.current[index] = el)}
                type="radio"
                id={`${radioGroupId}-${option.value}`}
                name={name || radioGroupId}
                value={option.value}
                checked={internalValue === option.value}
                disabled={disabled || option.disabled}
                onChange={() => handleChange(option.value)}
                onFocus={() => handleFocus(index)}
                onBlur={handleBlur}
                className={`cria-radio-group__input cria-radio--${size}`}
                aria-describedby={option.description ? `${radioGroupId}-${option.value}-description` : undefined}
              />
              <label
                htmlFor={`${radioGroupId}-${option.value}`}
                className="cria-radio-group__option-label"
              >
                <span className="cria-radio-group__option-indicator">
                  <span className="cria-radio-group__option-dot"></span>
                </span>
                <span className="cria-radio-group__option-content">
                  <span className="cria-radio-group__option-text">{option.label}</span>
                  {option.description && (
                    <span
                      id={`${radioGroupId}-${option.value}-description`}
                      className="cria-radio-group__option-description"
                    >
                      {option.description}
                    </span>
                  )}
                </span>
              </label>
            </div>
          );
        })}
      </div>

      {error && (
        <div id={errorId} className="cria-radio-group__error" role="alert">
          {error}
        </div>
      )}
    </div>
  );
};
