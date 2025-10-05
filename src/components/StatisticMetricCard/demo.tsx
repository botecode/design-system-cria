import React, { useState, useCallback } from 'react';
import { StatisticMetricCard } from './StatisticMetricCard';
import { Typography } from '../Typography';
import { Button } from '../Button';
import { Card, CardContent, CardHeader } from '../Card';
import { 
  Users, 
  TrendUp, 
  TrendDown, 
  CurrencyDollar, 
  ShoppingCart, 
  Eye, 
  Heart,
  Star,
  Activity,
  Target,
  Zap,
  Globe
} from 'phosphor-react';

const StatisticMetricCardDemo: React.FC = () => {
  const [clickedStatistic, setClickedStatistic] = useState<string | null>(null);

  const handleStatisticClick = useCallback((statistic: any) => {
    setClickedStatistic(`${statistic.label}: ${statistic.value}`);
    console.log('Statistic clicked:', statistic);
  }, []);

  const sampleStatistics = [
    {
      id: 'users',
      value: 1234,
      label: 'Total Users',
      icon: <Users size={24} />,
      color: 'primary' as const,
      trend: {
        value: 12.5,
        direction: 'up' as const,
        period: 'vs last month',
      },
    },
    {
      id: 'revenue',
      value: '$45.2K',
      label: 'Monthly Revenue',
      icon: <CurrencyDollar size={24} />,
      color: 'success' as const,
      trend: {
        value: 8.3,
        direction: 'up' as const,
        period: 'vs last month',
      },
    },
    {
      id: 'orders',
      value: 892,
      label: 'Orders',
      icon: <ShoppingCart size={24} />,
      color: 'secondary' as const,
      trend: {
        value: 3.2,
        direction: 'down' as const,
        period: 'vs last week',
      },
    },
    {
      id: 'conversion',
      value: '3.4%',
      label: 'Conversion Rate',
      icon: <Target size={24} />,
      color: 'warning' as const,
      trend: {
        value: 0.5,
        direction: 'up' as const,
        period: 'vs last month',
      },
    },
    {
      id: 'views',
      value: '12.5K',
      label: 'Page Views',
      icon: <Eye size={24} />,
      color: 'info' as const,
      trend: {
        value: 15.7,
        direction: 'up' as const,
        period: 'vs last month',
      },
    },
    {
      id: 'satisfaction',
      value: 4.8,
      label: 'User Satisfaction',
      icon: <Heart size={24} />,
      color: 'error' as const,
      trend: {
        value: 0.2,
        direction: 'down' as const,
        period: 'vs last quarter',
      },
    },
  ];

  const dashboardMetrics = [
    {
      id: 'active-users',
      value: '2.1K',
      label: 'Active Users',
      icon: <Users size={20} />,
      color: 'primary' as const,
      size: 'sm' as const,
    },
    {
      id: 'page-views',
      value: '45.2K',
      label: 'Page Views',
      icon: <Eye size={20} />,
      color: 'info' as const,
      size: 'sm' as const,
    },
    {
      id: 'bounce-rate',
      value: '32.1%',
      label: 'Bounce Rate',
      icon: <TrendDown size={20} />,
      color: 'warning' as const,
      size: 'sm' as const,
    },
    {
      id: 'session-duration',
      value: '4m 32s',
      label: 'Avg. Session',
      icon: <Activity size={20} />,
      color: 'success' as const,
      size: 'sm' as const,
    },
  ];

  const kpiMetrics = [
    {
      id: 'revenue-growth',
      value: '+24.5%',
      label: 'Revenue Growth',
      icon: <TrendUp size={32} />,
      color: 'success' as const,
      size: 'lg' as const,
      trend: {
        value: 24.5,
        direction: 'up' as const,
        period: 'YoY',
      },
    },
    {
      id: 'customer-acquisition',
      value: '1,247',
      label: 'New Customers',
      icon: <Users size={32} />,
      color: 'primary' as const,
      size: 'lg' as const,
      trend: {
        value: 18.3,
        direction: 'up' as const,
        period: 'this quarter',
      },
    },
    {
      id: 'market-share',
      value: '12.8%',
      label: 'Market Share',
      icon: <Globe size={32} />,
      color: 'info' as const,
      size: 'lg' as const,
      trend: {
        value: 2.1,
        direction: 'up' as const,
        period: 'vs competitors',
      },
    },
  ];

  return (
    <div style={{ padding: '2rem', minHeight: '100vh' }}>
      <Typography variant="h1" weight="bold" style={{ marginBottom: '2rem' }}>
        Statistic / Metric Card
      </Typography>

      <Typography variant="body" style={{ marginBottom: '2rem' }}>
        Dashboard components for displaying values, labels, and trends with comprehensive state management.
      </Typography>

      {clickedStatistic && (
        <Card style={{ marginBottom: '2rem', backgroundColor: '#e0f7fa', border: '1px solid #00bcd4' }}>
          <CardContent>
            <Typography variant="bodySmall" weight="medium" style={{ color: '#006064' }}>
              Last clicked: {clickedStatistic}
            </Typography>
          </CardContent>
        </Card>
      )}

      {/* Basic Examples */}
      <Card style={{ marginBottom: '2rem' }}>
        <CardHeader>
          <Typography variant="h2" weight="semibold">
            Basic Examples
          </Typography>
        </CardHeader>
        <CardContent>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '1rem',
            marginBottom: '2rem'
          }}>
            {sampleStatistics.map((stat) => (
              <StatisticMetricCard
                key={stat.id}
                {...stat}
                onClick={handleStatisticClick}
              />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Size Variants */}
      <Card style={{ marginBottom: '2rem' }}>
        <CardHeader>
          <Typography variant="h2" weight="semibold">
            Size Variants
          </Typography>
        </CardHeader>
        <CardContent>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '1rem',
            marginBottom: '1rem'
          }}>
            <StatisticMetricCard
              id="small-metric"
              value="1.2K"
              label="Small Metric"
              icon={<Star size={16} />}
              size="sm"
              color="primary"
            />
            <StatisticMetricCard
              id="medium-metric"
              value="5.4K"
              label="Medium Metric"
              icon={<Star size={24} />}
              size="md"
              color="primary"
            />
            <StatisticMetricCard
              id="large-metric"
              value="12.8K"
              label="Large Metric"
              icon={<Star size={32} />}
              size="lg"
              color="primary"
            />
          </div>
        </CardContent>
      </Card>

      {/* Color Variants */}
      <Card style={{ marginBottom: '2rem' }}>
        <CardHeader>
          <Typography variant="h2" weight="semibold">
            Color Variants
          </Typography>
        </CardHeader>
        <CardContent>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '1rem',
            marginBottom: '1rem'
          }}>
            <StatisticMetricCard
              id="primary-metric"
              value="Primary"
              label="Primary Color"
              icon={<Zap size={20} />}
              color="primary"
            />
            <StatisticMetricCard
              id="secondary-metric"
              value="Secondary"
              label="Secondary Color"
              icon={<Zap size={20} />}
              color="secondary"
            />
            <StatisticMetricCard
              id="success-metric"
              value="Success"
              label="Success Color"
              icon={<Zap size={20} />}
              color="success"
            />
            <StatisticMetricCard
              id="warning-metric"
              value="Warning"
              label="Warning Color"
              icon={<Zap size={20} />}
              color="warning"
            />
            <StatisticMetricCard
              id="error-metric"
              value="Error"
              label="Error Color"
              icon={<Zap size={20} />}
              color="error"
            />
            <StatisticMetricCard
              id="info-metric"
              value="Info"
              label="Info Color"
              icon={<Zap size={20} />}
              color="info"
            />
          </div>
        </CardContent>
      </Card>

      {/* Dashboard Layout */}
      <Card style={{ marginBottom: '2rem' }}>
        <CardHeader>
          <Typography variant="h2" weight="semibold">
            Dashboard Layout
          </Typography>
        </CardHeader>
        <CardContent>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
            gap: '1rem',
            marginBottom: '2rem'
          }}>
            {dashboardMetrics.map((metric) => (
              <StatisticMetricCard
                key={metric.id}
                {...metric}
                onClick={handleStatisticClick}
              />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* KPI Layout */}
      <Card style={{ marginBottom: '2rem' }}>
        <CardHeader>
          <Typography variant="h2" weight="semibold">
            KPI Layout (Large)
          </Typography>
        </CardHeader>
        <CardContent>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '1.5rem',
            marginBottom: '1rem'
          }}>
            {kpiMetrics.map((metric) => (
              <StatisticMetricCard
                key={metric.id}
                {...metric}
                onClick={handleStatisticClick}
              />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* States */}
      <Card style={{ marginBottom: '2rem' }}>
        <CardHeader>
          <Typography variant="h2" weight="semibold">
            States
          </Typography>
        </CardHeader>
        <CardContent>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '1rem',
            marginBottom: '1rem'
          }}>
            <StatisticMetricCard
              id="loading-metric"
              value={0}
              label="Loading State"
              icon={<Activity size={24} />}
              color="primary"
              loading
            />
            <StatisticMetricCard
              id="error-metric"
              value={0}
              label="Error State"
              icon={<TrendDown size={24} />}
              color="error"
              error="Failed to load data"
            />
            <StatisticMetricCard
              id="static-metric"
              value="Static"
              label="Static (No Click)"
              icon={<Target size={24} />}
              color="info"
            />
          </div>
        </CardContent>
      </Card>

      {/* Interactive Controls */}
      <Card>
        <CardHeader>
          <Typography variant="h2" weight="semibold">
            Interactive Controls
          </Typography>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
            <Button 
              variant="outline" 
              onClick={() => setClickedStatistic(null)}
            >
              Clear Selection
            </Button>
            <Button 
              variant="primary" 
              onClick={() => setClickedStatistic('Manual selection: Test Value')}
            >
              Set Test Value
            </Button>
          </div>
          
          <Typography variant="body2" style={{ color: '#6b7280' }}>
            Click on any statistic card above to see it logged in the console and displayed above.
            Cards with onClick handlers are keyboard accessible and support Enter/Space key activation.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatisticMetricCardDemo;