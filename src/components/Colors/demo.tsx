import React from 'react';
import { CriaTextHeadline1, CriaTextHeadline2, CriaTextTitle1, CriaTextTitle2, CriaTextBody1, CriaTextBody2 } from '../TextTokens';
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

  const ColorSwatch: React.FC<{ name: string; value: string; description: string }> = ({ 
    name, 
    value, 
    description 
  }) => (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: spacing[4], 
      padding: spacing[3],
      border: `1px solid ${colors.border.light}`,
      borderRadius: radii.md,
      backgroundColor: colors.backgroundLight
    }}>
      <div 
        style={{ 
          width: '48px', 
          height: '48px', 
          backgroundColor: value, 
          borderRadius: radii.md,
          border: `1px solid ${colors.border.light}`,
          flexShrink: 0
        }} 
      />
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
  );

  const DarkColorSwatch: React.FC<{ name: string; value: string; description: string }> = ({ 
    name, 
    value, 
    description 
  }) => (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: spacing[4], 
      padding: spacing[3],
      border: `1px solid ${colors.text.primary}`,
      borderRadius: radii.md,
      backgroundColor: value
    }}>
      <div 
        style={{ 
          width: '48px', 
          height: '48px', 
          backgroundColor: colors.white, 
          borderRadius: radii.md,
          border: `1px solid ${colors.text.primary}`,
          flexShrink: 0
        }} 
      />
      <div style={{ flex: 1 }}>
        <div style={{ color: 'white' }}>
          <CriaTextBody1>
            {name}
          </CriaTextBody1>
        </div>
        <div style={{ color: 'white', marginTop: spacing[1] }}>
          <CriaTextBody2>
            {value}
          </CriaTextBody2>
        </div>
        <div style={{ color: 'white', marginTop: spacing[1] }}>
          <CriaTextBody2>
            {description}
          </CriaTextBody2>
        </div>
      </div>
    </div>
  );

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
            <ColorSwatch
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
              <DarkColorSwatch
                key={color.name}
                name={color.name}
                value={color.value}
                description={color.description}
              />
            ) : (
              <ColorSwatch
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
          <div style={{ 
            padding: spacing[5], 
            border: `1px solid ${colors.success}`, 
            borderRadius: radii.md,
            backgroundColor: colors.gray[50]
          }}>
            <div style={{ color: colors.success, marginBottom: '8px' }}>
              <CriaTextTitle2>
                Success Message
              </CriaTextTitle2>
            </div>
            <CriaTextBody1>
              Your action was completed successfully.
            </CriaTextBody1>
          </div>

          {/* Warning Example */}
          <div style={{ 
            padding: spacing[5], 
            border: `1px solid ${colors.warning}`, 
            borderRadius: radii.md,
            backgroundColor: colors.gray[50]
          }}>
            <div style={{ color: colors.warning, marginBottom: '8px' }}>
              <CriaTextTitle2>
                Warning Message
              </CriaTextTitle2>
            </div>
            <CriaTextBody1>
              Please review your input before proceeding.
            </CriaTextBody1>
          </div>

          {/* Error Example */}
          <div style={{ 
            padding: spacing[5], 
            border: `1px solid ${colors.error}`, 
            borderRadius: radii.md,
            backgroundColor: colors.gray[50]
          }}>
            <div style={{ color: colors.error, marginBottom: '8px' }}>
              <CriaTextTitle2>
                Error Message
              </CriaTextTitle2>
            </div>
            <CriaTextBody1>
              Something went wrong. Please try again.
            </CriaTextBody1>
          </div>

          {/* Info Example */}
          <div style={{ 
            padding: spacing[5], 
            border: `1px solid ${colors.info}`, 
            borderRadius: radii.md,
            backgroundColor: colors.gray[50]
          }}>
            <div style={{ color: colors.info, marginBottom: '8px' }}>
              <CriaTextTitle2>
                Information
              </CriaTextTitle2>
            </div>
            <CriaTextBody1>
              Here's some helpful information for you.
            </CriaTextBody1>
          </div>
        </div>
      </div>

      {/* Accessibility Notes */}
      <div style={{ 
        padding: spacing[5], 
        backgroundColor: colors.gray[50], 
        borderRadius: radii.md,
        border: `1px solid ${colors.border.light}`
      }}>
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
      </div>
    </div>
  );
};
