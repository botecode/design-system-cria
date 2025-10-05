import React, { useMemo } from 'react';

export interface BackgroundsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  /**
   * Background content
   */
  children: React.ReactNode;
  
  /**
   * Background variant
   */
  variant?: 'plain' | 'gradient' | 'pattern' | 'texture' | 'modern';
  
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
   * Modern background type
   */
  modernType?: 'radial-glow' | 'grid-dots' | 'mesh-gradient' | 'noise' | 'aurora' | 'waves';
  
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
  modernType = 'radial-glow',
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

  // Generate modern background
  const modernBackground = useMemo(() => {
    if (variant !== 'modern') return '';
    
    const colors = getDefaultGradientColors(colorScheme);
    
    switch (modernType) {
      case 'radial-glow':
        return `radial-gradient(60% 120% at 50% 50%, hsla(0,0%,100%,0) 0, ${colors[0]}50 100%)`;
      case 'grid-dots':
        return `linear-gradient(to right, #4f4f4f2e 1px, transparent 1px), linear-gradient(to bottom, #8080800a 1px, transparent 1px), radial-gradient(circle 400px at 50% 300px, ${colors[0]}36, #000)`;
      case 'mesh-gradient':
        return `radial-gradient(125% 125% at 50% 10%, #fff 40%, ${colors[0]} 100%)`;
      case 'noise':
        return `radial-gradient(#ffffff33 1px, #00091d 1px), url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`;
      case 'aurora':
        return `linear-gradient(45deg, ${colors[0]}20, ${colors[1]}20, ${colors[0]}20), radial-gradient(circle at 20% 50%, ${colors[0]}40, transparent 50%), radial-gradient(circle at 80% 20%, ${colors[1]}40, transparent 50%), radial-gradient(circle at 40% 80%, ${colors[0]}40, transparent 50%)`;
      case 'waves':
        return `radial-gradient(circle at 50% 50%, ${colors[0]}20, transparent 50%), radial-gradient(circle at 80% 20%, ${colors[1]}20, transparent 50%), radial-gradient(circle at 20% 80%, ${colors[0]}20, transparent 50%)`;
      default:
        return '';
    }
  }, [variant, modernType, colorScheme]);

  // Build class names
  const backgroundClasses = [
    'backgrounds',
    `backgrounds--${variant}`,
    variant === 'gradient' && `backgrounds--gradient-${gradientType}`,
    variant === 'gradient' && `backgrounds--gradient-${gradientDirection}`,
    variant === 'pattern' && `backgrounds--pattern-${patternType}`,
    variant === 'texture' && `backgrounds--texture-${textureType}`,
    variant === 'modern' && `backgrounds--modern-${modernType}`,
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
    ...(variant === 'gradient' && gradientBackground && { 
      background: gradientBackground,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }),
    ...(variant === 'pattern' && patternBackground && { 
      backgroundImage: patternBackground,
      backgroundSize: patternSize,
      backgroundPosition: 'center',
      backgroundRepeat: 'repeat'
    }),
    ...(variant === 'texture' && textureBackground && { 
      backgroundImage: textureBackground,
      backgroundSize: `${100 * textureScale}%`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }),
    ...(variant === 'modern' && modernBackground && { 
      background: modernBackground,
      backgroundSize: modernType === 'noise' ? '20px 20px, 100% 100%' : 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: modernType === 'noise' ? 'repeat, no-repeat' : 'no-repeat'
    }),
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
      return ['var(--cria-primary)', 'var(--cria-primary-dark)'];
    case 'secondary':
      return ['var(--cria-secondary)', 'var(--cria-secondary-dark)'];
    case 'neutral':
      return ['var(--cria-background-light)', 'var(--cria-background-dark)'];
    case 'accent':
      return ['var(--cria-primary-light)', 'var(--cria-primary-darker)'];
    default:
      return ['var(--cria-primary)', 'var(--cria-primary-dark)'];
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
      return 'var(--cria-primary)';
    case 'secondary':
      return 'var(--cria-secondary)';
    case 'neutral':
      return 'var(--cria-text-secondary)';
    case 'accent':
      return 'var(--cria-primary-light)';
    default:
      return 'var(--cria-primary)';
  }
}

export default Backgrounds;
