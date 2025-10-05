import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CommandPalette } from '../CommandPalette';

// Mock data
const mockCommands = [
  {
    id: '1',
    title: 'Create New Project',
    description: 'Start a new project from scratch',
    category: 'Actions',
    keywords: ['new', 'create', 'project'],
    icon: '📁',
    action: jest.fn(),
  },
  {
    id: '2',
    title: 'Search Files',
    description: 'Find files in your workspace',
    category: 'Navigation',
    keywords: ['search', 'find', 'files'],
    icon: '🔍',
    action: jest.fn(),
  },
  {
    id: '3',
    title: 'Toggle Theme',
    description: 'Switch between light and dark mode',
    category: 'Settings',
    keywords: ['theme', 'dark', 'light', 'toggle'],
    icon: '🌙',
    action: jest.fn(),
  },
];

const mockCategories = [
  { id: 'actions', label: 'Actions', icon: '⚡' },
  { id: 'navigation', label: 'Navigation', icon: '🧭' },
  { id: 'settings', label: 'Settings', icon: '⚙️' },
];

describe('CommandPalette', () => {
  it('renders the component when open', () => {
    render(
      <CommandPalette
        isOpen={true}
        commands={mockCommands}
        categories={mockCategories}
        onClose={jest.fn()}
      />
    );

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/search commands/i)).toBeInTheDocument();
  });

  it('does not render when closed', () => {
    render(
      <CommandPalette
        isOpen={false}
        commands={mockCommands}
        categories={mockCategories}
        onClose={jest.fn()}
      />
    );

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('displays all commands when no search query', () => {
    render(
      <CommandPalette
        isOpen={true}
        commands={mockCommands}
        categories={mockCategories}
        onClose={jest.fn()}
      />
    );

    expect(screen.getByText('Create New Project')).toBeInTheDocument();
    expect(screen.getByText('Search Files')).toBeInTheDocument();
    expect(screen.getByText('Toggle Theme')).toBeInTheDocument();
  });

  it('filters commands based on search query', async () => {
    render(
      <CommandPalette
        isOpen={true}
        commands={mockCommands}
        categories={mockCategories}
        onClose={jest.fn()}
      />
    );

    const searchInput = screen.getByPlaceholderText(/search commands/i);
    fireEvent.change(searchInput, { target: { value: 'project' } });

    await waitFor(() => {
      expect(screen.getByText('Create New Project')).toBeInTheDocument();
      expect(screen.queryByText('Search Files')).not.toBeInTheDocument();
      expect(screen.queryByText('Toggle Theme')).not.toBeInTheDocument();
    });
  });

  it('filters commands by keywords', async () => {
    render(
      <CommandPalette
        isOpen={true}
        commands={mockCommands}
        categories={mockCategories}
        onClose={jest.fn()}
      />
    );

    const searchInput = screen.getByPlaceholderText(/search commands/i);
    fireEvent.change(searchInput, { target: { value: 'dark' } });

    await waitFor(() => {
      expect(screen.getByText('Toggle Theme')).toBeInTheDocument();
      expect(screen.queryByText('Create New Project')).not.toBeInTheDocument();
      expect(screen.queryByText('Search Files')).not.toBeInTheDocument();
    });
  });

  it('shows no results message when no matches found', async () => {
    render(
      <CommandPalette
        isOpen={true}
        commands={mockCommands}
        categories={mockCategories}
        onClose={jest.fn()}
      />
    );

    const searchInput = screen.getByPlaceholderText(/search commands/i);
    fireEvent.change(searchInput, { target: { value: 'nonexistent' } });

    await waitFor(() => {
      expect(screen.getByText(/no commands found/i)).toBeInTheDocument();
    });
  });

  it('executes command action when clicked', () => {
    const mockAction = jest.fn();
    const commandsWithAction = [
      { ...mockCommands[0], action: mockAction }
    ];

    render(
      <CommandPalette
        isOpen={true}
        commands={commandsWithAction}
        categories={mockCategories}
        onClose={jest.fn()}
      />
    );

    const commandItem = screen.getByText('Create New Project');
    fireEvent.click(commandItem);

    expect(mockAction).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when escape key is pressed', () => {
    const mockOnClose = jest.fn();
    render(
      <CommandPalette
        isOpen={true}
        commands={mockCommands}
        categories={mockCategories}
        onClose={mockOnClose}
      />
    );

    const searchInput = screen.getByPlaceholderText(/search commands/i);
    fireEvent.keyDown(searchInput, { key: 'Escape' });
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when clicking outside the palette', () => {
    const mockOnClose = jest.fn();
    render(
      <CommandPalette
        isOpen={true}
        commands={mockCommands}
        categories={mockCategories}
        onClose={mockOnClose}
      />
    );

    const overlay = screen.getByTestId('command-palette-overlay');
    fireEvent.click(overlay);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('navigates through commands with arrow keys', () => {
    render(
      <CommandPalette
        isOpen={true}
        commands={mockCommands}
        categories={mockCategories}
        onClose={jest.fn()}
      />
    );

    const searchInput = screen.getByPlaceholderText(/search commands/i);
    
    // Press down arrow to select first command
    fireEvent.keyDown(searchInput, { key: 'ArrowDown' });
    
    // Press down arrow again to select second command
    fireEvent.keyDown(searchInput, { key: 'ArrowDown' });
    
    // Press up arrow to go back to first command
    fireEvent.keyDown(searchInput, { key: 'ArrowUp' });
  });

  it('executes selected command with enter key', () => {
    const mockAction = jest.fn();
    const commandsWithAction = [
      { ...mockCommands[0], action: mockAction }
    ];

    render(
      <CommandPalette
        isOpen={true}
        commands={commandsWithAction}
        categories={mockCategories}
        onClose={jest.fn()}
      />
    );

    const searchInput = screen.getByPlaceholderText(/search commands/i);
    
    // Select first command and press enter
    fireEvent.keyDown(searchInput, { key: 'ArrowDown' });
    fireEvent.keyDown(searchInput, { key: 'Enter' });

    expect(mockAction).toHaveBeenCalledTimes(1);
  });

  it('groups commands by category', () => {
    render(
      <CommandPalette
        isOpen={true}
        commands={mockCommands}
        categories={mockCategories}
        onClose={jest.fn()}
      />
    );

    expect(screen.getByText('Actions')).toBeInTheDocument();
    expect(screen.getByText('Navigation')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
  });

  it('displays command icons', () => {
    render(
      <CommandPalette
        isOpen={true}
        commands={mockCommands}
        categories={mockCategories}
        onClose={jest.fn()}
      />
    );

    expect(screen.getByText('📁')).toBeInTheDocument();
    expect(screen.getByText('🔍')).toBeInTheDocument();
    expect(screen.getByText('🌙')).toBeInTheDocument();
  });

  it('displays command descriptions', () => {
    render(
      <CommandPalette
        isOpen={true}
        commands={mockCommands}
        categories={mockCategories}
        onClose={jest.fn()}
      />
    );

    expect(screen.getByText('Start a new project from scratch')).toBeInTheDocument();
    expect(screen.getByText('Find files in your workspace')).toBeInTheDocument();
    expect(screen.getByText('Switch between light and dark mode')).toBeInTheDocument();
  });

  it('handles empty commands array', () => {
    render(
      <CommandPalette
        isOpen={true}
        commands={[]}
        categories={mockCategories}
        onClose={jest.fn()}
      />
    );

    expect(screen.getByText(/no commands available/i)).toBeInTheDocument();
  });

  it('renders with custom placeholder text', () => {
    render(
      <CommandPalette
        isOpen={true}
        commands={mockCommands}
        categories={mockCategories}
        onClose={jest.fn()}
        placeholder="Type to search..."
      />
    );

    expect(screen.getByPlaceholderText('Type to search...')).toBeInTheDocument();
  });

  it('renders with custom title', () => {
    render(
      <CommandPalette
        isOpen={true}
        commands={mockCommands}
        categories={mockCategories}
        onClose={jest.fn()}
        title="Quick Actions"
      />
    );

    expect(screen.getByText('Quick Actions')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(
      <CommandPalette
        isOpen={true}
        commands={mockCommands}
        categories={mockCategories}
        onClose={jest.fn()}
        className="custom-class"
      />
    );

    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveClass('custom-class');
  });

  it('has proper accessibility attributes', () => {
    render(
      <CommandPalette
        isOpen={true}
        commands={mockCommands}
        categories={mockCategories}
        onClose={jest.fn()}
      />
    );

    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveAttribute('aria-modal', 'true');
    expect(dialog).toHaveAttribute('aria-label', 'Command Palette');
  });

  it('focuses search input when opened', () => {
    render(
      <CommandPalette
        isOpen={true}
        commands={mockCommands}
        categories={mockCategories}
        onClose={jest.fn()}
      />
    );

    const searchInput = screen.getByPlaceholderText(/search commands/i);
    expect(searchInput).toHaveFocus();
  });

  it('handles keyboard shortcuts display', () => {
    const commandsWithShortcuts = [
      {
        ...mockCommands[0],
        shortcut: 'Ctrl+N',
      }
    ];

    render(
      <CommandPalette
        isOpen={true}
        commands={commandsWithShortcuts}
        categories={mockCategories}
        onClose={jest.fn()}
      />
    );

    expect(screen.getByText('Ctrl+N')).toBeInTheDocument();
  });

  it('supports command rendering with custom render function', () => {
    const customRenderCommand = jest.fn((command) => (
      <div key={command.id} data-testid={`custom-${command.id}`}>
        Custom: {command.title}
      </div>
    ));

    render(
      <CommandPalette
        isOpen={true}
        commands={mockCommands}
        categories={mockCategories}
        onClose={jest.fn()}
        renderCommand={customRenderCommand}
      />
    );

    expect(screen.getByTestId('custom-1')).toBeInTheDocument();
    expect(screen.getByText('Custom: Create New Project')).toBeInTheDocument();
  });
});
