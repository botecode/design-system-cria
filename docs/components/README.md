# Components Documentation

This directory contains detailed documentation for each component in the CRIA_UI design system. Each component is documented with examples, props, accessibility information, and best practices.

## Foundation Components

### [Typography](./Typography.md)
Typography component for consistent text styling across the design system.

**Key Features:**
- Semantic HTML elements
- Multiple variants (display, headings, body, caption)
- Color and weight customization
- Accessibility compliant

### [Button](./Button.md)
Interactive button component with multiple variants, sizes, and states.

**Key Features:**
- 5 variants (primary, secondary, outline, ghost, danger)
- 3 sizes (small, medium, large)
- Loading and disabled states
- Icon support
- Full keyboard navigation

### [Colors](./Colors.md)
Color palette and usage guidelines for the design system.

**Key Features:**
- Semantic color tokens
- WCAG AA compliant contrast ratios
- CSS custom properties
- Dark mode support

## Form Controls

### [Input](./Input.md)
Text input component with various states and validation support.

**Key Features:**
- 4 variants (default, filled, outlined, underlined)
- 3 sizes (small, medium, large)
- Validation states (success, warning, error)
- Password toggle
- Helper and error text

### [Checkbox](./Checkbox.md)
Checkbox component for binary choices with indeterminate state support.

**Key Features:**
- Checked, unchecked, and indeterminate states
- Disabled state
- Helper and error text
- Full accessibility support

### [Switch](./Switch.md)
Toggle switch component for binary choices with smooth animations.

**Key Features:**
- 3 sizes (small, medium, large)
- Smooth toggle animations
- Disabled state
- Description text support

### [Dropdown](./Dropdown.md)
Dropdown/Select component with search, multiple selection, and keyboard navigation.

**Key Features:**
- Single and multiple selection
- Search functionality
- Keyboard navigation
- Custom option rendering
- Loading states

### [Radio Group](./radio-group.md)
Radio group component for selecting a single option from multiple choices.

**Key Features:**
- Single selection from multiple options
- Keyboard navigation (arrow keys, Home, End)
- Custom option descriptions
- Multiple variants and sizes
- Full accessibility support

## Feedback Components

### [Snackbar](./Snackbar.md)
Notification component for user feedback with various variants.

**Key Features:**
- 5 variants (default, success, warning, error, info)
- Auto-dismiss functionality
- Action buttons
- Multiple positioning options

### [Modal](./Modal.md)
Modal dialog component for overlays and confirmations.

**Key Features:**
- 4 sizes (small, medium, large, extra large)
- Focus management
- Keyboard navigation
- Custom close behavior

### [Tooltip](./Tooltip.md)
Tooltip component for contextual information and help text.

**Key Features:**
- 4 placements (top, bottom, left, right)
- Custom delay
- Rich content support
- Accessibility compliant

## Layout Components

### [Card](./Card.md)
Card component for grouping related content with consistent styling.

**Key Features:**
- 4 variants (default, elevated, outlined, filled)
- 3 sizes (small, medium, large)
- Interactive cards
- Header, content, and footer sections

### [Badge](./Badge.md)
Badge component for status indicators, counts, and labels.

**Key Features:**
- 6 variants (primary, secondary, success, warning, error, info)
- 3 sizes (small, medium, large)
- Count display
- Dot variant

### [Tabs](./Tabs.md)
Tab component for organizing content into sections.

**Key Features:**
- 3 variants (default, pills, underline)
- Icon support
- Disabled tabs
- Full width option

### [Navigation](./Navigation.md)
Navigation component for site navigation.

**Key Features:**
- Horizontal and vertical layouts
- Icon support
- Active state management
- Keyboard navigation

### [Accordion](./Accordion.md)
Accordion component for collapsible content sections.

**Key Features:**
- Single and multiple selection
- Default open items
- Controlled and uncontrolled modes
- Keyboard navigation

### [Text](./Text.md)
Specialized text components for different content types.

**Key Features:**
- 4 variants (TextBody, TextContent, TextContentTitle, TextContentImportant)
- Semantic HTML elements
- Optimized typography for different contexts
- Custom element support

## Component Categories

### Interactive Components
- [Button](./Button.md)
- [Input](./Input.md)
- [Checkbox](./Checkbox.md)
- [Switch](./Switch.md)
- [Dropdown](./Dropdown.md)
- [Radio Group](./radio-group.md)
- [Tabs](./Tabs.md)
- [Accordion](./Accordion.md)

### Feedback Components
- [Snackbar](./Snackbar.md)
- [Modal](./Modal.md)
- [Tooltip](./Tooltip.md)

### Layout Components
- [Card](./Card.md)
- [Badge](./Badge.md)
- [Navigation](./Navigation.md)

### Typography Components
- [Typography](./Typography.md)
- [Text](./Text.md)

## Getting Started

1. **Choose the Right Component**: Browse the components above to find the one that fits your needs
2. **Read the Documentation**: Each component has detailed documentation with examples
3. **Check Props**: Review the props table for available customization options
4. **Follow Best Practices**: Each component includes best practices for optimal usage
5. **Test Accessibility**: Ensure your implementation works with keyboard navigation and screen readers

## Common Patterns

### Form Components
```tsx
import { Input, Checkbox, Switch, RadioGroup, Dropdown, Button } from '@cria/ui';

// Form with validation
<Input label="Email" type="email" required errorText={errors.email} />
<Checkbox label="I agree to terms" required />
<Switch label="Enable notifications" />
<RadioGroup label="Preferred contact method" options={contactMethods} required />
<Dropdown label="Country" options={countries} required />
<Button type="submit" variant="primary">Submit</Button>
```

### Layout Components
```tsx
import { Card, Badge, Tabs, Accordion } from '@cria/ui';

// Card with badge
<Card>
  <CardHeader>
    <Typography variant="h3">Title</Typography>
    <Badge variant="success">Active</Badge>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>

// Tabs with content
<Tabs value={activeTab} onChange={setActiveTab}>
  <Tab value="tab1">Tab 1</Tab>
  <Tab value="tab2">Tab 2</Tab>
</Tabs>
```

### Feedback Components
```tsx
import { Snackbar, Modal, Tooltip } from '@cria/ui';

// Snackbar notification
<Snackbar open={showSnackbar} message="Success!" variant="success" />

// Modal dialog
<Modal open={showModal} onClose={() => setShowModal(false)} title="Confirm">
  <Button onClick={handleConfirm}>Confirm</Button>
</Modal>

// Tooltip help
<Tooltip content="This is helpful information">
  <Button>Help</Button>
</Tooltip>
```

## Accessibility

All components are built with accessibility in mind:

- **Keyboard Navigation**: Full keyboard support for all interactive components
- **Screen Reader Support**: Proper ARIA labels and roles
- **Focus Management**: Visible focus indicators and logical tab order
- **Color Contrast**: All color combinations meet WCAG AA standards
- **Semantic HTML**: Components render appropriate HTML elements

## Theming

Components use design tokens for consistent styling:

- **Colors**: Semantic color tokens for different states
- **Spacing**: Consistent spacing scale
- **Typography**: Font family, sizes, and weights
- **Border Radius**: Consistent border radius values
- **Shadows**: Subtle shadows for elevation

## Contributing

When adding new components:

1. Follow the established patterns and naming conventions
2. Include comprehensive TypeScript types
3. Add accessibility features (ARIA labels, keyboard navigation)
4. Write tests with React Testing Library
5. Update this documentation
6. Follow Conventional Commits for commit messages




