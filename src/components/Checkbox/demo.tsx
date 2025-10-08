import React, { useState } from 'react';
import { Typography } from '../Typography';
import { Button } from '../Button';
import { CriaTextHeadline1, CriaTextTitle1, CriaTextBody1 } from '../TextTokens';
import { Card, CardHeader, CardContent } from '../Card';
import { Checkbox } from './Checkbox';
import { colors, spacing } from '../../tokens';
// import { Check, WarningCircle, Info } from 'phosphor-react';

export const CheckboxDemo: React.FC = () => {
  const [basicChecked, setBasicChecked] = useState(false);
  const [indeterminateChecked, setIndeterminateChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(true);
  const [formData, setFormData] = useState({
    terms: false,
    newsletter: true,
    notifications: false,
    marketing: false,
  });
  const [validationData, setValidationData] = useState({
    required: false,
    error: false,
    warning: false,
  });

  const handleFormChange = (field: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [field]: checked }));
  };

  const handleValidationChange = (field: string, checked: boolean) => {
    setValidationData(prev => ({ ...prev, [field]: checked }));
  };

  const handleIndeterminateChange = (checked: boolean) => {
    setIndeterminateChecked(checked);
    setIndeterminate(false);
  };

  const handleSelectAll = () => {
    const allChecked = Object.values(formData).every(Boolean);
    const newValue = !allChecked;
    setFormData({
      terms: newValue,
      newsletter: newValue,
      notifications: newValue,
      marketing: newValue,
    });
  };

  const isAllSelected = Object.values(formData).every(Boolean);
  const isSomeSelected = Object.values(formData).some(Boolean);

  return (
    <div style={{ padding: spacing[6], maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ marginBottom: spacing[8] }}>
        <CriaTextHeadline1>
          CHECKBOX DEMO
        </CriaTextHeadline1>
      </div>

      {/* Basic Checkboxes */}
      <Card variant="elevated" style={{ marginBottom: spacing[8] }}>
        <CardHeader>
          <CriaTextTitle1>Basic Checkboxes</CriaTextTitle1>
        </CardHeader>
        <CardContent>
          <div style={{ marginBottom: spacing[6], color: colors.gray[700] }}>
            <CriaTextBody1>
              Simple checkboxes for basic selection functionality. They provide clear visual feedback and support all standard states.
            </CriaTextBody1>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
            <Checkbox
              label="Basic checkbox"
              checked={basicChecked}
              onChange={(checked) => setBasicChecked(checked)}
            />
            
            <Checkbox
              label="Checkbox with helper text"
              helperText="This is some helpful information about this option"
              checked={basicChecked}
              onChange={(checked) => setBasicChecked(checked)}
            />
            
            <Checkbox
              label="Required checkbox"
              required
              helperText="This field is required"
            />
            
            <Checkbox
              label="Disabled checkbox"
              disabled
              checked={true}
            />
            
            <Checkbox
              label="Read-only checkbox"
              readOnly
              checked={true}
            />
          </div>
        </CardContent>
      </Card>

      {/* Checkbox Sizes */}
      <Card variant="elevated" style={{ marginBottom: spacing[8] }}>
        <CardHeader>
          <CriaTextTitle1>Checkbox Sizes</CriaTextTitle1>
        </CardHeader>
        <CardContent>
          <div style={{ marginBottom: spacing[6], color: colors.gray[700] }}>
            <CriaTextBody1>
              Different sizes for different contexts and design requirements.
            </CriaTextBody1>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
            <Checkbox
              size="sm"
              label="Small checkbox"
              checked={true}
            />
            
            <Checkbox
              size="md"
              label="Medium checkbox (default)"
              checked={true}
            />
            
            <Checkbox
              size="lg"
              label="Large checkbox"
              checked={true}
            />
          </div>
        </CardContent>
      </Card>

      {/* Checkbox Variants */}
      <Card variant="elevated" style={{ marginBottom: spacing[8] }}>
        <CardHeader>
          <CriaTextTitle1>Checkbox Variants</CriaTextTitle1>
        </CardHeader>
        <CardContent>
          <div style={{ marginBottom: spacing[6], color: colors.gray[700] }}>
            <CriaTextBody1>
              Different visual styles to match your design system.
            </CriaTextBody1>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
            <Checkbox
              variant="default"
              label="Default variant"
              checked={true}
            />
            
            <Checkbox
              variant="filled"
              label="Filled variant"
              checked={true}
            />
            
            <Checkbox
              variant="outlined"
              label="Outlined variant"
              checked={true}
            />
          </div>
        </CardContent>
      </Card>

      {/* Checkbox Colors */}
      <Card variant="elevated" style={{ marginBottom: spacing[8] }}>
        <CardHeader>
          <CriaTextTitle1>Checkbox Colors</CriaTextTitle1>
        </CardHeader>
        <CardContent>
          <div style={{ marginBottom: spacing[6], color: colors.gray[700] }}>
            <CriaTextBody1>
              Different color themes for different types of actions and states.
            </CriaTextBody1>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
            <Checkbox
              color="primary"
              label="Primary color"
              checked={true}
            />
            
            <Checkbox
              color="secondary"
              label="Secondary color"
              checked={true}
            />
            
            <Checkbox
              color="success"
              label="Success color"
              checked={true}
            />
            
            <Checkbox
              color="warning"
              label="Warning color"
              checked={true}
            />
            
            <Checkbox
              color="error"
              label="Error color"
              checked={true}
            />
          </div>
        </CardContent>
      </Card>

      {/* Indeterminate State */}
      <Card variant="elevated" style={{ marginBottom: spacing[8] }}>
        <CardHeader>
          <CriaTextTitle1>Indeterminate State</CriaTextTitle1>
        </CardHeader>
        <CardContent>
          <div style={{ marginBottom: spacing[6], color: colors.gray[700] }}>
            <CriaTextBody1>
              Indeterminate state is useful for "select all" functionality or when some items in a group are selected.
            </CriaTextBody1>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
            <Checkbox
              label="Select all items"
              checked={isAllSelected}
              indeterminate={isSomeSelected && !isAllSelected}
              onChange={handleSelectAll}
            />
            
            <div style={{ marginLeft: spacing[6], display: 'flex', flexDirection: 'column', gap: spacing[3] }}>
              <Checkbox
                label="Terms and conditions"
                checked={formData.terms}
                onChange={(checked) => handleFormChange('terms', checked)}
              />
              <Checkbox
                label="Newsletter subscription"
                checked={formData.newsletter}
                onChange={(checked) => handleFormChange('newsletter', checked)}
              />
              <Checkbox
                label="Push notifications"
                checked={formData.notifications}
                onChange={(checked) => handleFormChange('notifications', checked)}
              />
              <Checkbox
                label="Marketing emails"
                checked={formData.marketing}
                onChange={(checked) => handleFormChange('marketing', checked)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Validation States */}
      <Card variant="elevated" style={{ marginBottom: spacing[8] }}>
        <CardHeader>
          <CriaTextTitle1>Validation States</CriaTextTitle1>
        </CardHeader>
        <CardContent>
          <div style={{ marginBottom: spacing[6], color: colors.gray[700] }}>
            <CriaTextBody1>
              Checkboxes can display validation states with appropriate messaging.
            </CriaTextBody1>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
            <Checkbox
              label="Required field"
              required
              checked={validationData.required}
              onChange={(checked) => handleValidationChange('required', checked)}
              errorMessage={!validationData.required ? "This field is required" : undefined}
            />
            
            <Checkbox
              label="Field with error"
              checked={validationData.error}
              onChange={(checked) => handleValidationChange('error', checked)}
              errorMessage="Please accept the terms to continue"
            />
            
            <Checkbox
              label="Field with warning"
              checked={validationData.warning}
              onChange={(checked) => handleValidationChange('warning', checked)}
              warningMessage="This action cannot be undone"
            />
          </div>
        </CardContent>
      </Card>

      {/* Form Example */}
      <Card variant="elevated" style={{ marginBottom: spacing[8] }}>
        <CardHeader>
          <CriaTextTitle1>Form Example</CriaTextTitle1>
        </CardHeader>
        <CardContent>
          <div style={{ marginBottom: spacing[6], color: colors.gray[700] }}>
            <CriaTextBody1>
              A complete form example showing checkboxes in a real-world scenario.
            </CriaTextBody1>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[5] }}>
            <div>
              <div style={{ marginBottom: '16px' }}>
                <CriaTextTitle1>
                  Account Settings
                </CriaTextTitle1>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[3] }}>
                <Checkbox
                  label="Email notifications"
                  checked={formData.newsletter}
                  onChange={(checked) => handleFormChange('newsletter', checked)}
                  helperText="Receive updates about your account"
                />
                
                <Checkbox
                  label="SMS notifications"
                  checked={formData.notifications}
                  onChange={(checked) => handleFormChange('notifications', checked)}
                  helperText="Get important alerts via text message"
                />
                
                <Checkbox
                  label="Marketing communications"
                  checked={formData.marketing}
                  onChange={(checked) => handleFormChange('marketing', checked)}
                  helperText="Receive promotional offers and product updates"
                />
              </div>
            </div>
            
            <div style={{ borderTop: `1px solid ${colors.border.light}`, paddingTop: spacing[5] }}>
              <div style={{ marginBottom: '16px' }}>
                <CriaTextTitle1>
                  Legal Agreements
                </CriaTextTitle1>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[3] }}>
                <Checkbox
                  label="I agree to the Terms of Service"
                  required
                  checked={formData.terms}
                  onChange={(checked) => handleFormChange('terms', checked)}
                  errorMessage={!formData.terms ? "You must accept the terms to continue" : undefined}
                />
                
                <Checkbox
                  label="I agree to the Privacy Policy"
                  required
                  checked={true}
                  readOnly
                />
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: spacing[3], marginTop: spacing[6] }}>
              <Button 
                variant="primary" 
                disabled={!formData.terms}
                onClick={() => console.log('Form submitted:', formData)}
              >
                Save Settings
              </Button>
              <Button variant="outline" onClick={() => setFormData({
                terms: false,
                newsletter: true,
                notifications: false,
                marketing: false,
              })}>
                Reset
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Accessibility Features */}
      <Card variant="elevated" style={{ marginBottom: '32px' }}>
        <CardHeader>
          <CriaTextTitle1>Accessibility Features</CriaTextTitle1>
        </CardHeader>
        <CardContent>
          <div style={{ marginBottom: '24px', color: colors.gray[700] }}>
            <CriaTextBody1>
              Checkboxes include comprehensive accessibility features for screen readers and keyboard navigation.
            </CriaTextBody1>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Checkbox
              label="Keyboard accessible"
              helperText="Use Tab to focus, Space to toggle"
              checked={true}
            />
            
            <Checkbox
              label="Screen reader friendly"
              helperText="Includes proper ARIA attributes and labels"
              checked={false}
            />
            
            <Checkbox
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
