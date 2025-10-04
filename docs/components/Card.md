# Card Component

Card component for grouping related content with consistent styling and layout options.

## Import

```tsx
import { Card, CardHeader, CardContent, CardFooter } from '@cria/ui';
```

## Basic Usage

```tsx
<Card>
  <CardHeader>
    <Typography variant="h3">Card Title</Typography>
  </CardHeader>
  <CardContent>
    <Typography>Card content goes here</Typography>
  </CardContent>
  <CardFooter>
    <Button variant="primary">Action</Button>
  </CardFooter>
</Card>
```

## Variants

### Default
Standard card with subtle background and border.

```tsx
<Card>
  <CardContent>
    <Typography>Default card content</Typography>
  </CardContent>
</Card>
```

### Elevated
Card with shadow for emphasis.

```tsx
<Card variant="elevated">
  <CardContent>
    <Typography>Elevated card content</Typography>
  </CardContent>
</Card>
```

### Outlined
Card with prominent border.

```tsx
<Card variant="outlined">
  <CardContent>
    <Typography>Outlined card content</Typography>
  </CardContent>
</Card>
```

### Filled
Card with filled background.

```tsx
<Card variant="filled">
  <CardContent>
    <Typography>Filled card content</Typography>
  </CardContent>
</Card>
```

## Sizes

### Small
```tsx
<Card size="sm">
  <CardContent>
    <Typography>Small card content</Typography>
  </CardContent>
</Card>
```

### Medium (Default)
```tsx
<Card size="md">
  <CardContent>
    <Typography>Medium card content</Typography>
  </CardContent>
</Card>
```

### Large
```tsx
<Card size="lg">
  <CardContent>
    <Typography>Large card content</Typography>
  </CardContent>
</Card>
```

## Interactive Cards

### Clickable Card
```tsx
<Card interactive onClick={handleCardClick}>
  <CardContent>
    <Typography>Clickable card content</Typography>
  </CardContent>
</Card>
```

### Disabled Card
```tsx
<Card disabled>
  <CardContent>
    <Typography>Disabled card content</Typography>
  </CardContent>
</Card>
```

## Card Sections

### Header Only
```tsx
<Card>
  <CardHeader>
    <Typography variant="h3">Card Title</Typography>
  </CardHeader>
</Card>
```

### Content Only
```tsx
<Card>
  <CardContent>
    <Typography>Card content without header or footer</Typography>
  </CardContent>
</Card>
```

### Footer Only
```tsx
<Card>
  <CardFooter>
    <Button variant="primary">Action</Button>
  </CardFooter>
</Card>
```

### Complete Card
```tsx
<Card>
  <CardHeader>
    <Typography variant="h3">Product Name</Typography>
    <Typography variant="body" color="secondary">Product category</Typography>
  </CardHeader>
  <CardContent>
    <Typography>Product description and details...</Typography>
  </CardContent>
  <CardFooter>
    <div style={{ display: 'flex', gap: '12px' }}>
      <Button variant="outline">Learn More</Button>
      <Button variant="primary">Add to Cart</Button>
    </div>
  </CardFooter>
</Card>
```

## Card Layouts

### Product Card
```tsx
<Card variant="elevated" size="md">
  <CardHeader>
    <img src="/product.jpg" alt="Product" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
    <Typography variant="h4" style={{ marginTop: '16px' }}>Product Name</Typography>
    <Typography variant="body" color="secondary">$99.99</Typography>
  </CardHeader>
  <CardContent>
    <Typography variant="body">
      Product description that explains the key features and benefits...
    </Typography>
  </CardContent>
  <CardFooter>
    <Button variant="primary" fullWidth>Add to Cart</Button>
  </CardFooter>
</Card>
```

### User Profile Card
```tsx
<Card variant="outlined">
  <CardHeader>
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <img src="/avatar.jpg" alt="User" style={{ width: '48px', height: '48px', borderRadius: '50%' }} />
      <div>
        <Typography variant="h4">John Doe</Typography>
        <Typography variant="body" color="secondary">Software Engineer</Typography>
      </div>
    </div>
  </CardHeader>
  <CardContent>
    <Typography variant="body">
      Experienced software engineer with expertise in React, TypeScript, and modern web development.
    </Typography>
  </CardContent>
  <CardFooter>
    <Button variant="outline" size="sm">View Profile</Button>
    <Button variant="primary" size="sm">Connect</Button>
  </CardFooter>
</Card>
```

