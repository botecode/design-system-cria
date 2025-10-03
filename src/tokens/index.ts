/**
 * CRIA Design System - Design Tokens
 * 
 * Central export for all design tokens
 */

export * from './colors';
export * from './spacing';
export * from './typography';
export * from './radii';
export * from './shadows';

// CSS Variables for theming
export const cssVariables = {
  // Colors
  '--cria-primary': '#7566A1',
  '--cria-primary-light': '#3A2E52',
  '--cria-primary-dark': '#2A1F3A',
  '--cria-secondary': '#28DDB9',
  '--cria-secondary-dark': '#167B7A',
  '--cria-background': '#F2F4F3',
  '--cria-background-light': '#FFFFFF',
  '--cria-background-dark': '#1A1A1A',
  '--cria-text-primary': '#111827',
  '--cria-text-secondary': '#6B7280',
  '--cria-text-disabled': '#9CA3AF',
  '--cria-text-inverse': '#FFFFFF',
  '--cria-border-light': '#E5E7EB',
  '--cria-border-medium': '#D1D5DB',
  '--cria-border-dark': '#9CA3AF',
  '--cria-success': '#10B981',
  '--cria-warning': '#F59E0B',
  '--cria-error': '#EF4444',
  '--cria-info': '#3B82F6',
  
  // Typography
  '--cria-font-family': '"Cartograph CF", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  '--cria-font-size-display': '48px',
  '--cria-font-size-h1': '32px',
  '--cria-font-size-h2': '24px',
  '--cria-font-size-h3': '20px',
  '--cria-font-size-title1': '32px',
  '--cria-font-size-title2': '24px',
  '--cria-font-size-title3': '20px',
  '--cria-font-size-body': '16px',
  '--cria-font-size-body-small': '14px',
  '--cria-font-size-caption': '12px',
  
  // Spacing
  '--cria-spacing-1': '4px',
  '--cria-spacing-2': '8px',
  '--cria-spacing-3': '12px',
  '--cria-spacing-4': '16px',
  '--cria-spacing-5': '20px',
  '--cria-spacing-6': '24px',
  '--cria-spacing-8': '32px',
  '--cria-spacing-10': '40px',
  '--cria-spacing-12': '48px',
  '--cria-spacing-16': '64px',
  '--cria-spacing-20': '80px',
  '--cria-spacing-24': '96px',
  
  // Border Radius
  '--cria-radius-sm': '4px',
  '--cria-radius-md': '8px',
  '--cria-radius-lg': '16px',
  '--cria-radius-full': '9999px',
  
  // Shadows
  '--cria-shadow-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  '--cria-shadow-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  '--cria-shadow-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
} as const;
