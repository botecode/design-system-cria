// JavaScript wrapper for design system components
// This file exports JavaScript versions of components to avoid TypeScript parsing issues

// Text Components
export { 
  TextBody, 
  TextContentTitle, 
  TextContent, 
  TextContentImportant 
} from './components/Text/Text.jsx';

// Tabs Component
export { Tabs } from './components/Tabs/Tabs.jsx';

// Button Component
export { Button } from './components/Button/Button.jsx';

// Card Components
export { Card, CardHeader, CardContent, CardFooter } from './components/Card/Card.jsx';

// Typography Component (alias for Text)
export { 
  TextBody as Typography,
  TextContentTitle as TypographyTitle,
  TextContent as TypographyContent
} from './components/Text/Text.jsx';




