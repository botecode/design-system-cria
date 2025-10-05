import React, { useEffect, useRef, useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import { Typography } from '../Typography';
import { Button } from '../Button';
import { X, Spinner } from 'phosphor-react';

export interface DrawerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /**
   * Whether the drawer is open
   */
  isOpen: boolean;
  
  /**
   * Callback fired when the drawer should be closed
   */
  onClose: () => void;
  
  /**
   * Drawer title
   */
  title?: React.ReactNode;
  
  /**
   * Drawer content
   */
  children: React.ReactNode;
  
  /**
   * Drawer header content
   */
  header?: React.ReactNode;
  
  /**
   * Drawer footer content
   */
  footer?: React.ReactNode;
  
  /**
   * Drawer position
   */
  position?: 'left' | 'right' | 'top' | 'bottom';
  
  /**
   * Drawer size
   */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  
  /**
   * Drawer variant
   */
  variant?: 'default' | 'primary' | 'secondary';
  
  /**
   * Whether to show the close button
   */
  showCloseButton?: boolean;
  
  /**
   * Whether to show overlay/backdrop
   */
  showOverlay?: boolean;
  
  /**
   * Whether to close drawer when clicking overlay
   */
  closeOnOverlayClick?: boolean;
  
  /**
   * Whether to close drawer when pressing Escape key
   */
  closeOnEscape?: boolean;
  
  /**
   * Whether to lock body scroll when drawer is open
   */
  lockBodyScroll?: boolean;
  
  /**
   * Whether to use portal for rendering
   */
  usePortal?: boolean;
  
  /**
   * Custom z-index
   */
  zIndex?: number;
  
  /**
   * Animation duration in milliseconds
   */
  animationDuration?: number;
  
  /**
   * Loading state
   */
  loading?: boolean;
  
  /**
   * Custom overlay class name
   */
  overlayClassName?: string;
  
  /**
   * Custom overlay styles
   */
  overlayStyle?: React.CSSProperties;
  
  /**
   * Custom class name for the drawer
   */
  className?: string;
  
  /**
   * Custom styles for the drawer
   */
  style?: React.CSSProperties;
}

/**
 * Drawer component for slide-out panels
 */
export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  title,
  children,
  header,
  footer,
  position = 'right',
  size = 'md',
  variant = 'default',
  showCloseButton = true,
  showOverlay = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  lockBodyScroll = true,
  usePortal = true,
  zIndex = 9999,
  animationDuration = 300,
  loading = false,
  overlayClassName = '',
  overlayStyle,
  className = '',
  style,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Handle drawer open/close animation
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setIsAnimating(true);
      
      // Store the currently focused element
      previousActiveElement.current = document.activeElement as HTMLElement;
      
      // Focus the drawer
      setTimeout(() => {
        if (drawerRef.current) {
          drawerRef.current.focus();
        }
      }, 50);
      
      // End animation
      setTimeout(() => {
        setIsAnimating(false);
      }, animationDuration);
    } else {
      setIsAnimating(true);
      
      // End animation and hide
      setTimeout(() => {
        setIsVisible(false);
        setIsAnimating(false);
        
        // Restore focus to previous element
        if (previousActiveElement.current) {
          previousActiveElement.current.focus();
        }
      }, animationDuration);
    }
  }, [isOpen, animationDuration]);

  // Handle body scroll lock
  useEffect(() => {
    if (isOpen && lockBodyScroll) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen, lockBodyScroll]);

  // Handle escape key
  useEffect(() => {
    if (!isOpen || !closeOnEscape) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeOnEscape, onClose]);

  // Handle overlay click
  const handleOverlayClick = useCallback((event: React.MouseEvent) => {
    if (closeOnOverlayClick && event.target === event.currentTarget) {
      onClose();
    }
  }, [closeOnOverlayClick, onClose]);

  // Handle focus trap
  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (event.key === 'Tab') {
      const drawer = drawerRef.current;
      if (!drawer) return;

      const focusableElements = drawer.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement?.focus();
        }
      }
    }
  }, []);

  // Build class names
  const drawerClasses = [
    'drawer',
    `drawer--${position}`,
    `drawer--${size}`,
    `drawer--${variant}`,
    isOpen && 'drawer--open',
    isAnimating && 'drawer--animating',
    !prefersReducedMotion && 'drawer--animated',
    prefersReducedMotion && 'drawer--no-animation',
    loading && 'drawer--loading',
    className
  ].filter(Boolean).join(' ');

  const overlayClasses = [
    'drawer__overlay',
    isOpen && 'drawer__overlay--open',
    isAnimating && 'drawer__overlay--animating',
    overlayClassName
  ].filter(Boolean).join(' ');

  // Build styles
  const drawerStyles: React.CSSProperties = {
    zIndex,
    transitionDuration: `${animationDuration}ms`,
    ...style
  };

  const overlayStyles: React.CSSProperties = {
    zIndex: zIndex - 1,
    transitionDuration: `${animationDuration}ms`,
    ...overlayStyle
  };

  // Don't render if not visible
  if (!isVisible) {
    return null;
  }

  const drawerContent = (
    <>
      {/* Overlay */}
      {showOverlay && (
        <div
          className={overlayClasses}
          style={overlayStyles}
          onClick={handleOverlayClick}
          data-testid="drawer-overlay"
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={drawerClasses}
        style={drawerStyles}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'drawer-title' : undefined}
        tabIndex={-1}
        onKeyDown={handleKeyDown}
        {...props}
      >
        {/* Loading Spinner */}
        {loading && (
          <div className="drawer__loading" data-testid="drawer-loading">
            <Spinner size={24} className="animate-spin" />
          </div>
        )}

        {/* Header */}
        {(title || header || showCloseButton) && (
          <div className="drawer__header">
            {header || (
              <>
                {title && (
                  <Typography 
                    id="drawer-title"
                    variant="h3" 
                    weight="semibold" 
                    className="drawer__title"
                  >
                    {title}
                  </Typography>
                )}
                {showCloseButton && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={onClose}
                    aria-label="Close drawer"
                    className="drawer__close-button"
                  >
                    <X size={20} />
                  </Button>
                )}
              </>
            )}
          </div>
        )}

        {/* Content */}
        <div className="drawer__content">
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div className="drawer__footer">
            {footer}
          </div>
        )}
      </div>
    </>
  );

  // Render in portal or inline
  if (usePortal) {
    return createPortal(drawerContent, document.body);
  }

  return drawerContent;
};

export default Drawer;
