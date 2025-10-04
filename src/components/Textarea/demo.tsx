import React, { useState } from 'react';
import { CriaTextTitle1, CriaTextTitle2, CriaTextBody1 } from '../TextTokens';
import { Textarea } from './index';
import { Card, CardContent, CardHeader, CardFooter } from '../Card';

export const TextareaDemo: React.FC = () => {
  const [basicValue, setBasicValue] = useState('');
  const [feedbackValue, setFeedbackValue] = useState('');
  const [autoResizeValue, setAutoResizeValue] = useState('');

  return (
    <div style={{ padding: '0' }}>
      <CriaTextTitle1 as="h2" style={{ marginBottom: '32px' }}>Textarea Component</CriaTextTitle1>

      <CriaTextBody1 style={{ marginBottom: '32px' }}>
        The Textarea component provides a multi-line text input with various states, sizes, and features including auto-resize, character counting, and accessibility support.
      </CriaTextBody1>

      {/* Basic Examples */}
      <Card style={{ marginBottom: '32px' }}>
        <CardHeader>
          <CriaTextTitle2 as="h3">Basic Examples</CriaTextTitle2>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Basic Textarea */}
            <div>
              <Textarea
                label="Basic Textarea"
                placeholder="Enter your message here..."
                helperText="This is a basic textarea with helper text"
              />
            </div>

            {/* Required Textarea */}
            <div>
              <Textarea
                label="Required Textarea"
                placeholder="This field is required"
                required
                helperText="This field is marked as required"
              />
            </div>

            {/* Disabled Textarea */}
            <div>
              <Textarea
                label="Disabled Textarea"
                placeholder="This textarea is disabled"
                disabled
                value="This content cannot be edited"
                helperText="This textarea is disabled"
              />
            </div>

            {/* Read-only Textarea */}
            <div>
              <Textarea
                label="Read-only Textarea"
                value="This content is read-only and cannot be modified"
                readOnly
                helperText="This textarea is read-only"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sizes */}
      <Card style={{ marginBottom: '32px' }}>
        <CardHeader>
          <CriaTextTitle2 as="h3">Sizes</CriaTextTitle2>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <Textarea
                label="Small Textarea"
                size="sm"
                placeholder="Small size textarea"
                rows={3}
              />
            </div>

            <div>
              <Textarea
                label="Medium Textarea (Default)"
                size="md"
                placeholder="Medium size textarea"
                rows={4}
              />
            </div>

            <div>
              <Textarea
                label="Large Textarea"
                size="lg"
                placeholder="Large size textarea"
                rows={5}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Variants */}
      <Card style={{ marginBottom: '32px' }}>
        <CardHeader>
          <CriaTextTitle2 as="h3">Variants</CriaTextTitle2>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <Textarea
                label="Default Variant"
                variant="default"
                placeholder="Default variant textarea"
                helperText="This is the default variant"
              />
            </div>

            <div>
              <Textarea
                label="Filled Variant"
                variant="filled"
                placeholder="Filled variant textarea"
                helperText="This is the filled variant"
              />
            </div>

            <div>
              <Textarea
                label="Outlined Variant"
                variant="outlined"
                placeholder="Outlined variant textarea"
                helperText="This is the outlined variant"
              />
            </div>

            <div>
              <Textarea
                label="Underlined Variant"
                variant="underlined"
                placeholder="Underlined variant textarea"
                helperText="This is the underlined variant"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* States */}
      <Card style={{ marginBottom: '32px' }}>
        <CardHeader>
          <CriaTextTitle2 as="h3">States</CriaTextTitle2>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <Textarea
                label="Success State"
                state="success"
                placeholder="This textarea has a success state"
                successMessage="This field looks good!"
              />
            </div>

            <div>
              <Textarea
                label="Warning State"
                state="warning"
                placeholder="This textarea has a warning state"
                warningMessage="Please review this content"
              />
            </div>

            <div>
              <Textarea
                label="Error State"
                state="error"
                placeholder="This textarea has an error state"
                errorMessage="This field is required"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Features */}
      <Card style={{ marginBottom: '32px' }}>
        <CardHeader>
          <CriaTextTitle2 as="h3">Features</CriaTextTitle2>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Character Count */}
            <div>
              <Textarea
                label="With Character Count"
                placeholder="Type something to see the character count"
                showCharacterCount
                maxLength={100}
                helperText="Maximum 100 characters allowed"
              />
            </div>

            {/* Auto Resize */}
            <div>
              <Textarea
                label="Auto Resize"
                placeholder="Type multiple lines to see auto-resize in action"
                autoResize
                helperText="This textarea automatically adjusts its height"
              />
            </div>

            {/* Resize Options */}
            <div>
              <Textarea
                label="No Resize"
                placeholder="This textarea cannot be resized"
                resize="none"
                helperText="Resize is disabled for this textarea"
              />
            </div>

            <div>
              <Textarea
                label="Both Directions Resize"
                placeholder="This textarea can be resized in both directions"
                resize="both"
                helperText="You can resize this textarea horizontally and vertically"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Examples */}
      <Card style={{ marginBottom: '32px' }}>
        <CardHeader>
          <CriaTextTitle2 as="h3">Interactive Examples</CriaTextTitle2>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Controlled Input */}
            <div>
              <Textarea
                label="Controlled Textarea"
                placeholder="Type something here"
                value={basicValue}
                onChange={(e) => setBasicValue(e.target.value)}
                helperText={`You've typed ${basicValue.length} characters`}
              />
            </div>

            {/* Feedback Form */}
            <div>
              <Textarea
                label="Feedback"
                placeholder="Please share your feedback..."
                value={feedbackValue}
                onChange={(e) => setFeedbackValue(e.target.value)}
                showCharacterCount
                maxLength={500}
                required
                helperText="Please provide detailed feedback"
                rows={6}
              />
            </div>

            {/* Auto Resize with State */}
            <div>
              <Textarea
                label="Auto Resize with State"
                placeholder="Start typing to see auto-resize..."
                value={autoResizeValue}
                onChange={(e) => setAutoResizeValue(e.target.value)}
                autoResize
                state={autoResizeValue.length > 50 ? 'success' : autoResizeValue.length > 100 ? 'warning' : 'default'}
                successMessage={autoResizeValue.length > 50 ? "Good length!" : undefined}
                warningMessage={autoResizeValue.length > 100 ? "Getting quite long!" : undefined}
                helperText="This textarea changes state based on content length"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Accessibility Note */}
      <Card>
        <CardHeader>
          <CriaTextTitle2 as="h3">Accessibility Features</CriaTextTitle2>
        </CardHeader>
        <CardContent>
          <CriaTextBody1>
            The Textarea component includes comprehensive accessibility features:
          </CriaTextBody1>
          <ul style={{ marginTop: '16px', paddingLeft: '24px' }}>
            <li><strong>ARIA attributes:</strong> Proper labeling, descriptions, and state announcements</li>
            <li><strong>Keyboard navigation:</strong> Full keyboard support including Tab, Enter, and arrow keys</li>
            <li><strong>Screen reader support:</strong> Error messages are announced with role="alert"</li>
            <li><strong>Focus management:</strong> Clear focus indicators and proper focus order</li>
            <li><strong>Required field indication:</strong> Visual and programmatic indication of required fields</li>
            <li><strong>Error association:</strong> Error messages are properly associated with the textarea</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};
