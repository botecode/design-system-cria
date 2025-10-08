import type { Meta, StoryObj } from '@storybook/react';
import { ThemeToggle } from './ThemeToggle';
import { withThemeComparison } from '../../../.storybook/decorators/ThemeDecorator';

const meta: Meta<typeof ThemeToggle> = {
  title: 'Components/ThemeToggle',
  component: ThemeToggle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A theme toggle component that allows users to switch between light and dark modes. Supports multiple variants and sizes.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['switch', 'button', 'icon'],
      description: 'The visual style variant of the theme toggle',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'The size of the theme toggle',
    },
    showLabel: {
      control: { type: 'boolean' },
      description: 'Whether to show the label text',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Switch variant stories
export const Switch: Story = {
  args: {
    variant: 'switch',
    showLabel: true,
  },
};

export const SwitchSmall: Story = {
  args: {
    variant: 'switch',
    size: 'sm',
    showLabel: true,
  },
};

export const SwitchLarge: Story = {
  args: {
    variant: 'switch',
    size: 'lg',
    showLabel: true,
  },
};

export const SwitchNoLabel: Story = {
  args: {
    variant: 'switch',
    showLabel: false,
  },
};

// Button variant stories
export const Button: Story = {
  args: {
    variant: 'button',
    showLabel: true,
  },
};

export const ButtonSmall: Story = {
  args: {
    variant: 'button',
    size: 'sm',
    showLabel: true,
  },
};

export const ButtonLarge: Story = {
  args: {
    variant: 'button',
    size: 'lg',
    showLabel: true,
  },
};

export const ButtonNoLabel: Story = {
  args: {
    variant: 'button',
    showLabel: false,
  },
};

// Icon variant stories
export const Icon: Story = {
  args: {
    variant: 'icon',
  },
};

export const IconSmall: Story = {
  args: {
    variant: 'icon',
    size: 'sm',
  },
};

export const IconLarge: Story = {
  args: {
    variant: 'icon',
    size: 'lg',
  },
};

// Dark mode comparison
export const DarkModeComparison: Story = {
  args: {
    variant: 'switch',
    showLabel: true,
  },
  decorators: [withThemeComparison],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'This story shows the theme toggle in both light and dark themes side by side for comparison.',
      },
    },
  },
};

// All variants comparison
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h3 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Switch Variant</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <ThemeToggle variant="switch" size="sm" showLabel />
          <ThemeToggle variant="switch" size="md" showLabel />
          <ThemeToggle variant="switch" size="lg" showLabel />
        </div>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h3 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Button Variant</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <ThemeToggle variant="button" size="sm" showLabel />
          <ThemeToggle variant="button" size="md" showLabel />
          <ThemeToggle variant="button" size="lg" showLabel />
        </div>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h3 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Icon Variant</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <ThemeToggle variant="icon" size="sm" />
          <ThemeToggle variant="icon" size="md" />
          <ThemeToggle variant="icon" size="lg" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'All theme toggle variants and sizes displayed together to show the visual differences.',
      },
    },
  },
};

// Interactive demonstration
export const InteractiveDemo: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: '600' }}>
          Interactive Theme Toggle
        </h3>
        <p style={{ margin: 0, fontSize: '14px', color: 'var(--cria-text-secondary)' }}>
          Click any toggle to switch between light and dark themes
        </p>
      </div>
      
      <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
        <ThemeToggle variant="switch" showLabel />
        <ThemeToggle variant="button" showLabel />
        <ThemeToggle variant="icon" />
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Interactive demonstration of the theme toggle component. Click any toggle to switch themes.',
      },
    },
  },
};

// Usage examples
export const UsageExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>
          Header Usage
        </h3>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: '16px',
          backgroundColor: 'var(--cria-bg-secondary)',
          borderRadius: 'var(--cria-radius-md)',
          border: '1px solid var(--cria-border-primary)'
        }}>
          <span style={{ fontSize: '18px', fontWeight: '600' }}>My App</span>
          <ThemeToggle variant="button" showLabel />
        </div>
      </div>
      
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>
          Settings Panel
        </h3>
        <div style={{ 
          padding: '16px',
          backgroundColor: 'var(--cria-bg-secondary)',
          borderRadius: 'var(--cria-radius-md)',
          border: '1px solid var(--cria-border-primary)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>Dark Mode</span>
            <ThemeToggle variant="switch" />
          </div>
        </div>
      </div>
      
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>
          Compact Header
        </h3>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: '12px 16px',
          backgroundColor: 'var(--cria-bg-secondary)',
          borderRadius: 'var(--cria-radius-md)',
          border: '1px solid var(--cria-border-primary)'
        }}>
          <span style={{ fontSize: '16px', fontWeight: '600' }}>Compact App</span>
          <ThemeToggle variant="icon" size="sm" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Common usage patterns for the theme toggle component in different contexts.',
      },
    },
  },
};
