import React from 'react';
import { ThemeProvider } from '../../contexts/ThemeContext';
import { ThemeToggle } from './ThemeToggle';
import { CriaTextHeadline1, CriaTextTitle1, CriaTextBody1 } from '../TextTokens';
import { Card } from '../Card/Card';
import { Container } from '../Container/Container';

const ThemeToggleDemo: React.FC = () => {
  return (
    <ThemeProvider>
      <Container>
        <div style={{ padding: '24px' }}>
          <CriaTextHeadline1 style={{ marginBottom: '24px' }}>
            Theme Toggle Component Demo
          </CriaTextHeadline1>
          
          <CriaTextBody1 style={{ marginBottom: '32px' }}>
            The ThemeToggle component allows users to switch between light and dark themes.
            It supports multiple variants and sizes, and automatically detects system preferences.
          </CriaTextBody1>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {/* Switch Variant */}
            <Card>
              <CriaTextTitle1 style={{ marginBottom: '16px' }}>
                Switch Variant
              </CriaTextTitle1>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <CriaTextBody1>Small:</CriaTextBody1>
                  <ThemeToggle size="sm" variant="switch" />
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <CriaTextBody1>Medium:</CriaTextBody1>
                  <ThemeToggle size="md" variant="switch" />
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <CriaTextBody1>Large:</CriaTextBody1>
                  <ThemeToggle size="lg" variant="switch" />
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <CriaTextBody1>No Label:</CriaTextBody1>
                  <ThemeToggle size="md" variant="switch" showLabel={false} />
                </div>
              </div>
            </Card>

            {/* Button Variant */}
            <Card>
              <CriaTextTitle1 style={{ marginBottom: '16px' }}>
                Button Variant
              </CriaTextTitle1>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <CriaTextBody1>Small:</CriaTextBody1>
                  <ThemeToggle size="sm" variant="button" />
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <CriaTextBody1>Medium:</CriaTextBody1>
                  <ThemeToggle size="md" variant="button" />
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <CriaTextBody1>Large:</CriaTextBody1>
                  <ThemeToggle size="lg" variant="button" />
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <CriaTextBody1>No Label:</CriaTextBody1>
                  <ThemeToggle size="md" variant="button" showLabel={false} />
                </div>
              </div>
            </Card>

            {/* Icon Variant */}
            <Card>
              <CriaTextTitle1 style={{ marginBottom: '16px' }}>
                Icon Variant
              </CriaTextTitle1>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <CriaTextBody1>Small:</CriaTextBody1>
                  <ThemeToggle size="sm" variant="icon" />
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <CriaTextBody1>Medium:</CriaTextBody1>
                  <ThemeToggle size="md" variant="icon" />
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <CriaTextBody1>Large:</CriaTextBody1>
                  <ThemeToggle size="lg" variant="icon" />
                </div>
              </div>
            </Card>

            {/* Custom Labels */}
            <Card>
              <CriaTextTitle1 style={{ marginBottom: '16px' }}>
                Custom Labels
              </CriaTextTitle1>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <CriaTextBody1>Custom Labels:</CriaTextBody1>
                  <ThemeToggle 
                    size="md" 
                    variant="switch" 
                    lightLabel="☀️ Light" 
                    darkLabel="🌙 Dark" 
                  />
                </div>
              </div>
            </Card>

            {/* Usage Example */}
            <Card>
              <CriaTextTitle1 style={{ marginBottom: '16px' }}>
                Usage Example
              </CriaTextTitle1>
              
              <CriaTextBody1 style={{ marginBottom: '16px' }}>
                The ThemeToggle component automatically integrates with the ThemeProvider context.
                It handles theme persistence, system preference detection, and smooth transitions.
              </CriaTextBody1>
              
              <div style={{ 
                padding: '16px', 
                backgroundColor: 'var(--cria-surface-primary)', 
                borderRadius: '8px',
                border: '1px solid var(--cria-border-primary)'
              }}>
                <CriaTextBody1>
                  Current theme will be displayed here when you toggle between light and dark modes.
                  Notice how the background and text colors change smoothly.
                </CriaTextBody1>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default ThemeToggleDemo;
