import React from 'react';
import { colors, spacing, radii, shadows } from '../../tokens';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Card variant
   */
  variant?: 'default' | 'elevated' | 'outlined' | 'filled';
  /**
   * Card size
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Whether the card is interactive (clickable)
   */
  interactive?: boolean;
  /**
   * Whether the card is disabled
   */
  disabled?: boolean;
  /**
   * Card content
   */
  children: React.ReactNode;
}

/**
 * Card component for grouping related content
 * 
 * @example
 * ```tsx
 * <Card variant="elevated" size="md">
 *   <CardHeader>Title</CardHeader>
 *   <CardContent>Content goes here</CardContent>
 * </Card>
 * ```
 */
export const Card: React.FC<CardProps> = ({
  variant = 'default',
  size = 'md',
  interactive = false,
  disabled = false,
  children,
  className = '',
  style,
  ...props
}) => {
  // Build CSS classes
  const classes = [
    'cria-card',
    `cria-card--${variant}`,
    `cria-card--${size}`,
    interactive && 'cria-card--interactive',
    disabled && 'cria-card--disabled',
    className,
  ].filter(Boolean).join(' ');

  // Build inline styles
  const cardStyles: React.CSSProperties = {
    borderRadius: radii.md,
    overflow: 'hidden',
    position: 'relative',
    cursor: interactive && !disabled ? 'pointer' : 'default',
    transition: 'all 0.2s ease-in-out',
    ...getVariantStyles(variant as CardProps['variant']),
    ...getSizeStyles(size as CardProps['size']),
    ...style,
  };

  return (
    <div
      className={classes}
      style={cardStyles}
      {...props}
    >
      {children}
    </div>
  );
};

// Helper function to get variant-specific styles
function getVariantStyles(variant: CardProps['variant']): React.CSSProperties {
  switch (variant) {
    case 'default':
      return {
        backgroundColor: colors.backgroundLight,
        border: `1px solid ${colors.border.light}`,
      };
    case 'elevated':
      return {
        backgroundColor: colors.backgroundLight,
        boxShadow: shadows.md,
        border: 'none',
      };
    case 'outlined':
      return {
        backgroundColor: 'transparent',
        border: `2px solid ${colors.border.medium}`,
      };
    case 'filled':
      return {
        backgroundColor: colors.gray[50],
        border: 'none',
      };
    default:
      return {};
  }
}

// Helper function to get size-specific styles
function getSizeStyles(size: CardProps['size']): React.CSSProperties {
  switch (size) {
    case 'sm':
      return {
        padding: spacing[3],
      };
    case 'md':
      return {
        padding: spacing[4],
      };
    case 'lg':
      return {
        padding: spacing[6],
      };
    default:
      return {};
  }
}

/**
 * Card Header component
 */
export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  className = '',
  style,
  ...props
}) => {
  const classes = ['cria-card-header', className].filter(Boolean).join(' ');

  return (
    <div
      className={classes}
      style={{
        marginBottom: spacing[4],
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Card Content component
 */
export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardContent: React.FC<CardContentProps> = ({
  children,
  className = '',
  style,
  ...props
}) => {
  const classes = ['cria-card-content', className].filter(Boolean).join(' ');

  return (
    <div
      className={classes}
      style={{
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Card Footer component
 */
export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardFooter: React.FC<CardFooterProps> = ({
  children,
  className = '',
  style,
  ...props
}) => {
  const classes = ['cria-card-footer', className].filter(Boolean).join(' ');

  return (
    <div
      className={classes}
      style={{
        marginTop: spacing[4],
        paddingTop: spacing[4],
        borderTop: `1px solid ${colors.border.light}`,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
