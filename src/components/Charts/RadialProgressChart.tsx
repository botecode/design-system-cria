import React from 'react';
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { BaseChart } from './BaseChart';
import { colors, spacing } from '../../tokens';

export interface RadialProgressChartDataPoint {
  name: string;
  value: number;
  fill?: string;
}

export interface RadialProgressChartProps {
  data: RadialProgressChartDataPoint[];
  title?: string;
  height?: number;
  showLegend?: boolean;
  className?: string;
  style?: React.CSSProperties;
  innerRadius?: number;
  outerRadius?: number;
  startAngle?: number;
  endAngle?: number;
}

export const RadialProgressChart: React.FC<RadialProgressChartProps> = ({
  data,
  title = 'Radial Progress Chart',
  height = 300,
  showLegend = true,
  className = '',
  style = {},
  innerRadius = 20,
  outerRadius = 80,
  startAngle = 90,
  endAngle = -270,
}) => {
  const defaultColors = [colors.primary, colors.secondary, colors.accent, colors.warning, colors.success, colors.error];

  const dataWithColors = data.map((item, index) => ({
    ...item,
    fill: item.fill || defaultColors[index % defaultColors.length],
  }));

  return (
    <BaseChart title={title} height={height} className={className} style={style}>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          data={dataWithColors}
        >
          <RadialBar
            minAngle={15}
            label={{ position: 'insideStart', fill: '#fff' }}
            background
            clockWise
            dataKey="value"
          />
          {showLegend && (
            <Legend 
              iconType="circle"
              wrapperStyle={{ 
                paddingTop: spacing[4],
                color: colors.text.secondary,
                fontSize: '12px'
              }}
            />
          )}
        </RadialBarChart>
      </ResponsiveContainer>
    </BaseChart>
  );
};

export default RadialProgressChart;
