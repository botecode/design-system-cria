import React, { useState } from 'react';
import { Topbar } from './Topbar';
import { Button } from '../Button';
import { Badge } from '../Badge';
import { Input } from '../Input';
import { Typography } from '../Typography';
import { Card } from '../Card';
import { 
  House, 
  User, 
  Bell, 
  Search, 
  List, 
  X,
  Gear,
  UserCircle,
  SignOut,
  Plus,
  Download,
  Upload
} from 'phosphor-react';

const TopbarDemo: React.FC = () => {
  const [activeItem, setActiveItem] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const navigationItems = [
    { 
      id: 'home', 
      label: 'Home', 
      href: '/home', 
      icon: <House size={16} /> 
    },
    { 
      id: 'dashboard', 
      label: 'Dashboard', 
      href: '/dashboard', 
      icon: <Gear size={16} /> 
    },
    { 
      id: 'projects', 
      label: 'Projects', 
      href: '/projects', 
      icon: <Plus size={16} />,
      badge: <Badge variant="primary" size="sm">3</Badge>
    },
    { 
      id: 'team', 
      label: 'Team', 
      href: '/team', 
      icon: <User size={16} /> 
    },
    { 
      id: 'settings', 
      label: 'Settings', 
      href: '/settings', 
      icon: <Gear size={16} /> 
    }
  ];

  const userMenu = (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <UserCircle size={20} />
      <span>John Doe</span>
    </div>
  );

  const searchComponent = (
    <Input
      placeholder="Search..."
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      size="sm"
      style={{ width: '200px' }}
    />
  );

  const notifications = (
    <Button variant="ghost" size="sm" style={{ position: 'relative' }}>
      <Bell size={20} />
      <Badge 
        variant="danger" 
        size="sm" 
        style={{ 
          position: 'absolute', 
          top: '-4px', 
          right: '-4px',
          minWidth: '18px',
          height: '18px',
          fontSize: '10px'
        }}
      >
        5
      </Badge>
    </Button>
  );

  return (
    <div style={{ padding: '24px', backgroundColor: 'var(--color-background)', minHeight: '100vh' }}>
      <Typography variant="h1" weight="bold" style={{ marginBottom: '32px' }}>
        Topbar Component
      </Typography>
      
      <Typography variant="body" color="muted" style={{ marginBottom: '32px' }}>
        A global navigation header component with customizable variants, responsive design, and accessibility features.
      </Typography>

      {/* Basic Topbar */}
      <Card style={{ marginBottom: '32px', padding: '0' }}>
        <div style={{ padding: '16px', borderBottom: '1px solid var(--color-border)' }}>
          <Typography variant="h3" weight="semibold">Basic Topbar</Typography>
          <Typography variant="body" color="muted" size="sm">
            Default topbar with logo, navigation, and actions
          </Typography>
        </div>
        <div style={{ padding: '16px' }}>
          <Topbar
            logo={<Typography variant="h4" weight="bold" color="primary">CR_IA.UI</Typography>}
            navigation={navigationItems}
            actions={[
              <Button key="download" variant="ghost" size="sm">
                <Download size={16} />
                Download
              </Button>,
              <Button key="upload" variant="primary" size="sm">
                <Upload size={16} />
                Upload
              </Button>
            ]}
            search={searchComponent}
            notifications={notifications}
            userMenu={userMenu}
            activeItem={activeItem}
            onMobileToggle={setMobileMenuOpen}
            mobileMenuOpen={mobileMenuOpen}
          />
        </div>
      </Card>

      {/* Variants */}
      <Card style={{ marginBottom: '32px', padding: '0' }}>
        <div style={{ padding: '16px', borderBottom: '1px solid var(--color-border)' }}>
          <Typography variant="h3" weight="semibold">Variants</Typography>
          <Typography variant="body" color="muted" size="sm">
            Different visual styles for various use cases
          </Typography>
        </div>
        <div style={{ padding: '16px' }}>
          <div style={{ marginBottom: '16px' }}>
            <Typography variant="h4" weight="medium" style={{ marginBottom: '8px' }}>Primary Variant</Typography>
            <Topbar
              variant="primary"
              logo={<Typography variant="h4" weight="bold" color="white">CR_IA.UI</Typography>}
              navigation={navigationItems.slice(0, 3)}
              actions={[
                <Button key="action" variant="secondary" size="sm">Action</Button>
              ]}
              showBorder={true}
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <Typography variant="h4" weight="medium" style={{ marginBottom: '8px' }}>Secondary Variant</Typography>
            <Topbar
              variant="secondary"
              logo={<Typography variant="h4" weight="bold" color="white">CR_IA.UI</Typography>}
              navigation={navigationItems.slice(0, 3)}
              actions={[
                <Button key="action" variant="primary" size="sm">Action</Button>
              ]}
              showBorder={true}
            />
          </div>

          <div>
            <Typography variant="h4" weight="medium" style={{ marginBottom: '8px' }}>Minimal Variant</Typography>
            <Topbar
              variant="minimal"
              logo={<Typography variant="h4" weight="bold">CR_IA.UI</Typography>}
              navigation={navigationItems.slice(0, 3)}
              actions={[
                <Button key="action" variant="ghost" size="sm">Action</Button>
              ]}
              showBorder={true}
            />
          </div>
        </div>
      </Card>

      {/* Sizes */}
      <Card style={{ marginBottom: '32px', padding: '0' }}>
        <div style={{ padding: '16px', borderBottom: '1px solid var(--color-border)' }}>
          <Typography variant="h3" weight="semibold">Sizes</Typography>
          <Typography variant="body" color="muted" size="sm">
            Different height configurations for various layouts
          </Typography>
        </div>
        <div style={{ padding: '16px' }}>
          <div style={{ marginBottom: '16px' }}>
            <Typography variant="h4" weight="medium" style={{ marginBottom: '8px' }}>Small (sm)</Typography>
            <Topbar
              size="sm"
              logo={<Typography variant="h5" weight="bold">CR_IA.UI</Typography>}
              navigation={navigationItems.slice(0, 3)}
              actions={[
                <Button key="action" variant="ghost" size="sm">Action</Button>
              ]}
              showBorder={true}
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <Typography variant="h4" weight="medium" style={{ marginBottom: '8px' }}>Medium (md) - Default</Typography>
            <Topbar
              size="md"
              logo={<Typography variant="h4" weight="bold">CR_IA.UI</Typography>}
              navigation={navigationItems.slice(0, 3)}
              actions={[
                <Button key="action" variant="ghost" size="sm">Action</Button>
              ]}
              showBorder={true}
            />
          </div>

          <div>
            <Typography variant="h4" weight="medium" style={{ marginBottom: '8px' }}>Large (lg)</Typography>
            <Topbar
              size="lg"
              logo={<Typography variant="h3" weight="bold">CR_IA.UI</Typography>}
              navigation={navigationItems.slice(0, 3)}
              actions={[
                <Button key="action" variant="ghost" size="sm">Action</Button>
              ]}
              showBorder={true}
            />
          </div>
        </div>
      </Card>

      {/* Positions */}
      <Card style={{ marginBottom: '32px', padding: '0' }}>
        <div style={{ padding: '16px', borderBottom: '1px solid var(--color-border)' }}>
          <Typography variant="h3" weight="semibold">Positions</Typography>
          <Typography variant="body" color="muted" size="sm">
            Different positioning options for various layouts
          </Typography>
        </div>
        <div style={{ padding: '16px' }}>
          <div style={{ marginBottom: '16px' }}>
            <Typography variant="h4" weight="medium" style={{ marginBottom: '8px' }}>Static Position</Typography>
            <Topbar
              position="static"
              logo={<Typography variant="h4" weight="bold">CR_IA.UI</Typography>}
              navigation={navigationItems.slice(0, 3)}
              showBorder={true}
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <Typography variant="h4" weight="medium" style={{ marginBottom: '8px' }}>Sticky Position</Typography>
            <Topbar
              position="sticky"
              logo={<Typography variant="h4" weight="bold">CR_IA.UI</Typography>}
              navigation={navigationItems.slice(0, 3)}
              showBorder={true}
              showShadow={true}
            />
          </div>

          <div>
            <Typography variant="h4" weight="medium" style={{ marginBottom: '8px' }}>Fixed Position</Typography>
            <Topbar
              position="fixed"
              logo={<Typography variant="h4" weight="bold">CR_IA.UI</Typography>}
              navigation={navigationItems.slice(0, 3)}
              showBorder={true}
              showShadow={true}
              zIndex={1000}
            />
          </div>
        </div>
      </Card>

      {/* Visual Effects */}
      <Card style={{ marginBottom: '32px', padding: '0' }}>
        <div style={{ padding: '16px', borderBottom: '1px solid var(--color-border)' }}>
          <Typography variant="h3" weight="semibold">Visual Effects</Typography>
          <Typography variant="body" color="muted" size="sm">
            Borders, shadows, and other visual enhancements
          </Typography>
        </div>
        <div style={{ padding: '16px' }}>
          <div style={{ marginBottom: '16px' }}>
            <Typography variant="h4" weight="medium" style={{ marginBottom: '8px' }}>With Border</Typography>
            <Topbar
              logo={<Typography variant="h4" weight="bold">CR_IA.UI</Typography>}
              navigation={navigationItems.slice(0, 3)}
              showBorder={true}
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <Typography variant="h4" weight="medium" style={{ marginBottom: '8px' }}>With Shadow</Typography>
            <Topbar
              logo={<Typography variant="h4" weight="bold">CR_IA.UI</Typography>}
              navigation={navigationItems.slice(0, 3)}
              showShadow={true}
            />
          </div>

          <div>
            <Typography variant="h4" weight="medium" style={{ marginBottom: '8px' }}>Full Width</Typography>
            <Topbar
              logo={<Typography variant="h4" weight="bold">CR_IA.UI</Typography>}
              navigation={navigationItems.slice(0, 3)}
              fullWidth={true}
              showBorder={true}
            />
          </div>
        </div>
      </Card>

      {/* Custom Content */}
      <Card style={{ marginBottom: '32px', padding: '0' }}>
        <div style={{ padding: '16px', borderBottom: '1px solid var(--color-border)' }}>
          <Typography variant="h3" weight="semibold">Custom Content</Typography>
          <Typography variant="body" color="muted" size="sm">
            Header and footer content areas
          </Typography>
        </div>
        <div style={{ padding: '16px' }}>
          <Topbar
            logo={<Typography variant="h4" weight="bold">CR_IA.UI</Typography>}
            navigation={navigationItems.slice(0, 3)}
            headerContent={
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Badge variant="success" size="sm">Beta</Badge>
                <Typography variant="caption" color="muted">Welcome to the new interface</Typography>
              </div>
            }
            footerContent={
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Typography variant="caption" color="muted">Last updated: 2 minutes ago</Typography>
              </div>
            }
            showBorder={true}
          />
        </div>
      </Card>

      {/* Loading State */}
      <Card style={{ marginBottom: '32px', padding: '0' }}>
        <div style={{ padding: '16px', borderBottom: '1px solid var(--color-border)' }}>
          <Typography variant="h3" weight="semibold">Loading State</Typography>
          <Typography variant="body" color="muted" size="sm">
            Disabled state with reduced opacity
          </Typography>
        </div>
        <div style={{ padding: '16px' }}>
          <Topbar
            logo={<Typography variant="h4" weight="bold">CR_IA.UI</Typography>}
            navigation={navigationItems.slice(0, 3)}
            actions={[
              <Button key="action" variant="ghost" size="sm">Action</Button>
            ]}
            loading={true}
            showBorder={true}
          />
        </div>
      </Card>

      {/* Interactive Example */}
      <Card style={{ marginBottom: '32px', padding: '0' }}>
        <div style={{ padding: '16px', borderBottom: '1px solid var(--color-border)' }}>
          <Typography variant="h3" weight="semibold">Interactive Example</Typography>
          <Typography variant="body" color="muted" size="sm">
            Click navigation items to see active state changes
          </Typography>
        </div>
        <div style={{ padding: '16px' }}>
          <Topbar
            logo={<Typography variant="h4" weight="bold">CR_IA.UI</Typography>}
            navigation={navigationItems}
            actions={[
              <Button key="download" variant="ghost" size="sm">
                <Download size={16} />
                Download
              </Button>,
              <Button key="upload" variant="primary" size="sm">
                <Upload size={16} />
                Upload
              </Button>
            ]}
            search={searchComponent}
            notifications={notifications}
            userMenu={userMenu}
            activeItem={activeItem}
            onMobileToggle={setMobileMenuOpen}
            mobileMenuOpen={mobileMenuOpen}
            showBorder={true}
            showShadow={true}
          />
          <div style={{ marginTop: '16px', padding: '12px', backgroundColor: 'var(--color-background-subtle)', borderRadius: 'var(--radius-sm)' }}>
            <Typography variant="caption" color="muted">
              Active item: <strong>{activeItem}</strong> | Search: <strong>"{searchValue}"</strong>
            </Typography>
          </div>
        </div>
      </Card>

      {/* Usage Examples */}
      <Card style={{ padding: '0' }}>
        <div style={{ padding: '16px', borderBottom: '1px solid var(--color-border)' }}>
          <Typography variant="h3" weight="semibold">Usage Examples</Typography>
          <Typography variant="body" color="muted" size="sm">
            Common implementation patterns
          </Typography>
        </div>
        <div style={{ padding: '16px' }}>
          <div style={{ marginBottom: '16px' }}>
            <Typography variant="h4" weight="medium" style={{ marginBottom: '8px' }}>E-commerce Header</Typography>
            <Topbar
              logo={<Typography variant="h4" weight="bold" color="primary">ShopApp</Typography>}
              navigation={[
                { id: 'products', label: 'Products', href: '/products' },
                { id: 'categories', label: 'Categories', href: '/categories' },
                { id: 'deals', label: 'Deals', href: '/deals', badge: <Badge variant="danger" size="sm">Hot</Badge> },
                { id: 'support', label: 'Support', href: '/support' }
              ]}
              search={<Input placeholder="Search products..." size="sm" style={{ width: '250px' }} />}
              actions={[
                <Button key="cart" variant="ghost" size="sm">
                  Cart (3)
                </Button>
              ]}
              userMenu={<UserCircle size={20} />}
              showBorder={true}
            />
          </div>

          <div>
            <Typography variant="h4" weight="medium" style={{ marginBottom: '8px' }}>Dashboard Header</Typography>
            <Topbar
              variant="primary"
              logo={<Typography variant="h4" weight="bold" color="white">Analytics</Typography>}
              navigation={[
                { id: 'overview', label: 'Overview', href: '/overview' },
                { id: 'reports', label: 'Reports', href: '/reports' },
                { id: 'settings', label: 'Settings', href: '/settings' }
              ]}
              actions={[
                <Button key="export" variant="secondary" size="sm">
                  Export
                </Button>,
                <Button key="share" variant="secondary" size="sm">
                  Share
                </Button>
              ]}
              notifications={notifications}
              userMenu={<UserCircle size={20} color="white" />}
              showBorder={true}
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TopbarDemo;
