# 🧠 Dark Mode Visual QA Assistant

You are a Senior Frontend Engineer and Visual QA Specialist for the CRIA Design System.  
Your job is to **audit, detect, and fix dark mode visual issues** (contrast, readability, hover/focus visibility, and token consistency) in every component page.

## What to Do
1. Compare each screenshot (before/after) and identify **contrast or color token mismatches**.  
2. Highlight which color tokens or CSS variables should be adjusted.  
3. Suggest replacements using our token system (e.g., `--cria-text-primary-dark`, `--cria-bg-secondary-dark`).  
4. When fixing, prefer adjusting **theme variables** instead of component-level overrides.  
5. After each correction:
   - Verify color contrast meets **WCAG AA (≥ 4.5:1)**.
   - Update the corresponding section below (“Current Issues Found”).
   - Mark page as ✅ Completed once visually balanced.

## Fixing Priorities
- Text contrast (primary, secondary, link, placeholder)
- Background–card–border hierarchy
- Component state colors (hover, active, disabled)
- Divider and outline visibility
- Interactive feedback (focus rings, hover states)
- Accessibility consistency between light/dark

## Expected Output
For each fix Cursor applies:
- A short description of the change
- The affected component/page
- The updated CSS variable or token
- Before/after hex values (if relevant)

---

## Overview
This document tracks the systematic testing and fixing of dark mode implementation across all pages of the design system. We'll go page by page, take screenshots, identify issues, and implement fixes.

## Testing Progress

### ✅ Completed Pages
- [x] Overview (Fixed 4 dark mode issues: card backgrounds, text colors, hardcoded overrides, inline styles)
- [x] Design Tokens (Fixed 6 issues: backgrounds, borders, text colors, semantic colors, accessibility section + refactored to reusable components)
- [x] Button Component (Fixed 2 dark mode issues: hardcoded text colors, danger button hover)
- [x] Sidebar Component (Fixed 5 dark mode issues: Badge demo + Navigation contrast improvements)

### 🔄 In Progress
- [ ] Ready for next component testing

### ⏳ Pending Pages
- [ ] Design Tokens
- [ ] Components
- [ ] Accessibility
- [ ] Layout
- [ ] Individual Component Pages
  - [ ] Accordion
  - [ ] Avatar
  - [ ] Badge
  - [ ] Breadcrumbs
  - [ ] Button
  - [ ] Card
  - [ ] Checkbox
  - [ ] Dropdown
  - [ ] Input
  - [ ] Modal
  - [ ] Pagination
  - [ ] ProgressBar
  - [ ] RadioGroup
  - [ ] Sidebar
  - [ ] Snackbar
  - [ ] Switch
  - [ ] Tabs
  - [ ] Text
  - [ ] Textarea
  - [ ] Tooltip
  - [ ] Typography

## Testing Process

### For Each Page:
1. **Take Screenshot** - Capture current state in both light and dark mode
2. **Identify Issues** - Document visual problems, contrast issues, missing dark mode styles
3. **Implement Fixes** - Update CSS variables, component styles, or theme tokens
4. **Verify Fixes** - Take new screenshots to confirm improvements
5. **Mark Complete** - Update this document with results

## Current Issues Found

### Overview Page
- [x] Issue 1: **FIXED** - Hardcoded white backgrounds and light borders in Overview cards
  - **Problem**: Cards used `backgroundColor: 'var(--cria-white)'` and `border: '1px solid var(--cria-gray-200)'` 
  - **Impact**: Cards appeared white with light borders in dark mode, poor contrast
  - **Solution**: Changed to `backgroundColor: 'var(--cria-surface-primary)'` and `border: '1px solid var(--cria-border-primary)'`
  - **Result**: Cards now properly adapt to light/dark themes

- [x] Issue 2: **FIXED** - Harsh white body text color in dark mode
  - **Problem**: `--cria-text-primary` was set to `#FFFFFF` (pure white) in dark mode
  - **Impact**: Body text was too bright and harsh on dark backgrounds, poor readability
  - **Solution**: Changed `--cria-text-primary` from `#FFFFFF` to `#E5E7EB` (softer light gray)
  - **Result**: Body text now has better contrast and readability in dark mode

- [x] Issue 3: **FIXED** - Hardcoded dark gray color overriding CriaTextBody1
  - **Problem**: Changelog section had `style={{ color: '#666' }}` hardcoded dark gray
  - **Impact**: Text was invisible in dark mode due to dark gray on dark background
  - **Solution**: Removed hardcoded color, let CriaTextBody1 use proper theme colors
  - **Result**: Changelog text now properly adapts to light/dark themes

- [x] Issue 4: **FIXED** - Inline fontSize styles interfering with component styling
  - **Problem**: Wrapper divs had `fontSize: '14px'` inline styles that could interfere
  - **Impact**: Potential conflicts with CriaTextBody1 component styling
  - **Solution**: Removed inline fontSize styles, let components handle their own sizing
  - **Result**: Cleaner component styling without inline style conflicts

### Design Tokens Page
- [x] Issue 1: **FIXED** - Hardcoded light backgrounds in ColorSwatch components
  - **Problem**: `backgroundColor: colors.backgroundLight` and `backgroundColor: colors.gray[50]`
  - **Impact**: White/light backgrounds in dark mode, poor contrast
  - **Solution**: Changed to `backgroundColor: 'var(--cria-surface-primary)'` and `backgroundColor: 'var(--cria-surface-secondary)'`
  - **Result**: Color swatches now adapt to theme

