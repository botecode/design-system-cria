import React, { forwardRef, useEffect, useState } from 'react';
import { colors, spacing, typography, radii, shadows } from '../../tokens';
import { Button } from '../Button';
import { Typography } from '../Typography';
import { X, Check, Warning, Info, XCircle } from 'phosphor-react';

export interface NotificationData {
  /**
   * Unique identifier for the notification
   */
  id: string;
  
  /**
   * Title of the notification
   */
  title: string;
  
  /**
   * Optional message/description of the notification
   */
  message?: string;
  
  /**
   * Type of the notification
   * @default 'info'
   */
  type?: 'success' | 'error' | 'warning' | 'info';
  
  /**
   * Optional icon for the notification
   */
  icon?: React.ReactNode;
  
  /**
   * Duration in milliseconds before auto-dismiss (0 = no auto-dismiss)
   * @default 5000
   */
  duration?: number;
  
  /**
   * Whether the notification can be dismissed
   * @default true
   */
  dismissible?: boolean;
  
  /**
   * Optional action button
   */
  action?: {
    label: string;
    onClick: (id: string, notification: NotificationData) => void;
  };
  
  /**
   * Whether the notification is in a loading state
   * @default false
   */
  loading?: boolean;
  
  /**
   * Whether the notification is disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Additional data for the notification
   */
  data?: Record<string, any>;
}

export interface NotificationProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'> {
  /**
   * Notification data
   */
  notification: NotificationData;
  
  /**
   * Size of the notification
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  
  /**
   * Visual variant of the notification
   * @default 'default'
   */
  variant?: 'default' | 'compact';
  
  /**
   * Whether to show progress bar for auto-dismiss
   * @default false
   */
  showProgress?: boolean;
  
  /**
   * Whether to show icon
   * @default true
   */
  showIcon?: boolean;
  
  /**
   * Dismiss handler
   */
  onDismiss?: (id: string) => void;
  
  /**
   * Action handler
   */
  onAction?: (id: string, notification: NotificationData) => void;
  
  /**
   * Custom CSS class name
   */
  className?: string;
  
  /**
   * Custom CSS styles
   */
  style?: React.CSSProperties;
}

