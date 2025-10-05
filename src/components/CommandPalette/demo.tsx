import React, { useState } from 'react';
import { 
  FileText, 
  FolderOpen, 
  Gear, 
  User, 
  Search, 
  Bell, 
  Heart,
  Star,
  Download,
  Upload,
  Trash,
  Pencil,
  Copy,
  Share,
  Globe,
  Lock,
  Palette,
  Moon,
  Sun
} from 'phosphor-react';
import { CommandPalette, CommandItem, CommandCategory } from './CommandPalette';
import { Button } from '../Button';
import { Card, CardContent } from '../Card';
import { Typography } from '../Typography';
import { Container, Section } from '../Container';
import { spacing } from '../../tokens';

const CommandPaletteDemo: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lastExecutedCommand, setLastExecutedCommand] = useState<string | null>(null);

  // Sample commands
  const commands: CommandItem[] = [
    // File Operations
    {
      id: 'new-file',
      title: 'New File',
      description: 'Create a new file in the current directory',
      category: 'File',
      keywords: ['create', 'new', 'file', 'document'],
      icon: '📄',
      shortcut: 'Ctrl+N',
      action: () => setLastExecutedCommand('New File'),
    },
    {
      id: 'open-file',
      title: 'Open File',
      description: 'Open an existing file from your computer',
      category: 'File',
      keywords: ['open', 'file', 'load', 'browse'],
      icon: '📂',
      shortcut: 'Ctrl+O',
      action: () => setLastExecutedCommand('Open File'),
    },
    {
      id: 'save-file',
      title: 'Save File',
      description: 'Save the current file to disk',
      category: 'File',
      keywords: ['save', 'file', 'store', 'write'],
      icon: '💾',
      shortcut: 'Ctrl+S',
      action: () => setLastExecutedCommand('Save File'),
    },
    {
      id: 'save-as',
      title: 'Save As',
      description: 'Save the current file with a new name',
      category: 'File',
      keywords: ['save', 'as', 'export', 'rename'],
      icon: '📋',
      shortcut: 'Ctrl+Shift+S',
      action: () => setLastExecutedCommand('Save As'),
    },

    // Edit Operations
    {
      id: 'copy',
      title: 'Copy',
      description: 'Copy selected text to clipboard',
      category: 'Edit',
      keywords: ['copy', 'duplicate', 'clipboard'],
      icon: '📋',
      shortcut: 'Ctrl+C',
      action: () => setLastExecutedCommand('Copy'),
    },
    {
      id: 'paste',
      title: 'Paste',
      description: 'Paste text from clipboard',
      category: 'Edit',
      keywords: ['paste', 'insert', 'clipboard'],
      icon: '📋',
      shortcut: 'Ctrl+V',
      action: () => setLastExecutedCommand('Paste'),
    },
    {
      id: 'cut',
      title: 'Cut',
      description: 'Cut selected text to clipboard',
      category: 'Edit',
      keywords: ['cut', 'remove', 'clipboard'],
      icon: '✂️',
      shortcut: 'Ctrl+X',
      action: () => setLastExecutedCommand('Cut'),
    },
    {
      id: 'undo',
      title: 'Undo',
      description: 'Undo the last action',
      category: 'Edit',
      keywords: ['undo', 'revert', 'back'],
      icon: '↶',
      shortcut: 'Ctrl+Z',
      action: () => setLastExecutedCommand('Undo'),
    },
    {
      id: 'redo',
      title: 'Redo',
      description: 'Redo the last undone action',
      category: 'Edit',
      keywords: ['redo', 'repeat', 'forward'],
      icon: '↷',
      shortcut: 'Ctrl+Y',
      action: () => setLastExecutedCommand('Redo'),
    },

    // View Operations
    {
      id: 'zoom-in',
      title: 'Zoom In',
      description: 'Increase the zoom level',
      category: 'View',
      keywords: ['zoom', 'in', 'magnify', 'scale'],
      icon: '🔍+',
      shortcut: 'Ctrl+=',
      action: () => setLastExecutedCommand('Zoom In'),
    },
    {
      id: 'zoom-out',
      title: 'Zoom Out',
      description: 'Decrease the zoom level',
      category: 'View',
      keywords: ['zoom', 'out', 'reduce', 'scale'],
      icon: '🔍-',
      shortcut: 'Ctrl+-',
      action: () => setLastExecutedCommand('Zoom Out'),
    },
    {
      id: 'reset-zoom',
      title: 'Reset Zoom',
      description: 'Reset zoom to 100%',
      category: 'View',
      keywords: ['zoom', 'reset', '100%', 'default'],
      icon: '🔍',
      shortcut: 'Ctrl+0',
      action: () => setLastExecutedCommand('Reset Zoom'),
    },

    // Navigation
    {
      id: 'go-to-line',
      title: 'Go to Line',
      description: 'Jump to a specific line number',
      category: 'Navigation',
      keywords: ['goto', 'line', 'jump', 'navigate'],
      icon: '📍',
      shortcut: 'Ctrl+G',
      action: () => setLastExecutedCommand('Go to Line'),
    },
    {
      id: 'find',
      title: 'Find',
      description: 'Search for text in the current file',
      category: 'Navigation',
      keywords: ['find', 'search', 'locate', 'text'],
      icon: '🔍',
      shortcut: 'Ctrl+F',
      action: () => setLastExecutedCommand('Find'),
    },
    {
      id: 'replace',
      title: 'Replace',
      description: 'Find and replace text in the current file',
      category: 'Navigation',
      keywords: ['replace', 'find', 'substitute', 'text'],
      icon: '🔄',
      shortcut: 'Ctrl+H',
      action: () => setLastExecutedCommand('Replace'),
    },
    {
      id: 'find-files',
      title: 'Find in Files',
      description: 'Search for text across all files',
      category: 'Navigation',
      keywords: ['find', 'files', 'search', 'global'],
      icon: '📁🔍',
      shortcut: 'Ctrl+Shift+F',
      action: () => setLastExecutedCommand('Find in Files'),
    },

    // Settings
    {
      id: 'preferences',
      title: 'Preferences',
      description: 'Open application preferences',
      category: 'Settings',
      keywords: ['preferences', 'settings', 'options', 'config'],
      icon: '⚙️',
      shortcut: 'Ctrl+,',
      action: () => setLastExecutedCommand('Preferences'),
    },
    {
      id: 'keyboard-shortcuts',
      title: 'Keyboard Shortcuts',
      description: 'View and edit keyboard shortcuts',
      category: 'Settings',
      keywords: ['keyboard', 'shortcuts', 'hotkeys', 'keys'],
      icon: '⌨️',
      shortcut: 'Ctrl+K Ctrl+S',
      action: () => setLastExecutedCommand('Keyboard Shortcuts'),
    },
    {
      id: 'toggle-theme',
      title: 'Toggle Theme',
      description: 'Switch between light and dark theme',
      category: 'Settings',
      keywords: ['theme', 'dark', 'light', 'toggle', 'mode'],
      icon: '🌙',
      shortcut: 'Ctrl+Shift+T',
      action: () => setLastExecutedCommand('Toggle Theme'),
    },

    // Git Operations
    {
      id: 'git-status',
      title: 'Git Status',
      description: 'Show the status of the git repository',
      category: 'Git',
      keywords: ['git', 'status', 'repository', 'version'],
      icon: '📊',
      shortcut: 'Ctrl+Shift+G',
      action: () => setLastExecutedCommand('Git Status'),
    },
    {
      id: 'git-commit',
      title: 'Git Commit',
      description: 'Commit staged changes to git',
      category: 'Git',
      keywords: ['git', 'commit', 'save', 'changes'],
      icon: '✅',
      shortcut: 'Ctrl+Enter',
      action: () => setLastExecutedCommand('Git Commit'),
    },
    {
      id: 'git-push',
      title: 'Git Push',
      description: 'Push commits to remote repository',
      category: 'Git',
      keywords: ['git', 'push', 'upload', 'remote'],
      icon: '⬆️',
      shortcut: 'Ctrl+Shift+P',
      action: () => setLastExecutedCommand('Git Push'),
    },
    {
      id: 'git-pull',
      title: 'Git Pull',
      description: 'Pull latest changes from remote repository',
      category: 'Git',
      keywords: ['git', 'pull', 'download', 'sync'],
      icon: '⬇️',
      shortcut: 'Ctrl+Shift+U',
      action: () => setLastExecutedCommand('Git Pull'),
    },
  ];

  const categories: CommandCategory[] = [
    { id: 'file', label: 'File', icon: '📁' },
    { id: 'edit', label: 'Edit', icon: '✏️' },
    { id: 'view', label: 'View', icon: '👁️' },
    { id: 'navigation', label: 'Navigation', icon: '🧭' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
    { id: 'git', label: 'Git', icon: '🌿' },
  ];

  const handleOpenPalette = () => {
    setIsOpen(true);
  };

  const handleClosePalette = () => {
    setIsOpen(false);
  };

  // Custom command render function
  const renderCustomCommand = (command: CommandItem, isSelected: boolean) => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: spacing[3],
        borderRadius: '8px',
        cursor: 'pointer',
        backgroundColor: isSelected ? '#3b82f6' : 'transparent',
        color: isSelected ? 'white' : 'inherit',
        transition: 'all 0.2s ease',
        marginBottom: spacing[1],
      }}
    >
      <div style={{ marginRight: spacing[3], fontSize: '20px' }}>
        {command.icon}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: '600', marginBottom: '2px' }}>
          {command.title}
        </div>
        {command.description && (
          <div style={{ fontSize: '12px', opacity: 0.8 }}>
            {command.description}
          </div>
        )}
      </div>
      {command.shortcut && (
        <div style={{ fontSize: '11px', opacity: 0.7 }}>
          {command.shortcut}
        </div>
      )}
    </div>
  );

  return (
    <Container>
      <Section>
        <Typography variant="h1" style={{ marginBottom: spacing[6] }}>
          Command Palette
        </Typography>
        
        <Typography variant="body" style={{ marginBottom: spacing[8], color: '#666' }}>
          A searchable command palette component for quick access to application commands and actions.
        </Typography>

        {/* Basic Usage */}
        <Card style={{ marginBottom: spacing[8] }}>
          <CardContent>
            <Typography variant="h3" style={{ marginBottom: spacing[4] }}>
              Basic Usage
            </Typography>
            
            <div style={{ marginBottom: spacing[6] }}>
              <Button onClick={handleOpenPalette} variant="primary">
                Open Command Palette
              </Button>
            </div>

            {lastExecutedCommand && (
              <div
                style={{
                  padding: spacing[4],
                  backgroundColor: '#f0f9ff',
                  border: '1px solid #0ea5e9',
                  borderRadius: '8px',
                  marginTop: spacing[4],
                }}
              >
                <Typography variant="body" style={{ color: '#0c4a6e' }}>
                  Last executed command: <strong>{lastExecutedCommand}</strong>
                </Typography>
              </div>
            )}

            <div style={{ marginTop: spacing[6] }}>
              <Typography variant="body" weight="medium" style={{ marginBottom: spacing[2] }}>
                Try these keyboard shortcuts:
              </Typography>
              <ul style={{ paddingLeft: spacing[6], color: '#666' }}>
                <li><kbd style={{ padding: '2px 6px', backgroundColor: '#f1f5f9', borderRadius: '4px', fontSize: '12px' }}>Ctrl+K</kbd> - Open Command Palette</li>
                <li><kbd style={{ padding: '2px 6px', backgroundColor: '#f1f5f9', borderRadius: '4px', fontSize: '12px' }}>↑↓</kbd> - Navigate commands</li>
                <li><kbd style={{ padding: '2px 6px', backgroundColor: '#f1f5f9', borderRadius: '4px', fontSize: '12px' }}>Enter</kbd> - Execute command</li>
                <li><kbd style={{ padding: '2px 6px', backgroundColor: '#f1f5f9', borderRadius: '4px', fontSize: '12px' }}>Esc</kbd> - Close palette</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <Card style={{ marginBottom: spacing[8] }}>
          <CardContent>
            <Typography variant="h3" style={{ marginBottom: spacing[4] }}>
              Features
            </Typography>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: spacing[6] }}>
              <div>
                <Typography variant="h4" style={{ marginBottom: spacing[3], color: '#3b82f6' }}>
                  🔍 Smart Search
                </Typography>
                <Typography variant="body" style={{ color: '#666' }}>
                  Search by title, description, or keywords. The palette filters results in real-time as you type.
                </Typography>
              </div>
              
              <div>
                <Typography variant="h4" style={{ marginBottom: spacing[3], color: '#3b82f6' }}>
                  ⌨️ Keyboard Navigation
                </Typography>
                <Typography variant="body" style={{ color: '#666' }}>
                  Full keyboard support with arrow keys for navigation and Enter to execute commands.
                </Typography>
              </div>
              
              <div>
                <Typography variant="h4" style={{ marginBottom: spacing[3], color: '#3b82f6' }}>
                  🏷️ Categories
                </Typography>
                <Typography variant="body" style={{ color: '#666' }}>
                  Commands are organized by categories for better discoverability and organization.
                </Typography>
              </div>
              
              <div>
                <Typography variant="h4" style={{ marginBottom: spacing[3], color: '#3b82f6' }}>
                  ⚡ Keyboard Shortcuts
                </Typography>
                <Typography variant="body" style={{ color: '#666' }}>
                  Display keyboard shortcuts for each command to help users learn and remember them.
                </Typography>
              </div>
              
              <div>
                <Typography variant="h4" style={{ marginBottom: spacing[3], color: '#3b82f6' }}>
                  🎨 Custom Rendering
                </Typography>
                <Typography variant="body" style={{ color: '#666' }}>
                  Support for custom command rendering functions to match your application's design.
                </Typography>
              </div>
              
              <div>
                <Typography variant="h4" style={{ marginBottom: spacing[3], color: '#3b82f6' }}>
                  ♿ Accessible
                </Typography>
                <Typography variant="body" style={{ color: '#666' }}>
                  Built with accessibility in mind, supporting screen readers and keyboard navigation.
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sample Commands */}
        <Card style={{ marginBottom: spacing[8] }}>
          <CardContent>
            <Typography variant="h3" style={{ marginBottom: spacing[4] }}>
              Sample Commands ({commands.length} total)
            </Typography>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: spacing[4] }}>
              {categories.map((category) => {
                const categoryCommands = commands.filter(cmd => cmd.category === category.label);
                return (
                  <div key={category.id} style={{ marginBottom: spacing[4] }}>
                    <Typography variant="body" weight="medium" style={{ marginBottom: spacing[2], color: '#3b82f6' }}>
                      {category.icon} {category.label} ({categoryCommands.length})
                    </Typography>
                    <div style={{ fontSize: '12px', color: '#666', lineHeight: 1.5 }}>
                      {categoryCommands.slice(0, 3).map(cmd => cmd.title).join(', ')}
                      {categoryCommands.length > 3 && ` +${categoryCommands.length - 3} more`}
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Command Palette Component */}
        <CommandPalette
          isOpen={isOpen}
          commands={commands}
          categories={categories}
          onClose={handleClosePalette}
          title="Quick Actions"
          placeholder="Type a command or search..."
        />
      </Section>
    </Container>
  );
};

export default CommandPaletteDemo;
