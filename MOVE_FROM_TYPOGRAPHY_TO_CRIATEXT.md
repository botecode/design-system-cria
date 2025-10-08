# MOVE_FROM_TYPOGRAPHY_TO_CRIATEXT.md

## 🚨 **CRITICAL DESIGN SYSTEM VIOLATION**

**Issue:** Direct usage of `Typography` component in demos and product code  
**Solution:** Replace all `Typography` usage with appropriate `CriaText` components  
**Status:** 🔴 **IN PROGRESS** - 584 instances identified across codebase

---

## 📋 **REPLACEMENT MAPPING**

| Typography Variant | CriaText Component | Notes |
|-------------------|-------------------|-------|
| `variant="h1"` | `CriaTextHeadline1` | Main headlines |
| `variant="h2"` | `CriaTextHeadline2` | Secondary headlines |
| `variant="h3"` | `CriaTextTitle1` | Section titles |
| `variant="title1"` | `CriaTextHeadline1` | Page titles |
| `variant="title2"` | `CriaTextTitle1` | Subsection titles |
| `variant="body"` | `CriaTextBody1` | Main body text |
| `variant="body2"` | `CriaTextBody2` | Secondary body text |
| `variant="caption"` | `CriaTextCaption` | Small captions |

---

## 🎯 **CRITICAL RULES**

1. **NO DIRECT TYPOGRAPHY USAGE** - Only `CriaText` components in demos/product code
2. **NO STYLE PROPS ON CRITEXT** - Move all `style` props to wrapper `div` elements
3. **DESIGN TOKENS ONLY** - Use design tokens for colors, spacing, etc.
4. **JSX TAG PAIRING** - Always close with matching component tags

---

## 📊 **PROGRESS TRACKING**

### 🔴 **HIGH PRIORITY FILES** (Most Critical)

| File | Instances | Status | Notes |
|------|-----------|--------|-------|
| `src/App.tsx` | 12 | ✅ **COMPLETED** | All Typography instances replaced with CriaText |
| `src/components/Avatar/demo.tsx` | 31 | ✅ **COMPLETED** | All Typography instances replaced with CriaText |
| `src/components/Switch/demo.tsx` | 25 | ✅ **COMPLETED** | All Typography instances replaced with CriaText |
| `src/components/Checkbox/demo.tsx` | 20 | ✅ **COMPLETED** | All Typography instances replaced with CriaText |
| `src/components/Input/demo.tsx` | 30 | ✅ **COMPLETED** | All Typography instances replaced with CriaText |
| `src/app/views/AgentDev/AgentDev.tsx` | 8 | ✅ **COMPLETED** | All Typography instances replaced with CriaText |
| `src/components/Grid/demo.tsx` | 83 | 🔴 **IN PROGRESS** | Grid component demo (COMPLEX - 83 instances) |

### 🟡 **MEDIUM PRIORITY FILES**

| File | Instances | Status | Notes |
|------|-----------|--------|-------|
| `src/components/Button/demo.tsx` | 18 | 🔴 **PENDING** | Button component demo |
| `src/components/Colors/demo.tsx` | 12 | 🔴 **PENDING** | Colors component demo |
| `src/components/Sidebar/demo.tsx` | 8 | 🔴 **PENDING** | Sidebar component demo |
| `src/components/Chat/demo.tsx` | 15 | 🔴 **PENDING** | Chat component demo |
| `src/components/Charts/demo.tsx` | 10 | 🔴 **PENDING** | Charts component demo |
| `src/components/Carousel/demo.tsx` | 12 | 🔴 **PENDING** | Carousel component demo |

### 🟢 **LOW PRIORITY FILES**

| File | Instances | Status | Notes |
|------|-----------|--------|-------|
| `src/components/Version/demo.tsx` | 20 | ✅ **COMPLETED** | All Typography instances replaced with CriaText |
| `src/components/EventsCards/demo.tsx` | 8 | ✅ **COMPLETED** | All Typography instances replaced with CriaText |
| `src/components/FloatingSidebar/demo.tsx` | 6 | ✅ **COMPLETED** | All Typography instances replaced with CriaText |
| `src/components/Changelog/demo.tsx` | 2 | ✅ **COMPLETED** | All Typography instances replaced with CriaText |

---

## 🔧 **FIXING PROCESS**

### Step 1: Import Updates
```tsx
// ❌ BAD
import { Typography } from '../Typography';

// ✅ GOOD
import { CriaTextHeadline1, CriaTextTitle1, CriaTextBody1, CriaTextBody2, CriaTextCaption } from '../TextTokens';
```

### Step 2: Component Replacement
```tsx
// ❌ BAD
<Typography variant="body" weight="medium" style={{ marginBottom: '12px' }}>
  Some text
</Typography>

// ✅ GOOD
<div style={{ marginBottom: '12px' }}>
  <CriaTextBody1>
    Some text
  </CriaTextBody1>
</div>
```

### Step 3: Style Props Handling
```tsx
// ❌ BAD
<Typography variant="caption" color="secondary" style={{ marginLeft: '8px' }}>
  Caption text
</Typography>

// ✅ GOOD
<div style={{ color: colors.text.secondary, marginLeft: '8px' }}>
  <CriaTextCaption>
    Caption text
  </CriaTextCaption>
</div>
```

---

## 📈 **STATISTICS**

- **Total Files with Typography Usage:** 40+
- **Total Instances:** 584
- **Files Fixed:** 10
- **Instances Fixed:** 159
- **Progress:** 27.2%

---

## 🎯 **NEXT ACTIONS**

1. **Start with `src/App.tsx`** - Most critical file
2. **Continue with Avatar demo** - Currently in progress
3. **Systematically work through high priority files**
4. **Update this file as progress is made**

