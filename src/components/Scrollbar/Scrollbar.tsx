import React, { useCallback } from 'react';

export interface ScrollbarProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Size of the scrollbar
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  
  /**
   * Theme of the scrollbar
   * @default 'light'
   */
  theme?: 'light' | 'dark' | 'auto';
  
  /**
   * Whether to enable smooth scrolling
   * @default false
   */
  smooth?: boolean;
  
  /**
   * Whether to enable horizontal scrolling
   * @default false
   */
  horizontal?: boolean;
  
  /**
   * Whether to enable vertical scrolling
   * @default true
   */
  vertical?: boolean;
  
  /**
   * Custom height for the scrollbar container
   */
  height?: string | number;
  
  /**
   * Custom width for the scrollbar container
   */
  width?: string | number;
  
  /**
   * Whether to auto-adjust height based on content
   * @default false
   */
  autoHeight?: boolean;
  
  /**
   * Custom track color for the scrollbar
   */
  trackColor?: string;
  
  /**
   * Custom thumb color for the scrollbar
   */
  thumbColor?: string;
  
  /**
   * Custom hover color for the scrollbar thumb
   */
  hoverColor?: string;
  
  /**
   * Whether to enable fade effect
   * @default false
   */
  fade?: boolean;
  
  /**
   * Callback function when scroll event occurs
   */
  onScroll?: (event: React.UIEvent<HTMLDivElement>) => void;
  
  /**
   * Children elements
   */
  children?: React.ReactNode;
}

export const Scrollbar: React.FC<ScrollbarProps> = ({
  size = 'md',
  theme = 'light',
  smooth = false,
  horizontal = false,
  vertical = true,
  height,
  width,
  autoHeight = false,
  trackColor,
  thumbColor,
  hoverColor,
  fade = false,
  onScroll,
  className = '',
  style = {},
  children,
  ...props
}) => {
  // Build CSS classes
  const baseClasses = ['cria-scrollbar'];
  
  // Add size class
  baseClasses.push(`cria-scrollbar--size-${size}`);
  
  // Add theme class
  baseClasses.push(`cria-scrollbar--theme-${theme}`);
  
  // Add smooth scrolling class
  if (smooth) {
    baseClasses.push('cria-scrollbar--smooth');
  }
  
  // Add horizontal scrollbar class
  if (horizontal) {
    baseClasses.push('cria-scrollbar--horizontal');
  }
  
  // Add vertical scrollbar class
  if (vertical) {
    baseClasses.push('cria-scrollbar--vertical');
  }
  
  // Add auto height class
  if (autoHeight) {
    baseClasses.push('cria-scrollbar--auto-height');
  }
  
  // Add fade effect class
  if (fade) {
    baseClasses.push('cria-scrollbar--fade');
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
  
  // Add custom dimensions
  if (height !== undefined) {
    inlineStyles.height = typeof height === 'number' ? `${height}px` : height;
  }
  
  if (width !== undefined) {
    inlineStyles.width = typeof width === 'number' ? `${width}px` : width;
  }
  
  // Add custom scrollbar colors as CSS custom properties
  if (trackColor) {
    inlineStyles['--scrollbar-track-color' as any] = trackColor;
  }
  
  if (thumbColor) {
    inlineStyles['--scrollbar-thumb-color' as any] = thumbColor;
  }
  
  if (hoverColor) {
    inlineStyles['--scrollbar-hover-color' as any] = hoverColor;
  }
  
  // Handle scroll event
  const handleScroll = useCallback((event: React.UIEvent<HTMLDivElement>) => {
    if (onScroll) {
      onScroll(event);
    }
  }, [onScroll]);
  
  return (
    <div
      className={classes}
      style={inlineStyles}
      onScroll={handleScroll}
      {...props}
    >
      {children}
    </div>
  );
};
