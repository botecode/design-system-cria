import React from 'react';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Visual variant of the section
   * @default 'default'
   */
  variant?: 'default' | 'hero' | 'content' | 'footer';
  
  /**
   * Size of the section
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  
  /**
   * Padding size around the section
   * @default 'lg'
   */
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | { sm?: 'none' | 'sm' | 'md' | 'lg' | 'xl'; md?: 'none' | 'sm' | 'md' | 'lg' | 'xl'; lg?: 'none' | 'sm' | 'md' | 'lg' | 'xl' };
  
  /**
   * Margin size around the section
   * @default 'md'
   */
  margin?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | { sm?: 'none' | 'sm' | 'md' | 'lg' | 'xl'; md?: 'none' | 'sm' | 'md' | 'lg' | 'xl'; lg?: 'none' | 'sm' | 'md' | 'lg' | 'xl' };
  
  /**
   * Whether to make the section full height
   * @default false
   */
  fullHeight?: boolean;
  
  /**
   * Background color of the section
   * @default 'transparent'
   */
  backgroundColor?: 'primary' | 'secondary' | 'gray' | 'white' | 'transparent' | string;
  
  /**
   * Children elements
   */
  children?: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  variant = 'default',
  size = 'md',
  padding = 'lg',
  margin = 'md',
  fullHeight = false,
  backgroundColor = 'transparent',
  className = '',
  style = {},
  children,
  ...props
}) => {
  // Build CSS classes
  const baseClasses = ['cria-section'];
  
  // Add variant class
  baseClasses.push(`cria-section--${variant}`);
  
  // Add size class
  baseClasses.push(`cria-section--size-${size}`);
  
  // Add padding classes
  if (typeof padding === 'string') {
    baseClasses.push(`cria-section--padding-${padding}`);
  } else {
    // Responsive padding
    if (padding.sm !== undefined) {
      baseClasses.push(`cria-section--padding-sm-${padding.sm}`);
    }
    if (padding.md !== undefined) {
      baseClasses.push(`cria-section--padding-md-${padding.md}`);
    }
    if (padding.lg !== undefined) {
      baseClasses.push(`cria-section--padding-lg-${padding.lg}`);
    }
  }
  
  // Add margin classes
  if (typeof margin === 'string') {
    baseClasses.push(`cria-section--margin-${margin}`);
  } else {
    // Responsive margin
    if (margin.sm !== undefined) {
      baseClasses.push(`cria-section--margin-sm-${margin.sm}`);
    }
    if (margin.md !== undefined) {
      baseClasses.push(`cria-section--margin-md-${margin.md}`);
    }
    if (margin.lg !== undefined) {
      baseClasses.push(`cria-section--margin-lg-${margin.lg}`);
    }
  }
  
  // Add full height class
  if (fullHeight) {
    baseClasses.push('cria-section--full-height');
  }
  
  // Add background color class
  if (['primary', 'secondary', 'gray', 'white', 'transparent'].includes(backgroundColor)) {
    baseClasses.push(`cria-section--bg-${backgroundColor}`);
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
  
  // Handle custom background color
  if (!['primary', 'secondary', 'gray', 'white', 'transparent'].includes(backgroundColor)) {
    inlineStyles.backgroundColor = backgroundColor;
  }
  
  return (
    <section
      className={classes}
      style={inlineStyles}
      {...props}
    >
      {children}
    </section>
  );
};
