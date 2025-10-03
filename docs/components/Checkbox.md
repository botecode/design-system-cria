# Checkbox Component

Checkbox component for binary choices with support for indeterminate state and accessibility features.

## Import

```tsx
import { Checkbox } from '@cria/ui';
```

## Basic Usage

```tsx
<Checkbox
  label="I agree to the terms"
  checked={isChecked}
  onChange={setIsChecked}
/>
```

## States

### Checked
```tsx
<Checkbox
  label="Checked option"
  checked={true}
  onChange={setIsChecked}
/>
```

### Unchecked
```tsx
<Checkbox
  label="Unchecked option"
  checked={false}
  onChange={setIsChecked}
/>
```

### Indeterminate
```tsx
<Checkbox
  label="Select all"
  indeterminate={isIndeterminate}
  checked={isAllSelected}
  onChange={handleSelectAll}
/>
```

### Disabled
```tsx
<Checkbox
  label="Disabled option"
  disabled
  checked={false}
/>
```

## Form Integration

### Required Field
```tsx
<Checkbox
  label="I agree to the terms and conditions"
  checked={agreed}
  onChange={setAgreed}
  required
/>
```

### With Helper Text
```tsx
<Checkbox
  label="Subscribe to newsletter"
  checked={subscribed}
  onChange={setSubscribed}
  helperText="Receive updates about new features and products"
/>
```

### With Error State
```tsx
<Checkbox
  label="Accept terms"
  checked={accepted}
  onChange={setAccepted}
  required
  errorText="You must accept the terms to continue"
/>
```

## Controlled Component

```tsx
const [formData, setFormData] = useState({
  terms: false,
  newsletter: false,
  notifications: true
});

<Checkbox
  label="Accept terms and conditions"
  checked={formData.terms}
  onChange={(checked) => setFormData(prev => ({ ...prev, terms: checked }))}
/>

<Checkbox
  label="Subscribe to newsletter"
  checked={formData.newsletter}
  onChange={(checked) => setFormData(prev => ({ ...prev, newsletter: checked }))}
/>

<Checkbox
  label="Enable notifications"
  checked={formData.notifications}
  onChange={(checked) => setFormData(prev => ({ ...prev, notifications: checked }))}
/>
```

## Select All Pattern

```tsx
const [items, setItems] = useState([
  { id: 1, label: 'Item 1', checked: false },
  { id: 2, label: 'Item 2', checked: false },
  { id: 3, label: 'Item 3', checked: false },
]);

const allChecked = items.every(item => item.checked);
const someChecked = items.some(item => item.checked);
const isIndeterminate = someChecked && !allChecked;

const handleSelectAll = (checked) => {
  setItems(items.map(item => ({ ...item, checked })));
};

const handleItemChange = (id, checked) => {
  setItems(items.map(item => 
    item.id === id ? { ...item, checked } : item
  ));
};

<div>
  <Checkbox
    label="Select all"
    checked={allChecked}
    indeterminate={isIndeterminate}
    onChange={handleSelectAll}
  />
  
  {items.map(item => (
    <Checkbox
      key={item.id}
      label={item.label}
      checked={item.checked}
      onChange={(checked) => handleItemChange(item.id, checked)}
    />
  ))}
</div>
```

## Accessibility

The Checkbox component includes comprehensive accessibility features:

- **Labels**: Proper label association with `htmlFor` and `id`
- **ARIA Attributes**: `aria-checked`, `aria-describedby`, and `aria-required`
- **Keyboard Navigation**: Full keyboard support (Space to toggle)
- **Screen Reader Support**: Clear announcements of state changes
- **Focus Management**: Visible focus indicators

