import React from 'react';

export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Gap between row items
   * @default 'md'
   */
  gap?: 'sm' | 'md' | 'lg';
  
  /**
   * Alignment of items along the cross axis
   * @default 'stretch'
   */
  align?: 'start' | 'center' | 'end' | 'stretch';
  
  /**
   * Justification of items along the main axis
   * @default 'start'
   */
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  
  /**
   * Whether items should wrap to new lines
   * @default true
   */
  wrap?: boolean;
  
  /**
   * Direction of the flex container
   * @default 'row'
   */
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  
  /**
   * Children elements
   */
  children?: React.ReactNode;
}

export const Row: React.FC<RowProps> = ({
  gap = 'md',
  align = 'stretch',
  justify = 'start',
  wrap = true,
  direction = 'row',
  className = '',
  style = {},
  children,
  ...props
}) => {
  // Build CSS classes
  const baseClasses = ['cria-row'];
  
  // Add gap class
  baseClasses.push(`cria-row--gap-${gap}`);
  
  // Add alignment class
  baseClasses.push(`cria-row--align-${align}`);
  
  // Add justification class
  baseClasses.push(`cria-row--justify-${justify}`);
  
  // Add wrap class
  if (wrap) {
    baseClasses.push('cria-row--wrap');
  } else {
    baseClasses.push('cria-row--no-wrap');
  }
  
  // Add direction class
  baseClasses.push(`cria-row--direction-${direction}`);
  
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
