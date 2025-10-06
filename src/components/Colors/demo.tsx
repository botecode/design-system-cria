import React from 'react';
import { Typography } from '../Typography/Typography';
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
        <Typography variant="body" weight="medium" color="primary">
          {name}
        </Typography>
        <Typography variant="bodySmall" style={{ marginTop: spacing[1] }}>
          {value}
        </Typography>
        <Typography variant="caption" style={{ marginTop: spacing[1] }}>
          {description}
        </Typography>
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
        <Typography variant="body" weight="medium" color="inverse">
          {name}
        </Typography>
        <Typography variant="bodySmall" color="inverse" style={{ marginTop: spacing[1] }}>
          {value}
        </Typography>
        <Typography variant="caption" color="inverse" style={{ marginTop: spacing[1] }}>
          {description}
        </Typography>
      </div>
    </div>
  );

  return (
    <div style={{ padding: spacing[6], maxWidth: '1200px', margin: '0 auto' }}>
      <Typography variant="title1" weight="bold" style={{ marginBottom: spacing[8] }}>
        Colors
      </Typography>
      
      <Typography variant="body" style={{ marginBottom: spacing[8] }}>
        The CRIA UI color palette provides a comprehensive set of colors for building consistent and accessible interfaces.
      </Typography>

      {/* Semantic Colors */}
      <div style={{ marginBottom: spacing[12] }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: spacing[6] }}>
          Semantic Colors
        </Typography>
        <Typography variant="body" style={{ marginBottom: spacing[6] }}>
          These colors have semantic meaning and should be used consistently across the application.
        </Typography>
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
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: spacing[6] }}>
          Background Colors
        </Typography>
        <Typography variant="body" style={{ marginBottom: spacing[6] }}>
          Background colors for different surface levels and contexts.
        </Typography>
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
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: spacing[6] }}>
          Color Usage Examples
        </Typography>
        <Typography variant="body" style={{ marginBottom: spacing[6] }}>
          Examples of how colors are used in different contexts.
        </Typography>
        
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
            <Typography variant="h3" color="success" style={{ marginBottom: '8px' }}>
              Success Message
            </Typography>
            <Typography variant="body" color="primary">
              Your action was completed successfully.
            </Typography>
          </div>

          {/* Warning Example */}
          <div style={{ 
            padding: spacing[5], 
            border: `1px solid ${colors.warning}`, 
            borderRadius: radii.md,
            backgroundColor: colors.gray[50]
          }}>
            <Typography variant="h3" color="warning" style={{ marginBottom: '8px' }}>
              Warning Message
            </Typography>
            <Typography variant="body" color="primary">
              Please review your input before proceeding.
            </Typography>
          </div>

          {/* Error Example */}
          <div style={{ 
            padding: spacing[5], 
            border: `1px solid ${colors.error}`, 
            borderRadius: radii.md,
            backgroundColor: colors.gray[50]
          }}>
            <Typography variant="h3" color="error" style={{ marginBottom: '8px' }}>
              Error Message
            </Typography>
            <Typography variant="body" color="primary">
              Something went wrong. Please try again.
            </Typography>
          </div>

          {/* Info Example */}
          <div style={{ 
            padding: spacing[5], 
            border: `1px solid ${colors.info}`, 
            borderRadius: radii.md,
            backgroundColor: colors.gray[50]
          }}>
            <Typography variant="h3" color="info" style={{ marginBottom: '8px' }}>
              Information
            </Typography>
            <Typography variant="body" color="primary">
              Here's some helpful information for you.
            </Typography>
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
        <Typography variant="h3" weight="medium" style={{ marginBottom: spacing[3] }}>
          Accessibility Guidelines
        </Typography>
        <Typography variant="body" style={{ marginBottom: spacing[2] }}>
          • Ensure sufficient color contrast ratios (4.5:1 for normal text, 3:1 for large text)
        </Typography>
        <Typography variant="body" style={{ marginBottom: spacing[2] }}>
          • Don't rely solely on color to convey information
        </Typography>
        <Typography variant="body">
          • Test your designs with color blindness simulators
        </Typography>
      </div>
    </div>
  );
};
