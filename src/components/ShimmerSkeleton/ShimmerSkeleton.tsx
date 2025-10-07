import React from 'react';
import { colors, spacing, typography, radii } from '../../tokens';

export type ShimmerSkeletonVariant = 
  | 'text' 
  | 'avatar' 
  | 'card' 
  | 'button' 
  | 'circle' 
  | 'rectangle';

export type ShimmerSkeletonSize = 'sm' | 'md' | 'lg';

export interface ShimmerSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: ShimmerSkeletonVariant;
  size?: ShimmerSkeletonSize;
  width?: string | number;
  height?: string | number;
  lines?: number;
  animated?: boolean;
  'aria-label'?: string;
}

export const ShimmerSkeleton: React.FC<ShimmerSkeletonProps> = ({
  variant = 'rectangle',
  size = 'md',
  width,
  height,
  lines = 1,
  animated = true,
  className = '',
  style,
  'aria-label': ariaLabel,
  ...props
}) => {
  const getSizeValue = (sizeName: string) => {
    const sizeMap: Record<string, { width: string; height: string }> = {
      sm: { width: '16px', height: '16px' },
      md: { width: '24px', height: '24px' },
      lg: { width: '40px', height: '40px' },
    };
    return sizeMap[sizeName] || sizeMap.md;
  };

  const getVariantStyles = () => {
    const sizeConfig = getSizeValue(size);
    
    switch (variant) {
      case 'text':
        return {
          width: width || '100%',
          height: height || 'auto',
          display: 'flex',
          flexDirection: 'column' as const,
          gap: spacing[2],
        };
      
      case 'avatar':
        return {
          width: width || sizeConfig.width,
          height: height || sizeConfig.width,
          borderRadius: '50%',
        };
      
      case 'card':
        return {
          width: width || '100%',
          height: height || '200px',
          borderRadius: radii.lg,
          padding: spacing[4],
          display: 'flex',
          flexDirection: 'column' as const,
          gap: spacing[3],
        };
      
      case 'button':
        return {
          width: width || '120px',
          height: height || '36px',
          borderRadius: radii.md,
        };
      
      case 'circle':
        return {
          width: width || sizeConfig.width,
          height: height || sizeConfig.height,
          borderRadius: '50%',
        };
      
      case 'rectangle':
      default:
        return {
          width: width || '100%',
          height: height || '20px',
          borderRadius: radii.sm,
        };
    }
  };

  const renderTextLines = () => {
    if (variant !== 'text') return null;
    
    return Array.from({ length: lines }, (_, index) => (
      <div
        key={index}
        className="cria-shimmer-skeleton__line"
        style={{
          width: index === lines - 1 ? '75%' : '100%',
          height: '16px',
          borderRadius: radii.sm,
          backgroundColor: colors.gray[200],
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {animated && (
          <div
            className="cria-shimmer-skeleton__shimmer"
            style={{
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background: `linear-gradient(90deg, transparent, ${colors.gray[100]}, transparent)`,
              animation: 'shimmer 1.5s infinite',
            }}
          />
        )}
      </div>
    ));
  };

  const renderCardContent = () => {
    if (variant !== 'card') return null;
    
    return (
      <>
        <div
          className="cria-shimmer-skeleton__line"
          style={{
            width: '60%',
            height: '20px',
            borderRadius: radii.sm,
            backgroundColor: colors.gray[200],
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {animated && (
            <div
              className="cria-shimmer-skeleton__shimmer"
              style={{
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: `linear-gradient(90deg, transparent, ${colors.gray[100]}, transparent)`,
                animation: 'shimmer 1.5s infinite',
              }}
            />
          )}
        </div>
        <div
          className="cria-shimmer-skeleton__line"
          style={{
            width: '100%',
            height: '16px',
            borderRadius: radii.sm,
            backgroundColor: colors.gray[200],
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {animated && (
            <div
              className="cria-shimmer-skeleton__shimmer"
              style={{
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: `linear-gradient(90deg, transparent, ${colors.gray[100]}, transparent)`,
                animation: 'shimmer 1.5s infinite',
              }}
            />
          )}
        </div>
        <div
          className="cria-shimmer-skeleton__line"
          style={{
            width: '80%',
            height: '16px',
            borderRadius: radii.sm,
            backgroundColor: colors.gray[200],
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {animated && (
            <div
              className="cria-shimmer-skeleton__shimmer"
              style={{
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: `linear-gradient(90deg, transparent, ${colors.gray[100]}, transparent)`,
                animation: 'shimmer 1.5s infinite',
              }}
            />
          )}
        </div>
      </>
    );
  };

  const baseStyles: React.CSSProperties = {
    backgroundColor: colors.gray[200],
    position: 'relative',
    overflow: 'hidden',
    ...getVariantStyles(),
    ...style,
  };

  const shimmerElement = animated && (
    <div
      className="cria-shimmer-skeleton__shimmer"
      style={{
        position: 'absolute',
        top: 0,
        left: '-100%',
        width: '100%',
        height: '100%',
        background: `linear-gradient(90deg, transparent, ${colors.gray[100]}, transparent)`,
        animation: 'shimmer 1.5s infinite',
      }}
    />
  );

  const classNames = [
    'cria-shimmer-skeleton',
    `cria-shimmer-skeleton--${variant}`,
    `cria-shimmer-skeleton--${size}`,
    !animated && 'cria-shimmer-skeleton--no-animation',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div
      className={classNames}
      style={baseStyles}
      role="status"
      aria-label={ariaLabel || 'Loading content'}
      aria-live="polite"
      {...props}
    >
      {variant === 'text' && renderTextLines()}
      {variant === 'card' && renderCardContent()}
      {variant !== 'text' && variant !== 'card' && shimmerElement}
    </div>
  );
};

export default ShimmerSkeleton;
