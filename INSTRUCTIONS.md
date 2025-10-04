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
	•	Stepper

Input Demos
	•	Basic Inputs — Full Name, Email Address, Phone Number, Date (dd.mm.yyyy)
	•	Input Sizes — Small, Medium (default), Large

⸻

🚀 Next Component to Implement: Date Picker

Implement a **Date Picker component** in the design system and expose it in the App with:
	•	A new demo page
	•	An entry in the App sidebar

Features required:
	•	Single date selection with calendar popover
	•	Keyboard navigation (arrows to move, Enter to select, Esc to close)
	•	Localization-ready month/day labels
	•	Min/max dates, disabled dates, and today shortcut
	•	Input with masking/formatting (e.g., dd.mm.yyyy)
	•	Accessibility: role="dialog", focus trap, aria-live for month changes
	•	Responsive layout (mobile-friendly calendar)

Tests required:
	•	Opens/closes popover and focuses the correct day
	•	Selects a date via click and keyboard
	•	Honors min/max and disabled dates
	•	Announces month changes and sets correct ARIA attributes
	•	Formats value in the input correctly

⸻

Upcoming Components
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