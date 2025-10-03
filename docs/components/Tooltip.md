# Tooltip Component

Tooltip component for providing contextual information and help text with various placements and triggers.

## Import

```tsx
import { Tooltip } from '@cria/ui';
```

## Basic Usage

```tsx
<Tooltip content="This is a helpful tooltip">
  <Button>Hover me</Button>
</Tooltip>
```

## Placements

### Top
```tsx
<Tooltip content="Tooltip on top" placement="top">
  <Button>Top tooltip</Button>
</Tooltip>
```

### Bottom
```tsx
<Tooltip content="Tooltip on bottom" placement="bottom">
  <Button>Bottom tooltip</Button>
</Tooltip>
```

### Left
```tsx
<Tooltip content="Tooltip on left" placement="left">
  <Button>Left tooltip</Button>
</Tooltip>
```

### Right
```tsx
<Tooltip content="Tooltip on right" placement="right">
  <Button>Right tooltip</Button>
</Tooltip>
```

## With Different Triggers

### Button
```tsx
<Tooltip content="Click to save your changes">
  <Button variant="primary">Save</Button>
</Tooltip>
```

### Icon
```tsx
<Tooltip content="Delete this item">
  <Button variant="ghost" size="sm">
    <Trash size={16} />
  </Button>
</Tooltip>
```

### Input Field
```tsx
<Tooltip content="Enter your full name as it appears on your ID">
  <Input label="Full Name" placeholder="Enter your name" />
</Tooltip>
```

### Disabled Element
```tsx
<Tooltip content="This feature is not available in your plan">
  <Button disabled>Premium Feature</Button>
</Tooltip>
```

## Custom Delay

### Fast Tooltip
```tsx
<Tooltip content="Quick tooltip" delay={100}>
  <Button>Fast tooltip</Button>
</Tooltip>
```

### Slow Tooltip
```tsx
<Tooltip content="Slow tooltip" delay={1000}>
  <Button>Slow tooltip</Button>
</Tooltip>
```

## Disabled Tooltip

```tsx
<Tooltip content="This tooltip is disabled" disabled>
  <Button>No tooltip</Button>
</Tooltip>
```

## Complex Content

### Multi-line Tooltip
```tsx
<Tooltip content="This is a longer tooltip that spans multiple lines and provides more detailed information about the element.">
  <Button>Multi-line tooltip</Button>
</Tooltip>
```

### Rich Content Tooltip
```tsx
<Tooltip 
  content={
    <div>
      <Typography variant="body" weight="medium">Keyboard Shortcuts</Typography>
      <Typography variant="caption">Ctrl+S: Save</Typography>
      <Typography variant="caption">Ctrl+Z: Undo</Typography>
    </div>
  }
>
  <Button variant="ghost" size="sm">
    <Keyboard size={16} />
  </Button>
</Tooltip>
```

## Form Help

### Input Help
```tsx
<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
  <Input label="API Key" placeholder="Enter your API key" />
  <Tooltip content="You can find your API key in the developer settings">
    <Button variant="ghost" size="sm">
      <Info size={16} />
    </Button>
  </Tooltip>
</div>
```

### Form Field Help
```tsx
<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
  <Typography variant="body" weight="medium">Password</Typography>
  <Tooltip content="Password must be at least 8 characters long and contain at least one number and one special character">
    <Button variant="ghost" size="sm">
      <Question size={16} />
    </Button>
  </Tooltip>
</div>
```

## Navigation Help

### Menu Item Help
```tsx
<nav style={{ display: 'flex', gap: '16px' }}>
  <Tooltip content="View your dashboard and recent activity">
    <Button variant="ghost">Dashboard</Button>
  </Tooltip>
  
  <Tooltip content="Manage your projects and tasks">
    <Button variant="ghost">Projects</Button>
  </Tooltip>
  
  <Tooltip content="View and edit your profile settings">
    <Button variant="ghost">Profile</Button>
  </Tooltip>
</nav>
```

## Status Indicators

### Status Help
```tsx
<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
  <Badge variant="warning">Pending</Badge>
  <Tooltip content="This item is waiting for approval from an administrator">
    <Button variant="ghost" size="sm">
      <Info size={16} />
    </Button>
  </Tooltip>
</div>
```

### Error Help
```tsx
<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
  <Typography variant="body" color="error">Connection failed</Typography>
  <Tooltip content="Check your internet connection and try again. If the problem persists, contact support.">
    <Button variant="ghost" size="sm">
      <Warning size={16} />
    </Button>
  </Tooltip>
</div>
```

