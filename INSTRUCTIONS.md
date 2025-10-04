Please implement the next component now.

You are a Senior Frontend Engineer responsible for building a modern, production-ready UI component library, and integrating each component into our demo **App** so it is fully usable and visible in the sidebar navigation.

⸻

Core Principles
	•	Follow Test-Driven Development (TDD): write UI tests first, then implement until all tests pass.
	•	Every component must be responsive, accessible, documented, and tested.
	•	All components must meet WCAG/ARIA standards, supporting keyboard navigation and screen readers.
	•	Follow existing design tokens (colors, typography, spacing) and component patterns in the library.
	•	Use Phosphor icons instead of emojis.
	•	Always consume existing components instead of re-implementing custom code (e.g., use our Label inside a Card).
	•	Use Conventional Commits for every commit.
	•	After implementation, validate in Chrome MCP:
		- Run the App
		- Navigate to the new demo page from the sidebar
		- Verify correct rendering and no console warnings
		- Confirm accessibility features are intact
	•	After finishing a component:
		- Mark it as ✅ under Already Implemented in this file
		- Move it out of "Next Component"
		- Promote the next Upcoming item to "Next Component"
		- Carry its feature + test boilerplate forward

⸻

Workflow for the Next Component
	1. Write tests first (include accessibility assertions).
	2. Implement the component in the design system until tests pass.
	3. Add a demo page for the component inside the App.
	4. Add a new entry in the App sidebar so it is visible.
	5. Validate with Chrome MCP (navigate to the demo page, check console logs, confirm accessibility).
	6. Commit directly to main using Conventional Commits (feat, fix, docs).
	7. Update this file to move the component to ✅ and promote the next one.

⸻

✅ Already Implemented
	•	Typography
	•	Colors
	•	Button
	•	Input
	•	Checkbox
	•	Switch
	•	Snackbar / Toast
	•	Modal
	•	Tooltip
	•	Card
	•	Badge
	•	Tabs
	•	Navigation (Sidebar, Topbar)
	•	Accordion
	•	Text
	•	Dropdown / Select
	•	Radio Group
	•	Textarea
	•	Avatar
	•	Breadcrumbs
	•	Pagination
	•	Progress Bar
	•	Vertical Tabs

Input Demos
	•	Basic Inputs — Full Name, Email Address, Phone Number, Date (dd.mm.yyyy)
	•	Input Sizes — Small, Medium (default), Large

⸻

🚀 Next Component to Implement: Stepper

Implement a **Stepper component** in the design system and expose it in the App with:
	•	A new demo page
	•	An entry in the App sidebar

Features required:
	•	Horizontal and vertical orientations
	•	Step states: completed, active, pending, error, and disabled
	•	Linear (force order) and non-linear (jump to any enabled step) modes
	•	Optional step icons, titles, and descriptions (support long labels)
	•	Clickable steps (when enabled) with onChange callback
	•	Keyboard navigation (Arrow keys move focus, Enter/Space select step)
	•	Accessible ARIA: role="tablist"/"tabpanel" mapping or role="list" with aria-current, aria-disabled; aria-orientation; aria-controls; focus ring
	•	Responsiveness: compact layout on mobile

Tests required:
	•	Renders steps with correct states and labels
	•	Changes active step on click in non-linear mode and blocks in linear mode
	•	Supports keyboard navigation (Arrows, Enter/Space) and focus management
	•	Applies aria attributes (aria-current, aria-disabled, aria-orientation) correctly
	•	Renders vertical orientation and horizontal orientation
	•	Handles disabled and error states
	•	Renders with icons and descriptions without layout shift

⸻

Upcoming Components
	•	Date Picker
	•	File Upload
	•	Chat
	•	PieChart
	•	LineChart
	•	Shimmer Skeleton
	•	Pricing page
	•	Card selector (multi-select and single-select)
	•	Row of cards (with different titles and option to select how many cards we show before pagination)
	•	Dark mode (with icon on top right of the app to toggle)

⸻