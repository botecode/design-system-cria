import React, { useState } from 'react';
import { Dropdown, DropdownOption } from './Dropdown';
import { Card, CardHeader, CardContent } from '../Card';
import { Button } from '../Button';
import { CriaTextHeadline1, CriaTextHeadline2, CriaTextBody1, CriaTextBody2, CriaTextTitle1 } from '../TextTokens';
import { spacing, colors, radii } from '../../tokens';
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
      <div style={{ marginBottom: spacing[8] }}>
        <CriaTextHeadline1 style={{ marginBottom: spacing[4] }}>
          Dropdown Component
        </CriaTextHeadline1>
        <CriaTextBody1 style={{ marginBottom: '0' }}>
          A versatile dropdown/select component with support for single and multiple selection, 
          search functionality, custom options, and comprehensive accessibility features.
        </CriaTextBody1>
      </div>

      {/* Basic Dropdown */}
      <div style={{ marginBottom: spacing[8] }}>
        <CriaTextHeadline2 style={{ marginBottom: spacing[4] }}>
          Basic Dropdown
        </CriaTextHeadline2>
        <CriaTextBody1 style={{ marginBottom: spacing[4] }}>
          Simple dropdown with placeholder text and basic selection functionality.
        </CriaTextBody1>
        
        <Card style={{ marginBottom: spacing[4] }}>
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
              <Dropdown
                options={sizes}
                placeholder="Select a size"
                label="Size"
                onChange={handleSizeChange}
                value={selectedSize}
              />
              
              <div style={{ padding: spacing[3], backgroundColor: colors.gray[100], borderRadius: radii.md }}>
                <CriaTextBody2 style={{ fontFamily: 'monospace' }}>
                  Selected: {selectedSize || 'None'}
                </CriaTextBody2>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>

      {/* Dropdown with Icons */}
      <div style={{ marginBottom: '32px' }}>
        <CriaTextHeadline2 style={{ marginBottom: spacing[4] }}>
          Dropdown with Icons
        </CriaTextHeadline2>
        <CriaTextBody1 style={{ marginBottom: spacing[4] }}>
          Dropdown options can include icons for better visual representation.
        </CriaTextBody1>
        
        <Card style={{ marginBottom: spacing[4] }}>
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
              <Dropdown
                options={countries}
                placeholder="Select your country"
                label="Country"
                onChange={handleCountryChange}
                value={selectedCountry}
              />
              
              <div style={{ padding: spacing[3], backgroundColor: colors.gray[100], borderRadius: radii.md }}>
                <CriaTextBody2 style={{ fontFamily: 'monospace' }}>
                  Selected: {selectedCountry || 'None'}
                </CriaTextBody2>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>

      {/* Multiple Selection */}
      <div style={{ marginBottom: '32px' }}>
        <CriaTextHeadline2 style={{ marginBottom: spacing[4] }}>
          Multiple Selection
        </CriaTextHeadline2>
        <CriaTextBody1 style={{ marginBottom: spacing[4] }}>
          Enable multiple selection to allow users to choose multiple options from the dropdown.
        </CriaTextBody1>
        
        <Card style={{ marginBottom: spacing[4] }}>
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
              <Dropdown
                options={skills}
                placeholder="Select your skills"
                label="Skills"
                multiple
                onChange={handleSkillsChange}
                value={selectedSkills}
              />
              
              <div style={{ padding: spacing[3], backgroundColor: colors.gray[100], borderRadius: radii.md }}>
                <CriaTextBody2 style={{ fontFamily: 'monospace' }}>
                  Selected: {selectedSkills.length > 0 ? selectedSkills.join(', ') : 'None'}
                </CriaTextBody2>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>

      {/* Searchable Dropdown */}
      <div style={{ marginBottom: '32px' }}>
        <CriaTextHeadline2 style={{ marginBottom: spacing[4] }}>
          Searchable Dropdown
        </CriaTextHeadline2>
        <CriaTextBody1 style={{ marginBottom: spacing[4] }}>
          Add search functionality to help users find options in large lists.
        </CriaTextBody1>
        
        <Card style={{ marginBottom: spacing[4] }}>
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
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
        <CriaTextHeadline2 style={{ marginBottom: spacing[4] }}>
          Different Sizes
        </CriaTextHeadline2>
        <CriaTextBody1 style={{ marginBottom: spacing[4] }}>
          Dropdowns come in three sizes: small, medium (default), and large.
        </CriaTextBody1>
        
        <Card style={{ marginBottom: spacing[4] }}>
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
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
        <CriaTextHeadline2 style={{ marginBottom: spacing[4] }}>
          Different Variants
        </CriaTextHeadline2>
        <CriaTextBody1 style={{ marginBottom: spacing[4] }}>
          Dropdowns support different visual variants to match your design needs.
        </CriaTextBody1>
        
        <Card style={{ marginBottom: spacing[4] }}>
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
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
        <CriaTextHeadline2 style={{ marginBottom: spacing[4] }}>
          Different States
        </CriaTextHeadline2>
        <CriaTextBody1 style={{ marginBottom: spacing[4] }}>
          Dropdowns can be in different states: normal, disabled, loading, and with error messages.
        </CriaTextBody1>
        
        <Card style={{ marginBottom: spacing[4] }}>
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
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
        <CriaTextHeadline2 style={{ marginBottom: spacing[4] }}>
          Form Integration
        </CriaTextHeadline2>
        <CriaTextBody1 style={{ marginBottom: spacing[4] }}>
          Dropdowns integrate seamlessly with forms and support all standard form attributes.
        </CriaTextBody1>
        
        <Card style={{ marginBottom: '16px' }}>
          <CardContent>
            <form style={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
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
        <CriaTextHeadline2 style={{ marginBottom: spacing[4] }}>
          Accessibility Features
        </CriaTextHeadline2>
        <Card>
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[3] }}>
              <CriaTextBody1>
                • <strong>Keyboard Navigation:</strong> Full keyboard support with Arrow keys, Enter, Space, Escape, Home, and End
              </CriaTextBody1>
              <CriaTextBody1>
                • <strong>Screen Reader Support:</strong> Proper ARIA attributes and semantic HTML structure
              </CriaTextBody1>
              <CriaTextBody1>
                • <strong>Focus Management:</strong> Clear focus indicators and logical tab order
              </CriaTextBody1>
              <CriaTextBody1>
                • <strong>Search Accessibility:</strong> Search input is properly labeled and accessible
              </CriaTextBody1>
              <CriaTextBody1>
                • <strong>Error Handling:</strong> Error messages are properly associated with the dropdown
              </CriaTextBody1>
              <CriaTextBody1>
                • <strong>Multiple Selection:</strong> Clear indication of selected items and selection count
              </CriaTextBody1>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DropdownDemo;
