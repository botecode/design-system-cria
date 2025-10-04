# Dropdown Component

Dropdown/Select component with search functionality, multiple selection, keyboard navigation, and accessibility features.

## Import

```tsx
import { Dropdown } from '@cria/ui';
```

## Basic Usage

```tsx
const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

<Dropdown
  label="Choose an option"
  options={options}
  value={selectedValue}
  onChange={setSelectedValue}
  placeholder="Select an option"
/>
```

## Single Selection

```tsx
const [selectedValue, setSelectedValue] = useState('');

<Dropdown
  label="Country"
  options={countryOptions}
  value={selectedValue}
  onChange={setSelectedValue}
  placeholder="Select your country"
  required
/>
```

## Multiple Selection

```tsx
const [selectedValues, setSelectedValues] = useState([]);

<Dropdown
  label="Skills"
  options={skillOptions}
  value={selectedValues}
  onChange={setSelectedValues}
  multiple
  placeholder="Select your skills"
/>
```

## With Search

```tsx
<Dropdown
  label="Search Users"
  options={userOptions}
  value={selectedUser}
  onChange={setSelectedUser}
  searchable
  placeholder="Search and select a user"
/>
```

## Variants

### Default
```tsx
<Dropdown
  variant="default"
  label="Default Dropdown"
  options={options}
  value={value}
  onChange={setValue}
/>
```

### Filled
```tsx
<Dropdown
  variant="filled"
  label="Filled Dropdown"
  options={options}
  value={value}
  onChange={setValue}
/>
```

### Outlined
```tsx
<Dropdown
  variant="outlined"
  label="Outlined Dropdown"
  options={options}
  value={value}
  onChange={setValue}
/>
```

## Sizes

### Small
```tsx
<Dropdown
  size="sm"
  label="Small Dropdown"
  options={options}
  value={value}
  onChange={setValue}
/>
```

### Medium (Default)
```tsx
<Dropdown
  size="md"
  label="Medium Dropdown"
  options={options}
  value={value}
  onChange={setValue}
/>
```

### Large
```tsx
<Dropdown
  size="lg"
  label="Large Dropdown"
  options={options}
  value={value}
  onChange={setValue}
/>
```

## States

### Disabled
```tsx
<Dropdown
  label="Disabled Dropdown"
  options={options}
  disabled
  placeholder="This dropdown is disabled"
/>
```

### Loading
```tsx
<Dropdown
  label="Loading Dropdown"
  options={options}
  loading
  placeholder="Loading options..."
/>
```

### Error State
```tsx
<Dropdown
  label="Required Field"
  options={options}
  required
  errorText="Please select an option"
  placeholder="Select an option"
/>
```

## Advanced Options

### With Icons and Descriptions
```tsx
const optionsWithIcons = [
  { 
    value: 'email', 
    label: 'Email', 
    icon: <Envelope />,
    description: 'Send via email notification'
  },
  { 
    value: 'sms', 
    label: 'SMS', 
    icon: <Chat />,
    description: 'Send via text message'
  },
  { 
    value: 'push', 
    label: 'Push Notification', 
    icon: <Bell />,
    description: 'Send push notification to device'
  },
];

<Dropdown
  label="Notification Method"
  options={optionsWithIcons}
  value={selectedMethod}
  onChange={setSelectedMethod}
  placeholder="Choose notification method"
/>
```

### Disabled Options
```tsx
const optionsWithDisabled = [
  { value: 'option1', label: 'Available Option' },
  { value: 'option2', label: 'Disabled Option', disabled: true },
  { value: 'option3', label: 'Another Available Option' },
];

<Dropdown
  label="Options with Disabled Items"
  options={optionsWithDisabled}
  value={value}
  onChange={setValue}
/>
```

### Custom Option Renderer
```tsx
<Dropdown
  label="Custom Options"
  options={options}
  value={value}
  onChange={setValue}
  renderOption={(option) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <img src={option.avatar} alt={option.label} style={{ width: '24px', height: '24px', borderRadius: '50%' }} />
      <div>
        <div>{option.label}</div>
        <div style={{ fontSize: '12px', color: '#666' }}>{option.role}</div>
      </div>
    </div>
  )}
/>
```

## Form Integration

### Controlled Component
```tsx
const [formData, setFormData] = useState({
  country: '',
  skills: [],
  department: ''
});

<Dropdown
  label="Country"
  options={countryOptions}
  value={formData.country}
  onChange={(value) => setFormData(prev => ({ ...prev, country: value }))}
  required
/>

<Dropdown
  label="Skills"
  options={skillOptions}
  value={formData.skills}
  onChange={(value) => setFormData(prev => ({ ...prev, skills: value }))}
  multiple
/>

<Dropdown
  label="Department"
  options={departmentOptions}
  value={formData.department}
  onChange={(value) => setFormData(prev => ({ ...prev, department: value }))}
/>
```

