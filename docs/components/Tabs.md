# Tabs Component

Tab component for organizing content into sections with keyboard navigation and accessibility features.

## Import

```tsx
import { Tabs, Tab, TabPanel } from '@cria/ui';
```

## Basic Usage

```tsx
const [activeTab, setActiveTab] = useState('tab1');

<Tabs value={activeTab} onChange={setActiveTab}>
  <Tab value="tab1">Tab 1</Tab>
  <Tab value="tab2">Tab 2</Tab>
  <Tab value="tab3">Tab 3</Tab>
</Tabs>

<TabPanel value="tab1">
  <Typography>Content for Tab 1</Typography>
</TabPanel>
<TabPanel value="tab2">
  <Typography>Content for Tab 2</Typography>
</TabPanel>
<TabPanel value="tab3">
  <Typography>Content for Tab 3</Typography>
</TabPanel>
```

## With Icons

```tsx
<Tabs value={activeTab} onChange={setActiveTab}>
  <Tab value="home" icon={<Home />}>Home</Tab>
  <Tab value="profile" icon={<User />}>Profile</Tab>
  <Tab value="settings" icon={<Settings />}>Settings</Tab>
</Tabs>
```

## Variants

### Default
```tsx
<Tabs value={activeTab} onChange={setActiveTab} variant="default">
  <Tab value="tab1">Default Tab 1</Tab>
  <Tab value="tab2">Default Tab 2</Tab>
</Tabs>
```

### Pills
```tsx
<Tabs value={activeTab} onChange={setActiveTab} variant="pills">
  <Tab value="tab1">Pill Tab 1</Tab>
  <Tab value="tab2">Pill Tab 2</Tab>
</Tabs>
```

### Underline
```tsx
<Tabs value={activeTab} onChange={setActiveTab} variant="underline">
  <Tab value="tab1">Underline Tab 1</Tab>
  <Tab value="tab2">Underline Tab 2</Tab>
</Tabs>
```

## Sizes

### Small
```tsx
<Tabs value={activeTab} onChange={setActiveTab} size="sm">
  <Tab value="tab1">Small Tab 1</Tab>
  <Tab value="tab2">Small Tab 2</Tab>
</Tabs>
```

### Medium (Default)
```tsx
<Tabs value={activeTab} onChange={setActiveTab} size="md">
  <Tab value="tab1">Medium Tab 1</Tab>
  <Tab value="tab2">Medium Tab 2</Tab>
</Tabs>
```

### Large
```tsx
<Tabs value={activeTab} onChange={setActiveTab} size="lg">
  <Tab value="tab1">Large Tab 1</Tab>
  <Tab value="tab2">Large Tab 2</Tab>
</Tabs>
```

## Full Width

```tsx
<Tabs value={activeTab} onChange={setActiveTab} fullWidth>
  <Tab value="tab1">Full Width Tab 1</Tab>
  <Tab value="tab2">Full Width Tab 2</Tab>
  <Tab value="tab3">Full Width Tab 3</Tab>
</Tabs>
```

## Disabled Tabs

```tsx
<Tabs value={activeTab} onChange={setActiveTab}>
  <Tab value="tab1">Active Tab</Tab>
  <Tab value="tab2" disabled>Disabled Tab</Tab>
  <Tab value="tab3">Another Active Tab</Tab>
</Tabs>
```

## Complex Content

### Settings Panel
```tsx
<Tabs value={activeTab} onChange={setActiveTab}>
  <Tab value="general" icon={<Settings />}>General</Tab>
  <Tab value="notifications" icon={<Bell />}>Notifications</Tab>
  <Tab value="privacy" icon={<Shield />}>Privacy</Tab>
  <Tab value="advanced" icon={<Gear />}>Advanced</Tab>
</Tabs>

<TabPanel value="general">
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <Switch label="Dark mode" checked={darkMode} onChange={setDarkMode} />
    <Switch label="Auto-save" checked={autoSave} onChange={setAutoSave} />
    <Dropdown label="Language" options={languages} value={language} onChange={setLanguage} />
  </div>
</TabPanel>

<TabPanel value="notifications">
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <Switch label="Email notifications" checked={emailNotifications} onChange={setEmailNotifications} />
    <Switch label="Push notifications" checked={pushNotifications} onChange={setPushNotifications} />
    <Switch label="SMS notifications" checked={smsNotifications} onChange={setSmsNotifications} />
  </div>
</TabPanel>

<TabPanel value="privacy">
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <Switch label="Allow data collection" checked={allowDataCollection} onChange={setAllowDataCollection} />
    <Switch label="Share usage statistics" checked={shareUsageStats} onChange={setShareUsageStats} />
  </div>
</TabPanel>

<TabPanel value="advanced">
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <Input label="API Key" type="password" value={apiKey} onChange={(e) => setApiKey(e.target.value)} />
    <Input label="Webhook URL" value={webhookUrl} onChange={(e) => setWebhookUrl(e.target.value)} />
  </div>
</TabPanel>
```

