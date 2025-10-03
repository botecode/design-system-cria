# Switch Component

Toggle switch component for binary choices with smooth animations and accessibility features.

## Import

```tsx
import { Switch } from '@cria/ui';
```

## Basic Usage

```tsx
<Switch
  label="Enable notifications"
  checked={isEnabled}
  onChange={setIsEnabled}
/>
```

## With Description

```tsx
<Switch
  label="Dark mode"
  description="Switch to dark theme"
  checked={isDarkMode}
  onChange={setIsDarkMode}
/>
```

## Sizes

### Small
```tsx
<Switch
  size="sm"
  label="Small switch"
  checked={isEnabled}
  onChange={setIsEnabled}
/>
```

### Medium (Default)
```tsx
<Switch
  size="md"
  label="Medium switch"
  checked={isEnabled}
  onChange={setIsEnabled}
/>
```

### Large
```tsx
<Switch
  size="lg"
  label="Large switch"
  checked={isEnabled}
  onChange={setIsEnabled}
/>
```

## States

### Disabled
```tsx
<Switch
  label="Disabled switch"
  disabled
  checked={false}
/>
```

### Disabled and Checked
```tsx
<Switch
  label="Disabled checked switch"
  disabled
  checked={true}
/>
```

## Form Integration

### Required Field
```tsx
<Switch
  label="I agree to the terms"
  checked={agreed}
  onChange={setAgreed}
  required
/>
```

### With Helper Text
```tsx
<Switch
  label="Enable analytics"
  description="Help us improve by sharing anonymous usage data"
  checked={analyticsEnabled}
  onChange={setAnalyticsEnabled}
  helperText="This helps us understand how the app is used"
/>
```

### With Error State
```tsx
<Switch
  label="Accept terms"
  checked={accepted}
  onChange={setAccepted}
  required
  errorText="You must accept the terms to continue"
/>
```

## Controlled Component

```tsx
const [settings, setSettings] = useState({
  notifications: true,
  darkMode: false,
  analytics: false
});

<Switch
  label="Push notifications"
  checked={settings.notifications}
  onChange={(checked) => setSettings(prev => ({ ...prev, notifications: checked }))}
/>

<Switch
  label="Dark mode"
  checked={settings.darkMode}
  onChange={(checked) => setSettings(prev => ({ ...prev, darkMode: checked }))}
/>

<Switch
  label="Analytics"
  checked={settings.analytics}
  onChange={(checked) => setSettings(prev => ({ ...prev, analytics: checked }))}
/>
```

## Settings Panel

```tsx
<div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
  <div>
    <Typography variant="h4" style={{ marginBottom: '16px' }}>Preferences</Typography>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Switch
        label="Dark mode"
        description="Use dark theme for the interface"
        checked={darkMode}
        onChange={setDarkMode}
      />
      
      <Switch
        label="Auto-save"
        description="Automatically save changes as you work"
        checked={autoSave}
        onChange={setAutoSave}
      />
      
      <Switch
        label="Compact mode"
        description="Use compact spacing and smaller text"
        checked={compactMode}
        onChange={setCompactMode}
      />
    </div>
  </div>
  
  <div>
    <Typography variant="h4" style={{ marginBottom: '16px' }}>Notifications</Typography>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Switch
        label="Email notifications"
        description="Receive notifications via email"
        checked={emailNotifications}
        onChange={setEmailNotifications}
      />
      
      <Switch
        label="Push notifications"
        description="Receive push notifications on your device"
        checked={pushNotifications}
        onChange={setPushNotifications}
      />
      
      <Switch
        label="SMS notifications"
        description="Receive notifications via text message"
        checked={smsNotifications}
        onChange={setSmsNotifications}
      />
    </div>
  </div>
</div>
```

## Accessibility

The Switch component includes comprehensive accessibility features:

- **Labels**: Proper label association with `htmlFor` and `id`
- **ARIA Attributes**: `aria-checked`, `aria-describedby`, and `aria-required`
- **Keyboard Navigation**: Full keyboard support (Space to toggle)
- **Screen Reader Support**: Clear announcements of state changes
- **Focus Management**: Visible focus indicators

