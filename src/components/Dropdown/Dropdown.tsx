import React, { useState, useRef, useEffect, useCallback, forwardRef, useImperativeHandle } from 'react';
import { colors, spacing, radii, shadows, typography } from '../../tokens';
import { Typography } from '../Typography';
import { CaretDown, MagnifyingGlass, Check, X } from 'phosphor-react';

export interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  description?: string;
}

export interface DropdownProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /**
   * Dropdown options
   */
  options: DropdownOption[];
  /**
   * Selected value(s)
   */
  value?: string | string[];
  /**
   * Default selected value(s)
   */
  defaultValue?: string | string[];
  /**
   * Placeholder text
   */
  placeholder?: string;
  /**
   * Dropdown label
   */
  label?: string;
  /**
   * Dropdown size
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Dropdown variant
   */
  variant?: 'default' | 'filled' | 'outlined';
  /**
   * Whether the dropdown is disabled
   */
  disabled?: boolean;
  /**
   * Whether the dropdown is required
   */
  required?: boolean;
  /**
   * Whether multiple selection is allowed
   */
  multiple?: boolean;
  /**
   * Whether the dropdown is searchable
   */
  searchable?: boolean;
  /**
   * Whether the dropdown is in loading state
   */
  loading?: boolean;
  /**
   * Helper text
   */
  helperText?: string;
  /**
   * Error message
   */
  errorMessage?: string;
  /**
   * Custom class name
   */
  className?: string;
  /**
   * Custom styles
   */
  style?: React.CSSProperties;
  /**
   * Callback fired when selection changes
   */
  onChange?: (value: string | string[], option: DropdownOption | DropdownOption[]) => void;
  /**
   * Callback fired when dropdown opens
   */
  onOpen?: () => void;
  /**
   * Callback fired when dropdown closes
   */
  onClose?: () => void;
}

export interface DropdownRef {
  focus: () => void;
  blur: () => void;
  open: () => void;
  close: () => void;
}

/**
 * Dropdown component for selecting options from a list
 * 
 * @example
 * ```tsx
 * <Dropdown
 *   options={[
 *     { value: 'option1', label: 'Option 1' },
 *     { value: 'option2', label: 'Option 2' }
 *   ]}
 *   placeholder="Select an option"
 *   onChange={(value) => console.log(value)}
 * />
 * ```
 */
