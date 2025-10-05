import React from 'react';
import { Divider } from './Divider';
import { Card, CardContent, CardHeader } from '../Card';
import { Typography } from '../Typography';
import { Button } from '../Button';

const DividerDemo: React.FC = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <Typography variant="h1" weight="bold" style={{ marginBottom: '2rem' }}>
        Divider Component
      </Typography>

      <Typography variant="body" style={{ marginBottom: '2rem' }}>
        A versatile divider component for separating content sections with multiple variants, orientations, and styling options.
      </Typography>

      <div style={{ display: 'grid', gap: '2rem' }}>
        {/* Basic Dividers */}
        <Card>
          <CardHeader>
            <Typography variant="h2" weight="semibold">
              Basic Dividers
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography variant="body" style={{ marginBottom: '1rem' }}>
              Default horizontal divider:
            </Typography>
            <div style={{ padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
              <Typography variant="body">Content above</Typography>
              <Divider />
              <Typography variant="body">Content below</Typography>
            </div>

            <Typography variant="body" style={{ marginTop: '2rem', marginBottom: '1rem' }}>
              Vertical divider:
            </Typography>
            <div style={{ display: 'flex', alignItems: 'center', padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '4px', height: '100px' }}>
              <Typography variant="body">Left content</Typography>
              <Divider orientation="vertical" />
              <Typography variant="body">Right content</Typography>
            </div>
          </CardContent>
        </Card>

        {/* Variants */}
        <Card>
          <CardHeader>
            <Typography variant="h2" weight="semibold">
              Variants
            </Typography>
          </CardHeader>
          <CardContent>
            <div style={{ padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
              <Typography variant="body" style={{ marginBottom: '0.5rem' }}>Solid (default)</Typography>
              <Divider variant="solid" />
              
              <Typography variant="body" style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>Dashed</Typography>
              <Divider variant="dashed" />
              
              <Typography variant="body" style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>Dotted</Typography>
              <Divider variant="dotted" />
            </div>
          </CardContent>
        </Card>

        {/* Sizes */}
        <Card>
          <CardHeader>
            <Typography variant="h2" weight="semibold">
              Sizes
            </Typography>
          </CardHeader>
          <CardContent>
            <div style={{ padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
              <Typography variant="body" style={{ marginBottom: '0.5rem' }}>Small</Typography>
              <Divider size="sm" />
              
              <Typography variant="body" style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>Medium (default)</Typography>
              <Divider size="md" />
              
              <Typography variant="body" style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>Large</Typography>
              <Divider size="lg" />
            </div>
          </CardContent>
        </Card>

        {/* Colors */}
        <Card>
          <CardHeader>
            <Typography variant="h2" weight="semibold">
              Colors
            </Typography>
          </CardHeader>
          <CardContent>
            <div style={{ padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
              <Typography variant="body" style={{ marginBottom: '0.5rem' }}>Primary</Typography>
              <Divider color="primary" />
              
              <Typography variant="body" style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>Secondary</Typography>
              <Divider color="secondary" />
              
              <Typography variant="body" style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>Gray (default)</Typography>
              <Divider color="gray" />
            </div>
          </CardContent>
        </Card>

        {/* Dividers with Labels */}
        <Card>
          <CardHeader>
            <Typography variant="h2" weight="semibold">
              Dividers with Labels
            </Typography>
          </CardHeader>
          <CardContent>
            <div style={{ padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
              <Typography variant="body" style={{ marginBottom: '0.5rem' }}>Label at start</Typography>
              <Divider label="Start Label" labelPosition="start" />
              
              <Typography variant="body" style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>Label at center (default)</Typography>
              <Divider label="Center Label" labelPosition="center" />
              
              <Typography variant="body" style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>Label at end</Typography>
              <Divider label="End Label" labelPosition="end" />
              
              <Typography variant="body" style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>Primary colored divider with label</Typography>
              <Divider label="OR" color="primary" />
            </div>
          </CardContent>
        </Card>

        {/* Custom Dimensions */}
        <Card>
          <CardHeader>
            <Typography variant="h2" weight="semibold">
              Custom Dimensions
            </Typography>
          </CardHeader>
          <CardContent>
            <div style={{ padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
              <Typography variant="body" style={{ marginBottom: '0.5rem' }}>Custom width (50%)</Typography>
              <Divider width="50%" />
              
              <Typography variant="body" style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>Custom width (200px)</Typography>
              <Divider width="200px" />
              
              <Typography variant="body" style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>Vertical with custom height</Typography>
              <div style={{ display: 'flex', alignItems: 'center', height: '120px' }}>
                <Typography variant="body">Left</Typography>
                <Divider orientation="vertical" height="80px" />
                <Typography variant="body">Right</Typography>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Spacing Options */}
        <Card>
          <CardHeader>
            <Typography variant="h2" weight="semibold">
              Spacing Options
            </Typography>
          </CardHeader>
          <CardContent>
            <div style={{ padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
              <Typography variant="body" style={{ marginBottom: '0.5rem' }}>Small spacing</Typography>
              <Divider spacing="sm" />
              
              <Typography variant="body" style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>Medium spacing (default)</Typography>
              <Divider spacing="md" />
              
              <Typography variant="body" style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>Large spacing</Typography>
              <Divider spacing="lg" />
            </div>
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
            <div style={{ padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
              {/* Login Form Divider */}
              <Typography variant="h3" weight="medium" style={{ marginBottom: '1rem' }}>Login Form</Typography>
              <Button variant="primary" size="lg" style={{ width: '100%', marginBottom: '1rem' }}>
                Sign in with Google
              </Button>
              <Divider label="OR" color="primary" />
              <div style={{ marginTop: '1rem' }}>
                <Typography variant="body" style={{ marginBottom: '0.5rem' }}>Email:</Typography>
                <input type="email" style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }} />
                <Typography variant="body" style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>Password:</Typography>
                <input type="password" style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }} />
              </div>

              {/* Section Separators */}
              <Divider style={{ marginTop: '2rem', marginBottom: '2rem' }} />
              
              <Typography variant="h3" weight="medium" style={{ marginBottom: '1rem' }}>Content Sections</Typography>
              <Typography variant="body" style={{ marginBottom: '1rem' }}>
                This is the first section of content. It contains important information that needs to be separated from other sections.
              </Typography>
              
              <Divider variant="dashed" color="secondary" />
              
              <Typography variant="body" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
                This is the second section. Notice how the dashed divider creates a visual break between sections while maintaining the flow.
              </Typography>
              
              <Divider variant="dotted" size="lg" />
              
              <Typography variant="body" style={{ marginTop: '1rem' }}>
                This is the final section. The dotted divider provides a softer separation for the conclusion.
              </Typography>
            </div>
          </CardContent>
        </Card>

        {/* Vertical Layout Example */}
        <Card>
          <CardHeader>
            <Typography variant="h2" weight="semibold">
              Vertical Layout Example
            </Typography>
          </CardHeader>
          <CardContent>
            <div style={{ padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '4px', height: '200px' }}>
              <div style={{ display: 'flex', height: '100%', alignItems: 'center' }}>
                <div style={{ flex: 1, textAlign: 'center' }}>
                  <Typography variant="h3" weight="semibold">Navigation</Typography>
                  <Typography variant="body">Menu items and links</Typography>
                </div>
                
                <Divider orientation="vertical" height="80%" color="primary" />
                
                <div style={{ flex: 2, textAlign: 'center' }}>
                  <Typography variant="h3" weight="semibold">Main Content</Typography>
                  <Typography variant="body">Primary content area</Typography>
                </div>
                
                <Divider orientation="vertical" height="80%" variant="dashed" />
                
                <div style={{ flex: 1, textAlign: 'center' }}>
                  <Typography variant="h3" weight="semibold">Sidebar</Typography>
                  <Typography variant="body">Additional information</Typography>
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
