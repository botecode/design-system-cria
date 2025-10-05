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

export interface StackedBarChartDataPoint {
  name: string;
  [key: string]: string | number;
}

export interface StackedBarChartProps {
  data: StackedBarChartDataPoint[];
  title?: string;
  bars?: Array<{
    dataKey: string;
    fill?: string;
    name?: string;
    stackId?: string;
  }>;
  height?: number;
  showGrid?: boolean;
  showLegend?: boolean;
  showTooltip?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const StackedBarChart: React.FC<StackedBarChartProps> = ({
  data,
  title = 'Stacked Bar Chart',
  bars = [
    { dataKey: 'value1', fill: colors.primary, name: 'Value 1', stackId: 'stack1' },
    { dataKey: 'value2', fill: colors.secondary, name: 'Value 2', stackId: 'stack1' },
  ],
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
              stackId={bar.stackId || 'stack1'}
              fill={bar.fill || defaultColors[index % defaultColors.length]}
              name={bar.name || bar.dataKey}
              radius={index === bars.length - 1 ? [4, 4, 0, 0] : [0, 0, 0, 0]}
            />
          ))}
        </RechartsBarChart>
      </ResponsiveContainer>
    </BaseChart>
  );
};

export default StackedBarChart;
