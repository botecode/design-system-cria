import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { StatisticMetricCard } from '../StatisticMetricCard';

// Mock data
const mockStatistic = {
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
};

const mockStatisticWithoutTrend = {
  id: '2',
  value: '$45,678',
  label: 'Revenue',
  icon: '💰',
  color: 'secondary' as const,
};

const mockStatisticWithNegativeTrend = {
  id: '3',
  value: '89.2%',
  label: 'Conversion Rate',
  trend: {
    value: 5.3,
    direction: 'down' as const,
    period: 'vs last week'
  },
  icon: '📊',
  color: 'success' as const,
};

describe('StatisticMetricCard', () => {
  it('renders the component with all required elements', () => {
    render(<StatisticMetricCard {...mockStatistic} />);

    expect(screen.getByText('1,234')).toBeInTheDocument();
    expect(screen.getByText('Total Users')).toBeInTheDocument();
    expect(screen.getByText('👥')).toBeInTheDocument();
    expect(screen.getByText('+12.5%')).toBeInTheDocument();
    expect(screen.getByText('vs last month')).toBeInTheDocument();
  });

  it('renders without trend information', () => {
    render(<StatisticMetricCard {...mockStatisticWithoutTrend} />);

    expect(screen.getByText('$45,678')).toBeInTheDocument();
    expect(screen.getByText('Revenue')).toBeInTheDocument();
    expect(screen.getByText('💰')).toBeInTheDocument();
    expect(screen.queryByText(/vs last/)).not.toBeInTheDocument();
  });

  it('displays positive trend correctly', () => {
    render(<StatisticMetricCard {...mockStatistic} />);

    const trendElement = screen.getByText('+12.5%');
    expect(trendElement).toBeInTheDocument();
    expect(trendElement).toHaveClass('trend-positive');
  });

  it('displays negative trend correctly', () => {
    render(<StatisticMetricCard {...mockStatisticWithNegativeTrend} />);

    const trendElement = screen.getByText('-5.3%');
    expect(trendElement).toBeInTheDocument();
    expect(trendElement).toHaveClass('trend-negative');
  });

  it('handles click events when onClick is provided', () => {
    const mockOnClick = jest.fn();
    render(<StatisticMetricCard {...mockStatistic} onClick={mockOnClick} />);

    const card = screen.getByRole('button');
    fireEvent.click(card);
    expect(mockOnClick).toHaveBeenCalledWith(mockStatistic);
  });

  it('does not render as clickable when onClick is not provided', () => {
    render(<StatisticMetricCard {...mockStatistic} />);

    expect(screen.queryByRole('button')).not.toBeInTheDocument();
    expect(screen.getByRole('region')).toBeInTheDocument();
  });

  it('applies correct color variants', () => {
    const { rerender } = render(<StatisticMetricCard {...mockStatistic} />);
    expect(screen.getByRole('region')).toHaveClass('variant-primary');

    rerender(<StatisticMetricCard {...mockStatisticWithoutTrend} />);
    expect(screen.getByRole('region')).toHaveClass('variant-secondary');

    rerender(<StatisticMetricCard {...mockStatisticWithNegativeTrend} />);
    expect(screen.getByRole('region')).toHaveClass('variant-success');
  });

  it('applies correct size variants', () => {
    const { rerender } = render(<StatisticMetricCard {...mockStatistic} size="small" />);
    expect(screen.getByRole('region')).toHaveClass('size-small');

    rerender(<StatisticMetricCard {...mockStatistic} size="medium" />);
    expect(screen.getByRole('region')).toHaveClass('size-medium');

    rerender(<StatisticMetricCard {...mockStatistic} size="large" />);
    expect(screen.getByRole('region')).toHaveClass('size-large');
  });

  it('renders with custom className and style', () => {
    const customStyle = { backgroundColor: 'red' };
    
    render(
      <StatisticMetricCard
        {...mockStatistic}
        className="custom-class"
        style={customStyle}
      />
    );

    const card = screen.getByRole('region');
    expect(card).toHaveClass('custom-class');
    expect(card).toHaveStyle('background-color: red');
  });

  it('handles loading state', () => {
    render(<StatisticMetricCard {...mockStatistic} loading />);

    expect(screen.getByText('Total Users')).toBeInTheDocument();
    expect(screen.queryByText('1,234')).not.toBeInTheDocument();
    expect(screen.getByTestId('loading-skeleton')).toBeInTheDocument();
  });

  it('handles error state', () => {
    render(<StatisticMetricCard {...mockStatistic} error="Failed to load data" />);

    expect(screen.getByText('Total Users')).toBeInTheDocument();
    expect(screen.queryByText('1,234')).not.toBeInTheDocument();
    expect(screen.getByText('Failed to load data')).toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    render(<StatisticMetricCard {...mockStatistic} />);

    const card = screen.getByRole('region');
    expect(card).toHaveAttribute('aria-label', 'Total Users: 1,234');
    
    if (mockStatistic.trend) {
      expect(card).toHaveAttribute('aria-describedby');
    }
  });

  it('supports keyboard navigation when clickable', () => {
    const mockOnClick = jest.fn();
    render(<StatisticMetricCard {...mockStatistic} onClick={mockOnClick} />);

    const card = screen.getByRole('button');
    card.focus();
    expect(card).toHaveFocus();

    fireEvent.keyDown(card, { key: 'Enter' });
    expect(mockOnClick).toHaveBeenCalledWith(mockStatistic);

    fireEvent.keyDown(card, { key: ' ' });
    expect(mockOnClick).toHaveBeenCalledTimes(2);
  });

  it('renders icon correctly', () => {
    render(<StatisticMetricCard {...mockStatistic} />);

    const iconElement = screen.getByText('👥');
    expect(iconElement).toBeInTheDocument();
  });

  it('handles missing icon gracefully', () => {
    const statisticWithoutIcon = { ...mockStatistic, icon: undefined };
    render(<StatisticMetricCard {...statisticWithoutIcon} />);

    expect(screen.getByText('1,234')).toBeInTheDocument();
    expect(screen.getByText('Total Users')).toBeInTheDocument();
    expect(screen.queryByText('👥')).not.toBeInTheDocument();
  });

  it('formats trend value correctly', () => {
    const statisticWithDecimalTrend = {
      ...mockStatistic,
      trend: {
        value: 12.567,
        direction: 'up' as const,
        period: 'vs last month'
      }
    };

    render(<StatisticMetricCard {...statisticWithDecimalTrend} />);

    expect(screen.getByText('+12.6%')).toBeInTheDocument();
  });

  it('handles zero trend value', () => {
    const statisticWithZeroTrend = {
      ...mockStatistic,
      trend: {
        value: 0,
        direction: 'up' as const,
        period: 'vs last month'
      }
    };

    render(<StatisticMetricCard {...statisticWithZeroTrend} />);

    expect(screen.getByText('0.0%')).toBeInTheDocument();
  });

  it('applies proper focus styles when clickable', () => {
    const mockOnClick = jest.fn();
    render(<StatisticMetricCard {...mockStatistic} onClick={mockOnClick} />);

    const card = screen.getByRole('button');
    expect(card).toHaveAttribute('tabIndex', '0');
  });

  it('renders with data attributes', () => {
    render(
      <StatisticMetricCard
        {...mockStatistic}
        'data-testid'="metric-card"
        'data-value'="1234"
      />
    );

    const card = screen.getByTestId('metric-card');
    expect(card).toHaveAttribute('data-value', '1234');
  });
});
