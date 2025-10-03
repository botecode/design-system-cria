# Radio Group Component

A flexible and accessible radio group component for selecting a single option from a list of choices.

## Features

- **Accessible**: Full ARIA support with keyboard navigation
- **Flexible**: Support for custom options with descriptions
- **Stylable**: Multiple variants and sizes
- **Controlled/Uncontrolled**: Works with or without external state management
- **Form Integration**: Proper form handling with name attributes
- **Keyboard Navigation**: Arrow keys, Home, End, Space, and Enter support

## Basic Usage

```tsx
import { RadioGroup } from '@cria/ui';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

function MyComponent() {
  const [value, setValue] = useState('');

  return (
    <RadioGroup
      options={options}
      value={value}
      onChange={setValue}
      label="Choose an option"
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `RadioOption[]` | - | Array of radio options |
| `value` | `string` | - | Currently selected value |
| `onChange` | `(value: string) => void` | - | Callback when selection changes |
| `label` | `string` | - | Label for the radio group |
| `description` | `string` | - | Description text |
| `error` | `string` | - | Error message |
| `disabled` | `boolean` | `false` | Disable the entire group |
| `required` | `boolean` | `false` | Mark as required |
| `className` | `string` | - | Custom CSS class |
| `name` | `string` | - | Form name attribute |
| `orientation` | `'horizontal' \| 'vertical'` | `'vertical'` | Layout orientation |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Size variant |
| `variant` | `'default' \| 'card'` | `'default'` | Visual variant |

## RadioOption Interface

```tsx
interface RadioOption {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
}
```

## Examples

### With Descriptions

```tsx
const planOptions = [
  { 
    value: 'basic', 
    label: 'Basic Plan', 
    description: 'Perfect for individuals' 
  },
  { 
    value: 'pro', 
    label: 'Pro Plan', 
    description: 'Great for small teams' 
  },
  { 
    value: 'enterprise', 
    label: 'Enterprise Plan', 
    description: 'For large organizations' 
  },
];

<RadioGroup
  options={planOptions}
  value={selectedPlan}
  onChange={setSelectedPlan}
  label="Choose a plan"
  description="Select the plan that best fits your needs"
/>
```

### Horizontal Layout

```tsx
<RadioGroup
  options={options}
  value={value}
  onChange={setValue}
  orientation="horizontal"
  label="Choose an option"
/>
```

### Error State

```tsx
<RadioGroup
  options={options}
  value={value}
  onChange={setValue}
  label="Required selection"
  error="Please select an option"
  required
/>
```

### Disabled Options

```tsx
const optionsWithDisabled = [
  { value: 'available1', label: 'Available Option 1' },
  { value: 'disabled1', label: 'Disabled Option 1', disabled: true },
  { value: 'available2', label: 'Available Option 2' },
];

<RadioGroup
  options={optionsWithDisabled}
  value={value}
  onChange={setValue}
  label="Available options"
/>
```

### Card Variant

```tsx
<RadioGroup
  options={planOptions}
  value={selectedPlan}
  onChange={setSelectedPlan}
  label="Choose a plan"
  variant="card"
/>
```

### Different Sizes

```tsx
// Small
<RadioGroup options={options} size="small" />

// Medium (default)
<RadioGroup options={options} size="medium" />

// Large
<RadioGroup options={options} size="large" />
```

## Accessibility

The RadioGroup component follows WAI-ARIA guidelines:

- Uses `radiogroup` role for the container
- Each option has proper `radio` role
- Supports keyboard navigation with arrow keys
- Provides proper focus management
- Includes ARIA attributes for labels, descriptions, and error states
- Supports screen readers with proper labeling

### Keyboard Navigation

- **Arrow Down/Up**: Navigate between options
- **Home**: Jump to first option
- **End**: Jump to last option
- **Space/Enter**: Select focused option
- **Tab**: Move focus in/out of the group

## Styling

The component uses CSS classes that follow the BEM methodology:

- `.cria-radio-group` - Main container
- `.cria-radio-group__label` - Label element
- `.cria-radio-group__description` - Description text
- `.cria-radio-group__container` - Radio group container
- `.cria-radio-group__option` - Individual option wrapper
- `.cria-radio-group__input` - Radio input element
- `.cria-radio-group__option-label` - Option label
- `.cria-radio-group__option-indicator` - Custom radio indicator
- `.cria-radio-group__option-dot` - Radio dot
- `.cria-radio-group__option-content` - Option content wrapper
- `.cria-radio-group__option-text` - Option text
- `.cria-radio-group__option-description` - Option description
- `.cria-radio-group__error` - Error message

### Modifier Classes

- `.cria-radio-group__container--horizontal` - Horizontal layout
- `.cria-radio-group__container--vertical` - Vertical layout
- `.cria-radio-group__container--disabled` - Disabled state
- `.cria-radio-group__container--error` - Error state
- `.cria-radio-group--card` - Card variant
- `.cria-radio-group__option--small` - Small size
- `.cria-radio-group__option--medium` - Medium size
- `.cria-radio-group__option--large` - Large size
- `.cria-radio-group__option--disabled` - Disabled option
- `.cria-radio-group__option--focused` - Focused option
- `.cria-radio-group__option--checked` - Checked option

## Form Integration

The component integrates seamlessly with HTML forms:

```tsx
<form onSubmit={handleSubmit}>
  <RadioGroup
    options={options}
    name="preference"
    value={value}
    onChange={setValue}
    label="Choose your preference"
    required
  />
  <button type="submit">Submit</button>
</form>
```

## Best Practices

1. **Always provide a label** for accessibility
2. **Use descriptive option labels** that clearly indicate the choice
3. **Provide descriptions** for complex options when helpful
4. **Handle disabled states** gracefully
5. **Use appropriate sizes** for your design context
6. **Consider horizontal layout** for short option lists
7. **Test keyboard navigation** to ensure accessibility
