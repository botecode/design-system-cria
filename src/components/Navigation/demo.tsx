import React, { useState } from 'react';
import { ChartBar, Folder, CheckSquare, Users, ChatCircle, Gear, Question } from 'phosphor-react';
import { Typography } from '../Typography';
import { Button } from '../Button';
import { Card, CardHeader, CardContent } from '../Card';
import { Navigation, Sidebar, Topbar } from './Navigation';

export const NavigationDemo: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeRoute, setActiveRoute] = useState('/dashboard');

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', href: '/dashboard', icon: <ChartBar size={20} /> },
    { id: 'projects', label: 'Projects', href: '/projects', icon: <Folder size={20} /> },
    { id: 'tasks', label: 'Tasks', href: '/tasks', icon: <CheckSquare size={20} />, badge: '3' },
    { id: 'team', label: 'Team', href: '/team', icon: <Users size={20} /> },
    { id: 'messages', label: 'Messages', href: '/messages', icon: <ChatCircle size={20} />, badge: '12' },
    { id: 'settings', label: 'Settings', href: '/settings', icon: <Gear size={20} /> },
    { id: 'help', label: 'Help', href: '/help', icon: <Question size={20} /> },
  ];

  const topbarItems = [
    { id: 'home', label: 'Home', href: '/home' },
    { id: 'about', label: 'About', href: '/about' },
    { id: 'services', label: 'Services', href: '/services' },
    { id: 'portfolio', label: 'Portfolio', href: '/portfolio' },
    { id: 'contact', label: 'Contact', href: '/contact' },
  ];

  const handleRouteChange = (href: string) => {
    setActiveRoute(href);
  };

  return (
    <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
      <Typography variant="title1" weight="bold" style={{ marginBottom: '32px' }}>
        Navigation Demo
      </Typography>

      <Typography variant="body" style={{ marginBottom: '32px' }}>
        Navigation components provide consistent and accessible navigation patterns for your application.
        Includes sidebar navigation with collapse/expand functionality and topbar navigation with responsive mobile menu.
      </Typography>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '32px' }}>
        <Card variant="elevated">
          <CardHeader>
            <Typography variant="h3" weight="medium">
              Sidebar Navigation
            </Typography>
          </CardHeader>
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Button 
                variant="outline" 
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              >
                {sidebarCollapsed ? 'Expand' : 'Collapse'} Sidebar
              </Button>
              
              <div style={{ 
                border: '1px solid var(--cria-gray-200)', 
                borderRadius: 'var(--cria-radius-md)',
                overflow: 'hidden',
                height: '400px',
                position: 'relative'
              }}>
                <Sidebar
                  items={sidebarItems}
                  activeRoute={activeRoute}
                  collapsed={sidebarCollapsed}
                  onToggle={setSidebarCollapsed}
                  style={{ 
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    zIndex: 1
                  }}
                />
                <div style={{ 
                  marginLeft: sidebarCollapsed ? '64px' : '256px',
                  padding: '24px',
                  height: '100%',
                  backgroundColor: 'var(--cria-gray-50)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Typography variant="body" color="secondary">
                    Main content area
                  </Typography>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card variant="elevated">
          <CardHeader>
            <Typography variant="h3" weight="medium">
              Topbar Navigation
            </Typography>
          </CardHeader>
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Button 
                variant="outline" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? 'Close' : 'Open'} Mobile Menu
              </Button>
              
              <div style={{ 
                border: '1px solid var(--cria-gray-200)', 
                borderRadius: 'var(--cria-radius-md)',
                overflow: 'hidden'
              }}>
                <Topbar
                  items={topbarItems}
                  activeRoute={activeRoute}
                  brand="My App"
                  brandHref="/"
                  showMobileMenu={mobileMenuOpen}
                  onMobileMenuToggle={setMobileMenuOpen}
                />
                <div style={{ 
                  padding: '24px',
                  backgroundColor: 'var(--cria-gray-50)',
                  minHeight: '200px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Typography variant="body" color="secondary">
                    Page content
                  </Typography>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card variant="elevated">
          <CardHeader>
            <Typography variant="h3" weight="medium">
              Combined Navigation
            </Typography>
          </CardHeader>
          <CardContent>
            <div style={{ 
              border: '1px solid var(--cria-gray-200)', 
              borderRadius: 'var(--cria-radius-md)',
              overflow: 'hidden',
              height: '400px',
              position: 'relative'
            }}>
              <Navigation
                sidebar={{
                  items: sidebarItems.slice(0, 4), // Show fewer items for demo
                  activeRoute,
                  collapsed: sidebarCollapsed,
                  onToggle: setSidebarCollapsed
                }}
                topbar={{
                  items: topbarItems.slice(0, 3), // Show fewer items for demo
                  activeRoute,
                  brand: "CRIA_UI",
                  brandHref: "/"
                }}
                variant="both"
                style={{ 
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: 1
                }}
              />
              <div style={{ 
                marginLeft: sidebarCollapsed ? '64px' : '256px',
                marginTop: '64px',
                padding: '24px',
                height: 'calc(100% - 64px)',
                backgroundColor: 'var(--cria-gray-50)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Typography variant="body" color="secondary">
                  Application content
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card variant="elevated">
          <CardHeader>
            <Typography variant="h3" weight="medium">
              Navigation Features
            </Typography>
          </CardHeader>
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <Typography variant="h4" weight="medium" style={{ marginBottom: '8px' }}>
                  Sidebar Features
                </Typography>
                <ul style={{ margin: 0, paddingLeft: '20px' }}>
                  <li><Typography variant="body">Collapse/expand functionality</Typography></li>
                  <li><Typography variant="body">Active route highlighting</Typography></li>
                  <li><Typography variant="body">Icon and badge support</Typography></li>
                  <li><Typography variant="body">Keyboard navigation (arrow keys)</Typography></li>
                  <li><Typography variant="body">Mobile responsive</Typography></li>
                </ul>
              </div>
              
              <div>
                <Typography variant="h4" weight="medium" style={{ marginBottom: '8px' }}>
                  Topbar Features
                </Typography>
                <ul style={{ margin: 0, paddingLeft: '20px' }}>
                  <li><Typography variant="body">Responsive mobile menu</Typography></li>
                  <li><Typography variant="body">Brand/logo support</Typography></li>
                  <li><Typography variant="body">Active route highlighting</Typography></li>
                  <li><Typography variant="body">Keyboard navigation (arrow keys)</Typography></li>
                  <li><Typography variant="body">Hamburger menu on mobile</Typography></li>
                </ul>
              </div>
              
              <div>
                <Typography variant="h4" weight="medium" style={{ marginBottom: '8px' }}>
                  Accessibility
                </Typography>
                <ul style={{ margin: 0, paddingLeft: '20px' }}>
                  <li><Typography variant="body">ARIA navigation roles</Typography></li>
                  <li><Typography variant="body">Keyboard focus management</Typography></li>
                  <li><Typography variant="body">Screen reader support</Typography></li>
                  <li><Typography variant="body">Discernible link text</Typography></li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div style={{ marginTop: '32px' }}>
        <Typography variant="h3" weight="medium" style={{ marginBottom: '16px' }}>
          Current Active Route
        </Typography>
        <Typography variant="body" style={{ marginBottom: '16px' }}>
          Active route: <strong>{activeRoute}</strong>
        </Typography>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {[...sidebarItems, ...topbarItems].map((item) => (
            <Button
              key={item.id}
              variant={activeRoute === item.href ? 'primary' : 'outline'}
              size="sm"
              onClick={() => handleRouteChange(item.href)}
            >
              {item.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
