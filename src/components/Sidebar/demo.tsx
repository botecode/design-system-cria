import React, { useState } from 'react';
import { Typography } from '../Typography';
import { Button } from '../Button';
import { Card, CardHeader, CardContent } from '../Card';
import Badge from '../Badge';
import Sidebar from './Sidebar';
import { 
  House, 
  User, 
  ChatCircle, 
  Bell, 
  Settings, 
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
          <Typography variant="h3" weight="semiBold" style={{ marginBottom: '16px' }}>
            Dashboard
          </Typography>
          <Typography variant="body" style={{ marginBottom: '16px' }}>
            Welcome to your dashboard. Here you can see an overview of your activities and key metrics.
          </Typography>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            <Card variant="elevated">
              <CardContent>
                <Typography variant="h4" weight="medium">Total Users</Typography>
                <Typography variant="h2" weight="bold" color="primary">1,234</Typography>
              </CardContent>
            </Card>
            <Card variant="elevated">
              <CardContent>
                <Typography variant="h4" weight="medium">Revenue</Typography>
                <Typography variant="h2" weight="bold" color="success">$12,345</Typography>
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
          <Typography variant="h3" weight="semiBold" style={{ marginBottom: '16px' }}>
            User Management
          </Typography>
          <Typography variant="body" style={{ marginBottom: '16px' }}>
            Manage your users, roles, and permissions from this section.
          </Typography>
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
          <Typography variant="h3" weight="semiBold" style={{ marginBottom: '16px' }}>
            Analytics
          </Typography>
          <Typography variant="body" style={{ marginBottom: '16px' }}>
            View detailed analytics and reports about your application usage.
          </Typography>
          <Card variant="elevated">
            <CardHeader>
              <Typography variant="h4" weight="medium">Usage Statistics</Typography>
            </CardHeader>
            <CardContent>
              <Typography variant="body">
                Chart and metrics would be displayed here in a real application.
              </Typography>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: <Settings size={20} />,
      content: (
        <div style={{ padding: '24px' }}>
          <Typography variant="h3" weight="semiBold" style={{ marginBottom: '16px' }}>
            Settings
          </Typography>
          <Typography variant="body" style={{ marginBottom: '16px' }}>
            Configure your application settings and preferences.
          </Typography>
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
          <Typography variant="h3" weight="semiBold">Home Dashboard</Typography>
          <Typography variant="body">Welcome to your home dashboard.</Typography>
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
          <Typography variant="h3" weight="semiBold">Messages</Typography>
          <Typography variant="body">You have 3 unread messages.</Typography>
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
          <Typography variant="h3" weight="semiBold">Notifications</Typography>
          <Typography variant="body">You have 1 important notification.</Typography>
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
          <Typography variant="h3" weight="semiBold">Mail</Typography>
          <Typography variant="body">You have 12 new emails.</Typography>
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
          <Typography variant="h3" weight="semiBold">Dashboard</Typography>
          <Typography variant="body">Main dashboard content.</Typography>
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
              <Typography variant="h3" weight="semiBold">Posts</Typography>
              <Typography variant="body">Manage your blog posts and articles.</Typography>
            </div>
          ),
        },
        {
          id: 'pages',
          label: 'Pages',
          icon: <FileText size={16} />,
          content: (
            <div style={{ padding: '24px' }}>
              <Typography variant="h3" weight="semiBold">Pages</Typography>
              <Typography variant="body">Manage your static pages.</Typography>
            </div>
          ),
        },
        {
          id: 'media',
          label: 'Media',
          icon: <Folder size={16} />,
          content: (
            <div style={{ padding: '24px' }}>
              <Typography variant="h3" weight="semiBold">Media Library</Typography>
              <Typography variant="body">Upload and manage your media files.</Typography>
            </div>
          ),
        },
      ],
    },
    {
      id: 'tools',
      label: 'Tools',
      icon: <Settings size={20} />,
      expanded: false,
      children: [
        {
          id: 'calendar',
          label: 'Calendar',
          icon: <Calendar size={16} />,
          content: (
            <div style={{ padding: '24px' }}>
              <Typography variant="h3" weight="semiBold">Calendar</Typography>
              <Typography variant="body">Schedule and manage your events.</Typography>
            </div>
          ),
        },
        {
          id: 'reports',
          label: 'Reports',
          icon: <BarChart3 size={16} />,
          content: (
            <div style={{ padding: '24px' }}>
              <Typography variant="h3" weight="semiBold">Reports</Typography>
              <Typography variant="body">Generate and view reports.</Typography>
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
          <Typography variant="h3" weight="semiBold">Enabled Item 1</Typography>
          <Typography variant="body">This item is enabled and functional.</Typography>
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
          <Typography variant="h3" weight="semiBold">Disabled Item</Typography>
          <Typography variant="body">This content won't be shown because the item is disabled.</Typography>
        </div>
      ),
    },
    {
      id: 'enabled2',
      label: 'Enabled Item 2',
      icon: <Settings size={20} />,
      content: (
        <div style={{ padding: '24px' }}>
          <Typography variant="h3" weight="semiBold">Enabled Item 2</Typography>
          <Typography variant="body">This item is also enabled and functional.</Typography>
        </div>
      ),
    },
  ];

  return (
    <div style={{ padding: '24px', maxWidth: '1200px' }}>
      <Typography variant="title1" weight="bold" style={{ marginBottom: '32px' }}>
        Sidebar Demo
      </Typography>

      {/* Basic Sidebar */}
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Basic Sidebar
        </Typography>
        <Typography variant="body" style={{ marginBottom: '24px' }}>
          Simple sidebar navigation with icons and content display. Use keyboard navigation (arrow keys, Home, End) for accessibility.
        </Typography>
        <div style={{ display: 'flex', gap: '24px', minHeight: '400px' }}>
          <div style={{ flex: '0 0 250px' }}>
            <Sidebar items={basicItems} />
          </div>
          <div style={{ flex: 1 }}>
            <Typography variant="body">
              The sidebar provides a clean navigation interface with icons and content display.
              Click on different items to see the content change.
            </Typography>
          </div>
        </div>
      </section>

      {/* Controlled Sidebar */}
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Controlled Sidebar
        </Typography>
        <Typography variant="body" style={{ marginBottom: '16px' }}>
          Sidebar can be controlled externally. Current active item: <strong>{activeItem}</strong>
        </Typography>
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
            <Typography variant="body">
              The sidebar state is controlled by the parent component. You can programmatically change the active item.
            </Typography>
          </div>
        </div>
      </section>

      {/* Sidebar with Badges */}
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Sidebar with Badges
        </Typography>
        <Typography variant="body" style={{ marginBottom: '24px' }}>
          Sidebar items can include badges to show notifications, counts, or status indicators.
        </Typography>
        <div style={{ display: 'flex', gap: '24px', minHeight: '400px' }}>
          <div style={{ flex: '0 0 250px' }}>
            <Sidebar items={itemsWithBadges} />
          </div>
          <div style={{ flex: 1 }}>
            <Typography variant="body">
              Badges provide visual indicators for unread messages, notifications, or other important information.
            </Typography>
          </div>
        </div>
      </section>

      {/* Sidebar with Nested Items */}
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Sidebar with Nested Items
        </Typography>
        <Typography variant="body" style={{ marginBottom: '24px' }}>
          Sidebar supports nested items for hierarchical navigation. Parent items can be expanded or collapsed.
        </Typography>
        <div style={{ display: 'flex', gap: '24px', minHeight: '400px' }}>
          <div style={{ flex: '0 0 250px' }}>
            <Sidebar items={itemsWithNested} />
          </div>
          <div style={{ flex: 1 }}>
            <Typography variant="body">
              Nested items allow for organized navigation structures. The "Content" section is expanded by default,
              while "Tools" is collapsed. Click on parent items to expand/collapse their children.
            </Typography>
          </div>
        </div>
      </section>

      {/* Sidebar Variants */}
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Sidebar Variants
        </Typography>
        
        <div style={{ marginBottom: '32px' }}>
          <Typography variant="h3" weight="medium" style={{ marginBottom: '16px' }}>
            Default Variant
          </Typography>
          <div style={{ display: 'flex', gap: '24px', minHeight: '300px' }}>
            <div style={{ flex: '0 0 200px' }}>
              <Sidebar items={basicItems.slice(0, 3)} variant="default" />
            </div>
            <div style={{ flex: 1 }}>
              <Typography variant="body">Standard sidebar with full styling and spacing.</Typography>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <Typography variant="h3" weight="medium" style={{ marginBottom: '16px' }}>
            Compact Variant
          </Typography>
          <div style={{ display: 'flex', gap: '24px', minHeight: '300px' }}>
            <div style={{ flex: '0 0 200px' }}>
              <Sidebar items={basicItems.slice(0, 3)} variant="compact" />
            </div>
            <div style={{ flex: 1 }}>
              <Typography variant="body">Compact sidebar with reduced spacing and smaller elements.</Typography>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <Typography variant="h3" weight="medium" style={{ marginBottom: '16px' }}>
            Minimal Variant
          </Typography>
          <div style={{ display: 'flex', gap: '24px', minHeight: '300px' }}>
            <div style={{ flex: '0 0 200px' }}>
              <Sidebar items={basicItems.slice(0, 3)} variant="minimal" />
            </div>
            <div style={{ flex: 1 }}>
              <Typography variant="body">Minimal sidebar with clean, simple styling.</Typography>
            </div>
          </div>
        </div>
      </section>

      {/* Sidebar Sizes */}
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Sidebar Sizes
        </Typography>
        
        <div style={{ marginBottom: '32px' }}>
          <Typography variant="h3" weight="medium" style={{ marginBottom: '16px' }}>
            Small Size
          </Typography>
          <div style={{ display: 'flex', gap: '24px', minHeight: '300px' }}>
            <div style={{ flex: '0 0 180px' }}>
              <Sidebar items={basicItems.slice(0, 3)} size="sm" />
            </div>
            <div style={{ flex: 1 }}>
              <Typography variant="body">Small sidebar with compact sizing.</Typography>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <Typography variant="h3" weight="medium" style={{ marginBottom: '16px' }}>
            Medium Size (Default)
          </Typography>
          <div style={{ display: 'flex', gap: '24px', minHeight: '300px' }}>
            <div style={{ flex: '0 0 220px' }}>
              <Sidebar items={basicItems.slice(0, 3)} size="md" />
            </div>
            <div style={{ flex: 1 }}>
              <Typography variant="body">Medium sidebar with standard sizing.</Typography>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <Typography variant="h3" weight="medium" style={{ marginBottom: '16px' }}>
            Large Size
          </Typography>
          <div style={{ display: 'flex', gap: '24px', minHeight: '300px' }}>
            <div style={{ flex: '0 0 260px' }}>
              <Sidebar items={basicItems.slice(0, 3)} size="lg" />
            </div>
            <div style={{ flex: 1 }}>
              <Typography variant="body">Large sidebar with generous sizing.</Typography>
            </div>
          </div>
        </div>
      </section>

      {/* Collapsible Sidebar */}
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Collapsible Sidebar
        </Typography>
        <Typography variant="body" style={{ marginBottom: '16px' }}>
          Sidebar can be made collapsible to save space. Current state: <strong>{collapsed ? 'Collapsed' : 'Expanded'}</strong>
        </Typography>
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
            <Typography variant="body">
              Collapsible sidebars are useful for responsive designs or when you need to maximize content space.
              When collapsed, only icons are shown.
            </Typography>
          </div>
        </div>
      </section>

      {/* Disabled Items */}
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Disabled Items
        </Typography>
        <Typography variant="body" style={{ marginBottom: '24px' }}>
          Individual sidebar items can be disabled to prevent user interaction while maintaining visual context.
        </Typography>
        <div style={{ display: 'flex', gap: '24px', minHeight: '400px' }}>
          <div style={{ flex: '0 0 250px' }}>
            <Sidebar items={itemsWithDisabled} />
          </div>
          <div style={{ flex: 1 }}>
            <Typography variant="body">
              Disabled items are visually distinct and cannot be clicked or navigated to via keyboard.
            </Typography>
          </div>
        </div>
      </section>

      {/* Sidebar Without Content */}
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Sidebar Without Content
        </Typography>
        <Typography variant="body" style={{ marginBottom: '24px' }}>
          Sometimes you only need the sidebar navigation without displaying content in the sidebar itself.
        </Typography>
        <div style={{ display: 'flex', gap: '24px', minHeight: '400px' }}>
          <div style={{ flex: '0 0 250px' }}>
            <Sidebar items={basicItems} showContent={false} />
          </div>
          <div style={{ flex: 1 }}>
            <Typography variant="body">
              The sidebar navigation is available, but content is handled separately. This is useful when
              the sidebar is used purely for navigation and content is displayed elsewhere.
            </Typography>
          </div>
        </div>
      </section>

      {/* Accessibility */}
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Accessibility Features
        </Typography>
        <Typography variant="body" style={{ marginBottom: '16px' }}>
          The Sidebar component includes comprehensive accessibility features:
        </Typography>
        <ul style={{ marginLeft: '24px', marginBottom: '16px' }}>
          <li>
            <Typography variant="body">
              <strong>Keyboard Navigation:</strong> Use arrow keys to navigate between items, Home/End to jump to first/last item
            </Typography>
          </li>
          <li>
            <Typography variant="body">
              <strong>ARIA Attributes:</strong> Proper role, aria-selected, aria-expanded, and aria-disabled attributes
            </Typography>
          </li>
          <li>
            <Typography variant="body">
              <strong>Focus Management:</strong> Automatic focus management and proper tab order
            </Typography>
          </li>
          <li>
            <Typography variant="body">
              <strong>Screen Reader Support:</strong> Clear labeling and state announcements
            </Typography>
          </li>
          <li>
            <Typography variant="body">
              <strong>Skip Disabled Items:</strong> Keyboard navigation automatically skips disabled items
            </Typography>
          </li>
        </ul>
        <div style={{ display: 'flex', gap: '24px', minHeight: '400px' }}>
          <div style={{ flex: '0 0 250px' }}>
            <Sidebar items={basicItems} />
          </div>
          <div style={{ flex: 1 }}>
            <Typography variant="body">
              Try using keyboard navigation to move between sidebar items. The component provides
              a smooth and accessible navigation experience.
            </Typography>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SidebarDemo;
