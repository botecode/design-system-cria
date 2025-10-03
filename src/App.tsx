import React, { useState } from 'react';
import { Typography, Button, Navigation } from './index';
import { House, TextAa, Palette, Mouse, PencilSimple, CheckSquare, ToggleLeft, Bell, ChatCircle, Info, Square, Tag, Tabs, List } from 'phosphor-react';
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
import { NavigationDemo } from './components/Navigation/demo';
import { ColorsDemo } from './components/Colors/demo';

// Import Cartograph font
import './fonts.css';

type DemoSection = 'overview' | 'typography' | 'colors' | 'button' | 'input' | 'checkbox' | 'switch' | 'snackbar' | 'modal' | 'tooltip' | 'card' | 'badge' | 'tabs' | 'navigation';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<DemoSection>('overview');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Check if we're on mobile
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const sidebarItems = [
    { id: 'overview', label: 'Overview', href: '#overview', icon: <House size={20} /> },
    { id: 'typography', label: 'Typography', href: '#typography', icon: <TextAa size={20} /> },
    { id: 'colors', label: 'Colors', href: '#colors', icon: <Palette size={20} /> },
    { id: 'button', label: 'Button', href: '#button', icon: <Mouse size={20} /> },
    { id: 'input', label: 'Input', href: '#input', icon: <PencilSimple size={20} /> },
    { id: 'checkbox', label: 'Checkbox', href: '#checkbox', icon: <CheckSquare size={20} /> },
    { id: 'switch', label: 'Switch', href: '#switch', icon: <ToggleLeft size={20} /> },
    { id: 'snackbar', label: 'Snackbar', href: '#snackbar', icon: <Bell size={20} /> },
    { id: 'modal', label: 'Modal', href: '#modal', icon: <ChatCircle size={20} /> },
    { id: 'tooltip', label: 'Tooltip', href: '#tooltip', icon: <Info size={20} /> },
    { id: 'card', label: 'Card', href: '#card', icon: <Square size={20} /> },
    { id: 'badge', label: 'Badge', href: '#badge', icon: <Tag size={20} /> },
    { id: 'tabs', label: 'Tabs', href: '#tabs', icon: <Tabs size={20} /> },
    { id: 'navigation', label: 'Navigation', href: '#navigation', icon: <List size={20} /> }
  ];

  const handleSectionChange = (section: DemoSection) => {
    setActiveSection(section);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div style={{ padding: '0' }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <Typography variant="title1" weight="bold" style={{ marginBottom: '16px' }}>
                Welcome to CRIA_UI
              </Typography>
              <Typography variant="body" style={{ marginBottom: '0', maxWidth: '600px', margin: '0 auto 32px auto' }}>
                A comprehensive React + TypeScript design system built specifically for CR_IA applications.
                This system provides consistent, accessible, and beautiful components that can be easily
                integrated into your Rails frontend.
              </Typography>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              <div style={{ padding: '20px', backgroundColor: 'var(--cria-white)', borderRadius: 'var(--cria-radius-md)', border: '1px solid var(--cria-gray-200)' }}>
                <Typography variant="h3" weight="medium" style={{ marginBottom: '8px' }}>
                  🎨 Foundation
                </Typography>
                <Typography variant="body" style={{ marginBottom: '12px', fontSize: '14px' }}>
                  Core design elements including typography, colors, and basic components.
                </Typography>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  <Button variant="outline" size="sm" onClick={() => setActiveSection('typography')}>
                    Typography
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => setActiveSection('colors')}>
                    Colors
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => setActiveSection('button')}>
                    Button
                  </Button>
                </div>
              </div>

              <div style={{ padding: '20px', backgroundColor: 'var(--cria-white)', borderRadius: 'var(--cria-radius-md)', border: '1px solid var(--cria-gray-200)' }}>
                <Typography variant="h3" weight="medium" style={{ marginBottom: '8px' }}>
                  📝 Form Controls
                </Typography>
                <Typography variant="body" style={{ marginBottom: '12px', fontSize: '14px' }}>
                  Interactive form elements for user input and data collection.
                </Typography>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  <Button variant="outline" size="sm" onClick={() => setActiveSection('input')}>
                    Input
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => setActiveSection('checkbox')}>
                    Checkbox
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => setActiveSection('switch')}>
                    Switch
                  </Button>
                </div>
              </div>

              <div style={{ padding: '20px', backgroundColor: 'var(--cria-white)', borderRadius: 'var(--cria-radius-md)', border: '1px solid var(--cria-gray-200)' }}>
                <Typography variant="h3" weight="medium" style={{ marginBottom: '8px' }}>
                  💬 Feedback
                </Typography>
                <Typography variant="body" style={{ marginBottom: '12px', fontSize: '14px' }}>
                  Components for providing feedback, notifications, and user guidance.
                </Typography>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  <Button variant="outline" size="sm" onClick={() => setActiveSection('snackbar')}>
                    Snackbar
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => setActiveSection('modal')}>
                    Modal
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => setActiveSection('tooltip')}>
                    Tooltip
                  </Button>
                </div>
              </div>

              <div style={{ padding: '20px', backgroundColor: 'var(--cria-white)', borderRadius: 'var(--cria-radius-md)', border: '1px solid var(--cria-gray-200)' }}>
                <Typography variant="h3" weight="medium" style={{ marginBottom: '8px' }}>
                  📐 Layout
                </Typography>
                <Typography variant="body" style={{ marginBottom: '12px', fontSize: '14px' }}>
                  Structural components for organizing and presenting content.
                </Typography>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  <Button variant="outline" size="sm" onClick={() => setActiveSection('card')}>
                    Card
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => setActiveSection('badge')}>
                    Badge
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => setActiveSection('tabs')}>
                    Tabs
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );
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
      case 'navigation':
        return <NavigationDemo />;
      default:
        return <TypographyDemo />;
    }
  };

      return (
        <div style={{ minHeight: '100vh', backgroundColor: 'var(--cria-background)', position: 'relative' }}>
          {/* Mobile Toggle Button */}
          {isMobile && (
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                position: 'fixed',
                top: '16px',
                left: '16px',
                zIndex: 1001,
                background: 'var(--cria-white)',
                border: '1px solid var(--cria-gray-200)',
                borderRadius: 'var(--cria-radius-sm)',
                padding: '8px',
                cursor: 'pointer',
                boxShadow: 'var(--cria-shadow-sm)'
              }}
              aria-label="Toggle menu"
            >
              <List size={20} />
            </button>
          )}

          <Navigation
            sidebar={{
              items: sidebarItems.map(item => ({
                ...item,
                onClick: (e) => {
                  e.preventDefault();
                  handleSectionChange(item.id as DemoSection);
                  if (isMobile) {
                    setMobileMenuOpen(false);
                  }
                }
              })),
              activeRoute: `#${activeSection}`,
              collapsed: isMobile ? !mobileMenuOpen : sidebarCollapsed,
              onToggle: isMobile ? setMobileMenuOpen : setSidebarCollapsed,
              showToggle: !isMobile
            }}
            variant="sidebar-only"
            style={{ height: '100vh' }}
          />
          
          {/* Main Content */}
          <main style={{ 
            position: 'fixed',
            top: '0',
            left: isMobile ? '0' : (sidebarCollapsed ? '64px' : '256px'),
            right: '0',
            height: '100vh',
            overflowY: 'auto',
            transition: 'left 0.3s ease',
            padding: '16px',
            paddingTop: isMobile ? '60px' : '16px',
            boxSizing: 'border-box',
            zIndex: 1
          }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              {renderContent()}
            </div>
          </main>
        </div>
      );
};

export default App;
