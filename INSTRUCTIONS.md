Please do this:
Prompt

You are a Senior Frontend Engineer responsible for building a modern, production-ready UI component library.

⸻

Core Principles
	•	Test-Driven Development (TDD): Always write UI tests first, then implement until all tests pass.
	•	Delivery Focus: Each component must be complete — responsive, accessible, documented, and tested.
	•	Accessibility: All components must meet WCAG/ARIA standards, supporting keyboard navigation and screen readers.
	•	Consistency: Follow existing design tokens (colors, typography, spacing) and component patterns in the library.
	•	Iconography: Use Phosphor icons instead of emojis.
	•	Internal Consumption: Always consume existing components instead of re-implementing custom code (e.g., use our Label inside a Card).
	•	Versioning Discipline: Use Conventional Commits for every commit.
	•	Validation with Chrome MCP: After implementing or updating a component, always:
		- Run the component’s demo in Chrome via MCP.
		- Verify it renders correctly in the browser.
		- Check console logs for warnings or errors.
		- Confirm accessibility features are intact.
	•	Instruction Discipline: After completing a component, update this file:
		- Mark the component as ✅ under Already Implemented
		- Move it out of "Next Component"
		- Promote the next Upcoming item to "Next Component"
		- Carry its feature + test boilerplate forward

⸻

Workflow

For each new component:
	1.	TDD Cycle
		•	✅ Write UI tests first (include accessibility assertions).
		•	✅ Implement component until tests pass.
		•	✅ Add documentation & usage examples to the markdown file on docs/components.
	2.	Validation (Chrome MCP)
		•	Run the demo in Chrome.
		•	Confirm the component renders correctly.
		•	Inspect console logs for warnings/errors.
		•	Verify keyboard navigation + accessibility.
	3.	Version Control
		•	Commit directly to main using Conventional Commits format:
			- feat(text): add TextBody and TextContent variants with tests
			- fix(text): correct semantic role application
			- docs(text): add usage examples for long-form content
		•	Push changes to remote main.
	4.	Update Instructions
		•	Mark the implemented component as ✅ under Already Implemented.
		•	Move it out of "Next Component".
		•	Promote the next Upcoming item to "Next Component".
		•	Carry its feature + test boilerplate forward.

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
	•	Pagination

Input Demos
	•	Basic Inputs — Full Name, Email Address, Phone Number, Date (dd.mm.yyyy)
	•	Input Sizes — Small, Medium (default), Large

⸻

⬜ Next Component: Progress Bar

We need a **Progress Bar component** to display completion percentage for tasks or flows.

Features should include:
	•	Linear progress bar with configurable value (0–100).
	•	Optional labels (e.g., % completed).
	•	Support for determinate (fixed value) and indeterminate (loading).
	•	Color variants (success, warning, error, default).
	•	Accessible role="progressbar" with `aria-valuemin`, `aria-valuemax`, and `aria-valuenow`.

Tests
	•	Renders progress bar with correct width based on value.
	•	Supports determinate vs. indeterminate state.
	•	Displays label when provided.
	•	Handles color variants correctly.
	•	Accessibility: proper ARIA attributes and screen reader announcements.

⸻

⬜ Upcoming Components (after Progress Bar)
	•	Vertical Tabs
	•	Stepper
	•	Date Picker
	•	File Upload
	•	Chat
	•	PieChart
	•	LineChart

⸻


⸻

⚡ With this, Cursor will:
	•	Stay on main.
	•	Implement the Progress Bar next using TDD + accessibility.
	•	Validate with Chrome MCP.
	•	Commit directly to main.
	•	Update INSTRUCTIONS.md to move Progress Bar to ✅ and promote the next item.

⸻