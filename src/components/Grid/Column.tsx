import React from 'react';

export interface ColumnProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Number of grid columns to span
   * @default 12
   */
  span?: number | { sm?: number; md?: number; lg?: number; xl?: number };
  
  /**
   * Number of grid columns to offset
   * @default 0
   */
  offset?: number | { sm?: number; md?: number; lg?: number; xl?: number };
  
  /**
   * Alignment of content along the cross axis
   * @default 'stretch'
   */
  align?: 'start' | 'center' | 'end' | 'stretch';
  
  /**
   * Justification of content along the main axis
   * @default 'start'
   */
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  
  /**
   * Auto width column (takes available space)
   * @default false
   */
  auto?: boolean;
  
  /**
   * Full width column (spans all available columns)
   * @default false
   */
  full?: boolean;
  
  /**
   * Children elements
   */
  children?: React.ReactNode;
}

export const Column: React.FC<ColumnProps> = ({
  span = 12,
  offset = 0,
  align = 'stretch',
  justify = 'start',
  auto = false,
  full = false,
  className = '',
  style = {},
  children,
  ...props
}) => {
  // Build CSS classes
  const baseClasses = ['cria-column'];
  
  // Add span classes
  if (typeof span === 'number') {
    baseClasses.push(`cria-column--span-${span}`);
  } else {
    // Responsive span
    if (span.sm !== undefined) {
      baseClasses.push(`cria-column--span-sm-${span.sm}`);
    }
    if (span.md !== undefined) {
      baseClasses.push(`cria-column--span-md-${span.md}`);
    }
    if (span.lg !== undefined) {
      baseClasses.push(`cria-column--span-lg-${span.lg}`);
    }
    if (span.xl !== undefined) {
      baseClasses.push(`cria-column--span-xl-${span.xl}`);
    }
  }
  
  // Add offset classes
  if (typeof offset === 'number' && offset > 0) {
    baseClasses.push(`cria-column--offset-${offset}`);
  } else if (typeof offset === 'object') {
    // Responsive offset
    if (offset.sm !== undefined) {
      baseClasses.push(`cria-column--offset-sm-${offset.sm}`);
    }
    if (offset.md !== undefined) {
      baseClasses.push(`cria-column--offset-md-${offset.md}`);
    }
    if (offset.lg !== undefined) {
      baseClasses.push(`cria-column--offset-lg-${offset.lg}`);
    }
    if (offset.xl !== undefined) {
      baseClasses.push(`cria-column--offset-xl-${offset.xl}`);
    }
  }
  
  // Add alignment class
  baseClasses.push(`cria-column--align-${align}`);
  
  // Add justification class
  baseClasses.push(`cria-column--justify-${justify}`);
  
  // Add auto/full width classes
  if (auto) {
    baseClasses.push('cria-column--auto');
  }
  if (full) {
    baseClasses.push('cria-column--full');
  }
  
  // Add custom className
  if (className) {
    baseClasses.push(className);
  }
  
  const classes = baseClasses.join(' ');
  
  return (
    <div
      className={classes}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};
