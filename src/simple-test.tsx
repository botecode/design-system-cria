import React, { useState } from 'react';
import { Checkbox } from './components/Checkbox';
import { Switch } from './components/Switch';

export const SimpleTest: React.FC = () => {
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [switchChecked, setSwitchChecked] = useState(false);

  return (
    <div style={{ 
      padding: '40px', 
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh'
    }}>
      <h1 style={{ color: '#333', marginBottom: '30px' }}>Simple Component Test</h1>
      
      <div style={{ 
        backgroundColor: 'white', 
        padding: '20px', 
        borderRadius: '8px',
        marginBottom: '20px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ color: '#666', marginBottom: '15px' }}>Checkbox Test</h2>
        <Checkbox 
          label="Test Checkbox" 
          checked={checkboxChecked}
          onChange={(checked) => {
            console.log('Checkbox changed:', checked);
            setCheckboxChecked(checked);
          }}
        />
        <p style={{ marginTop: '10px', color: '#888' }}>
          Status: {checkboxChecked ? 'Checked' : 'Unchecked'}
        </p>
      </div>
      
      <div style={{ 
        backgroundColor: 'white', 
        padding: '20px', 
        borderRadius: '8px',
        marginBottom: '20px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ color: '#666', marginBottom: '15px' }}>Switch Test</h2>
        <Switch 
          label="Test Switch" 
          checked={switchChecked}
          onChange={(checked) => {
            console.log('Switch changed:', checked);
            setSwitchChecked(checked);
          }}
        />
        <p style={{ marginTop: '10px', color: '#888' }}>
          Status: {switchChecked ? 'On' : 'Off'}
        </p>
      </div>
      
      <div style={{ 
        backgroundColor: 'white', 
        padding: '20px', 
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ color: '#666', marginBottom: '15px' }}>Debug Info</h2>
        <p>If you can see this text, React is working.</p>
        <p>Check the browser console for any error messages.</p>
        <p>Try clicking the checkbox and switch above to see if they respond.</p>
      </div>
    </div>
  );
};
