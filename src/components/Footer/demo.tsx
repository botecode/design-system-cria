import React, { useState } from 'react';
import { Footer, FooterLink, FooterSocialLink } from './Footer';
import { Card, CardContent, CardHeader } from '../Card';
import { CriaTextHeadline1, CriaTextHeadline2, CriaTextTitle1, CriaTextTitle2, CriaTextBody1, CriaTextBody2 } from '../TextTokens';
import { Button } from '../Button';
import { Divider } from '../Divider';
import { Input } from '../Input';
import { spacing, colors, radii } from '../../tokens';

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
    <div style={{ padding: spacing[8], minHeight: '100vh' }}>
      <div style={{ marginBottom: spacing[8] }}>
        <CriaTextHeadline1>
          Footer Component
        </CriaTextHeadline1>
      </div>

      <div style={{ marginBottom: spacing[8] }}>
        <CriaTextBody1>
          Global app/site footer component with customizable variants, positioning, and content sections.
        </CriaTextBody1>
      </div>

      {/* Click feedback */}
      {(clickedLink || clickedSocial) && (
        <Card style={{ marginBottom: spacing[8], backgroundColor: colors.primary[50], border: `1px solid ${colors.primary[500]}` }}>
          <CardContent>
            <div style={{ color: colors.primary[700] }}>
              <CriaTextBody2>
                {clickedLink || clickedSocial}
              </CriaTextBody2>
            </div>
          </CardContent>
        </Card>
      )}

      <div style={{ display: 'grid', gap: spacing[8] }}>
        {/* Basic Footer Examples */}
        <Card>
          <CardHeader>
            <CriaTextTitle1 >
              Basic Footer Variants
            </CriaTextTitle1>
          </CardHeader>
          <CardContent>
            <CriaTextBody1 style={{ marginBottom: spacing[4] }}>
              Different footer variants:
            </CriaTextBody1>
            
            <div style={{ marginBottom: spacing[8] }}>
              <CriaTextBody2 style={{ marginBottom: spacing[2], fontWeight: '600' }}>Default Variant:</CriaTextBody2>
              <Footer
                variant="default"
                copyright="© 2024 CR_IA.UI Design System"
                links={sampleLinks.slice(0, 4)}
                socialLinks={sampleSocialLinks.slice(0, 3)}
                onLinkClick={handleLinkClick}
                onSocialClick={handleSocialClick}
                style={{ border: `1px solid ${colors.gray[200]}`, borderRadius: radii.md }}
              />
            </div>

            <div style={{ marginBottom: spacing[8] }}>
              <CriaTextBody2 style={{ marginBottom: spacing[2], fontWeight: '600' }}>Dark Variant:</CriaTextBody2>
              <Footer
                variant="dark"
                copyright="© 2024 CR_IA.UI Design System"
                links={sampleLinks.slice(0, 4)}
                socialLinks={sampleSocialLinks.slice(0, 3)}
                onLinkClick={handleLinkClick}
                onSocialClick={handleSocialClick}
                style={{ borderRadius: radii.md }}
              />
            </div>

            <div style={{ marginBottom: spacing[8] }}>
              <CriaTextBody2 style={{ marginBottom: spacing[2], fontWeight: '600' }}>Light Variant:</CriaTextBody2>
              <Footer
                variant="light"
                copyright="© 2024 CR_IA.UI Design System"
                links={sampleLinks.slice(0, 4)}
                socialLinks={sampleSocialLinks.slice(0, 3)}
                onLinkClick={handleLinkClick}
                onSocialClick={handleSocialClick}
                style={{ border: `1px solid ${colors.gray[200]}`, borderRadius: radii.md }}
              />
            </div>

            <div>
              <CriaTextBody2 style={{ marginBottom: spacing[2], fontWeight: '600' }}>Minimal Variant:</CriaTextBody2>
              <Footer
                variant="minimal"
                copyright="© 2024 CR_IA.UI Design System"
                links={sampleLinks.slice(0, 3)}
                onLinkClick={handleLinkClick}
                style={{ border: `1px solid ${colors.gray[200]}`, borderRadius: radii.md }}
              />
            </div>
          </CardContent>
        </Card>

        {/* Footer Sizes */}
        <Card>
          <CardHeader>
            <CriaTextTitle1 >
              Footer Sizes
            </CriaTextTitle1>
          </CardHeader>
          <CardContent>
            <CriaTextBody1 style={{ marginBottom: spacing[4] }}>
              Different footer sizes:
            </CriaTextBody1>
            
            <div style={{ marginBottom: spacing[8] }}>
              <CriaTextBody2 style={{ marginBottom: spacing[2], fontWeight: '600' }}>Small Size:</CriaTextBody2>
              <Footer
                size="sm"
                variant="default"
                copyright="© 2024 CR_IA.UI"
                links={sampleLinks.slice(0, 3)}
                onLinkClick={handleLinkClick}
                style={{ border: `1px solid ${colors.gray[200]}`, borderRadius: radii.md }}
              />
            </div>

            <div style={{ marginBottom: spacing[8] }}>
              <CriaTextBody2 style={{ marginBottom: spacing[2], fontWeight: '600' }}>Medium Size (Default):</CriaTextBody2>
              <Footer
                size="md"
                variant="default"
                copyright="© 2024 CR_IA.UI Design System"
                links={sampleLinks.slice(0, 4)}
                socialLinks={sampleSocialLinks.slice(0, 3)}
                onLinkClick={handleLinkClick}
                onSocialClick={handleSocialClick}
                style={{ border: `1px solid ${colors.gray[200]}`, borderRadius: radii.md }}
              />
            </div>

            <div>
              <CriaTextBody2 style={{ marginBottom: spacing[2], fontWeight: '600' }}>Large Size:</CriaTextBody2>
              <Footer
                size="lg"
                variant="default"
                copyright="© 2024 CR_IA.UI Design System"
                links={sampleLinks}
                socialLinks={sampleSocialLinks}
                onLinkClick={handleLinkClick}
                onSocialClick={handleSocialClick}
                style={{ border: `1px solid ${colors.gray[200]}`, borderRadius: radii.md }}
              />
            </div>
          </CardContent>
        </Card>

        {/* Footer Positioning */}
        <Card>
          <CardHeader>
            <CriaTextTitle1 >
              Footer Positioning
            </CriaTextTitle1>
          </CardHeader>
          <CardContent>
            <CriaTextBody1 style={{ marginBottom: spacing[4] }}>
              Different positioning options:
            </CriaTextBody1>
            
            <div style={{ marginBottom: spacing[8] }}>
              <CriaTextBody2 style={{ marginBottom: spacing[2], fontWeight: '600' }}>Sticky Footer:</CriaTextBody2>
              <div style={{ height: '200px', backgroundColor: colors.gray[100], borderRadius: radii.md, padding: spacing[4], marginBottom: spacing[4] }}>
                <CriaTextBody1>Content area - scroll to see sticky behavior</CriaTextBody1>
              </div>
              <Footer
                sticky
                variant="dark"
                copyright="© 2024 Sticky Footer"
                links={sampleLinks.slice(0, 3)}
                onLinkClick={handleLinkClick}
                style={{ borderRadius: radii.md }}
              />
            </div>

            <div>
              <CriaTextBody2 style={{ marginBottom: spacing[2], fontWeight: '600' }}>Fixed Footer (simulated):</CriaTextBody2>
              <div style={{ height: '200px', backgroundColor: colors.gray[100], borderRadius: radii.md, padding: spacing[4], marginBottom: spacing[4] }}>
                <CriaTextBody1>Content area - footer would be fixed to bottom</CriaTextBody1>
              </div>
              <Footer
                fixed
                variant="light"
                copyright="© 2024 Fixed Footer"
                links={sampleLinks.slice(0, 3)}
                onLinkClick={handleLinkClick}
                style={{ borderRadius: radii.md }}
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
              <CriaTextBody2 style={{ marginBottom: spacing[2], fontWeight: '600' }}>With Border and Shadow:</CriaTextBody2>
              <Footer
                variant="default"
                border
                shadow
                copyright="© 2024 Enhanced Footer"
                links={sampleLinks.slice(0, 4)}
                socialLinks={sampleSocialLinks.slice(0, 3)}
                onLinkClick={handleLinkClick}
                onSocialClick={handleSocialClick}
                style={{ borderRadius: radii.md }}
              />
            </div>

            <div>
              <CriaTextBody2 style={{ marginBottom: spacing[2], fontWeight: '600' }}>Full Width:</CriaTextBody2>
              <Footer
                variant="dark"
                fullWidth
                copyright="© 2024 Full Width Footer"
                links={sampleLinks.slice(0, 4)}
                socialLinks={sampleSocialLinks.slice(0, 3)}
                onLinkClick={handleLinkClick}
                onSocialClick={handleSocialClick}
                style={{ borderRadius: radii.md }}
              />
            </div>
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
              Footer with custom content sections:
            </CriaTextBody1>
            
            <Footer
              variant="dark"
              size="lg"
              border
              copyright="© 2024 CR_IA.UI Design System. All rights reserved."
              links={sampleLinks}
              socialLinks={sampleSocialLinks}
              onLinkClick={handleLinkClick}
              onSocialClick={handleSocialClick}
              style={{ borderRadius: radii.md }}
            >
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                gap: spacing[8],
                marginBottom: spacing[8]
              }}>
                <div>
                  <CriaTextTitle2  style={{ color: colors.white, marginBottom: spacing[4] }}>
                    Product
                  </CriaTextTitle2>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li style={{ marginBottom: spacing[2] }}>
                      <CriaTextBody2 style={{ color: colors.gray[300] }}>
                        Design System
                      </CriaTextBody2>
                    </li>
                    <li style={{ marginBottom: spacing[2] }}>
                      <CriaTextBody2 style={{ color: colors.gray[300] }}>
                        Components
                      </CriaTextBody2>
                    </li>
                    <li style={{ marginBottom: spacing[2] }}>
                      <CriaTextBody2 style={{ color: colors.gray[300] }}>
                        Documentation
                      </CriaTextBody2>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <CriaTextTitle2  style={{ color: colors.white, marginBottom: spacing[4] }}>
                    Company
                  </CriaTextTitle2>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li style={{ marginBottom: spacing[2] }}>
                      <CriaTextBody2 style={{ color: colors.gray[300] }}>
                        About Us
                      </CriaTextBody2>
                    </li>
                    <li style={{ marginBottom: spacing[2] }}>
                      <CriaTextBody2 style={{ color: colors.gray[300] }}>
                        Careers
                      </CriaTextBody2>
                    </li>
                    <li style={{ marginBottom: spacing[2] }}>
                      <CriaTextBody2 style={{ color: colors.gray[300] }}>
                        News
                      </CriaTextBody2>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <CriaTextTitle2  style={{ color: colors.white, marginBottom: spacing[4] }}>
                    Support
                  </CriaTextTitle2>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li style={{ marginBottom: spacing[2] }}>
                      <CriaTextBody2 style={{ color: colors.gray[300] }}>
                        Help Center
                      </CriaTextBody2>
                    </li>
                    <li style={{ marginBottom: spacing[2] }}>
                      <CriaTextBody2 style={{ color: colors.gray[300] }}>
                        Contact Support
                      </CriaTextBody2>
                    </li>
                    <li style={{ marginBottom: spacing[2] }}>
                      <CriaTextBody2 style={{ color: colors.gray[300] }}>
                        Community
                      </CriaTextBody2>
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
            <CriaTextTitle1 >
              Responsive Footer
            </CriaTextTitle1>
          </CardHeader>
          <CardContent>
            <CriaTextBody1 style={{ marginBottom: spacing[4] }}>
              Footer with responsive behavior:
            </CriaTextBody1>
            
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
              style={{ borderRadius: radii.md }}
            >
              <div style={{ textAlign: 'center', marginBottom: spacing[4] }}>
                <CriaTextBody1 >
                  This footer adapts to different screen sizes
                </CriaTextBody1>
                <CriaTextBody2 style={{ color: colors.gray[600] }}>
                  On mobile, links stack vertically. On desktop, they spread horizontally.
                </CriaTextBody2>
              </div>
            </Footer>
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
              E-commerce footer:
            </CriaTextBody1>
            
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
              style={{ borderRadius: radii.md }}
            >
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                gap: spacing[8],
                marginBottom: spacing[8]
              }}>
                <div>
                  <CriaTextTitle2  style={{ color: colors.white, marginBottom: spacing[4] }}>
                    Shop
                  </CriaTextTitle2>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {['New Arrivals', 'Men', 'Women', 'Kids', 'Accessories'].map((item) => (
                      <li key={item} style={{ marginBottom: spacing[2] }}>
                        <CriaTextBody2 style={{ color: colors.gray[300] }}>
                          {item}
                        </CriaTextBody2>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <CriaTextTitle2  style={{ color: colors.white, marginBottom: spacing[4] }}>
                    Customer Service
                  </CriaTextTitle2>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {['Contact Us', 'FAQ', 'Live Chat', 'Returns', 'Exchanges'].map((item) => (
                      <li key={item} style={{ marginBottom: spacing[2] }}>
                        <CriaTextBody2 style={{ color: colors.gray[300] }}>
                          {item}
                        </CriaTextBody2>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <CriaTextTitle2  style={{ color: colors.white, marginBottom: spacing[4] }}>
                    Newsletter
                  </CriaTextTitle2>
                  <CriaTextBody2 style={{ color: colors.gray[300], marginBottom: spacing[4] }}>
                    Subscribe to get updates on new products and exclusive offers.
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
            </Footer>

            <Divider style={{ margin: '2rem 0' }} />

            <CriaTextBody1 style={{ marginBottom: spacing[4] }}>
              SaaS/App footer:
            </CriaTextBody1>
            
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
              style={{ borderRadius: radii.md }}
            >
              <div style={{ textAlign: 'center', marginBottom: spacing[4] }}>
                <CriaTextTitle2  style={{ marginBottom: spacing[2] }}>
                Ready to get started?
              </CriaTextTitle2>
                <CriaTextBody1 style={{ color: colors.gray[600], marginBottom: spacing[4] }}>
                  Join thousands of teams already using CR_IA App
                </CriaTextBody1>
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
            <CriaTextTitle1 >
              Accessibility Features
            </CriaTextTitle1>
          </CardHeader>
          <CardContent>
            <CriaTextBody1 style={{ marginBottom: spacing[4] }}>
              Footer with proper accessibility attributes:
            </CriaTextBody1>
            
            <Footer
              variant="dark"
              copyright="© 2024 Accessible Footer"
              links={sampleLinks.slice(0, 4)}
              socialLinks={sampleSocialLinks.slice(0, 3)}
              onLinkClick={handleLinkClick}
              onSocialClick={handleSocialClick}
              role="contentinfo"
              aria-label="Site footer"
              style={{ borderRadius: radii.md }}
            >
              <div>
                <CriaTextBody1 style={{ color: colors.white, textAlign: 'center' }}>
                  This footer includes proper ARIA attributes and keyboard navigation support.
                </CriaTextBody1>
              </div>
            </Footer>
            
            <CriaTextBody2 style={{ marginTop: '1rem', color: colors.gray[600] }}>
              Features: role="contentinfo", aria-label, keyboard navigation, focus indicators, and semantic HTML structure.
            </CriaTextBody2>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FooterDemo;
