# MAKE_CRIA_COHESIVE.md

## Overview
This document tracks the process of making the CRIA Design System cohesive by ensuring all components use consistent design tokens, spacing, typography, colors, and styling patterns. We'll audit each component to identify inconsistencies and standardize them.

## Current Status: 🔄 **IN PROGRESS**

### Phase 1: Component Audit & Token Standardization
**Status**: ⏳ **READY TO START**

---

## 🎯 **GOAL**
Ensure 100% design token consistency across all components by:
- Standardizing border radius values
- Unifying typography styles
- Consistent spacing and margins
- Color token usage
- Component variant patterns
- Accessibility standards

---

## 📋 **COMPONENT AUDIT CHECKLIST**

### ✅ **COMPLETED COMPONENTS AUDIT**

#### **Foundations**
- [ ] **Typography** - Check font sizes, weights, line heights, color tokens
- [ ] **Colors** - Verify all color tokens are properly defined and used
- [ ] **Grid** - Ensure consistent spacing and breakpoints
- [ ] **Container** - Standardize max-widths, padding, margins

#### **Basic Components**
- [ ] **Button** - Border radius, padding, typography, color variants
- [ ] **Input** - Border radius, focus states, error states, sizing
- [ ] **Checkbox** - Size consistency, focus states, color tokens
- [ ] **Switch** - Size consistency, color tokens, animation
- [ ] **Snackbar** - Border radius, typography, color variants
- [ ] **Modal** - Border radius, backdrop, typography, spacing
- [ ] **Tooltip** - Border radius, typography, color tokens
- [ ] **Card** - Border radius, padding, shadow, typography
- [ ] **Badge** - Border radius, typography, color variants
- [ ] **Tabs** - Border radius, typography, spacing, active states
- [ ] **Navigation** - Typography, spacing, active states, color tokens
- [ ] **Accordion** - Border radius, typography, spacing, color tokens
- [ ] **Text** - Typography consistency, color tokens
- [ ] **Dropdown** - Border radius, typography, spacing, focus states
- [ ] **Radio Group** - Border radius, typography, spacing, color tokens
- [ ] **Textarea** - Border radius, focus states, error states, sizing

#### **Layout Components**
- [ ] **Avatar** - Border radius, size variants, color tokens
- [ ] **Breadcrumbs** - Typography, spacing, color tokens
- [ ] **Pagination** - Border radius, typography, spacing, color tokens
- [ ] **Progress Bar** - Border radius, color tokens, sizing
- [ ] **Vertical Tabs** - Border radius, typography, spacing, active states
- [ ] **Date Picker** - Border radius, typography, spacing, color tokens
- [ ] **File Upload** - Border radius, typography, spacing, color tokens
- [ ] **Divider** - Color tokens, spacing, thickness
- [ ] **Scrollbar** - Color tokens, sizing, styling
- [ ] **Footer** - Typography, spacing, color tokens
- [ ] **Mega Menu** - Border radius, typography, spacing, color tokens
- [ ] **Backgrounds** - Color tokens, spacing, sizing

#### **Advanced Components**
- [ ] **Comments Section** - Border radius, typography, spacing, color tokens
- [ ] **Slider** - Color tokens, sizing, focus states
- [ ] **Shimmer Skeleton** - Border radius, color tokens, animation
- [ ] **Pricing Page** - Border radius, typography, spacing, color tokens
- [ ] **Page Loading Progress** - Color tokens, sizing, animation
- [ ] **Card Selector** - Border radius, typography, spacing, color tokens
- [ ] **Row of Cards** - Spacing, typography, color tokens
- [ ] **Search Filters** - Border radius, typography, spacing, color tokens
- [ ] **Command Palette** - Border radius, typography, spacing, color tokens
- [ ] **Statistic Metric Card** - Border radius, typography, spacing, color tokens
- [ ] **Tag Chip** - Border radius, typography, color variants
- [ ] **Timeline** - Typography, spacing, color tokens, connectors
- [ ] **Stepper** - Border radius, typography, spacing, color tokens
- [ ] **Notification Center** - Border radius, typography, spacing, color tokens
- [ ] **Topbar** - Typography, spacing, color tokens, active states
- [ ] **Drawer** - Border radius, typography, spacing, color tokens

#### **Content Components**
- [ ] **CriaLessonCardSmall** - Border radius, typography, spacing, color tokens
- [ ] **CriaLessonCard** - Border radius, typography, spacing, color tokens
- [ ] **CriaCourseCard** - Border radius, typography, spacing, color tokens
- [ ] **CriaClassroomFutureEventCard** - Border radius, typography, spacing, color tokens
- [ ] **CriaClassroomEventCard** - Border radius, typography, spacing, color tokens
- [ ] **CriaClassroomTrilhaCard** - Border radius, typography, spacing, color tokens
- [ ] **CriaCustomLearningLessonCard** - Border radius, typography, spacing, color tokens

#### **Chart Components**
- [ ] **LineChart** - Color tokens, typography, spacing
- [ ] **BarChart** - Color tokens, typography, spacing
- [ ] **StackedBarChart** - Color tokens, typography, spacing
- [ ] **AreaChart** - Color tokens, typography, spacing
- [ ] **PieChart** - Color tokens, typography, spacing
- [ ] **DonutChart** - Color tokens, typography, spacing
- [ ] **RadarChart** - Color tokens, typography, spacing
- [ ] **ScatterChart** - Color tokens, typography, spacing
- [ ] **ComposedChart** - Color tokens, typography, spacing
- [ ] **RadialProgressChart** - Color tokens, typography, spacing

---

## 🔍 **AUDIT CRITERIA**

