import React from 'react';
import { Container, Section } from './index';
import { Card, CardContent, CardHeader } from '../Card';
import { Typography } from '../Typography';
import { Button } from '../Button';
import { Divider } from '../Divider';
import { spacing, colors, radii } from '../../tokens';

const ContainerDemo: React.FC = () => {
  return (
    <div style={{ padding: spacing[8] }}>
      <Typography variant="h1" weight="bold" style={{ marginBottom: spacing[8] }}>
        Container / Section Components
      </Typography>

      <Typography variant="body" style={{ marginBottom: spacing[8] }}>
        Layout components for controlling max-width, padding, responsive breakpoints, and section organization.
      </Typography>

      <div style={{ display: 'grid', gap: spacing[8] }}>
        {/* Basic Container Examples */}
        <Card>
          <CardHeader>
            <Typography variant="h2" weight="semibold">
              Basic Container Layouts
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography variant="body" style={{ marginBottom: spacing[4] }}>
              Different max-width configurations:
            </Typography>
            
            <Container maxWidth="sm" style={{ backgroundColor: colors.gray[50], border: `1px solid ${colors.border.light}`, marginBottom: spacing[4], borderRadius: radii.sm }}>
              <Typography variant="body" weight="medium">Small Container (640px max-width)</Typography>
            </Container>
            
            <Container maxWidth="md" style={{ backgroundColor: colors.gray[50], border: `1px solid ${colors.border.light}`, marginBottom: spacing[4], borderRadius: radii.sm }}>
              <Typography variant="body" weight="medium">Medium Container (768px max-width)</Typography>
            </Container>
            
            <Container maxWidth="lg" style={{ backgroundColor: colors.gray[100], border: `1px solid ${colors.border.light}`, marginBottom: spacing[4], borderRadius: radii.sm }}>
              <Typography variant="body" weight="medium">Large Container (1024px max-width) - Default</Typography>
            </Container>
            
            <Container maxWidth="xl" style={{ backgroundColor: colors.gray[100], border: `1px solid ${colors.border.light}`, marginBottom: spacing[4], borderRadius: radii.sm }}>
              <Typography variant="body" weight="medium">Extra Large Container (1280px max-width)</Typography>
            </Container>
            
            <Container maxWidth="full" style={{ backgroundColor: colors.gray[50], border: `1px solid ${colors.border.light}`, borderRadius: radii.sm }}>
              <Typography variant="body" weight="medium">Full Width Container</Typography>
            </Container>
          </CardContent>
        </Card>

        {/* Container Padding & Margin */}
        <Card>
          <CardHeader>
            <Typography variant="h2" weight="semibold">
              Container Padding & Margin
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography variant="body" style={{ marginBottom: spacing[4] }}>
              Different padding and margin sizes:
            </Typography>
            
            <Container padding="sm" style={{ backgroundColor: colors.gray[100], marginBottom: spacing[4], borderRadius: radii.sm }}>
              <Typography variant="body">Small Padding Container</Typography>
            </Container>
            
            <Container padding="md" style={{ backgroundColor: colors.gray[100], marginBottom: spacing[4], borderRadius: radii.sm }}>
              <Typography variant="body">Medium Padding Container (Default)</Typography>
            </Container>
            
            <Container padding="lg" style={{ backgroundColor: colors.gray[50], marginBottom: spacing[4], borderRadius: radii.sm }}>
              <Typography variant="body">Large Padding Container</Typography>
            </Container>
            
            <Container padding="xl" style={{ backgroundColor: colors.gray[100], marginBottom: spacing[8], borderRadius: radii.sm }}>
              <Typography variant="body">Extra Large Padding Container</Typography>
            </Container>
            
            <Typography variant="body" style={{ marginBottom: spacing[4] }}>
              Containers with margins:
            </Typography>
            
            <Container margin="sm" style={{ backgroundColor: colors.gray[50], border: `1px solid ${colors.border.light}`, borderRadius: radii.sm }}>
              <Typography variant="body">Container with Small Margin</Typography>
            </Container>
          </CardContent>
        </Card>

        {/* Container Alignment & Fluid */}
        <Card>
          <CardHeader>
            <Typography variant="h2" weight="semibold">
              Container Alignment & Fluid Width
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography variant="body" style={{ marginBottom: spacing[4] }}>
              Centered container:
            </Typography>
            <Container center maxWidth="md" style={{ backgroundColor: colors.gray[100], border: `1px solid ${colors.border.light}`, marginBottom: spacing[8], borderRadius: radii.sm }}>
              <Typography variant="body" weight="medium">Centered Container</Typography>
              <Typography variant="bodySmall">This container is centered and has medium max-width</Typography>
            </Container>
            
            <Typography variant="body" style={{ marginBottom: spacing[4] }}>
              Fluid container (full width):
            </Typography>
            <Container fluid style={{ backgroundColor: colors.gray[50], border: `1px solid ${colors.border.light}`, borderRadius: radii.sm }}>
              <Typography variant="body" weight="medium">Fluid Container</Typography>
              <Typography variant="bodySmall">This container takes full width regardless of max-width</Typography>
            </Container>
          </CardContent>
        </Card>

        {/* Custom Max Width */}
        <Card>
          <CardHeader>
            <Typography variant="h2" weight="semibold">
              Custom Max Width
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography variant="body" style={{ marginBottom: spacing[4] }}>
              Containers with custom max-width values:
            </Typography>
            
            <Container maxWidth="800px" style={{ backgroundColor: colors.gray[50], border: `1px solid ${colors.border.light}`, marginBottom: spacing[4], borderRadius: radii.sm }}>
              <Typography variant="body" weight="medium">Custom 800px Max Width</Typography>
            </Container>
            
            <Container maxWidth="1200px" style={{ backgroundColor: colors.gray[50], border: `1px solid ${colors.border.light}`, borderRadius: radii.sm }}>
              <Typography variant="body" weight="medium">Custom 1200px Max Width</Typography>
            </Container>
          </CardContent>
        </Card>

        {/* Section Variants */}
        <Card>
          <CardHeader>
            <Typography variant="h2" weight="semibold">
              Section Variants
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography variant="body" style={{ marginBottom: spacing[4] }}>
              Different section types:
            </Typography>
            
            <Section variant="default" style={{ marginBottom: spacing[4] }}>
              <Container>
                <Typography variant="body" weight="medium">Default Section</Typography>
                <Typography variant="bodySmall">Standard section with default styling</Typography>
              </Container>
            </Section>
            
            <Section variant="hero" size="md" style={{ marginBottom: spacing[4] }}>
              <Container center>
                <Typography variant="h2" weight="bold" style={{ color: 'var(--cria-white)', marginBottom: '1rem' }}>
                  Hero Section
                </Typography>
                <Typography variant="body" style={{ color: 'var(--cria-white)', marginBottom: spacing[4] }}>
                  Eye-catching hero section with gradient background
                </Typography>
                <Button variant="secondary" size="lg">Get Started</Button>
              </Container>
            </Section>
            
            <Section variant="content" style={{ marginBottom: spacing[4] }}>
              <Container>
                <Typography variant="body" weight="medium">Content Section</Typography>
                <Typography variant="bodySmall">Section designed for main content with subtle background and shadow</Typography>
              </Container>
            </Section>
            
            <Section variant="footer" style={{ marginTop: spacing[8] }}>
              <Container>
                <Typography variant="body" weight="medium" style={{ color: 'var(--cria-white)' }}>Footer Section</Typography>
                <Typography variant="bodySmall" style={{ color: 'var(--cria-white)' }}>Dark footer section for site footers</Typography>
              </Container>
            </Section>
          </CardContent>
        </Card>

        {/* Section Sizes & Backgrounds */}
        <Card>
          <CardHeader>
            <Typography variant="h2" weight="semibold">
              Section Sizes & Background Colors
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography variant="body" style={{ marginBottom: spacing[4] }}>
              Different section sizes:
            </Typography>
            
            <Section size="sm" backgroundColor="gray" style={{ marginBottom: spacing[4] }}>
              <Container>
                <Typography variant="body" weight="medium">Small Section (200px min-height)</Typography>
              </Container>
            </Section>
            
            <Section size="md" backgroundColor="primary" style={{ marginBottom: spacing[4] }}>
              <Container>
                <Typography variant="body" weight="medium" style={{ color: 'var(--cria-white)' }}>
                  Medium Section (400px min-height) - Primary Background
                </Typography>
              </Container>
            </Section>
            
            <Section size="lg" backgroundColor="secondary" style={{ marginBottom: spacing[4] }}>
              <Container>
                <Typography variant="body" weight="medium" style={{ color: 'var(--cria-white)' }}>
                  Large Section (600px min-height) - Secondary Background
                </Typography>
              </Container>
            </Section>
            
            <Section size="xl" backgroundColor="white" style={{ marginBottom: spacing[8] }}>
              <Container>
                <Typography variant="body" weight="medium">Extra Large Section (800px min-height) - White Background</Typography>
              </Container>
            </Section>
            
            <Typography variant="body" style={{ marginBottom: spacing[4] }}>
              Custom background colors:
            </Typography>
            
            <Section backgroundColor={colors.error} style={{ marginBottom: spacing[4] }}>
              <Container>
                <Typography variant="body" weight="medium" style={{ color: 'var(--cria-white)' }}>
                  Custom Red Background Section
                </Typography>
              </Container>
            </Section>
            
            <Section backgroundColor={colors.secondary}>
              <Container>
                <Typography variant="body" weight="medium" style={{ color: 'var(--cria-white)' }}>
                  Custom Teal Background Section
                </Typography>
              </Container>
            </Section>
          </CardContent>
        </Card>

        {/* Full Height Section */}
        <Card>
          <CardHeader>
            <Typography variant="h2" weight="semibold">
              Full Height Section
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography variant="body" style={{ marginBottom: spacing[4] }}>
              Section that takes full viewport height:
            </Typography>
            
            <Section 
              fullHeight 
              backgroundColor="primary" 
              style={{ marginBottom: spacing[8], minHeight: '400px' }} // Limited for demo
            >
              <Container center>
                <Typography variant="h1" weight="bold" style={{ color: 'var(--cria-white)', textAlign: 'center' }}>
                  Full Height Section
                </Typography>
                <Typography variant="body" style={{ color: 'var(--cria-white)', textAlign: 'center' }}>
                  This section would normally take the full viewport height
                </Typography>
              </Container>
            </Section>
          </CardContent>
        </Card>

        {/* Responsive Examples */}
        <Card>
          <CardHeader>
            <Typography variant="h2" weight="semibold">
              Responsive Behavior
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography variant="body" style={{ marginBottom: spacing[4] }}>
              Container with responsive padding:
            </Typography>
            
            <Container 
              padding={{ sm: 'sm', md: 'md', lg: 'lg' }}
              style={{ backgroundColor: colors.gray[50], border: `1px solid ${colors.border.light}`, marginBottom: spacing[8], borderRadius: radii.sm }}
            >
              <Typography variant="body" weight="medium">Responsive Padding Container</Typography>
              <Typography variant="bodySmall">
                Small padding on mobile, medium on tablet, large on desktop
              </Typography>
            </Container>
            
            <Typography variant="body" style={{ marginBottom: spacing[4] }}>
              Section with responsive padding:
            </Typography>
            
            <Section 
              padding={{ sm: 'sm', md: 'md', lg: 'lg' }}
              backgroundColor="gray"
            >
              <Container>
                <Typography variant="body" weight="medium">Responsive Padding Section</Typography>
                <Typography variant="bodySmall">
                  Padding adjusts based on screen size for optimal spacing
                </Typography>
              </Container>
            </Section>
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
            <Typography variant="body" style={{ marginBottom: spacing[4] }}>
              Landing page layout:
            </Typography>
            
            <Section variant="hero" backgroundColor="primary" style={{ marginBottom: spacing[8] }}>
              <Container center>
                <Typography variant="h1" weight="bold" style={{ color: 'var(--cria-white)', marginBottom: spacing[4] }}>
                  Welcome to Our Platform
                </Typography>
                <Typography variant="body" style={{ color: 'var(--cria-white)', marginBottom: spacing[8] }}>
                  Build amazing applications with our design system
                </Typography>
                <Button variant="secondary" size="lg" style={{ marginRight: spacing[4] }}>
                  Get Started
                </Button>
                <Button variant="outline" size="lg" style={{ backgroundColor: 'transparent', borderColor: 'var(--cria-white)', color: 'var(--cria-white)' }}>
                  Learn More
                </Button>
              </Container>
            </Section>
            
            <Section variant="content" style={{ marginBottom: spacing[8] }}>
              <Container>
                <Typography variant="h2" weight="semibold" style={{ marginBottom: spacing[4] }}>
                  Features
                </Typography>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: spacing[4] }}>
                  <Card>
                    <CardHeader>
                      <Typography variant="h3" weight="semibold">Responsive Design</Typography>
                    </CardHeader>
                    <CardContent>
                      <Typography variant="body">Built with mobile-first responsive design principles.</Typography>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <Typography variant="h3" weight="semibold">Accessibility</Typography>
                    </CardHeader>
                    <CardContent>
                      <Typography variant="body">WCAG compliant components with proper ARIA support.</Typography>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <Typography variant="h3" weight="semibold">Performance</Typography>
                    </CardHeader>
                    <CardContent>
                      <Typography variant="body">Optimized for speed and efficient rendering.</Typography>
                    </CardContent>
                  </Card>
                </div>
              </Container>
            </Section>
            
            <Section variant="footer" style={{ marginTop: '2rem' }}>
              <Container>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="body" weight="medium" style={{ color: 'var(--cria-white)' }}>
                    © 2024 Design System
                  </Typography>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <Button variant="ghost" size="sm" style={{ color: 'var(--cria-white)' }}>
                      Privacy
                    </Button>
                    <Button variant="ghost" size="sm" style={{ color: 'var(--cria-white)' }}>
                      Terms
                    </Button>
                    <Button variant="ghost" size="sm" style={{ color: 'var(--cria-white)' }}>
                      Contact
                    </Button>
                  </div>
                </div>
              </Container>
            </Section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContainerDemo;
