# Input Component

Text input component with various states, validation support, and accessibility features.

## Import

```tsx
import { Input } from '@cria/ui';
```

## Basic Usage

```tsx
<Input
  label="Email"
  placeholder="Enter your email"
  type="email"
  required
/>
```

## Variants

### Default
Standard input with subtle border.

```tsx
<Input label="Name" placeholder="Enter your name" />
```

### Filled
Input with filled background.

```tsx
<Input variant="filled" label="Email" placeholder="Enter your email" />
```

### Outlined
Input with prominent border.

```tsx
<Input variant="outlined" label="Phone" placeholder="Enter your phone" />
```

### Underlined
Input with bottom border only.

```tsx
<Input variant="underlined" label="Address" placeholder="Enter your address" />
```

## Sizes

### Small
```tsx
<Input size="sm" label="Small Input" placeholder="Small size" />
```

### Medium (Default)
```tsx
<Input size="md" label="Medium Input" placeholder="Medium size" />
```

### Large
```tsx
<Input size="lg" label="Large Input" placeholder="Large size" />
```

## States

### Success State
```tsx
<Input
  label="Email"
  value="user@example.com"
  state="success"
  helperText="Email is valid"
/>
```

### Warning State
```tsx
<Input
  label="Password"
  type="password"
  state="warning"
  helperText="Password should be stronger"
/>
```

### Error State
```tsx
<Input
  label="Email"
  value="invalid-email"
  state="error"
  errorText="Please enter a valid email address"
/>
```

## Input Types

### Text
```tsx
<Input label="Name" type="text" placeholder="Enter your name" />
```

### Email
```tsx
<Input label="Email" type="email" placeholder="Enter your email" />
```

### Password with Toggle
```tsx
<Input
  label="Password"
  type="password"
  showPasswordToggle
  placeholder="Enter your password"
/>
```

### Number
```tsx
<Input label="Age" type="number" placeholder="Enter your age" />
```

### Search
```tsx
<Input label="Search" type="search" placeholder="Search..." />
```

## Form Integration

### Required Field
```tsx
<Input
  label="Email"
  type="email"
  required
  placeholder="Enter your email"
/>
```

### Disabled State
```tsx
<Input
  label="Username"
  value="john_doe"
  disabled
  helperText="Username cannot be changed"
/>
```

### Read-Only State
```tsx
<Input
  label="User ID"
  value="12345"
  readOnly
  helperText="This is your unique identifier"
/>
```

## With Helper Text

```tsx
<Input
  label="Password"
  type="password"
  placeholder="Enter your password"
  helperText="Password must be at least 8 characters long"
/>
```

## With Error Text

```tsx
<Input
  label="Email"
  type="email"
  value="invalid-email"
  errorText="Please enter a valid email address"
/>
```

## Controlled Input

```tsx
const [value, setValue] = useState('');

<Input
  label="Controlled Input"
  value={value}
  onChange={(e) => setValue(e.target.value)}
  placeholder="Type something..."
/>
```

## Accessibility

The Input component includes comprehensive accessibility features:

- **Labels**: Proper label association with `htmlFor` and `id`
- **ARIA Attributes**: `aria-describedby` for helper/error text
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Support**: Descriptive text and state announcements
- **Focus Management**: Visible focus indicators

### Accessibility Example
```tsx
<Input
  label="Email Address"
  type="email"
  required
  aria-describedby="email-help"
  helperText="We'll never share your email"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Input label |
| `placeholder` | `string` | - | Placeholder text |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Input size |
| `variant` | `'default' \| 'filled' \| 'outlined' \| 'underlined'` | `'default'` | Input variant |
| `state` | `'default' \| 'success' \| 'warning' \| 'error'` | `'default'` | Input state |
| `disabled` | `boolean` | `false` | Whether the input is disabled |
| `required` | `boolean` | `false` | Whether the input is required |
| `readOnly` | `boolean` | `false` | Whether the input is read-only |
| `showPasswordToggle` | `boolean` | `false` | Show password visibility toggle |
| `helperText` | `string` | - | Helper text below input |
| `errorText` | `string` | - | Error text below input |
| `value` | `string` | - | Input value (controlled) |
| `defaultValue` | `string` | - | Default input value (uncontrolled) |
| `onChange` | `(event: ChangeEvent<HTMLInputElement>) => void` | - | Change handler |
| `onFocus` | `(event: FocusEvent<HTMLInputElement>) => void` | - | Focus handler |
| `onBlur` | `(event: FocusEvent<HTMLInputElement>) => void` | - | Blur handler |

## Styling

The Input component uses design tokens for consistent styling:

- **Colors**: Semantic colors for different states
- **Spacing**: Consistent padding and margins
- **Typography**: Font family, size, and weight from tokens
- **Border Radius**: Consistent border radius
- **Focus States**: Visible focus indicators
- **Transitions**: Smooth state transitions

## Best Practices

1. **Always Use Labels**: Provide clear, descriptive labels
2. **Use Appropriate Types**: Choose the correct input type for the data
3. **Provide Helper Text**: Give users guidance on expected input
4. **Show Validation States**: Clearly indicate success, warning, and error states
5. **Use Required Sparingly**: Only mark truly required fields
6. **Test Keyboard Navigation**: Ensure all inputs are accessible via keyboard

## Examples

### Login Form
```tsx
<form onSubmit={handleSubmit}>
  <Input
    label="Email"
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
    placeholder="Enter your email"
  />
  
  <Input
    label="Password"
    type="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    showPasswordToggle
    required
    placeholder="Enter your password"
  />
  
  <Button type="submit" variant="primary" fullWidth>
    Sign In
  </Button>
</form>
```

### Registration Form with Validation
```tsx
<form onSubmit={handleSubmit}>
  <Input
    label="Full Name"
    value={name}
    onChange={(e) => setName(e.target.value)}
    state={nameError ? 'error' : nameValid ? 'success' : 'default'}
    errorText={nameError}
    helperText="Enter your full name"
    required
  />
  
  <Input
    label="Email"
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    state={emailError ? 'error' : emailValid ? 'success' : 'default'}
    errorText={emailError}
    helperText="We'll use this to contact you"
    required
  />
  
  <Input
    label="Password"
    type="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    showPasswordToggle
    state={passwordError ? 'error' : passwordValid ? 'success' : 'default'}
    errorText={passwordError}
    helperText="Must be at least 8 characters"
    required
  />
</form>
```

### Search Input
```tsx
<Input
  label="Search"
  type="search"
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  placeholder="Search products..."
  leftIcon={<Search />}
/>
```

### Disabled Field
```tsx
<Input
  label="Account ID"
  value="ACC-12345"
  disabled
  helperText="This field cannot be modified"
/>
```




