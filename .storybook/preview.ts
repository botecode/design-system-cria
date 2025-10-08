import type { Preview } from '@storybook/react';
import { withTheme, withThemeToggle, withThemeComparison } from './decorators/ThemeDecorator';
import '../src/styles/index.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme: {
        // Customize Storybook's theme
        colorPrimary: '#7566A1',
        colorSecondary: '#28DDB9',
        appBg: 'var(--cria-bg-primary)',
        appContentBg: 'var(--cria-bg-secondary)',
        appBorderColor: 'var(--cria-border-primary)',
        textColor: 'var(--cria-text-primary)',
        textInverseColor: 'var(--cria-text-inverse)',
        barTextColor: 'var(--cria-text-secondary)',
        barSelectedColor: 'var(--cria-primary)',
        barBg: 'var(--cria-bg-secondary)',
        inputBg: 'var(--cria-bg-secondary)',
        inputBorder: 'var(--cria-border-primary)',
        inputTextColor: 'var(--cria-text-primary)',
        inputBorderRadius: 'var(--cria-radius-md)',
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#F2F4F3',
        },
        {
          name: 'dark',
          value: '#1A1A1A',
        },
      ],
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    withTheme,
  ],
};

export default preview;
