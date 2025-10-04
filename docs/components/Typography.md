# Typography Component

Typography component for consistent text styling across the design system. Provides semantic HTML elements with predefined styles.

## Import

```tsx
import { Typography } from '@cria/ui';
```

## Basic Usage

```tsx
<Typography variant="h1">Main Heading</Typography>
<Typography variant="body" color="secondary">Body text</Typography>
```

## Variants

### Display
Largest text for hero sections and main titles.

```tsx
<Typography variant="display">Welcome to CRIA</Typography>
```

### Headings
Semantic heading variants that map to appropriate HTML elements.

```tsx
<Typography variant="h1">Heading 1</Typography>
<Typography variant="h2">Heading 2</Typography>
<Typography variant="h3">Heading 3</Typography>
```

### Titles
Alternative heading styles for different contexts.

```tsx
<Typography variant="title1">Title 1</Typography>
<Typography variant="title2">Title 2</Typography>
<Typography variant="title3">Title 3</Typography>
```

### Body Text
Standard text for content and UI copy.

```tsx
<Typography variant="body">Regular body text</Typography>
<Typography variant="bodySmall">Smaller body text</Typography>
```

### Caption
Small text for labels, captions, and metadata.

```tsx
<Typography variant="caption">Caption text</Typography>
```

## Colors

### Primary Colors
```tsx
<Typography color="primary">Primary text</Typography>
<Typography color="primaryLight">Light primary text</Typography>
```

### Content Colors
```tsx
<Typography color="content">Main content text</Typography>
<Typography color="secondary">Secondary text</Typography>
<Typography color="secondaryDark">Dark secondary text</Typography>
```

### State Colors
```tsx
<Typography color="success">Success message</Typography>
<Typography color="warning">Warning message</Typography>
<Typography color="error">Error message</Typography>
<Typography color="info">Info message</Typography>
```

### Utility Colors
```tsx
<Typography color="disabled">Disabled text</Typography>
<Typography color="inverse">Inverse text (for dark backgrounds)</Typography>
```

## Custom Elements

Override the default HTML element while preserving the variant styles.

```tsx
{/* Renders as h1 but with h2 styling */}
<Typography variant="h2" as="h1">Heading styled as h2</Typography>

{/* Renders as span but with paragraph styling */}
<Typography variant="body" as="span">Inline body text</Typography>

{/* Renders as div but with heading styling */}
<Typography variant="h3" as="div">Div with heading styles</Typography>
```

## Font Weights

```tsx
<Typography weight="thin">Thin text</Typography>
<Typography weight="light">Light text</Typography>
<Typography weight="regular">Regular text</Typography>
<Typography weight="medium">Medium text</Typography>
<Typography weight="semiBold">Semi-bold text</Typography>
<Typography weight="bold">Bold text</Typography>
<Typography weight="extraBold">Extra-bold text</Typography>
<Typography weight="heavy">Heavy text</Typography>
```

## Text Alignment

```tsx
<Typography align="left">Left aligned text</Typography>
<Typography align="center">Center aligned text</Typography>
<Typography align="right">Right aligned text</Typography>
<Typography align="justify">Justified text</Typography>
```

## Line Height

```tsx
<Typography lineHeight="tight">Tight line height</Typography>
<Typography lineHeight="normal">Normal line height</Typography>
<Typography lineHeight="relaxed">Relaxed line height</Typography>
```

## Letter Spacing

```tsx
<Typography letterSpacing="tight">Tight letter spacing</Typography>
<Typography letterSpacing="normal">Normal letter spacing</Typography>
<Typography letterSpacing="wide">Wide letter spacing</Typography>
```

## Accessibility

The Typography component ensures proper semantic HTML and accessibility:

- **Semantic Elements**: Each variant maps to appropriate HTML elements (h1, h2, p, etc.)
- **Screen Reader Support**: Proper heading hierarchy for screen readers
- **Color Contrast**: All color variants meet WCAG AA contrast requirements
- **Focus Management**: Maintains proper focus flow

