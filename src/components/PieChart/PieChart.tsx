import React, { useMemo, useState, useId } from 'react';
import { colors, typography, spacing } from '../../tokens';
import { Typography } from '../Typography';

export interface PieChartDataItem {
  label: string;
  value: number;
  color?: string;
}

export interface PieChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: PieChartDataItem[];
  title?: string;
  size?: number; // px
  innerRadius?: number; // px for donut style (0 for pie)
}

export const PieChart: React.FC<PieChartProps> = ({
  data,
  title = 'Pie chart',
  size = 220,
  innerRadius = 0,
  style,
  className = '',
  ...props
}) => {
  const chartId = useId();
  const total = useMemo(() => data.reduce((sum, d) => sum + d.value, 0), [data]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const radius = size / 2;
  const cx = radius;
  const cy = radius;

  // Compute arcs as paths
  const paths = useMemo(() => {
    let cumulative = 0;
    return data.map((d, idx) => {
      const valueRatio = total === 0 ? 0 : d.value / total;
      const startAngle = cumulative * 2 * Math.PI;
      const endAngle = (cumulative + valueRatio) * 2 * Math.PI;
      cumulative += valueRatio;

      const outerR = radius;
      const innerR = Math.max(0, Math.min(innerRadius, radius - 2));

      const x0 = cx + outerR * Math.cos(startAngle);
      const y0 = cy + outerR * Math.sin(startAngle);
      const x1 = cx + outerR * Math.cos(endAngle);
      const y1 = cy + outerR * Math.sin(endAngle);

      const largeArcFlag = endAngle - startAngle > Math.PI ? 1 : 0;

      if (innerR <= 0) {
        // pie
        const dPath = [
          `M ${cx} ${cy}`,
          `L ${x0} ${y0}`,
          `A ${outerR} ${outerR} 0 ${largeArcFlag} 1 ${x1} ${y1}`,
          'Z',
        ].join(' ');
        return dPath;
      }

      // donut
      const xi0 = cx + innerR * Math.cos(endAngle);
      const yi0 = cy + innerR * Math.sin(endAngle);
      const xi1 = cx + innerR * Math.cos(startAngle);
      const yi1 = cy + innerR * Math.sin(startAngle);
      const dPath = [
        `M ${x0} ${y0}`,
        `A ${outerR} ${outerR} 0 ${largeArcFlag} 1 ${x1} ${y1}`,
        `L ${xi0} ${yi0}`,
        `A ${innerR} ${innerR} 0 ${largeArcFlag} 0 ${xi1} ${yi1}`,
        'Z',
      ].join(' ');
      return dPath;
    });
  }, [data, total, radius, cx, cy, innerRadius]);

  const handleKeyDown = (idx: number, e: React.KeyboardEvent<SVGPathElement>) => {
    switch (e.key) {
      case ' ':
      case 'Enter':
        e.preventDefault();
        setSelectedIndex((prev) => (prev === idx ? null : idx));
        break;
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault();
        const next = (idx + 1) % data.length;
        document.getElementById(`${chartId}-slice-${next}`)?.focus();
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault();
        const prev = (idx - 1 + data.length) % data.length;
        document.getElementById(`${chartId}-slice-${prev}`)?.focus();
        break;
    }
  };

  const palette = [
    colors.primary,
    colors.secondary,
    '#8B5CF6',
    '#F59E0B',
    '#10B981',
    '#3B82F6',
    '#EF4444',
  ];

  return (
    <div className={["cria-piechart", className].filter(Boolean).join(' ')} style={style} {...props}>
      {title && (
        <Typography variant="h3" weight="semiBold" style={{ marginBottom: spacing[3] }}>
          {title}
        </Typography>
      )}
      <div style={{ display: 'flex', gap: spacing[6], flexWrap: 'wrap' }}>
        <svg
          role="img"
          aria-label={title}
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          style={{ flexShrink: 0 }}
        >
          {paths.map((dPath, idx) => {
            const isHovered = hoveredIndex === idx;
            const isSelected = selectedIndex === idx;
            const fill = data[idx].color || palette[idx % palette.length];
            const opacity = isHovered || isSelected ? 1 : 0.9;
            const stroke = isSelected ? colors.border.dark : 'transparent';
            const strokeWidth = isSelected ? 2 : 1;
            return (
              <path
                key={idx}
                id={`${chartId}-slice-${idx}`}
                d={dPath}
                fill={fill}
                opacity={opacity}
                stroke={stroke}
                strokeWidth={strokeWidth}
                tabIndex={0}
                aria-label={`Slice: ${data[idx].label}`}
                aria-current={isHovered ? 'true' : undefined}
                aria-pressed={isSelected ? 'true' : undefined}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex((h) => (h === idx ? null : h))}
                onClick={() => setSelectedIndex((prev) => (prev === idx ? null : idx))}
                onKeyDown={(e) => handleKeyDown(idx, e)}
              />
            );
          })}
        </svg>

        <div className="cria-piechart__legend" aria-label="Legend">
          {data.map((d, idx) => (
            <div key={idx} className="cria-piechart__legend-item">
              <span
                className="cria-piechart__legend-swatch"
                style={{ backgroundColor: d.color || palette[idx % palette.length] }}
                aria-hidden="true"
              />
              <span className="cria-piechart__legend-label">{d.label}</span>
              <span className="cria-piechart__legend-value">{d.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PieChart;


