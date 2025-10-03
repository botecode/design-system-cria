/**
 * CRIA Design System - Border Radius Tokens
 */

export const radii = {
  none: '0px',
  sm: '4px',
  md: '8px',
  lg: '16px',
  full: '9999px',
} as const;

export type RadiusToken = keyof typeof radii;
