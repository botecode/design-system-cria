import React, { useState } from 'react';
import { Drawer } from './Drawer';
import { Button } from '../Button';
import { CriaTextHeadline1, CriaTextHeadline2, CriaTextTitle1, CriaTextBody1, CriaTextBody2 } from '../TextTokens';
import { colors, spacing, radii } from '../../tokens';
import { Card } from '../Card';
import { Input } from '../Input';
import { Textarea } from '../Textarea';
import { Switch } from '../Switch';
import { Badge } from '../Badge';
import { 
  List, 
  Gear, 
  User, 
  ShoppingCart, 
  Heart, 
  Bell,
  MagnifyingGlass as Search,
  Funnel as Filter,
  Download,
  Upload,
  Share,
  Pencil,
  Trash,
  Plus,
  Check,
  X
} from 'phosphor-react';

const DrawerDemo: React.FC = () => {
  const [drawers, setDrawers] = useState<{ [key: string]: boolean }>({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    notifications: true
  });

  const openDrawer = (drawerId: string) => {
    setDrawers(prev => ({ ...prev, [drawerId]: true }));
  };

  const closeDrawer = (drawerId: string) => {
    setDrawers(prev => ({ ...prev, [drawerId]: false }));
  };

  const handleFormChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submitted!');
    closeDrawer('form');
  };

  return (
    <div style={{ padding: spacing[6], backgroundColor: colors.background, minHeight: '100vh' }}>
      <CriaTextHeadline1 style={{ marginBottom: spacing[8] }}>
        Drawer Component
      </CriaTextHeadline1>
      
      <CriaTextBody1 style={{ marginBottom: spacing[8], color: colors.text.secondary }}>
        A slide-out panel component for mobile navigation, settings panels, or contextual content with customizable positions, sizes, and animations.
      </CriaTextBody1>

      {/* Basic Drawer */}
      <Card style={{ marginBottom: spacing[8], padding: '0' }}>
        <div style={{ padding: spacing[4], borderBottom: '1px solid var(--color-border)' }}>
          <CriaTextTitle1>Basic Drawer</CriaTextTitle1>
          <CriaTextBody2 style={{ color: colors.text.secondary }} >
            Simple drawer with title and content
          </CriaTextBody2>
        </div>
        <div style={{ padding: spacing[4] }}>
          <Button onClick={() => openDrawer('basic')}>
            Open Basic Drawer
          </Button>
          
          <Drawer
            isOpen={drawers.basic || false}
            onClose={() => closeDrawer('basic')}
            title="Basic Drawer"
            position="right"
            size="md"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <CriaTextBody1>
                This is a basic drawer with some content. You can add any content here.
              </CriaTextBody1>
              <Button variant="primary">Action Button</Button>
              <Button variant="ghost">Secondary Action</Button>
            </div>
          </Drawer>
        </div>
      </Card>

      {/* Positions */}
      <Card style={{ marginBottom: spacing[8], padding: '0' }}>
        <div style={{ padding: spacing[4], borderBottom: '1px solid var(--color-border)' }}>
          <CriaTextTitle1>Positions</CriaTextTitle1>
          <CriaTextBody2 style={{ color: colors.text.secondary }} >
            Drawers can slide in from different directions
          </CriaTextBody2>
        </div>
        <div style={{ padding: spacing[4], display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button onClick={() => openDrawer('left')}>
            <List size={16} />
            Left Drawer
          </Button>
          <Button onClick={() => openDrawer('right')}>
            <Gear size={16} />
            Right Drawer
          </Button>
          <Button onClick={() => openDrawer('top')}>
            <Bell size={16} />
            Top Drawer
          </Button>
          <Button onClick={() => openDrawer('bottom')}>
            <User size={16} />
            Bottom Drawer
          </Button>
        </div>

        <Drawer
          isOpen={drawers.left || false}
          onClose={() => closeDrawer('left')}
          title="Left Drawer"
          position="left"
          size="md"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Button variant="ghost" style={{ justifyContent: 'flex-start' }}>
              <User size={16} />
              Profile
            </Button>
            <Button variant="ghost" style={{ justifyContent: 'flex-start' }}>
              <Gear size={16} />
              Settings
            </Button>
            <Button variant="ghost" style={{ justifyContent: 'flex-start' }}>
              <Bell size={16} />
              Notifications
            </Button>
          </div>
        </Drawer>

        <Drawer
          isOpen={drawers.right || false}
          onClose={() => closeDrawer('right')}
          title="Right Drawer"
          position="right"
          size="md"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <CriaTextBody1>
              This drawer slides in from the right side.
            </CriaTextBody1>
            <Card>
              <CriaTextTitle1>Quick Actions</CriaTextTitle1>
              <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
                <Button >Edit</Button>
                <Button  variant="secondary">Share</Button>
              </div>
            </Card>
          </div>
        </Drawer>

        <Drawer
          isOpen={drawers.top || false}
          onClose={() => closeDrawer('top')}
          title="Top Drawer"
          position="top"
          size="md"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <CriaTextBody1>
              This drawer slides down from the top.
            </CriaTextBody1>
            <div style={{ display: 'flex', gap: '8px' }}>
              <Badge variant="primary">New</Badge>
              <Badge variant="secondary">Updated</Badge>
              <Badge variant="success">Success</Badge>
            </div>
          </div>
        </Drawer>

        <Drawer
          isOpen={drawers.bottom || false}
          onClose={() => closeDrawer('bottom')}
          title="Bottom Drawer"
          position="bottom"
          size="md"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <CriaTextBody1>
              This drawer slides up from the bottom.
            </CriaTextBody1>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
              <Button variant="primary">Confirm</Button>
              <Button variant="ghost">Cancel</Button>
            </div>
          </div>
        </Drawer>
      </Card>

      {/* Sizes */}
      <Card style={{ marginBottom: spacing[8], padding: '0' }}>
        <div style={{ padding: spacing[4], borderBottom: '1px solid var(--color-border)' }}>
          <CriaTextTitle1>Sizes</CriaTextTitle1>
          <CriaTextBody2 style={{ color: colors.text.secondary }} >
            Different size configurations for various use cases
          </CriaTextBody2>
        </div>
        <div style={{ padding: spacing[4], display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button onClick={() => openDrawer('size-sm')} >Small</Button>
          <Button onClick={() => openDrawer('size-md')}>Medium</Button>
          <Button onClick={() => openDrawer('size-lg')} size="lg">Large</Button>
          <Button onClick={() => openDrawer('size-xl')}>Extra Large</Button>
          <Button onClick={() => openDrawer('size-full')} variant="secondary">Full Screen</Button>
        </div>

        <Drawer
          isOpen={drawers['size-sm'] || false}
          onClose={() => closeDrawer('size-sm')}
          title="Small Drawer"
          position="right"
        >
          <CriaTextBody1>This is a small drawer.</CriaTextBody1>
        </Drawer>

        <Drawer
          isOpen={drawers['size-md'] || false}
          onClose={() => closeDrawer('size-md')}
          title="Medium Drawer"
          position="right"
          size="md"
        >
          <CriaTextBody1>This is a medium-sized drawer with more content.</CriaTextBody1>
        </Drawer>

        <Drawer
          isOpen={drawers['size-lg'] || false}
          onClose={() => closeDrawer('size-lg')}
          title="Large Drawer"
          position="right"
          size="lg"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <CriaTextBody1>This is a large drawer with plenty of space for content.</CriaTextBody1>
            <Card>
              <CriaTextTitle1>Content Section</CriaTextTitle1>
              <CriaTextBody2 style={{ color: colors.text.secondary }}>
                You can add multiple sections and complex layouts here.
              </CriaTextBody2>
            </Card>
          </div>
        </Drawer>

        <Drawer
          isOpen={drawers['size-xl'] || false}
          onClose={() => closeDrawer('size-xl')}
          title="Extra Large Drawer"
          position="right"
          size="xl"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <CriaTextBody1>This is an extra large drawer for complex interfaces.</CriaTextBody1>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <Card>
                <CriaTextTitle1>Section 1</CriaTextTitle1>
                <CriaTextBody2 style={{ color: colors.text.secondary }}>Content here</CriaTextBody2>
              </Card>
              <Card>
                <CriaTextTitle1>Section 2</CriaTextTitle1>
                <CriaTextBody2 style={{ color: colors.text.secondary }}>More content</CriaTextBody2>
              </Card>
            </div>
          </div>
        </Drawer>

        <Drawer
          isOpen={drawers['size-full'] || false}
          onClose={() => closeDrawer('size-full')}
          title="Full Screen Drawer"
          position="right"
          size="full"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <CriaTextHeadline2>Full Screen Experience</CriaTextHeadline2>
            <CriaTextBody1>
              This drawer takes up the entire screen, perfect for complex workflows or detailed views.
            </CriaTextBody1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
              {[1, 2, 3, 4, 5, 6].map(i => (
                <Card key={i}>
                  <CriaTextTitle1>Card {i}</CriaTextTitle1>
                  <CriaTextBody2 style={{ color: colors.text.secondary }}>Content for card {i}</CriaTextBody2>
                </Card>
              ))}
            </div>
          </div>
        </Drawer>
      </Card>

      {/* Variants */}
      <Card style={{ marginBottom: spacing[8], padding: '0' }}>
        <div style={{ padding: spacing[4], borderBottom: '1px solid var(--color-border)' }}>
          <CriaTextTitle1>Variants</CriaTextTitle1>
          <CriaTextBody2 style={{ color: colors.text.secondary }} >
            Different visual styles for various contexts
          </CriaTextBody2>
        </div>
        <div style={{ padding: spacing[4], display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button onClick={() => openDrawer('variant-default')}>Default</Button>
          <Button onClick={() => openDrawer('variant-primary')} variant="primary">Primary</Button>
          <Button onClick={() => openDrawer('variant-secondary')} variant="secondary">Secondary</Button>
        </div>

        <Drawer
          isOpen={drawers['variant-default'] || false}
          onClose={() => closeDrawer('variant-default')}
          title="Default Variant"
          position="right"
          size="md"
          variant="default"
        >
          <CriaTextBody1>This is the default variant with standard styling.</CriaTextBody1>
        </Drawer>

        <Drawer
          isOpen={drawers['variant-primary'] || false}
          onClose={() => closeDrawer('variant-primary')}
          title="Primary Variant"
          position="right"
          size="md"
          variant="primary"
        >
          <CriaTextBody1 style={{ color: colors.white }}>
            This is the primary variant with primary color styling.
          </CriaTextBody1>
        </Drawer>

        <Drawer
          isOpen={drawers['variant-secondary'] || false}
          onClose={() => closeDrawer('variant-secondary')}
          title="Secondary Variant"
          position="right"
          size="md"
          variant="secondary"
        >
          <CriaTextBody1 style={{ color: colors.white }}>
            This is the secondary variant with secondary color styling.
          </CriaTextBody1>
        </Drawer>
      </Card>

      {/* Form Example */}
      <Card style={{ marginBottom: spacing[8], padding: '0' }}>
        <div style={{ padding: spacing[4], borderBottom: '1px solid var(--color-border)' }}>
          <CriaTextTitle1>Form Example</CriaTextTitle1>
          <CriaTextBody2 style={{ color: colors.text.secondary }} >
            Drawer with form content and custom footer
          </CriaTextBody2>
        </div>
        <div style={{ padding: spacing[4] }}>
          <Button onClick={() => openDrawer('form')}>
            <Pencil size={16} />
            Open Form Drawer
          </Button>
          
          <Drawer
            isOpen={drawers.form || false}
            onClose={() => closeDrawer('form')}
            title="Contact Form"
            position="right"
            size="lg"
            footer={
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                <Button variant="ghost" onClick={() => closeDrawer('form')}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                  <Check size={16} />
                  Submit
                </Button>
              </div>
            }
          >
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <CriaTextBody1 style={{ marginBottom: spacing[2], display: 'block' }}>
                  Name
                </CriaTextBody1>
                <Input
                  value={formData.name}
                  onChange={(e) => handleFormChange('name', e.target.value)}
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <CriaTextBody1 style={{ marginBottom: spacing[2], display: 'block' }}>
                  Email
                </CriaTextBody1>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleFormChange('email', e.target.value)}
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <CriaTextBody1 style={{ marginBottom: spacing[2], display: 'block' }}>
                  Message
                </CriaTextBody1>
                <Textarea
                  value={formData.message}
                  onChange={(e) => handleFormChange('message', e.target.value)}
                  placeholder="Enter your message"
                  rows={4}
                />
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Switch
                  checked={formData.notifications}
                  onChange={(checked) => handleFormChange('notifications', checked)}
                />
                <CriaTextBody1>Enable notifications</CriaTextBody1>
              </div>
            </form>
          </Drawer>
        </div>
      </Card>

      {/* Shopping Cart Example */}
      <Card style={{ marginBottom: spacing[8], padding: '0' }}>
        <div style={{ padding: spacing[4], borderBottom: '1px solid var(--color-border)' }}>
          <CriaTextTitle1>Shopping Cart Example</CriaTextTitle1>
          <CriaTextBody2 style={{ color: colors.text.secondary }} >
            Real-world example with cart items and checkout
          </CriaTextBody2>
        </div>
        <div style={{ padding: spacing[4] }}>
          <Button onClick={() => openDrawer('cart')}>
            <ShoppingCart size={16} />
            View Cart (3)
          </Button>
          
          <Drawer
            isOpen={drawers.cart || false}
            onClose={() => closeDrawer('cart')}
            title="Shopping Cart"
            position="right"
            size="md"
            footer={
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <CriaTextTitle1>Total</CriaTextTitle1>
                  <CriaTextTitle1>$127.50</CriaTextTitle1>
                </div>
                <Button variant="primary" size="lg" style={{ width: '100%' }}>
                  Proceed to Checkout
                </Button>
              </div>
            }
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { name: 'Wireless Headphones', price: 99.99, quantity: 1 },
                { name: 'Phone Case', price: 19.99, quantity: 2 },
                { name: 'Screen Protector', price: 7.52, quantity: 1 }
              ].map((item, index) => (
                <div key={index} style={{ display: 'flex', gap: '12px', padding: '12px', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }}>
                  <div style={{ width: '60px', height: '60px', backgroundColor: 'var(--color-background-subtle)', borderRadius: 'var(--radius-sm)' }} />
                  <div style={{ flex: 1 }}>
                    <CriaTextBody1>{item.name}</CriaTextBody1>
                    <CriaTextBody2 style={{ color: colors.text.secondary }}>Qty: {item.quantity}</CriaTextBody2>
                    <CriaTextBody1>${item.price}</CriaTextBody1>
                  </div>
                  <Button variant="ghost" >
                    <Trash size={16} />
                  </Button>
                </div>
              ))}
            </div>
          </Drawer>
        </div>
      </Card>

      {/* Settings Panel Example */}
      <Card style={{ marginBottom: spacing[8], padding: '0' }}>
        <div style={{ padding: spacing[4], borderBottom: '1px solid var(--color-border)' }}>
          <CriaTextTitle1>Settings Panel Example</CriaTextTitle1>
          <CriaTextBody2 style={{ color: colors.text.secondary }} >
            Complex settings interface with multiple sections
          </CriaTextBody2>
        </div>
        <div style={{ padding: spacing[4] }}>
          <Button onClick={() => openDrawer('settings')}>
            <Gear size={16} />
            Open Settings
          </Button>
          
          <Drawer
            isOpen={drawers.settings || false}
            onClose={() => closeDrawer('settings')}
            title="Settings"
            position="right"
            size="lg"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <CriaTextTitle1 style={{ marginBottom: spacing[3] }}>
                  Account Settings
                </CriaTextTitle1>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <CriaTextBody1>Email Notifications</CriaTextBody1>
                    <Switch checked={true} />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <CriaTextBody1>SMS Notifications</CriaTextBody1>
                    <Switch />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <CriaTextBody1>Push Notifications</CriaTextBody1>
                    <Switch checked={true} />
                  </div>
                </div>
              </div>
              
              <div>
                <CriaTextTitle1 style={{ marginBottom: spacing[3] }}>
                  Privacy Settings
                </CriaTextTitle1>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <CriaTextBody1>Profile Visibility</CriaTextBody1>
                    <Switch checked={true} />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <CriaTextBody1>Data Collection</CriaTextBody1>
                    <Switch />
                  </div>
                </div>
              </div>
              
              <div>
                <CriaTextTitle1 style={{ marginBottom: spacing[3] }}>
                  Appearance
                </CriaTextTitle1>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <Button  variant="primary">Light</Button>
                  <Button  variant="ghost">Dark</Button>
                  <Button  variant="ghost">Auto</Button>
                </div>
              </div>
            </div>
          </Drawer>
        </div>
      </Card>

      {/* Loading State */}
      <Card style={{ marginBottom: spacing[8], padding: '0' }}>
        <div style={{ padding: spacing[4], borderBottom: '1px solid var(--color-border)' }}>
          <CriaTextTitle1>Loading State</CriaTextTitle1>
          <CriaTextBody2 style={{ color: colors.text.secondary }} >
            Drawer with loading spinner
          </CriaTextBody2>
        </div>
        <div style={{ padding: spacing[4] }}>
          <Button onClick={() => openDrawer('loading')}>
            Open Loading Drawer
          </Button>
          
          <Drawer
            isOpen={drawers.loading || false}
            onClose={() => closeDrawer('loading')}
            title="Loading Content"
            position="right"
            size="md"
            loading={true}
          >
            <CriaTextBody1>This content is loading...</CriaTextBody1>
          </Drawer>
        </div>
      </Card>

      {/* Custom Header and Footer */}
      <Card style={{ padding: '0' }}>
        <div style={{ padding: spacing[4], borderBottom: '1px solid var(--color-border)' }}>
          <CriaTextTitle1>Custom Header and Footer</CriaTextTitle1>
          <CriaTextBody2 style={{ color: colors.text.secondary }} >
            Drawer with custom header and footer content
          </CriaTextBody2>
        </div>
        <div style={{ padding: spacing[4] }}>
          <Button onClick={() => openDrawer('custom')}>
            Open Custom Drawer
          </Button>
          
          <Drawer
            isOpen={drawers.custom || false}
            onClose={() => closeDrawer('custom')}
            position="right"
            size="md"
            header={
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '100%' }}>
                <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--color-primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <User size={20} color="white" />
                </div>
                <div style={{ flex: 1 }}>
                  <CriaTextTitle1>John Doe</CriaTextTitle1>
                  <CriaTextBody2 style={{ color: colors.text.secondary }}>Online</CriaTextBody2>
                </div>
                <Button variant="ghost"  onClick={() => closeDrawer('custom')}>
                  <X size={16} />
                </Button>
              </div>
            }
            footer={
              <div style={{ display: 'flex', gap: '8px' }}>
                <Button variant="ghost" >
                  <Heart size={16} />
                </Button>
                <Button variant="ghost" >
                  <Share size={16} />
                </Button>
                <Button variant="ghost" >
                  <Download size={16} />
                </Button>
                <Button variant="primary"  style={{ marginLeft: 'auto' }}>
                  <Plus size={16} />
                  Add
                </Button>
              </div>
            }
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <CriaTextBody1>
                This drawer has a custom header with user information and a custom footer with action buttons.
              </CriaTextBody1>
              <Card>
                <CriaTextTitle1>Recent Activity</CriaTextTitle1>
                <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <CriaTextBody2>• Updated profile picture</CriaTextBody2>
                  <CriaTextBody2>• Changed password</CriaTextBody2>
                  <CriaTextBody2>• Added new contact</CriaTextBody2>
                </div>
              </Card>
            </div>
          </Drawer>
        </div>
      </Card>
    </div>
  );
};

export default DrawerDemo;
