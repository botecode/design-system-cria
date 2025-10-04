import React from 'react';
import { LineChart } from './LineChart';
import { Typography } from '../Typography';

export const LineChartDemo: React.FC = () => {
  const series = [
    { id: 's1', label: 'Sales', points: [{ x: 0, y: 10 }, { x: 1, y: 14 }, { x: 2, y: 8 }, { x: 3, y: 16 }]},
    { id: 's2', label: 'Leads', points: [{ x: 0, y: 6 }, { x: 1, y: 9 }, { x: 2, y: 7 }, { x: 3, y: 12 }]},
  ];

  return (
    <div style={{ padding: '24px', maxWidth: '1000px' }}>
      <Typography variant="title1" weight="bold" style={{ marginBottom: '16px' }}>
        Line Chart Demo
      </Typography>
      <LineChart title="Monthly Performance" series={series} />
    </div>
  );
};

export default LineChartDemo;


