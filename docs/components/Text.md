# Text Component

Specialized text components for different content types with semantic HTML and consistent styling.

## Import

```tsx
import { TextBody, TextContent, TextContentTitle, TextContentImportant } from '@cria/ui';
```

## Components Overview

The Text component provides four specialized variants for different content contexts, and a unified CriaText token set for app-wide typography:

- **TextBody**: Default body text for UI copy and cards
- **TextContent**: Long-form content paragraphs with optimized readability
- **TextContentTitle**: Section titles within long-form content
- **TextContentImportant**: Highlighted/emphasized text

### CriaText Tokens

Unified tokens that wrap `Typography` and map directly to design tokens:

- **CriaTextBody1**: Default body text (semantic: p)
- **CriaTextBody2**: Smaller body text (semantic: p)
- **CriaTextBody1Inverse**: Body1 in inverse white for dark backgrounds (semantic: p)
- **CriaTextTitle1**: Large page title (semantic: h2 by default)
- **CriaTextTitle2**: Section title (semantic: h3 by default)
- **CriaTextImportant**: Medium-weight emphasis (semantic: span)
- **CriaTextAlert**: Error/danger emphasis in red (semantic: span)

## TextBody

Default body text for UI copy, cards, and interface elements.

```tsx
<TextBody>Default body text for cards and UI elements</TextBody>
```

### With Custom Element
```tsx
<TextBody as="p">Body text rendered as paragraph</TextBody>
<TextBody as="span">Inline body text</TextBody>
```

### In Cards
```tsx
<Card>
  <CardHeader>
    <Typography variant="h3">Card Title</Typography>
  </CardHeader>
  <CardContent>
    <TextBody>
      This is body text specifically designed for card content and UI elements.
    </TextBody>
  </CardContent>
</Card>
```

## TextContent

Optimized for long-form content paragraphs with better line height and spacing.

```tsx
<TextContent>
  This is for longer paragraphs and content blocks. It has optimized
  line height and spacing for better readability in long-form content.
  The text is designed to be comfortable to read over extended periods.
</TextContent>
```

### Article Content
```tsx
<article>
  <Typography variant="h1">Article Title</Typography>
  
  <TextContent>
    This is the introduction paragraph that provides context and overview
    of the article content. It uses optimized typography for better
    readability in long-form content.
  </TextContent>
  
  <TextContent>
    This is another paragraph that continues the article content.
    The TextContent component ensures consistent spacing and line height
    throughout the article for optimal reading experience.
  </TextContent>
</article>
```

## TextContentTitle

Section titles within long-form content with appropriate hierarchy.

```tsx
<TextContentTitle>Section Title</TextContentTitle>
```

### With Custom Element
```tsx
<TextContentTitle as="h2">Title as h2 element</TextContentTitle>
<TextContentTitle as="h3">Title as h3 element</TextContentTitle>
```

### In Content Structure
```tsx
<article>
  <Typography variant="h1">Main Article Title</Typography>
  
  <TextContent>
    Introduction paragraph with context and overview...
  </TextContent>
  
  <TextContentTitle>First Section</TextContentTitle>
  <TextContent>
    Content for the first section...
  </TextContent>
  
  <TextContentTitle>Second Section</TextContentTitle>
  <TextContent>
    Content for the second section...
  </TextContent>
</article>
```

## TextContentImportant

Highlighted/emphasized text that stands out from regular content.

```tsx
<TextContentImportant>
  This text is emphasized and stands out from regular content.
</TextContentImportant>
```

### With Custom Element
```tsx
<TextContentImportant as="strong">Important text as strong element</TextContentImportant>
<TextContentImportant as="em">Important text as emphasis element</TextContentImportant>
```

### In Content
```tsx
<TextContent>
  Regular paragraph content with some important information:
  <TextContentImportant as="span">
    This is the crucial part that needs emphasis.
  </TextContentImportant>
  The rest of the paragraph continues normally.
</TextContent>
```

## Custom Elements

All Text components support the `as` prop to override the default HTML element while preserving the variant styles.

```tsx
{/* Renders as h2 but with TextContentTitle styling */}
<TextContentTitle as="h2">Title styled as TextContentTitle</TextContentTitle>

{/* Renders as span but with TextBody styling */}
<TextBody as="span">Inline body text</TextBody>

{/* Renders as strong but with TextContentImportant styling */}
<TextContentImportant as="strong">Important text as strong</TextContentImportant>
```

## Styling Differences

Each Text component has optimized styling for its specific use case:

### TextBody
- **Font Size**: Standard body text size
- **Line Height**: Normal line height for UI elements
- **Weight**: Regular font weight
- **Use Case**: Cards, UI copy, interface text

### TextContent
- **Font Size**: Standard body text size
- **Line Height**: Relaxed line height for readability
- **Weight**: Regular font weight
- **Use Case**: Long-form content, articles, paragraphs

