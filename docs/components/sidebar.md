# Sidebar Component

Sidebar component for navigation and content organization. The Sidebar component is specifically designed for vertical navigation menus and provides better accessibility and UX for hierarchical navigation structures.

## Import

```tsx
import { Sidebar } from 'design-system-cria';
```

## Basic Usage

```tsx
const [activeItem, setActiveItem] = useState('dashboard');

const sidebarItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: <House size={20} />,
    content: (
      <div style={{ padding: '24px' }}>
        <Typography variant="h3" weight="semiBold">Dashboard</Typography>
        <Typography variant="body">Welcome to your dashboard.</Typography>
      </div>
    ),
  },
  {
    id: 'users',
    label: 'Users',
    icon: <Users size={20} />,
    content: (
      <div style={{ padding: '24px' }}>
        <Typography variant="h3" weight="semiBold">User Management</Typography>
        <Typography variant="body">Manage your users and permissions.</Typography>
      </div>
    ),
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: <Settings size={20} />,
    content: (
      <div style={{ padding: '24px' }}>
        <Typography variant="h3" weight="semiBold">Settings</Typography>
        <Typography variant="body">Configure your application settings.</Typography>
      </div>
    ),
  },
];

<Sidebar items={sidebarItems} activeItem={activeItem} onChange={setActiveItem} />
```

## With Icons

```tsx
const sidebarItemsWithIcons = [
  {
    id: 'home',
    label: 'Home',
    icon: <House size={20} />,
    content: <div>Home content</div>,
  },
  {
    id: 'profile',
    label: 'Profile',
    icon: <User size={20} />,
    content: <div>Profile content</div>,
  },
  {
    id: 'messages',
    label: 'Messages',
    icon: <ChatCircle size={20} />,
    content: <div>Messages content</div>,
  },
];

<Sidebar items={sidebarItemsWithIcons} />
```

## With Badges

```tsx
const sidebarItemsWithBadges = [
  {
    id: 'messages',
    label: 'Messages',
    icon: <ChatCircle size={20} />,
    badge: <Badge variant="error" badgeStyle="solid" size="sm">3</Badge>,
    content: <div>Messages content</div>,
  },
  {
    id: 'notifications',
    label: 'Notifications',
    icon: <Bell size={20} />,
    badge: <Badge variant="warning" badgeStyle="solid" size="sm">1</Badge>,
    content: <div>Notifications content</div>,
  },
  {
    id: 'mail',
    label: 'Mail',
    icon: <Mail size={20} />,
    badge: <Badge variant="info" badgeStyle="outline" size="sm">12</Badge>,
    content: <div>Mail content</div>,
  },
];

<Sidebar items={sidebarItemsWithBadges} />
```

## With Nested Items

```tsx
const sidebarItemsWithNested = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: <House size={20} />,
    content: <div>Dashboard content</div>,
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
        content: <div>Posts content</div>,
      },
      {
        id: 'pages',
        label: 'Pages',
        icon: <FileText size={16} />,
        content: <div>Pages content</div>,
      },
      {
        id: 'media',
        label: 'Media',
        icon: <Folder size={16} />,
        content: <div>Media content</div>,
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
        content: <div>Calendar content</div>,
      },
      {
        id: 'reports',
        label: 'Reports',
        icon: <BarChart3 size={16} />,
        content: <div>Reports content</div>,
      },
    ],
  },
];

<Sidebar items={sidebarItemsWithNested} />
```

## Variants

### Default
```tsx
<Sidebar items={sidebarItems} variant="default" />
```

### Compact
```tsx
<Sidebar items={sidebarItems} variant="compact" />
```

### Minimal
```tsx
<Sidebar items={sidebarItems} variant="minimal" />
```

## Sizes

### Small
```tsx
<Sidebar items={sidebarItems} size="sm" />
```

### Medium (Default)
```tsx
<Sidebar items={sidebarItems} size="md" />
```

### Large
```tsx
<Sidebar items={sidebarItems} size="lg" />
```

## Collapsible Sidebar

```tsx
const [collapsed, setCollapsed] = useState(false);

<Sidebar 
  items={sidebarItems} 
  collapsible
  collapsed={collapsed}
  onCollapseChange={setCollapsed}
/>
```

## Disabled Items

```tsx
const sidebarItemsWithDisabled = [
  {
    id: 'enabled1',
    label: 'Enabled Item 1',
    icon: <House size={20} />,
    content: <div>This item is enabled</div>,
  },
  {
    id: 'disabled1',
    label: 'Disabled Item',
    icon: <User size={20} />,
    disabled: true,
    content: <div>This content won't be shown</div>,
  },
  {
    id: 'enabled2',
    label: 'Enabled Item 2',
    icon: <Settings size={20} />,
    content: <div>This item is also enabled</div>,
  },
];

<Sidebar items={sidebarItemsWithDisabled} />
```

