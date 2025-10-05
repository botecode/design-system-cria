import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { MagnifyingGlass as Search, CaretUp as ArrowUp, CaretDown as ArrowDown, Command } from 'phosphor-react';
import { colors, spacing, radii, shadows, typography } from '../../tokens';
import { Typography } from '../Typography';
import { Card, CardContent } from '../Card';

export interface CommandItem {
  id: string;
  title: string;
  description?: string;
  category?: string;
  keywords?: string[];
  icon?: string;
  shortcut?: string;
  action: () => void;
}

export interface CommandCategory {
  id: string;
  label: string;
  icon?: string;
}

export interface CommandPaletteProps {
  /**
   * Whether the command palette is open
   */
  isOpen: boolean;
  
  /**
   * Array of available commands
   */
  commands: CommandItem[];
  
  /**
   * Array of command categories
   */
  categories?: CommandCategory[];
  
  /**
   * Callback when the palette is closed
   */
  onClose: () => void;
  
  /**
   * Custom title for the palette
   */
  title?: string;
  
  /**
   * Custom placeholder text for search input
   */
  placeholder?: string;
  
  /**
   * Custom className
   */
  className?: string;
  
  /**
   * Custom styles
   */
  style?: React.CSSProperties;
  
  /**
   * Custom render function for commands
   */
  renderCommand?: (command: CommandItem, isSelected: boolean) => React.ReactNode;
}

/**
 * CommandPalette - A searchable command palette component
 * 
 * Features:
 * - Searchable command interface
 * - Keyboard navigation (arrow keys, enter, escape)
 * - Category grouping
 * - Keyboard shortcuts display
 * - Custom command rendering
 * - Accessibility compliant
 * 
 * @example
 * ```tsx
 * <CommandPalette
 *   isOpen={isOpen}
 *   commands={[
 *     {
 *       id: '1',
 *       title: 'Create Project',
 *       description: 'Start a new project',
 *       category: 'Actions',
 *       shortcut: 'Ctrl+N',
 *       action: () => console.log('Creating project')
 *     }
 *   ]}
 *   categories={[
 *     { id: 'actions', label: 'Actions', icon: '⚡' }
 *   ]}
 *   onClose={() => setIsOpen(false)}
 * />
 * ```
 */
