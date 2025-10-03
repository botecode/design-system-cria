import React from 'react';
import { Typography } from '../Typography';
import { Button } from '../Button';
import { Card, CardHeader, CardContent } from '../Card';
import Badge from '../Badge';
import Tooltip from './Tooltip';
import { Info, Question, WarningCircle, CheckCircle, XCircle, Star } from 'phosphor-react';

export const TooltipDemo: React.FC = () => {
  return (
    <div style={{ padding: '24px', maxWidth: '1000px' }}>
      <Typography variant="title1" weight="bold" style={{ marginBottom: '32px' }}>
        Tooltip Demo
      </Typography>

      {/* Basic Tooltips */}
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Basic Tooltips
        </Typography>
        <Typography variant="body" style={{ marginBottom: '24px' }}>
          Simple tooltips that appear on hover or focus. They provide contextual information without cluttering the interface.
        </Typography>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
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
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Tooltip Variants
        </Typography>
        <Typography variant="body" style={{ marginBottom: '24px' }}>
          Different visual styles for different types of information.
        </Typography>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
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
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Tooltip Sizes
        </Typography>
        <Typography variant="body" style={{ marginBottom: '24px' }}>
          Different sizes for different content lengths and contexts.
        </Typography>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
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
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Tooltip Positions
        </Typography>
        <Typography variant="body" style={{ marginBottom: '24px' }}>
          Tooltips can be positioned in various directions to avoid viewport boundaries.
        </Typography>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', alignItems: 'center', justifyItems: 'center' }}>
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
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Tooltips with Icons
        </Typography>
        <Typography variant="body" style={{ marginBottom: '24px' }}>
          Icons can be used as triggers for tooltips, providing visual context.
        </Typography>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Tooltip content="Get more information about this feature" variant="info">
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: 'var(--cria-gray-100)',
              cursor: 'pointer',
              color: 'var(--cria-gray-600)'
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
              backgroundColor: 'var(--cria-primary)',
              cursor: 'pointer',
              color: 'var(--cria-white)'
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
              backgroundColor: 'var(--cria-warning)',
              cursor: 'pointer',
              color: 'var(--cria-white)'
            }}>
              <WarningCircle size={16} />
            </div>
          </Tooltip>
        </div>
      </section>

      {/* Interactive Tooltips */}
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Interactive Tooltips
        </Typography>
        <Typography variant="body" style={{ marginBottom: '24px' }}>
          Interactive tooltips stay open when you hover over them, allowing for more complex content.
        </Typography>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Tooltip 
            content={
              <div style={{ padding: '8px' }}>
                <Typography variant="body" weight="medium" style={{ marginBottom: '4px' }}>
                  Interactive Tooltip
                </Typography>
                <Typography variant="body" size="sm">
                  This tooltip stays open when you hover over it, allowing for interactive content.
                </Typography>
              </div>
            } 
            interactive
            variant="primary"
          >
            <Button variant="outline">Interactive</Button>
          </Tooltip>
          
          <Tooltip 
            content={
              <div style={{ padding: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <CheckCircle size={16} color="var(--cria-success)" />
                  <Typography variant="body" weight="medium">Success</Typography>
                </div>
                <Typography variant="body" size="sm">
                  Your changes have been saved successfully.
                </Typography>
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
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Tooltips with Delays
        </Typography>
        <Typography variant="body" style={{ marginBottom: '24px' }}>
          Control when tooltips appear and disappear with custom delays.
        </Typography>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
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
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Tooltips on Different Elements
        </Typography>
        <Typography variant="body" style={{ marginBottom: '24px' }}>
          Tooltips can be attached to any focusable or hoverable element.
        </Typography>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Tooltip content="This is a link with a tooltip">
            <a href="#" style={{ color: 'var(--cria-primary)', textDecoration: 'underline' }}>
              Link with tooltip
            </a>
          </Tooltip>
          
          <Tooltip content="This input has a tooltip">
            <input 
              type="text" 
              placeholder="Input with tooltip"
              style={{
                padding: '8px 12px',
                border: '1px solid var(--cria-gray-300)',
                borderRadius: 'var(--cria-radius-md)',
                fontSize: 'var(--cria-font-size-body)',
                fontFamily: 'var(--cria-font-family)'
              }}
            />
          </Tooltip>
          
          <Tooltip content="This badge has a tooltip">
            <Badge variant="default">Badge with tooltip</Badge>
          </Tooltip>
          
          <Tooltip content="This card has a tooltip">
            <Card variant="elevated" style={{ width: '120px', height: '80px', cursor: 'pointer' }}>
              <CardContent>
                <Typography variant="body" size="sm">Card with tooltip</Typography>
              </CardContent>
            </Card>
          </Tooltip>
        </div>
      </section>

      {/* Complex Tooltip Content */}
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Complex Tooltip Content
        </Typography>
        <Typography variant="body" style={{ marginBottom: '24px' }}>
          Tooltips can contain rich content including multiple elements and formatting.
        </Typography>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Tooltip 
            content={
              <div style={{ padding: '12px', maxWidth: '200px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <Star size={16} color="var(--cria-warning)" />
                  <Typography variant="body" weight="medium">Premium Feature</Typography>
                </div>
                <Typography variant="body" size="sm" style={{ marginBottom: '8px' }}>
                  This feature is available in our premium plan.
                </Typography>
                <Button variant="primary" size="sm" style={{ width: '100%' }}>
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
              <div style={{ padding: '12px' }}>
                <Typography variant="body" weight="medium" style={{ marginBottom: '8px' }}>
                  User Profile
                </Typography>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--cria-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--cria-white)',
                    fontSize: '14px',
                    fontWeight: 'bold'
                  }}>
                    JD
                  </div>
                  <div>
                    <Typography variant="body" weight="medium">John Doe</Typography>
                    <Typography variant="body" size="sm" color="secondary">john@example.com</Typography>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '4px' }}>
                  <Badge variant="success" size="sm">Active</Badge>
                  <Badge variant="info" size="sm">Premium</Badge>
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
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Accessibility Features
        </Typography>
        <Typography variant="body" style={{ marginBottom: '16px' }}>
          The Tooltip component includes comprehensive accessibility features:
        </Typography>
        <ul style={{ marginLeft: '24px', marginBottom: '16px' }}>
          <li>
            <Typography variant="body">
              <strong>Keyboard Navigation:</strong> Tooltips appear on focus and disappear on blur
            </Typography>
          </li>
          <li>
            <Typography variant="body">
              <strong>ARIA Attributes:</strong> Proper role="tooltip" and aria-describedby relationships
            </Typography>
          </li>
          <li>
            <Typography variant="body">
              <strong>Screen Reader Support:</strong> Tooltip content is announced to screen readers
            </Typography>
          </li>
          <li>
            <Typography variant="body">
              <strong>Focus Management:</strong> Tooltips don't interfere with tab order
            </Typography>
          </li>
        </ul>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Tooltip content="This tooltip is accessible via keyboard navigation">
            <Button variant="outline">Accessible Tooltip</Button>
          </Tooltip>
        </div>
      </section>
    </div>
  );
};

export default TooltipDemo;
