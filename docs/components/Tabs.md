# Tabs Component

Tabs component for organizing content into sections with keyboard navigation and accessibility features. The Tabs component is designed for horizontal content organization and should be used for content sections rather than navigation.

## Import

```tsx
import { Tabs } from 'design-system-cria';
```

## Basic Usage

```tsx
const [activeTab, setActiveTab] = useState('tab1');

const tabItems = [
  {
    id: 'tab1',
    label: 'Overview',
    content: (
      <div style={{ padding: '24px' }}>
        <Typography variant="h3" weight="semiBold">Overview Content</Typography>
        <Typography variant="body">This is the overview tab content.</Typography>
      </div>
    ),
  },
  {
    id: 'tab2',
    label: 'Details',
    content: (
      <div style={{ padding: '24px' }}>
        <Typography variant="h3" weight="semiBold">Details Content</Typography>
        <Typography variant="body">This tab contains detailed information.</Typography>
      </div>
    ),
  },
  {
    id: 'tab3',
    label: 'Settings',
    content: (
      <div style={{ padding: '24px' }}>
        <Typography variant="h3" weight="semiBold">Settings Content</Typography>
        <Typography variant="body">Configure your preferences here.</Typography>
      </div>
    ),
  },
];

<Tabs items={tabItems} activeTab={activeTab} onChange={setActiveTab} />
```

## With Icons

```tsx
const tabItemsWithIcons = [
  {
    id: 'home',
    label: 'Home',
    icon: <House size={16} />,
    content: <div>Home content</div>,
  },
  {
    id: 'profile',
    label: 'Profile',
    icon: <User size={16} />,
    content: <div>Profile content</div>,
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: <Settings size={16} />,
    content: <div>Settings content</div>,
  },
];

<Tabs items={tabItemsWithIcons} />
```

## With Badges

```tsx
const tabItemsWithBadges = [
  {
    id: 'messages',
    label: 'Messages',
    icon: <ChatCircle size={16} />,
    badge: <Badge variant="error" badgeStyle="solid" size="sm">3</Badge>,
    content: <div>Messages content</div>,
  },
  {
    id: 'notifications',
    label: 'Notifications',
    icon: <Bell size={16} />,
    badge: <Badge variant="warning" badgeStyle="solid" size="sm">1</Badge>,
    content: <div>Notifications content</div>,
  },
];

<Tabs items={tabItemsWithBadges} />
```

## Variants

### Default
```tsx
<Tabs items={tabItems} variant="default" />
```

### Pills
```tsx
<Tabs items={tabItems} variant="pills" />
```

### Underline
```tsx
<Tabs items={tabItems} variant="underline" />
```

### Cards
```tsx
<Tabs items={tabItems} variant="cards" />
```

## Sizes

### Small
```tsx
<Tabs items={tabItems} size="sm" />
```

### Medium (Default)
```tsx
<Tabs items={tabItems} size="md" />
```

### Large
```tsx
<Tabs items={tabItems} size="lg" />
```

## Full Width

```tsx
<Tabs items={tabItems} fullWidth />
```

## Disabled Tabs

```tsx
const tabItemsWithDisabled = [
  {
    id: 'enabled1',
    label: 'Enabled Tab 1',
    content: <div>This tab is enabled</div>,
  },
  {
    id: 'disabled1',
    label: 'Disabled Tab',
    disabled: true,
    content: <div>This content won't be shown</div>,
  },
  {
    id: 'enabled2',
    label: 'Enabled Tab 2',
    content: <div>This tab is also enabled</div>,
  },
];

<Tabs items={tabItemsWithDisabled} />
```

## Controlled Component

```tsx
const [activeTab, setActiveTab] = useState('tab1');

const handleTabChange = (newTab) => {
  setActiveTab(newTab);
  // Additional logic when tab changes
  console.log(`Switched to tab: ${newTab}`);
};

<Tabs 
  items={tabItems} 
  activeTab={activeTab} 
  onChange={handleTabChange} 
/>
```

## Uncontrolled Component

```tsx
<Tabs 
  items={tabItems} 
  defaultActiveTab="tab2" 
  onChange={(tabId) => console.log('Tab changed:', tabId)} 
/>
```

