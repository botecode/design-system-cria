import React from 'react';
import { typography, TypographyVariant } from '../../tokens';

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * The typography variant to use
   */
  variant?: TypographyVariant;
  /**
   * The HTML element to render
   */
  as?: keyof JSX.IntrinsicElements;
  /**
   * Text color variant
   */
  color?: 'primary' | 'primaryLight' | 'content' | 'secondary' | 'secondaryDark' | 'disabled' | 'inverse' | 'success' | 'warning' | 'error' | 'info';
  /**
   * Font weight
   */
  weight?: 'thin' | 'extraLight' | 'light' | 'regular' | 'medium' | 'semiBold' | 'bold' | 'extraBold' | 'heavy';
  /**
   * Line height
   */
  lineHeight?: 'tight' | 'normal' | 'relaxed';
  /**
   * Letter spacing
   */
  letterSpacing?: 'tight' | 'normal' | 'wide';
  /**
   * Text alignment
   */
  align?: 'left' | 'center' | 'right' | 'justify';
  /**
   * Text content
   */
  children: React.ReactNode;
}

/**
 * Typography component for consistent text styling across the design system
 * 
 * @example
 * ```tsx
 * <Typography variant="h1" color="primary">
 *   Welcome to CRIA
 * </Typography>
 * ```
 */
export const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  as,
  className = '',
  color,
  weight = 'regular',
  lineHeight = 'normal',
  letterSpacing = 'normal',
  align = 'left',
  children,
  ...props
}) => {
  // Determine the HTML element to render
  const getElement = (): keyof JSX.IntrinsicElements => {
    if (as) return as;
    
    switch (variant) {
      case 'display':
      case 'h1':
      case 'title1':
        return 'h1';
      case 'h2':
      case 'title2':
        return 'h2';
      case 'h3':
      case 'title3':
        return 'h3';
      case 'body':
      case 'bodySmall':
        return 'p';
      case 'caption':
        return 'span';
      default:
        return 'p';
    }
  };

  const Element = getElement();

  // Build CSS classes
  const classes = [
    'cria-typography',
    `cria-typography--${variant}`,
    color ? `cria-typography--color-${color}` : null,
    `cria-typography--weight-${weight}`,
    `cria-typography--line-height-${lineHeight}`,
    `cria-typography--letter-spacing-${letterSpacing}`,
    `cria-typography--align-${align}`,
    className,
  ].filter(Boolean).join(' ');

  // Get color styles based on color variant
  const getColorStyles = (color: string): React.CSSProperties => {
    switch (color) {
      case 'primary':
        return { color: '#7566A1' }; // Main brand purple - ONLY for titles
      case 'primaryLight':
        return { color: '#3A2E52' }; // Primary light/darker
      case 'content':
        return { color: '#3A2E52' }; // Primary light/darker for content text
      case 'secondary':
        return { color: '#28DDB9' }; // Secondary brand teal
      case 'secondaryDark':
        return { color: '#167B7A' }; // Secondary dark
      case 'disabled':
        return { color: '#9CA3AF' };
      case 'inverse':
        return { color: '#FFFFFF' };
      case 'success':
        return { color: '#10B981' };
      case 'warning':
        return { color: '#F59E0B' };
      case 'error':
        return { color: '#EF4444' };
      case 'info':
        return { color: '#3B82F6' };
      default:
        return { color: '#374151' }; // ALL TEXT uses dark gray by default
    }
  };

  // Check if this is a title variant
  const isTitleVariant = variant === 'title1' || variant === 'title2' || variant === 'title3';
  
  // Build inline styles
  const styles: React.CSSProperties = {
    fontFamily: typography.fontFamily.primary,
    fontSize: typography.fontSize[variant],
    fontWeight: typography.fontWeight[weight],
    lineHeight: typography.lineHeight[lineHeight],
    letterSpacing: typography.letterSpacing[letterSpacing],
    textAlign: align,
    margin: 0,
    textTransform: isTitleVariant ? 'uppercase' : 'none',
    ...getColorStyles(isTitleVariant ? 'primary' : (color || 'default')),
  };

  return (
    <Element className={classes} style={styles} {...(props as any)}>
      {children}
    </Element>
  );
};

export default Typography;