### Accessibility Example
```tsx
{/* Proper heading hierarchy */}
<Typography variant="h1">Page Title</Typography>
<Typography variant="h2">Section Title</Typography>
<Typography variant="h3">Subsection Title</Typography>

{/* Descriptive text with proper contrast */}
<Typography variant="body" color="secondary">
  This text has sufficient contrast for readability
</Typography>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'display' \| 'h1' \| 'h2' \| 'h3' \| 'title1' \| 'title2' \| 'title3' \| 'body' \| 'bodySmall' \| 'caption'` | `'body'` | Typography variant |
| `as` | `keyof JSX.IntrinsicElements` | Semantic element for variant | HTML element to render |
| `color` | `'primary' \| 'primaryLight' \| 'content' \| 'secondary' \| 'secondaryDark' \| 'disabled' \| 'inverse' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'content'` | Text color |
| `weight` | `'thin' \| 'extraLight' \| 'light' \| 'regular' \| 'medium' \| 'semiBold' \| 'bold' \| 'extraBold' \| 'heavy'` | Variant default | Font weight |
| `align` | `'left' \| 'center' \| 'right' \| 'justify'` | `'left'` | Text alignment |
| `lineHeight` | `'tight' \| 'normal' \| 'relaxed'` | Variant default | Line height |
| `letterSpacing` | `'tight' \| 'normal' \| 'wide'` | Variant default | Letter spacing |
| `children` | `React.ReactNode` | - | Text content |

## Styling

The Typography component uses design tokens for consistent styling:

- **Font Family**: Cartograph CF with system font fallbacks
- **Font Sizes**: Consistent scale from 12px (caption) to 48px (display)
- **Font Weights**: Full range from 100 (thin) to 900 (heavy)
- **Line Heights**: Optimized for readability
- **Colors**: Semantic color tokens for different contexts

## Best Practices

1. **Use Semantic Variants**: Choose variants that match the content hierarchy
2. **Maintain Heading Hierarchy**: Don't skip heading levels (h1 → h2 → h3)
3. **Consider Color Contrast**: Ensure sufficient contrast for readability
4. **Use Appropriate Weights**: Don't overuse bold or heavy weights
5. **Keep Line Lengths Reasonable**: Long lines are harder to read
6. **Test with Screen Readers**: Ensure proper semantic structure

## Examples

### Article Structure
```tsx
<article>
  <Typography variant="h1">Article Title</Typography>
  <Typography variant="body" color="secondary">
    Published on {date} by {author}
  </Typography>
  
  <Typography variant="h2">Introduction</Typography>
  <Typography variant="body">
    This is the introduction paragraph that provides context...
  </Typography>
  
  <Typography variant="h3">Key Points</Typography>
  <Typography variant="body">
    Here are the main points to consider...
  </Typography>
</article>
```

### Card Content
```tsx
<Card>
  <CardHeader>
    <Typography variant="title2">Card Title</Typography>
  </CardHeader>
  <CardContent>
    <Typography variant="body" color="secondary">
      Card description or summary text
    </Typography>
    <Typography variant="body">
      Main card content goes here...
    </Typography>
  </CardContent>
  <CardFooter>
    <Typography variant="caption" color="secondary">
      Last updated: {date}
    </Typography>
  </CardFooter>
</Card>
```

### Form Labels
```tsx
<form>
  <Typography variant="body" weight="medium">
    Email Address
  </Typography>
  <Input type="email" placeholder="Enter your email" />
  
  <Typography variant="caption" color="secondary">
    We'll never share your email with anyone else.
  </Typography>
</form>
```

### Status Messages
```tsx
{/* Success message */}
<Typography variant="body" color="success">
  ✓ Your changes have been saved successfully
</Typography>

{/* Error message */}
<Typography variant="body" color="error">
  ⚠ Please check your input and try again
</Typography>

{/* Info message */}
<Typography variant="body" color="info">
  ℹ This feature is currently in beta
</Typography>
```




