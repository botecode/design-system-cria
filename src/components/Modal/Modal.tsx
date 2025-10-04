import React, { useEffect, useRef, useCallback } from 'react';
import { Typography } from '../Typography';
import { Button } from '../Button';
import { X } from 'phosphor-react';

export interface ModalProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /**
   * Whether the modal is open
   */
  isOpen: boolean;
  
  /**
   * Callback fired when the modal should be closed
   */
  onClose: () => void;
  
  /**
   * Modal title
   */
  title?: React.ReactNode;
  
  /**
   * Modal content
   */
  children: React.ReactNode;
  
  /**
   * Modal size
   */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  
  /**
   * Whether to show the close button
   */
  showCloseButton?: boolean;
  
  /**
   * Whether to close modal when clicking overlay
   */
  closeOnOverlayClick?: boolean;
  
  /**
   * Whether to close modal when pressing Escape key
   */
  closeOnEscape?: boolean;
  
  /**
   * Whether to lock body scroll when modal is open
   */
  lockBodyScroll?: boolean;
  
  /**
   * Whether the modal is centered vertically
   */
  centered?: boolean;
  
  /**
   * Custom class name for the modal
   */
  className?: string;
  
  /**
   * Custom styles for the modal
   */
  style?: React.CSSProperties;
  
  /**
   * Footer content (buttons, etc.)
   */
  footer?: React.ReactNode;
  
  /**
   * Whether to show the modal header
   */
  showHeader?: boolean;
  
  /**
   * Whether to show the modal footer
   */
  showFooter?: boolean;
  
  /**
   * Custom overlay class name
   */
  overlayClassName?: string;
  
  /**
   * Custom overlay styles
   */
  overlayStyle?: React.CSSProperties;
  
  /**
   * Whether the modal is scrollable
   */
  scrollable?: boolean;
  
  /**
   * Animation duration in milliseconds
   */
  animationDuration?: number;
}

/**
 * Modal component for displaying content in an overlay
 */
export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  lockBodyScroll = true,
  centered = true,
  className = '',
  style,
  footer,
  showHeader = true,
  showFooter = false,
  overlayClassName = '',
  overlayStyle,
  scrollable = true,
  animationDuration = 200,
  ...props
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  
  // Handle escape key
  const handleEscapeKey = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape' && closeOnEscape) {
      onClose();
    }
  }, [closeOnEscape, onClose]);
  
  // Handle overlay click
  const handleOverlayClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnOverlayClick && event.target === overlayRef.current) {
      onClose();
    }
  }, [closeOnOverlayClick, onClose]);
  
  // Handle focus management
  const handleFocus = useCallback(() => {
    if (modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      if (firstElement) {
        firstElement.focus();
      }
    }
  }, []);
  
  // Lock/unlock body scroll
  const toggleBodyScroll = useCallback((lock: boolean) => {
    if (lock) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, []);
  
  // Handle modal open/close
  useEffect(() => {
    if (isOpen) {
      // Store the previously focused element
      previousActiveElement.current = document.activeElement as HTMLElement;
      
      // Add event listeners
      document.addEventListener('keydown', handleEscapeKey);
      
      // Lock body scroll
      if (lockBodyScroll) {
        toggleBodyScroll(true);
      }
      
      // Focus the modal
      setTimeout(handleFocus, 0);
    } else {
      // Remove event listeners
      document.removeEventListener('keydown', handleEscapeKey);
      
      // Unlock body scroll
      if (lockBodyScroll) {
        toggleBodyScroll(false);
      }
      
      // Restore focus to the previously focused element
      if (previousActiveElement.current) {
        previousActiveElement.current.focus();
      }
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      if (lockBodyScroll) {
        toggleBodyScroll(false);
      }
    };
  }, [isOpen, handleEscapeKey, lockBodyScroll, handleFocus]);
  
  // Generate CSS classes
  const overlayClasses = [
    'cria-modal-overlay',
    isOpen ? 'cria-modal-overlay--visible' : '',
    overlayClassName,
  ].filter(Boolean).join(' ');
  
  const modalClasses = [
    'cria-modal',
    `cria-modal--${size}`,
    centered ? 'cria-modal--centered' : '',
    scrollable ? 'cria-modal--scrollable' : '',
    isOpen ? 'cria-modal--visible' : '',
    className,
  ].filter(Boolean).join(' ');
  
  if (!isOpen) {
    return null;
  }
  
  return (
    <div
      ref={overlayRef}
      className={overlayClasses}
      style={{
        animationDuration: `${animationDuration}ms`,
        ...overlayStyle,
      }}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
      aria-describedby="modal-content"
    >
      <div
        ref={modalRef}
        className={modalClasses}
        style={{
          animationDuration: `${animationDuration}ms`,
          ...style,
        }}
        {...props}
      >
        {showHeader && (
          <div className="cria-modal__header">
            {title && (
              <Typography
                id="modal-title"
                variant="h3"
                weight="semiBold"
                className="cria-modal__title"
              >
                {title}
              </Typography>
            )}
            {showCloseButton && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="cria-modal__close-button"
                aria-label="Close modal"
              >
                <X size={20} />
              </Button>
            )}
          </div>
        )}
        
        <div
          id="modal-content"
          className="cria-modal__content"
        >
          {children}
        </div>
        
        {showFooter && footer && (
          <div className="cria-modal__footer">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
