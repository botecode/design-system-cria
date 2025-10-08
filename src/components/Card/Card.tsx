import React from 'react';
import { colors, spacing, radii, shadows } from '../../tokens';
import './Card.css';

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

  // Build inline styles (minimal, most styles are in CSS)
  const cardStyles: React.CSSProperties = {
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
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
