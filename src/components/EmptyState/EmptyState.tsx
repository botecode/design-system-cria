import React from 'react';
import { colors } from '../../tokens/colors';
import { spacing } from '../../tokens/spacing';
import { radii } from '../../tokens/radii';
import { shadows } from '../../tokens/shadows';

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Icon to display in the empty state
   */
  icon?: React.ReactNode;
  /**
   * Title text or custom element
   */
  title?: React.ReactNode;
  /**
   * Description text or custom element
   */
  description?: React.ReactNode;
  /**
   * Action button or custom element
   */
  action?: React.ReactNode;
  /**
   * Additional content to display below the action
   */
  additionalContent?: React.ReactNode;
  /**
   * Visual variant of the empty state
   * @default 'default'
   */
  variant?: 'default' | 'minimal' | 'compact' | 'full';
  /**
   * Size of the empty state
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Whether to center the content
   * @default true
   */
  centered?: boolean;
  /**
   * Custom class name for the empty state
   */
  className?: string;
  /**
   * Custom style for the empty state
   */
  style?: React.CSSProperties;
  /**
   * Children to render inside the empty state
   */
  children?: React.ReactNode;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  description,
  action,
  additionalContent,
  variant = 'default',
  size = 'md',
  centered = true,
  className = '',
  style = {},
  children,
  ...props
}) => {
  const classes = [
    'cria-empty-state',
    `cria-empty-state--${variant}`,
    `cria-empty-state--size-${size}`,
    centered && 'cria-empty-state--centered',
    className,
  ].filter(Boolean).join(' ');

  const renderTitle = () => {
    if (!title) return null;
    
    if (typeof title === 'string') {
      return <h3 className="cria-empty-state__title">{title}</h3>;
    }
    
    return <div className="cria-empty-state__title">{title}</div>;
  };

  const renderDescription = () => {
    if (!description) return null;
    
    if (typeof description === 'string') {
      return <p className="cria-empty-state__description">{description}</p>;
    }
    
    return <div className="cria-empty-state__description">{description}</div>;
  };

  return (
    <div 
      className={classes} 
      style={style}
      role="status"
      aria-live="polite"
      {...props}
    >
      <div className="cria-empty-state__content">
        {icon && (
          <div className="cria-empty-state__icon">
            {icon}
          </div>
        )}
        
        {renderTitle()}
        
        {renderDescription()}
        
        {action && (
          <div className="cria-empty-state__action">
            {action}
          </div>
        )}
        
        {additionalContent && (
          <div className="cria-empty-state__additional">
            {additionalContent}
          </div>
        )}
        
        {children && (
          <div className="cria-empty-state__children">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};
