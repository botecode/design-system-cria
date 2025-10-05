import React from 'react';
import {
  RadarChart as RechartsRadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts';
import { BaseChart } from './BaseChart';
import { colors } from '../../tokens';

export interface RadarChartDataPoint {
  subject: string;
  [key: string]: string | number;
}

export interface RadarChartProps {
  data: RadarChartDataPoint[];
  title?: string;
  radars?: Array<{
    dataKey: string;
    fill?: string;
    stroke?: string;
    name?: string;
    fillOpacity?: number;
  }>;
  height?: number;
  showTooltip?: boolean;
  showLegend?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const RadarChart: React.FC<RadarChartProps> = ({
  data,
  title = 'Radar Chart',
  radars = [{ dataKey: 'value', fill: colors.primary, stroke: colors.primary, name: 'Value' }],
  height = 300,
  showTooltip = true,
  showLegend = true,
  className = '',
  style = {},
}) => {
  const defaultColors = [colors.primary, colors.secondary, colors.accent, colors.warning, colors.success];

  return (
    <BaseChart title={title} height={height} className={className} style={style}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsRadarChart data={data}>
          <PolarGrid stroke={colors.border.light} />
          <PolarAngleAxis 
            dataKey="subject" 
            tick={{ fontSize: 12, fill: colors.text.secondary }}
          />
          <PolarRadiusAxis 
            angle={90} 
            domain={[0, 'dataMax']}
            tick={{ fontSize: 12, fill: colors.text.secondary }}
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
          {radars.map((radar, index) => (
            <Radar
              key={radar.dataKey}
              name={radar.name || radar.dataKey}
              dataKey={radar.dataKey}
              stroke={radar.stroke || defaultColors[index % defaultColors.length]}
              fill={radar.fill || defaultColors[index % defaultColors.length]}
              fillOpacity={radar.fillOpacity || 0.3}
            />
          ))}
        </RechartsRadarChart>
      </ResponsiveContainer>
    </BaseChart>
  );
};

export default RadarChart;
