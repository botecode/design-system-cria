Please do this!

You are a Senior Frontend Engineer responsible for building a modern, production-ready UI component library, and integrating each component into our demo **App** so it is fully usable, styled with our design tokens, and visible in the sidebar navigation.

⸻

Core Principles
  • TDD first: write UI tests, then implement until all tests pass.  
  • Every component must be responsive, accessible, documented, and tested.  
  • Meet WCAG/ARIA: keyboard navigation, roles/labels, focus management.  
  • Use **design tokens** for colors, typography, spacing, radii, shadows (no ad-hoc styles).  
  • Ensure the **look & feel matches the App** (no plain HTML).  
  • Use Phosphor icons.  
  • Reuse DS primitives (Text, Card, Button, Badge, Input) — never reimplement raw elements.  
  • After implementing:  
    – Add a demo page in the App.  
    – Add a **sidebar entry** in the App.  
    – Validate in **Chrome MCP**: open the demo, navigate with keyboard, verify no console errors.  
  • Update this file: mark ✅, promote Next → Upcoming, carry features/tests forward.

⸻

Workflow for the Next Component
  1) Tests: write accessibility + behavior tests first.  
  2) Implement: build the component in the design system using **our tokens** (color schema, type scale, radii, shadows).  
  3) Demo: create a styled demo page that shows realistic states/variants.  
  4) Sidebar: add a navigation entry so it’s discoverable.  
  5) Validate (Chrome MCP): open the demo, check console, test keyboard and SR.  
  6) Version Control (branching + merge back to main): follow **Git / Branching** rules below.  
  7) Update `INSTRUCTIONS.md`: move the component to ✅ and promote the next one.

⸻

Git / Branching — MUST EXECUTE
  • Create a feature branch named `feature/<component-kebab>` (e.g., `feature/chat`).  
  • Make small Conventional Commits as you proceed:
      - feat(<component>): initial tests
      - feat(<component>): component implementation
      - docs(<component>): add demo and usage examples
      - fix(<component>): a11y/keyboard navigation corrections
  • After validation passes:
      - Merge locally into `main` (no PR): fast-forward or squash
      - Delete the feature branch locally
      - Push `main`

Shell commands (example):

git checkout -b feature/

…apply patches & commits…

git checkout main
git merge –no-ff feature/
git branch -d feature/
git push origin main

⸻

✅ Already Implemented
  • Typography  
  • Colors  
  • Button  
  • Input  
  • Checkbox  
  • Switch  
  • Snackbar / Toast  
  • Modal  
  • Tooltip  
  • Card  
  • Badge  
  • Tabs  
  • Navigation (Sidebar, Topbar)  
  • Accordion  
  • Text  
  • Dropdown / Select  
  • Radio Group  
  • Textarea  
  • Avatar  
  • Breadcrumbs  
  • Pagination  
  • Progress Bar  
  • Vertical Tabs  
  • Date Picker  
  • File Upload

Input Demos  
  • Basic Inputs — Full Name, Email Address, Phone Number, Date (dd.mm.yyyy)  
  • Input Sizes — Small, Medium (default), Large  

⸻

🚀 Next Component to Implement: PieChart

**Implement the PieChart component immediately**, using **design tokens** and DS primitives.  
Include a **demo page** and **sidebar entry**. Validate with **Chrome MCP**. Commit on a **feature branch** and **merge into main** per Git rules above. Update this file afterward.

Required Features
  • Render a responsive pie chart  
  • Legend with labels and values  
  • Hover/selection highlighting  
  • Token-based colors and typography  
  • A11y: labelled chart, focusable segments with aria-labels  

Required Tests
  • Renders chart with correct slices  
  • Hover/selection updates aria and styles  
  • Legend matches data  
  • A11y: roles/labels present; keyboard focus works

⸻

⬜ Upcoming Components
  • Comments Section
  • PieChart  
  • LineChart  
  • Shimmer Skeleton  
  • Pricing page  
  • Card selector (multi-select and single-select)  
  • Row of cards (with configurable per-page before pagination)  
  • Dark mode (with top-right toggle)

⸻

Output Policy
  • Output only succinct patch diffs or added snippets required to implement.  
  • If a file doesn’t exist, create it. Prefer TypeScript.  
  • At the end, include a short **COMMANDS** block with the exact git commands you executed (branch, commits, merge, push) and the MCP validation steps.


⸻