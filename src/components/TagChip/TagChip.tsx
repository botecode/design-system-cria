import React, { forwardRef } from 'react';
import { X, Check } from 'phosphor-react';
import { colors, spacing, typography, radii, shadows } from '../../tokens';

export interface TagChipProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'> {
  /**
   * The text content of the tag/chip
   */
  label: string;
  
  /**
   * Visual variant of the tag/chip
   * @default 'default'
   */
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  
  /**
   * Size of the tag/chip
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  
  /**
   * Visual style of the tag/chip
   * @default 'filled'
   */
  visualStyle?: 'filled' | 'outlined' | 'soft' | 'ghost';
  
  /**
   * Icon to display before the label
   */
  icon?: React.ReactNode;
  
  /**
   * Whether the tag/chip is clickable
   * @default false
   */
  clickable?: boolean;
  
  /**
   * Whether the tag/chip can be removed
   * @default false
   */
  removable?: boolean;
  
  /**
   * Whether the tag/chip is disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Whether the tag/chip is in a loading state
   * @default false
   */
  loading?: boolean;
  
  /**
   * Whether the tag/chip is selected
   * @default false
   */
  selected?: boolean;
  
  /**
   * Custom close icon for removable chips
   */
  closeIcon?: React.ReactNode;
  
  /**
   * Click handler for clickable chips
   */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  
  /**
   * Remove handler for removable chips
   */
  onRemove?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  
  /**
   * Custom CSS class name
   */
  className?: string;
  
  /**
   * Custom CSS styles
   */
  style?: React.CSSProperties;
}

