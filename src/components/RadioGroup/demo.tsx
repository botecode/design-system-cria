import React, { useState } from 'react';
import { RadioGroup, RadioOption } from './RadioGroup';
import { Card, CardHeader, CardContent } from '../Card';

const basicOptions: RadioOption[] = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const optionsWithDescriptions: RadioOption[] = [
  { value: 'basic', label: 'Basic Plan', description: 'Perfect for individuals' },
  { value: 'pro', label: 'Pro Plan', description: 'Great for small teams' },
  { value: 'enterprise', label: 'Enterprise Plan', description: 'For large organizations' },
];

const optionsWithDisabled: RadioOption[] = [
  { value: 'available1', label: 'Available Option 1' },
  { value: 'disabled1', label: 'Disabled Option 1', disabled: true },
  { value: 'available2', label: 'Available Option 2' },
  { value: 'disabled2', label: 'Disabled Option 2', disabled: true },
];

export const RadioGroupDemo: React.FC = () => {
  const [basicValue, setBasicValue] = useState<string>('');
  const [descriptionValue, setDescriptionValue] = useState<string>('');
  const [disabledValue, setDisabledValue] = useState<string>('');
  const [errorValue, setErrorValue] = useState<string>('');
  const [horizontalValue, setHorizontalValue] = useState<string>('');
  const [sizeValue, setSizeValue] = useState<string>('');
  const [variantValue, setVariantValue] = useState<string>('');

  return (
    <div className="cria-demo">
      <h1>Radio Group Component</h1>
      
      <Card>
        <CardHeader>
          <h2>Basic Radio Group</h2>
        </CardHeader>
        <CardContent>
          <RadioGroup
            options={basicOptions}
            value={basicValue}
            onChange={setBasicValue}
            label="Choose an option"
            description="Select one option from the list below"
          />
          <p>Selected: {basicValue || 'None'}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h2>With Descriptions</h2>
        </CardHeader>
        <CardContent>
          <RadioGroup
            options={optionsWithDescriptions}
            value={descriptionValue}
            onChange={setDescriptionValue}
            label="Choose a plan"
            description="Select the plan that best fits your needs"
          />
          <p>Selected: {descriptionValue || 'None'}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h2>With Disabled Options</h2>
        </CardHeader>
        <CardContent>
          <RadioGroup
            options={optionsWithDisabled}
            value={disabledValue}
            onChange={setDisabledValue}
            label="Available options"
            description="Some options are currently unavailable"
          />
          <p>Selected: {disabledValue || 'None'}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h2>Error State</h2>
        </CardHeader>
        <CardContent>
          <RadioGroup
            options={basicOptions}
            value={errorValue}
            onChange={setErrorValue}
            label="Required selection"
            error="Please select an option"
            required
          />
          <p>Selected: {errorValue || 'None'}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h2>Horizontal Layout</h2>
        </CardHeader>
        <CardContent>
          <RadioGroup
            options={basicOptions}
            value={horizontalValue}
            onChange={setHorizontalValue}
            label="Horizontal layout"
            orientation="horizontal"
          />
          <p>Selected: {horizontalValue || 'None'}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h2>Different Sizes</h2>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <h3>Small</h3>
              <RadioGroup
                options={basicOptions}
                value={sizeValue}
                onChange={setSizeValue}
                size="small"
              />
            </div>
            <div>
              <h3>Medium (default)</h3>
              <RadioGroup
                options={basicOptions}
                value={sizeValue}
                onChange={setSizeValue}
                size="medium"
              />
            </div>
            <div>
              <h3>Large</h3>
              <RadioGroup
                options={basicOptions}
                value={sizeValue}
                onChange={setSizeValue}
                size="large"
              />
            </div>
          </div>
          <p>Selected: {sizeValue || 'None'}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h2>Card Variant</h2>
        </CardHeader>
        <CardContent>
          <RadioGroup
            options={optionsWithDescriptions}
            value={variantValue}
            onChange={setVariantValue}
            label="Choose a plan"
            variant="card"
          />
          <p>Selected: {variantValue || 'None'}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h2>Disabled State</h2>
        </CardHeader>
        <CardContent>
          <RadioGroup
            options={basicOptions}
            value="option2"
            label="Disabled radio group"
            disabled
          />
        </CardContent>
      </Card>
    </div>
  );
};
