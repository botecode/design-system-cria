import React, { useState } from 'react';
import { SearchFilters, SearchFilter } from './SearchFilters';
import { Card, CardContent, CardHeader } from '../Card';
import { CriaTextHeadline1, CriaTextHeadline2, CriaTextBody1 } from '../TextTokens';
import { Button } from '../Button';
import { colors, spacing, radii, typography } from '../../tokens';

const SearchFiltersDemo: React.FC = () => {
  const [filters, setFilters] = useState<SearchFilter[]>([
    {
      id: 'search',
      type: 'text',
      label: 'Search',
      placeholder: 'Search courses...',
    },
    {
      id: 'category',
      type: 'select',
      label: 'Category',
      options: [
        { value: '', label: 'All Categories' },
        { value: 'programming', label: 'Programming' },
        { value: 'design', label: 'Design' },
        { value: 'business', label: 'Business' },
        { value: 'marketing', label: 'Marketing' },
      ],
    },
    {
      id: 'level',
      type: 'select',
      label: 'Level',
      options: [
        { value: '', label: 'All Levels' },
        { value: 'beginner', label: 'Beginner' },
        { value: 'intermediate', label: 'Intermediate' },
        { value: 'advanced', label: 'Advanced' },
      ],
    },
    {
      id: 'topics',
      type: 'checkbox',
      label: 'Topics',
      options: [
        { value: 'react', label: 'React' },
        { value: 'javascript', label: 'JavaScript' },
        { value: 'typescript', label: 'TypeScript' },
        { value: 'nodejs', label: 'Node.js' },
        { value: 'python', label: 'Python' },
        { value: 'design', label: 'Design' },
      ],
    },
    {
      id: 'duration',
      type: 'dateRange',
      label: 'Duration',
      startLabel: 'Start Date',
      endLabel: 'End Date',
    },
    {
      id: 'price',
      type: 'select',
      label: 'Price',
      options: [
        { value: '', label: 'All Prices' },
        { value: 'free', label: 'Free' },
        { value: 'paid', label: 'Paid' },
        { value: 'subscription', label: 'Subscription' },
      ],
    },
  ]);

  const [mobileCollapsed, setMobileCollapsed] = useState(false);

  const handleFiltersChange = (newFilters: SearchFilter[]) => {
    setFilters(newFilters);
    console.log('Filters changed:', newFilters);
  };

  const handleResetFilters = () => {
    const resetFilters = filters.map(filter => ({
      ...filter,
      value: filter.type === 'checkbox' ? [] : '',
    }));
    setFilters(resetFilters);
  };

  return (
    <div style={{ padding: spacing[8] }}>
      <CriaTextHeadline1 style={{ marginBottom: spacing[8] }}>
        Search Filters Component
      </CriaTextHeadline1>

      <CriaTextBody1 style={{ marginBottom: spacing[8] }}>
        A comprehensive filtering component with multiple filter types, responsive design, and accessibility features.
      </CriaTextBody1>

      <div style={{ display: 'grid', gap: spacing[8] }}>
        {/* Basic Search Filters */}
        <Card>
          <CardHeader>
            <CriaTextHeadline2 >
              Basic Search Filters
            </CriaTextHeadline2>
          </CardHeader>
          <CardContent>
            <SearchFilters
              filters={filters}
              onFiltersChange={handleFiltersChange}
              data-testid="basic-search-filters"
            />
            
            <div style={{ marginTop: spacing[4], display: 'flex', gap: spacing[4] }}>
              <Button 
                variant="secondary" 
                onClick={handleResetFilters}
                size="sm"
              >
                Reset All Filters
              </Button>
              <Button 
                variant="primary" 
                onClick={() => console.log('Current filters:', filters)}
                size="sm"
              >
                Log Current Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Mobile Collapsed Example */}
        <Card>
          <CardHeader>
            <CriaTextHeadline2 >
              Mobile Collapsed Layout
            </CriaTextHeadline2>
          </CardHeader>
          <CardContent>
            <div style={{ marginBottom: spacing[4] }}>
              <Button 
                variant="secondary" 
                onClick={() => setMobileCollapsed(!mobileCollapsed)}
                size="sm"
              >
                {mobileCollapsed ? 'Show Filters' : 'Hide Filters'}
              </Button>
            </div>
            
            <SearchFilters
              filters={filters.slice(0, 3)} // Show only first 3 filters
              onFiltersChange={handleFiltersChange}
              mobileCollapsed={mobileCollapsed}
              data-testid="mobile-search-filters"
            />
          </CardContent>
        </Card>

        {/* Minimal Filters */}
        <Card>
          <CardHeader>
            <CriaTextHeadline2 >
              Minimal Filters (Text Only)
            </CriaTextHeadline2>
          </CardHeader>
          <CardContent>
            <SearchFilters
              filters={[
                {
                  id: 'simple-search',
                  type: 'text',
                  label: 'Search',
                  placeholder: 'Enter your search term...',
                },
              ]}
              onFiltersChange={(f) => console.log('Simple search:', f)}
              data-testid="minimal-search-filters"
            />
          </CardContent>
        </Card>

        {/* Advanced Filters */}
        <Card>
          <CardHeader>
            <CriaTextHeadline2 >
              Advanced Filters (Checkbox + Date Range)
            </CriaTextHeadline2>
          </CardHeader>
          <CardContent>
            <SearchFilters
              filters={[
                {
                  id: 'skills',
                  type: 'checkbox',
                  label: 'Skills',
                  options: [
                    { value: 'frontend', label: 'Frontend Development' },
                    { value: 'backend', label: 'Backend Development' },
                    { value: 'mobile', label: 'Mobile Development' },
                    { value: 'devops', label: 'DevOps' },
                    { value: 'data', label: 'Data Science' },
                    { value: 'ai', label: 'Artificial Intelligence' },
                  ],
                },
                {
                  id: 'availability',
                  type: 'dateRange',
                  label: 'Available Between',
                  startLabel: 'From',
                  endLabel: 'To',
                },
              ]}
              onFiltersChange={(f) => console.log('Advanced filters:', f)}
              data-testid="advanced-search-filters"
            />
          </CardContent>
        </Card>

        {/* Current Filter Values Display */}
        <Card>
          <CardHeader>
            <CriaTextHeadline2 >
              Current Filter Values
            </CriaTextHeadline2>
          </CardHeader>
          <CardContent>
            <pre style={{ 
              backgroundColor: colors.gray[50], 
              padding: spacing[4], 
              borderRadius: radii.sm,
              fontSize: typography.fontSize.caption,
              overflow: 'auto'
            }}>
              {JSON.stringify(filters, null, 2)}
            </pre>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SearchFiltersDemo;