export const Dropdown = forwardRef<DropdownRef, DropdownProps>(({
  options,
  value,
  defaultValue,
  placeholder = 'Select an option',
  label,
  size = 'md',
  variant = 'default',
  disabled = false,
  required = false,
  multiple = false,
  searchable = false,
  loading = false,
  helperText,
  errorMessage,
  className = '',
  style,
  onChange,
  onOpen,
  onClose,
  ...props
}, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [selectedValues, setSelectedValues] = useState<string[]>(() => {
    const initialValue = value || defaultValue;
    return Array.isArray(initialValue) ? initialValue : (initialValue ? [initialValue] : []);
  });

  const triggerRef = useRef<HTMLButtonElement>(null);
  const listboxRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Update selected values when value prop changes
  useEffect(() => {
    if (value !== undefined) {
      setSelectedValues(Array.isArray(value) ? value : (value ? [value] : []));
    }
  }, [value]);

  // Expose methods to parent component
  useImperativeHandle(ref, () => ({
    focus: () => triggerRef.current?.focus(),
    blur: () => triggerRef.current?.blur(),
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }));

  // Filter options based on search term
  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get display text for trigger
  const getDisplayText = () => {
    if (multiple) {
      if (selectedValues.length === 0) return placeholder;
      if (selectedValues.length === 1) {
        const option = options.find(opt => opt.value === selectedValues[0]);
        return option?.label || placeholder;
      }
      if (selectedValues.length === 2) {
        const selectedOptions = options.filter(opt => selectedValues.includes(opt.value));
        return selectedOptions.map(opt => opt.label).join(', ');
      }
      return `${selectedValues.length} selected`;
    }
    
    if (selectedValues.length === 0) return placeholder;
    const option = options.find(opt => opt.value === selectedValues[0]);
    return option?.label || placeholder;
  };

  // Handle option selection
  const handleOptionSelect = useCallback((option: DropdownOption) => {
    if (option.disabled) return;

    let newSelectedValues: string[];
    
    if (multiple) {
      if (selectedValues.includes(option.value)) {
        newSelectedValues = selectedValues.filter(val => val !== option.value);
      } else {
        newSelectedValues = [...selectedValues, option.value];
      }
    } else {
      newSelectedValues = [option.value];
      setIsOpen(false);
    }

    setSelectedValues(newSelectedValues);
    
    // Get selected options for onChange callback
    const selectedOptions = options.filter(opt => newSelectedValues.includes(opt.value));
    
    onChange?.(multiple ? newSelectedValues : newSelectedValues[0] || '', 
              multiple ? selectedOptions : selectedOptions[0]);
  }, [selectedValues, multiple, options, onChange]);

  // Handle trigger click
  const handleTriggerClick = useCallback(() => {
    if (disabled || loading) return;
    
    setIsOpen(!isOpen);
    if (!isOpen) {
      onOpen?.();
      setSearchTerm('');
      setFocusedIndex(0); // Set to first option when opening
    } else {
      onClose?.();
      setSearchTerm(''); // Clear search when closing
      setFocusedIndex(-1); // Reset focus when closing
    }
  }, [disabled, loading, isOpen, onOpen, onClose]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (disabled || loading) return;

    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          onOpen?.();
        } else if (focusedIndex >= 0 && filteredOptions[focusedIndex]) {
          handleOptionSelect(filteredOptions[focusedIndex]);
        }
        break;
      case 'Escape':
        event.preventDefault();
        setIsOpen(false);
        setSearchTerm(''); // Clear search when closing
        onClose?.();
        break;
      case 'ArrowDown':
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          onOpen?.();
          setFocusedIndex(0);
        } else {
          setFocusedIndex(prev => 
            prev < filteredOptions.length - 1 ? prev + 1 : 0
          );
        }
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (isOpen) {
          setFocusedIndex(prev => 
            prev > 0 ? prev - 1 : filteredOptions.length - 1
          );
        }
        break;
      case 'Home':
        event.preventDefault();
        if (isOpen) {
          setFocusedIndex(0);
        }
        break;
      case 'End':
        event.preventDefault();
        if (isOpen) {
          setFocusedIndex(filteredOptions.length - 1);
        }
        break;
    }
  }, [disabled, loading, isOpen, focusedIndex, filteredOptions, onOpen, onClose, handleOptionSelect]);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && 
          triggerRef.current && 
          listboxRef.current &&
          !triggerRef.current.contains(event.target as Node) &&
          !listboxRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchTerm(''); // Clear search when closing
        onClose?.();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen, onClose]);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen && searchable && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen, searchable]);

  // Generate CSS classes
  const containerClasses = [
    'cria-dropdown',
    `cria-dropdown--${size}`,
    `cria-dropdown--${variant}`,
    disabled && 'cria-dropdown--disabled',
    loading && 'cria-dropdown--loading',
    isOpen && 'cria-dropdown--open',
    errorMessage && 'cria-dropdown--error',
    className,
  ].filter(Boolean).join(' ');

  const triggerClasses = [
    'cria-dropdown-trigger',
    `cria-dropdown--${size}`,
    `cria-dropdown--${variant}`,
    `cria-dropdown-trigger--${size}`,
    `cria-dropdown-trigger--${variant}`,
    disabled && 'cria-dropdown-trigger--disabled',
    loading && 'cria-dropdown--loading',
    loading && 'cria-dropdown-trigger--loading',
    isOpen && 'cria-dropdown-trigger--open',
    errorMessage && 'cria-dropdown-trigger--error',
  ].filter(Boolean).join(' ');

  // Get trigger styles
  const getTriggerStyles = (): React.CSSProperties => {
    const baseStyles: React.CSSProperties = {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: getTriggerPadding(size),
      backgroundColor: variant === 'filled' ? colors.gray[100] : colors.backgroundLight,
      border: `1px solid ${errorMessage ? colors.error : isOpen ? colors.primary : colors.border.medium}`,
      borderRadius: radii.md,
      fontFamily: typography.fontFamily.primary,
      fontSize: typography.fontSize[size === 'sm' ? 'bodySmall' : size === 'lg' ? 'h3' : 'body'],
      color: colors.text.primary,
      cursor: disabled || loading ? 'not-allowed' : 'pointer',
      transition: 'all 0.2s ease-in-out',
      outline: 'none',
    };

    if (disabled || loading) {
      baseStyles.opacity = 0.6;
    }

    return baseStyles;
  };

  // Get listbox styles
  const getListboxStyles = (): React.CSSProperties => ({
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: colors.backgroundLight,
    border: `1px solid ${colors.border.medium}`,
    borderRadius: radii.md,
    boxShadow: shadows.lg,
    maxHeight: '200px',
    overflowY: 'auto',
    marginTop: spacing[1],
  });

  // Get option styles
  const getOptionStyles = (option: DropdownOption, index: number): React.CSSProperties => ({
    padding: getOptionPadding(size),
    cursor: option.disabled ? 'not-allowed' : 'pointer',
    backgroundColor: index === focusedIndex ? colors.gray[100] : 'transparent',
    color: option.disabled ? colors.text.disabled : colors.text.primary,
    opacity: option.disabled ? 0.6 : 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    transition: 'background-color 0.15s ease-in-out',
  });

  // Get option classes
  const getOptionClasses = (option: DropdownOption, index: number): string => {
    const classes = [
      'cria-dropdown-option',
      index === focusedIndex && 'cria-dropdown-option--focused',
      option.disabled && 'cria-dropdown-option--disabled',
    ].filter(Boolean);
    return classes.join(' ');
  };

  return (
    <div className={containerClasses} style={style} {...props}>
      {/* Label */}
      {label && (
        <label className="cria-dropdown__label">
          <Typography variant="body" weight="medium" color="primary">
            {label}
            {required && <span style={{ color: colors.error }}> *</span>}
          </Typography>
        </label>
      )}

      {/* Trigger */}
      <button
        ref={triggerRef}
        type="button"
        role="combobox"
        className={triggerClasses}
        style={getTriggerStyles()}
        onClick={handleTriggerClick}
        onKeyDown={handleKeyDown}
        disabled={disabled || loading}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-required={required}
        aria-invalid={!!errorMessage}
        aria-disabled={disabled || loading}
        aria-describedby={helperText || errorMessage ? `${label || 'dropdown'}-helper` : undefined}
        id={label ? `${label.toLowerCase().replace(/\s+/g, '-')}-dropdown` : undefined}
        name={props.name}
      >
        <span style={{ 
          overflow: 'hidden', 
          textOverflow: 'ellipsis', 
          whiteSpace: 'nowrap',
          flex: 1,
          textAlign: 'left'
        }}>
          {getDisplayText()}
        </span>
        <CaretDown 
          size={16} 
          style={{ 
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease-in-out',
            flexShrink: 0,
            marginLeft: spacing[2]
          }} 
        />
      </button>

      {/* Dropdown List */}
      {isOpen && (
        <div
          ref={listboxRef}
          role="listbox"
          className="cria-dropdown-listbox"
          style={getListboxStyles()}
          aria-labelledby={triggerRef.current?.id}
        >
          {/* Search Input */}
          {searchable && (
            <div style={{ padding: spacing[2], borderBottom: `1px solid ${colors.border.light}` }}>
              <div style={{ position: 'relative' }}>
                <MagnifyingGlass 
                  size={16} 
                  style={{ 
                    position: 'absolute', 
                    left: spacing[2], 
                    top: '50%', 
                    transform: 'translateY(-50%)',
                    color: colors.text.secondary
                  }} 
                />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search options..."
                  role="textbox"
                  aria-label="Search options"
                  style={{
                    width: '100%',
                    padding: `${spacing[2]} ${spacing[2]} ${spacing[2]} ${spacing[8]}`,
                    border: `1px solid ${colors.border.medium}`,
                    borderRadius: radii.sm,
                    fontSize: typography.fontSize.bodySmall,
                    fontFamily: typography.fontFamily.primary,
                    outline: 'none',
                  }}
                />
              </div>
            </div>
          )}

          {/* Options */}
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <div
                key={option.value}
                role="option"
                className={getOptionClasses(option, index)}
                style={getOptionStyles(option, index)}
                onClick={() => handleOptionSelect(option)}
                aria-selected={selectedValues.includes(option.value)}
              >
                <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                  {option.icon && (
                    <span style={{ marginRight: spacing[2] }}>{option.icon}</span>
                  )}
                  <div>
                    <div style={{ fontSize: typography.fontSize[size === 'sm' ? 'bodySmall' : 'body'] }}>
                      {option.label}
                    </div>
                    {option.description && (
                      <div style={{ 
                        fontSize: typography.fontSize.caption, 
                        color: colors.text.secondary,
                        marginTop: spacing[1]
                      }}>
                        {option.description}
                      </div>
                    )}
                  </div>
                </div>
                {selectedValues.includes(option.value) && (
                  <Check size={16} style={{ color: colors.primary, flexShrink: 0 }} />
                )}
              </div>
            ))
          ) : (
            <div style={{ 
              padding: spacing[4], 
              textAlign: 'center', 
              color: colors.text.secondary,
              fontSize: typography.fontSize.bodySmall
            }}>
              No options found
            </div>
          )}
        </div>
      )}

      {/* Helper Text / Error Message */}
      {(helperText || errorMessage) && (
        <div 
          id={`${label || 'dropdown'}-helper`}
          className="cria-dropdown__messages"
          style={{ marginTop: spacing[1] }}
        >
          {errorMessage ? (
            <Typography variant="bodySmall" color="error">
              {errorMessage}
            </Typography>
          ) : (
            <Typography variant="bodySmall" color="secondary">
              {helperText}
            </Typography>
          )}
        </div>
      )}
    </div>
  );
});

