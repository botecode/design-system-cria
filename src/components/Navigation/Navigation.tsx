import React, { useState, useCallback, useRef, useEffect } from 'react';
import { House, Folder, CheckSquare, Users, ChatCircle, Gear, Question, ArrowLeft, ArrowRight, List, CaretDown, CaretRight, CaretLeft, CaretUp } from 'phosphor-react';
import { CriaTextTitle1 } from '../TextTokens';
import { Button } from '../Button';
import './Navigation.css';

export interface NavigationSubItem {
  /**
   * Unique identifier for the sub-navigation item
   */
  id: string;
  
  /**
   * Label to display in the navigation
   */
  label: string;
  
  /**
   * URL or path for the navigation item
   */
  href: string;
  
  /**
   * Icon to display alongside the label
   */
  icon?: React.ReactNode;
  
  /**
   * Whether the item is disabled
   */
  disabled?: boolean;
  
  /**
   * Badge or count to display
   */
  badge?: React.ReactNode;
  
  /**
   * Click handler for the navigation item
   */
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

export interface NavigationItem {
  /**
   * Unique identifier for the navigation item
   */
  id: string;
  
  /**
   * Label to display in the navigation
   */
  label: string;
  
  /**
   * URL or path for the navigation item (required if no subitems)
   */
  href?: string;
  
  /**
   * Icon to display alongside the label
   */
  icon?: React.ReactNode;
  
  /**
   * Whether the item is disabled
   */
  disabled?: boolean;
  
  /**
   * Badge or count to display
   */
  badge?: React.ReactNode;
  
  /**
   * Click handler for the navigation item
   */
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  
  /**
   * Array of sub-navigation items (for grouping)
   */
  subitems?: NavigationSubItem[];
  
  /**
   * Whether the subitems are expanded by default
   */
  defaultExpanded?: boolean;
}

export interface NavigationSidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Array of navigation items
   */
  items: NavigationItem[];
  
  /**
   * Currently active route
   */
  activeRoute?: string;
  
  /**
   * Whether the sidebar is collapsed
   */
  collapsed?: boolean;
  
  /**
   * Callback when sidebar toggle is triggered
   */
  onToggle?: (collapsed: boolean) => void;
  
  /**
   * Whether to show the toggle button
   */
  showToggle?: boolean;
  
  /**
   * Title to display at the top of the sidebar
   */
  title?: string;
  
  /**
   * URL for the title link (optional)
   */
  titleHref?: string;
  
  /**
   * Subtitle or additional content to display below the title
   */
  subtitle?: React.ReactNode;
  
  /**
   * Visual theme for the sidebar
   */
  theme?: 'default' | 'primary' | 'secondary';
}

export interface TopbarProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Array of navigation items
   */
  items: NavigationItem[];
  
  /**
   * Currently active route
   */
  activeRoute?: string;
  
  /**
   * Brand/logo text
   */
  brand?: string;
  
  /**
   * Brand/logo link URL
   */
  brandHref?: string;
  
  /**
   * Whether to show mobile menu
   */
  showMobileMenu?: boolean;
  
  /**
   * Callback when mobile menu toggle is triggered
   */
  onMobileMenuToggle?: (open: boolean) => void;
}

export interface NavigationProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Sidebar configuration
   */
  sidebar?: NavigationSidebarProps;
  
  /**
   * Topbar configuration
   */
  topbar?: TopbarProps;
  
  /**
   * Layout variant
   */
  variant?: 'sidebar-only' | 'topbar-only' | 'both';
}

