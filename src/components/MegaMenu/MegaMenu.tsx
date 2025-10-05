import React, { useState, useCallback, useRef, useEffect } from 'react';

export interface MegaMenuItem {
  label: string;
  href: string;
  children?: MegaMenuItem[];
  description?: string;
  customDropdown?: React.ReactNode;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
}

export interface MegaMenuCtaButton {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export interface MegaMenuProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Visual variant of the mega menu
   * @default 'default'
   */
  variant?: 'default' | 'dark' | 'light' | 'transparent';
  
  /**
   * Position of the mega menu
   * @default 'static'
   */
  position?: 'static' | 'fixed' | 'sticky';
  
  /**
   * Size of the mega menu
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  
  /**
   * Alignment of menu items
   * @default 'left'
   */
  alignment?: 'left' | 'center' | 'right';
  
  /**
   * Whether to show a border
   * @default false
   */
  border?: boolean;
  
  /**
   * Whether to show a shadow
   * @default false
   */
  shadow?: boolean;
  
  /**
   * Whether to make the mega menu full width
   * @default false
   */
  fullWidth?: boolean;
  
  /**
   * Whether to show loading state
   * @default false
   */
  loading?: boolean;
  
  /**
   * Array of menu items
   */
  items?: MegaMenuItem[];
  
  /**
   * Logo element
   */
  logo?: React.ReactNode;
  
  /**
   * Whether to show search functionality
   * @default false
   */
  showSearch?: boolean;
  
  /**
   * Search placeholder text
   * @default 'Search...'
   */
  searchPlaceholder?: string;
  
  /**
   * Callback function when search input changes
   */
  onSearch?: (query: string) => void;
  
  /**
   * Call to action button configuration
   */
  ctaButton?: MegaMenuCtaButton;
  
  /**
   * Whether to show mobile menu toggle
   * @default false
   */
  showMobileToggle?: boolean;
  
  /**
   * Custom trigger element
   */
  trigger?: React.ReactNode;
  
  /**
   * Callback function when a menu item is clicked
   */
  onItemClick?: (href: string, label: string, item: MegaMenuItem) => void;
  
  /**
   * Children elements
   */
  children?: React.ReactNode;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({
  variant = 'default',
  position = 'static',
  size = 'md',
  alignment = 'left',
  border = false,
  shadow = false,
  fullWidth = false,
  loading = false,
  items = [],
  logo,
  showSearch = false,
  searchPlaceholder = 'Search...',
  onSearch,
  ctaButton,
  showMobileToggle = false,
  trigger,
  onItemClick,
  className = '',
  style = {},
  children,
  ...props
}) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const megaMenuRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Build CSS classes
  const baseClasses = ['cria-mega-menu'];
  
  // Add variant class
  baseClasses.push(`cria-mega-menu--${variant}`);
  
  // Add position class
  baseClasses.push(`cria-mega-menu--position-${position}`);
  
  // Add size class
  baseClasses.push(`cria-mega-menu--size-${size}`);
  
  // Add alignment class
  baseClasses.push(`cria-mega-menu--alignment-${alignment}`);
  
  // Add visual effect classes
  if (border) {
    baseClasses.push('cria-mega-menu--border');
  }
  
  if (shadow) {
    baseClasses.push('cria-mega-menu--shadow');
  }
  
  if (fullWidth) {
    baseClasses.push('cria-mega-menu--full-width');
  }
  
  if (loading) {
    baseClasses.push('cria-mega-menu--loading');
  }
  
  if (mobileMenuOpen) {
    baseClasses.push('cria-mega-menu--mobile-open');
  }
  
  // Add custom className
  if (className) {
    baseClasses.push(className);
  }
  
  const classes = baseClasses.join(' ');
  
  // Handle menu item clicks
  const handleItemClick = useCallback((item: MegaMenuItem, event: React.MouseEvent) => {
    if (onItemClick) {
      event.preventDefault();
      onItemClick(item.href, item.label, item);
    }
  }, [onItemClick]);
  
