import React, { useState } from 'react';
import { Typography } from '../Typography';
import { Dropdown, DropdownOption } from './Dropdown';
import { Card, CardHeader, CardContent } from '../Card';
import { Button } from '../Button';
import { User, MapPin, Calendar, Tag, Globe, Heart, Star, Rocket } from 'phosphor-react';

export const DropdownDemo: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedSize, setSelectedSize] = useState<string>('');

  const countries: DropdownOption[] = [
    { value: 'us', label: 'United States', icon: <Globe size={16} /> },
    { value: 'ca', label: 'Canada', icon: <Globe size={16} /> },
    { value: 'uk', label: 'United Kingdom', icon: <Globe size={16} /> },
    { value: 'de', label: 'Germany', icon: <Globe size={16} /> },
    { value: 'fr', label: 'France', icon: <Globe size={16} /> },
    { value: 'jp', label: 'Japan', icon: <Globe size={16} /> },
    { value: 'au', label: 'Australia', icon: <Globe size={16} /> },
  ];

  const skills: DropdownOption[] = [
    { value: 'react', label: 'React', icon: <Rocket size={16} /> },
    { value: 'typescript', label: 'TypeScript', icon: <Tag size={16} /> },
    { value: 'node', label: 'Node.js', icon: <Star size={16} /> },
    { value: 'python', label: 'Python', icon: <Heart size={16} /> },
    { value: 'java', label: 'Java', icon: <Tag size={16} /> },
    { value: 'go', label: 'Go', icon: <Star size={16} /> },
  ];

  const sizes: DropdownOption[] = [
    { value: 'sm', label: 'Small' },
    { value: 'md', label: 'Medium' },
    { value: 'lg', label: 'Large' },
    { value: 'xl', label: 'Extra Large' },
  ];

  const handleCountryChange = (value: string | string[]) => {
    setSelectedCountry(Array.isArray(value) ? value[0] : value);
  };

  const handleSkillsChange = (value: string | string[]) => {
    setSelectedSkills(Array.isArray(value) ? value : [value]);
  };

  const handleSizeChange = (value: string | string[]) => {
    setSelectedSize(Array.isArray(value) ? value[0] : value);
  };

  return (
    <div style={{ padding: '0' }}>
      <div style={{ marginBottom: '32px' }}>
        <Typography variant="title1" style={{ marginBottom: '16px' }}>
          Dropdown Component
        </Typography>
        <Typography variant="body" style={{ marginBottom: '0' }}>
          A versatile dropdown/select component with support for single and multiple selection, 
          search functionality, custom options, and comprehensive accessibility features.
        </Typography>
      </div>

      {/* Basic Dropdown */}
      <div style={{ marginBottom: '32px' }}>
        <Typography variant="h2" style={{ marginBottom: '16px' }}>
          Basic Dropdown
        </Typography>
        <Typography variant="body" style={{ marginBottom: '16px' }}>
          Simple dropdown with placeholder text and basic selection functionality.
        </Typography>
        
        <Card style={{ marginBottom: '16px' }}>
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <Dropdown
                options={sizes}
                placeholder="Select a size"
                label="Size"
                onChange={handleSizeChange}
                value={selectedSize}
              />
              
              <div style={{ padding: '12px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                <Typography variant="bodySmall" style={{ fontFamily: 'monospace' }}>
                  Selected: {selectedSize || 'None'}
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>

      {/* Dropdown with Icons */}
      <div style={{ marginBottom: '32px' }}>
        <Typography variant="h2" style={{ marginBottom: '16px' }}>
          Dropdown with Icons
        </Typography>
        <Typography variant="body" style={{ marginBottom: '16px' }}>
          Dropdown options can include icons for better visual representation.
        </Typography>
        
        <Card style={{ marginBottom: '16px' }}>
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <Dropdown
                options={countries}
                placeholder="Select your country"
                label="Country"
                onChange={handleCountryChange}
                value={selectedCountry}
              />
              
              <div style={{ padding: '12px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                <Typography variant="bodySmall" style={{ fontFamily: 'monospace' }}>
                  Selected: {selectedCountry || 'None'}
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>

      {/* Multiple Selection */}
      <div style={{ marginBottom: '32px' }}>
        <Typography variant="h2" style={{ marginBottom: '16px' }}>
          Multiple Selection
        </Typography>
        <Typography variant="body" style={{ marginBottom: '16px' }}>
          Enable multiple selection to allow users to choose multiple options from the dropdown.
        </Typography>
        
        <Card style={{ marginBottom: '16px' }}>
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <Dropdown
                options={skills}
                placeholder="Select your skills"
                label="Skills"
                multiple
                onChange={handleSkillsChange}
                value={selectedSkills}
              />
              
              <div style={{ padding: '12px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                <Typography variant="bodySmall" style={{ fontFamily: 'monospace' }}>
                  Selected: {selectedSkills.length > 0 ? selectedSkills.join(', ') : 'None'}
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>

      {/* Searchable Dropdown */}
      <div style={{ marginBottom: '32px' }}>
        <Typography variant="h2" style={{ marginBottom: '16px' }}>
          Searchable Dropdown
        </Typography>
        <Typography variant="body" style={{ marginBottom: '16px' }}>
          Add search functionality to help users find options in large lists.
        </Typography>
        
        <Card style={{ marginBottom: '16px' }}>
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <Dropdown
                options={countries}
                placeholder="Search and select a country"
                label="Country (Searchable)"
                searchable
              />
            </div>
          </CardContent>
        </Card>

      </div>

      {/* Different Sizes */}
      <div style={{ marginBottom: '32px' }}>
        <Typography variant="h2" style={{ marginBottom: '16px' }}>
          Different Sizes
        </Typography>
        <Typography variant="body" style={{ marginBottom: '16px' }}>
          Dropdowns come in three sizes: small, medium (default), and large.
        </Typography>
        
        <Card style={{ marginBottom: '16px' }}>
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <Dropdown
                options={sizes}
                placeholder="Small dropdown"
                label="Small"
                size="sm"
              />
              
              <Dropdown
                options={sizes}
                placeholder="Medium dropdown (default)"
                label="Medium"
                size="md"
              />
              
              <Dropdown
                options={sizes}
                placeholder="Large dropdown"
                label="Large"
                size="lg"
              />
            </div>
          </CardContent>
        </Card>

      </div>

      {/* Different Variants */}
      <div style={{ marginBottom: '32px' }}>
        <Typography variant="h2" style={{ marginBottom: '16px' }}>
          Different Variants
        </Typography>
        <Typography variant="body" style={{ marginBottom: '16px' }}>
          Dropdowns support different visual variants to match your design needs.
        </Typography>
        
        <Card style={{ marginBottom: '16px' }}>
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <Dropdown
                options={sizes}
                placeholder="Default variant"
                label="Default"
                variant="default"
              />
              
              <Dropdown
                options={sizes}
                placeholder="Filled variant"
                label="Filled"
                variant="filled"
              />
              
              <Dropdown
                options={sizes}
                placeholder="Outlined variant"
                label="Outlined"
                variant="outlined"
              />
            </div>
          </CardContent>
        </Card>

      </div>

      {/* States */}
      <div style={{ marginBottom: '32px' }}>
        <Typography variant="h2" style={{ marginBottom: '16px' }}>
          Different States
        </Typography>
        <Typography variant="body" style={{ marginBottom: '16px' }}>
          Dropdowns can be in different states: normal, disabled, loading, and with error messages.
        </Typography>
        
        <Card style={{ marginBottom: '16px' }}>
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <Dropdown
                options={sizes}
                placeholder="Normal dropdown"
                label="Normal"
              />
              
              <Dropdown
                options={sizes}
                placeholder="Disabled dropdown"
                label="Disabled"
                disabled
              />
              
              <Dropdown
                options={sizes}
                placeholder="Loading dropdown"
                label="Loading"
                loading
              />
              
              <Dropdown
                options={sizes}
                placeholder="Dropdown with error"
                label="With Error"
                errorMessage="Please select a valid option"
              />
              
              <Dropdown
                options={sizes}
                placeholder="Dropdown with helper text"
                label="With Helper"
                helperText="Choose the size that best fits your needs"
              />
            </div>
          </CardContent>
        </Card>

      </div>

      {/* Form Integration */}
      <div style={{ marginBottom: '32px' }}>
        <Typography variant="h2" style={{ marginBottom: '16px' }}>
          Form Integration
        </Typography>
        <Typography variant="body" style={{ marginBottom: '16px' }}>
          Dropdowns integrate seamlessly with forms and support all standard form attributes.
        </Typography>
        
        <Card style={{ marginBottom: '16px' }}>
          <CardContent>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <Dropdown
                options={countries}
                placeholder="Select your country"
                label="Country"
                name="country"
                required
              />
              
              <Dropdown
                options={skills}
                placeholder="Select your skills"
                label="Skills"
                name="skills"
                multiple
              />
              
              <Button type="submit" variant="primary">
                Submit Form
              </Button>
            </form>
          </CardContent>
        </Card>

      </div>

      {/* Accessibility Features */}
      <div style={{ marginBottom: '32px' }}>
        <Typography variant="h2" style={{ marginBottom: '16px' }}>
          Accessibility Features
        </Typography>
        <Card>
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Typography variant="body">
                • <strong>Keyboard Navigation:</strong> Full keyboard support with Arrow keys, Enter, Space, Escape, Home, and End
              </Typography>
              <Typography variant="body">
                • <strong>Screen Reader Support:</strong> Proper ARIA attributes and semantic HTML structure
              </Typography>
              <Typography variant="body">
                • <strong>Focus Management:</strong> Clear focus indicators and logical tab order
              </Typography>
              <Typography variant="body">
                • <strong>Search Accessibility:</strong> Search input is properly labeled and accessible
              </Typography>
              <Typography variant="body">
                • <strong>Error Handling:</strong> Error messages are properly associated with the dropdown
              </Typography>
              <Typography variant="body">
                • <strong>Multiple Selection:</strong> Clear indication of selected items and selection count
              </Typography>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DropdownDemo;
