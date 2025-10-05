import React from 'react';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Maximum width of the container
   * @default 'lg'
   */
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | string;
  
  /**
   * Padding size around the container
   * @default 'md'
   */
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | { sm?: 'none' | 'sm' | 'md' | 'lg' | 'xl'; md?: 'none' | 'sm' | 'md' | 'lg' | 'xl'; lg?: 'none' | 'sm' | 'md' | 'lg' | 'xl' };
  
  /**
   * Margin size around the container
   * @default 'none'
   */
  margin?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | { sm?: 'none' | 'sm' | 'md' | 'lg' | 'xl'; md?: 'none' | 'sm' | 'md' | 'lg' | 'xl'; lg?: 'none' | 'sm' | 'md' | 'lg' | 'xl' };
  
  /**
   * Whether to center the container horizontally
   * @default false
   */
  center?: boolean;
  
  /**
   * Whether to make the container fluid (full width)
   * @default false
   */
  fluid?: boolean;
  
  /**
   * Children elements
   */
  children?: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  maxWidth = 'lg',
  padding = 'md',
  margin = 'none',
  center = false,
  fluid = false,
  className = '',
  style = {},
  children,
  ...props
}) => {
  // Build CSS classes
  const baseClasses = ['cria-container'];
  
  // Add max width class
  if (typeof maxWidth === 'string' && !['sm', 'md', 'lg', 'xl', '2xl', 'full'].includes(maxWidth)) {
    // Custom max width value - will be handled via inline styles
  } else {
    baseClasses.push(`cria-container--max-width-${maxWidth}`);
  }
  
  // Add padding classes
  if (typeof padding === 'string') {
    baseClasses.push(`cria-container--padding-${padding}`);
  } else {
    // Responsive padding
    if (padding.sm !== undefined) {
      baseClasses.push(`cria-container--padding-sm-${padding.sm}`);
    }
    if (padding.md !== undefined) {
      baseClasses.push(`cria-container--padding-md-${padding.md}`);
    }
    if (padding.lg !== undefined) {
      baseClasses.push(`cria-container--padding-lg-${padding.lg}`);
    }
  }
  
  // Add margin classes
  if (typeof margin === 'string') {
    baseClasses.push(`cria-container--margin-${margin}`);
  } else {
    // Responsive margin
    if (margin.sm !== undefined) {
      baseClasses.push(`cria-container--margin-sm-${margin.sm}`);
    }
    if (margin.md !== undefined) {
      baseClasses.push(`cria-container--margin-md-${margin.md}`);
    }
    if (margin.lg !== undefined) {
      baseClasses.push(`cria-container--margin-lg-${margin.lg}`);
    }
  }
  
  // Add center class
  if (center) {
    baseClasses.push('cria-container--center');
  }
  
  // Add fluid class
  if (fluid) {
    baseClasses.push('cria-container--fluid');
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
  
  // Handle custom max width
  if (typeof maxWidth === 'string' && !['sm', 'md', 'lg', 'xl', '2xl', 'full'].includes(maxWidth)) {
    inlineStyles.maxWidth = maxWidth;
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
