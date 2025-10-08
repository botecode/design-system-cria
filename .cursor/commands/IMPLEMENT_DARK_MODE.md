You are a Senior Frontend Engineer maintaining the CRIA Design System.
Update the dark mode implementation plan below to include the following missing items:
	•	Add a ThemeProvider integration step under Phase 1.
	•	Add an Initial theme resolution logic task (localStorage → OS → default).
	•	Add a Design Tokens mapping step to link CSS variables with color tokens.
	•	Add a Storybook / Demo integration section for dark/light preview.
	•	Add a useTheme hook task under Phase 1.
	•	Add a Visual regression testing task under Phase 3.
	•	Add a Tailwind dark mode config item under CSS Variables System.
	•	Add a Documentation: Design Tokens Table & Theming Guide item under Phase 3.
Keep the existing structure, formatting, and tone; just insert these points in the relevant sections.

## Overview
Implement a comprehensive dark mode system for the CRIA Design System with theme context, toggle component, CSS variables, and complete component support.

## Implementation Plan

### Phase 1: Core Theme System
- [ ] **Theme Context & Provider** - React context for theme state management
- [ ] **ThemeProvider Integration** - Provider component for app-wide theme management
- [ ] **useTheme Hook** - Custom hook for theme state access
- [ ] **Initial Theme Resolution Logic** - localStorage → OS → default priority
- [ ] **Theme Toggle Component** - Switch component for light/dark mode
- [ ] **Theme Persistence** - localStorage integration for user preference
- [ ] **CSS Variables System** - Root-level CSS custom properties for theming
- [ ] **Design Tokens Mapping** - Link CSS variables with color tokens
- [ ] **Tailwind Dark Mode Config** - Configure Tailwind for dark mode support

### Phase 2: Component Dark Mode Support
- [ ] **Typography Components** - Dark mode variants for all text components
- [ ] **Button Components** - Dark mode styles for all button variants
- [ ] **Card Components** - Dark backgrounds and borders
- [ ] **Input Components** - Dark mode form elements
- [ ] **Navigation Components** - Dark mode navigation elements
- [ ] **Modal Components** - Dark mode overlays and content
- [ ] **Background Components** - Dark mode background variants

### Phase 3: Advanced Features
- [ ] **System Preference Detection** - Auto-detect user's OS theme preference
- [ ] **Smooth Transitions** - CSS transitions between theme changes
- [ ] **Accessibility** - Ensure proper contrast ratios in dark mode
- [ ] **Component Testing** - Test all components in both themes
- [ ] **Visual Regression Testing** - Automated visual testing for theme changes
- [ ] **Storybook / Demo Integration** - Dark/light preview in component demos
- [ ] **Documentation: Design Tokens Table & Theming Guide** - Complete theming documentation

## Implementation Details

### 1. Theme Context & Provider
```typescript
// src/contexts/ThemeContext.tsx
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
}
```

### 2. CSS Variables System
```css
/* Light theme (default) */
:root {
  --cria-bg-primary: #F2F4F3;
  --cria-bg-secondary: #FFFFFF;
  --cria-text-primary: #374151;
  --cria-text-secondary: #6B7280;
  --cria-border-primary: #E5E7EB;
}

/* Dark theme */
[data-theme="dark"] {
  --cria-bg-primary: #1A1A1A;
  --cria-bg-secondary: #2A1F3A;
  --cria-text-primary: #FFFFFF;
  --cria-text-secondary: #9CA3AF;
  --cria-border-primary: #374151;
}
```

### 3. Design Tokens Mapping
```typescript
// src/tokens/themeMapping.ts
export const themeMapping = {
  light: {
    '--cria-bg-primary': colors.background,
    '--cria-bg-secondary': colors.backgroundLight,
    '--cria-text-primary': colors.text.primary,
    '--cria-text-secondary': colors.text.secondary,
  },
  dark: {
    '--cria-bg-primary': colors.backgroundDark,
    '--cria-bg-secondary': colors.primaryDark,
    '--cria-text-primary': colors.white,
    '--cria-text-secondary': colors.gray[400],
  }
};
```

### 4. Theme Toggle Component
```typescript
// src/components/ThemeToggle/ThemeToggle.tsx
interface ThemeToggleProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'switch' | 'button' | 'icon';
  showLabel?: boolean;
}
```

