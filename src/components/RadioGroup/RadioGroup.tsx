import React, { createContext, useContext, useCallback, useRef } from 'react';
import { colors, spacing, radii, typography } from '../../tokens';

// Context for radio group state
interface RadioGroupContextValue {
  name: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  required?: boolean;
  size?: 'sm' | 'md' | 'lg';
  error?: string;
  orientation?: 'horizontal' | 'vertical';
}

const RadioGroupContext = createContext<RadioGroupContextValue | null>(null);

const useRadioGroup = () => {
  const context = useContext(RadioGroupContext);
  if (!context) {
    throw new Error('RadioGroup components must be used within a RadioGroup');
  }
  return context;
};

// RadioGroup Props
export interface RadioGroupProps extends Omit<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, 'onChange'> {
  /**
   * Name attribute for all radio buttons in the group
   */
  name: string;
  
  /**
   * Current selected value
   */
  value?: string;
  
  /**
   * Callback when selection changes
   */
  onChange?: (value: string) => void;
  
  /**
   * Whether the entire group is disabled
   */
  disabled?: boolean;
  
  /**
   * Whether selection is required
   */
  required?: boolean;
  
  /**
   * Size variant
   */
  size?: 'sm' | 'md' | 'lg';
  
  /**
   * Error message to display
   */
  error?: string;
  
  /**
   * Layout orientation
   */
  orientation?: 'horizontal' | 'vertical';
  
  /**
   * Custom aria-label for the fieldset
   */
  'aria-label'?: string;
}

// RadioGroupLabel Props
export interface RadioGroupLabelProps extends React.HTMLAttributes<HTMLLegendElement> {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
}

// RadioGroupItem Props
export interface RadioGroupItemProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Value of the radio option
   */
  value: string;
  
  /**
   * Label text for the radio option
   */
  children: React.ReactNode;
  
  /**
   * Whether this specific option is disabled
   */
  disabled?: boolean;
  
  /**
   * Custom id for the radio input
   */
  id?: string;
}

// Helper functions
function getSizeStyles(size: RadioGroupProps['size']): React.CSSProperties {
  switch (size) {
    case 'sm':
      return {
        fontSize: typography.fontSize.bodySmall,
        gap: spacing[2],
      };
    case 'lg':
      return {
        fontSize: typography.fontSize.body,
        gap: spacing[4],
      };
    case 'md':
    default:
      return {
        fontSize: typography.fontSize.body,
        gap: spacing[3],
      };
  }
}

function getOrientationStyles(orientation: RadioGroupProps['orientation']): React.CSSProperties {
  switch (orientation) {
    case 'horizontal':
      return {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: spacing[4],
      };
    case 'vertical':
    default:
      return {
        display: 'flex',
        flexDirection: 'column',
        gap: spacing[2],
      };
  }
}

/**
 * RadioGroup component for single selection from multiple options
 */
export const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  value,
  onChange,
  disabled = false,
  required = false,
  size = 'md',
  error,
  orientation = 'vertical',
  className = '',
  style,
  children,
  ...props
}) => {
  const fieldsetRef = useRef<HTMLFieldSetElement>(null);

  const contextValue: RadioGroupContextValue = {
    name,
    value,
    onChange,
    disabled,
    required,
    size,
    error,
    orientation,
  };

  const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLFieldSetElement>) => {
    if (disabled) return;

    const radios = fieldsetRef.current?.querySelectorAll('input[type="radio"]') as NodeListOf<HTMLInputElement>;
    if (!radios.length) return;

    const currentIndex = Array.from(radios).findIndex(radio => radio === document.activeElement);
    
    let nextIndex = currentIndex;
    
    switch (event.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        event.preventDefault();
        nextIndex = currentIndex < radios.length - 1 ? currentIndex + 1 : 0;
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        event.preventDefault();
        nextIndex = currentIndex > 0 ? currentIndex - 1 : radios.length - 1;
        break;
      case ' ':
      case 'Enter':
        event.preventDefault();
        if (currentIndex >= 0) {
          radios[currentIndex].click();
        }
        break;
      default:
        return;
    }
    
    if (nextIndex !== currentIndex && radios[nextIndex]) {
      radios[nextIndex].focus();
    }
  }, [disabled]);

  const classes = [
    'cria-radio-group',
    `cria-radio-group--${size}`,
    `cria-radio-group--${orientation}`,
    disabled && 'cria-radio-group--disabled',
    error && 'cria-radio-group--error',
    className,
  ].filter(Boolean).join(' ');

  const fieldsetStyles: React.CSSProperties = {
    border: 'none',
    padding: 0,
    margin: 0,
    ...getSizeStyles(size),
    ...getOrientationStyles(orientation),
    ...style,
  };

  return (
    <RadioGroupContext.Provider value={contextValue}>
      <fieldset
        ref={fieldsetRef}
        className={classes}
        style={fieldsetStyles}
        disabled={disabled}
        aria-required={required}
        aria-invalid={error ? 'true' : undefined}
        onKeyDown={handleKeyDown}
        {...props}
      >
        {children}
        {error && (
          <div
            role="alert"
            style={{
              color: colors.error,
              fontSize: typography.fontSize.caption,
              marginTop: spacing[2],
              display: 'flex',
              alignItems: 'center',
              gap: spacing[1],
            }}
          >
            <span>⚠</span>
            {error}
          </div>
        )}
      </fieldset>
    </RadioGroupContext.Provider>
  );
};

