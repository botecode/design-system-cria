import React, { forwardRef } from 'react';
import { Card, CardContent } from '../Card';
import { Typography } from '../Typography';
import { ShimmerSkeleton } from '../ShimmerSkeleton';
import { colors, spacing, typography, shadows, radii } from '../../tokens';

export interface StatisticMetricCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Unique identifier for the statistic
   */
  id: string;
  /**
   * The main value to display (number or string)
   */
  value: number | string;
  /**
   * Label describing what the value represents
   */
  label: string;
  /**
   * Optional icon to display
   */
  icon?: React.ReactNode;
  /**
   * Color theme for the statistic
   */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  /**
   * Size variant of the card
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Trend information to display
   */
  trend?: {
    value: number;
    direction: 'up' | 'down' | 'neutral';
    period: string;
  };
  /**
   * Loading state
   */
  loading?: boolean;
  /**
   * Error message to display
   */
  error?: string;
  /**
   * Click handler for interactive cards
   */
  onClick?: (statistic: StatisticMetricCardProps) => void;
  /**
   * Custom class name
   */
  className?: string;
  /**
   * Custom styles
   */
  style?: React.CSSProperties;
}

export const StatisticMetricCard = forwardRef<HTMLDivElement, StatisticMetricCardProps>(({
  id,
  value,
  label,
  icon,
  color = 'primary',
  size = 'md',
  trend,
  loading = false,
  error,
  onClick,
  className = '',
  style,
  ...props
}, ref) => {
  const colorMap = {
    primary: colors.primary,
    secondary: colors.secondary,
    success: colors.success,
    warning: colors.warning,
    error: colors.error,
    info: colors.info,
  };

  const trendColorMap = {
    up: colors.success,
    down: colors.error,
    neutral: colors.gray[500],
  };

  const sizeConfig = {
    sm: {
      valueFontSize: typography.fontSize.h3,
      labelFontSize: typography.fontSize.body2,
      trendFontSize: typography.fontSize.caption,
      iconSize: '1.5rem',
      padding: spacing[3],
    },
    md: {
      valueFontSize: typography.fontSize.h1,
      labelFontSize: typography.fontSize.body,
      trendFontSize: typography.fontSize.caption,
      iconSize: '2rem',
      padding: spacing[4],
    },
    lg: {
      valueFontSize: typography.fontSize.display2,
      labelFontSize: typography.fontSize.h3,
      trendFontSize: typography.fontSize.body,
      iconSize: '2.5rem',
      padding: spacing[5],
    },
  };

  const config = sizeConfig[size];
  const selectedColor = colorMap[color];

  // Format trend value
  const formatTrendValue = (trendValue: number, direction: 'up' | 'down' | 'neutral'): string => {
    const sign = direction === 'up' ? '+' : (direction === 'down' ? '-' : '+');
    const absoluteValue = Math.abs(trendValue);
    return `${sign}${absoluteValue.toFixed(1)}%`;
  };

  // Generate unique IDs for accessibility
  const trendId = `trend-${id}`;

  // Handle click events
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (onClick && !loading && !error) {
      onClick({ id, value, label, icon, color, size, trend, loading, error });
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if ((event.key === 'Enter' || event.key === ' ') && onClick && !loading && !error) {
      event.preventDefault();
      onClick({ id, value, label, icon, color, size, trend, loading, error });
    }
  };

  const Component = onClick ? 'button' : 'div';

  const renderLoading = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[2] }}>
      {icon && (
        <ShimmerSkeleton
          variant="circle"
          width={config.iconSize}
          height={config.iconSize}
          style={{ marginBottom: spacing[2] }}
        />
      )}
      <ShimmerSkeleton
        variant="text"
        width="60%"
        height={config.valueFontSize}
        style={{ marginBottom: spacing[1] }}
      />
      <ShimmerSkeleton
        variant="text"
        width="80%"
        height={config.labelFontSize}
        style={{ marginBottom: spacing[2] }}
      />
      {trend && (
        <ShimmerSkeleton
          variant="text"
          width="40%"
          height={config.trendFontSize}
        />
      )}
    </div>
  );

  const renderError = () => (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: spacing[3],
      color: colors.error,
      textAlign: 'center',
    }}>
      <Typography variant="body2" weight="medium">
        {error}
      </Typography>
    </div>
  );

  return (
    <Component
      ref={ref}
      className={`statistic-metric-card variant-${color} size-${size} ${className} ${onClick ? 'clickable' : ''}`}
      style={{
        background: 'transparent',
        padding: '0',
        cursor: onClick ? 'pointer' : 'default',
        width: '100%',
        textAlign: 'left',
        ...style,
      }}
      role={onClick ? "button" : "region"}
      aria-label={`${label}: ${value}`}
      aria-describedby={trend ? trendId : undefined}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={onClick ? 0 : undefined}
      {...props}
    >
      <Card
        variant="default"
        size="md"
        style={{
          borderRadius: radii.md,
          overflow: 'hidden',
          position: 'relative',
          cursor: onClick ? 'pointer' : 'default',
          transition: 'all 0.2s ease',
          backgroundColor: colors.white,
          border: `1px solid ${colors.gray[200]}`,
          padding: config.padding,
          height: '100%',
        }}
      >
        <CardContent style={{ padding: '0' }}>
          {loading ? renderLoading() : (
            <>
              {/* Icon */}
              {icon && (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: spacing[3] }}>
                  <span style={{ fontSize: config.iconSize, display: 'inline-block' }}>{icon}</span>
                </div>
              )}

              {/* Value */}
              <div style={{ marginBottom: spacing[2] }}>
                <Typography
                  variant={size === 'sm' ? 'h3' : (size === 'lg' ? 'display2' : 'h1')}
                  style={{
                    fontWeight: typography.fontWeight.bold,
                    color: selectedColor,
                    lineHeight: typography.lineHeight.tight,
                  }}
                >
                  {value}
                </Typography>
              </div>

              {/* Label */}
              <Typography
                variant={size === 'sm' ? 'body2' : 'body'}
                style={{
                  color: colors.gray[700],
                  fontWeight: typography.fontWeight.medium,
                  marginBottom: spacing[1],
                }}
              >
                {label}
              </Typography>

              {/* Trend */}
              {trend && (
                <div id={trendId}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: spacing[1], marginTop: spacing[2] }}>
                    <span style={{ color: trendColorMap[trend.direction], fontWeight: typography.fontWeight.semiBold }}>
                      {trend.direction === 'up' ? '↗' : (trend.direction === 'down' ? '↘' : '→')}
                    </span>
                    <Typography
                      variant="caption"
                      style={{
                        color: trendColorMap[trend.direction],
                        fontSize: config.trendFontSize,
                        fontWeight: typography.fontWeight.medium,
                      }}
                    >
                      {formatTrendValue(trend.value, trend.direction)}
                    </Typography>
                    <Typography
                      variant="caption"
                      style={{
                        color: colors.gray[500],
                        fontSize: config.trendFontSize,
                      }}
                    >
                      {trend.period}
                    </Typography>
                  </div>
                </div>
              )}
            </>
          )}

          {/* Error message */}
          {error && renderError()}
        </CardContent>
      </Card>

      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .statistic-metric-card.clickable:focus {
          outline: 2px solid ${selectedColor};
          outline-offset: 2px;
        }

        .statistic-metric-card.clickable:focus-visible {
          outline: 2px solid ${selectedColor};
          outline-offset: 2px;
        }
      `}</style>
    </Component>
  );
});

StatisticMetricCard.displayName = 'StatisticMetricCard';

export default StatisticMetricCard;