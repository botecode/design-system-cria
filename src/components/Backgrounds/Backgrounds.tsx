import React, { useMemo } from 'react';

export interface BackgroundsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  /**
   * Background content
   */
  children: React.ReactNode;
  
  /**
   * Background variant
   */
  variant?: 'plain' | 'gradient' | 'pattern' | 'texture';
  
  /**
   * Gradient type
   */
  gradientType?: 'linear' | 'radial' | 'conic';
  
  /**
   * Gradient direction
   */
  gradientDirection?: 'to-right' | 'to-bottom' | 'to-bottom-right' | 'to-top' | 'to-top-right' | 'to-left' | 'to-top-left' | 'to-bottom-left' | '45deg' | '90deg' | '135deg' | '180deg' | '225deg' | '270deg' | '315deg';
  
  /**
   * Custom gradient colors
   */
  gradientColors?: string[];
  
  /**
   * Custom gradient stops
   */
  gradientStops?: string[];
  
  /**
   * Gradient position (for radial gradients)
   */
  gradientPosition?: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  
  /**
   * Pattern type
   */
  patternType?: 'dots' | 'grid' | 'lines' | 'waves' | 'geometric';
  
  /**
   * Pattern size
   */
  patternSize?: string;
  
  /**
   * Pattern opacity
   */
  patternOpacity?: number;
  
  /**
   * Pattern color
   */
  patternColor?: string;
  
  /**
   * Texture type
   */
  textureType?: 'paper' | 'fabric' | 'metal' | 'wood';
  
  /**
   * Texture intensity
   */
  textureIntensity?: number;
  
  /**
   * Texture scale
   */
  textureScale?: number;
  
  /**
   * Color scheme
   */
  colorScheme?: 'primary' | 'secondary' | 'neutral' | 'accent';
  
  /**
   * Background size
   */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  
  /**
   * Background intensity
   */
  intensity?: 'subtle' | 'medium' | 'bold';
  
  /**
   * Whether to animate the background
   */
  animated?: boolean;
  
  /**
   * Animation duration in milliseconds
   */
  animationDuration?: number;
  
  /**
   * Animation delay in milliseconds
   */
  animationDelay?: number;
  
  /**
   * Whether to show overlay
   */
  showOverlay?: boolean;
  
  /**
   * Overlay opacity
   */
  overlayOpacity?: number;
  
  /**
   * Overlay color
   */
  overlayColor?: string;
  
  /**
   * Whether to be responsive
   */
  responsive?: boolean;
  
  /**
   * Custom class name
   */
  className?: string;
  
  /**
   * Custom styles
   */
  style?: React.CSSProperties;
  
  /**
   * ARIA label
   */
  ariaLabel?: string;
  
  /**
   * ARIA described by
   */
  ariaDescribedBy?: string;
  
  /**
   * ARIA labelled by
   */
  ariaLabelledBy?: string;
}

/**
 * Backgrounds component for creating various background effects
 */
