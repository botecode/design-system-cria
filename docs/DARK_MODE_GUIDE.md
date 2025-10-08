# CRIA Design System - Dark Mode Guide

## Overview

The CRIA Design System includes comprehensive dark mode support with automatic system preference detection, smooth transitions, and full component coverage. This guide covers implementation, usage, and customization.

## Features

- ✅ **Automatic System Detection** - Detects user's OS theme preference
- ✅ **Smooth Transitions** - CSS transitions between theme changes
- ✅ **Component Coverage** - All components support dark mode
- ✅ **Accessibility** - Proper contrast ratios and focus states
- ✅ **Persistence** - User preferences saved to localStorage
- ✅ **TypeScript Support** - Full type safety
- ✅ **CSS Variables** - Theme-based styling system

## Quick Start

### 1. Wrap Your App with ThemeProvider

```tsx
import { ThemeProvider } from '@cria/design-system';

function App() {
  return (
    <ThemeProvider>
      <YourApp />
    </ThemeProvider>
  );
}
```

### 2. Use the Theme Toggle

```tsx
import { ThemeToggle } from '@cria/design-system';

function Header() {
  return (
    <header>
      <ThemeToggle variant="button" showLabel />
    </header>
  );
}
```

### 3. Access Theme in Components

```tsx
import { useTheme } from '@cria/design-system';

function MyComponent() {
  const { theme, toggleTheme, isDark, isLight } = useTheme();
  
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>
        Switch to {isDark ? 'light' : 'dark'} mode
      </button>
    </div>
  );
}
```

## Theme Resolution

The system follows this priority order:

1. **User Preference** - Stored in localStorage
2. **System Preference** - OS theme setting
3. **Default Theme** - Falls back to light mode

### Customizing Resolution

```tsx
<ThemeProvider
  defaultTheme="dark"
  storageKey="my-app-theme"
  enableSystem={true}
>
  <YourApp />
</ThemeProvider>
```

## CSS Variables

All components use CSS variables for theming:

### Light Theme Variables

```css
:root {
  --cria-bg-primary: #F2F4F3;
  --cria-bg-secondary: #FFFFFF;
  --cria-text-primary: #374151;
  --cria-text-secondary: #6B7280;
  --cria-primary: #7566A1;
  --cria-secondary: #28DDB9;
  /* ... more variables */
}
```

### Dark Theme Variables

```css
[data-theme="dark"] {
  --cria-bg-primary: #1A1A1A;
  --cria-bg-secondary: #2A1F3A;
  --cria-text-primary: #FFFFFF;
  --cria-text-secondary: #D1D5DB;
  --cria-primary: #7566A1;
  --cria-secondary: #28DDB9;
  /* ... more variables */
}
```

## Component Usage

### Buttons

```tsx
import { Button } from '@cria/design-system';

// All button variants support dark mode
<Button variant="primary">Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
<Button variant="outline">Outline Button</Button>
<Button variant="ghost">Ghost Button</Button>
<Button variant="danger">Danger Button</Button>
```

### Cards

```tsx
import { Card } from '@cria/design-system';

// All card variants support dark mode
<Card variant="default">Default Card</Card>
<Card variant="elevated">Elevated Card</Card>
<Card variant="outlined">Outlined Card</Card>
<Card variant="filled">Filled Card</Card>
```

### Inputs

```tsx
import { Input } from '@cria/design-system';

// All input states support dark mode
<Input label="Email" placeholder="Enter email" />
<Input label="Password" type="password" showPasswordToggle />
<Input label="Search" leftIcon={<SearchIcon />} />
```

### Typography

```tsx
import { Typography } from '@cria/design-system';

// All typography variants support dark mode
<Typography variant="h1">Heading 1</Typography>
<Typography variant="body" color="primary">Body text</Typography>
<Typography variant="caption" color="secondary">Caption</Typography>
```

### Navigation

```tsx
import { Navigation } from '@cria/design-system';

<Navigation
  sidebar={{
    items: navigationItems,
    title: "My App",
    activeRoute: "/dashboard"
  }}
  topbar={{
    items: topbarItems,
    brand: "My Brand"
  }}
/>
```

### Modals

```tsx
import { Modal } from '@cria/design-system';

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Modal Title"
  size="md"
>
  Modal content goes here
</Modal>
```

### Backgrounds

```tsx
import { Backgrounds } from '@cria/design-system';

<Backgrounds variant="gradient" colorScheme="primary">
  Content with gradient background
</Backgrounds>

<Backgrounds variant="pattern" patternType="dots">
  Content with pattern background
</Backgrounds>

<Backgrounds variant="modern" modernType="radial-glow">
  Content with modern background
</Backgrounds>
```

## Theme Toggle Component

The `ThemeToggle` component provides multiple variants:

### Switch Variant

```tsx
<ThemeToggle variant="switch" size="md" showLabel />
```

