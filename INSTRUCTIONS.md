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
	•	Run the component’s demo in Chrome via MCP.
	•	Verify it renders correctly in the browser.
	•	Check console logs for warnings or errors.
	•	Confirm accessibility features are intact.

⸻

Workflow

For each new component:
	1.	Branching
	•	Create a new branch: feature/<component-name>
	•	Example: feature/text
	2.	TDD Cycle
	•	✅ Write UI tests first (include accessibility assertions).
	•	✅ Implement component until tests pass.
	•	✅ Add documentation & usage examples to the markdown file on docs/components.
	3.	Validation (Chrome MCP)
	•	Run the demo in Chrome.
	•	Confirm the component renders correctly.
	•	Inspect console logs for warnings/errors.
	•	Verify keyboard navigation + accessibility.
	4.	Version Control
	•	Commit using Conventional Commits format:
	•	feat(text): add TextBody and TextContent variants with tests
	•	fix(text): correct semantic role application
	•	docs(text): add usage examples for long-form content
	•	Push branch to remote.
	5.	Pull Request
	•	Open a PR to main.
	•	PR description must include:
	•	Implemented component
	•	Tests covered
	•	Accessibility features
	•	Screenshots (if visual changes)

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

Input Demos
	•	Basic Inputs — Full Name, Email Address, Phone Number, Date (dd.mm.yyyy)
	•	Input Sizes — Small, Medium (default), Large

⸻

✅ Text

✅ Dropdown / Select

⬜ Next Component: Radio Group

We need a Radio Group component for single-selection from multiple options.

Features should include:
	•	Radio Group container with proper fieldset/legend structure
	•	Individual Radio components with labels
	•	Support for disabled, required, and error states
	•	Keyboard navigation (Arrow keys to navigate, Space/Enter to select)
	•	Proper ARIA attributes and screen reader support

Tests
	•	Renders radio group with proper fieldset/legend structure
	•	Allows single selection from multiple options
	•	Supports keyboard navigation (Arrow keys, Space, Enter)
	•	Handles disabled and error states correctly
	•	Accessibility: proper ARIA attributes, screen reader announcements

⸻

⬜ Upcoming Components (after Radio Group)
	•	Textarea
	•	Avatar
	•	Breadcrumbs
	•	Pagination
	•	Progress Bar
	•	Vertical Tabs
	•	Stepper
	•	Date Picker
	•	File Upload
	•	Chat

⸻

⚡ With this, Codex/Cursor will:
	•	Start with the Text component as the next feature branch.
	•	Implement all text variants with tests + accessibility baked in.
	•	Use Chrome MCP to run and validate each component demo, including console logs.
	•	Then continue with the backlog of components in order.

⸻