export const Backgrounds: React.FC<BackgroundsProps> = ({
  children,
  variant = 'plain',
  gradientType = 'linear',
  gradientDirection = 'to-right',
  gradientColors,
  gradientStops,
  gradientPosition = 'center',
  patternType = 'dots',
  patternSize = '20px',
  patternOpacity = 0.1,
  patternColor,
  textureType = 'paper',
  textureIntensity = 0.5,
  textureScale = 1,
  colorScheme = 'primary',
  size = 'md',
  intensity = 'medium',
  animated = false,
  animationDuration = 3000,
  animationDelay = 0,
  showOverlay = false,
  overlayOpacity = 0.1,
  overlayColor = '#000000',
  responsive = true,
  className = '',
  style,
  ariaLabel,
  ariaDescribedBy,
  ariaLabelledBy,
  ...props
}) => {
  // Generate gradient background
  const gradientBackground = useMemo(() => {
    if (variant !== 'gradient') return '';
    
    const colors = gradientColors || getDefaultGradientColors(colorScheme);
    const stops = gradientStops || getDefaultGradientStops(colors.length);
    
    let gradient = '';
    
    switch (gradientType) {
      case 'linear':
        gradient = `linear-gradient(${gradientDirection}, ${colors.map((color, index) => 
          `${color} ${stops[index] || '0%'}`
        ).join(', ')})`;
        break;
      case 'radial':
        gradient = `radial-gradient(circle at ${gradientPosition}, ${colors.map((color, index) => 
          `${color} ${stops[index] || '0%'}`
        ).join(', ')})`;
        break;
      case 'conic':
        gradient = `conic-gradient(from ${gradientDirection}, ${colors.map((color, index) => 
          `${color} ${stops[index] || '0%'}`
        ).join(', ')})`;
        break;
    }
    
    return gradient;
  }, [variant, gradientType, gradientDirection, gradientColors, gradientStops, gradientPosition, colorScheme]);

  // Generate pattern background
  const patternBackground = useMemo(() => {
    if (variant !== 'pattern') return '';
    
    const color = patternColor || getDefaultPatternColor(colorScheme);
    const opacity = patternOpacity;
    
    switch (patternType) {
      case 'dots':
        return `radial-gradient(circle at 1px 1px, ${color} ${opacity}, transparent 0)`;
      case 'grid':
        return `linear-gradient(${color} ${opacity} 1px, transparent 1px), linear-gradient(90deg, ${color} ${opacity} 1px, transparent 1px)`;
      case 'lines':
        return `repeating-linear-gradient(45deg, transparent, transparent 2px, ${color} ${opacity} 2px, ${color} ${opacity} 4px)`;
      case 'waves':
        return `radial-gradient(ellipse at center, ${color} ${opacity} 0%, transparent 70%)`;
      case 'geometric':
        return `conic-gradient(from 0deg at 50% 50%, ${color} ${opacity} 0deg, transparent 60deg, ${color} ${opacity} 120deg, transparent 180deg, ${color} ${opacity} 240deg, transparent 300deg)`;
      default:
        return '';
    }
  }, [variant, patternType, patternColor, patternOpacity, colorScheme]);

  // Generate texture background
  const textureBackground = useMemo(() => {
    if (variant !== 'texture') return '';
    
    const intensity = textureIntensity;
    const scale = textureScale;
    
    switch (textureType) {
      case 'paper':
        return `radial-gradient(circle at 20% 50%, transparent 20%, rgba(255,255,255,${intensity}) 21%, rgba(255,255,255,${intensity}) 34%, transparent 35%, transparent), linear-gradient(0deg, rgba(255,255,255,${intensity * 0.5}) 50%, transparent 50%)`;
      case 'fabric':
        return `repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,${intensity * 0.3}) 2px, rgba(255,255,255,${intensity * 0.3}) 4px), repeating-linear-gradient(-45deg, transparent, transparent 2px, rgba(0,0,0,${intensity * 0.1}) 2px, rgba(0,0,0,${intensity * 0.1}) 4px)`;
      case 'metal':
        return `linear-gradient(45deg, rgba(255,255,255,${intensity * 0.8}) 25%, transparent 25%), linear-gradient(-45deg, rgba(255,255,255,${intensity * 0.8}) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(255,255,255,${intensity * 0.4}) 75%), linear-gradient(-45deg, transparent 75%, rgba(255,255,255,${intensity * 0.4}) 75%)`;
      case 'wood':
        return `repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(139,69,19,${intensity * 0.3}) 2px, rgba(139,69,19,${intensity * 0.3}) 4px), repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(160,82,45,${intensity * 0.2}) 2px, rgba(160,82,45,${intensity * 0.2}) 4px)`;
      default:
        return '';
    }
  }, [variant, textureType, textureIntensity, textureScale]);

  // Build class names
  const backgroundClasses = [
    'backgrounds',
    `backgrounds--${variant}`,
    variant === 'gradient' && `backgrounds--gradient-${gradientType}`,
    variant === 'gradient' && `backgrounds--gradient-${gradientDirection}`,
    variant === 'pattern' && `backgrounds--pattern-${patternType}`,
    variant === 'texture' && `backgrounds--texture-${textureType}`,
    `backgrounds--color-${colorScheme}`,
    `backgrounds--${size}`,
    `backgrounds--intensity-${intensity}`,
    animated && 'backgrounds--animated',
    showOverlay && 'backgrounds--overlay',
    responsive && 'backgrounds--responsive',
    className
  ].filter(Boolean).join(' ');

  // Build styles
  const backgroundStyles: React.CSSProperties = {
    backgroundSize: variant === 'pattern' ? patternSize : variant === 'texture' ? `${100 * textureScale}%` : 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: variant === 'pattern' ? 'repeat' : 'no-repeat',
    ...(variant === 'gradient' && gradientBackground && { background: gradientBackground }),
    ...(variant === 'pattern' && patternBackground && { backgroundImage: patternBackground }),
    ...(variant === 'texture' && textureBackground && { backgroundImage: textureBackground }),
    ...(animated && {
      animationDuration: `${animationDuration}ms`,
      animationDelay: `${animationDelay}ms`
    }),
    ...(showOverlay && {
      position: 'relative'
    }),
    ...style
  };

  return (
    <div
      className={backgroundClasses}
      style={backgroundStyles}
      role="region"
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      aria-labelledby={ariaLabelledBy}
      {...props}
    >
      {showOverlay && (
        <div
          className="backgrounds__overlay"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: overlayColor,
            opacity: overlayOpacity,
            pointerEvents: 'none',
            zIndex: 1
          }}
        />
      )}
      <div className="backgrounds__content" style={{ position: 'relative', zIndex: 2 }}>
        {children}
      </div>
    </div>
  );
};

// Helper functions
function getDefaultGradientColors(colorScheme: string): string[] {
  switch (colorScheme) {
    case 'primary':
      return ['var(--color-primary)', 'var(--color-primary-dark)'];
    case 'secondary':
      return ['var(--color-secondary)', 'var(--color-secondary-dark)'];
    case 'neutral':
      return ['var(--color-neutral-100)', 'var(--color-neutral-900)'];
    case 'accent':
      return ['var(--color-accent)', 'var(--color-accent-dark)'];
    default:
      return ['var(--color-primary)', 'var(--color-primary-dark)'];
  }
}

function getDefaultGradientStops(count: number): string[] {
  const stops: string[] = [];
  for (let i = 0; i < count; i++) {
    stops.push(`${(i / (count - 1)) * 100}%`);
  }
  return stops;
}

function getDefaultPatternColor(colorScheme: string): string {
  switch (colorScheme) {
    case 'primary':
      return 'var(--color-primary)';
    case 'secondary':
      return 'var(--color-secondary)';
    case 'neutral':
      return 'var(--color-neutral-500)';
    case 'accent':
      return 'var(--color-accent)';
    default:
      return 'var(--color-primary)';
  }
}

export default Backgrounds;
