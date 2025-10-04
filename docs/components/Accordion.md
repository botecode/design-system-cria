# Accordion Component

Accordion component for collapsible content sections with support for single or multiple open items.

## Import

```tsx
import { Accordion, AccordionItem, AccordionHeader, AccordionContent } from '@cria/ui';
```

## Basic Usage

```tsx
<Accordion>
  <AccordionItem value="item1">
    <AccordionHeader>Section 1</AccordionHeader>
    <AccordionContent>
      <Typography>Content for section 1</Typography>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item2">
    <AccordionHeader>Section 2</AccordionHeader>
    <AccordionContent>
      <Typography>Content for section 2</Typography>
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

## Single Selection (Default)

Only one item can be open at a time.

```tsx
<Accordion allowMultiple={false}>
  <AccordionItem value="item1">
    <AccordionHeader>What is CRIA?</AccordionHeader>
    <AccordionContent>
      <Typography>
        CRIA is a comprehensive design system built for modern applications.
      </Typography>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item2">
    <AccordionHeader>How do I get started?</AccordionHeader>
    <AccordionContent>
      <Typography>
        You can get started by installing the package and following our documentation.
      </Typography>
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

## Multiple Selection

Multiple items can be open simultaneously.

```tsx
<Accordion allowMultiple={true}>
  <AccordionItem value="item1">
    <AccordionHeader>Installation</AccordionHeader>
    <AccordionContent>
      <Typography>Installation instructions and requirements.</Typography>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item2">
    <AccordionHeader>Configuration</AccordionHeader>
    <AccordionContent>
      <Typography>Configuration options and setup.</Typography>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item3">
    <AccordionHeader>Usage</AccordionHeader>
    <AccordionContent>
      <Typography>Basic usage examples and patterns.</Typography>
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

## Default Open Items

Set which items should be open by default.

```tsx
<Accordion 
  allowMultiple={true} 
  defaultOpenItems={['item1', 'item3']}
>
  <AccordionItem value="item1">
    <AccordionHeader>Always Open</AccordionHeader>
    <AccordionContent>
      <Typography>This item is open by default.</Typography>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item2">
    <AccordionHeader>Closed by Default</AccordionHeader>
    <AccordionContent>
      <Typography>This item is closed by default.</Typography>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item3">
    <AccordionHeader>Also Open</AccordionHeader>
    <AccordionContent>
      <Typography>This item is also open by default.</Typography>
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

## Controlled Component

Control the open state programmatically.

```tsx
const [openItems, setOpenItems] = useState(['item1']);

<Accordion
  allowMultiple={true}
  openItems={openItems}
  onChange={setOpenItems}
>
  <AccordionItem value="item1">
    <AccordionHeader>Controlled Item 1</AccordionHeader>
    <AccordionContent>
      <Typography>This item's state is controlled externally.</Typography>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item2">
    <AccordionHeader>Controlled Item 2</AccordionHeader>
    <AccordionContent>
      <Typography>This item's state is also controlled externally.</Typography>
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

## Variants

### Default
```tsx
<Accordion variant="default">
  <AccordionItem value="item1">
    <AccordionHeader>Default Variant</AccordionHeader>
    <AccordionContent>
      <Typography>Standard accordion styling.</Typography>
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

### Bordered
```tsx
<Accordion variant="bordered">
  <AccordionItem value="item1">
    <AccordionHeader>Bordered Variant</AccordionHeader>
    <AccordionContent>
      <Typography>Accordion with prominent borders.</Typography>
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

## Sizes

### Small
```tsx
<Accordion size="sm">
  <AccordionItem value="item1">
    <AccordionHeader>Small Accordion</AccordionHeader>
    <AccordionContent>
      <Typography>Compact accordion styling.</Typography>
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

### Medium (Default)
```tsx
<Accordion size="md">
  <AccordionItem value="item1">
    <AccordionHeader>Medium Accordion</AccordionHeader>
    <AccordionContent>
      <Typography>Standard accordion styling.</Typography>
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

### Large
```tsx
<Accordion size="lg">
  <AccordionItem value="item1">
    <AccordionHeader>Large Accordion</AccordionHeader>
    <AccordionContent>
      <Typography>Spacious accordion styling.</Typography>
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

## Complex Content

### With Rich Content
```tsx
<Accordion>
  <AccordionItem value="item1">
    <AccordionHeader>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <User size={20} />
        <Typography variant="h4">User Profile</Typography>
      </div>
    </AccordionHeader>
    <AccordionContent>
      <div style={{ display: 'flex', gap: '16px' }}>
        <img src="/avatar.jpg" alt="User" style={{ width: '64px', height: '64px', borderRadius: '50%' }} />
        <div>
          <Typography variant="h5">John Doe</Typography>
          <Typography variant="body" color="secondary">Software Engineer</Typography>
          <Typography variant="body">
            Experienced developer with expertise in React, TypeScript, and modern web development.
          </Typography>
        </div>
      </div>
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

### With Form Content
```tsx
<Accordion>
  <AccordionItem value="item1">
    <AccordionHeader>Personal Information</AccordionHeader>
    <AccordionContent>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Input label="First Name" placeholder="Enter your first name" />
        <Input label="Last Name" placeholder="Enter your last name" />
        <Input label="Email" type="email" placeholder="Enter your email" />
        <Button variant="primary">Save Changes</Button>
      </form>
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

