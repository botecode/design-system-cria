import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { LineChart, LineChartSeries } from '../LineChart';

const series: LineChartSeries[] = [
  { id: 's1', label: 'Sales', color: undefined, points: [
    { x: 0, y: 10 }, { x: 1, y: 14 }, { x: 2, y: 8 }, { x: 3, y: 16 }
  ]},
  { id: 's2', label: 'Leads', color: undefined, points: [
    { x: 0, y: 6 }, { x: 1, y: 9 }, { x: 2, y: 7 }, { x: 3, y: 12 }
  ]}
];

describe('LineChart', () => {
  it('renders axes and lines', () => {
    render(<LineChart title="Performance" series={series} />);
    expect(screen.getByRole('img', { name: 'Performance' })).toBeInTheDocument();
    expect(screen.getByText('Sales')).toBeInTheDocument();
    expect(screen.getByText('Leads')).toBeInTheDocument();
  });

  it('focusable points have aria and respond to keyboard', () => {
    render(<LineChart title="Keyboard" series={series} />);
    const point = screen.getAllByRole('button', { name: /Sales point/ })[0];
    point.focus();
    expect(point).toHaveFocus();
    fireEvent.keyDown(point, { key: 'Enter' });
    expect(point).toHaveAttribute('aria-pressed', 'true');
  });

  it('hover updates aria-current', () => {
    render(<LineChart title="Hover" series={series} />);
    const point = screen.getAllByRole('button', { name: /Leads point/ })[1];
    fireEvent.mouseOver(point);
    expect(point).toHaveAttribute('aria-current', 'true');
  });
});


