import React, { useState, useEffect } from 'react';
import { Input } from '../Input';
import { Button } from '../Button';
import { Typography } from '../Typography';
import { FilterDropdown } from '../FilterDropdown';
import { colors, spacing, radii, shadows, typography } from '../../tokens';
import { FunnelSimple, X, CaretDown } from 'phosphor-react';

export interface FilterOption {
  value: string;
  label: string;
}

export interface DateRangeValue {
  start: string;
  end: string;
}

export interface FilterConfig {
  id: string;
  type: 'text' | 'select' | 'checkbox' | 'dateRange';
  label: string;
  placeholder?: string;
  options?: FilterOption[];
  startLabel?: string;
  endLabel?: string;
}

export interface FilterValues {
  [key: string]: string | string[] | DateRangeValue;
}

export interface SearchFiltersProps {
  /**
   * Array of filter configurations
   */
  filters: FilterConfig[];
  
  /**
   * Current filter values
   */
  values?: FilterValues;
  
  /**
   * Callback when filters change
   */
  onFiltersChange: (values: FilterValues) => void;
  
  /**
   * Whether filters should be collapsed on mobile
   */
  mobileCollapsed?: boolean;
  
  /**
   * Custom className
   */
  className?: string;
  
  /**
   * Custom styles
   */
  style?: React.CSSProperties;
  
  /**
   * Data attributes for testing
   */
  'data-testid'?: string;
}

