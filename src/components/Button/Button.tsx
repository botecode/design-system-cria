import React from 'react';
import { colors, spacing, radii, shadows } from '../../tokens';
import './Button.css';

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

  // Build inline styles (minimal, most styles are in CSS)
  const buttonStyles: React.CSSProperties = {
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
        <div className="cria-button__spinner" />
      )}
      <span className="cria-button__content" style={{ opacity: loading ? 0 : 1 }}>
        {leftIcon && <span>{leftIcon}</span>}
        {children}
        {rightIcon && <span>{rightIcon}</span>}
      </span>
    </button>
  );
});

Button.displayName = 'Button';


export default Button;