  // Handle search input changes
  const handleSearchChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    if (onSearch) {
      onSearch(query);
    }
  }, [onSearch]);
  
  // Handle dropdown hover
  const handleMouseEnter = useCallback((itemLabel: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(itemLabel);
  }, []);
  
  // Handle dropdown mouse leave
  const handleMouseLeave = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  }, []);
  
  // Handle mobile menu toggle
  const handleMobileToggle = useCallback(() => {
    setMobileMenuOpen(!mobileMenuOpen);
  }, [mobileMenuOpen]);
  
  // Handle CTA button click
  const handleCtaClick = useCallback((event: React.MouseEvent) => {
    if (ctaButton?.onClick) {
      event.preventDefault();
      ctaButton.onClick();
    }
  }, [ctaButton]);
  
  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  
  // Render menu items
  const renderMenuItem = (item: MegaMenuItem, level: number = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const hasCustomDropdown = !!item.customDropdown;
    const showDropdown = activeDropdown === item.label && (hasChildren || hasCustomDropdown);
    
    return (
      <li key={item.label} className={`cria-mega-menu__item cria-mega-menu__item--level-${level}`}>
        <a
          href={item.href}
          target={item.target || '_self'}
          rel={item.rel}
          onClick={(e) => handleItemClick(item, e)}
          onMouseEnter={() => (hasChildren || hasCustomDropdown) && handleMouseEnter(item.label)}
          onMouseLeave={(hasChildren || hasCustomDropdown) ? handleMouseLeave : undefined}
          className={`cria-mega-menu__link ${(hasChildren || hasCustomDropdown) ? 'cria-mega-menu__link--has-dropdown' : ''}`}
        >
          {item.label}
          {(hasChildren || hasCustomDropdown) && (
            <span className="cria-mega-menu__dropdown-arrow" aria-hidden="true">
              ▼
            </span>
          )}
        </a>
        
        {(hasChildren || hasCustomDropdown) && showDropdown && (
          <div 
            className={`cria-mega-menu__dropdown cria-mega-menu__dropdown--level-${level}`}
            onMouseEnter={() => handleMouseEnter(item.label)}
            onMouseLeave={handleMouseLeave}
            style={{ display: 'block' }}
          >
            {hasCustomDropdown ? (
              item.customDropdown
            ) : (
              <ul className="cria-mega-menu__dropdown-list">
                {item.children?.map((child) => renderMenuItem(child, level + 1))}
              </ul>
            )}
          </div>
        )}
      </li>
    );
  };
  
  return (
    <nav
      ref={megaMenuRef}
      className={classes}
      style={style}
      {...props}
    >
      <div className="cria-mega-menu__container">
        {/* Logo */}
        {logo && (
          <div className="cria-mega-menu__logo">
            {logo}
          </div>
        )}
        
        {/* Custom trigger */}
        {trigger && (
          <div className="cria-mega-menu__trigger">
            {trigger}
          </div>
        )}
        
        {/* Main menu */}
        {items.length > 0 && (
          <ul className="cria-mega-menu__list">
            {items.map((item) => renderMenuItem(item))}
          </ul>
        )}
        
        {/* Search */}
        {showSearch && (
          <div className="cria-mega-menu__search">
            <input
              type="text"
              placeholder={searchPlaceholder}
              value={searchQuery}
              onChange={handleSearchChange}
              className="cria-mega-menu__search-input"
            />
          </div>
        )}
        
        {/* CTA Button */}
        {ctaButton && (
          <div className="cria-mega-menu__cta">
            <a
              href={ctaButton.href || '#'}
              onClick={handleCtaClick}
              className={`cria-mega-menu__cta-button cria-mega-menu__cta-button--${ctaButton.variant || 'primary'} cria-mega-menu__cta-button--${ctaButton.size || 'md'}`}
            >
              {ctaButton.label}
            </a>
          </div>
        )}
        
        {/* Mobile toggle */}
        {showMobileToggle && (
          <button
            onClick={handleMobileToggle}
            className="cria-mega-menu__mobile-toggle"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            <span className="cria-mega-menu__mobile-toggle-icon">
              {mobileMenuOpen ? '✕' : '☰'}
            </span>
          </button>
        )}
      </div>
      
      {/* Mobile menu */}
      {showMobileToggle && mobileMenuOpen && (
        <div className="cria-mega-menu__mobile-menu">
          <div className="cria-mega-menu__mobile-menu-content">
            {items.length > 0 && (
              <ul className="cria-mega-menu__mobile-list">
                {items.map((item) => (
                  <li key={item.label} className="cria-mega-menu__mobile-item">
                    <a
                      href={item.href}
                      target={item.target || '_self'}
                      rel={item.rel}
                      onClick={(e) => handleItemClick(item, e)}
                      className="cria-mega-menu__mobile-link"
                    >
                      {item.label}
                    </a>
                    {item.children && item.children.length > 0 && (
                      <ul className="cria-mega-menu__mobile-sublist">
                        {item.children.map((child) => (
                          <li key={child.label} className="cria-mega-menu__mobile-subitem">
                            <a
                              href={child.href}
                              target={child.target || '_self'}
                              rel={child.rel}
                              onClick={(e) => handleItemClick(child, e)}
                              className="cria-mega-menu__mobile-sublink"
                            >
                              {child.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
            
            {showSearch && (
              <div className="cria-mega-menu__mobile-search">
                <input
                  type="text"
                  placeholder={searchPlaceholder}
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="cria-mega-menu__mobile-search-input"
                />
              </div>
            )}
            
            {ctaButton && (
              <div className="cria-mega-menu__mobile-cta">
                <a
                  href={ctaButton.href || '#'}
                  onClick={handleCtaClick}
                  className="cria-mega-menu__mobile-cta-button"
                >
                  {ctaButton.label}
                </a>
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* Loading overlay */}
      {loading && (
        <div className="cria-mega-menu__loading-overlay">
          <div className="cria-mega-menu__loading-spinner" aria-label="Loading">
            <span>Loading...</span>
          </div>
        </div>
      )}
      
      {/* Children content */}
      {children && (
        <div className="cria-mega-menu__content">
          {children}
        </div>
      )}
    </nav>
  );
};
