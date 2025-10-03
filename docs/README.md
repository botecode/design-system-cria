# CRIA_UI Design System Documentation

Welcome to the CRIA_UI Design System documentation. This comprehensive guide covers all components, their usage, and best practices for building consistent, accessible, and beautiful user interfaces.

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

#### [Typography](./components/Typography.md)
Typography component for consistent text styling across the design system.

#### [Button](./components/Button.md)
Interactive button component with multiple variants, sizes, and states.

#### [Colors](./components/Colors.md)
Color palette and usage guidelines.

### Form Controls

#### [Input](./components/Input.md)
Text input component with various states and validation support.

#### [Checkbox](./components/Checkbox.md)
Checkbox component for binary choices with indeterminate state support.

#### [Switch](./components/Switch.md)
Toggle switch component for binary choices.

#### [Dropdown](./components/Dropdown.md)
Dropdown/Select component with search, multiple selection, and keyboard navigation.

### Feedback

#### [Snackbar](./components/Snackbar.md)
Notification component for user feedback.

#### [Modal](./components/Modal.md)
Modal dialog component for overlays and confirmations.

#### [Tooltip](./components/Tooltip.md)
Tooltip component for contextual information.

### Layout

#### [Card](./components/Card.md)
Card component for grouping related content.

#### [Badge](./components/Badge.md)
Badge component for status indicators and counts.

#### [Tabs](./components/Tabs.md)
Tab component for organizing content into sections.

#### [Navigation](./components/Navigation.md)
Navigation component for site navigation.

#### [Accordion](./components/Accordion.md)
Accordion component for collapsible content sections.

#### [Text](./components/Text.md)
Specialized text components for different content types.

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

## Best Practices

### Component Usage

1. **Use Semantic Components**: Choose components that match your content hierarchy
2. **Maintain Consistency**: Use the same components and patterns throughout your application
3. **Test Accessibility**: Ensure all components work with keyboard navigation and screen readers
4. **Follow Design Tokens**: Use design tokens for colors, spacing, and typography
5. **Handle States**: Implement loading, error, and success states appropriately
6. **Provide Feedback**: Give users clear feedback for their actions

### Performance

1. **Lazy Load Components**: Use React.lazy for code splitting
2. **Optimize Images**: Use appropriate image formats and sizes
3. **Minimize Bundle Size**: Import only the components you need
4. **Use Memoization**: Memoize expensive calculations and components

### Development

1. **Follow TypeScript**: Use TypeScript for better type safety
2. **Write Tests**: Include unit and integration tests for components
3. **Document Components**: Keep documentation up to date
4. **Use Storybook**: Create stories for component documentation
5. **Follow Conventions**: Use consistent naming and file organization

## Contributing

When adding new components:

1. Follow the established patterns and naming conventions
2. Include comprehensive TypeScript types
3. Add accessibility features (ARIA labels, keyboard navigation)
4. Write tests with React Testing Library
5. Update this documentation
6. Follow Conventional Commits for commit messages

## Support

For questions, issues, or contributions:

- **GitHub Issues**: Report bugs and request features
- **Documentation**: Check this documentation for usage examples
- **Community**: Join our community discussions

## License

MIT License - see LICENSE file for details.




