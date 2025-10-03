import React from 'react';
import Typography from './Typography';

/**
 * Typography component demo
 */
export const TypographyDemo: React.FC = () => {
  return (
    <div style={{ padding: '24px', maxWidth: '800px' }}>
      <Typography variant="title1" weight="bold" style={{ marginBottom: '32px' }}>
        Typography Demo
      </Typography>

      <div style={{ marginBottom: '24px' }}>
        <Typography variant="h1" weight="bold" style={{ marginBottom: '16px' }}>
          Heading 1
        </Typography>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Heading 2
        </Typography>
        <Typography variant="h3" weight="medium" style={{ marginBottom: '16px' }}>
          Heading 3
        </Typography>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <Typography variant="h3" color="primary" weight="medium" style={{ marginBottom: '16px' }}>
          Titles (ALL CAPS)
        </Typography>
        <Typography variant="title1" weight="bold" style={{ marginBottom: '16px' }}>
          Title 1 - Large Title
        </Typography>
        <Typography variant="title2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Title 2 - Medium Title
        </Typography>
        <Typography variant="title3" weight="medium" style={{ marginBottom: '16px' }}>
          Title 3 - Small Title
        </Typography>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <Typography variant="body" style={{ marginBottom: '12px' }}>
          This is body text using the regular weight. It's perfect for paragraphs and general content.
        </Typography>
        <Typography variant="bodySmall" style={{ marginBottom: '12px' }}>
          This is smaller body text, ideal for captions and secondary information.
        </Typography>
        <Typography variant="caption">
          This is caption text, typically used for labels and fine print.
        </Typography>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <Typography variant="h3" color="primary" weight="medium" style={{ marginBottom: '16px' }}>
          Color Variants
        </Typography>
        <Typography variant="body" color="primary" style={{ marginBottom: '8px' }}>
          Primary text color - Main brand purple (#7566A1)
        </Typography>
        <Typography variant="body" color="content" style={{ marginBottom: '8px' }}>
          Content text color - Primary dark for content (#3A2E52)
        </Typography>
        <Typography variant="body" color="primaryLight" style={{ marginBottom: '8px' }}>
          Primary Light text color - Darker purple variant (#3A2E52)
        </Typography>
        <Typography variant="body" color="secondary" style={{ marginBottom: '8px' }}>
          Secondary text color - Brand teal (#28DDB9)
        </Typography>
        <Typography variant="body" color="secondaryDark" style={{ marginBottom: '8px' }}>
          Secondary Dark text color - Darker teal variant (#167B7A)
        </Typography>
        <Typography variant="body" color="disabled" style={{ marginBottom: '8px' }}>
          Disabled text color (light gray)
        </Typography>
        <Typography variant="body" color="success" style={{ marginBottom: '8px' }}>
          Success text color (green)
        </Typography>
        <Typography variant="body" color="warning" style={{ marginBottom: '8px' }}>
          Warning text color (orange)
        </Typography>
        <Typography variant="body" color="error" style={{ marginBottom: '8px' }}>
          Error text color (red)
        </Typography>
        <Typography variant="body" color="info" style={{ marginBottom: '8px' }}>
          Info text color (blue)
        </Typography>
        <div style={{ backgroundColor: '#111827', padding: '12px', borderRadius: '8px' }}>
          <Typography variant="body" color="inverse">
            Inverse text color (white on dark background)
          </Typography>
        </div>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <Typography variant="h3" weight="medium" style={{ marginBottom: '16px' }}>
          Font Weights
        </Typography>
        <Typography variant="body" weight="thin" style={{ marginBottom: '4px' }}>
          Thin (100) - Lorem ipsum dolor sit amet
        </Typography>
        <Typography variant="body" weight="light" style={{ marginBottom: '4px' }}>
          Light (300) - Lorem ipsum dolor sit amet
        </Typography>
        <Typography variant="body" weight="regular" style={{ marginBottom: '4px' }}>
          Regular (400) - Lorem ipsum dolor sit amet
        </Typography>
        <Typography variant="body" weight="medium" style={{ marginBottom: '4px' }}>
          Medium (500) - Lorem ipsum dolor sit amet
        </Typography>
        <Typography variant="body" weight="semiBold" style={{ marginBottom: '4px' }}>
          Semi Bold (600) - Lorem ipsum dolor sit amet
        </Typography>
        <Typography variant="body" weight="bold" style={{ marginBottom: '4px' }}>
          Bold (700) - Lorem ipsum dolor sit amet
        </Typography>
        <Typography variant="body" weight="extraBold" style={{ marginBottom: '4px' }}>
          Extra Bold (800) - Lorem ipsum dolor sit amet
        </Typography>
        <Typography variant="body" weight="heavy">
          Heavy (900) - Lorem ipsum dolor sit amet
        </Typography>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <Typography variant="h3" weight="medium" style={{ marginBottom: '16px' }}>
          Text Alignment
        </Typography>
        <div style={{ border: '1px solid #E5E7EB', padding: '12px', marginBottom: '8px', borderRadius: '4px' }}>
          <Typography variant="body" align="left">
            Left aligned text (default)
          </Typography>
        </div>
        <div style={{ border: '1px solid #E5E7EB', padding: '12px', marginBottom: '8px', borderRadius: '4px' }}>
          <Typography variant="body" align="center">
            Center aligned text
          </Typography>
        </div>
        <div style={{ border: '1px solid #E5E7EB', padding: '12px', marginBottom: '8px', borderRadius: '4px' }}>
          <Typography variant="body" align="right">
            Right aligned text
          </Typography>
        </div>
        <div style={{ border: '1px solid #E5E7EB', padding: '12px', marginBottom: '8px', borderRadius: '4px', width: '100%' }}>
          <Typography variant="body" align="justify">
            Justified text that spreads across the full width of the container, creating even margins on both sides. This demonstrates how justified text creates uniform spacing.
          </Typography>
        </div>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <Typography variant="h3" weight="medium" style={{ marginBottom: '16px' }}>
          Line Heights
        </Typography>
        <Typography variant="body" lineHeight="tight" style={{ marginBottom: '8px' }}>
          Tight line height (1.2) - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
        <Typography variant="body" lineHeight="normal" style={{ marginBottom: '8px' }}>
          Normal line height (1.5) - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
        <Typography variant="body" lineHeight="relaxed">
          Relaxed line height (1.75) - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </div>

      <div>
        <Typography variant="h3" weight="medium" style={{ marginBottom: '16px' }}>
          Custom HTML Elements
        </Typography>
        <Typography variant="body" as="div" style={{ marginBottom: '8px' }}>
          Rendered as a div element
        </Typography>
        <Typography variant="body" as="span" style={{ marginBottom: '8px' }}>
          Rendered as a span element
        </Typography>
        <Typography variant="body" as="strong" style={{ marginBottom: '8px' }}>
          Rendered as a strong element
        </Typography>
        <Typography variant="body" as="em">
          Rendered as an em element
        </Typography>
      </div>
    </div>
  );
};

export default TypographyDemo;
