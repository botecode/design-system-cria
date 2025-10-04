# Textarea Component

A multi-line text input component for collecting longer text content from users.

## Features

- **Multiple Sizes**: Small, medium (default), and large variants
- **Multiple Variants**: Default, filled, outlined, and underlined styles
- **State Management**: Success, warning, error, and default states
- **Auto-resize**: Automatically adjusts height based on content
- **Character Count**: Optional character counting with max length
- **Accessibility**: Full ARIA support and keyboard navigation
- **Responsive**: Mobile-friendly design
- **Dark Mode**: Automatic dark mode support

## Basic Usage

```tsx
import { Textarea } from 'design-lib';

function MyForm() {
  return (
    <Textarea
      label="Message"
      placeholder="Enter your message here..."
      helperText="Please provide detailed feedback"
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Label text for the textarea |
| `placeholder` | `string` | - | Placeholder text |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size variant |
| `variant` | `'default' \| 'filled' \| 'outlined' \| 'underlined'` | `'default'` | Visual variant |
| `state` | `'default' \| 'success' \| 'warning' \| 'error'` | `'default'` | State variant |
| `disabled` | `boolean` | `false` | Whether the textarea is disabled |
| `required` | `boolean` | `false` | Whether the textarea is required |
| `readOnly` | `boolean` | `false` | Whether the textarea is read-only |
| `showCharacterCount` | `boolean` | `false` | Whether to show character count |
| `maxLength` | `number` | - | Maximum character length |
| `helperText` | `string` | - | Helper text below the textarea |
| `errorMessage` | `string` | - | Error message |
| `successMessage` | `string` | - | Success message |
| `warningMessage` | `string` | - | Warning message |
| `autoResize` | `boolean` | `false` | Whether to auto-resize height |
| `resize` | `'none' \| 'both' \| 'horizontal' \| 'vertical'` | `'vertical'` | Resize behavior |
| `rows` | `number` | `4` | Number of visible text lines |
| `cols` | `number` | - | Number of visible character widths |
| `className` | `string` | - | Custom CSS class |
| `style` | `React.CSSProperties` | - | Custom inline styles |
| `onChange` | `(event: ChangeEvent<HTMLTextAreaElement>) => void` | - | Change handler |
| `onFocus` | `(event: FocusEvent<HTMLTextAreaElement>) => void` | - | Focus handler |
| `onBlur` | `(event: FocusEvent<HTMLTextAreaElement>) => void` | - | Blur handler |

## Examples

### Basic Textarea

```tsx
<Textarea
  label="Comments"
  placeholder="Share your thoughts..."
  helperText="Your feedback helps us improve"
/>
```

### Required Field with Validation

```tsx
<Textarea
  label="Description"
  placeholder="Describe the issue..."
  required
  errorMessage="This field is required"
  state="error"
/>
```

### Character Count

```tsx
<Textarea
  label="Bio"
  placeholder="Tell us about yourself..."
  showCharacterCount
  maxLength={500}
  helperText="Maximum 500 characters"
/>
```

### Auto-resize

```tsx
<Textarea
  label="Notes"
  placeholder="Start typing..."
  autoResize
  helperText="This textarea grows with your content"
/>
```

### Different Sizes

```tsx
// Small
<Textarea size="sm" label="Short Note" placeholder="Brief message..." />

// Medium (default)
<Textarea size="md" label="Standard Note" placeholder="Regular message..." />

// Large
<Textarea size="lg" label="Long Note" placeholder="Detailed message..." />
```

### Different Variants

```tsx
// Default
<Textarea variant="default" label="Default" placeholder="Standard style..." />

// Filled
<Textarea variant="filled" label="Filled" placeholder="Filled background..." />

// Outlined
<Textarea variant="outlined" label="Outlined" placeholder="Thick border..." />

// Underlined
<Textarea variant="underlined" label="Underlined" placeholder="Bottom border only..." />
```

### Different States

```tsx
// Success
<Textarea
  state="success"
  label="Valid Input"
  successMessage="Looks good!"
  value="Valid content"
/>

// Warning
<Textarea
  state="warning"
  label="Review Needed"
  warningMessage="Please review this content"
  value="Content to review"
/>

// Error
<Textarea
  state="error"
  label="Invalid Input"
  errorMessage="Please fix the errors"
  value="Invalid content"
/>
```

### Controlled Component

```tsx
import { useState } from 'react';

function ControlledTextarea() {
  const [value, setValue] = useState('');

  return (
    <Textarea
      label="Controlled Textarea"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      showCharacterCount
      maxLength={200}
    />
  );
}
```

### Disabled and Read-only

```tsx
// Disabled
<Textarea
  disabled
  label="Disabled Textarea"
  value="This content cannot be edited"
  helperText="This field is disabled"
/>

// Read-only
<Textarea
  readOnly
  label="Read-only Textarea"
  value="This content is read-only"
  helperText="This field cannot be modified"
/>
```

### Custom Styling

```tsx
<Textarea
  label="Custom Styled"
  placeholder="Custom appearance..."
  className="my-custom-class"
  style={{ 
    borderColor: '#custom-color',
    borderRadius: '12px'
  }}
/>
```

### With Icons and Advanced Features

```tsx
<Textarea
  label="Advanced Textarea"
  placeholder="Advanced features..."
  rows={6}
  resize="both"
  showCharacterCount
  maxLength={1000}
  helperText="You can resize this textarea and see character count"
  style={{ minHeight: '120px' }}
/>
```

## Accessibility Features

The Textarea component includes comprehensive accessibility support:

- **ARIA Labels**: Proper labeling with `aria-labelledby`
- **ARIA Descriptions**: Helper text and messages linked via `aria-describedby`
- **ARIA States**: Required, invalid, and error states announced
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Support**: Error messages announced with `role="alert"`
- **Focus Management**: Clear focus indicators and proper focus order

## Styling

The component uses CSS custom properties for theming:

```css
/* Customize colors */
.cria-textarea {
  --cria-primary: #your-primary-color;
  --cria-success: #your-success-color;
  --cria-warning: #your-warning-color;
  --cria-error: #your-error-color;
}
```

## Best Practices

1. **Always provide labels** for accessibility
2. **Use helper text** to guide users on what to enter
3. **Set appropriate maxLength** when character limits exist
4. **Use auto-resize** for dynamic content areas
5. **Provide clear error messages** when validation fails
6. **Use appropriate sizes** based on expected content length
7. **Consider mobile users** with appropriate touch targets

## Testing

The component includes comprehensive tests covering:

- Rendering with different props
- User interactions (typing, focus, blur)
- Accessibility attributes
- Controlled vs uncontrolled behavior
- Character counting
- Auto-resize functionality
- Error states and validation
- Keyboard navigation

## Migration from Input

If migrating from the Input component:

```tsx
// Before (Input)
<Input type="textarea" label="Message" />

// After (Textarea)
<Textarea label="Message" />
```

The Textarea component provides better multi-line text handling with features like auto-resize and proper textarea-specific accessibility attributes.
