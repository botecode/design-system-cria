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
    <div style={{ padding: spacing[8] }}>
      <div style={{ marginBottom: spacing[10] }}>
        <Typography variant="title1" style={{ marginBottom: spacing[6] }}>
          Charts Components
        </Typography>
        <Typography variant="body" style={{ color: '#666', marginBottom: spacing[8] }}>
          Comprehensive chart components built with Recharts and styled with the CRIA design system.
        </Typography>
      </div>

      <Grid gap="lg">
        {/* First Row - 3 Charts */}
        <Row style={{ marginBottom: spacing[6] }}>
          <Column span={{ sm: 12, md: 6, lg: 4 }}>
            <LineChart
              title="Sales Trend"
              data={lineData}
              height={350}
              lines={[
                { dataKey: 'value', stroke: '#0088FE', name: 'Sales' },
                { dataKey: 'value2', stroke: '#00C49F', name: 'Revenue' },
              ]}
            />
          </Column>
          <Column span={{ sm: 12, md: 6, lg: 4 }}>
            <BarChart
              title="Quarterly Performance"
              data={barData}
              height={350}
              bars={[
                { dataKey: 'sales', fill: '#0088FE', name: 'Sales' },
                { dataKey: 'profit', fill: '#00C49F', name: 'Profit' },
              ]}
            />
          </Column>
          <Column span={{ sm: 12, md: 6, lg: 4 }}>
            <StackedBarChart
              title="Product Usage by Platform"
              data={stackedBarData}
              height={350}
              bars={[
                { dataKey: 'desktop', fill: '#0088FE', name: 'Desktop', stackId: 'stack1' },
                { dataKey: 'mobile', fill: '#00C49F', name: 'Mobile', stackId: 'stack1' },
              ]}
            />
          </Column>
        </Row>

        {/* Second Row - 3 Charts */}
        <Row style={{ marginBottom: spacing[6] }}>
          <Column span={{ sm: 12, md: 6, lg: 4 }}>
            <AreaChart
              title="Revenue vs Expenses"
              data={areaData}
              height={350}
              areas={[
                { dataKey: 'revenue', fill: '#0088FE', stroke: '#0088FE', name: 'Revenue' },
                { dataKey: 'expenses', fill: '#00C49F', stroke: '#00C49F', name: 'Expenses' },
              ]}
            />
          </Column>
          <Column span={{ sm: 12, md: 6, lg: 4 }}>
            <PieChart
              title="Device Distribution"
              data={pieData}
              height={350}
            />
          </Column>
          <Column span={{ sm: 12, md: 6, lg: 4 }}>
            <DonutChart
              title="Market Share"
              data={pieData}
              height={350}
            />
          </Column>
        </Row>

        {/* Third Row - 3 Charts */}
        <Row style={{ marginBottom: spacing[6] }}>
          <Column span={{ sm: 12, md: 6, lg: 4 }}>
            <RadarChart
              title="Student Performance"
              data={radarData}
              height={350}
              radars={[
                { dataKey: 'A', fill: '#0088FE', stroke: '#0088FE', name: 'Student A' },
                { dataKey: 'B', fill: '#00C49F', stroke: '#00C49F', name: 'Student B' },
              ]}
            />
          </Column>
          <Column span={{ sm: 12, md: 6, lg: 4 }}>
            <ScatterChart
              title="Data Correlation"
              data={scatterData}
              height={350}
              scatters={[
                { dataKey: 'y', fill: '#0088FE', name: 'Data Points' },
              ]}
            />
          </Column>
          <Column span={{ sm: 12, md: 6, lg: 4 }}>
            <RadialProgressChart
              title="Project Progress"
              data={radialData}
              height={350}
            />
          </Column>
        </Row>

        {/* Fourth Row - 1 Full Width Chart */}
        <Row>
          <Column span={12}>
            <ComposedChart
              title="Combined Metrics"
              data={composedData}
              height={400}
              bars={[
                { dataKey: 'pv', fill: '#8884d8', name: 'Page Views' },
              ]}
              lines={[
                { dataKey: 'uv', stroke: '#82ca9d', name: 'Unique Visitors' },
              ]}
            />
          </Column>
        </Row>
      </Grid>
    </div>
  );
};

export default ChartsDemo;