## Without Content Display

```tsx
<Tabs 
  items={tabItems} 
  showContent={false} 
  onChange={(tabId) => handleTabChange(tabId)} 
/>
```

## Complex Content Examples

### Settings Panel
```tsx
const settingsTabs = [
  {
    id: 'general',
    label: 'General',
    icon: <Settings size={16} />,
    content: (
      <div style={{ padding: '24px' }}>
        <Typography variant="h3" weight="semiBold" style={{ marginBottom: '16px' }}>
          General Settings
        </Typography>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Switch label="Dark mode" checked={darkMode} onChange={setDarkMode} />
          <Switch label="Auto-save" checked={autoSave} onChange={setAutoSave} />
          <Dropdown 
            label="Language" 
            options={languages} 
            value={language} 
            onChange={setLanguage} 
          />
        </div>
      </div>
    ),
  },
  {
    id: 'notifications',
    label: 'Notifications',
    icon: <Bell size={16} />,
    content: (
      <div style={{ padding: '24px' }}>
        <Typography variant="h3" weight="semiBold" style={{ marginBottom: '16px' }}>
          Notification Settings
        </Typography>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Switch 
            label="Email notifications" 
            checked={emailNotifications} 
            onChange={setEmailNotifications} 
          />
          <Switch 
            label="Push notifications" 
            checked={pushNotifications} 
            onChange={setPushNotifications} 
          />
          <Switch 
            label="SMS notifications" 
            checked={smsNotifications} 
            onChange={setSmsNotifications} 
          />
        </div>
      </div>
    ),
  },
];

<Tabs items={settingsTabs} />
```

### Dashboard Tabs
```tsx
const dashboardTabs = [
  {
    id: 'overview',
    label: 'Overview',
    icon: <BarChart3 size={16} />,
    content: (
      <div style={{ padding: '24px' }}>
        <Typography variant="h3" weight="semiBold" style={{ marginBottom: '16px' }}>
          Dashboard Overview
        </Typography>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
          <Card variant="elevated">
            <CardContent>
              <Typography variant="h3" color="primary">1,234</Typography>
              <Typography variant="body" color="secondary">Total Users</Typography>
            </CardContent>
          </Card>
          <Card variant="elevated">
            <CardContent>
              <Typography variant="h3" color="success">567</Typography>
              <Typography variant="body" color="secondary">Active Sessions</Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    ),
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: <TrendingUp size={16} />,
    content: (
      <div style={{ padding: '24px' }}>
        <Typography variant="h3" weight="semiBold">Analytics Dashboard</Typography>
        <Typography variant="body">Analytics content goes here...</Typography>
      </div>
    ),
  },
];

<Tabs items={dashboardTabs} variant="pills" />
```

## Keyboard Navigation

The Tabs component supports full keyboard navigation:

- **Arrow Left/Right**: Navigate between tabs
- **Home/End**: Jump to first/last tab
- **Enter/Space**: Activate focused tab
- **Tab**: Move focus to next focusable element

## Accessibility

The Tabs component includes comprehensive accessibility features:

- **ARIA Attributes**: Proper `role="tablist"`, `role="tab"`, and `role="tabpanel"`
- **Keyboard Navigation**: Full keyboard support with arrow keys
- **Screen Reader Support**: Clear announcements of tab changes
- **Focus Management**: Proper focus handling and indicators
- **Semantic HTML**: Uses proper HTML structure

## When to Use Tabs vs Sidebar

### Use Tabs for:
- Content organization within a page
- Horizontal content sections
- Settings panels
- Product information sections
- Form wizards

### Use Sidebar for:
- Navigation menus
- Vertical navigation
- Hierarchical navigation
- Application navigation

For vertical navigation, use the [Sidebar component](./sidebar.md) instead.

## Props

