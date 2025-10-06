import React from 'react';
import { Card, CardContent } from '../Card';
import { CriaTextBody1, CriaTextBody2, CriaTextBody1Inverse, CriaTextTitle1, CriaTextTitle2, CriaTextImportant, CriaTextAlert, CriaTextHeadline1, CriaTextHeadline2, CriaTextSuccess } from './CriaText';

export const CriaTextDemo: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Card>
        <CardContent>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <CriaTextHeadline1>CriaTextHeadline1 - Main page headline (Headline1)</CriaTextHeadline1>
            <CriaTextHeadline2>CriaTextHeadline2 - Section headline (Headline2)</CriaTextHeadline2>
            <CriaTextTitle1>CriaTextTitle1 - Content title (Title1)</CriaTextTitle1>
            <CriaTextTitle2>CriaTextTitle2 - Smaller section title (Title2)</CriaTextTitle2>
            <CriaTextBody1>CriaTextBody1 - This is the standard body text (Body1)</CriaTextBody1>
            <CriaTextBody2>CriaTextBody2 - This is smaller body text (Body2)</CriaTextBody2>
            <CriaTextImportant>CriaTextImportant - Important inline emphasis with body copy.</CriaTextImportant>
            <CriaTextAlert>CriaTextAlert - Inline alert or error text adjacent to content.</CriaTextAlert>
            <CriaTextSuccess>CriaTextSuccess - Inline success text adjacent to content.</CriaTextSuccess>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <div style={{ background: '#3A2E52', padding: 16, borderRadius: 8 }}>
            <CriaTextBody1Inverse>Inverse body text for dark backgrounds</CriaTextBody1Inverse>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CriaTextDemo;