### Accessibility Example
```tsx
<Switch
  label="Enable accessibility features"
  description="Turn on enhanced accessibility features"
  checked={accessibilityEnabled}
  onChange={setAccessibilityEnabled}
  aria-describedby="accessibility-help"
  helperText="This enables additional accessibility features for screen readers"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Switch label |
| `description` | `string` | - | Optional description text |
| `checked` | `boolean` | `false` | Whether the switch is checked |
| `disabled` | `boolean` | `false` | Whether the switch is disabled |
| `required` | `boolean` | `false` | Whether the switch is required |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Switch size |
| `onChange` | `(checked: boolean) => void` | - | Change handler |
| `helperText` | `string` | - | Helper text below switch |
| `errorText` | `string` | - | Error text below switch |
| `name` | `string` | - | Form field name |
| `value` | `string` | - | Form field value |

## Styling

The Switch component uses design tokens for consistent styling:

- **Colors**: Semantic colors for different states
- **Spacing**: Consistent padding and margins
- **Typography**: Font family, size, and weight from tokens
- **Border Radius**: Consistent border radius
- **Focus States**: Visible focus indicators
- **Transitions**: Smooth toggle animations

## Best Practices

1. **Use Clear Labels**: Make switch labels descriptive and actionable
2. **Provide Context**: Use descriptions to explain what the switch does
3. **Group Related Switches**: Use consistent spacing and alignment for related switches
4. **Handle Loading States**: Show loading indicators for async operations
5. **Test Keyboard Navigation**: Ensure all switches are accessible via keyboard
6. **Use Required Sparingly**: Only mark truly required switches

## Examples

### Feature Toggles
```tsx
<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
  <Typography variant="h5">Feature Toggles</Typography>
  
  <Switch
    label="Beta features"
    description="Enable experimental features"
    checked={betaFeatures}
    onChange={setBetaFeatures}
  />
  
  <Switch
    label="Advanced mode"
    description="Show advanced options and settings"
    checked={advancedMode}
    onChange={setAdvancedMode}
  />
  
  <Switch
    label="Developer tools"
    description="Enable developer debugging tools"
    checked={developerTools}
    onChange={setDeveloperTools}
  />
</div>
```

### Privacy Settings
```tsx
<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
  <Typography variant="h5">Privacy Settings</Typography>
  
  <Switch
    label="Data collection"
    description="Allow collection of anonymous usage data"
    checked={dataCollection}
    onChange={setDataCollection}
    helperText="This helps us improve the product"
  />
  
  <Switch
    label="Personalized ads"
    description="Show personalized advertisements"
    checked={personalizedAds}
    onChange={setPersonalizedAds}
  />
  
  <Switch
    label="Location tracking"
    description="Allow location-based features"
    checked={locationTracking}
    onChange={setLocationTracking}
  />
</div>
```

### Form with Validation
```tsx
<form onSubmit={handleSubmit}>
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <Switch
      label="I agree to the terms and conditions"
      checked={termsAccepted}
      onChange={setTermsAccepted}
      required
      errorText={errors.terms}
    />
    
    <Switch
      label="I agree to the privacy policy"
      checked={privacyAccepted}
      onChange={setPrivacyAccepted}
      required
      errorText={errors.privacy}
    />
    
    <Switch
      label="Subscribe to newsletter (optional)"
      checked={newsletterSubscribed}
      onChange={setNewsletterSubscribed}
      description="Receive updates about new features"
    />
  </div>
  
  <Button 
    type="submit" 
    disabled={!termsAccepted || !privacyAccepted}
    variant="primary"
    style={{ marginTop: '24px' }}
  >
    Continue
  </Button>
</form>
```

### Toggle Group
```tsx
const [activeFilters, setActiveFilters] = useState({
  category: true,
  price: false,
  availability: true,
  rating: false
});

const handleFilterToggle = (filter, checked) => {
  setActiveFilters(prev => ({ ...prev, [filter]: checked }));
};

<div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
  <Typography variant="h6">Active Filters</Typography>
  
  <Switch
    label="Category"
    checked={activeFilters.category}
    onChange={(checked) => handleFilterToggle('category', checked)}
  />
  
  <Switch
    label="Price Range"
    checked={activeFilters.price}
    onChange={(checked) => handleFilterToggle('price', checked)}
  />
  
  <Switch
    label="Availability"
    checked={activeFilters.availability}
    onChange={(checked) => handleFilterToggle('availability', checked)}
  />
  
  <Switch
    label="Rating"
    checked={activeFilters.rating}
    onChange={(checked) => handleFilterToggle('rating', checked)}
  />
</div>
```




