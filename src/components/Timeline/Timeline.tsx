import React, { forwardRef } from 'react';
import { colors, spacing, typography, radii, shadows } from '../../tokens';

export interface TimelineItemData {
  /**
   * Unique identifier for the timeline item
   */
  id: string;
  
  /**
   * Title of the timeline item
   */
  title: string;
  
  /**
   * Optional description of the timeline item
   */
  description?: string;
  
  /**
   * Timestamp of the event (ISO string or Date)
   */
  timestamp: string | Date;
  
  /**
   * Optional icon for the timeline item
   */
  icon?: React.ReactNode;
  
  /**
   * Visual variant of the timeline item
   * @default 'default'
   */
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  
  /**
   * Size of the timeline item
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  
  /**
   * Visual style of the timeline item
   * @default 'filled'
   */
  style?: 'filled' | 'outlined' | 'ghost';
  
  /**
   * Whether the item is in a loading state
   * @default false
   */
  loading?: boolean;
  
  /**
   * Whether the item is selected
   * @default false
   */
  selected?: boolean;
  
  /**
   * Whether the item is disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Custom timestamp format
   */
  timestampFormat?: string;
  
  /**
   * Additional data for the item
   */
  data?: Record<string, any>;
}

export interface TimelineItemProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'> {
  /**
   * Timeline item data
   */
  item: TimelineItemData;
  
  /**
   * Size of the timeline item
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  
  /**
   * Whether to show timestamp
   * @default true
   */
  showTimestamp?: boolean;
  
  /**
   * Custom timestamp format
   */
  timestampFormat?: string;
  
  /**
   * Click handler for the timeline item
   */
  onClick?: (item: TimelineItemData) => void;
  
  /**
   * Custom CSS class name
   */
  className?: string;
  
  /**
   * Custom CSS styles
   */
  style?: React.CSSProperties;
}

export const TimelineItem = forwardRef<HTMLDivElement, TimelineItemProps>(({
  item,
  size = 'md',
  showTimestamp = true,
  timestampFormat,
  onClick,
  className = '',
  style = {},
  ...props
}, ref) => {
  const {
    id,
    title,
    description,
    timestamp,
    icon,
    variant = 'default',
    style: itemStyle = 'filled',
    loading = false,
    selected = false,
    disabled = false,
  } = item;

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

  // Color mappings
  const colorMap = {
    default: colors.gray,
    primary: colors.primary,
    secondary: colors.secondary,
    success: colors.success,
    warning: colors.warning,
    error: colors.error,
    info: colors.info,
  };

  const selectedColor = colorMap[variant];

  // Format timestamp
  const formatTimestamp = (timestamp: string | Date, format?: string): string => {
    const date = new Date(timestamp);
    if (format) {
      // Simple format implementation - in a real app, you'd use a library like date-fns
      return date.toLocaleDateString();
    }
    return date.toLocaleString();
  };

  // Get item styles based on variant and style
  const getItemStyles = () => {
    const baseStyles = {
      display: 'flex',
      alignItems: 'flex-start',
      gap: spacing[3],
      padding: config.padding,
      borderRadius: config.borderRadius,
      transition: 'all 0.2s ease',
      cursor: onClick && !disabled ? 'pointer' : 'default',
      opacity: disabled ? 0.6 : 1,
      position: 'relative' as const,
    };

    let variantStyles;
    switch (itemStyle) {
      case 'filled':
        variantStyles = {
          backgroundColor: selected ? selectedColor[100] : colors.white,
          border: `1px solid ${selected ? selectedColor[300] : colors.gray[200]}`,
          ...(onClick && !disabled && {
            '&:hover': {
              backgroundColor: selectedColor[50],
              borderColor: selectedColor[300],
              transform: 'translateY(-1px)',
              boxShadow: shadows.sm,
            },
          }),
        };
        break;

      case 'outlined':
        variantStyles = {
          backgroundColor: 'transparent',
          border: `2px solid ${selected ? selectedColor[500] : selectedColor[300]}`,
          ...(onClick && !disabled && {
            '&:hover': {
              backgroundColor: `${selectedColor[500]}10`,
              borderColor: selectedColor[500],
            },
          }),
        };
        break;

      case 'ghost':
        variantStyles = {
          backgroundColor: selected ? `${selectedColor[500]}15` : 'transparent',
          border: 'none',
          ...(onClick && !disabled && {
            '&:hover': {
              backgroundColor: `${selectedColor[500]}10`,
            },
          }),
        };
        break;

      default:
        variantStyles = {};
    }

    return {
      ...baseStyles,
      ...variantStyles,
      ...style, // Custom styles override default styles
    };
  };

  // Get icon styles
  const getIconStyles = () => {
    const baseIconStyles = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: config.iconSize,
      height: config.iconSize,
      borderRadius: '50%',
      flexShrink: 0,
      fontSize: config.iconSize,
    };

    switch (itemStyle) {
      case 'filled':
        return {
          ...baseIconStyles,
          backgroundColor: selectedColor[500],
          color: colors.white,
        };

      case 'outlined':
        return {
          ...baseIconStyles,
          backgroundColor: 'transparent',
          color: selectedColor[500],
          border: `2px solid ${selectedColor[500]}`,
        };

      case 'ghost':
        return {
          ...baseIconStyles,
          backgroundColor: `${selectedColor[500]}20`,
          color: selectedColor[600],
        };

      default:
        return {
          ...baseIconStyles,
          backgroundColor: selectedColor[500],
          color: colors.white,
        };
    }
  };

  const itemStyles = getItemStyles();
  const iconStyles = getIconStyles();

  // Handle click events
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (onClick && !disabled && !loading) {
      onClick(item);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (onClick && !disabled && !loading && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      onClick(item);
    }
  };

  const Component = onClick ? 'button' : 'div';

  return (
    <Component
      ref={ref}
      className={`timeline-item variant-${variant} size-${size} style-${itemStyle} ${className} ${onClick ? 'clickable' : ''} ${disabled ? 'disabled' : ''} ${loading ? 'loading' : ''} ${selected ? 'selected' : ''}`}
      style={itemStyles}
      role={onClick ? "button" : "listitem"}
      aria-label={`${title}${description ? `: ${description}` : ''}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={onClick && !disabled ? 0 : undefined}
      disabled={onClick && disabled}
      {...props}
    >
      {/* Icon */}
      <div className="timeline-item-icon" style={iconStyles}>
        {loading ? (
          <div
            style={{
              width: '0.75rem',
              height: '0.75rem',
              border: `2px solid ${colors.gray[300]}`,
              borderTop: `2px solid ${selectedColor[500]}`,
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
            }}
          />
        ) : (
          icon
        )}
      </div>

      {/* Content */}
      <div className="timeline-item-content" style={{ flex: 1, minWidth: 0 }}>
        {/* Title */}
        <div
          className="timeline-item-title"
          style={{
            fontSize: config.titleFontSize,
            fontWeight: typography.fontWeight.semiBold,
            color: colors.gray[900],
            marginBottom: description ? spacing[1] : 0,
            lineHeight: typography.lineHeight.tight,
          }}
        >
          {title}
        </div>

        {/* Description */}
        {description && (
          <div
            className="timeline-item-description"
            style={{
              fontSize: config.fontSize,
              color: colors.gray[600],
              lineHeight: typography.lineHeight.relaxed,
              marginBottom: showTimestamp ? spacing[1] : 0,
            }}
          >
            {description}
          </div>
        )}

        {/* Timestamp */}
        {showTimestamp && timestamp && (
          <div
            className="timeline-item-timestamp"
            style={{
              fontSize: typography.fontSize.caption,
              color: colors.gray[500],
              fontWeight: typography.fontWeight.medium,
            }}
          >
            {formatTimestamp(timestamp, timestampFormat)}
          </div>
        )}
      </div>

      {/* CSS animations */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .timeline-item.clickable:focus {
          outline: 2px solid ${selectedColor[500]};
          outline-offset: 2px;
        }

        .timeline-item.clickable:focus-visible {
          outline: 2px solid ${selectedColor[500]};
          outline-offset: 2px;
        }
      `}</style>
    </Component>
  );
});

