import React, { forwardRef, useState, useCallback } from 'react';
import { User } from 'phosphor-react';
import { colors } from '../../tokens';

export interface AvatarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'> {
  /**
   * Image source URL
   */
  src?: string;
  
  /**
   * Alternative text for the image
   */
  alt?: string;
  
  /**
   * Avatar size
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  
  /**
   * Avatar shape variant
   */
  variant?: 'circle' | 'square' | 'rounded';
  
  /**
   * Initials to display when no image is provided
   */
  initials?: string;
  
  /**
   * Name to generate initials from
   */
  name?: string;
  
  /**
   * Email to generate initials from
   */
  email?: string;
  
  /**
   * Icon to display when no image or initials are provided
   */
  icon?: React.ReactNode;
  
  /**
   * Fallback content when image fails to load
   */
  fallback?: string;
  
  /**
   * Custom background color
   */
  backgroundColor?: string;
  
  /**
   * Custom text color
   */
  textColor?: string;
  
  /**
   * Whether the avatar is disabled
   */
  disabled?: boolean;
  
  /**
   * Whether the avatar is in loading state
   */
  loading?: boolean;
  
  /**
   * Status indicator
   */
  status?: 'online' | 'offline' | 'away' | 'busy';
  
  /**
   * Whether the avatar is clickable
   */
  clickable?: boolean;
  
  /**
   * Click handler
   */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  
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
 * Avatar component for displaying user profile images, initials, or icons
 */
export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(({
  src,
  alt,
  size = 'md',
  variant = 'circle',
  initials,
  name,
  email,
  icon,
  fallback,
  backgroundColor,
  textColor,
  disabled = false,
  loading = false,
  status,
  clickable = false,
  onClick,
  className = '',
  style,
  ...props
}, ref) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Generate initials from name or email
  const generateInitials = useCallback((input: string): string => {
    if (!input || typeof input !== 'string') return '';
    
    const words = input.trim().split(/\s+/);
    if (words.length >= 2) {
      return (words[0][0] + words[words.length - 1][0]).toUpperCase();
    }
    
    if (words.length === 1) {
      const word = words[0];
      if (word.includes('@')) {
        // Email case
        const localPart = word.split('@')[0];
        const parts = localPart.split(/[._-]/);
        if (parts.length >= 2) {
          return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
        }
        return localPart.substring(0, 2).toUpperCase();
      }
      return word.substring(0, 2).toUpperCase();
    }
    
    return '';
  }, []);
  
  // Determine what to display
  const displayInitials = initials || (name && generateInitials(name)) || (email && generateInitials(email)) || '';
  const showImage = src && !imageError && !loading;
  const showInitials = !showImage && displayInitials;
  const showIcon = !showImage && !showInitials && icon;
  const showFallback = !showImage && !showInitials && !showIcon && fallback;
  const showDefaultIcon = !showImage && !showInitials && !showIcon && !showFallback;
  
  // Handle image load error
  const handleImageError = useCallback(() => {
    setImageError(true);
  }, []);
  
  // Handle image load success
  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
    setImageError(false);
  }, []);
  
  // Handle click
  const handleClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || loading) return;
    onClick?.(event);
  }, [disabled, loading, onClick]);
  
  // Handle keyboard events
  const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
    if (disabled || loading) return;
    
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick?.(event as any);
    }
  }, [disabled, loading, onClick]);
  
  // Generate CSS classes
  const avatarClasses = [
    'cria-avatar',
    `cria-avatar--${size}`,
    `cria-avatar--${variant}`,
    disabled && 'cria-avatar--disabled',
    loading && 'cria-avatar--loading',
    clickable && 'cria-avatar--clickable',
    status && `cria-avatar--status-${status}`,
    className,
  ].filter(Boolean).join(' ');
  
  // Determine accessibility attributes
  const ariaLabel = alt || (name ? `${name}'s Avatar` : 'User Avatar');
  const role = showImage ? undefined : 'img';
  const tabIndex = (clickable || onClick) && !disabled && !loading ? 0 : undefined;
  
  return (
    <div
      ref={ref}
      className={avatarClasses}
      style={{
        backgroundColor: backgroundColor || (showInitials || showFallback ? undefined : colors.gray[200]),
        ...style,
      }}
      role={role}
      aria-label={ariaLabel}
      aria-disabled={disabled}
      tabIndex={tabIndex}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      {...props}
    >
      {/* Image */}
      {showImage && (
        <img
          src={src}
          alt={alt || ''}
          className="cria-avatar__image"
          onError={handleImageError}
          onLoad={handleImageLoad}
          style={{ opacity: imageLoaded ? 1 : 0 }}
        />
      )}
      
      {/* Loading state */}
      {loading && (
        <div className="cria-avatar__loading" aria-hidden="true">
          <div className="cria-avatar__spinner" />
        </div>
      )}
      
      {/* Initials */}
      {(showInitials || showFallback) && (
        <span 
          className="cria-avatar__initials"
          style={{ color: textColor }}
        >
          {showInitials ? displayInitials : fallback}
        </span>
      )}
      
      {/* Icon */}
      {(showIcon || showDefaultIcon) && (
        <div className="cria-avatar__icon">
          {showIcon ? icon : <User size="50%" />}
        </div>
      )}
      
      {/* Status indicator */}
      {status && (
        <div 
          className={`cria-avatar__status cria-avatar__status--${status}`}
          data-testid="avatar-status"
          aria-hidden="true"
        />
      )}
    </div>
  );
});

Avatar.displayName = 'Avatar';

export default Avatar;
