import React, { useMemo, useState } from 'react';
import { colors, spacing } from '../../tokens';
import { Typography } from '../Typography';

export interface LineChartPoint { x: number; y: number }
export interface LineChartSeries {
  id: string;
  label: string;
  color?: string;
  points: LineChartPoint[];
}

export interface LineChartProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  series: LineChartSeries[];
  width?: number;
  height?: number;
  padding?: number;
}

export const LineChart: React.FC<LineChartProps> = ({
  title = 'Line chart',
  series,
  width = 480,
  height = 280,
  padding = 32,
  className = '',
  style,
  ...props
}) => {
  const [hover, setHover] = useState<string | null>(null);
  const [pressed, setPressed] = useState<string | null>(null);

  const flat = useMemo(() => series.flatMap(s => s.points), [series]);
  const minX = Math.min(...flat.map(p => p.x));
  const maxX = Math.max(...flat.map(p => p.x));
  const minY = Math.min(...flat.map(p => p.y));
  const maxY = Math.max(...flat.map(p => p.y));

  const plotW = width - padding * 2;
  const plotH = height - padding * 2;
  const sx = (x: number) => padding + ((x - minX) / (maxX - minX || 1)) * plotW;
  const sy = (y: number) => height - padding - ((y - minY) / (maxY - minY || 1)) * plotH;

  const palette = [colors.primary, colors.secondary, '#8B5CF6', '#F59E0B', '#10B981'];

  const toPath = (pts: LineChartPoint[]) => pts.map((p, i) => `${i ? 'L' : 'M'} ${sx(p.x)} ${sy(p.y)}`).join(' ');

  return (
    <div className={["cria-linechart", className].filter(Boolean).join(' ')} style={style} {...props}>
      {title && (
        <Typography variant="h3" weight="semiBold" style={{ marginBottom: spacing[3] }}>{title}</Typography>
      )}
      <div style={{ display: 'flex', gap: spacing[6], flexWrap: 'wrap' }}>
        <svg role="img" aria-label={title} width={width} height={height}>
          {/* Axes */}
          <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke={colors.border.medium} />
          <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke={colors.border.medium} />

          {series.map((s, i) => (
            <g key={s.id}>
              <path d={toPath(s.points)} fill="none" stroke={s.color || palette[i % palette.length]} strokeWidth={2} />
              {s.points.map((p, idx) => {
                const id = `${s.id}-${idx}`;
                const cx = sx(p.x);
                const cy = sy(p.y);
                const isCurrent = hover === id;
                const isPressed = pressed === id;
                return (
                  <g key={id}>
                    <circle cx={cx} cy={cy} r={4} fill={s.color || palette[i % palette.length]} />
                    <foreignObject x={cx - 8} y={cy - 8} width={16} height={16}>
                      <button
                        style={{ width: 16, height: 16, background: 'transparent', border: 0, padding: 0, cursor: 'pointer' }}
                        aria-label={`${s.label} point (${p.x}, ${p.y})`}
                        aria-current={isCurrent ? 'true' : undefined}
                        aria-pressed={isPressed ? 'true' : undefined}
                        onMouseEnter={() => setHover(id)}
                        onMouseLeave={() => setHover(h => (h === id ? null : h))}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            setPressed(pr => (pr === id ? null : id));
                          }
                        }}
                      />
                    </foreignObject>
                  </g>
                );
              })}
            </g>
          ))}
        </svg>

        <div className="cria-linechart__legend" aria-label="Legend">
          {series.map((s, i) => (
            <div key={s.id} className="cria-linechart__legend-item">
              <span className="cria-linechart__legend-swatch" style={{ backgroundColor: s.color || palette[i % palette.length] }} aria-hidden="true" />
              <span className="cria-linechart__legend-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LineChart;


