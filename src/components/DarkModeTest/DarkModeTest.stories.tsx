import type { Meta, StoryObj } from '@storybook/react';
import { DarkModeTest } from './DarkModeTest';

const meta: Meta<typeof DarkModeTest> = {
  title: 'Testing/DarkModeTest',
  component: DarkModeTest,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A comprehensive test component that demonstrates all components in both light and dark themes. Use this to verify dark mode support across the entire design system.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'The complete dark mode test suite. This component tests all components in both light and dark themes, including buttons, cards, inputs, typography, modals, navigation, and backgrounds.',
      },
    },
  },
};

export const LightTheme: Story = {
  parameters: {
    globals: {
      theme: 'light',
    },
    docs: {
      description: {
        story: 'The dark mode test suite in light theme. All components should render correctly with light theme styling.',
      },
    },
  },
};

export const DarkTheme: Story = {
  parameters: {
    globals: {
      theme: 'dark',
    },
    docs: {
      description: {
        story: 'The dark mode test suite in dark theme. All components should render correctly with dark theme styling.',
      },
    },
  },
};
