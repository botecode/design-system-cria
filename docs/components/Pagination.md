# Pagination

A navigation component for browsing through paged content with accessible controls and flexible configuration options.

## Features

- **Previous/Next Navigation**: Intuitive navigation with disabled states
- **Numbered Pages**: Clear page indicators with active state highlighting
- **Ellipsis Support**: Efficient display of large page ranges
- **Page Size Control**: Configurable items per page with selector
- **Page Information**: Display current page range and total items
- **Accessibility**: Full WCAG compliance with keyboard navigation and screen reader support
- **Responsive Design**: Adapts to different screen sizes
- **Multiple Variants**: Default, compact, and minimal styles

## Usage

### Basic Pagination

```tsx
import { Pagination } from '@cria/design-system';

function DataTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={setCurrentPage}
    />
  );
}
```

### With Page Size Selector

```tsx
import { Pagination } from '@cria/design-system';

function DataTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const totalItems = 250;
  const totalPages = Math.ceil(totalItems / pageSize);

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={setCurrentPage}
      showPageSize
      pageSize={pageSize}
      pageSizeOptions={[5, 10, 20, 50, 100]}
      onPageSizeChange={(newSize) => {
        setPageSize(newSize);
        setCurrentPage(1); // Reset to first page
      }}
    />
  );
}
```

### With Page Information

```tsx
import { Pagination } from '@cria/design-system';

function DataTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 250;
  const pageSize = 10;
  const totalPages = Math.ceil(totalItems / pageSize);

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={setCurrentPage}
      showPageInfo
      totalItems={totalItems}
      pageSize={pageSize}
    />
  );
}
```

### Compact Variant

```tsx
import { Pagination } from '@cria/design-system';

function CompactTable() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={10}
      onPageChange={setCurrentPage}
      variant="compact"
    />
  );
}
```

### Minimal Variant

```tsx
import { Pagination } from '@cria/design-system';

function MinimalTable() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={10}
      onPageChange={setCurrentPage}
      variant="minimal"
    />
  );
}
```

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `currentPage` | `number` | - | **Required.** Current active page (1-based) |
| `totalPages` | `number` | - | **Required.** Total number of pages |
| `onPageChange` | `(page: number) => void` | - | **Required.** Callback when page changes |
| `siblingCount` | `number` | `1` | Number of pages to show on each side of current page |
| `showFirstLast` | `boolean` | `false` | Whether to show first and last page buttons |
| `showPrevNext` | `boolean` | `true` | Whether to show previous/next buttons |
| `previousLabel` | `string` | `"Previous"` | Label for previous button |
| `nextLabel` | `string` | `"Next"` | Label for next button |
| `firstLabel` | `string` | `"First"` | Label for first button |
| `lastLabel` | `string` | `"Last"` | Label for last button |
| `showPageSize` | `boolean` | `false` | Whether to show page size selector |
| `pageSize` | `number` | - | Current page size |
| `pageSizeOptions` | `number[]` | `[5, 10, 20, 50]` | Available page size options |
| `onPageSizeChange` | `(pageSize: number) => void` | - | Callback when page size changes |
| `showPageInfo` | `boolean` | `false` | Whether to show page information |
| `totalItems` | `number` | - | Total number of items |
| `variant` | `"default" \| "compact" \| "minimal"` | `"default"` | Pagination variant |
| `ariaLabel` | `string` | `"Pagination"` | Custom aria-label |
| `className` | `string` | `""` | Custom class name |
| `style` | `React.CSSProperties` | - | Custom styles |

### Variants

#### Default
Standard pagination with full spacing and labels.

#### Compact
Reduced padding and spacing for tighter layouts.

#### Minimal
Shows only page numbers and navigation arrows without text labels.

## Accessibility

The Pagination component follows WCAG 2.1 AA guidelines:

- **Keyboard Navigation**: All controls are keyboard accessible
- **Screen Reader Support**: Proper ARIA labels and roles
- **Focus Management**: Clear focus indicators and logical tab order
- **Current Page Announcement**: Active page is announced to screen readers
- **Disabled States**: Disabled buttons are properly marked

### Keyboard Shortcuts

- **Tab**: Navigate between pagination controls
- **Enter/Space**: Activate focused button
- **Arrow Keys**: Not supported (use Tab for navigation)

## Design Guidelines

### When to Use

- **Data Tables**: Navigate through large datasets
- **Content Lists**: Browse through paginated content
- **Search Results**: Navigate search result pages
- **Document Lists**: Browse through documents or files

### When Not to Use

- **Small Datasets**: For fewer than 10 items, consider showing all items
- **Infinite Scroll**: Use infinite scroll for social media feeds
- **Single Page**: Don't use pagination for single-page content

### Best Practices

1. **Reset to First Page**: When changing page size, reset to page 1
2. **Consistent Page Size**: Use consistent page sizes across your application
3. **Clear Labels**: Use descriptive labels for navigation buttons
4. **Loading States**: Show loading indicators during page transitions
5. **URL Synchronization**: Sync pagination state with URL parameters

## Examples

### Data Table Integration

```tsx
import { Pagination } from '@cria/design-system';

function DataTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [data, setData] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  const totalPages = Math.ceil(totalItems / pageSize);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Fetch data for new page
    fetchData(page, pageSize);
  };

  const handlePageSizeChange = (newSize: number) => {
    setPageSize(newSize);
    setCurrentPage(1);
    // Fetch data with new page size
    fetchData(1, newSize);
  };

  return (
    <div>
      {/* Table content */}
      <table>
        {/* Table rows */}
      </table>
      
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        showPageSize
        pageSize={pageSize}
        pageSizeOptions={[10, 20, 50, 100]}
        onPageSizeChange={handlePageSizeChange}
        showPageInfo
        totalItems={totalItems}
      />
    </div>
  );
}
```

### URL Synchronization

```tsx
import { Pagination } from '@cria/design-system';
import { useSearchParams } from 'react-router-dom';

function PaginatedContent() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get('page') || '1', 10);
  const totalPages = 25;

  const handlePageChange = (page: number) => {
    setSearchParams({ page: page.toString() });
  };

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={handlePageChange}
    />
  );
}
```

### Custom Styling

```tsx
import { Pagination } from '@cria/design-system';

function CustomPagination() {
  return (
    <Pagination
      currentPage={1}
      totalPages={10}
      onPageChange={() => {}}
      className="my-custom-pagination"
      style={{
        marginTop: '2rem',
        justifyContent: 'flex-start'
      }}
    />
  );
}
```

## Testing

The Pagination component includes comprehensive tests covering:

- **Rendering**: Proper structure and content
- **Interaction**: Click and keyboard navigation
- **Accessibility**: ARIA attributes and screen reader support
- **Edge Cases**: Single page, disabled states, large page counts
- **Variants**: All pagination variants
- **Props**: All configuration options

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Related Components

- [Table](./Table.md) - For displaying tabular data
- [List](./List.md) - For displaying list data
- [Card](./Card.md) - For displaying content in cards
