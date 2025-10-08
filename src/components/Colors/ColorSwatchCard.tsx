import React from 'react';
import { Card, CardContent } from '../Card';
import { CriaTextBody1, CriaTextBody2 } from '../TextTokens';
import { spacing, radii } from '../../tokens';

export interface ColorSwatchCardProps {
  /** Color name */
  name: string;
  /** Color value (hex, rgb, etc.) */
  value: string;
  /** Color description */
  description: string;
  /** Whether this is a dark background color (affects text color) */
  isDarkBackground?: boolean;
  /** Custom swatch size */
  swatchSize?: number;
}

/**
 * ColorSwatchCard component for displaying color tokens
 * Automatically handles theme-aware styling
 */
export const ColorSwatchCard: React.FC<ColorSwatchCardProps> = ({
  name,
  value,
  description,
  isDarkBackground = false,
  swatchSize = 48,
}) => {
  return (
    <Card variant="default" size="md">
      <CardContent>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: spacing[4]
        }}>
          {/* Color Swatch */}
          <div 
            style={{ 
              width: `${swatchSize}px`, 
              height: `${swatchSize}px`, 
              backgroundColor: value, 
              borderRadius: radii.md,
              border: '1px solid var(--cria-border-primary)',
              flexShrink: 0
            }} 
          />
          
          {/* Color Information */}
          <div style={{ flex: 1 }}>
            <CriaTextBody1>
              {name}
            </CriaTextBody1>
            <div style={{ marginTop: spacing[1] }}>
              <CriaTextBody2>
                {value}
              </CriaTextBody2>
            </div>
            <div style={{ marginTop: spacing[1] }}>
              <CriaTextBody2>
                {description}
              </CriaTextBody2>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

/**
 * DarkColorSwatchCard component for displaying dark background colors
 * Uses inverse text colors for better contrast
 */
export const DarkColorSwatchCard: React.FC<ColorSwatchCardProps> = ({
  name,
  value,
  description,
  swatchSize = 48,
}) => {
  return (
    <Card 
      variant="default" 
      size="md"
      style={{ backgroundColor: value }}
    >
      <CardContent>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: spacing[4]
        }}>
          {/* Color Swatch */}
          <div 
            style={{ 
              width: `${swatchSize}px`, 
              height: `${swatchSize}px`, 
              backgroundColor: 'var(--cria-surface-primary)', 
              borderRadius: radii.md,
              border: '1px solid var(--cria-border-primary)',
              flexShrink: 0
            }} 
          />
          
          {/* Color Information */}
          <div style={{ flex: 1 }}>
            <div style={{ color: 'var(--cria-text-inverse)' }}>
              <CriaTextBody1>
                {name}
              </CriaTextBody1>
            </div>
            <div style={{ color: 'var(--cria-text-inverse)', marginTop: spacing[1] }}>
              <CriaTextBody2>
                {value}
              </CriaTextBody2>
            </div>
            <div style={{ color: 'var(--cria-text-inverse)', marginTop: spacing[1] }}>
              <CriaTextBody2>
                {description}
              </CriaTextBody2>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ColorSwatchCard;
