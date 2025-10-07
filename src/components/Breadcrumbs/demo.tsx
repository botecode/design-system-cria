import React, { useState } from 'react';
import { CriaTextHeadline1, CriaTextHeadline2, CriaTextBody1, CriaTextBody2, CriaTextTitle1 } from '../TextTokens';
import { Breadcrumbs } from './index';
import { Card, CardContent, CardHeader } from '../Card';
import { House, Folder, ShoppingCart, Package, ArrowRight, CaretRight } from 'phosphor-react';
import { spacing, colors, radii } from '../../tokens';

export const BreadcrumbsDemo: React.FC = () => {
  const [selectedPath, setSelectedPath] = useState<string | null>(null);

  const basicItems = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Electronics', href: '/products/electronics' },
    { label: 'Laptops', href: '/products/electronics/laptops' },
  ];

  const ecommerceItems = [
    { label: 'Home', href: '/', icon: <House size={16} /> },
    { label: 'Electronics', href: '/electronics' },
    { label: 'Computers', href: '/electronics/computers' },
    { label: 'Laptops', href: '/electronics/computers/laptops' },
    { label: 'Gaming Laptops', href: '/electronics/computers/laptops/gaming' },
    { label: 'ASUS ROG Strix', href: '/electronics/computers/laptops/gaming/asus-rog-strix' },
  ];

  const fileSystemItems = [
    { label: 'Root', href: '/', icon: <Folder size={16} /> },
    { label: 'Users', href: '/users' },
    { label: 'john', href: '/users/john' },
    { label: 'Documents', href: '/users/john/documents' },
    { label: 'Projects', href: '/users/john/documents/projects' },
    { label: 'design-system', href: '/users/john/documents/projects/design-system' },
  ];

  const manyItems = Array.from({ length: 10 }, (_, i) => ({
    label: `Level ${i + 1}`,
    href: `/level${i + 1}`,
  }));

  const itemsWithDisabled = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Electronics', href: '/products/electronics', disabled: true },
    { label: 'Laptops', href: '/products/electronics/laptops' },
  ];

  const itemsWithClickHandlers = [
    { 
      label: 'Home', 
      href: '#', 
      onClick: () => setSelectedPath('Home') 
    },
    { 
      label: 'Products', 
      href: '#', 
      onClick: () => setSelectedPath('Products') 
    },
    { 
      label: 'Electronics', 
      href: '#', 
      onClick: () => setSelectedPath('Electronics') 
    },
    { 
      label: 'Laptops', 
      href: '#', 
      onClick: () => setSelectedPath('Laptops') 
    },
  ];

  return (
    <div style={{ padding: '0' }}>
      <CriaTextHeadline1 style={{ marginBottom: spacing[8] }}>
        Breadcrumbs Component
      </CriaTextHeadline1>

      <CriaTextBody1 style={{ marginBottom: spacing[8] }}>
        The Breadcrumbs component provides navigation context by showing the user's current location 
        within a hierarchical structure. It helps users understand where they are and provides 
        quick access to parent pages.
      </Typography>

      {/* Basic Examples */}
      <Card style={{ marginBottom: spacing[8] }}>
        <CardHeader>
          <CriaTextTitle1>Basic Examples</CriaTextTitle1>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[6] }}>
            {/* Default breadcrumbs */}
            <div>
              <CriaTextBody1 style={{ marginBottom: spacing[3] }}>
                Default Breadcrumbs
              </CriaTextBody1>
              <Breadcrumbs items={basicItems} />
            </div>

            {/* With icons */}
            <div>
              <CriaTextBody1 style={{ marginBottom: spacing[3] }}>
                With Icons
              </CriaTextBody1>
              <Breadcrumbs items={ecommerceItems} />
            </div>

            {/* Custom separator */}
            <div>
              <CriaTextBody1 style={{ marginBottom: spacing[3] }}>
                Custom Separator (Arrow)
              </CriaTextBody1>
              <Breadcrumbs items={basicItems} separator={<ArrowRight size={14} />} />
            </div>

            {/* Custom separator text */}
            <div>
              <CriaTextBody1 style={{ marginBottom: spacing[3] }}>
                Custom Separator (Text)
              </CriaTextBody1>
              <Breadcrumbs items={basicItems} separator="→" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Real-world Examples */}
      <Card style={{ marginBottom: spacing[8] }}>
        <CardHeader>
          <CriaTextTitle1>Real-world Examples</CriaTextTitle1>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[6] }}>
            {/* E-commerce */}
            <div>
              <CriaTextBody1 style={{ marginBottom: spacing[3] }}>
                E-commerce Navigation
              </CriaTextBody1>
              <Breadcrumbs items={ecommerceItems} separator={<CaretRight size={14} />} />
            </div>

            {/* File system */}
            <div>
              <CriaTextBody1 style={{ marginBottom: spacing[3] }}>
                File System Navigation
              </CriaTextBody1>
              <Breadcrumbs items={fileSystemItems} />
            </div>

            {/* Admin dashboard */}
            <div>
              <CriaTextBody1 style={{ marginBottom: spacing[3] }}>
                Admin Dashboard
              </CriaTextBody1>
              <Breadcrumbs 
                items={[
                  { label: 'Dashboard', href: '/admin', icon: <House size={16} /> },
                  { label: 'Users', href: '/admin/users' },
                  { label: 'User Management', href: '/admin/users/management' },
                  { label: 'Edit User', href: '/admin/users/management/edit/123' },
                ]} 
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Truncation */}
      <Card style={{ marginBottom: spacing[8] }}>
        <CardHeader>
          <CriaTextTitle1>Truncation</CriaTextTitle1>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[6] }}>
            <div>
              <CriaTextBody1 style={{ marginBottom: spacing[3] }}>
                Long Path (maxItems: 5)
              </CriaTextBody1>
              <Breadcrumbs items={manyItems} maxItems={5} />
            </div>

            <div>
              <CriaTextBody1 style={{ marginBottom: spacing[3] }}>
                Long Path (maxItems: 3)
              </CriaTextBody1>
              <Breadcrumbs items={manyItems} maxItems={3} />
            </div>

            <div>
              <CriaTextBody1 style={{ marginBottom: spacing[3] }}>
                Very Long Path (maxItems: 4) with Custom Separator
              </CriaTextBody1>
              <Breadcrumbs 
                items={manyItems} 
                maxItems={4} 
                separator={<CaretRight size={14} />} 
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* States */}
      <Card style={{ marginBottom: spacing[8] }}>
        <CardHeader>
          <CriaTextTitle1>States</CriaTextTitle1>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[6] }}>
            {/* Disabled items */}
            <div>
              <CriaTextBody1 style={{ marginBottom: spacing[3] }}>
                With Disabled Items
              </CriaTextBody1>
              <Breadcrumbs items={itemsWithDisabled} />
              <CriaTextBody2 style={{ marginTop: spacing[2], display: 'block' }}>
                The "Electronics" item is disabled and cannot be clicked
              </CriaTextBody2>
            </div>

            {/* Click handlers */}
            <div>
              <CriaTextBody1 style={{ marginBottom: spacing[3] }}>
                With Click Handlers
              </CriaTextBody1>
              <Breadcrumbs items={itemsWithClickHandlers} />
              {selectedPath && (
                <CriaTextBody2 style={{ marginTop: spacing[2], display: 'block' }}>
                  Last clicked: <strong>{selectedPath}</strong>
                </CriaTextBody2>
              )}
            </div>

            {/* Single item */}
            <div>
              <CriaTextBody1 style={{ marginBottom: spacing[3] }}>
                Single Item
              </CriaTextBody1>
              <Breadcrumbs items={[{ label: 'Home', href: '/' }]} />
            </div>

            {/* Empty state */}
            <div>
              <CriaTextBody1 style={{ marginBottom: spacing[3] }}>
                Empty State
              </CriaTextBody1>
              <Breadcrumbs items={[]} />
              <CriaTextBody2 style={{ marginTop: spacing[2], display: 'block' }}>
                Renders an empty navigation element
              </CriaTextBody2>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Customization */}
      <Card style={{ marginBottom: spacing[8] }}>
        <CardHeader>
          <CriaTextTitle1>Customization</CriaTextTitle1>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[6] }}>
            {/* Custom styling */}
            <div>
              <CriaTextBody1 style={{ marginBottom: spacing[3] }}>
                Custom Styling
              </CriaTextBody1>
              <Breadcrumbs 
                items={basicItems} 
                style={{ 
                  padding: `${spacing[3]} ${spacing[4]}`,
                  backgroundColor: colors.gray[50],
                  borderRadius: radii.md,
                  border: `1px solid ${colors.gray[200]}`
                }}
                separator={<ArrowRight size={14} />}
              />
            </div>

            {/* Custom class */}
            <div>
              <CriaTextBody1 style={{ marginBottom: spacing[3] }}>
                Custom Class
              </CriaTextBody1>
              <Breadcrumbs 
                items={basicItems} 
                className="custom-breadcrumbs"
                separator="•"
              />
            </div>

            {/* Custom aria-label */}
            <div>
              <CriaTextBody1 style={{ marginBottom: spacing[3] }}>
                Custom ARIA Label
              </CriaTextBody1>
              <Breadcrumbs 
                items={basicItems} 
                ariaLabel="Custom breadcrumb navigation"
                separator="›"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Complex Examples */}
      <Card style={{ marginBottom: spacing[8] }}>
        <CardHeader>
          <CriaTextTitle1>Complex Examples</CriaTextTitle1>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[6] }}>
            {/* Mixed content */}
            <div>
              <CriaTextBody1 style={{ marginBottom: spacing[3] }}>
                Mixed Content (Links, Text, Disabled)
              </CriaTextBody1>
              <Breadcrumbs 
                items={[
                  { label: 'Home', href: '/' },
                  { label: 'Products', href: '/products' },
                  { label: 'Electronics', disabled: true },
                  { label: 'Current Page' },
                ]} 
              />
            </div>

            {/* With complex icons */}
            <div>
              <CriaTextBody1 style={{ marginBottom: spacing[3] }}>
                Complex Icons and Separators
              </CriaTextBody1>
              <Breadcrumbs 
                items={[
                  { label: 'Dashboard', href: '/', icon: <House size={16} /> },
                  { label: 'Orders', href: '/orders', icon: <ShoppingCart size={16} /> },
                  { label: 'Order #12345', href: '/orders/12345', icon: <Package size={16} /> },
                  { label: 'Order Details' },
                ]}
                separator={<CaretRight size={14} />}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Accessibility Note */}
      <Card>
        <CardHeader>
          <CriaTextTitle1>Accessibility Features</CriaTextTitle1>
        </CardHeader>
        <CardContent>
          <CriaTextBody1>
            The Breadcrumbs component includes comprehensive accessibility features:
          </CriaTextBody1>
          <ul style={{ marginTop: spacing[4], paddingLeft: spacing[6] }}>
            <li><strong>Navigation landmark:</strong> Uses &lt;nav&gt; with proper aria-label</li>
            <li><strong>Ordered list structure:</strong> Uses &lt;ol&gt; for semantic breadcrumb list</li>
            <li><strong>Current page indication:</strong> Last item has aria-current="page"</li>
            <li><strong>Keyboard navigation:</strong> All links are keyboard accessible</li>
            <li><strong>Screen reader support:</strong> Proper labeling and structure</li>
            <li><strong>Disabled state:</strong> Disabled items have aria-disabled="true"</li>
            <li><strong>Separator accessibility:</strong> Separators are marked with aria-hidden</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};
