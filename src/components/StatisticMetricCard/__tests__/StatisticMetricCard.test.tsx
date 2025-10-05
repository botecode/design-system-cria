import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { StatisticMetricCard } from '../StatisticMetricCard';
import { TrendingUp, TrendingDown, Minus } from 'phosphor-react';

describe('StatisticMetricCard', () => {
  const mockStatistic = {
    id: 'test-statistic',
    value: 1234,
    label: 'Total Users',
    icon: <TrendingUp data-testid="trending-icon" />,
    color: 'primary' as const,
    size: 'md' as const,
  };

  const mockStatisticWithTrend = {
    ...mockStatistic,
    trend: {
      value: 12.5,
      direction: 'up' as const,
      period: 'vs last month',
    },
  };

  it('renders with basic props', () => {
    render(<StatisticMetricCard {...mockStatistic} />);
    
    expect(screen.getByText('1234')).toBeInTheDocument();
    expect(screen.getByText('Total Users')).toBeInTheDocument();
    expect(screen.getByTestId('trending-icon')).toBeInTheDocument();
  });

  it('renders with string value', () => {
    render(<StatisticMetricCard {...mockStatistic} value="1.2K" />);
    expect(screen.getByText('1.2K')).toBeInTheDocument();
  });

  it('renders with trend information', () => {
    render(<StatisticMetricCard {...mockStatisticWithTrend} />);
    
    expect(screen.getByText('+12.5%')).toBeInTheDocument();
    expect(screen.getByText('vs last month')).toBeInTheDocument();
  });

  it('renders different trend directions correctly', () => {
    const { rerender } = render(
      <StatisticMetricCard
        {...mockStatistic}
        trend={{ value: 5.2, direction: 'up', period: 'vs last week' }}
      />
    );
    expect(screen.getByText('+5.2%')).toBeInTheDocument();

    rerender(
      <StatisticMetricCard
        {...mockStatistic}
        trend={{ value: 3.1, direction: 'down', period: 'vs last week' }}
      />
    );
    expect(screen.getByText('-3.1%')).toBeInTheDocument();

    rerender(
      <StatisticMetricCard
        {...mockStatistic}
        trend={{ value: 0, direction: 'neutral', period: 'vs last week' }}
      />
    );
    expect(screen.getByText('+0.0%')).toBeInTheDocument();
  });

  it('renders different sizes correctly', () => {
    const { rerender } = render(<StatisticMetricCard {...mockStatistic} size="sm" />);
    expect(screen.getByText('1234')).toBeInTheDocument();

    rerender(<StatisticMetricCard {...mockStatistic} size="lg" />);
    expect(screen.getByText('1234')).toBeInTheDocument();
  });

  it('renders different colors correctly', () => {
    const { rerender } = render(<StatisticMetricCard {...mockStatistic} color="secondary" />);
    expect(screen.getByText('1234')).toBeInTheDocument();

    rerender(<StatisticMetricCard {...mockStatistic} color="success" />);
    expect(screen.getByText('1234')).toBeInTheDocument();

    rerender(<StatisticMetricCard {...mockStatistic} color="warning" />);
    expect(screen.getByText('1234')).toBeInTheDocument();

    rerender(<StatisticMetricCard {...mockStatistic} color="error" />);
    expect(screen.getByText('1234')).toBeInTheDocument();
  });

  it('renders loading state', () => {
    render(<StatisticMetricCard {...mockStatistic} loading />);
    // Should show shimmer skeleton instead of content
    expect(screen.queryByText('1234')).not.toBeInTheDocument();
  });

  it('renders error state', () => {
    render(<StatisticMetricCard {...mockStatistic} error="Failed to load data" />);
    expect(screen.getByText('Failed to load data')).toBeInTheDocument();
  });

  it('handles click events when onClick is provided', () => {
    const mockOnClick = jest.fn();
    render(<StatisticMetricCard {...mockStatistic} onClick={mockOnClick} />);
    
    const card = screen.getByRole('button');
    fireEvent.click(card);
    expect(mockOnClick).toHaveBeenCalled();
  });

  it('does not handle click events when onClick is not provided', () => {
    render(<StatisticMetricCard {...mockStatistic} />);
    const card = screen.getByRole('region');
    expect(card).toBeInTheDocument();
  });

  it('applies custom className and style', () => {
    render(
      <StatisticMetricCard
        {...mockStatistic}
        className="custom-class"
        style={{ backgroundColor: 'red' }}
      />
    );
    
    const card = screen.getByRole('region');
    expect(card).toHaveClass('custom-class');
    expect(card).toHaveStyle('background-color: red');
  });

  it('has proper accessibility attributes', () => {
    render(<StatisticMetricCard {...mockStatisticWithTrend} />);
    
    const card = screen.getByRole('region');
    expect(card).toHaveAttribute('aria-label', 'Total Users: 1234');
    expect(card).toHaveAttribute('aria-describedby');
  });

  it('supports keyboard navigation when clickable', () => {
    const mockOnClick = jest.fn();
    render(<StatisticMetricCard {...mockStatistic} onClick={mockOnClick} />);
    
    const button = screen.getByRole('button');
    button.focus();
    expect(button).toHaveFocus();
    
    fireEvent.keyDown(button, { key: 'Enter' });
    expect(mockOnClick).toHaveBeenCalled();
    
    fireEvent.keyDown(button, { key: ' ' });
    expect(mockOnClick).toHaveBeenCalledTimes(2);
  });

  it('does not trigger click when loading or in error state', () => {
    const mockOnClick = jest.fn();
    const { rerender } = render(
      <StatisticMetricCard {...mockStatistic} onClick={mockOnClick} loading />
    );
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(mockOnClick).not.toHaveBeenCalled();

    rerender(
      <StatisticMetricCard {...mockStatistic} onClick={mockOnClick} error="Error" />
    );
    
    fireEvent.click(button);
    expect(mockOnClick).not.toHaveBeenCalled();
  });

  it('renders without icon', () => {
    const { icon, ...statisticWithoutIcon } = mockStatistic;
    render(<StatisticMetricCard {...statisticWithoutIcon} />);
    
    expect(screen.getByText('1234')).toBeInTheDocument();
    expect(screen.getByText('Total Users')).toBeInTheDocument();
    expect(screen.queryByTestId('trending-icon')).not.toBeInTheDocument();
  });

  it('handles zero trend value correctly', () => {
    render(
      <StatisticMetricCard
        {...mockStatistic}
        trend={{ value: 0, direction: 'up', period: 'vs last month' }}
      />
    );
    expect(screen.getByText('+0.0%')).toBeInTheDocument();
  });
});