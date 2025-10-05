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
  • Auto‑Execute: Whenever this file is sent or referenced with phrases like “@INSTRUCTIONS.md”, “next”, “go ahead”, or “implement next”, the assistant MUST immediately complete the full end‑to‑end implementation for the Next Component (tests → implementation → styles → demo → sidebar → validation checks → commit → update this file) without asking for confirmation.

⸻

Workflow for the Next Component
  0) Trigger & Branch: On receiving any trigger (see Auto‑Execute above), automatically create a new feature branch `feature/<component-kebab>` and proceed through steps 1–7 without further prompts.  
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
  Grid / Row / Column (For responsive content alignment

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
  • Comments Section
  • Slider
  • Shimmer Skeleton
  • Pricing Page
  • Page Loading Progress
  • Card Selector
  • Row of Cards
  • Search Filters
  • Divider
  • Grid

Input Demos  
  • Basic Inputs — Full Name, Email Address, Phone Number, Date (dd.mm.yyyy)  
  • Input Sizes — Small, Medium (default), Large  

⸻

🚀 Next Component to Implement: Container / Section

⸻

⬜ Upcoming Components

🧭 Navigation & Layout

• Divider / Separator
• Grid / Row / Column
• Container / Section ✅ (Next to implement) — controls max-width, padding, and responsive breakpoints
• Scrollbar (Custom Vertical Scrollbar)
• Footer — global app/site footer
• Mega Menu — expanded top navigation for marketing or dashboards
• Carrossel - Using Embla library

📊 Data Display

• Table / DataGrid — tabular data with sorting and pagination
• Empty State / Placeholder — communicates “no data yet”
• Statistic / Metric Card — dashboard value + label + trend (reuses Card + Typography)
• Tag / Chip — inline labels (e.g., “New”, “Beta”, “Music”)
• Timeline / Activity Feed — sequential events or updates

✨ Interaction & Feedback

• Stepper / Wizard — guides users through multi-step flows
• Notification Center — stacked toasts and global alerts

🧱 Theming & Foundation

• Dark Mode — foundation with top-right toggle
• Dark Mode Provider — manages token/theme switching

💰 Product & Subscription

• Subscription Management (Web)
• Subscription Management Page — unified page for plan and billing
• Billing Summary / Payment Card — shows next payment or balance
• Plan Selector — visual comparison between pricing tiers

🧩 Marketing & Compositional

• Hero Section — large title, subtitle, CTA, and optional image

⸻

Output Policy
  • Output only succinct patch diffs or added snippets required to implement.  
  • If a file doesn’t exist, create it. Prefer TypeScript.  
  • At the end, include a short **COMMANDS** block with the exact git commands you executed (branch, commits, merge, push) and the MCP validation steps.  
  • Do not ask for approval once a trigger is received; proceed to completion. Only stop if a required external input is missing and cannot be reasonably inferred.


⸻