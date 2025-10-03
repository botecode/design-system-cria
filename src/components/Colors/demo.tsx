import React from 'react';
import { Typography } from '../Typography/Typography';

export const ColorsDemo: React.FC = () => {
  const colorPalette = [
    { name: 'Primary', value: '#7566A1', description: 'Main brand color - ONLY for titles' },
    { name: 'Content Text', value: '#3A2E52', description: 'Primary dark for content text' },
    { name: 'Default Text', value: '#374151', description: 'Dark gray for default text' },
    { name: 'Secondary', value: '#28DDB9', description: 'Secondary brand color' },
    { name: 'Secondary Dark', value: '#167B7A', description: 'Secondary variant for darker contexts' },
    { name: 'Success', value: '#10B981', description: 'Success states and positive actions' },
    { name: 'Warning', value: '#F59E0B', description: 'Warning states and caution' },
    { name: 'Error', value: '#EF4444', description: 'Error states and destructive actions' },
    { name: 'Info', value: '#3B82F6', description: 'Informational content' },
    { name: 'Disabled', value: '#9CA3AF', description: 'Disabled states' },
    { name: 'Inverse', value: '#FFFFFF', description: 'Text on dark backgrounds' },
  ];

  const backgroundColors = [
    { name: 'Background Primary', value: '#FFFFFF', description: 'Main background' },
    { name: 'Background Secondary', value: '#F9FAFB', description: 'Secondary background' },
    { name: 'Background Tertiary', value: '#F3F4F6', description: 'Tertiary background' },
    { name: 'Background Dark', value: '#111827', description: 'Dark background' },
  ];

  const ColorSwatch: React.FC<{ name: string; value: string; description: string }> = ({ 
    name, 
    value, 
    description 
  }) => (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: '16px', 
      padding: '12px',
      border: '1px solid #E5E7EB',
      borderRadius: '8px',
      backgroundColor: '#FFFFFF'
    }}>
      <div 
        style={{ 
          width: '48px', 
          height: '48px', 
          backgroundColor: value, 
          borderRadius: '8px',
          border: '1px solid #E5E7EB',
          flexShrink: 0
        }} 
      />
      <div style={{ flex: 1 }}>
        <Typography variant="body" weight="medium" color="primary">
          {name}
        </Typography>
        <Typography variant="bodySmall" color="secondary" style={{ marginTop: '4px' }}>
          {value}
        </Typography>
        <Typography variant="caption" color="secondary" style={{ marginTop: '2px' }}>
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
      gap: '16px', 
      padding: '12px',
      border: '1px solid #374151',
      borderRadius: '8px',
      backgroundColor: value
    }}>
      <div 
        style={{ 
          width: '48px', 
          height: '48px', 
          backgroundColor: '#FFFFFF', 
          borderRadius: '8px',
          border: '1px solid #374151',
          flexShrink: 0
        }} 
      />
      <div style={{ flex: 1 }}>
        <Typography variant="body" weight="medium" color="inverse">
          {name}
        </Typography>
        <Typography variant="bodySmall" color="inverse" style={{ marginTop: '4px' }}>
          {value}
        </Typography>
        <Typography variant="caption" color="inverse" style={{ marginTop: '2px' }}>
          {description}
        </Typography>
      </div>
    </div>
  );

  return (
    <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
      <Typography variant="title1" weight="bold" style={{ marginBottom: '32px' }}>
        Colors
      </Typography>
      
      <Typography variant="body" style={{ marginBottom: '32px' }}>
        The CRIA UI color palette provides a comprehensive set of colors for building consistent and accessible interfaces.
      </Typography>

      {/* Semantic Colors */}
      <div style={{ marginBottom: '48px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '24px' }}>
          Semantic Colors
        </Typography>
        <Typography variant="body" style={{ marginBottom: '24px' }}>
          These colors have semantic meaning and should be used consistently across the application.
        </Typography>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '16px' 
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
      <div style={{ marginBottom: '48px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '24px' }}>
          Background Colors
        </Typography>
        <Typography variant="body" style={{ marginBottom: '24px' }}>
          Background colors for different surface levels and contexts.
        </Typography>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '16px' 
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
      <div style={{ marginBottom: '48px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '24px' }}>
          Color Usage Examples
        </Typography>
        <Typography variant="body" style={{ marginBottom: '24px' }}>
          Examples of how colors are used in different contexts.
        </Typography>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '24px' 
        }}>
          {/* Success Example */}
          <div style={{ 
            padding: '20px', 
            border: '1px solid #10B981', 
            borderRadius: '8px',
            backgroundColor: '#ECFDF5'
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
            padding: '20px', 
            border: '1px solid #F59E0B', 
            borderRadius: '8px',
            backgroundColor: '#FFFBEB'
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
            padding: '20px', 
            border: '1px solid #EF4444', 
            borderRadius: '8px',
            backgroundColor: '#FEF2F2'
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
            padding: '20px', 
            border: '1px solid #3B82F6', 
            borderRadius: '8px',
            backgroundColor: '#EFF6FF'
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
        padding: '20px', 
        backgroundColor: '#F9FAFB', 
        borderRadius: '8px',
        border: '1px solid #E5E7EB'
      }}>
        <Typography variant="h3" weight="medium" style={{ marginBottom: '12px' }}>
          Accessibility Guidelines
        </Typography>
        <Typography variant="body" style={{ marginBottom: '8px' }}>
          • Ensure sufficient color contrast ratios (4.5:1 for normal text, 3:1 for large text)
        </Typography>
        <Typography variant="body" style={{ marginBottom: '8px' }}>
          • Don't rely solely on color to convey information
        </Typography>
        <Typography variant="body">
          • Test your designs with color blindness simulators
        </Typography>
      </div>
    </div>
  );
};
