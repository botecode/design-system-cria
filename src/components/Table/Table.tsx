import React, { useState, useMemo, useCallback } from 'react';
import { CaretUp, CaretDown, CaretUpDown, MagnifyingGlass, Funnel, Download, DotsThree } from 'phosphor-react';
import { colors } from '../../tokens/colors';
import { spacing } from '../../tokens/spacing';
import { radii } from '../../tokens/radii';
import { shadows } from '../../tokens/shadows';

export interface TableColumn<T = any> {
  key: string;
  label: string;
  sortable?: boolean;
  width?: string | number;
  align?: 'left' | 'center' | 'right';
  render?: (value: any, row: T, index: number) => React.ReactNode;
  className?: string;
  headerClassName?: string;
}

export interface TablePagination {
  page: number;
  pageSize: number;
  total: number;
  showSizeChanger?: boolean;
  pageSizeOptions?: number[];
  showQuickJumper?: boolean;
}

export interface TableSelection {
  type: 'checkbox' | 'radio';
  selectedRowKeys?: (string | number)[];
  selectedRows?: any[];
  onSelectionChange?: (selectedRows: any[]) => void;
}

export interface TableRowAction<T = any> {
  label: string;
  onClick: (row: T, index: number) => void;
  icon?: React.ReactNode;
  disabled?: (row: T) => boolean;
  className?: string;
}

export type SortDirection = 'asc' | 'desc';

export interface TableProps<T = any> extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Array of column definitions
   */
  columns: TableColumn<T>[];
  /**
   * Array of data objects to display
   */
  data: T[];
  /**
   * The variant of the table
   * @default 'default'
   */
  variant?: 'default' | 'striped' | 'bordered' | 'hover';
  /**
   * The size of the table
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Whether the table is sortable
   * @default true
   */
  sortable?: boolean;
  /**
   * Current sort column key
   */
  sortBy?: string;
  /**
   * Current sort direction
   */
  sortDirection?: SortDirection;
  /**
   * Callback when sort changes
   */
  onSort?: (columnKey: string, direction: SortDirection) => void;
  /**
   * Pagination configuration
   */
  pagination?: TablePagination;
  /**
   * Callback when page changes
   */
  onPageChange?: (page: number) => void;
  /**
   * Callback when page size changes
   */
  onPageSizeChange?: (pageSize: number) => void;
  /**
   * Row selection configuration
   */
  selection?: TableSelection;
  /**
   * Callback when selection changes
   */
  onSelectionChange?: (selectedRows: any[]) => void;
  /**
   * Whether the table is filterable
   * @default false
   */
  filterable?: boolean;
  /**
   * Current filter value
   */
  filterValue?: string;
  /**
   * Callback when filter changes
   */
  onFilterChange?: (value: string) => void;
  /**
   * Filter placeholder text
   */
  filterPlaceholder?: string;
  /**
   * Whether the table is in loading state
   * @default false
   */
  loading?: boolean;
  /**
   * Loading message
   */
  loadingMessage?: string;
  /**
   * Empty state message
   */
  emptyMessage?: string;
  /**
   * Custom empty state component
   */
  emptyComponent?: React.ReactNode;
  /**
   * Row actions configuration
   */
  rowActions?: (row: T, index: number) => TableRowAction<T>[];
  /**
   * Callback when row action is clicked
   */
  onRowAction?: (action: string, row: T, index: number) => void;
  /**
   * Custom header content
   */
  header?: React.ReactNode;
  /**
   * Custom footer content
   */
  footer?: React.ReactNode;
  /**
   * Whether to show export functionality
   * @default false
   */
  exportable?: boolean;
  /**
   * Callback when export is triggered
   */
  onExport?: (format: 'csv' | 'excel' | 'pdf') => void;
  /**
   * Row key field name
   * @default 'id'
   */
  rowKey?: string | ((row: T, index: number) => string | number);
  /**
   * Whether rows are clickable
   * @default false
   */
  rowClickable?: boolean;
  /**
   * Callback when row is clicked
   */
  onRowClick?: (row: T, index: number) => void;
  /**
   * Custom row className
   */
  rowClassName?: (row: T, index: number) => string;
  /**
   * Custom class name for the table
   */
  className?: string;
  /**
   * Custom style for the table
   */
  style?: React.CSSProperties;
}