export const Notification = forwardRef<HTMLDivElement, NotificationProps>(({
  notification,
  size = 'md',
  variant = 'default',
  showProgress = false,
  showIcon = true,
  onDismiss,
  onAction,
  className = '',
  ...props
}, ref) => {
  const {
    id,
    title,
    message,
    type = 'info',
    icon,
    duration = 5000,
    dismissible = true,
    action,
    loading = false,
    disabled = false,
  } = notification;

  const [progress, setProgress] = useState(100);
  const [isVisible, setIsVisible] = useState(true);

  // Size configurations
  const sizeConfig = {
    sm: {
      padding: spacing[2],
      iconSize: '1rem',
      fontSize: typography.fontSize.caption,
      titleFontSize: typography.fontSize.body2,
      borderRadius: radii.sm,
      iconPadding: spacing[1],
    },
    md: {
      padding: spacing[3],
      iconSize: '1.25rem',
      fontSize: typography.fontSize.body2,
      titleFontSize: typography.fontSize.body,
      borderRadius: radii.md,
      iconPadding: spacing[2],
    },
    lg: {
      padding: spacing[4],
      iconSize: '1.5rem',
      fontSize: typography.fontSize.body,
      titleFontSize: typography.fontSize.h3,
      borderRadius: radii.lg,
      iconPadding: spacing[3],
    },
  };

  const config = sizeConfig[size];

  // Auto-dismiss functionality
  useEffect(() => {
    if (duration > 0 && !disabled && onDismiss) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => onDismiss(id), 300); // Wait for animation
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration, id, onDismiss, disabled]);

  // Color mappings
  const colorMap = {
    success: {
      main: colors.success[500],
      bg: colors.success[50],
      border: colors.success[200],
      text: colors.success[800],
      icon: colors.success[600],
    },
    error: {
      main: colors.error[500],
      bg: colors.error[50],
      border: colors.error[200],
      text: colors.error[800],
      icon: colors.error[600],
    },
    warning: {
      main: colors.warning[500],
      bg: colors.warning[50],
      border: colors.warning[200],
      text: colors.warning[800],
      icon: colors.warning[600],
    },
    info: {
      main: colors.info[500],
      bg: colors.info[50],
      border: colors.info[200],
      text: colors.info[800],
      icon: colors.info[600],
    },
  };

  const selectedColor = colorMap[type];

  // Default icons
  const defaultIcons = {
    success: <Check size={16} />,
    error: <XCircle size={16} />,
    warning: <Warning size={16} />,
    info: <Info size={16} />,
  };

  // Get notification styles
  const getNotificationStyles = () => {
    const baseStyles = {
      display: 'flex',
      alignItems: 'flex-start',
      gap: spacing[3],
      padding: config.padding,
      borderRadius: config.borderRadius,
      border: `1px solid ${selectedColor.border}`,
      backgroundColor: selectedColor.bg,
      boxShadow: shadows.sm,
      transition: 'all 0.3s ease',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateX(0)' : 'translateX(100%)',
      position: 'relative' as const,
      minWidth: '300px',
      maxWidth: '400px',
      ...props.style,
    };

    if (variant === 'compact') {
      return {
        ...baseStyles,
        padding: spacing[2],
        minWidth: '250px',
        maxWidth: '300px',
      };
    }

    return baseStyles;
  };

  // Get icon styles
  const getIconStyles = () => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: config.iconSize,
    height: config.iconSize,
    borderRadius: '50%',
    backgroundColor: selectedColor.main,
    color: colors.white,
    flexShrink: 0,
    fontSize: config.iconSize,
  });

  const notificationStyles = getNotificationStyles();
  const iconStyles = getIconStyles();

  // Handle dismiss
  const handleDismiss = () => {
    if (dismissible && !disabled) {
      setIsVisible(false);
      setTimeout(() => onDismiss?.(id), 300);
    }
  };

  // Handle action
  const handleAction = () => {
    if (action && !disabled) {
      action.onClick(id, notification);
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      ref={ref}
      className={`notification type-${type} size-${size} variant-${variant} ${className} ${disabled ? 'disabled' : ''} ${loading ? 'loading' : ''}`}
      role="alert"
      aria-live="polite"
      style={notificationStyles}
      {...props}
    >
      {/* Icon */}
      {showIcon && (
        <div className="notification-icon" style={iconStyles}>
          {loading ? (
            <div
              style={{
                width: '0.75rem',
                height: '0.75rem',
                border: `2px solid ${colors.gray[300]}`,
                borderTop: `2px solid ${colors.white}`,
                borderRadius: '50%',
                animation: 'spin 1s linear infinite',
              }}
            />
          ) : (
            icon || defaultIcons[type]
          )}
        </div>
      )}

      {/* Content */}
      <div className="notification-content" style={{ flex: 1, minWidth: 0 }}>
        {/* Title */}
        <div
          className="notification-title"
          style={{
            fontSize: config.titleFontSize,
            fontWeight: typography.fontWeight.semiBold,
            color: selectedColor.text,
            marginBottom: message ? spacing[1] : 0,
            lineHeight: typography.lineHeight.tight,
          }}
        >
          {title}
        </div>

        {/* Message */}
        {message && (
          <div
            className="notification-message"
            style={{
              fontSize: config.fontSize,
              color: colors.gray[600],
              lineHeight: typography.lineHeight.relaxed,
              marginBottom: action ? spacing[2] : 0,
            }}
          >
            {message}
          </div>
        )}

        {/* Action Button */}
        {action && (
          <Button
            variant="outlined"
            size="sm"
            onClick={handleAction}
            disabled={disabled}
            style={{
              marginTop: spacing[1],
            }}
          >
            {action.label}
          </Button>
        )}
      </div>

      {/* Dismiss Button */}
      {dismissible && (
        <button
          type="button"
          aria-label="Dismiss notification"
          onClick={handleDismiss}
          disabled={disabled}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'none',
            border: 'none',
            cursor: disabled ? 'not-allowed' : 'pointer',
            padding: spacing[1],
            color: colors.gray[400],
            transition: 'color 0.2s ease',
            flexShrink: 0,
          }}
        >
          <X size={16} />
        </button>
      )}

      {/* Progress Bar */}
      {showProgress && duration > 0 && (
        <div
          className="notification-progress"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '3px',
            backgroundColor: selectedColor.border,
            borderRadius: `0 0 ${config.borderRadius} ${config.borderRadius}`,
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${progress}%`,
              backgroundColor: selectedColor.main,
              transition: 'width 0.1s linear',
              borderRadius: `0 0 ${config.borderRadius} ${config.borderRadius}`,
            }}
          />
        </div>
      )}

      {/* CSS animations */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .notification:hover {
          box-shadow: ${shadows.md};
          transform: translateY(-1px);
        }

        .notification.disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .notification.disabled:hover {
          transform: none;
          box-shadow: ${shadows.sm};
        }
      `}</style>
    </div>
  );
});

