import React from 'react';
import { Card, CardContent } from '../Card';
import { CriaTextBody1, CriaTextBody2, CriaTextBody1Inverse, CriaTextTitle1, CriaTextTitle2, CriaTextImportant, CriaTextAlert } from './CriaText';

export const CriaTextDemo: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Card>
        <CardContent>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <CriaTextTitle1>Title 1 – Big page headline</CriaTextTitle1>
            <CriaTextTitle2>Title 2 – Section headline</CriaTextTitle2>
            <CriaTextBody1>This is the standard body text</CriaTextBody1>
            <CriaTextBody2>This is smaller body text</CriaTextBody2>
            <CriaTextImportant>Important inline emphasis</CriaTextImportant>
            <CriaTextAlert>Error or alert text in red</CriaTextAlert>
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


