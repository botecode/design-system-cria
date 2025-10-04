Please do this:
Prompt

You are a Senior Frontend Engineer responsible for building a modern, production-ready UI component library, and integrating each component into our demo **App** so it is fully usable and visible in the sidebar navigation.

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
		•	✅ Implement the component until tests pass.
		•	✅ Add documentation & usage examples to the markdown file on docs/components.
	2.	App Integration
		•	Add the component’s demo page inside the App.
		•	Add an entry in the App sidebar so the component is accessible from the navigation.
		•	Ensure the demo shows practical usage examples (with variants, props, and states).
	3.	Validation (Chrome MCP)
		•	Run the App in Chrome.
		•	Navigate via the sidebar to the new component’s demo page.
		•	Confirm the component renders correctly.
		•	Inspect console logs for warnings/errors.
		•	Verify keyboard navigation + accessibility.
	4.	Version Control
		•	Commit directly to main using Conventional Commits format:
			- feat(vertical-tabs): add Vertical Tabs component with demo and sidebar entry
			- fix(vertical-tabs): correct keyboard navigation
			- docs(vertical-tabs): add usage examples for accessibility
		•	Push changes to remote main.
	5.	Update Instructions
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
	•	Progress Bar

Input Demos
	•	Basic Inputs — Full Name, Email Address, Phone Number, Date (dd.mm.yyyy)
	•	Input Sizes — Small, Medium (default), Large

⸻

⬜ Next Component: Vertical Tabs

We need a **Vertical Tabs component** for organizing content in a vertical layout.  
This component must be **implemented in the design system** and **exposed in the App with a new sidebar entry and demo page**.

Features should include:
	•	Vertical tab navigation with content panels
	•	Support for active/inactive states
	•	Keyboard navigation (Arrow keys, Tab, Enter)
	•	Accessible ARIA attributes and screen reader support
	•	Customizable tab styling and spacing
	•	Support for icons and labels

Tests
	•	Renders vertical tabs with proper structure
	•	Supports tab selection and content switching
	•	Handles keyboard navigation correctly
	•	Displays active/inactive states properly
	•	Accessibility: proper ARIA attributes and screen reader announcements

⸻

⬜ Upcoming Components (after Vertical Tabs)
	•	Stepper
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

⚡ With this version, it’s now explicit that:
	•	Every component is implemented in the design system.
	•	It must also have a sidebar entry in the app so it’s demoable.
	•	Validation happens by navigating in the app itself via Chrome MCP.