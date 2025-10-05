import React, { useState } from 'react';
import { FilterDropdown, FilterOption } from './FilterDropdown';
import { Card, CardContent, CardHeader } from '../Card';
import { Typography } from '../Typography';
import { spacing } from '../../tokens';

export const FilterDropdownDemo: React.FC = () => {
  const [categoryValue, setCategoryValue] = useState<string>('');
  const [levelValue, setLevelValue] = useState<string>('');

  const categoryOptions: FilterOption[] = [
    { value: 'all', label: 'All Categories' },
    { value: 'programming', label: 'Programming' },
    { value: 'design', label: 'Design' },
    { value: 'business', label: 'Business' },
    { value: 'marketing', label: 'Marketing' },
  ];

  const levelOptions: FilterOption[] = [
    { value: 'all', label: 'All Levels' },
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' },
  ];

  return (
    <div style={{ padding: spacing[8] }}>
      <Typography variant="h1" style={{ marginBottom: spacing[8] }}>
        FilterDropdown Component
      </Typography>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: spacing[6] }}>
        {/* Basic Usage */}
        <Card>
          <CardHeader>
            <Typography variant="h3">Basic FilterDropdown</Typography>
          </CardHeader>
          <CardContent>
            <div style={{ display: 'flex', gap: spacing[4], flexDirection: 'column' }}>
              <FilterDropdown
                label="Category"
                options={categoryOptions}
                value={categoryValue}
                onChange={setCategoryValue}
                placeholder="Select category"
              />
              
              <FilterDropdown
                label="Level"
                options={levelOptions}
                value={levelValue}
                onChange={setLevelValue}
                placeholder="Select level"
              />
            </div>
          </CardContent>
        </Card>

        {/* With Default Selection */}
        <Card>
          <CardHeader>
            <Typography variant="h3">With Default Selection</Typography>
          </CardHeader>
          <CardContent>
            <FilterDropdown
              label="Category"
              options={categoryOptions}
              value="programming"
              onChange={() => {}}
            />
          </CardContent>
        </Card>

        {/* Disabled State */}
        <Card>
          <CardHeader>
            <Typography variant="h3">Disabled State</Typography>
          </CardHeader>
          <CardContent>
            <FilterDropdown
              label="Category"
              options={categoryOptions}
              value="design"
              onChange={() => {}}
              disabled
            />
          </CardContent>
        </Card>

        {/* Custom Styling */}
        <Card>
          <CardHeader>
            <Typography variant="h3">Custom Styling</Typography>
          </CardHeader>
          <CardContent>
            <FilterDropdown
              label="Category"
              options={categoryOptions}
              value=""
              onChange={() => {}}
              style={{
                maxWidth: '200px',
                border: '2px solid #28DDB9',
                borderRadius: '12px',
              }}
            />
          </CardContent>
        </Card>
      </div>

      {/* Usage Example */}
      <Card style={{ marginTop: spacing[8] }}>
        <CardHeader>
          <Typography variant="h3">Usage Example</Typography>
        </CardHeader>
        <CardContent>
          <pre style={{ 
            backgroundColor: '#f5f5f5', 
            padding: spacing[4], 
            borderRadius: '8px',
            overflow: 'auto',
            fontSize: '14px',
            lineHeight: '1.5'
          }}>
{`import { FilterDropdown, FilterOption } from 'design-system-cria';

const options: FilterOption[] = [
  { value: 'all', label: 'All Categories' },
  { value: 'programming', label: 'Programming' },
  { value: 'design', label: 'Design' },
];

<FilterDropdown
  label="Category"
  options={options}
  value={selectedValue}
  onChange={setSelectedValue}
  placeholder="Select category"
/>`}
          </pre>
        </CardContent>
      </Card>
    </div>
  );
};

export default FilterDropdownDemo;
