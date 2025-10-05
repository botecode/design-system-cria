import React, { useState } from 'react';
import { Footer, FooterLink, FooterSocialLink } from './index';
import { Card, CardContent, CardHeader } from '../Card';
import { Typography } from '../Typography';
import { Button } from '../Button';
import { Divider } from '../Divider';

const FooterDemo: React.FC = () => {
  const [clickedLink, setClickedLink] = useState<string>('');
  const [clickedSocial, setClickedSocial] = useState<string>('');

  const sampleLinks: FooterLink[] = [
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
    { href: '/help', label: 'Help Center' },
    { href: '/blog', label: 'Blog' }
  ];

  const sampleSocialLinks: FooterSocialLink[] = [
    { href: 'https://twitter.com', label: 'Twitter', icon: 'twitter' },
    { href: 'https://facebook.com', label: 'Facebook', icon: 'facebook' },
    { href: 'https://linkedin.com', label: 'LinkedIn', icon: 'linkedin' },
    { href: 'https://instagram.com', label: 'Instagram', icon: 'instagram' },
    { href: 'https://youtube.com', label: 'YouTube', icon: 'youtube' },
    { href: 'https://github.com', label: 'GitHub', icon: 'github' }
  ];

  const handleLinkClick = (href: string, label: string) => {
    setClickedLink(`Clicked: ${label} (${href})`);
    console.log('Link clicked:', { href, label });
  };

  const handleSocialClick = (href: string, label: string, icon: string) => {
    setClickedSocial(`Clicked: ${label} (${icon})`);
    console.log('Social link clicked:', { href, label, icon });
  };

  return (
    <div style={{ padding: '2rem', minHeight: '100vh' }}>
      <Typography variant="h1" weight="bold" style={{ marginBottom: '2rem' }}>
        Footer Component
      </Typography>

      <Typography variant="body" style={{ marginBottom: '2rem' }}>
        Global app/site footer component with customizable variants, positioning, and content sections.
      </Typography>

      {/* Click feedback */}
      {(clickedLink || clickedSocial) && (
        <Card style={{ marginBottom: '2rem', backgroundColor: '#f0f9ff', border: '1px solid #0ea5e9' }}>
          <CardContent>
            <Typography variant="bodySmall" weight="medium" style={{ color: '#0369a1' }}>
              {clickedLink || clickedSocial}
            </Typography>
          </CardContent>
        </Card>
      )}

      <div style={{ display: 'grid', gap: '2rem' }}>
        {/* Basic Footer Examples */}
        <Card>
          <CardHeader>
            <Typography variant="h2" weight="semibold">
              Basic Footer Variants
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography variant="body" style={{ marginBottom: '1rem' }}>
              Different footer variants:
            </Typography>
            
            <div style={{ marginBottom: '2rem' }}>
              <Typography variant="bodySmall" style={{ marginBottom: '0.5rem', fontWeight: '600' }}>Default Variant:</Typography>
              <Footer
                variant="default"
                copyright="© 2024 CR_IA.UI Design System"
                links={sampleLinks.slice(0, 4)}
                socialLinks={sampleSocialLinks.slice(0, 3)}
                onLinkClick={handleLinkClick}
                onSocialClick={handleSocialClick}
                style={{ border: '1px solid #e5e7eb', borderRadius: '8px' }}
              />
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <Typography variant="bodySmall" style={{ marginBottom: '0.5rem', fontWeight: '600' }}>Dark Variant:</Typography>
              <Footer
                variant="dark"
                copyright="© 2024 CR_IA.UI Design System"
                links={sampleLinks.slice(0, 4)}
                socialLinks={sampleSocialLinks.slice(0, 3)}
                onLinkClick={handleLinkClick}
                onSocialClick={handleSocialClick}
                style={{ borderRadius: '8px' }}
              />
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <Typography variant="bodySmall" style={{ marginBottom: '0.5rem', fontWeight: '600' }}>Light Variant:</Typography>
              <Footer
                variant="light"
                copyright="© 2024 CR_IA.UI Design System"
                links={sampleLinks.slice(0, 4)}
                socialLinks={sampleSocialLinks.slice(0, 3)}
                onLinkClick={handleLinkClick}
                onSocialClick={handleSocialClick}
                style={{ border: '1px solid #e5e7eb', borderRadius: '8px' }}
              />
            </div>

            <div>
              <Typography variant="bodySmall" style={{ marginBottom: '0.5rem', fontWeight: '600' }}>Minimal Variant:</Typography>
              <Footer
                variant="minimal"
                copyright="© 2024 CR_IA.UI Design System"
                links={sampleLinks.slice(0, 3)}
                onLinkClick={handleLinkClick}
                style={{ border: '1px solid #e5e7eb', borderRadius: '8px' }}
              />
            </div>
          </CardContent>
        </Card>

        {/* Footer Sizes */}
        <Card>
          <CardHeader>
            <Typography variant="h2" weight="semibold">
              Footer Sizes
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography variant="body" style={{ marginBottom: '1rem' }}>
              Different footer sizes:
            </Typography>
            
            <div style={{ marginBottom: '2rem' }}>
              <Typography variant="bodySmall" style={{ marginBottom: '0.5rem', fontWeight: '600' }}>Small Size:</Typography>
              <Footer
                size="sm"
                variant="default"
                copyright="© 2024 CR_IA.UI"
                links={sampleLinks.slice(0, 3)}
                onLinkClick={handleLinkClick}
                style={{ border: '1px solid #e5e7eb', borderRadius: '8px' }}
              />
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <Typography variant="bodySmall" style={{ marginBottom: '0.5rem', fontWeight: '600' }}>Medium Size (Default):</Typography>
              <Footer
                size="md"
                variant="default"
                copyright="© 2024 CR_IA.UI Design System"
                links={sampleLinks.slice(0, 4)}
                socialLinks={sampleSocialLinks.slice(0, 3)}
                onLinkClick={handleLinkClick}
                onSocialClick={handleSocialClick}
                style={{ border: '1px solid #e5e7eb', borderRadius: '8px' }}
              />
            </div>

            <div>
              <Typography variant="bodySmall" style={{ marginBottom: '0.5rem', fontWeight: '600' }}>Large Size:</Typography>
              <Footer
                size="lg"
                variant="default"
                copyright="© 2024 CR_IA.UI Design System"
                links={sampleLinks}
                socialLinks={sampleSocialLinks}
                onLinkClick={handleLinkClick}
                onSocialClick={handleSocialClick}
                style={{ border: '1px solid #e5e7eb', borderRadius: '8px' }}
              />
            </div>
          </CardContent>
        </Card>

        {/* Footer Positioning */}
        <Card>
          <CardHeader>
            <Typography variant="h2" weight="semibold">
              Footer Positioning
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography variant="body" style={{ marginBottom: '1rem' }}>
              Different positioning options:
            </Typography>
            
            <div style={{ marginBottom: '2rem' }}>
              <Typography variant="bodySmall" style={{ marginBottom: '0.5rem', fontWeight: '600' }}>Sticky Footer:</Typography>
              <div style={{ height: '200px', backgroundColor: '#f3f4f6', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
                <Typography variant="body">Content area - scroll to see sticky behavior</Typography>
              </div>
              <Footer
                sticky
                variant="dark"
                copyright="© 2024 Sticky Footer"
                links={sampleLinks.slice(0, 3)}
                onLinkClick={handleLinkClick}
                style={{ borderRadius: '8px' }}
              />
            </div>

            <div>
              <Typography variant="bodySmall" style={{ marginBottom: '0.5rem', fontWeight: '600' }}>Fixed Footer (simulated):</Typography>
              <div style={{ height: '200px', backgroundColor: '#f3f4f6', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
                <Typography variant="body">Content area - footer would be fixed to bottom</Typography>
              </div>
              <Footer
                fixed
                variant="light"
                copyright="© 2024 Fixed Footer"
                links={sampleLinks.slice(0, 3)}
                onLinkClick={handleLinkClick}
                style={{ borderRadius: '8px' }}
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
              <Footer
                variant="default"
                border
                shadow
                copyright="© 2024 Enhanced Footer"
                links={sampleLinks.slice(0, 4)}
                socialLinks={sampleSocialLinks.slice(0, 3)}
                onLinkClick={handleLinkClick}
                onSocialClick={handleSocialClick}
                style={{ borderRadius: '8px' }}
              />
            </div>

            <div>
              <Typography variant="bodySmall" style={{ marginBottom: '0.5rem', fontWeight: '600' }}>Full Width:</Typography>
              <Footer
                variant="dark"
                fullWidth
                copyright="© 2024 Full Width Footer"
                links={sampleLinks.slice(0, 4)}
                socialLinks={sampleSocialLinks.slice(0, 3)}
                onLinkClick={handleLinkClick}
                onSocialClick={handleSocialClick}
                style={{ borderRadius: '8px' }}
              />
            </div>
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
              Footer with custom content sections:
            </Typography>
            
            <Footer
              variant="dark"
              size="lg"
              border
              copyright="© 2024 CR_IA.UI Design System. All rights reserved."
              links={sampleLinks}
              socialLinks={sampleSocialLinks}
              onLinkClick={handleLinkClick}
              onSocialClick={handleSocialClick}
              style={{ borderRadius: '8px' }}
            >
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                gap: '2rem',
                marginBottom: '2rem'
              }}>
                <div>
                  <Typography variant="h3" weight="semibold" style={{ color: 'var(--cria-white)', marginBottom: '1rem' }}>
                    Product
                  </Typography>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <Typography variant="bodySmall" style={{ color: 'var(--cria-gray-300)' }}>
                        Design System
                      </Typography>
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <Typography variant="bodySmall" style={{ color: 'var(--cria-gray-300)' }}>
                        Components
                      </Typography>
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <Typography variant="bodySmall" style={{ color: 'var(--cria-gray-300)' }}>
                        Documentation
                      </Typography>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <Typography variant="h3" weight="semibold" style={{ color: 'var(--cria-white)', marginBottom: '1rem' }}>
                    Company
                  </Typography>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <Typography variant="bodySmall" style={{ color: 'var(--cria-gray-300)' }}>
                        About Us
                      </Typography>
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <Typography variant="bodySmall" style={{ color: 'var(--cria-gray-300)' }}>
                        Careers
                      </Typography>
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <Typography variant="bodySmall" style={{ color: 'var(--cria-gray-300)' }}>
                        News
                      </Typography>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <Typography variant="h3" weight="semibold" style={{ color: 'var(--cria-white)', marginBottom: '1rem' }}>
                    Support
                  </Typography>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <Typography variant="bodySmall" style={{ color: 'var(--cria-gray-300)' }}>
                        Help Center
                      </Typography>
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <Typography variant="bodySmall" style={{ color: 'var(--cria-gray-300)' }}>
                        Contact Support
                      </Typography>
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <Typography variant="bodySmall" style={{ color: 'var(--cria-gray-300)' }}>
                        Community
                      </Typography>
                    </li>
                  </ul>
                </div>
              </div>
            </Footer>
          </CardContent>
        </Card>

        {/* Responsive Footer */}
        <Card>
          <CardHeader>
            <Typography variant="h2" weight="semibold">
              Responsive Footer
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography variant="body" style={{ marginBottom: '1rem' }}>
              Footer with responsive behavior:
            </Typography>
            
            <Footer
              variant="default"
              responsive
              border
              shadow
              copyright="© 2024 Responsive Footer"
              links={sampleLinks}
              socialLinks={sampleSocialLinks}
              onLinkClick={handleLinkClick}
              onSocialClick={handleSocialClick}
              style={{ borderRadius: '8px' }}
            >
              <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <Typography variant="body" weight="medium">
                  This footer adapts to different screen sizes
                </Typography>
                <Typography variant="bodySmall" style={{ color: 'var(--cria-gray-600)' }}>
                  On mobile, links stack vertically. On desktop, they spread horizontally.
                </Typography>
              </div>
            </Footer>
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
              E-commerce footer:
            </Typography>
            
            <Footer
              variant="dark"
              size="lg"
              border
              copyright="© 2024 CR_IA Store. All rights reserved."
              links={[
                { href: '/shipping', label: 'Shipping Info' },
                { href: '/returns', label: 'Returns' },
                { href: '/size-guide', label: 'Size Guide' },
                { href: '/gift-cards', label: 'Gift Cards' },
                { href: '/track-order', label: 'Track Order' },
                { href: '/store-locator', label: 'Store Locator' }
              ]}
              socialLinks={sampleSocialLinks}
              onLinkClick={handleLinkClick}
              onSocialClick={handleSocialClick}
              style={{ borderRadius: '8px' }}
            >
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                gap: '2rem',
                marginBottom: '2rem'
              }}>
                <div>
                  <Typography variant="h3" weight="semibold" style={{ color: 'var(--cria-white)', marginBottom: '1rem' }}>
                    Shop
                  </Typography>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {['New Arrivals', 'Men', 'Women', 'Kids', 'Accessories'].map((item) => (
                      <li key={item} style={{ marginBottom: '0.5rem' }}>
                        <Typography variant="bodySmall" style={{ color: 'var(--cria-gray-300)' }}>
                          {item}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <Typography variant="h3" weight="semibold" style={{ color: 'var(--cria-white)', marginBottom: '1rem' }}>
                    Customer Service
                  </Typography>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {['Contact Us', 'FAQ', 'Live Chat', 'Returns', 'Exchanges'].map((item) => (
                      <li key={item} style={{ marginBottom: '0.5rem' }}>
                        <Typography variant="bodySmall" style={{ color: 'var(--cria-gray-300)' }}>
                          {item}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <Typography variant="h3" weight="semibold" style={{ color: 'var(--cria-white)', marginBottom: '1rem' }}>
                    Newsletter
                  </Typography>
                  <Typography variant="bodySmall" style={{ color: 'var(--cria-gray-300)', marginBottom: '1rem' }}>
                    Subscribe to get updates on new products and exclusive offers.
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
            </Footer>

            <Divider style={{ margin: '2rem 0' }} />

            <Typography variant="body" style={{ marginBottom: '1rem' }}>
              SaaS/App footer:
            </Typography>
            
            <Footer
              variant="light"
              size="md"
              border
              copyright="© 2024 CR_IA App. Made with ❤️ by our team."
              links={[
                { href: '/features', label: 'Features' },
                { href: '/pricing', label: 'Pricing' },
                { href: '/security', label: 'Security' },
                { href: '/integrations', label: 'Integrations' },
                { href: '/api', label: 'API' },
                { href: '/status', label: 'Status' }
              ]}
              socialLinks={sampleSocialLinks.slice(0, 4)}
              onLinkClick={handleLinkClick}
              onSocialClick={handleSocialClick}
              style={{ borderRadius: '8px' }}
            >
              <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
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
            </Footer>
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
              Footer with proper accessibility attributes:
            </Typography>
            
            <Footer
              variant="dark"
              copyright="© 2024 Accessible Footer"
              links={sampleLinks.slice(0, 4)}
              socialLinks={sampleSocialLinks.slice(0, 3)}
              onLinkClick={handleLinkClick}
              onSocialClick={handleSocialClick}
              role="contentinfo"
              aria-label="Site footer"
              style={{ borderRadius: '8px' }}
            >
              <div>
                <Typography variant="body" style={{ color: 'var(--cria-white)', textAlign: 'center' }}>
                  This footer includes proper ARIA attributes and keyboard navigation support.
                </Typography>
              </div>
            </Footer>
            
            <Typography variant="bodySmall" style={{ marginTop: '1rem', color: 'var(--cria-gray-600)' }}>
              Features: role="contentinfo", aria-label, keyboard navigation, focus indicators, and semantic HTML structure.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FooterDemo;
