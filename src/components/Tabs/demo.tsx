import React, { useState } from 'react';
import { CriaTextHeadline1, CriaTextHeadline2, CriaTextBody1, CriaTextBody2, CriaTextTitle1, CriaTextTitle2 } from '../TextTokens';
import { Button } from '../Button';
import { Card, CardHeader, CardContent } from '../Card';
import Badge from '../Badge';
import Tabs from './Tabs';
import { spacing, colors, radii } from '../../tokens';
import { House, User, ChatCircle, Bell } from 'phosphor-react';

export const TabsDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const basicTabs = [
    {
      id: 'tab1',
      label: 'Overview',
      content: (
        <div style={{ padding: spacing[6] }}>
          <CriaTextTitle1 style={{ marginBottom: spacing[4] }}>
            Overview Content
          </CriaTextTitle1>
          <CriaTextBody1 style={{ marginBottom: spacing[4] }}>
            This is the overview tab content. It contains general information about the topic.
          </CriaTextBody1>
          <CriaTextBody1>
            You can include any React content here, including other components, forms, or complex layouts.
          </CriaTextBody1>
        </div>
      ),
    },
    {
      id: 'tab2',
      label: 'Details',
      content: (
        <div style={{ padding: spacing[6] }}>
          <CriaTextTitle1 style={{ marginBottom: spacing[4] }}>
            Details Content
          </CriaTextTitle1>
          <CriaTextBody1 style={{ marginBottom: spacing[4] }}>
            This tab contains detailed information and specifications.
          </CriaTextBody1>
          <div style={{ display: 'flex', gap: spacing[3], flexWrap: 'wrap' }}>
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
        <div style={{ padding: spacing[6] }}>
          <CriaTextTitle1 style={{ marginBottom: spacing[4] }}>
            Settings Content
          </CriaTextTitle1>
          <CriaTextBody1 style={{ marginBottom: spacing[4] }}>
            Configure your preferences and settings here.
          </CriaTextBody1>
          <div style={{ display: 'flex', gap: spacing[3] }}>
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
        <div style={{ padding: spacing[6] }}>
          <CriaTextTitle1 style={{ marginBottom: spacing[4] }}>
            Home Dashboard
          </CriaTextTitle1>
          <CriaTextBody1>
            Welcome to your home dashboard. Here you can see an overview of your activities.
          </CriaTextBody1>
        </div>
      ),
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: <User size={16} />,
      content: (
        <div style={{ padding: spacing[6] }}>
          <CriaTextTitle1 style={{ marginBottom: spacing[4] }}>
            User Profile
          </CriaTextTitle1>
          <CriaTextBody1>
            Manage your profile information and preferences.
          </CriaTextBody1>
        </div>
      ),
    },
    {
      id: 'messages',
      label: 'Messages',
      icon: <ChatCircle size={16} />,
      badge: <Badge variant="error" badgeStyle="solid" size="sm">3</Badge>,
      content: (
        <div style={{ padding: spacing[6] }}>
          <CriaTextTitle1 style={{ marginBottom: spacing[4] }}>
            Messages
          </CriaTextTitle1>
          <CriaTextBody1>
            You have 3 unread messages. Check them out!
          </CriaTextBody1>
        </div>
      ),
    },
    {
      id: 'notifications',
      label: 'Notifications',
      icon: <Bell size={16} />,
      badge: <Badge variant="warning" badgeStyle="solid" size="sm">1</Badge>,
      content: (
        <div style={{ padding: spacing[6] }}>
          <CriaTextTitle1 style={{ marginBottom: spacing[4] }}>
            Notifications
          </CriaTextTitle1>
          <CriaTextBody1>
            You have important notifications waiting for you.
          </CriaTextBody1>
        </div>
      ),
    },
  ];

  const tabsWithDisabled = [
    {
      id: 'enabled1',
      label: 'Enabled Tab 1',
      content: (
        <div style={{ padding: spacing[6] }}>
          <CriaTextBody1>This tab is enabled and functional.</CriaTextBody1>
        </div>
      ),
    },
    {
      id: 'disabled1',
      label: 'Disabled Tab',
      disabled: true,
      content: (
        <div style={{ padding: spacing[6] }}>
          <CriaTextBody1>This content won't be shown because the tab is disabled.</CriaTextBody1>
        </div>
      ),
    },
    {
      id: 'enabled2',
      label: 'Enabled Tab 2',
      content: (
        <div style={{ padding: spacing[6] }}>
          <CriaTextBody1>This tab is also enabled and functional.</CriaTextBody1>
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
            <CriaTextTitle1>Card Content 1</CriaTextTitle1>
          </CardHeader>
          <CardContent>
            <CriaTextBody1>
              This is card content within a tab. The card styling provides a nice visual separation.
            </CriaTextBody1>
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
            <CriaTextTitle1>Card Content 2</CriaTextTitle1>
          </CardHeader>
          <CardContent>
            <CriaTextBody1>
              Another card with different content. Cards work great within tabs for organized layouts.
            </CriaTextBody1>
          </CardContent>
        </Card>
      ),
    },
  ];

  return (
    <div style={{ padding: spacing[6], maxWidth: '1000px' }}>
      <CriaTextHeadline1 style={{ marginBottom: spacing[8] }}>
        Tabs Demo
      </CriaTextHeadline1>

      {/* Basic Tabs */}
      <section style={{ marginBottom: spacing[12] }}>
        <CriaTextHeadline2 style={{ marginBottom: spacing[4] }}>
          Basic Tabs
        </CriaTextHeadline2>
        <CriaTextBody1 style={{ marginBottom: spacing[6] }}>
          Simple tabs with different content panels. Use keyboard navigation (arrow keys, Home, End) for accessibility.
        </CriaTextBody1>
        <Tabs items={basicTabs} />
      </section>

      {/* Controlled Tabs */}
      <section style={{ marginBottom: spacing[12] }}>
        <CriaTextHeadline2 style={{ marginBottom: spacing[4] }}>
          Controlled Tabs
        </CriaTextHeadline2>
        <CriaTextBody1 style={{ marginBottom: spacing[4] }}>
          Tabs can be controlled externally. Current active tab: <strong>{activeTab}</strong>
        </CriaTextBody1>
        <div style={{ display: 'flex', gap: spacing[3], marginBottom: spacing[6] }}>
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
      <section style={{ marginBottom: spacing[12] }}>
        <CriaTextHeadline2 style={{ marginBottom: spacing[4] }}>
          Tabs with Icons and Badges
        </CriaTextHeadline2>
        <CriaTextBody1 style={{ marginBottom: spacing[6] }}>
          Tabs can include icons and badges to provide additional visual context and information. 
          Badge colors have been optimized for better readability.
        </CriaTextBody1>
        <Tabs items={tabsWithIcons} />
      </section>

      {/* Alternative Badge Styles */}
      <section style={{ marginBottom: spacing[12] }}>
        <CriaTextHeadline2 style={{ marginBottom: spacing[4] }}>
          Alternative Badge Styles
        </CriaTextHeadline2>
        <CriaTextBody1 style={{ marginBottom: spacing[6] }}>
          Different badge styles for better contrast and readability in various contexts.
        </CriaTextBody1>
        <Tabs items={[
          {
            id: 'home-alt',
            label: 'Home',
            icon: <House size={16} />,
            content: <div style={{ padding: spacing[6] }}><CriaTextBody1>Home content</CriaTextBody1></div>,
          },
          {
            id: 'messages-alt',
            label: 'Messages',
            icon: <ChatCircle size={16} />,
            badge: <Badge variant="error" badgeStyle="outline" size="sm">3</Badge>,
            content: <div style={{ padding: spacing[6] }}><CriaTextBody1>Messages with outline badge</CriaTextBody1></div>,
          },
          {
            id: 'notifications-alt',
            label: 'Notifications',
            icon: <Bell size={16} />,
            badge: <Badge variant="warning" badgeStyle="soft" size="sm">1</Badge>,
            content: <div style={{ padding: spacing[6] }}><CriaTextBody1>Notifications with soft badge</CriaTextBody1></div>,
          },
        ]} />
      </section>

      {/* Tab Variants */}
      <section style={{ marginBottom: spacing[12] }}>
        <CriaTextHeadline2 style={{ marginBottom: spacing[4] }}>
          Tab Variants
        </CriaTextHeadline2>
        
        <div style={{ marginBottom: spacing[8] }}>
          <CriaTextTitle1 style={{ marginBottom: spacing[4] }}>
            Pills Variant
          </CriaTextTitle1>
          <Tabs items={basicTabs} variant="pills" />
        </div>

        <div style={{ marginBottom: spacing[8] }}>
          <CriaTextTitle1 style={{ marginBottom: spacing[4] }}>
            Underline Variant
          </CriaTextTitle1>
          <Tabs items={basicTabs} variant="underline" />
        </div>

        <div style={{ marginBottom: spacing[8] }}>
          <CriaTextTitle1 style={{ marginBottom: spacing[4] }}>
            Cards Variant
          </CriaTextTitle1>
          <Tabs items={cardTabs} variant="cards" />
        </div>
      </section>

      {/* Tab Sizes */}
      <section style={{ marginBottom: spacing[12] }}>
        <CriaTextHeadline2 style={{ marginBottom: spacing[4] }}>
          Tab Sizes
        </CriaTextHeadline2>
        
        <div style={{ marginBottom: spacing[8] }}>
          <CriaTextTitle1 style={{ marginBottom: spacing[4] }}>
            Small Size
          </CriaTextTitle1>
          <Tabs items={basicTabs} size="sm" />
        </div>

        <div style={{ marginBottom: spacing[8] }}>
          <CriaTextTitle1 style={{ marginBottom: spacing[4] }}>
            Medium Size (Default)
          </CriaTextTitle1>
          <Tabs items={basicTabs} size="md" />
        </div>

        <div style={{ marginBottom: spacing[8] }}>
          <CriaTextTitle1 style={{ marginBottom: spacing[4] }}>
            Large Size
          </CriaTextTitle1>
          <Tabs items={basicTabs} size="lg" />
        </div>
      </section>

      {/* Full Width Tabs */}
      <section style={{ marginBottom: spacing[12] }}>
        <CriaTextHeadline2 style={{ marginBottom: spacing[4] }}>
          Full Width Tabs
        </CriaTextHeadline2>
        <CriaTextBody1 style={{ marginBottom: spacing[6] }}>
          Tabs can span the full width of their container for better space utilization.
        </CriaTextBody1>
        <Tabs items={basicTabs} fullWidth />
      </section>

      {/* Disabled Tabs */}
      <section style={{ marginBottom: spacing[12] }}>
        <CriaTextHeadline2 style={{ marginBottom: spacing[4] }}>
          Disabled Tabs
        </CriaTextHeadline2>
        <CriaTextBody1 style={{ marginBottom: spacing[6] }}>
          Individual tabs can be disabled to prevent user interaction while maintaining visual context.
        </CriaTextBody1>
        <Tabs items={tabsWithDisabled} />
      </section>

      {/* Note about Vertical Navigation */}
      <section style={{ marginBottom: spacing[12] }}>
        <CriaTextHeadline2 style={{ marginBottom: spacing[4] }}>
          Vertical Navigation
        </CriaTextHeadline2>
        <CriaTextBody1 style={{ marginBottom: spacing[6] }}>
          For vertical navigation and sidebar layouts, use the <strong>Sidebar</strong> component instead of vertical tabs.
          The Sidebar component is specifically designed for navigation menus and provides better accessibility and UX for vertical layouts.
        </CriaTextBody1>
        <div style={{ 
          padding: spacing[4], 
          backgroundColor: colors.gray[100], 
          borderRadius: radii.md,
          border: `1px solid ${colors.border.light}`
        }}>
          <CriaTextBody1 style={{ marginBottom: spacing[2] }}>
            💡 Tip: Use Sidebar for navigation menus, Tabs for content organization
          </CriaTextBody1>
          <CriaTextBody2>
            Import: <code>import {'{'} Sidebar {'}'} from 'design-system-cria';</code>
          </CriaTextBody2>
        </div>
      </section>

      {/* Tabs Without Content */}
      <section style={{ marginBottom: spacing[12] }}>
        <CriaTextHeadline2 style={{ marginBottom: spacing[4] }}>
          Tabs Without Content
        </CriaTextHeadline2>
        <CriaTextBody1 style={{ marginBottom: spacing[6] }}>
          Sometimes you only need the tab navigation without displaying content below.
        </CriaTextBody1>
        <Tabs items={basicTabs} showContent={false} />
        <CriaTextBody1 style={{ marginTop: spacing[4] }}>
          The content is hidden, but you can still handle tab changes via the onChange callback.
        </CriaTextBody1>
      </section>

      {/* Accessibility */}
      <section style={{ marginBottom: spacing[12] }}>
        <CriaTextHeadline2 style={{ marginBottom: spacing[4] }}>
          Accessibility Features
        </CriaTextHeadline2>
        <CriaTextBody1 style={{ marginBottom: spacing[4] }}>
          The Tabs component includes comprehensive accessibility features:
        </CriaTextBody1>
        <ul style={{ marginLeft: spacing[6], marginBottom: spacing[4] }}>
          <li>
            <CriaTextBody1>
              <strong>Keyboard Navigation:</strong> Use left/right arrow keys to navigate between tabs, Home/End to jump to first/last tab
            </CriaTextBody1>
          </li>
          <li>
            <CriaTextBody1>
              <strong>ARIA Attributes:</strong> Proper role, aria-selected, aria-controls, and aria-labelledby attributes
            </CriaTextBody1>
          </li>
          <li>
            <CriaTextBody1>
              <strong>Focus Management:</strong> Automatic focus management and tab order
            </CriaTextBody1>
          </li>
          <li>
            <CriaTextBody1>
              <strong>Screen Reader Support:</strong> Clear labeling and state announcements
            </CriaTextBody1>
          </li>
        </ul>
        <Tabs items={basicTabs} />
      </section>
    </div>
  );
};

export default TabsDemo;
