# CRIA_UI Design System

A comprehensive React + TypeScript design system built specifically for CR_IA applications. This system provides consistent, accessible, and beautiful components that can be easily integrated into your applications.

## Table of Contents

- [Getting Started](#getting-started)
- [Design Tokens](#design-tokens)
- [Components](#components)
  - [Foundation](#foundation)
    - [Typography](#typography)
    - [Button](#button)
    - [Colors](#colors)
  - [Form Controls](#form-controls)
    - [Input](#input)
    - [Checkbox](#checkbox)
    - [Switch](#switch)
    - [Dropdown](#dropdown)
  - [Feedback](#feedback)
    - [Snackbar](#snackbar)
    - [Modal](#modal)
    - [Tooltip](#tooltip)
  - [Layout](#layout)
    - [Card](#card)
    - [Badge](#badge)
    - [Tabs](#tabs)
    - [Navigation](#navigation)
    - [Accordion](#accordion)
    - [Text](#text)

## Getting Started

### Installation

```bash
npm install @cria/ui
```

### Basic Usage

```tsx
import { Button, Typography, Card } from '@cria/ui';

function App() {
  return (
    <div>
      <Typography variant="h1">Welcome to CRIA</Typography>
      <Card>
        <Button variant="primary" onClick={() => console.log('Hello!')}>
          Click me
        </Button>
      </Card>
    </div>
  );
}
```

## Design Tokens

The design system is built on a foundation of design tokens that ensure consistency across all components.

### Colors

- **Primary**: `#7566A1` - Main brand color
- **Secondary**: `#28DDB9` - Accent color
- **Background**: `#F2F4F3` - Light background
- **Text Primary**: `#111827` - Main text color
- **Text Secondary**: `#6B7280` - Secondary text color
- **Success**: `#10B981` - Success states
- **Warning**: `#F59E0B` - Warning states
- **Error**: `#EF4444` - Error states

### Typography

- **Font Family**: Cartograph CF, system fonts
- **Font Sizes**: 12px (caption) to 48px (display)
- **Font Weights**: Thin to Heavy (100-900)
- **Line Heights**: Tight, Normal, Relaxed

### Spacing

Consistent spacing scale from 4px to 96px using multiples of 4.

### Border Radius

- **Small**: 4px
- **Medium**: 8px
- **Large**: 16px
- **Full**: 9999px (circular)

## Components

### Foundation

#### Typography

The Typography component provides consistent text styling across the design system.

```tsx
import { Typography } from '@cria/ui';

// Basic usage
<Typography variant="h1">Main Heading</Typography>
<Typography variant="body" color="secondary">Body text</Typography>

// With custom element
<Typography variant="h2" as="h1">Heading styled as h2 but rendered as h1</Typography>
```

**Props:**
- `variant`: `'display' | 'h1' | 'h2' | 'h3' | 'title1' | 'title2' | 'title3' | 'body' | 'bodySmall' | 'caption'`
- `as`: HTML element to render (defaults to semantic element for variant)
- `color`: `'primary' | 'primaryLight' | 'content' | 'secondary' | 'secondaryDark' | 'disabled' | 'inverse' | 'success' | 'warning' | 'error' | 'info'`
- `weight`: Font weight from thin to heavy
- `align`: Text alignment
- `lineHeight`: Line height variant
- `letterSpacing`: Letter spacing variant

#### Button

Interactive button component with multiple variants and states.

```tsx
import { Button } from '@cria/ui';

// Basic usage
<Button variant="primary" size="md" onClick={handleClick}>
  Click me
</Button>

// With icons
<Button leftIcon={<ArrowLeft />} rightIcon={<ArrowRight />}>
  Navigate
</Button>

// Loading state
<Button loading disabled>
  Processing...
</Button>

// Full width
<Button fullWidth variant="outline">
  Full Width Button
</Button>
```

**Props:**
- `variant`: `'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'`
- `size`: `'sm' | 'md' | 'lg'`
- `loading`: Boolean for loading state
- `disabled`: Boolean for disabled state
- `leftIcon`: Icon to display before text
- `rightIcon`: Icon to display after text
- `fullWidth`: Boolean for full width button
- `children`: Button content

#### Colors

Color palette and usage guidelines.

```tsx
import { colors } from '@cria/ui';

// Using color tokens
<div style={{ backgroundColor: colors.primary.main }}>
  Primary background
</div>
```

### Form Controls

#### Input

Text input component with various states and validation support.

```tsx
import { Input } from '@cria/ui';

// Basic usage
<Input
  label="Email"
  placeholder="Enter your email"
  type="email"
  required
/>

// With validation state
<Input
  label="Password"
  type="password"
  state="error"
  helperText="Password must be at least 8 characters"
  showPasswordToggle
/>

// Different variants
<Input variant="filled" size="lg" />
<Input variant="outlined" />
<Input variant="underlined" />
```

**Props:**
- `label`: Input label
- `placeholder`: Placeholder text
- `size`: `'sm' | 'md' | 'lg'`
- `variant`: `'default' | 'filled' | 'outlined' | 'underlined'`
- `state`: `'default' | 'success' | 'warning' | 'error'`
- `disabled`: Boolean for disabled state
- `required`: Boolean for required state
- `readOnly`: Boolean for read-only state
- `showPasswordToggle`: Boolean for password visibility toggle
- `helperText`: Helper text below input
- `errorText`: Error text below input

#### Checkbox

Checkbox component for binary choices.

```tsx
import { Checkbox } from '@cria/ui';

// Basic usage
<Checkbox
  label="I agree to the terms"
  checked={isChecked}
  onChange={setIsChecked}
/>

// Indeterminate state
<Checkbox
  label="Select all"
  indeterminate={isIndeterminate}
  checked={isAllSelected}
  onChange={handleSelectAll}
/>

// Disabled state
<Checkbox
  label="Disabled option"
  disabled
  checked={false}
/>
```

**Props:**
- `label`: Checkbox label
- `checked`: Boolean for checked state
- `indeterminate`: Boolean for indeterminate state
- `disabled`: Boolean for disabled state
- `required`: Boolean for required state
- `onChange`: Change handler function
- `helperText`: Helper text below checkbox

#### Switch

Toggle switch component for binary choices.

```tsx
import { Switch } from '@cria/ui';

// Basic usage
<Switch
  label="Enable notifications"
  checked={isEnabled}
  onChange={setIsEnabled}
/>

// With description
<Switch
  label="Dark mode"
  description="Switch to dark theme"
  checked={isDarkMode}
  onChange={setIsDarkMode}
/>
```

**Props:**
- `label`: Switch label
- `description`: Optional description text
- `checked`: Boolean for checked state
- `disabled`: Boolean for disabled state
- `size`: `'sm' | 'md' | 'lg'`
- `onChange`: Change handler function

#### Dropdown

Dropdown/Select component with search, multiple selection, and keyboard navigation.

```tsx
import { Dropdown } from '@cria/ui';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2', disabled: true },
  { value: 'option3', label: 'Option 3' },
];

// Basic usage
<Dropdown
  label="Choose an option"
  options={options}
  value={selectedValue}
  onChange={setSelectedValue}
  placeholder="Select an option"
/>

// Multiple selection
<Dropdown
  label="Choose multiple options"
  options={options}
  value={selectedValues}
  onChange={setSelectedValues}
  multiple
  searchable
/>

// With custom options
<Dropdown
  options={options}
  renderOption={(option) => (
    <div>
      <strong>{option.label}</strong>
      <p>{option.description}</p>
    </div>
  )}
/>
```

**Props:**
- `options`: Array of dropdown options
- `value`: Selected value(s) - string for single, array for multiple
- `defaultValue`: Default selected value(s)
- `placeholder`: Placeholder text
- `label`: Dropdown label
- `size`: `'sm' | 'md' | 'lg'`
- `variant`: `'default' | 'filled' | 'outlined'`
- `disabled`: Boolean for disabled state
- `required`: Boolean for required state
- `multiple`: Boolean for multiple selection
- `searchable`: Boolean for search functionality
- `clearable`: Boolean for clear button
- `loading`: Boolean for loading state
- `onChange`: Change handler function
- `onSearch`: Search handler function
- `renderOption`: Custom option renderer

### Feedback

#### Snackbar

Notification component for user feedback.

```tsx
import { Snackbar } from '@cria/ui';

// Basic usage
<Snackbar
  open={isOpen}
  message="Action completed successfully"
  onClose={() => setIsOpen(false)}
/>

// With different variants
<Snackbar
  open={isOpen}
  message="Error occurred"
  variant="error"
  action={<Button size="sm">Retry</Button>}
/>
```

**Props:**
- `open`: Boolean for visibility
- `message`: Snackbar message
- `variant`: `'default' | 'success' | 'warning' | 'error' | 'info'`
- `duration`: Auto-hide duration in milliseconds
- `action`: Action button component
- `onClose`: Close handler function

#### Modal

Modal dialog component for overlays and confirmations.

```tsx
import { Modal } from '@cria/ui';

// Basic usage
<Modal
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Confirm Action"
>
  <p>Are you sure you want to proceed?</p>
  <div>
    <Button variant="outline" onClick={() => setIsOpen(false)}>
      Cancel
    </Button>
    <Button variant="primary" onClick={handleConfirm}>
      Confirm
    </Button>
  </div>
</Modal>

// Large modal
<Modal
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Large Modal"
  size="lg"
  closeOnOverlayClick={false}
>
  {/* Modal content */}
</Modal>
```

**Props:**
- `open`: Boolean for visibility
- `onClose`: Close handler function
- `title`: Modal title
- `size`: `'sm' | 'md' | 'lg' | 'xl'`
- `closeOnOverlayClick`: Boolean for overlay click to close
- `closeOnEscape`: Boolean for escape key to close
- `children`: Modal content

#### Tooltip

Tooltip component for contextual information.

```tsx
import { Tooltip } from '@cria/ui';

// Basic usage
<Tooltip content="This is a helpful tooltip">
  <Button>Hover me</Button>
</Tooltip>

// With different placements
<Tooltip content="Tooltip content" placement="top">
  <Button>Top tooltip</Button>
</Tooltip>

<Tooltip content="Tooltip content" placement="bottom">
  <Button>Bottom tooltip</Button>
</Tooltip>
```

**Props:**
- `content`: Tooltip content
- `placement`: `'top' | 'bottom' | 'left' | 'right'`
- `delay`: Delay before showing tooltip
- `disabled`: Boolean to disable tooltip
- `children`: Element to attach tooltip to

### Layout

#### Card

Card component for grouping related content.

```tsx
import { Card, CardHeader, CardContent, CardFooter } from '@cria/ui';

// Basic usage
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

// Different variants
<Card variant="elevated" size="lg">
  <CardContent>Elevated card</CardContent>
</Card>

<Card variant="outlined" interactive>
  <CardContent>Clickable card</CardContent>
</Card>
```

**Props:**
- `variant`: `'default' | 'elevated' | 'outlined' | 'filled'`
- `size`: `'sm' | 'md' | 'lg'`
- `interactive`: Boolean for clickable card
- `disabled`: Boolean for disabled state
- `children`: Card content

#### Badge

Badge component for status indicators and counts.

```tsx
import { Badge } from '@cria/ui';

// Basic usage
<Badge variant="primary">New</Badge>
<Badge variant="success">Active</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="error">Error</Badge>

// With count
<Badge variant="primary" count={5}>
  Notifications
</Badge>

// Dot variant
<Badge variant="primary" dot>
  Online
</Badge>
```

**Props:**
- `variant`: `'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'`
- `size`: `'sm' | 'md' | 'lg'`
- `count`: Number for count badge
- `dot`: Boolean for dot variant
- `children`: Badge content

#### Tabs

Tab component for organizing content into sections.

```tsx
import { Tabs, Tab, TabPanel } from '@cria/ui';

// Basic usage
<Tabs value={activeTab} onChange={setActiveTab}>
  <Tab value="tab1">Tab 1</Tab>
  <Tab value="tab2">Tab 2</Tab>
  <Tab value="tab3">Tab 3</Tab>
</Tabs>

<TabPanel value="tab1">
  <Typography>Content for Tab 1</Typography>
</TabPanel>
<TabPanel value="tab2">
  <Typography>Content for Tab 2</Typography>
</TabPanel>
<TabPanel value="tab3">
  <Typography>Content for Tab 3</Typography>
</TabPanel>

// With icons
<Tabs value={activeTab} onChange={setActiveTab}>
  <Tab value="home" icon={<Home />}>Home</Tab>
  <Tab value="profile" icon={<User />}>Profile</Tab>
  <Tab value="settings" icon={<Settings />}>Settings</Tab>
</Tabs>
```

**Props:**
- `value`: Active tab value
- `onChange`: Tab change handler
- `variant`: `'default' | 'pills' | 'underline'`
- `size`: `'sm' | 'md' | 'lg'`
- `fullWidth`: Boolean for full width tabs
- `disabled`: Boolean for disabled state

#### Navigation

Navigation component for site navigation.

```tsx
import { Navigation } from '@cria/ui';

const navItems = [
  { label: 'Home', href: '/', icon: <Home /> },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

// Basic usage
<Navigation
  items={navItems}
  activeItem="/"
  onItemClick={(href) => navigate(href)}
/>

// With different variants
<Navigation
  items={navItems}
  variant="vertical"
  size="lg"
  activeItem="/about"
/>
```

**Props:**
- `items`: Array of navigation items
- `activeItem`: Currently active item
- `onItemClick`: Item click handler
- `variant`: `'horizontal' | 'vertical'`
- `size`: `'sm' | 'md' | 'lg'`
- `disabled`: Boolean for disabled state

#### Accordion

Accordion component for collapsible content sections.

```tsx
import { Accordion, AccordionItem, AccordionHeader, AccordionContent } from '@cria/ui';

// Basic usage
<Accordion allowMultiple={false}>
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

// Multiple items open
<Accordion allowMultiple={true} defaultOpenItems={['item1']}>
  <AccordionItem value="item1">
    <AccordionHeader>Always Open</AccordionHeader>
    <AccordionContent>This item is open by default</AccordionContent>
  </AccordionItem>
</Accordion>
```

**Props:**
- `allowMultiple`: Boolean for multiple open items
- `defaultOpenItems`: Array of default open item IDs
- `openItems`: Controlled open items array
- `onChange`: Change handler for open items
- `variant`: `'default' | 'bordered'`
- `size`: `'sm' | 'md' | 'lg'`

#### Text

Specialized text components for different content types.

```tsx
import { TextBody, TextContent, TextContentTitle, TextContentImportant } from '@cria/ui';

// Body text for UI copy
<TextBody>Default body text for cards and UI elements</TextBody>

// Long-form content
<TextContent>
  This is for longer paragraphs and content blocks. It has optimized
  line height and spacing for better readability.
</TextContent>

// Section titles in content
<TextContentTitle>Section Title</TextContentTitle>

// Important/highlighted text
<TextContentImportant>
  This text is emphasized and stands out from regular content.
</TextContentImportant>

// With custom elements
<TextBody as="p">Body text as paragraph</TextBody>
<TextContentTitle as="h2">Title as h2 element</TextContentTitle>
```

**Props:**
- `as`: HTML element to render (defaults to semantic element)
- `children`: Text content
- `className`: Additional CSS class

## Accessibility

All components are built with accessibility in mind and follow WCAG 2.1 guidelines:

- **Keyboard Navigation**: All interactive components support keyboard navigation
- **Screen Reader Support**: Proper ARIA labels and roles
- **Focus Management**: Visible focus indicators and logical tab order
- **Color Contrast**: All color combinations meet WCAG AA standards
- **Semantic HTML**: Components render appropriate HTML elements

## Theming

The design system supports theming through CSS custom properties:

```css
:root {
  --cria-primary: #7566A1;
  --cria-secondary: #28DDB9;
  --cria-background: #F2F4F3;
  /* ... other tokens */
}
```

## Contributing

When adding new components:

1. Follow the established patterns and naming conventions
2. Include comprehensive TypeScript types
3. Add accessibility features (ARIA labels, keyboard navigation)
4. Write tests with React Testing Library
5. Update this documentation
6. Follow Conventional Commits for commit messages

## License

MIT License - see LICENSE file for details.




