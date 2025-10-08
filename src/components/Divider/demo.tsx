import React from 'react';
import { Divider } from './Divider';
import { Card, CardContent, CardHeader } from '../Card';
import { CriaTextHeadline1, CriaTextHeadline2, CriaTextTitle1, CriaTextTitle2, CriaTextBody1 } from '../TextTokens';
import { Button } from '../Button';
import { Input } from '../Input';
import { spacing, colors, radii } from '../../tokens';

const DividerDemo: React.FC = () => {
  return (
    <div style={{ padding: spacing[8] }}>
      <div style={{ marginBottom: spacing[8] }}>
        <CriaTextHeadline1>
          Divider Component
        </CriaTextHeadline1>
      </div>

      <div style={{ marginBottom: spacing[8] }}>
        <CriaTextBody1>
          A versatile divider component for separating content sections with multiple variants, orientations, and styling options.
        </CriaTextBody1>
      </div>

      <div style={{ display: 'grid', gap: spacing[8] }}>
        {/* Basic Dividers */}
        <Card>
          <CardHeader>
            <CriaTextTitle1>
              Basic Dividers
            </CriaTextTitle1>
          </CardHeader>
          <CardContent>
            <CriaTextBody1 style={{ marginBottom: spacing[4] }}>
              Default horizontal divider:
            </CriaTextBody1>
            <div style={{ padding: spacing[4], backgroundColor: colors.gray[100], borderRadius: radii.sm }}>
              <CriaTextBody1>Content above</CriaTextBody1>
              <Divider />
              <CriaTextBody1>Content below</CriaTextBody1>
            </div>

            <CriaTextBody1 style={{ marginTop: spacing[8], marginBottom: spacing[4] }}>
              Vertical divider:
            </CriaTextBody1>
            <div style={{ display: 'flex', alignItems: 'center', padding: spacing[4], backgroundColor: colors.gray[100], borderRadius: radii.sm, height: '100px' }}>
              <CriaTextBody1>Left content</CriaTextBody1>
              <Divider orientation="vertical" />
              <CriaTextBody1>Right content</CriaTextBody1>
            </div>
          </CardContent>
        </Card>

        {/* Variants */}
        <Card>
          <CardHeader>
            <CriaTextTitle1 >
              Variants
            </CriaTextTitle1>
          </CardHeader>
          <CardContent>
            <div style={{ padding: spacing[4], backgroundColor: colors.gray[100], borderRadius: radii.sm }}>
              <CriaTextBody1 style={{ marginBottom: spacing[2] }}>Solid (default)</CriaTextBody1>
              <Divider variant="solid" />
              
              <CriaTextBody1 style={{ marginTop: spacing[4], marginBottom: spacing[2] }}>Dashed</CriaTextBody1>
              <Divider variant="dashed" />
              
              <CriaTextBody1 style={{ marginTop: spacing[4], marginBottom: spacing[2] }}>Dotted</CriaTextBody1>
              <Divider variant="dotted" />
            </div>
          </CardContent>
        </Card>

        {/* Sizes */}
        <Card>
          <CardHeader>
            <CriaTextTitle1 >
              Sizes
            </CriaTextTitle1>
          </CardHeader>
          <CardContent>
            <div style={{ padding: spacing[4], backgroundColor: colors.gray[100], borderRadius: radii.sm }}>
              <CriaTextBody1 style={{ marginBottom: spacing[2] }}>Small</CriaTextBody1>
              <Divider size="sm" />
              
              <CriaTextBody1 style={{ marginTop: spacing[4], marginBottom: spacing[2] }}>Medium (default)</CriaTextBody1>
              <Divider size="md" />
              
              <CriaTextBody1 style={{ marginTop: spacing[4], marginBottom: spacing[2] }}>Large</CriaTextBody1>
              <Divider size="lg" />
            </div>
          </CardContent>
        </Card>

        {/* Colors */}
        <Card>
          <CardHeader>
            <CriaTextTitle1 >
              Colors
            </CriaTextTitle1>
          </CardHeader>
          <CardContent>
            <div style={{ padding: spacing[4], backgroundColor: colors.gray[100], borderRadius: radii.sm }}>
              <CriaTextBody1 style={{ marginBottom: spacing[2] }}>Primary</CriaTextBody1>
              <Divider color="primary" />
              
              <CriaTextBody1 style={{ marginTop: spacing[4], marginBottom: spacing[2] }}>Secondary</CriaTextBody1>
              <Divider color="secondary" />
              
              <CriaTextBody1 style={{ marginTop: spacing[4], marginBottom: spacing[2] }}>Gray (default)</CriaTextBody1>
              <Divider color="gray" />
            </div>
          </CardContent>
        </Card>

        {/* Dividers with Labels */}
        <Card>
          <CardHeader>
            <CriaTextTitle1 >
              Dividers with Labels
            </CriaTextTitle1>
          </CardHeader>
          <CardContent>
            <div style={{ padding: spacing[4], backgroundColor: colors.gray[100], borderRadius: radii.sm }}>
              <CriaTextBody1 style={{ marginBottom: spacing[2] }}>Label at start</CriaTextBody1>
              <Divider label="Start Label" labelPosition="start" />
              
              <CriaTextBody1 style={{ marginTop: spacing[4], marginBottom: spacing[2] }}>Label at center (default)</CriaTextBody1>
              <Divider label="Center Label" labelPosition="center" />
              
              <CriaTextBody1 style={{ marginTop: spacing[4], marginBottom: spacing[2] }}>Label at end</CriaTextBody1>
              <Divider label="End Label" labelPosition="end" />
              
              <CriaTextBody1 style={{ marginTop: spacing[4], marginBottom: spacing[2] }}>Primary colored divider with label</CriaTextBody1>
              <Divider label="OR" color="primary" />
            </div>
          </CardContent>
        </Card>

        {/* Custom Dimensions */}
        <Card>
          <CardHeader>
            <CriaTextTitle1 >
              Custom Dimensions
            </CriaTextTitle1>
          </CardHeader>
          <CardContent>
            <div style={{ padding: spacing[4], backgroundColor: colors.gray[100], borderRadius: radii.sm }}>
              <CriaTextBody1 style={{ marginBottom: spacing[2] }}>Custom width (50%)</CriaTextBody1>
              <Divider width="50%" />
              
              <CriaTextBody1 style={{ marginTop: spacing[4], marginBottom: spacing[2] }}>Custom width (200px)</CriaTextBody1>
              <Divider width="200px" />
              
              <CriaTextBody1 style={{ marginTop: spacing[4], marginBottom: spacing[2] }}>Vertical with custom height</CriaTextBody1>
              <div style={{ display: 'flex', alignItems: 'center', height: '120px' }}>
                <CriaTextBody1>Left</CriaTextBody1>
                <Divider orientation="vertical" height="80px" />
                <CriaTextBody1>Right</CriaTextBody1>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Spacing Options */}
        <Card>
          <CardHeader>
            <CriaTextTitle1 >
              Spacing Options
            </CriaTextTitle1>
          </CardHeader>
          <CardContent>
            <div style={{ padding: spacing[4], backgroundColor: colors.gray[100], borderRadius: radii.sm }}>
              <CriaTextBody1 style={{ marginBottom: spacing[2] }}>Small spacing</CriaTextBody1>
              <Divider spacing="sm" />
              
              <CriaTextBody1 style={{ marginTop: spacing[4], marginBottom: spacing[2] }}>Medium spacing (default)</CriaTextBody1>
              <Divider spacing="md" />
              
              <CriaTextBody1 style={{ marginTop: spacing[4], marginBottom: spacing[2] }}>Large spacing</CriaTextBody1>
              <Divider spacing="lg" />
            </div>
          </CardContent>
        </Card>

        {/* Real-world Examples */}
        <Card>
          <CardHeader>
            <CriaTextTitle1 >
              Real-world Examples
            </CriaTextTitle1>
          </CardHeader>
          <CardContent>
            <div style={{ padding: spacing[4], backgroundColor: colors.gray[100], borderRadius: radii.sm }}>
              {/* Login Form Divider */}
              <CriaTextTitle2  style={{ marginBottom: spacing[4] }}>Login Form</CriaTextTitle2>
              <Button variant="primary" size="lg" style={{ width: '100%', marginBottom: spacing[4] }}>
                Sign in with Google
              </Button>
              <Divider label="OR" color="primary" />
              <div style={{ marginTop: spacing[4] }}>
                <CriaTextBody1 style={{ marginBottom: spacing[2] }}>Email:</CriaTextBody1>
                <Input type="email" style={{ width: '100%' }} />
                <CriaTextBody1 style={{ marginTop: spacing[2], marginBottom: spacing[2] }}>Password:</CriaTextBody1>
                <Input type="password" style={{ width: '100%' }} />
              </div>

              {/* Section Separators */}
              <Divider style={{ marginTop: spacing[8], marginBottom: spacing[8] }} />
              
              <CriaTextTitle2  style={{ marginBottom: spacing[4] }}>Content Sections</CriaTextTitle2>
              <CriaTextBody1 style={{ marginBottom: spacing[4] }}>
                This is the first section of content. It contains important information that needs to be separated from other sections.
              </CriaTextBody1>
              
              <Divider variant="dashed" color="secondary" />
              
              <CriaTextBody1 style={{ marginTop: spacing[4], marginBottom: spacing[4] }}>
                This is the second section. Notice how the dashed divider creates a visual break between sections while maintaining the flow.
              </CriaTextBody1>
              
              <Divider variant="dotted" size="lg" />
              
              <CriaTextBody1 style={{ marginTop: spacing[4] }}>
                This is the final section. The dotted divider provides a softer separation for the conclusion.
              </CriaTextBody1>
            </div>
          </CardContent>
        </Card>

        {/* Vertical Layout Example */}
        <Card>
          <CardHeader>
            <CriaTextTitle1 >
              Vertical Layout Example
            </CriaTextTitle1>
          </CardHeader>
          <CardContent>
            <div style={{ padding: spacing[4], backgroundColor: colors.gray[100], borderRadius: radii.sm, height: '200px' }}>
              <div style={{ display: 'flex', height: '100%', alignItems: 'center' }}>
                <div style={{ flex: 1, textAlign: 'center' }}>
                  <CriaTextTitle2 >Navigation</CriaTextTitle2>
                  <CriaTextBody1>Menu items and links</CriaTextBody1>
                </div>
                
                <Divider orientation="vertical" height="80%" color="primary" />
                
                <div style={{ flex: 2, textAlign: 'center' }}>
                  <CriaTextTitle2 >Main Content</CriaTextTitle2>
                  <CriaTextBody1>Primary content area</CriaTextBody1>
                </div>
                
                <Divider orientation="vertical" height="80%" variant="dashed" />
                
                <div style={{ flex: 1, textAlign: 'center' }}>
                  <CriaTextTitle2 >Sidebar</CriaTextTitle2>
                  <CriaTextBody1>Additional information</CriaTextBody1>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DividerDemo;