Dropdown.displayName = 'Dropdown';

// Helper function to get trigger padding based on size
function getTriggerPadding(size: 'sm' | 'md' | 'lg'): string {
  switch (size) {
    case 'sm':
      return `${spacing[2]} ${spacing[3]}`;
    case 'md':
      return `${spacing[3]} ${spacing[4]}`;
    case 'lg':
      return `${spacing[4]} ${spacing[5]}`;
    default:
      return `${spacing[3]} ${spacing[4]}`;
  }
}

// Helper function to get option padding based on size
function getOptionPadding(size: 'sm' | 'md' | 'lg'): string {
  switch (size) {
    case 'sm':
      return `${spacing[2]} ${spacing[3]}`;
    case 'md':
      return `${spacing[3]} ${spacing[4]}`;
    case 'lg':
      return `${spacing[4]} ${spacing[5]}`;
    default:
      return `${spacing[3]} ${spacing[4]}`;
  }
}

// DropdownItem component for custom option rendering
export interface DropdownItemProps {
  value: string;
  label: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  description?: string;
  children?: React.ReactNode;
}

export const DropdownItem: React.FC<DropdownItemProps> = ({
  value,
  label,
  disabled = false,
  icon,
  description,
  children,
}) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
      {icon && (
        <span style={{ marginRight: spacing[2] }}>{icon}</span>
      )}
      <div>
        {children || (
          <>
            <div>{label}</div>
            {description && (
              <div style={{ 
                fontSize: typography.fontSize.caption, 
                color: colors.text.secondary,
                marginTop: spacing[1]
              }}>
                {description}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