export function SearchFilters({
  filters,
  values = {},
  onFiltersChange,
  mobileCollapsed = false,
  className,
  style,
  'data-testid': dataTestId,
}: SearchFiltersProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [filterValues, setFilterValues] = useState<FilterValues>(values);

  // Initialize filter values with defaults
  useEffect(() => {
    const initialValues: FilterValues = {};
    filters.forEach(filter => {
      if (!filterValues[filter.id]) {
        switch (filter.type) {
          case 'text':
          case 'select':
            initialValues[filter.id] = '';
            break;
          case 'checkbox':
            initialValues[filter.id] = [];
            break;
          case 'dateRange':
            initialValues[filter.id] = { start: '', end: '' };
            break;
        }
      }
    });
    setFilterValues({ ...filterValues, ...initialValues });
  }, [filters]);

  const handleFilterChange = (filterId: string, value: any) => {
    const newValues = { ...filterValues, [filterId]: value };
    setFilterValues(newValues);
    onFiltersChange(newValues);
  };

  const handleClearAll = () => {
    const clearedValues: FilterValues = {};
    filters.forEach(filter => {
      switch (filter.type) {
        case 'text':
        case 'select':
          clearedValues[filter.id] = '';
          break;
        case 'checkbox':
          clearedValues[filter.id] = [];
          break;
        case 'dateRange':
          clearedValues[filter.id] = { start: '', end: '' };
          break;
      }
    });
    setFilterValues(clearedValues);
    onFiltersChange(clearedValues);
  };

  const handleCheckboxChange = (filterId: string, optionValue: string, checked: boolean) => {
    const currentValues = (filterValues[filterId] as string[]) || [];
    const newValues = checked
      ? [...currentValues, optionValue]
      : currentValues.filter(v => v !== optionValue);
    handleFilterChange(filterId, newValues);
  };

  const handleDateRangeChange = (filterId: string, field: 'start' | 'end', value: string) => {
    const currentRange = (filterValues[filterId] as DateRangeValue) || { start: '', end: '' };
    const newRange = { ...currentRange, [field]: value };
    handleFilterChange(filterId, newRange);
  };

  const hasActiveFilters = Object.values(filterValues).some(value => {
    if (Array.isArray(value)) return value.length > 0;
    if (typeof value === 'object') return value.start || value.end;
    return value !== '';
  });

  const toggleMobileFilters = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const renderFilter = (filter: FilterConfig) => {
    const value = filterValues[filter.id];

    switch (filter.type) {
      case 'text':
        return (
          <div key={filter.id} style={filterGroupStyles}>
            <Input
              label={filter.label}
              placeholder={filter.placeholder}
              value={(value as string) || ''}
              onChange={(e) => handleFilterChange(filter.id, e.target.value)}
              style={filterInputStyles}
              aria-label={filter.label}
            />
          </div>
        );

      case 'select':
        const selectOptions = [
          { value: '', label: `All ${filter.label}s` },
          ...(filter.options || [])
        ];
        
        return (
          <div key={filter.id} style={filterGroupStyles}>
            <FilterDropdown
              label={filter.label}
              options={selectOptions}
              value={(value as string) || ''}
              onChange={(newValue) => handleFilterChange(filter.id, newValue)}
              style={filterInputStyles}
            />
          </div>
        );

      case 'checkbox':
        return (
          <div key={filter.id} style={filterGroupStyles}>
            <Typography variant="bodySmall" weight="medium" style={filterLabelStyles}>
              {filter.label}
            </Typography>
            <div style={checkboxContainerStyles}>
              {filter.options?.map(option => (
                <label key={option.value} style={checkboxLabelStyles}>
                  <input
                    type="checkbox"
                    checked={(value as string[])?.includes(option.value) || false}
                    onChange={(e) => handleCheckboxChange(filter.id, option.value, e.target.checked)}
                    style={checkboxInputStyles}
                  />
                  <span style={checkboxTextStyles}>{option.label}</span>
                </label>
              ))}
            </div>
          </div>
        );

      case 'dateRange':
        return (
          <div key={filter.id} style={filterGroupStyles}>
            <Typography variant="bodySmall" weight="medium" style={filterLabelStyles}>
              {filter.label}
            </Typography>
            <div style={dateRangeContainerStyles}>
              <Input
                type="date"
                label={filter.startLabel || 'Start Date'}
                value={(value as DateRangeValue)?.start || ''}
                onChange={(e) => handleDateRangeChange(filter.id, 'start', e.target.value)}
                style={dateInputStyles}
                aria-label={filter.startLabel || 'Start Date'}
              />
              <Input
                type="date"
                label={filter.endLabel || 'End Date'}
                value={(value as DateRangeValue)?.end || ''}
                onChange={(e) => handleDateRangeChange(filter.id, 'end', e.target.value)}
                style={dateInputStyles}
                aria-label={filter.endLabel || 'End Date'}
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (filters.length === 0) {
    return (
      <div
        className={`search-filters-container ${className || ''}`}
        style={getContainerStyles(style)}
        data-testid={dataTestId}
      >
        <Typography variant="body" color="secondary">
          No filters configured
        </Typography>
      </div>
    );
  }

  return (
    <div
      className={`search-filters-container ${className || ''}`}
      style={getContainerStyles(style)}
      data-testid={dataTestId}
    >
      {/* Mobile Toggle Button */}
      {mobileCollapsed && (
        <Button
          variant="outlined"
          onClick={toggleMobileFilters}
          aria-label="Toggle filters"
          style={mobileToggleStyles}
        >
          <FunnelSimple size={16} />
          Filters
          <CaretDown 
            size={16} 
            style={{ 
              transform: isMobileOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s ease',
            }} 
          />
        </Button>
      )}

      {/* Filters Content */}
      {(!mobileCollapsed || isMobileOpen) && (
        <div className="search-filters-content" style={filtersContentStyles}>
          <div style={filtersGridStyles}>
            {filters.map(renderFilter)}
          </div>

          {/* Clear All Button */}
          <div style={actionsStyles}>
            <Button
              variant="outlined"
              size="small"
              onClick={handleClearAll}
              disabled={!hasActiveFilters}
              style={clearButtonStyles}
            >
              <X size={16} />
              Clear All
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

// Styles using design tokens
const getContainerStyles = (customStyle?: React.CSSProperties): React.CSSProperties => ({
  backgroundColor: colors.backgroundLight,
  border: `1px solid ${colors.border.light}`,
  borderRadius: radii.md,
  padding: spacing[6],
  boxShadow: shadows.sm,
  ...customStyle,
});

const mobileToggleStyles: React.CSSProperties = {
  width: '100%',
  marginBottom: spacing[4],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: spacing[2],
};

const filtersContentStyles: React.CSSProperties = {
  // Content styles handled by grid and individual filters
};

const filtersGridStyles: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: spacing[6],
  marginBottom: spacing[6],
};

const filterGroupStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: spacing[2],
};

const filterLabelStyles: React.CSSProperties = {
  fontFamily: typography.fontFamily.primary,
  fontSize: '14px',
  fontWeight: typography.fontWeight.medium,
  color: colors.text.primary,
  marginBottom: spacing[1],
};

const filterInputStyles: React.CSSProperties = {
  width: '100%',
};

const selectContainerStyles: React.CSSProperties = {
  position: 'relative',
  width: '100%',
};

const selectStyles: React.CSSProperties = {
  width: '100%',
  padding: `${spacing[3]} ${spacing[4]}`,
  paddingRight: spacing[8],
  border: `1px solid ${colors.border.medium}`,
  borderRadius: radii.sm,
  backgroundColor: colors.backgroundLight,
  fontFamily: typography.fontFamily.primary,
  fontSize: '14px',
  color: colors.text.primary,
  appearance: 'none',
  cursor: 'pointer',
  transition: 'border-color 0.2s ease',
};

const selectIconStyles: React.CSSProperties = {
  position: 'absolute',
  right: spacing[3],
  top: '50%',
  transform: 'translateY(-50%)',
  pointerEvents: 'none',
  color: colors.text.secondary,
};

const checkboxContainerStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: spacing[2],
};

const checkboxLabelStyles: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: spacing[2],
  cursor: 'pointer',
  fontSize: '14px',
  color: colors.text.primary,
};

const checkboxInputStyles: React.CSSProperties = {
  width: '16px',
  height: '16px',
  accentColor: colors.primary,
};

const checkboxTextStyles: React.CSSProperties = {
  fontFamily: typography.fontFamily.primary,
  fontSize: '14px',
};

const dateRangeContainerStyles: React.CSSProperties = {
  display: 'flex',
  gap: spacing[3],
};

const dateInputStyles: React.CSSProperties = {
  flex: 1,
};

const actionsStyles: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'flex-end',
  paddingTop: spacing[4],
  borderTop: `1px solid ${colors.border.light}`,
};

const clearButtonStyles: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: spacing[2],
};
