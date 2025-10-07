import React from 'react';
import Badge from './Badge';
import { CriaTextHeadline1, CriaTextHeadline2, CriaTextBody1, CriaTextBody2, CriaTextTitle1, CriaTextTitle2 } from '../TextTokens';
import { spacing, colors, radii } from '../../tokens';
import { Check, WarningCircle, X, Star, Rocket, ThumbsUp } from 'phosphor-react';

/**
 * Badge component demo
 */
export const BadgeDemo: React.FC = () => {
  return (
    <div style={{ padding: spacing[6], maxWidth: '1000px' }}>
      <CriaTextHeadline1 style={{ marginBottom: spacing[8] }}>
        Badge Demo
      </CriaTextHeadline1>

      {/* Variants */}
      <section style={{ marginBottom: spacing[8] }}>
        <CriaTextHeadline2 style={{ marginBottom: spacing[4] }}>
          Variants
        </CriaTextHeadline2>
        <div style={{ display: 'flex', gap: spacing[3], flexWrap: 'wrap', alignItems: 'center' }}>
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
      <section style={{ marginBottom: spacing[8] }}>
        <CriaTextHeadline2 style={{ marginBottom: spacing[4] }}>
          Sizes
        </CriaTextHeadline2>
        <div style={{ display: 'flex', gap: spacing[3], alignItems: 'center', flexWrap: 'wrap' }}>
          <Badge size="sm" variant="primary">Small</Badge>
          <Badge size="md" variant="primary">Medium</Badge>
          <Badge size="lg" variant="primary">Large</Badge>
        </div>
      </section>

      {/* Styles */}
      <section style={{ marginBottom: spacing[8] }}>
        <CriaTextHeadline2 style={{ marginBottom: spacing[4] }}>
          Styles
        </CriaTextHeadline2>
        <div style={{ display: 'flex', gap: spacing[3], alignItems: 'center', flexWrap: 'wrap' }}>
          <Badge badgeStyle="solid" variant="primary">Solid</Badge>
          <Badge badgeStyle="outline" variant="primary">Outline</Badge>
          <Badge badgeStyle="soft" variant="primary">Soft</Badge>
        </div>
      </section>

      {/* Count Badges */}
      <section style={{ marginBottom: spacing[8] }}>
        <CriaTextHeadline2 style={{ marginBottom: spacing[4] }}>
          Count Badges
        </CriaTextHeadline2>
        <div style={{ display: 'flex', gap: spacing[3], alignItems: 'center', flexWrap: 'wrap' }}>
          <Badge variant="primary">1</Badge>
          <Badge variant="secondary">42</Badge>
          <Badge variant="success">999</Badge>
          <Badge variant="warning" maxCount={99}>150</Badge>
          <Badge variant="error" maxCount={9}>25</Badge>
        </div>
      </section>

      {/* Dot Badges */}
      <section style={{ marginBottom: spacing[8] }}>
        <CriaTextHeadline2 style={{ marginBottom: spacing[4] }}>
          Dot Badges
        </CriaTextHeadline2>
        <div style={{ display: 'flex', gap: spacing[3], alignItems: 'center', flexWrap: 'wrap' }}>
          <Badge variant="primary" dot>Dot</Badge>
          <Badge variant="secondary" dot>Dot</Badge>
          <Badge variant="success" dot>Dot</Badge>
          <Badge variant="warning" dot>Dot</Badge>
          <Badge variant="error" dot>Dot</Badge>
        </div>
      </section>

      {/* Interactive Badges */}
      <section style={{ marginBottom: spacing[8] }}>
        <CriaTextHeadline2 style={{ marginBottom: spacing[4] }}>
          Interactive Badges
        </CriaTextHeadline2>
        <div style={{ display: 'flex', gap: spacing[3], alignItems: 'center', flexWrap: 'wrap' }}>
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
      <section style={{ marginBottom: spacing[8] }}>
        <CriaTextHeadline2 style={{ marginBottom: spacing[4] }}>
          Badges with Icons
        </CriaTextHeadline2>
        <div style={{ display: 'flex', gap: spacing[3], alignItems: 'center', flexWrap: 'wrap' }}>
          <Badge 
            variant="success" 
            leftIcon={<Check size={12} />}
          >
            Completed
          </Badge>
          <Badge 
            variant="warning" 
            rightIcon={<WarningCircle size={12} />}
          >
            Warning
          </Badge>
          <Badge 
            variant="error" 
            leftIcon={<X size={12} />}
            rightIcon={<X size={12} />}
          >
            Error
          </Badge>
        </div>
      </section>

      {/* Real-world Examples */}
      <section style={{ marginBottom: spacing[8] }}>
        <CriaTextHeadline2 style={{ marginBottom: spacing[4] }}>
          Real-world Examples
        </CriaTextHeadline2>
        
        {/* Notification Badge */}
        <div style={{ marginBottom: spacing[4] }}>
          <CriaTextTitle1 style={{ marginBottom: spacing[2] }}>
            Notification Badge
          </CriaTextTitle1>
          <div style={{ display: 'flex', gap: spacing[3], alignItems: 'center' }}>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <div style={{ 
                padding: `${spacing[2]} ${spacing[4]}`, 
                backgroundColor: colors.gray[100], 
                borderRadius: radii.md,
                border: `1px solid ${colors.border.light}`
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
                padding: `${spacing[2]} ${spacing[4]}`, 
                backgroundColor: colors.gray[100], 
                borderRadius: radii.md,
                border: `1px solid ${colors.border.light}`
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
        <div style={{ marginBottom: spacing[4] }}>
          <CriaTextTitle1 style={{ marginBottom: spacing[2] }}>
            Status Badges
          </CriaTextTitle1>
          <div style={{ display: 'flex', gap: spacing[3], alignItems: 'center', flexWrap: 'wrap' }}>
            <Badge variant="success" badgeStyle="soft">Active</Badge>
            <Badge variant="warning" badgeStyle="soft">Pending</Badge>
            <Badge variant="error" badgeStyle="soft">Inactive</Badge>
            <Badge variant="info" badgeStyle="soft">Draft</Badge>
          </div>
        </div>

        {/* Category Badges */}
        <div style={{ marginBottom: spacing[4] }}>
          <CriaTextTitle1 style={{ marginBottom: spacing[2] }}>
            Category Badges
          </CriaTextTitle1>
          <div style={{ display: 'flex', gap: spacing[2], alignItems: 'center', flexWrap: 'wrap' }}>
            <Badge variant="primary" badgeStyle="outline">React</Badge>
            <Badge variant="secondary" badgeStyle="outline">TypeScript</Badge>
            <Badge variant="success" badgeStyle="outline">Design System</Badge>
            <Badge variant="info" badgeStyle="outline">UI/UX</Badge>
          </div>
        </div>
      </section>

      {/* Accessibility */}
      <section style={{ marginBottom: spacing[8] }}>
        <CriaTextHeadline2 style={{ marginBottom: spacing[4] }}>
          Accessibility Features
        </CriaTextHeadline2>
        <div style={{ display: 'flex', gap: spacing[3], alignItems: 'center', flexWrap: 'wrap' }}>
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
        <CriaTextBody2 
          id="badge-description" 
          style={{ marginTop: spacing[2], color: colors.gray[500] }}
        >
          This badge can be activated with Enter or Space key
        </CriaTextBody2>
      </section>
    </div>
  );
};

export default BadgeDemo;