TimelineItem.displayName = 'TimelineItem';

export interface TimelineProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'> {
  /**
   * Array of timeline items
   */
  items: TimelineItemData[];
  
  /**
   * Orientation of the timeline
   * @default 'vertical'
   */
  orientation?: 'vertical' | 'horizontal';
  
  /**
   * Size of the timeline
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  
  /**
   * Visual variant of the timeline
   * @default 'default'
   */
  variant?: 'default' | 'compact' | 'detailed';
  
  /**
   * Whether to show connectors between items
   * @default true
   */
  showConnector?: boolean;
  
  /**
   * Whether to show timestamps
   * @default true
   */
  showTimestamps?: boolean;
  
  /**
   * Custom connector component
   */
  connector?: React.ReactNode;
  
  /**
   * Style of the connector line
   * @default 'solid'
   */
  connectorStyle?: 'solid' | 'dashed' | 'dotted';
  
  /**
   * Color of the connector
   * @default 'gray'
   */
  connectorColor?: 'primary' | 'secondary' | 'gray';
  
  /**
   * Whether the timeline is in a loading state
   * @default false
   */
  loading?: boolean;
  
  /**
   * Message to show when timeline is empty
   */
  emptyMessage?: string;
  
  /**
   * Custom empty state component
   */
  emptyComponent?: React.ReactNode;
  
  /**
   * Custom item renderer component
   */
  itemRenderer?: React.ComponentType<{ item: TimelineItemData; index: number }>;
  
  /**
   * Click handler for timeline items
   */
  onItemClick?: (item: TimelineItemData) => void;
  
  /**
   * Custom CSS class name
   */
  className?: string;
  
  /**
   * Custom CSS styles
   */
  style?: React.CSSProperties;
}

