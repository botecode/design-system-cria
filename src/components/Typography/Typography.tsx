import React from 'react';
import { typography, TypographyVariant, colors } from '../../tokens';
import './Typography.css';

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
 * IMPORTANT: This is a low-level primitive used internally by semantic text
 * components in `TextTokens/CriaText`. Prefer using `CriaText*` wrappers
 * (e.g., `CriaTextHeadline1`, `CriaTextTitle1`, `CriaTextBody1`, etc.) in
 * product code and demos. The `Typography` primitive exists to feed and power
 * `CriaText` and should not be used directly except when building new
 * semantic wrappers.
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

  // Get color styles based on color variant (minimal, most styles are in CSS)
  const getColorStyles = (color: string): React.CSSProperties => {
    // Color is now handled by CSS classes, only return empty object
    return {};
  };

  // Check if this is a title variant
  const isTitleVariant = variant === 'title1' || variant === 'title2' || variant === 'title3';
  
  // Build inline styles (minimal, most styles are in CSS)
  const styles: React.CSSProperties = {
    // Most styling is now handled by CSS classes
  };

  return (
    <Element className={`${classes} ${isTitleVariant ? 'cria-typography--title' : ''}`} style={styles} {...(props as any)}>
      {children}
    </Element>
  );
};

export default Typography;
