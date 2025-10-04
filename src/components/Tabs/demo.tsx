import React, { useState } from 'react';
import { Typography } from '../Typography';
import { Button } from '../Button';
import { Card, CardHeader, CardContent } from '../Card';
import Badge from '../Badge';
import Tabs from './Tabs';
import { House, User, ChatCircle, Bell } from 'phosphor-react';

export const TabsDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const basicTabs = [
    {
      id: 'tab1',
      label: 'Overview',
      content: (
        <div style={{ padding: '24px' }}>
          <Typography variant="h3" weight="semiBold" style={{ marginBottom: '16px' }}>
            Overview Content
          </Typography>
          <Typography variant="body" style={{ marginBottom: '16px' }}>
            This is the overview tab content. It contains general information about the topic.
          </Typography>
          <Typography variant="body">
            You can include any React content here, including other components, forms, or complex layouts.
          </Typography>
        </div>
      ),
    },
    {
      id: 'tab2',
      label: 'Details',
      content: (
        <div style={{ padding: '24px' }}>
          <Typography variant="h3" weight="semiBold" style={{ marginBottom: '16px' }}>
            Details Content
          </Typography>
          <Typography variant="body" style={{ marginBottom: '16px' }}>
            This tab contains detailed information and specifications.
          </Typography>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Badge variant="primary">Feature 1</Badge>
            <Badge variant="secondary">Feature 2</Badge>
            <Badge variant="success">Feature 3</Badge>
          </div>
        </div>
      ),
    },
    {
      id: 'tab3',
      label: 'Settings',
      content: (
        <div style={{ padding: '24px' }}>
          <Typography variant="h3" weight="semiBold" style={{ marginBottom: '16px' }}>
            Settings Content
          </Typography>
          <Typography variant="body" style={{ marginBottom: '16px' }}>
            Configure your preferences and settings here.
          </Typography>
          <div style={{ display: 'flex', gap: '12px' }}>
            <Button variant="primary">Save Changes</Button>
            <Button variant="outline">Reset</Button>
          </div>
        </div>
      ),
    },
  ];

  const tabsWithIcons = [
    {
      id: 'home',
      label: 'Home',
      icon: <House size={16} />,
      content: (
        <div style={{ padding: '24px' }}>
          <Typography variant="h3" weight="semiBold" style={{ marginBottom: '16px' }}>
            Home Dashboard
          </Typography>
          <Typography variant="body">
            Welcome to your home dashboard. Here you can see an overview of your activities.
          </Typography>
        </div>
      ),
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: <User size={16} />,
      content: (
        <div style={{ padding: '24px' }}>
          <Typography variant="h3" weight="semiBold" style={{ marginBottom: '16px' }}>
            User Profile
          </Typography>
          <Typography variant="body">
            Manage your profile information and preferences.
          </Typography>
        </div>
      ),
    },
    {
      id: 'messages',
      label: 'Messages',
      icon: <ChatCircle size={16} />,
      badge: <Badge variant="error" badgeStyle="solid" size="sm">3</Badge>,
      content: (
        <div style={{ padding: '24px' }}>
          <Typography variant="h3" weight="semiBold" style={{ marginBottom: '16px' }}>
            Messages
          </Typography>
          <Typography variant="body">
            You have 3 unread messages. Check them out!
          </Typography>
        </div>
      ),
    },
    {
      id: 'notifications',
      label: 'Notifications',
      icon: <Bell size={16} />,
      badge: <Badge variant="warning" badgeStyle="solid" size="sm">1</Badge>,
      content: (
        <div style={{ padding: '24px' }}>
          <Typography variant="h3" weight="semiBold" style={{ marginBottom: '16px' }}>
            Notifications
          </Typography>
          <Typography variant="body">
            You have important notifications waiting for you.
          </Typography>
        </div>
      ),
    },
  ];

  const tabsWithDisabled = [
    {
      id: 'enabled1',
      label: 'Enabled Tab 1',
      content: (
        <div style={{ padding: '24px' }}>
          <Typography variant="body">This tab is enabled and functional.</Typography>
        </div>
      ),
    },
    {
      id: 'disabled1',
      label: 'Disabled Tab',
      disabled: true,
      content: (
        <div style={{ padding: '24px' }}>
          <Typography variant="body">This content won't be shown because the tab is disabled.</Typography>
        </div>
      ),
    },
    {
      id: 'enabled2',
      label: 'Enabled Tab 2',
      content: (
        <div style={{ padding: '24px' }}>
          <Typography variant="body">This tab is also enabled and functional.</Typography>
        </div>
      ),
    },
  ];

  const cardTabs = [
    {
      id: 'card1',
      label: 'Card Tab 1',
      content: (
        <Card variant="elevated">
          <CardHeader>
            <Typography variant="h3" weight="medium">Card Content 1</Typography>
          </CardHeader>
          <CardContent>
            <Typography variant="body">
              This is card content within a tab. The card styling provides a nice visual separation.
            </Typography>
          </CardContent>
        </Card>
      ),
    },
    {
      id: 'card2',
      label: 'Card Tab 2',
      content: (
        <Card variant="elevated">
          <CardHeader>
            <Typography variant="h3" weight="medium">Card Content 2</Typography>
          </CardHeader>
          <CardContent>
            <Typography variant="body">
              Another card with different content. Cards work great within tabs for organized layouts.
            </Typography>
          </CardContent>
        </Card>
      ),
    },
  ];

  return (
    <div style={{ padding: '24px', maxWidth: '1000px' }}>
      <Typography variant="title1" weight="bold" style={{ marginBottom: '32px' }}>
        Tabs Demo
      </Typography>

      {/* Basic Tabs */}
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Basic Tabs
        </Typography>
        <Typography variant="body" style={{ marginBottom: '24px' }}>
          Simple tabs with different content panels. Use keyboard navigation (arrow keys, Home, End) for accessibility.
        </Typography>
        <Tabs items={basicTabs} />
      </section>

      {/* Controlled Tabs */}
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Controlled Tabs
        </Typography>
        <Typography variant="body" style={{ marginBottom: '16px' }}>
          Tabs can be controlled externally. Current active tab: <strong>{activeTab}</strong>
        </Typography>
        <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
          <Button 
            variant="outline" 
            onClick={() => setActiveTab('tab1')}
            disabled={activeTab === 'tab1'}
          >
            Go to Overview
          </Button>
          <Button 
            variant="outline" 
            onClick={() => setActiveTab('tab2')}
            disabled={activeTab === 'tab2'}
          >
            Go to Details
          </Button>
          <Button 
            variant="outline" 
            onClick={() => setActiveTab('tab3')}
            disabled={activeTab === 'tab3'}
          >
            Go to Settings
          </Button>
        </div>
        <Tabs 
          items={basicTabs} 
          activeTab={activeTab}
          onChange={setActiveTab}
        />
      </section>

      {/* Tabs with Icons and Badges */}
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Tabs with Icons and Badges
        </Typography>
        <Typography variant="body" style={{ marginBottom: '24px' }}>
          Tabs can include icons and badges to provide additional visual context and information. 
          Badge colors have been optimized for better readability.
        </Typography>
        <Tabs items={tabsWithIcons} />
      </section>

      {/* Alternative Badge Styles */}
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Alternative Badge Styles
        </Typography>
        <Typography variant="body" style={{ marginBottom: '24px' }}>
          Different badge styles for better contrast and readability in various contexts.
        </Typography>
        <Tabs items={[
          {
            id: 'home-alt',
            label: 'Home',
            icon: <House size={16} />,
            content: <div style={{ padding: '24px' }}><Typography variant="body">Home content</Typography></div>,
          },
          {
            id: 'messages-alt',
            label: 'Messages',
            icon: <ChatCircle size={16} />,
            badge: <Badge variant="error" badgeStyle="outline" size="sm">3</Badge>,
            content: <div style={{ padding: '24px' }}><Typography variant="body">Messages with outline badge</Typography></div>,
          },
          {
            id: 'notifications-alt',
            label: 'Notifications',
            icon: <Bell size={16} />,
            badge: <Badge variant="warning" badgeStyle="soft" size="sm">1</Badge>,
            content: <div style={{ padding: '24px' }}><Typography variant="body">Notifications with soft badge</Typography></div>,
          },
        ]} />
      </section>

      {/* Tab Variants */}
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Tab Variants
        </Typography>
        
        <div style={{ marginBottom: '32px' }}>
          <Typography variant="h3" weight="medium" style={{ marginBottom: '16px' }}>
            Pills Variant
          </Typography>
          <Tabs items={basicTabs} variant="pills" />
        </div>

        <div style={{ marginBottom: '32px' }}>
          <Typography variant="h3" weight="medium" style={{ marginBottom: '16px' }}>
            Underline Variant
          </Typography>
          <Tabs items={basicTabs} variant="underline" />
        </div>

        <div style={{ marginBottom: '32px' }}>
          <Typography variant="h3" weight="medium" style={{ marginBottom: '16px' }}>
            Cards Variant
          </Typography>
          <Tabs items={cardTabs} variant="cards" />
        </div>
      </section>

      {/* Tab Sizes */}
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Tab Sizes
        </Typography>
        
        <div style={{ marginBottom: '32px' }}>
          <Typography variant="h3" weight="medium" style={{ marginBottom: '16px' }}>
            Small Size
          </Typography>
          <Tabs items={basicTabs} size="sm" />
        </div>

        <div style={{ marginBottom: '32px' }}>
          <Typography variant="h3" weight="medium" style={{ marginBottom: '16px' }}>
            Medium Size (Default)
          </Typography>
          <Tabs items={basicTabs} size="md" />
        </div>

        <div style={{ marginBottom: '32px' }}>
          <Typography variant="h3" weight="medium" style={{ marginBottom: '16px' }}>
            Large Size
          </Typography>
          <Tabs items={basicTabs} size="lg" />
        </div>
      </section>

      {/* Full Width Tabs */}
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Full Width Tabs
        </Typography>
        <Typography variant="body" style={{ marginBottom: '24px' }}>
          Tabs can span the full width of their container for better space utilization.
        </Typography>
        <Tabs items={basicTabs} fullWidth />
      </section>

      {/* Disabled Tabs */}
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Disabled Tabs
        </Typography>
        <Typography variant="body" style={{ marginBottom: '24px' }}>
          Individual tabs can be disabled to prevent user interaction while maintaining visual context.
        </Typography>
        <Tabs items={tabsWithDisabled} />
      </section>

      {/* Note about Vertical Navigation */}
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Vertical Navigation
        </Typography>
        <Typography variant="body" style={{ marginBottom: '24px' }}>
          For vertical navigation and sidebar layouts, use the <strong>Sidebar</strong> component instead of vertical tabs.
          The Sidebar component is specifically designed for navigation menus and provides better accessibility and UX for vertical layouts.
        </Typography>
        <div style={{ 
          padding: '16px', 
          backgroundColor: '#F3F4F6', 
          borderRadius: '8px',
          border: '1px solid #E5E7EB'
        }}>
          <Typography variant="body" weight="medium" style={{ marginBottom: '8px' }}>
            💡 Tip: Use Sidebar for navigation menus, Tabs for content organization
          </Typography>
          <Typography variant="bodySmall">
            Import: <code>import { Sidebar } from 'design-system-cria';</code>
          </Typography>
        </div>
      </section>

      {/* Tabs Without Content */}
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Tabs Without Content
        </Typography>
        <Typography variant="body" style={{ marginBottom: '24px' }}>
          Sometimes you only need the tab navigation without displaying content below.
        </Typography>
        <Tabs items={basicTabs} showContent={false} />
        <Typography variant="body" style={{ marginTop: '16px' }}>
          The content is hidden, but you can still handle tab changes via the onChange callback.
        </Typography>
      </section>

      {/* Accessibility */}
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Accessibility Features
        </Typography>
        <Typography variant="body" style={{ marginBottom: '16px' }}>
          The Tabs component includes comprehensive accessibility features:
        </Typography>
        <ul style={{ marginLeft: '24px', marginBottom: '16px' }}>
          <li>
            <Typography variant="body">
              <strong>Keyboard Navigation:</strong> Use left/right arrow keys to navigate between tabs, Home/End to jump to first/last tab
            </Typography>
          </li>
          <li>
            <Typography variant="body">
              <strong>ARIA Attributes:</strong> Proper role, aria-selected, aria-controls, and aria-labelledby attributes
            </Typography>
          </li>
          <li>
            <Typography variant="body">
              <strong>Focus Management:</strong> Automatic focus management and tab order
            </Typography>
          </li>
          <li>
            <Typography variant="body">
              <strong>Screen Reader Support:</strong> Clear labeling and state announcements
            </Typography>
          </li>
        </ul>
        <Tabs items={basicTabs} />
      </section>
    </div>
  );
};

export default TabsDemo;