### **Design Token Consistency**
- [ ] **Border Radius**: All components use consistent radius values
  - `--radius-sm` (4px) - Small elements (badges, tags)
  - `--radius-md` (8px) - Default (buttons, inputs, cards)
  - `--radius-lg` (12px) - Large elements (modals, drawers)
  - `--radius-xl` (16px) - Extra large elements
  - `--radius-full` (50%) - Pills, avatars

- [ ] **Typography**: Consistent font sizes, weights, line heights
  - `--font-size-xs` through `--font-size-6xl`
  - `--font-weight-*` values
  - `--line-height-*` values
  - Color tokens for text (`--color-text`, `--color-text-muted`, etc.)

- [ ] **Spacing**: Consistent padding and margins
  - `--spacing-xs` (4px) through `--spacing-6xl` (96px)
  - Component internal spacing
  - Component external margins

- [ ] **Colors**: Proper color token usage
  - Primary, secondary, neutral, accent color schemes
  - State colors (success, warning, error, info)
  - Background and surface colors
  - Border colors

- [ ] **Shadows**: Consistent elevation system
  - `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-xl`

### **Component Pattern Consistency**
- [ ] **Variant Naming**: Consistent variant names across components
- [ ] **Size Naming**: Consistent size naming (sm, md, lg, xl)
- [ ] **State Handling**: Consistent focus, hover, active, disabled states
- [ ] **Accessibility**: ARIA attributes, keyboard navigation, screen reader support

---

## 🚀 **EXECUTION WORKFLOW**

### **Step 1: Component Analysis**
1. **Identify Issues**: Review component for token inconsistencies
2. **Document Findings**: List specific issues found
3. **Prioritize Fixes**: Rank by impact and complexity

### **Step 2: Token Standardization**
1. **Update Design Tokens**: Add missing tokens to CSS variables
2. **Apply Tokens**: Replace hardcoded values with token references
3. **Test Changes**: Ensure visual consistency and functionality

### **Step 3: Component Updates**
1. **Update Component**: Apply standardized tokens
2. **Update Tests**: Ensure tests still pass
3. **Update Demo**: Verify demo shows correct styling
4. **Document Changes**: Update component documentation

### **Step 4: Validation**
1. **Visual Review**: Check component appearance
2. **Cross-browser Testing**: Ensure consistency across browsers
3. **Accessibility Testing**: Verify accessibility standards
4. **Performance Check**: Ensure no performance regressions

---

## 📊 **PROGRESS TRACKING**

### **Overall Progress**: 0% Complete
- **Components Audited**: 0/60
- **Issues Found**: 0
- **Issues Fixed**: 0
- **Tokens Standardized**: 0

### **Current Phase**: Phase 1 - Component Audit & Token Standardization
- **Status**: ⏳ Ready to Start
- **Next Action**: Begin component audit with Typography component

---

## 🎯 **KNOWN ISSUES TO ADDRESS**

### **High Priority**
- [ ] **Card Border Radius**: Custom Learning Lesson Cards not using default card radius
- [ ] **Typography Inconsistency**: Card titles not using consistent typography tokens
- [ ] **Spacing Inconsistency**: Inconsistent margins and padding across similar components

### **Medium Priority**
- [ ] **Color Token Usage**: Some components using hardcoded colors instead of tokens
- [ ] **Shadow Consistency**: Inconsistent shadow usage across elevated components
- [ ] **Focus State Consistency**: Different focus state implementations

### **Low Priority**
- [ ] **Animation Consistency**: Different animation durations and easing
- [ ] **Icon Sizing**: Inconsistent icon sizes across components
- [ ] **Loading State Consistency**: Different loading state implementations

---

## 🔧 **TOOLS & COMMANDS**

### **Audit Commands**
```bash
# Start component audit
/MAKE_CRIA_COHESIVE audit [component-name]

# Fix specific component
/MAKE_CRIA_COHESIVE fix [component-name]

# Generate token report
/MAKE_CRIA_COHESIVE tokens

# Validate all components
/MAKE_CRIA_COHESIVE validate
```

### **Available Actions**
- `audit` - Analyze component for token consistency
- `fix` - Apply token standardization to component
- `tokens` - Generate design token usage report
- `validate` - Run full validation suite
- `report` - Generate progress report

---

## 📝 **NOTES & OBSERVATIONS**

### **Design Token Gaps**
- Missing consistent card border radius token
- Inconsistent typography scale usage
- Spacing token gaps in some components

### **Component Pattern Issues**
- Different variant naming conventions
- Inconsistent size scaling
- Mixed state handling approaches

---

## 🎉 **SUCCESS CRITERIA**

### **Completion Requirements**
- [ ] All 60+ components audited
- [ ] 100% design token usage
- [ ] Consistent typography across all components
- [ ] Unified spacing system
- [ ] Standardized color usage
- [ ] Consistent border radius values
- [ ] Unified shadow system
- [ ] All accessibility standards met
- [ ] Cross-browser compatibility verified
- [ ] Performance benchmarks maintained

### **Quality Gates**
- [ ] Visual consistency across all components
- [ ] No hardcoded values in component styles
- [ ] All tests passing
- [ ] Documentation updated
- [ ] Demo pages reflect changes

---

## 🚀 **NEXT STEPS**

1. **Execute**: `/MAKE_CRIA_COHESIVE audit typography`
2. **Review**: Analyze Typography component for token consistency
3. **Fix**: Apply any necessary token standardizations
4. **Validate**: Ensure changes maintain functionality
5. **Document**: Update progress and move to next component

---

**Last Updated**: [Current Date]
**Version**: 1.0.0
**Status**: Ready to Execute