## Accessibility

The Tooltip component includes comprehensive accessibility features:

- **ARIA Attributes**: Proper `aria-describedby` and `role="tooltip"`
- **Keyboard Navigation**: Tooltips appear on focus for keyboard users
- **Screen Reader Support**: Content is announced to screen readers
- **Focus Management**: Proper focus handling

### Accessibility Example
```tsx
<Tooltip 
  content="This button will save your changes"
  aria-label="Save button with tooltip"
>
  <Button variant="primary">Save</Button>
</Tooltip>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `content` | `React.ReactNode` | - | Tooltip content |
| `placement` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | Tooltip placement |
| `delay` | `number` | `300` | Delay before showing tooltip (ms) |
| `disabled` | `boolean` | `false` | Whether the tooltip is disabled |
| `children` | `React.ReactNode` | - | Element to attach tooltip to |

## Styling

The Tooltip component uses design tokens for consistent styling:

- **Colors**: Background and text colors from color tokens
- **Spacing**: Consistent padding and margins
- **Typography**: Font family, size, and weight from tokens
- **Border Radius**: Consistent border radius
- **Shadows**: Subtle shadow for elevation
- **Transitions**: Smooth fade-in/out animations

## Best Practices

1. **Keep Content Concise**: Use short, clear tooltip text
2. **Provide Value**: Only show tooltips when they add helpful information
3. **Use Appropriate Placement**: Choose placement that doesn't obstruct content
4. **Test with Keyboard**: Ensure tooltips work for keyboard users
5. **Avoid Overuse**: Don't add tooltips to every element
6. **Consider Mobile**: Tooltips may not work well on touch devices

## Examples

### Icon Buttons with Tooltips
```tsx
<div style={{ display: 'flex', gap: '8px' }}>
  <Tooltip content="Edit this item">
    <Button variant="ghost" size="sm">
      <Pencil size={16} />
    </Button>
  </Tooltip>
  
  <Tooltip content="Delete this item">
    <Button variant="ghost" size="sm">
      <Trash size={16} />
    </Button>
  </Tooltip>
  
  <Tooltip content="Share this item">
    <Button variant="ghost" size="sm">
      <Share size={16} />
    </Button>
  </Tooltip>
</div>
```

### Form Field Help
```tsx
<form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <Input label="Username" placeholder="Enter username" />
    <Tooltip content="Username must be 3-20 characters long and contain only letters, numbers, and underscores">
      <Button variant="ghost" size="sm">
        <Question size={16} />
      </Button>
    </Tooltip>
  </div>
  
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <Input label="Email" type="email" placeholder="Enter email" />
    <Tooltip content="We'll use this email to send you important updates">
      <Button variant="ghost" size="sm">
        <Info size={16} />
      </Button>
    </Tooltip>
  </div>
</form>
```

### Status Help
```tsx
<div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <Badge variant="success">Active</Badge>
    <Tooltip content="This item is currently active and functioning normally">
      <Button variant="ghost" size="sm">
        <CheckCircle size={16} />
      </Button>
    </Tooltip>
  </div>
  
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <Badge variant="warning">Pending</Badge>
    <Tooltip content="This item is waiting for approval or processing">
      <Button variant="ghost" size="sm">
        <Clock size={16} />
      </Button>
    </Tooltip>
  </div>
  
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <Badge variant="error">Failed</Badge>
    <Tooltip content="This item failed to process. Click to retry or contact support">
      <Button variant="ghost" size="sm">
        <XCircle size={16} />
      </Button>
    </Tooltip>
  </div>
</div>
```

### Navigation Help
```tsx
<nav style={{ display: 'flex', gap: '16px', padding: '16px' }}>
  <Tooltip content="View your personal dashboard">
    <Button variant="ghost">
      <House size={20} />
      Dashboard
    </Button>
  </Tooltip>
  
  <Tooltip content="Manage your projects and tasks">
    <Button variant="ghost">
      <Folder size={20} />
      Projects
    </Button>
  </Tooltip>
  
  <Tooltip content="View and respond to messages">
    <Button variant="ghost">
      <Chat size={20} />
      Messages
    </Button>
  </Tooltip>
  
  <Tooltip content="Access your account settings">
    <Button variant="ghost">
      <Gear size={20} />
      Settings
    </Button>
  </Tooltip>
</nav>
```




