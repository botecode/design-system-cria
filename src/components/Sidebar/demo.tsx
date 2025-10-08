import React, { useState } from 'react';
import { CriaTextHeadline1, CriaTextHeadline2, CriaTextTitle1, CriaTextTitle2, CriaTextBody1, CriaTextBody2 } from '../TextTokens';
import { Button } from '../Button';
import { Card, CardHeader, CardContent } from '../Card';
import Badge from '../Badge';
import Sidebar from './Sidebar';
import { 
  House, 
  User, 
  ChatCircle, 
  Bell, 
  Gear, 
  FileText, 
  BarChart3, 
  Users,
  Mail,
  Calendar,
  Folder,
  ChevronRight
} from 'phosphor-react';

export const SidebarDemo: React.FC = () => {
  const [activeItem, setActiveItem] = useState('dashboard');
  const [collapsed, setCollapsed] = useState(false);

  const basicItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: <House size={20} />,
      content: (
        <div style={{ padding: '24px' }}>
          <div style={{ marginBottom: '16px' }}>
            <CriaTextTitle2>
              Dashboard
            </CriaTextTitle2>
          </div>
          <div style={{ marginBottom: '16px' }}>
            <CriaTextBody1>
              Welcome to your dashboard. Here you can see an overview of your activities and key metrics.
            </CriaTextBody1>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            <Card variant="elevated">
              <CardContent>
                <CriaTextTitle2>Total Users</CriaTextTitle2>
                <div style={{ color: 'var(--cria-primary)' }}>
                  <CriaTextHeadline2>1,234</CriaTextHeadline2>
                </div>
              </CardContent>
            </Card>
            <Card variant="elevated">
              <CardContent>
                <CriaTextTitle2>Revenue</CriaTextTitle2>
                <div style={{ color: 'var(--cria-success)' }}>
                  <CriaTextHeadline2>$12,345</CriaTextHeadline2>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: 'users',
      label: 'Users',
      icon: <Users size={20} />,
      content: (
        <div style={{ padding: '24px' }}>
          <div style={{ marginBottom: '16px' }}>
            <CriaTextTitle2>
              User Management
            </CriaTextTitle2>
          </div>
          <div style={{ marginBottom: '16px' }}>
            <CriaTextBody1>
              Manage your users, roles, and permissions from this section.
            </CriaTextBody1>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <Button variant="primary">Add User</Button>
            <Button variant="outline">Export Users</Button>
          </div>
        </div>
      ),
    },
    {
      id: 'analytics',
      label: 'Analytics',
      icon: <BarChart3 size={20} />,
      content: (
        <div style={{ padding: '24px' }}>
          <div style={{ marginBottom: '16px' }}>
            <CriaTextTitle2>
              Analytics
            </CriaTextTitle2>
          </div>
          <div style={{ marginBottom: '16px' }}>
            <CriaTextBody1>
              View detailed analytics and reports about your application usage.
            </CriaTextBody1>
          </div>
          <Card variant="elevated">
            <CardHeader>
              <CriaTextTitle2>Usage Statistics</CriaTextTitle2>
            </CardHeader>
            <CardContent>
              <CriaTextBody1>
                Chart and metrics would be displayed here in a real application.
              </CriaTextBody1>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: <Gear size={20} />,
      content: (
        <div style={{ padding: '24px' }}>
          <div style={{ marginBottom: '16px' }}>
            <CriaTextTitle2>
              Settings
            </CriaTextTitle2>
          </div>
          <div style={{ marginBottom: '16px' }}>
            <CriaTextBody1>
              Configure your application settings and preferences.
            </CriaTextBody1>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <Button variant="primary">Save Changes</Button>
            <Button variant="outline">Reset to Defaults</Button>
          </div>
        </div>
      ),
    },
  ];

  const itemsWithBadges = [
    {
      id: 'home',
      label: 'Home',
      icon: <House size={20} />,
      content: (
        <div style={{ padding: '24px' }}>
          <CriaTextTitle2>Home Dashboard</CriaTextTitle2>
          <CriaTextBody1>Welcome to your home dashboard.</CriaTextBody1>
        </div>
      ),
    },
    {
      id: 'messages',
      label: 'Messages',
      icon: <ChatCircle size={20} />,
      badge: <Badge variant="error" badgeStyle="solid" size="sm">3</Badge>,
      content: (
        <div style={{ padding: '24px' }}>
          <CriaTextTitle2>Messages</CriaTextTitle2>
          <CriaTextBody1>You have 3 unread messages.</CriaTextBody1>
        </div>
      ),
    },
    {
      id: 'notifications',
      label: 'Notifications',
      icon: <Bell size={20} />,
      badge: <Badge variant="warning" badgeStyle="solid" size="sm">1</Badge>,
      content: (
        <div style={{ padding: '24px' }}>
          <CriaTextTitle2>Notifications</CriaTextTitle2>
          <CriaTextBody1>You have 1 important notification.</CriaTextBody1>
        </div>
      ),
    },
    {
      id: 'mail',
      label: 'Mail',
      icon: <Mail size={20} />,
      badge: <Badge variant="info" badgeStyle="outline" size="sm">12</Badge>,
      content: (
        <div style={{ padding: '24px' }}>
          <CriaTextTitle2>Mail</CriaTextTitle2>
          <CriaTextBody1>You have 12 new emails.</CriaTextBody1>
        </div>
      ),
    },
  ];

  const itemsWithNested = [
    {
      id: 'dashboard-nested',
      label: 'Dashboard',
      icon: <House size={20} />,
      content: (
        <div style={{ padding: '24px' }}>
          <CriaTextTitle2>Dashboard</CriaTextTitle2>
          <CriaTextBody1>Main dashboard content.</CriaTextBody1>
        </div>
      ),
    },
    {
      id: 'content',
      label: 'Content',
      icon: <FileText size={20} />,
      expanded: true,
      children: [
        {
          id: 'posts',
          label: 'Posts',
          icon: <FileText size={16} />,
          content: (
            <div style={{ padding: '24px' }}>
              <CriaTextTitle2>Posts</CriaTextTitle2>
              <CriaTextBody1>Manage your blog posts and articles.</CriaTextBody1>
            </div>
          ),
        },
        {
          id: 'pages',
          label: 'Pages',
          icon: <FileText size={16} />,
          content: (
            <div style={{ padding: '24px' }}>
              <CriaTextTitle2>Pages</CriaTextTitle2>
              <CriaTextBody1>Manage your static pages.</CriaTextBody1>
            </div>
          ),
        },
        {
          id: 'media',
          label: 'Media',
          icon: <Folder size={16} />,
          content: (
            <div style={{ padding: '24px' }}>
              <CriaTextTitle2>Media Library</CriaTextTitle2>
              <CriaTextBody1>Upload and manage your media files.</CriaTextBody1>
            </div>
          ),
        },
      ],
    },
    {
      id: 'tools',
      label: 'Tools',
      icon: <Gear size={20} />,
      expanded: false,
      children: [
        {
          id: 'calendar',
          label: 'Calendar',
          icon: <Calendar size={16} />,
          content: (
            <div style={{ padding: '24px' }}>
              <CriaTextTitle2>Calendar</CriaTextTitle2>
              <CriaTextBody1>Schedule and manage your events.</CriaTextBody1>
            </div>
          ),
        },
        {
          id: 'reports',
          label: 'Reports',
          icon: <BarChart3 size={16} />,
          content: (
            <div style={{ padding: '24px' }}>
              <CriaTextTitle2>Reports</CriaTextTitle2>
              <CriaTextBody1>Generate and view reports.</CriaTextBody1>
            </div>
          ),
        },
      ],
    },
  ];

  const itemsWithDisabled = [
    {
      id: 'enabled1',
      label: 'Enabled Item 1',
      icon: <House size={20} />,
      content: (
        <div style={{ padding: '24px' }}>
          <CriaTextTitle2>Enabled Item 1</CriaTextTitle2>
          <CriaTextBody1>This item is enabled and functional.</CriaTextBody1>
        </div>
      ),
    },
    {
      id: 'disabled1',
      label: 'Disabled Item',
      icon: <User size={20} />,
      disabled: true,
      content: (
        <div style={{ padding: '24px' }}>
          <CriaTextTitle2>Disabled Item</CriaTextTitle2>
          <CriaTextBody1>This content won't be shown because the item is disabled.</CriaTextBody1>
        </div>
      ),
    },
    {
      id: 'enabled2',
      label: 'Enabled Item 2',
      icon: <Gear size={20} />,
      content: (
        <div style={{ padding: '24px' }}>
          <CriaTextTitle2>Enabled Item 2</CriaTextTitle2>
          <CriaTextBody1>This item is also enabled and functional.</CriaTextBody1>
        </div>
      ),
    },
  ];

  return (
    <div style={{ padding: '24px', maxWidth: '1200px' }}>
      <div style={{ marginBottom: '32px' }}>
        <CriaTextHeadline1>
          Sidebar Demo
        </CriaTextHeadline1>
      </div>

      {/* Basic Sidebar */}
      <section style={{ marginBottom: '48px' }}>
        <div style={{ marginBottom: '16px' }}>
          <CriaTextHeadline2>
            Basic Sidebar
          </CriaTextHeadline2>
        </div>
        <div style={{ marginBottom: '24px' }}>
          <CriaTextBody1>
            Simple sidebar navigation with icons and content display. Use keyboard navigation (arrow keys, Home, End) for accessibility.
          </CriaTextBody1>
        </div>
        <div style={{ display: 'flex', gap: '24px', minHeight: '400px' }}>
          <div style={{ flex: '0 0 250px' }}>
            <Sidebar items={basicItems} />
          </div>
          <div style={{ flex: 1 }}>
            <CriaTextBody1>
              The sidebar provides a clean navigation interface with icons and content display.
              Click on different items to see the content change.
            </CriaTextBody1>
          </div>
        </div>
      </section>

      {/* Controlled Sidebar */}
      <section style={{ marginBottom: '48px' }}>
        <div style={{ marginBottom: '16px' }}>
          <CriaTextHeadline2>
            Controlled Sidebar
          </CriaTextHeadline2>
        </div>
        <div style={{ marginBottom: '16px' }}>
          <CriaTextBody1>
            Sidebar can be controlled externally. Current active item: <strong>{activeItem}</strong>
          </CriaTextBody1>
        </div>
        <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
          <Button 
            variant="outline" 
            onClick={() => setActiveItem('dashboard')}
            disabled={activeItem === 'dashboard'}
          >
            Go to Dashboard
          </Button>
          <Button 
            variant="outline" 
            onClick={() => setActiveItem('users')}
            disabled={activeItem === 'users'}
          >
            Go to Users
          </Button>
          <Button 
            variant="outline" 
            onClick={() => setActiveItem('analytics')}
            disabled={activeItem === 'analytics'}
          >
            Go to Analytics
          </Button>
        </div>
        <div style={{ display: 'flex', gap: '24px', minHeight: '400px' }}>
          <div style={{ flex: '0 0 250px' }}>
            <Sidebar 
              items={basicItems} 
              activeItem={activeItem}
              onChange={setActiveItem}
            />
          </div>
          <div style={{ flex: 1 }}>
            <CriaTextBody1>
              The sidebar state is controlled by the parent component. You can programmatically change the active item.
            </CriaTextBody1>
          </div>
        </div>
      </section>

      {/* Sidebar with Badges */}
      <section style={{ marginBottom: '48px' }}>
        <div style={{ marginBottom: '16px' }}>
          <CriaTextHeadline2>
            Sidebar with Badges
          </CriaTextHeadline2>
        </div>
        <div style={{ marginBottom: '24px' }}>
          <CriaTextBody1>
            Sidebar items can include badges to show notifications, counts, or status indicators.
          </CriaTextBody1>
        </div>
        <div style={{ display: 'flex', gap: '24px', minHeight: '400px' }}>
          <div style={{ flex: '0 0 250px' }}>
            <Sidebar items={itemsWithBadges} />
          </div>
          <div style={{ flex: 1 }}>
            <CriaTextBody1>
              Badges provide visual indicators for unread messages, notifications, or other important information.
            </CriaTextBody1>
          </div>
        </div>
      </section>

      {/* Sidebar with Nested Items */}
      <section style={{ marginBottom: '48px' }}>
        <div style={{ marginBottom: '16px' }}>
          <CriaTextHeadline2>
            Sidebar with Nested Items
          </CriaTextHeadline2>
        </div>
        <div style={{ marginBottom: '24px' }}>
          <CriaTextBody1>
            Sidebar supports nested items for hierarchical navigation. Parent items can be expanded or collapsed.
          </CriaTextBody1>
        </div>
        <div style={{ display: 'flex', gap: '24px', minHeight: '400px' }}>
          <div style={{ flex: '0 0 250px' }}>
            <Sidebar items={itemsWithNested} />
          </div>
          <div style={{ flex: 1 }}>
            <CriaTextBody1>
              Nested items allow for organized navigation structures. The "Content" section is expanded by default,
              while "Tools" is collapsed. Click on parent items to expand/collapse their children.
            </CriaTextBody1>
          </div>
        </div>
      </section>

      {/* Sidebar Variants */}
      <section style={{ marginBottom: '48px' }}>
        <div style={{ marginBottom: '16px' }}>
          <CriaTextHeadline2>
            Sidebar Variants
          </CriaTextHeadline2>
        </div>
        
        <div style={{ marginBottom: '32px' }}>
          <div style={{ marginBottom: '16px' }}>
            <CriaTextTitle2>
              Default Variant
            </CriaTextTitle2>
          </div>
          <div style={{ display: 'flex', gap: '24px', minHeight: '300px' }}>
            <div style={{ flex: '0 0 200px' }}>
              <Sidebar items={basicItems.slice(0, 3)} variant="default" />
            </div>
            <div style={{ flex: 1 }}>
              <CriaTextBody1>Standard sidebar with full styling and spacing.</CriaTextBody1>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <div style={{ marginBottom: '16px' }}>
            <CriaTextTitle2>
              Compact Variant
            </CriaTextTitle2>
          </div>
          <div style={{ display: 'flex', gap: '24px', minHeight: '300px' }}>
            <div style={{ flex: '0 0 200px' }}>
              <Sidebar items={basicItems.slice(0, 3)} variant="compact" />
            </div>
            <div style={{ flex: 1 }}>
              <CriaTextBody1>Compact sidebar with reduced spacing and smaller elements.</CriaTextBody1>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <div style={{ marginBottom: '16px' }}>
            <CriaTextTitle2>
              Minimal Variant
            </CriaTextTitle2>
          </div>
          <div style={{ display: 'flex', gap: '24px', minHeight: '300px' }}>
            <div style={{ flex: '0 0 200px' }}>
              <Sidebar items={basicItems.slice(0, 3)} variant="minimal" />
            </div>
            <div style={{ flex: 1 }}>
              <CriaTextBody1>Minimal sidebar with clean, simple styling.</CriaTextBody1>
            </div>
          </div>
        </div>
      </section>

      {/* Sidebar Sizes */}
      <section style={{ marginBottom: '48px' }}>
        <div style={{ marginBottom: '16px' }}>
          <CriaTextHeadline2>
            Sidebar Sizes
          </CriaTextHeadline2>
        </div>
        
        <div style={{ marginBottom: '32px' }}>
          <div style={{ marginBottom: '16px' }}>
            <CriaTextTitle2>
              Small Size
            </CriaTextTitle2>
          </div>
          <div style={{ display: 'flex', gap: '24px', minHeight: '300px' }}>
            <div style={{ flex: '0 0 180px' }}>
              <Sidebar items={basicItems.slice(0, 3)} size="sm" />
            </div>
            <div style={{ flex: 1 }}>
              <CriaTextBody1>Small sidebar with compact sizing.</CriaTextBody1>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <div style={{ marginBottom: '16px' }}>
            <CriaTextTitle2>
              Medium Size (Default)
            </CriaTextTitle2>
          </div>
          <div style={{ display: 'flex', gap: '24px', minHeight: '300px' }}>
            <div style={{ flex: '0 0 220px' }}>
              <Sidebar items={basicItems.slice(0, 3)} size="md" />
            </div>
            <div style={{ flex: 1 }}>
              <CriaTextBody1>Medium sidebar with standard sizing.</CriaTextBody1>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <div style={{ marginBottom: '16px' }}>
            <CriaTextTitle2>
              Large Size
            </CriaTextTitle2>
          </div>
          <div style={{ display: 'flex', gap: '24px', minHeight: '300px' }}>
            <div style={{ flex: '0 0 260px' }}>
              <Sidebar items={basicItems.slice(0, 3)} size="lg" />
            </div>
            <div style={{ flex: 1 }}>
              <CriaTextBody1>Large sidebar with generous sizing.</CriaTextBody1>
            </div>
          </div>
        </div>
      </section>

      {/* Collapsible Sidebar */}
      <section style={{ marginBottom: '48px' }}>
        <div style={{ marginBottom: '16px' }}>
          <CriaTextHeadline2>
            Collapsible Sidebar
          </CriaTextHeadline2>
        </div>
        <div style={{ marginBottom: '16px' }}>
          <CriaTextBody1>
            Sidebar can be made collapsible to save space. Current state: <strong>{collapsed ? 'Collapsed' : 'Expanded'}</strong>
          </CriaTextBody1>
        </div>
        <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
          <Button 
            variant="outline" 
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? 'Expand' : 'Collapse'} Sidebar
          </Button>
        </div>
        <div style={{ display: 'flex', gap: '24px', minHeight: '400px' }}>
          <div style={{ flex: '0 0 250px' }}>
            <Sidebar 
              items={basicItems} 
              collapsible
              collapsed={collapsed}
              onCollapseChange={setCollapsed}
            />
          </div>
          <div style={{ flex: 1 }}>
            <CriaTextBody1>
              Collapsible sidebars are useful for responsive designs or when you need to maximize content space.
              When collapsed, only icons are shown.
            </CriaTextBody1>
          </div>
        </div>
      </section>

      {/* Disabled Items */}
      <section style={{ marginBottom: '48px' }}>
        <div style={{ marginBottom: '16px' }}>
          <CriaTextHeadline2>
            Disabled Items
          </CriaTextHeadline2>
        </div>
        <div style={{ marginBottom: '24px' }}>
          <CriaTextBody1>
            Individual sidebar items can be disabled to prevent user interaction while maintaining visual context.
          </CriaTextBody1>
        </div>
        <div style={{ display: 'flex', gap: '24px', minHeight: '400px' }}>
          <div style={{ flex: '0 0 250px' }}>
            <Sidebar items={itemsWithDisabled} />
          </div>
          <div style={{ flex: 1 }}>
            <CriaTextBody1>
              Disabled items are visually distinct and cannot be clicked or navigated to via keyboard.
            </CriaTextBody1>
          </div>
        </div>
      </section>

      {/* Sidebar Without Content */}
      <section style={{ marginBottom: '48px' }}>
        <div style={{ marginBottom: '16px' }}>
          <CriaTextHeadline2>
            Sidebar Without Content
          </CriaTextHeadline2>
        </div>
        <div style={{ marginBottom: '24px' }}>
          <CriaTextBody1>
            Sometimes you only need the sidebar navigation without displaying content in the sidebar itself.
          </CriaTextBody1>
        </div>
        <div style={{ display: 'flex', gap: '24px', minHeight: '400px' }}>
          <div style={{ flex: '0 0 250px' }}>
            <Sidebar items={basicItems} showContent={false} />
          </div>
          <div style={{ flex: 1 }}>
            <CriaTextBody1>
              The sidebar navigation is available, but content is handled separately. This is useful when
              the sidebar is used purely for navigation and content is displayed elsewhere.
            </CriaTextBody1>
          </div>
        </div>
      </section>

      {/* Accessibility */}
      <section style={{ marginBottom: '48px' }}>
        <div style={{ marginBottom: '16px' }}>
          <CriaTextHeadline2>
            Accessibility Features
          </CriaTextHeadline2>
        </div>
        <div style={{ marginBottom: '16px' }}>
          <CriaTextBody1>
            The Sidebar component includes comprehensive accessibility features:
          </CriaTextBody1>
        </div>
        <ul style={{ marginLeft: '24px', marginBottom: '16px' }}>
          <li>
            <CriaTextBody1>
              <strong>Keyboard Navigation:</strong> Use arrow keys to navigate between items, Home/End to jump to first/last item
            </CriaTextBody1>
          </li>
          <li>
            <CriaTextBody1>
              <strong>ARIA Attributes:</strong> Proper role, aria-selected, aria-expanded, and aria-disabled attributes
            </CriaTextBody1>
          </li>
          <li>
            <CriaTextBody1>
              <strong>Focus Management:</strong> Automatic focus management and proper tab order
            </CriaTextBody1>
          </li>
          <li>
            <CriaTextBody1>
              <strong>Screen Reader Support:</strong> Clear labeling and state announcements
            </CriaTextBody1>
          </li>
          <li>
            <CriaTextBody1>
              <strong>Skip Disabled Items:</strong> Keyboard navigation automatically skips disabled items
            </CriaTextBody1>
          </li>
        </ul>
        <div style={{ display: 'flex', gap: '24px', minHeight: '400px' }}>
          <div style={{ flex: '0 0 250px' }}>
            <Sidebar items={basicItems} />
          </div>
          <div style={{ flex: 1 }}>
            <CriaTextBody1>
              Try using keyboard navigation to move between sidebar items. The component provides
              a smooth and accessible navigation experience.
            </CriaTextBody1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SidebarDemo;
