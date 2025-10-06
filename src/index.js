// JavaScript wrapper for design system components
// This file exports JavaScript versions of components to avoid TypeScript parsing issues

// Text Components (use TS barrel)
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




