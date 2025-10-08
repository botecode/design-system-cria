import React from 'react';
import { Grid, Row, Column } from './index';
import { Card, CardContent, CardHeader } from '../Card';
import { CriaTextHeadline1, CriaTextHeadline2, CriaTextTitle1, CriaTextTitle2, CriaTextBody1, CriaTextBody2 } from '../TextTokens';
import { Button } from '../Button';
import { Divider } from '../Divider';
import { spacing, radii, colors } from '../../tokens';
import { Input } from '../Input';

const GridDemo: React.FC = () => {
  return (
    <div style={{ padding: spacing[8] }}>
      <div style={{ marginBottom: spacing[8] }}>
        <CriaTextHeadline1>
          Grid / Row / Column Components
        </CriaTextHeadline1>
      </div>

      <div style={{ marginBottom: spacing[8] }}>
        <CriaTextBody1>
          Comprehensive layout components for responsive content alignment using CSS Grid and Flexbox.
        </CriaTextBody1>
      </div>

      <div style={{ display: 'grid', gap: spacing[8] }}>
        {/* Basic Grid Examples */}
        <Card>
          <CardHeader>
            <CriaTextHeadline2>
              Basic Grid Layout
            </CriaTextHeadline2>
          </CardHeader>
          <CardContent>
            <div style={{ marginBottom: '1rem' }}>
              <CriaTextBody1>
                Simple 3-column grid layout:
              </CriaTextBody1>
            </div>
            <Grid columns={3} gap="md" style={{ marginBottom: spacing[8] }}>
              <div style={{ padding: spacing[4], backgroundColor: colors.gray[50], borderRadius: radii.sm, textAlign: 'center' }}>
                <CriaTextBody1>Column 1</CriaTextBody1>
              </div>
              <div style={{ padding: spacing[4], backgroundColor: colors.gray[50], borderRadius: radii.sm, textAlign: 'center' }}>
                <CriaTextBody1>Column 2</CriaTextBody1>
              </div>
              <div style={{ padding: spacing[4], backgroundColor: colors.gray[50], borderRadius: radii.sm, textAlign: 'center' }}>
                <CriaTextBody1>Column 3</CriaTextBody1>
              </div>
            </Grid>

            <div style={{ marginBottom: '1rem' }}>
              <CriaTextBody1>
                Auto-fit grid with minimum column width:
              </CriaTextBody1>
            </div>
            <Grid autoFit minColumnWidth="200px" gap="lg" style={{ marginBottom: spacing[8] }}>
              <div style={{ padding: spacing[4], backgroundColor: colors.gray[50], borderRadius: radii.sm, textAlign: 'center' }}>
                <CriaTextBody1>Auto Item 1</CriaTextBody1>
              </div>
              <div style={{ padding: spacing[4], backgroundColor: colors.gray[50], borderRadius: radii.sm, textAlign: 'center' }}>
                <CriaTextBody1>Auto Item 2</CriaTextBody1>
              </div>
              <div style={{ padding: spacing[4], backgroundColor: colors.gray[50], borderRadius: radii.sm, textAlign: 'center' }}>
                <CriaTextBody1>Auto Item 3</CriaTextBody1>
              </div>
              <div style={{ padding: spacing[4], backgroundColor: colors.gray[50], borderRadius: radii.sm, textAlign: 'center' }}>
                <CriaTextBody1>Auto Item 4</CriaTextBody1>
              </div>
            </Grid>
          </CardContent>
        </Card>

        {/* Grid with Column Spans */}
        <Card>
          <CardHeader>
            <CriaTextHeadline2>
              Grid with Column Spans
            </CriaTextHeadline2>
          </CardHeader>
          <CardContent>
            <div style={{ marginBottom: '1rem' }}>
              <CriaTextBody1>
                Using Column components with different spans:
              </CriaTextBody1>
            </div>
            <Grid columns={12} gap="md" style={{ marginBottom: spacing[8] }}>
              <Column span={6} style={{ padding: spacing[4], backgroundColor: colors.gray[100], borderRadius: radii.sm, textAlign: 'center' }}>
                <CriaTextBody1>Span 6</CriaTextBody1>
              </Column>
              <Column span={6} style={{ padding: spacing[4], backgroundColor: colors.gray[100], borderRadius: radii.sm, textAlign: 'center' }}>
                <CriaTextBody1>Span 6</CriaTextBody1>
              </Column>
              <Column span={4} style={{ padding: spacing[4], backgroundColor: colors.gray[100], borderRadius: radii.sm, textAlign: 'center' }}>
                <CriaTextBody1>Span 4</CriaTextBody1>
              </Column>
              <Column span={4} style={{ padding: spacing[4], backgroundColor: colors.gray[100], borderRadius: radii.sm, textAlign: 'center' }}>
                <CriaTextBody1>Span 4</CriaTextBody1>
              </Column>
              <Column span={4} style={{ padding: spacing[4], backgroundColor: colors.gray[100], borderRadius: radii.sm, textAlign: 'center' }}>
                <CriaTextBody1>Span 4</CriaTextBody1>
              </Column>
              <Column span={8} style={{ padding: spacing[4], backgroundColor: colors.gray[100], borderRadius: radii.sm, textAlign: 'center' }}>
                <CriaTextBody1>Span 8</CriaTextBody1>
              </Column>
              <Column span={4} style={{ padding: spacing[4], backgroundColor: colors.gray[100], borderRadius: radii.sm, textAlign: 'center' }}>
                <CriaTextBody1>Span 4</CriaTextBody1>
              </Column>
            </Grid>

            <div style={{ marginBottom: '1rem' }}>
              <CriaTextBody1>
                Column with offset:
              </CriaTextBody1>
            </div>
            <Grid columns={12} gap="md" style={{ marginBottom: spacing[8] }}>
              <Column span={4} offset={2} style={{ padding: spacing[4], backgroundColor: colors.gray[200], borderRadius: radii.sm, textAlign: 'center' }}>
                <CriaTextBody1>Span 4, Offset 2</CriaTextBody1>
              </Column>
              <Column span={4} style={{ padding: spacing[4], backgroundColor: colors.gray[200], borderRadius: radii.sm, textAlign: 'center' }}>
                <CriaTextBody1>Span 4</CriaTextBody1>
              </Column>
            </Grid>
          </CardContent>
        </Card>

        {/* Responsive Grid */}
        <Card>
          <CardHeader>
            <CriaTextHeadline2>
              Responsive Grid Layout
            </CriaTextHeadline2>
          </CardHeader>
          <CardContent>
            <div style={{ marginBottom: '1rem' }}>
              <CriaTextBody1>
                Responsive columns that adapt to screen size:
              </CriaTextBody1>
            </div>
            <Grid 
              columns={{ sm: 1, md: 2, lg: 3 }} 
              gap="md" 
              style={{ marginBottom: spacing[8] }}
            >
              <Column style={{ padding: spacing[4], backgroundColor: colors.gray[100], borderRadius: radii.sm, textAlign: 'center' }}>
                <CriaTextBody1>Responsive Item 1</CriaTextBody1>
                <CriaTextBody2>1 col on mobile, 2 on tablet, 3 on desktop</CriaTextBody2>
              </Column>
              <Column style={{ padding: spacing[4], backgroundColor: colors.gray[100], borderRadius: radii.sm, textAlign: 'center' }}>
                <CriaTextBody1>Responsive Item 2</CriaTextBody1>
                <CriaTextBody2>1 col on mobile, 2 on tablet, 3 on desktop</CriaTextBody2>
              </Column>
              <Column style={{ padding: spacing[4], backgroundColor: colors.gray[100], borderRadius: radii.sm, textAlign: 'center' }}>
                <CriaTextBody1>Responsive Item 3</CriaTextBody1>
                <CriaTextBody2>1 col on mobile, 2 on tablet, 3 on desktop</CriaTextBody2>
              </Column>
            </Grid>

            <div style={{ marginBottom: '1rem' }}>
              <CriaTextBody1>
                Responsive column spans:
              </CriaTextBody1>
            </div>
            <Grid columns={12} gap="md" style={{ marginBottom: spacing[8] }}>
              <Column 
                span={{ sm: 12, md: 6, lg: 4 }} 
                style={{ padding: spacing[4], backgroundColor: colors.gray[100], borderRadius: radii.sm, textAlign: 'center' }}
              >
                <CriaTextBody1>Full on mobile, half on tablet, third on desktop</CriaTextBody1>
              </Column>
              <Column 
                span={{ sm: 12, md: 6, lg: 4 }} 
                style={{ padding: spacing[4], backgroundColor: colors.gray[100], borderRadius: radii.sm, textAlign: 'center' }}
              >
                <CriaTextBody1>Full on mobile, half on tablet, third on desktop</CriaTextBody1>
              </Column>
              <Column 
                span={{ sm: 12, md: 12, lg: 4 }} 
                style={{ padding: spacing[4], backgroundColor: colors.gray[100], borderRadius: radii.sm, textAlign: 'center' }}
              >
                <CriaTextBody1>Full on mobile and tablet, third on desktop</CriaTextBody1>
              </Column>
            </Grid>
          </CardContent>
        </Card>

        {/* Row Examples */}
        <Card>
          <CardHeader>
            <CriaTextHeadline2>
              Row Layout (Flexbox)
            </CriaTextHeadline2>
          </CardHeader>
          <CardContent>
            <div style={{ marginBottom: '1rem' }}>
              <CriaTextBody1>
                Basic row with flex items:
              </CriaTextBody1>
            </div>
            <Row gap="md" style={{ marginBottom: spacing[8] }}>
              <div style={{ padding: spacing[4], backgroundColor: colors.gray[50], borderRadius: radii.sm, flex: 1 }}>
                <CriaTextBody1>Flex Item 1</CriaTextBody1>
              </div>
              <div style={{ padding: spacing[4], backgroundColor: colors.gray[50], borderRadius: radii.sm, flex: 1 }}>
                <CriaTextBody1>Flex Item 2</CriaTextBody1>
              </div>
              <div style={{ padding: spacing[4], backgroundColor: colors.gray[50], borderRadius: radii.sm, flex: 1 }}>
                <CriaTextBody1>Flex Item 3</CriaTextBody1>
              </div>
            </Row>

            <div style={{ marginBottom: '1rem' }}>
              <CriaTextBody1>
                Row with different alignments:
              </CriaTextBody1>
            </div>
            <Row align="center" justify="between" style={{ marginBottom: spacing[8], height: '100px', backgroundColor: colors.gray[50], padding: spacing[4], borderRadius: radii.sm }}>
              <div style={{ padding: spacing[2], backgroundColor: colors.gray[200], borderRadius: radii.sm }}>
                <CriaTextBody2>Start</CriaTextBody2>
              </div>
              <div style={{ padding: spacing[2], backgroundColor: colors.gray[200], borderRadius: radii.sm }}>
                <CriaTextBody2>Center</CriaTextBody2>
              </div>
              <div style={{ padding: spacing[2], backgroundColor: colors.gray[200], borderRadius: radii.sm }}>
                <CriaTextBody2>End</CriaTextBody2>
              </div>
            </Row>

            <div style={{ marginBottom: '1rem' }}>
              <CriaTextBody1>
                Row with wrapping:
              </CriaTextBody1>
            </div>
            <Row wrap gap="sm" style={{ marginBottom: spacing[8] }}>
              {Array.from({ length: 8 }, (_, i) => (
                <div key={i} style={{ padding: `${spacing[2]} ${spacing[4]}`, backgroundColor: colors.gray[200], borderRadius: radii.sm, whiteSpace: 'nowrap' }}>
                  <CriaTextBody2>Item {i + 1}</CriaTextBody2>
                </div>
              ))}
            </Row>

            <div style={{ marginBottom: '1rem' }}>
              <CriaTextBody1>
                Vertical row (column direction):
              </CriaTextBody1>
            </div>
            <Row direction="column" gap="sm" style={{ marginBottom: spacing[8] }}>
              <div style={{ padding: spacing[4], backgroundColor: colors.gray[100], borderRadius: radii.sm }}>
                <CriaTextBody1>Vertical Item 1</CriaTextBody1>
              </div>
              <div style={{ padding: spacing[4], backgroundColor: colors.gray[100], borderRadius: radii.sm }}>
                <CriaTextBody1>Vertical Item 2</CriaTextBody1>
              </div>
              <div style={{ padding: spacing[4], backgroundColor: colors.gray[100], borderRadius: radii.sm }}>
                <CriaTextBody1>Vertical Item 3</CriaTextBody1>
              </div>
            </Row>
          </CardContent>
        </Card>

        {/* Real-world Examples */}
        <Card>
          <CardHeader>
            <CriaTextHeadline2>
              Real-world Examples
            </CriaTextHeadline2>
          </CardHeader>
          <CardContent>
            <div style={{ marginBottom: '1rem' }}>
              <CriaTextBody1>
                Card layout with responsive grid:
              </CriaTextBody1>
            </div>
            <Grid columns={{ sm: 1, md: 2, lg: 3 }} gap="lg" style={{ marginBottom: spacing[8] }}>
              <Card>
                <CardHeader>
                  <CriaTextTitle2>Feature 1</CriaTextTitle2>
                </CardHeader>
                <CardContent>
                  <CriaTextBody1>This is a feature card that demonstrates how the grid system works with complex components.</CriaTextBody1>
                  <Button variant="primary" size="sm" style={{ marginTop: spacing[4] }}>
                    Learn More
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CriaTextTitle2>Feature 2</CriaTextTitle2>
                </CardHeader>
                <CardContent>
                  <CriaTextBody1>Another feature card showing responsive behavior across different screen sizes.</CriaTextBody1>
                  <Button variant="secondary" size="sm" style={{ marginTop: spacing[4] }}>
                    Get Started
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CriaTextTitle2>Feature 3</CriaTextTitle2>
                </CardHeader>
                <CardContent>
                  <CriaTextBody1>The third feature card completes the responsive grid layout demonstration.</CriaTextBody1>
                  <Button variant="outline" size="sm" style={{ marginTop: spacing[4] }}>
                    Explore
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            <Divider style={{ marginBottom: spacing[8] }} />

            <div style={{ marginBottom: '1rem' }}>
              <CriaTextBody1>
                Dashboard layout with mixed components:
              </CriaTextBody1>
            </div>
            <Grid columns={12} gap="md" style={{ marginBottom: spacing[8] }}>
              <Column span={{ sm: 12, md: 8 }}>
                <Card>
                  <CardHeader>
                    <CriaTextTitle2>Main Content</CriaTextTitle2>
                  </CardHeader>
                  <CardContent>
                    <CriaTextBody1>This is the main content area that takes up 8 columns on medium+ screens and full width on small screens.</CriaTextBody1>
                  </CardContent>
                </Card>
              </Column>
              <Column span={{ sm: 12, md: 4 }}>
                <Card>
                  <CardHeader>
                    <CriaTextTitle2>Sidebar</CriaTextTitle2>
                  </CardHeader>
                  <CardContent>
                    <CriaTextBody1>This sidebar takes up 4 columns on medium+ screens and full width on small screens.</CriaTextBody1>
                  </CardContent>
                </Card>
              </Column>
            </Grid>

            <div style={{ marginBottom: '1rem' }}>
              <CriaTextBody1>
                Form layout with rows:
              </CriaTextBody1>
            </div>
            <Card>
              <CardHeader>
                <CriaTextTitle2>Contact Form</CriaTextTitle2>
              </CardHeader>
              <CardContent>
                <Row gap="md" style={{ marginBottom: spacing[4] }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ marginBottom: spacing[2] }}><CriaTextBody2>First Name</CriaTextBody2></div>
                    <Input placeholder="First Name" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ marginBottom: spacing[2] }}><CriaTextBody2>Last Name</CriaTextBody2></div>
                    <Input placeholder="Last Name" />
                  </div>
                </Row>
                <div style={{ marginBottom: spacing[4] }}>
                  <div style={{ marginBottom: spacing[2] }}><CriaTextBody2>Email</CriaTextBody2></div>
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
            <CriaTextHeadline2>
              Grid Alignment & Justification
            </CriaTextHeadline2>
          </CardHeader>
          <CardContent>
            <div style={{ marginBottom: '1rem' }}>
              <CriaTextBody1>
                Different alignment options:
              </CriaTextBody1>
            </div>
            
            <div style={{ marginBottom: '0.5rem' }}><CriaTextBody2>Align Start:</CriaTextBody2></div>
            <Grid columns={3} align="start" style={{ marginBottom: '1rem', height: '120px', backgroundColor: '#f1f5f9', padding: '1rem', borderRadius: '4px' }}>
              <div style={{ padding: '1rem', backgroundColor: '#cbd5e1', borderRadius: '4px' }}>
                <CriaTextBody2>Short</CriaTextBody2>
              </div>
              <div style={{ padding: '1rem', backgroundColor: '#cbd5e1', borderRadius: '4px' }}>
                <CriaTextBody2>Medium height content that demonstrates alignment</CriaTextBody2>
              </div>
              <div style={{ padding: '1rem', backgroundColor: '#cbd5e1', borderRadius: '4px' }}>
                <CriaTextBody2>Very tall content that shows how different alignments work across multiple lines of text</CriaTextBody2>
              </div>
            </Grid>

            <div style={{ marginBottom: '0.5rem' }}><CriaTextBody2>Align Center:</CriaTextBody2></div>
            <Grid columns={3} align="center" style={{ marginBottom: '1rem', height: '120px', backgroundColor: '#f1f5f9', padding: '1rem', borderRadius: '4px' }}>
              <div style={{ padding: '1rem', backgroundColor: '#cbd5e1', borderRadius: '4px' }}>
                <CriaTextBody2>Short</CriaTextBody2>
              </div>
              <div style={{ padding: '1rem', backgroundColor: '#cbd5e1', borderRadius: '4px' }}>
                <CriaTextBody2>Medium height content that demonstrates alignment</CriaTextBody2>
              </div>
              <div style={{ padding: '1rem', backgroundColor: '#cbd5e1', borderRadius: '4px' }}>
                <CriaTextBody2>Very tall content that shows how different alignments work across multiple lines of text</CriaTextBody2>
              </div>
            </Grid>

            <div style={{ marginBottom: '0.5rem' }}><CriaTextBody2>Align End:</CriaTextBody2></div>
            <Grid columns={3} align="end" style={{ marginBottom: '2rem', height: '120px', backgroundColor: '#f1f5f9', padding: '1rem', borderRadius: '4px' }}>
              <div style={{ padding: '1rem', backgroundColor: '#cbd5e1', borderRadius: '4px' }}>
                <CriaTextBody2>Short</CriaTextBody2>
              </div>
              <div style={{ padding: '1rem', backgroundColor: '#cbd5e1', borderRadius: '4px' }}>
                <CriaTextBody2>Medium height content that demonstrates alignment</CriaTextBody2>
              </div>
              <div style={{ padding: '1rem', backgroundColor: '#cbd5e1', borderRadius: '4px' }}>
                <CriaTextBody2>Very tall content that shows how different alignments work across multiple lines of text</CriaTextBody2>
              </div>
            </Grid>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GridDemo;
