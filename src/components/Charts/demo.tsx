import React from 'react';
import { Typography } from '../Typography';
import { Grid, Row, Column } from '../Grid';
import { spacing } from '../../tokens';
import {
  LineChart,
  BarChart,
  StackedBarChart,
  AreaChart,
  PieChart,
  DonutChart,
  RadarChart,
  ScatterChart,
  ComposedChart,
  RadialProgressChart,
} from './index';

export const ChartsDemo: React.FC = () => {
  // Sample data for different chart types
  const lineData = [
    { name: 'Jan', value: 400, value2: 240 },
    { name: 'Feb', value: 300, value2: 139 },
    { name: 'Mar', value: 200, value2: 980 },
    { name: 'Apr', value: 278, value2: 390 },
    { name: 'May', value: 189, value2: 480 },
    { name: 'Jun', value: 239, value2: 380 },
  ];

  const barData = [
    { name: 'Q1', sales: 4000, profit: 2400 },
    { name: 'Q2', sales: 3000, profit: 1398 },
    { name: 'Q3', sales: 2000, profit: 9800 },
    { name: 'Q4', sales: 2780, profit: 3908 },
  ];

  const stackedBarData = [
    { name: 'Product A', desktop: 186, mobile: 80 },
    { name: 'Product B', desktop: 305, mobile: 200 },
    { name: 'Product C', desktop: 237, mobile: 120 },
    { name: 'Product D', desktop: 73, mobile: 190 },
  ];

  const areaData = [
    { name: 'Jan', revenue: 4000, expenses: 2400 },
    { name: 'Feb', revenue: 3000, expenses: 1398 },
    { name: 'Mar', revenue: 2000, expenses: 9800 },
    { name: 'Apr', revenue: 2780, expenses: 3908 },
    { name: 'May', revenue: 1890, expenses: 4800 },
    { name: 'Jun', revenue: 2390, expenses: 3800 },
  ];

  const pieData = [
    { name: 'Desktop', value: 400, color: '#0088FE' },
    { name: 'Mobile', value: 300, color: '#00C49F' },
    { name: 'Tablet', value: 300, color: '#FFBB28' },
    { name: 'Other', value: 200, color: '#FF8042' },
  ];

  const radarData = [
    { subject: 'Math', A: 120, B: 110 },
    { subject: 'Chinese', A: 98, B: 130 },
    { subject: 'English', A: 86, B: 130 },
    { subject: 'Geography', A: 99, B: 100 },
    { subject: 'Physics', A: 85, B: 90 },
    { subject: 'History', A: 65, B: 85 },
  ];

  const scatterData = [
    { x: 100, y: 200, z: 200 },
    { x: 120, y: 100, z: 260 },
    { x: 170, y: 300, z: 400 },
    { x: 140, y: 250, z: 280 },
    { x: 150, y: 400, z: 500 },
    { x: 110, y: 280, z: 200 },
  ];

  const composedData = [
    { name: 'Jan', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Feb', uv: 300, pv: 1398, amt: 2210 },
    { name: 'Mar', uv: 200, pv: 9800, amt: 2290 },
    { name: 'Apr', uv: 278, pv: 3908, amt: 2000 },
    { name: 'May', uv: 189, pv: 4800, amt: 2181 },
    { name: 'Jun', uv: 239, pv: 3800, amt: 2500 },
  ];

  const radialData = [
    { name: 'Progress', value: 75 },
  ];

  return (
    <div style={{ padding: spacing[6] }}>
      <div style={{ marginBottom: spacing[8] }}>
        <Typography variant="title1" style={{ marginBottom: spacing[4] }}>
          Charts Components
        </Typography>
        <Typography variant="body" style={{ color: '#666', marginBottom: spacing[6] }}>
          Comprehensive chart components built with Recharts and styled with the CRIA design system.
        </Typography>
      </div>

      <Grid>
        {/* Line Chart */}
        <Row>
          <Column>
            <LineChart
              title="Sales Trend"
              data={lineData}
              lines={[
                { dataKey: 'value', stroke: '#0088FE', name: 'Sales' },
                { dataKey: 'value2', stroke: '#00C49F', name: 'Revenue' },
              ]}
            />
          </Column>
        </Row>

        {/* Bar Chart */}
        <Row>
          <Column>
            <BarChart
              title="Quarterly Performance"
              data={barData}
              bars={[
                { dataKey: 'sales', fill: '#0088FE', name: 'Sales' },
                { dataKey: 'profit', fill: '#00C49F', name: 'Profit' },
              ]}
            />
          </Column>
        </Row>

        {/* Stacked Bar Chart */}
        <Row>
          <Column>
            <StackedBarChart
              title="Product Usage by Platform"
              data={stackedBarData}
              bars={[
                { dataKey: 'desktop', fill: '#0088FE', name: 'Desktop', stackId: 'stack1' },
                { dataKey: 'mobile', fill: '#00C49F', name: 'Mobile', stackId: 'stack1' },
              ]}
            />
          </Column>
        </Row>

        {/* Area Chart */}
        <Row>
          <Column>
            <AreaChart
              title="Revenue vs Expenses"
              data={areaData}
              areas={[
                { dataKey: 'revenue', fill: '#0088FE', stroke: '#0088FE', name: 'Revenue' },
                { dataKey: 'expenses', fill: '#00C49F', stroke: '#00C49F', name: 'Expenses' },
              ]}
            />
          </Column>
        </Row>

        {/* Pie and Donut Charts */}
        <Row>
          <Column size={6}>
            <PieChart
              title="Device Distribution"
              data={pieData}
            />
          </Column>
          <Column size={6}>
            <DonutChart
              title="Market Share"
              data={pieData}
            />
          </Column>
        </Row>

        {/* Radar Chart */}
        <Row>
          <Column>
            <RadarChart
              title="Student Performance"
              data={radarData}
              radars={[
                { dataKey: 'A', fill: '#0088FE', stroke: '#0088FE', name: 'Student A' },
                { dataKey: 'B', fill: '#00C49F', stroke: '#00C49F', name: 'Student B' },
              ]}
            />
          </Column>
        </Row>

        {/* Scatter Chart */}
        <Row>
          <Column>
            <ScatterChart
              title="Data Correlation"
              data={scatterData}
              scatters={[
                { dataKey: 'y', fill: '#0088FE', name: 'Data Points' },
              ]}
            />
          </Column>
        </Row>

        {/* Composed Chart */}
        <Row>
          <Column>
            <ComposedChart
              title="Combined Metrics"
              data={composedData}
              bars={[
                { dataKey: 'pv', fill: '#8884d8', name: 'Page Views' },
              ]}
              lines={[
                { dataKey: 'uv', stroke: '#82ca9d', name: 'Unique Visitors' },
              ]}
            />
          </Column>
        </Row>

        {/* Radial Progress Chart */}
        <Row>
          <Column>
            <RadialProgressChart
              title="Project Progress"
              data={radialData}
              height={250}
            />
          </Column>
        </Row>
      </Grid>
    </div>
  );
};

export default ChartsDemo;
