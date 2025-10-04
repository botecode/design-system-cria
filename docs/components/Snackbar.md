# Snackbar Component

Notification component for providing user feedback with various variants and auto-dismiss functionality.

## Import

```tsx
import { Snackbar } from '@cria/ui';
```

## Basic Usage

```tsx
<Snackbar
  open={isOpen}
  message="Action completed successfully"
  onClose={() => setIsOpen(false)}
/>
```

## Variants

### Default
```tsx
<Snackbar
  open={isOpen}
  message="Default notification message"
  onClose={() => setIsOpen(false)}
/>
```

### Success
```tsx
<Snackbar
  open={isOpen}
  message="Success! Your changes have been saved"
  variant="success"
  onClose={() => setIsOpen(false)}
/>
```

### Warning
```tsx
<Snackbar
  open={isOpen}
  message="Warning: Please check your input"
  variant="warning"
  onClose={() => setIsOpen(false)}
/>
```

### Error
```tsx
<Snackbar
  open={isOpen}
  message="Error: Something went wrong"
  variant="error"
  onClose={() => setIsOpen(false)}
/>
```

### Info
```tsx
<Snackbar
  open={isOpen}
  message="Info: New features are available"
  variant="info"
  onClose={() => setIsOpen(false)}
/>
```

## With Actions

### Simple Action
```tsx
<Snackbar
  open={isOpen}
  message="File uploaded successfully"
  variant="success"
  action={
    <Button size="sm" variant="ghost" onClick={handleViewFile}>
      View
    </Button>
  }
  onClose={() => setIsOpen(false)}
/>
```

### Multiple Actions
```tsx
<Snackbar
  open={isOpen}
  message="Changes not saved"
  variant="warning"
  action={
    <div style={{ display: 'flex', gap: '8px' }}>
      <Button size="sm" variant="ghost" onClick={handleSave}>
        Save
      </Button>
      <Button size="sm" variant="ghost" onClick={handleDiscard}>
        Discard
      </Button>
    </div>
  }
  onClose={() => setIsOpen(false)}
/>
```

## Auto-Dismiss

### Custom Duration
```tsx
<Snackbar
  open={isOpen}
  message="This will auto-dismiss in 5 seconds"
  duration={5000}
  onClose={() => setIsOpen(false)}
/>
```

### No Auto-Dismiss
```tsx
<Snackbar
  open={isOpen}
  message="This requires manual dismissal"
  duration={0}
  onClose={() => setIsOpen(false)}
/>
```

## Positioning

### Bottom Center (Default)
```tsx
<Snackbar
  open={isOpen}
  message="Bottom center notification"
  onClose={() => setIsOpen(false)}
/>
```

### Top Center
```tsx
<Snackbar
  open={isOpen}
  message="Top center notification"
  position="top-center"
  onClose={() => setIsOpen(false)}
/>
```

### Bottom Left
```tsx
<Snackbar
  open={isOpen}
  message="Bottom left notification"
  position="bottom-left"
  onClose={() => setIsOpen(false)}
/>
```

### Top Right
```tsx
<Snackbar
  open={isOpen}
  message="Top right notification"
  position="top-right"
  onClose={() => setIsOpen(false)}
/>
```

## Multiple Snackbars

```tsx
const [snackbars, setSnackbars] = useState([]);

const addSnackbar = (message, variant = 'default') => {
  const id = Date.now();
  setSnackbars(prev => [...prev, { id, message, variant }]);
  
  // Auto-remove after 4 seconds
  setTimeout(() => {
    setSnackbars(prev => prev.filter(snackbar => snackbar.id !== id));
  }, 4000);
};

const removeSnackbar = (id) => {
  setSnackbars(prev => prev.filter(snackbar => snackbar.id !== id));
};

// Usage
<Button onClick={() => addSnackbar('Success message', 'success')}>
  Show Success
</Button>
<Button onClick={() => addSnackbar('Error message', 'error')}>
  Show Error
</Button>

{snackbars.map(snackbar => (
  <Snackbar
    key={snackbar.id}
    open={true}
    message={snackbar.message}
    variant={snackbar.variant}
    onClose={() => removeSnackbar(snackbar.id)}
  />
))}
```

## Form Feedback

### Success Feedback
```tsx
const [showSuccess, setShowSuccess] = useState(false);

const handleSubmit = async (data) => {
  try {
    await submitForm(data);
    setShowSuccess(true);
  } catch (error) {
    // Handle error
  }
};

<Snackbar
  open={showSuccess}
  message="Form submitted successfully!"
  variant="success"
  onClose={() => setShowSuccess(false)}
/>
```

### Error Feedback
```tsx
const [showError, setShowError] = useState(false);
const [errorMessage, setErrorMessage] = useState('');

const handleSubmit = async (data) => {
  try {
    await submitForm(data);
  } catch (error) {
    setErrorMessage(error.message);
    setShowError(true);
  }
};

<Snackbar
  open={showError}
  message={errorMessage}
  variant="error"
  action={
    <Button size="sm" variant="ghost" onClick={handleRetry}>
      Retry
    </Button>
  }
  onClose={() => setShowError(false)}
/>
```

## File Operations

