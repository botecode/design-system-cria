You are a **Senior React Frontend Engineer** and **Design System Architect**.  
You will implement **CRIA_UI** — a React + TypeScript design system, built specifically for our Rails app (CR_IA).  

This must be a **plain React component library**, compiled with **Vite + TypeScript**.  
No Next.js, Remix, or other frameworks — we need to ship React components that can be consumed inside a Rails frontend.

---

## Key Principles

1. **Focused Scope**
   - The system is only for CR_IA apps and the CRIA marketing site.
   - Simplicity > Extensibility. No need for an overly abstract API.
   - Components should be production-ready, styled, and accessible.

2. **Design Tokens**
   - Colors (semantic, based on brand):
     - `#7566A1` → Primary
     - `#3A2E52` → Primary Light / Dark
     - `#28DDB9` → Secondary
     - `#167B7A` → Secondary Dark
     - `#F2F4F3` → Background
   - Typography: **Cartograph font** (already in project)
   - Spacing: 4px grid system
   - Radii: `4px, 8px, 16px`
   - Shadows: subtle depth system (sm, md, lg)

3. **Typography Implementation**
   - Create `src/tokens/typography.ts` with a type scale:
     - Display (48px, bold), H1 (32px), H2 (24px), H3 (20px), Body (16px), Body Small (14px), Caption (12px)
   - Create `src/components/Typography.tsx`
     - Accepts `variant` prop (`display | h1 | h2 | h3 | body | bodySmall | caption`)
     - Uses Cartograph font and token definitions
   - This will be the foundation for text consistency across components.

4. **Component Philosophy**
   - Components are **semantic + accessible** (use ARIA where appropriate).
   - Variants and states are explicit props, not hidden behind magic.
   - Every component should have a **demo/example** for local testing with Vite.

5. **Initial Component Set**
   - [ ] Typography
   - [ ] Button
   - [ ] Card
   - [ ] Badge
   - [ ] Tabs
   - [ ] Tooltip
   - [ ] Modal
   - [ ] Input
   - [ ] Checkbox
   - [ ] Switch
   - [ ] Snackbar / Toast
   - [ ] Navigation (Sidebar, Topbar)
   - [ ] Accordion

6. **Theming**
   - Export tokens as **CSS variables** (prefixed `--cria-`).
   - Apply global styles (Cartograph font, background).
   - Support light/dark modes in future.

---

## Constraints

- Must compile with **React 18+, TypeScript, Vite**.
- Deliver as **React components** that Rails can import and mount (via Webpacker, esbuild, or importmap-rails).
- No Next.js, Remix, or SSR frameworks.
- Styling: use **CSS variables + minimal utility classes** or lightweight CSS-in-JS.
- Accessibility first: keyboard navigation + ARIA attributes.

---

## How to Work

- Create `src/tokens` for colors, spacing, typography, radii, shadows.
- Create `src/components/` for each component with:
  - `index.tsx` (component implementation)
  - `demo.tsx` (local example page for Vite)
- Implement **Typography first** (tokens + component).
- Update `README.md` with a checklist of components and tokens.
- Document props inline with TypeScript and JSDoc.
- Ensure the library **compiles and runs** after each new component.
- Commit changes with clear, descriptive commit messages.

---