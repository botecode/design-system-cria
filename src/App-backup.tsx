import React, { useState } from 'react';
import { Typography, Button, Card, CardHeader, CardContent } from './index';
import TypographyDemo from './components/Typography/demo';
import ButtonDemo from './components/Button/demo';
import CardDemo from './components/Card/demo';
import BadgeDemo from './components/Badge/demo';
import TabsDemo from './components/Tabs/demo';
import TooltipDemo from './components/Tooltip/demo';
import ModalDemo from './components/Modal/demo';
import InputDemo from './components/Input/demo';
import { CheckboxDemo } from './components/Checkbox/demo';
import { SwitchDemo } from './components/Switch/demo';
import { ColorsDemo } from './components/Colors/demo';
import { SimpleTest } from './simple-test';

// Import Cartograph font
import './fonts.css';

type DemoSection = 'overview' | 'typography' | 'button' | 'card' | 'badge' | 'tabs' | 'tooltip' | 'modal' | 'input' | 'checkbox' | 'switch' | 'colors';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<DemoSection>('overview');

  const navigationItems = [
    { id: 'overview' as DemoSection, label: 'Overview' },
    { id: 'typography' as DemoSection, label: 'Typography' },
    { id: 'button' as DemoSection, label: 'Button' },
    { id: 'card' as DemoSection, label: 'Card' },
    { id: 'badge' as DemoSection, label: 'Badge' },
    { id: 'tabs' as DemoSection, label: 'Tabs' },
    { id: 'tooltip' as DemoSection, label: 'Tooltip' },
    { id: 'modal' as DemoSection, label: 'Modal' },
    { id: 'input' as DemoSection, label: 'Input' },
    { id: 'checkbox' as DemoSection, label: 'Checkbox' },
    { id: 'switch' as DemoSection, label: 'Switch' },
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
      case 'tooltip':
        return <TooltipDemo />;
      case 'modal':
        return <ModalDemo />;
      case 'input':
        return <InputDemo />;
      case 'checkbox':
        return <CheckboxDemo />;
      case 'switch':
        return <SwitchDemo />;
      case 'colors':
        return <ColorsDemo />;
      default:
        return <SimpleTest />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--cria-background)' }}>
      {/* Navigation */}
      <nav style={{ 
        backgroundColor: 'var(--cria-white)', 
        borderBottom: '1px solid var(--cria-gray-200)',
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
          <Typography variant="h3" weight="bold" color="primary">
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
      <main>
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
