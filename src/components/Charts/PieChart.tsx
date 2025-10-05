import React from 'react';
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts';
import { BaseChart } from './BaseChart';
import { colors, spacing } from '../../tokens';

export interface PieChartDataPoint {
  name: string;
  value: number;
  color?: string;
}

export interface PieChartProps {
  data: PieChartDataPoint[];
  title?: string;
  height?: number;
  showLegend?: boolean;
  showTooltip?: boolean;
  className?: string;
  style?: React.CSSProperties;
  innerRadius?: number;
  outerRadius?: number;
}

export const PieChart: React.FC<PieChartProps> = ({
  data,
  title = 'Pie Chart',
  height = 300,
  showLegend = true,
  showTooltip = true,
  className = '',
  style = {},
  innerRadius = 0,
  outerRadius = 80,
}) => {
  const defaultColors = [colors.primary, colors.secondary, colors.accent, colors.warning, colors.success, colors.error];

  const dataWithColors = data.map((item, index) => ({
    ...item,
    color: item.color || defaultColors[index % defaultColors.length],
  }));

  return (
    <BaseChart title={title} height={height} className={className} style={style}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsPieChart>
          <Pie
            data={dataWithColors}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            outerRadius={outerRadius}
            innerRadius={innerRadius}
            fill="#8884d8"
            dataKey="value"
          >
            {dataWithColors.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          {showTooltip && (
            <Tooltip
              contentStyle={{
                backgroundColor: colors.background.elevated,
                border: `1px solid ${colors.border.medium}`,
                borderRadius: spacing[2],
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                color: colors.text.primary,
              }}
              formatter={(value: number, name: string) => [value, name]}
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
        </RechartsPieChart>
      </ResponsiveContainer>
    </BaseChart>
  );
};

export default PieChart;
