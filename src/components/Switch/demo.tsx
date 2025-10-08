import React, { useState } from 'react';
import { Typography } from '../Typography';
import { Button } from '../Button';
import { CriaTextHeadline1, CriaTextTitle1, CriaTextBody1 } from '../TextTokens';
import { Card, CardHeader, CardContent } from '../Card';
import { Switch } from './Switch';
// import { Bell, Shield, Moon, Lock, Eye } from 'phosphor-react';
import { spacing } from '../../tokens';

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
    <div style={{ padding: spacing[6], maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ marginBottom: spacing[8] }}>
        <CriaTextHeadline1>
          SWITCH DEMO
        </CriaTextHeadline1>
      </div>

      {/* Basic Switches */}
      <Card variant="elevated" style={{ marginBottom: spacing[8] }}>
        <CardHeader>
          <CriaTextTitle1>Basic Switches</CriaTextTitle1>
        </CardHeader>
        <CardContent>
          <div style={{ color: 'var(--cria-text-secondary)', marginBottom: spacing[6] }}>
            <CriaTextBody1>
              Simple toggle switches for binary choices. They provide clear visual feedback and support all standard states.
            </CriaTextBody1>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
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
      <Card variant="elevated" style={{ marginBottom: spacing[8] }}>
        <CardHeader>
          <CriaTextTitle1>Switch Sizes</CriaTextTitle1>
        </CardHeader>
        <CardContent>
          <div style={{ color: 'var(--cria-text-secondary)', marginBottom: spacing[6] }}>
            <CriaTextBody1>
              Different sizes for different contexts and design requirements.
            </CriaTextBody1>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
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
      <Card variant="elevated" style={{ marginBottom: spacing[8] }}>
        <CardHeader>
          <CriaTextTitle1>Switch Variants</CriaTextTitle1>
        </CardHeader>
        <CardContent>
          <div style={{ color: 'var(--cria-text-secondary)', marginBottom: spacing[6] }}>
            <CriaTextBody1>
              Different visual styles to match your design system.
            </CriaTextBody1>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
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
      <Card variant="elevated" style={{ marginBottom: spacing[8] }}>
        <CardHeader>
          <CriaTextTitle1>Switch Colors</CriaTextTitle1>
        </CardHeader>
        <CardContent>
          <div style={{ color: 'var(--cria-text-secondary)', marginBottom: spacing[6] }}>
            <CriaTextBody1>
              Different color themes for different types of actions and states.
            </CriaTextBody1>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
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
      <Card variant="elevated" style={{ marginBottom: spacing[8] }}>
        <CardHeader>
          <CriaTextTitle1>Validation States</CriaTextTitle1>
        </CardHeader>
        <CardContent>
          <div style={{ color: 'var(--cria-text-secondary)', marginBottom: spacing[6] }}>
            <CriaTextBody1>
              Switches can display validation states with appropriate messaging.
            </CriaTextBody1>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
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
      <Card variant="elevated" style={{ marginBottom: spacing[8] }}>
        <CardHeader>
          <CriaTextTitle1>Settings Example</CriaTextTitle1>
        </CardHeader>
        <CardContent>
          <div style={{ color: 'var(--cria-text-secondary)', marginBottom: spacing[6] }}>
            <CriaTextBody1>
              A complete settings panel example showing switches in a real-world scenario.
            </CriaTextBody1>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[5] }}>
            <div>
              <div style={{ marginBottom: spacing[4] }}>
                <CriaTextTitle1>
                  Notification Settings
                </CriaTextTitle1>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[3] }}>
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
            
            <div style={{ borderTop: '1px solid var(--cria-gray-200)', paddingTop: spacing[5] }}>
              <div style={{ marginBottom: spacing[4] }}>
                <CriaTextTitle1>
                  Appearance
                </CriaTextTitle1>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[3] }}>
                <Switch
                  label="Dark mode"
                  checked={settingsData.darkMode}
                  onChange={(checked) => handleSettingsChange('darkMode', checked)}
                  helperText="Switch between light and dark themes"
                />
              </div>
            </div>
            
            <div style={{ borderTop: '1px solid var(--cria-gray-200)', paddingTop: spacing[5] }}>
              <div style={{ marginBottom: spacing[4] }}>
                <CriaTextTitle1>
                  Connectivity
                </CriaTextTitle1>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[3] }}>
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
            
            <div style={{ display: 'flex', gap: spacing[3], marginTop: spacing[6] }}>
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
      <Card variant="elevated" style={{ marginBottom: spacing[8] }}>
        <CardHeader>
          <CriaTextTitle1>Accessibility Features</CriaTextTitle1>
        </CardHeader>
        <CardContent>
          <div style={{ color: 'var(--cria-text-secondary)', marginBottom: spacing[6] }}>
            <CriaTextBody1>
              Switches include comprehensive accessibility features for screen readers and keyboard navigation.
            </CriaTextBody1>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
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
