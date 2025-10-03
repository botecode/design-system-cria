import React, { useState } from 'react';
import { Typography } from '../Typography';
import { Button } from '../Button';
import { Card, CardHeader, CardContent } from '../Card';
import Input from './Input';
import { User, Envelope, Lock, Phone, MagnifyingGlass, Calendar, MapPin, CreditCard, WarningCircle } from 'phosphor-react';

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
    <div style={{ padding: '24px', maxWidth: '1000px' }}>
      <Typography variant="title1" weight="bold" style={{ marginBottom: '32px' }}>
        Input Demo
      </Typography>

      {/* Basic Inputs */}
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Basic Inputs
        </Typography>
        <Typography variant="body" style={{ marginBottom: '24px' }}>
          Simple text inputs with labels and placeholders.
        </Typography>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
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
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Input Sizes
        </Typography>
        <Typography variant="body" style={{ marginBottom: '24px' }}>
          Different sizes for different contexts and use cases.
        </Typography>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
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
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Input Variants
        </Typography>
        <Typography variant="body" style={{ marginBottom: '24px' }}>
          Different visual styles for different design contexts.
        </Typography>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
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
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Input States
        </Typography>
        <Typography variant="body" style={{ marginBottom: '24px' }}>
          Different states for validation and user feedback.
        </Typography>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
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
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Inputs with Icons
        </Typography>
        <Typography variant="body" style={{ marginBottom: '24px' }}>
          Icons can be added to provide visual context and improve usability.
        </Typography>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
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
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Special Input Types
        </Typography>
        <Typography variant="body" style={{ marginBottom: '24px' }}>
          Different input types for specific data formats.
        </Typography>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
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
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Input Features
        </Typography>
        <Typography variant="body" style={{ marginBottom: '24px' }}>
          Advanced features like character count, clear button, and validation.
        </Typography>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
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
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Disabled Inputs
        </Typography>
        <Typography variant="body" style={{ marginBottom: '24px' }}>
          Disabled inputs for inactive or unavailable fields.
        </Typography>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
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
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Form Example
        </Typography>
        <Typography variant="body" style={{ marginBottom: '24px' }}>
          A complete form example showing how inputs work together.
        </Typography>
        <Card variant="elevated">
          <CardHeader>
            <Typography variant="h3" weight="medium">User Registration</Typography>
          </CardHeader>
          <CardContent>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
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
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
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
      <section style={{ marginBottom: '48px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Accessibility Features
        </Typography>
        <Typography variant="body" style={{ marginBottom: '16px' }}>
          The Input component includes comprehensive accessibility features:
        </Typography>
        <ul style={{ marginLeft: '24px', marginBottom: '16px' }}>
          <li>
            <Typography variant="body">
              <strong>Labels:</strong> Proper label association with inputs
            </Typography>
          </li>
          <li>
            <Typography variant="body">
              <strong>ARIA Attributes:</strong> Proper aria-describedby, aria-invalid, and aria-required
            </Typography>
          </li>
          <li>
            <Typography variant="body">
              <strong>Keyboard Navigation:</strong> Full keyboard support for all interactive elements
            </Typography>
          </li>
          <li>
            <Typography variant="body">
              <strong>Screen Reader Support:</strong> Proper announcement of labels, help text, and error messages
            </Typography>
          </li>
          <li>
            <Typography variant="body">
              <strong>Focus Management:</strong> Clear focus indicators and proper tab order
            </Typography>
          </li>
        </ul>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
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
