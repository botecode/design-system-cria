/**
 * CRIA_UI - React + TypeScript Design System
 * 
 * A comprehensive design system built for CR_IA applications
 */

// Design Tokens
export * from './tokens';

// Components - Named exports
export * from './components/Accordion';
export * from './components/Badge';
export * from './components/Button';
export * from './components/Card';
export * from './components/Checkbox';
export * from './components/Input';
export * from './components/Modal';
export * from './components/Navigation';
export * from './components/Snackbar';
export * from './components/Switch';
export * from './components/Tabs';
export * from './components/Text';
export * from './components/Tooltip';
export * from './components/Typography';
export * from './components/Dropdown';
export * from './components/RadioGroup';

// Default exports for backward compatibility
export { default as Typography } from './components/Typography';
export { default as Button } from './components/Button';
export { default as Card } from './components/Card';
export { default as Badge } from './components/Badge';
export { default as Tabs } from './components/Tabs';
export { default as Tooltip } from './components/Tooltip';
export { default as Modal } from './components/Modal';
export { default as Input } from './components/Input';
export { default as Accordion } from './components/Accordion';
export { default as Text } from './components/Text';
export { default as Dropdown } from './components/Dropdown';
export { default as RadioGroup } from './components/RadioGroup';
