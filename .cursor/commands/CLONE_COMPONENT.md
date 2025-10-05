# CLONE_COMPONENT Guidelines

## Overview
This document provides guidelines for recreating components from Rails/Tailwind implementations using our React design system. The goal is to modernize, improve responsiveness, and enhance the overall design while maintaining functionality.

## Command Format
```
/CLONE_COMPONENT create component X using this as a reference /old_component_path
```

## Design System Principles

### 1. **Design Tokens First**
- Always use our design tokens from `src/tokens/`:
  - `colors.ts` - Color palette and semantic colors
  - `spacing.ts` - Consistent spacing scale
  - `typography.ts` - Font families, sizes, weights
  - `radii.ts` - Border radius values
  - `shadows.ts` - Box shadow definitions

### 2. **Component Structure**
Follow our established component pattern:
```
src/components/ComponentName/
├── ComponentName.tsx          # Main component
├── __tests__/
│   └── ComponentName.test.tsx # Comprehensive tests
├── demo.tsx                   # Demo page
└── index.ts                   # Exports
```

### 3. **Styling Approach**
- Use CSS-in-JS with design tokens for dynamic styling
- Create component-specific CSS files in `src/styles/components/`
- Import and aggregate in `src/styles/index.css`
- Avoid hardcoded values - always use tokens

## Migration Process

### Phase 1: Analysis
1. **Examine the original component**:
   - Identify all visual elements
   - Note responsive breakpoints
   - Document interactive states
   - List all props and functionality

2. **Identify design system equivalents**:
   - Map Tailwind classes to our design tokens
   - Find existing components that can be reused
   - Plan new components needed

### Phase 2: Design Improvements
1. **Responsiveness**:
   - Use CSS Grid and Flexbox for layouts
   - Implement mobile-first approach
   - Test on multiple screen sizes
   - Use our spacing tokens for consistent gaps

2. **Modern Design**:
   - Enhance visual hierarchy
   - Improve color contrast and accessibility
   - Add subtle animations and transitions
   - Use our shadow and radius tokens

3. **User Experience**:
   - Improve loading states
   - Add proper focus management
   - Enhance keyboard navigation
   - Implement proper ARIA attributes

### Phase 3: Implementation
1. **Create the component**:
   ```tsx
   import React from 'react';
   import { colors, spacing, typography } from '../../tokens';
   
   export interface ComponentNameProps {
     // Define props with proper TypeScript types
   }
   
   export const ComponentName: React.FC<ComponentNameProps> = ({
     // Destructure props with defaults
   }) => {
     // Implementation
   };
   ```

2. **Add comprehensive tests**:
   - Render tests
   - Interaction tests
   - Accessibility tests
   - Responsive behavior tests

3. **Create demo page**:
   - Show all variants and states
   - Include responsive examples
   - Add interactive controls

## Common Migration Patterns

### Tailwind to Design Tokens
```tsx
// ❌ Old Tailwind approach
<div className="bg-blue-500 p-4 rounded-lg shadow-md">

// ✅ New design system approach
<div style={{
  backgroundColor: colors.primary,
  padding: spacing.lg,
  borderRadius: spacing.md,
  boxShadow: shadows.md,
}}>
```

### Responsive Layouts
```tsx
// ❌ Old approach with fixed breakpoints
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

// ✅ New approach with flexible layouts
<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: spacing.lg,
}}>
```

### Component Composition
```tsx
// ❌ Monolithic component
<div className="card">
  <div className="card-header">...</div>
  <div className="card-body">...</div>
</div>

// ✅ Composable design system
<Card>
  <CardHeader>...</CardHeader>
  <CardContent>...</CardContent>
</Card>
```

## Quality Checklist

### ✅ Functionality
- [ ] All original features preserved
- [ ] Props interface matches requirements
- [ ] Event handlers work correctly
- [ ] State management implemented properly

### ✅ Design
- [ ] Uses design tokens consistently
- [ ] Responsive on all screen sizes
- [ ] Accessible (WCAG 2.1 AA)
- [ ] Consistent with design system

### ✅ Code Quality
- [ ] TypeScript types defined
- [ ] Comprehensive test coverage
- [ ] Clean, readable code
- [ ] Proper error handling

### ✅ Integration
- [ ] Added to main index.ts exports
- [ ] CSS imported in styles/index.css
- [ ] Demo page created
- [ ] Added to App.tsx navigation

## Example Migration

### Original Rails/Tailwind Component
```erb
<div class="bg-white rounded-lg shadow-md p-6 mb-4">
  <h3 class="text-lg font-semibold text-gray-900 mb-2"><%= title %></h3>
  <p class="text-gray-600 mb-4"><%= description %></p>
  <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
    <%= button_text %>
  </button>
</div>
```

### Migrated React Component
```tsx
import React from 'react';
import { Card, CardContent, CardHeader } from '../Card';
import { Button } from '../Button';
import { Typography } from '../Typography';
import { colors, spacing } from '../../tokens';

export interface FeatureCardProps {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  buttonText,
  onButtonClick,
}) => {
  return (
    <Card style={{ marginBottom: spacing.lg }}>
      <CardHeader>
        <Typography variant="title3" style={{ marginBottom: spacing.sm }}>
          {title}
        </Typography>
      </CardHeader>
      <CardContent>
        <Typography 
          variant="body" 
          style={{ 
            color: colors.gray[600], 
            marginBottom: spacing.lg 
          }}
        >
          {description}
        </Typography>
        <Button 
          variant="primary" 
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};
```

## Best Practices

1. **Don't copy 1:1**: Use the original as inspiration, not a template
2. **Improve responsiveness**: Make it work better on mobile and tablet
3. **Enhance accessibility**: Add proper ARIA labels and keyboard navigation
4. **Use composition**: Break down complex components into smaller, reusable parts
5. **Test thoroughly**: Ensure it works across different scenarios
6. **Document well**: Add JSDoc comments and comprehensive demos

## Tools and Resources

- **Design Tokens**: `src/tokens/` - All design system values
- **Existing Components**: `src/components/` - Reusable components
- **Testing**: Jest + React Testing Library
- **Styling**: CSS-in-JS with design tokens
- **Icons**: Phosphor React icons
- **Demo Pages**: Interactive examples for each component

## Getting Started

1. Run the command: `/CLONE_COMPONENT create component X using this as a reference /old_component_path`
2. Analyze the original component thoroughly
3. Plan the new component structure
4. Implement following our design system guidelines
5. Test and refine
6. Create demo and documentation

Remember: The goal is not to replicate exactly, but to create something better, more modern, and more maintainable using our design system principles.
