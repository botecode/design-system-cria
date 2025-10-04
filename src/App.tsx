import React, { useState } from 'react';
import { Typography, Button, Navigation } from './index.ts';
import { House, TextAa, Palette, Mouse, PencilSimple, CheckSquare, ToggleLeft, Bell, ChatCircle, Info, Square, Tag, Tabs, List, CaretDown, Article, Layout, User } from 'phosphor-react';
import TypographyDemo from './components/Typography/demo';
import ButtonDemo from './components/Button/demo';
import CardDemo from './components/Card/demo';
import BadgeDemo from './components/Badge/demo';
import TabsDemo from './components/Tabs/demo';
import TooltipDemo from './components/Tooltip/demo';
import ModalDemo from './components/Modal/demo';
import InputDemo from './components/Input/demo';
import { TextareaDemo } from './components/Textarea/demo';
import { AvatarDemo } from './components/Avatar/demo';
import { CheckboxDemo } from './components/Checkbox/demo';
import { SwitchDemo } from './components/Switch/demo';
import { SnackbarDemo } from './components/Snackbar/demo';
import { NavigationDemo } from './components/Navigation/demo';
import { ColorsDemo } from './components/Colors/demo';
import { AccordionDemo } from './components/Accordion/demo';
import { TextDemo } from './components/Text/demo';
import { DropdownDemo } from './components/Dropdown/demo';
import { RadioGroupDemo } from './components/RadioGroup/demo';

// Import Cartograph font
import './fonts.css';

type DemoSection = 'overview' | 'typography' | 'colors' | 'button' | 'input' | 'textarea' | 'avatar' | 'checkbox' | 'switch' | 'snackbar' | 'modal' | 'tooltip' | 'card' | 'badge' | 'tabs' | 'navigation' | 'accordion' | 'text' | 'dropdown' | 'radio-group';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<DemoSection>('overview');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Initialize active section from URL hash
  React.useEffect(() => {
    const hash = window.location.hash.slice(1); // Remove the # symbol
    const validSections: DemoSection[] = ['overview', 'typography', 'colors', 'button', 'input', 'textarea', 'avatar', 'checkbox', 'switch', 'snackbar', 'modal', 'tooltip', 'card', 'badge', 'tabs', 'navigation', 'accordion', 'text', 'dropdown', 'radio-group'];
    
    if (hash && validSections.includes(hash as DemoSection)) {
      setActiveSection(hash as DemoSection);
    }
  }, []);

  // Listen for hash changes (back/forward navigation)
  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      const validSections: DemoSection[] = ['overview', 'typography', 'colors', 'button', 'input', 'textarea', 'avatar', 'checkbox', 'switch', 'snackbar', 'modal', 'tooltip', 'card', 'badge', 'tabs', 'navigation', 'accordion', 'text', 'dropdown', 'radio-group'];
      
      if (hash && validSections.includes(hash as DemoSection)) {
        setActiveSection(hash as DemoSection);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

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
    { 
      id: 'foundations', 
      label: 'Foundations', 
      icon: <Palette size={20} />,
      defaultExpanded: true,
      subitems: [
        { id: 'typography', label: 'Typography', href: '#typography', icon: <TextAa size={20} /> },
        { id: 'colors', label: 'Colors', href: '#colors', icon: <Palette size={20} /> }
      ]
    },
    { 
      id: 'components', 
      label: 'Components', 
      icon: <Square size={20} />,
      defaultExpanded: true,
      subitems: [
        { id: 'button', label: 'Button', href: '#button', icon: <Mouse size={20} /> },
        { id: 'input', label: 'Input', href: '#input', icon: <PencilSimple size={20} /> },
        { id: 'textarea', label: 'Textarea', href: '#textarea', icon: <TextAa size={20} /> },
        { id: 'avatar', label: 'Avatar', href: '#avatar', icon: <User size={20} /> },
        { id: 'checkbox', label: 'Checkbox', href: '#checkbox', icon: <CheckSquare size={20} /> },
        { id: 'switch', label: 'Switch', href: '#switch', icon: <ToggleLeft size={20} /> },
        { id: 'radio-group', label: 'Radio Group', href: '#radio-group', icon: <CheckSquare size={20} /> },
        { id: 'dropdown', label: 'Dropdown', href: '#dropdown', icon: <CaretDown size={20} /> }
      ]
    },
    { 
      id: 'layout', 
      label: 'Layout', 
      icon: <Layout size={20} />,
      subitems: [
        { id: 'card', label: 'Card', href: '#card', icon: <Square size={20} /> },
        { id: 'tabs', label: 'Tabs', href: '#tabs', icon: <Tabs size={20} /> },
        { id: 'accordion', label: 'Accordion', href: '#accordion', icon: <CaretDown size={20} /> },
        { id: 'navigation', label: 'Navigation', href: '#navigation', icon: <List size={20} /> }
      ]
    },
    { 
      id: 'feedback', 
      label: 'Feedback', 
      icon: <Bell size={20} />,
      subitems: [
        { id: 'snackbar', label: 'Snackbar', href: '#snackbar', icon: <Bell size={20} /> },
        { id: 'modal', label: 'Modal', href: '#modal', icon: <ChatCircle size={20} /> },
        { id: 'tooltip', label: 'Tooltip', href: '#tooltip', icon: <Info size={20} /> },
        { id: 'badge', label: 'Badge', href: '#badge', icon: <Tag size={20} /> }
      ]
    },
    { id: 'text', label: 'Text', href: '#text', icon: <Article size={20} /> }
  ];

  const handleSectionChange = (section: DemoSection) => {
    setActiveSection(section);
    // Update the URL hash without triggering a page reload
    window.history.pushState(null, '', `#${section}`);
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
                  <Button variant="outline" size="sm" onClick={() => setActiveSection('accordion')}>
                    Accordion
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => setActiveSection('text')}>
                    Text
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => setActiveSection('dropdown')}>
                    Dropdown
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
      case 'textarea':
        return <TextareaDemo />;
      case 'avatar':
        return <AvatarDemo />;
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
      case 'accordion':
        return <AccordionDemo />;
        case 'text':
          return <TextDemo />;
      case 'dropdown':
        return <DropdownDemo />;
      case 'radio-group':
        return <RadioGroupDemo />;
      default:
        return <TypographyDemo />;
    }
  };

      return (
        <div style={{ minHeight: '100vh', backgroundColor: 'var(--cria-background)', position: 'relative' }}>
          {/* Mobile Toggle Button */}
          {isMobile && (
            <button
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                if (!mobileMenuOpen) {
                  handleSectionChange('overview');
                }
              }}
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
              title: 'CRIA.lab',
              titleHref: '#overview',
              items: sidebarItems.map(item => ({
                ...item,
                onClick: item.subitems ? undefined : (e) => {
                  e.preventDefault();
                  handleSectionChange(item.id as DemoSection);
                  if (isMobile) {
                    setMobileMenuOpen(false);
                  }
                },
                subitems: item.subitems?.map(subitem => ({
                  ...subitem,
                  onClick: (e) => {
                    e.preventDefault();
                    handleSectionChange(subitem.id as DemoSection);
                    if (isMobile) {
                      setMobileMenuOpen(false);
                    }
                  }
                }))
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
