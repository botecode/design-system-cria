import React from 'react';
import { spacing } from '../../tokens';

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Number of columns for the grid
   * @default 12
   */
  columns?: number | { sm?: number; md?: number; lg?: number; xl?: number };
  
  /**
   * Gap between grid items
   * @default 'md'
   */
  gap?: 'sm' | 'md' | 'lg';
  
  /**
   * Alignment of grid items along the cross axis
   * @default 'stretch'
   */
  align?: 'start' | 'center' | 'end' | 'stretch';
  
  /**
   * Justification of grid items along the main axis
   * @default 'start'
   */
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  
  /**
   * Enable auto-fit columns (responsive)
   * @default false
   */
  autoFit?: boolean;
  
  /**
   * Enable auto-fill columns (responsive)
   * @default false
   */
  autoFill?: boolean;
  
  /**
   * Minimum width for auto-fit/auto-fill columns
   * @default '250px'
   */
  minColumnWidth?: string;
  
  /**
   * Children elements
   */
  children?: React.ReactNode;
}

export const Grid: React.FC<GridProps> = ({
  columns = 12,
  gap = 'md',
  align = 'stretch',
  justify = 'start',
  autoFit = false,
  autoFill = false,
  minColumnWidth = '250px',
  className = '',
  style = {},
  children,
  ...props
}) => {
  // Build CSS classes
  const baseClasses = ['cria-grid'];
  
  // Add gap class
  baseClasses.push(`cria-grid--gap-${gap}`);
  
  // Add alignment class
  baseClasses.push(`cria-grid--align-${align}`);
  
  // Add justification class
  baseClasses.push(`cria-grid--justify-${justify}`);
  
  // Handle columns configuration
  if (typeof columns === 'number') {
    baseClasses.push(`cria-grid--cols-${columns}`);
  } else {
    // Responsive columns
    if (columns.sm !== undefined) {
      baseClasses.push(`cria-grid--cols-sm-${columns.sm}`);
    }
    if (columns.md !== undefined) {
      baseClasses.push(`cria-grid--cols-md-${columns.md}`);
    }
    if (columns.lg !== undefined) {
      baseClasses.push(`cria-grid--cols-lg-${columns.lg}`);
    }
    if (columns.xl !== undefined) {
      baseClasses.push(`cria-grid--cols-xl-${columns.xl}`);
    }
  }
  
  // Add auto-fit/auto-fill classes
  if (autoFit) {
    baseClasses.push('cria-grid--auto-fit');
  }
  if (autoFill) {
    baseClasses.push('cria-grid--auto-fill');
  }
  
  // Add custom className
  if (className) {
    baseClasses.push(className);
  }
  
  const classes = baseClasses.join(' ');
  
  // Build inline styles
  const inlineStyles: React.CSSProperties = {
    ...style,
  };
  
  // Handle auto-fit/auto-fill with min column width
  if (autoFit || autoFill) {
    const templateType = autoFit ? 'auto-fit' : 'auto-fill';
    inlineStyles.gridTemplateColumns = `repeat(${templateType}, minmax(${minColumnWidth}, 1fr))`;
  }
  
  // Handle minColumnWidth without autoFit/autoFill
  if (!autoFit && !autoFill && minColumnWidth !== '250px') {
    inlineStyles.gridTemplateColumns = `repeat(auto-fit, minmax(${minColumnWidth}, 1fr))`;
  }
  
  return (
    <div
      className={classes}
      style={inlineStyles}
      {...props}
    >
      {children}
    </div>
  );
};
