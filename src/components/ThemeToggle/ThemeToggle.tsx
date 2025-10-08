import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { Switch } from '../Switch/Switch';
import { Button } from '../Button/Button';
import { CriaTextBody1 } from '../TextTokens';
import './ThemeToggle.css';

export interface ThemeToggleProps {
  /**
   * Size of the toggle component
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Variant of the toggle component
   */
  variant?: 'switch' | 'button' | 'icon';
  /**
   * Whether to show the theme label
   */
  showLabel?: boolean;
  /**
   * Custom label for light mode
   */
  lightLabel?: string;
  /**
   * Custom label for dark mode
   */
  darkLabel?: string;
  /**
   * Custom class name
   */
  className?: string;
  /**
   * Custom styles
   */
  style?: React.CSSProperties;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  size = 'md',
  variant = 'switch',
  showLabel = true,
  lightLabel = 'Light',
  darkLabel = 'Dark',
  className = '',
  style,
}) => {
  const { theme, toggleTheme, isDark, isLight } = useTheme();

  const handleToggle = () => {
    toggleTheme();
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'cria-theme-toggle--sm';
      case 'lg':
        return 'cria-theme-toggle--lg';
      default:
        return 'cria-theme-toggle--md';
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'button':
        return 'cria-theme-toggle--button';
      case 'icon':
        return 'cria-theme-toggle--icon';
      default:
        return 'cria-theme-toggle--switch';
    }
  };

  const renderSwitch = () => (
    <div className={`cria-theme-toggle ${getSizeClasses()} ${getVariantClasses()} ${className}`} style={style}>
      {showLabel && (
        <CriaTextBody1 className="cria-theme-toggle__label">
          {isLight ? lightLabel : darkLabel}
        </CriaTextBody1>
      )}
      <Switch
        checked={isDark}
        onChange={handleToggle}
        size={size}
        aria-label={`Switch to ${isLight ? darkLabel : lightLabel} mode`}
      />
    </div>
  );

  const renderButton = () => (
    <Button
      variant="ghost"
      size={size}
      onClick={handleToggle}
      className={`cria-theme-toggle ${getSizeClasses()} ${getVariantClasses()} ${className}`}
      style={style}
      aria-label={`Switch to ${isLight ? darkLabel : lightLabel} mode`}
    >
      <div className="cria-theme-toggle__icon">
        {isLight ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/>
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39.39 1.03.39 1.41 0l1.06-1.06c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41z"/>
          </svg>
        )}
      </div>
      {showLabel && (
        <CriaTextBody1 className="cria-theme-toggle__label">
          {isLight ? lightLabel : darkLabel}
        </CriaTextBody1>
      )}
    </Button>
  );

  const renderIcon = () => (
    <button
      onClick={handleToggle}
      className={`cria-theme-toggle ${getSizeClasses()} ${getVariantClasses()} ${className}`}
      style={style}
      aria-label={`Switch to ${isLight ? darkLabel : lightLabel} mode`}
    >
      <div className="cria-theme-toggle__icon">
        {isLight ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/>
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39.39 1.03.39 1.41 0l1.06-1.06c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41z"/>
          </svg>
        )}
      </div>
    </button>
  );

  switch (variant) {
    case 'button':
      return renderButton();
    case 'icon':
      return renderIcon();
    default:
      return renderSwitch();
  }
};

export default ThemeToggle;