### TextContentTitle
- **Font Size**: Larger than body text
- **Line Height**: Tighter line height
- **Weight**: Medium to semi-bold
- **Use Case**: Section titles in content

### TextContentImportant
- **Font Size**: Standard body text size
- **Line Height**: Normal line height
- **Weight**: Medium to bold
- **Use Case**: Emphasized text, highlights

### CriaText Tokens – When to use

- **CriaTextTitle1**: Page headlines, top-level sections.
- **CriaTextTitle2**: Sub-sections in pages and cards.
- **CriaTextBody1**: Default UI copy and descriptions.
- **CriaTextBody2**: Secondary descriptions, dense UIs.
- **CriaTextBody1Inverse**: Text on dark surfaces or brand areas.
- **CriaTextImportant**: Short inline emphasis without color change.
- **CriaTextAlert**: Inline error/danger messages.

## Accessibility

All Text components ensure proper accessibility:

- **Semantic HTML**: Each component renders appropriate HTML elements
- **Screen Reader Support**: Proper heading hierarchy and content structure
- **Color Contrast**: All text meets WCAG AA contrast requirements
- **Focus Management**: Maintains proper focus flow

### Accessibility Example
```tsx
<article>
  <Typography variant="h1">Accessible Article</Typography>
  
  <TextContent>
    This article uses proper semantic structure with accessible text components.
  </TextContent>
  
  <TextContentTitle as="h2">Accessible Section</TextContentTitle>
  <TextContent>
    This section maintains proper heading hierarchy for screen readers.
    <TextContentImportant as="strong">
      Important information is properly emphasized.
    </TextContentImportant>
  </TextContent>
</article>
```

## Props

All Text components share the same base props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `as` | `keyof JSX.IntrinsicElements` | Semantic element for component | HTML element to render |
| `children` | `React.ReactNode` | - | Text content |
| `className` | `string` | `''` | Additional CSS class name |

## Styling

The Text components use design tokens for consistent styling:

- **Font Family**: Cartograph CF with system font fallbacks
- **Font Sizes**: Optimized sizes for each component type
- **Font Weights**: Appropriate weights for each use case
- **Line Heights**: Optimized for readability in each context
- **Colors**: Inherits from parent or uses default text colors

## Best Practices

1. **Use Appropriate Components**: Choose the right Text component for your content type
2. **Maintain Semantic Structure**: Use proper heading hierarchy with TextContentTitle
3. **Use Important Sparingly**: Only use TextContentImportant for truly important information
4. **Consider Custom Elements**: Use the `as` prop when you need different HTML elements
5. **Test with Screen Readers**: Ensure proper semantic structure
6. **Maintain Consistency**: Use the same Text components throughout your application

## Examples

### Blog Post Structure
```tsx
<article>
  <Typography variant="h1">Blog Post Title</Typography>
  
  <TextContent>
    This is the introduction paragraph that provides context and overview
    of the blog post content. It uses TextContent for optimal readability
    in long-form content.
  </TextContent>
  
  <TextContentTitle>Getting Started</TextContentTitle>
  <TextContent>
    This section covers the basics and getting started information.
    The content flows naturally with proper spacing and line height.
  </TextContent>
  
  <TextContentTitle>Advanced Topics</TextContentTitle>
  <TextContent>
    This section covers more advanced topics and concepts.
    <TextContentImportant as="span">
      Pay special attention to this important detail.
    </TextContentImportant>
    The rest of the content continues normally.
  </TextContent>
</article>
```

### Card Content
```tsx
<Card>
  <CardHeader>
    <Typography variant="h3">Product Information</Typography>
  </CardHeader>
  <CardContent>
    <TextBody>
      This product card uses TextBody for the description, which is
      optimized for UI copy and card content.
    </TextBody>
    
    <TextContentImportant as="strong">
      Limited time offer: 50% off!
    </TextContentImportant>
  </CardContent>
</Card>
```

### Documentation
```tsx
<div>
  <Typography variant="h1">Component Documentation</Typography>
  
  <TextContent>
    This documentation uses TextContent for the main description
    and explanatory text, ensuring optimal readability.
  </TextContent>
  
  <TextContentTitle>Props</TextContentTitle>
  <TextContent>
    The component accepts the following props:
  </TextContent>
  
  <TextContentTitle>Examples</TextContentTitle>
  <TextContent>
    Here are some usage examples:
    <TextContentImportant as="span">
      Remember to import the component first.
    </TextContentImportant>
  </TextContent>
</div>
```

### Mixed Content
```tsx
<div>
  <TextBody as="p">
    This paragraph uses TextBody for UI copy.
  </TextBody>
  
  <TextContent as="p">
    This paragraph uses TextContent for longer-form content
    with optimized line height and spacing.
  </TextContent>
  
  <TextContentTitle as="h3">Section Title</TextContentTitle>
  
  <TextContent as="p">
    More content with proper hierarchy and emphasis:
    <TextContentImportant as="strong">
      This is important information.
    </TextContentImportant>
  </TextContent>
</div>
```




