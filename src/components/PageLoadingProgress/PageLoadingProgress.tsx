import React, { useEffect, useState } from 'react';
import { colors, spacing, typography, radii } from '../../tokens';

export type ProgressColor = 'primary' | 'secondary' | 'success' | 'warning' | 'error';
export type ProgressSize = 'sm' | 'md' | 'lg';
export type ProgressPosition = 'top' | 'bottom';
export type ProgressThickness = 'thin' | 'normal' | 'thick';

export interface PageLoadingProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  progress?: number;
  color?: ProgressColor;
  size?: ProgressSize;
  position?: ProgressPosition;
  thickness?: ProgressThickness;
  animated?: boolean;
  smooth?: boolean;
  indeterminate?: boolean;
  label?: string;
  zIndex?: number;
  duration?: number;
  delay?: number;
  onComplete?: (progress: number) => void;
  onProgressChange?: (progress: number) => void;
}

export const PageLoadingProgress: React.FC<PageLoadingProgressProps> = ({
  progress = 0,
  color = 'primary',
  size = 'md',
  position = 'top',
  thickness = 'normal',
  animated = false,
  smooth = false,
  indeterminate = false,
  label,
  zIndex = 9999,
  duration = 300,
  delay = 0,
  onComplete,
  onProgressChange,
  className = '',
  style,
  ...props
}) => {
  const [displayProgress, setDisplayProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Clamp progress value to 0-100 range
  const clampedProgress = Math.max(0, Math.min(100, progress));

  // Handle progress changes and callbacks
  useEffect(() => {
    if (onProgressChange) {
      onProgressChange(clampedProgress);
    }

    if (clampedProgress === 100 && onComplete) {
      onComplete(clampedProgress);
    }
  }, [clampedProgress, onProgressChange, onComplete]);

  // Handle smooth progress animation
  useEffect(() => {
    if (smooth && !indeterminate) {
      const timer = setTimeout(() => {
        setDisplayProgress(clampedProgress);
      }, 50);
      return () => clearTimeout(timer);
    } else {
      setDisplayProgress(clampedProgress);
    }
  }, [clampedProgress, smooth, indeterminate]);

  // Handle visibility with delay
  useEffect(() => {
    if (delay > 0) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(true);
    }
  }, [delay]);

  // Generate CSS classes
  const baseClass = 'cria-page-loading-progress';
  const classes = [
    baseClass,
    `${baseClass}--${color}`,
    `${baseClass}--${size}`,
    `${baseClass}--${position}`,
    `${baseClass}--${thickness}`,
    animated && `${baseClass}--animated`,
    smooth && `${baseClass}--smooth`,
    indeterminate && `${baseClass}--indeterminate`,
    delay > 0 && `${baseClass}--delayed`,
    className,
  ].filter(Boolean).join(' ');

  // Generate inline styles
  const inlineStyles: React.CSSProperties = {
    position: 'fixed',
    left: 0,
    right: 0,
    [position]: 0,
    zIndex,
    height: thickness === 'thin' ? spacing[0.5] : thickness === 'thick' ? spacing[1.5] : spacing[1],
    backgroundColor: colors.background.primary,
    border: 'none',
    outline: 'none',
    ...(smooth && {
      transition: `width ${duration}ms ease-out`,
    }),
    ...(delay > 0 && {
      opacity: isVisible ? 1 : 0,
      transition: 'opacity 200ms ease-in-out',
    }),
    ...style,
  };

  // Progress bar styles
  const progressBarStyles: React.CSSProperties = {
    height: '100%',
    width: indeterminate ? '100%' : `${displayProgress}%`,
    backgroundColor: 
      color === 'primary' ? colors.primary[500] :
      color === 'secondary' ? colors.secondary[500] :
      color === 'success' ? colors.success[500] :
      color === 'warning' ? colors.warning[500] :
      color === 'error' ? colors.error[500] :
      colors.primary[500],
    transition: smooth ? `width ${duration}ms ease-out` : 'none',
    ...(animated && {
      background: `linear-gradient(90deg, transparent, ${colors.primary[500]}, transparent)`,
      backgroundSize: '200% 100%',
      animation: 'cria-progress-shimmer 1.5s infinite',
    }),
  };

  return (
    <div
      className={classes}
      style={inlineStyles}
      role="progressbar"
      aria-valuenow={indeterminate ? 0 : displayProgress}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label || 'Loading progress'}
      {...props}
    >
      <div style={progressBarStyles} />
      {label && (
        <div
          style={{
            position: 'absolute',
            top: position === 'top' ? '100%' : 'auto',
            bottom: position === 'bottom' ? '100%' : 'auto',
            left: '50%',
            transform: 'translateX(-50%)',
            marginTop: position === 'top' ? spacing.xs : 0,
            marginBottom: position === 'bottom' ? spacing.xs : 0,
            padding: `${spacing.xs} ${spacing.sm}`,
            backgroundColor: colors.background.secondary,
            color: colors.text.primary,
            fontSize: typography.fontSize.caption,
            fontWeight: typography.fontWeight.medium,
            borderRadius: radii.sm,
            boxShadow: `0 2px 8px ${colors.border.light}`,
            whiteSpace: 'nowrap',
            zIndex: zIndex + 1,
          }}
        >
          {label}
        </div>
      )}
    </div>
  );
};

export default PageLoadingProgress;
