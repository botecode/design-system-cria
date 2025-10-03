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
  - **Title 1** — 32px, bold, uppercase, primary color
  - **Title 2** — 24px, bold, uppercase, primary color
  - **Title 3** — 20px, bold, uppercase, primary color
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

### Icons
- **Phosphor Icons**: Professional, scalable vector icons
- Consistent design language across all components
- Accessible and customizable
- Examples: `House`, `User`, `ChatCircle`, `Bell`, `Check`, `Warning`, `X`

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
- Ensure components look and feel **modern, cohesive, and aligned** with [CRIA's marketing site](https://www.cria.pro/).  
- Deliver **React components** that can be imported into a **Rails app frontend** (via Webpacker, esbuild, or importmap).  

## 🎯 Current Status

**✅ Core Foundation Complete**
- All design tokens implemented (colors, typography, spacing, radii, shadows)
- Professional icon system with Phosphor Icons
- Comprehensive CSS variable system
- Full accessibility support

**✅ Components Implemented (8/12)**
- Typography with title variants
- Button with all variants and states
- Card with multiple styles
- Badge with icons, counts, and interactions
- Tabs with full keyboard navigation
- Tooltip with positioning and accessibility
- Modal with flexible layouts and animations
- Input with validation and interactive features

**🔄 Next Components**
- Checkbox, Switch, Snackbar, Navigation, Accordion

**🔧 Recent Improvements**
- Fixed tooltip positioning with React Portal for proper viewport-relative positioning
- Improved badge readability with white text and icons on colored backgrounds
- Enhanced modal text contrast for better accessibility
- Fixed input styling with purple borders and improved contrast
- Added comprehensive accessibility features across all components
- Resolved CSS variable issues for consistent theming

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
- [x] Badge
- [x] Tabs
- [x] Tooltip
- [x] Modal
- [x] Input
- [ ] Checkbox
- [ ] Switch
- [ ] Snackbar / Toast
- [ ] Navigation (Sidebar, Topbar)
- [ ] Text
- [ ] Accordion

---

## 📖 Usage Examples

### Typography
```tsx
import { Typography } from 'cria-ui';

// Title variants (uppercase, primary color)
<Typography variant="title1">Page Title</Typography>
<Typography variant="title2">Section Title</Typography>
<Typography variant="title3">Subsection Title</Typography>

// Standard variants
<Typography variant="h1">Heading 1</Typography>
<Typography variant="body">Body text</Typography>

// With custom styling
<Typography 
  variant="body" 
  color="content" 
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

### Badge
```tsx
import { Badge } from 'cria-ui';

// Different variants and styles
<Badge variant="primary">Primary</Badge>
<Badge variant="success" badgeStyle="soft">Active</Badge>
<Badge variant="error" badgeStyle="outline">Error</Badge>

// With icons and counts
<Badge leftIcon={<Check size={12} />}>Completed</Badge>
<Badge variant="error" maxCount={99}>150</Badge>

// Interactive badges
<Badge interactive onClick={handleClick}>Clickable</Badge>
```

### Tabs
```tsx
import { Tabs } from 'cria-ui';
import { House, User, Bell } from 'phosphor-react';

const tabItems = [
  {
    id: 'home',
    label: 'Home',
    icon: <House size={16} />,
    content: <div>Home content</div>
  },
  {
    id: 'profile',
    label: 'Profile',
    icon: <User size={16} />,
    content: <div>Profile content</div>
  },
  {
    id: 'notifications',
    label: 'Notifications',
    icon: <Bell size={16} />,
    badge: <Badge variant="error" size="sm">3</Badge>,
    content: <div>Notifications content</div>
  }
];

// Basic usage
<Tabs items={tabItems} />

// With different variants and orientations
<Tabs items={tabItems} variant="pills" size="lg" />
<Tabs items={tabItems} orientation="vertical" />
<Tabs items={tabItems} fullWidth />
```

### Tooltip
```tsx
import { Tooltip } from 'cria-ui';

// Basic tooltip
<Tooltip content="This is a helpful tooltip">
  <Button>Hover me</Button>
</Tooltip>

// With different variants and positions
<Tooltip 
  content="Warning message" 
  variant="warning" 
  position="top"
  arrow
>
  <Badge variant="warning">Warning</Badge>
</Tooltip>

// Interactive tooltip
<Tooltip 
  content="Click to interact" 
  interactive 
  delay={500}
>
  <Button variant="outline">Interactive</Button>
</Tooltip>
```

### Modal
```tsx
import { Modal } from 'cria-ui';

const [isOpen, setIsOpen] = useState(false);

// Basic modal
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Confirm Action"
  size="md"
>
  <Typography variant="body">
    Are you sure you want to proceed?
  </Typography>
  <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
    <Button variant="primary" onClick={() => setIsOpen(false)}>
      Confirm
    </Button>
    <Button variant="outline" onClick={() => setIsOpen(false)}>
      Cancel
    </Button>
  </div>
</Modal>

// Large modal with custom layout
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Settings"
  size="lg"
  showCloseButton
>
  <div style={{ padding: '24px' }}>
    <Typography variant="h3" style={{ marginBottom: '16px' }}>
      Application Settings
    </Typography>
    {/* Modal content */}
  </div>
</Modal>
```

### Input
```tsx
import { Input } from 'cria-ui';
import { User, Lock, Eye } from 'phosphor-react';

// Basic input
<Input
  label="Email"
  placeholder="Enter your email"
  type="email"
  required
/>

// Input with validation
<Input
  label="Password"
  type="password"
  placeholder="Enter password"
  leftIcon={<Lock size={20} />}
  showPasswordToggle
  errorMessage="Password must be at least 8 characters"
  state="error"
/>

// Input with helper text and character count
<Input
  label="Bio"
  placeholder="Tell us about yourself"
  multiline
  rows={4}
  maxLength={500}
  showCharacterCount
  helperText="This will be displayed on your profile"
/>

// Input with different variants
<Input variant="filled" label="Filled Input" />
<Input variant="outlined" label="Outlined Input" />
<Input variant="underlined" label="Underlined Input" />
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