- [x] Issue 2: **FIXED** - Hardcoded light borders throughout component
  - **Problem**: `border: \`1px solid ${colors.border.light}\`` and `border: \`1px solid ${colors.text.primary}\``
  - **Impact**: Light borders invisible in dark mode
  - **Solution**: Changed to `border: '1px solid var(--cria-border-primary)'`
  - **Result**: All borders now visible in both themes

- [x] Issue 3: **FIXED** - Hardcoded white text in DarkColorSwatch
  - **Problem**: `color: 'white'` hardcoded in multiple places
  - **Impact**: Text color doesn't adapt to theme changes
  - **Solution**: Changed to `color: 'var(--cria-text-inverse)'`
  - **Result**: Text properly adapts to theme

- [x] Issue 4: **FIXED** - Hardcoded semantic colors in usage examples
  - **Problem**: `color: colors.success`, `color: colors.warning`, etc. hardcoded
  - **Impact**: Colors don't use CSS variables for theme consistency
  - **Solution**: Changed to `color: 'var(--cria-success)'`, `color: 'var(--cria-warning)'`, etc.
  - **Result**: Semantic colors now use proper CSS variables

- [x] Issue 5: **FIXED** - Accessibility section hardcoded styling
  - **Problem**: `backgroundColor: colors.gray[50]` and `border: \`1px solid ${colors.border.light}\``
  - **Impact**: Accessibility section invisible in dark mode
  - **Solution**: Changed to `backgroundColor: 'var(--cria-surface-secondary)'` and `border: '1px solid var(--cria-border-primary)'`
  - **Result**: Accessibility section now properly themed

- [x] Issue 6: **REFACTORED** - Created reusable ColorSwatchCard components
  - **Problem**: Repetitive card styling code throughout Colors page
  - **Impact**: Code duplication, inconsistent styling, maintenance issues
  - **Solution**: Created `ColorSwatchCard` and `DarkColorSwatchCard` components using existing `Card` component
  - **Result**: Cleaner code, consistent theming, better maintainability, automatic dark mode support

### Button Component
- [x] Issue 1: **FIXED** - Hardcoded text colors in Button demo
  - **Problem**: `color: colors.text.secondary` hardcoded in demo descriptions
  - **Impact**: Text color doesn't adapt to dark mode, poor readability
  - **Solution**: Changed to `color: 'var(--cria-text-secondary)'`
  - **Result**: Demo text now properly adapts to light/dark themes

- [x] Issue 2: **FIXED** - Hardcoded danger button hover color
  - **Problem**: `background-color: #B91C1C` hardcoded for danger button hover
  - **Impact**: Hover state doesn't use theme-aware colors
  - **Solution**: Changed to `background-color: var(--cria-error)` with `filter: brightness(0.8)`
  - **Result**: Danger button hover now uses proper theme colors

### Sidebar Component (Navigation)
- [x] Issue 1: **FIXED** - Hardcoded background colors in Badge demo
  - **Problem**: `backgroundColor: colors.gray[100]` and `border: \`1px solid ${colors.border.light}\`` in Badge demo
  - **Impact**: Notification badge containers invisible in dark mode
  - **Solution**: Changed to `backgroundColor: 'var(--cria-surface-secondary)'` and `border: '1px solid var(--cria-border-primary)'`
  - **Result**: Badge demo containers now properly adapt to light/dark themes

- [x] Issue 2: **FIXED** - Hardcoded text color in Badge demo
  - **Problem**: `color: colors.gray[500]` hardcoded in accessibility description
  - **Impact**: Text color doesn't adapt to dark mode, poor readability
  - **Solution**: Changed to `color: 'var(--cria-text-secondary)'`
  - **Result**: Accessibility description text now properly adapts to themes

- [x] Issue 3: **VERIFIED** - Navigation component CSS is properly theme-aware
  - **Problem**: Navigation component uses proper CSS variables throughout
  - **Impact**: No issues found - Navigation component already supports dark mode
  - **Solution**: No changes needed - component is well-implemented
  - **Result**: Navigation component works correctly in both light and dark modes

- [x] Issue 4: **FIXED** - Poor text contrast in dark mode navigation
  - **Problem**: Unselected navigation items had poor contrast against dark sidebar background
  - **Impact**: Navigation text was very hard to read in dark mode
  - **Solution**: Improved text colors and added specific dark mode styles with better contrast
  - **Result**: Navigation text now has much better readability in dark mode

- [x] Issue 5: **FIXED** - Enhanced text color contrast in dark theme
  - **Problem**: `--cria-text-primary` was too dim for good contrast in dark mode
  - **Impact**: All primary text was hard to read across the application
  - **Solution**: Changed `--cria-text-primary` from `#E5E7EB` to `#F3F4F6` (brighter)
  - **Result**: All primary text now has better contrast and readability in dark mode

## Screenshots Directory
- `docs/screenshots/before/` - Original screenshots showing issues
- `docs/screenshots/after/` - Screenshots after fixes

## Notes
- Focus on contrast ratios and readability
- Ensure all interactive elements are clearly visible
- Check for proper color token usage
- Verify theme switching works smoothly
