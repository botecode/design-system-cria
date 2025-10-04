# Breadcrumbs Component

The Breadcrumbs component provides navigation context by showing the user's current location within a hierarchical structure. It helps users understand where they are and provides quick access to parent pages.

## Features

- **Hierarchical Navigation**: Shows the current location within a site structure
- **Customizable Separators**: Support for text, symbols, or React components as separators
- **Icon Support**: Icons can be added to breadcrumb items
- **Truncation**: Automatically truncates long breadcrumb paths with ellipsis
- **Disabled States**: Support for disabled breadcrumb items
- **Click Handlers**: Custom click handlers for breadcrumb items
- **Accessibility**: Full keyboard navigation and screen reader support
- **Flexible Rendering**: Items can be links or text-only

## Usage

### Basic Examples

```tsx
import { Breadcrumbs } from '@your-org/design-system';

// Basic breadcrumbs
<Breadcrumbs 
  items={[
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Electronics', href: '/products/electronics' },
    { label: 'Laptops', href: '/products/electronics/laptops' },
  ]} 
/>

// With icons
<Breadcrumbs 
  items={[
    { label: 'Home', href: '/', icon: <House size={16} /> },
    { label: 'Products', href: '/products' },
    { label: 'Electronics', href: '/products/electronics' },
  ]} 
/>

// Custom separator
<Breadcrumbs 
  items={items}
  separator="→"
/>
```

### Custom Separators

```tsx
// Text separator
<Breadcrumbs items={items} separator="→" />

// Icon separator
<Breadcrumbs items={items} separator={<ChevronRight size={14} />} />

// Custom component separator
const CustomSeparator = () => <span style={{ color: '#666' }}>•</span>;
<Breadcrumbs items={items} separator={<CustomSeparator />} />
```

### Truncation

```tsx
// Long breadcrumb path with truncation
<Breadcrumbs 
  items={manyItems}
  maxItems={5}  // Show first item, ellipsis, and last 4 items
/>
```

### States and Interactions

```tsx
// Disabled items
<Breadcrumbs 
  items={[
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Electronics', href: '/products/electronics', disabled: true },
    { label: 'Laptops', href: '/products/electronics/laptops' },
  ]} 
/>

// Click handlers
<Breadcrumbs 
  items={[
    { 
      label: 'Home', 
      href: '/', 
      onClick: () => console.log('Home clicked') 
    },
    { 
      label: 'Products', 
      href: '/products',
      onClick: () => console.log('Products clicked')
    },
  ]} 
/>
```

### Customization

```tsx
// Custom styling
<Breadcrumbs 
  items={items}
  style={{
    padding: '12px 16px',
    backgroundColor: 'var(--cria-gray-50)',
    borderRadius: 'var(--cria-radius-md)',
  }}
/>

// Custom class
<Breadcrumbs 
  items={items}
  className="custom-breadcrumbs"
/>

// Custom aria-label
<Breadcrumbs 
  items={items}
  ariaLabel="Custom breadcrumb navigation"
/>
```

## Props

### BreadcrumbsProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `BreadcrumbItem[]` | **required** | Array of breadcrumb items |
| `separator` | `string \| React.ReactNode` | `'/'` | Separator between breadcrumb items |
| `maxItems` | `number` | - | Maximum number of items to show before truncating |
| `ariaLabel` | `string` | `'Breadcrumb'` | Custom aria-label for the navigation element |
| `className` | `string` | `''` | Custom class name |
| `style` | `React.CSSProperties` | - | Custom styles |

### BreadcrumbItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | **required** | Label text for the breadcrumb item |
| `href` | `string` | - | URL for the breadcrumb link |
| `onClick` | `(event: React.MouseEvent) => void` | - | Click handler for the breadcrumb item |
| `icon` | `React.ReactNode` | - | Icon to display before the label |
| `disabled` | `boolean` | `false` | Whether the breadcrumb item is disabled |
| `className` | `string` | - | Custom class name for the item |

## Accessibility Features

The Breadcrumbs component includes comprehensive accessibility features:

- **Navigation landmark**: Uses `<nav>` with proper aria-label
- **Ordered list structure**: Uses `<ol>` for semantic breadcrumb list
- **Current page indication**: Last item has `aria-current="page"`
- **Keyboard navigation**: All links are keyboard accessible
- **Screen reader support**: Proper labeling and structure
- **Disabled state**: Disabled items have `aria-disabled="true"`
- **Separator accessibility**: Separators are marked with `aria-hidden`

## Keyboard Navigation

- **Tab**: Navigate between breadcrumb links
- **Enter/Space**: Activate the focused breadcrumb link
- **Arrow Keys**: Navigate within the breadcrumb trail (when applicable)

## Examples

### E-commerce Navigation

```tsx
<Breadcrumbs 
  items={[
    { label: 'Home', href: '/', icon: <House size={16} /> },
    { label: 'Electronics', href: '/electronics' },
    { label: 'Computers', href: '/electronics/computers' },
    { label: 'Laptops', href: '/electronics/computers/laptops' },
    { label: 'Gaming Laptops', href: '/electronics/computers/laptops/gaming' },
    { label: 'ASUS ROG Strix', href: '/electronics/computers/laptops/gaming/asus-rog-strix' },
  ]}
  separator={<ChevronRight size={14} />}
/>
```

### File System Navigation

```tsx
<Breadcrumbs 
  items={[
    { label: 'Root', href: '/', icon: <Folder size={16} /> },
    { label: 'Users', href: '/users' },
    { label: 'john', href: '/users/john' },
    { label: 'Documents', href: '/users/john/documents' },
    { label: 'Projects', href: '/users/john/documents/projects' },
    { label: 'design-system', href: '/users/john/documents/projects/design-system' },
  ]}
/>
```

### Admin Dashboard

```tsx
<Breadcrumbs 
  items={[
    { label: 'Dashboard', href: '/admin', icon: <House size={16} /> },
    { label: 'Users', href: '/admin/users' },
    { label: 'User Management', href: '/admin/users/management' },
    { label: 'Edit User', href: '/admin/users/management/edit/123' },
  ]}
/>
```

### With Truncation

```tsx
const manyItems = Array.from({ length: 10 }, (_, i) => ({
  label: `Level ${i + 1}`,
  href: `/level${i + 1}`,
}));

<Breadcrumbs 
  items={manyItems}
  maxItems={5}  // Shows: Level 1 > ... > Level 8 > Level 9 > Level 10
/>
```

## Best Practices

1. **Keep it concise**: Limit breadcrumb depth to 3-5 levels when possible
2. **Use meaningful labels**: Make breadcrumb labels descriptive and user-friendly
3. **Provide context**: Include icons or visual cues to help users understand the hierarchy
4. **Handle long paths**: Use truncation for very deep navigation paths
5. **Current page indication**: Always make the current page clear (it's automatically handled)
6. **Consistent separators**: Use the same separator style throughout your application
7. **Mobile considerations**: Breadcrumbs work well on mobile but consider truncation for small screens

## Implementation Notes

- The component automatically handles the last item as the current page
- Single items with href are rendered as links (not current page)
- Disabled items are rendered as non-clickable text
- Truncation always shows the first item, ellipsis, and the last items
- Custom separators can be strings, icons, or React components
- The component supports forwardRef for imperative operations