export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  commands,
  categories = [],
  onClose,
  title = 'Command Palette',
  placeholder = 'Search commands...',
  className = '',
  style,
  renderCommand,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Filter commands based on search query
  const filteredCommands = useMemo(() => {
    if (!searchQuery.trim()) return commands;

    const query = searchQuery.toLowerCase();
    return commands.filter(command => {
      const titleMatch = command.title.toLowerCase().includes(query);
      const descriptionMatch = command.description?.toLowerCase().includes(query);
      const keywordMatch = command.keywords?.some(keyword => 
        keyword.toLowerCase().includes(query)
      );
      
      return titleMatch || descriptionMatch || keywordMatch;
    });
  }, [commands, searchQuery]);

  // Group commands by category
  const groupedCommands = useMemo(() => {
    if (categories.length === 0) {
      return { 'All Commands': filteredCommands };
    }

    const grouped: Record<string, CommandItem[]> = {};
    
    filteredCommands.forEach(command => {
      const categoryLabel = command.category || 'Other';
      if (!grouped[categoryLabel]) {
        grouped[categoryLabel] = [];
      }
      grouped[categoryLabel].push(command);
    });

    return grouped;
  }, [filteredCommands, categories]);

  // Reset selected index when search changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [searchQuery]);

  // Reset search when palette opens/closes
  useEffect(() => {
    if (isOpen) {
      setSearchQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    switch (event.key) {
      case 'Escape':
        onClose();
        break;
      case 'ArrowDown':
        event.preventDefault();
        setSelectedIndex(prev => 
          Math.min(prev + 1, filteredCommands.length - 1)
        );
        break;
      case 'ArrowUp':
        event.preventDefault();
        setSelectedIndex(prev => Math.max(prev - 1, 0));
        break;
      case 'Enter':
        event.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
          onClose();
        }
        break;
    }
  }, [filteredCommands, selectedIndex, onClose]);

  // Handle command click
  const handleCommandClick = useCallback((command: CommandItem) => {
    command.action();
    onClose();
  }, [onClose]);

  // Handle overlay click
  const handleOverlayClick = useCallback((event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      data-testid="command-palette-overlay"
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: '10vh',
        zIndex: 1000,
      }}
      onClick={handleOverlayClick}
    >
      <Card
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={className}
        style={{
          width: '100%',
          maxWidth: '600px',
          margin: spacing[4],
          maxHeight: '70vh',
          overflow: 'hidden',
          ...style,
        }}
      >
        <CardContent style={{ padding: 0 }}>
          {/* Header */}
          <div
            style={{
              padding: spacing[6],
              borderBottom: `1px solid ${colors.gray[200]}`,
            }}
          >
            <Typography
              variant="h3"
              style={{
                marginBottom: spacing[4],
                color: colors.gray[900],
                fontWeight: typography.fontWeight.semiBold,
              }}
            >
              {title}
            </Typography>

            {/* Search Input */}
            <div
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Search
                size={20}
                color={colors.gray[400]}
                style={{
                  position: 'absolute',
                  left: spacing[3],
                  zIndex: 1,
                }}
              />
              <input
                type="text"
                placeholder={placeholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                autoFocus
                style={{
                  width: '100%',
                  padding: `${spacing[3]} ${spacing[3]} ${spacing[3]} ${spacing[10]}`,
                  border: `1px solid ${colors.gray[300]}`,
                  borderRadius: radii.md,
                  fontSize: typography.fontSize.base,
                  fontFamily: typography.fontFamily.primary,
                  backgroundColor: colors.white,
                  outline: 'none',
                  transition: 'border-color 0.2s ease',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = colors.primary;
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = colors.gray[300];
                }}
              />
            </div>
          </div>

          {/* Commands List */}
          <div
            style={{
              maxHeight: '400px',
              overflowY: 'auto',
              padding: spacing[2],
            }}
          >
            {filteredCommands.length === 0 ? (
              <div
                style={{
                  padding: spacing[8],
                  textAlign: 'center',
                  color: colors.gray[500],
                }}
              >
                <Typography variant="body" style={{ color: colors.gray[500] }}>
                  {commands.length === 0 ? 'No commands available' : 'No commands found'}
                </Typography>
              </div>
            ) : (
              Object.entries(groupedCommands).map(([categoryLabel, categoryCommands]) => (
                <div key={categoryLabel} style={{ marginBottom: spacing[4] }}>
                  {/* Category Header */}
                  <div
                    style={{
                      padding: `${spacing[2]} ${spacing[3]}`,
                      marginBottom: spacing[2],
                      backgroundColor: colors.gray[50],
                      borderRadius: radii.sm,
                    }}
                  >
                    <Typography
                      variant="caption"
                      style={{
                        color: colors.gray[600],
                        fontWeight: typography.fontWeight.semiBold,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {categoryLabel}
                    </Typography>
                  </div>

                  {/* Commands in Category */}
                  {categoryCommands.map((command, index) => {
                    const globalIndex = filteredCommands.indexOf(command);
                    const isSelected = globalIndex === selectedIndex;

                    if (renderCommand) {
                      return (
                        <div
                          key={command.id}
                          onClick={() => handleCommandClick(command)}
                        >
                          {renderCommand(command, isSelected)}
                        </div>
                      );
                    }

                    return (
                      <div
                        key={command.id}
                        onClick={() => handleCommandClick(command)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          padding: spacing[3],
                          borderRadius: radii.md,
                          cursor: 'pointer',
                          backgroundColor: isSelected ? colors.primary + '10' : 'transparent',
                          border: isSelected ? `1px solid ${colors.primary + '30'}` : '1px solid transparent',
                          transition: 'all 0.2s ease',
                          marginBottom: spacing[1],
                        }}
                        onMouseEnter={(e) => {
                          if (!isSelected) {
                            e.currentTarget.style.backgroundColor = colors.gray[50];
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isSelected) {
                            e.currentTarget.style.backgroundColor = 'transparent';
                          }
                        }}
                      >
                        {/* Icon */}
                        {command.icon && (
                          <div
                            style={{
                              width: '32px',
                              height: '32px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              marginRight: spacing[3],
                              fontSize: '16px',
                            }}
                          >
                            {command.icon}
                          </div>
                        )}

                        {/* Content */}
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <Typography
                            variant="body"
                            style={{
                              fontWeight: typography.fontWeight.medium,
                              color: colors.gray[900],
                              marginBottom: spacing[1],
                            }}
                          >
                            {command.title}
                          </Typography>
                          {command.description && (
                            <Typography
                              variant="caption"
                              style={{
                                color: colors.gray[600],
                                fontSize: '12px',
                                lineHeight: 1.4,
                              }}
                            >
                              {command.description}
                            </Typography>
                          )}
                        </div>

                        {/* Shortcut */}
                        {command.shortcut && (
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: spacing[1],
                              padding: `${spacing[1]} ${spacing[2]}`,
                              backgroundColor: colors.gray[100],
                              borderRadius: radii.sm,
                              fontSize: '11px',
                              fontFamily: typography.fontFamily.mono,
                              color: colors.gray[600],
                            }}
                          >
                            <Command size={12} />
                            <span>{command.shortcut}</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          <div
            style={{
              padding: spacing[4],
              borderTop: `1px solid ${colors.gray[200]}`,
              backgroundColor: colors.gray[50],
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '12px',
                color: colors.gray[500],
              }}
            >
              <div style={{ display: 'flex', gap: spacing[4] }}>
                <span>
                  <ArrowUp size={12} style={{ marginRight: spacing[1] }} />
                  <ArrowDown size={12} style={{ marginRight: spacing[1] }} />
                  Navigate
                </span>
                <span>
                  <kbd style={{ padding: '2px 4px', backgroundColor: colors.gray[200], borderRadius: '3px' }}>
                    Enter
                  </kbd>
                  {' '}Select
                </span>
                <span>
                  <kbd style={{ padding: '2px 4px', backgroundColor: colors.gray[200], borderRadius: '3px' }}>
                    Esc
                  </kbd>
                  {' '}Close
                </span>
              </div>
              <span>{filteredCommands.length} command{filteredCommands.length !== 1 ? 's' : ''}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CommandPalette;
