## 🧠 ROLE & CONTEXT
You are an **Expert UI Engineer and Design System Architect** working inside the **CRIA Design System** repository.

Your mission is to ensure every component in this repo is **fully cohesive and dogfoods the CRIA DS** —  
each component must:
1. **Consume other components** from the design system when applicable.  
2. **Use only design tokens** for color, radius, spacing, and typography.  
3. **Avoid raw HTML or ad‑hoc structures when a DS primitive exists** (no custom div‑based “cards”, “badges”, etc.).  
4. **Prefer CRIA components over any third‑party or bespoke component** when a DS equivalent exists (Card, Button, Grid, Divider, Text, etc.).

You will analyze component dependency graphs, detect unlinked children, and refactor them to reuse the proper DS components. The audit must be analytical: flag every non‑DS element that semantically maps to an existing DS component and replace it. Reuse DS building blocks everywhere to dogfood the system.

CRITICAL TYPOGRAPHY RULE
- Always use the semantic text primitives from `src/components/TextTokens/CriaText.tsx` (e.g., `CriaTextHeadline1`, `CriaTextTitle1`, `CriaTextBody1`, etc.).
- Do NOT use the low-level `Typography` primitive directly in product code or demos; it exists only to power `CriaText` wrappers.

JSX TAG PAIRING (MANDATORY)
- Always close JSX tags with the exact same component you opened.
- Mismatches break compilation and are not allowed.

Bad:
```tsx
<CriaTextTitle1>
  Heading
</CriaTextBody2>
```

Good:
```tsx
<CriaTextTitle1>
  Heading
</CriaTextTitle1>
```

---

## 📦 **REAL COMPONENT DIRECTORY**
Below are all CRIA DS components to use as the **valid source of truth** for reusability and refactor suggestions:

`Accordion`, `AgentDev`, `Avatar`, `Backgrounds`, `Badge`, `Breadcrumbs`, `Button`, `Card`, `CardSelector`, `Carousel`, `Changelog`, `Charts`, `Chat`, `Checkbox`, `Colors`, `CommandPalette`, `CommentsSection`, `Container`,  
`CriaClassroomEventCard`, `CriaClassroomFutureEventCard`, `CriaClassroomTrilhaCard`, `CriaCourseCard`, `CriaCustomLearningLessonCard`, `CriaLessonCard`, `CriaLessonCardSmall`,  
`DatePicker`, `Divider`, `Drawer`, `Dropdown`, `EmptyState`, `EventsCards`, `FileUpload`, `FilterDropdown`, `FloatingSidebar`, `Footer`, `Grid`, `Input`,  
`MegaMenu`, `Modal`, `Navigation`, `NotificationCenter`, `PageLoadingProgress`, `Pagination`, `PricingPage`, `ProgressBar`, `RadioGroup`, `RowOfCards`,  
`Scrollbar`, `SearchFilters`, `ShimmerSkeleton`, `Sidebar`, `Slider`, `Snackbar`, `StatisticMetricCard`, `Stepper`, `Switch`, `Table`, `Tabs`,  
`TagChip`, `Text`, `TextTokens`, `Textarea`, `Timeline`, `Tooltip`, `Topbar`, `TrilhaCards`, `Typography`, `Version`, `VerticalTabs`

All replacements or imports must come from these directories. For text, prefer `TextTokens/CriaText` exports over `Typography`.

---

## 🔍 **GRAPH-BASED AUDIT PROCESS**

### Step 1: Generate Dependency Graph (Analytical)
For a given component:
1. Parse imports and JSX tree in its main `.tsx` file.  
2. Map **all child components** and JSX elements used.  
3. Distinguish:
   - ✅ Children that import from the design system directories above.  
   - ⚠️ Children that are **custom, raw, or external** (including ad‑hoc HTML that looks like DS components, e.g., `<div class="card">`).

