import React, { useState } from 'react';
import { Typography } from '../Typography';
import { Pagination } from './index';
import { Card, CardContent, CardHeader } from '../Card';
import { List, Database, FileText, Users, Package } from 'phosphor-react';

export const PaginationDemo: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [compactPage, setCompactPage] = useState(1);
  const [minimalPage, setMinimalPage] = useState(1);
  const [largePage, setLargePage] = useState(1);
  const [pageWithSize, setPageWithSize] = useState(1);
  const [pageWithInfo, setPageWithInfo] = useState(1);

  const totalPages = 10;
  const totalItems = 250;

  return (
    <div className="pagination-demo">
      <Typography variant="h2" className="demo-title">
        Pagination Component
      </Typography>
      
      <Typography variant="body" className="demo-description">
        Navigate through paged content with accessible pagination controls.
      </Typography>

      {/* Basic Pagination */}
      <Card className="demo-section">
        <CardHeader>
          <Typography variant="h3">Basic Pagination</Typography>
        </CardHeader>
        <CardContent>
          <Typography variant="body" className="demo-description">
            Standard pagination with previous/next buttons and numbered pages.
          </Typography>
          
          <div className="demo-content">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
            
            <div className="demo-info">
              <Typography variant="caption">
                Current page: {currentPage} of {totalPages}
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Compact Pagination */}
      <Card className="demo-section">
        <CardHeader>
          <Typography variant="h3">Compact Pagination</Typography>
        </CardHeader>
        <CardContent>
          <Typography variant="body" className="demo-description">
            Compact variant with reduced spacing for tight layouts.
          </Typography>
          
          <div className="demo-content">
            <Pagination
              currentPage={compactPage}
              totalPages={totalPages}
              onPageChange={setCompactPage}
              variant="compact"
            />
            
            <div className="demo-info">
              <Typography variant="caption">
                Compact variant with reduced padding and spacing
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Minimal Pagination */}
      <Card className="demo-section">
        <CardHeader>
          <Typography variant="h3">Minimal Pagination</Typography>
        </CardHeader>
        <CardContent>
          <Typography variant="body" className="demo-description">
            Minimal variant showing only page numbers and navigation arrows.
          </Typography>
          
          <div className="demo-content">
            <Pagination
              currentPage={minimalPage}
              totalPages={totalPages}
              onPageChange={setMinimalPage}
              variant="minimal"
            />
            
            <div className="demo-info">
              <Typography variant="caption">
                Minimal variant with icons only
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Large Page Count */}
      <Card className="demo-section">
        <CardHeader>
          <Typography variant="h3">Large Page Count</Typography>
        </CardHeader>
        <CardContent>
          <Typography variant="body" className="demo-description">
            Pagination with many pages showing ellipsis for efficient navigation.
          </Typography>
          
          <div className="demo-content">
            <Pagination
              currentPage={largePage}
              totalPages={50}
              onPageChange={setLargePage}
              siblingCount={2}
            />
            
            <div className="demo-info">
              <Typography variant="caption">
                Large page count with ellipsis (Page {largePage} of 50)
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* With Page Size Selector */}
      <Card className="demo-section">
        <CardHeader>
          <Typography variant="h3">With Page Size Selector</Typography>
        </CardHeader>
        <CardContent>
          <Typography variant="body" className="demo-description">
            Pagination with page size selector to control items per page.
          </Typography>
          
          <div className="demo-content">
            <Pagination
              currentPage={pageWithSize}
              totalPages={Math.ceil(totalItems / pageSize)}
              onPageChange={setPageWithSize}
              showPageSize
              pageSize={pageSize}
              pageSizeOptions={[5, 10, 20, 50, 100]}
              onPageSizeChange={(newSize) => {
                setPageSize(newSize);
                setPageWithSize(1); // Reset to first page when size changes
              }}
            />
            
            <div className="demo-info">
              <Typography variant="caption">
                Page {pageWithSize} of {Math.ceil(totalItems / pageSize)} with {pageSize} items per page
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* With Page Info */}
      <Card className="demo-section">
        <CardHeader>
          <Typography variant="h3">With Page Information</Typography>
        </CardHeader>
        <CardContent>
          <Typography variant="body" className="demo-description">
            Pagination showing detailed information about current page and total items.
          </Typography>
          
          <div className="demo-content">
            <Pagination
              currentPage={pageWithInfo}
              totalPages={Math.ceil(totalItems / 10)}
              onPageChange={setPageWithInfo}
              showPageInfo
              totalItems={totalItems}
              pageSize={10}
            />
            
            <div className="demo-info">
              <Typography variant="caption">
                Shows "Showing X-Y of Z" information
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* With First/Last Buttons */}
      <Card className="demo-section">
        <CardHeader>
          <Typography variant="h3">With First/Last Buttons</Typography>
        </CardHeader>
        <CardContent>
          <Typography variant="body" className="demo-description">
            Pagination with first and last page buttons for quick navigation.
          </Typography>
          
          <div className="demo-content">
            <Pagination
              currentPage={currentPage}
              totalPages={20}
              onPageChange={setCurrentPage}
              showFirstLast
              firstLabel="First"
              lastLabel="Last"
            />
            
            <div className="demo-info">
              <Typography variant="caption">
                Includes first and last page navigation buttons
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Edge Cases */}
      <Card className="demo-section">
        <CardHeader>
          <Typography variant="h3">Edge Cases</Typography>
        </CardHeader>
        <CardContent>
          <Typography variant="body" className="demo-description">
            Handling edge cases like single page, two pages, and disabled states.
          </Typography>
          
          <div className="demo-content">
            <div className="demo-grid">
              <div className="demo-item">
                <Typography variant="h4">Single Page</Typography>
                <Pagination
                  currentPage={1}
                  totalPages={1}
                  onPageChange={() => {}}
                />
              </div>
              
              <div className="demo-item">
                <Typography variant="h4">Two Pages</Typography>
                <Pagination
                  currentPage={1}
                  totalPages={2}
                  onPageChange={() => {}}
                />
              </div>
              
              <div className="demo-item">
                <Typography variant="h4">First Page</Typography>
                <Pagination
                  currentPage={1}
                  totalPages={10}
                  onPageChange={() => {}}
                />
              </div>
              
              <div className="demo-item">
                <Typography variant="h4">Last Page</Typography>
                <Pagination
                  currentPage={10}
                  totalPages={10}
                  onPageChange={() => {}}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Usage Examples */}
      <Card className="demo-section">
        <CardHeader>
          <Typography variant="h3">Usage Examples</Typography>
        </CardHeader>
        <CardContent>
          <Typography variant="body" className="demo-description">
            Real-world examples of pagination in different contexts.
          </Typography>
          
          <div className="demo-content">
            <div className="usage-examples">
              <div className="usage-example">
                <div className="usage-header">
                  <Database size={20} />
                  <Typography variant="h4">Data Table</Typography>
                </div>
                <Typography variant="caption">
                  Navigate through large datasets with page size control
                </Typography>
                <Pagination
                  currentPage={1}
                  totalPages={25}
                  onPageChange={() => {}}
                  showPageSize
                  pageSize={20}
                  pageSizeOptions={[10, 20, 50, 100]}
                  onPageSizeChange={() => {}}
                  showPageInfo
                  totalItems={500}
                />
              </div>
              
              <div className="usage-example">
                <div className="usage-header">
                  <FileText size={20} />
                  <Typography variant="h4">Document List</Typography>
                </div>
                <Typography variant="caption">
                  Browse through documents with compact pagination
                </Typography>
                <Pagination
                  currentPage={5}
                  totalPages={15}
                  onPageChange={() => {}}
                  variant="compact"
                />
              </div>
              
              <div className="usage-example">
                <div className="usage-header">
                  <Users size={20} />
                  <Typography variant="h4">User Directory</Typography>
                </div>
                <Typography variant="caption">
                  Navigate user profiles with minimal pagination
                </Typography>
                <Pagination
                  currentPage={8}
                  totalPages={30}
                  onPageChange={() => {}}
                  variant="minimal"
                />
              </div>
              
              <div className="usage-example">
                <div className="usage-header">
                  <Package size={20} />
                  <Typography variant="h4">Product Catalog</Typography>
                </div>
                <Typography variant="caption">
                  Browse products with full pagination controls
                </Typography>
                <Pagination
                  currentPage={3}
                  totalPages={12}
                  onPageChange={() => {}}
                  showFirstLast
                  showPageSize
                  pageSize={12}
                  pageSizeOptions={[12, 24, 48]}
                  onPageSizeChange={() => {}}
                  showPageInfo
                  totalItems={144}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Accessibility Features */}
      <Card className="demo-section">
        <CardHeader>
          <Typography variant="h3">Accessibility Features</Typography>
        </CardHeader>
        <CardContent>
          <div className="demo-content">
            <div className="accessibility-features">
              <div className="feature">
                <Typography variant="h4">Keyboard Navigation</Typography>
                <Typography variant="body">
                  Use Tab to navigate between pagination controls. Press Enter or Space to activate buttons.
                </Typography>
              </div>
              
              <div className="feature">
                <Typography variant="h4">Screen Reader Support</Typography>
                <Typography variant="body">
                  Current page is announced with aria-current="page" and descriptive labels for all buttons.
                </Typography>
              </div>
              
              <div className="feature">
                <Typography variant="h4">ARIA Labels</Typography>
                <Typography variant="body">
                  All pagination controls have proper ARIA labels and roles for assistive technologies.
                </Typography>
              </div>
              
              <div className="feature">
                <Typography variant="h4">Focus Management</Typography>
                <Typography variant="body">
                  Disabled buttons are properly marked with aria-disabled and excluded from tab order.
                </Typography>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaginationDemo;
