import React from 'react';
import { CriaTextHeadline1, CriaTextHeadline2, CriaTextTitle1, CriaTextTitle2, CriaTextBody1, CriaTextBody2 } from '../TextTokens';
import { Card, CardContent } from '../Card';
import { ColorSwatchCard, DarkColorSwatchCard } from './ColorSwatchCard';
import { colors, spacing, radii } from '../../tokens';

export const ColorsDemo: React.FC = () => {
  const colorPalette = [
    { name: 'Primary', value: colors.primary, description: 'Main brand color' },
    { name: 'Content Text', value: colors.text.content, description: 'Primary dark for content text' },
    { name: 'Default Text', value: colors.text.primary, description: 'Dark gray for default text' },
    { name: 'Secondary', value: colors.secondary, description: 'Secondary brand color' },
    { name: 'Secondary Dark', value: colors.secondaryDark, description: 'Secondary variant for darker contexts' },
    { name: 'Success', value: colors.success, description: 'Success states and positive actions' },
    { name: 'Warning', value: colors.warning, description: 'Warning states and caution' },
    { name: 'Error', value: colors.error, description: 'Error states and destructive actions' },
    { name: 'Info', value: colors.info, description: 'Informational content' },
    { name: 'Disabled', value: colors.text.disabled, description: 'Disabled states' },
    { name: 'Inverse', value: colors.white, description: 'Text on dark backgrounds' },
  ];

  const backgroundColors = [
    { name: 'Background Primary', value: colors.backgroundLight, description: 'Main background' },
    { name: 'Background Secondary', value: colors.gray[50], description: 'Secondary background' },
    { name: 'Background Tertiary', value: colors.gray[100], description: 'Tertiary background' },
    { name: 'Background Dark', value: colors.gray[900], description: 'Dark background' },
  ];


  return (
    <div style={{ padding: spacing[6], maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ marginBottom: spacing[8] }}>
        <CriaTextHeadline1>
          Colors
        </CriaTextHeadline1>
      </div>
      
      <div style={{ marginBottom: spacing[8] }}>
        <CriaTextBody1>
          The CRIA UI color palette provides a comprehensive set of colors for building consistent and accessible interfaces.
        </CriaTextBody1>
      </div>

      {/* Semantic Colors */}
      <div style={{ marginBottom: spacing[12] }}>
        <div style={{ marginBottom: spacing[6] }}>
          <CriaTextHeadline2>
            Semantic Colors
          </CriaTextHeadline2>
        </div>
        <div style={{ marginBottom: spacing[6] }}>
          <CriaTextBody1>
            These colors have semantic meaning and should be used consistently across the application.
          </CriaTextBody1>
        </div>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: spacing[4] 
        }}>
          {colorPalette.map((color) => (
            <ColorSwatchCard
              key={color.name}
              name={color.name}
              value={color.value}
              description={color.description}
            />
          ))}
        </div>
      </div>

      {/* Background Colors */}
      <div style={{ marginBottom: spacing[12] }}>
        <div style={{ marginBottom: spacing[6] }}>
          <CriaTextHeadline2>
            Background Colors
          </CriaTextHeadline2>
        </div>
        <div style={{ marginBottom: spacing[6] }}>
          <CriaTextBody1>
            Background colors for different surface levels and contexts.
          </CriaTextBody1>
        </div>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: spacing[4] 
        }}>
          {backgroundColors.map((color) => (
            color.name === 'Background Dark' ? (
              <DarkColorSwatchCard
                key={color.name}
                name={color.name}
                value={color.value}
                description={color.description}
              />
            ) : (
              <ColorSwatchCard
                key={color.name}
                name={color.name}
                value={color.value}
                description={color.description}
              />
            )
          ))}
        </div>
      </div>

      {/* Color Usage Examples */}
      <div style={{ marginBottom: spacing[12] }}>
        <div style={{ marginBottom: spacing[6] }}>
          <CriaTextHeadline2>
            Color Usage Examples
          </CriaTextHeadline2>
        </div>
        <div style={{ marginBottom: spacing[6] }}>
          <CriaTextBody1>
            Examples of how colors are used in different contexts.
          </CriaTextBody1>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: spacing[6] 
        }}>
          {/* Success Example */}
          <Card 
            variant="outlined" 
            size="lg"
            style={{ borderColor: 'var(--cria-success)' }}
          >
            <CardContent>
              <div style={{ color: 'var(--cria-success)', marginBottom: '8px' }}>
                <CriaTextTitle2>
                  Success Message
                </CriaTextTitle2>
              </div>
              <CriaTextBody1>
                Your action was completed successfully.
              </CriaTextBody1>
            </CardContent>
          </Card>

          {/* Warning Example */}
          <Card 
            variant="outlined" 
            size="lg"
            style={{ borderColor: 'var(--cria-warning)' }}
          >
            <CardContent>
              <div style={{ color: 'var(--cria-warning)', marginBottom: '8px' }}>
                <CriaTextTitle2>
                  Warning Message
                </CriaTextTitle2>
              </div>
              <CriaTextBody1>
                Please review your input before proceeding.
              </CriaTextBody1>
            </CardContent>
          </Card>

          {/* Error Example */}
          <Card 
            variant="outlined" 
            size="lg"
            style={{ borderColor: 'var(--cria-error)' }}
          >
            <CardContent>
              <div style={{ color: 'var(--cria-error)', marginBottom: '8px' }}>
                <CriaTextTitle2>
                  Error Message
                </CriaTextTitle2>
              </div>
              <CriaTextBody1>
                Something went wrong. Please try again.
              </CriaTextBody1>
            </CardContent>
          </Card>

          {/* Info Example */}
          <Card 
            variant="outlined" 
            size="lg"
            style={{ borderColor: 'var(--cria-info)' }}
          >
            <CardContent>
              <div style={{ color: 'var(--cria-info)', marginBottom: '8px' }}>
                <CriaTextTitle2>
                  Information
                </CriaTextTitle2>
              </div>
              <CriaTextBody1>
                Here's some helpful information for you.
              </CriaTextBody1>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Accessibility Notes */}
      <Card variant="filled" size="lg">
        <CardContent>
          <div style={{ marginBottom: spacing[3] }}>
            <CriaTextTitle2>
              Accessibility Guidelines
            </CriaTextTitle2>
          </div>
          <div style={{ marginBottom: spacing[2] }}>
            <CriaTextBody1>
              • Ensure sufficient color contrast ratios (4.5:1 for normal text, 3:1 for large text)
            </CriaTextBody1>
          </div>
          <div style={{ marginBottom: spacing[2] }}>
            <CriaTextBody1>
              • Don't rely solely on color to convey information
            </CriaTextBody1>
          </div>
          <CriaTextBody1>
            • Test your designs with color blindness simulators
          </CriaTextBody1>
        </CardContent>
      </Card>
    </div>
  );
};
