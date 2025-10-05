import React from 'react';
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { BaseChart } from './BaseChart';
import { colors, spacing } from '../../tokens';

export interface BarChartDataPoint {
  name: string;
  [key: string]: string | number;
}

export interface BarChartProps {
  data: BarChartDataPoint[];
  title?: string;
  bars?: Array<{
    dataKey: string;
    fill?: string;
    name?: string;
    radius?: number | [number, number, number, number];
  }>;
  height?: number;
  showGrid?: boolean;
  showLegend?: boolean;
  showTooltip?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const BarChart: React.FC<BarChartProps> = ({
  data,
  title = 'Bar Chart',
  bars = [{ dataKey: 'value', fill: colors.primary, name: 'Value' }],
  height = 300,
  showGrid = true,
  showLegend = true,
  showTooltip = true,
  className = '',
  style = {},
}) => {
  const defaultColors = [colors.primary, colors.secondary, colors.accent, colors.warning, colors.success];

  return (
    <BaseChart title={title} height={height} className={className} style={style}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >
          {showGrid && (
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke={colors.border.light}
              opacity={0.3}
            />
          )}
          <XAxis 
            dataKey="name" 
            stroke={colors.text.secondary}
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis 
            stroke={colors.text.secondary}
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          {showTooltip && (
            <Tooltip
              contentStyle={{
                backgroundColor: colors.background.elevated,
                border: `1px solid ${colors.border.medium}`,
                borderRadius: spacing[2],
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                color: colors.text.primary,
              }}
              labelStyle={{ color: colors.text.primary, fontWeight: '600' }}
            />
          )}
          {showLegend && (
            <Legend 
              wrapperStyle={{ 
                paddingTop: spacing[4],
                color: colors.text.secondary,
                fontSize: '12px'
              }}
            />
          )}
          {bars.map((bar, index) => (
            <Bar
              key={bar.dataKey}
              dataKey={bar.dataKey}
              fill={bar.fill || defaultColors[index % defaultColors.length]}
              name={bar.name || bar.dataKey}
              radius={bar.radius || [4, 4, 0, 0]}
            />
          ))}
        </RechartsBarChart>
      </ResponsiveContainer>
    </BaseChart>
  );
};

export default BarChart;
