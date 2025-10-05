import React from 'react';
import {
  ComposedChart as RechartsComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { BaseChart } from './BaseChart';
import { colors, spacing } from '../../tokens';

export interface ComposedChartDataPoint {
  name: string;
  [key: string]: string | number;
}

export interface ComposedChartProps {
  data: ComposedChartDataPoint[];
  title?: string;
  bars?: Array<{
    dataKey: string;
    fill?: string;
    name?: string;
  }>;
  lines?: Array<{
    dataKey: string;
    stroke?: string;
    strokeWidth?: number;
    name?: string;
  }>;
  height?: number;
  showGrid?: boolean;
  showLegend?: boolean;
  showTooltip?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const ComposedChart: React.FC<ComposedChartProps> = ({
  data,
  title = 'Composed Chart',
  bars = [{ dataKey: 'value', fill: colors.primary, name: 'Value' }],
  lines = [],
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
        <RechartsComposedChart
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
              radius={[4, 4, 0, 0]}
            />
          ))}
          {lines.map((line, index) => (
            <Line
              key={line.dataKey}
              type="monotone"
              dataKey={line.dataKey}
              stroke={line.stroke || defaultColors[index % defaultColors.length]}
              strokeWidth={line.strokeWidth || 2}
              name={line.name || line.dataKey}
              dot={{ fill: line.stroke || defaultColors[index % defaultColors.length], strokeWidth: 2, r: 4 }}
            />
          ))}
        </RechartsComposedChart>
      </ResponsiveContainer>
    </BaseChart>
  );
};

export default ComposedChart;
