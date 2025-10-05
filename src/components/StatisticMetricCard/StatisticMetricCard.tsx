import React from 'react';
import { colors, spacing, typography, radii, shadows } from '../../tokens';
import { Card, CardContent } from '../Card';
import Typography from '../Typography/Typography';

export interface TrendData {
  value: number;
  direction: 'up' | 'down';
  period: string;
}

export interface StatisticMetricCardProps {
  id: string;
  value: string;
  label: string;
  trend?: TrendData;
  icon?: string;
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
  error?: string;
  onClick?: (statistic: StatisticMetricCardProps) => void;
  className?: string;
  style?: React.CSSProperties;
  'data-testid'?: string;
  [key: string]: any; // For additional data attributes
}

export const StatisticMetricCard: React.FC<StatisticMetricCardProps> = ({
  id,
  value,
  label,
  trend,
  icon,
  color = 'primary',
  size = 'medium',
  loading = false,
  error = '',
  onClick,
  className,
  style,
  'data-testid': dataTestId,
  ...dataAttributes
}) => {
  // Color mapping
  const colorMap = {
    primary: colors.primary,
    secondary: colors.secondary,
    success: colors.success,
    warning: colors.warning,
    error: colors.error,
    info: colors.info,
  };

  // Size configurations
  const sizeConfig = {
    small: {
      padding: spacing[3],
      iconSize: '1.5rem',
      valueFontSize: typography.fontSize['2xl'],
      labelFontSize: typography.fontSize.sm,
      trendFontSize: typography.fontSize.xs,
    },
    medium: {
      padding: spacing[4],
      iconSize: '2rem',
      valueFontSize: typography.fontSize['3xl'],
      labelFontSize: typography.fontSize.base,
      trendFontSize: typography.fontSize.sm,
    },
    large: {
      padding: spacing[6],
      iconSize: '2.5rem',
      valueFontSize: typography.fontSize['4xl'],
      labelFontSize: typography.fontSize.lg,
      trendFontSize: typography.fontSize.base,
    },
  };

  const config = sizeConfig[size];
  const selectedColor = colorMap[color];

  // Format trend value
  const formatTrendValue = (trendValue: number): string => {
    const sign = trendValue >= 0 ? '+' : '';
    return `${sign}${trendValue.toFixed(1)}%`;
  };

  // Generate unique IDs for accessibility
  const trendId = `trend-${id}`;

  // Handle click events
  const handleClick = () => {
    if (onClick) {
      onClick({ id, value, label, trend, icon, color, size, loading, error, onClick, className, style });
    }
  };

  // Handle keyboard events
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (onClick && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      handleClick();
    }
  };

  // Render loading skeleton
  const renderLoadingSkeleton = () => (
    <div
      data-testid="loading-skeleton"
      style={{
        width: '60%',
        height: config.valueFontSize,
        backgroundColor: colors.gray[200],
        borderRadius: radii.sm,
        marginBottom: spacing[2],
        animation: 'pulse 1.5s ease-in-out infinite',
      }}
    />
  );

  // Render error state
  const renderError = () => (
    <Typography
      variant="body"
      style={{
        color: colors.error,
        fontSize: config.trendFontSize,
        marginTop: spacing[2],
      }}
    >
      {error}
    </Typography>
  );

  // Render trend indicator
  const renderTrend = () => {
    if (!trend) return null;

    const isPositive = trend.direction === 'up';
    const trendColor = isPositive ? colors.success : colors.error;
    const trendIcon = isPositive ? '↗' : '↘';

    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: spacing[1],
          marginTop: spacing[2],
        }}
      >
        <span
          style={{
            fontSize: config.trendFontSize,
            color: trendColor,
            fontWeight: typography.fontWeight.semiBold,
          }}
        >
          {trendIcon}
        </span>
        <Typography
          variant="caption"
          style={{
            color: trendColor,
            fontSize: config.trendFontSize,
            fontWeight: typography.fontWeight.medium,
          }}
        >
          {formatTrendValue(trend.value)}
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
    );
  };

  // Build component classes
  const componentClasses = [
    'statistic-metric-card',
    `variant-${color}`,
    `size-${size}`,
    onClick ? 'clickable' : '',
    loading ? 'loading' : '',
    error ? 'error' : '',
    className || '',
  ].filter(Boolean).join(' ');

  // Build data attributes
  const dataProps = Object.keys(dataAttributes).reduce((acc, key) => {
    if (key.startsWith('data-')) {
      acc[key] = dataAttributes[key];
    }
    return acc;
  }, {} as Record<string, any>);

  const Component = onClick ? 'button' : 'div';
  const role = onClick ? 'button' : 'region';

  return (
    <Component
      role={role}
      className={componentClasses}
      onClick={onClick ? handleClick : undefined}
      onKeyDown={onClick ? handleKeyDown : undefined}
      tabIndex={onClick ? 0 : undefined}
      style={{
        border: 'none',
        background: 'transparent',
        padding: 0,
        cursor: onClick ? 'pointer' : 'default',
        width: '100%',
        textAlign: 'left',
        ...style,
      }}
      aria-label={`${label}: ${loading ? 'Loading' : error ? 'Error' : value}`}
      aria-describedby={trend ? trendId : undefined}
      data-testid={dataTestId}
      {...dataProps}
    >
      <Card
        style={{
          padding: config.padding,
          height: '100%',
          transition: 'all 0.2s ease',
          border: `1px solid ${colors.gray[200]}`,
          backgroundColor: colors.white,
          ...(onClick && {
            ':hover': {
              boxShadow: shadows.lg,
              transform: 'translateY(-2px)',
            },
          }),
        }}
        onMouseEnter={(e) => {
          if (onClick) {
            e.currentTarget.style.boxShadow = shadows.lg;
            e.currentTarget.style.transform = 'translateY(-2px)';
          }
        }}
        onMouseLeave={(e) => {
          if (onClick) {
            e.currentTarget.style.boxShadow = shadows.sm;
            e.currentTarget.style.transform = 'translateY(0)';
          }
        }}
      >
        <CardContent style={{ padding: 0 }}>
          {/* Icon */}
          {icon && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                marginBottom: spacing[3],
              }}
            >
              <span
                style={{
                  fontSize: config.iconSize,
                  display: 'inline-block',
                }}
              >
                {icon}
              </span>
            </div>
          )}

          {/* Value */}
          <div style={{ marginBottom: spacing[2] }}>
            {loading ? (
              renderLoadingSkeleton()
            ) : error ? (
              <Typography
                variant="h1"
                style={{
                  fontSize: config.valueFontSize,
                  fontWeight: typography.fontWeight.bold,
                  color: colors.error,
                }}
              >
                —
              </Typography>
            ) : (
              <Typography
                variant="h1"
                style={{
                  fontSize: config.valueFontSize,
                  fontWeight: typography.fontWeight.bold,
                  color: selectedColor,
                  lineHeight: 1.2,
                }}
              >
                {value}
              </Typography>
            )}
          </div>

          {/* Label */}
          <Typography
            variant="body"
            style={{
              fontSize: config.labelFontSize,
              color: colors.gray[600],
              fontWeight: typography.fontWeight.medium,
              marginBottom: spacing[1],
            }}
          >
            {label}
          </Typography>

          {/* Trend */}
          {trend && !loading && !error && (
            <div id={trendId}>
              {renderTrend()}
            </div>
          )}

          {/* Error message */}
          {error && renderError()}
        </CardContent>
      </Card>

      <style jsx>{`
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
};

export default StatisticMetricCard;
