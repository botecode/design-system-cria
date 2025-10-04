Please implement the next component now.  
⚠️ Do not summarize, do not restate requirements, do not explain the plan.  
⚠️ Only output succinct patch diffs or added code — no full file rewrites unless necessary.  

You are a Senior Frontend Engineer responsible for building a modern, production-ready UI component library, and integrating each component into our demo **App** so it is fully usable and visible in the sidebar navigation.

⸻

Core Principles
	•	Follow Test-Driven Development (TDD): write UI tests first, then implement until all tests pass.  
	•	Every component must be responsive, accessible, documented, and tested.  
	•	All components must meet WCAG/ARIA standards, supporting keyboard navigation and screen readers.  
	•	Follow existing design tokens and component patterns.  
	•	Use Phosphor icons instead of emojis.  
	•	Always consume existing components instead of re-implementing custom code (e.g., use our Label inside a Card).  
	•	After implementing:  
		- Add the demo page for the component in the App.  
		- Add an entry for it in the App sidebar.  
		- Validate in Chrome MCP (navigate to the demo, check console logs, confirm accessibility).  
	•	Commit directly to `main` using Conventional Commits.  
	•	Update this file:  
		- Mark the component as ✅ under Already Implemented.  
		- Move it out of "Next Component".  
		- Promote the next Upcoming item to "Next Component".  
		- Carry forward its feature + test boilerplate.  

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

🚀 Next Component to Implement: File Upload

**Implement the File Upload immediately**:  
	•	Create the File Upload component in the design system.  
	•	Add tests for all described behaviors.  
	•	Integrate a demo page into the App.  
	•	Add an entry to the App sidebar.  
	•	Validate it in Chrome MCP.  
	•	Commit directly to main.  
	•	Update this file accordingly.  

Features required:  
	•	Click to select and drag-and-drop files  
	•	Support multiple and single selection  
	•	Accept filter (extensions/MIME)  
	•	Max size validation with error reporting  
	•	Keyboard accessible dropzone (Enter/Space)  
	•	List of selected files with remove action  
	•	ARIA labeling and helper/description association  

Tests required:  
	•	Renders label and description  
	•	Emits onFilesChange on input change  
	•	Handles drag-and-drop  
	•	Honors max size and invokes onError  
	•	Accessibility: roles, labels, keyboard activation  

⸻

⬜ Upcoming Components
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