import React from 'react';
import { PieChart } from './PieChart';
import { Typography } from '../Typography';

export const PieChartDemo: React.FC = () => {
  const data = [
    { label: 'Marketing', value: 25 },
    { label: 'Sales', value: 35 },
    { label: 'R&D', value: 20 },
    { label: 'Support', value: 20 },
  ];

  return (
    <div style={{ padding: '24px', maxWidth: '1000px' }}>
      <Typography variant="title1" weight="bold" style={{ marginBottom: '16px' }}>
        Pie Chart Demo
      </Typography>
      <PieChart data={data} title="Department Budget" />
    </div>
  );
};

export default PieChartDemo;