## File Structure
```
src/
├── contexts/
│   ├── ThemeContext.tsx
│   ├── ThemeProvider.tsx
│   └── index.ts
├── components/
│   ├── ThemeToggle/
│   │   ├── ThemeToggle.tsx
│   │   ├── ThemeToggle.css
│   │   ├── demo.tsx
│   │   └── index.ts
│   └── ...
├── styles/
│   ├── themes/
│   │   ├── light.css
│   │   ├── dark.css
│   │   └── index.css
│   └── ...
├── hooks/
│   ├── useTheme.ts
│   └── index.ts
├── tokens/
│   ├── themeMapping.ts
│   └── index.ts
└── utils/
    ├── themeResolution.ts
    └── index.ts
```

## Progress Tracking

### ✅ Completed
- [x] **Analysis** - Identified current dark mode gaps
- [x] **Planning** - Created comprehensive implementation plan
- [x] **Theme Context** - Created React context for theme management
- [x] **ThemeProvider Integration** - Provider component for app-wide theme management
- [x] **useTheme Hook** - Custom hook for theme state access
- [x] **Initial Theme Resolution Logic** - localStorage → OS → default priority
- [x] **CSS Variables System** - Root-level CSS custom properties for theming
- [x] **Design Tokens Mapping** - Link CSS variables with color tokens
- [x] **Theme Toggle Component** - Switch component for light/dark mode
- [x] **Theme Persistence** - localStorage integration for user preference
- [x] **App Integration** - Integrated ThemeProvider into main App component

### 🚧 In Progress
- [ ] **Component Updates** - Adding dark mode to all components
- [ ] **Tailwind Dark Mode Config** - Configure Tailwind for dark mode support

### 📋 Pending
- [ ] **System Preference Detection** - Auto-detect user's OS theme preference
- [ ] **Smooth Transitions** - CSS transitions between theme changes
- [ ] **Component Testing** - Test all components in both themes
- [ ] **Visual Regression Testing** - Automated visual testing for theme changes
- [ ] **Storybook / Demo Integration** - Dark/light preview in component demos
- [ ] **Documentation: Design Tokens Table & Theming Guide** - Complete theming documentation
- [ ] **Accessibility** - Ensure proper contrast ratios in dark mode

## Testing Checklist

### Component Testing
- [ ] **Typography** - All text components in dark mode
- [ ] **Buttons** - All button variants in dark mode
- [ ] **Cards** - Card components with dark backgrounds
- [ ] **Forms** - Input components in dark mode
- [ ] **Navigation** - Navigation components in dark mode
- [ ] **Modals** - Modal overlays and content in dark mode
- [ ] **Backgrounds** - Background components in dark mode

### Accessibility Testing
- [ ] **Contrast Ratios** - Ensure WCAG AA compliance in dark mode
- [ ] **Focus States** - Visible focus indicators in dark mode
- [ ] **Color Blindness** - Test with color vision deficiency
- [ ] **Screen Readers** - Proper semantic markup in both themes

### Browser Testing
- [ ] **Chrome** - Latest version
- [ ] **Firefox** - Latest version
- [ ] **Safari** - Latest version
- [ ] **Edge** - Latest version

## Usage Examples

### Basic Theme Toggle
```tsx
import { ThemeToggle } from '@cria/design-system';

function App() {
  return (
    <div>
      <ThemeToggle />
    </div>
  );
}
```

### Theme Context Usage
```tsx
import { useTheme } from '@cria/design-system';

function MyComponent() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'dark' : 'light'} mode
      </button>
    </div>
  );
}
```

### ThemeProvider Integration
```tsx
import { ThemeProvider } from '@cria/design-system';

function App() {
  return (
    <ThemeProvider>
      <MyApp />
    </ThemeProvider>
  );
}
```

### Storybook Integration
```tsx
// .storybook/preview.js
import { ThemeProvider } from '@cria/design-system';

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: '#F2F4F3' },
      { name: 'dark', value: '#1A1A1A' },
    ],
  },
};
```

### CSS Variables Usage
```css
.my-component {
  background-color: var(--cria-bg-primary);
  color: var(--cria-text-primary);
  border: 1px solid var(--cria-border-primary);
}
```

## Notes
- All components should use CSS variables instead of hardcoded colors
- Theme changes should be smooth with CSS transitions
- System preference should be respected on first visit
- User preference should persist across sessions
- All existing components need dark mode variants
- Documentation should include dark mode examples

## Next Steps
1. Create ThemeContext and ThemeProvider
2. Implement useTheme hook
3. Set up initial theme resolution logic (localStorage → OS → default)
4. Set up CSS variables system with design tokens mapping
5. Configure Tailwind dark mode support
6. Build ThemeToggle component
7. Update existing components with dark mode support
8. Add Storybook integration for theme preview
9. Implement visual regression testing
10. Add comprehensive testing
11. Create design tokens table and theming guide
12. Update documentation with dark mode examples
