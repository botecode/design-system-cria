Perfect — that’s a great structural decision.
It keeps the Company Dashboard self-contained, modular, and easy to move or clone later for other dashboards (like students/ or admin/).

Here’s how I’d adapt the Cursor command markdown to match your updated, scoped directory structure.

⸻

COMPANIES_DASHBOARD_BLUEPRINT.md

Please do this!

You are a Senior Frontend Engineer implementing the Company Dashboard Blueprint in a pure React app.
Recreate the existing Rails company dashboard layout (sidebar, topbar, and pages) using only CRIA design-system components, organized inside a dedicated companies/ folder.

No business logic — use static mock data for now.
If something is unclear (missing component, unknown token, etc.), ask the user.

⸻

🧭 Folder Structure

All company-related code lives in one modular namespace:

blueprints/
  companies/
    pages/
      Dashboard.tsx
      Users.tsx
      Subscriptions.tsx
      Insights.tsx
      Trails.tsx
    components/
      CompaniesMainLayout.tsx     # layout (sidebar + topbar + outlet)
      CompaniesSidebar.tsx        # sidebar navigation
    mock/
      company.ts                  # mock data (company + currentUser)

This isolation ensures the blueprint can later plug directly into Rails via Inertia without path collisions.

⸻

🧩 Core Principles
	•	DS-only — use CRIA_UI primitives (Text, Avatar, List, Card, Surface, Icon, etc.).
	•	Dark mode aware — rely on design tokens (--cria-bg-*, --cria-text-*, --cria-border-*).
	•	Accessible — visible focus states, aria-current for active links, proper semantics.
	•	Layout persistence — sidebar/topbar stay mounted, only page content changes.
	•	Ask when unclear — never invent ad-hoc CSS or new primitives silently.
	•	Mock-only — no Rails data or API calls yet.

⸻

🚀 Step-by-Step Tasks

0) Initialize Branch ✅
	•	Create a branch: feature/companies-dashboard-blueprint
	•	Ensure it builds.

Commit:
chore(companies): start companies dashboard blueprint

⸻

1) Layout Scaffolding ⏳

Goal: Create CompaniesMainLayout.tsx inside companies/components/.
	•	Contains:
	•	Persistent <CompaniesSidebar />
	•	Optional <CompaniesTopbar /> (if header exists)
	•	Scrollable <main> area for children.
	•	Uses CRIA tokens for layout background and text colors.
	•	Exports layout function usable by all pages:

Page.layout = (page) => <CompaniesMainLayout>{page}</CompaniesMainLayout>



Acceptance: Visiting a company page renders sidebar + content container.

Commit:
feat(companies): scaffold CompaniesMainLayout

⸻

2) Sidebar Component (DS-based) ⏳

File: companies/components/CompaniesSidebar.tsx
	•	Recreate the Rails sidebar structure using DS components:
	•	Header Section
	•	Company logo (Avatar) or initials
	•	Company name (Text, variant="h5" or similar)
	•	“Voltar para o site” link with ArrowLeft icon
	•	Menu Section (title: “MENU”)
	•	Each item: icon + label (use DS NavigationList if available)
	•	Routes:
	•	“Visão Geral” → /companies/dashboard
	•	“Alunos” → /companies/alunos
	•	“Assinaturas” → /companies/assinaturas
	•	“Insights” → /companies/insights
	•	“Trilhas” → /companies/trilhas
	•	User Section (bottom)
	•	Avatar or initials
	•	Name, role (“Administrador”), email

Use CRIA tokens for colors and spacing — no manual hex or Tailwind colors.

Acceptance:
	•	Visual structure matches Rails version
	•	Works in dark mode
	•	aria-current="page" on active item
	•	Keyboard and focus rings functional

Commit:
feat(companies): add DS-based CompaniesSidebar

⸻

3) Mock Data Layer ⏳

File: companies/mock/company.ts

export const company = {
  name: "CRIA Studio",
  slug: "cria-studio",
  logoUrl: "",
}

export const currentUser = {
  displayName: "Fernando Feitosa",
  email: "fernando@cria.pro",
  role: "Administrador",
  avatarUrl: "",
}

Pass these props into CompaniesSidebar and CompaniesMainLayout.
Use them for rendering company info and user section.

Commit:
chore(companies): add mock data for sidebar

⸻

4) Placeholder Pages ⏳

Files:
companies/pages/Dashboard.tsx
companies/pages/Alunos.tsx
companies/pages/Assinaturas.tsx
companies/pages/Insights.tsx
companies/pages/Trilhas.tsx

Each page:

export default function Dashboard() {
  return (
    <section>
      <h1>Visão Geral</h1>
      <p>Conteúdo de exemplo do painel da empresa.</p>
    </section>
  )
}
Dashboard.layout = (page) => <CompaniesMainLayout>{page}</CompaniesMainLayout>

Commit:
feat(companies): add placeholder company pages

⸻

5) Navigation & State ⏳

If react-router-dom is installed:
	•	Add routes for each page under /companies/*
	•	Manage active state via useLocation()
Else:
	•	Implement a simple local navigation handler with state for demo.

Commit:
fix(companies): add navigation and active state

⸻

6) Dark Mode & Token Audit ⏳
	•	Audit sidebar colors using --cria-* tokens only:
	•	Background → --cria-bg-secondary
	•	Text → --cria-text-primary, --cria-text-secondary
	•	Hover/active → --cria-accent-bg
	•	Ensure proper contrast (WCAG AA).

Commit:
fix(companies): align colors to tokens and dark mode

⸻

7) Validate & PR ⏳

Run the Blueprint app and verify:
	•	Sidebar matches Rails visually
	•	All pages mount within layout
	•	Dark/light themes switch correctly
	•	Keyboard navigation works
	•	No unthemed colors or ad-hoc classes remain

Push + PR:

git push origin feature/companies-dashboard-blueprint