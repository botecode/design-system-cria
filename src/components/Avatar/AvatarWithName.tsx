import React, { forwardRef } from 'react';
import { Avatar, AvatarProps } from './Avatar';
import Typography from '../Typography/Typography';
import { colors, spacing, radii } from '../../tokens';

export interface AvatarWithNameProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'> {
  /**
   * Avatar props - all Avatar component props are supported
   */
  avatarProps?: AvatarProps;
  
  /**
   * Name to display next to the avatar
   */
  name: string;
  
  /**
   * Size of the avatar with name component
   */
  size?: 'sm' | 'md' | 'lg';
  
  /**
   * Variant style for the container
   */
  variant?: 'default' | 'outlined' | 'filled';
  
  /**
   * Whether the component is clickable
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
 * Avatar with Name component - displays an avatar alongside a name in a horizontal pill-shaped container
 * Perfect for user lists, course instructors, team members, etc.
 */
export const AvatarWithName = forwardRef<HTMLDivElement, AvatarWithNameProps>(({
  avatarProps = {},
  name,
  size = 'md',
  variant = 'default',
  clickable = false,
  onClick,
  className = '',
  style,
  ...props
}, ref) => {
  
  // Size configurations
  const sizeConfig = {
    sm: {
      padding: `${spacing[2]} ${spacing[3]}`,
      avatarSize: 'sm' as const,
      gap: spacing[2],
      fontSize: '14px',
      borderRadius: radii.full,
      minHeight: '32px',
    },
    md: {
      padding: `${spacing[2]} ${spacing[3]}`,
      avatarSize: 'md' as const,
      gap: spacing[3],
      fontSize: '16px',
      borderRadius: radii.full,
      minHeight: '40px',
    },
    lg: {
      padding: `${spacing[3]} ${spacing[4]}`,
      avatarSize: 'lg' as const,
      gap: spacing[3],
      fontSize: '18px',
      borderRadius: radii.full,
      minHeight: '48px',
    },
  };

  const config = sizeConfig[size];

  // Handle click events
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (clickable && onClick) {
      onClick(event);
    }
  };

  // Handle keyboard events
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (clickable && onClick && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      onClick(event as any);
    }
  };

  // Build component classes
  const componentClasses = [
    'avatar-with-name',
    `avatar-with-name--${size}`,
    `avatar-with-name--${variant}`,
    clickable && 'avatar-with-name--clickable',
    className,
  ].filter(Boolean).join(' ');

  // Determine container styles based on variant
  const getContainerStyles = (): React.CSSProperties => {
    const baseStyles: React.CSSProperties = {
      display: 'flex',
      alignItems: 'center',
      gap: config.gap,
      padding: config.padding,
      borderRadius: config.borderRadius,
      minHeight: config.minHeight,
      cursor: clickable ? 'pointer' : 'default',
      transition: 'all 0.2s ease',
      border: 'none',
      background: 'transparent',
      width: 'fit-content',
      ...style,
    };

    switch (variant) {
      case 'outlined':
        return {
          ...baseStyles,
          border: `1px solid ${colors.gray[200]}`,
          backgroundColor: colors.white,
          // Hover styles handled by CSS classes
        };
      case 'filled':
        return {
          ...baseStyles,
          backgroundColor: colors.gray[50],
          border: `1px solid ${colors.gray[100]}`,
          // Hover styles handled by CSS classes
        };
      case 'default':
      default:
        return {
          ...baseStyles,
          backgroundColor: 'transparent',
          // Hover styles handled by CSS classes
        };
    }
  };

  const containerStyles = getContainerStyles();

  // Determine accessibility attributes
  const ariaLabel = clickable ? `Click to interact with ${name}` : name;
  const tabIndex = clickable ? 0 : undefined;

  return (
    <div
      ref={ref}
      className={componentClasses}
      style={containerStyles}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role={clickable ? 'button' : undefined}
      aria-label={ariaLabel}
      tabIndex={tabIndex}
      {...props}
    >
      {/* Avatar */}
      <Avatar
        {...avatarProps}
        size={config.avatarSize}
        name={name}
      />
      
      {/* Name */}
      <Typography
        variant="body"
        style={{
          fontSize: config.fontSize,
          fontWeight: 500,
          color: colors.gray[700],
          lineHeight: 1.4,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          maxWidth: '200px', // Prevent extremely long names from breaking layout
        }}
      >
        {name}
      </Typography>
    </div>
  );
});

AvatarWithName.displayName = 'AvatarWithName';

export default AvatarWithName;
