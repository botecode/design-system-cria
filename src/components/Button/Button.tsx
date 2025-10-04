import React from 'react';
import { colors, spacing, radii, shadows } from '../../tokens';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button variant
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  /**
   * Button size
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Whether the button is in a loading state
   */
  loading?: boolean;
  /**
   * Whether the button is disabled
   */
  disabled?: boolean;
  /**
   * Icon to display before the text
   */
  leftIcon?: React.ReactNode;
  /**
   * Icon to display after the text
   */
  rightIcon?: React.ReactNode;
  /**
   * Whether the button should take full width
   */
  fullWidth?: boolean;
  /**
   * Button content
   */
  children: React.ReactNode;
}

/**
 * Button component for user interactions
 * 
 * @example
 * ```tsx
 * <Button variant="primary" size="md" onClick={handleClick}>
 *   Click me
 * </Button>
 * ```
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  children,
  className = '',
  style,
  ...props
}, ref) => {
  const isDisabled = disabled || loading;

  // Build CSS classes
  const classes = [
    'cria-button',
    `cria-button--${variant}`,
    `cria-button--${size}`,
    fullWidth && 'cria-button--full-width',
    loading && 'cria-button--loading',
    isDisabled && 'cria-button--disabled',
    className,
  ].filter(Boolean).join(' ');

  // Build inline styles
  const buttonStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing[2],
    fontFamily: 'var(--cria-font-family)',
    fontWeight: 500,
    textDecoration: 'none',
    border: 'none',
    borderRadius: radii.md,
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s ease-in-out',
    position: 'relative',
    width: fullWidth ? '100%' : 'auto',
    ...getVariantStyles(variant),
    ...getSizeStyles(size),
    ...style,
  };

  return (
    <button
      ref={ref}
      className={classes}
      style={buttonStyles}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      {...props}
    >
      {loading && (
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '16px',
            height: '16px',
            border: '2px solid transparent',
            borderTop: '2px solid currentColor',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
          }}
        />
      )}
      <span style={{ opacity: loading ? 0 : 1, display: 'flex', alignItems: 'center', gap: spacing[2] }}>
        {leftIcon && <span>{leftIcon}</span>}
        {children}
        {rightIcon && <span>{rightIcon}</span>}
      </span>
    </button>
  );
});

Button.displayName = 'Button';

// Helper function to get variant-specific styles
function getVariantStyles(variant: ButtonProps['variant']): React.CSSProperties {
  switch (variant) {
    case 'primary':
      return {
        backgroundColor: colors.primary,
        color: colors.white,
        boxShadow: shadows.sm,
      };
    case 'secondary':
      return {
        backgroundColor: colors.secondary,
        color: colors.white,
        boxShadow: shadows.sm,
      };
    case 'outline':
      return {
        backgroundColor: 'transparent',
        color: colors.primary,
        border: `1px solid ${colors.primary}`,
      };
    case 'ghost':
      return {
        backgroundColor: 'transparent',
        color: colors.primary,
      };
    case 'danger':
      return {
        backgroundColor: colors.error,
        color: colors.white,
        boxShadow: shadows.sm,
      };
    default:
      return {};
  }
}


// Helper function to get size-specific styles
function getSizeStyles(size: ButtonProps['size']): React.CSSProperties {
  switch (size) {
    case 'sm':
      return {
        padding: `${spacing[2]} ${spacing[3]}`,
        fontSize: '14px',
        minHeight: '32px',
      };
    case 'md':
      return {
        padding: `${spacing[3]} ${spacing[4]}`,
        fontSize: '16px',
        minHeight: '40px',
      };
    case 'lg':
      return {
        padding: `${spacing[4]} ${spacing[6]}`,
        fontSize: '18px',
        minHeight: '48px',
      };
    default:
      return {};
  }
}

export default Button;
