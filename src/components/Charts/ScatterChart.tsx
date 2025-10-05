import React from 'react';
import {
  ScatterChart as RechartsScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { BaseChart } from './BaseChart';
import { colors, spacing } from '../../tokens';

export interface ScatterChartDataPoint {
  x: number;
  y: number;
  [key: string]: string | number;
}

export interface ScatterChartProps {
  data: ScatterChartDataPoint[];
  title?: string;
  scatters?: Array<{
    dataKey: string;
    fill?: string;
    name?: string;
    r?: number;
  }>;
  height?: number;
  showGrid?: boolean;
  showLegend?: boolean;
  showTooltip?: boolean;
  xAxisKey?: string;
  yAxisKey?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ScatterChart: React.FC<ScatterChartProps> = ({
  data,
  title = 'Scatter Chart',
  scatters = [{ dataKey: 'y', fill: colors.primary, name: 'Data Points' }],
  height = 300,
  showGrid = true,
  showLegend = true,
  showTooltip = true,
  xAxisKey = 'x',
  yAxisKey = 'y',
  className = '',
  style = {},
}) => {
  const defaultColors = [colors.primary, colors.secondary, colors.accent, colors.warning, colors.success];

  return (
    <BaseChart title={title} height={height} className={className} style={style}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsScatterChart
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
            dataKey={xAxisKey}
            stroke={colors.text.secondary}
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis 
            dataKey={yAxisKey}
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
          {scatters.map((scatter, index) => (
            <Scatter
              key={scatter.dataKey}
              dataKey={scatter.dataKey}
              fill={scatter.fill || defaultColors[index % defaultColors.length]}
              name={scatter.name || scatter.dataKey}
              r={scatter.r || 6}
            />
          ))}
        </RechartsScatterChart>
      </ResponsiveContainer>
    </BaseChart>
  );
};

export default ScatterChart;
