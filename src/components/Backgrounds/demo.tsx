import React, { useState } from 'react';
import { Backgrounds } from './Backgrounds';
import { Typography } from '../Typography';
import { Button } from '../Button';
import { Card } from '../Card';
import { Badge } from '../Badge';
import { 
  Palette, 
  Gradient, 
  GridFour, 
  Texture, 
  Play, 
  Pause,
  Download,
  Share,
  Heart,
  Star
} from 'phosphor-react';

const BackgroundsDemo: React.FC = () => {
  const [animated, setAnimated] = useState(false);

  return (
    <div style={{ padding: '24px', backgroundColor: 'var(--color-background)', minHeight: '100vh' }}>
      <Typography variant="h1" weight="bold" style={{ marginBottom: '32px' }}>
        Backgrounds Component
      </Typography>
      
      <Typography variant="body" color="muted" style={{ marginBottom: '32px' }}>
        A versatile component for creating various background effects including gradients, patterns, and textures with modern design patterns and full customization options.
      </Typography>

      {/* Plain Backgrounds */}
      <Card style={{ marginBottom: '32px', padding: '0' }}>
        <div style={{ padding: '16px', borderBottom: '1px solid var(--color-border)' }}>
          <Typography variant="h3" weight="semibold">Plain Backgrounds</Typography>
          <Typography variant="body" color="muted" size="sm">
            Simple solid color backgrounds with different color schemes
          </Typography>
        </div>
        <div style={{ padding: '16px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
          <Backgrounds variant="plain" colorScheme="primary" size="sm">
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <Typography variant="h4" weight="semibold" color="white">Primary</Typography>
            </div>
          </Backgrounds>
          
          <Backgrounds variant="plain" colorScheme="secondary" size="sm">
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <Typography variant="h4" weight="semibold" color="white">Secondary</Typography>
            </div>
          </Backgrounds>
          
          <Backgrounds variant="plain" colorScheme="neutral" size="sm">
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <Typography variant="h4" weight="semibold">Neutral</Typography>
            </div>
          </Backgrounds>
          
          <Backgrounds variant="plain" colorScheme="accent" size="sm">
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <Typography variant="h4" weight="semibold" color="white">Accent</Typography>
            </div>
          </Backgrounds>
        </div>
      </Card>

      {/* Gradient Backgrounds */}
      <Card style={{ marginBottom: '32px', padding: '0' }}>
        <div style={{ padding: '16px', borderBottom: '1px solid var(--color-border)' }}>
          <Typography variant="h3" weight="semibold">Gradient Backgrounds</Typography>
          <Typography variant="body" color="muted" size="sm">
            Linear, radial, and conic gradients with various directions and color schemes
          </Typography>
        </div>
        <div style={{ padding: '16px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
          <Backgrounds 
            variant="gradient" 
            gradientType="linear" 
            gradientDirection="to-right" 
            colorScheme="primary" 
            size="md"
          >
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <Typography variant="h4" weight="semibold" color="white">Linear Gradient</Typography>
              <Typography variant="body" color="white" size="sm">Left to Right</Typography>
            </div>
          </Backgrounds>
          
          <Backgrounds 
            variant="gradient" 
            gradientType="radial" 
            gradientPosition="center" 
            colorScheme="secondary" 
            size="md"
          >
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <Typography variant="h4" weight="semibold" color="white">Radial Gradient</Typography>
              <Typography variant="body" color="white" size="sm">Center Out</Typography>
            </div>
          </Backgrounds>
          
          <Backgrounds 
            variant="gradient" 
            gradientType="conic" 
            gradientDirection="45deg" 
            colorScheme="accent" 
            size="md"
          >
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <Typography variant="h4" weight="semibold" color="white">Conic Gradient</Typography>
              <Typography variant="body" color="white" size="sm">45 Degree</Typography>
            </div>
          </Backgrounds>
          
          <Backgrounds 
            variant="gradient" 
            gradientType="linear" 
            gradientDirection="to-bottom-right" 
            gradientColors={['#667eea', '#764ba2', '#f093fb']}
            size="md"
          >
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <Typography variant="h4" weight="semibold" color="white">Custom Colors</Typography>
              <Typography variant="body" color="white" size="sm">Multi-color Gradient</Typography>
            </div>
          </Backgrounds>
        </div>
      </Card>

      {/* Pattern Backgrounds */}
      <Card style={{ marginBottom: '32px', padding: '0' }}>
        <div style={{ padding: '16px', borderBottom: '1px solid var(--color-border)' }}>
          <Typography variant="h3" weight="semibold">Pattern Backgrounds</Typography>
          <Typography variant="body" color="muted" size="sm">
            Various geometric patterns with customizable size, opacity, and colors
          </Typography>
        </div>
        <div style={{ padding: '16px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
          <Backgrounds 
            variant="pattern" 
            patternType="dots" 
            colorScheme="primary" 
            patternSize="20px" 
            patternOpacity={0.1}
            size="md"
          >
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <Typography variant="h4" weight="semibold">Dots Pattern</Typography>
              <Typography variant="body" size="sm">Circular dots</Typography>
            </div>
          </Backgrounds>
          
          <Backgrounds 
            variant="pattern" 
            patternType="grid" 
            colorScheme="secondary" 
            patternSize="25px" 
            patternOpacity={0.15}
            size="md"
          >
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <Typography variant="h4" weight="semibold">Grid Pattern</Typography>
              <Typography variant="body" size="sm">Intersecting lines</Typography>
            </div>
          </Backgrounds>
          
          <Backgrounds 
            variant="pattern" 
            patternType="lines" 
            colorScheme="accent" 
            patternSize="30px" 
            patternOpacity={0.12}
            size="md"
          >
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <Typography variant="h4" weight="semibold">Lines Pattern</Typography>
              <Typography variant="body" size="sm">Diagonal stripes</Typography>
            </div>
          </Backgrounds>
          
          <Backgrounds 
            variant="pattern" 
            patternType="waves" 
            colorScheme="neutral" 
            patternSize="40px" 
            patternOpacity={0.08}
            size="md"
          >
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <Typography variant="h4" weight="semibold">Waves Pattern</Typography>
              <Typography variant="body" size="sm">Radial waves</Typography>
            </div>
          </Backgrounds>
          
          <Backgrounds 
            variant="pattern" 
            patternType="geometric" 
            colorScheme="primary" 
            patternSize="50px" 
            patternOpacity={0.1}
            size="md"
          >
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <Typography variant="h4" weight="semibold">Geometric Pattern</Typography>
              <Typography variant="body" size="sm">Conic sections</Typography>
            </div>
          </Backgrounds>
        </div>
      </Card>

      {/* Texture Backgrounds */}
      <Card style={{ marginBottom: '32px', padding: '0' }}>
        <div style={{ padding: '16px', borderBottom: '1px solid var(--color-border)' }}>
          <Typography variant="h3" weight="semibold">Texture Backgrounds</Typography>
          <Typography variant="body" color="muted" size="sm">
            Realistic material textures with adjustable intensity and scale
          </Typography>
        </div>
        <div style={{ padding: '16px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
          <Backgrounds 
            variant="texture" 
            textureType="paper" 
            textureIntensity={0.3} 
            textureScale={1}
            size="md"
          >
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <Typography variant="h4" weight="semibold">Paper Texture</Typography>
              <Typography variant="body" size="sm">Subtle paper grain</Typography>
            </div>
          </Backgrounds>
          
          <Backgrounds 
            variant="texture" 
            textureType="fabric" 
            textureIntensity={0.4} 
            textureScale={1.2}
            size="md"
          >
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <Typography variant="h4" weight="semibold">Fabric Texture</Typography>
              <Typography variant="body" size="sm">Woven fabric pattern</Typography>
            </div>
          </Backgrounds>
          
          <Backgrounds 
            variant="texture" 
            textureType="metal" 
            textureIntensity={0.5} 
            textureScale={0.8}
            size="md"
          >
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <Typography variant="h4" weight="semibold">Metal Texture</Typography>
              <Typography variant="body" size="sm">Brushed metal finish</Typography>
            </div>
          </Backgrounds>
          
          <Backgrounds 
            variant="texture" 
            textureType="wood" 
            textureIntensity={0.6} 
            textureScale={1.5}
            size="md"
          >
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <Typography variant="h4" weight="semibold">Wood Texture</Typography>
              <Typography variant="body" size="sm">Natural wood grain</Typography>
            </div>
          </Backgrounds>
        </div>
      </Card>

      {/* Intensity Variations */}
      <Card style={{ marginBottom: '32px', padding: '0' }}>
        <div style={{ padding: '16px', borderBottom: '1px solid var(--color-border)' }}>
          <Typography variant="h3" weight="semibold">Intensity Variations</Typography>
          <Typography variant="body" color="muted" size="sm">
            Different intensity levels for patterns and textures
          </Typography>
        </div>
        <div style={{ padding: '16px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
          <Backgrounds 
            variant="pattern" 
            patternType="dots" 
            colorScheme="primary" 
            intensity="subtle" 
            size="sm"
          >
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <Typography variant="h5" weight="semibold">Subtle</Typography>
            </div>
          </Backgrounds>
          
          <Backgrounds 
            variant="pattern" 
            patternType="dots" 
            colorScheme="primary" 
            intensity="medium" 
            size="sm"
          >
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <Typography variant="h5" weight="semibold">Medium</Typography>
            </div>
          </Backgrounds>
          
          <Backgrounds 
            variant="pattern" 
            patternType="dots" 
            colorScheme="primary" 
            intensity="bold" 
            size="sm"
          >
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <Typography variant="h5" weight="semibold">Bold</Typography>
            </div>
          </Backgrounds>
        </div>
      </Card>

      {/* Size Variations */}
      <Card style={{ marginBottom: '32px', padding: '0' }}>
        <div style={{ padding: '16px', borderBottom: '1px solid var(--color-border)' }}>
          <Typography variant="h3" weight="semibold">Size Variations</Typography>
          <Typography variant="body" color="muted" size="sm">
            Different background sizes for various use cases
          </Typography>
        </div>
        <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Backgrounds 
            variant="gradient" 
            gradientType="linear" 
            gradientDirection="to-right" 
            colorScheme="primary" 
            size="sm"
          >
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <Typography variant="h5" weight="semibold" color="white">Small (100px)</Typography>
            </div>
          </Backgrounds>
          
          <Backgrounds 
            variant="gradient" 
            gradientType="linear" 
            gradientDirection="to-right" 
            colorScheme="secondary" 
            size="md"
          >
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <Typography variant="h4" weight="semibold" color="white">Medium (200px)</Typography>
            </div>
          </Backgrounds>
          
          <Backgrounds 
            variant="gradient" 
            gradientType="linear" 
            gradientDirection="to-right" 
            colorScheme="accent" 
            size="lg"
          >
            <div style={{ textAlign: 'center', padding: '60px' }}>
              <Typography variant="h3" weight="semibold" color="white">Large (300px)</Typography>
            </div>
          </Backgrounds>
        </div>
      </Card>

      {/* Animated Backgrounds */}
      <Card style={{ marginBottom: '32px', padding: '0' }}>
        <div style={{ padding: '16px', borderBottom: '1px solid var(--color-border)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <Typography variant="h3" weight="semibold">Animated Backgrounds</Typography>
              <Typography variant="body" color="muted" size="sm">
                Backgrounds with smooth animations and transitions
              </Typography>
            </div>
            <Button 
              variant={animated ? "primary" : "ghost"} 
              size="sm"
              onClick={() => setAnimated(!animated)}
            >
              {animated ? <Pause size={16} /> : <Play size={16} />}
              {animated ? 'Pause' : 'Play'} Animation
            </Button>
          </div>
        </div>
        <div style={{ padding: '16px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
          <Backgrounds 
            variant="gradient" 
            gradientType="linear" 
            gradientDirection="to-right" 
            colorScheme="primary" 
            size="md"
            animated={animated}
            animationDuration={4000}
          >
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <Typography variant="h4" weight="semibold" color="white">Animated Gradient</Typography>
              <Typography variant="body" color="white" size="sm">4 second cycle</Typography>
            </div>
          </Backgrounds>
          
          <Backgrounds 
            variant="pattern" 
            patternType="waves" 
            colorScheme="secondary" 
            size="md"
            animated={animated}
            animationDuration={6000}
          >
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <Typography variant="h4" weight="semibold" color="white">Animated Pattern</Typography>
              <Typography variant="body" color="white" size="sm">6 second cycle</Typography>
            </div>
          </Backgrounds>
        </div>
      </Card>

      {/* Overlay Examples */}
      <Card style={{ marginBottom: '32px', padding: '0' }}>
        <div style={{ padding: '16px', borderBottom: '1px solid var(--color-border)' }}>
          <Typography variant="h3" weight="semibold">Overlay Examples</Typography>
          <Typography variant="body" color="muted" size="sm">
            Backgrounds with overlay effects for better text readability
          </Typography>
        </div>
        <div style={{ padding: '16px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
          <Backgrounds 
            variant="gradient" 
            gradientType="linear" 
            gradientDirection="to-bottom" 
            gradientColors={['#667eea', '#764ba2']}
            size="md"
            showOverlay={true}
            overlayOpacity={0.3}
            overlayColor="#000000"
          >
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <Typography variant="h4" weight="semibold" color="white">With Overlay</Typography>
              <Typography variant="body" color="white" size="sm">Better text contrast</Typography>
            </div>
          </Backgrounds>
          
          <Backgrounds 
            variant="gradient" 
            gradientType="linear" 
            gradientDirection="to-bottom" 
            gradientColors={['#667eea', '#764ba2']}
            size="md"
            showOverlay={false}
          >
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <Typography variant="h4" weight="semibold" color="white">Without Overlay</Typography>
              <Typography variant="body" color="white" size="sm">Direct background</Typography>
            </div>
          </Backgrounds>
        </div>
      </Card>

      {/* Modern Backgrounds */}
      <Card style={{ marginBottom: '32px', padding: '0' }}>
        <div style={{ padding: '16px', borderBottom: '1px solid var(--color-border)' }}>
          <Typography variant="h3" weight="semibold">Modern Backgrounds</Typography>
          <Typography variant="body" color="muted" size="sm">
            Contemporary background patterns inspired by modern design trends
          </Typography>
        </div>
        <div style={{ padding: '16px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
          <Backgrounds 
            variant="modern" 
            modernType="radial-glow" 
            colorScheme="primary" 
            size="md"
          >
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <Typography variant="h4" weight="semibold" color="white">Radial Glow</Typography>
              <Typography variant="body" color="white" size="sm">Soft radial gradient</Typography>
            </div>
          </Backgrounds>
          
          <Backgrounds 
            variant="modern" 
            modernType="grid-dots" 
            colorScheme="secondary" 
            size="md"
          >
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <Typography variant="h4" weight="semibold" color="white">Grid Dots</Typography>
              <Typography variant="body" color="white" size="sm">Grid with radial glow</Typography>
            </div>
          </Backgrounds>
          
          <Backgrounds 
            variant="modern" 
            modernType="mesh-gradient" 
            colorScheme="accent" 
            size="md"
          >
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <Typography variant="h4" weight="semibold" color="white">Mesh Gradient</Typography>
              <Typography variant="body" color="white" size="sm">Modern mesh effect</Typography>
            </div>
          </Backgrounds>
          
          <Backgrounds 
            variant="modern" 
            modernType="noise" 
            colorScheme="primary" 
            size="md"
          >
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <Typography variant="h4" weight="semibold" color="white">Noise Texture</Typography>
              <Typography variant="body" color="white" size="sm">Subtle noise pattern</Typography>
            </div>
          </Backgrounds>
          
          <Backgrounds 
            variant="modern" 
            modernType="aurora" 
            colorScheme="secondary" 
            size="md"
          >
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <Typography variant="h4" weight="semibold" color="white">Aurora Effect</Typography>
              <Typography variant="body" color="white" size="sm">Northern lights style</Typography>
            </div>
          </Backgrounds>
          
          <Backgrounds 
            variant="modern" 
            modernType="waves" 
            colorScheme="accent" 
            size="md"
          >
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <Typography variant="h4" weight="semibold" color="white">Wave Pattern</Typography>
              <Typography variant="body" color="white" size="sm">Flowing wave effect</Typography>
            </div>
          </Backgrounds>
        </div>
      </Card>

      {/* Real-world Examples */}
      <Card style={{ marginBottom: '32px', padding: '0' }}>
        <div style={{ padding: '16px', borderBottom: '1px solid var(--color-border)' }}>
          <Typography variant="h3" weight="semibold">Real-world Examples</Typography>
          <Typography variant="body" color="muted" size="sm">
            Practical examples showing how backgrounds can be used in applications
          </Typography>
        </div>
        <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Hero Section */}
          <Backgrounds 
            variant="gradient" 
            gradientType="radial" 
            gradientPosition="center" 
            gradientColors={['#667eea', '#764ba2', '#f093fb']}
            size="lg"
            showOverlay={true}
            overlayOpacity={0.2}
          >
            <div style={{ textAlign: 'center', padding: '60px 20px' }}>
              <Typography variant="h1" weight="bold" color="white" style={{ marginBottom: '16px' }}>
                Welcome to Our Platform
              </Typography>
              <Typography variant="h3" color="white" style={{ marginBottom: '24px' }}>
                Build amazing experiences with our design system
              </Typography>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button variant="primary" size="lg">
                  Get Started
                </Button>
                <Button variant="ghost" size="lg" style={{ color: 'white', borderColor: 'white' }}>
                  Learn More
                </Button>
              </div>
            </div>
          </Backgrounds>

          {/* Feature Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
            <Backgrounds 
              variant="pattern" 
              patternType="dots" 
              colorScheme="primary" 
              patternOpacity={0.05}
              size="md"
            >
              <Card style={{ margin: '0', backgroundColor: 'transparent', border: 'none' }}>
                <div style={{ textAlign: 'center', padding: '20px' }}>
                  <div style={{ width: '60px', height: '60px', backgroundColor: 'var(--color-primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                    <Palette size={24} color="white" />
                  </div>
                  <Typography variant="h4" weight="semibold" style={{ marginBottom: '8px' }}>
                    Beautiful Design
                  </Typography>
                  <Typography variant="body" color="muted">
                    Create stunning interfaces with our comprehensive design system
                  </Typography>
                </div>
              </Card>
            </Backgrounds>

            <Backgrounds 
              variant="texture" 
              textureType="paper" 
              textureIntensity={0.2}
              size="md"
            >
              <Card style={{ margin: '0', backgroundColor: 'transparent', border: 'none' }}>
                <div style={{ textAlign: 'center', padding: '20px' }}>
                  <div style={{ width: '60px', height: '60px', backgroundColor: 'var(--color-secondary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                    <Gradient size={24} color="white" />
                  </div>
                  <Typography variant="h4" weight="semibold" style={{ marginBottom: '8px' }}>
                    Flexible Backgrounds
                  </Typography>
                  <Typography variant="body" color="muted">
                    Choose from gradients, patterns, and textures to match your brand
                  </Typography>
                </div>
              </Card>
            </Backgrounds>

            <Backgrounds 
              variant="pattern" 
              patternType="grid" 
              colorScheme="accent" 
              patternOpacity={0.08}
              size="md"
            >
              <Card style={{ margin: '0', backgroundColor: 'transparent', border: 'none' }}>
                <div style={{ textAlign: 'center', padding: '20px' }}>
                  <div style={{ width: '60px', height: '60px', backgroundColor: 'var(--color-accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                    <GridFour size={24} color="white" />
                  </div>
                  <Typography variant="h4" weight="semibold" style={{ marginBottom: '8px' }}>
                    Responsive Design
                  </Typography>
                  <Typography variant="body" color="muted">
                    All backgrounds adapt perfectly to different screen sizes
                  </Typography>
                </div>
              </Card>
            </Backgrounds>
          </div>

          {/* Call to Action */}
          <Backgrounds 
            variant="gradient" 
            gradientType="linear" 
            gradientDirection="45deg" 
            gradientColors={['#ff6b6b', '#feca57', '#48dbfb']}
            size="md"
            animated={true}
            animationDuration={8000}
          >
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <Typography variant="h2" weight="bold" color="white" style={{ marginBottom: '16px' }}>
                Ready to Get Started?
              </Typography>
              <Typography variant="h4" color="white" style={{ marginBottom: '24px' }}>
                Join thousands of developers building amazing products
              </Typography>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button variant="primary" size="lg" style={{ backgroundColor: 'white', color: 'var(--color-primary)' }}>
                  <Download size={16} />
                  Download Now
                </Button>
                <Button variant="ghost" size="lg" style={{ color: 'white', borderColor: 'white' }}>
                  <Share size={16} />
                  Share
                </Button>
              </div>
            </div>
          </Backgrounds>
        </div>
      </Card>

      {/* Customization Examples */}
      <Card style={{ padding: '0' }}>
        <div style={{ padding: '16px', borderBottom: '1px solid var(--color-border)' }}>
          <Typography variant="h3" weight="semibold">Customization Examples</Typography>
          <Typography variant="body" color="muted" size="sm">
            Advanced customization with custom colors, sizes, and effects
          </Typography>
        </div>
        <div style={{ padding: '16px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
          <Backgrounds 
            variant="gradient" 
            gradientType="conic" 
            gradientDirection="90deg" 
            gradientColors={['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff']}
            size="md"
            animated={true}
            animationDuration={5000}
          >
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <Typography variant="h4" weight="semibold" color="white">Rainbow Conic</Typography>
              <Typography variant="body" color="white" size="sm">Custom colors</Typography>
            </div>
          </Backgrounds>
          
          <Backgrounds 
            variant="pattern" 
            patternType="geometric" 
            patternSize="80px" 
            patternOpacity={0.15}
            patternColor="#ff6b6b"
            size="md"
          >
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <Typography variant="h4" weight="semibold">Custom Pattern</Typography>
              <Typography variant="body" size="sm">Large geometric shapes</Typography>
            </div>
          </Backgrounds>
          
          <Backgrounds 
            variant="texture" 
            textureType="metal" 
            textureIntensity={0.8} 
            textureScale={0.5}
            size="md"
          >
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <Typography variant="h4" weight="semibold">Intense Metal</Typography>
              <Typography variant="body" size="sm">High intensity texture</Typography>
            </div>
          </Backgrounds>
        </div>
      </Card>
    </div>
  );
};

export default BackgroundsDemo;