export const Table = <T extends Record<string, any>>({
  columns,
  data,
  variant = 'default',
  size = 'md',
  sortable = true,
  sortBy,
  sortDirection,
  onSort,
  pagination,
  onPageChange,
  onPageSizeChange,
  selection,
  onSelectionChange,
  filterable = false,
  filterValue,
  onFilterChange,
  filterPlaceholder = 'Filter...',
  loading = false,
  loadingMessage = 'Loading...',
  emptyMessage = 'No data available',
  emptyComponent,
  rowActions,
  onRowAction,
  header,
  footer,
  exportable = false,
  onExport,
  rowKey = 'id',
  rowClickable = false,
  onRowClick,
  rowClassName,
  className = '',
  style = {},
  ...props
}: TableProps<T>) => {
  const [internalFilter, setInternalFilter] = useState(filterValue || '');
  const [showRowActions, setShowRowActions] = useState<Record<string, boolean>>({});

  // Get row key
  const getRowKey = useCallback((row: T, index: number): string | number => {
    if (typeof rowKey === 'function') {
      return rowKey(row, index);
    }
    return row[rowKey] || index;
  }, [rowKey]);

  // Filter data
  const filteredData = useMemo(() => {
    if (!data || !Array.isArray(data)) {
      return [];
    }

    if (!filterable || (!internalFilter && !filterValue)) {
      return data;
    }

    const filter = filterValue || internalFilter;
    return data.filter(row =>
      columns.some(column => {
        const value = row[column.key];
        return value && value.toString().toLowerCase().includes(filter.toLowerCase());
      })
    );
  }, [data, columns, filterable, internalFilter, filterValue]);

  // Sort data
  const sortedData = useMemo(() => {
    if (!sortBy || !sortDirection) {
      return filteredData;
    }

    return [...filteredData].sort((a, b) => {
      const aValue = a[sortBy];
      const bValue = b[sortBy];

      if (aValue === bValue) return 0;

      const comparison = aValue < bValue ? -1 : 1;
      return sortDirection === 'asc' ? comparison : -comparison;
    });
  }, [filteredData, sortBy, sortDirection]);

  // Paginate data
  const paginatedData = useMemo(() => {
    if (!pagination) {
      return sortedData;
    }

    const startIndex = (pagination.page - 1) * pagination.pageSize;
    const endIndex = startIndex + pagination.pageSize;
    return sortedData.slice(startIndex, endIndex);
  }, [sortedData, pagination]);

  // Handle sort
  const handleSort = useCallback((columnKey: string) => {
    if (!onSort) return;

    const column = columns.find(col => col.key === columnKey);
    if (!column || !column.sortable) return;

    let newDirection: SortDirection = 'asc';
    if (sortBy === columnKey && sortDirection === 'asc') {
      newDirection = 'desc';
    }

    onSort(columnKey, newDirection);
  }, [columns, sortBy, sortDirection, onSort]);

  // Handle selection
  const handleRowSelect = useCallback((row: T, checked: boolean) => {
    if (!selection || !onSelectionChange) return;

    const currentSelection = selection.selectedRows || [];
    let newSelection: T[];

    if (checked) {
      newSelection = [...currentSelection, row];
    } else {
      newSelection = currentSelection.filter(selectedRow => 
        getRowKey(selectedRow, 0) !== getRowKey(row, 0)
      );
    }

    onSelectionChange(newSelection);
  }, [selection, onSelectionChange, getRowKey]);

  const handleSelectAll = useCallback((checked: boolean) => {
    if (!selection || !onSelectionChange) return;

    onSelectionChange(checked ? paginatedData : []);
  }, [selection, onSelectionChange, paginatedData]);

  // Handle filter
  const handleFilterChange = useCallback((value: string) => {
    setInternalFilter(value);
    onFilterChange?.(value);
  }, [onFilterChange]);

  // Handle row click
  const handleRowClick = useCallback((row: T, index: number) => {
    if (rowClickable && onRowClick) {
      onRowClick(row, index);
    }
  }, [rowClickable, onRowClick]);

  // Handle row action
  const handleRowActionClick = useCallback((action: TableRowAction<T>, row: T, index: number) => {
    action.onClick(row, index);
    onRowAction?.(action.label, row, index);
    setShowRowActions(prev => ({ ...prev, [getRowKey(row, index)]: false }));
  }, [onRowAction, getRowKey]);

  // Render sort icon
  const renderSortIcon = useCallback((columnKey: string) => {
    if (!sortable) return null;

    if (sortBy === columnKey) {
      return sortDirection === 'asc' ? 
        <CaretUp size={16} /> : 
        <CaretDown size={16} />;
    }

    return <CaretUpDown size={16} />;
  }, [sortable, sortBy, sortDirection]);

  // Render pagination
  const renderPagination = useCallback(() => {
    if (!pagination) return null;

    const totalPages = Math.ceil(pagination.total / pagination.pageSize);
    const pageSizeOptions = pagination.pageSizeOptions || [10, 20, 50, 100];

    return (
      <div className="cria-table__pagination">
        <div className="cria-table__pagination-info">
          <span>
            Page {pagination.page} of {totalPages}
          </span>
          <span>
            Showing {((pagination.page - 1) * pagination.pageSize) + 1} to{' '}
            {Math.min(pagination.page * pagination.pageSize, pagination.total)} of{' '}
            {pagination.total} entries
          </span>
        </div>
        
        <div className="cria-table__pagination-controls">
          {pagination.showSizeChanger && (
            <select
              value={pagination.pageSize}
              onChange={(e) => onPageSizeChange?.(Number(e.target.value))}
              className="cria-table__page-size-select"
            >
              {pageSizeOptions.map(size => (
                <option key={size} value={size}>{size} per page</option>
              ))}
            </select>
          )}
          
          <div className="cria-table__page-buttons">
            <button
              disabled={pagination.page <= 1}
              onClick={() => onPageChange?.(pagination.page - 1)}
              className="cria-table__page-button"
            >
              Previous
            </button>
            
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              const page = pagination.page <= 3 ? i + 1 : pagination.page - 2 + i;
              if (page > totalPages) return null;
              
              return (
                <button
                  key={page}
                  onClick={() => onPageChange?.(page)}
                  className={`cria-table__page-button ${
                    page === pagination.page ? 'cria-table__page-button--active' : ''
                  }`}
                >
                  {page}
                </button>
              );
            })}
            
            <button
              disabled={pagination.page >= totalPages}
              onClick={() => onPageChange?.(pagination.page + 1)}
              className="cria-table__page-button"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }, [pagination, onPageChange, onPageSizeChange]);

  const classes = [
    'cria-table',
    `cria-table--${variant}`,
    `cria-table--size-${size}`,
    loading && 'cria-table--loading',
    className,
  ].filter(Boolean).join(' ');

  if (loading) {
    return (
      <div className={classes} style={style} {...props}>
        <div className="cria-table__loading">
          <div className="cria-table__spinner"></div>
          <span>{loadingMessage}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={classes} style={style}>
      {header && (
        <div className="cria-table__header">
          {header}
        </div>
      )}

      <div className="cria-table__toolbar">
        {filterable && (
          <div className="cria-table__filter">
            <MagnifyingGlass size={16} />
            <input
              type="text"
              placeholder={filterPlaceholder}
              value={filterValue || internalFilter}
              onChange={(e) => handleFilterChange(e.target.value)}
              className="cria-table__filter-input"
            />
          </div>
        )}
        
        {exportable && (
          <div className="cria-table__export">
            <button
              onClick={() => onExport?.('csv')}
              className="cria-table__export-button"
            >
              <Download size={16} />
              Export CSV
            </button>
          </div>
        )}
      </div>

      <div className="cria-table__container">
        <table className="cria-table__table" role="table" tabIndex={0} {...props}>
          <thead className="cria-table__thead">
            <tr className="cria-table__tr">
              {selection && selection.type === 'checkbox' && (
                <th className="cria-table__th">
                  <input
                    type="checkbox"
                    checked={paginatedData.length > 0 && paginatedData.every(row => 
                      selection.selectedRows?.some(selected => 
                        getRowKey(selected, 0) === getRowKey(row, 0)
                      )
                    )}
                    onChange={(e) => handleSelectAll(e.target.checked)}
                    aria-label="Select all rows"
                  />
                </th>
              )}
              
              {columns.map(column => (
                <th
                  key={column.key}
                  className={`cria-table__th ${column.headerClassName || ''}`}
                  style={{ 
                    width: column.width,
                    textAlign: column.align || 'left'
                  }}
                >
                  <div
                    className={`cria-table__header-cell ${
                      column.sortable && sortable ? 'cria-table__header-cell--sortable' : ''
                    }`}
                    onClick={() => column.sortable && handleSort(column.key)}
                    aria-sort={
                      sortBy === column.key ? 
                      (sortDirection === 'asc' ? 'ascending' : 'descending') : 
                      'none'
                    }
                  >
                    <span>{column.label}</span>
                    {renderSortIcon(column.key)}
                  </div>
                </th>
              ))}
              
              {rowActions && (
                <th className="cria-table__th cria-table__th--actions">
                  Actions
                </th>
              )}
            </tr>
          </thead>
          
          <tbody className="cria-table__tbody">
            {paginatedData.length === 0 ? (
              <tr className="cria-table__tr">
                <td 
                  className="cria-table__td cria-table__td--empty" 
                  colSpan={columns.length + (selection ? 1 : 0) + (rowActions ? 1 : 0)}
                >
                  {emptyComponent || (
                    <div className="cria-table__empty">
                      <span>{emptyMessage}</span>
                    </div>
                  )}
                </td>
              </tr>
            ) : (
              paginatedData.map((row, index) => {
                const key = getRowKey(row, index);
                const isSelected = selection?.selectedRows?.some(selected => 
                  getRowKey(selected, 0) === key
                );
                
                return (
                  <tr
                    key={key}
                    className={`cria-table__tr ${
                      rowClassName ? rowClassName(row, index) : ''
                    } ${rowClickable ? 'cria-table__tr--clickable' : ''} ${
                      isSelected ? 'cria-table__tr--selected' : ''
                    }`}
                    onClick={() => handleRowClick(row, index)}
                  >
                    {selection && selection.type === 'checkbox' && (
                      <td className="cria-table__td">
                        <input
                          type="checkbox"
                          checked={!!isSelected}
                          onChange={(e) => handleRowSelect(row, e.target.checked)}
                          aria-label={`Select row ${index + 1}`}
                        />
                      </td>
                    )}
                    
                    {selection && selection.type === 'radio' && (
                      <td className="cria-table__td">
                        <input
                          type="radio"
                          name="table-selection"
                          checked={!!isSelected}
                          onChange={() => onSelectionChange?.([row])}
                          aria-label={`Select row ${index + 1}`}
                        />
                      </td>
                    )}
                    
                    {columns.map(column => (
                      <td
                        key={column.key}
                        className={`cria-table__td ${column.className || ''}`}
                        style={{ textAlign: column.align || 'left' }}
                      >
                        {column.render ? 
                          column.render(row[column.key], row, index) : 
                          row[column.key]
                        }
                      </td>
                    ))}
                    
                    {rowActions && (
                      <td className="cria-table__td cria-table__td--actions">
                        <div className="cria-table__row-actions">
                          <button
                            className="cria-table__row-actions-button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setShowRowActions(prev => ({ 
                                ...prev, 
                                [key]: !prev[key] 
                              }));
                            }}
                            aria-label={`Actions for row ${index + 1}`}
                          >
                            <DotsThree size={16} />
                          </button>
                          
                          {showRowActions[key] && (
                            <div className="cria-table__row-actions-menu">
                              {rowActions(row, index).map((action, actionIndex) => (
                                <button
                                  key={actionIndex}
                                  className={`cria-table__row-action ${
                                    action.className || ''
                                  }`}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleRowActionClick(action, row, index);
                                  }}
                                  disabled={action.disabled?.(row)}
                                >
                                  {action.icon}
                                  {action.label}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      </td>
                    )}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {renderPagination()}

      {footer && (
        <div className="cria-table__footer">
          {footer}
        </div>
      )}
    </div>
  );
};