### Statistics Card
```tsx
<Card variant="filled">
  <CardContent>
    <div style={{ textAlign: 'center' }}>
      <Typography variant="display" color="primary">1,234</Typography>
      <Typography variant="body" color="secondary">Total Users</Typography>
    </div>
  </CardContent>
</Card>
```

## Accessibility

The Card component includes accessibility features:

- **Semantic HTML**: Uses proper HTML structure
- **Keyboard Navigation**: Supports keyboard interaction for interactive cards
- **Focus Management**: Visible focus indicators
- **Screen Reader Support**: Proper heading hierarchy and content structure

### Accessibility Example
```tsx
<Card interactive onClick={handleClick} role="button" tabIndex={0}>
  <CardHeader>
    <Typography variant="h3">Accessible Card</Typography>
  </CardHeader>
  <CardContent>
    <Typography>This card is fully accessible via keyboard and screen readers</Typography>
  </CardContent>
</Card>
```

## Props

### Card Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'elevated' \| 'outlined' \| 'filled'` | `'default'` | Card variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Card size |
| `interactive` | `boolean` | `false` | Whether the card is clickable |
| `disabled` | `boolean` | `false` | Whether the card is disabled |
| `children` | `React.ReactNode` | - | Card content |

### CardHeader Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | Header content |

### CardContent Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | Content |

### CardFooter Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | Footer content |

## Styling

The Card component uses design tokens for consistent styling:

- **Colors**: Background and border colors from color tokens
- **Spacing**: Consistent padding and margins using spacing tokens
- **Border Radius**: Consistent border radius using radius tokens
- **Shadows**: Subtle shadows for elevated variants
- **Transitions**: Smooth hover and focus transitions

## Best Practices

1. **Use Appropriate Variants**: Choose variants that match the content importance
2. **Maintain Consistent Structure**: Use header, content, and footer sections consistently
3. **Keep Content Focused**: Each card should have a single, clear purpose
4. **Use Interactive Cards Sparingly**: Only make cards clickable when the entire card represents an action
5. **Provide Visual Hierarchy**: Use typography and spacing to create clear content hierarchy
6. **Test with Screen Readers**: Ensure proper semantic structure

## Examples

### Dashboard Cards
```tsx
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
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
  
  <Card variant="elevated">
    <CardContent>
      <Typography variant="h3" color="warning">89</Typography>
      <Typography variant="body" color="secondary">Pending Orders</Typography>
    </CardContent>
  </Card>
</div>
```

### Feature Cards
```tsx
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
  <Card variant="outlined" interactive>
    <CardHeader>
      <Typography variant="h4">Feature 1</Typography>
    </CardHeader>
    <CardContent>
      <Typography variant="body">
        Description of the first feature and its benefits.
      </Typography>
    </CardContent>
  </Card>
  
  <Card variant="outlined" interactive>
    <CardHeader>
      <Typography variant="h4">Feature 2</Typography>
    </CardHeader>
    <CardContent>
      <Typography variant="body">
        Description of the second feature and its benefits.
      </Typography>
    </CardContent>
  </Card>
</div>
```

### Form Card
```tsx
<Card variant="elevated" size="lg">
  <CardHeader>
    <Typography variant="h3">Contact Form</Typography>
    <Typography variant="body" color="secondary">
      Get in touch with us
    </Typography>
  </CardHeader>
  <CardContent>
    <form>
      <Input label="Name" placeholder="Enter your name" required />
      <Input label="Email" type="email" placeholder="Enter your email" required />
      <Input label="Message" placeholder="Enter your message" multiline rows={4} required />
    </form>
  </CardContent>
  <CardFooter>
    <Button variant="primary">Send Message</Button>
  </CardFooter>
</Card>
```




