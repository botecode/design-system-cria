import React, { useState } from 'react';
import { Typography, Button, Card, CardHeader, CardContent } from './index';
import TypographyDemo from './components/Typography/demo';
import ButtonDemo from './components/Button/demo';
import CardDemo from './components/Card/demo';
import BadgeDemo from './components/Badge/demo';
import TabsDemo from './components/Tabs/demo';
import { ColorsDemo } from './components/Colors/demo';

// Import Cartograph font
import './fonts.css';

type DemoSection = 'overview' | 'typography' | 'button' | 'card' | 'badge' | 'tabs' | 'colors';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<DemoSection>('overview');

  const navigationItems = [
    { id: 'overview' as DemoSection, label: 'Overview' },
    { id: 'typography' as DemoSection, label: 'Typography' },
    { id: 'button' as DemoSection, label: 'Button' },
    { id: 'card' as DemoSection, label: 'Card' },
    { id: 'badge' as DemoSection, label: 'Badge' },
    { id: 'tabs' as DemoSection, label: 'Tabs' },
    { id: 'colors' as DemoSection, label: 'Colors' },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'typography':
        return <TypographyDemo />;
      case 'button':
        return <ButtonDemo />;
      case 'card':
        return <CardDemo />;
      case 'badge':
        return <BadgeDemo />;
      case 'tabs':
        return <TabsDemo />;
      case 'colors':
        return <ColorsDemo />;
      default:
        return (
          <div style={{ padding: '24px', maxWidth: '1000px' }}>
            <Typography variant="title1" weight="bold" style={{ marginBottom: '32px' }}>
              CRIA_UI Design System
            </Typography>
            
            <Typography variant="title1" weight="semiBold" style={{ marginBottom: '16px' }}>
              Welcome to CRIA_UI
            </Typography>
            
            
            <Typography variant="body" style={{ marginBottom: '32px' }}>
              A comprehensive React + TypeScript design system built specifically for CR_IA applications. 
              This system provides consistent, accessible, and beautiful components that can be easily 
              integrated into your Rails frontend.
            </Typography>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '32px' }}>
              <Card variant="elevated">
                <CardHeader>
                  <Typography variant="h3" weight="medium">
                    🎨 Design Tokens
                  </Typography>
                </CardHeader>
                <CardContent>
                  <Typography variant="body">
                    Consistent colors, typography, spacing, and other design elements that form the foundation of our design system.
                  </Typography>
                </CardContent>
              </Card>

              <Card variant="elevated">
                <CardHeader>
                  <Typography variant="h3" weight="medium">
                    🧩 Components
                  </Typography>
                </CardHeader>
                <CardContent>
                  <Typography variant="body">
                    Production-ready React components with TypeScript support, accessibility features, and consistent styling.
                  </Typography>
                </CardContent>
              </Card>

              <Card variant="elevated">
                <CardHeader>
                  <Typography variant="h3" weight="medium">
                    ♿ Accessible
                  </Typography>
                </CardHeader>
                <CardContent>
                  <Typography variant="body">
                    Built with accessibility in mind, including keyboard navigation, ARIA attributes, and semantic HTML.
                  </Typography>
                </CardContent>
              </Card>
            </div>

            <Typography variant="title1" weight="semiBold" style={{ marginBottom: '16px' }}>
              Getting Started
            </Typography>
            
            <Typography variant="body" style={{ marginBottom: '16px' }}>
              Use the navigation above to explore different components and their variations. Each component 
              includes comprehensive examples and documentation.
            </Typography>

                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <Button variant="primary" onClick={() => setActiveSection('typography')}>
                    Explore Typography
                  </Button>
                  <Button variant="outline" onClick={() => setActiveSection('button')}>
                    View Buttons
                  </Button>
                  <Button variant="outline" onClick={() => setActiveSection('card')}>
                    See Cards
                  </Button>
                  <Button variant="outline" onClick={() => setActiveSection('badge')}>
                    View Badges
                  </Button>
                  <Button variant="outline" onClick={() => setActiveSection('tabs')}>
                    View Tabs
                  </Button>
                  <Button variant="outline" onClick={() => setActiveSection('colors')}>
                    View Colors
                  </Button>
                </div>
          </div>
        );
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: 'var(--cria-background)',
      fontFamily: 'var(--cria-font-family)'
    }}>
      {/* Navigation */}
      <nav style={{ 
        backgroundColor: 'var(--cria-background-light)', 
        borderBottom: '1px solid var(--cria-border-light)',
        padding: '0 24px',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          maxWidth: '1200px',
          margin: '0 auto',
          height: '64px'
        }}>
          <Typography variant="h3" weight="bold">
            CRIA_UI
          </Typography>
          
          <div style={{ display: 'flex', gap: '8px' }}>
            {navigationItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? 'primary' : 'ghost'}
                size="sm"
                onClick={() => setActiveSection(item.id)}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        padding: '0 24px'
      }}>
        {renderContent()}
      </main>

      {/* Footer */}
      <footer style={{ 
        backgroundColor: 'var(--cria-background-light)', 
        borderTop: '1px solid var(--cria-border-light)',
        padding: '24px',
        marginTop: '64px'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <Typography variant="bodySmall">
            Built with ❤️ for CR_IA applications
          </Typography>
        </div>
      </footer>
    </div>
  );
};

export default App;
