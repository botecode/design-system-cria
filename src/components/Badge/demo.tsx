import React from 'react';
import Badge from './Badge';
import Typography from '../Typography/Typography';

/**
 * Badge component demo
 */
export const BadgeDemo: React.FC = () => {
  return (
    <div style={{ padding: '24px', maxWidth: '1000px' }}>
      <Typography variant="title1" weight="bold" style={{ marginBottom: '32px' }}>
        Badge Demo
      </Typography>

      {/* Variants */}
      <section style={{ marginBottom: '32px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Variants
        </Typography>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Badge variant="default">Default</Badge>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="info">Info</Badge>
        </div>
      </section>

      {/* Sizes */}
      <section style={{ marginBottom: '32px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Sizes
        </Typography>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Badge size="sm" variant="primary">Small</Badge>
          <Badge size="md" variant="primary">Medium</Badge>
          <Badge size="lg" variant="primary">Large</Badge>
        </div>
      </section>

      {/* Styles */}
      <section style={{ marginBottom: '32px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Styles
        </Typography>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Badge badgeStyle="solid" variant="primary">Solid</Badge>
          <Badge badgeStyle="outline" variant="primary">Outline</Badge>
          <Badge badgeStyle="soft" variant="primary">Soft</Badge>
        </div>
      </section>

      {/* Count Badges */}
      <section style={{ marginBottom: '32px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Count Badges
        </Typography>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Badge variant="primary">1</Badge>
          <Badge variant="secondary">42</Badge>
          <Badge variant="success">999</Badge>
          <Badge variant="warning" maxCount={99}>150</Badge>
          <Badge variant="error" maxCount={9}>25</Badge>
        </div>
      </section>

      {/* Dot Badges */}
      <section style={{ marginBottom: '32px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Dot Badges
        </Typography>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Badge variant="primary" dot>Dot</Badge>
          <Badge variant="secondary" dot>Dot</Badge>
          <Badge variant="success" dot>Dot</Badge>
          <Badge variant="warning" dot>Dot</Badge>
          <Badge variant="error" dot>Dot</Badge>
        </div>
      </section>

      {/* Interactive Badges */}
      <section style={{ marginBottom: '32px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Interactive Badges
        </Typography>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Badge 
            variant="primary" 
            interactive 
            onClick={() => alert('Badge clicked!')}
          >
            Clickable
          </Badge>
          <Badge 
            variant="secondary" 
            interactive 
            onClick={() => alert('Another badge clicked!')}
          >
            Interactive
          </Badge>
          <Badge 
            variant="success" 
            interactive 
            disabled
            onClick={() => alert('This should not show')}
          >
            Disabled
          </Badge>
        </div>
      </section>

      {/* Badges with Icons */}
      <section style={{ marginBottom: '32px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Badges with Icons
        </Typography>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Badge 
            variant="success" 
            leftIcon={
              <span style={{ fontSize: '12px' }}>✓</span>
            }
          >
            Completed
          </Badge>
          <Badge 
            variant="warning" 
            rightIcon={
              <span style={{ fontSize: '12px' }}>!</span>
            }
          >
            Warning
          </Badge>
          <Badge 
            variant="error" 
            leftIcon={
              <span style={{ fontSize: '12px' }}>×</span>
            }
            rightIcon={
              <span style={{ fontSize: '12px' }}>×</span>
            }
          >
            Error
          </Badge>
        </div>
      </section>

      {/* Real-world Examples */}
      <section style={{ marginBottom: '32px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Real-world Examples
        </Typography>
        
        {/* Notification Badge */}
        <div style={{ marginBottom: '16px' }}>
          <Typography variant="h3" weight="medium" style={{ marginBottom: '8px' }}>
            Notification Badge
          </Typography>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <div style={{ 
                padding: '8px 16px', 
                backgroundColor: '#f3f4f6', 
                borderRadius: '8px',
                border: '1px solid #e5e7eb'
              }}>
                Messages
              </div>
              <Badge 
                variant="error" 
                dot
                style={{ 
                  position: 'absolute', 
                  top: '-4px', 
                  right: '-4px' 
                }}
              >
                Dot
              </Badge>
            </div>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <div style={{ 
                padding: '8px 16px', 
                backgroundColor: '#f3f4f6', 
                borderRadius: '8px',
                border: '1px solid #e5e7eb'
              }}>
                Notifications
              </div>
              <Badge 
                variant="primary" 
                style={{ 
                  position: 'absolute', 
                  top: '-8px', 
                  right: '-8px' 
                }}
              >
                3
              </Badge>
            </div>
          </div>
        </div>

        {/* Status Badges */}
        <div style={{ marginBottom: '16px' }}>
          <Typography variant="h3" weight="medium" style={{ marginBottom: '8px' }}>
            Status Badges
          </Typography>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
            <Badge variant="success" badgeStyle="soft">Active</Badge>
            <Badge variant="warning" badgeStyle="soft">Pending</Badge>
            <Badge variant="error" badgeStyle="soft">Inactive</Badge>
            <Badge variant="info" badgeStyle="soft">Draft</Badge>
          </div>
        </div>

        {/* Category Badges */}
        <div style={{ marginBottom: '16px' }}>
          <Typography variant="h3" weight="medium" style={{ marginBottom: '8px' }}>
            Category Badges
          </Typography>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
            <Badge variant="primary" badgeStyle="outline">React</Badge>
            <Badge variant="secondary" badgeStyle="outline">TypeScript</Badge>
            <Badge variant="success" badgeStyle="outline">Design System</Badge>
            <Badge variant="info" badgeStyle="outline">UI/UX</Badge>
          </div>
        </div>
      </section>

      {/* Accessibility */}
      <section style={{ marginBottom: '32px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Accessibility Features
        </Typography>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Badge 
            variant="primary" 
            interactive 
            onClick={() => alert('Accessible badge clicked!')}
            aria-label="Click to view details"
          >
            Accessible Badge
          </Badge>
          <Badge 
            variant="secondary" 
            interactive 
            onClick={() => alert('Keyboard accessible!')}
            aria-describedby="badge-description"
          >
            Keyboard Accessible
          </Badge>
        </div>
        <Typography 
          id="badge-description" 
          variant="bodySmall" 
          style={{ marginTop: '8px', color: '#6b7280' }}
        >
          This badge can be activated with Enter or Space key
        </Typography>
      </section>
    </div>
  );
};

export default BadgeDemo;