### Dashboard Tabs
```tsx
<Tabs value={activeTab} onChange={setActiveTab} variant="pills">
  <Tab value="overview" icon={<ChartBar />}>Overview</Tab>
  <Tab value="analytics" icon={<TrendingUp />}>Analytics</Tab>
  <Tab value="reports" icon={<FileText />}>Reports</Tab>
  <Tab value="users" icon={<Users />}>Users</Tab>
</Tabs>

<TabPanel value="overview">
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
</TabPanel>

<TabPanel value="analytics">
  <Typography variant="h4">Analytics Dashboard</Typography>
  <Typography>Analytics content goes here...</Typography>
</TabPanel>

<TabPanel value="reports">
  <Typography variant="h4">Reports</Typography>
  <Typography>Reports content goes here...</Typography>
</TabPanel>

<TabPanel value="users">
  <Typography variant="h4">User Management</Typography>
  <Typography>User management content goes here...</Typography>
</TabPanel>
```

## Controlled Component

```tsx
const [activeTab, setActiveTab] = useState('tab1');

const handleTabChange = (newTab) => {
  setActiveTab(newTab);
  // Additional logic when tab changes
  console.log(`Switched to tab: ${newTab}`);
};

<Tabs value={activeTab} onChange={handleTabChange}>
  <Tab value="tab1">Tab 1</Tab>
  <Tab value="tab2">Tab 2</Tab>
  <Tab value="tab3">Tab 3</Tab>
</Tabs>
```

## Keyboard Navigation

The Tabs component supports full keyboard navigation:

- **Tab**: Navigate between tabs
- **Arrow Left/Right**: Navigate between tabs
- **Home/End**: Jump to first/last tab
- **Enter/Space**: Activate focused tab

## Accessibility

The Tabs component includes comprehensive accessibility features:

- **ARIA Attributes**: Proper `role="tablist"`, `role="tab"`, and `role="tabpanel"`
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Support**: Clear announcements of tab changes
- **Focus Management**: Proper focus handling and indicators
- **Semantic HTML**: Uses proper HTML structure

### Accessibility Example
```tsx
<Tabs value={activeTab} onChange={setActiveTab} aria-label="Settings sections">
  <Tab value="general" aria-describedby="general-desc">General</Tab>
  <Tab value="privacy" aria-describedby="privacy-desc">Privacy</Tab>
</Tabs>

<TabPanel value="general" id="general-desc">
  <Typography>General settings for your account</Typography>
</TabPanel>

<TabPanel value="privacy" id="privacy-desc">
  <Typography>Privacy settings and data controls</Typography>
</TabPanel>
```

## Props

### Tabs Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | - | Active tab value |
| `onChange` | `(value: string) => void` | - | Tab change handler |
| `variant` | `'default' \| 'pills' \| 'underline'` | `'default'` | Tab variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Tab size |
| `fullWidth` | `boolean` | `false` | Whether tabs should take full width |
| `disabled` | `boolean` | `false` | Whether all tabs are disabled |
| `children` | `React.ReactNode` | - | Tab elements |

### Tab Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | - | Tab value |
| `disabled` | `boolean` | `false` | Whether the tab is disabled |
| `icon` | `React.ReactNode` | - | Icon to display |
| `children` | `React.ReactNode` | - | Tab content |

### TabPanel Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | - | Tab panel value |
| `children` | `React.ReactNode` | - | Panel content |

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

## Examples

### Product Information Tabs
```tsx
<Tabs value={activeTab} onChange={setActiveTab}>
  <Tab value="description">Description</Tab>
  <Tab value="specifications">Specifications</Tab>
  <Tab value="reviews">Reviews</Tab>
  <Tab value="shipping">Shipping</Tab>
</Tabs>

<TabPanel value="description">
  <Typography variant="h4">Product Description</Typography>
  <TextContent>
    This is a detailed description of the product, including its features,
    benefits, and use cases. The content is optimized for readability.
  </TextContent>
</TabPanel>

<TabPanel value="specifications">
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
</TabPanel>

<TabPanel value="reviews">
  <Typography variant="h4">Customer Reviews</Typography>
  <Typography>Reviews content goes here...</Typography>
</TabPanel>

<TabPanel value="shipping">
  <Typography variant="h4">Shipping Information</Typography>
  <Typography>Shipping details go here...</Typography>
</TabPanel>
```

### Form Wizard
```tsx
<Tabs value={activeTab} onChange={setActiveTab} variant="underline">
  <Tab value="step1">Personal Info</Tab>
  <Tab value="step2">Contact Details</Tab>
  <Tab value="step3">Preferences</Tab>
  <Tab value="step4">Review</Tab>
</Tabs>

<TabPanel value="step1">
  <form>
    <Input label="First Name" required />
    <Input label="Last Name" required />
    <Input label="Date of Birth" type="date" />
  </form>
</TabPanel>

<TabPanel value="step2">
  <form>
    <Input label="Email" type="email" required />
    <Input label="Phone" type="tel" />
    <Input label="Address" />
  </form>
</TabPanel>

<TabPanel value="step3">
  <form>
    <Switch label="Email notifications" />
    <Switch label="SMS notifications" />
    <Dropdown label="Preferred language" options={languages} />
  </form>
</TabPanel>

<TabPanel value="step4">
  <Typography variant="h4">Review Your Information</Typography>
  <Typography>Please review your information before submitting.</Typography>
  <Button variant="primary">Submit</Button>
</TabPanel>
```




