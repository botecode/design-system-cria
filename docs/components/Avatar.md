# Avatar Component

The Avatar component displays user profile images, initials, or icons with various sizes, shapes, and status indicators. Perfect for user profiles, chat interfaces, and user lists.

## Features

- **Multiple Display Types**: Images, initials, icons, or fallback content
- **Auto-generated Initials**: Automatically generates initials from names or email addresses
- **Size Variants**: Small, medium, large, and extra-large sizes
- **Shape Variants**: Circle, rounded, and square shapes
- **Status Indicators**: Online, offline, away, and busy status indicators
- **Interactive States**: Loading, disabled, and clickable states
- **Custom Colors**: Customizable background and text colors
- **Accessibility**: Full keyboard navigation and screen reader support

## Usage

### Basic Examples

```tsx
import { Avatar } from '@your-org/design-system';

// Image avatar
<Avatar 
  src="https://example.com/avatar.jpg" 
  alt="John Doe" 
  size="md" 
/>

// Initials avatar
<Avatar 
  initials="JD" 
  name="John Doe" 
  size="md" 
/>

// Icon avatar
<Avatar 
  icon={<User size={20} />} 
  size="md" 
/>

// Default avatar (no props)
<Avatar size="md" />
```

### Sizes

```tsx
<Avatar initials="XS" size="sm" />   // Small (32px)
<Avatar initials="MD" size="md" />   // Medium (40px) - default
<Avatar initials="LG" size="lg" />   // Large (56px)
<Avatar initials="XL" size="xl" />   // Extra Large (72px)
```

### Shape Variants

```tsx
<Avatar initials="C" variant="circle" size="lg" />   // Circle (default)
<Avatar initials="R" variant="rounded" size="lg" />  // Rounded
<Avatar initials="S" variant="square" size="lg" />   // Square
```

### Status Indicators

```tsx
<Avatar initials="ON" status="online" size="lg" />   // Online
<Avatar initials="OF" status="offline" size="lg" />  // Offline
<Avatar initials="AW" status="away" size="lg" />     // Away
<Avatar initials="BU" status="busy" size="lg" />     // Busy
```

### Custom Colors

```tsx
<Avatar
  initials="RB"
  backgroundColor="#ff6b6b"
  textColor="#ffffff"
  size="lg"
/>
```

### States

```tsx
// Loading state
<Avatar initials="LD" loading size="lg" />

// Disabled state
<Avatar initials="DS" disabled size="lg" />

// Clickable avatar
<Avatar 
  initials="CL" 
  clickable 
  size="lg" 
  onClick={() => console.log('Avatar clicked!')}
/>
```

### Auto-generated Initials

```tsx
// From name
<Avatar name="John Doe" size="lg" />                    // Shows "JD"
<Avatar name="Mary Jane Watson" size="lg" />            // Shows "MW"

// From email
<Avatar email="alice.brown@example.com" size="lg" />     // Shows "AB"
<Avatar email="mike.johnson.smith@company.com" size="lg" /> // Shows "MS"
```

### Fallback Handling

```tsx
// Fallback when image fails to load
<Avatar
  src="invalid-url.jpg"
  fallback="FB"
  alt="User with broken image"
  size="lg"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | - | Image source URL |
| `alt` | `string` | - | Alternative text for the image |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Avatar size |
| `variant` | `'circle' \| 'square' \| 'rounded'` | `'circle'` | Avatar shape variant |
| `initials` | `string` | - | Initials to display when no image is provided |
| `name` | `string` | - | Name to generate initials from |
| `email` | `string` | - | Email to generate initials from |
| `icon` | `React.ReactNode` | - | Icon to display when no image or initials are provided |
| `fallback` | `string` | - | Fallback content when image fails to load |
| `backgroundColor` | `string` | - | Custom background color |
| `textColor` | `string` | - | Custom text color |
| `disabled` | `boolean` | `false` | Whether the avatar is disabled |
| `loading` | `boolean` | `false` | Whether the avatar is in loading state |
| `status` | `'online' \| 'offline' \| 'away' \| 'busy'` | - | Status indicator |
| `clickable` | `boolean` | `false` | Whether the avatar is clickable |
| `onClick` | `(event: React.MouseEvent<HTMLDivElement>) => void` | - | Click handler |
| `className` | `string` | `''` | Custom class name |
| `style` | `React.CSSProperties` | - | Custom styles |

## Accessibility Features

The Avatar component includes comprehensive accessibility features:

- **ARIA labels**: Proper labeling with alt text or aria-label
- **Role attributes**: Uses 'img' role for non-image avatars
- **Keyboard navigation**: Full keyboard support for clickable avatars (Enter and Space keys)
- **Screen reader support**: Clear descriptions for different avatar types
- **Focus management**: Proper focus indicators and tab order
- **Status indicators**: Visual status with aria-hidden for decorative elements

## Keyboard Navigation

When an avatar is clickable (`clickable` prop or `onClick` handler):

- **Tab**: Focus the avatar
- **Enter**: Activate the avatar (triggers onClick)
- **Space**: Activate the avatar (triggers onClick)

## Examples

### User List

```tsx
const users = [
  { name: 'Alice Johnson', status: 'online' },
  { name: 'Bob Smith', status: 'away' },
  { name: 'Carol Davis', status: 'offline' },
  { name: 'David Wilson', status: 'busy' },
];

{users.map((user, index) => (
  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
    <Avatar
      name={user.name}
      status={user.status}
      size="md"
      clickable
      onClick={() => console.log(`${user.name} selected!`)}
    />
    <div>
      <Typography variant="body" weight="medium">
        {user.name}
      </Typography>
      <Typography variant="caption" color="secondary">
        {user.status}
      </Typography>
    </div>
  </div>
))}
```

### Profile Header

```tsx
<div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
  <Avatar
    src="https://example.com/profile.jpg"
    alt="User Profile"
    size="lg"
    status="online"
  />
  <div>
    <Typography variant="h3">John Doe</Typography>
    <Typography variant="body" color="secondary">Software Engineer</Typography>
  </div>
</div>
```

## Best Practices

1. **Always provide alt text** for image avatars to ensure accessibility
2. **Use meaningful initials** when images are not available
3. **Provide fallback content** for better user experience when images fail to load
4. **Use appropriate sizes** based on context (small for lists, large for profiles)
5. **Consider status indicators** for real-time applications
6. **Test keyboard navigation** to ensure proper accessibility

## Implementation Notes

- The component automatically generates initials from names or email addresses
- Image loading states are handled internally with proper error fallbacks
- Custom colors override default theme colors
- Status indicators are purely visual and marked with `aria-hidden`
- The component supports forwardRef for imperative operations
