// JavaScript wrapper for design system components
// This file exports JavaScript versions of components to avoid TypeScript parsing issues

// Text Components
export { 
  TextBody, 
  TextContentTitle, 
  TextContent, 
  TextContentImportant 
} from './components/Text';

// Tabs Component (TS build)
export { Tabs } from './components/Tabs';

// Button Component (TS build)
export { Button } from './components/Button';

// Card Components (TS build)
export { Card, CardHeader, CardContent, CardFooter } from './components/Card';

// Typography Component (alias for Text)
export { 
  TextBody as Typography,
  TextContentTitle as TypographyTitle,
  TextContent as TypographyContent
} from './components/Text';

// Backgrounds Component (TS build)
export { Backgrounds } from './components/Backgrounds';

// Navigation Component (TS build)
export { Navigation } from './components/Navigation';

// Modal Component (TS build)
export { Modal } from './components/Modal';

// Input Component (TS build)
export { Input } from './components/Input';

// Theme System
export { ThemeProvider, useTheme } from './contexts';
export { ThemeToggle } from './components/ThemeToggle';

// Text Tokens
export * from './components/TextTokens';

