# Badge Component

Badge component for status indicators, counts, and labels with various variants and sizes.

## Import

```tsx
import { Badge } from '@cria/ui';
```

## Basic Usage

```tsx
<Badge variant="primary">New</Badge>
```

## Variants

### Primary
```tsx
<Badge variant="primary">Primary</Badge>
```

### Secondary
```tsx
<Badge variant="secondary">Secondary</Badge>
```

### Success
```tsx
<Badge variant="success">Active</Badge>
```

### Warning
```tsx
<Badge variant="warning">Pending</Badge>
```

### Error
```tsx
<Badge variant="error">Error</Badge>
```

### Info
```tsx
<Badge variant="info">Info</Badge>
```

## Sizes

### Small
```tsx
<Badge size="sm" variant="primary">Small</Badge>
```

### Medium (Default)
```tsx
<Badge size="md" variant="primary">Medium</Badge>
```

### Large
```tsx
<Badge size="lg" variant="primary">Large</Badge>
```

## With Count

```tsx
<Badge variant="primary" count={5}>
  Notifications
</Badge>
```

### Large Count
```tsx
<Badge variant="error" count={99}>
  Messages
</Badge>
```

### Count with Plus
```tsx
<Badge variant="warning" count={100}>
  Items
</Badge>
```

## Dot Variant

```tsx
<Badge variant="primary" dot>
  Online
</Badge>
```

### Status Indicators
```tsx
<div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <Badge variant="success" dot />
    <Typography>Online</Typography>
  </div>
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <Badge variant="warning" dot />
    <Typography>Away</Typography>
  </div>
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <Badge variant="error" dot />
    <Typography>Offline</Typography>
  </div>
</div>
```

## In Context

### User Status
```tsx
<div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
  <img src="/avatar.jpg" alt="User" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
  <div>
    <Typography variant="body" weight="medium">John Doe</Typography>
    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
      <Badge variant="success" dot />
      <Typography variant="caption" color="secondary">Online</Typography>
    </div>
  </div>
</div>
```

### Notification Count
```tsx
<Button variant="ghost" style={{ position: 'relative' }}>
  <Bell size={20} />
  <Badge 
    variant="error" 
    count={3}
    style={{ position: 'absolute', top: '-8px', right: '-8px' }}
  />
</Button>
```

### Order Status
```tsx
<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
  <Typography variant="body">Order #12345</Typography>
  <Badge variant="success">Completed</Badge>
</div>

<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
  <Typography variant="body">Order #12346</Typography>
  <Badge variant="warning">Processing</Badge>
</div>

<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
  <Typography variant="body">Order #12347</Typography>
  <Badge variant="error">Cancelled</Badge>
</div>
```

### Feature Tags
```tsx
<div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
  <Badge variant="primary">New Feature</Badge>
  <Badge variant="info">Beta</Badge>
  <Badge variant="success">Stable</Badge>
  <Badge variant="warning">Deprecated</Badge>
</div>
```

## Accessibility

The Badge component includes accessibility features:

- **ARIA Labels**: Proper labeling for screen readers
- **Color Contrast**: All variants meet WCAG AA contrast requirements
- **Semantic HTML**: Uses appropriate HTML elements

### Accessibility Example
```tsx
<Badge 
  variant="success" 
  aria-label="Status: Online"
>
  Online
</Badge>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'primary'` | Badge variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Badge size |
| `count` | `number` | - | Count to display |
| `dot` | `boolean` | `false` | Whether to show as a dot |
| `children` | `React.ReactNode` | - | Badge content |

## Styling

The Badge component uses design tokens for consistent styling:

- **Colors**: Semantic colors for different variants
- **Spacing**: Consistent padding and margins
- **Typography**: Font family, size, and weight from tokens
- **Border Radius**: Consistent border radius
- **Shadows**: Subtle shadows for elevation

## Best Practices

1. **Use Appropriate Variants**: Choose variants that match the context
2. **Keep Text Concise**: Use short, clear labels
3. **Use Counts Sparingly**: Only show counts when they add value
4. **Consider Color Blindness**: Don't rely solely on color for meaning
5. **Test Contrast**: Ensure sufficient contrast for readability
6. **Use Consistently**: Apply the same badge styles throughout your app

## Examples

### Dashboard Status
```tsx
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
  <Card>
    <CardContent>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="body">Active Users</Typography>
        <Badge variant="success" count={1234} />
      </div>
    </CardContent>
  </Card>
  
  <Card>
    <CardContent>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="body">Pending Orders</Typography>
        <Badge variant="warning" count={56} />
      </div>
    </CardContent>
  </Card>
  
  <Card>
    <CardContent>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="body">Failed Jobs</Typography>
        <Badge variant="error" count={3} />
      </div>
    </CardContent>
  </Card>
</div>
```

### User List with Status
```tsx
{users.map(user => (
  <div key={user.id} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px' }}>
    <img src={user.avatar} alt={user.name} style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
    <div style={{ flex: 1 }}>
      <Typography variant="body" weight="medium">{user.name}</Typography>
      <Typography variant="caption" color="secondary">{user.email}</Typography>
    </div>
    <Badge variant={user.status === 'active' ? 'success' : 'warning'} dot>
      {user.status}
    </Badge>
  </div>
))}
```

### Feature List
```tsx
<div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
    <Typography variant="body">User Authentication</Typography>
    <Badge variant="success">Available</Badge>
  </div>
  
  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
    <Typography variant="body">Advanced Analytics</Typography>
    <Badge variant="info">Beta</Badge>
  </div>
  
  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
    <Typography variant="body">Legacy API</Typography>
    <Badge variant="warning">Deprecated</Badge>
  </div>
  
  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
    <Typography variant="body">Mobile App</Typography>
    <Badge variant="primary">Coming Soon</Badge>
  </div>
</div>
```

### Notification Center
```tsx
<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
    <Bell size={20} />
    <Typography variant="h6">Notifications</Typography>
    <Badge variant="error" count={5} />
  </div>
  
  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Typography variant="body">New message</Typography>
      <Badge variant="primary" dot />
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Typography variant="body">System update</Typography>
      <Badge variant="info" dot />
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Typography variant="body">Security alert</Typography>
      <Badge variant="error" dot />
    </div>
  </div>
</div>
```




