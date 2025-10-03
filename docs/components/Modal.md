# Modal Component

Modal dialog component for overlays, confirmations, and focused user interactions.

## Import

```tsx
import { Modal } from '@cria/ui';
```

## Basic Usage

```tsx
<Modal
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Confirm Action"
>
  <p>Are you sure you want to proceed?</p>
  <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
    <Button variant="outline" onClick={() => setIsOpen(false)}>
      Cancel
    </Button>
    <Button variant="primary" onClick={handleConfirm}>
      Confirm
    </Button>
  </div>
</Modal>
```

## Sizes

### Small
```tsx
<Modal
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Small Modal"
  size="sm"
>
  <Typography>This is a small modal with limited content.</Typography>
</Modal>
```

### Medium (Default)
```tsx
<Modal
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Medium Modal"
  size="md"
>
  <Typography>This is a medium-sized modal with standard content.</Typography>
</Modal>
```

### Large
```tsx
<Modal
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Large Modal"
  size="lg"
>
  <Typography>This is a large modal with more content space.</Typography>
</Modal>
```

### Extra Large
```tsx
<Modal
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Extra Large Modal"
  size="xl"
>
  <Typography>This is an extra large modal for complex content.</Typography>
</Modal>
```

## Confirmation Dialog

```tsx
<Modal
  open={showConfirm}
  onClose={() => setShowConfirm(false)}
  title="Delete Item"
  size="sm"
>
  <Typography>
    Are you sure you want to delete this item? This action cannot be undone.
  </Typography>
  
  <div style={{ display: 'flex', gap: '12px', marginTop: '24px', justifyContent: 'flex-end' }}>
    <Button variant="outline" onClick={() => setShowConfirm(false)}>
      Cancel
    </Button>
    <Button variant="danger" onClick={handleDelete}>
      Delete
    </Button>
  </div>
</Modal>
```

## Form Modal

```tsx
<Modal
  open={showForm}
  onClose={() => setShowForm(false)}
  title="Create New Item"
  size="md"
>
  <form onSubmit={handleSubmit}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Input
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      
      <Input
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        multiline
        rows={3}
      />
      
      <Dropdown
        label="Category"
        options={categories}
        value={category}
        onChange={setCategory}
        required
      />
    </div>
    
    <div style={{ display: 'flex', gap: '12px', marginTop: '24px', justifyContent: 'flex-end' }}>
      <Button variant="outline" onClick={() => setShowForm(false)}>
        Cancel
      </Button>
      <Button type="submit" variant="primary">
        Create Item
      </Button>
    </div>
  </form>
</Modal>
```

## Custom Close Behavior

### Disable Overlay Click
```tsx
<Modal
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Important Modal"
  closeOnOverlayClick={false}
>
  <Typography>
    This modal cannot be closed by clicking the overlay. 
    You must use the close button or escape key.
  </Typography>
</Modal>
```

### Disable Escape Key
```tsx
<Modal
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Critical Action"
  closeOnEscape={false}
>
  <Typography>
    This modal cannot be closed with the escape key.
    You must complete the action or use the close button.
  </Typography>
</Modal>
```

## Without Title

```tsx
<Modal
  open={isOpen}
  onClose={() => setIsOpen(false)}
>
  <div style={{ textAlign: 'center', padding: '24px' }}>
    <Typography variant="h3" style={{ marginBottom: '16px' }}>
      Custom Content
    </Typography>
    <Typography>
      This modal doesn't have a title prop, so you can create custom content.
    </Typography>
  </div>
</Modal>
```

## Loading State

```tsx
<Modal
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Processing"
>
  <div style={{ textAlign: 'center', padding: '24px' }}>
    <div style={{ marginBottom: '16px' }}>
      <Spinner size="lg" />
    </div>
    <Typography>
      Please wait while we process your request...
    </Typography>
  </div>
</Modal>
```

## Accessibility

The Modal component includes comprehensive accessibility features:

- **Focus Management**: Traps focus within the modal
- **ARIA Attributes**: Proper `role="dialog"`, `aria-modal`, and `aria-labelledby`
- **Keyboard Navigation**: Escape key to close, Tab navigation
- **Screen Reader Support**: Announces modal opening and closing
- **Backdrop**: Prevents interaction with background content

