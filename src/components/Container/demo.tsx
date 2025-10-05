import React from 'react';
import { Container, Section } from './index';
import { Card, CardContent, CardHeader } from '../Card';
import { Typography } from '../Typography';
import { Button } from '../Button';
import { Divider } from '../Divider';

const ContainerDemo: React.FC = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <Typography variant="h1" weight="bold" style={{ marginBottom: '2rem' }}>
        Container / Section Components
      </Typography>

      <Typography variant="body" style={{ marginBottom: '2rem' }}>
        Layout components for controlling max-width, padding, responsive breakpoints, and section organization.
      </Typography>

      <div style={{ display: 'grid', gap: '2rem' }}>
        {/* Basic Container Examples */}
        <Card>
          <CardHeader>
            <Typography variant="h2" weight="semibold">
              Basic Container Layouts
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography variant="body" style={{ marginBottom: '1rem' }}>
              Different max-width configurations:
            </Typography>
            
            <Container maxWidth="sm" style={{ backgroundColor: '#f0f9ff', border: '1px solid #0ea5e9', marginBottom: '1rem' }}>
              <Typography variant="body" weight="medium">Small Container (640px max-width)</Typography>
            </Container>
            
            <Container maxWidth="md" style={{ backgroundColor: '#f0fdf4', border: '1px solid #22c55e', marginBottom: '1rem' }}>
              <Typography variant="body" weight="medium">Medium Container (768px max-width)</Typography>
            </Container>
            
            <Container maxWidth="lg" style={{ backgroundColor: '#fef3c7', border: '1px solid #f59e0b', marginBottom: '1rem' }}>
              <Typography variant="body" weight="medium">Large Container (1024px max-width) - Default</Typography>
            </Container>
            
            <Container maxWidth="xl" style={{ backgroundColor: '#fce7f3', border: '1px solid #ec4899', marginBottom: '1rem' }}>
              <Typography variant="body" weight="medium">Extra Large Container (1280px max-width)</Typography>
            </Container>
            
            <Container maxWidth="full" style={{ backgroundColor: '#f1f5f9', border: '1px solid #64748b' }}>
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
            <Typography variant="body" style={{ marginBottom: '1rem' }}>
              Different padding and margin sizes:
            </Typography>
            
            <Container padding="sm" style={{ backgroundColor: '#ddd6fe', marginBottom: '1rem' }}>
              <Typography variant="body">Small Padding Container</Typography>
            </Container>
            
            <Container padding="md" style={{ backgroundColor: '#dbeafe', marginBottom: '1rem' }}>
              <Typography variant="body">Medium Padding Container (Default)</Typography>
            </Container>
            
            <Container padding="lg" style={{ backgroundColor: '#dcfce7', marginBottom: '1rem' }}>
              <Typography variant="body">Large Padding Container</Typography>
            </Container>
            
            <Container padding="xl" style={{ backgroundColor: '#fef3c7', marginBottom: '2rem' }}>
              <Typography variant="body">Extra Large Padding Container</Typography>
            </Container>
            
            <Typography variant="body" style={{ marginBottom: '1rem' }}>
              Containers with margins:
            </Typography>
            
            <Container margin="sm" style={{ backgroundColor: '#fed7d7', border: '1px solid #f56565' }}>
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
            <Typography variant="body" style={{ marginBottom: '1rem' }}>
              Centered container:
            </Typography>
            <Container center maxWidth="md" style={{ backgroundColor: '#e0e7ff', border: '1px solid #6366f1', marginBottom: '2rem' }}>
              <Typography variant="body" weight="medium">Centered Container</Typography>
              <Typography variant="bodySmall">This container is centered and has medium max-width</Typography>
            </Container>
            
            <Typography variant="body" style={{ marginBottom: '1rem' }}>
              Fluid container (full width):
            </Typography>
            <Container fluid style={{ backgroundColor: '#f3e8ff', border: '1px solid #a855f7' }}>
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
            <Typography variant="body" style={{ marginBottom: '1rem' }}>
              Containers with custom max-width values:
            </Typography>
            
            <Container maxWidth="800px" style={{ backgroundColor: '#ecfccb', border: '1px solid #84cc16', marginBottom: '1rem' }}>
              <Typography variant="body" weight="medium">Custom 800px Max Width</Typography>
            </Container>
            
            <Container maxWidth="1200px" style={{ backgroundColor: '#fecaca', border: '1px solid #f87171' }}>
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
            <Typography variant="body" style={{ marginBottom: '1rem' }}>
              Different section types:
            </Typography>
            
            <Section variant="default" style={{ marginBottom: '1rem' }}>
              <Container>
                <Typography variant="body" weight="medium">Default Section</Typography>
                <Typography variant="bodySmall">Standard section with default styling</Typography>
              </Container>
            </Section>
            
            <Section variant="hero" size="md" style={{ marginBottom: '1rem' }}>
              <Container center>
                <Typography variant="h2" weight="bold" style={{ color: 'var(--cria-white)', marginBottom: '1rem' }}>
                  Hero Section
                </Typography>
                <Typography variant="body" style={{ color: 'var(--cria-white)', marginBottom: '1rem' }}>
                  Eye-catching hero section with gradient background
                </Typography>
                <Button variant="secondary" size="lg">Get Started</Button>
              </Container>
            </Section>
            
            <Section variant="content" style={{ marginBottom: '1rem' }}>
              <Container>
                <Typography variant="body" weight="medium">Content Section</Typography>
                <Typography variant="bodySmall">Section designed for main content with subtle background and shadow</Typography>
              </Container>
            </Section>
            
            <Section variant="footer" style={{ marginTop: '2rem' }}>
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
            <Typography variant="body" style={{ marginBottom: '1rem' }}>
              Different section sizes:
            </Typography>
            
            <Section size="sm" backgroundColor="gray" style={{ marginBottom: '1rem' }}>
              <Container>
                <Typography variant="body" weight="medium">Small Section (200px min-height)</Typography>
              </Container>
            </Section>
            
            <Section size="md" backgroundColor="primary" style={{ marginBottom: '1rem' }}>
              <Container>
                <Typography variant="body" weight="medium" style={{ color: 'var(--cria-white)' }}>
                  Medium Section (400px min-height) - Primary Background
                </Typography>
              </Container>
            </Section>
            
            <Section size="lg" backgroundColor="secondary" style={{ marginBottom: '1rem' }}>
              <Container>
                <Typography variant="body" weight="medium" style={{ color: 'var(--cria-white)' }}>
                  Large Section (600px min-height) - Secondary Background
                </Typography>
              </Container>
            </Section>
            
            <Section size="xl" backgroundColor="white" style={{ marginBottom: '2rem' }}>
              <Container>
                <Typography variant="body" weight="medium">Extra Large Section (800px min-height) - White Background</Typography>
              </Container>
            </Section>
            
            <Typography variant="body" style={{ marginBottom: '1rem' }}>
              Custom background colors:
            </Typography>
            
            <Section backgroundColor="#ff6b6b" style={{ marginBottom: '1rem' }}>
              <Container>
                <Typography variant="body" weight="medium" style={{ color: 'var(--cria-white)' }}>
                  Custom Red Background Section
                </Typography>
              </Container>
            </Section>
            
            <Section backgroundColor="#4ecdc4">
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
            <Typography variant="body" style={{ marginBottom: '1rem' }}>
              Section that takes full viewport height:
            </Typography>
            
            <Section 
              fullHeight 
              backgroundColor="primary" 
              style={{ marginBottom: '2rem', minHeight: '400px' }} // Limited for demo
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
            <Typography variant="body" style={{ marginBottom: '1rem' }}>
              Container with responsive padding:
            </Typography>
            
            <Container 
              padding={{ sm: 'sm', md: 'md', lg: 'lg' }}
              style={{ backgroundColor: '#f0fdf4', border: '1px solid #22c55e', marginBottom: '2rem' }}
            >
              <Typography variant="body" weight="medium">Responsive Padding Container</Typography>
              <Typography variant="bodySmall">
                Small padding on mobile, medium on tablet, large on desktop
              </Typography>
            </Container>
            
            <Typography variant="body" style={{ marginBottom: '1rem' }}>
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
            <Typography variant="body" style={{ marginBottom: '1rem' }}>
              Landing page layout:
            </Typography>
            
            <Section variant="hero" backgroundColor="primary" style={{ marginBottom: '2rem' }}>
              <Container center>
                <Typography variant="h1" weight="bold" style={{ color: 'var(--cria-white)', marginBottom: '1rem' }}>
                  Welcome to Our Platform
                </Typography>
                <Typography variant="body" style={{ color: 'var(--cria-white)', marginBottom: '2rem' }}>
                  Build amazing applications with our design system
                </Typography>
                <Button variant="secondary" size="lg" style={{ marginRight: '1rem' }}>
                  Get Started
                </Button>
                <Button variant="outline" size="lg" style={{ backgroundColor: 'transparent', borderColor: 'var(--cria-white)', color: 'var(--cria-white)' }}>
                  Learn More
                </Button>
              </Container>
            </Section>
            
            <Section variant="content" style={{ marginBottom: '2rem' }}>
              <Container>
                <Typography variant="h2" weight="semibold" style={{ marginBottom: '1rem' }}>
                  Features
                </Typography>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
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