const Sidebar: React.FC<NavigationSidebarProps> = ({
  items,
  activeRoute,
  collapsed = false,
  onToggle,
  showToggle = true,
  title,
  titleHref,
  subtitle,
  className,
  style,
  theme = 'default',
  ...props
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(
    new Set(items.filter(item => item.defaultExpanded).map(item => item.id))
  );

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleToggle = useCallback(() => {
    onToggle?.(!collapsed);
  }, [collapsed, onToggle]);

  const handleSubitemToggle = useCallback((itemId: string) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  }, []);

  const handleKeyDown = useCallback((event: React.KeyboardEvent, index: number) => {
    const currentIndex = index;
    const nextIndex = currentIndex + 1;
    const prevIndex = currentIndex - 1;

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        if (nextIndex < items.length) {
          const nextItem = document.querySelector(`[data-nav-item="${nextIndex}"]`) as HTMLElement;
          nextItem?.focus();
        }
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (prevIndex >= 0) {
          const prevItem = document.querySelector(`[data-nav-item="${prevIndex}"]`) as HTMLElement;
          prevItem?.focus();
        }
        break;
    }
  }, [items.length]);

  const sidebarClasses = [
    'cria-sidebar',
    collapsed && 'cria-sidebar--collapsed',
    !collapsed && 'cria-sidebar--expanded',
    isMobile && 'cria-sidebar--mobile',
    theme !== 'default' && `cria-sidebar--${theme}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <nav
      className={sidebarClasses}
      style={style}
      role="navigation"
      aria-label="Main navigation"
      {...props}
    >
      <div className="cria-sidebar__header">
        {title && !collapsed && (
          <div className="cria-sidebar__title-section">
            {titleHref ? (
              <a href={titleHref} className="cria-sidebar__title-link">
                <CriaTextTitle1>
                  {title}
                </CriaTextTitle1>
              </a>
            ) : (
              <CriaTextTitle1>
                {title}
              </CriaTextTitle1>
            )}
            {subtitle && (
              <div className="cria-sidebar__subtitle-section">
                {subtitle}
              </div>
            )}
          </div>
        )}
        {showToggle && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleToggle}
            aria-label="Toggle sidebar"
            className="cria-sidebar__toggle"
          >
            {collapsed ? <CaretRight size={16} /> : <CaretLeft size={16} />}
          </Button>
        )}
      </div>

      <div className="cria-sidebar__content">
        <ul className="cria-sidebar__items" role="menubar">
          {items.map((item, index) => {
            const hasSubitems = item.subitems && item.subitems.length > 0;
            const isExpanded = expandedItems.has(item.id);
            const isActive = activeRoute === item.href || 
              (hasSubitems && item.subitems?.some(subitem => activeRoute === subitem.href));

            return (
              <li key={item.id} className="cria-sidebar__item-wrapper">
                {hasSubitems ? (
                  <div
                    className={[
                      'cria-sidebar__item',
                      'cria-sidebar__item--group',
                      isActive && 'cria-sidebar__item--active',
                      item.disabled && 'cria-sidebar__item--disabled',
                    ].filter(Boolean).join(' ')}
                    data-nav-item={index}
                    tabIndex={item.disabled ? -1 : 0}
                    role="button"
                    aria-expanded={isExpanded}
                    onClick={() => handleSubitemToggle(item.id)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleSubitemToggle(item.id);
                        return;
                      }
                      handleKeyDown(e, index);
                    }}
                  >
                    {item.icon && (
                      <span className="cria-sidebar__icon" aria-hidden="true">
                        {item.icon}
                      </span>
                    )}
                    {!collapsed && (
                      <>
                        <span className="cria-sidebar__label">
                          {item.label}
                        </span>
                        <span
                          className="cria-sidebar__subitem-toggle"
                          aria-hidden="true"
                        >
                          {isExpanded ? <CaretDown size={16} /> : <CaretRight size={16} />}
                        </span>
                      </>
                    )}
                    {item.badge && (
                      <span className="cria-sidebar__badge" aria-hidden="true">
                        {item.badge}
                      </span>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className={[
                      'cria-sidebar__item',
                      isActive && 'cria-sidebar__item--active',
                      item.disabled && 'cria-sidebar__item--disabled',
                    ].filter(Boolean).join(' ')}
                    data-nav-item={index}
                    tabIndex={item.disabled ? -1 : 0}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    onClick={item.onClick}
                    aria-current={activeRoute === item.href ? 'page' : undefined}
                    aria-disabled={item.disabled}
                  >
                    {item.icon && (
                      <span className="cria-sidebar__icon" aria-hidden="true">
                        {item.icon}
                      </span>
                    )}
                    {!collapsed && (
                      <span className="cria-sidebar__label">
                        {item.label}
                      </span>
                    )}
                    {item.badge && (
                      <span className="cria-sidebar__badge" aria-hidden="true">
                        {item.badge}
                      </span>
                    )}
                  </a>
                )}
                
                {hasSubitems && isExpanded && !collapsed && (
                  <ul className="cria-sidebar__subitems" role="menu">
                    {item.subitems?.map((subitem) => (
                      <li key={subitem.id} className="cria-sidebar__subitem-wrapper">
                        <a
                          href={subitem.href}
                          className={[
                            'cria-sidebar__subitem',
                            activeRoute === subitem.href && 'cria-sidebar__subitem--active',
                            subitem.disabled && 'cria-sidebar__subitem--disabled',
                          ].filter(Boolean).join(' ')}
                          onClick={subitem.onClick}
                          aria-current={activeRoute === subitem.href ? 'page' : undefined}
                          aria-disabled={subitem.disabled}
                        >
                          {subitem.icon && (
                            <span className="cria-sidebar__subitem-icon" aria-hidden="true">
                              {subitem.icon}
                            </span>
                          )}
                          <span className="cria-sidebar__subitem-label">
                            {subitem.label}
                          </span>
                          {subitem.badge && (
                            <span className="cria-sidebar__subitem-badge" aria-hidden="true">
                              {subitem.badge}
                            </span>
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

const Topbar: React.FC<TopbarProps> = ({
  items,
  activeRoute,
  brand,
  brandHref,
  showMobileMenu = false,
  onMobileMenuToggle,
  className,
  style,
  ...props
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMobileMenuToggle = useCallback(() => {
    const newState = !mobileMenuOpen;
    setMobileMenuOpen(newState);
    onMobileMenuToggle?.(newState);
  }, [mobileMenuOpen, onMobileMenuToggle]);

  const handleKeyDown = useCallback((event: React.KeyboardEvent, index: number) => {
    const currentIndex = index;
    const nextIndex = currentIndex + 1;
    const prevIndex = currentIndex - 1;

    switch (event.key) {
      case 'ArrowRight':
        event.preventDefault();
        if (nextIndex < items.length) {
          const nextItem = document.querySelector(`[data-nav-item="${nextIndex}"]`) as HTMLElement;
          nextItem?.focus();
        }
        break;
      case 'ArrowLeft':
        event.preventDefault();
        if (prevIndex >= 0) {
          const prevItem = document.querySelector(`[data-nav-item="${prevIndex}"]`) as HTMLElement;
          prevItem?.focus();
        }
        break;
    }
  }, [items.length]);

  const topbarClasses = [
    'cria-topbar',
    isMobile && 'cria-topbar--mobile',
    className,
  ].filter(Boolean).join(' ');

  const itemsClasses = [
    'cria-topbar__items',
    isMobile && !mobileMenuOpen && 'cria-topbar__items--hidden',
  ].filter(Boolean).join(' ');

  return (
    <nav
      className={topbarClasses}
      style={style}
      role="navigation"
      aria-label="Main navigation"
      {...props}
    >
      <div className="cria-topbar__content">
        {brand && (
          <div className="cria-topbar__brand">
            {brandHref ? (
              <a href={brandHref} className="cria-topbar__brand-link">
                <CriaTextTitle1>
                  {brand}
                </CriaTextTitle1>
              </a>
            ) : (
              <CriaTextTitle1>
                {brand}
              </CriaTextTitle1>
            )}
          </div>
        )}

        <div className={itemsClasses}>
          <ul className="cria-topbar__items-list" role="menubar">
            {items.map((item, index) => (
              <li key={item.id} className="cria-topbar__item-wrapper">
                <a
                  href={item.href}
                  className={[
                    'cria-topbar__item',
                    activeRoute === item.href && 'cria-topbar__item--active',
                    item.disabled && 'cria-topbar__item--disabled',
                  ].filter(Boolean).join(' ')}
                  data-nav-item={index}
                  tabIndex={item.disabled ? -1 : 0}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onClick={item.onClick}
                  aria-current={activeRoute === item.href ? 'page' : undefined}
                  aria-disabled={item.disabled}
                >
                  {item.icon && (
                    <span className="cria-topbar__icon" aria-hidden="true">
                      {item.icon}
                    </span>
                  )}
                  <span className="cria-topbar__label">
                    {item.label}
                  </span>
                  {item.badge && (
                    <span className="cria-topbar__badge" aria-hidden="true">
                      {item.badge}
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {isMobile && (
        <Button
          variant="ghost"
          size="sm"
          onClick={handleMobileMenuToggle}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
          className="cria-topbar__mobile-toggle"
        >
          <List size={16} />
        </Button>
        )}
      </div>

      {isMobile && mobileMenuOpen && (
        <div className="cria-topbar__mobile-menu" role="menu">
          <ul className="cria-topbar__mobile-items">
            {items.map((item) => (
              <li key={item.id} className="cria-topbar__mobile-item-wrapper">
                <a
                  href={item.href}
                  className={[
                    'cria-topbar__mobile-item',
                    activeRoute === item.href && 'cria-topbar__mobile-item--active',
                    item.disabled && 'cria-topbar__mobile-item--disabled',
                  ].filter(Boolean).join(' ')}
                  onClick={item.onClick}
                  aria-current={activeRoute === item.href ? 'page' : undefined}
                  aria-disabled={item.disabled}
                >
                  {item.icon && (
                    <span className="cria-topbar__mobile-icon" aria-hidden="true">
                      {item.icon}
                    </span>
                  )}
                  <span className="cria-topbar__mobile-label">
                    {item.label}
                  </span>
                  {item.badge && (
                    <span className="cria-topbar__mobile-badge" aria-hidden="true">
                      {item.badge}
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

const Navigation: React.FC<NavigationProps> = ({
  sidebar,
  topbar,
  variant = 'both',
  className,
  style,
  ...props
}) => {
  const navigationClasses = [
    'cria-navigation',
    `cria-navigation--${variant}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={navigationClasses} style={style} {...props}>
      {sidebar && (variant === 'sidebar-only' || variant === 'both') && (
        <Sidebar {...sidebar} />
      )}
      {topbar && (variant === 'topbar-only' || variant === 'both') && (
        <Topbar {...topbar} />
      )}
    </div>
  );
};

export { Navigation, Sidebar, Topbar };
