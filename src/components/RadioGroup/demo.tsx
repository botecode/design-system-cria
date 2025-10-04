import React, { useState } from 'react';
import { RadioGroup, RadioGroupLabel, RadioGroupItem } from './RadioGroup';
import { Typography } from '../Typography';
import { Card, CardContent, CardHeader } from '../Card';
import { Button } from '../Button';

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
      <div style={{ marginBottom: '32px' }}>
        <Typography variant="title1" style={{ marginBottom: '16px' }}>
          Radio Group Component
        </Typography>
        <Typography variant="body" style={{ marginBottom: '0' }}>
          A Radio Group component for single selection from multiple options with proper accessibility,
          keyboard navigation, and form integration.
        </Typography>
      </div>

      {/* Basic Usage */}
      <div style={{ marginBottom: '32px' }}>
        <Typography variant="h2" style={{ marginBottom: '16px' }}>
          Basic Usage
        </Typography>
        <Typography variant="body" style={{ marginBottom: '16px' }}>
          Simple radio group with three options. Only one option can be selected at a time.
        </Typography>
        
        <Card style={{ marginBottom: '16px' }}>
          <CardHeader>
            <Typography variant="h3">Choose your preferred option</Typography>
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
              <Typography variant="body" style={{ marginTop: '16px', color: '#666' }}>
                Selected: {basicValue}
              </Typography>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Size Variants */}
      <div style={{ marginBottom: '32px' }}>
        <Typography variant="h2" style={{ marginBottom: '16px' }}>
          Size Variants
        </Typography>
        <Typography variant="body" style={{ marginBottom: '16px' }}>
          Radio groups support different sizes for various use cases.
        </Typography>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
          <Card>
            <CardHeader>
              <Typography variant="h3">Small Size</Typography>
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
              <Typography variant="h3">Large Size</Typography>
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
        <Typography variant="h2" style={{ marginBottom: '16px' }}>
          Orientation
        </Typography>
        <Typography variant="body" style={{ marginBottom: '16px' }}>
          Radio groups can be displayed horizontally or vertically.
        </Typography>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '16px' }}>
          <Card>
            <CardHeader>
              <Typography variant="h3">Vertical (Default)</Typography>
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
              <Typography variant="h3">Horizontal</Typography>
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
        <Typography variant="h2" style={{ marginBottom: '16px' }}>
          States
        </Typography>
        <Typography variant="body" style={{ marginBottom: '16px' }}>
          Radio groups support different states including disabled, required, and error states.
        </Typography>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
          <Card>
            <CardHeader>
              <Typography variant="h3">Disabled Group</Typography>
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
              <Typography variant="h3">Required with Error</Typography>
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
              <Typography variant="h3">Mixed States</Typography>
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
        <Typography variant="h2" style={{ marginBottom: '16px' }}>
          Form Integration
        </Typography>
        <Typography variant="body" style={{ marginBottom: '16px' }}>
          Radio groups work seamlessly with forms and provide proper validation.
        </Typography>
        
        <Card>
          <CardHeader>
            <Typography variant="h3">Survey Form</Typography>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
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
                <Typography variant="body" style={{ color: '#666' }}>
                  Preview: You selected "{formValue}"
                </Typography>
              )}
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Accessibility Features */}
      <div style={{ marginBottom: '32px' }}>
        <Typography variant="h2" style={{ marginBottom: '16px' }}>
          Accessibility Features
        </Typography>
        <Typography variant="body" style={{ marginBottom: '16px' }}>
          The Radio Group component includes comprehensive accessibility features.
        </Typography>
        
        <Card>
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Typography variant="body">• <strong>Keyboard Navigation:</strong> Use arrow keys to navigate between options</Typography>
              <Typography variant="body">• <strong>Screen Reader Support:</strong> Proper ARIA attributes and semantic HTML</Typography>
              <Typography variant="body">• <strong>Focus Management:</strong> Clear focus indicators and logical tab order</Typography>
              <Typography variant="body">• <strong>Error Announcements:</strong> Error messages are announced to screen readers</Typography>
              <Typography variant="body">• <strong>Required Field Indication:</strong> Visual and programmatic indication of required fields</Typography>
              <Typography variant="body">• <strong>Fieldset/Legend Structure:</strong> Proper semantic structure for form groups</Typography>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Real-world Example */}
      <div style={{ marginBottom: '32px' }}>
        <Typography variant="h2" style={{ marginBottom: '16px' }}>
          Real-world Example
        </Typography>
        <Typography variant="body" style={{ marginBottom: '16px' }}>
          Here's how the Radio Group component works in a typical application form.
        </Typography>
        
        <Card>
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
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
                <div id="shipping-help" style={{ fontSize: '14px', color: '#666', marginTop: '8px' }}>
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