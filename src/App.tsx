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
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
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

              <div style={{ padding: '24px', backgroundColor: 'var(--cria-white)', borderRadius: 'var(--cria-radius-md)', border: '1px solid var(--cria-gray-200)' }}>
                <Typography variant="h3" weight="medium" style={{ marginBottom: '12px' }}>
                  📝 Form Controls
                </Typography>
                <Typography variant="body" style={{ marginBottom: '16px' }}>
                  Interactive form elements for user input and data collection.
                </Typography>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
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

              <div style={{ padding: '24px', backgroundColor: 'var(--cria-white)', borderRadius: 'var(--cria-radius-md)', border: '1px solid var(--cria-gray-200)' }}>
                <Typography variant="h3" weight="medium" style={{ marginBottom: '12px' }}>
                  💬 Feedback
                </Typography>
                <Typography variant="body" style={{ marginBottom: '16px' }}>
                  Components for providing feedback, notifications, and user guidance.
                </Typography>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
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

              <div style={{ padding: '24px', backgroundColor: 'var(--cria-white)', borderRadius: 'var(--cria-radius-md)', border: '1px solid var(--cria-gray-200)' }}>
                <Typography variant="h3" weight="medium" style={{ marginBottom: '12px' }}>
                  📐 Layout
                </Typography>
                <Typography variant="body" style={{ marginBottom: '16px' }}>
                  Structural components for organizing and presenting content.
                </Typography>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
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
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--cria-background)' }}>
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
        marginLeft: isMobile ? '0' : (sidebarCollapsed ? '64px' : '256px'),
        minHeight: '100vh',
        transition: 'margin-left 0.3s ease',
        padding: '24px',
        paddingTop: isMobile ? '60px' : '24px'
      }}>
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