export const Timeline = forwardRef<HTMLDivElement, TimelineProps>(({
  items,
  orientation = 'vertical',
  size = 'md',
  variant = 'default',
  showConnector = true,
  showTimestamps = true,
  connector,
  connectorStyle = 'solid',
  connectorColor = 'gray',
  loading = false,
  emptyMessage = 'No activities yet',
  emptyComponent,
  itemRenderer,
  onItemClick,
  className = '',
  style = {},
  ...props
}, ref) => {
  // Size configurations
  const sizeConfig = {
    sm: {
      itemSpacing: spacing[3],
      iconSize: '1rem',
      fontSize: typography.fontSize.caption,
      titleFontSize: typography.fontSize.body2,
      connectorWidth: '2px',
    },
    md: {
      itemSpacing: spacing[4],
      iconSize: '1.25rem',
      fontSize: typography.fontSize.body2,
      titleFontSize: typography.fontSize.body,
      connectorWidth: '2px',
    },
    lg: {
      itemSpacing: spacing[5],
      iconSize: '1.5rem',
      fontSize: typography.fontSize.body,
      titleFontSize: typography.fontSize.h3,
      connectorWidth: '3px',
    },
  };

  const config = sizeConfig[size];

  // Color mappings
  const connectorColorMap = {
    primary: colors.primary[500],
    secondary: colors.secondary[500],
    gray: colors.gray[300],
  };

  // Format timestamp
  const formatTimestamp = (timestamp: string | Date, format?: string): string => {
    const date = new Date(timestamp);
    if (format) {
      // Simple format implementation - in a real app, you'd use a library like date-fns
      return date.toLocaleDateString();
    }
    return date.toLocaleString();
  };

  // Render loading state
  const renderLoading = () => (
    <div
      className="timeline-loading"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: spacing[8],
        color: colors.gray[500],
      }}
      aria-label="Loading timeline"
    >
      <div
        style={{
          width: '2rem',
          height: '2rem',
          border: `3px solid ${colors.gray[200]}`,
          borderTop: `3px solid ${colors.primary[500]}`,
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
        }}
      />
    </div>
  );

  // Render empty state
  const renderEmpty = () => {
    if (emptyComponent) {
      return emptyComponent;
    }
    
    return (
      <div
        className="timeline-empty"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: spacing[8],
          color: colors.gray[500],
          textAlign: 'center' as const,
        }}
      >
        <div>
          <div
            style={{
              fontSize: '2rem',
              marginBottom: spacing[2],
              opacity: 0.5,
            }}
          >
            📅
          </div>
          <div style={{ fontSize: config.fontSize }}>
            {emptyMessage}
          </div>
        </div>
      </div>
    );
  };

  // Render connector
  const renderConnector = (isLast: boolean) => {
    if (!showConnector || isLast) return null;

    if (connector) {
      return connector;
    }

    const connectorStyles = {
      solid: 'solid',
      dashed: 'dashed',
      dotted: 'dotted',
    };

    return (
      <div
        className="timeline-connector"
        style={{
          position: 'absolute',
          left: '50%',
          top: '100%',
          transform: 'translateX(-50%)',
          width: config.connectorWidth,
          height: config.itemSpacing,
          backgroundColor: connectorColorMap[connectorColor],
          borderStyle: connectorStyles[connectorStyle],
          borderWidth: '0 0 0 2px',
          borderColor: connectorColorMap[connectorColor],
          zIndex: 1,
        }}
      />
    );
  };

  // Render timeline item
  const renderItem = (item: TimelineItemData, index: number) => {
    if (itemRenderer) {
      return itemRenderer({ item, index });
    }

    return (
      <TimelineItem
        key={item.id}
        item={item}
        size={size}
        showTimestamp={showTimestamps}
        timestampFormat={item.timestampFormat}
        onClick={onItemClick}
        style={{
          marginBottom: index < items.length - 1 ? config.itemSpacing : 0,
        }}
      />
    );
  };

  if (loading) {
    return (
      <div
        ref={ref}
        className={`timeline loading ${className}`}
        style={style}
        {...props}
      >
        {renderLoading()}
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div
        ref={ref}
        className={`timeline empty ${className}`}
        style={style}
        {...props}
      >
        {renderEmpty()}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`timeline orientation-${orientation} size-${size} variant-${variant} ${className}`}
      style={{
        position: 'relative',
        ...(orientation === 'vertical' && {
          display: 'flex',
          flexDirection: 'column' as const,
        }),
        ...(orientation === 'horizontal' && {
          display: 'flex',
          flexDirection: 'row' as const,
          overflowX: 'auto' as const,
        }),
        ...style,
      }}
      role="list"
      {...props}
    >
      {items.map((item, index) => (
        <div
          key={item.id}
          className="timeline-item-wrapper"
          style={{
            position: 'relative',
            ...(orientation === 'vertical' && {
              display: 'flex',
              flexDirection: 'column' as const,
            }),
            ...(orientation === 'horizontal' && {
              flex: '0 0 auto',
              minWidth: '200px',
            }),
          }}
        >
          {renderItem(item, index)}
          {renderConnector(index === items.length - 1)}
        </div>
      ))}

      {/* CSS animations */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .timeline-item-wrapper:last-child .timeline-connector {
          display: none;
        }
      `}</style>
    </div>
  );
});

Timeline.displayName = 'Timeline';

export default Timeline;
