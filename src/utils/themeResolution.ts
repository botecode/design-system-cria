import { Theme } from '../contexts/ThemeContext';

export interface ThemeResolutionOptions {
  storageKey?: string;
  defaultTheme?: Theme;
  enableSystem?: boolean;
}

export const resolveInitialTheme = (options: ThemeResolutionOptions = {}): Theme => {
  const {
    storageKey = 'cria-theme',
    defaultTheme = 'light',
    enableSystem = true,
  } = options;

  // 1. Check localStorage first (user preference)
  if (typeof window !== 'undefined') {
    const storedTheme = localStorage.getItem(storageKey) as Theme;
    if (storedTheme && (storedTheme === 'light' || storedTheme === 'dark')) {
      return storedTheme;
    }

    // 2. Check system preference if enabled
    if (enableSystem) {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      return systemTheme;
    }
  }

  // 3. Use default theme
  return defaultTheme;
};

export const getSystemTheme = (): Theme => {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const saveThemePreference = (theme: Theme, storageKey: string = 'cria-theme'): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(storageKey, theme);
  }
};

export const getStoredTheme = (storageKey: string = 'cria-theme'): Theme | null => {
  if (typeof window === 'undefined') return null;
  const stored = localStorage.getItem(storageKey) as Theme;
  return stored && (stored === 'light' || stored === 'dark') ? stored : null;
};

export default {
  resolveInitialTheme,
  getSystemTheme,
  saveThemePreference,
  getStoredTheme,
};
