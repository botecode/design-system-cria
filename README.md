# CRIA_UI

**CRIA_UI** is a lightweight, internal **React + TypeScript design system** for the **CR_IA Rails app** and its marketing site.  
It is built with a focus on **clarity, accessibility, and brand alignment** — not on being a generic, over-engineered framework.  
The goal is to provide **consistent, production-ready UI components** that integrate seamlessly into our Rails frontend.

---

## 🎨 Design Tokens

### Colors
- **Primary**: `#7566A1`
- **Primary Light / Dark**: `#3A2E52`
- **Secondary**: `#28DDB9`
- **Secondary Dark**: `#167B7A`
- **Background**: `#F2F4F3`

### Typography
- Font: **Cartograph CF** (already included in project)
- Type Scale:
  - **Display** — 48px, bold
  - **H1** — 32px, semi-bold
  - **H2** — 24px, semi-bold
  - **H3** — 20px, semi-bold
  - **Body** — 16px, regular
  - **Body Small** — 14px, regular
  - **Caption** — 12px, regular

### Spacing
- 4px grid: `4, 8, 12, 16, 24, 32, 40, 48, 64`

### Radii
- `4px, 8px, 16px`

### Shadows
- **sm**: subtle elevation for small elements  
- **md**: standard depth for cards  
- **lg**: prominent elevation for modals/overlays  

---

## 📦 Project Layout

cria_ui/
src/
tokens/         # color, spacing, typography, radii, shadows
components/     # typography, buttons, cards, inputs, etc.
index.ts        # main exports
examples/         # small demo pages with Vite
README.md
INSTRUCTIONS.md

---

## ✅ Goals

- Provide a **consistent design layer** for CR_IA.  
- Encode **brand identity** directly into reusable tokens and components.  
- Keep implementation **simple, accessible, and lightweight**.  
- Ensure components look and feel **modern, cohesive, and aligned** with [CRIA’s marketing site](https://www.cria.pro/).  
- Deliver **React components** that can be imported into a **Rails app frontend** (via Webpacker, esbuild, or importmap).  

---

## 🧩 Component Checklist

### Foundations
- [x] Typography (`Typography`)
- [x] Colors (CSS variables)
- [x] Spacing
- [x] Radii
- [x] Shadows

### Components
- [x] Button
- [x] Card
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

---

## 📖 Usage Examples

### Typography
```tsx
import { Typography } from 'cria-ui';

// Basic usage
<Typography variant="h1" color="primary">
  Welcome to CRIA
</Typography>

// With custom styling
<Typography 
  variant="body" 
  color="secondary" 
  weight="medium"
  align="center"
>
  This is centered, medium-weight body text
</Typography>
```

### Button
```tsx
import { Button } from 'cria-ui';

// Different variants
<Button variant="primary">Primary Action</Button>
<Button variant="secondary">Secondary Action</Button>
<Button variant="outline">Outline Button</Button>
<Button variant="ghost">Ghost Button</Button>
<Button variant="danger">Delete</Button>

// With icons and states
<Button 
  variant="primary" 
  size="lg" 
  leftIcon="→"
  loading={isLoading}
  onClick={handleClick}
>
  Submit
</Button>
```

### Card
```tsx
import { Card, CardHeader, CardContent, CardFooter } from 'cria-ui';

<Card variant="elevated" size="md">
  <CardHeader>
    <Typography variant="h3">Card Title</Typography>
  </CardHeader>
  <CardContent>
    <Typography variant="body" color="secondary">
      Card content goes here
    </Typography>
  </CardContent>
  <CardFooter>
    <Button size="sm">Action</Button>
  </CardFooter>
</Card>
```

### Design Tokens
```tsx
import { colors, spacing, typography } from 'cria-ui';

// Use tokens in custom components
const customStyle = {
  backgroundColor: colors.primary,
  padding: spacing[4],
  fontFamily: typography.fontFamily.primary,
  borderRadius: '8px'
};
```

---

## 🚀 Development

### Prerequisites
- **Node.js 18+**
- **pnpm** (preferred) or yarn/npm
- **Vite** for local development
- React 18 + TypeScript

### Setup
```bash
# install dependencies
pnpm install

# start dev server with examples
pnpm dev

# build library
pnpm build

# run tests
pnpm test


⸻

👩‍💻 Contributing
  • Use TypeScript for all components.
  • Keep props explicit and documented.
  • Prefer CSS variables for styling consistency.
  • Use Vite dev server for local development.
  • Update the component checklist as new components are implemented.
  • All components must have a small demo in /examples.

⸻

📜 License

Internal project — not open source.
Use within CRIA products only.

---