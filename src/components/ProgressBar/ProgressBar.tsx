import React, { forwardRef, useMemo } from 'react';

export interface ProgressBarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  /**
   * Progress value (0-100 for default, or between min-max)
   */
  value?: number;
  
  /**
   * Minimum value (default: 0)
   */
  min?: number;
  
  /**
   * Maximum value (default: 100)
   */
  max?: number;
  
  /**
   * Progress bar variant
   */
  variant?: 'determinate' | 'indeterminate';
  
  /**
   * Size of the progress bar
   */
  size?: 'sm' | 'md' | 'lg';
  
  /**
   * Color variant
   */
  color?: 'primary' | 'success' | 'warning' | 'error';
  
  /**
   * Label text or component
   */
  label?: React.ReactNode;
  
  /**
   * Whether to show percentage
   */
  showPercentage?: boolean;
  
  /**
   * Whether the progress bar is disabled
   */
  disabled?: boolean;
  
  /**
   * Whether to show striped pattern
   */
  striped?: boolean;
  
  /**
   * Whether to animate the striped pattern
   */
  animated?: boolean;
  
  /**
   * Custom transition duration
   */
  transitionDuration?: string;
  
  /**
   * Custom aria-label
   */
  ariaLabel?: string;
  
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
 * Progress Bar component for displaying task completion and loading states
 */
export const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(({
  value = 0,
  min = 0,
  max = 100,
  variant = 'determinate',
  size = 'md',
  color = 'primary',
  label,
  showPercentage = false,
  disabled = false,
  striped = false,
  animated = false,
  transitionDuration = '0.3s',
  ariaLabel,
  className = '',
  style,
  ...props
}, ref) => {
  // Calculate normalized value and percentage
  const normalizedValue = useMemo(() => {
    if (variant === 'indeterminate') return 0;
    
    const clampedValue = Math.max(min, Math.min(max, value));
    return clampedValue;
  }, [value, min, max, variant]);
  
  const percentage = useMemo(() => {
    if (variant === 'indeterminate') return 0;
    if (min === max) return 100;
    
    return ((normalizedValue - min) / (max - min)) * 100;
  }, [normalizedValue, min, max, variant]);
  
  // Generate CSS classes
  const progressBarClasses = [
    'cria-progress-bar',
    `cria-progress-bar--${size}`,
    variant === 'indeterminate' && 'cria-progress-bar--indeterminate',
    disabled && 'cria-progress-bar--disabled',
    className,
  ].filter(Boolean).join(' ');
  
  const progressFillClasses = [
    'cria-progress-bar__fill',
    `cria-progress-bar__fill--${color}`,
    variant === 'indeterminate' && 'cria-progress-bar__fill--indeterminate',
    striped && 'cria-progress-bar__fill--striped',
    animated && 'cria-progress-bar__fill--animated',
  ].filter(Boolean).join(' ');
  
  // Accessibility attributes
  const accessibilityProps = useMemo(() => {
    if (variant === 'indeterminate') {
      return {
        'aria-busy': true,
        'aria-label': ariaLabel || 'Loading',
      };
    }
    
    return {
      'aria-valuenow': normalizedValue,
      'aria-valuemin': min,
      'aria-valuemax': max,
      'aria-label': ariaLabel || (typeof label === 'string' ? label : 'Progress'),
      'aria-disabled': disabled ? 'true' : undefined,
    };
  }, [variant, normalizedValue, min, max, ariaLabel, label, disabled]);
  
  // Progress fill styles
  const progressFillStyle: React.CSSProperties = {
    width: variant === 'indeterminate' ? '100%' : `${percentage}%`,
    transitionDuration,
  };
  
  return (
    <div className="cria-progress-bar__container">
      {/* Label */}
      {(label || showPercentage) && (
        <div className="cria-progress-bar__header">
          {label && (
            <span className="cria-progress-bar__label">
              {label}
            </span>
          )}
          {showPercentage && variant === 'determinate' && (
            <span className="cria-progress-bar__percentage">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}
      
      {/* Progress Bar */}
      <div
        ref={ref}
        className={progressBarClasses}
        role="progressbar"
        style={style}
        {...accessibilityProps}
        {...props}
      >
        <div
          className={progressFillClasses}
          data-testid="progress-fill"
          style={progressFillStyle}
        />
      </div>
    </div>
  );
});

ProgressBar.displayName = 'ProgressBar';

export default ProgressBar;
