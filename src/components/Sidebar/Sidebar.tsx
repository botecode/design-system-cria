import React, { useState, useCallback, useRef, useEffect } from 'react';

export interface SidebarItem {
  /**
   * Unique identifier for the sidebar item
   */
  id: string;
  
  /**
   * Label to display in the sidebar item
   */
  label: React.ReactNode;
  
  /**
   * Content to display when item is active (optional)
   */
  content?: React.ReactNode;
  
  /**
   * Whether the item is disabled
   */
  disabled?: boolean;
  
  /**
   * Icon to display in the sidebar item
   */
  icon?: React.ReactNode;
  
  /**
   * Badge or count to display in the sidebar item
   */
  badge?: React.ReactNode;
  
  /**
   * Nested items for sub-navigation
   */
  children?: SidebarItem[];
  
  /**
   * Whether the item is expanded (for items with children)
   */
  expanded?: boolean;
}

export interface SidebarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /**
   * Array of sidebar items
   */
  items: SidebarItem[];
  
  /**
   * Currently active item ID
   */
  activeItem?: string;
  
  /**
   * Default active item ID (uncontrolled)
   */
  defaultActiveItem?: string;
  
  /**
   * Callback when active item changes
   */
  onChange?: (activeItem: string) => void;
  
  /**
   * Sidebar variant
   */
  variant?: 'default' | 'compact' | 'minimal';
  
  /**
   * Sidebar size
   */
  size?: 'sm' | 'md' | 'lg';
  
  /**
   * Whether to show item content
   */
  showContent?: boolean;
  
  /**
   * Whether the sidebar is collapsible
   */
  collapsible?: boolean;
  
  /**
   * Whether the sidebar is collapsed
   */
  collapsed?: boolean;
  
  /**
   * Callback when collapse state changes
   */
  onCollapseChange?: (collapsed: boolean) => void;
  
  /**
   * Custom class name for the sidebar container
   */
  className?: string;
  
  /**
   * Custom styles for the sidebar container
   */
  style?: React.CSSProperties;
}

/**
 * Sidebar component for navigation and content organization
 */
