/**
 * CRIA Design System - Spacing Tokens
 * 
 * 4px grid system for consistent spacing
 */

export const spacing = {
  0: '0px',
  1: '4px',   // 0.25rem
  2: '8px',   // 0.5rem
  3: '12px',  // 0.75rem
  4: '16px',  // 1rem
  5: '20px',  // 1.25rem
  6: '24px',  // 1.5rem
  8: '32px',  // 2rem
  10: '40px', // 2.5rem
  12: '48px', // 3rem
  16: '64px', // 4rem
  20: '80px', // 5rem
  24: '96px', // 6rem
  32: '128px', // 8rem
  40: '160px', // 10rem
  48: '192px', // 12rem
  56: '224px', // 14rem
  64: '256px', // 16rem
} as const;

export type SpacingToken = keyof typeof spacing;