### Upload Progress
```tsx
const [uploadSnackbar, setUploadSnackbar] = useState({
  open: false,
  message: '',
  variant: 'default'
});

const handleFileUpload = async (file) => {
  setUploadSnackbar({
    open: true,
    message: 'Uploading file...',
    variant: 'info'
  });
  
  try {
    await uploadFile(file);
    setUploadSnackbar({
      open: true,
      message: 'File uploaded successfully!',
      variant: 'success'
    });
  } catch (error) {
    setUploadSnackbar({
      open: true,
      message: 'Upload failed. Please try again.',
      variant: 'error'
    });
  }
};

<Snackbar
  open={uploadSnackbar.open}
  message={uploadSnackbar.message}
  variant={uploadSnackbar.variant}
  onClose={() => setUploadSnackbar(prev => ({ ...prev, open: false }))}
/>
```

### Undo Actions
```tsx
const [undoSnackbar, setUndoSnackbar] = useState({
  open: false,
  message: '',
  action: null
});

const handleDelete = (item) => {
  deleteItem(item);
  setUndoSnackbar({
    open: true,
    message: 'Item deleted',
    action: (
      <Button 
        size="sm" 
        variant="ghost" 
        onClick={() => {
          restoreItem(item);
          setUndoSnackbar(prev => ({ ...prev, open: false }));
        }}
      >
        Undo
      </Button>
    )
  });
};

<Snackbar
  open={undoSnackbar.open}
  message={undoSnackbar.message}
  action={undoSnackbar.action}
  onClose={() => setUndoSnackbar(prev => ({ ...prev, open: false }))}
/>
```

## Accessibility

The Snackbar component includes comprehensive accessibility features:

- **ARIA Live Regions**: Announces messages to screen readers
- **Keyboard Navigation**: Escape key to dismiss
- **Focus Management**: Returns focus to trigger element
- **Screen Reader Support**: Clear announcements of messages
- **High Contrast**: Meets WCAG AA contrast requirements

### Accessibility Example
```tsx
<Snackbar
  open={isOpen}
  message="Accessible notification message"
  variant="success"
  aria-live="polite"
  onClose={() => setIsOpen(false)}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | `false` | Whether the snackbar is open |
| `message` | `string` | - | Snackbar message |
| `variant` | `'default' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` | Snackbar variant |
| `duration` | `number` | `4000` | Auto-dismiss duration in milliseconds (0 = no auto-dismiss) |
| `position` | `'bottom-center' \| 'top-center' \| 'bottom-left' \| 'bottom-right' \| 'top-left' \| 'top-right'` | `'bottom-center'` | Snackbar position |
| `action` | `React.ReactNode` | - | Action button or element |
| `onClose` | `() => void` | - | Close handler function |
| `aria-live` | `'polite' \| 'assertive'` | `'polite'` | ARIA live region politeness |

## Styling

The Snackbar component uses design tokens for consistent styling:

- **Colors**: Semantic colors for different variants
- **Spacing**: Consistent padding and margins
- **Typography**: Font family, size, and weight from tokens
- **Border Radius**: Consistent border radius
- **Shadows**: Subtle shadow for elevation
- **Transitions**: Smooth slide-in/out animations
- **Z-Index**: Proper layering for notifications

## Best Practices

1. **Use Appropriate Variants**: Choose the right variant for the message type
2. **Keep Messages Concise**: Use clear, brief messages
3. **Provide Actions When Needed**: Add action buttons for important notifications
4. **Consider Auto-Dismiss**: Use appropriate duration for different message types
5. **Handle Multiple Notifications**: Implement a queue system for multiple snackbars
6. **Test with Screen Readers**: Ensure proper announcements

## Examples

### API Response Feedback
```tsx
const [feedback, setFeedback] = useState({
  open: false,
  message: '',
  variant: 'default'
});

const handleApiCall = async () => {
  try {
    const response = await apiCall();
    setFeedback({
      open: true,
      message: 'API call successful',
      variant: 'success'
    });
  } catch (error) {
    setFeedback({
      open: true,
      message: `API call failed: ${error.message}`,
      variant: 'error'
    });
  }
};

<Snackbar
  open={feedback.open}
  message={feedback.message}
  variant={feedback.variant}
  onClose={() => setFeedback(prev => ({ ...prev, open: false }))}
/>
```

### Network Status
```tsx
const [networkStatus, setNetworkStatus] = useState('online');

useEffect(() => {
  const handleOnline = () => setNetworkStatus('online');
  const handleOffline = () => setNetworkStatus('offline');
  
  window.addEventListener('online', handleOnline);
  window.addEventListener('offline', handleOffline);
  
  return () => {
    window.removeEventListener('online', handleOnline);
    window.removeEventListener('offline', handleOffline);
  };
}, []);

{networkStatus === 'offline' && (
  <Snackbar
    open={true}
    message="You are currently offline"
    variant="warning"
    duration={0}
  />
)}

{networkStatus === 'online' && (
  <Snackbar
    open={true}
    message="Connection restored"
    variant="success"
    duration={3000}
  />
)}
```

### Save Status
```tsx
const [saveStatus, setSaveStatus] = useState({
  open: false,
  message: '',
  variant: 'default'
});

const handleSave = async () => {
  setSaveStatus({
    open: true,
    message: 'Saving...',
    variant: 'info'
  });
  
  try {
    await saveData();
    setSaveStatus({
      open: true,
      message: 'Changes saved successfully',
      variant: 'success'
    });
  } catch (error) {
    setSaveStatus({
      open: true,
      message: 'Failed to save changes',
      variant: 'error'
    });
  }
};

<Snackbar
  open={saveStatus.open}
  message={saveStatus.message}
  variant={saveStatus.variant}
  onClose={() => setSaveStatus(prev => ({ ...prev, open: false }))}
/>
```




