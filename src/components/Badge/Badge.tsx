import React, { useMemo } from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Badge variant
   */
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  
  /**
   * Badge size
   */
  size?: 'sm' | 'md' | 'lg';
  
  /**
   * Badge style
   */
  badgeStyle?: 'solid' | 'outline' | 'soft';
  
  /**
   * Whether the badge is interactive (clickable)
   */
  interactive?: boolean;
  
  /**
   * Whether the badge is disabled
   */
  disabled?: boolean;
  
  /**
   * Badge content
   */
  children: React.ReactNode;
  
  /**
   * Optional icon to display before the text
   */
  leftIcon?: React.ReactNode;
  
  /**
   * Optional icon to display after the text
   */
  rightIcon?: React.ReactNode;
  
  /**
   * Maximum number of characters to display (for count badges)
   */
  maxCount?: number;
  
  /**
   * Whether to show a dot instead of text (for notification badges)
   */
  dot?: boolean;
}

/**
 * Badge component for displaying status, counts, and labels
 */
export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  size = 'md',
  badgeStyle = 'solid',
  interactive = false,
  disabled = false,
  children,
  leftIcon,
  rightIcon,
  maxCount,
  dot = false,
  className = '',
  style,
  ...props
}) => {
  // Handle count truncation
  const displayContent = useMemo(() => {
    if (dot) return null;
    
    if (typeof children === 'number' && maxCount && children > maxCount) {
      return `${maxCount}+`;
    }
    
    return children;
  }, [children, maxCount, dot]);

  // Generate CSS classes
  const classes = [
    'cria-badge',
    `cria-badge--${variant}`,
    `cria-badge--${size}`,
    `cria-badge--${badgeStyle}`,
    interactive ? 'cria-badge--interactive' : null,
    disabled ? 'cria-badge--disabled' : null,
    dot ? 'cria-badge--dot' : null,
    className,
  ].filter(Boolean).join(' ');

  // Generate inline styles
  const badgeStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '4px',
    fontFamily: 'var(--cria-font-family)',
    fontWeight: 'var(--cria-font-weight-medium)',
    lineHeight: '1',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'baseline',
    borderRadius: 'var(--cria-radius-full)',
    transition: 'all 0.2s ease-in-out',
    ...style,
  };

  // Handle click events for interactive badges
  const handleClick = (event: React.MouseEvent<HTMLSpanElement>) => {
    if (disabled || !interactive) return;
    props.onClick?.(event);
  };

  // Handle keyboard events for accessibility
  const handleKeyDown = (event: React.KeyboardEvent<HTMLSpanElement>) => {
    if (disabled || !interactive) return;
    
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      props.onClick?.(event as any);
    }
  };

  // Extract onClick and onKeyDown from props to avoid conflicts
  const { onClick, onKeyDown, ...restProps } = props as any;

  return (
    <span
      className={classes}
      style={badgeStyles}
      onClick={interactive ? handleClick : undefined}
      onKeyDown={interactive ? handleKeyDown : undefined}
      role={interactive ? 'button' : undefined}
      tabIndex={interactive && !disabled ? 0 : undefined}
      aria-disabled={disabled}
      {...restProps}
    >
      {leftIcon && !dot && (
        <span className="cria-badge__icon cria-badge__icon--left">
          {leftIcon}
        </span>
      )}
      
      {!dot && displayContent && (
        <span className="cria-badge__content">
          {displayContent}
        </span>
      )}
      
      {rightIcon && !dot && (
        <span className="cria-badge__icon cria-badge__icon--right">
          {rightIcon}
        </span>
      )}
    </span>
  );
};

export default Badge;