export const TagChip = forwardRef<HTMLDivElement, TagChipProps>(({
  label,
  variant = 'default',
  size = 'md',
  visualStyle: styleProp = 'filled',
  icon,
  clickable = false,
  removable = false,
  disabled = false,
  loading = false,
  selected = false,
  closeIcon,
  onClick,
  onRemove,
  className = '',
  style = {},
  ...props
}, ref) => {
  // Color mappings
  const colorMap = {
    default: colors.gray,
    primary: colors.primary,
    secondary: colors.secondary,
    success: colors.success,
    warning: colors.warning,
    error: colors.error,
    info: colors.info,
  };

  // Size configurations
  const sizeConfig = {
    sm: {
      padding: `${spacing[1]} ${spacing[2]}`,
      fontSize: typography.fontSize.caption,
      iconSize: '0.875rem',
      borderRadius: radii.sm,
      minHeight: '1.5rem',
    },
    md: {
      padding: `${spacing[2]} ${spacing[3]}`,
      fontSize: typography.fontSize.body2,
      iconSize: '1rem',
      borderRadius: radii.md,
      minHeight: '2rem',
    },
    lg: {
      padding: `${spacing[3]} ${spacing[4]}`,
      fontSize: typography.fontSize.body,
      iconSize: '1.125rem',
      borderRadius: radii.lg,
      minHeight: '2.5rem',
    },
  };

  const config = sizeConfig[size];
  const selectedColor = colorMap[variant];

  // Style configurations
  const getStyleConfig = () => {
    const baseStyles = {
      display: 'inline-flex',
      alignItems: 'center',
      gap: spacing[1],
      padding: config.padding,
      fontSize: config.fontSize,
      fontWeight: typography.fontWeight.medium,
      borderRadius: config.borderRadius,
      minHeight: config.minHeight,
      transition: 'all 0.2s ease',
      cursor: clickable && !disabled ? 'pointer' : 'default',
      opacity: disabled ? 0.6 : 1,
      userSelect: 'none' as const,
      outline: 'none',
      border: 'none',
      position: 'relative' as const,
      ...style,
    };

    switch (styleProp) {
      case 'filled':
        return {
          ...baseStyles,
          backgroundColor: selected ? selectedColor[600] : selectedColor[500],
          color: colors.white,
          ...(clickable && !disabled && {
            '&:hover': {
              backgroundColor: selectedColor[600],
              transform: 'translateY(-1px)',
              boxShadow: shadows.md,
            },
            '&:active': {
              transform: 'translateY(0)',
            },
          }),
        };

      case 'outlined':
        return {
          ...baseStyles,
          backgroundColor: 'transparent',
          color: selected ? selectedColor[600] : selectedColor[500],
          border: `1px solid ${selected ? selectedColor[600] : selectedColor[500]}`,
          ...(clickable && !disabled && {
            '&:hover': {
              backgroundColor: `${selectedColor[500]}10`,
              borderColor: selectedColor[600],
            },
          }),
        };

      case 'soft':
        return {
          ...baseStyles,
          backgroundColor: `${selectedColor[500]}15`,
          color: selectedColor[700],
          ...(clickable && !disabled && {
            '&:hover': {
              backgroundColor: `${selectedColor[500]}25`,
            },
          }),
        };

      case 'ghost':
        return {
          ...baseStyles,
          backgroundColor: 'transparent',
          color: selectedColor[600],
          ...(clickable && !disabled && {
            '&:hover': {
              backgroundColor: `${selectedColor[500]}10`,
            },
          }),
        };

      default:
        return baseStyles;
    }
  };

  const styleConfig = getStyleConfig();

  // Handle click events
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (clickable && !disabled && !loading && onClick) {
      onClick(event);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (clickable && !disabled && !loading && (event.key === 'Enter' || event.key === ' ') && onClick) {
      event.preventDefault();
      onClick(event as any);
    }
  };

  const handleRemoveClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading || !onRemove) return;
    
    event.stopPropagation();
    onRemove(event);
  };

  const handleRemoveKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (disabled || loading || !onRemove) return;
    
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      event.stopPropagation();
      onRemove(event as any);
    }
  };

  const Component = clickable ? 'button' : 'div';

  return (
    <Component
      ref={ref}
      className={`tag-chip variant-${variant} size-${size} style-${styleProp} ${className} ${clickable ? 'clickable' : ''} ${disabled ? 'disabled' : ''} ${loading ? 'loading' : ''} ${selected ? 'selected' : ''}`}
      style={styleConfig}
      role={clickable ? "button" : "region"}
      aria-label={label}
      aria-pressed={clickable ? selected : undefined}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={clickable && !disabled ? 0 : undefined}
      disabled={clickable && disabled}
      {...props}
    >
      {/* Loading spinner */}
      {loading && (
        <div 
          className="loading-spinner"
          style={{
            width: config.iconSize,
            height: config.iconSize,
            border: `2px solid ${colors.gray[300]}`,
            borderTop: `2px solid ${selectedColor[500]}`,
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            marginRight: spacing[1],
          }}
        />
      )}

      {/* Icon */}
      {icon && !loading && (
        <span 
          className="tag-chip-icon"
          style={{ 
            fontSize: config.iconSize,
            display: 'inline-flex',
            alignItems: 'center',
          }}
        >
          {icon}
        </span>
      )}

      {/* Label */}
      <span 
        className="tag-chip-label"
        style={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap' as const,
          maxWidth: '200px',
        }}
      >
        {label}
      </span>

      {/* Remove button */}
      {removable && !loading && (
        <button
          className="tag-chip-remove"
          type="button"
          aria-label={`Remove ${label}`}
          onClick={handleRemoveClick}
          onKeyDown={handleRemoveKeyDown}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: config.iconSize,
            height: config.iconSize,
            backgroundColor: 'transparent',
            border: 'none',
            borderRadius: '50%',
            cursor: disabled ? 'not-allowed' : 'pointer',
            marginLeft: spacing[1],
            transition: 'background-color 0.2s ease',
            ...(styleProp === 'filled' && {
              color: colors.white,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              },
            }),
            ...(styleProp !== 'filled' && {
              color: 'inherit',
              '&:hover': {
                backgroundColor: `${selectedColor[500]}20`,
              },
            }),
          }}
          disabled={disabled}
        >
          {closeIcon || <X size={parseInt(config.iconSize) * 0.75} />}
        </button>
      )}

      {/* CSS animations */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .tag-chip.clickable:focus {
          outline: 2px solid ${selectedColor[500]};
          outline-offset: 2px;
        }

        .tag-chip.clickable:focus-visible {
          outline: 2px solid ${selectedColor[500]};
          outline-offset: 2px;
        }

        .tag-chip-remove:focus {
          outline: 2px solid ${selectedColor[500]};
          outline-offset: 1px;
        }

        .tag-chip-remove:focus-visible {
          outline: 2px solid ${selectedColor[500]};
          outline-offset: 1px;
        }
      `}</style>
    </Component>
  );
});

TagChip.displayName = 'TagChip';

export default TagChip;
