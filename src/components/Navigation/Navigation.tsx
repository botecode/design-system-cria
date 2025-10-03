import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Typography } from '../Typography';
import { Button } from '../Button';

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
}

export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
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
  sidebar?: SidebarProps;
  
  /**
   * Topbar configuration
   */
  topbar?: TopbarProps;
  
  /**
   * Layout variant
   */
  variant?: 'sidebar-only' | 'topbar-only' | 'both';
}

const Sidebar: React.FC<SidebarProps> = ({
  items,
  activeRoute,
  collapsed = false,
  onToggle,
  showToggle = true,
  className,
  style,
  ...props
}) => {
  const [isMobile, setIsMobile] = useState(false);

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
      {showToggle && (
        <div className="cria-sidebar__header">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleToggle}
            aria-label="Toggle sidebar"
            className="cria-sidebar__toggle"
          >
            {collapsed ? '→' : '←'}
          </Button>
        </div>
      )}

      <div className="cria-sidebar__content">
        <ul className="cria-sidebar__items" role="menubar">
          {items.map((item, index) => (
            <li key={item.id} className="cria-sidebar__item-wrapper">
              <a
                href={item.href}
                className={[
                  'cria-sidebar__item',
                  activeRoute === item.href && 'cria-sidebar__item--active',
                  item.disabled && 'cria-sidebar__item--disabled',
                ].filter(Boolean).join(' ')}
                data-nav-item={index}
                tabIndex={item.disabled ? -1 : 0}
                onKeyDown={(e) => handleKeyDown(e, index)}
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
            </li>
          ))}
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
                <Typography variant="h3" weight="bold" color="primary">
                  {brand}
                </Typography>
              </a>
            ) : (
              <Typography variant="h3" weight="bold" color="primary">
                {brand}
              </Typography>
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
            ☰
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