export const Sidebar: React.FC<SidebarProps> = ({
  items,
  activeItem: controlledActiveItem,
  defaultActiveItem,
  onChange,
  variant = 'default',
  size = 'md',
  showContent = true,
  collapsible = false,
  collapsed: controlledCollapsed,
  onCollapseChange,
  className = '',
  style,
  ...props
}) => {
  // State for uncontrolled mode
  const [internalActiveItem, setInternalActiveItem] = useState<string>(
    defaultActiveItem || items[0]?.id || ''
  );
  
  const [internalCollapsed, setInternalCollapsed] = useState<boolean>(false);
  
  // Determine if component is controlled
  const isControlled = controlledActiveItem !== undefined;
  const activeItem = isControlled ? controlledActiveItem : internalActiveItem;
  
  const isCollapseControlled = controlledCollapsed !== undefined;
  const collapsed = isCollapseControlled ? controlledCollapsed : internalCollapsed;
  
  // Refs for keyboard navigation
  const itemRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const sidebarRef = useRef<HTMLDivElement>(null);
  
  // Handle item change
  const handleItemChange = useCallback((itemId: string) => {
    if (isControlled) {
      onChange?.(itemId);
    } else {
      setInternalActiveItem(itemId);
      onChange?.(itemId);
    }
  }, [isControlled, onChange]);
  
  // Handle collapse toggle
  const handleCollapseToggle = useCallback(() => {
    if (isCollapseControlled) {
      onCollapseChange?.(!collapsed);
    } else {
      setInternalCollapsed(!collapsed);
      onCollapseChange?.(!collapsed);
    }
  }, [isCollapseControlled, collapsed, onCollapseChange]);
  
  // Handle keyboard navigation
  const handleKeyDown = useCallback((event: React.KeyboardEvent, itemId: string) => {
    const flatItems = items.flatMap(item => 
      item.children ? [item, ...item.children] : [item]
    );
    const itemIds = flatItems.map(item => item.id);
    const currentIndex = itemIds.indexOf(itemId);
    
    let nextIndex = currentIndex;
    
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        nextIndex = (currentIndex + 1) % itemIds.length;
        break;
      case 'ArrowUp':
        event.preventDefault();
        nextIndex = (currentIndex - 1 + itemIds.length) % itemIds.length;
        break;
      case 'Home':
        event.preventDefault();
        nextIndex = 0;
        break;
      case 'End':
        event.preventDefault();
        nextIndex = itemIds.length - 1;
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        handleItemChange(itemId);
        return;
      default:
        return;
    }
    
    // Find next enabled item
    while (flatItems[nextIndex]?.disabled && nextIndex !== currentIndex) {
      if (event.key === 'ArrowDown') {
        nextIndex = (nextIndex + 1) % itemIds.length;
      } else {
        nextIndex = (nextIndex - 1 + itemIds.length) % itemIds.length;
      }
    }
    
    const nextItemId = itemIds[nextIndex];
    if (nextItemId) {
      handleItemChange(nextItemId);
      itemRefs.current[nextItemId]?.focus();
    }
  }, [items, handleItemChange]);
  
  // Set initial focus
  useEffect(() => {
    if (activeItem && itemRefs.current[activeItem]) {
      itemRefs.current[activeItem]?.focus();
    }
  }, [activeItem]);
  
  // Generate CSS classes
  const containerClasses = [
    'cria-sidebar',
    `cria-sidebar--${variant}`,
    `cria-sidebar--${size}`,
    collapsed ? 'cria-sidebar--collapsed' : null,
    collapsible ? 'cria-sidebar--collapsible' : null,
    className,
  ].filter(Boolean).join(' ');
  
  const contentClasses = [
    'cria-sidebar__content',
    `cria-sidebar__content--${variant}`,
    `cria-sidebar__content--${size}`,
  ].filter(Boolean).join(' ');
  
  // Find active item content
  const activeItemData = items.find(item => item.id === activeItem) || 
    items.flatMap(item => item.children || []).find(item => item.id === activeItem);
  
  // Render sidebar item
  const renderSidebarItem = (item: SidebarItem, level: number = 0) => {
    const isActive = item.id === activeItem;
    const isDisabled = item.disabled;
    const hasChildren = item.children && item.children.length > 0;
    
    const itemClasses = [
      'cria-sidebar__item',
      `cria-sidebar__item--${variant}`,
      `cria-sidebar__item--${size}`,
      `cria-sidebar__item--level-${level}`,
      isActive ? 'cria-sidebar__item--active' : null,
      isDisabled ? 'cria-sidebar__item--disabled' : null,
      hasChildren ? 'cria-sidebar__item--has-children' : null,
    ].filter(Boolean).join(' ');
    
    return (
      <div key={item.id} className="cria-sidebar__item-wrapper">
        <button
          ref={(el) => { itemRefs.current[item.id] = el; }}
          className={itemClasses}
          role="menuitem"
          aria-selected={isActive}
          aria-disabled={isDisabled}
          aria-expanded={hasChildren ? (item.expanded ? 'true' : 'false') : undefined}
          tabIndex={isActive ? 0 : -1}
          disabled={isDisabled}
          onClick={() => !isDisabled && handleItemChange(item.id)}
          onKeyDown={(e) => !isDisabled && handleKeyDown(e, item.id)}
        >
          {item.icon && (
            <span className="cria-sidebar__item-icon">
              {item.icon}
            </span>
          )}
          
          {!collapsed && (
            <span className="cria-sidebar__item-label">
              {item.label}
            </span>
          )}
          
          {!collapsed && item.badge && (
            <span className="cria-sidebar__item-badge">
              {item.badge}
            </span>
          )}
          
          {hasChildren && !collapsed && (
            <span className="cria-sidebar__item-arrow">
              {item.expanded ? '▼' : '▶'}
            </span>
          )}
        </button>
        
        {hasChildren && !collapsed && item.expanded && (
          <div className="cria-sidebar__submenu">
            {item.children?.map(child => renderSidebarItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };
  
  return (
    <div
      ref={sidebarRef}
      className={containerClasses}
      style={style}
      role="navigation"
      aria-label="Sidebar navigation"
      {...props}
    >
      {/* Collapse Toggle */}
      {collapsible && (
        <button
          className="cria-sidebar__toggle"
          onClick={handleCollapseToggle}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? '▶' : '◀'}
        </button>
      )}
      
      {/* Sidebar Items */}
      <div className="cria-sidebar__items" role="menu">
        {items.map(item => renderSidebarItem(item))}
      </div>
      
      {/* Sidebar Content */}
      {showContent && activeItemData?.content && (
        <div
          className={contentClasses}
          role="main"
          aria-labelledby={`cria-sidebar-item-${activeItemData.id}`}
        >
          {activeItemData.content}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
