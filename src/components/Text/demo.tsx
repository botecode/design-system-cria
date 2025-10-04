import React from 'react';
import { 
  CriaTextHeadline1,
  CriaTextHeadline2,
  CriaTextTitle1,
  CriaTextTitle2,
  CriaTextBody1,
  CriaTextBody2,
  CriaTextBody1Inverse,
  CriaTextImportant,
  CriaTextAlert
} from '../TextTokens';
import { Card, CardContent } from '../Card';

export const TextDemo: React.FC = () => {
  return (
    <div style={{ padding: '0' }}>
      {/* Overview */}
      <div style={{ marginBottom: '32px' }}>
        <CriaTextHeadline2 as="h2">CriaText Tokens</CriaTextHeadline2>
        <CriaTextBody1>
          Unified text tokens mapped to design tokens for consistent typography and semantics.
        </CriaTextBody1>
      </div>

      {/* CriaText Tokens Demo */}
      <div style={{ marginBottom: '32px' }}>
        <CriaTextHeadline2 as="h2">Tokens</CriaTextHeadline2>
        <Card style={{ marginBottom: '16px' }}>
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <CriaTextHeadline1>Main page headline (Headline1)</CriaTextHeadline1>
              <CriaTextHeadline2>Section headline (Headline2)</CriaTextHeadline2>
              <CriaTextTitle1>Content title (Title1)</CriaTextTitle1>
              <CriaTextTitle2>Smaller section title (Title2)</CriaTextTitle2>
              <CriaTextBody1>This is the standard body text (Body1)</CriaTextBody1>
              <CriaTextBody2>This is smaller body text (Body2)</CriaTextBody2>
              <CriaTextImportant>Important inline emphasis</CriaTextImportant> with body copy.
              <CriaTextAlert>Inline alert or error text</CriaTextAlert> adjacent to content.
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <div style={{ background: '#3A2E52', padding: '16px', borderRadius: 8 }}>
              <CriaTextBody1Inverse>Inverse body text for dark backgrounds</CriaTextBody1Inverse>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Real-world Example */}
      <div style={{ marginBottom: '32px' }}>
        <CriaTextHeadline2 as="h2">Real-world Example</CriaTextHeadline2>
        <CriaTextBody1>How CriaText tokens compose in a typical layout:</CriaTextBody1>
        
        <Card>
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <CriaTextTitle1>Getting Started with CRIA_UI</CriaTextTitle1>
              
              <CriaTextBody1>
                Welcome to the CRIA_UI design system! This comprehensive component library provides everything you need to build consistent, accessible, and beautiful user interfaces.
              </CriaTextBody1>
              
              <CriaTextTitle2>Key Features</CriaTextTitle2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <CriaTextBody1>• <CriaTextImportant>Accessibility-first design</CriaTextImportant> with WCAG compliance</CriaTextBody1>
                <CriaTextBody1>• <CriaTextImportant>Consistent design tokens</CriaTextImportant> for colors, typography, and spacing</CriaTextBody1>
                <CriaTextBody1>• <CriaTextImportant>TypeScript support</CriaTextImportant> with full type safety</CriaTextBody1>
                <CriaTextBody1>• <CriaTextImportant>Comprehensive testing</CriaTextImportant> with accessibility assertions</CriaTextBody1>
              </div>
              
              <CriaTextBody1>
                Each component is built with semantic HTML structure and proper ARIA attributes to ensure the best possible experience for all users, including those using assistive technologies.
              </CriaTextBody1>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Accessibility Notes */}
      <div style={{ marginBottom: '32px' }}>
        <CriaTextHeadline2 as="h2">Accessibility Features</CriaTextHeadline2>
        <Card>
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <CriaTextBody1>• <CriaTextImportant>Semantic HTML:</CriaTextImportant> Each CriaText* token renders appropriate HTML elements</CriaTextBody1>
              <CriaTextBody1>• <CriaTextImportant>Screen reader support:</CriaTextImportant> Proper heading hierarchy and content structure</CriaTextBody1>
              <CriaTextBody1>• <CriaTextImportant>Flexible element override:</CriaTextImportant> Use the `as` prop to change elements while preserving styles</CriaTextBody1>
              <CriaTextBody1>• <CriaTextImportant>Consistent styling:</CriaTextImportant> All tokens use design tokens for consistent appearance</CriaTextBody1>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TextDemo;
