import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { PieChart, PieChartDataItem } from '../PieChart';

const sampleData: PieChartDataItem[] = [
  { label: 'A', value: 40 },
  { label: 'B', value: 30 },
  { label: 'C', value: 20 },
  { label: 'D', value: 10 },
];

describe('PieChart', () => {
  it('renders chart with correct slices', () => {
    render(<PieChart data={sampleData} title="Sales breakdown" />);
    // Each slice should render a focusable path with aria-label
    sampleData.forEach((item) => {
      expect(screen.getByLabelText(new RegExp(`^Slice: ${item.label}`))).toBeInTheDocument();
    });
  });

  it('legend matches data labels and values', () => {
    render(<PieChart data={sampleData} title="Legend test" />);
    sampleData.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
      expect(screen.getByText(String(item.value))).toBeInTheDocument();
    });
  });

  it('hover/selection updates aria and styles', () => {
    render(<PieChart data={sampleData} title="Hover test" />);
    const slice = screen.getByLabelText(/^Slice: A/);
    fireEvent.mouseOver(slice);
    // aria-current set for hovered slice
    expect(slice).toHaveAttribute('aria-current', 'true');
    fireEvent.click(slice);
    // aria-pressed set when selected
    expect(slice).toHaveAttribute('aria-pressed', 'true');
  });

  it('a11y: chart labelled and keyboard focus works', () => {
    render(<PieChart data={sampleData} title="Accessible chart" />);
    // Container role and label
    const chart = screen.getByRole('img', { name: /Accessible chart/ });
    expect(chart).toBeInTheDocument();

    const sliceA = screen.getByLabelText(/^Slice: A/);
    sliceA.focus();
    expect(sliceA).toHaveFocus();

    // Space toggles selection
    fireEvent.keyDown(sliceA, { key: ' ' });
    expect(sliceA).toHaveAttribute('aria-pressed', 'true');

    // ArrowRight moves focus to next slice
    fireEvent.keyDown(sliceA, { key: 'ArrowRight' });
    const sliceB = screen.getByLabelText(/^Slice: B/);
    expect(sliceB).toHaveFocus();
  });
});


