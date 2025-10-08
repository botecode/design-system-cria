import { colors } from './colors';

export interface ThemeMapping {
  [key: string]: string;
}

export const themeMapping: Record<'light' | 'dark', ThemeMapping> = {
  light: {
    // Background Colors
    '--cria-bg-primary': colors.background,
    '--cria-bg-secondary': colors.backgroundLight,
    '--cria-bg-tertiary': colors.gray[50],
    
    // Text Colors
    '--cria-text-primary': colors.text.primary,
    '--cria-text-secondary': colors.text.secondary,
    '--cria-text-tertiary': colors.text.disabled,
    '--cria-text-inverse': colors.text.inverse,
    
    // Border Colors
    '--cria-border-primary': colors.border.light,
    '--cria-border-secondary': colors.border.medium,
    '--cria-border-tertiary': colors.border.dark,
    
    // Primary Colors
    '--cria-primary': colors.primary,
    '--cria-primary-light': colors.primaryLight,
    '--cria-primary-dark': colors.primaryDark,
    
    // Secondary Colors
    '--cria-secondary': colors.secondary,
    '--cria-secondary-dark': colors.secondaryDark,
    
    // Semantic Colors
    '--cria-success': colors.success,
    '--cria-warning': colors.warning,
    '--cria-error': colors.error,
    '--cria-info': colors.info,
    
    // Surface Colors
    '--cria-surface-primary': colors.backgroundLight,
    '--cria-surface-secondary': colors.gray[50],
    '--cria-surface-tertiary': colors.gray[100],
    
    // Shadow Colors
    '--cria-shadow-light': 'rgba(0, 0, 0, 0.1)',
    '--cria-shadow-medium': 'rgba(0, 0, 0, 0.15)',
    '--cria-shadow-dark': 'rgba(0, 0, 0, 0.25)',
  },
  dark: {
    // Background Colors
    '--cria-bg-primary': colors.backgroundDark,
    '--cria-bg-secondary': colors.primaryDark,
    '--cria-bg-tertiary': colors.gray[800],
    
    // Text Colors
    '--cria-text-primary': colors.white,
    '--cria-text-secondary': colors.gray[300],
    '--cria-text-tertiary': colors.gray[400],
    '--cria-text-inverse': colors.text.primary,
    
    // Border Colors
    '--cria-border-primary': colors.gray[700],
    '--cria-border-secondary': colors.gray[600],
    '--cria-border-tertiary': colors.gray[500],
    
    // Primary Colors (adjusted for dark mode)
    '--cria-primary': colors.primary,
    '--cria-primary-light': colors.primaryLight,
    '--cria-primary-dark': colors.primaryDarker,
    
    // Secondary Colors
    '--cria-secondary': colors.secondary,
    '--cria-secondary-dark': colors.secondaryDark,
    
    // Semantic Colors (adjusted for dark mode)
    '--cria-success': colors.success,
    '--cria-warning': colors.warning,
    '--cria-error': colors.error,
    '--cria-info': colors.info,
    
    // Surface Colors
    '--cria-surface-primary': colors.gray[800],
    '--cria-surface-secondary': colors.gray[700],
    '--cria-surface-tertiary': colors.gray[600],
    
    // Shadow Colors (adjusted for dark mode)
    '--cria-shadow-light': 'rgba(0, 0, 0, 0.3)',
    '--cria-shadow-medium': 'rgba(0, 0, 0, 0.4)',
    '--cria-shadow-dark': 'rgba(0, 0, 0, 0.6)',
  },
};

export const applyTheme = (theme: 'light' | 'dark'): void => {
  const root = document.documentElement;
  const themeVars = themeMapping[theme];
  
  Object.entries(themeVars).forEach(([property, value]) => {
    root.style.setProperty(property, value);
  });
};

export const getThemeVariable = (variable: string): string => {
  return getComputedStyle(document.documentElement).getPropertyValue(variable);
};

export default themeMapping;
