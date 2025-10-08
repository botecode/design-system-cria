import React, { useState } from 'react';
import { Backgrounds } from './Backgrounds';
import { CriaTextHeadline1, CriaTextHeadline2, CriaTextTitle1, CriaTextTitle2, CriaTextBody1, CriaTextBody2 } from '../TextTokens';
import { Button } from '../Button';
import { Card } from '../Card';
import { Badge } from '../Badge';
import { spacing, colors, radii } from '../../tokens';
import { 
  Palette, 
  Gradient, 
  GridFour, 
  SquaresFour as Texture, 
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
    <div style={{ padding: spacing[6], backgroundColor: colors.background, minHeight: '100vh' }}>
      <div style={{ marginBottom: spacing[8] }}>
        <CriaTextHeadline1>
          Backgrounds Component
        </CriaTextHeadline1>
      </div>
      
      <div style={{ marginBottom: spacing[8] }}>
        <CriaTextBody1 color="muted">
          A versatile component for creating various background effects including gradients, patterns, and textures with modern design patterns and full customization options.
        </CriaTextBody1>
      </div>

      {/* Plain Backgrounds */}
      <Card style={{ marginBottom: spacing[8], padding: '0' }}>
        <div style={{ padding: spacing[4], borderBottom: `1px solid ${colors.border}` }}>
          <CriaTextTitle2 >Plain Backgrounds</CriaTextTitle2>
          <CriaTextBody2 color="muted">
            Simple solid color backgrounds with different color schemes
          </CriaTextBody2>
        </div>
        <div style={{ padding: spacing[4], display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: spacing[4] }}>
          <Backgrounds variant="plain" colorScheme="primary" size="sm">
            <div style={{ textAlign: 'center', padding: spacing[5] }}>
              <CriaTextTitle2  color="white">Primary</CriaTextTitle2>
            </div>
          </Backgrounds>
          
          <Backgrounds variant="plain" colorScheme="secondary" size="sm">
            <div style={{ textAlign: 'center', padding: spacing[5] }}>
              <CriaTextTitle2  color="white">Secondary</CriaTextTitle2>
            </div>
          </Backgrounds>
          
          <Backgrounds variant="plain" colorScheme="neutral" size="sm">
            <div style={{ textAlign: 'center', padding: spacing[5] }}>
              <CriaTextTitle2 >Neutral</CriaTextTitle2>
            </div>
          </Backgrounds>
          
          <Backgrounds variant="plain" colorScheme="accent" size="sm">
            <div style={{ textAlign: 'center', padding: spacing[5] }}>
              <CriaTextTitle2  color="white">Accent</CriaTextTitle2>
            </div>
          </Backgrounds>
        </div>
      </Card>

      {/* Gradient Backgrounds */}
      <Card style={{ marginBottom: spacing[8], padding: '0' }}>
        <div style={{ padding: spacing[4], borderBottom: `1px solid ${colors.border}` }}>
          <CriaTextTitle2 >Gradient Backgrounds</CriaTextTitle2>
          <CriaTextBody2 color="muted">
            Linear, radial, and conic gradients with various directions and color schemes
          </CriaTextBody2>
        </div>
        <div style={{ padding: spacing[4], display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: spacing[4] }}>
          <Backgrounds 
            variant="gradient" 
            gradientType="linear" 
            gradientDirection="to-right" 
            colorScheme="primary" 
            size="md"
          >
            <div style={{ textAlign: 'center', padding: spacing[10] }}>
              <CriaTextTitle2  color="white">Linear Gradient</CriaTextTitle2>
              <CriaTextBody2 color="white">Left to Right</CriaTextBody2>
            </div>
          </Backgrounds>
          
          <Backgrounds 
            variant="gradient" 
            gradientType="radial" 
            gradientPosition="center" 
            colorScheme="secondary" 
            size="md"
          >
            <div style={{ textAlign: 'center', padding: spacing[10] }}>
              <CriaTextTitle2  color="white">Radial Gradient</CriaTextTitle2>
              <CriaTextBody2 color="white">Center Out</CriaTextBody2>
            </div>
          </Backgrounds>
          
          <Backgrounds 
            variant="gradient" 
            gradientType="conic" 
            gradientDirection="45deg" 
            colorScheme="accent" 
            size="md"
          >
            <div style={{ textAlign: 'center', padding: spacing[10] }}>
              <CriaTextTitle2  color="white">Conic Gradient</CriaTextTitle2>
              <CriaTextBody2 color="white">45 Degree</CriaTextBody2>
            </div>
          </Backgrounds>
          
          <Backgrounds 
            variant="gradient" 
            gradientType="linear" 
            gradientDirection="to-bottom-right" 
            gradientColors={['#667eea', '#764ba2', '#f093fb']}
            size="md"
          >
            <div style={{ textAlign: 'center', padding: spacing[10] }}>
              <CriaTextTitle2  color="white">Custom Colors</CriaTextTitle2>
              <CriaTextBody2 color="white">Multi-color Gradient</CriaTextBody2>
            </div>
          </Backgrounds>
        </div>
      </Card>

      {/* Pattern Backgrounds */}
      <Card style={{ marginBottom: spacing[8], padding: '0' }}>
        <div style={{ padding: spacing[4], borderBottom: `1px solid ${colors.border}` }}>
          <CriaTextTitle2 >Pattern Backgrounds</CriaTextTitle2>
          <CriaTextBody2 color="muted">
            Various geometric patterns with customizable size, opacity, and colors
          </CriaTextBody2>
        </div>
        <div style={{ padding: spacing[4], display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: spacing[4] }}>
          <Backgrounds 
            variant="pattern" 
            patternType="dots" 
            colorScheme="primary" 
            patternSize="20px" 
            patternOpacity={0.1}
            size="md"
          >
            <div style={{ textAlign: 'center', padding: spacing[10] }}>
              <CriaTextTitle2 >Dots Pattern</CriaTextTitle2>
              <CriaTextBody2>Circular dots</CriaTextBody2>
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
            <div style={{ textAlign: 'center', padding: spacing[10] }}>
              <CriaTextTitle2 >Grid Pattern</CriaTextTitle2>
              <CriaTextBody2>Intersecting lines</CriaTextBody2>
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
            <div style={{ textAlign: 'center', padding: spacing[10] }}>
              <CriaTextTitle2 >Lines Pattern</CriaTextTitle2>
              <CriaTextBody2>Diagonal stripes</CriaTextBody2>
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
            <div style={{ textAlign: 'center', padding: spacing[10] }}>
              <CriaTextTitle2 >Waves Pattern</CriaTextTitle2>
              <CriaTextBody2>Radial waves</CriaTextBody2>
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
            <div style={{ textAlign: 'center', padding: spacing[10] }}>
              <CriaTextTitle2 >Geometric Pattern</CriaTextTitle2>
              <CriaTextBody2>Conic sections</CriaTextBody2>
            </div>
          </Backgrounds>
        </div>
      </Card>

      {/* Texture Backgrounds */}
      <Card style={{ marginBottom: spacing[8], padding: '0' }}>
        <div style={{ padding: spacing[4], borderBottom: `1px solid ${colors.border}` }}>
          <CriaTextTitle2 >Texture Backgrounds</CriaTextTitle2>
          <CriaTextBody2 color="muted">
            Realistic material textures with adjustable intensity and scale
          </CriaTextBody2>
        </div>
        <div style={{ padding: spacing[4], display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: spacing[4] }}>
          <Backgrounds 
            variant="texture" 
            textureType="paper" 
            textureIntensity={0.3} 
            textureScale={1}
            size="md"
          >
            <div style={{ textAlign: 'center', padding: spacing[10] }}>
              <CriaTextTitle2 >Paper Texture</CriaTextTitle2>
              <CriaTextBody2>Subtle paper grain</CriaTextBody2>
            </div>
          </Backgrounds>
          
          <Backgrounds 
            variant="texture" 
            textureType="fabric" 
            textureIntensity={0.4} 
            textureScale={1.2}
            size="md"
          >
            <div style={{ textAlign: 'center', padding: spacing[10] }}>
              <CriaTextTitle2 >Fabric Texture</CriaTextTitle2>
              <CriaTextBody2>Woven fabric pattern</CriaTextBody2>
            </div>
          </Backgrounds>
          
          <Backgrounds 
            variant="texture" 
            textureType="metal" 
            textureIntensity={0.5} 
            textureScale={0.8}
            size="md"
          >
            <div style={{ textAlign: 'center', padding: spacing[10] }}>
              <CriaTextTitle2 >Metal Texture</CriaTextTitle2>
              <CriaTextBody2>Brushed metal finish</CriaTextBody2>
            </div>
          </Backgrounds>
          
          <Backgrounds 
            variant="texture" 
            textureType="wood" 
            textureIntensity={0.6} 
            textureScale={1.5}
            size="md"
          >
            <div style={{ textAlign: 'center', padding: spacing[10] }}>
              <CriaTextTitle2 >Wood Texture</CriaTextTitle2>
              <CriaTextBody2>Natural wood grain</CriaTextBody2>
            </div>
          </Backgrounds>
        </div>
      </Card>

      {/* Intensity Variations */}
      <Card style={{ marginBottom: spacing[8], padding: '0' }}>
        <div style={{ padding: spacing[4], borderBottom: `1px solid ${colors.border}` }}>
          <CriaTextTitle2 >Intensity Variations</CriaTextTitle2>
          <CriaTextBody2 color="muted">
            Different intensity levels for patterns and textures
          </CriaTextBody2>
        </div>
        <div style={{ padding: spacing[4], display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: spacing[4] }}>
          <Backgrounds 
            variant="pattern" 
            patternType="dots" 
            colorScheme="primary" 
            intensity="subtle" 
            size="sm"
          >
            <div style={{ textAlign: 'center', padding: spacing[5] }}>
              <CriaTextTitle2 >Subtle</CriaTextTitle2>
            </div>
          </Backgrounds>
          
          <Backgrounds 
            variant="pattern" 
            patternType="dots" 
            colorScheme="primary" 
            intensity="medium" 
            size="sm"
          >
            <div style={{ textAlign: 'center', padding: spacing[5] }}>
              <CriaTextTitle2 >Medium</CriaTextTitle2>
            </div>
          </Backgrounds>
          
          <Backgrounds 
            variant="pattern" 
            patternType="dots" 
            colorScheme="primary" 
            intensity="bold" 
            size="sm"
          >
            <div style={{ textAlign: 'center', padding: spacing[5] }}>
              <CriaTextTitle2 >Bold</CriaTextTitle2>
            </div>
          </Backgrounds>
        </div>
      </Card>

      {/* Size Variations */}
      <Card style={{ marginBottom: spacing[8], padding: '0' }}>
        <div style={{ padding: spacing[4], borderBottom: `1px solid ${colors.border}` }}>
          <CriaTextTitle2 >Size Variations</CriaTextTitle2>
          <CriaTextBody2 color="muted">
            Different background sizes for various use cases
          </CriaTextBody2>
        </div>
        <div style={{ padding: spacing[4], display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
          <Backgrounds 
            variant="gradient" 
            gradientType="linear" 
            gradientDirection="to-right" 
            colorScheme="primary" 
            size="sm"
          >
            <div style={{ textAlign: 'center', padding: spacing[5] }}>
              <CriaTextTitle2  color="white">Small (100px)</CriaTextTitle2>
            </div>
          </Backgrounds>
          
          <Backgrounds 
            variant="gradient" 
            gradientType="linear" 
            gradientDirection="to-right" 
            colorScheme="secondary" 
            size="md"
          >
            <div style={{ textAlign: 'center', padding: spacing[10] }}>
              <CriaTextTitle2  color="white">Medium (200px)</CriaTextTitle2>
            </div>
          </Backgrounds>
          
          <Backgrounds 
            variant="gradient" 
            gradientType="linear" 
            gradientDirection="to-right" 
            colorScheme="accent" 
            size="lg"
          >
            <div style={{ textAlign: 'center', padding: spacing[12] }}>
              <CriaTextTitle2  color="white">Large (300px)</CriaTextTitle2>
            </div>
          </Backgrounds>
        </div>
      </Card>

      {/* Animated Backgrounds */}
      <Card style={{ marginBottom: spacing[8], padding: '0' }}>
        <div style={{ padding: spacing[4], borderBottom: `1px solid ${colors.border}` }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <CriaTextTitle2 >Animated Backgrounds</CriaTextTitle2>
              <CriaTextBody2 color="muted">
                Backgrounds with smooth animations and transitions
              </CriaTextBody2>
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
        <div style={{ padding: spacing[4], display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: spacing[4] }}>
          <Backgrounds 
            variant="gradient" 
            gradientType="linear" 
            gradientDirection="to-right" 
            colorScheme="primary" 
            size="md"
            animated={animated}
            animationDuration={4000}
          >
            <div style={{ textAlign: 'center', padding: spacing[10] }}>
              <CriaTextTitle2  color="white">Animated Gradient</CriaTextTitle2>
              <CriaTextBody2 color="white">4 second cycle</CriaTextBody2>
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
            <div style={{ textAlign: 'center', padding: spacing[10] }}>
              <CriaTextTitle2  color="white">Animated Pattern</CriaTextTitle2>
              <CriaTextBody2 color="white">6 second cycle</CriaTextBody2>
            </div>
          </Backgrounds>
        </div>
      </Card>

      {/* Overlay Examples */}
      <Card style={{ marginBottom: spacing[8], padding: '0' }}>
        <div style={{ padding: spacing[4], borderBottom: `1px solid ${colors.border}` }}>
          <CriaTextTitle2 >Overlay Examples</CriaTextTitle2>
          <CriaTextBody2 color="muted">
            Backgrounds with overlay effects for better text readability
          </CriaTextBody2>
        </div>
        <div style={{ padding: spacing[4], display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: spacing[4] }}>
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
            <div style={{ textAlign: 'center', padding: spacing[10] }}>
              <CriaTextTitle2  color="white">With Overlay</CriaTextTitle2>
              <CriaTextBody2 color="white">Better text contrast</CriaTextBody2>
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
            <div style={{ textAlign: 'center', padding: spacing[10] }}>
              <CriaTextTitle2  color="white">Without Overlay</CriaTextTitle2>
              <CriaTextBody2 color="white">Direct background</CriaTextBody2>
            </div>
          </Backgrounds>
        </div>
      </Card>

      {/* Modern Backgrounds */}
      <Card style={{ marginBottom: spacing[8], padding: '0' }}>
        <div style={{ padding: spacing[4], borderBottom: `1px solid ${colors.border}` }}>
          <CriaTextTitle2 >Modern Backgrounds</CriaTextTitle2>
          <CriaTextBody2 color="muted">
            Contemporary background patterns inspired by modern design trends
          </CriaTextBody2>
        </div>
        <div style={{ padding: spacing[4], display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: spacing[4] }}>
          <Backgrounds 
            variant="modern" 
            modernType="radial-glow" 
            colorScheme="primary" 
            size="md"
          >
            <div style={{ textAlign: 'center', padding: spacing[10] }}>
              <CriaTextTitle2  color="white">Radial Glow</CriaTextTitle2>
              <CriaTextBody2 color="white">Soft radial gradient</CriaTextBody2>
            </div>
          </Backgrounds>
          
          <Backgrounds 
            variant="modern" 
            modernType="grid-dots" 
            colorScheme="secondary" 
            size="md"
          >
            <div style={{ textAlign: 'center', padding: spacing[10] }}>
              <CriaTextTitle2  color="white">Grid Dots</CriaTextTitle2>
              <CriaTextBody2 color="white">Grid with radial glow</CriaTextBody2>
            </div>
          </Backgrounds>
          
          <Backgrounds 
            variant="modern" 
            modernType="mesh-gradient" 
            colorScheme="accent" 
            size="md"
          >
            <div style={{ textAlign: 'center', padding: spacing[10] }}>
              <CriaTextTitle2  color="white">Mesh Gradient</CriaTextTitle2>
              <CriaTextBody2 color="white">Modern mesh effect</CriaTextBody2>
            </div>
          </Backgrounds>
          
          <Backgrounds 
            variant="modern" 
            modernType="noise" 
            colorScheme="primary" 
            size="md"
          >
            <div style={{ textAlign: 'center', padding: spacing[10] }}>
              <CriaTextTitle2  color="white">Noise Texture</CriaTextTitle2>
              <CriaTextBody2 color="white">Subtle noise pattern</CriaTextBody2>
            </div>
          </Backgrounds>
          
          <Backgrounds 
            variant="modern" 
            modernType="aurora" 
            colorScheme="secondary" 
            size="md"
          >
            <div style={{ textAlign: 'center', padding: spacing[10] }}>
              <CriaTextTitle2  color="white">Aurora Effect</CriaTextTitle2>
              <CriaTextBody2 color="white">Northern lights style</CriaTextBody2>
            </div>
          </Backgrounds>
          
          <Backgrounds 
            variant="modern" 
            modernType="waves" 
            colorScheme="accent" 
            size="md"
          >
            <div style={{ textAlign: 'center', padding: spacing[10] }}>
              <CriaTextTitle2  color="white">Wave Pattern</CriaTextTitle2>
              <CriaTextBody2 color="white">Flowing wave effect</CriaTextBody2>
            </div>
          </Backgrounds>
        </div>
      </Card>

      {/* Real-world Examples */}
      <Card style={{ marginBottom: spacing[8], padding: '0' }}>
        <div style={{ padding: spacing[4], borderBottom: `1px solid ${colors.border}` }}>
          <CriaTextTitle2 >Real-world Examples</CriaTextTitle2>
          <CriaTextBody2 color="muted">
            Practical examples showing how backgrounds can be used in applications
          </CriaTextBody2>
        </div>
        <div style={{ padding: spacing[4], display: 'flex', flexDirection: 'column', gap: spacing[6] }}>
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
              <div style={{ marginBottom: '16px' }}>
                <CriaTextHeadline1 color="white">
                  Welcome to Our Platform
                </CriaTextHeadline1>
              </div>
              <div style={{ marginBottom: '24px' }}>
                <CriaTextTitle2 color="white">
                  Build amazing experiences with our design system
                </CriaTextTitle2>
              </div>
              <div style={{ display: 'flex', gap: spacing[3], justifyContent: 'center', flexWrap: 'wrap' }}>
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: spacing[4] }}>
            <Backgrounds 
              variant="pattern" 
              patternType="dots" 
              colorScheme="primary" 
              patternOpacity={0.05}
              size="md"
            >
              <Card style={{ margin: '0', backgroundColor: 'transparent', border: 'none' }}>
                <div style={{ textAlign: 'center', padding: spacing[5] }}>
                  <div style={{ width: '60px', height: '60px', backgroundColor: colors.primary[500], borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                    <Palette size={24} color="white" />
                  </div>
                  <div style={{ marginBottom: '8px' }}>
                    <CriaTextTitle2>
                      Beautiful Design
                    </CriaTextTitle2>
                  </div>
                  <CriaTextBody1 color="muted">
                    Create stunning interfaces with our comprehensive design system
                  </CriaTextBody1>
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
                <div style={{ textAlign: 'center', padding: spacing[5] }}>
                  <div style={{ width: '60px', height: '60px', backgroundColor: colors.secondary[500], borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                    <Gradient size={24} color="white" />
                  </div>
                  <div style={{ marginBottom: '8px' }}>
                    <CriaTextTitle2>
                      Flexible Backgrounds
                    </CriaTextTitle2>
                  </div>
                  <CriaTextBody1 color="muted">
                    Choose from gradients, patterns, and textures to match your brand
                  </CriaTextBody1>
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
                <div style={{ textAlign: 'center', padding: spacing[5] }}>
                  <div style={{ width: '60px', height: '60px', backgroundColor: colors.secondary[500], borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                    <GridFour size={24} color="white" />
                  </div>
                  <div style={{ marginBottom: '8px' }}>
                    <CriaTextTitle2>
                      Responsive Design
                    </CriaTextTitle2>
                  </div>
                  <CriaTextBody1 color="muted">
                    All backgrounds adapt perfectly to different screen sizes
                  </CriaTextBody1>
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
              <div style={{ marginBottom: '16px' }}>
                <CriaTextTitle1 color="white">
                  Ready to Get Started?
                </CriaTextTitle1>
              </div>
              <div style={{ marginBottom: '24px' }}>
                <CriaTextTitle2 color="white">
                  Join thousands of developers building amazing products
                </CriaTextTitle2>
              </div>
              <div style={{ display: 'flex', gap: spacing[3], justifyContent: 'center', flexWrap: 'wrap' }}>
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
        <div style={{ padding: spacing[4], borderBottom: `1px solid ${colors.border}` }}>
          <CriaTextTitle2 >Customization Examples</CriaTextTitle2>
          <CriaTextBody2 color="muted">
            Advanced customization with custom colors, sizes, and effects
          </CriaTextBody2>
        </div>
        <div style={{ padding: spacing[4], display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: spacing[4] }}>
          <Backgrounds 
            variant="gradient" 
            gradientType="conic" 
            gradientDirection="90deg" 
            gradientColors={['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff']}
            size="md"
            animated={true}
            animationDuration={5000}
          >
            <div style={{ textAlign: 'center', padding: spacing[10] }}>
              <CriaTextTitle2  color="white">Rainbow Conic</CriaTextTitle2>
              <CriaTextBody2 color="white">Custom colors</CriaTextBody2>
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
            <div style={{ textAlign: 'center', padding: spacing[10] }}>
              <CriaTextTitle2 >Custom Pattern</CriaTextTitle2>
              <CriaTextBody2>Large geometric shapes</CriaTextBody2>
            </div>
          </Backgrounds>
          
          <Backgrounds 
            variant="texture" 
            textureType="metal" 
            textureIntensity={0.8} 
            textureScale={0.5}
            size="md"
          >
            <div style={{ textAlign: 'center', padding: spacing[10] }}>
              <CriaTextTitle2 >Intense Metal</CriaTextTitle2>
              <CriaTextBody2>High intensity texture</CriaTextBody2>
            </div>
          </Backgrounds>
        </div>
      </Card>
    </div>
  );
};

export default BackgroundsDemo;
