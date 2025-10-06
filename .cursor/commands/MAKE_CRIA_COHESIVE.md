Excellent — this list gives Cursor everything it needs to perform a systematic, dependency-graph–based audit.
Here’s the updated MAKE_CRIA_COHESIVE.md — now fully aware that these folders are your real design-system components.

I’ve kept the entire structure you already rely on (component checklist, sequential audit flow, commands, progress tracking) but added:
	•	A clear Graph-based audit workflow that inspects imports and JSX trees inside each of these component folders.
	•	Explicit instructions to match non-DS children to existing DS folders (from your real directory list).
	•	Automatic replacement rules and commit flow.
	•	A note that Cursor can iterate through this list one by one when you say "next”.

⸻


# MAKE_CRIA_COHESIVE.md

## 🧠 ROLE & CONTEXT
You are an **Expert UI Engineer and Design System Architect** working inside the **CRIA Design System** repository.

Your mission is to ensure every component in this repo is **fully cohesive** —  
each component must:
1. **Consume other components** from the design system when applicable.  
2. **Use only design tokens** for color, radius, spacing, and typography.  
3. **Never include raw HTML elements** or inline styling where DS primitives exist.  

You will analyze component dependency graphs, detect unlinked children, and refactor them to reuse the proper DS components.

---

## 📦 **REAL COMPONENT DIRECTORY**
Below are all CRIA DS components to use as the **valid source of truth** for reusability and refactor suggestions:

`Accordion`, `AgentDev`, `Avatar`, `Backgrounds`, `Badge`, `Breadcrumbs`, `Button`, `Card`, `CardSelector`, `Carousel`, `Changelog`, `Charts`, `Chat`, `Checkbox`, `Colors`, `CommandPalette`, `CommentsSection`, `Container`,  
`CriaClassroomEventCard`, `CriaClassroomFutureEventCard`, `CriaClassroomTrilhaCard`, `CriaCourseCard`, `CriaCustomLearningLessonCard`, `CriaLessonCard`, `CriaLessonCardSmall`,  
`DatePicker`, `Divider`, `Drawer`, `Dropdown`, `EmptyState`, `EventsCards`, `FileUpload`, `FilterDropdown`, `FloatingSidebar`, `Footer`, `Grid`, `Input`,  
`MegaMenu`, `Modal`, `Navigation`, `NotificationCenter`, `PageLoadingProgress`, `Pagination`, `PricingPage`, `ProgressBar`, `RadioGroup`, `RowOfCards`,  
`Scrollbar`, `SearchFilters`, `ShimmerSkeleton`, `Sidebar`, `Slider`, `Snackbar`, `StatisticMetricCard`, `Stepper`, `Switch`, `Table`, `Tabs`,  
`TagChip`, `Text`, `TextTokens`, `Textarea`, `Timeline`, `Tooltip`, `Topbar`, `TrilhaCards`, `Typography`, `Version`, `VerticalTabs`

All replacements or imports must come from these directories.

---

## 🔍 **GRAPH-BASED AUDIT PROCESS**

### Step 1: Generate Dependency Graph
For a given component:
1. Parse imports and JSX tree in its main `.tsx` file.  
2. Map **all child components** and JSX elements used.  
3. Distinguish:
   - ✅ Children that import from the design system directories above.  
   - ⚠️ Children that are **custom, raw, or external**.

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

Step 2: Match & Replace

For each ⚠️ child:
	1.	Check if a relative DS component exists (match by name or semantics).
	•	<div class="card"> → <Card>
	•	<p> / <span> → <Text>
	•	<img> → <Avatar>
	•	<ul> → <List> (if exists, else document missing primitive)
	2.	Replace JSX and imports with DS equivalents.
	3.	Re-apply design tokens for spacing, color, radius, etc.

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

Foundations
	•	Typography
	•	Colors
	•	Grid
	•	Container

Basic Components
	•	Button
	•	Input
	•	Checkbox
	•	Switch
	•	Snackbar
	•	Modal
	•	Tooltip
	•	Card
	•	Badge
	•	Tabs
	•	Navigation
	•	Accordion
	•	Text
	•	Dropdown
	•	RadioGroup
	•	Textarea

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
	•	Every component uses DS primitives from the directories above.
	•	No raw HTML remains when a DS equivalent exists.
	•	All tokens (color, spacing, radius, typography) are referenced.
	•	Accessibility and variant parity preserved.
	•	Tests and demos all passing.

⸻

🧭 NEXT STEP

/MAKE_CRIA_COHESIVE graph Typography

Then:

/MAKE_CRIA_COHESIVE audit Typography

Cursor should move sequentially down the list after each validation.

⸻

Last Updated: [Today’s Date]
Version: 1.1.2
Status: Ready to Execute
Role: Expert UI & Design System Architect

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