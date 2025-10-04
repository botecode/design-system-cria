import React, { useState } from 'react';
import { Typography } from '../Typography';
import { Breadcrumbs } from './index';
import { Card, CardContent, CardHeader } from '../Card';
import { House, Folder, ShoppingCart, Package, ArrowRight, ChevronRight } from 'phosphor-react';

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
      <Typography variant="h1" style={{ marginBottom: '32px' }}>
        Breadcrumbs Component
      </Typography>

      <Typography variant="body" style={{ marginBottom: '32px' }}>
        The Breadcrumbs component provides navigation context by showing the user's current location 
        within a hierarchical structure. It helps users understand where they are and provides 
        quick access to parent pages.
      </Typography>

      {/* Basic Examples */}
      <Card style={{ marginBottom: '32px' }}>
        <CardHeader>
          <Typography variant="h3">Basic Examples</Typography>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Default breadcrumbs */}
            <div>
              <Typography variant="body" weight="medium" style={{ marginBottom: '12px' }}>
                Default Breadcrumbs
              </Typography>
              <Breadcrumbs items={basicItems} />
            </div>

            {/* With icons */}
            <div>
              <Typography variant="body" weight="medium" style={{ marginBottom: '12px' }}>
                With Icons
              </Typography>
              <Breadcrumbs items={ecommerceItems} />
            </div>

            {/* Custom separator */}
            <div>
              <Typography variant="body" weight="medium" style={{ marginBottom: '12px' }}>
                Custom Separator (Arrow)
              </Typography>
              <Breadcrumbs items={basicItems} separator={<ArrowRight size={14} />} />
            </div>

            {/* Custom separator text */}
            <div>
              <Typography variant="body" weight="medium" style={{ marginBottom: '12px' }}>
                Custom Separator (Text)
              </Typography>
              <Breadcrumbs items={basicItems} separator="→" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Real-world Examples */}
      <Card style={{ marginBottom: '32px' }}>
        <CardHeader>
          <Typography variant="h3">Real-world Examples</Typography>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* E-commerce */}
            <div>
              <Typography variant="body" weight="medium" style={{ marginBottom: '12px' }}>
                E-commerce Navigation
              </Typography>
              <Breadcrumbs items={ecommerceItems} separator={<ChevronRight size={14} />} />
            </div>

            {/* File system */}
            <div>
              <Typography variant="body" weight="medium" style={{ marginBottom: '12px' }}>
                File System Navigation
              </Typography>
              <Breadcrumbs items={fileSystemItems} />
            </div>

            {/* Admin dashboard */}
            <div>
              <Typography variant="body" weight="medium" style={{ marginBottom: '12px' }}>
                Admin Dashboard
              </Typography>
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
      <Card style={{ marginBottom: '32px' }}>
        <CardHeader>
          <Typography variant="h3">Truncation</Typography>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <Typography variant="body" weight="medium" style={{ marginBottom: '12px' }}>
                Long Path (maxItems: 5)
              </Typography>
              <Breadcrumbs items={manyItems} maxItems={5} />
            </div>

            <div>
              <Typography variant="body" weight="medium" style={{ marginBottom: '12px' }}>
                Long Path (maxItems: 3)
              </Typography>
              <Breadcrumbs items={manyItems} maxItems={3} />
            </div>

            <div>
              <Typography variant="body" weight="medium" style={{ marginBottom: '12px' }}>
                Very Long Path (maxItems: 4) with Custom Separator
              </Typography>
              <Breadcrumbs 
                items={manyItems} 
                maxItems={4} 
                separator={<ChevronRight size={14} />} 
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* States */}
      <Card style={{ marginBottom: '32px' }}>
        <CardHeader>
          <Typography variant="h3">States</Typography>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Disabled items */}
            <div>
              <Typography variant="body" weight="medium" style={{ marginBottom: '12px' }}>
                With Disabled Items
              </Typography>
              <Breadcrumbs items={itemsWithDisabled} />
              <Typography variant="caption" style={{ marginTop: '8px', display: 'block' }}>
                The "Electronics" item is disabled and cannot be clicked
              </Typography>
            </div>

            {/* Click handlers */}
            <div>
              <Typography variant="body" weight="medium" style={{ marginBottom: '12px' }}>
                With Click Handlers
              </Typography>
              <Breadcrumbs items={itemsWithClickHandlers} />
              {selectedPath && (
                <Typography variant="caption" style={{ marginTop: '8px', display: 'block' }}>
                  Last clicked: <strong>{selectedPath}</strong>
                </Typography>
              )}
            </div>

            {/* Single item */}
            <div>
              <Typography variant="body" weight="medium" style={{ marginBottom: '12px' }}>
                Single Item
              </Typography>
              <Breadcrumbs items={[{ label: 'Home', href: '/' }]} />
            </div>

            {/* Empty state */}
            <div>
              <Typography variant="body" weight="medium" style={{ marginBottom: '12px' }}>
                Empty State
              </Typography>
              <Breadcrumbs items={[]} />
              <Typography variant="caption" style={{ marginTop: '8px', display: 'block' }}>
                Renders an empty navigation element
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Customization */}
      <Card style={{ marginBottom: '32px' }}>
        <CardHeader>
          <Typography variant="h3">Customization</Typography>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Custom styling */}
            <div>
              <Typography variant="body" weight="medium" style={{ marginBottom: '12px' }}>
                Custom Styling
              </Typography>
              <Breadcrumbs 
                items={basicItems} 
                style={{ 
                  padding: '12px 16px',
                  backgroundColor: 'var(--cria-gray-50)',
                  borderRadius: 'var(--cria-radius-md)',
                  border: '1px solid var(--cria-gray-200)'
                }}
                separator={<ArrowRight size={14} />}
              />
            </div>

            {/* Custom class */}
            <div>
              <Typography variant="body" weight="medium" style={{ marginBottom: '12px' }}>
                Custom Class
              </Typography>
              <Breadcrumbs 
                items={basicItems} 
                className="custom-breadcrumbs"
                separator="•"
              />
            </div>

            {/* Custom aria-label */}
            <div>
              <Typography variant="body" weight="medium" style={{ marginBottom: '12px' }}>
                Custom ARIA Label
              </Typography>
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
      <Card style={{ marginBottom: '32px' }}>
        <CardHeader>
          <Typography variant="h3">Complex Examples</Typography>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Mixed content */}
            <div>
              <Typography variant="body" weight="medium" style={{ marginBottom: '12px' }}>
                Mixed Content (Links, Text, Disabled)
              </Typography>
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
              <Typography variant="body" weight="medium" style={{ marginBottom: '12px' }}>
                Complex Icons and Separators
              </Typography>
              <Breadcrumbs 
                items={[
                  { label: 'Dashboard', href: '/', icon: <House size={16} /> },
                  { label: 'Orders', href: '/orders', icon: <ShoppingCart size={16} /> },
                  { label: 'Order #12345', href: '/orders/12345', icon: <Package size={16} /> },
                  { label: 'Order Details' },
                ]}
                separator={<ChevronRight size={14} />}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Accessibility Note */}
      <Card>
        <CardHeader>
          <Typography variant="h3">Accessibility Features</Typography>
        </CardHeader>
        <CardContent>
          <Typography variant="body">
            The Breadcrumbs component includes comprehensive accessibility features:
          </Typography>
          <ul style={{ marginTop: '16px', paddingLeft: '24px' }}>
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
