import React, { useState } from 'react';
import { FilterDropdown, FilterOption } from './FilterDropdown';
import { Card, CardContent, CardHeader } from '../Card';
import { CriaTextHeadline1, CriaTextTitle1 } from '../TextTokens';
import { spacing, colors, radii } from '../../tokens';

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
      <div style={{ marginBottom: spacing[8] }}>
        <CriaTextHeadline1>
          FilterDropdown Component
        </CriaTextHeadline1>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: spacing[6] }}>
        {/* Basic Usage */}
        <Card>
          <CardHeader>
            <CriaTextTitle1>Basic FilterDropdown</CriaTextTitle1>
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
            <CriaTextTitle1>With Default Selection</CriaTextTitle1>
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
            <CriaTextTitle1>Disabled State</CriaTextTitle1>
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
            <CriaTextTitle1>Custom Styling</CriaTextTitle1>
          </CardHeader>
          <CardContent>
            <FilterDropdown
              label="Category"
              options={categoryOptions}
              value=""
              onChange={() => {}}
              style={{
                maxWidth: '200px',
                border: `2px solid ${colors.accent[500]}`,
                borderRadius: radii.lg,
              }}
            />
          </CardContent>
        </Card>
      </div>

      {/* Usage Example */}
      <Card style={{ marginTop: spacing[8] }}>
        <CardHeader>
          <CriaTextTitle1>Usage Example</CriaTextTitle1>
        </CardHeader>
        <CardContent>
          <pre style={{ 
            backgroundColor: colors.gray[50], 
            padding: spacing[4], 
            borderRadius: radii.md,
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
