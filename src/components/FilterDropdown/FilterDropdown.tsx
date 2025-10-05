import React, { useState, useRef, useEffect } from 'react';
import { colors, spacing, radii, shadows, typography } from '../../tokens';
import { Check, CaretDown } from 'phosphor-react';

export interface FilterOption {
  value: string;
  label: string;
}

export interface FilterDropdownProps {
  /**
   * Label for the dropdown
   */
  label: string;
  
  /**
   * Array of options to display
   */
  options: FilterOption[];
  
  /**
   * Currently selected value
   */
  value?: string;
  
  /**
   * Callback when selection changes
   */
  onChange: (value: string) => void;
  
  /**
   * Placeholder text when no option is selected
   */
  placeholder?: string;
  
  /**
   * Whether the dropdown is disabled
   */
  disabled?: boolean;
  
  /**
   * Custom styles
   */
  style?: React.CSSProperties;
  
  /**
   * Custom class name
   */
  className?: string;
}

export const FilterDropdown: React.FC<FilterDropdownProps> = ({
  label,
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  disabled = false,
  style,
  className = '',
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<FilterOption | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Find selected option based on value
  useEffect(() => {
    const option = options.find(opt => opt.value === value);
    setSelectedOption(option || null);
  }, [value, options]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setIsOpen(!isOpen);
    } else if (event.key === 'Escape') {
      setIsOpen(false);
    } else if (event.key === 'ArrowDown' && !isOpen) {
      event.preventDefault();
      setIsOpen(true);
    }
  };

  const handleOptionSelect = (option: FilterOption) => {
    setSelectedOption(option);
    onChange(option.value);
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  const handleOptionKeyDown = (event: React.KeyboardEvent, option: FilterOption) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleOptionSelect(option);
    } else if (event.key === 'Escape') {
      setIsOpen(false);
      triggerRef.current?.focus();
    }
  };

  const containerStyles: React.CSSProperties = {
    position: 'relative',
    display: 'inline-block',
    width: '100%',
    ...style,
  };

  const labelStyles: React.CSSProperties = {
    display: 'block',
    fontSize: typography.fontSize.body,
    fontWeight: typography.fontWeight.medium,
    color: colors.text.primary,
    marginBottom: spacing[2],
  };

  const triggerStyles: React.CSSProperties = {
    width: '100%',
    padding: `${spacing[3]} ${spacing[4]}`,
    paddingRight: spacing[10],
    border: `1px solid ${colors.border.medium}`,
    borderRadius: radii.md,
    backgroundColor: colors.background.light,
    color: colors.text.primary,
    fontSize: typography.fontSize.body,
    cursor: disabled ? 'not-allowed' : 'pointer',
    outline: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    opacity: disabled ? 0.6 : 1,
    transition: 'all 0.2s ease',
    boxShadow: 'none',
  };

  const triggerHoverStyles: React.CSSProperties = {
    borderColor: colors.primary,
    boxShadow: `0 0 0 1px ${colors.primary}`,
  };

  const triggerOpenStyles: React.CSSProperties = {
    borderColor: colors.primary,
    boxShadow: `0 0 0 1px ${colors.primary}`,
  };

  const dropdownStyles: React.CSSProperties = {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: colors.background.elevated,
    border: `1px solid ${colors.border.medium}`,
    borderRadius: radii.md,
    boxShadow: shadows.lg,
    marginTop: spacing[1],
    maxHeight: '200px',
    overflowY: 'auto',
    display: isOpen ? 'block' : 'none',
  };

  const optionStyles: React.CSSProperties = {
    padding: `${spacing[3]} ${spacing[4]}`,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: spacing[3],
    borderBottom: `1px solid ${colors.border.light}`,
    transition: 'background-color 0.2s ease',
  };

  const optionHoverStyles: React.CSSProperties = {
    backgroundColor: colors.background.hover,
  };

  const optionSelectedStyles: React.CSSProperties = {
    backgroundColor: colors.primary,
    color: colors.white,
  };

  const iconStyles: React.CSSProperties = {
    position: 'absolute',
    right: spacing[4],
    top: '50%',
    transform: 'translateY(-50%)',
    color: colors.text.secondary,
    transition: 'transform 0.2s ease',
  };

  const iconOpenStyles: React.CSSProperties = {
    transform: 'translateY(-50%) rotate(180deg)',
  };

  const checkIconStyles: React.CSSProperties = {
    width: '16px',
    height: '16px',
    flexShrink: 0,
  };

  return (
    <div
      ref={dropdownRef}
      className={`cria-filter-dropdown ${className}`}
      style={containerStyles}
      {...props}
    >
      <label style={labelStyles}>
        {label}
      </label>
      
      <button
        ref={triggerRef}
        type="button"
        disabled={disabled}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        style={{
          ...triggerStyles,
          ...(isOpen ? triggerOpenStyles : {}),
        }}
        onMouseEnter={(e) => {
          if (!disabled && !isOpen) {
            Object.assign(e.currentTarget.style, triggerHoverStyles);
          }
        }}
        onMouseLeave={(e) => {
          if (!disabled && !isOpen) {
            e.currentTarget.style.borderColor = colors.border.medium;
            e.currentTarget.style.boxShadow = 'none';
          }
        }}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={`${label} dropdown`}
      >
        <span>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <CaretDown
          size={16}
          style={{
            ...iconStyles,
            ...(isOpen ? iconOpenStyles : {}),
          }}
        />
      </button>

      <div
        role="listbox"
        aria-label={`${label} options`}
        style={dropdownStyles}
      >
        {options.map((option, index) => {
          const isSelected = selectedOption?.value === option.value;
          
          return (
            <div
              key={option.value}
              role="option"
              tabIndex={0}
              aria-selected={isSelected}
              onClick={() => handleOptionSelect(option)}
              onKeyDown={(e) => handleOptionKeyDown(e, option)}
              style={{
                ...optionStyles,
                ...(isSelected ? optionSelectedStyles : {}),
                borderBottom: index === options.length - 1 ? 'none' : optionStyles.borderBottom,
              }}
              onMouseEnter={(e) => {
                if (!isSelected) {
                  Object.assign(e.currentTarget.style, optionHoverStyles);
                }
              }}
              onMouseLeave={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              {isSelected && (
                <Check
                  size={16}
                  style={checkIconStyles}
                />
              )}
              <span>{option.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterDropdown;
