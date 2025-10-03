import React, { useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

export interface TooltipProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  /**
   * The content to display in the tooltip
   */
  content: React.ReactNode;
  
  /**
   * The element that triggers the tooltip
   */
  children: React.ReactElement;
  
  /**
   * Tooltip variant
   */
  variant?: 'default' | 'dark' | 'light' | 'primary' | 'success' | 'warning' | 'error';
  
  /**
   * Tooltip size
   */
  size?: 'sm' | 'md' | 'lg';
  
  /**
   * Tooltip position
   */
  position?: 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end' | 'right-start' | 'right-end';
  
  /**
   * Whether the tooltip is disabled
   */
  disabled?: boolean;
  
  /**
   * Delay before showing tooltip (in milliseconds)
   */
  delay?: number;
  
  /**
   * Delay before hiding tooltip (in milliseconds)
   */
  hideDelay?: number;
  
  /**
   * Whether to show arrow
   */
  arrow?: boolean;
  
  /**
   * Whether tooltip is interactive (stays open on hover)
   */
  interactive?: boolean;
  
  /**
   * Whether tooltip is always visible
   */
  visible?: boolean;
  
  /**
   * Custom class name for the tooltip
   */
  className?: string;
  
  /**
   * Custom styles for the tooltip
   */
  style?: React.CSSProperties;
  
  /**
   * Callback when tooltip visibility changes
   */
  onVisibilityChange?: (visible: boolean) => void;
}

/**
 * Tooltip component for displaying contextual information
 */