### With Validation
```tsx
const [errors, setErrors] = useState({});

<Dropdown
  label="Required Field"
  options={options}
  value={value}
  onChange={setValue}
  required
  errorText={errors.field}
  helperText="This field is required"
/>
```

## Keyboard Navigation

The Dropdown component supports full keyboard navigation:

- **Tab**: Focus the dropdown trigger
- **Enter/Space**: Open/close the dropdown
- **Arrow Up/Down**: Navigate through options
- **Enter**: Select focused option
- **Escape**: Close dropdown
- **Home/End**: Jump to first/last option
- **Type**: Search for options (when searchable)

## Accessibility

The Dropdown component includes comprehensive accessibility features:

- **ARIA Roles**: Proper `combobox` and `listbox` roles
- **ARIA Labels**: Descriptive labels and descriptions
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Support**: Live regions for dynamic content
- **Focus Management**: Proper focus handling and indicators

### Accessibility Example
```tsx
<Dropdown
  label="Choose your preferred language"
  options={languageOptions}
  value={selectedLanguage}
  onChange={setSelectedLanguage}
  aria-describedby="language-help"
  helperText="Select the language for the interface"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `DropdownOption[]` | - | Array of dropdown options |
| `value` | `string \| string[]` | - | Selected value(s) |
| `defaultValue` | `string \| string[]` | - | Default selected value(s) |
| `placeholder` | `string` | - | Placeholder text |
| `label` | `string` | - | Dropdown label |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Dropdown size |
| `variant` | `'default' \| 'filled' \| 'outlined'` | `'default'` | Dropdown variant |
| `disabled` | `boolean` | `false` | Whether the dropdown is disabled |
| `required` | `boolean` | `false` | Whether the dropdown is required |
| `multiple` | `boolean` | `false` | Whether multiple selection is allowed |
| `searchable` | `boolean` | `false` | Whether options can be searched |
| `clearable` | `boolean` | `false` | Whether selected values can be cleared |
| `loading` | `boolean` | `false` | Whether the dropdown is in loading state |
| `onChange` | `(value: string \| string[]) => void` | - | Change handler |
| `onSearch` | `(searchTerm: string) => void` | - | Search handler |
| `renderOption` | `(option: DropdownOption) => React.ReactNode` | - | Custom option renderer |
| `helperText` | `string` | - | Helper text below dropdown |
| `errorText` | `string` | - | Error text below dropdown |

### DropdownOption Interface

```tsx
interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  description?: string;
}
```

## Styling

The Dropdown component uses design tokens for consistent styling:

- **Colors**: Semantic colors for different states
- **Spacing**: Consistent padding and margins
- **Typography**: Font family, size, and weight from tokens
- **Border Radius**: Consistent border radius
- **Shadows**: Subtle shadows for dropdown panel
- **Transitions**: Smooth state transitions

## Best Practices

1. **Use Clear Labels**: Provide descriptive labels for better UX
2. **Limit Options**: Keep the number of options reasonable (consider pagination for large lists)
3. **Use Search for Long Lists**: Enable search for dropdowns with many options
4. **Provide Helper Text**: Give users guidance on expected selections
5. **Handle Loading States**: Show loading indicators for async data
6. **Test Keyboard Navigation**: Ensure all functionality works via keyboard

## Examples

### User Selection with Search
```tsx
const [selectedUser, setSelectedUser] = useState('');

<Dropdown
  label="Assign to User"
  options={userOptions}
  value={selectedUser}
  onChange={setSelectedUser}
  searchable
  placeholder="Search and select a user"
  helperText="Start typing to search for users"
/>
```

### Multi-Select Tags
```tsx
const [selectedTags, setSelectedTags] = useState([]);

<Dropdown
  label="Tags"
  options={tagOptions}
  value={selectedTags}
  onChange={setSelectedTags}
  multiple
  clearable
  placeholder="Select tags"
  helperText="Select one or more tags"
/>
```

### Country Selection
```tsx
const [selectedCountry, setSelectedCountry] = useState('');

<Dropdown
  label="Country"
  options={countryOptions}
  value={selectedCountry}
  onChange={setSelectedCountry}
  searchable
  placeholder="Select your country"
  required
/>
```

### Dynamic Options with Loading
```tsx
const [options, setOptions] = useState([]);
const [loading, setLoading] = useState(false);

useEffect(() => {
  setLoading(true);
  fetchOptions().then(data => {
    setOptions(data);
    setLoading(false);
  });
}, []);

<Dropdown
  label="Dynamic Options"
  options={options}
  value={value}
  onChange={setValue}
  loading={loading}
  placeholder={loading ? "Loading options..." : "Select an option"}
/>
```