### Tabs Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `TabItem[]` | - | Array of tab items |
| `activeTab` | `string` | - | Currently active tab ID (controlled) |
| `defaultActiveTab` | `string` | - | Default active tab ID (uncontrolled) |
| `onChange` | `(activeTab: string) => void` | - | Tab change handler |
| `variant` | `'default' \| 'pills' \| 'underline' \| 'cards'` | `'default'` | Tab variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Tab size |
| `fullWidth` | `boolean` | `false` | Whether tabs should take full width |
| `showContent` | `boolean` | `true` | Whether to show tab content |
| `className` | `string` | - | Custom class name |
| `style` | `React.CSSProperties` | - | Custom styles |

### TabItem Interface

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | `string` | - | Unique identifier for the tab |
| `label` | `React.ReactNode` | - | Label to display in the tab |
| `content` | `React.ReactNode` | - | Content to display when tab is active |
| `disabled` | `boolean` | `false` | Whether the tab is disabled |
| `icon` | `React.ReactNode` | - | Icon to display in the tab |
| `badge` | `React.ReactNode` | - | Badge or count to display in the tab |

## Styling

The Tabs component uses design tokens for consistent styling:

- **Colors**: Semantic colors for different states
- **Spacing**: Consistent padding and margins
- **Typography**: Font family, size, and weight from tokens
- **Border Radius**: Consistent border radius
- **Focus States**: Visible focus indicators
- **Transitions**: Smooth state transitions

## Best Practices

1. **Use Clear Labels**: Make tab labels descriptive and concise
2. **Limit Number of Tabs**: Keep the number of tabs reasonable (5-7 max)
3. **Use Icons Appropriately**: Icons can enhance usability but don't rely on them alone
4. **Group Related Content**: Organize content logically into tabs
5. **Test Keyboard Navigation**: Ensure all functionality works via keyboard
6. **Consider Mobile**: Use appropriate variants for different screen sizes
7. **Use Sidebar for Navigation**: Use the Sidebar component for vertical navigation menus

## Examples

### Product Information Tabs
```tsx
const productTabs = [
  {
    id: 'description',
    label: 'Description',
    content: (
      <div style={{ padding: '24px' }}>
        <Typography variant="h4">Product Description</Typography>
        <TextContent>
          This is a detailed description of the product, including its features,
          benefits, and use cases. The content is optimized for readability.
        </TextContent>
      </div>
    ),
  },
  {
    id: 'specifications',
    label: 'Specifications',
    content: (
      <div style={{ padding: '24px' }}>
        <Typography variant="h4">Technical Specifications</Typography>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <div>
            <Typography variant="body" weight="medium">Dimensions</Typography>
            <Typography variant="body">10" x 8" x 2"</Typography>
          </div>
          <div>
            <Typography variant="body" weight="medium">Weight</Typography>
            <Typography variant="body">2.5 lbs</Typography>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'reviews',
    label: 'Reviews',
    content: (
      <div style={{ padding: '24px' }}>
        <Typography variant="h4">Customer Reviews</Typography>
        <Typography>Reviews content goes here...</Typography>
      </div>
    ),
  },
];

<Tabs items={productTabs} />
```

### Form Wizard
```tsx
const wizardTabs = [
  {
    id: 'step1',
    label: 'Personal Info',
    content: (
      <div style={{ padding: '24px' }}>
        <form>
          <Input label="First Name" required />
          <Input label="Last Name" required />
          <Input label="Date of Birth" type="date" />
        </form>
      </div>
    ),
  },
  {
    id: 'step2',
    label: 'Contact Details',
    content: (
      <div style={{ padding: '24px' }}>
        <form>
          <Input label="Email" type="email" required />
          <Input label="Phone" type="tel" />
          <Input label="Address" />
        </form>
      </div>
    ),
  },
  {
    id: 'step3',
    label: 'Preferences',
    content: (
      <div style={{ padding: '24px' }}>
        <form>
          <Switch label="Email notifications" />
          <Switch label="SMS notifications" />
          <Dropdown label="Preferred language" options={languages} />
        </form>
      </div>
    ),
  },
  {
    id: 'step4',
    label: 'Review',
    content: (
      <div style={{ padding: '24px' }}>
        <Typography variant="h4">Review Your Information</Typography>
        <Typography>Please review your information before submitting.</Typography>
        <Button variant="primary">Submit</Button>
      </div>
    ),
  },
];

<Tabs items={wizardTabs} variant="underline" />
```