### Accessibility Example
```tsx
<Checkbox
  label="I agree to the privacy policy"
  checked={agreed}
  onChange={setAgreed}
  required
  aria-describedby="privacy-help"
  helperText="Read our privacy policy to understand how we use your data"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Checkbox label |
| `checked` | `boolean` | `false` | Whether the checkbox is checked |
| `indeterminate` | `boolean` | `false` | Whether the checkbox is in indeterminate state |
| `disabled` | `boolean` | `false` | Whether the checkbox is disabled |
| `required` | `boolean` | `false` | Whether the checkbox is required |
| `onChange` | `(checked: boolean) => void` | - | Change handler |
| `helperText` | `string` | - | Helper text below checkbox |
| `errorText` | `string` | - | Error text below checkbox |
| `name` | `string` | - | Form field name |
| `value` | `string` | - | Form field value |

## Styling

The Checkbox component uses design tokens for consistent styling:

- **Colors**: Semantic colors for different states
- **Spacing**: Consistent padding and margins
- **Typography**: Font family, size, and weight from tokens
- **Border Radius**: Consistent border radius
- **Focus States**: Visible focus indicators
- **Transitions**: Smooth state transitions

## Best Practices

1. **Use Clear Labels**: Make checkbox labels descriptive and actionable
2. **Group Related Options**: Use consistent spacing and alignment for related checkboxes
3. **Use Indeterminate for Select All**: Implement indeterminate state for "select all" functionality
4. **Provide Helper Text**: Give users context when needed
5. **Test Keyboard Navigation**: Ensure all checkboxes are accessible via keyboard
6. **Use Required Sparingly**: Only mark truly required checkboxes

## Examples

### Terms and Conditions
```tsx
<form onSubmit={handleSubmit}>
  <Checkbox
    label="I agree to the terms and conditions"
    checked={termsAccepted}
    onChange={setTermsAccepted}
    required
    helperText="You must accept the terms to continue"
  />
  
  <Checkbox
    label="I agree to the privacy policy"
    checked={privacyAccepted}
    onChange={setPrivacyAccepted}
    required
  />
  
  <Checkbox
    label="Subscribe to newsletter (optional)"
    checked={newsletterSubscribed}
    onChange={setNewsletterSubscribed}
    helperText="Receive updates about new features"
  />
  
  <Button 
    type="submit" 
    disabled={!termsAccepted || !privacyAccepted}
    variant="primary"
  >
    Continue
  </Button>
</form>
```

### Settings Panel
```tsx
<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
  <Typography variant="h4">Notification Settings</Typography>
  
  <Checkbox
    label="Email notifications"
    checked={emailNotifications}
    onChange={setEmailNotifications}
    helperText="Receive notifications via email"
  />
  
  <Checkbox
    label="Push notifications"
    checked={pushNotifications}
    onChange={setPushNotifications}
    helperText="Receive push notifications on your device"
  />
  
  <Checkbox
    label="SMS notifications"
    checked={smsNotifications}
    onChange={setSmsNotifications}
    helperText="Receive notifications via text message"
  />
</div>
```

### Data Selection
```tsx
const [selectedItems, setSelectedItems] = useState([]);
const [selectAll, setSelectAll] = useState(false);

const items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

const handleSelectAll = (checked) => {
  setSelectAll(checked);
  setSelectedItems(checked ? items.map(item => item.id) : []);
};

const handleItemSelect = (itemId, checked) => {
  if (checked) {
    setSelectedItems(prev => [...prev, itemId]);
  } else {
    setSelectedItems(prev => prev.filter(id => id !== itemId));
  }
  
  // Update select all state
  const newSelection = checked 
    ? [...selectedItems, itemId]
    : selectedItems.filter(id => id !== itemId);
  setSelectAll(newSelection.length === items.length);
};

<div>
  <Checkbox
    label="Select all items"
    checked={selectAll}
    indeterminate={selectedItems.length > 0 && selectedItems.length < items.length}
    onChange={handleSelectAll}
  />
  
  {items.map(item => (
    <Checkbox
      key={item.id}
      label={item.name}
      checked={selectedItems.includes(item.id)}
      onChange={(checked) => handleItemSelect(item.id, checked)}
    />
  ))}
  
  <Typography variant="body" color="secondary">
    {selectedItems.length} of {items.length} items selected
  </Typography>
</div>
```

### Filter Options
```tsx
const [filters, setFilters] = useState({
  category: [],
  price: [],
  availability: []
});

const categories = ['Electronics', 'Clothing', 'Books', 'Home'];
const priceRanges = ['Under $25', '$25-$50', '$50-$100', 'Over $100'];

<div>
  <Typography variant="h5">Category</Typography>
  {categories.map(category => (
    <Checkbox
      key={category}
      label={category}
      checked={filters.category.includes(category)}
      onChange={(checked) => {
        setFilters(prev => ({
          ...prev,
          category: checked 
            ? [...prev.category, category]
            : prev.category.filter(c => c !== category)
        }));
      }}
    />
  ))}
  
  <Typography variant="h5">Price Range</Typography>
  {priceRanges.map(range => (
    <Checkbox
      key={range}
      label={range}
      checked={filters.price.includes(range)}
      onChange={(checked) => {
        setFilters(prev => ({
          ...prev,
          price: checked 
            ? [...prev.price, range]
            : prev.price.filter(p => p !== range)
        }));
      }}
    />
  ))}
</div>
```




