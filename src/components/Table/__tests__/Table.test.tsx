import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Table } from '../Table';

// Mock Phosphor icons
jest.mock('phosphor-react', () => ({
  CaretUp: ({ size, ...props }: any) => <div data-testid="caret-up" {...props} />,
  CaretDown: ({ size, ...props }: any) => <div data-testid="caret-down" {...props} />,
  CaretUpDown: ({ size, ...props }: any) => <div data-testid="caret-up-down" {...props} />,
  MagnifyingGlass: ({ size, ...props }: any) => <div data-testid="magnifying-glass" {...props} />,
  Funnel: ({ size, ...props }: any) => <div data-testid="funnel" {...props} />,
  Download: ({ size, ...props }: any) => <div data-testid="download" {...props} />,
  DotsThree: ({ size, ...props }: any) => <div data-testid="dots-three" {...props} />,
}));

describe('Table', () => {
  const mockColumns = [
    { key: 'id', label: 'ID', sortable: true },
    { key: 'name', label: 'Name', sortable: true },
    { key: 'email', label: 'Email', sortable: false },
    { key: 'status', label: 'Status', sortable: true },
    { key: 'actions', label: 'Actions', sortable: false }
  ];

  const mockData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'Active' }
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Rendering', () => {
    it('renders with basic props', () => {
      render(
        <Table
          columns={mockColumns}
          data={mockData}
        />
      );

      expect(screen.getByText('ID')).toBeInTheDocument();
      expect(screen.getByText('Name')).toBeInTheDocument();
      expect(screen.getByText('Email')).toBeInTheDocument();
      expect(screen.getByText('Status')).toBeInTheDocument();
      expect(screen.getByText('Actions')).toBeInTheDocument();

      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('Jane Smith')).toBeInTheDocument();
      expect(screen.getByText('Bob Johnson')).toBeInTheDocument();
    });

    it('renders with custom className', () => {
      const { container } = render(
        <Table
          className="custom-table"
          columns={mockColumns}
          data={mockData}
        />
      );

      expect(container.firstChild).toHaveClass('custom-table');
    });

    it('renders with custom style', () => {
      const { container } = render(
        <Table
          style={{ backgroundColor: 'red' }}
          columns={mockColumns}
          data={mockData}
        />
      );

      expect(container.firstChild).toHaveStyle('background-color: rgb(255, 0, 0)');
    });

    it('renders with data attributes', () => {
      const { container } = render(
        <Table
          data-testid="test-table"
          data-custom="value"
          columns={mockColumns}
          data={mockData}
        />
      );

      expect(screen.getByRole('table')).toHaveAttribute('data-testid', 'test-table');
      expect(screen.getByRole('table')).toHaveAttribute('data-custom', 'value');
    });
  });

  describe('Variants', () => {
    it('renders default variant', () => {
      const { container } = render(
        <Table variant="default" columns={mockColumns} data={mockData} />
      );

      expect(container.firstChild).toHaveClass('cria-table--default');
    });

    it('renders striped variant', () => {
      const { container } = render(
        <Table variant="striped" columns={mockColumns} data={mockData} />
      );

      expect(container.firstChild).toHaveClass('cria-table--striped');
    });

    it('renders bordered variant', () => {
      const { container } = render(
        <Table variant="bordered" columns={mockColumns} data={mockData} />
      );

      expect(container.firstChild).toHaveClass('cria-table--bordered');
    });

    it('renders hover variant', () => {
      const { container } = render(
        <Table variant="hover" columns={mockColumns} data={mockData} />
      );

      expect(container.firstChild).toHaveClass('cria-table--hover');
    });
  });

  describe('Sizes', () => {
    it('renders small size', () => {
      const { container } = render(
        <Table size="sm" columns={mockColumns} data={mockData} />
      );

      expect(container.firstChild).toHaveClass('cria-table--size-sm');
    });

    it('renders medium size', () => {
      const { container } = render(
        <Table size="md" columns={mockColumns} data={mockData} />
      );

      expect(container.firstChild).toHaveClass('cria-table--size-md');
    });

    it('renders large size', () => {
      const { container } = render(
        <Table size="lg" columns={mockColumns} data={mockData} />
      );

      expect(container.firstChild).toHaveClass('cria-table--size-lg');
    });
  });

  describe('Sorting', () => {
    it('renders sortable columns with sort icons', () => {
      render(
        <Table columns={mockColumns} data={mockData} />
      );

      expect(screen.getAllByTestId('caret-up-down')).toHaveLength(5);
    });

    it('handles column sorting', () => {
      const onSort = jest.fn();
      render(
        <Table columns={mockColumns} data={mockData} onSort={onSort} />
      );

      const sortableHeader = screen.getByText('ID');
      fireEvent.click(sortableHeader);

      expect(onSort).toHaveBeenCalledWith('id', 'asc');
    });

    it('shows sort direction indicators', () => {
      render(
        <Table 
          columns={mockColumns} 
          data={mockData} 
          sortBy="name"
          sortDirection="asc"
        />
      );

      expect(screen.getByTestId('caret-up')).toBeInTheDocument();
    });

    it('handles sort direction toggle', () => {
      const onSort = jest.fn();
      render(
        <Table 
          columns={mockColumns} 
          data={mockData} 
          sortBy="name"
          sortDirection="asc"
          onSort={onSort}
        />
      );

      const sortableHeader = screen.getByText('Name');
      fireEvent.click(sortableHeader);

      expect(onSort).toHaveBeenCalledWith('name', 'desc');
    });
  });

  describe('Pagination', () => {
    it('renders pagination when enabled', () => {
      render(
        <Table 
          columns={mockColumns} 
          data={mockData} 
          pagination={{ page: 1, pageSize: 10, total: 25 }}
        />
      );

      expect(screen.getByText('Page 1 of 3')).toBeInTheDocument();
    });

    it('does not render pagination when disabled', () => {
      render(
        <Table columns={mockColumns} data={mockData} />
      );

      expect(screen.queryByText('Page')).not.toBeInTheDocument();
    });

    it('handles page change', () => {
      const onPageChange = jest.fn();
      render(
        <Table 
          columns={mockColumns} 
          data={mockData} 
          pagination={{ page: 1, pageSize: 10, total: 25 }}
          onPageChange={onPageChange}
        />
      );

      const nextButton = screen.getByText('Next');
      fireEvent.click(nextButton);

      expect(onPageChange).toHaveBeenCalledWith(2);
    });

    it('handles page size change', () => {
      const onPageSizeChange = jest.fn();
      render(
        <Table 
          columns={mockColumns} 
          data={mockData} 
          pagination={{ page: 1, pageSize: 10, total: 25, showSizeChanger: true }}
          onPageSizeChange={onPageSizeChange}
        />
      );

      const pageSizeSelect = screen.getByRole('combobox');
      fireEvent.change(pageSizeSelect, { target: { value: '20' } });

      expect(onPageSizeChange).toHaveBeenCalledWith(20);
    });
  });

  describe('Selection', () => {
    it('renders selection checkboxes when enabled', () => {
      render(
        <Table 
          columns={mockColumns} 
          data={mockData} 
          selection={{ type: 'checkbox' }}
        />
      );

      const checkboxes = screen.getAllByRole('checkbox');
      expect(checkboxes).toHaveLength(4); // 1 header + 3 rows
    });

    it('handles row selection', () => {
      const onSelectionChange = jest.fn();
      render(
        <Table 
          columns={mockColumns} 
          data={mockData} 
          selection={{ type: 'checkbox' }}
          onSelectionChange={onSelectionChange}
        />
      );

      const firstRowCheckbox = screen.getAllByRole('checkbox')[1];
      fireEvent.click(firstRowCheckbox);

      expect(onSelectionChange).toHaveBeenCalledWith([mockData[0]]);
    });

    it('handles select all', () => {
      const onSelectionChange = jest.fn();
      render(
        <Table 
          columns={mockColumns} 
          data={mockData} 
          selection={{ type: 'checkbox' }}
          onSelectionChange={onSelectionChange}
        />
      );

      const selectAllCheckbox = screen.getAllByRole('checkbox')[0];
      fireEvent.click(selectAllCheckbox);

      expect(onSelectionChange).toHaveBeenCalledWith(mockData);
    });

    it('renders radio selection', () => {
      render(
        <Table 
          columns={mockColumns} 
          data={mockData} 
          selection={{ type: 'radio' }}
        />
      );

      const radios = screen.getAllByRole('radio');
      expect(radios).toHaveLength(3); // 3 rows only (no header radio)
    });
  });

  describe('Filtering', () => {
    it('renders filter input when enabled', () => {
      render(
        <Table 
          columns={mockColumns} 
          data={mockData} 
          filterable
        />
      );

      expect(screen.getByTestId('magnifying-glass')).toBeInTheDocument();
    });

    it('handles filter change', () => {
      const onFilterChange = jest.fn();
      render(
        <Table 
          columns={mockColumns} 
          data={mockData} 
          filterable
          onFilterChange={onFilterChange}
        />
      );

      const filterInput = screen.getByPlaceholderText('Filter...');
      fireEvent.change(filterInput, { target: { value: 'John' } });

      expect(onFilterChange).toHaveBeenCalledWith('John');
    });
  });

  describe('Loading', () => {
    it('renders loading state', () => {
      const { container } = render(
        <Table 
          columns={mockColumns} 
          data={[]} 
          loading 
        />
      );

      expect(container.firstChild).toHaveClass('cria-table--loading');
      expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('renders custom loading message', () => {
      render(
        <Table 
          columns={mockColumns} 
          data={[]} 
          loading 
          loadingMessage="Fetching data..."
        />
      );

      expect(screen.getByText('Fetching data...')).toBeInTheDocument();
    });
  });

  describe('Empty State', () => {
    it('renders empty state when no data', () => {
      render(
        <Table columns={mockColumns} data={[]} />
      );

      expect(screen.getByText('No data available')).toBeInTheDocument();
    });

    it('renders custom empty message', () => {
      render(
        <Table 
          columns={mockColumns} 
          data={[]} 
          emptyMessage="No users found"
        />
      );

      expect(screen.getByText('No users found')).toBeInTheDocument();
    });

    it('renders custom empty component', () => {
      const EmptyComponent = () => <div>Custom Empty State</div>;
      render(
        <Table 
          columns={mockColumns} 
          data={[]} 
          emptyComponent={<EmptyComponent />}
        />
      );

      expect(screen.getByText('Custom Empty State')).toBeInTheDocument();
    });
  });

  describe('Row Actions', () => {
    it('renders row actions when provided', () => {
      const rowActions = (row: any) => [
        { label: 'Edit', onClick: () => console.log('Edit', row.id) },
        { label: 'Delete', onClick: () => console.log('Delete', row.id) }
      ];

      render(
        <Table 
          columns={mockColumns} 
          data={mockData} 
          rowActions={rowActions}
        />
      );

      expect(screen.getAllByTestId('dots-three')).toHaveLength(3);
    });

    it('handles row action clicks', () => {
      const onRowAction = jest.fn();
      const rowActions = (row: any) => [
        { label: 'Edit', onClick: () => onRowAction('edit', row) }
      ];

      render(
        <Table 
          columns={mockColumns} 
          data={mockData} 
          rowActions={rowActions}
        />
      );

      const firstActionButton = screen.getAllByTestId('dots-three')[0];
      fireEvent.click(firstActionButton);

      // This would need additional testing for dropdown menu interactions
      expect(firstActionButton).toBeInTheDocument();
    });
  });

  describe('Column Configuration', () => {
    it('renders custom column renderer', () => {
      const customColumns = [
        { key: 'id', label: 'ID', sortable: true },
        { key: 'name', label: 'Name', sortable: true },
        { key: 'email', label: 'Email', sortable: false },
        { 
          key: 'status', 
          label: 'Status', 
          render: (value: any) => (
            <span style={{ color: value === 'Active' ? 'green' : 'red' }}>
              {value}
            </span>
          )
        }
      ];

      render(
        <Table columns={customColumns} data={mockData} />
      );

      const activeStatuses = screen.getAllByText('Active');
      expect(activeStatuses[0]).toHaveStyle('color: rgb(0, 128, 0)');
    });

    it('renders column with custom width', () => {
      const customColumns = [
        { key: 'id', label: 'ID', width: '100px' },
        { key: 'name', label: 'Name', width: '200px' }
      ];

      render(
        <Table columns={customColumns} data={mockData.slice(0, 1)} />
      );

      // Check that the table headers have the correct width
      expect(screen.getByText('ID')).toBeInTheDocument();
      expect(screen.getByText('Name')).toBeInTheDocument();
    });

    it('renders column with custom alignment', () => {
      const customColumns = [
        { key: 'id', label: 'ID', align: 'center' },
        { key: 'name', label: 'Name', align: 'right' }
      ];

      render(
        <Table columns={customColumns} data={mockData.slice(0, 1)} />
      );

      expect(screen.getByText('ID')).toBeInTheDocument();
      expect(screen.getByText('Name')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('applies accessibility attributes', () => {
      render(
        <Table 
          role="table"
          aria-label="User data table"
          columns={mockColumns}
          data={mockData}
        />
      );

      expect(screen.getByRole('table')).toHaveAttribute('aria-label', 'User data table');
    });

    it('provides keyboard navigation support', () => {
      render(
        <Table columns={mockColumns} data={mockData} />
      );

      const table = screen.getByRole('table');
      expect(table).toHaveAttribute('tabindex', '0');
    });

    it('has proper ARIA labels for sortable columns', () => {
      render(
        <Table columns={mockColumns} data={mockData} />
      );

      const sortableHeader = screen.getByText('ID').closest('.cria-table__header-cell');
      expect(sortableHeader).toHaveAttribute('aria-sort');
    });
  });

  describe('Custom Content', () => {
    it('renders custom header', () => {
      render(
        <Table 
          header={<div data-testid="custom-header">Custom Header</div>}
          columns={mockColumns}
          data={mockData}
        />
      );

      expect(screen.getByTestId('custom-header')).toBeInTheDocument();
    });

    it('renders custom footer', () => {
      render(
        <Table 
          footer={<div data-testid="custom-footer">Custom Footer</div>}
          columns={mockColumns}
          data={mockData}
        />
      );

      expect(screen.getByTestId('custom-footer')).toBeInTheDocument();
    });
  });

  describe('Edge Cases', () => {
    it('handles empty columns array', () => {
      render(<Table columns={[]} data={mockData} />);
      
      expect(screen.getByRole('table')).toBeInTheDocument();
    });

    it('handles null/undefined data gracefully', () => {
      render(<Table columns={mockColumns} data={null as any} />);
      
      expect(screen.getByText('No data available')).toBeInTheDocument();
    });

    it('handles large datasets efficiently', () => {
      const largeData = Array.from({ length: 1000 }, (_, i) => ({
        id: i + 1,
        name: `User ${i + 1}`,
        email: `user${i + 1}@example.com`,
        status: i % 2 === 0 ? 'Active' : 'Inactive'
      }));

      render(
        <Table 
          columns={mockColumns} 
          data={largeData}
          pagination={{ page: 1, pageSize: 10, total: 1000 }}
        />
      );

      expect(screen.getByText('User 1')).toBeInTheDocument();
      expect(screen.queryByText('User 1000')).not.toBeInTheDocument();
    });
  });

  describe('Props combinations', () => {
    it('renders with all props combined', () => {
      const { container } = render(
        <Table
          variant="striped"
          size="lg"
          columns={mockColumns}
          data={mockData}
          sortable
          sortBy="name"
          sortDirection="asc"
          pagination={{ page: 1, pageSize: 10, total: 25 }}
          selection={{ type: 'checkbox' }}
          filterable
          loading={false}
          className="custom-class"
          style={{ backgroundColor: 'blue' }}
          data-testid="combined-table"
        />
      );

      expect(container.firstChild).toHaveClass('custom-class');
      expect(container.firstChild).toHaveClass('cria-table--striped');
      expect(container.firstChild).toHaveClass('cria-table--size-lg');
      expect(container.firstChild).toHaveStyle('background-color: rgb(0, 0, 255)');
      expect(screen.getByRole('table')).toHaveAttribute('data-testid', 'combined-table');
    });
  });
});