## Controlled Component

```tsx
const [activeItem, setActiveItem] = useState('dashboard');

const handleItemChange = (newItem) => {
  setActiveItem(newItem);
  // Additional logic when item changes
  console.log(`Switched to item: ${newItem}`);
};

<Sidebar 
  items={sidebarItems} 
  activeItem={activeItem} 
  onChange={handleItemChange} 
/>
```

## Uncontrolled Component

```tsx
<Sidebar 
  items={sidebarItems} 
  defaultActiveItem="users" 
  onChange={(itemId) => console.log('Item changed:', itemId)} 
/>
```

## Without Content Display

```tsx
<Sidebar 
  items={sidebarItems} 
  showContent={false} 
  onChange={(itemId) => handleItemChange(itemId)} 
/>
```

## Complex Navigation Examples

### Admin Dashboard
```tsx
const adminSidebarItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: <House size={20} />,
    content: (
      <div style={{ padding: '24px' }}>
        <Typography variant="h3" weight="semiBold" style={{ marginBottom: '16px' }}>
          Admin Dashboard
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
    label: 'User Management',
    icon: <Users size={20} />,
    content: (
      <div style={{ padding: '24px' }}>
        <Typography variant="h3" weight="semiBold" style={{ marginBottom: '16px' }}>
          User Management
        </Typography>
        <div style={{ display: 'flex', gap: '12px' }}>
          <Button variant="primary">Add User</Button>
          <Button variant="outline">Export Users</Button>
        </div>
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
            <Typography variant="h3" weight="semiBold">Posts Management</Typography>
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
            <Typography variant="h3" weight="semiBold">Pages Management</Typography>
            <Typography variant="body">Manage your static pages.</Typography>
          </div>
        ),
      },
    ],
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
        <div style={{ display: 'flex', gap: '12px' }}>
          <Button variant="primary">Save Changes</Button>
          <Button variant="outline">Reset to Defaults</Button>
        </div>
      </div>
    ),
  },
];

<Sidebar items={adminSidebarItems} />
```

### E-commerce Admin
```tsx
const ecommerceSidebarItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: <House size={20} />,
    content: <div>Dashboard content</div>,
  },
  {
    id: 'products',
    label: 'Products',
    icon: <Package size={20} />,
    expanded: true,
    children: [
      {
        id: 'all-products',
        label: 'All Products',
        icon: <Package size={16} />,
        content: <div>All products content</div>,
      },
      {
        id: 'categories',
        label: 'Categories',
        icon: <Folder size={16} />,
        content: <div>Categories content</div>,
      },
      {
        id: 'inventory',
        label: 'Inventory',
        icon: <Warehouse size={16} />,
        content: <div>Inventory content</div>,
      },
    ],
  },
  {
    id: 'orders',
    label: 'Orders',
    icon: <ShoppingCart size={20} />,
    badge: <Badge variant="error" badgeStyle="solid" size="sm">5</Badge>,
    content: <div>Orders content</div>,
  },
  {
    id: 'customers',
    label: 'Customers',
    icon: <Users size={20} />,
    content: <div>Customers content</div>,
  },
  {
    id: 'marketing',
    label: 'Marketing',
    icon: <Megaphone size={20} />,
    expanded: false,
    children: [
      {
        id: 'campaigns',
        label: 'Campaigns',
        icon: <Megaphone size={16} />,
        content: <div>Campaigns content</div>,
      },
      {
        id: 'analytics',
        label: 'Analytics',
        icon: <BarChart3 size={16} />,
        content: <div>Analytics content</div>,
      },
    ],
  },
];

<Sidebar items={ecommerceSidebarItems} />
```

## Keyboard Navigation

The Sidebar component supports full keyboard navigation:

- **Arrow Up/Down**: Navigate between items
- **Home/End**: Jump to first/last item
- **Enter/Space**: Activate focused item
- **Tab**: Move focus to next focusable element

## Accessibility

The Sidebar component includes comprehensive accessibility features:

- **ARIA Attributes**: Proper `role="navigation"`, `role="menu"`, and `role="menuitem"`
- **Keyboard Navigation**: Full keyboard support with arrow keys
- **Screen Reader Support**: Clear announcements of item changes
- **Focus Management**: Proper focus handling and indicators
- **Semantic HTML**: Uses proper HTML structure
- **Skip Disabled Items**: Keyboard navigation automatically skips disabled items

## When to Use Sidebar vs Tabs

### Use Sidebar for:
- Navigation menus
- Vertical navigation
- Hierarchical navigation
- Application navigation
- Admin panels
- Dashboard navigation

