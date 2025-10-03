import React from 'react';
import { Checkbox } from './components/Checkbox';
import { Switch } from './components/Switch';

export const TestComponents: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Component Test</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <h2>Checkbox Test</h2>
        <Checkbox label="Test Checkbox" />
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <h2>Switch Test</h2>
        <Switch label="Test Switch" />
      </div>
    </div>
  );
};
