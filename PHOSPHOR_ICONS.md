# Phosphor React Icons Quick Reference

> **Note**: phosphor-react has 1,424+ icons. Use this guide for common scenarios instead of listing all icons.

## Installation & Usage

```bash
npm install phosphor-react
```

```tsx
import { IconName } from "phosphor-react";
<IconName size={24} />
```

## 🚨 Common Import Errors to Avoid

❌ **These icons DON'T exist:**
- `Search` → Use `MagnifyingGlass`
- `Settings` → Use `Gear`
- `Video` → Use `VideoCamera`
- `ChevronUp/Down/Left/Right` → Use `CaretUp/Down/Left/Right`
- `CaretUpDown` → Stack `CaretUp` + `CaretDown`
- `Menu` → Use `Hamburger` or `List`

## 📋 Quick Reference by Use Case

### **Navigation & Dropdowns**
```tsx
// Dropdown arrows
<CaretDown /> <CaretUp /> <CaretLeft /> <CaretRight />

// Directional arrows
<ArrowDown /> <ArrowUp /> <ArrowLeft /> <ArrowRight />

// Close/back
<X /> <ArrowLeft />
```

### **Actions & Buttons**
```tsx
// Primary actions
<Plus /> <Minus /> <Check /> <X />

// File actions
<Download /> <Upload /> <Copy /> <Trash />

// Edit actions
<Pencil /> <Eraser /> <FloppyDisk /> // save
```

### **Search & Filtering**
```tsx
// Search (NOT "Search")
<MagnifyingGlass />
<MagnifyingGlassPlus />
<MagnifyingGlassMinus />

// Filtering
<Funnel /> <SortAscending /> <SortDescending />
```

### **Status & Feedback**
```tsx
// Success/Error/Info
<CheckCircle /> <XCircle /> <WarningCircle /> <Info />

// Loading states
<Spinner /> <SpinnerGap />

// Visibility
<Eye /> <EyeSlash /> <EyeClosed />
```

### **User & Auth**
```tsx
// User actions
<User /> <Users /> <UserPlus /> <UserMinus />
<SignIn /> <SignOut />

// Security
<Lock /> <LockOpen /> <Key /> <Shield />
```

### **Content & Media**
```tsx
// Files
<File /> <FileText /> <FileImage /> <FileVideo />
<Folder /> <FolderOpen />

// Media
<Image /> <VideoCamera /> <Play /> <Pause />
<SpeakerHigh /> <SpeakerLow /> <SpeakerSlash />
```

### **Communication**
```tsx
// Messaging
<Chat /> <ChatCircle /> <ChatDots />
<Envelope /> <Phone /> <PhoneCall />

// Notifications
<Bell /> <BellRinging /> <BellSlash />
```

### **Data & Charts**
```tsx
// Charts
<ChartBar /> <ChartLine /> <ChartPie />
<TrendUp /> <TrendDown />

// Data actions
<Download /> <Upload /> <Copy />
```

### **Settings & Configuration**
```tsx
// Settings
<Gear /> <GearSix /> <Sliders /> <SlidersHorizontal />

// Toggle states
<ToggleLeft /> <ToggleRight />
```

## 🎯 Naming Patterns

**Common suffixes:**
- `Simple` = minimal version (`UserSimple`, `FolderSimple`)
- `Circle` = circular version (`CheckCircle`, `XCircle`)
- `Square` = square version (`CheckSquare`, `XSquare`)
- `Outline` = outlined version (many icons)

**Common prefixes:**
- `Arrow` = directional arrows
- `Caret` = small directional indicators
- `File` = file types
- `Chart` = data visualization

## 🔍 How to Find Icons

1. **Think semantically**: What does it represent?
2. **Try common names**: `User`, `File`, `Download`, `Settings`
3. **Use patterns**: Add `Simple`, `Circle`, `Outline` suffixes
4. **Check the website**: [phosphoricons.com](https://phosphoricons.com/) for visual reference

## 💡 Pro Tips

- **Use `IconContext`** for global styling:
  ```tsx
  <IconContext.Provider value={{ size: 24, color: 'blue' }}>
    <User />
  </IconContext.Provider>
  ```

- **Multiple weights available**: `thin`, `light`, `regular`, `bold`, `fill`, `duotone`
- **All icons support**: `size`, `color`, `weight` props
- **Accessibility**: Icons are semantic and screen-reader friendly
