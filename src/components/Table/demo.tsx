import React, { useState } from 'react';
import { Table } from './Table';
import { Button } from '../Button';
import { Badge } from '../Badge';
import { Checkbox } from '../Checkbox';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
  department: string;
  lastLogin: string;
  joinDate: string;
  salary: number;
  location: string;
}

const TableDemo = () => {
  const [sortBy, setSortBy] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [selectedRows, setSelectedRows] = useState<User[]>([]);
  const [filterValue, setFilterValue] = useState('');

  // Sample data
  const sampleData: User[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@company.com',
      role: 'Senior Developer',
      status: 'active',
      department: 'Engineering',
      lastLogin: '2024-01-15',
      joinDate: '2022-03-15',
      salary: 95000,
      location: 'San Francisco, CA'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@company.com',
      role: 'Product Manager',
      status: 'active',
      department: 'Product',
      lastLogin: '2024-01-14',
      joinDate: '2021-08-20',
      salary: 110000,
      location: 'New York, NY'
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob.johnson@company.com',
      role: 'UX Designer',
      status: 'inactive',
      department: 'Design',
      lastLogin: '2023-12-20',
      joinDate: '2020-11-10',
      salary: 85000,
      location: 'Austin, TX'
    },
    {
      id: 4,
      name: 'Alice Brown',
      email: 'alice.brown@company.com',
      role: 'DevOps Engineer',
      status: 'active',
      department: 'Engineering',
      lastLogin: '2024-01-16',
      joinDate: '2023-01-05',
      salary: 105000,
      location: 'Seattle, WA'
    },
    {
      id: 5,
      name: 'Charlie Wilson',
      email: 'charlie.wilson@company.com',
      role: 'Marketing Specialist',
      status: 'pending',
      department: 'Marketing',
      lastLogin: '2024-01-10',
      joinDate: '2024-01-10',
      salary: 70000,
      location: 'Chicago, IL'
    },
    {
      id: 6,
      name: 'Diana Prince',
      email: 'diana.prince@company.com',
      role: 'Data Scientist',
      status: 'active',
      department: 'Analytics',
      lastLogin: '2024-01-16',
      joinDate: '2022-06-01',
      salary: 120000,
      location: 'Boston, MA'
    },
    {
      id: 7,
      name: 'Eva Martinez',
      email: 'eva.martinez@company.com',
      role: 'QA Engineer',
      status: 'active',
      department: 'Engineering',
      lastLogin: '2024-01-15',
      joinDate: '2021-12-15',
      salary: 80000,
      location: 'Denver, CO'
    },
    {
      id: 8,
      name: 'Frank Thompson',
      email: 'frank.thompson@company.com',
      role: 'Sales Representative',
      status: 'inactive',
      department: 'Sales',
      lastLogin: '2023-11-30',
      joinDate: '2019-05-20',
      salary: 75000,
      location: 'Miami, FL'
    },
    {
      id: 9,
      name: 'Grace Lee',
      email: 'grace.lee@company.com',
      role: 'HR Manager',
      status: 'active',
      department: 'Human Resources',
      lastLogin: '2024-01-16',
      joinDate: '2020-02-10',
      salary: 90000,
      location: 'Portland, OR'
    },
    {
      id: 10,
      name: 'Henry Davis',
      email: 'henry.davis@company.com',
      role: 'Financial Analyst',
      status: 'active',
      department: 'Finance',
      lastLogin: '2024-01-14',
      joinDate: '2021-09-15',
      salary: 85000,
      location: 'Atlanta, GA'
    },
    {
      id: 11,
      name: 'Iris Chen',
      email: 'iris.chen@company.com',
      role: 'Frontend Developer',
      status: 'active',
      department: 'Engineering',
      lastLogin: '2024-01-16',
      joinDate: '2023-03-01',
      salary: 90000,
      location: 'Los Angeles, CA'
    },
    {
      id: 12,
      name: 'Jack Rodriguez',
      email: 'jack.rodriguez@company.com',
      role: 'Backend Developer',
      status: 'pending',
      department: 'Engineering',
      lastLogin: '2024-01-12',
      joinDate: '2024-01-12',
      salary: 92000,
      location: 'Phoenix, AZ'
    }
  ];

  const columns = [
    {
      key: 'id',
      label: 'ID',
      sortable: true,
      width: '80px'
    },
    {
      key: 'name',
      label: 'Name',
      sortable: true,
      render: (value: string, row: User) => (
        <div>
          <div className="font-medium text-gray-900">{value}</div>
          <div className="text-sm text-gray-500">{row.email}</div>
        </div>
      )
    },
    {
      key: 'role',
      label: 'Role',
      sortable: true,
      render: (value: string) => (
        <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
          {value}
        </span>
      )
    },
    {
      key: 'status',
      label: 'Status',
      sortable: true,
      render: (value: string) => {
        const statusColors = {
          active: 'success',
          inactive: 'danger',
          pending: 'warning'
        } as const;
        return <Badge variant={statusColors[value as keyof typeof statusColors]}>{value}</Badge>;
      }
    },
    {
      key: 'department',
      label: 'Department',
      sortable: true
    },
    {
      key: 'salary',
      label: 'Salary',
      sortable: true,
      render: (value: number) => (
        <span className="font-mono">${value.toLocaleString()}</span>
      )
    },
    {
      key: 'location',
      label: 'Location',
      sortable: true
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (value: any, row: User) => (
        <div className="flex space-x-2">
          <Button size="sm" variant="outline">Edit</Button>
          <Button size="sm" variant="danger">Delete</Button>
        </div>
      )
    }
  ];

  const handleSort = (column: string) => {
    if (sortBy === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortDirection('asc');
    }
  };

  const handleSelectionChange = (selected: User[]) => {
    setSelectedRows(selected);
  };

  const handleExport = (format: 'csv' | 'excel') => {
    console.log(`Exporting ${format} with ${selectedRows.length} selected rows`);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Table / DataGrid</h1>
        <p className="text-gray-600">
          A comprehensive table component with sorting, pagination, filtering, and selection capabilities.
        </p>
      </div>

      {/* Basic Table */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Basic Table</h2>
        <div className="bg-white rounded-lg border">
          <Table
            columns={columns.slice(0, 5)} // Show only first 5 columns for basic example
            data={sampleData.slice(0, 5)}
            sortable={true}
            sortBy={sortBy}
            sortDirection={sortDirection}
            onSort={handleSort}
          />
        </div>
      </section>

      {/* Table with Pagination */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Table with Pagination</h2>
        <div className="bg-white rounded-lg border">
          <Table
            columns={columns.slice(0, 6)}
            data={sampleData}
            sortable={true}
            sortBy={sortBy}
            sortDirection={sortDirection}
            onSort={handleSort}
            pagination={{
              page: currentPage,
              pageSize: pageSize,
              total: sampleData.length,
              showSizeChanger: true
            }}
            onPageChange={setCurrentPage}
            onPageSizeChange={setPageSize}
          />
        </div>
      </section>

      {/* Table with Selection */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Table with Row Selection</h2>
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            Selected: {selectedRows.length} row{selectedRows.length !== 1 ? 's' : ''}
          </p>
        </div>
        <div className="bg-white rounded-lg border">
          <Table
            columns={columns.slice(0, 6)}
            data={sampleData.slice(0, 8)}
            sortable={true}
            sortBy={sortBy}
            sortDirection={sortDirection}
            onSort={handleSort}
            selection={{
              type: 'checkbox',
              selectedRows: selectedRows,
              onSelectionChange: handleSelectionChange
            }}
            exportable={true}
            onExport={handleExport}
          />
        </div>
      </section>

      {/* Table with Filtering */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Table with Filtering</h2>
        <div className="bg-white rounded-lg border">
          <Table
            columns={columns.slice(0, 5)}
            data={sampleData}
            sortable={true}
            sortBy={sortBy}
            sortDirection={sortDirection}
            onSort={handleSort}
            filterable={true}
            filterValue={filterValue}
            onFilterChange={setFilterValue}
            filterPlaceholder="Search employees..."
            pagination={{
              page: 1,
              pageSize: 8,
              total: sampleData.length
            }}
          />
        </div>
      </section>

      {/* Table Variants */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Table Variants</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-2">Striped Table</h3>
            <div className="bg-white rounded-lg border">
              <Table
                columns={columns.slice(0, 4)}
                data={sampleData.slice(0, 4)}
                variant="striped"
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Bordered Table</h3>
            <div className="bg-white rounded-lg border">
              <Table
                columns={columns.slice(0, 4)}
                data={sampleData.slice(0, 4)}
                variant="bordered"
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Hover Table</h3>
            <div className="bg-white rounded-lg border">
              <Table
                columns={columns.slice(0, 4)}
                data={sampleData.slice(0, 4)}
                variant="hover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Table Sizes */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Table Sizes</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-2">Small Size</h3>
            <div className="bg-white rounded-lg border">
              <Table
                columns={columns.slice(0, 3)}
                data={sampleData.slice(0, 3)}
                size="sm"
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Large Size</h3>
            <div className="bg-white rounded-lg border">
              <Table
                columns={columns.slice(0, 3)}
                data={sampleData.slice(0, 3)}
                size="lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Empty State */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Empty State</h2>
        <div className="bg-white rounded-lg border">
          <Table
            columns={columns.slice(0, 4)}
            data={[]}
            emptyMessage="No employees found"
          />
        </div>
      </section>

      {/* Loading State */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Loading State</h2>
        <div className="bg-white rounded-lg border">
          <Table
            columns={columns.slice(0, 4)}
            data={sampleData.slice(0, 3)}
            loading={true}
            loadingMessage="Loading employee data..."
          />
        </div>
      </section>

      {/* Usage Examples */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Usage Examples</h2>
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-medium mb-4">Basic Implementation</h3>
          <pre className="bg-white rounded border p-4 text-sm overflow-x-auto">
            <code>{`import { Table } from 'design-system-cria';

const columns = [
  { key: 'id', label: 'ID', sortable: true },
  { key: 'name', label: 'Name', sortable: true },
  { key: 'email', label: 'Email' },
  { key: 'status', label: 'Status' }
];

const data = [
  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' }
];

function MyTable() {
  const [sortBy, setSortBy] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortDirection('asc');
    }
  };

  return (
    <Table
      columns={columns}
      data={data}
      sortable={true}
      sortBy={sortBy}
      sortDirection={sortDirection}
      onSort={handleSort}
      pagination={{
        page: 1,
        pageSize: 10,
        total: data.length
      }}
    />
  );
}`}</code>
          </pre>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mt-4">
          <h3 className="text-lg font-medium mb-4">With Selection and Export</h3>
          <pre className="bg-white rounded border p-4 text-sm overflow-x-auto">
            <code>{`const [selectedRows, setSelectedRows] = useState([]);

<Table
  columns={columns}
  data={data}
  selection={{
    type: 'checkbox',
    selectedRows: selectedRows,
    onSelectionChange: setSelectedRows
  }}
  exportable={true}
  onExport={(format) => {
    console.log(\`Exporting \${format} with \${selectedRows.length} rows\`);
  }}
  filterable={true}
  filterValue={filterValue}
  onFilterChange={setFilterValue}
/>`}</code>
          </pre>
        </div>
      </section>

      {/* Props Documentation */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Props</h2>
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Prop
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Default
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    columns
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Column[]
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    -
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Array of column definitions
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    data
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    any[]
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    []
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Array of data objects
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    variant
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    'default' | 'striped' | 'bordered' | 'hover'
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    'default'
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Visual style variant
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    size
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    'sm' | 'md' | 'lg'
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    'md'
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Size of the table
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    sortable
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    boolean
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    true
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Enable column sorting
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    pagination
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    PaginationConfig
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    -
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Pagination configuration
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    selection
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    SelectionConfig
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    -
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Row selection configuration
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    filterable
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    boolean
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    false
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Enable data filtering
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    loading
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    boolean
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    false
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Show loading state
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TableDemo;
