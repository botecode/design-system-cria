import React, { useState } from 'react';
import { StatisticMetricCard } from './StatisticMetricCard';
import Typography from '../Typography/Typography';
import { spacing } from '../../tokens';

// Sample data for different metric types
const sampleMetrics = [
  {
    id: '1',
    value: '1,234',
    label: 'Total Users',
    trend: {
      value: 12.5,
      direction: 'up' as const,
      period: 'vs last month'
    },
    icon: '👥',
    color: 'primary' as const,
  },
  {
    id: '2',
    value: '$45,678',
    label: 'Revenue',
    trend: {
      value: 8.2,
      direction: 'up' as const,
      period: 'vs last month'
    },
    icon: '💰',
    color: 'secondary' as const,
  },
  {
    id: '3',
    value: '89.2%',
    label: 'Conversion Rate',
    trend: {
      value: 5.3,
      direction: 'down' as const,
      period: 'vs last week'
    },
    icon: '📊',
    color: 'warning' as const,
  },
  {
    id: '4',
    value: '2,456',
    label: 'Active Sessions',
    trend: {
      value: 23.1,
      direction: 'up' as const,
      period: 'vs last hour'
    },
    icon: '⚡',
    color: 'success' as const,
  },
  {
    id: '5',
    value: '98.5%',
    label: 'Uptime',
    icon: '🟢',
    color: 'success' as const,
  },
  {
    id: '6',
    value: '156',
    label: 'Support Tickets',
    trend: {
      value: 3.7,
      direction: 'down' as const,
      period: 'vs last day'
    },
    icon: '🎫',
    color: 'error' as const,
  },
];

const handleMetricClick = (metric: any) => {
  console.log('Metric clicked:', metric.label);
  alert(`Viewing details for: ${metric.label}`);
};

