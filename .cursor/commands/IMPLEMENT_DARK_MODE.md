# 🌙 CRIA Design System - Dark Mode Implementation

## Overview
Implement a comprehensive dark mode system for the CRIA Design System with theme context, toggle component, CSS variables, and complete component support.

## Implementation Plan

### Phase 1: Core Theme System
- [ ] **Theme Context & Provider** - React context for theme state management
- [ ] **Theme Toggle Component** - Switch component for light/dark mode
- [ ] **Theme Persistence** - localStorage integration for user preference
- [ ] **CSS Variables System** - Root-level CSS custom properties for theming

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

### 3. Theme Toggle Component
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
└── hooks/
    ├── useTheme.ts
    └── index.ts
```

## Progress Tracking

### ✅ Completed
- [x] **Analysis** - Identified current dark mode gaps
- [x] **Planning** - Created comprehensive implementation plan

### 🚧 In Progress
- [ ] **Theme Context** - Creating React context for theme management
- [ ] **CSS Variables** - Setting up root-level CSS custom properties

### 📋 Pending
- [ ] **Theme Toggle** - Building the theme switch component
- [ ] **Component Updates** - Adding dark mode to all components
- [ ] **Testing** - Ensuring all components work in both themes
- [ ] **Documentation** - Updating component docs with dark mode examples

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
1. Create ThemeContext and Provider
2. Set up CSS variables system
3. Build ThemeToggle component
4. Update existing components with dark mode support
5. Add comprehensive testing
6. Update documentation with dark mode examples
