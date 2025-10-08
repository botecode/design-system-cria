import React, { useState } from 'react';
import { MegaMenu, MegaMenuItem } from './MegaMenu';
import { Card, CardContent, CardHeader } from '../Card';
import { CriaTextHeadline1, CriaTextHeadline2, CriaTextTitle1, CriaTextTitle2, CriaTextBody1, CriaTextBody2 } from '../TextTokens';
import { Button } from '../Button';
import { Divider } from '../Divider';
import { Input } from '../Input';
import { spacing, colors, radii } from '../../tokens';

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
    <div style={{ padding: spacing[8], minHeight: '100vh' }}>
      <CriaTextHeadline1 style={{ marginBottom: spacing[8] }}>
        MegaMenu Component
      </CriaTextHeadline1>

      <CriaTextBody1 style={{ marginBottom: spacing[8] }}>
        Expanded top navigation component for marketing sites and dashboards with nested dropdowns, search, and CTA buttons.
            </CriaTextBody1>

      {/* Click feedback */}
      {clickedItem && (
        <Card style={{ marginBottom: spacing[8], backgroundColor: colors.primary[50], border: `1px solid ${colors.primary[500]}` }}>
          <CardContent>
            <CriaTextBody2 style={{ color: colors.primary[700] }}>
              {clickedItem}
            </CriaTextBody2>
          </CardContent>
        </Card>
      )}

      {/* Search feedback */}
      {searchQuery && (
        <Card style={{ marginBottom: spacing[8], backgroundColor: colors.warning[50], border: `1px solid ${colors.warning[500]}` }}>
          <CardContent>
            <CriaTextBody2  style={{ color: colors.warning[700] }}>
              Search: "{searchQuery}"
            </CriaTextBody2>
          </CardContent>
        </Card>
      )}

      <div style={{ display: 'grid', gap: spacing[8] }}>
        {/* Basic MegaMenu Examples */}
        <Card>
          <CardHeader>
            <CriaTextTitle1 >
              Basic MegaMenu Variants
            </CriaTextTitle1>
          </CardHeader>
          <CardContent>
            <CriaTextBody1 style={{ marginBottom: spacing[4] }}>
              Different mega menu variants:
            </CriaTextBody1>
            
            <div style={{ marginBottom: spacing[8] }}>
              <CriaTextBody2 style={{ fontWeight: '600' }}>Default Variant:</CriaTextBody2>
              <MegaMenu
                variant="default"
                items={sampleMenuItems.slice(0, 3)}
                logo={<CriaTextTitle2 >CR_IA.UI</CriaTextTitle2>}
                showSearch
                onSearch={handleSearch}
                onItemClick={handleItemClick}
                ctaButton={{
                  label: 'Get Started',
                  href: '/get-started',
                  onClick: handleCtaClick
                }}
                style={{ border: `1px solid ${colors.gray[200]}`, borderRadius: radii.md }}
              />
            </div>

            <div style={{ marginBottom: spacing[8] }}>
              <CriaTextBody2 style={{ fontWeight: '600' }}>Dark Variant:</CriaTextBody2>
              <MegaMenu
                variant="dark"
                items={sampleMenuItems.slice(0, 3)}
                logo={<CriaTextTitle2  style={{ color: 'colors.white' }}>CR_IA.UI</CriaTextTitle2>}
                showSearch
                onSearch={handleSearch}
                onItemClick={handleItemClick}
                ctaButton={{
                  label: 'Get Started',
                  href: '/get-started',
                  onClick: handleCtaClick
                }}
                style={{ borderRadius: radii.md }}
              />
            </div>

            <div style={{ marginBottom: spacing[8] }}>
              <CriaTextBody2 style={{ fontWeight: '600' }}>Light Variant:</CriaTextBody2>
              <MegaMenu
                variant="light"
                items={sampleMenuItems.slice(0, 3)}
                logo={<CriaTextTitle2 >CR_IA.UI</CriaTextTitle2>}
                showSearch
                onSearch={handleSearch}
                onItemClick={handleItemClick}
                ctaButton={{
                  label: 'Get Started',
                  href: '/get-started',
                  onClick: handleCtaClick
                }}
                style={{ border: `1px solid ${colors.gray[200]}`, borderRadius: radii.md }}
              />
            </div>

            <div>
              <CriaTextBody2 style={{ fontWeight: '600' }}>Transparent Variant:</CriaTextBody2>
              <div style={{ backgroundColor: colors.gray[100], padding: spacing[4], borderRadius: radii.md }}>
                <MegaMenu
                  variant="transparent"
                  items={sampleMenuItems.slice(0, 2)}
                  logo={<CriaTextTitle2 >CR_IA.UI</CriaTextTitle2>}
                  onItemClick={handleItemClick}
                  style={{ borderRadius: radii.md }}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Positioning Examples */}
        <Card>
          <CardHeader>
            <CriaTextTitle1 >
              Positioning Options
            </CriaTextTitle1>
          </CardHeader>
          <CardContent>
            <CriaTextBody1 style={{ marginBottom: spacing[4] }}>
              Different positioning options:
            </CriaTextBody1>
            
            <div style={{ marginBottom: spacing[8] }}>
              <CriaTextBody2 style={{ fontWeight: '600' }}>Sticky Position:</CriaTextBody2>
              <div style={{ height: '200px', backgroundColor: colors.gray[100], borderRadius: radii.md, padding: spacing[4], marginBottom: spacing[4] }}>
                <CriaTextBody1>Content area - scroll to see sticky behavior</CriaTextBody1>
              </div>
              <MegaMenu
                position="sticky"
                variant="dark"
                items={sampleMenuItems.slice(0, 3)}
                logo={<CriaTextTitle2  style={{ color: 'colors.white' }}>CR_IA.UI</CriaTextTitle2>}
                onItemClick={handleItemClick}
                style={{ borderRadius: radii.md }}
              />
            </div>

            <div>
              <CriaTextBody2 style={{ fontWeight: '600' }}>Fixed Position (simulated):</CriaTextBody2>
              <div style={{ height: '200px', backgroundColor: colors.gray[100], borderRadius: radii.md, padding: spacing[4], marginBottom: spacing[4] }}>
                <CriaTextBody1>Content area - menu would be fixed to top</CriaTextBody1>
              </div>
              <MegaMenu
                position="fixed"
                variant="light"
                items={sampleMenuItems.slice(0, 3)}
                logo={<CriaTextTitle2 >CR_IA.UI</CriaTextTitle2>}
                onItemClick={handleItemClick}
                style={{ borderRadius: radii.md }}
              />
            </div>
          </CardContent>
        </Card>

        {/* Size and Alignment Examples */}
        <Card>
          <CardHeader>
            <CriaTextTitle1 >
              Sizes and Alignments
            </CriaTextTitle1>
          </CardHeader>
          <CardContent>
            <CriaTextBody1 style={{ marginBottom: spacing[4] }}>
              Different sizes and alignments:
            </CriaTextBody1>
            
            <div style={{ marginBottom: spacing[8] }}>
              <CriaTextBody2 style={{ fontWeight: '600' }}>Small Size, Left Alignment:</CriaTextBody2>
              <MegaMenu
                size="sm"
                alignment="left"
                variant="default"
                items={sampleMenuItems.slice(0, 3)}
                logo={<CriaTextBody1 >CR_IA.UI</CriaTextBody1>}
                onItemClick={handleItemClick}
                style={{ border: `1px solid ${colors.gray[200]}`, borderRadius: radii.md }}
              />
            </div>

            <div style={{ marginBottom: spacing[8] }}>
              <CriaTextBody2 style={{ fontWeight: '600' }}>Medium Size, Center Alignment:</CriaTextBody2>
              <MegaMenu
                size="md"
                alignment="center"
                variant="dark"
                items={sampleMenuItems.slice(0, 3)}
                logo={<CriaTextTitle2  style={{ color: 'colors.white' }}>CR_IA.UI</CriaTextTitle2>}
                onItemClick={handleItemClick}
                style={{ borderRadius: radii.md }}
              />
            </div>

            <div>
              <CriaTextBody2 style={{ fontWeight: '600' }}>Large Size, Right Alignment:</CriaTextBody2>
              <MegaMenu
                size="lg"
                alignment="right"
                variant="light"
                items={sampleMenuItems.slice(0, 3)}
                logo={<CriaTextTitle1 >CR_IA.UI</CriaTextTitle1>}
                onItemClick={handleItemClick}
                style={{ border: `1px solid ${colors.gray[200]}`, borderRadius: radii.md }}
              />
            </div>
          </CardContent>
        </Card>

        {/* Visual Effects */}
        <Card>
          <CardHeader>
            <CriaTextTitle1 >
              Visual Effects
            </CriaTextTitle1>
          </CardHeader>
          <CardContent>
            <CriaTextBody1 style={{ marginBottom: spacing[4] }}>
              Different visual effects:
            </CriaTextBody1>
            
            <div style={{ marginBottom: spacing[8] }}>
              <CriaTextBody2 style={{ fontWeight: '600' }}>With Border and Shadow:</CriaTextBody2>
              <MegaMenu
                variant="default"
                border
                shadow
                items={sampleMenuItems.slice(0, 3)}
                logo={<CriaTextTitle2 >CR_IA.UI</CriaTextTitle2>}
                showSearch
                onSearch={handleSearch}
                onItemClick={handleItemClick}
                ctaButton={{
                  label: 'Get Started',
                  href: '/get-started',
                  onClick: handleCtaClick
                }}
                style={{ borderRadius: radii.md }}
              />
            </div>

            <div>
              <CriaTextBody2 style={{ fontWeight: '600' }}>Full Width:</CriaTextBody2>
              <MegaMenu
                variant="dark"
                fullWidth
                items={sampleMenuItems.slice(0, 3)}
                logo={<CriaTextTitle2  style={{ color: 'colors.white' }}>CR_IA.UI</CriaTextTitle2>}
                showSearch
                onSearch={handleSearch}
                onItemClick={handleItemClick}
                style={{ borderRadius: radii.md }}
              />
            </div>
          </CardContent>
        </Card>

        {/* Mobile Menu */}
        <Card>
          <CardHeader>
            <CriaTextTitle1 >
              Mobile Menu
            </CriaTextTitle1>
          </CardHeader>
          <CardContent>
            <CriaTextBody1 style={{ marginBottom: spacing[4] }}>
              Mobile-responsive mega menu with toggle:
            </CriaTextBody1>
            
            <MegaMenu
              variant="default"
              items={sampleMenuItems}
              logo={<CriaTextTitle2 >CR_IA.UI</CriaTextTitle2>}
              showMobileToggle
              showSearch
              onSearch={handleSearch}
              onItemClick={handleItemClick}
              ctaButton={{
                label: 'Get Started',
                href: '/get-started',
                onClick: handleCtaClick
              }}
              style={{ border: `1px solid ${colors.gray[200]}`, borderRadius: radii.md }}
            >
              <div style={{ textAlign: 'center', padding: spacing[4] }}>
                <CriaTextBody1 style={{ color: 'colors.gray[600]' }}>
                  Resize your browser window to see the mobile menu in action
                </CriaTextBody1>
              </div>
            </MegaMenu>
          </CardContent>
        </Card>

        {/* Custom Content */}
        <Card>
          <CardHeader>
            <CriaTextTitle1 >
              Custom Content
            </CriaTextTitle1>
          </CardHeader>
          <CardContent>
            <CriaTextBody1 style={{ marginBottom: spacing[4] }}>
              Mega menu with custom content sections:
            </CriaTextBody1>
            
            <MegaMenu
              variant="dark"
              size="lg"
              border
              shadow
              fullWidth
              items={sampleMenuItems}
              logo={<CriaTextTitle1  style={{ color: 'colors.white' }}>CR_IA.UI</CriaTextTitle1>}
              showSearch
              onSearch={handleSearch}
              onItemClick={handleItemClick}
              ctaButton={{
                label: 'Get Started',
                href: '/get-started',
                onClick: handleCtaClick
              }}
              style={{ borderRadius: radii.md }}
            >
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                gap: spacing[8],
                padding: '2rem 0',
                borderTop: '1px solid colors.gray[700]',
                marginTop: '1rem'
              }}>
                <div>
                  <CriaTextTitle2  style={{ color: 'colors.white', marginBottom: spacing[4] }}>
                    Product Updates
                  </CriaTextTitle2>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li style={{ marginBottom: spacing[2] }}>
                      <CriaTextBody2 style={{ color: 'colors.gray[300]' }}>
                        New features in v2.1
                      </CriaTextBody2>
                    </li>
                    <li style={{ marginBottom: spacing[2] }}>
                      <CriaTextBody2 style={{ color: 'colors.gray[300]' }}>
                        Performance improvements
                      </CriaTextBody2>
                    </li>
                    <li style={{ marginBottom: spacing[2] }}>
                      <CriaTextBody2 style={{ color: 'colors.gray[300]' }}>
                        Security enhancements
                      </CriaTextBody2>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <CriaTextTitle2  style={{ color: 'colors.white', marginBottom: spacing[4] }}>
                    Community
                  </CriaTextTitle2>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li style={{ marginBottom: spacing[2] }}>
                      <CriaTextBody2 style={{ color: 'colors.gray[300]' }}>
                        Developer Forum
                      </CriaTextBody2>
                    </li>
                    <li style={{ marginBottom: spacing[2] }}>
                      <CriaTextBody2 style={{ color: 'colors.gray[300]' }}>
                        GitHub Discussions
                      </CriaTextBody2>
                    </li>
                    <li style={{ marginBottom: spacing[2] }}>
                      <CriaTextBody2 style={{ color: 'colors.gray[300]' }}>
                        Discord Server
                      </CriaTextBody2>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <CriaTextTitle2  style={{ color: 'colors.white', marginBottom: spacing[4] }}>
                    Newsletter
                  </CriaTextTitle2>
                  <CriaTextBody2 style={{ color: 'colors.gray[300]', marginBottom: spacing[4] }}>
                    Stay updated with the latest news and features.
                  </CriaTextBody2>
                  <div style={{ display: 'flex', gap: spacing[2] }}>
                    <Input 
                      type="email" 
                      placeholder="Enter your email" 
                      style={{ 
                        flex: 1, 
                        backgroundColor: 'transparent',
                        color: colors.white
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
            <CriaTextTitle1 >
              Real-world Examples
            </CriaTextTitle1>
          </CardHeader>
          <CardContent>
            <CriaTextBody1 style={{ marginBottom: spacing[4] }}>
              E-commerce mega menu:
            </CriaTextBody1>
            
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
              logo={<CriaTextTitle1  style={{ color: 'colors.white' }}>CR_IA Store</CriaTextTitle1>}
              showSearch
              onSearch={handleSearch}
              onItemClick={handleItemClick}
              ctaButton={{
                label: 'My Account',
                href: '/account',
                variant: 'outline'
              }}
              style={{ borderRadius: radii.md }}
            />

            <Divider style={{ margin: '2rem 0' }} />

            <CriaTextBody1 style={{ marginBottom: spacing[4] }}>
              SaaS/App mega menu:
            </CriaTextBody1>
            
            <MegaMenu
              variant="light"
              size="md"
              border
              shadow
              items={sampleMenuItems.slice(0, 4)}
               logo={<CriaTextTitle2 >CR_IA App</CriaTextTitle2>}
              showSearch
              onSearch={handleSearch}
              onItemClick={handleItemClick}
              ctaButton={{
                label: 'Try Free',
                href: '/try-free',
                variant: 'primary'
              }}
              style={{ borderRadius: radii.md }}
            >
              <div style={{ textAlign: 'center', padding: spacing[4] }}>
                <CriaTextTitle2  style={{ marginBottom: spacing[2] }}>
                  Ready to get started?
                </CriaTextTitle2>
                <CriaTextBody1 style={{ color: 'colors.gray[600]', marginBottom: spacing[4] }}>
                  Join thousands of teams already using CR_IA App
                </CriaTextBody1>
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
            <CriaTextTitle1 >
              Accessibility Features
            </CriaTextTitle1>
          </CardHeader>
          <CardContent>
            <CriaTextBody1 style={{ marginBottom: spacing[4] }}>
              Mega menu with proper accessibility attributes:
            </CriaTextBody1>
            
            <MegaMenu
              variant="default"
              items={sampleMenuItems.slice(0, 3)}
              logo={<CriaTextTitle2 >CR_IA.UI</CriaTextTitle2>}
              showSearch
              onSearch={handleSearch}
              onItemClick={handleItemClick}
              role="navigation"
              aria-label="Main navigation"
              style={{ border: `1px solid ${colors.gray[200]}`, borderRadius: radii.md }}
            >
              <div>
                <CriaTextBody1 style={{ textAlign: 'center' }}>
                  This mega menu includes proper ARIA attributes, keyboard navigation, and semantic HTML structure.
                </CriaTextBody1>
              </div>
            </MegaMenu>
            
            <CriaTextBody2 style={{ marginTop: '1rem', color: 'colors.gray[600]' }}>
              Features: role="navigation", aria-label, keyboard navigation, focus indicators, and semantic HTML structure.
            </CriaTextBody2>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MegaMenuDemo;
