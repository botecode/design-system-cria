import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Button } from '../Button';
import { Badge } from '../Badge';
import { List, X, MagnifyingGlass, Bell, User } from 'phosphor-react';
import { colors, spacing, radii, shadows } from '../../tokens';

export interface TopbarNavigationItem {
  id: string;
  label: string;
  href?: string;
  icon?: React.ReactNode;
  onClick?: (id: string) => void;
  disabled?: boolean;
  badge?: React.ReactNode;
}

export interface TopbarProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Logo component or element
   */
  logo?: React.ReactNode;
  
  /**
   * Navigation items
   */
  navigation?: TopbarNavigationItem[];
  
  /**
   * Action buttons or elements
   */
  actions?: React.ReactNode[];
  
  /**
   * Search component
   */
  search?: React.ReactNode;
  
  /**
   * User menu component
   */
  userMenu?: React.ReactNode;
  
  /**
   * Notifications component
   */
  notifications?: React.ReactNode;
  
  /**
   * Active navigation item ID
   */
  activeItem?: string;
  
  /**
   * Topbar variant
   */
  variant?: 'default' | 'primary' | 'secondary' | 'minimal';
  
  /**
   * Topbar size
   */
  size?: 'sm' | 'md' | 'lg';
  
  /**
   * Topbar position
   */
  position?: 'static' | 'sticky' | 'fixed';
  
  /**
   * Whether the topbar is collapsed (mobile)
   */
  collapsed?: boolean;
  
  /**
   * Whether mobile menu is open
   */
  mobileMenuOpen?: boolean;
  
  /**
   * Callback when mobile menu toggle is clicked
   */
  onMobileToggle?: (open: boolean) => void;
  
  /**
   * Callback when logo is clicked
   */
  onLogoClick?: () => void;
  
  /**
   * Callback when search is focused
   */
  onSearchFocus?: () => void;
  
  /**
   * Whether to show border
   */
  showBorder?: boolean;
  
  /**
   * Whether to show shadow
   */
  showShadow?: boolean;
  
  /**
   * Whether to use full width
   */
  fullWidth?: boolean;
  
  /**
   * Custom z-index
   */
  zIndex?: number;
  
  /**
   * Custom header content
   */
  headerContent?: React.ReactNode;
  
  /**
   * Custom footer content
   */
  footerContent?: React.ReactNode;
  
  /**
   * Loading state
   */
  loading?: boolean;
  
  /**
   * Custom class name
   */
  className?: string;
  
  /**
   * Custom styles
   */
  style?: React.CSSProperties;
}

/**
 * Topbar component for global navigation header
 */
