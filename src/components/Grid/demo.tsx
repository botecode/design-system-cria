import React from 'react';
import { Grid, Row, Column } from './index';
import { Card, CardContent, CardHeader } from '../Card';
import { Typography } from '../Typography';
import { Button } from '../Button';
import { Divider } from '../Divider';
import { spacing, radii, colors } from '../../tokens';
import { Input } from '../Input';

const GridDemo: React.FC = () => {
  return (
    <div style={{ padding: spacing[8] }}>
      <Typography variant="h1" weight="bold" style={{ marginBottom: spacing[8] }}>
        Grid / Row / Column Components
      </Typography>

      <Typography variant="body" style={{ marginBottom: spacing[8] }}>
        Comprehensive layout components for responsive content alignment using CSS Grid and Flexbox.
      </Typography>

      <div style={{ display: 'grid', gap: spacing[8] }}>
        {/* Basic Grid Examples */}
        <Card>
          <CardHeader>
            <Typography variant="h2" weight="semibold">
              Basic Grid Layout
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography variant="body" style={{ marginBottom: '1rem' }}>
              Simple 3-column grid layout:
            </Typography>
            <Grid columns={3} gap="md" style={{ marginBottom: spacing[8] }}>
              <div style={{ padding: spacing[4], backgroundColor: colors.gray[50], borderRadius: radii.sm, textAlign: 'center' }}>
                <Typography variant="body" weight="medium">Column 1</Typography>
              </div>
              <div style={{ padding: spacing[4], backgroundColor: colors.gray[50], borderRadius: radii.sm, textAlign: 'center' }}>
                <Typography variant="body" weight="medium">Column 2</Typography>
              </div>
              <div style={{ padding: spacing[4], backgroundColor: colors.gray[50], borderRadius: radii.sm, textAlign: 'center' }}>
                <Typography variant="body" weight="medium">Column 3</Typography>
              </div>
            </Grid>

            <Typography variant="body" style={{ marginBottom: '1rem' }}>
              Auto-fit grid with minimum column width:
            </Typography>
            <Grid autoFit minColumnWidth="200px" gap="lg" style={{ marginBottom: spacing[8] }}>
              <div style={{ padding: spacing[4], backgroundColor: colors.gray[50], borderRadius: radii.sm, textAlign: 'center' }}>
                <Typography variant="body" weight="medium">Auto Item 1</Typography>
              </div>
              <div style={{ padding: spacing[4], backgroundColor: colors.gray[50], borderRadius: radii.sm, textAlign: 'center' }}>
                <Typography variant="body" weight="medium">Auto Item 2</Typography>
              </div>
              <div style={{ padding: spacing[4], backgroundColor: colors.gray[50], borderRadius: radii.sm, textAlign: 'center' }}>
                <Typography variant="body" weight="medium">Auto Item 3</Typography>
              </div>
              <div style={{ padding: spacing[4], backgroundColor: colors.gray[50], borderRadius: radii.sm, textAlign: 'center' }}>
                <Typography variant="body" weight="medium">Auto Item 4</Typography>
              </div>
            </Grid>
          </CardContent>
        </Card>

        {/* Grid with Column Spans */}
        <Card>
          <CardHeader>
            <Typography variant="h2" weight="semibold">
              Grid with Column Spans
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography variant="body" style={{ marginBottom: '1rem' }}>
              Using Column components with different spans:
            </Typography>
            <Grid columns={12} gap="md" style={{ marginBottom: spacing[8] }}>
              <Column span={6} style={{ padding: spacing[4], backgroundColor: colors.gray[100], borderRadius: radii.sm, textAlign: 'center' }}>
                <Typography variant="body" weight="medium">Span 6</Typography>
              </Column>
              <Column span={6} style={{ padding: spacing[4], backgroundColor: colors.gray[100], borderRadius: radii.sm, textAlign: 'center' }}>
                <Typography variant="body" weight="medium">Span 6</Typography>
              </Column>
              <Column span={4} style={{ padding: spacing[4], backgroundColor: colors.gray[100], borderRadius: radii.sm, textAlign: 'center' }}>
                <Typography variant="body" weight="medium">Span 4</Typography>
              </Column>
              <Column span={4} style={{ padding: spacing[4], backgroundColor: colors.gray[100], borderRadius: radii.sm, textAlign: 'center' }}>
                <Typography variant="body" weight="medium">Span 4</Typography>
              </Column>
              <Column span={4} style={{ padding: spacing[4], backgroundColor: colors.gray[100], borderRadius: radii.sm, textAlign: 'center' }}>
                <Typography variant="body" weight="medium">Span 4</Typography>
              </Column>
              <Column span={8} style={{ padding: spacing[4], backgroundColor: colors.gray[100], borderRadius: radii.sm, textAlign: 'center' }}>
                <Typography variant="body" weight="medium">Span 8</Typography>
              </Column>
              <Column span={4} style={{ padding: spacing[4], backgroundColor: colors.gray[100], borderRadius: radii.sm, textAlign: 'center' }}>
                <Typography variant="body" weight="medium">Span 4</Typography>
              </Column>
            </Grid>

            <Typography variant="body" style={{ marginBottom: '1rem' }}>
              Column with offset:
            </Typography>
            <Grid columns={12} gap="md" style={{ marginBottom: spacing[8] }}>
              <Column span={4} offset={2} style={{ padding: spacing[4], backgroundColor: colors.gray[200], borderRadius: radii.sm, textAlign: 'center' }}>
                <Typography variant="body" weight="medium">Span 4, Offset 2</Typography>
              </Column>
              <Column span={4} style={{ padding: spacing[4], backgroundColor: colors.gray[200], borderRadius: radii.sm, textAlign: 'center' }}>
                <Typography variant="body" weight="medium">Span 4</Typography>
              </Column>
            </Grid>
          </CardContent>
        </Card>

        {/* Responsive Grid */}
        <Card>
          <CardHeader>
            <Typography variant="h2" weight="semibold">
              Responsive Grid Layout
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography variant="body" style={{ marginBottom: '1rem' }}>
              Responsive columns that adapt to screen size:
            </Typography>
            <Grid 
              columns={{ sm: 1, md: 2, lg: 3 }} 
              gap="md" 
              style={{ marginBottom: spacing[8] }}
            >
              <Column style={{ padding: spacing[4], backgroundColor: colors.gray[100], borderRadius: radii.sm, textAlign: 'center' }}>
                <Typography variant="body" weight="medium">Responsive Item 1</Typography>
                <Typography variant="bodySmall">1 col on mobile, 2 on tablet, 3 on desktop</Typography>
              </Column>
              <Column style={{ padding: spacing[4], backgroundColor: colors.gray[100], borderRadius: radii.sm, textAlign: 'center' }}>
                <Typography variant="body" weight="medium">Responsive Item 2</Typography>
                <Typography variant="bodySmall">1 col on mobile, 2 on tablet, 3 on desktop</Typography>
              </Column>
              <Column style={{ padding: spacing[4], backgroundColor: colors.gray[100], borderRadius: radii.sm, textAlign: 'center' }}>
                <Typography variant="body" weight="medium">Responsive Item 3</Typography>
                <Typography variant="bodySmall">1 col on mobile, 2 on tablet, 3 on desktop</Typography>
              </Column>
            </Grid>

            <Typography variant="body" style={{ marginBottom: '1rem' }}>
              Responsive column spans:
            </Typography>
            <Grid columns={12} gap="md" style={{ marginBottom: spacing[8] }}>
              <Column 
                span={{ sm: 12, md: 6, lg: 4 }} 
                style={{ padding: spacing[4], backgroundColor: colors.gray[100], borderRadius: radii.sm, textAlign: 'center' }}
              >
                <Typography variant="body" weight="medium">Full on mobile, half on tablet, third on desktop</Typography>
              </Column>
              <Column 
                span={{ sm: 12, md: 6, lg: 4 }} 
                style={{ padding: spacing[4], backgroundColor: colors.gray[100], borderRadius: radii.sm, textAlign: 'center' }}
              >
                <Typography variant="body" weight="medium">Full on mobile, half on tablet, third on desktop</Typography>
              </Column>
              <Column 
                span={{ sm: 12, md: 12, lg: 4 }} 
                style={{ padding: spacing[4], backgroundColor: colors.gray[100], borderRadius: radii.sm, textAlign: 'center' }}
              >
                <Typography variant="body" weight="medium">Full on mobile and tablet, third on desktop</Typography>
              </Column>
            </Grid>
          </CardContent>
        </Card>

        {/* Row Examples */}
        <Card>
          <CardHeader>
            <Typography variant="h2" weight="semibold">
              Row Layout (Flexbox)
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography variant="body" style={{ marginBottom: '1rem' }}>
              Basic row with flex items:
            </Typography>
            <Row gap="md" style={{ marginBottom: spacing[8] }}>
              <div style={{ padding: spacing[4], backgroundColor: colors.gray[50], borderRadius: radii.sm, flex: 1 }}>
                <Typography variant="body" weight="medium">Flex Item 1</Typography>
              </div>
              <div style={{ padding: spacing[4], backgroundColor: colors.gray[50], borderRadius: radii.sm, flex: 1 }}>
                <Typography variant="body" weight="medium">Flex Item 2</Typography>
              </div>
              <div style={{ padding: spacing[4], backgroundColor: colors.gray[50], borderRadius: radii.sm, flex: 1 }}>
                <Typography variant="body" weight="medium">Flex Item 3</Typography>
              </div>
            </Row>

            <Typography variant="body" style={{ marginBottom: '1rem' }}>
              Row with different alignments:
            </Typography>
            <Row align="center" justify="between" style={{ marginBottom: spacing[8], height: '100px', backgroundColor: colors.gray[50], padding: spacing[4], borderRadius: radii.sm }}>
              <div style={{ padding: spacing[2], backgroundColor: colors.gray[200], borderRadius: radii.sm }}>
                <Typography variant="bodySmall">Start</Typography>
              </div>
              <div style={{ padding: spacing[2], backgroundColor: colors.gray[200], borderRadius: radii.sm }}>
                <Typography variant="bodySmall">Center</Typography>
              </div>
              <div style={{ padding: spacing[2], backgroundColor: colors.gray[200], borderRadius: radii.sm }}>
                <Typography variant="bodySmall">End</Typography>
              </div>
            </Row>

            <Typography variant="body" style={{ marginBottom: '1rem' }}>
              Row with wrapping:
            </Typography>
            <Row wrap gap="sm" style={{ marginBottom: spacing[8] }}>
              {Array.from({ length: 8 }, (_, i) => (
                <div key={i} style={{ padding: `${spacing[2]} ${spacing[4]}`, backgroundColor: colors.gray[200], borderRadius: radii.sm, whiteSpace: 'nowrap' }}>
                  <Typography variant="bodySmall">Item {i + 1}</Typography>
                </div>
              ))}
            </Row>

            <Typography variant="body" style={{ marginBottom: '1rem' }}>
              Vertical row (column direction):
            </Typography>
            <Row direction="column" gap="sm" style={{ marginBottom: spacing[8] }}>
              <div style={{ padding: spacing[4], backgroundColor: colors.gray[100], borderRadius: radii.sm }}>
                <Typography variant="body" weight="medium">Vertical Item 1</Typography>
              </div>
              <div style={{ padding: spacing[4], backgroundColor: colors.gray[100], borderRadius: radii.sm }}>
                <Typography variant="body" weight="medium">Vertical Item 2</Typography>
              </div>
              <div style={{ padding: spacing[4], backgroundColor: colors.gray[100], borderRadius: radii.sm }}>
                <Typography variant="body" weight="medium">Vertical Item 3</Typography>
              </div>
            </Row>
          </CardContent>
        </Card>

        {/* Real-world Examples */}
        <Card>
          <CardHeader>
            <Typography variant="h2" weight="semibold">
              Real-world Examples
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography variant="body" style={{ marginBottom: '1rem' }}>
              Card layout with responsive grid:
            </Typography>
            <Grid columns={{ sm: 1, md: 2, lg: 3 }} gap="lg" style={{ marginBottom: spacing[8] }}>
              <Card>
                <CardHeader>
                  <Typography variant="h3" weight="semibold">Feature 1</Typography>
                </CardHeader>
                <CardContent>
                  <Typography variant="body">This is a feature card that demonstrates how the grid system works with complex components.</Typography>
                  <Button variant="primary" size="sm" style={{ marginTop: spacing[4] }}>
                    Learn More
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Typography variant="h3" weight="semibold">Feature 2</Typography>
                </CardHeader>
                <CardContent>
                  <Typography variant="body">Another feature card showing responsive behavior across different screen sizes.</Typography>
                  <Button variant="secondary" size="sm" style={{ marginTop: spacing[4] }}>
                    Get Started
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Typography variant="h3" weight="semibold">Feature 3</Typography>
                </CardHeader>
                <CardContent>
                  <Typography variant="body">The third feature card completes the responsive grid layout demonstration.</Typography>
                  <Button variant="outline" size="sm" style={{ marginTop: spacing[4] }}>
                    Explore
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            <Divider style={{ marginBottom: spacing[8] }} />

            <Typography variant="body" style={{ marginBottom: '1rem' }}>
              Dashboard layout with mixed components:
            </Typography>
            <Grid columns={12} gap="md" style={{ marginBottom: spacing[8] }}>
              <Column span={{ sm: 12, md: 8 }}>
                <Card>
                  <CardHeader>
                    <Typography variant="h3" weight="semibold">Main Content</Typography>
                  </CardHeader>
                  <CardContent>
                    <Typography variant="body">This is the main content area that takes up 8 columns on medium+ screens and full width on small screens.</Typography>
                  </CardContent>
                </Card>
              </Column>
              <Column span={{ sm: 12, md: 4 }}>
                <Card>
                  <CardHeader>
                    <Typography variant="h3" weight="semibold">Sidebar</Typography>
                  </CardHeader>
                  <CardContent>
                    <Typography variant="body">This sidebar takes up 4 columns on medium+ screens and full width on small screens.</Typography>
                  </CardContent>
                </Card>
              </Column>
            </Grid>

            <Typography variant="body" style={{ marginBottom: '1rem' }}>
              Form layout with rows:
            </Typography>
            <Card>
              <CardHeader>
                <Typography variant="h3" weight="semibold">Contact Form</Typography>
              </CardHeader>
              <CardContent>
                <Row gap="md" style={{ marginBottom: spacing[4] }}>
                  <div style={{ flex: 1 }}>
                    <Typography variant="bodySmall" style={{ marginBottom: spacing[2] }}>First Name</Typography>
                    <Input placeholder="First Name" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <Typography variant="bodySmall" style={{ marginBottom: spacing[2] }}>Last Name</Typography>
                    <Input placeholder="Last Name" />
                  </div>
                </Row>
                <div style={{ marginBottom: spacing[4] }}>
                  <Typography variant="bodySmall" style={{ marginBottom: spacing[2] }}>Email</Typography>
                  <Input type="email" placeholder="Email" />
                </div>
                <Row justify="end" gap="sm">
                  <Button variant="outline">Cancel</Button>
                  <Button variant="primary">Submit</Button>
                </Row>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        {/* Grid Alignment Examples */}
        <Card>
          <CardHeader>
            <Typography variant="h2" weight="semibold">
              Grid Alignment & Justification
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography variant="body" style={{ marginBottom: '1rem' }}>
              Different alignment options:
            </Typography>
            
            <Typography variant="bodySmall" style={{ marginBottom: '0.5rem' }}>Align Start:</Typography>
            <Grid columns={3} align="start" style={{ marginBottom: '1rem', height: '120px', backgroundColor: '#f1f5f9', padding: '1rem', borderRadius: '4px' }}>
              <div style={{ padding: '1rem', backgroundColor: '#cbd5e1', borderRadius: '4px' }}>
                <Typography variant="bodySmall">Short</Typography>
              </div>
              <div style={{ padding: '1rem', backgroundColor: '#cbd5e1', borderRadius: '4px' }}>
                <Typography variant="bodySmall">Medium height content that demonstrates alignment</Typography>
              </div>
              <div style={{ padding: '1rem', backgroundColor: '#cbd5e1', borderRadius: '4px' }}>
                <Typography variant="bodySmall">Very tall content that shows how different alignments work across multiple lines of text</Typography>
              </div>
            </Grid>

            <Typography variant="bodySmall" style={{ marginBottom: '0.5rem' }}>Align Center:</Typography>
            <Grid columns={3} align="center" style={{ marginBottom: '1rem', height: '120px', backgroundColor: '#f1f5f9', padding: '1rem', borderRadius: '4px' }}>
              <div style={{ padding: '1rem', backgroundColor: '#cbd5e1', borderRadius: '4px' }}>
                <Typography variant="bodySmall">Short</Typography>
              </div>
              <div style={{ padding: '1rem', backgroundColor: '#cbd5e1', borderRadius: '4px' }}>
                <Typography variant="bodySmall">Medium height content that demonstrates alignment</Typography>
              </div>
              <div style={{ padding: '1rem', backgroundColor: '#cbd5e1', borderRadius: '4px' }}>
                <Typography variant="bodySmall">Very tall content that shows how different alignments work across multiple lines of text</Typography>
              </div>
            </Grid>

            <Typography variant="bodySmall" style={{ marginBottom: '0.5rem' }}>Align End:</Typography>
            <Grid columns={3} align="end" style={{ marginBottom: '2rem', height: '120px', backgroundColor: '#f1f5f9', padding: '1rem', borderRadius: '4px' }}>
              <div style={{ padding: '1rem', backgroundColor: '#cbd5e1', borderRadius: '4px' }}>
                <Typography variant="bodySmall">Short</Typography>
              </div>
              <div style={{ padding: '1rem', backgroundColor: '#cbd5e1', borderRadius: '4px' }}>
                <Typography variant="bodySmall">Medium height content that demonstrates alignment</Typography>
              </div>
              <div style={{ padding: '1rem', backgroundColor: '#cbd5e1', borderRadius: '4px' }}>
                <Typography variant="bodySmall">Very tall content that shows how different alignments work across multiple lines of text</Typography>
              </div>
            </Grid>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GridDemo;
