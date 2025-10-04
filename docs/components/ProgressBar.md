# Progress Bar

A component for displaying task completion and loading states with accessible progress indicators.

## Features

- **Determinate Progress**: Show specific completion percentage with configurable value ranges
- **Indeterminate Progress**: Animated loading indicator for unknown completion times
- **Multiple Sizes**: Small, medium, and large variants
- **Color Variants**: Primary, success, warning, and error states
- **Visual Enhancements**: Striped patterns and smooth animations
- **Accessibility**: Full WCAG compliance with proper ARIA attributes
- **Responsive Design**: Adapts to different screen sizes
- **Custom Labels**: Support for text labels and percentage display

## Usage

### Basic Progress Bar

```tsx
import { ProgressBar } from '@cria/design-system';

function TaskProgress() {
  return (
    <ProgressBar 
      value={75} 
      label="Task Progress" 
    />
  );
}
```

### With Percentage Display

```tsx
import { ProgressBar } from '@cria/design-system';

function UploadProgress() {
  return (
    <ProgressBar 
      value={60} 
      label="File Upload" 
      showPercentage 
    />
  );
}
```

### Indeterminate Loading

```tsx
import { ProgressBar } from '@cria/design-system';

function LoadingState() {
  return (
    <ProgressBar 
      variant="indeterminate" 
      label="Loading..." 
    />
  );
}
```

### Different Sizes and Colors

```tsx
import { ProgressBar } from '@cria/design-system';

function ProgressExamples() {
  return (
    <div>
      <ProgressBar value={50} size="sm" color="primary" />
      <ProgressBar value={75} size="md" color="success" />
      <ProgressBar value={25} size="lg" color="warning" />
      <ProgressBar value={90} color="error" />
    </div>
  );
}
```

### Striped and Animated

```tsx
import { ProgressBar } from '@cria/design-system';

function AnimatedProgress() {
  return (
    <ProgressBar 
      value={80} 
      label="Processing" 
      striped 
      animated 
    />
  );
}
```

### Custom Value Range

```tsx
import { ProgressBar } from '@cria/design-system';

function CustomRange() {
  return (
    <ProgressBar 
      value={750} 
      min={0} 
      max={1000} 
      label="Storage Usage (GB)" 
      showPercentage 
    />
  );
}
```

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | `0` | Progress value (0-100 for default, or between min-max) |
| `min` | `number` | `0` | Minimum value |
| `max` | `number` | `100` | Maximum value |
| `variant` | `'determinate' \| 'indeterminate'` | `'determinate'` | Progress bar variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the progress bar |
| `color` | `'primary' \| 'success' \| 'warning' \| 'error'` | `'primary'` | Color variant |
| `label` | `React.ReactNode` | - | Label text or component |
| `showPercentage` | `boolean` | `false` | Whether to show percentage |
| `disabled` | `boolean` | `false` | Whether the progress bar is disabled |
| `striped` | `boolean` | `false` | Whether to show striped pattern |
| `animated` | `boolean` | `false` | Whether to animate the striped pattern |
| `transitionDuration` | `string` | `'0.3s'` | Custom transition duration |
| `ariaLabel` | `string` | - | Custom aria-label |
| `className` | `string` | `''` | Custom class name |
| `style` | `React.CSSProperties` | - | Custom styles |

### Variants

#### Determinate
Shows specific progress with a known completion percentage. Use when you know the total amount of work and current progress.

#### Indeterminate
Animated loading indicator for unknown completion times. Use when you don't know how long a process will take.

### Sizes

#### Small (sm)
4px height - Compact for tight layouts and inline progress indicators.

#### Medium (md)
8px height - Default size for most use cases.

#### Large (lg)
12px height - Prominent progress indicator for important processes.

### Color Variants

#### Primary
Default blue color for general progress indication.

#### Success
Green color for successful operations or positive progress.

#### Warning
Orange color for caution or attention-required states.

#### Error
Red color for failed operations or error states.

## Accessibility

The Progress Bar component follows WCAG 2.1 AA guidelines:

- **ARIA Attributes**: Proper `role="progressbar"` with `aria-valuenow`, `aria-valuemin`, and `aria-valuemax`
- **Screen Reader Support**: Progress values are announced to assistive technologies
- **Keyboard Navigation**: Focusable with clear focus indicators
- **High Contrast**: Supports high contrast mode with enhanced borders
- **Reduced Motion**: Respects `prefers-reduced-motion` for users sensitive to animations

### ARIA Attributes