/**
 * RadioGroupLabel component for the fieldset legend
 */
export const RadioGroupLabel: React.FC<RadioGroupLabelProps> = ({
  children,
  className = '',
  style,
  id,
  ...props
}) => {
  const { required, size, name } = useRadioGroup();
  const labelId = id || `${name}-legend`;

  const classes = [
    'cria-radio-group-label',
    `cria-radio-group-label--${size}`,
    className,
  ].filter(Boolean).join(' ');

  const labelStyles: React.CSSProperties = {
    fontFamily: typography.fontFamily.primary,
    fontWeight: typography.fontWeight.medium,
    color: colors.text.primary,
    marginBottom: spacing[2],
    display: 'block',
    ...style,
  };

  return (
    <legend
      id={labelId}
      className={classes}
      style={labelStyles}
      aria-required={required}
      {...props}
    >
      {children}
      {required && (
        <span
          style={{
            color: colors.error,
            marginLeft: spacing[1],
          }}
          aria-label="required"
        >
          *
        </span>
      )}
    </legend>
  );
};

/**
 * RadioGroupItem component for individual radio options
 */
export const RadioGroupItem: React.FC<RadioGroupItemProps> = ({
  value,
  children,
  disabled = false,
  id,
  className = '',
  style,
  ...props
}) => {
  const { name, value: selectedValue, onChange, disabled: groupDisabled, size } = useRadioGroup();
  
  const isDisabled = disabled || groupDisabled;
  const isSelected = selectedValue === value;
  const inputId = id || `${name}-${value}`;
  const labelId = `${inputId}-label`;

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    if (isDisabled) return;
    // For controlled components, call onChange
    if (onChange) {
      onChange(value);
    }
    // For uncontrolled components, let the native behavior handle it
  }, [isDisabled, onChange, value]);

  const classes = [
    'cria-radio-group-item',
    `cria-radio-group-item--${size}`,
    isSelected && 'cria-radio-group-item--selected',
    isDisabled && 'cria-radio-group-item--disabled',
    className,
  ].filter(Boolean).join(' ');

  const containerStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: spacing[2],
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    opacity: isDisabled ? 0.6 : 1,
    ...style,
  };

  const inputStyles: React.CSSProperties = {
    appearance: 'none',
    width: size === 'sm' ? '16px' : size === 'lg' ? '20px' : '18px',
    height: size === 'sm' ? '16px' : size === 'lg' ? '20px' : '18px',
    borderRadius: '50%',
    border: `2px solid ${isSelected ? colors.primary : colors.border.medium}`,
    backgroundColor: isSelected ? colors.primary : colors.backgroundLight,
    position: 'relative',
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s ease-in-out',
    margin: 0,
    flexShrink: 0,
  };

  const labelStyles: React.CSSProperties = {
    fontFamily: typography.fontFamily.primary,
    fontSize: getSizeStyles(size).fontSize,
    color: isDisabled ? colors.text.disabled : colors.text.primary,
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    userSelect: 'none',
    flex: 1,
  };

  return (
    <div className={classes} style={containerStyles}>
      <input
        type="radio"
        id={inputId}
        name={name}
        value={value}
        {...(onChange ? { checked: isSelected } : {})}
        onChange={handleChange}
        disabled={isDisabled}
        style={inputStyles}
        aria-labelledby={labelId}
        {...props}
      />
      <label
        id={labelId}
        htmlFor={inputId}
        style={labelStyles}
      >
        {children}
      </label>
    </div>
  );
};

// Default export
export default RadioGroup;