import React from 'react';
import { Card, CardContent, CardHeader } from '../Card';
import { Typography } from '../Typography';
import { colors, spacing } from '../../tokens';

export interface BaseChartProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  height?: number;
}

export const BaseChart: React.FC<BaseChartProps> = ({
  title,
  children,
  className = '',
  style = {},
  height = 300,
}) => {
  return (
    <Card className={`cria-chart-card ${className}`} style={style}>
      {title && (
        <CardHeader>
          <Typography variant="title2" style={{ color: colors.text.primary }}>
            {title}
          </Typography>
        </CardHeader>
      )}
      <CardContent style={{ padding: spacing[6] }}>
        <div style={{ height: `${height}px`, width: '100%' }}>
          {children}
        </div>
      </CardContent>
    </Card>
  );
};

export default BaseChart;
