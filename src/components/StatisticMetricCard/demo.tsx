import React, { useState, useCallback } from 'react';
import { StatisticMetricCard } from './StatisticMetricCard';
import { CriaTextHeadline1, CriaTextHeadline2, CriaTextTitle1, CriaTextBody1, CriaTextBody2 } from '../TextTokens';
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
  Lightning,
  Globe
} from 'phosphor-react';
import { spacing, colors, radii } from '../../tokens';

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
    <div style={{ padding: spacing[8], minHeight: '100vh' }}>
      <CriaTextHeadline1 style={{ marginBottom: spacing[8] }}>
        Statistic / Metric Card
      </CriaTextHeadline1>

      <CriaTextBody1 style={{ marginBottom: spacing[8] }}>
        Dashboard components for displaying values, labels, and trends with comprehensive state management.
      </CriaTextBody1>

      {clickedStatistic && (
        <Card style={{ marginBottom: spacing[8], backgroundColor: colors.primary[50], border: `1px solid ${colors.primary[500]}` }}>
          <CardContent>
            <CriaTextBody2 style={{ fontWeight: typography.fontWeight.medium, color: colors.primary[800] }}>
              Last clicked: {clickedStatistic}
            </CriaTextBody2>
          </CardContent>
        </Card>
      )}

      {/* Basic Examples */}
      <Card style={{ marginBottom: spacing[8] }}>
        <CardHeader>
          <CriaTextHeadline2>
            Basic Examples
          </CriaTextHeadline2>
        </CardHeader>
        <CardContent>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: spacing[4],
            marginBottom: spacing[8]
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
      <Card style={{ marginBottom: spacing[8] }}>
        <CardHeader>
          <CriaTextHeadline2>
            Size Variants
          </CriaTextHeadline2>
        </CardHeader>
        <CardContent>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: spacing[4],
            marginBottom: spacing[4]
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
      <Card style={{ marginBottom: spacing[8] }}>
        <CardHeader>
          <CriaTextHeadline2>
            Color Variants
          </CriaTextHeadline2>
        </CardHeader>
        <CardContent>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: spacing[4],
            marginBottom: spacing[4]
          }}>
            <StatisticMetricCard
              id="primary-metric"
              value="Primary"
              label="Primary Color"
              icon={<Lightning size={20} />}
              color="primary"
            />
            <StatisticMetricCard
              id="secondary-metric"
              value="Secondary"
              label="Secondary Color"
              icon={<Lightning size={20} />}
              color="secondary"
            />
            <StatisticMetricCard
              id="success-metric"
              value="Success"
              label="Success Color"
              icon={<Lightning size={20} />}
              color="success"
            />
            <StatisticMetricCard
              id="warning-metric"
              value="Warning"
              label="Warning Color"
              icon={<Lightning size={20} />}
              color="warning"
            />
            <StatisticMetricCard
              id="error-metric"
              value="Error"
              label="Error Color"
              icon={<Lightning size={20} />}
              color="error"
            />
            <StatisticMetricCard
              id="info-metric"
              value="Info"
              label="Info Color"
              icon={<Lightning size={20} />}
              color="info"
            />
          </div>
        </CardContent>
      </Card>

      {/* Dashboard Layout */}
      <Card style={{ marginBottom: spacing[8] }}>
        <CardHeader>
          <CriaTextHeadline2>
            Dashboard Layout
          </CriaTextHeadline2>
        </CardHeader>
        <CardContent>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
            gap: spacing[4],
            marginBottom: spacing[8]
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
      <Card style={{ marginBottom: spacing[8] }}>
        <CardHeader>
          <CriaTextHeadline2>
            KPI Layout (Large)
          </CriaTextHeadline2>
        </CardHeader>
        <CardContent>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: spacing[6],
            marginBottom: spacing[4]
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
      <Card style={{ marginBottom: spacing[8] }}>
        <CardHeader>
          <CriaTextHeadline2>
            States
          </CriaTextHeadline2>
        </CardHeader>
        <CardContent>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: spacing[4],
            marginBottom: spacing[4]
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
          <CriaTextHeadline2>
            Interactive Controls
          </CriaTextHeadline2>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'flex', gap: spacing[4], flexWrap: 'wrap', marginBottom: spacing[4] }}>
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
          
          <CriaTextBody2 style={{ color: colors.gray[500] }}>
            Click on any statistic card above to see it logged in the console and displayed above.
            Cards with onClick handlers are keyboard accessible and support Enter/Space key activation.
          </CriaTextBody2>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatisticMetricCardDemo;