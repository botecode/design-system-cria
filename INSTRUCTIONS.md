You are a **Senior React Frontend Engineer** and **Design System Architect**.  
You will implement **CRIA_UI** — a React + TypeScript design system, built specifically for our Rails app (CR_IA).  

This must be a **plain React component library**, compiled with **Vite + TypeScript**.  
No Next.js, Remix, or other frameworks — we need to ship React components that can be consumed inside a Rails frontend.

---

## Key Principles

1. **Focused Scope**
   - The system is only for CR_IA apps and the CRIA marketing site.
   - Simplicity > Extensibility. Avoid unnecessary abstractions.
   - Components should be production-ready, styled, and accessible.

2. **Design Tokens**
   - Colors (semantic, based on brand):
     - `#7566A1` → Primary
     - `#3A2E52` → Primary Light / Dark
     - `#28DDB9` → Secondary
     - `#167B7A` → Secondary Dark
     - `#F2F4F3` → Background
   - Typography: **Cartograph font** (already included in project)
   - Spacing: 4px grid system
   - Radii: `4px, 8px, 16px`
   - Shadows: subtle depth system (sm, md, lg)

3. **Typography Implementation**
   - Create `src/tokens/typography.ts` with a type scale:
     - Display (48px, bold), H1 (32px), H2 (24px), H3 (20px), Body (16px), Body Small (14px), Caption (12px)
   - Create `src/components/Typography.tsx`
     - Accepts a `variant` prop (`display | h1 | h2 | h3 | body | bodySmall | caption`)
     - Uses Cartograph font family and token definitions
   - Typography is the foundation for text consistency across components.

4. **Component Philosophy**
   - Components are **semantic + accessible** (use ARIA where needed).
   - Variants and states must be explicit props, not hidden.
   - Every component should have a **demo/example** for local testing with Vite.

5. **Initial Component Set**
   - [x] Typography
   - [x] Button
   - [x] Card
   - [x] Badge
   - [x] Tabs
   - [x] Tooltip
   - [x] Modal
   - [x] Input
   - [x] Checkbox

6. **Theming**
   - Export tokens as **CSS variables** (prefix `--cria-`).
   - Apply global styles (Cartograph font, background).
   - Support light/dark modes in future.

---

## Constraints

- Must compile with **React 18+, TypeScript, Vite**.
- Deliver as **React components** that Rails can import and mount (via Webpacker, esbuild, or importmap-rails).
- Do not use Next.js, Remix, or other SSR frameworks.
- Styling: use **CSS variables + minimal utilities** or lightweight CSS-in-JS.
- Accessibility first: keyboard navigation + ARIA attributes.

---

## How to Work (Step by Step)

1. Create `src/tokens` for colors, spacing, typography, radii, shadows.  
2. Create `src/components/` for each component with:  
   - `index.tsx` → component implementation  
   - `demo.tsx` → local demo page for Vite  
3. Implement **Typography first** (tokens + component).  
4. Then implement **Button** and **Card**.  
5. Next task: implement **Badge**.  
- Update **CHANGELOG.md** after each new component
6. Update `README.md` with a checklist of tokens + components.  
7. Document props inline with TypeScript and JSDoc.  
8. Ensure the library **compiles and runs** after each new component.  
9. Commit changes with clear, descriptive commit messages.

---