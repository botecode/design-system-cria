import React from 'react';
import { Typography } from '../Typography';
import { TextBody, TextContent, TextContentTitle, TextContentImportant } from './Text';
import { Card } from '../Card';

export const TextDemo: React.FC = () => {
  return (
    <div style={{ padding: '0' }}>
      <div style={{ marginBottom: '32px' }}>
        <Typography variant="title1" style={{ marginBottom: '16px' }}>
          Text Component
        </Typography>
        <Typography variant="body" style={{ marginBottom: '0' }}>
          A unified Text component system for consistent typography across the application. 
          Each variant is designed for specific use cases while maintaining semantic HTML structure.
        </Typography>
      </div>

      {/* TextBody Examples */}
      <div style={{ marginBottom: '32px' }}>
        <Typography variant="h2" style={{ marginBottom: '16px' }}>
          TextBody
        </Typography>
        <Typography variant="body" style={{ marginBottom: '16px' }}>
          Default body text for UI copy, labels, and short content. Renders as span by default.
        </Typography>
        
        <Card style={{ marginBottom: '16px' }}>
          <Card.CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <TextBody>Default body text in a card</TextBody>
              <TextBody as="p">Body text rendered as paragraph</TextBody>
              <TextBody as="label">Body text as label element</TextBody>
            </div>
          </Card.CardContent>
        </Card>

        <div style={{ backgroundColor: '#f8f9fa', padding: '16px', borderRadius: '8px', marginBottom: '16px' }}>
          <Typography variant="bodySmall" style={{ fontFamily: 'monospace', marginBottom: '8px' }}>
            Usage:
          </Typography>
          <pre style={{ margin: 0, fontSize: '14px', fontFamily: 'monospace' }}>
{`<TextBody>Default body text</TextBody>
<TextBody as="p">Body text as paragraph</TextBody>
<TextBody as="label">Body text as label</TextBody>`}
          </pre>
        </div>
      </div>

      {/* TextContent Examples */}
      <div style={{ marginBottom: '32px' }}>
        <Typography variant="h2" style={{ marginBottom: '16px' }}>
          TextContent
        </Typography>
        <Typography variant="body" style={{ marginBottom: '16px' }}>
          Long-form content paragraphs with relaxed line height for better readability. 
          Renders as paragraph by default.
        </Typography>
        
        <Card style={{ marginBottom: '16px' }}>
          <Card.CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <TextContent>
                This is a long-form content paragraph that demonstrates how the TextContent 
                component provides better readability for extended text content. The relaxed 
                line height makes it easier to read through multiple paragraphs.
              </TextContent>
              <TextContent>
                Here's another paragraph to show how multiple TextContent components work 
                together in a content block. The consistent styling ensures a cohesive 
                reading experience.
              </TextContent>
              <TextContent as="div">
                This TextContent is rendered as a div element while maintaining the same 
                styling and readability characteristics.
              </TextContent>
            </div>
          </Card.CardContent>
        </Card>

        <div style={{ backgroundColor: '#f8f9fa', padding: '16px', borderRadius: '8px', marginBottom: '16px' }}>
          <Typography variant="bodySmall" style={{ fontFamily: 'monospace', marginBottom: '8px' }}>
            Usage:
          </Typography>
          <pre style={{ margin: 0, fontSize: '14px', fontFamily: 'monospace' }}>
{`<TextContent>
  Long-form content paragraph with relaxed line height
  for better readability.
</TextContent>
<TextContent as="div">Content as div element</TextContent>`}
          </pre>
        </div>
      </div>

      {/* TextContentTitle Examples */}
      <div style={{ marginBottom: '32px' }}>
        <Typography variant="h2" style={{ marginBottom: '16px' }}>
          TextContentTitle
        </Typography>
        <Typography variant="body" style={{ marginBottom: '16px' }}>
          Section titles for long-form content. Renders as h3 by default for proper 
          heading hierarchy and accessibility.
        </Typography>
        
        <Card style={{ marginBottom: '16px' }}>
          <Card.CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <TextContentTitle>Section Title (h3)</TextContentTitle>
              <TextContent>This is the content that follows the section title.</TextContent>
              
              <TextContentTitle as="h2">Title as h2</TextContentTitle>
              <TextContent>Content following an h2 title.</TextContent>
              
              <TextContentTitle as="h4">Title as h4</TextContentTitle>
              <TextContent>Content following an h4 title.</TextContent>
            </div>
          </Card.CardContent>
        </Card>

        <div style={{ backgroundColor: '#f8f9fa', padding: '16px', borderRadius: '8px', marginBottom: '16px' }}>
          <Typography variant="bodySmall" style={{ fontFamily: 'monospace', marginBottom: '8px' }}>
            Usage:
          </Typography>
          <pre style={{ margin: 0, fontSize: '14px', fontFamily: 'monospace' }}>
{`<TextContentTitle>Section Title</TextContentTitle>
<TextContentTitle as="h2">Title as h2</TextContentTitle>
<TextContentTitle as="h4">Title as h4</TextContentTitle>`}
          </pre>
        </div>
      </div>

      {/* TextContentImportant Examples */}
      <div style={{ marginBottom: '32px' }}>
        <Typography variant="h2" style={{ marginBottom: '16px' }}>
          TextContentImportant
        </Typography>
        <Typography variant="body" style={{ marginBottom: '16px' }}>
          Highlighted and emphasized text with medium font weight. Renders as span by default.
        </Typography>
        
        <Card style={{ marginBottom: '16px' }}>
          <Card.CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <TextContent>
                This is regular content with <TextContentImportant>important highlighted text</TextContentImportant> 
                that stands out from the rest of the paragraph.
              </TextContent>
              
              <TextContentImportant as="strong">Important text as strong element</TextContentImportant>
              
              <TextContentImportant as="em">Important text as emphasis element</TextContentImportant>
              
              <div>
                <TextContentImportant>Important standalone text</TextContentImportant>
              </div>
            </div>
          </Card.CardContent>
        </Card>

        <div style={{ backgroundColor: '#f8f9fa', padding: '16px', borderRadius: '8px', marginBottom: '16px' }}>
          <Typography variant="bodySmall" style={{ fontFamily: 'monospace', marginBottom: '8px' }}>
            Usage:
          </Typography>
          <pre style={{ margin: 0, fontSize: '14px', fontFamily: 'monospace' }}>
{`<TextContentImportant>Important text</TextContentImportant>
<TextContentImportant as="strong">Important as strong</TextContentImportant>
<TextContentImportant as="em">Important as emphasis</TextContentImportant>`}
          </pre>
        </div>
      </div>

      {/* Real-world Example */}
      <div style={{ marginBottom: '32px' }}>
        <Typography variant="h2" style={{ marginBottom: '16px' }}>
          Real-world Example
        </Typography>
        <Typography variant="body" style={{ marginBottom: '16px' }}>
          Here's how the Text components work together in a typical content layout:
        </Typography>
        
        <Card>
          <Card.CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <TextContentTitle>Getting Started with CRIA_UI</TextContentTitle>
              
              <TextContent>
                Welcome to the CRIA_UI design system! This comprehensive component library 
                provides everything you need to build consistent, accessible, and beautiful 
                user interfaces.
              </TextContent>
              
              <TextContentTitle as="h4">Key Features</TextContentTitle>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <TextBody>• <TextContentImportant>Accessibility-first design</TextContentImportant> with WCAG compliance</TextBody>
                <TextBody>• <TextContentImportant>Consistent design tokens</TextContentImportant> for colors, typography, and spacing</TextBody>
                <TextBody>• <TextContentImportant>TypeScript support</TextContentImportant> with full type safety</TextBody>
                <TextBody>• <TextContentImportant>Comprehensive testing</TextContentImportant> with accessibility assertions</TextBody>
              </div>
              
              <TextContent>
                Each component is built with semantic HTML structure and proper ARIA attributes 
                to ensure the best possible experience for all users, including those using 
                assistive technologies.
              </TextContent>
            </div>
          </Card.CardContent>
        </Card>
      </div>

      {/* Accessibility Notes */}
      <div style={{ marginBottom: '32px' }}>
        <Typography variant="h2" style={{ marginBottom: '16px' }}>
          Accessibility Features
        </Typography>
        <Card>
          <Card.CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <TextBody>• <TextContentImportant>Semantic HTML:</TextContentImportant> Each variant renders appropriate HTML elements (h3, p, span)</TextBody>
              <TextBody>• <TextContentImportant>Screen reader support:</TextContentImportant> Proper heading hierarchy and content structure</TextBody>
              <TextBody>• <TextContentImportant>Flexible element override:</TextContentImportant> Use the `as` prop to change elements while preserving styles</TextBody>
              <TextBody>• <TextContentImportant>Consistent styling:</TextContentImportant> All variants use design tokens for consistent appearance</TextBody>
            </div>
          </Card.CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TextDemo;
