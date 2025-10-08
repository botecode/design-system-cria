import React from 'react';
import { CriaTextHeadline1, CriaTextHeadline2, CriaTextBody1, CriaTextBody2, CriaTextTitle1, CriaTextTitle2 } from '../TextTokens';
import { Button } from '../Button';
import { Card, CardHeader, CardContent } from '../Card';
import { Input } from '../Input';
import Badge from '../Badge';
import Tooltip from './Tooltip';
import { spacing, colors, radii } from '../../tokens';
import { Info, Question, WarningCircle, CheckCircle, XCircle, Star } from 'phosphor-react';

export const TooltipDemo: React.FC = () => {
  return (
    <div style={{ padding: spacing[6], maxWidth: '1000px' }}>
      <div style={{ marginBottom: spacing[8] }}>
        <CriaTextHeadline1>
          Tooltip Demo
        </CriaTextHeadline1>
      </div>

      {/* Basic Tooltips */}
      <section style={{ marginBottom: spacing[12] }}>
        <div style={{ marginBottom: spacing[4] }}>
          <CriaTextHeadline2>
            Basic Tooltips
          </CriaTextHeadline2>
        </div>
        <div style={{ marginBottom: spacing[6] }}>
          <CriaTextBody1>
            Simple tooltips that appear on hover or focus. They provide contextual information without cluttering the interface.
          </CriaTextBody1>
        </div>
        <div style={{ display: 'flex', gap: spacing[4], alignItems: 'center', flexWrap: 'wrap' }}>
          <Tooltip content="This is a helpful tooltip">
            <Button variant="outline">Hover me</Button>
          </Tooltip>
          
          <Tooltip content="Click this button to save your changes">
            <Button variant="primary">Save</Button>
          </Tooltip>
          
          <Tooltip content="This action cannot be undone">
            <Button variant="danger">Delete</Button>
          </Tooltip>
        </div>
      </section>

      {/* Tooltip Variants */}
      <section style={{ marginBottom: spacing[12] }}>
        <CriaTextHeadline2 style={{ marginBottom: spacing[4] }}>
          Tooltip Variants
        </CriaTextHeadline2>
        <CriaTextBody1 style={{ marginBottom: spacing[6] }}>
          Different visual styles for different types of information.
        </CriaTextBody1>
        <div style={{ display: 'flex', gap: spacing[4], alignItems: 'center', flexWrap: 'wrap' }}>
          <Tooltip content="Default tooltip style" variant="default">
            <Button variant="outline">Default</Button>
          </Tooltip>
          
          <Tooltip content="Dark tooltip for better contrast" variant="dark">
            <Button variant="outline">Dark</Button>
          </Tooltip>
          
          <Tooltip content="Light tooltip for dark backgrounds" variant="light">
            <Button variant="outline">Light</Button>
          </Tooltip>
          
          <Tooltip content="Primary tooltip with brand color" variant="primary">
            <Button variant="outline">Primary</Button>
          </Tooltip>
          
          <Tooltip content="Success tooltip for positive actions" variant="success">
            <Button variant="outline">Success</Button>
          </Tooltip>
          
          <Tooltip content="Warning tooltip for caution" variant="warning">
            <Button variant="outline">Warning</Button>
          </Tooltip>
          
          <Tooltip content="Error tooltip for problems" variant="error">
            <Button variant="outline">Error</Button>
          </Tooltip>
        </div>
      </section>

      {/* Tooltip Sizes */}
      <section style={{ marginBottom: spacing[12] }}>
        <CriaTextHeadline2 style={{ marginBottom: spacing[4] }}>
          Tooltip Sizes
        </CriaTextHeadline2>
        <CriaTextBody1 style={{ marginBottom: spacing[6] }}>
          Different sizes for different content lengths and contexts.
        </CriaTextBody1>
        <div style={{ display: 'flex', gap: spacing[4], alignItems: 'center', flexWrap: 'wrap' }}>
          <Tooltip content="Small tooltip" size="sm">
            <Button variant="outline" size="sm">Small</Button>
          </Tooltip>
          
          <Tooltip content="Medium tooltip with more content" size="md">
            <Button variant="outline" size="md">Medium</Button>
          </Tooltip>
          
          <Tooltip content="Large tooltip with extensive information and detailed explanations" size="lg">
            <Button variant="outline" size="lg">Large</Button>
          </Tooltip>
        </div>
      </section>

      {/* Tooltip Positions */}
      <section style={{ marginBottom: spacing[12] }}>
        <CriaTextHeadline2 style={{ marginBottom: spacing[4] }}>
          Tooltip Positions
        </CriaTextHeadline2>
        <CriaTextBody1 style={{ marginBottom: spacing[6] }}>
          Tooltips can be positioned in various directions to avoid viewport boundaries.
        </CriaTextBody1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: spacing[6], alignItems: 'center', justifyItems: 'center' }}>
          <Tooltip content="Top tooltip" position="top">
            <Button variant="outline">Top</Button>
          </Tooltip>
          
          <Tooltip content="Bottom tooltip" position="bottom">
            <Button variant="outline">Bottom</Button>
          </Tooltip>
          
          <Tooltip content="Left tooltip" position="left">
            <Button variant="outline">Left</Button>
          </Tooltip>
          
          <Tooltip content="Right tooltip" position="right">
            <Button variant="outline">Right</Button>
          </Tooltip>
          
          <Tooltip content="Top start tooltip" position="top-start">
            <Button variant="outline">Top Start</Button>
          </Tooltip>
          
          <Tooltip content="Top end tooltip" position="top-end">
            <Button variant="outline">Top End</Button>
          </Tooltip>
        </div>
      </section>

      {/* Tooltips with Icons */}
      <section style={{ marginBottom: spacing[12] }}>
        <CriaTextHeadline2 style={{ marginBottom: spacing[4] }}>
          Tooltips with Icons
        </CriaTextHeadline2>
        <CriaTextBody1 style={{ marginBottom: spacing[6] }}>
          Icons can be used as triggers for tooltips, providing visual context.
        </CriaTextBody1>
        <div style={{ display: 'flex', gap: spacing[4], alignItems: 'center', flexWrap: 'wrap' }}>
          <Tooltip content="Get more information about this feature" variant="info">
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: colors.gray[100],
              cursor: 'pointer',
              color: colors.gray[600]
            }}>
              <Info size={16} />
            </div>
          </Tooltip>
          
          <Tooltip content="Need help? Click here for assistance" variant="primary">
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: colors.primary,
              cursor: 'pointer',
              color: colors.white
            }}>
              <Question size={16} />
            </div>
          </Tooltip>
          
          <Tooltip content="This feature is in beta" variant="warning">
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: colors.warning,
              cursor: 'pointer',
              color: colors.white
            }}>
              <WarningCircle size={16} />
            </div>
          </Tooltip>
        </div>
      </section>

      {/* Interactive Tooltips */}
      <section style={{ marginBottom: spacing[12] }}>
        <CriaTextHeadline2 style={{ marginBottom: spacing[4] }}>
          Interactive Tooltips
        </CriaTextHeadline2>
        <CriaTextBody1 style={{ marginBottom: spacing[6] }}>
          Interactive tooltips stay open when you hover over them, allowing for more complex content.
        </CriaTextBody1>
        <div style={{ display: 'flex', gap: spacing[4], alignItems: 'center', flexWrap: 'wrap' }}>
          <Tooltip 
            content={
              <div style={{ padding: spacing[2] }}>
                <CriaTextBody1 style={{ marginBottom: spacing[1] }}>
                  Interactive Tooltip
                </CriaTextBody1>
                <CriaTextBody2>
                  This tooltip stays open when you hover over it, allowing for interactive content.
                </CriaTextBody2>
              </div>
            } 
            interactive
            variant="primary"
          >
            <Button variant="outline">Interactive</Button>
          </Tooltip>
          
          <Tooltip 
            content={
              <div style={{ padding: spacing[2] }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: spacing[2], marginBottom: spacing[2] }}>
                  <CheckCircle size={16} color={colors.success} />
                  <CriaTextBody1>Success</CriaTextBody1>
                </div>
                <CriaTextBody2>
                  Your changes have been saved successfully.
                </CriaTextBody2>
              </div>
            } 
            interactive
            variant="success"
          >
            <Button variant="success">Success</Button>
          </Tooltip>
        </div>
      </section>

      {/* Tooltips with Delays */}
      <section style={{ marginBottom: spacing[12] }}>
        <CriaTextHeadline2 style={{ marginBottom: spacing[4] }}>
          Tooltips with Delays
        </CriaTextHeadline2>
        <CriaTextBody1 style={{ marginBottom: spacing[6] }}>
          Control when tooltips appear and disappear with custom delays.
        </CriaTextBody1>
        <div style={{ display: 'flex', gap: spacing[4], alignItems: 'center', flexWrap: 'wrap' }}>
          <Tooltip content="Appears after 500ms" delay={500}>
            <Button variant="outline">500ms Delay</Button>
          </Tooltip>
          
          <Tooltip content="Appears after 1 second" delay={1000}>
            <Button variant="outline">1s Delay</Button>
          </Tooltip>
          
          <Tooltip content="Disappears after 2 seconds" hideDelay={2000}>
            <Button variant="outline">2s Hide Delay</Button>
          </Tooltip>
        </div>
      </section>

      {/* Tooltips on Different Elements */}
      <section style={{ marginBottom: spacing[12] }}>
        <CriaTextHeadline2 style={{ marginBottom: spacing[4] }}>
          Tooltips on Different Elements
        </CriaTextHeadline2>
        <CriaTextBody1 style={{ marginBottom: spacing[6] }}>
          Tooltips can be attached to any focusable or hoverable element.
        </CriaTextBody1>
        <div style={{ display: 'flex', gap: spacing[4], alignItems: 'center', flexWrap: 'wrap' }}>
          <Tooltip content="This is a link with a tooltip">
            <a href="#" style={{ color: colors.primary, textDecoration: 'underline' }}>
              Link with tooltip
            </a>
          </Tooltip>
          
          <Tooltip content="This input has a tooltip">
            <Input 
              type="text" 
              placeholder="Input with tooltip"
            />
          </Tooltip>
          
          <Tooltip content="This badge has a tooltip">
            <Badge variant="default">Badge with tooltip</Badge>
          </Tooltip>
          
          <Tooltip content='This card has a tooltip'>
            <Card variant='elevated' style={{ width: '120px', height: '80px', cursor: 'pointer' }}>
              <CardContent>
                <CriaTextBody2>Card with tooltip</CriaTextBody2>
              </CardContent>
            </Card>
          </Tooltip>
        </div>
      </section>

      {/* Complex Tooltip Content */}
      <section style={{ marginBottom: spacing[12] }}>
        <CriaTextHeadline2 style={{ marginBottom: spacing[4] }}>
          Complex Tooltip Content
        </CriaTextHeadline2>
        <CriaTextBody1 style={{ marginBottom: spacing[6] }}>
          Tooltips can contain rich content including multiple elements and formatting.
        </CriaTextBody1>
        <div style={{ display: 'flex', gap: spacing[4], alignItems: 'center', flexWrap: 'wrap' }}>
          <Tooltip 
            content={
              <div style={{ padding: spacing[3], maxWidth: '200px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: spacing[2], marginBottom: spacing[2] }}>
                  <Star size={16} color={colors.warning} />
                  <CriaTextBody1>Premium Feature</CriaTextBody1>
                </div>
                <CriaTextBody2 style={{ marginBottom: spacing[2] }}>
                  This feature is available in our premium plan.
                </CriaTextBody2>
                <Button variant='primary' size='sm' style={{ width: '100%' }}>
                  Upgrade Now
                </Button>
              </div>
            }
            variant="primary"
            size="lg"
          >
            <Button variant="outline">Premium Feature</Button>
          </Tooltip>
          
          <Tooltip 
            content={
              <div style={{ padding: spacing[3] }}>
                <CriaTextBody1 style={{ marginBottom: spacing[2] }}>
                  User Profile
                </CriaTextBody1>
                <div style={{ display: 'flex', alignItems: 'center', gap: spacing[2], marginBottom: spacing[2] }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: colors.primary,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: colors.white,
                    fontSize: '14px',
                    fontWeight: 'bold'
                  }}>
                    JD
                  </div>
                  <div>
                    <CriaTextBody1>John Doe</CriaTextBody1>
                    <CriaTextBody2>john@example.com</CriaTextBody2>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: spacing[1] }}>
                  <Badge variant='success' size='sm'>Active</Badge>
                  <Badge variant='info' size='sm'>Premium</Badge>
                </div>
              </div>
            }
            variant="default"
            size="lg"
          >
            <Button variant="outline">User Profile</Button>
          </Tooltip>
        </div>
      </section>

      {/* Accessibility */}
      <section style={{ marginBottom: spacing[12] }}>
        <CriaTextHeadline2 style={{ marginBottom: spacing[4] }}>
          Accessibility Features
        </CriaTextHeadline2>
        <CriaTextBody1 style={{ marginBottom: spacing[4] }}>
          The Tooltip component includes comprehensive accessibility features:
        </CriaTextBody1>
        <ul style={{ marginLeft: spacing[6], marginBottom: spacing[4] }}>
          <li>
            <CriaTextBody1>
              <strong>Keyboard Navigation:</strong> Tooltips appear on focus and disappear on blur
            </CriaTextBody1>
          </li>
          <li>
            <CriaTextBody1>
              <strong>ARIA Attributes:</strong> Proper role="tooltip" and aria-describedby relationships
            </CriaTextBody1>
          </li>
          <li>
            <CriaTextBody1>
              <strong>Screen Reader Support:</strong> Tooltip content is announced to screen readers
            </CriaTextBody1>
          </li>
          <li>
            <CriaTextBody1>
              <strong>Focus Management:</strong> Tooltips don't interfere with tab order
            </CriaTextBody1>
          </li>
        </ul>
        <div style={{ display: 'flex', gap: spacing[4], alignItems: 'center', flexWrap: 'wrap' }}>
          <Tooltip content="This tooltip is accessible via keyboard navigation">
            <Button variant="outline">Accessible Tooltip</Button>
          </Tooltip>
        </div>
      </section>
    </div>
  );
};

export default TooltipDemo;
