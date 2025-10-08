import React, { useState } from 'react';
import { RadioGroup, RadioGroupLabel, RadioGroupItem } from './RadioGroup';
import { Card, CardContent, CardHeader } from '../Card';
import { Button } from '../Button';
import { CriaTextHeadline1, CriaTextHeadline2, CriaTextBody1, CriaTextBody2, CriaTextTitle1 } from '../TextTokens';
import { spacing, colors, radii, typography } from '../../tokens';

export const RadioGroupDemo: React.FC = () => {
  const [basicValue, setBasicValue] = useState('');
  const [sizeValue, setSizeValue] = useState('');
  const [orientationValue, setOrientationValue] = useState('');
  const [stateValue, setStateValue] = useState('');
  const [formValue, setFormValue] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Selected value: ${formValue}`);
  };

  return (
    <div style={{ padding: '0' }}>
      <div style={{ marginBottom: spacing[8] }}>
        <div style={{ marginBottom: spacing[4] }}>
          <CriaTextHeadline1>
            Radio Group Component
          </CriaTextHeadline1>
        </div>
        <div style={{ marginBottom: '0' }}>
          <CriaTextBody1>
            A Radio Group component for single selection from multiple options with proper accessibility,
            keyboard navigation, and form integration.
          </CriaTextBody1>
        </div>
      </div>

      {/* Basic Usage */}
      <div style={{ marginBottom: spacing[8] }}>
        <div style={{ marginBottom: spacing[4] }}>
          <CriaTextHeadline2>
            Basic Usage
          </CriaTextHeadline2>
        </div>
        <div style={{ marginBottom: spacing[4] }}>
          <CriaTextBody1>
            Simple radio group with three options. Only one option can be selected at a time.
          </CriaTextBody1>
        </div>
        
        <Card style={{ marginBottom: spacing[4] }}>
          <CardHeader>
            <CriaTextTitle1>Choose your preferred option</CriaTextTitle1>
          </CardHeader>
          <CardContent>
            <RadioGroup 
              name="basic-group" 
              value={basicValue} 
              onChange={setBasicValue}
            >
              <RadioGroupLabel>Basic Options</RadioGroupLabel>
              <RadioGroupItem value="option1">Option 1</RadioGroupItem>
              <RadioGroupItem value="option2">Option 2</RadioGroupItem>
              <RadioGroupItem value="option3">Option 3</RadioGroupItem>
            </RadioGroup>
            {basicValue && (
              <div style={{ marginTop: spacing[4], color: colors.text.secondary }}>
                <CriaTextBody1>
                  Selected: {basicValue}
                </CriaTextBody1>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Size Variants */}
      <div style={{ marginBottom: '32px' }}>
        <div style={{ marginBottom: spacing[4] }}>
          <CriaTextHeadline2>
            Size Variants
          </CriaTextHeadline2>
        </div>
        <div style={{ marginBottom: spacing[4] }}>
          <CriaTextBody1>
            Radio groups support different sizes for various use cases.
          </CriaTextBody1>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: spacing[4] }}>
          <Card>
            <CardHeader>
              <CriaTextTitle1>Small Size</CriaTextTitle1>
            </CardHeader>
            <CardContent>
              <RadioGroup 
                name="small-group" 
                value={sizeValue} 
                onChange={setSizeValue}
                size="sm"
              >
                <RadioGroupLabel>Small Options</RadioGroupLabel>
                <RadioGroupItem value="small1">Option A</RadioGroupItem>
                <RadioGroupItem value="small2">Option B</RadioGroupItem>
                <RadioGroupItem value="small3">Option C</RadioGroupItem>
              </RadioGroup>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CriaTextTitle1>Large Size</CriaTextTitle1>
            </CardHeader>
            <CardContent>
              <RadioGroup 
                name="large-group" 
                value={sizeValue} 
                onChange={setSizeValue}
                size="lg"
              >
                <RadioGroupLabel>Large Options</RadioGroupLabel>
                <RadioGroupItem value="large1">Option X</RadioGroupItem>
                <RadioGroupItem value="large2">Option Y</RadioGroupItem>
                <RadioGroupItem value="large3">Option Z</RadioGroupItem>
              </RadioGroup>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Orientation */}
      <div style={{ marginBottom: '32px' }}>
        <div style={{ marginBottom: spacing[4] }}>
          <CriaTextHeadline2>
            Orientation
          </CriaTextHeadline2>
        </div>
        <div style={{ marginBottom: spacing[4] }}>
          <CriaTextBody1>
            Radio groups can be displayed horizontally or vertically.
          </CriaTextBody1>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: spacing[4] }}>
          <Card>
            <CardHeader>
              <CriaTextTitle1>Vertical (Default)</CriaTextTitle1>
            </CardHeader>
            <CardContent>
              <RadioGroup 
                name="vertical-group" 
                value={orientationValue} 
                onChange={setOrientationValue}
                orientation="vertical"
              >
                <RadioGroupLabel>Vertical Layout</RadioGroupLabel>
                <RadioGroupItem value="v1">Vertical Option 1</RadioGroupItem>
                <RadioGroupItem value="v2">Vertical Option 2</RadioGroupItem>
                <RadioGroupItem value="v3">Vertical Option 3</RadioGroupItem>
              </RadioGroup>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CriaTextTitle1>Horizontal</CriaTextTitle1>
            </CardHeader>
            <CardContent>
              <RadioGroup 
                name="horizontal-group" 
                value={orientationValue} 
                onChange={setOrientationValue}
                orientation="horizontal"
              >
                <RadioGroupLabel>Horizontal Layout</RadioGroupLabel>
                <RadioGroupItem value="h1">H1</RadioGroupItem>
                <RadioGroupItem value="h2">H2</RadioGroupItem>
                <RadioGroupItem value="h3">H3</RadioGroupItem>
              </RadioGroup>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* States */}
      <div style={{ marginBottom: '32px' }}>
        <div style={{ marginBottom: spacing[4] }}>
          <CriaTextHeadline2>
            States
          </CriaTextHeadline2>
        </div>
        <div style={{ marginBottom: spacing[4] }}>
          <CriaTextBody1>
            Radio groups support different states including disabled, required, and error states.
          </CriaTextBody1>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: spacing[4] }}>
          <Card>
            <CardHeader>
              <CriaTextTitle1>Disabled Group</CriaTextTitle1>
            </CardHeader>
            <CardContent>
              <RadioGroup 
                name="disabled-group" 
                value={stateValue} 
                onChange={setStateValue}
                disabled
              >
                <RadioGroupLabel>Disabled Options</RadioGroupLabel>
                <RadioGroupItem value="d1">Disabled Option 1</RadioGroupItem>
                <RadioGroupItem value="d2">Disabled Option 2</RadioGroupItem>
                <RadioGroupItem value="d3">Disabled Option 3</RadioGroupItem>
              </RadioGroup>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CriaTextTitle1>Required with Error</CriaTextTitle1>
            </CardHeader>
            <CardContent>
              <RadioGroup 
                name="error-group" 
                value={stateValue} 
                onChange={setStateValue}
                required
                error="Please select an option"
              >
                <RadioGroupLabel>Required Selection</RadioGroupLabel>
                <RadioGroupItem value="r1">Required Option 1</RadioGroupItem>
                <RadioGroupItem value="r2">Required Option 2</RadioGroupItem>
                <RadioGroupItem value="r3">Required Option 3</RadioGroupItem>
              </RadioGroup>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CriaTextTitle1>Mixed States</CriaTextTitle1>
            </CardHeader>
            <CardContent>
              <RadioGroup 
                name="mixed-group" 
                value={stateValue} 
                onChange={setStateValue}
              >
                <RadioGroupLabel>Mixed States</RadioGroupLabel>
                <RadioGroupItem value="m1">Available Option</RadioGroupItem>
                <RadioGroupItem value="m2" disabled>Disabled Option</RadioGroupItem>
                <RadioGroupItem value="m3">Another Available Option</RadioGroupItem>
              </RadioGroup>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Form Integration */}
      <div style={{ marginBottom: '32px' }}>
        <div style={{ marginBottom: spacing[4] }}>
          <CriaTextHeadline2>
            Form Integration
          </CriaTextHeadline2>
        </div>
        <div style={{ marginBottom: spacing[4] }}>
          <CriaTextBody1>
            Radio groups work seamlessly with forms and provide proper validation.
          </CriaTextBody1>
        </div>
        
        <Card>
          <CardHeader>
            <CriaTextTitle1>Survey Form</CriaTextTitle1>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: spacing[6] }}>
              <div>
                <RadioGroup 
                  name="survey-group" 
                  value={formValue} 
                  onChange={setFormValue}
                  required
                >
                  <RadioGroupLabel>How would you rate our service?</RadioGroupLabel>
                  <RadioGroupItem value="excellent">Excellent</RadioGroupItem>
                  <RadioGroupItem value="good">Good</RadioGroupItem>
                  <RadioGroupItem value="average">Average</RadioGroupItem>
                  <RadioGroupItem value="poor">Poor</RadioGroupItem>
                </RadioGroup>
              </div>
              
              <Button type="submit" disabled={!formValue}>
                Submit Survey
              </Button>
              
              {formValue && (
                <div style={{ color: colors.text.secondary }}>
                  <CriaTextBody1>
                    Preview: You selected "{formValue}"
                  </CriaTextBody1>
                </div>
              )}
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Accessibility Features */}
      <div style={{ marginBottom: '32px' }}>
        <div style={{ marginBottom: spacing[4] }}>
          <CriaTextHeadline2>
            Accessibility Features
          </CriaTextHeadline2>
        </div>
        <div style={{ marginBottom: spacing[4] }}>
          <CriaTextBody1>
            The Radio Group component includes comprehensive accessibility features.
          </CriaTextBody1>
        </div>
        
        <Card>
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[3] }}>
              <CriaTextBody1>• <strong>Keyboard Navigation:</strong> Use arrow keys to navigate between options</CriaTextBody1>
              <CriaTextBody1>• <strong>Screen Reader Support:</strong> Proper ARIA attributes and semantic HTML</CriaTextBody1>
              <CriaTextBody1>• <strong>Focus Management:</strong> Clear focus indicators and logical tab order</CriaTextBody1>
              <CriaTextBody1>• <strong>Error Announcements:</strong> Error messages are announced to screen readers</CriaTextBody1>
              <CriaTextBody1>• <strong>Required Field Indication:</strong> Visual and programmatic indication of required fields</CriaTextBody1>
              <CriaTextBody1>• <strong>Fieldset/Legend Structure:</strong> Proper semantic structure for form groups</CriaTextBody1>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Real-world Example */}
      <div style={{ marginBottom: '32px' }}>
        <div style={{ marginBottom: spacing[4] }}>
          <CriaTextHeadline2>
            Real-world Example
          </CriaTextHeadline2>
        </div>
        <div style={{ marginBottom: spacing[4] }}>
          <CriaTextBody1>
            Here's how the Radio Group component works in a typical application form.
          </CriaTextBody1>
        </div>
        
        <Card>
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[6] }}>
              <div>
                <RadioGroup 
                  name="shipping-method" 
                  value={formValue} 
                  onChange={setFormValue}
                  required
                  aria-describedby="shipping-help"
                >
                  <RadioGroupLabel>Shipping Method</RadioGroupLabel>
                  <RadioGroupItem value="standard">Standard Shipping (5-7 business days) - Free</RadioGroupItem>
                  <RadioGroupItem value="express">Express Shipping (2-3 business days) - $9.99</RadioGroupItem>
                  <RadioGroupItem value="overnight">Overnight Shipping (1 business day) - $19.99</RadioGroupItem>
                </RadioGroup>
                <div id="shipping-help" style={{ fontSize: typography.fontSize.caption, color: colors.text.secondary, marginTop: spacing[2] }}>
                  Select your preferred shipping method. Express and overnight options are available for faster delivery.
                </div>
              </div>
              
              <div>
                <RadioGroup 
                  name="payment-method" 
                  value={formValue} 
                  onChange={setFormValue}
                  orientation="horizontal"
                >
                  <RadioGroupLabel>Payment Method</RadioGroupLabel>
                  <RadioGroupItem value="credit">Credit Card</RadioGroupItem>
                  <RadioGroupItem value="paypal">PayPal</RadioGroupItem>
                  <RadioGroupItem value="apple">Apple Pay</RadioGroupItem>
                </RadioGroup>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RadioGroupDemo;