export const StatisticMetricCardDemo: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<'small' | 'medium' | 'large'>('medium');

  return (
    <div style={{ padding: '24px', maxWidth: '1200px' }}>
      <Typography variant="title1" weight="bold" style={{ marginBottom: '32px' }}>
        Statistic / Metric Card
      </Typography>

      <section style={{ marginBottom: '32px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Dashboard Metrics
        </Typography>
        <Typography variant="body" style={{ marginBottom: '24px', color: '#6b7280' }}>
          Display key performance indicators and statistics with trend data, icons, and interactive states.
          Perfect for dashboards, analytics pages, and data visualization interfaces.
        </Typography>

        {/* Size Selector */}
        <div style={{ marginBottom: '24px' }}>
          <Typography variant="h3" weight="medium" style={{ marginBottom: '12px' }}>
            Size Variants
          </Typography>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
            {(['small', 'medium', 'large'] as const).map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                style={{
                  padding: '8px 16px',
                  border: `2px solid ${selectedSize === size ? '#7566A1' : '#e5e7eb'}`,
                  borderRadius: '6px',
                  backgroundColor: selectedSize === size ? '#7566A1' : 'white',
                  color: selectedSize === size ? 'white' : '#374151',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  textTransform: 'capitalize',
                }}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Metrics Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '16px',
          marginBottom: '32px'
        }}>
          {sampleMetrics.map((metric) => (
            <StatisticMetricCard
              key={metric.id}
              {...metric}
              size={selectedSize}
              onClick={handleMetricClick}
            />
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Different Color Variants
        </Typography>
        <Typography variant="body" style={{ marginBottom: '24px', color: '#6b7280' }}>
          Various color schemes for different types of metrics and data categories.
        </Typography>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '16px',
          marginBottom: '32px'
        }}>
          {(['primary', 'secondary', 'success', 'warning', 'error', 'info'] as const).map((color) => (
            <StatisticMetricCard
              key={color}
              id={`color-${color}`}
              value={color === 'primary' ? '1,234' : color === 'secondary' ? '$45K' : color === 'success' ? '98.5%' : color === 'warning' ? '156' : color === 'error' ? '2.3%' : '89'}
              label={`${color.charAt(0).toUpperCase() + color.slice(1)} Metric`}
              trend={{
                value: Math.random() * 20 - 10,
                direction: Math.random() > 0.5 ? 'up' : 'down',
                period: 'vs last month'
              }}
              icon={color === 'primary' ? '📊' : color === 'secondary' ? '💰' : color === 'success' ? '✅' : color === 'warning' ? '⚠️' : color === 'error' ? '❌' : 'ℹ️'}
              color={color}
              size="medium"
            />
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Loading and Error States
        </Typography>
        <Typography variant="body" style={{ marginBottom: '24px', color: '#6b7280' }}>
          Handle loading states and error conditions gracefully with appropriate visual feedback.
        </Typography>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '16px',
          marginBottom: '32px'
        }}>
          <StatisticMetricCard
            id="loading-example"
            value="1,234"
            label="Loading Metric"
            icon="⏳"
            color="primary"
            loading
          />
          
          <StatisticMetricCard
            id="error-example"
            value="1,234"
            label="Error Metric"
            icon="❌"
            color="error"
            error="Failed to load data"
          />
          
          <StatisticMetricCard
            id="no-trend-example"
            value="98.5%"
            label="Uptime"
            icon="🟢"
            color="success"
          />
        </div>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Non-Interactive vs Interactive
        </Typography>
        <Typography variant="body" style={{ marginBottom: '24px', color: '#6b7280' }}>
          Cards can be static display elements or interactive components with click handlers.
        </Typography>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '16px',
          marginBottom: '32px'
        }}>
          <StatisticMetricCard
            id="static-example"
            value="1,234"
            label="Static Metric"
            trend={{
              value: 12.5,
              direction: 'up',
              period: 'vs last month'
            }}
            icon="📊"
            color="primary"
          />
          
          <StatisticMetricCard
            id="interactive-example"
            value="2,456"
            label="Clickable Metric"
            trend={{
              value: 8.2,
              direction: 'up',
              period: 'vs last month'
            }}
            icon="👆"
            color="secondary"
            onClick={handleMetricClick}
          />
        </div>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Features
        </Typography>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
          <div style={{ padding: '16px', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
            <Typography variant="h3" weight="medium" style={{ marginBottom: '8px' }}>
              📊 Trend Indicators
            </Typography>
            <Typography variant="body" style={{ color: '#6b7280' }}>
              Display positive and negative trends with percentage changes and comparison periods.
            </Typography>
          </div>
          
          <div style={{ padding: '16px', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
            <Typography variant="h3" weight="medium" style={{ marginBottom: '8px' }}>
              🎨 Color Variants
            </Typography>
            <Typography variant="body" style={{ color: '#6b7280' }}>
              Six semantic color variants (primary, secondary, success, warning, error, info) for different metric types.
            </Typography>
          </div>
          
          <div style={{ padding: '16px', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
            <Typography variant="h3" weight="medium" style={{ marginBottom: '8px' }}>
              📏 Size Options
            </Typography>
            <Typography variant="body" style={{ color: '#6b7280' }}>
              Three size variants (small, medium, large) with proportional scaling of text and spacing.
            </Typography>
          </div>
          
          <div style={{ padding: '16px', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
            <Typography variant="h3" weight="medium" style={{ marginBottom: '8px' }}>
              ⚡ Interactive States
            </Typography>
            <Typography variant="body" style={{ color: '#6b7280' }}>
              Optional click handlers with hover effects, focus management, and keyboard navigation support.
            </Typography>
          </div>
          
          <div style={{ padding: '16px', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
            <Typography variant="h3" weight="medium" style={{ marginBottom: '8px' }}>
              🔄 Loading & Error States
            </Typography>
            <Typography variant="body" style={{ color: '#6b7280' }}>
              Built-in loading skeletons and error message display for robust user experience.
            </Typography>
          </div>
          
          <div style={{ padding: '16px', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
            <Typography variant="h3" weight="medium" style={{ marginBottom: '8px' }}>
              ♿ Accessibility
            </Typography>
            <Typography variant="body" style={{ color: '#6b7280' }}>
              WCAG 2.1 AA compliant with proper ARIA labels, keyboard navigation, and screen reader support.
            </Typography>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StatisticMetricCardDemo;