- `role="progressbar"` - Identifies the element as a progress bar
- `aria-valuenow` - Current progress value (determinate only)
- `aria-valuemin` - Minimum value (determinate only)
- `aria-valuemax` - Maximum value (determinate only)
- `aria-busy` - Indicates loading state (indeterminate only)
- `aria-label` - Accessible name for the progress bar
- `aria-disabled` - Indicates disabled state

## Design Guidelines

### When to Use

- **File Uploads**: Show upload progress with percentage
- **Data Processing**: Indicate processing status for long-running operations
- **Installation/Updates**: Display installation or update progress
- **Form Completion**: Show multi-step form progress
- **Loading States**: Use indeterminate variant for unknown duration tasks

### When Not to Use

- **Quick Actions**: Don't show progress for operations under 1 second
- **Static Content**: Don't use for content that doesn't represent progress
- **Navigation**: Use breadcrumbs or stepper components instead
- **Ratings**: Use rating components for user feedback

### Best Practices

1. **Appropriate Variant**: Use determinate when you know the total, indeterminate when you don't
2. **Clear Labels**: Always provide meaningful labels that describe what's progressing
3. **Realistic Values**: Ensure progress values accurately reflect actual completion
4. **Smooth Transitions**: Use appropriate transition durations for smooth visual updates
5. **Color Semantics**: Use color variants that match the semantic meaning of the progress

## Examples

### File Upload with Progress

```tsx
import { ProgressBar } from '@cria/design-system';
import { useState } from 'react';

function FileUpload() {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = () => {
    setIsUploading(true);
    setUploadProgress(0);
    
    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          setIsUploading(false);
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 10;
      });
    }, 200);
  };

  return (
    <div>
      <ProgressBar 
        value={uploadProgress} 
        label="Uploading document.pdf" 
        showPercentage 
        color={uploadProgress === 100 ? "success" : "primary"}
      />
      <button onClick={handleUpload} disabled={isUploading}>
        {isUploading ? 'Uploading...' : 'Upload File'}
      </button>
    </div>
  );
}
```

### Multi-step Form Progress

```tsx
import { ProgressBar } from '@cria/design-system';

function FormProgress({ currentStep, totalSteps }) {
  const progress = (currentStep / totalSteps) * 100;
  
  return (
    <ProgressBar 
      value={progress} 
      label={`Step ${currentStep} of ${totalSteps}`} 
      showPercentage 
      color="primary"
    />
  );
}
```

### Database Migration Progress

```tsx
import { ProgressBar } from '@cria/design-system';

function MigrationProgress({ recordsProcessed, totalRecords }) {
  const progress = (recordsProcessed / totalRecords) * 100;
  
  return (
    <ProgressBar 
      value={progress} 
      label={`Migrating ${recordsProcessed} of ${totalRecords} records`} 
      showPercentage 
      color="success"
      striped
      animated
    />
  );
}
```

### Loading State with Indeterminate

```tsx
import { ProgressBar } from '@cria/design-system';

function LoadingPage() {
  return (
    <div className="loading-container">
      <ProgressBar 
        variant="indeterminate" 
        label="Loading application..." 
        size="lg"
        color="primary"
      />
    </div>
  );
}
```

### Custom Value Range

```tsx
import { ProgressBar } from '@cria/design-system';

function TemperatureProgress({ temperature }) {
  // Temperature range: -50°C to 50°C
  const progress = ((temperature + 50) / 100) * 100;
  
  return (
    <ProgressBar 
      value={temperature} 
      min={-50} 
      max={50} 
      label={`Temperature: ${temperature}°C`} 
      color={temperature > 30 ? "warning" : temperature < 0 ? "error" : "success"}
    />
  );
}
```

## Animation and Transitions

### Smooth Value Changes

Progress bars automatically animate value changes with a smooth transition:

```tsx
<ProgressBar 
  value={progress} 
  transitionDuration="0.5s" 
/>
```

### Striped Animation

Animated stripes provide visual feedback for active processes:

```tsx
<ProgressBar 
  value={progress} 
  striped 
  animated 
/>
```

### Indeterminate Animation

Indeterminate progress bars use a sliding gradient animation:

```tsx
<ProgressBar 
  variant="indeterminate" 
  label="Processing..." 
/>
```

## Responsive Behavior

Progress bars automatically adapt to different screen sizes:

- **Mobile**: Reduced height and adjusted label layout
- **Tablet**: Standard sizing with responsive label positioning
- **Desktop**: Full-size progress bars with optimal spacing

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Related Components

- [Button](./Button.md) - For triggering progress-related actions
- [Modal](./Modal.md) - For displaying progress in modal dialogs
- [Snackbar](./Snackbar.md) - For progress completion notifications
- [Spinner](./Spinner.md) - Alternative loading indicator for quick operations
