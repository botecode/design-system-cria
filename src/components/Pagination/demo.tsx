import React, { useState } from 'react';
import { CriaTextHeadline1, CriaTextHeadline2, CriaTextBody1, CriaTextBody2, CriaTextTitle1, CriaTextTitle2 } from '../TextTokens';
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
      <CriaTextHeadline1 className="demo-title">
        Pagination Component
      </CriaTextHeadline1>
      
      <CriaTextBody1 className="demo-description">
        Navigate through paged content with accessible pagination controls.
      </CriaTextBody1>

      {/* Basic Pagination */}
      <Card className="demo-section">
        <CardHeader>
          <CriaTextTitle1>Basic Pagination</CriaTextTitle1>
        </CardHeader>
        <CardContent>
          <CriaTextBody1 className="demo-description">
            Standard pagination with previous/next buttons and numbered pages.
          </CriaTextBody1>
          
          <div className="demo-content">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
            
            <div className="demo-info">
              <CriaTextBody2>
                Current page: {currentPage} of {totalPages}
              </CriaTextBody2>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Compact Pagination */}
      <Card className="demo-section">
        <CardHeader>
          <CriaTextTitle1>Compact Pagination</CriaTextTitle1>
        </CardHeader>
        <CardContent>
          <CriaTextBody1 className="demo-description">
            Compact variant with reduced spacing for tight layouts.
          </CriaTextBody1>
          
          <div className="demo-content">
            <Pagination
              currentPage={compactPage}
              totalPages={totalPages}
              onPageChange={setCompactPage}
              variant="compact"
            />
            
            <div className="demo-info">
              <CriaTextBody2>
                Compact variant with reduced padding and spacing
              </CriaTextBody2>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Minimal Pagination */}
      <Card className="demo-section">
        <CardHeader>
          <CriaTextTitle1>Minimal Pagination</CriaTextTitle1>
        </CardHeader>
        <CardContent>
          <CriaTextBody1 className="demo-description">
            Minimal variant showing only page numbers and navigation arrows.
          </CriaTextBody1>
          
          <div className="demo-content">
            <Pagination
              currentPage={minimalPage}
              totalPages={totalPages}
              onPageChange={setMinimalPage}
              variant="minimal"
            />
            
            <div className="demo-info">
              <CriaTextBody2>
                Minimal variant with icons only
              </CriaTextBody2>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Large Page Count */}
      <Card className="demo-section">
        <CardHeader>
          <CriaTextTitle1>Large Page Count</CriaTextTitle1>
        </CardHeader>
        <CardContent>
          <CriaTextBody1 className="demo-description">
            Pagination with many pages showing ellipsis for efficient navigation.
          </CriaTextBody1>
          
          <div className="demo-content">
            <Pagination
              currentPage={largePage}
              totalPages={50}
              onPageChange={setLargePage}
              siblingCount={2}
            />
            
            <div className="demo-info">
              <CriaTextBody2>
                Large page count with ellipsis (Page {largePage} of 50)
              </CriaTextBody2>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* With Page Size Selector */}
      <Card className="demo-section">
        <CardHeader>
          <CriaTextTitle1>With Page Size Selector</CriaTextTitle1>
        </CardHeader>
        <CardContent>
          <CriaTextBody1 className="demo-description">
            Pagination with page size selector to control items per page.
          </CriaTextBody1>
          
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
              <CriaTextBody2>
                Page {pageWithSize} of {Math.ceil(totalItems / pageSize)} with {pageSize} items per page
              </CriaTextBody2>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* With Page Info */}
      <Card className="demo-section">
        <CardHeader>
          <CriaTextTitle1>With Page Information</CriaTextTitle1>
        </CardHeader>
        <CardContent>
          <CriaTextBody1 className="demo-description">
            Pagination showing detailed information about current page and total items.
          </CriaTextBody1>
          
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
              <CriaTextBody2>
                Shows "Showing X-Y of Z" information
              </CriaTextBody2>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* With First/Last Buttons */}
      <Card className="demo-section">
        <CardHeader>
          <CriaTextTitle1>With First/Last Buttons</CriaTextTitle1>
        </CardHeader>
        <CardContent>
          <CriaTextBody1 className="demo-description">
            Pagination with first and last page buttons for quick navigation.
          </CriaTextBody1>
          
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
              <CriaTextBody2>
                Includes first and last page navigation buttons
              </CriaTextBody2>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Edge Cases */}
      <Card className="demo-section">
        <CardHeader>
          <CriaTextTitle1>Edge Cases</CriaTextTitle1>
        </CardHeader>
        <CardContent>
          <CriaTextBody1 className="demo-description">
            Handling edge cases like single page, two pages, and disabled states.
          </CriaTextBody1>
          
          <div className="demo-content">
            <div className="demo-grid">
              <div className="demo-item">
                <CriaTextTitle2>Single Page</CriaTextTitle2>
                <Pagination
                  currentPage={1}
                  totalPages={1}
                  onPageChange={() => {}}
                />
              </div>
              
              <div className="demo-item">
                <CriaTextTitle2>Two Pages</CriaTextTitle2>
                <Pagination
                  currentPage={1}
                  totalPages={2}
                  onPageChange={() => {}}
                />
              </div>
              
              <div className="demo-item">
                <CriaTextTitle2>First Page</CriaTextTitle2>
                <Pagination
                  currentPage={1}
                  totalPages={10}
                  onPageChange={() => {}}
                />
              </div>
              
              <div className="demo-item">
                <CriaTextTitle2>Last Page</CriaTextTitle2>
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
          <CriaTextTitle1>Usage Examples</CriaTextTitle1>
        </CardHeader>
        <CardContent>
          <CriaTextBody1 className="demo-description">
            Real-world examples of pagination in different contexts.
          </CriaTextBody1>
          
          <div className="demo-content">
            <div className="usage-examples">
              <div className="usage-example">
                <div className="usage-header">
                  <Database size={20} />
                  <CriaTextTitle2>Data Table</CriaTextTitle2>
                </div>
                <CriaTextBody2>
                  Navigate through large datasets with page size control
                </CriaTextBody2>
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
                  <CriaTextTitle2>Document List</CriaTextTitle2>
                </div>
                <CriaTextBody2>
                  Browse through documents with compact pagination
                </CriaTextBody2>
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
                  <CriaTextTitle2>User Directory</CriaTextTitle2>
                </div>
                <CriaTextBody2>
                  Navigate user profiles with minimal pagination
                </CriaTextBody2>
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
                  <CriaTextTitle2>Product Catalog</CriaTextTitle2>
                </div>
                <CriaTextBody2>
                  Browse products with full pagination controls
                </CriaTextBody2>
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
          <CriaTextTitle1>Accessibility Features</CriaTextTitle1>
        </CardHeader>
        <CardContent>
          <div className="demo-content">
            <div className="accessibility-features">
              <div className="feature">
                <CriaTextTitle2>Keyboard Navigation</CriaTextTitle2>
                <CriaTextBody1>
                  Use Tab to navigate between pagination controls. Press Enter or Space to activate buttons.
                </CriaTextBody1>
              </div>
              
              <div className="feature">
                <CriaTextTitle2>Screen Reader Support</CriaTextTitle2>
                <CriaTextBody1>
                  Current page is announced with aria-current="page" and descriptive labels for all buttons.
                </CriaTextBody1>
              </div>
              
              <div className="feature">
                <CriaTextTitle2>ARIA Labels</CriaTextTitle2>
                <CriaTextBody1>
                  All pagination controls have proper ARIA labels and roles for assistive technologies.
                </CriaTextBody1>
              </div>
              
              <div className="feature">
                <CriaTextTitle2>Focus Management</CriaTextTitle2>
                <CriaTextBody1>
                  Disabled buttons are properly marked with aria-disabled and excluded from tab order.
                </CriaTextBody1>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaginationDemo;
