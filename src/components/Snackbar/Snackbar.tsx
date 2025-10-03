import * as React from 'react';
import { createPortal } from 'react-dom';
import { X, CheckCircle, Info, AlertTriangle } from 'phosphor-react';
import { Typography } from '../Typography';
import { Button } from '../Button';

export type SnackbarVariant = 'default' | 'success' | 'error' | 'warning' | 'info';
export type SnackbarPosition = 'top' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

export interface SnackbarAction {
  label: string;
  onClick: () => void;
}

export interface SnackbarProps {
  /** The message to display */
  message: string;
  /** Whether the snackbar is open */
  open: boolean;
  /** Optional title */
  title?: string;
  /** The variant/type of snackbar */
  variant?: SnackbarVariant;
  /** The position of the snackbar */
  position?: SnackbarPosition;
  /** Auto-hide duration in milliseconds (0 = no auto-hide) */
  autoHideDuration?: number;
  /** Whether the snackbar can be dismissed by clicking outside */
  dismissible?: boolean;
  /** Optional action button */
  action?: SnackbarAction;
  /** Optional icon */
  icon?: React.ReactNode;
  /** Callback when the snackbar is closed */
  onClose?: () => void;
  /** Custom className */
  className?: string;
  /** Custom styles */
  style?: React.CSSProperties;
  /** Additional props */
  [key: string]: any;
}

export interface SnackbarRef {
  /** Close the snackbar */
  close: () => void;
}

export const Snackbar = React.forwardRef<SnackbarRef, SnackbarProps>(({
  message,
  open,
  title,
  variant = 'default',
  position = 'top',
  autoHideDuration = 4000,
  dismissible = true,
  action,
  icon,
  onClose,
  className,
  style,
  ...props
}, ref) => {
  const [isVisible, setIsVisible] = React.useState(open);
  const [isAnimating, setIsAnimating] = React.useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  // Handle auto-hide functionality
  React.useEffect(() => {
    if (open && autoHideDuration > 0) {
      timeoutRef.current = setTimeout(() => {
        handleClose();
      }, autoHideDuration);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [open, autoHideDuration]);

  // Handle open/close state changes
  React.useEffect(() => {
    if (open) {
      setIsVisible(true);
      setIsAnimating(true);
      // Trigger enter animation
      setTimeout(() => setIsAnimating(false), 100);
    } else {
      setIsAnimating(true);
      // Trigger exit animation
      setTimeout(() => {
        setIsVisible(false);
        setIsAnimating(false);
      }, 300);
    }
  }, [open]);

  const handleClose = React.useCallback(() => {
    onClose?.();
  }, [onClose]);

  const handleBackdropClick = React.useCallback((event: React.MouseEvent) => {
    if (dismissible && event.target === event.currentTarget) {
      handleClose();
    }
  }, [dismissible, handleClose]);

  const handleKeyDown = React.useCallback((event: React.KeyboardEvent) => {
    if (event.key === 'Escape' && dismissible) {
      handleClose();
    }
  }, [dismissible, handleClose]);

  // Expose imperative API
  React.useImperativeHandle(ref, () => ({
    close: handleClose,
  }), [handleClose]);

  // Don't render if not visible
  if (!isVisible) {
    return null;
  }

  // Get the appropriate icon for the variant
  const getDefaultIcon = () => {
    switch (variant) {
      case 'success':
        return <CheckCircle size={20} data-testid="snackbar-icon" />;
      case 'error':
        return <X size={20} data-testid="snackbar-icon" />;
      case 'warning':
        return <Info size={20} data-testid="snackbar-icon" />;
      case 'info':
        return <Info size={20} data-testid="snackbar-icon" />;
      default:
        return null;
    }
  };

  const displayIcon = icon || getDefaultIcon();

  // Determine ARIA role and live region
  const isAlert = variant === 'error' || variant === 'warning';
  const role = isAlert ? 'alert' : 'status';
  const ariaLive = isAlert ? 'assertive' : 'polite';

  // Build CSS classes
  const containerClasses = [
    'cria-snackbar-container',
    `cria-snackbar-container--${position}`,
  ].filter(Boolean).join(' ');

  const snackbarClasses = [
    'cria-snackbar',
    `cria-snackbar--${variant}`,
    isAnimating && open && 'cria-snackbar--entering',
    isAnimating && !open && 'cria-snackbar--exiting',
    className,
  ].filter(Boolean).join(' ');

  const snackbarContent = (
    <div
      data-testid="snackbar-container"
      className={containerClasses}
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      <div
        className={snackbarClasses}
        style={style}
        role={role}
        aria-live={ariaLive}
        {...props}
      >
        <div className="cria-snackbar__content">
          {displayIcon && (
            <div className="cria-snackbar__icon">
              {displayIcon}
            </div>
          )}
          
          <div className="cria-snackbar__text">
            {title && (
              <Typography variant="body" weight="medium" className="cria-snackbar__title">
                {title}
              </Typography>
            )}
            <Typography variant="body" className="cria-snackbar__message">
              {message}
            </Typography>
          </div>
        </div>

        <div className="cria-snackbar__actions">
          {action && (
            <Button
              variant="text"
              size="sm"
              onClick={action.onClick}
              className="cria-snackbar__action"
            >
              {action.label}
            </Button>
          )}
          
          {dismissible && (
            <Button
              variant="text"
              size="sm"
              onClick={handleClose}
              className="cria-snackbar__close"
              aria-label="Close"
            >
              <X size={16} />
            </Button>
          )}
        </div>
      </div>
    </div>
  );

  // Render using portal to ensure proper z-index and positioning
  return createPortal(snackbarContent, document.body);
});

Snackbar.displayName = 'Snackbar';
