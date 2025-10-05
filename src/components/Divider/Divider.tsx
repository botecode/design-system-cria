import React from 'react';
import { colors, spacing, radii } from '../../tokens';

export interface DividerProps {
  /**
   * Orientation of the divider
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
  
  /**
   * Visual variant of the divider
   * @default 'solid'
   */
  variant?: 'solid' | 'dashed' | 'dotted';
  
  /**
   * Size of the divider
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  
  /**
   * Color theme of the divider
   * @default 'gray'
   */
  color?: 'primary' | 'secondary' | 'gray';
  
  /**
   * Text label to display in the divider (horizontal only)
   */
  label?: string;
  
  /**
   * Position of the label
   * @default 'center'
   */
  labelPosition?: 'start' | 'center' | 'end';
  
  /**
   * Custom width (for horizontal dividers) or height (for vertical dividers)
   */
  width?: string | number;
  height?: string | number;
  
  /**
   * Spacing around the divider
   * @default 'md'
   */
  spacing?: 'sm' | 'md' | 'lg';
  
  /**
   * Additional CSS class name
   */
  className?: string;
  
  /**
   * Additional CSS styles
   */
  style?: React.CSSProperties;
  
  /**
   * Data attributes for testing
   */
  'data-testid'?: string;
  [key: `data-${string}`]: any;
}

export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  variant = 'solid',
  size = 'md',
  color = 'gray',
  label,
  labelPosition = 'center',
  width,
  height,
  spacing: spacingProp = 'md',
  className = '',
  style = {},
  'data-testid': dataTestId,
  ...dataAttributes
}) => {
  // Build CSS classes
  const baseClasses = ['cria-divider'];
  
  // Add orientation class
  if (orientation === 'vertical') {
    baseClasses.push('cria-divider--vertical');
  }
  
  // Add variant class
  baseClasses.push(`cria-divider--${variant}`);
  
  // Add size class
  baseClasses.push(`cria-divider--${size}`);
  
  // Add color class
  baseClasses.push(`cria-divider--${color}`);
  
  // Add spacing class
  baseClasses.push(`cria-divider--spacing-${spacingProp}`);
  
  // Add custom className
  if (className) {
    baseClasses.push(className);
  }
  
  const classes = baseClasses.join(' ');
  
  // Build inline styles
  const inlineStyles: React.CSSProperties = {
    ...style,
  };
  
  // Apply width/height based on orientation
  if (orientation === 'horizontal') {
    if (width !== undefined) {
      inlineStyles.width = typeof width === 'number' ? `${width}px` : width;
    }
  } else {
    if (height !== undefined) {
      inlineStyles.height = typeof height === 'number' ? `${height}px` : height;
    }
  }
  
  // Build data attributes
  const dataProps: Record<string, any> = {
    'data-testid': dataTestId,
  };
  
  // Add other data attributes
  Object.entries(dataAttributes).forEach(([key, value]) => {
    if (key.startsWith('data-')) {
      dataProps[key] = value;
    }
  });
  
  // Render divider with label if provided
  if (label && orientation === 'horizontal') {
    return (
      <div
        className={`${classes} cria-divider--with-label`}
        style={inlineStyles}
        role="separator"
        aria-orientation={orientation}
        {...dataProps}
      >
        <div className="cria-divider__line cria-divider__line--before" />
        <span className={`cria-divider__label cria-divider__label--${labelPosition}`}>
          {label}
        </span>
        <div className="cria-divider__line cria-divider__line--after" />
      </div>
    );
  }
  
  // Render simple divider
  return (
    <div
      className={classes}
      style={inlineStyles}
      role="separator"
      aria-orientation={orientation}
      {...dataProps}
    />
  );
};
