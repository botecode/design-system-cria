import React, { useState } from 'react';
import { MegaMenu, MegaMenuItem } from './index';
import { Card, CardContent, CardHeader } from '../Card';
import { Typography } from '../Typography';
import { Button } from '../Button';
import { Divider } from '../Divider';

const MegaMenuDemo: React.FC = () => {
  const [clickedItem, setClickedItem] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const sampleMenuItems: MegaMenuItem[] = [
    {
      label: 'Products',
      href: '/products',
      children: [
        {
          label: 'Software',
          href: '/products/software',
          children: [
            { label: 'CRM', href: '/products/software/crm' },
            { label: 'Analytics', href: '/products/software/analytics' },
            { label: 'Marketing', href: '/products/software/marketing' },
            { label: 'E-commerce', href: '/products/software/ecommerce' }
          ]
        },
        {
          label: 'Services',
          href: '/products/services',
          children: [
            { label: 'Consulting', href: '/products/services/consulting' },
            { label: 'Support', href: '/products/services/support' },
            { label: 'Training', href: '/products/services/training' },
            { label: 'Implementation', href: '/products/services/implementation' }
          ]
        },
        {
          label: 'Integrations',
          href: '/products/integrations',
          children: [
            { label: 'API', href: '/products/integrations/api' },
            { label: 'Webhooks', href: '/products/integrations/webhooks' },
            { label: 'Third-party', href: '/products/integrations/third-party' }
          ]
        }
      ]
    },
    {
      label: 'Solutions',
      href: '/solutions',
      children: [
        {
          label: 'Enterprise',
          href: '/solutions/enterprise',
          description: 'Scalable solutions for large organizations'
        },
        {
          label: 'Small Business',
          href: '/solutions/small-business',
          description: 'Affordable solutions for growing businesses'
        },
        {
          label: 'Startups',
          href: '/solutions/startups',
          description: 'Fast-track solutions for new ventures'
        }
      ]
    },
    {
      label: 'Resources',
      href: '/resources',
      children: [
        { label: 'Documentation', href: '/resources/docs' },
        { label: 'Blog', href: '/resources/blog' },
        { label: 'Case Studies', href: '/resources/case-studies' },
        { label: 'Whitepapers', href: '/resources/whitepapers' }
      ]
    },
    {
      label: 'Company',
      href: '/company',
      children: [
        { label: 'About Us', href: '/company/about' },
        { label: 'Careers', href: '/company/careers' },
        { label: 'Press', href: '/company/press' },
        { label: 'Contact', href: '/company/contact' }
      ]
    }
  ];

  const handleItemClick = (href: string, label: string, item: MegaMenuItem) => {
    setClickedItem(`Clicked: ${label} (${href})`);
    console.log('Menu item clicked:', { href, label, item });
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    console.log('Search query:', query);
  };

  const handleCtaClick = () => {
    setClickedItem('CTA Button clicked: Get Started');
    console.log('CTA button clicked');
  };

  return (
    <div style={{ padding: '2rem', minHeight: '100vh' }}>
      <Typography variant="h1" weight="bold" style={{ marginBottom: '2rem' }}>
        MegaMenu Component
      </Typography>

      <Typography variant="body" style={{ marginBottom: '2rem' }}>
        Expanded top navigation component for marketing sites and dashboards with nested dropdowns, search, and CTA buttons.
      </Typography>

      {/* Click feedback */}
      {clickedItem && (
        <Card style={{ marginBottom: '2rem', backgroundColor: '#f0f9ff', border: '1px solid #0ea5e9' }}>
          <CardContent>
            <Typography variant="bodySmall" weight="medium" style={{ color: '#0369a1' }}>
              {clickedItem}
            </Typography>
          </CardContent>
        </Card>
      )}

      {/* Search feedback */}
      {searchQuery && (
        <Card style={{ marginBottom: '2rem', backgroundColor: '#fef3c7', border: '1px solid #f59e0b' }}>
          <CardContent>
            <Typography variant="bodySmall" weight="medium" style={{ color: '#92400e' }}>
              Search: "{searchQuery}"
            </Typography>
          </CardContent>
        </Card>
      )}

      <div style={{ display: 'grid', gap: '2rem' }}>
        {/* Basic MegaMenu Examples */}
        <Card>
          <CardHeader>
            <Typography variant="h2" weight="semibold">
              Basic MegaMenu Variants
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography variant="body" style={{ marginBottom: '1rem' }}>
              Different mega menu variants:
            </Typography>
            
            <div style={{ marginBottom: '2rem' }}>
              <Typography variant="bodySmall" style={{ marginBottom: '0.5rem', fontWeight: '600' }}>Default Variant:</Typography>
              <MegaMenu
                variant="default"
                items={sampleMenuItems.slice(0, 3)}
                logo={<Typography variant="h3" weight="bold">CR_IA.UI</Typography>}
                showSearch
                onSearch={handleSearch}
                onItemClick={handleItemClick}
                ctaButton={{
                  label: 'Get Started',
                  href: '/get-started',
                  onClick: handleCtaClick
                }}
                style={{ border: '1px solid #e5e7eb', borderRadius: '8px' }}
              />
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <Typography variant="bodySmall" style={{ marginBottom: '0.5rem', fontWeight: '600' }}>Dark Variant:</Typography>
              <MegaMenu
                variant="dark"
                items={sampleMenuItems.slice(0, 3)}
                logo={<Typography variant="h3" weight="bold" style={{ color: 'var(--cria-white)' }}>CR_IA.UI</Typography>}
                showSearch
                onSearch={handleSearch}
                onItemClick={handleItemClick}
                ctaButton={{
                  label: 'Get Started',
                  href: '/get-started',
                  onClick: handleCtaClick
                }}
                style={{ borderRadius: '8px' }}
              />
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <Typography variant="bodySmall" style={{ marginBottom: '0.5rem', fontWeight: '600' }}>Light Variant:</Typography>
              <MegaMenu
                variant="light"
                items={sampleMenuItems.slice(0, 3)}
                logo={<Typography variant="h3" weight="bold">CR_IA.UI</Typography>}
                showSearch
                onSearch={handleSearch}
                onItemClick={handleItemClick}
                ctaButton={{
                  label: 'Get Started',
                  href: '/get-started',
                  onClick: handleCtaClick
                }}
                style={{ border: '1px solid #e5e7eb', borderRadius: '8px' }}
              />
            </div>

            <div>
              <Typography variant="bodySmall" style={{ marginBottom: '0.5rem', fontWeight: '600' }}>Transparent Variant:</Typography>
              <div style={{ backgroundColor: '#f3f4f6', padding: '1rem', borderRadius: '8px' }}>
                <MegaMenu
                  variant="transparent"
                  items={sampleMenuItems.slice(0, 2)}
                  logo={<Typography variant="h3" weight="bold">CR_IA.UI</Typography>}
                  onItemClick={handleItemClick}
                  style={{ borderRadius: '8px' }}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Positioning Examples */}
        <Card>
          <CardHeader>
            <Typography variant="h2" weight="semibold">
              Positioning Options
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography variant="body" style={{ marginBottom: '1rem' }}>
              Different positioning options:
            </Typography>
            
            <div style={{ marginBottom: '2rem' }}>
              <Typography variant="bodySmall" style={{ marginBottom: '0.5rem', fontWeight: '600' }}>Sticky Position:</Typography>
              <div style={{ height: '200px', backgroundColor: '#f3f4f6', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
                <Typography variant="body">Content area - scroll to see sticky behavior</Typography>
              </div>
              <MegaMenu
                position="sticky"
                variant="dark"
                items={sampleMenuItems.slice(0, 3)}
                logo={<Typography variant="h3" weight="bold" style={{ color: 'var(--cria-white)' }}>CR_IA.UI</Typography>}
                onItemClick={handleItemClick}
                style={{ borderRadius: '8px' }}
              />
            </div>

            <div>
              <Typography variant="bodySmall" style={{ marginBottom: '0.5rem', fontWeight: '600' }}>Fixed Position (simulated):</Typography>
              <div style={{ height: '200px', backgroundColor: '#f3f4f6', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
                <Typography variant="body">Content area - menu would be fixed to top</Typography>
              </div>
              <MegaMenu
                position="fixed"
                variant="light"
                items={sampleMenuItems.slice(0, 3)}
                logo={<Typography variant="h3" weight="bold">CR_IA.UI</Typography>}
                onItemClick={handleItemClick}
                style={{ borderRadius: '8px' }}
              />
            </div>
          </CardContent>
        </Card>

        {/* Size and Alignment Examples */}
        <Card>
          <CardHeader>
            <Typography variant="h2" weight="semibold">
              Sizes and Alignments
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography variant="body" style={{ marginBottom: '1rem' }}>
              Different sizes and alignments:
            </Typography>
            
            <div style={{ marginBottom: '2rem' }}>
              <Typography variant="bodySmall" style={{ marginBottom: '0.5rem', fontWeight: '600' }}>Small Size, Left Alignment:</Typography>
              <MegaMenu
                size="sm"
                alignment="left"
                variant="default"
                items={sampleMenuItems.slice(0, 3)}
                logo={<Typography variant="body" weight="bold">CR_IA.UI</Typography>}
                onItemClick={handleItemClick}
                style={{ border: '1px solid #e5e7eb', borderRadius: '8px' }}
              />
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <Typography variant="bodySmall" style={{ marginBottom: '0.5rem', fontWeight: '600' }}>Medium Size, Center Alignment:</Typography>
              <MegaMenu
                size="md"
                alignment="center"
                variant="dark"
                items={sampleMenuItems.slice(0, 3)}
                logo={<Typography variant="h3" weight="bold" style={{ color: 'var(--cria-white)' }}>CR_IA.UI</Typography>}
                onItemClick={handleItemClick}
                style={{ borderRadius: '8px' }}
              />
            </div>

            <div>
              <Typography variant="bodySmall" style={{ marginBottom: '0.5rem', fontWeight: '600' }}>Large Size, Right Alignment:</Typography>
              <MegaMenu
                size="lg"
                alignment="right"
                variant="light"
                items={sampleMenuItems.slice(0, 3)}
                logo={<Typography variant="h2" weight="bold">CR_IA.UI</Typography>}
                onItemClick={handleItemClick}
                style={{ border: '1px solid #e5e7eb', borderRadius: '8px' }}
              />
            </div>
          </CardContent>
        </Card>

        {/* Visual Effects */}
        <Card>
          <CardHeader>
            <Typography variant="h2" weight="semibold">
              Visual Effects
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography variant="body" style={{ marginBottom: '1rem' }}>
              Different visual effects:
            </Typography>
            
            <div style={{ marginBottom: '2rem' }}>
              <Typography variant="bodySmall" style={{ marginBottom: '0.5rem', fontWeight: '600' }}>With Border and Shadow:</Typography>
              <MegaMenu
                variant="default"
                border
                shadow
                items={sampleMenuItems.slice(0, 3)}
                logo={<Typography variant="h3" weight="bold">CR_IA.UI</Typography>}
                showSearch
                onSearch={handleSearch}
                onItemClick={handleItemClick}
                ctaButton={{
                  label: 'Get Started',
                  href: '/get-started',
                  onClick: handleCtaClick
                }}
                style={{ borderRadius: '8px' }}
              />
            </div>

            <div>
              <Typography variant="bodySmall" style={{ marginBottom: '0.5rem', fontWeight: '600' }}>Full Width:</Typography>
              <MegaMenu
                variant="dark"
                fullWidth
                items={sampleMenuItems.slice(0, 3)}
                logo={<Typography variant="h3" weight="bold" style={{ color: 'var(--cria-white)' }}>CR_IA.UI</Typography>}
                showSearch
                onSearch={handleSearch}
                onItemClick={handleItemClick}
                style={{ borderRadius: '8px' }}
              />
            </div>
          </CardContent>
        </Card>

        {/* Mobile Menu */}
        <Card>
          <CardHeader>
            <Typography variant="h2" weight="semibold">
              Mobile Menu
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography variant="body" style={{ marginBottom: '1rem' }}>
              Mobile-responsive mega menu with toggle:
            </Typography>
            
            <MegaMenu
              variant="default"
              items={sampleMenuItems}
              logo={<Typography variant="h3" weight="bold">CR_IA.UI</Typography>}
              showMobileToggle
              showSearch
              onSearch={handleSearch}
              onItemClick={handleItemClick}
              ctaButton={{
                label: 'Get Started',
                href: '/get-started',
                onClick: handleCtaClick
              }}
              style={{ border: '1px solid #e5e7eb', borderRadius: '8px' }}
            >
              <div style={{ textAlign: 'center', padding: '1rem' }}>
                <Typography variant="body" style={{ color: 'var(--cria-gray-600)' }}>
                  Resize your browser window to see the mobile menu in action
                </Typography>
              </div>
            </MegaMenu>
          </CardContent>
        </Card>

        {/* Custom Content */}
        <Card>
          <CardHeader>
            <Typography variant="h2" weight="semibold">
              Custom Content
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography variant="body" style={{ marginBottom: '1rem' }}>
              Mega menu with custom content sections:
            </Typography>
            
            <MegaMenu
              variant="dark"
              size="lg"
              border
              shadow
              fullWidth
              items={sampleMenuItems}
              logo={<Typography variant="h2" weight="bold" style={{ color: 'var(--cria-white)' }}>CR_IA.UI</Typography>}
              showSearch
              onSearch={handleSearch}
              onItemClick={handleItemClick}
              ctaButton={{
                label: 'Get Started',
                href: '/get-started',
                onClick: handleCtaClick
              }}
              style={{ borderRadius: '8px' }}
            >
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                gap: '2rem',
                padding: '2rem 0',
                borderTop: '1px solid var(--cria-gray-700)',
                marginTop: '1rem'
              }}>
                <div>
                  <Typography variant="h3" weight="semibold" style={{ color: 'var(--cria-white)', marginBottom: '1rem' }}>
                    Product Updates
                  </Typography>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <Typography variant="bodySmall" style={{ color: 'var(--cria-gray-300)' }}>
                        New features in v2.1
                      </Typography>
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <Typography variant="bodySmall" style={{ color: 'var(--cria-gray-300)' }}>
                        Performance improvements
                      </Typography>
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <Typography variant="bodySmall" style={{ color: 'var(--cria-gray-300)' }}>
                        Security enhancements
                      </Typography>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <Typography variant="h3" weight="semibold" style={{ color: 'var(--cria-white)', marginBottom: '1rem' }}>
                    Community
                  </Typography>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <Typography variant="bodySmall" style={{ color: 'var(--cria-gray-300)' }}>
                        Developer Forum
                      </Typography>
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <Typography variant="bodySmall" style={{ color: 'var(--cria-gray-300)' }}>
                        GitHub Discussions
                      </Typography>
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <Typography variant="bodySmall" style={{ color: 'var(--cria-gray-300)' }}>
                        Discord Server
                      </Typography>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <Typography variant="h3" weight="semibold" style={{ color: 'var(--cria-white)', marginBottom: '1rem' }}>
                    Newsletter
                  </Typography>
                  <Typography variant="bodySmall" style={{ color: 'var(--cria-gray-300)', marginBottom: '1rem' }}>
                    Stay updated with the latest news and features.
                  </Typography>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      style={{ 
                        flex: 1, 
                        padding: '0.5rem', 
                        border: '1px solid var(--cria-gray-600)', 
                        borderRadius: '4px',
                        backgroundColor: 'transparent',
                        color: 'var(--cria-white)'
                      }} 
                    />
                    <Button variant="primary" size="sm">Subscribe</Button>
                  </div>
                </div>
              </div>
            </MegaMenu>
          </CardContent>
        </Card>

        {/* Real-world Examples */}
        <Card>
          <CardHeader>
            <Typography variant="h2" weight="semibold">
              Real-world Examples
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography variant="body" style={{ marginBottom: '1rem' }}>
              E-commerce mega menu:
            </Typography>
            
            <MegaMenu
              variant="dark"
              size="lg"
              border
              shadow
              fullWidth
              items={[
                {
                  label: 'Shop',
                  href: '/shop',
                  children: [
                    {
                      label: 'Men',
                      href: '/shop/men',
                      children: [
                        { label: 'Clothing', href: '/shop/men/clothing' },
                        { label: 'Shoes', href: '/shop/men/shoes' },
                        { label: 'Accessories', href: '/shop/men/accessories' }
                      ]
                    },
                    {
                      label: 'Women',
                      href: '/shop/women',
                      children: [
                        { label: 'Clothing', href: '/shop/women/clothing' },
                        { label: 'Shoes', href: '/shop/women/shoes' },
                        { label: 'Accessories', href: '/shop/women/accessories' }
                      ]
                    },
                    {
                      label: 'Kids',
                      href: '/shop/kids',
                      children: [
                        { label: 'Clothing', href: '/shop/kids/clothing' },
                        { label: 'Shoes', href: '/shop/kids/shoes' },
                        { label: 'Toys', href: '/shop/kids/toys' }
                      ]
                    }
                  ]
                },
                {
                  label: 'Brands',
                  href: '/brands',
                  children: [
                    { label: 'Nike', href: '/brands/nike' },
                    { label: 'Adidas', href: '/brands/adidas' },
                    { label: 'Puma', href: '/brands/puma' },
                    { label: 'Under Armour', href: '/brands/under-armour' }
                  ]
                },
                {
                  label: 'Sale',
                  href: '/sale'
                },
                {
                  label: 'Support',
                  href: '/support'
                }
              ]}
              logo={<Typography variant="h2" weight="bold" style={{ color: 'var(--cria-white)' }}>CR_IA Store</Typography>}
              showSearch
              onSearch={handleSearch}
              onItemClick={handleItemClick}
              ctaButton={{
                label: 'My Account',
                href: '/account',
                variant: 'outline'
              }}
              style={{ borderRadius: '8px' }}
            />

            <Divider style={{ margin: '2rem 0' }} />

            <Typography variant="body" style={{ marginBottom: '1rem' }}>
              SaaS/App mega menu:
            </Typography>
            
            <MegaMenu
              variant="light"
              size="md"
              border
              shadow
              items={sampleMenuItems.slice(0, 4)}
              logo={<Typography variant="h3" weight="bold">CR_IA App</Typography>}
              showSearch
              onSearch={handleSearch}
              onItemClick={handleItemClick}
              ctaButton={{
                label: 'Try Free',
                href: '/try-free',
                variant: 'primary'
              }}
              style={{ borderRadius: '8px' }}
            >
              <div style={{ textAlign: 'center', padding: '1rem' }}>
                <Typography variant="h3" weight="semibold" style={{ marginBottom: '0.5rem' }}>
                  Ready to get started?
                </Typography>
                <Typography variant="body" style={{ color: 'var(--cria-gray-600)', marginBottom: '1rem' }}>
                  Join thousands of teams already using CR_IA App
                </Typography>
                <Button variant="primary" size="lg" style={{ marginRight: '1rem' }}>
                  Start Free Trial
                </Button>
                <Button variant="outline" size="lg">
                  Schedule Demo
                </Button>
              </div>
            </MegaMenu>
          </CardContent>
        </Card>

        {/* Accessibility Features */}
        <Card>
          <CardHeader>
            <Typography variant="h2" weight="semibold">
              Accessibility Features
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography variant="body" style={{ marginBottom: '1rem' }}>
              Mega menu with proper accessibility attributes:
            </Typography>
            
            <MegaMenu
              variant="default"
              items={sampleMenuItems.slice(0, 3)}
              logo={<Typography variant="h3" weight="bold">CR_IA.UI</Typography>}
              showSearch
              onSearch={handleSearch}
              onItemClick={handleItemClick}
              role="navigation"
              aria-label="Main navigation"
              style={{ border: '1px solid #e5e7eb', borderRadius: '8px' }}
            >
              <div>
                <Typography variant="body" style={{ textAlign: 'center' }}>
                  This mega menu includes proper ARIA attributes, keyboard navigation, and semantic HTML structure.
                </Typography>
              </div>
            </MegaMenu>
            
            <Typography variant="bodySmall" style={{ marginTop: '1rem', color: 'var(--cria-gray-600)' }}>
              Features: role="navigation", aria-label, keyboard navigation, focus indicators, and semantic HTML structure.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MegaMenuDemo;