export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  variant = 'default',
  size = 'md',
  position = 'top',
  disabled = false,
  delay = 0,
  hideDelay = 0,
  arrow = true,
  interactive = false,
  visible: controlledVisible,
  className = '',
  style,
  onVisibilityChange,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const showTimeoutRef = useRef<NodeJS.Timeout>();
  const hideTimeoutRef = useRef<NodeJS.Timeout>();
  
  // Determine if component is controlled
  const isControlled = controlledVisible !== undefined;
  const visible = isControlled ? controlledVisible : isVisible;
  
  // Calculate tooltip position
  const calculatePosition = useCallback(() => {
    if (!triggerRef.current || !tooltipRef.current) return;
    
    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    
    let top = 0;
    let left = 0;
    
    const triggerCenterX = triggerRect.left + triggerRect.width / 2;
    const triggerCenterY = triggerRect.top + triggerRect.height / 2;
    
    switch (position) {
      case 'top':
        top = triggerRect.top - tooltipRect.height - 8;
        left = triggerCenterX - tooltipRect.width / 2;
        break;
      case 'top-start':
        top = triggerRect.top - tooltipRect.height - 8;
        left = triggerRect.left;
        break;
      case 'top-end':
        top = triggerRect.top - tooltipRect.height - 8;
        left = triggerRect.right - tooltipRect.width;
        break;
      case 'bottom':
        top = triggerRect.bottom + 8;
        left = triggerCenterX - tooltipRect.width / 2;
        break;
      case 'bottom-start':
        top = triggerRect.bottom + 8;
        left = triggerRect.left;
        break;
      case 'bottom-end':
        top = triggerRect.bottom + 8;
        left = triggerRect.right - tooltipRect.width;
        break;
      case 'left':
        top = triggerCenterY - tooltipRect.height / 2;
        left = triggerRect.left - tooltipRect.width - 8;
        break;
      case 'left-start':
        top = triggerRect.top;
        left = triggerRect.left - tooltipRect.width - 8;
        break;
      case 'left-end':
        top = triggerRect.bottom - tooltipRect.height;
        left = triggerRect.left - tooltipRect.width - 8;
        break;
      case 'right':
        top = triggerCenterY - tooltipRect.height / 2;
        left = triggerRect.right + 8;
        break;
      case 'right-start':
        top = triggerRect.top;
        left = triggerRect.right + 8;
        break;
      case 'right-end':
        top = triggerRect.bottom - tooltipRect.height;
        left = triggerRect.right + 8;
        break;
    }
    
    // Adjust for viewport boundaries
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    if (left < 8) left = 8;
    if (left + tooltipRect.width > viewportWidth - 8) {
      left = viewportWidth - tooltipRect.width - 8;
    }
    if (top < 8) top = 8;
    if (top + tooltipRect.height > viewportHeight - 8) {
      top = viewportHeight - tooltipRect.height - 8;
    }
    
    setTooltipPosition({
      top: top + scrollY,
      left: left + scrollX,
    });
  }, [position]);
  
  // Show tooltip
  const showTooltip = useCallback(() => {
    if (disabled || isControlled) return;
    
    if (showTimeoutRef.current) {
      clearTimeout(showTimeoutRef.current);
    }
    
    showTimeoutRef.current = setTimeout(() => {
      setIsVisible(true);
      onVisibilityChange?.(true);
    }, delay);
  }, [disabled, isControlled, delay, onVisibilityChange]);
  
  // Hide tooltip
  const hideTooltip = useCallback(() => {
    if (disabled || isControlled) return;
    
    if (showTimeoutRef.current) {
      clearTimeout(showTimeoutRef.current);
    }
    
    hideTimeoutRef.current = setTimeout(() => {
      setIsVisible(false);
      onVisibilityChange?.(false);
    }, hideDelay);
  }, [disabled, isControlled, hideDelay, onVisibilityChange]);
  
  // Handle mouse enter
  const handleMouseEnter = useCallback(() => {
    if (disabled) return;
    showTooltip();
  }, [disabled, showTooltip]);
  
  // Handle mouse leave
  const handleMouseLeave = useCallback(() => {
    if (disabled) return;
    hideTooltip();
  }, [disabled, hideTooltip]);
  
  // Handle focus
  const handleFocus = useCallback(() => {
    if (disabled) return;
    showTooltip();
  }, [disabled, showTooltip]);
  
  // Handle blur
  const handleBlur = useCallback(() => {
    if (disabled) return;
    hideTooltip();
  }, [disabled, hideTooltip]);
  
  // Update position when tooltip becomes visible
  useEffect(() => {
    if (visible) {
      calculatePosition();
    }
  }, [visible, calculatePosition]);
  
  // Update position on scroll and resize
  useEffect(() => {
    if (!visible) return;
    
    const updatePosition = () => calculatePosition();
    
    window.addEventListener('scroll', updatePosition, true);
    window.addEventListener('resize', updatePosition);
    
    return () => {
      window.removeEventListener('scroll', updatePosition, true);
      window.removeEventListener('resize', updatePosition);
    };
  }, [visible, calculatePosition]);
  
  // Cleanup timeouts
  useEffect(() => {
    return () => {
      if (showTimeoutRef.current) clearTimeout(showTimeoutRef.current);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, []);
  
  // Clone children with event handlers
  const triggerElement = React.cloneElement(children, {
    ref: (el: HTMLElement) => {
      triggerRef.current = el;
      if (typeof children.ref === 'function') {
        children.ref(el);
      } else if (children.ref) {
        children.ref.current = el;
      }
    },
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onFocus: handleFocus,
    onBlur: handleBlur,
  });
  
  // Generate CSS classes
  const tooltipClasses = [
    'cria-tooltip',
    `cria-tooltip--${variant}`,
    `cria-tooltip--${size}`,
    `cria-tooltip--${position}`,
    arrow ? 'cria-tooltip--arrow' : null,
    interactive ? 'cria-tooltip--interactive' : null,
    visible ? 'cria-tooltip--visible' : null,
    className,
  ].filter(Boolean).join(' ');
  
  return (
    <>
      {triggerElement}
      {visible && createPortal(
        <div
          ref={tooltipRef}
          className={tooltipClasses}
          style={{
            position: 'fixed',
            top: tooltipPosition.top,
            left: tooltipPosition.left,
            zIndex: 9999,
            ...style,
          }}
          role="tooltip"
          {...props}
        >
          <div className="cria-tooltip__content">
            {content}
          </div>
          {arrow && (
            <div className="cria-tooltip__arrow" />
          )}
        </div>,
        document.body
      )}
    </>
  );
};

export default Tooltip;