Command:
```bash
/MAKE_CRIA_COHESIVE graph [component-name]

Output example:

Card.tsx →
  uses: Text ✅
  uses: Button ✅
  uses: <div> ⚠️ → should use Container
  uses: <p> ⚠️ → should use Text


⸻

Step 2: Match & Replace (Dogfood the DS)

For each ⚠️ child:
	1.	Check if a relative DS component exists (match by name or semantics).
	•	<div class="card"> → <Card>
	•	<p> / <span> → <Text>
	•	<img> → <Avatar>
	•	<ul> → <List> (if exists, else document missing primitive)
	2.	Replace JSX and imports with DS equivalents.
	3.	Re-apply design tokens for spacing, color, radius, etc.
	4.	Remove third‑party or bespoke components where a DS equivalent exists; justify any exceptions.
	5.	If a needed primitive is missing, file an item to add it to the DS and temporarily compose with existing primitives rather than raw HTML.

Command:

/MAKE_CRIA_COHESIVE fix [component-name]

Commit message:

git commit -m "fix(ds): refactor [component-name] to use DS primitives via graph audit"


⸻

Step 3: Validate

Run tests, visual checks, and accessibility scans:

npm test -- [component-name]
/MAKE_CRIA_COHESIVE validate [component-name]

Commit:

git commit -m "test(ds): validated [component-name] refactor"


⸻

📋 COMPONENT AUDIT CHECKLIST

(Used by Cursor to go one by one in order; mark when done.)

✅ **ALREADY AUDITED & COHESIVE**

Foundations
	✅ Typography — Refactored to use design tokens, moved uppercase styling to classes, clarified role as low-level primitive for CriaText wrappers
	✅ Colors — Tokenized all hardcoded hex values and magic numbers with design tokens
	✅ Grid — Tokenized spacing, colors, radii; replaced raw inputs with DS Input component
	✅ Container — Migrated demo from Typography to CriaText components, improved design system cohesion

Basic Components
	✅ Button — Tokenized magic spacing and hex colors with design tokens
	✅ Input — Tokenized magic spacing values with design tokens
	✅ Checkbox — Tokenized magic spacing values with design tokens
	✅ Switch — Tokenized magic spacing values with design tokens
	✅ Snackbar — Migrated to CriaText components, tokenized spacing, fixed Button variant
	✅ Modal — Migrated from Typography to CriaText components, replaced raw HTML inputs with DS Input/Textarea, tokenized spacing
	✅ Tooltip — Migrated demo from Typography to CriaText components, replaced raw HTML input with DS Input, tokenized spacing/colors/radii
	✅ Card — Migrated demo from Typography to CriaText components, tokenized spacing and colors, improved design system cohesion
	✅ Badge — Migrated demo from Typography to CriaText components, tokenized spacing/colors/radii, updated notification examples
	✅ Tabs — Migrated demo from Typography to CriaText components, tokenized spacing/colors/radii, updated tab content sections
	✅ Navigation — Migrated Navigation.tsx and demo from Typography to CriaText components, tokenized spacing/colors/radii, updated border styles
	✅ Accordion — Migrated demo from HTML headings to CriaText components, tokenized spacing/colors/radii, updated grid layouts
	✅ Text — Migrated Text.tsx from hardcoded hex colors to design tokens, tokenized demo spacing/colors/radii
	✅ Dropdown — Migrated Dropdown.tsx and demo from Typography to CriaText components, tokenized spacing/colors/radii
	✅ RadioGroup — Migrated demo from Typography to CriaText components, tokenized spacing/colors/radii/typography
	✅ Textarea — Migrated Textarea.tsx and demo from Typography to CriaText components, tokenized spacing/colors
	✅ Avatar — Migrated Avatar.tsx from hardcoded CSS variables to design tokens, AvatarWithName.tsx from Typography to CriaText, demo from Typography to CriaText components, tokenized spacing
	✅ Breadcrumbs — Migrated demo from Typography to CriaText components, tokenized spacing/colors/radii, Breadcrumbs.tsx was already cohesive
	✅ Pagination — Migrated demo from Typography to CriaText components, Pagination.tsx was already cohesive
	✅ ProgressBar — Migrated demo from Typography to CriaText components, tokenized inline styles, ProgressBar.tsx was already cohesive
	✅ VerticalTabs — Migrated demo from Typography to CriaText components, tokenized inline styles, VerticalTabs.tsx was already cohesive
	✅ DatePicker — Migrated demo from Typography to CriaText components, DatePicker.tsx was already cohesive
	✅ FileUpload — Migrated FileUpload.tsx and demo from Typography to CriaText components, tokenized inline styles
	✅ Divider — Migrated demo from Typography to CriaText components, tokenized inline styles, replaced raw HTML inputs with DS Input component, Divider.tsx was already cohesive
	✅ Scrollbar — Migrated demo from Typography to CriaText components, tokenized inline styles and hardcoded colors, replaced hardcoded values with design tokens, Scrollbar.tsx was already cohesive
	✅ Footer — Migrated demo from Typography to CriaText components, tokenized inline styles and hardcoded colors, replaced raw HTML input with DS Input component, Footer.tsx was already cohesive
	✅ MegaMenu — Migrated demo from Typography to CriaText components, tokenized inline styles and hardcoded colors, replaced raw HTML input with DS Input component, MegaMenu.tsx was already cohesive
	✅ Backgrounds — Migrated Backgrounds.tsx from CSS variables to design tokens, demo from Typography to CriaText components, tokenized inline styles and hardcoded colors
	✅ CommentsSection — Migrated CommentsSection.tsx and demo from Typography to CriaText components, tokenized inline styles and hardcoded colors
	✅ Slider — Migrated Slider.tsx and demo from hardcoded color values to design tokens, Typography to CriaText components, tokenized inline styles and hardcoded colors, fixed remaining Typography usage in demo
	✅ ShimmerSkeleton — Migrated ShimmerSkeleton.tsx and demo from hardcoded spacing and border radius values to design tokens, Typography to CriaText components, tokenized inline styles and hardcoded colors
	✅ PricingPage — Migrated PricingPage.tsx and demo from Typography to CriaText components, hardcoded color values to design tokens, tokenized inline styles and hardcoded spacing/border radius values
	✅ PageLoadingProgress — Migrated PageLoadingProgress.tsx and demo from hardcoded spacing and color values to design tokens, Typography to CriaText components, tokenized inline styles and hardcoded border radius values
	✅ CardSelector — Migrated CardSelector.tsx and demo from Typography to CriaText components, hardcoded spacing and color values to design tokens, tokenized inline styles and hardcoded border radius values
	✅ RowOfCards — Migrated RowOfCards.tsx and demo from Typography to CriaText components, hardcoded spacing and color values to design tokens, tokenized inline styles and hardcoded spacing values
	✅ SearchFilters — Migrated SearchFilters.tsx and demo from Typography to CriaText components, hardcoded spacing and color values to design tokens, tokenized inline styles and hardcoded spacing values
	✅ CommandPalette — Migrated CommandPalette.tsx and demo from Typography to CriaText components, hardcoded spacing and color values to design tokens, tokenized inline styles and hardcoded spacing values, fixed JSX closing tag errors
	✅ StatisticMetricCard — Migrated StatisticMetricCard.tsx and demo from Typography to CriaText components, hardcoded spacing and color values to design tokens, tokenized inline styles and hardcoded spacing values
	✅ TagChip — Migrated TagChip demo from Typography to CriaText components, hardcoded spacing and color values to design tokens, TagChip.tsx was already cohesive
	✅ Timeline — Migrated Timeline demo from Typography to CriaText components, Timeline.tsx was already cohesive
	✅ Stepper — Migrated Stepper.tsx and demo from Typography to CriaText components
	✅ NotificationCenter — Migrated NotificationCenter demo from Typography to CriaText components, NotificationCenter.tsx was already cohesive
	✅ Topbar — Migrated Topbar.tsx from unused Typography import to design tokens, Topbar demo from Typography to CriaText components, tokenized hardcoded spacing and color values, fixed Badge variant issues

Layout Components
	•	Avatar
	•	Breadcrumbs
	•	Pagination
	•	ProgressBar
	•	VerticalTabs
	•	DatePicker
	•	FileUpload
	•	Divider
	•	Scrollbar
	•	Footer
	•	MegaMenu
	•	Backgrounds

Advanced Components
	•	CommentsSection
	•	Slider
	•	ShimmerSkeleton
	•	PricingPage
	•	PageLoadingProgress
	•	CardSelector
	•	RowOfCards
	•	SearchFilters
	•	CommandPalette
	•	StatisticMetricCard
	•	TagChip
	•	Timeline
	•	Stepper
	•	NotificationCenter
	•	Topbar
	•	Drawer

Content Components
	•	CriaLessonCardSmall
	•	CriaLessonCard
	•	CriaCourseCard
	•	CriaClassroomFutureEventCard
	•	CriaClassroomEventCard
	•	CriaClassroomTrilhaCard
	•	CriaCustomLearningLessonCard

Chart Components
	•	LineChart
	•	BarChart
	•	StackedBarChart
	•	AreaChart
	•	PieChart
	•	DonutChart
	•	RadarChart
	•	ScatterChart
	•	ComposedChart
	•	RadialProgressChart

⸻

🚀 **NEXT COMPONENT TO AUDIT: Drawer**

⸻

🚀 EXECUTION WORKFLOW
	1.	Graph Analysis
/MAKE_CRIA_COHESIVE graph [component-name]
	2.	Audit Component
/MAKE_CRIA_COHESIVE audit [component-name]
	3.	Apply Fixes
/MAKE_CRIA_COHESIVE fix [component-name]
	4.	Validate
/MAKE_CRIA_COHESIVE validate [component-name]
	5.	Commit & Move On
Cursor then proceeds automatically to the next component in the list.

⸻

🎯 SUCCESS CRITERIA
	•	Every component uses DS primitives from the directories above (dogfooding enforced).
	•	No raw HTML or bespoke components remain when a DS equivalent exists.
	•	All tokens (color, spacing, radius, typography) are referenced.
	•	Accessibility and variant parity preserved.
	•	Tests and demos all passing.
	•	No mismatched JSX opening/closing tags (e.g., `<Text2>` closed with `</Title2>`).

⸻

🧭 NEXT STEP

/MAKE_CRIA_COHESIVE graph Drawer

Then:

/MAKE_CRIA_COHESIVE audit Drawer

Cursor should move sequentially down the list after each validation, marking components as ✅ when completed.

⸻

Last Updated: [Today's Date]
Version: 1.2.0
Status: Ready to Execute
Role: Expert UI & Design System Architect

---

## 📊 **PROGRESS TRACKING**

**Components Audited:** 45/67 (67%)
- ✅ Typography
- ✅ Colors  
- ✅ Grid
- ✅ Container
- ✅ Button
- ✅ Input
- ✅ Checkbox
- ✅ Switch
- ✅ Snackbar
- ✅ Modal
- ✅ Tooltip
- ✅ Card
- ✅ Badge
- ✅ Tabs
- ✅ Navigation
- ✅ Accordion
- ✅ Text
- ✅ Dropdown
- ✅ RadioGroup
- ✅ Textarea
- ✅ Avatar
- ✅ Breadcrumbs
- ✅ Pagination
- ✅ ProgressBar
- ✅ VerticalTabs
- ✅ DatePicker
- ✅ FileUpload
- ✅ Divider
- ✅ Scrollbar
- ✅ Footer
- ✅ MegaMenu
- ✅ Backgrounds
- ✅ CommentsSection
- ✅ Slider
- ✅ ShimmerSkeleton
- ✅ PricingPage
- ✅ PageLoadingProgress
- ✅ CardSelector
- ✅ RowOfCards
- ✅ SearchFilters
- ✅ CommandPalette
- ✅ StatisticMetricCard
- ✅ TagChip
- ✅ Timeline
- ✅ Stepper
- ✅ NotificationCenter
- ✅ Topbar

**Next Up:** Drawer → CriaLessonCardSmall → CriaLessonCard → CriaCourseCard → CriaClassroomFutureEventCard → CriaClassroomEventCard → CriaClassroomTrilhaCard → CriaCustomLearningLessonCard → LineChart → BarChart → StackedBarChart → AreaChart → PieChart → DonutChart → RadarChart → ScatterChart → ComposedChart → RadialProgressChart

---

### ✅ What This Adds
- Cursor now knows your *real component registry* (so it can auto-replace intelligently).  
- Includes a concrete **graph-building + matching algorithm** phase.  
- Maintains the same checklist + per-component audit workflow you already depend on.  

Now when you type  
```bash
/MAKE_CRIA_COHESIVE next
```

This runs the entire pipeline on the next unchecked component without any additional prompt:

- Build dependency graph
- Audit and match non-DS children to DS primitives
- Apply fixes (tokenize colors/spacing/radii/typography; replace raw HTML with DS components)
- Validate (tests/visual checks)
- Commit with a conventional message
- Advance to the subsequent component and repeat on each invocation