### Button Variant

```tsx
<ThemeToggle variant="button" size="lg" showLabel />
```

### Icon Variant

```tsx
<ThemeToggle variant="icon" size="sm" />
```

## Custom Styling

### Using CSS Variables

```css
.my-component {
  background-color: var(--cria-bg-primary);
  color: var(--cria-text-primary);
  border: 1px solid var(--cria-border-primary);
  transition: all var(--cria-transition-duration) var(--cria-transition-timing-function);
}
```

### Dark Mode Specific Styles

```css
/* Light mode styles */
.my-component {
  background-color: var(--cria-bg-primary);
}

/* Dark mode specific adjustments */
[data-theme="dark"] .my-component {
  background-color: var(--cria-bg-secondary);
}

/* Alternative syntax */
.dark .my-component {
  background-color: var(--cria-bg-secondary);
}
```

## Advanced Usage

### Manual Theme Control

```tsx
import { useTheme } from '@cria/design-system';

function ThemeControls() {
  const { theme, setTheme, toggleTheme } = useTheme();
  
  return (
    <div>
      <button onClick={() => setTheme('light')}>Light</button>
      <button onClick={() => setTheme('dark')}>Dark</button>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
}
```

### System Preference Detection

```tsx
import { watchSystemTheme, getSystemTheme } from '@cria/design-system';

function MyComponent() {
  const [systemTheme, setSystemTheme] = useState(getSystemTheme());
  
  useEffect(() => {
    const unsubscribe = watchSystemTheme(setSystemTheme);
    return unsubscribe;
  }, []);
  
  return <div>System theme: {systemTheme}</div>;
}
```

### Custom Theme Resolution

```tsx
import { resolveInitialTheme } from '@cria/design-system';

const customTheme = resolveInitialTheme({
  storageKey: 'my-app-theme',
  defaultTheme: 'dark',
  enableSystem: true
});
```

## Testing

### Dark Mode Test Component

```tsx
import { DarkModeTest } from '@cria/design-system';

function TestPage() {
  return <DarkModeTest />;
}
```

### Manual Testing Checklist

- [ ] Theme toggle works correctly
- [ ] System preference is detected
- [ ] User preference is persisted
- [ ] All components render correctly in both themes
- [ ] Transitions are smooth
- [ ] Focus states are visible
- [ ] Contrast ratios meet accessibility standards

## Accessibility

### Focus States

All interactive elements have visible focus indicators:

```css
.cria-button:focus {
  outline: 2px solid var(--cria-focus-ring);
  outline-offset: 2px;
}
```

### Contrast Ratios

The design system ensures WCAG AA compliance:

- **Light Mode**: Dark text on light backgrounds
- **Dark Mode**: Light text on dark backgrounds
- **Interactive Elements**: High contrast for visibility

### Screen Reader Support

```tsx
<ThemeToggle
  aria-label="Toggle dark mode"
  aria-pressed={isDark}
/>
```

## Browser Support

- ✅ Chrome 88+
- ✅ Firefox 87+
- ✅ Safari 14+
- ✅ Edge 88+

## Performance

- **CSS Variables**: Efficient theme switching
- **Smooth Transitions**: Hardware-accelerated animations
- **Minimal Bundle**: No additional dependencies
- **Tree Shaking**: Only import what you use

## Troubleshooting

### Theme Not Applying

1. Ensure `ThemeProvider` wraps your app
2. Check that CSS variables are loaded
3. Verify `data-theme` attribute is set on `<html>`

### Transitions Not Working

1. Check that CSS variables are defined
2. Ensure components use CSS variables
3. Verify transition properties are set

### System Preference Not Detected

1. Check browser support for `prefers-color-scheme`
2. Ensure `enableSystem` is true
3. Verify media query is supported

## Migration Guide

### From Custom Dark Mode

1. Replace custom theme logic with `ThemeProvider`
2. Update CSS to use CSS variables
3. Replace theme toggles with `ThemeToggle`
4. Test all components in both themes

### From Other Libraries

1. Install CRIA Design System
2. Wrap app with `ThemeProvider`
3. Replace existing components
4. Update styling to use CSS variables

## Best Practices

1. **Always use CSS variables** for themeable properties
2. **Test in both themes** during development
3. **Provide theme toggle** for user control
4. **Respect system preference** by default
5. **Use semantic color names** (primary, secondary, etc.)
6. **Ensure accessibility** in both themes
7. **Test on different devices** and browsers

## Examples

See the [Dark Mode Test Component](./DarkModeTest.tsx) for comprehensive examples of all components in both themes.

## Support

For questions or issues with dark mode:

1. Check this documentation
2. Review the test component
3. Test in different browsers
4. Verify CSS variables are loaded
5. Check console for errors

---

*This guide covers the complete dark mode implementation in the CRIA Design System. For component-specific documentation, see individual component guides.*