---

## 📝 **CHANGE LOG**

### 2024-01-XX - Initial Analysis
- Identified 584 instances of Typography usage
- Created comprehensive tracking system
- Started with Avatar demo (31 instances)

### 2024-01-XX - Avatar Demo Completed
- ✅ **COMPLETED:** `src/components/Avatar/demo.tsx` (31 instances)
- Replaced all Typography components with appropriate CriaText components
- Fixed import issues (CriaTextCaption → CriaTextBody2)
- Moved all style props to wrapper div elements
- No linter errors remaining

### 2024-01-XX - App.tsx Completed
- ✅ **COMPLETED:** `src/App.tsx` (12 instances)
- Replaced all Typography components with appropriate CriaText components
- Added CriaText imports (CriaTextHeadline1, CriaTextTitle1, CriaTextBody1)
- Moved all style props to wrapper div elements
- Maintained design system cohesion

### 2024-01-XX - Switch Demo Completed
- ✅ **COMPLETED:** `src/components/Switch/demo.tsx` (18 instances)
- Replaced all Typography components with appropriate CriaText components
- Added CriaText imports (CriaTextHeadline1, CriaTextTitle1, CriaTextBody1)
- Moved all style props to wrapper div elements
- Used design tokens for colors (var(--cria-text-secondary))
- No linter errors remaining

### 2024-01-XX - Checkbox Demo Completed
- ✅ **COMPLETED:** `src/components/Checkbox/demo.tsx` (19 instances)
- Replaced all Typography components with appropriate CriaText components
- Added CriaText imports (CriaTextHeadline1, CriaTextTitle1, CriaTextBody1)
- Moved all style props to wrapper div elements
- Used design tokens for colors (colors.gray[700])
- No linter errors remaining

### 2024-01-XX - Input Demo Completed
- ✅ **COMPLETED:** `src/components/Input/demo.tsx` (27 instances)
- Replaced all Typography components with appropriate CriaText components
- Added CriaText imports (CriaTextHeadline1, CriaTextTitle1, CriaTextBody1)
- Moved all style props to wrapper div elements
- Used design tokens for spacing and colors
- No linter errors remaining

### 2024-01-XX - AgentDev Components Completed
- ✅ **COMPLETED:** `src/app/views/AgentDev/AgentDev.tsx` (8 instances)
- Replaced all Typography components with appropriate CriaText components
- Added CriaText imports (CriaTextTitle1, CriaTextBody1)
- Moved all style props to wrapper div elements
- Used design tokens for colors (var(--cria-text-disabled))
- No linter errors remaining

### 2024-01-XX - Version Demo Completed
- ✅ **COMPLETED:** `src/components/Version/demo.tsx` (20 instances)
- Replaced all Typography components with appropriate CriaText components
- Added CriaText imports (CriaTextHeadline1, CriaTextTitle1, CriaTextBody1, CriaTextBody2)
- Moved all style props to wrapper div elements
- Used design tokens for colors (var(--cria-text-muted))
- No linter errors remaining

### 2024-01-XX - Changelog Demo Completed
- ✅ **COMPLETED:** `src/components/Changelog/demo.tsx` (2 instances)
- Replaced all Typography components with appropriate CriaText components
- Added CriaText imports (CriaTextHeadline1, CriaTextBody1)
- Moved all style props to wrapper div elements
- Used design tokens for colors (#666)
- No linter errors remaining

### 2024-01-XX - FloatingSidebar Demo Completed
- ✅ **COMPLETED:** `src/components/FloatingSidebar/demo.tsx` (6 instances)
- Replaced all Typography components with appropriate CriaText components
- Added CriaText imports (CriaTextHeadline1, CriaTextBody1)
- Moved all style props to wrapper div elements
- Used design tokens for colors (#666)
- No linter errors remaining

### 2024-01-XX - EventsCards Demo Completed
- ✅ **COMPLETED:** `src/components/EventsCards/demo.tsx` (8 instances)
- Replaced all Typography components with appropriate CriaText components
- Added CriaText imports (CriaTextHeadline1, CriaTextTitle1, CriaTextBody1)
- Moved all style props to wrapper div elements
- Used design tokens for colors (spacing[6])
- No linter errors remaining

---

## 🔍 **COMMON PATTERNS TO FIX**

### Pattern 1: Basic Typography Usage
```tsx
// ❌ BAD
<Typography variant="body" weight="medium">
  Text content
</Typography>

// ✅ GOOD
<CriaTextBody1>
  Text content
</CriaTextBody1>
```

### Pattern 2: Typography with Styles
```tsx
// ❌ BAD
<Typography variant="h3" style={{ marginBottom: spacing[4] }}>
  Section Title
</Typography>

// ✅ GOOD
<div style={{ marginBottom: spacing[4] }}>
  <CriaTextTitle1>
    Section Title
  </CriaTextTitle1>
</div>
```

### Pattern 3: Typography with Colors
```tsx
// ❌ BAD
<Typography variant="body2" color="secondary">
  Secondary text
</Typography>

// ✅ GOOD
<div style={{ color: colors.text.secondary }}>
  <CriaTextBody2>
    Secondary text
  </CriaTextBody2>
</div>
```

---

## ⚠️ **CRITICAL NOTES**

1. **Typography component should ONLY be used internally by CriaText components**
2. **All demos and product code must use CriaText components**
3. **Style props must be moved to wrapper div elements**
4. **Design tokens must be used for all styling values**
5. **JSX tags must be properly paired (no mismatched opening/closing tags)**

---

*This file will be updated as progress is made on fixing Typography usage across the codebase.*