### With Lists
```tsx
<Accordion>
  <AccordionItem value="item1">
    <AccordionHeader>Features</AccordionHeader>
    <AccordionContent>
      <ul style={{ paddingLeft: '20px' }}>
        <li><Typography>Responsive design</Typography></li>
        <li><Typography>Accessibility compliant</Typography></li>
        <li><Typography>TypeScript support</Typography></li>
        <li><Typography>Customizable themes</Typography></li>
      </ul>
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

## Keyboard Navigation

The Accordion component supports full keyboard navigation:

- **Tab**: Navigate between accordion headers
- **Enter/Space**: Toggle accordion item
- **Arrow Up/Down**: Navigate between headers (when focused)
- **Home/End**: Jump to first/last accordion item

## Accessibility

The Accordion component includes comprehensive accessibility features:

- **ARIA Attributes**: Proper `aria-expanded`, `aria-controls`, and `aria-labelledby`
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Support**: Clear announcements of state changes
- **Focus Management**: Proper focus handling and indicators
- **Semantic HTML**: Uses proper heading hierarchy

### Accessibility Example
```tsx
<Accordion>
  <AccordionItem value="item1">
    <AccordionHeader>
      <Typography variant="h3">Accessible Section</Typography>
    </AccordionHeader>
    <AccordionContent>
      <Typography>
        This accordion section is fully accessible with proper ARIA attributes
        and keyboard navigation support.
      </Typography>
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

## Props

### Accordion Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `allowMultiple` | `boolean` | `false` | Whether multiple items can be open |
| `defaultOpenItems` | `string[]` | `[]` | Array of item IDs to open by default |
| `openItems` | `string[]` | - | Controlled open items array |
| `onChange` | `(openItems: string[]) => void` | - | Change handler for open items |
| `variant` | `'default' \| 'bordered'` | `'default'` | Accordion variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Accordion size |
| `children` | `React.ReactNode` | - | Accordion items |

### AccordionItem Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | - | Unique identifier for the item |
| `children` | `React.ReactNode` | - | Item content (header and content) |

### AccordionHeader Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | Header content |

### AccordionContent Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | Content |

## Styling

The Accordion component uses design tokens for consistent styling:

- **Colors**: Semantic colors for different states
- **Spacing**: Consistent padding and margins
- **Typography**: Font family, size, and weight from tokens
- **Border Radius**: Consistent border radius
- **Transitions**: Smooth expand/collapse animations
- **Focus States**: Visible focus indicators

## Best Practices

1. **Use Clear Headers**: Make accordion headers descriptive and concise
2. **Limit Content Length**: Keep accordion content focused and not too long
3. **Consider Multiple vs Single**: Choose appropriate selection mode for your use case
4. **Provide Visual Hierarchy**: Use proper heading levels in headers
5. **Test Keyboard Navigation**: Ensure all functionality works via keyboard
6. **Use Consistent Styling**: Maintain visual consistency across accordion items

## Examples

### FAQ Section
```tsx
<Accordion allowMultiple={true}>
  <AccordionItem value="faq1">
    <AccordionHeader>What is CRIA?</AccordionHeader>
    <AccordionContent>
      <Typography>
        CRIA is a comprehensive React + TypeScript design system built specifically 
        for CR_IA applications. It provides consistent, accessible, and beautiful 
        components that can be easily integrated into your applications.
      </Typography>
    </AccordionContent>
  </AccordionItem>
  
  <AccordionItem value="faq2">
    <AccordionHeader>How do I install CRIA?</AccordionHeader>
    <AccordionContent>
      <Typography>
        You can install CRIA using npm: <code>npm install @cria/ui</code>
      </Typography>
    </AccordionContent>
  </AccordionItem>
  
  <AccordionItem value="faq3">
    <AccordionHeader>Is CRIA accessible?</AccordionHeader>
    <AccordionContent>
      <Typography>
        Yes! All CRIA components are built with accessibility in mind and follow 
        WCAG 2.1 guidelines, including keyboard navigation, screen reader support, 
        and proper ARIA attributes.
      </Typography>
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

### Settings Panel
```tsx
<Accordion variant="bordered">
  <AccordionItem value="general">
    <AccordionHeader>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Settings size={16} />
        <Typography variant="h4">General Settings</Typography>
      </div>
    </AccordionHeader>
    <AccordionContent>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Switch label="Enable notifications" />
        <Switch label="Dark mode" />
        <Input label="Default language" />
      </div>
    </AccordionContent>
  </AccordionItem>
  
  <AccordionItem value="privacy">
    <AccordionHeader>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Shield size={16} />
        <Typography variant="h4">Privacy Settings</Typography>
      </div>
    </AccordionHeader>
    <AccordionContent>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Switch label="Allow data collection" />
        <Switch label="Share usage statistics" />
        <Dropdown label="Data retention period" options={retentionOptions} />
      </div>
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

### Documentation Sections
```tsx
<Accordion allowMultiple={false} defaultOpenItems={['getting-started']}>
  <AccordionItem value="getting-started">
    <AccordionHeader>Getting Started</AccordionHeader>
    <AccordionContent>
      <Typography variant="h5">Installation</Typography>
      <Typography>
        Install CRIA using your preferred package manager...
      </Typography>
      
      <Typography variant="h5">Basic Usage</Typography>
      <Typography>
        Import and use components in your React application...
      </Typography>
    </AccordionContent>
  </AccordionItem>
  
  <AccordionItem value="components">
    <AccordionHeader>Components</AccordionHeader>
    <AccordionContent>
      <Typography>
        CRIA includes a comprehensive set of components for building 
        modern user interfaces...
      </Typography>
    </AccordionContent>
  </AccordionItem>
</Accordion>
```




