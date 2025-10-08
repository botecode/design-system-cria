import React, { useState } from 'react';
import { useTheme } from '../../contexts';
import { ThemeToggle } from '../ThemeToggle';
import { 
  Button, 
  Card, 
  Input, 
  Typography, 
  Modal,
  Backgrounds,
  Navigation
} from '../../index.js';
import { 
  CriaTextHeadline1, 
  CriaTextTitle1, 
  CriaTextBody1, 
  CriaTextBody2 
} from '../TextTokens';
import { 
  House, 
  User, 
  Gear, 
  Bell, 
  MagnifyingGlass,
  Plus,
  Check,
  X
} from 'phosphor-react';

export const DarkModeTest: React.FC = () => {
  const { theme, isDark, isLight } = useTheme();
  const [modalOpen, setModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const navigationItems = [
    {
      id: 'home',
      label: 'Home',
      href: '#',
      icon: <House size={20} />,
    },
    {
      id: 'profile',
      label: 'Profile',
      href: '#',
      icon: <User size={20} />,
    },
    {
      id: 'settings',
      label: 'Settings',
      href: '#',
      icon: <Gear size={20} />,
    },
    {
      id: 'notifications',
      label: 'Notifications',
      href: '#',
      icon: <Bell size={20} />,
      badge: '3',
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSuccess = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: 'var(--cria-bg-primary)', 
      color: 'var(--cria-text-primary)',
      transition: 'all var(--cria-transition-duration) var(--cria-transition-timing-function)'
    }}>
      {/* Header */}
      <div style={{ 
        padding: '2rem', 
        borderBottom: '1px solid var(--cria-border-primary)',
        backgroundColor: 'var(--cria-surface-primary)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <CriaTextHeadline1>Dark Mode Test Suite</CriaTextHeadline1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <CriaTextBody2>Current Theme: {theme}</CriaTextBody2>
            <ThemeToggle variant="button" showLabel />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Theme Status */}
        <Card variant="elevated" style={{ marginBottom: '2rem' }}>
          <CriaTextTitle1 style={{ marginBottom: '1rem' }}>Theme Status</CriaTextTitle1>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            <div style={{ 
              padding: '1rem', 
              backgroundColor: 'var(--cria-surface-secondary)', 
              borderRadius: 'var(--cria-radius-md)',
              textAlign: 'center'
            }}>
              <CriaTextBody1>Current Theme</CriaTextBody1>
              <CriaTextTitle1 style={{ color: 'var(--cria-primary)' }}>{theme}</CriaTextTitle1>
            </div>
            <div style={{ 
              padding: '1rem', 
              backgroundColor: 'var(--cria-surface-secondary)', 
              borderRadius: 'var(--cria-radius-md)',
              textAlign: 'center'
            }}>
              <CriaTextBody1>Is Dark Mode</CriaTextBody1>
              <CriaTextTitle1 style={{ color: isDark ? 'var(--cria-success)' : 'var(--cria-error)' }}>
                {isDark ? 'Yes' : 'No'}
              </CriaTextTitle1>
            </div>
            <div style={{ 
              padding: '1rem', 
              backgroundColor: 'var(--cria-surface-secondary)', 
              borderRadius: 'var(--cria-radius-md)',
              textAlign: 'center'
            }}>
              <CriaTextBody1>Is Light Mode</CriaTextBody1>
              <CriaTextTitle1 style={{ color: isLight ? 'var(--cria-success)' : 'var(--cria-error)' }}>
                {isLight ? 'Yes' : 'No'}
              </CriaTextTitle1>
            </div>
          </div>
        </Card>

        {/* Button Tests */}
        <Card variant="elevated" style={{ marginBottom: '2rem' }}>
          <CriaTextTitle1 style={{ marginBottom: '1rem' }}>Button Components</CriaTextTitle1>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="danger">Danger Button</Button>
            <Button variant="primary" size="sm">Small Button</Button>
            <Button variant="primary" size="lg">Large Button</Button>
            <Button variant="primary" disabled>Disabled Button</Button>
            <Button variant="primary" loading>Loading Button</Button>
          </div>
        </Card>

        {/* Input Tests */}
        <Card variant="elevated" style={{ marginBottom: '2rem' }}>
          <CriaTextTitle1 style={{ marginBottom: '1rem' }}>Input Components</CriaTextTitle1>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
            <Input
              label="Default Input"
              placeholder="Enter text here"
              value={inputValue}
              onChange={handleInputChange}
            />
            <Input
              label="Input with Icon"
              placeholder="Search..."
              leftIcon={<MagnifyingGlass size={20} />}
              value={inputValue}
              onChange={handleInputChange}
            />
            <Input
              label="Success Input"
              placeholder="Success state"
              state="success"
              successMessage="This looks good!"
              value={inputValue}
              onChange={handleInputChange}
            />
            <Input
              label="Error Input"
              placeholder="Error state"
              state="error"
              errorMessage="This field is required"
              value={inputValue}
              onChange={handleInputChange}
            />
            <Input
              label="Disabled Input"
              placeholder="Disabled input"
              disabled
              value=""
            />
            <Input
              label="Password Input"
              type="password"
              placeholder="Enter password"
              showPasswordToggle
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
        </Card>

        {/* Typography Tests */}
        <Card variant="elevated" style={{ marginBottom: '2rem' }}>
          <CriaTextTitle1 style={{ marginBottom: '1rem' }}>Typography Components</CriaTextTitle1>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Typography variant="display" color="primary">Display Text</Typography>
            <Typography variant="h1" color="primary">Heading 1</Typography>
            <Typography variant="h2" color="primary">Heading 2</Typography>
            <Typography variant="h3" color="primary">Heading 3</Typography>
            <Typography variant="body" color="content">Body text with normal color</Typography>
            <Typography variant="body" color="secondary">Secondary body text</Typography>
            <Typography variant="body" color="success">Success text</Typography>
            <Typography variant="body" color="warning">Warning text</Typography>
            <Typography variant="body" color="error">Error text</Typography>
            <Typography variant="caption" color="secondary">Caption text</Typography>
          </div>
        </Card>

        {/* Card Tests */}
        <Card variant="elevated" style={{ marginBottom: '2rem' }}>
          <CriaTextTitle1 style={{ marginBottom: '1rem' }}>Card Components</CriaTextTitle1>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            <Card variant="default">
              <CriaTextTitle1>Default Card</CriaTextTitle1>
              <CriaTextBody1>This is a default card with some content.</CriaTextBody1>
            </Card>
            <Card variant="elevated">
              <CriaTextTitle1>Elevated Card</CriaTextTitle1>
              <CriaTextBody1>This is an elevated card with shadow.</CriaTextBody1>
            </Card>
            <Card variant="outlined">
              <CriaTextTitle1>Outlined Card</CriaTextTitle1>
              <CriaTextBody1>This is an outlined card with border.</CriaTextBody1>
            </Card>
            <Card variant="filled">
              <CriaTextTitle1>Filled Card</CriaTextTitle1>
              <CriaTextBody1>This is a filled card with background.</CriaTextBody1>
            </Card>
            <Card variant="default" interactive>
              <CriaTextTitle1>Interactive Card</CriaTextTitle1>
              <CriaTextBody1>This card is interactive and clickable.</CriaTextBody1>
            </Card>
          </div>
        </Card>

        {/* Background Tests */}
        <Card variant="elevated" style={{ marginBottom: '2rem' }}>
          <CriaTextTitle1 style={{ marginBottom: '1rem' }}>Background Components</CriaTextTitle1>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            <Backgrounds variant="gradient" colorScheme="primary" size="sm">
              <div style={{ padding: '1rem', textAlign: 'center' }}>
                <CriaTextBody1 style={{ color: 'var(--cria-text-inverse)' }}>Gradient Background</CriaTextBody1>
              </div>
            </Backgrounds>
            <Backgrounds variant="pattern" patternType="dots" colorScheme="secondary" size="sm">
              <div style={{ padding: '1rem', textAlign: 'center' }}>
                <CriaTextBody1>Pattern Background</CriaTextBody1>
              </div>
            </Backgrounds>
            <Backgrounds variant="modern" modernType="radial-glow" colorScheme="primary" size="sm">
              <div style={{ padding: '1rem', textAlign: 'center' }}>
                <CriaTextBody1>Modern Background</CriaTextBody1>
              </div>
            </Backgrounds>
          </div>
        </Card>

        {/* Modal Test */}
        <Card variant="elevated" style={{ marginBottom: '2rem' }}>
          <CriaTextTitle1 style={{ marginBottom: '1rem' }}>Modal Component</CriaTextTitle1>
          <Button variant="primary" onClick={() => setModalOpen(true)}>
            Open Modal
          </Button>
          <Modal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            title="Test Modal"
            size="md"
          >
            <CriaTextBody1>
              This is a test modal to verify dark mode support. The modal should
              have proper dark mode styling for the overlay, content, and all elements.
            </CriaTextBody1>
            <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
              <Button variant="primary" onClick={() => setModalOpen(false)}>
                Close
              </Button>
              <Button variant="outline" onClick={() => setModalOpen(false)}>
                Cancel
              </Button>
            </div>
          </Modal>
        </Card>

        {/* Navigation Test */}
        <Card variant="elevated" style={{ marginBottom: '2rem' }}>
          <CriaTextTitle1 style={{ marginBottom: '1rem' }}>Navigation Component</CriaTextTitle1>
          <Navigation
            topbar={{
              items: navigationItems,
              brand: 'CRIA Design System',
              activeRoute: '#',
            }}
          />
        </Card>

        {/* Success Message */}
        {showSuccess && (
          <Card variant="elevated" style={{ 
            marginBottom: '2rem', 
            backgroundColor: 'var(--cria-success)',
            color: 'var(--cria-text-inverse)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Check size={20} />
              <CriaTextBody1>Dark mode test completed successfully!</CriaTextBody1>
            </div>
          </Card>
        )}

        {/* Test Actions */}
        <Card variant="elevated">
          <CriaTextTitle1 style={{ marginBottom: '1rem' }}>Test Actions</CriaTextTitle1>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Button variant="primary" onClick={handleSuccess}>
              <Check size={16} style={{ marginRight: '0.5rem' }} />
              Mark Test Complete
            </Button>
            <Button variant="outline" onClick={() => window.location.reload()}>
              Refresh Page
            </Button>
            <Button variant="ghost" onClick={() => {
              localStorage.removeItem('cria-theme');
              window.location.reload();
            }}>
              Reset Theme Preference
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DarkModeTest;
