import React from 'react';
import { Typography } from '../Typography';
import { Button } from '../Button';
import { Avatar } from '../Avatar';
import { colors, spacing } from '../../tokens';
import { Gear, User } from 'phosphor-react';

export interface FloatingSidebarItem {
  id: string;
  label: string;
  href?: string;
  onClick?: () => void;
  active?: boolean;
}

export interface FloatingSidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  items?: FloatingSidebarItem[];
  user?: {
    name: string;
    avatar?: string;
    class?: string;
  };
  emblemImage?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const FloatingSidebar: React.FC<FloatingSidebarProps> = ({
  title = 'CRIA.lab',
  items = [],
  user,
  emblemImage = '/src/assets/cria_emblem.png',
  className = '',
  style,
  ...props
}) => {
  const baseClass = 'cria-floating-sidebar';
  const classes = [
    baseClass,
    className,
  ].filter(Boolean).join(' ');

  return (
    <div
      className={classes}
      style={{
        position: 'fixed',
        left: spacing.lg,
        top: spacing.lg,
        width: 280,
        minHeight: 'calc(100vh - 2rem)',
        backgroundColor: colors.primary,
        borderRadius: spacing.lg,
        padding: spacing.lg,
        display: 'flex',
        flexDirection: 'column',
        zIndex: 1000,
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
        ...style,
      }}
      {...props}
    >
      {/* Emblem Image */}
      <div style={{
        position: 'relative',
        marginBottom: spacing.lg,
        display: 'flex',
        justifyContent: 'center',
      }}>
        <img
          src={emblemImage}
          alt="CRIA Emblem"
          style={{
            width: 80,
            height: 80,
            objectFit: 'contain',
            position: 'relative',
            top: -20, // Overlap the top of the sidebar
            zIndex: 1,
          }}
        />
      </div>

      {/* Title */}
      <div style={{
        textAlign: 'center',
        marginBottom: spacing.xl,
        marginTop: -16, // Adjust for emblem overlap (using fixed value)
      }}>
        <Typography
          variant="title1"
          style={{
            color: colors.white,
            fontWeight: 'bold',
            fontSize: '24px',
            letterSpacing: '0.5px',
          }}
        >
          {title}
        </Typography>
      </div>

      {/* Navigation Items */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: spacing.sm,
      }}>
        {items.map((item) => (
          <Button
            key={item.id}
            variant={item.active ? 'secondary' : 'ghost'}
            size="md"
            onClick={item.onClick}
            style={{
              width: '100%',
              justifyContent: 'flex-start',
              padding: `${spacing.md} ${spacing.lg}`,
              borderRadius: spacing.sm,
              backgroundColor: item.active ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
              color: colors.white,
              border: 'none',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              if (!item.active) {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              }
            }}
            onMouseLeave={(e) => {
              if (!item.active) {
                e.currentTarget.style.backgroundColor = 'transparent';
              }
            }}
          >
            {item.label}
          </Button>
        ))}
      </div>

      {/* User Profile Section */}
      {user && (
        <div style={{
          marginTop: 'auto',
          paddingTop: spacing.lg,
          borderTop: `1px solid rgba(255, 255, 255, 0.2)`,
          display: 'flex',
          alignItems: 'center',
          gap: spacing.md,
        }}>
          <Avatar
            src={user.avatar}
            size="md"
            alt={user.name}
            style={{
              border: `2px solid ${colors.white}`,
            }}
          />
          <div style={{ flex: 1, minWidth: 0 }}>
            <Typography
              variant="body"
              style={{
                color: colors.white,
                fontWeight: '600',
                fontSize: '14px',
                marginBottom: 2,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {user.name}
            </Typography>
            {user.class && (
              <Typography
                variant="caption"
                style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '12px',
                }}
              >
                {user.class}
              </Typography>
            )}
          </div>
          <Button
            variant="ghost"
            size="sm"
            style={{
              color: colors.white,
              padding: spacing.sm,
              minWidth: 'auto',
            }}
            onClick={() => console.log('Settings clicked')}
            aria-label="Settings"
          >
            <Gear size={16} />
          </Button>
        </div>
      )}
    </div>
  );
};

export default FloatingSidebar;
