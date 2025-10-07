import React, { useState } from 'react';
import { ChartBar, Folder, CheckSquare, Users, ChatCircle, Gear, Question } from 'phosphor-react';
import { CriaTextHeadline1, CriaTextHeadline2, CriaTextBody1, CriaTextBody2, CriaTextTitle1, CriaTextTitle2 } from '../TextTokens';
import { Button } from '../Button';
import { Card, CardHeader, CardContent } from '../Card';
import { Navigation, Sidebar, Topbar } from './Navigation';
import { spacing, colors, radii } from '../../tokens';

export const NavigationDemo: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeRoute, setActiveRoute] = useState('/dashboard');

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', href: '/dashboard', icon: <ChartBar size={20} /> },
    { 
      id: 'projects', 
      label: 'Projects', 
      icon: <Folder size={20} />,
      defaultExpanded: true,
      subitems: [
        { id: 'active-projects', label: 'Active Projects', href: '/projects/active', icon: <CheckSquare size={16} /> },
        { id: 'completed-projects', label: 'Completed', href: '/projects/completed', icon: <CheckSquare size={16} /> },
        { id: 'archived-projects', label: 'Archived', href: '/projects/archived', icon: <Folder size={16} /> }
      ]
    },
    { id: 'tasks', label: 'Tasks', href: '/tasks', icon: <CheckSquare size={20} />, badge: '3' },
    { 
      id: 'team', 
      label: 'Team', 
      icon: <Users size={20} />,
      subitems: [
        { id: 'team-members', label: 'Members', href: '/team/members', icon: <Users size={16} /> },
        { id: 'team-roles', label: 'Roles & Permissions', href: '/team/roles', icon: <Gear size={16} /> },
        { id: 'team-reports', label: 'Reports', href: '/team/reports', icon: <ChartBar size={16} /> }
      ]
    },
    { id: 'messages', label: 'Messages', href: '/messages', icon: <ChatCircle size={20} />, badge: '12' },
    { 
      id: 'settings', 
      label: 'Settings', 
      icon: <Gear size={20} />,
      subitems: [
        { id: 'user-settings', label: 'User Preferences', href: '/settings/user', icon: <Gear size={16} /> },
        { id: 'app-settings', label: 'Application', href: '/settings/app', icon: <Gear size={16} /> },
        { id: 'security-settings', label: 'Security', href: '/settings/security', icon: <Gear size={16} /> }
      ]
    },
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
    <div style={{ padding: spacing[6], maxWidth: '1200px', margin: '0 auto' }}>
      <CriaTextHeadline1 style={{ marginBottom: spacing[8] }}>
        Navigation Demo
      </CriaTextHeadline1>

      <CriaTextBody1 style={{ marginBottom: spacing[8] }}>
        Navigation components provide consistent and accessible navigation patterns for your application.
        Includes sidebar navigation with collapse/expand functionality, hierarchical subitems for grouping related navigation items,
        and topbar navigation with responsive mobile menu.
      </CriaTextBody1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: spacing[6], marginBottom: spacing[8] }}>
        <Card variant="elevated">
          <CardHeader>
            <CriaTextTitle1>
              Sidebar Navigation
            </CriaTextTitle1>
          </CardHeader>
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[3] }}>
              <Button 
                variant="outline" 
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              >
                {sidebarCollapsed ? 'Expand' : 'Collapse'} Sidebar
              </Button>
              
              <div style={{ 
                border: `1px solid ${colors.border.light}`, 
                borderRadius: radii.md,
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
                  padding: spacing[6],
                  height: '100%',
                  backgroundColor: colors.gray[50],
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <CriaTextBody1>
                    Main content area
                  </CriaTextBody1>
                </div>
              </div>

              {/* Themed variations */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: spacing[4] }}>
                <div style={{ 
                  border: `1px solid ${colors.border.light}`, 
                  borderRadius: radii.md,
                  overflow: 'hidden',
                  height: '300px',
                  position: 'relative'
                }}>
                  <Sidebar
                    items={sidebarItems}
                    activeRoute={activeRoute}
                    collapsed={false}
                    onToggle={() => {}}
                    theme="primary"
                    title="Primary Sidebar"
                    style={{ 
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      height: '100%',
                      zIndex: 1
                    }}
                  />
                  <div style={{ 
                    marginLeft: '256px',
                    padding: spacing[4],
                    height: '100%',
                    backgroundColor: colors.gray[50]
                  }} />
                </div>

                <div style={{ 
                  border: `1px solid ${colors.border.light}`, 
                  borderRadius: radii.md,
                  overflow: 'hidden',
                  height: '300px',
                  position: 'relative'
                }}>
                  <Sidebar
                    items={sidebarItems}
                    activeRoute={activeRoute}
                    collapsed={false}
                    onToggle={() => {}}
                    theme="secondary"
                    title="Secondary Sidebar"
                    style={{ 
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      height: '100%',
                      zIndex: 1
                    }}
                  />
                  <div style={{ 
                    marginLeft: '256px',
                    padding: spacing[4],
                    height: '100%',
                    backgroundColor: colors.gray[50]
                  }} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card variant="elevated">
          <CardHeader>
            <CriaTextTitle1>
              Topbar Navigation
            </CriaTextTitle1>
          </CardHeader>
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[3] }}>
              <Button 
                variant="outline" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? 'Close' : 'Open'} Mobile Menu
              </Button>
              
              <div style={{ 
                border: `1px solid ${colors.border.light}`, 
                borderRadius: radii.md,
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
                  padding: spacing[6],
                  backgroundColor: colors.gray[50],
                  minHeight: '200px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <CriaTextBody1>
                    Page content
                  </CriaTextBody1>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card variant="elevated">
          <CardHeader>
            <CriaTextTitle1>
              Combined Navigation
            </CriaTextTitle1>
          </CardHeader>
          <CardContent>
            <div style={{ 
              border: `1px solid ${colors.border.light}`, 
              borderRadius: radii.md,
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
                padding: spacing[6],
                height: 'calc(100% - 64px)',
                backgroundColor: colors.gray[50],
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <CriaTextBody1>
                  Application content
                </CriaTextBody1>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card variant="elevated">
          <CardHeader>
            <CriaTextTitle1>
              Navigation Features
            </CriaTextTitle1>
          </CardHeader>
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
              <div>
                <CriaTextTitle2 style={{ marginBottom: spacing[2] }}>
                  Sidebar Features
                </CriaTextTitle2>
                <ul style={{ margin: 0, paddingLeft: spacing[5] }}>
                  <li><CriaTextBody1>Collapse/expand functionality</CriaTextBody1></li>
                  <li><CriaTextBody1>Active route highlighting</CriaTextBody1></li>
                  <li><CriaTextBody1>Icon and badge support</CriaTextBody1></li>
                  <li><CriaTextBody1>Keyboard navigation (arrow keys)</CriaTextBody1></li>
                  <li><CriaTextBody1>Mobile responsive</CriaTextBody1></li>
                </ul>
              </div>
              
              <div>
                <CriaTextTitle2 style={{ marginBottom: spacing[2] }}>
                  Topbar Features
                </CriaTextTitle2>
                <ul style={{ margin: 0, paddingLeft: spacing[5] }}>
                  <li><CriaTextBody1>Responsive mobile menu</CriaTextBody1></li>
                  <li><CriaTextBody1>Brand/logo support</CriaTextBody1></li>
                  <li><CriaTextBody1>Active route highlighting</CriaTextBody1></li>
                  <li><CriaTextBody1>Keyboard navigation (arrow keys)</CriaTextBody1></li>
                  <li><CriaTextBody1>Hamburger menu on mobile</CriaTextBody1></li>
                </ul>
              </div>
              
              <div>
                <CriaTextTitle2 style={{ marginBottom: spacing[2] }}>
                  Accessibility
                </CriaTextTitle2>
                <ul style={{ margin: 0, paddingLeft: spacing[5] }}>
                  <li><CriaTextBody1>ARIA navigation roles</CriaTextBody1></li>
                  <li><CriaTextBody1>Keyboard focus management</CriaTextBody1></li>
                  <li><CriaTextBody1>Screen reader support</CriaTextBody1></li>
                  <li><CriaTextBody1>Discernible link text</CriaTextBody1></li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div style={{ marginTop: spacing[8] }}>
        <CriaTextTitle1 style={{ marginBottom: spacing[4] }}>
          Current Active Route
        </CriaTextTitle1>
        <CriaTextBody1 style={{ marginBottom: spacing[4] }}>
          Active route: <strong>{activeRoute}</strong>
        </CriaTextBody1>
        <div style={{ display: 'flex', gap: spacing[2], flexWrap: 'wrap' }}>
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
