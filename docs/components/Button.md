# Button Component

Interactive button component with multiple variants, sizes, and states for user interactions.

## Import

```tsx
import { Button } from '@cria/ui';
```

## Basic Usage

```tsx
<Button variant="primary" size="md" onClick={handleClick}>
  Click me
</Button>
```

## Variants

### Primary
The main action button with primary brand color.

```tsx
<Button variant="primary">Primary Button</Button>
```

### Secondary
Secondary action button with subtle styling.

```tsx
<Button variant="secondary">Secondary Button</Button>
```

### Outline
Button with transparent background and border.

```tsx
<Button variant="outline">Outline Button</Button>
```

### Ghost
Button with no background or border.

```tsx
<Button variant="ghost">Ghost Button</Button>
```

### Danger
Button for destructive actions.

```tsx
<Button variant="danger">Delete</Button>
```

## Sizes

### Small
```tsx
<Button size="sm">Small Button</Button>
```

### Medium (Default)
```tsx
<Button size="md">Medium Button</Button>
```

### Large
```tsx
<Button size="lg">Large Button</Button>
```

## States

### Loading State
```tsx
<Button loading disabled>
  Processing...
</Button>
```

### Disabled State
```tsx
<Button disabled>Disabled Button</Button>
```

## With Icons

### Left Icon
```tsx
<Button leftIcon={<ArrowLeft />}>
  Back
</Button>
```

### Right Icon
```tsx
<Button rightIcon={<ArrowRight />}>
  Next
</Button>
```

### Both Icons
```tsx
<Button 
  leftIcon={<Star />} 
  rightIcon={<Star />}
>
  Star
</Button>
```

## Full Width

```tsx
<Button fullWidth variant="outline">
  Full Width Button
</Button>
```

## Interactive Examples

### Click Handler
```tsx
<Button onClick={() => console.log('Button clicked!')}>
  Log to Console
</Button>
```

### Link Button
```tsx
<Button as="a" href="https://example.com" target="_blank">
  External Link
</Button>
```

## Accessibility

The Button component includes built-in accessibility features:

- **Keyboard Navigation**: Supports Enter and Space key activation
- **Focus Management**: Visible focus indicators
- **ARIA Attributes**: Proper `role="button"` and `aria-disabled` attributes
- **Screen Reader Support**: Descriptive text for loading and disabled states

### Accessibility Example
```tsx
<Button 
  aria-label="Close dialog"
  aria-describedby="close-help"
>
  Close
</Button>
<div id="close-help">This will close the current dialog</div>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'danger'` | `'primary'` | Button variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `loading` | `boolean` | `false` | Whether the button is in a loading state |
| `disabled` | `boolean` | `false` | Whether the button is disabled |
| `leftIcon` | `React.ReactNode` | - | Icon to display before the text |
| `rightIcon` | `React.ReactNode` | - | Icon to display after the text |
| `fullWidth` | `boolean` | `false` | Whether the button should take full width |
| `children` | `React.ReactNode` | - | Button content |

## Styling

The Button component uses CSS-in-JS with design tokens for consistent styling:

- **Colors**: Uses primary, secondary, and semantic color tokens
- **Spacing**: Consistent padding and margins using spacing tokens
- **Typography**: Font family, size, and weight from typography tokens
- **Border Radius**: Consistent border radius using radius tokens
- **Shadows**: Subtle shadows for elevated variants

## Best Practices

1. **Use Primary for Main Actions**: Reserve primary variant for the most important action on a page
2. **Use Danger for Destructive Actions**: Clearly indicate actions that cannot be undone
3. **Provide Loading States**: Show loading indicators for async operations
4. **Use Descriptive Labels**: Make button text clear and actionable
5. **Consider Icon Usage**: Icons can enhance usability but don't rely on them alone
6. **Test Keyboard Navigation**: Ensure all buttons are accessible via keyboard

## Examples

### Form Submit Button
```tsx
<Button 
  type="submit" 
  variant="primary" 
  loading={isSubmitting}
  disabled={!isFormValid}
>
  {isSubmitting ? 'Submitting...' : 'Submit Form'}
</Button>
```

### Action Group
```tsx
<div style={{ display: 'flex', gap: '12px' }}>
  <Button variant="outline" onClick={handleCancel}>
    Cancel
  </Button>
  <Button variant="primary" onClick={handleSave}>
    Save Changes
  </Button>
</div>
```

### Icon-Only Button
```tsx
<Button 
  variant="ghost" 
  size="sm"
  aria-label="Close"
  onClick={handleClose}
>
  <X size={16} />
</Button>
```




