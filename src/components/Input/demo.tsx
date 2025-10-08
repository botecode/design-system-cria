import React, { useState } from 'react';
import { Typography } from '../Typography';
import { Button } from '../Button';
import { CriaTextHeadline1, CriaTextTitle1, CriaTextBody1 } from '../TextTokens';
import { Card, CardHeader, CardContent } from '../Card';
import Input from './Input';
import { User, Envelope, Lock, Phone, MagnifyingGlass, Calendar, MapPin, CreditCard, WarningCircle } from 'phosphor-react';
import { spacing } from '../../tokens';

export const InputDemo: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    search: '',
    date: '',
    location: '',
    card: '',
  });

  const handleInputChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handleClear = (field: string) => () => {
    setFormData(prev => ({
      ...prev,
      [field]: '',
    }));
  };

  return (
    <div style={{ padding: spacing[6], maxWidth: '1000px' }}>
      <div style={{ marginBottom: spacing[8] }}>
        <CriaTextHeadline1>
          Input Demo
        </CriaTextHeadline1>
      </div>

      {/* Basic Inputs */}
      <section style={{ marginBottom: spacing[12] }}>
        <div style={{ marginBottom: spacing[4] }}>
          <CriaTextTitle1>
            Basic Inputs
          </CriaTextTitle1>
        </div>
        <div style={{ marginBottom: spacing[6] }}>
          <CriaTextBody1>
            Simple text inputs with labels and placeholders.
          </CriaTextBody1>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: spacing[6] }}>
          <Input
            label="Full Name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleInputChange('name')}
          />
          <Input
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange('email')}
          />
          <Input
            label="Phone Number"
            type="tel"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleInputChange('phone')}
          />
          <Input
            label="Date"
            type="date"
            value={formData.date}
            onChange={handleInputChange('date')}
          />
        </div>
      </section>

      {/* Input Sizes */}
      <section style={{ marginBottom: spacing[12] }}>
        <div style={{ marginBottom: spacing[4] }}>
          <CriaTextTitle1>
            Input Sizes
          </CriaTextTitle1>
        </div>
        <div style={{ marginBottom: spacing[6] }}>
          <CriaTextBody1>
            Different sizes for different contexts and use cases.
          </CriaTextBody1>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4], maxWidth: '400px' }}>
          <Input
            label="Small Input"
            placeholder="Small size input"
            size="sm"
          />
          <Input
            label="Medium Input (Default)"
            placeholder="Medium size input"
            size="md"
          />
          <Input
            label="Large Input"
            placeholder="Large size input"
            size="lg"
          />
        </div>
      </section>

      {/* Input Variants */}
      <section style={{ marginBottom: spacing[12] }}>
        <div style={{ marginBottom: spacing[4] }}>
          <CriaTextTitle1>
            Input Variants
          </CriaTextTitle1>
        </div>
        <div style={{ marginBottom: spacing[6] }}>
          <CriaTextBody1>
            Different visual styles for different design contexts.
          </CriaTextBody1>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: spacing[6] }}>
          <Input
            label="Default Variant"
            placeholder="Default style input"
            variant="default"
          />
          <Input
            label="Filled Variant"
            placeholder="Filled style input"
            variant="filled"
          />
          <Input
            label="Outlined Variant"
            placeholder="Outlined style input"
            variant="outlined"
          />
          <Input
            label="Underlined Variant"
            placeholder="Underlined style input"
            variant="underlined"
          />
        </div>
      </section>

      {/* Input States */}
      <section style={{ marginBottom: spacing[12] }}>
        <div style={{ marginBottom: spacing[4] }}>
          <CriaTextTitle1>
            Input States
          </CriaTextTitle1>
        </div>
        <div style={{ marginBottom: spacing[6] }}>
          <CriaTextBody1>
            Different states for validation and user feedback.
          </CriaTextBody1>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: spacing[6] }}>
          <Input
            label="Default State"
            placeholder="Normal input"
            state="default"
          />
          <Input
            label="Success State"
            placeholder="Success input"
            state="success"
            successMessage="This field is valid"
          />
          <Input
            label="Warning State"
            placeholder="Warning input"
            state="warning"
            warningMessage="Please review this field"
          />
          <Input
            label="Error State"
            placeholder="Error input"
            state="error"
            errorMessage="This field is required"
          />
        </div>
      </section>

      {/* Inputs with Icons */}
      <section style={{ marginBottom: spacing[12] }}>
        <div style={{ marginBottom: spacing[4] }}>
          <CriaTextTitle1>
            Inputs with Icons
          </CriaTextTitle1>
        </div>
        <div style={{ marginBottom: spacing[6] }}>
          <CriaTextBody1>
            Icons can be added to provide visual context and improve usability.
          </CriaTextBody1>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: spacing[6] }}>
          <Input
            label="Username"
            placeholder="Enter your username"
            leftIcon={<User size={20} />}
          />
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            leftIcon={<Envelope size={20} />}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            leftIcon={<Lock size={20} />}
            showPasswordToggle
          />
          <Input
            label="Search"
            placeholder="Search for something"
            leftIcon={<MagnifyingGlass size={20} />}
            showClearButton
          />
        </div>
      </section>

      {/* Special Input Types */}
      <section style={{ marginBottom: spacing[12] }}>
        <div style={{ marginBottom: spacing[4] }}>
          <CriaTextTitle1>
            Special Input Types
          </CriaTextTitle1>
        </div>
        <div style={{ marginBottom: spacing[6] }}>
          <CriaTextBody1>
            Different input types for specific data formats.
          </CriaTextBody1>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: spacing[6] }}>
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            showPasswordToggle
            helperText="Password must be at least 8 characters"
          />
          <Input
            label="Search"
            type="search"
            placeholder="Search..."
            showClearButton
          />
          <Input
            label="Number"
            type="number"
            placeholder="Enter a number"
            min={0}
            max={100}
          />
          <Input
            label="URL"
            type="url"
            placeholder="https://example.com"
          />
        </div>
      </section>

      {/* Input Features */}
      <section style={{ marginBottom: spacing[12] }}>
        <div style={{ marginBottom: spacing[4] }}>
          <CriaTextTitle1>
            Input Features
          </CriaTextTitle1>
        </div>
        <div style={{ marginBottom: spacing[6] }}>
          <CriaTextBody1>
            Advanced features like character count, clear button, and validation.
          </CriaTextBody1>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: spacing[6] }}>
          <Input
            label="With Clear Button"
            placeholder="Type something..."
            value={formData.search}
            onChange={handleInputChange('search')}
            showClearButton
            onClear={handleClear('search')}
          />
          <Input
            label="With Character Count"
            placeholder="Type a message..."
            maxLength={100}
            showCharacterCount
            helperText="Maximum 100 characters"
          />
          <Input
            label="Required Field"
            placeholder="This field is required"
            required
            helperText="This field is mandatory"
          />
          <Input
            label="Read Only"
            placeholder="This field is read-only"
            readOnly
            value="Read-only value"
            helperText="This field cannot be edited"
          />
        </div>
      </section>

      {/* Disabled Inputs */}
      <section style={{ marginBottom: spacing[12] }}>
        <div style={{ marginBottom: spacing[4] }}>
          <CriaTextTitle1>
            Disabled Inputs
          </CriaTextTitle1>
        </div>
        <div style={{ marginBottom: spacing[6] }}>
          <CriaTextBody1>
            Disabled inputs for inactive or unavailable fields.
          </CriaTextBody1>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: spacing[6] }}>
          <Input
            label="Disabled Input"
            placeholder="This input is disabled"
            disabled
            value="Disabled value"
          />
          <Input
            label="Disabled with Icon"
            placeholder="Disabled with icon"
            disabled
            leftIcon={<User size={20} />}
            value="Disabled with icon"
          />
        </div>
      </section>

      {/* Form Example */}
      <section style={{ marginBottom: spacing[12] }}>
        <div style={{ marginBottom: spacing[4] }}>
          <CriaTextTitle1>
            Form Example
          </CriaTextTitle1>
        </div>
        <div style={{ marginBottom: spacing[6] }}>
          <CriaTextBody1>
            A complete form example showing how inputs work together.
          </CriaTextBody1>
        </div>
        <Card variant="elevated">
          <CardHeader>
            <CriaTextTitle1>User Registration</CriaTextTitle1>
          </CardHeader>
          <CardContent>
            <form style={{ display: 'flex', flexDirection: 'column', gap: spacing[5] }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: spacing[5] }}>
                <Input
                  label="Full Name"
                  placeholder="Enter your full name"
                  required
                  leftIcon={<User size={20} />}
                  value={formData.name}
                  onChange={handleInputChange('name')}
                />
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="Enter your email"
                  required
                  leftIcon={<Envelope size={20} />}
                  value={formData.email}
                  onChange={handleInputChange('email')}
                />
                <Input
                  label="Phone Number"
                  type="tel"
                  placeholder="Enter your phone"
                  leftIcon={<Phone size={20} />}
                  value={formData.phone}
                  onChange={handleInputChange('phone')}
                />
                <Input
                  label="Password"
                  type="password"
                  placeholder="Enter your password"
                  required
                  leftIcon={<Lock size={20} />}
                  showPasswordToggle
                  value={formData.password}
                  onChange={handleInputChange('password')}
                  helperText="Password must be at least 8 characters"
                />
                <Input
                  label="Location"
                  placeholder="Enter your location"
                  leftIcon={<MapPin size={20} />}
                  value={formData.location}
                  onChange={handleInputChange('location')}
                />
                <Input
                  label="Credit Card"
                  placeholder="1234 5678 9012 3456"
                  leftIcon={<CreditCard size={20} />}
                  maxLength={19}
                  showCharacterCount
                  value={formData.card}
                  onChange={handleInputChange('card')}
                />
              </div>
              <div style={{ display: 'flex', gap: spacing[3], justifyContent: 'flex-end' }}>
                <Button variant="outline" type="button">
                  Cancel
                </Button>
                <Button variant="primary" type="submit">
                  Register
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </section>

      {/* Accessibility */}
      <section style={{ marginBottom: spacing[12] }}>
        <div style={{ marginBottom: spacing[4] }}>
          <CriaTextTitle1>
            Accessibility Features
          </CriaTextTitle1>
        </div>
        <div style={{ marginBottom: spacing[4] }}>
          <CriaTextBody1>
            The Input component includes comprehensive accessibility features:
          </CriaTextBody1>
        </div>
        <ul style={{ marginLeft: spacing[6], marginBottom: spacing[4] }}>
          <li>
            <CriaTextBody1>
              <strong>Labels:</strong> Proper label association with inputs
            </CriaTextBody1>
          </li>
          <li>
            <CriaTextBody1>
              <strong>ARIA Attributes:</strong> Proper aria-describedby, aria-invalid, and aria-required
            </CriaTextBody1>
          </li>
          <li>
            <CriaTextBody1>
              <strong>Keyboard Navigation:</strong> Full keyboard support for all interactive elements
            </CriaTextBody1>
          </li>
          <li>
            <CriaTextBody1>
              <strong>Screen Reader Support:</strong> Proper announcement of labels, help text, and error messages
            </CriaTextBody1>
          </li>
          <li>
            <CriaTextBody1>
              <strong>Focus Management:</strong> Clear focus indicators and proper tab order
            </CriaTextBody1>
          </li>
        </ul>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: spacing[6] }}>
          <Input
            label="Accessible Input"
            placeholder="This input is fully accessible"
            helperText="This input includes all accessibility features"
            required
          />
        </div>
      </section>
    </div>
  );
};

export default InputDemo;