export const Topbar: React.FC<TopbarProps> = ({
  logo,
  navigation = [],
  actions = [],
  search,
  userMenu,
  notifications,
  activeItem,
  variant = 'default',
  size = 'md',
  position = 'static',
  collapsed = false,
  mobileMenuOpen = false,
  onMobileToggle,
  onLogoClick,
  onSearchFocus,
  showBorder = false,
  showShadow = false,
  fullWidth = false,
  zIndex,
  headerContent,
  footerContent,
  loading = false,
  className = '',
  style,
  ...props
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [internalMobileMenuOpen, setInternalMobileMenuOpen] = useState(false);
  const topbarRef = useRef<HTMLElement>(null);
  const navigationRef = useRef<HTMLElement>(null);

  // Handle responsive behavior
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // For testing purposes, also check if collapsed prop is true to show mobile toggle
  const shouldShowMobileToggle = isMobile || collapsed;

  // Handle mobile menu state
  const isMobileMenuOpen = mobileMenuOpen !== undefined ? mobileMenuOpen : internalMobileMenuOpen;

  const handleMobileToggle = useCallback(() => {
    const newOpen = !isMobileMenuOpen;
    if (onMobileToggle) {
      onMobileToggle(newOpen);
    } else {
      setInternalMobileMenuOpen(newOpen);
    }
  }, [isMobileMenuOpen, onMobileToggle]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        handleMobileToggle();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isMobileMenuOpen, handleMobileToggle]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((event: React.KeyboardEvent, index: number) => {
    const currentIndex = index;
    const nextIndex = currentIndex + 1;
    const prevIndex = currentIndex - 1;

    switch (event.key) {
      case 'ArrowRight':
        event.preventDefault();
        if (nextIndex < navigation.length) {
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
      case 'Home':
        event.preventDefault();
        const firstItem = document.querySelector('[data-nav-item="0"]') as HTMLElement;
        firstItem?.focus();
        break;
      case 'End':
        event.preventDefault();
        const lastItem = document.querySelector(`[data-nav-item="${navigation.length - 1}"]`) as HTMLElement;
        lastItem?.focus();
        break;
    }
  }, [navigation.length]);

  // Build class names
  const topbarClasses = [
    'topbar',
    `topbar--${variant}`,
    `topbar--${size}`,
    `topbar--${position}`,
    showBorder && 'topbar--bordered',
    showShadow && 'topbar--shadow',
    fullWidth && 'topbar--full-width',
    loading && 'topbar--loading',
    className
  ].filter(Boolean).join(' ');

  const navigationClasses = [
    'topbar__nav',
    isMobile && 'topbar__nav--mobile',
    isMobileMenuOpen && 'topbar__nav--mobile-open'
  ].filter(Boolean).join(' ');

  // Build styles
  const topbarStyles: React.CSSProperties = {
    ...(zIndex && { zIndex }),
    ...style
  };

  return (
    <header
      ref={topbarRef}
      className={topbarClasses}
      style={topbarStyles}
      role="banner"
      tabIndex={-1}
      {...props}
    >
      {/* Header Content */}
      {headerContent && (
        <div className="topbar__header">
          {headerContent}
        </div>
      )}

      {/* Main Topbar Content */}
      <div className="topbar__content">
        {/* Logo Section */}
        <div className="topbar__logo">
          {logo && (
            <div 
              className="topbar__logo-content"
              onClick={onLogoClick}
              style={{ cursor: onLogoClick ? 'pointer' : 'default' }}
            >
              {logo}
            </div>
          )}
        </div>

        {/* Navigation Section */}
        {navigation.length > 0 && (
          <nav
            ref={navigationRef}
            className={navigationClasses}
            role="navigation"
            aria-label="Main navigation"
          >
            <ul className="topbar__nav-list" role="menubar">
              {navigation.map((item, index) => (
                <li key={item.id} className="topbar__nav-item-wrapper" role="none">
                  {item.href ? (
                    <a
                      href={item.href}
                      className={`topbar__nav-item ${activeItem === item.id ? 'topbar__nav-item--active' : ''} ${item.disabled || loading ? 'topbar__nav-item--disabled' : ''}`}
                      role="menuitem"
                      tabIndex={item.disabled ? -1 : 0}
                      data-nav-item={index}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      onClick={(e) => {
                        if (item.disabled) {
                          e.preventDefault();
                          return;
                        }
                        if (item.onClick) {
                          e.preventDefault();
                          item.onClick(item.id);
                        }
                      }}
                      aria-disabled={item.disabled}
                    >
                      {item.icon && (
                        <span className="topbar__nav-icon" aria-hidden="true">
                          {item.icon}
                        </span>
                      )}
                      <span className="topbar__nav-label">{item.label}</span>
                      {item.badge && (
                        <span className="topbar__nav-badge" aria-hidden="true">
                          {item.badge}
                        </span>
                      )}
                    </a>
                  ) : (
                    <button
                      className={`topbar__nav-item topbar__nav-item--button ${activeItem === item.id ? 'topbar__nav-item--active' : ''} ${item.disabled || loading ? 'topbar__nav-item--disabled' : ''}`}
                      role="menuitem"
                      tabIndex={item.disabled ? -1 : 0}
                      data-nav-item={index}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      onClick={() => {
                        if (!item.disabled && item.onClick) {
                          item.onClick(item.id);
                        }
                      }}
                      disabled={item.disabled}
                    >
                      {item.icon && (
                        <span className="topbar__nav-icon" aria-hidden="true">
                          {item.icon}
                        </span>
                      )}
                      <span className="topbar__nav-label">{item.label}</span>
                      {item.badge && (
                        <span className="topbar__nav-badge" aria-hidden="true">
                          {item.badge}
                        </span>
                      )}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* Actions Section */}
        <div className="topbar__actions">
          {/* Search */}
          {search && (
            <div className="topbar__search" onFocus={onSearchFocus}>
              {search}
            </div>
          )}

          {/* Notifications */}
          {notifications && (
            <div className="topbar__notifications">
              {notifications}
            </div>
          )}

          {/* Action Buttons */}
          {actions.map((action, index) => (
            <div key={index} className="topbar__action">
              {action}
            </div>
          ))}

          {/* User Menu */}
          {userMenu && (
            <div className="topbar__user-menu">
              {userMenu}
            </div>
          )}

          {/* Mobile Menu Toggle */}
          {shouldShowMobileToggle && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleMobileToggle}
              aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
              className="topbar__mobile-toggle"
            >
              {isMobileMenuOpen ? <X size={20} /> : <List size={20} />}
            </Button>
          )}
        </div>
      </div>

      {/* Footer Content */}
      {footerContent && (
        <div className="topbar__footer">
          {footerContent}
        </div>
      )}
    </header>
  );
};

export default Topbar;
