import React from 'react';
import { Container, Section } from './index';
import { Card, CardContent, CardHeader } from '../Card';
import { CriaTextHeadline1, CriaTextHeadline2, CriaTextBody1, CriaTextBody2, CriaTextTitle1, CriaTextTitle2 } from '../TextTokens';
import { Button } from '../Button';
import { Divider } from '../Divider';
import { spacing, colors, radii } from '../../tokens';

const ContainerDemo: React.FC = () => {
  return (
    <div style={{ padding: spacing[8] }}>
      <CriaTextHeadline1 style={{ marginBottom: spacing[8] }}>
        Container / Section Components
      </CriaTextHeadline1>

      <CriaTextBody1 style={{ marginBottom: spacing[8] }}>
        Layout components for controlling max-width, padding, responsive breakpoints, and section organization.
      </CriaTextBody1>

      <div style={{ display: 'grid', gap: spacing[8] }}>
        {/* Basic Container Examples */}
        <Card>
          <CardHeader>
            <CriaTextHeadline2>
              Basic Container Layouts
            </CriaTextHeadline2>
          </CardHeader>
          <CardContent>
            <CriaTextBody1 style={{ marginBottom: spacing[4] }}>
              Different max-width configurations:
            </CriaTextBody1>
            
            <Container maxWidth="sm" style={{ backgroundColor: colors.gray[50], border: `1px solid ${colors.border.light}`, marginBottom: spacing[4], borderRadius: radii.sm }}>
              <CriaTextBody1 weight="medium">Small Container (640px max-width)</CriaTextBody1>
            </Container>
            
            <Container maxWidth="md" style={{ backgroundColor: colors.gray[50], border: `1px solid ${colors.border.light}`, marginBottom: spacing[4], borderRadius: radii.sm }}>
              <CriaTextBody1 weight="medium">Medium Container (768px max-width)</CriaTextBody1>
            </Container>
            
            <Container maxWidth="lg" style={{ backgroundColor: colors.gray[100], border: `1px solid ${colors.border.light}`, marginBottom: spacing[4], borderRadius: radii.sm }}>
              <CriaTextBody1 weight="medium">Large Container (1024px max-width) - Default</CriaTextBody1>
            </Container>
            
            <Container maxWidth="xl" style={{ backgroundColor: colors.gray[100], border: `1px solid ${colors.border.light}`, marginBottom: spacing[4], borderRadius: radii.sm }}>
              <CriaTextBody1 weight="medium">Extra Large Container (1280px max-width)</CriaTextBody1>
            </Container>
            
            <Container maxWidth="full" style={{ backgroundColor: colors.gray[50], border: `1px solid ${colors.border.light}`, borderRadius: radii.sm }}>
              <CriaTextBody1 weight="medium">Full Width Container</CriaTextBody1>
            </Container>
          </CardContent>
        </Card>

        {/* Container Padding & Margin */}
        <Card>
          <CardHeader>
            <CriaTextHeadline2>
              Container Padding & Margin
            </CriaTextHeadline2>
          </CardHeader>
          <CardContent>
            <CriaTextBody1 style={{ marginBottom: spacing[4] }}>
              Different padding and margin sizes:
            </CriaTextBody1>
            
            <Container padding="sm" style={{ backgroundColor: colors.gray[100], marginBottom: spacing[4], borderRadius: radii.sm }}>
              <CriaTextBody1>Small Padding Container</CriaTextBody1>
            </Container>
            
            <Container padding="md" style={{ backgroundColor: colors.gray[100], marginBottom: spacing[4], borderRadius: radii.sm }}>
              <CriaTextBody1>Medium Padding Container (Default)</CriaTextBody1>
            </Container>
            
            <Container padding="lg" style={{ backgroundColor: colors.gray[50], marginBottom: spacing[4], borderRadius: radii.sm }}>
              <CriaTextBody1>Large Padding Container</CriaTextBody1>
            </Container>
            
            <Container padding="xl" style={{ backgroundColor: colors.gray[100], marginBottom: spacing[8], borderRadius: radii.sm }}>
              <CriaTextBody1>Extra Large Padding Container</CriaTextBody1>
            </Container>
            
            <CriaTextBody1 style={{ marginBottom: spacing[4] }}>
              Containers with margins:
            </CriaTextBody1>
            
            <Container margin="sm" style={{ backgroundColor: colors.gray[50], border: `1px solid ${colors.border.light}`, borderRadius: radii.sm }}>
              <CriaTextBody1>Container with Small Margin</CriaTextBody1>
            </Container>
          </CardContent>
        </Card>

        {/* Container Alignment & Fluid */}
        <Card>
          <CardHeader>
            <CriaTextHeadline2>
              Container Alignment & Fluid Width
            </CriaTextHeadline2>
          </CardHeader>
          <CardContent>
            <CriaTextBody1 style={{ marginBottom: spacing[4] }}>
              Centered container:
            </CriaTextBody1>
            <Container center maxWidth="md" style={{ backgroundColor: colors.gray[100], border: `1px solid ${colors.border.light}`, marginBottom: spacing[8], borderRadius: radii.sm }}>
              <CriaTextBody1 weight="medium">Centered Container</CriaTextBody1>
              <CriaTextBody2>This container is centered and has medium max-width</CriaTextBody2>
            </Container>
            
            <CriaTextBody1 style={{ marginBottom: spacing[4] }}>
              Fluid container (full width):
            </CriaTextBody1>
            <Container fluid style={{ backgroundColor: colors.gray[50], border: `1px solid ${colors.border.light}`, borderRadius: radii.sm }}>
              <CriaTextBody1 weight="medium">Fluid Container</CriaTextBody1>
              <CriaTextBody2>This container takes full width regardless of max-width</CriaTextBody2>
            </Container>
          </CardContent>
        </Card>

        {/* Custom Max Width */}
        <Card>
          <CardHeader>
            <CriaTextHeadline2>
              Custom Max Width
            </CriaTextHeadline2>
          </CardHeader>
          <CardContent>
            <CriaTextBody1 style={{ marginBottom: spacing[4] }}>
              Containers with custom max-width values:
            </CriaTextBody1>
            
            <Container maxWidth="800px" style={{ backgroundColor: colors.gray[50], border: `1px solid ${colors.border.light}`, marginBottom: spacing[4], borderRadius: radii.sm }}>
              <CriaTextBody1 weight="medium">Custom 800px Max Width</CriaTextBody1>
            </Container>
            
            <Container maxWidth="1200px" style={{ backgroundColor: colors.gray[50], border: `1px solid ${colors.border.light}`, borderRadius: radii.sm }}>
              <CriaTextBody1 weight="medium">Custom 1200px Max Width</CriaTextBody1>
            </Container>
          </CardContent>
        </Card>

        {/* Section Variants */}
        <Card>
          <CardHeader>
            <CriaTextHeadline2>
              Section Variants
            </CriaTextHeadline2>
          </CardHeader>
          <CardContent>
            <CriaTextBody1 style={{ marginBottom: spacing[4] }}>
              Different section types:
            </CriaTextBody1>
            
            <Section variant="default" style={{ marginBottom: spacing[4] }}>
              <Container>
                <CriaTextBody1 weight="medium">Default Section</CriaTextBody1>
                <CriaTextBody2>Standard section with default styling</CriaTextBody2>
              </Container>
            </Section>
            
            <Section variant="hero" size="md" style={{ marginBottom: spacing[4] }}>
              <Container center>
                <CriaTextHeadline2 weight="bold" style={{ color: 'var(--cria-white)', marginBottom: '1rem' }}>
                  Hero Section
                </CriaTextHeadline2>
                <CriaTextBody1 style={{ color: 'var(--cria-white)', marginBottom: spacing[4] }}>
                  Eye-catching hero section with gradient background
                </CriaTextBody1>
                <Button variant="secondary" size="lg">Get Started</Button>
              </Container>
            </Section>
            
            <Section variant="content" style={{ marginBottom: spacing[4] }}>
              <Container>
                <CriaTextBody1 weight="medium">Content Section</CriaTextBody1>
                <CriaTextBody2>Section designed for main content with subtle background and shadow</CriaTextBody2>
              </Container>
            </Section>
            
            <Section variant="footer" style={{ marginTop: spacing[8] }}>
              <Container>
                <CriaTextBody1 weight="medium" style={{ color: 'var(--cria-white)' }}>Footer Section</CriaTextBody1>
                <CriaTextBody2 style={{ color: 'var(--cria-white)' }}>Dark footer section for site footers</CriaTextBody2>
              </Container>
            </Section>
          </CardContent>
        </Card>

        {/* Section Sizes & Backgrounds */}
        <Card>
          <CardHeader>
            <CriaTextHeadline2>
              Section Sizes & Background Colors
            </CriaTextHeadline2>
          </CardHeader>
          <CardContent>
            <CriaTextBody1 style={{ marginBottom: spacing[4] }}>
              Different section sizes:
            </CriaTextBody1>
            
            <Section size="sm" backgroundColor="gray" style={{ marginBottom: spacing[4] }}>
              <Container>
                <CriaTextBody1 weight="medium">Small Section (200px min-height)</CriaTextBody1>
              </Container>
            </Section>
            
            <Section size="md" backgroundColor="primary" style={{ marginBottom: spacing[4] }}>
              <Container>
                <CriaTextBody1 weight="medium" style={{ color: 'var(--cria-white)' }}>
                  Medium Section (400px min-height) - Primary Background
                </CriaTextBody1>
              </Container>
            </Section>
            
            <Section size="lg" backgroundColor="secondary" style={{ marginBottom: spacing[4] }}>
              <Container>
                <CriaTextBody1 weight="medium" style={{ color: 'var(--cria-white)' }}>
                  Large Section (600px min-height) - Secondary Background
                </CriaTextBody1>
              </Container>
            </Section>
            
            <Section size="xl" backgroundColor="white" style={{ marginBottom: spacing[8] }}>
              <Container>
                <CriaTextBody1 weight="medium">Extra Large Section (800px min-height) - White Background</CriaTextBody1>
              </Container>
            </Section>
            
            <CriaTextBody1 style={{ marginBottom: spacing[4] }}>
              Custom background colors:
            </CriaTextBody1>
            
            <Section backgroundColor={colors.error} style={{ marginBottom: spacing[4] }}>
              <Container>
                <CriaTextBody1 weight="medium" style={{ color: 'var(--cria-white)' }}>
                  Custom Red Background Section
                </CriaTextBody1>
              </Container>
            </Section>
            
            <Section backgroundColor={colors.secondary}>
              <Container>
                <CriaTextBody1 weight="medium" style={{ color: 'var(--cria-white)' }}>
                  Custom Teal Background Section
                </CriaTextBody1>
              </Container>
            </Section>
          </CardContent>
        </Card>

        {/* Full Height Section */}
        <Card>
          <CardHeader>
            <CriaTextHeadline2>
              Full Height Section
            </CriaTextHeadline2>
          </CardHeader>
          <CardContent>
            <CriaTextBody1 style={{ marginBottom: spacing[4] }}>
              Section that takes full viewport height:
            </CriaTextBody1>
            
            <Section 
              fullHeight 
              backgroundColor="primary" 
              style={{ marginBottom: spacing[8], minHeight: '400px' }} // Limited for demo
            >
              <Container center>
                <CriaTextHeadline1 weight="bold" style={{ color: 'var(--cria-white)', textAlign: 'center' }}>
                  Full Height Section
                </CriaTextHeadline1>
                <CriaTextBody1 style={{ color: 'var(--cria-white)', textAlign: 'center' }}>
                  This section would normally take the full viewport height
                </CriaTextBody1>
              </Container>
            </Section>
          </CardContent>
        </Card>

        {/* Responsive Examples */}
        <Card>
          <CardHeader>
            <CriaTextHeadline2>
              Responsive Behavior
            </CriaTextHeadline2>
          </CardHeader>
          <CardContent>
            <CriaTextBody1 style={{ marginBottom: spacing[4] }}>
              Container with responsive padding:
            </CriaTextBody1>
            
            <Container 
              padding={{ sm: 'sm', md: 'md', lg: 'lg' }}
              style={{ backgroundColor: colors.gray[50], border: `1px solid ${colors.border.light}`, marginBottom: spacing[8], borderRadius: radii.sm }}
            >
              <CriaTextBody1 weight="medium">Responsive Padding Container</CriaTextBody1>
              <CriaTextBody2>
                Small padding on mobile, medium on tablet, large on desktop
              </CriaTextBody2>
            </Container>
            
            <CriaTextBody1 style={{ marginBottom: spacing[4] }}>
              Section with responsive padding:
            </CriaTextBody1>
            
            <Section 
              padding={{ sm: 'sm', md: 'md', lg: 'lg' }}
              backgroundColor="gray"
            >
              <Container>
                <CriaTextBody1 weight="medium">Responsive Padding Section</CriaTextBody1>
                <CriaTextBody2>
                  Padding adjusts based on screen size for optimal spacing
                </CriaTextBody2>
              </Container>
            </Section>
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
            <CriaTextBody1 style={{ marginBottom: spacing[4] }}>
              Landing page layout:
            </CriaTextBody1>
            
            <Section variant="hero" backgroundColor="primary" style={{ marginBottom: spacing[8] }}>
              <Container center>
                <CriaTextHeadline1 weight="bold" style={{ color: 'var(--cria-white)', marginBottom: spacing[4] }}>
                  Welcome to Our Platform
                </CriaTextHeadline1>
                <CriaTextBody1 style={{ color: 'var(--cria-white)', marginBottom: spacing[8] }}>
                  Build amazing applications with our design system
                </CriaTextBody1>
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
                <CriaTextHeadline2 weight="semibold" style={{ marginBottom: spacing[4] }}>
                  Features
                </CriaTextHeadline2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: spacing[4] }}>
                  <Card>
                    <CardHeader>
                      <CriaTextTitle1 weight="semibold">Responsive Design</CriaTextTitle1>
                    </CardHeader>
                    <CardContent>
                      <CriaTextBody1>Built with mobile-first responsive design principles.</CriaTextBody1>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CriaTextTitle1 weight="semibold">Accessibility</CriaTextTitle1>
                    </CardHeader>
                    <CardContent>
                      <CriaTextBody1>WCAG compliant components with proper ARIA support.</CriaTextBody1>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CriaTextTitle1 weight="semibold">Performance</CriaTextTitle1>
                    </CardHeader>
                    <CardContent>
                      <CriaTextBody1>Optimized for speed and efficient rendering.</CriaTextBody1>
                    </CardContent>
                  </Card>
                </div>
              </Container>
            </Section>
            
            <Section variant="footer" style={{ marginTop: '2rem' }}>
              <Container>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <CriaTextBody1 weight="medium" style={{ color: 'var(--cria-white)' }}>
                    © 2024 Design System
                  </CriaTextBody1>
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
