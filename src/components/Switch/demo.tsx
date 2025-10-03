import React, { useState } from 'react';
import { Typography } from '../Typography';
import { Button } from '../Button';
import { Card, CardHeader, CardContent } from '../Card';
import { Switch } from './Switch';
import { Bell, Shield, Moon, Wifi, Lock, Eye } from 'phosphor-react';

export const SwitchDemo: React.FC = () => {
  const [basicSwitch, setBasicSwitch] = useState(false);
  const [settingsData, setSettingsData] = useState({
    notifications: true,
    darkMode: false,
    wifi: true,
    bluetooth: false,
    location: true,
    analytics: false,
  });
  const [validationData, setValidationData] = useState({
    required: false,
    error: false,
    warning: false,
  });

  const handleSettingsChange = (field: string, checked: boolean) => {
    setSettingsData(prev => ({ ...prev, [field]: checked }));
  };

  const handleValidationChange = (field: string, checked: boolean) => {
    setValidationData(prev => ({ ...prev, [field]: checked }));
  };

  const handleResetSettings = () => {
    setSettingsData({
      notifications: true,
      darkMode: false,
      wifi: true,
      bluetooth: false,
      location: true,
      analytics: false,
    });
  };

  return (
    <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
      <Typography variant="title1" style={{ marginBottom: '32px' }}>
        SWITCH DEMO
      </Typography>

      {/* Basic Switches */}
      <Card variant="elevated" style={{ marginBottom: '32px' }}>
        <CardHeader>
          <Typography variant="h3">Basic Switches</Typography>
        </CardHeader>
        <CardContent>
          <Typography variant="body" color="secondary" style={{ marginBottom: '24px' }}>
            Simple toggle switches for binary choices. They provide clear visual feedback and support all standard states.
          </Typography>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Switch
              label="Basic switch"
              checked={basicSwitch}
              onChange={(checked) => setBasicSwitch(checked)}
            />
            
            <Switch
              label="Switch with helper text"
              helperText="This is some helpful information about this option"
              checked={basicSwitch}
              onChange={(checked) => setBasicSwitch(checked)}
            />
            
            <Switch
              label="Required switch"
              required
              helperText="This field is required"
            />
            
            <Switch
              label="Disabled switch (on)"
              disabled
              checked={true}
            />
            
            <Switch
              label="Disabled switch (off)"
              disabled
              checked={false}
            />
            
            <Switch
              label="Read-only switch"
              readOnly
              checked={true}
            />
          </div>
        </CardContent>
      </Card>

      {/* Switch Sizes */}
      <Card variant="elevated" style={{ marginBottom: '32px' }}>
        <CardHeader>
          <Typography variant="h3">Switch Sizes</Typography>
        </CardHeader>
        <CardContent>
          <Typography variant="body" color="secondary" style={{ marginBottom: '24px' }}>
            Different sizes for different contexts and design requirements.
          </Typography>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Switch
              size="sm"
              label="Small switch"
              checked={true}
            />
            
            <Switch
              size="md"
              label="Medium switch (default)"
              checked={true}
            />
            
            <Switch
              size="lg"
              label="Large switch"
              checked={true}
            />
          </div>
        </CardContent>
      </Card>

      {/* Switch Variants */}
      <Card variant="elevated" style={{ marginBottom: '32px' }}>
        <CardHeader>
          <Typography variant="h3">Switch Variants</Typography>
        </CardHeader>
        <CardContent>
          <Typography variant="body" color="secondary" style={{ marginBottom: '24px' }}>
            Different visual styles to match your design system.
          </Typography>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Switch
              variant="default"
              label="Default variant"
              checked={true}
            />
            
            <Switch
              variant="filled"
              label="Filled variant"
              checked={true}
            />
            
            <Switch
              variant="outlined"
              label="Outlined variant"
              checked={true}
            />
          </div>
        </CardContent>
      </Card>

      {/* Switch Colors */}
      <Card variant="elevated" style={{ marginBottom: '32px' }}>
        <CardHeader>
          <Typography variant="h3">Switch Colors</Typography>
        </CardHeader>
        <CardContent>
          <Typography variant="body" color="secondary" style={{ marginBottom: '24px' }}>
            Different color themes for different types of actions and states.
          </Typography>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Switch
              color="primary"
              label="Primary color"
              checked={true}
            />
            
            <Switch
              color="secondary"
              label="Secondary color"
              checked={true}
            />
            
            <Switch
              color="success"
              label="Success color"
              checked={true}
            />
            
            <Switch
              color="warning"
              label="Warning color"
              checked={true}
            />
            
            <Switch
              color="error"
              label="Error color"
              checked={true}
            />
          </div>
        </CardContent>
      </Card>

      {/* Validation States */}
      <Card variant="elevated" style={{ marginBottom: '32px' }}>
        <CardHeader>
          <Typography variant="h3">Validation States</Typography>
        </CardHeader>
        <CardContent>
          <Typography variant="body" color="secondary" style={{ marginBottom: '24px' }}>
            Switches can display validation states with appropriate messaging.
          </Typography>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Switch
              label="Required field"
              required
              checked={validationData.required}
              onChange={(checked) => handleValidationChange('required', checked)}
              errorMessage={!validationData.required ? "This field is required" : undefined}
            />
            
            <Switch
              label="Field with error"
              checked={validationData.error}
              onChange={(checked) => handleValidationChange('error', checked)}
              errorMessage="Please enable this feature to continue"
            />
            
            <Switch
              label="Field with warning"
              checked={validationData.warning}
              onChange={(checked) => handleValidationChange('warning', checked)}
              warningMessage="This action cannot be undone"
            />
          </div>
        </CardContent>
      </Card>

      {/* Settings Example */}
      <Card variant="elevated" style={{ marginBottom: '32px' }}>
        <CardHeader>
          <Typography variant="h3">Settings Example</Typography>
        </CardHeader>
        <CardContent>
          <Typography variant="body" color="secondary" style={{ marginBottom: '24px' }}>
            A complete settings panel example showing switches in a real-world scenario.
          </Typography>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <Typography variant="h4" style={{ marginBottom: '16px' }}>
                Notification Settings
              </Typography>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Switch
                  label="Push notifications"
                  checked={settingsData.notifications}
                  onChange={(checked) => handleSettingsChange('notifications', checked)}
                  helperText="Receive push notifications on your device"
                />
                
                <Switch
                  label="Email notifications"
                  checked={settingsData.analytics}
                  onChange={(checked) => handleSettingsChange('analytics', checked)}
                  helperText="Get important updates via email"
                />
              </div>
            </div>
            
            <div style={{ borderTop: '1px solid var(--cria-gray-200)', paddingTop: '20px' }}>
              <Typography variant="h4" style={{ marginBottom: '16px' }}>
                Appearance
              </Typography>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Switch
                  label="Dark mode"
                  checked={settingsData.darkMode}
                  onChange={(checked) => handleSettingsChange('darkMode', checked)}
                  helperText="Switch between light and dark themes"
                />
              </div>
            </div>
            
            <div style={{ borderTop: '1px solid var(--cria-gray-200)', paddingTop: '20px' }}>
              <Typography variant="h4" style={{ marginBottom: '16px' }}>
                Connectivity
              </Typography>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Switch
                  label="Wi-Fi"
                  checked={settingsData.wifi}
                  onChange={(checked) => handleSettingsChange('wifi', checked)}
                  helperText="Connect to wireless networks"
                />
                
                <Switch
                  label="Bluetooth"
                  checked={settingsData.bluetooth}
                  onChange={(checked) => handleSettingsChange('bluetooth', checked)}
                  helperText="Connect to Bluetooth devices"
                />
                
                <Switch
                  label="Location services"
                  checked={settingsData.location}
                  onChange={(checked) => handleSettingsChange('location', checked)}
                  helperText="Allow apps to access your location"
                />
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
              <Button 
                variant="primary" 
                onClick={() => console.log('Settings saved:', settingsData)}
              >
                Save Settings
              </Button>
              <Button variant="outline" onClick={handleResetSettings}>
                Reset to Defaults
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Accessibility Features */}
      <Card variant="elevated" style={{ marginBottom: '32px' }}>
        <CardHeader>
          <Typography variant="h3">Accessibility Features</Typography>
        </CardHeader>
        <CardContent>
          <Typography variant="body" color="secondary" style={{ marginBottom: '24px' }}>
            Switches include comprehensive accessibility features for screen readers and keyboard navigation.
          </Typography>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Switch
              label="Keyboard accessible"
              helperText="Use Tab to focus, Space to toggle"
              checked={true}
            />
            
            <Switch
              label="Screen reader friendly"
              helperText="Includes proper ARIA attributes and role='switch'"
              checked={false}
            />
            
            <Switch
              label="High contrast support"
              helperText="Works with system high contrast modes"
              checked={true}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
