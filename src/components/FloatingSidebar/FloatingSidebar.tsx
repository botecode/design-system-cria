import React from 'react';
import { Typography } from '../Typography';
import { Button } from '../Button';
import { Avatar } from '../Avatar';
import { colors, spacing } from '../../tokens';
import { Gear, User, BookOpen, GraduationCap, Calendar, FileText, Wrench, ChatCircle } from 'phosphor-react';

export interface FloatingSidebarItem {
  id: string;
  label: string;
  href?: string;
  onClick?: () => void;
  active?: boolean;
  icon?: React.ReactNode;
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
            width: 120,
            height: 120,
            objectFit: 'contain',
            position: 'relative',
            top: -30, // Overlap the top of the sidebar
            zIndex: 1,
            filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))',
          }}
        />
      </div>

      {/* Title */}
      <div style={{
        textAlign: 'center',
        marginBottom: spacing.xl,
        marginTop: -24, // Adjust for larger emblem overlap
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
              display: 'flex',
              alignItems: 'center',
              gap: spacing.sm,
            }}
            onMouseEnter={(e) => {
              if (!item.active) {
                e.currentTarget.style.backgroundColor = colors.secondary;
              }
            }}
            onMouseLeave={(e) => {
              if (!item.active) {
                e.currentTarget.style.backgroundColor = 'transparent';
              }
            }}
          >
            {item.icon && (
              <span style={{ display: 'flex', alignItems: 'center' }}>
                {item.icon}
              </span>
            )}
            {item.label}
          </Button>
        ))}
      </div>

      {/* User Profile Section */}
      {user && (
        <div style={{
          marginTop: spacing.lg,
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
