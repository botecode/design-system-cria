import React, { useState, useCallback, useRef, useEffect } from 'react';

export interface TabItem {
  /**
   * Unique identifier for the tab
   */
  id: string;
  
  /**
   * Label to display in the tab
   */
  label: React.ReactNode;
  
  /**
   * Content to display when tab is active
   */
  content: React.ReactNode;
  
  /**
   * Whether the tab is disabled
   */
  disabled?: boolean;
  
  /**
   * Icon to display in the tab
   */
  icon?: React.ReactNode;
  
  /**
   * Badge or count to display in the tab
   */
  badge?: React.ReactNode;
}

export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /**
   * Array of tab items
   */
  items: TabItem[];
  
  /**
   * Currently active tab ID
   */
  activeTab?: string;
  
  /**
   * Default active tab ID (uncontrolled)
   */
  defaultActiveTab?: string;
  
  /**
   * Callback when active tab changes
   */
  onChange?: (activeTab: string) => void;
  
  /**
   * Tab variant
   */
  variant?: 'default' | 'pills' | 'underline' | 'cards';
  
  /**
   * Tab size
   */
  size?: 'sm' | 'md' | 'lg';
  
  /**
   * Tab orientation (horizontal only for tabs)
   */
  orientation?: 'horizontal';
  
  /**
   * Whether tabs are full width
   */
  fullWidth?: boolean;
  
  /**
   * Whether to show tab content
   */
  showContent?: boolean;
  
  /**
   * Custom class name for the tabs container
   */
  className?: string;
  
  /**
   * Custom styles for the tabs container
   */
  style?: React.CSSProperties;
}

/**
 * Tabs component for organizing content into multiple panels
 */
export const Tabs: React.FC<TabsProps> = ({
  items,
  activeTab: controlledActiveTab,
  defaultActiveTab,
  onChange,
  variant = 'default',
  size = 'md',
  orientation = 'horizontal',
  fullWidth = false,
  showContent = true,
  className = '',
  style,
  ...props
}) => {
  // State for uncontrolled mode
  const [internalActiveTab, setInternalActiveTab] = useState<string>(
    defaultActiveTab || items[0]?.id || ''
  );
  
  // Determine if component is controlled
  const isControlled = controlledActiveTab !== undefined;
  const activeTab = isControlled ? controlledActiveTab : internalActiveTab;
  
  // Refs for keyboard navigation
  const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const tabListRef = useRef<HTMLDivElement>(null);
  
  // Handle tab change
  const handleTabChange = useCallback((tabId: string) => {
    if (isControlled) {
      onChange?.(tabId);
    } else {
      setInternalActiveTab(tabId);
      onChange?.(tabId);
    }
  }, [isControlled, onChange]);
  
  // Handle keyboard navigation
  const handleKeyDown = useCallback((event: React.KeyboardEvent, tabId: string) => {
    const tabIds = items.map(item => item.id);
    const currentIndex = tabIds.indexOf(tabId);
    
    let nextIndex = currentIndex;
    
    switch (event.key) {
      case 'ArrowRight':
        event.preventDefault();
        nextIndex = (currentIndex + 1) % tabIds.length;
        break;
      case 'ArrowLeft':
        event.preventDefault();
        nextIndex = (currentIndex - 1 + tabIds.length) % tabIds.length;
        break;
      case 'Home':
        event.preventDefault();
        nextIndex = 0;
        break;
      case 'End':
        event.preventDefault();
        nextIndex = tabIds.length - 1;
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        handleTabChange(tabId);
        return;
      default:
        return;
    }
    
    // Find next enabled tab
    while (items[nextIndex]?.disabled && nextIndex !== currentIndex) {
      if (event.key === 'ArrowRight') {
        nextIndex = (nextIndex + 1) % tabIds.length;
      } else {
        nextIndex = (nextIndex - 1 + tabIds.length) % tabIds.length;
      }
    }
    
    const nextTabId = tabIds[nextIndex];
    if (nextTabId) {
      handleTabChange(nextTabId);
      tabRefs.current[nextTabId]?.focus();
    }
  }, [items, handleTabChange]);
  
  // Set initial focus
  useEffect(() => {
    if (activeTab && tabRefs.current[activeTab]) {
      tabRefs.current[activeTab]?.focus();
    }
  }, [activeTab]);
  
  // Generate CSS classes
  const containerClasses = [
    'cria-tabs',
    `cria-tabs--${variant}`,
    `cria-tabs--${size}`,
    `cria-tabs--${orientation}`,
    fullWidth ? 'cria-tabs--full-width' : null,
    className,
  ].filter(Boolean).join(' ');
  
  const tabListClasses = [
    'cria-tabs__list',
    `cria-tabs__list--${variant}`,
    `cria-tabs__list--${size}`,
    `cria-tabs__list--${orientation}`,
    fullWidth ? 'cria-tabs__list--full-width' : null,
  ].filter(Boolean).join(' ');
  
  const contentClasses = [
    'cria-tabs__content',
    `cria-tabs__content--${variant}`,
    `cria-tabs__content--${size}`,
  ].filter(Boolean).join(' ');
  
  // Find active tab content
  const activeTabItem = items.find(item => item.id === activeTab);
  
  return (
    <div
      className={containerClasses}
      style={style}
      {...props}
    >
      {/* Tab List */}
      <div
        ref={tabListRef}
        className={tabListClasses}
        role="tablist"
        aria-orientation={orientation as "horizontal" | "vertical"}
      >
        {items.map((item) => {
          const isActive = item.id === activeTab;
          const isDisabled = item.disabled;
          
          const tabClasses = [
            'cria-tabs__tab',
            `cria-tabs__tab--${variant}`,
            `cria-tabs__tab--${size}`,
            isActive ? 'cria-tabs__tab--active' : null,
            isDisabled ? 'cria-tabs__tab--disabled' : null,
            fullWidth ? 'cria-tabs__tab--full-width' : null,
          ].filter(Boolean).join(' ');
          
          return (
            <button
              key={item.id}
              ref={(el) => { tabRefs.current[item.id] = el; }}
              className={tabClasses}
              role="tab"
              aria-selected={isActive}
              aria-controls={`cria-tab-panel-${item.id}`}
              aria-disabled={isDisabled}
              id={`cria-tab-${item.id}`}
              tabIndex={isActive ? 0 : -1}
              disabled={isDisabled}
              onClick={() => !isDisabled && handleTabChange(item.id)}
              onKeyDown={(e) => !isDisabled && handleKeyDown(e, item.id)}
            >
              {item.icon && (
                <span className="cria-tabs__tab-icon">
                  {item.icon}
                </span>
              )}
              
              <span className="cria-tabs__tab-label">
                {item.label}
              </span>
              
              {item.badge && (
                <span className="cria-tabs__tab-badge">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
      
      {/* Tab Content */}
      {showContent && activeTabItem && (
        <div
          className={contentClasses}
          role="tabpanel"
          id={`cria-tab-panel-${activeTabItem.id}`}
          aria-labelledby={`cria-tab-${activeTabItem.id}`}
        >
          {activeTabItem.content}
        </div>
      )}
    </div>
  );
};

export default Tabs;
