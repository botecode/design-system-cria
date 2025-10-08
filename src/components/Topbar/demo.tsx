import React, { useState } from 'react';
import { Topbar } from './Topbar';
import { Button } from '../Button';
import { Badge } from '../Badge';
import { Input } from '../Input';
import { CriaTextHeadline1, CriaTextHeadline2, CriaTextTitle1, CriaTextBody1, CriaTextBody2 } from '../TextTokens';
import { colors, spacing, radii } from '../../tokens';
import { Card } from '../Card';
import { 
  House, 
  User, 
  Bell, 
  MagnifyingGlass as Search, 
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
        variant="error" 
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
    <div style={{ padding: spacing[6], backgroundColor: colors.background, minHeight: '100vh' }}>
      <div style={{ marginBottom: spacing[8] }}>
        <CriaTextHeadline1>
          Topbar Component
        </CriaTextHeadline1>
      </div>
      
      <div style={{ marginBottom: spacing[8], color: colors.text.secondary }}>
        <CriaTextBody1>
          A global navigation header component with customizable variants, responsive design, and accessibility features.
        </CriaTextBody1>
      </div>

      {/* Basic Topbar */}
      <Card style={{ marginBottom: spacing[8], padding: '0' }}>
        <div style={{ padding: spacing[4], borderBottom: '1px solid var(--color-border)' }}>
          <CriaTextTitle1>Basic Topbar</CriaTextTitle1>
          <div style={{ color: colors.text.secondary }}>
            <CriaTextBody2>
              Default topbar with logo, navigation, and actions
            </CriaTextBody2>
          </div>
        </div>
        <div style={{ padding: spacing[4] }}>
          <Topbar
            logo={<CriaTextTitle1 color="primary">CR_IA.UI</CriaTextTitle1>}
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
      <Card style={{ marginBottom: spacing[8], padding: '0' }}>
        <div style={{ padding: spacing[4], borderBottom: '1px solid var(--color-border)' }}>
          <CriaTextTitle1>Variants</CriaTextTitle1>
          <div style={{ color: colors.text.secondary }}>
            <CriaTextBody2>
              Different visual styles for various use cases
            </CriaTextBody2>
          </div>
        </div>
        <div style={{ padding: spacing[4] }}>
          <div style={{ marginBottom: '16px' }}>
            <div style={{ marginBottom: spacing[2] }}>
              <CriaTextTitle1>Primary Variant</CriaTextTitle1>
            </div>
            <Topbar
              variant="primary"
              logo={<CriaTextTitle1 color="white">CR_IA.UI</CriaTextTitle1>}
              navigation={navigationItems.slice(0, 3)}
              actions={[
                <Button key="action" variant="secondary" size="sm">Action</Button>
              ]}
              showBorder={true}
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <div style={{ marginBottom: spacing[2] }}>
              <CriaTextTitle1>Secondary Variant</CriaTextTitle1>
            </div>
            <Topbar
              variant="secondary"
              logo={<CriaTextTitle1 color="white">CR_IA.UI</CriaTextTitle1>}
              navigation={navigationItems.slice(0, 3)}
              actions={[
                <Button key="action" variant="primary" size="sm">Action</Button>
              ]}
              showBorder={true}
            />
          </div>

          <div>
            <div style={{ marginBottom: spacing[2] }}>
              <CriaTextTitle1>Minimal Variant</CriaTextTitle1>
            </div>
            <Topbar
              variant="minimal"
              logo={<CriaTextTitle1>CR_IA.UI</CriaTextTitle1>}
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
      <Card style={{ marginBottom: spacing[8], padding: '0' }}>
        <div style={{ padding: spacing[4], borderBottom: '1px solid var(--color-border)' }}>
          <CriaTextTitle1>Sizes</CriaTextTitle1>
          <div style={{ color: colors.text.secondary }}>
            <CriaTextBody2>
              Different height configurations for various layouts
            </CriaTextBody2>
          </div>
        </div>
        <div style={{ padding: spacing[4] }}>
          <div style={{ marginBottom: '16px' }}>
            <div style={{ marginBottom: spacing[2] }}>
              <CriaTextTitle1>Small (sm)</CriaTextTitle1>
            </div>
            <Topbar
              size="sm"
              logo={<CriaTextTitle1>CR_IA.UI</CriaTextTitle1>}
              navigation={navigationItems.slice(0, 3)}
              actions={[
                <Button key="action" variant="ghost" size="sm">Action</Button>
              ]}
              showBorder={true}
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <div style={{ marginBottom: spacing[2] }}>
              <CriaTextTitle1>Medium (md) - Default</CriaTextTitle1>
            </div>
            <Topbar
              size="md"
              logo={<CriaTextTitle1>CR_IA.UI</CriaTextTitle1>}
              navigation={navigationItems.slice(0, 3)}
              actions={[
                <Button key="action" variant="ghost" size="sm">Action</Button>
              ]}
              showBorder={true}
            />
          </div>

          <div>
            <div style={{ marginBottom: spacing[2] }}>
              <CriaTextTitle1>Large (lg)</CriaTextTitle1>
            </div>
            <Topbar
              size="lg"
              logo={<CriaTextTitle1>CR_IA.UI</CriaTextTitle1>}
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
      <Card style={{ marginBottom: spacing[8], padding: '0' }}>
        <div style={{ padding: spacing[4], borderBottom: '1px solid var(--color-border)' }}>
          <CriaTextTitle1>Positions</CriaTextTitle1>
          <div style={{ color: colors.text.secondary }}>
            <CriaTextBody2>
              Different positioning options for various layouts
            </CriaTextBody2>
          </div>
        </div>
        <div style={{ padding: spacing[4] }}>
          <div style={{ marginBottom: '16px' }}>
            <div style={{ marginBottom: spacing[2] }}>
              <CriaTextTitle1>Static Position</CriaTextTitle1>
            </div>
            <Topbar
              position="static"
              logo={<CriaTextTitle1>CR_IA.UI</CriaTextTitle1>}
              navigation={navigationItems.slice(0, 3)}
              showBorder={true}
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <div style={{ marginBottom: spacing[2] }}>
              <CriaTextTitle1>Sticky Position</CriaTextTitle1>
            </div>
            <Topbar
              position="sticky"
              logo={<CriaTextTitle1>CR_IA.UI</CriaTextTitle1>}
              navigation={navigationItems.slice(0, 3)}
              showBorder={true}
              showShadow={true}
            />
          </div>

          <div>
            <div style={{ marginBottom: spacing[2] }}>
              <CriaTextTitle1>Fixed Position</CriaTextTitle1>
            </div>
            <Topbar
              position="fixed"
              logo={<CriaTextTitle1>CR_IA.UI</CriaTextTitle1>}
              navigation={navigationItems.slice(0, 3)}
              showBorder={true}
              showShadow={true}
              zIndex={1000}
            />
          </div>
        </div>
      </Card>

      {/* Visual Effects */}
      <Card style={{ marginBottom: spacing[8], padding: '0' }}>
        <div style={{ padding: spacing[4], borderBottom: '1px solid var(--color-border)' }}>
          <CriaTextTitle1>Visual Effects</CriaTextTitle1>
          <div style={{ color: colors.text.secondary }}>
            <CriaTextBody2>
              Borders, shadows, and other visual enhancements
            </CriaTextBody2>
          </div>
        </div>
        <div style={{ padding: spacing[4] }}>
          <div style={{ marginBottom: '16px' }}>
            <div style={{ marginBottom: spacing[2] }}>
              <CriaTextTitle1>With Border</CriaTextTitle1>
            </div>
            <Topbar
              logo={<CriaTextTitle1>CR_IA.UI</CriaTextTitle1>}
              navigation={navigationItems.slice(0, 3)}
              showBorder={true}
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <div style={{ marginBottom: spacing[2] }}>
              <CriaTextTitle1>With Shadow</CriaTextTitle1>
            </div>
            <Topbar
              logo={<CriaTextTitle1>CR_IA.UI</CriaTextTitle1>}
              navigation={navigationItems.slice(0, 3)}
              showShadow={true}
            />
          </div>

          <div>
            <div style={{ marginBottom: spacing[2] }}>
              <CriaTextTitle1>Full Width</CriaTextTitle1>
            </div>
            <Topbar
              logo={<CriaTextTitle1>CR_IA.UI</CriaTextTitle1>}
              navigation={navigationItems.slice(0, 3)}
              fullWidth={true}
              showBorder={true}
            />
          </div>
        </div>
      </Card>

      {/* Custom Content */}
      <Card style={{ marginBottom: spacing[8], padding: '0' }}>
        <div style={{ padding: spacing[4], borderBottom: '1px solid var(--color-border)' }}>
          <CriaTextTitle1>Custom Content</CriaTextTitle1>
          <div style={{ color: colors.text.secondary }}>
            <CriaTextBody2>
              Header and footer content areas
            </CriaTextBody2>
          </div>
        </div>
        <div style={{ padding: spacing[4] }}>
          <Topbar
            logo={<CriaTextTitle1>CR_IA.UI</CriaTextTitle1>}
            navigation={navigationItems.slice(0, 3)}
            headerContent={
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Badge variant="success" size="sm">Beta</Badge>
                <div style={{ color: colors.text.secondary }}>
                  <CriaTextBody2>Welcome to the new interface</CriaTextBody2>
                </div>
              </div>
            }
            footerContent={
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ color: colors.text.secondary }}>
                  <CriaTextBody2>Last updated: 2 minutes ago</CriaTextBody2>
                </div>
              </div>
            }
            showBorder={true}
          />
        </div>
      </Card>

      {/* Loading State */}
      <Card style={{ marginBottom: spacing[8], padding: '0' }}>
        <div style={{ padding: spacing[4], borderBottom: '1px solid var(--color-border)' }}>
          <CriaTextTitle1>Loading State</CriaTextTitle1>
          <div style={{ color: colors.text.secondary }}>
            <CriaTextBody2>
              Disabled state with reduced opacity
            </CriaTextBody2>
          </div>
        </div>
        <div style={{ padding: spacing[4] }}>
          <Topbar
            logo={<CriaTextTitle1>CR_IA.UI</CriaTextTitle1>}
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
      <Card style={{ marginBottom: spacing[8], padding: '0' }}>
        <div style={{ padding: spacing[4], borderBottom: '1px solid var(--color-border)' }}>
          <CriaTextTitle1>Interactive Example</CriaTextTitle1>
          <div style={{ color: colors.text.secondary }}>
            <CriaTextBody2>
              Click navigation items to see active state changes
            </CriaTextBody2>
          </div>
        </div>
        <div style={{ padding: spacing[4] }}>
          <Topbar
            logo={<CriaTextTitle1>CR_IA.UI</CriaTextTitle1>}
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
            <div style={{ color: colors.text.secondary }}>
              <CriaTextBody2>
                Active item: <strong>{activeItem}</strong> | Search: <strong>"{searchValue}"</strong>
              </CriaTextBody2>
            </div>
          </div>
        </div>
      </Card>

      {/* Usage Examples */}
      <Card style={{ padding: '0' }}>
        <div style={{ padding: spacing[4], borderBottom: '1px solid var(--color-border)' }}>
          <CriaTextTitle1>Usage Examples</CriaTextTitle1>
          <div style={{ color: colors.text.secondary }}>
            <CriaTextBody2>
              Common implementation patterns
            </CriaTextBody2>
          </div>
        </div>
        <div style={{ padding: spacing[4] }}>
          <div style={{ marginBottom: '16px' }}>
            <div style={{ marginBottom: spacing[2] }}>
              <CriaTextTitle1>E-commerce Header</CriaTextTitle1>
            </div>
            <Topbar
              logo={<CriaTextTitle1 color="primary">ShopApp</CriaTextTitle1>}
              navigation={[
                { id: 'products', label: 'Products', href: '/products' },
                { id: 'categories', label: 'Categories', href: '/categories' },
                { id: 'deals', label: 'Deals', href: '/deals', badge: <Badge variant="error" size="sm">Hot</Badge> },
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
            <div style={{ marginBottom: spacing[2] }}>
              <CriaTextTitle1>Dashboard Header</CriaTextTitle1>
            </div>
            <Topbar
              variant="primary"
              logo={<CriaTextTitle1 color="white">Analytics</CriaTextTitle1>}
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
