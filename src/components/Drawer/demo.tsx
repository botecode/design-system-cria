import React, { useState } from 'react';
import { Drawer } from './Drawer';
import { Button } from '../Button';
import { Typography } from '../Typography';
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
  Search,
  Filter,
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
    <div style={{ padding: '24px', backgroundColor: 'var(--color-background)', minHeight: '100vh' }}>
      <Typography variant="h1" weight="bold" style={{ marginBottom: '32px' }}>
        Drawer Component
      </Typography>
      
      <Typography variant="body" color="muted" style={{ marginBottom: '32px' }}>
        A slide-out panel component for mobile navigation, settings panels, or contextual content with customizable positions, sizes, and animations.
      </Typography>

      {/* Basic Drawer */}
      <Card style={{ marginBottom: '32px', padding: '0' }}>
        <div style={{ padding: '16px', borderBottom: '1px solid var(--color-border)' }}>
          <Typography variant="h3" weight="semibold">Basic Drawer</Typography>
          <Typography variant="body" color="muted" size="sm">
            Simple drawer with title and content
          </Typography>
        </div>
        <div style={{ padding: '16px' }}>
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
              <Typography variant="body">
                This is a basic drawer with some content. You can add any content here.
              </Typography>
              <Button variant="primary">Action Button</Button>
              <Button variant="ghost">Secondary Action</Button>
            </div>
          </Drawer>
        </div>
      </Card>

      {/* Positions */}
      <Card style={{ marginBottom: '32px', padding: '0' }}>
        <div style={{ padding: '16px', borderBottom: '1px solid var(--color-border)' }}>
          <Typography variant="h3" weight="semibold">Positions</Typography>
          <Typography variant="body" color="muted" size="sm">
            Drawers can slide in from different directions
          </Typography>
        </div>
        <div style={{ padding: '16px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
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
            <Typography variant="body">
              This drawer slides in from the right side.
            </Typography>
            <Card>
              <Typography variant="h4" weight="medium">Quick Actions</Typography>
              <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
                <Button size="sm">Edit</Button>
                <Button size="sm" variant="secondary">Share</Button>
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
            <Typography variant="body">
              This drawer slides down from the top.
            </Typography>
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
            <Typography variant="body">
              This drawer slides up from the bottom.
            </Typography>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
              <Button variant="primary">Confirm</Button>
              <Button variant="ghost">Cancel</Button>
            </div>
          </div>
        </Drawer>
      </Card>

      {/* Sizes */}
      <Card style={{ marginBottom: '32px', padding: '0' }}>
        <div style={{ padding: '16px', borderBottom: '1px solid var(--color-border)' }}>
          <Typography variant="h3" weight="semibold">Sizes</Typography>
          <Typography variant="body" color="muted" size="sm">
            Different size configurations for various use cases
          </Typography>
        </div>
        <div style={{ padding: '16px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button onClick={() => openDrawer('size-sm')} size="sm">Small</Button>
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
          size="sm"
        >
          <Typography variant="body">This is a small drawer.</Typography>
        </Drawer>

        <Drawer
          isOpen={drawers['size-md'] || false}
          onClose={() => closeDrawer('size-md')}
          title="Medium Drawer"
          position="right"
          size="md"
        >
          <Typography variant="body">This is a medium-sized drawer with more content.</Typography>
        </Drawer>

        <Drawer
          isOpen={drawers['size-lg'] || false}
          onClose={() => closeDrawer('size-lg')}
          title="Large Drawer"
          position="right"
          size="lg"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Typography variant="body">This is a large drawer with plenty of space for content.</Typography>
            <Card>
              <Typography variant="h4" weight="medium">Content Section</Typography>
              <Typography variant="body" color="muted">
                You can add multiple sections and complex layouts here.
              </Typography>
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
            <Typography variant="body">This is an extra large drawer for complex interfaces.</Typography>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <Card>
                <Typography variant="h4" weight="medium">Section 1</Typography>
                <Typography variant="body" color="muted">Content here</Typography>
              </Card>
              <Card>
                <Typography variant="h4" weight="medium">Section 2</Typography>
                <Typography variant="body" color="muted">More content</Typography>
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
            <Typography variant="h2" weight="bold">Full Screen Experience</Typography>
            <Typography variant="body">
              This drawer takes up the entire screen, perfect for complex workflows or detailed views.
            </Typography>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
              {[1, 2, 3, 4, 5, 6].map(i => (
                <Card key={i}>
                  <Typography variant="h4" weight="medium">Card {i}</Typography>
                  <Typography variant="body" color="muted">Content for card {i}</Typography>
                </Card>
              ))}
            </div>
          </div>
        </Drawer>
      </Card>

      {/* Variants */}
      <Card style={{ marginBottom: '32px', padding: '0' }}>
        <div style={{ padding: '16px', borderBottom: '1px solid var(--color-border)' }}>
          <Typography variant="h3" weight="semibold">Variants</Typography>
          <Typography variant="body" color="muted" size="sm">
            Different visual styles for various contexts
          </Typography>
        </div>
        <div style={{ padding: '16px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
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
          <Typography variant="body">This is the default variant with standard styling.</Typography>
        </Drawer>

        <Drawer
          isOpen={drawers['variant-primary'] || false}
          onClose={() => closeDrawer('variant-primary')}
          title="Primary Variant"
          position="right"
          size="md"
          variant="primary"
        >
          <Typography variant="body" color="white">
            This is the primary variant with primary color styling.
          </Typography>
        </Drawer>

        <Drawer
          isOpen={drawers['variant-secondary'] || false}
          onClose={() => closeDrawer('variant-secondary')}
          title="Secondary Variant"
          position="right"
          size="md"
          variant="secondary"
        >
          <Typography variant="body" color="white">
            This is the secondary variant with secondary color styling.
          </Typography>
        </Drawer>
      </Card>

      {/* Form Example */}
      <Card style={{ marginBottom: '32px', padding: '0' }}>
        <div style={{ padding: '16px', borderBottom: '1px solid var(--color-border)' }}>
          <Typography variant="h3" weight="semibold">Form Example</Typography>
          <Typography variant="body" color="muted" size="sm">
            Drawer with form content and custom footer
          </Typography>
        </div>
        <div style={{ padding: '16px' }}>
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
                <Typography variant="label" weight="medium" style={{ marginBottom: '8px', display: 'block' }}>
                  Name
                </Typography>
                <Input
                  value={formData.name}
                  onChange={(e) => handleFormChange('name', e.target.value)}
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <Typography variant="label" weight="medium" style={{ marginBottom: '8px', display: 'block' }}>
                  Email
                </Typography>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleFormChange('email', e.target.value)}
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <Typography variant="label" weight="medium" style={{ marginBottom: '8px', display: 'block' }}>
                  Message
                </Typography>
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
                <Typography variant="body">Enable notifications</Typography>
              </div>
            </form>
          </Drawer>
        </div>
      </Card>

      {/* Shopping Cart Example */}
      <Card style={{ marginBottom: '32px', padding: '0' }}>
        <div style={{ padding: '16px', borderBottom: '1px solid var(--color-border)' }}>
          <Typography variant="h3" weight="semibold">Shopping Cart Example</Typography>
          <Typography variant="body" color="muted" size="sm">
            Real-world example with cart items and checkout
          </Typography>
        </div>
        <div style={{ padding: '16px' }}>
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
                  <Typography variant="h4" weight="semibold">Total</Typography>
                  <Typography variant="h4" weight="bold">$127.50</Typography>
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
                    <Typography variant="body" weight="medium">{item.name}</Typography>
                    <Typography variant="body" color="muted" size="sm">Qty: {item.quantity}</Typography>
                    <Typography variant="body" weight="semibold">${item.price}</Typography>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Trash size={16} />
                  </Button>
                </div>
              ))}
            </div>
          </Drawer>
        </div>
      </Card>

      {/* Settings Panel Example */}
      <Card style={{ marginBottom: '32px', padding: '0' }}>
        <div style={{ padding: '16px', borderBottom: '1px solid var(--color-border)' }}>
          <Typography variant="h3" weight="semibold">Settings Panel Example</Typography>
          <Typography variant="body" color="muted" size="sm">
            Complex settings interface with multiple sections
          </Typography>
        </div>
        <div style={{ padding: '16px' }}>
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
                <Typography variant="h4" weight="semibold" style={{ marginBottom: '12px' }}>
                  Account Settings
                </Typography>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body">Email Notifications</Typography>
                    <Switch defaultChecked />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body">SMS Notifications</Typography>
                    <Switch />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body">Push Notifications</Typography>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
              
              <div>
                <Typography variant="h4" weight="semibold" style={{ marginBottom: '12px' }}>
                  Privacy Settings
                </Typography>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body">Profile Visibility</Typography>
                    <Switch defaultChecked />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body">Data Collection</Typography>
                    <Switch />
                  </div>
                </div>
              </div>
              
              <div>
                <Typography variant="h4" weight="semibold" style={{ marginBottom: '12px' }}>
                  Appearance
                </Typography>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <Button size="sm" variant="primary">Light</Button>
                  <Button size="sm" variant="ghost">Dark</Button>
                  <Button size="sm" variant="ghost">Auto</Button>
                </div>
              </div>
            </div>
          </Drawer>
        </div>
      </Card>

      {/* Loading State */}
      <Card style={{ marginBottom: '32px', padding: '0' }}>
        <div style={{ padding: '16px', borderBottom: '1px solid var(--color-border)' }}>
          <Typography variant="h3" weight="semibold">Loading State</Typography>
          <Typography variant="body" color="muted" size="sm">
            Drawer with loading spinner
          </Typography>
        </div>
        <div style={{ padding: '16px' }}>
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
            <Typography variant="body">This content is loading...</Typography>
          </Drawer>
        </div>
      </Card>

      {/* Custom Header and Footer */}
      <Card style={{ padding: '0' }}>
        <div style={{ padding: '16px', borderBottom: '1px solid var(--color-border)' }}>
          <Typography variant="h3" weight="semibold">Custom Header and Footer</Typography>
          <Typography variant="body" color="muted" size="sm">
            Drawer with custom header and footer content
          </Typography>
        </div>
        <div style={{ padding: '16px' }}>
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
                  <Typography variant="h4" weight="semibold">John Doe</Typography>
                  <Typography variant="body" color="muted" size="sm">Online</Typography>
                </div>
                <Button variant="ghost" size="sm" onClick={() => closeDrawer('custom')}>
                  <X size={16} />
                </Button>
              </div>
            }
            footer={
              <div style={{ display: 'flex', gap: '8px' }}>
                <Button variant="ghost" size="sm">
                  <Heart size={16} />
                </Button>
                <Button variant="ghost" size="sm">
                  <Share size={16} />
                </Button>
                <Button variant="ghost" size="sm">
                  <Download size={16} />
                </Button>
                <Button variant="primary" size="sm" style={{ marginLeft: 'auto' }}>
                  <Plus size={16} />
                  Add
                </Button>
              </div>
            }
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <Typography variant="body">
                This drawer has a custom header with user information and a custom footer with action buttons.
              </Typography>
              <Card>
                <Typography variant="h4" weight="medium">Recent Activity</Typography>
                <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <Typography variant="body" size="sm">• Updated profile picture</Typography>
                  <Typography variant="body" size="sm">• Changed password</Typography>
                  <Typography variant="body" size="sm">• Added new contact</Typography>
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