### Accessibility Example
```tsx
<Modal
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Accessible Modal"
  aria-describedby="modal-description"
>
  <Typography id="modal-description">
    This modal is fully accessible with proper ARIA attributes
    and keyboard navigation support.
  </Typography>
</Modal>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | `false` | Whether the modal is open |
| `onClose` | `() => void` | - | Close handler function |
| `title` | `string` | - | Modal title |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Modal size |
| `closeOnOverlayClick` | `boolean` | `true` | Whether clicking overlay closes modal |
| `closeOnEscape` | `boolean` | `true` | Whether escape key closes modal |
| `children` | `React.ReactNode` | - | Modal content |

## Styling

The Modal component uses design tokens for consistent styling:

- **Colors**: Background overlay and modal background
- **Spacing**: Consistent padding and margins
- **Typography**: Font family, size, and weight from tokens
- **Border Radius**: Consistent border radius
- **Shadows**: Prominent shadow for modal elevation
- **Transitions**: Smooth open/close animations
- **Z-Index**: Proper layering for modal overlay

## Best Practices

1. **Use Appropriate Sizes**: Choose the right size for your content
2. **Provide Clear Actions**: Make sure users know how to close or proceed
3. **Handle Loading States**: Show loading indicators for async operations
4. **Test Keyboard Navigation**: Ensure all functionality works via keyboard
5. **Use Confirmation for Destructive Actions**: Always confirm destructive actions
6. **Keep Content Focused**: Don't overload modals with too much content

## Examples

### User Profile Modal
```tsx
<Modal
  open={showProfile}
  onClose={() => setShowProfile(false)}
  title="User Profile"
  size="lg"
>
  <div style={{ display: 'flex', gap: '24px' }}>
    <img 
      src={user.avatar} 
      alt={user.name}
      style={{ width: '120px', height: '120px', borderRadius: '50%' }}
    />
    <div style={{ flex: 1 }}>
      <Typography variant="h4" style={{ marginBottom: '8px' }}>
        {user.name}
      </Typography>
      <Typography variant="body" color="secondary" style={{ marginBottom: '16px' }}>
        {user.email}
      </Typography>
      <Typography variant="body">
        {user.bio}
      </Typography>
    </div>
  </div>
  
  <div style={{ display: 'flex', gap: '12px', marginTop: '24px', justifyContent: 'flex-end' }}>
    <Button variant="outline" onClick={() => setShowProfile(false)}>
      Close
    </Button>
    <Button variant="primary" onClick={handleEditProfile}>
      Edit Profile
    </Button>
  </div>
</Modal>
```

### Image Gallery Modal
```tsx
<Modal
  open={showGallery}
  onClose={() => setShowGallery(false)}
  size="xl"
  closeOnOverlayClick={false}
>
  <div style={{ position: 'relative' }}>
    <img 
      src={currentImage.src}
      alt={currentImage.alt}
      style={{ width: '100%', maxHeight: '80vh', objectFit: 'contain' }}
    />
    
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setShowGallery(false)}
      style={{ position: 'absolute', top: '16px', right: '16px' }}
      aria-label="Close gallery"
    >
      <X size={20} />
    </Button>
    
    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
      <Button 
        variant="outline" 
        onClick={handlePrevious}
        disabled={currentIndex === 0}
      >
        Previous
      </Button>
      <Typography variant="body" color="secondary">
        {currentIndex + 1} of {images.length}
      </Typography>
      <Button 
        variant="outline" 
        onClick={handleNext}
        disabled={currentIndex === images.length - 1}
      >
        Next
      </Button>
    </div>
  </div>
</Modal>
```

### Settings Modal
```tsx
<Modal
  open={showSettings}
  onClose={() => setShowSettings(false)}
  title="Settings"
  size="lg"
>
  <Tabs value={activeTab} onChange={setActiveTab}>
    <Tab value="general">General</Tab>
    <Tab value="notifications">Notifications</Tab>
    <Tab value="privacy">Privacy</Tab>
  </Tabs>
  
  <TabPanel value="general">
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
      <Switch label="Dark mode" checked={darkMode} onChange={setDarkMode} />
      <Switch label="Auto-save" checked={autoSave} onChange={setAutoSave} />
      <Dropdown label="Language" options={languages} value={language} onChange={setLanguage} />
    </div>
  </TabPanel>
  
  <TabPanel value="notifications">
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
      <Switch label="Email notifications" checked={emailNotifications} onChange={setEmailNotifications} />
      <Switch label="Push notifications" checked={pushNotifications} onChange={setPushNotifications} />
      <Switch label="SMS notifications" checked={smsNotifications} onChange={setSmsNotifications} />
    </div>
  </TabPanel>
  
  <TabPanel value="privacy">
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
      <Switch label="Allow data collection" checked={allowDataCollection} onChange={setAllowDataCollection} />
      <Switch label="Share usage statistics" checked={shareUsageStats} onChange={setShareUsageStats} />
    </div>
  </TabPanel>
  
  <div style={{ display: 'flex', gap: '12px', marginTop: '24px', justifyContent: 'flex-end' }}>
    <Button variant="outline" onClick={() => setShowSettings(false)}>
      Cancel
    </Button>
    <Button variant="primary" onClick={handleSaveSettings}>
      Save Changes
    </Button>
  </div>
</Modal>
```




