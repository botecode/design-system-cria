import React, { useState } from 'react';
import { Typography, Button, Tabs } from './index';
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
import { SnackbarDemo } from './components/Snackbar/demo';
import { ColorsDemo } from './components/Colors/demo';

// Import Cartograph font
import './fonts.css';

type DemoCategory = 'overview' | 'foundation' | 'form-controls' | 'feedback' | 'layout';
type DemoSection = 'typography' | 'colors' | 'button' | 'input' | 'checkbox' | 'switch' | 'snackbar' | 'modal' | 'tooltip' | 'card' | 'badge' | 'tabs';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<DemoCategory>('overview');
  const [activeSection, setActiveSection] = useState<DemoSection>('typography');

  const componentCategories = {
    overview: {
      label: 'Overview',
      components: []
    },
    foundation: {
      label: 'Foundation',
      components: [
        { id: 'typography' as DemoSection, label: 'Typography' },
        { id: 'colors' as DemoSection, label: 'Colors' },
        { id: 'button' as DemoSection, label: 'Button' }
      ]
    },
    'form-controls': {
      label: 'Form Controls',
      components: [
        { id: 'input' as DemoSection, label: 'Input' },
        { id: 'checkbox' as DemoSection, label: 'Checkbox' },
        { id: 'switch' as DemoSection, label: 'Switch' }
      ]
    },
    feedback: {
      label: 'Feedback',
      components: [
        { id: 'snackbar' as DemoSection, label: 'Snackbar' },
        { id: 'modal' as DemoSection, label: 'Modal' },
        { id: 'tooltip' as DemoSection, label: 'Tooltip' }
      ]
    },
    layout: {
      label: 'Layout',
      components: [
        { id: 'card' as DemoSection, label: 'Card' },
        { id: 'badge' as DemoSection, label: 'Badge' },
        { id: 'tabs' as DemoSection, label: 'Tabs' }
      ]
    }
  };

  const renderContent = () => {
    if (activeCategory === 'overview') {
      return (
        <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
          <Typography variant="title1" weight="bold" style={{ marginBottom: '32px' }}>
            Welcome to CRIA_UI
          </Typography>
          <Typography variant="body" style={{ marginBottom: '32px' }}>
            A comprehensive React + TypeScript design system built specifically for CR_IA applications.
            This system provides consistent, accessible, and beautiful components that can be easily
            integrated into your Rails frontend.
          </Typography>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '32px' }}>
            <div style={{ padding: '24px', backgroundColor: 'var(--cria-white)', borderRadius: 'var(--cria-radius-md)', border: '1px solid var(--cria-gray-200)' }}>
              <Typography variant="h3" weight="medium" style={{ marginBottom: '12px' }}>
                🎨 Foundation
              </Typography>
              <Typography variant="body" style={{ marginBottom: '16px' }}>
                Core design elements including typography, colors, and basic components.
              </Typography>
              <Button variant="outline" onClick={() => setActiveCategory('foundation')}>
                Explore Foundation
              </Button>
            </div>

            <div style={{ padding: '24px', backgroundColor: 'var(--cria-white)', borderRadius: 'var(--cria-radius-md)', border: '1px solid var(--cria-gray-200)' }}>
              <Typography variant="h3" weight="medium" style={{ marginBottom: '12px' }}>
                📝 Form Controls
              </Typography>
              <Typography variant="body" style={{ marginBottom: '16px' }}>
                Interactive form elements for user input and data collection.
              </Typography>
              <Button variant="outline" onClick={() => setActiveCategory('form-controls')}>
                Explore Form Controls
              </Button>
            </div>

            <div style={{ padding: '24px', backgroundColor: 'var(--cria-white)', borderRadius: 'var(--cria-radius-md)', border: '1px solid var(--cria-gray-200)' }}>
              <Typography variant="h3" weight="medium" style={{ marginBottom: '12px' }}>
                💬 Feedback
              </Typography>
              <Typography variant="body" style={{ marginBottom: '16px' }}>
                Components for providing feedback, notifications, and user guidance.
              </Typography>
              <Button variant="outline" onClick={() => setActiveCategory('feedback')}>
                Explore Feedback
              </Button>
            </div>

            <div style={{ padding: '24px', backgroundColor: 'var(--cria-white)', borderRadius: 'var(--cria-radius-md)', border: '1px solid var(--cria-gray-200)' }}>
              <Typography variant="h3" weight="medium" style={{ marginBottom: '12px' }}>
                📐 Layout
              </Typography>
              <Typography variant="body" style={{ marginBottom: '16px' }}>
                Structural components for organizing and presenting content.
              </Typography>
              <Button variant="outline" onClick={() => setActiveCategory('layout')}>
                Explore Layout
              </Button>
            </div>
          </div>
        </div>
      );
    }

    switch (activeSection) {
      case 'typography':
        return <TypographyDemo />;
      case 'colors':
        return <ColorsDemo />;
      case 'button':
        return <ButtonDemo />;
      case 'input':
        return <InputDemo />;
      case 'checkbox':
        return <CheckboxDemo />;
      case 'switch':
        return <SwitchDemo />;
      case 'snackbar':
        return <SnackbarDemo />;
      case 'modal':
        return <ModalDemo />;
      case 'tooltip':
        return <TooltipDemo />;
      case 'card':
        return <CardDemo />;
      case 'badge':
        return <BadgeDemo />;
      case 'tabs':
        return <TabsDemo />;
      default:
        return <TypographyDemo />;
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
            <Button
              variant={activeCategory === 'overview' ? 'primary' : 'ghost'}
              size="sm"
              onClick={() => setActiveCategory('overview')}
            >
              Overview
            </Button>
            {Object.entries(componentCategories).filter(([key]) => key !== 'overview').map(([key, category]) => (
              <Button
                key={key}
                variant={activeCategory === key ? 'primary' : 'ghost'}
                size="sm"
                onClick={() => {
                  setActiveCategory(key as DemoCategory);
                  if (category.components.length > 0) {
                    setActiveSection(category.components[0].id);
                  }
                }}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </nav>

      {/* Category Navigation */}
      {activeCategory !== 'overview' && (
        <div style={{
          backgroundColor: 'var(--cria-white)',
          borderBottom: '1px solid var(--cria-gray-200)',
          padding: '0 24px'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '16px 0'
          }}>
            <Tabs
              items={componentCategories[activeCategory].components.map((component) => ({
                id: component.id,
                label: component.label,
                content: null // Content is handled by renderContent()
              }))}
              activeTab={activeSection}
              onChange={(tabId) => setActiveSection(tabId as DemoSection)}
              variant="underline"
            />
          </div>
        </div>
      )}

      {/* Main Content */}
      <main>
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
