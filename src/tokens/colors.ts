/**
 * CRIA Design System - Color Tokens
 * 
 * Semantic color system based on CRIA brand colors
 */

export const colors = {
  // Primary Colors
  primary: '#7566A1',
  primaryLight: '#9E9AD9',
  primaryDarker: '#3A2E52',
  primaryDark: '#2A1F3A',
  
  // Secondary Colors
  secondary: '#28DDB9',
  secondaryDark: '#167B7A',
  
  // Background Colors
  background: '#F2F4F3',
  backgroundLight: '#FFFFFF',
  backgroundDark: '#1A1A1A',
  
  // Neutral Colors
  white: '#FFFFFF',
  black: '#000000',
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },
  
  // Semantic Colors
  success: '#10B981',
  warning: '#D97706', // Darker orange for better contrast
  error: '#DC2626', // Darker red for better contrast
  info: '#3B82F6',
  
  // Text Colors
  text: {
    primary: '#374151', // Dark gray for default text
    content: '#3A2E52', // Primary Darker for content text
    secondary: '#6B7280',
    disabled: '#9CA3AF',
    inverse: '#FFFFFF',
  },
  
  // Border Colors
  border: {
    light: '#E5E7EB',
    medium: '#D1D5DB',
    dark: '#9CA3AF',
  }
} as const;

export type ColorToken = keyof typeof colors;
export type GrayScale = keyof typeof colors.gray;
export type TextColor = keyof typeof colors.text;
export type BorderColor = keyof typeof colors.border;