### Use Tabs for:
- Content organization within a page
- Horizontal content sections
- Settings panels
- Product information sections
- Form wizards

## Props

### Sidebar Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `SidebarItem[]` | - | Array of sidebar items |
| `activeItem` | `string` | - | Currently active item ID (controlled) |
| `defaultActiveItem` | `string` | - | Default active item ID (uncontrolled) |
| `onChange` | `(activeItem: string) => void` | - | Item change handler |
| `variant` | `'default' \| 'compact' \| 'minimal'` | `'default'` | Sidebar variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Sidebar size |
| `showContent` | `boolean` | `true` | Whether to show item content |
| `collapsible` | `boolean` | `false` | Whether the sidebar is collapsible |
| `collapsed` | `boolean` | - | Whether the sidebar is collapsed (controlled) |
| `onCollapseChange` | `(collapsed: boolean) => void` | - | Collapse state change handler |
| `className` | `string` | - | Custom class name |
| `style` | `React.CSSProperties` | - | Custom styles |

### SidebarItem Interface

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | `string` | - | Unique identifier for the sidebar item |
| `label` | `React.ReactNode` | - | Label to display in the sidebar item |
| `content` | `React.ReactNode` | - | Content to display when item is active (optional) |
| `disabled` | `boolean` | `false` | Whether the item is disabled |
| `icon` | `React.ReactNode` | - | Icon to display in the sidebar item |
| `badge` | `React.ReactNode` | - | Badge or count to display in the sidebar item |
| `children` | `SidebarItem[]` | - | Nested items for sub-navigation |
| `expanded` | `boolean` | - | Whether the item is expanded (for items with children) |

## Styling

The Sidebar component uses design tokens for consistent styling:

- **Colors**: Semantic colors for different states
- **Spacing**: Consistent padding and margins
- **Typography**: Font family, size, and weight from tokens
- **Border Radius**: Consistent border radius
- **Focus States**: Visible focus indicators
- **Transitions**: Smooth state transitions

## Best Practices

1. **Use Clear Labels**: Make sidebar item labels descriptive and concise
2. **Organize Hierarchically**: Use nested items to create logical navigation structures
3. **Use Icons Consistently**: Icons help users quickly identify navigation items
4. **Limit Nesting Depth**: Keep nesting to 2-3 levels maximum for better UX
5. **Test Keyboard Navigation**: Ensure all functionality works via keyboard
6. **Consider Collapsible Design**: Use collapsible sidebars for responsive designs
7. **Use Badges Sparingly**: Only use badges for important notifications or counts
8. **Group Related Items**: Organize items logically into sections

## Examples

### Simple Navigation
```tsx
const simpleNavItems = [
  {
    id: 'home',
    label: 'Home',
    icon: <House size={20} />,
    content: <div>Home content</div>,
  },
  {
    id: 'about',
    label: 'About',
    icon: <Info size={20} />,
    content: <div>About content</div>,
  },
  {
    id: 'contact',
    label: 'Contact',
    icon: <Envelope size={20} />,
    content: <div>Contact content</div>,
  },
];

<Sidebar items={simpleNavItems} />
```

### Multi-level Navigation
```tsx
const multiLevelNavItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: <House size={20} />,
    content: <div>Dashboard content</div>,
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
        content: <div>Posts content</div>,
      },
      {
        id: 'pages',
        label: 'Pages',
        icon: <FileText size={16} />,
        content: <div>Pages content</div>,
      },
    ],
  },
  {
    id: 'users',
    label: 'Users',
    icon: <Users size={20} />,
    expanded: false,
    children: [
      {
        id: 'all-users',
        label: 'All Users',
        icon: <Users size={16} />,
        content: <div>All users content</div>,
      },
      {
        id: 'roles',
        label: 'Roles',
        icon: <Shield size={16} />,
        content: <div>Roles content</div>,
      },
    ],
  },
];

<Sidebar items={multiLevelNavItems} />
```

### Responsive Collapsible Sidebar
```tsx
const [collapsed, setCollapsed] = useState(false);

const responsiveSidebarItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: <House size={20} />,
    content: <div>Dashboard content</div>,
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: <BarChart3 size={20} />,
    content: <div>Analytics content</div>,
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: <Settings size={20} />,
    content: <div>Settings content</div>,
  },
];

<div style={{ display: 'flex', gap: '24px', minHeight: '400px' }}>
  <div style={{ flex: '0 0 250px' }}>
    <Sidebar 
      items={responsiveSidebarItems} 
      collapsible
      collapsed={collapsed}
      onCollapseChange={setCollapsed}
    />
  </div>
  <div style={{ flex: 1 }}>
    <Typography variant="body">
      Main content area. The sidebar can be collapsed to save space.
    </Typography>
  </div>
</div>
```