Notification.displayName = 'Notification';

export interface NotificationCenterProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'> {
  /**
   * Array of notifications
   */
  notifications: NotificationData[];
  
  /**
   * Position of the notification center
   * @default 'top-right'
   */
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center';
  
  /**
   * Size of the notifications
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  
  /**
   * Visual variant of the notifications
   * @default 'default'
   */
  variant?: 'default' | 'compact';
  
  /**
   * Maximum number of notifications to show
   * @default 5
   */
  maxNotifications?: number;
  
  /**
   * Whether to show progress bars for auto-dismiss
   * @default false
   */
  showProgress?: boolean;
  
  /**
   * Whether to show icons
   * @default true
   */
  showIcons?: boolean;
  
  /**
   * Direction to stack notifications
   * @default 'down'
   */
  stackDirection?: 'up' | 'down';
  
  /**
   * Animation type for notifications
   * @default 'slide'
   */
  animation?: 'slide' | 'fade' | 'scale';
  
  /**
   * Custom notification renderer component
   */
  notificationRenderer?: React.ComponentType<{ notification: NotificationData; onDismiss?: (id: string) => void; onAction?: (id: string, notification: NotificationData) => void }>;
  
  /**
   * Dismiss handler
   */
  onDismiss?: (id: string) => void;
  
  /**
   * Action handler
   */
  onAction?: (id: string, notification: NotificationData) => void;
  
  /**
   * Custom CSS class name
   */
  className?: string;
  
  /**
   * Custom CSS styles
   */
  style?: React.CSSProperties;
}

export const NotificationCenter = forwardRef<HTMLDivElement, NotificationCenterProps>(({
  notifications,
  position = 'top-right',
  size = 'md',
  variant = 'default',
  maxNotifications = 5,
  showProgress = false,
  showIcons = true,
  stackDirection = 'down',
  animation = 'slide',
  notificationRenderer,
  onDismiss,
  onAction,
  className = '',
  style = {},
  ...props
}, ref) => {
  // Limit notifications
  const limitedNotifications = notifications.slice(0, maxNotifications);

  // Get position styles
  const getPositionStyles = () => {
    const baseStyles = {
      position: 'fixed' as const,
      zIndex: 1000,
      pointerEvents: 'none' as const,
    };

    switch (position) {
      case 'top-left':
        return { ...baseStyles, top: spacing[4], left: spacing[4] };
      case 'top-right':
        return { ...baseStyles, top: spacing[4], right: spacing[4] };
      case 'bottom-left':
        return { ...baseStyles, bottom: spacing[4], left: spacing[4] };
      case 'bottom-right':
        return { ...baseStyles, bottom: spacing[4], right: spacing[4] };
      case 'top-center':
        return { ...baseStyles, top: spacing[4], left: '50%', transform: 'translateX(-50%)' };
      case 'bottom-center':
        return { ...baseStyles, bottom: spacing[4], left: '50%', transform: 'translateX(-50%)' };
      default:
        return { ...baseStyles, top: spacing[4], right: spacing[4] };
    }
  };

  // Get container styles
  const getContainerStyles = () => ({
    display: 'flex',
    flexDirection: stackDirection === 'up' ? 'column-reverse' : 'column',
    gap: spacing[2],
    pointerEvents: 'auto' as const,
    ...getPositionStyles(),
    ...style,
  });

  // Render notification
  const renderNotification = (notification: NotificationData) => {
    if (notificationRenderer) {
      return notificationRenderer({ notification, onDismiss, onAction });
    }

    return (
      <Notification
        key={notification.id}
        notification={notification}
        size={size}
        variant={variant}
        showProgress={showProgress}
        showIcon={showIcons}
        onDismiss={onDismiss}
        onAction={onAction}
      />
    );
  };

  if (limitedNotifications.length === 0) {
    return null;
  }

  return (
    <div
      ref={ref}
      className={`notification-center position-${position} stack-${stackDirection} animation-${animation} ${className}`}
      style={getContainerStyles()}
      role="region"
      aria-label="Notifications"
      aria-live="polite"
      {...props}
    >
      {limitedNotifications.map((notification) => renderNotification(notification))}
    </div>
  );
});

NotificationCenter.displayName = 'NotificationCenter';

export default NotificationCenter;
