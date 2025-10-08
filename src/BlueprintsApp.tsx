import React, { useState } from 'react';
import { Typography, Button, ThemeProvider, ThemeToggle, Dropdown } from './index.ts';
import { CriaTextHeadline1, CriaTextTitle1, CriaTextBody1 } from './components/TextTokens';
import { ArrowLeft, Robot, CaretDown, DeviceMobile, DeviceTablet, Desktop, Laptop, Buildings } from 'phosphor-react';
import Error500 from './pages/Error500';
import Error404 from './pages/Error404';
import Companies from './blueprints/companies/Companies';
import './fonts.css';

interface BlueprintsAppProps {
  onBackToDesignSystem?: () => void;
}

type BlueprintPage = 'error-500' | 'error-404' | 'companies';
type DeviceType = 'desktop' | 'laptop' | 'tablet' | 'mobile';

const BlueprintsApp: React.FC<BlueprintsAppProps> = ({ onBackToDesignSystem }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState<BlueprintPage>('companies');
  const [deviceType, setDeviceType] = useState<DeviceType>('desktop');

  const handleBackToDesignSystem = () => {
    if (onBackToDesignSystem) {
      onBackToDesignSystem();
    }
  };

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    // Apply theme change logic here if needed
  };

  const pageOptions = [
    { value: 'companies', label: 'Companies Dashboard', icon: <Buildings size={16} /> },
    { value: 'error-500', label: 'Error 500', icon: <CaretDown size={16} /> },
    { value: 'error-404', label: 'Error 404', icon: <CaretDown size={16} /> }
  ];

  const deviceOptions = [
    { value: 'desktop', label: 'Desktop', icon: <Desktop size={16} /> },
    { value: 'laptop', label: 'Laptop', icon: <Laptop size={16} /> },
    { value: 'tablet', label: 'Tablet', icon: <DeviceTablet size={16} /> },
    { value: 'mobile', label: 'Mobile', icon: <DeviceMobile size={16} /> }
  ];

  const handlePageChange = (value: string | string[]) => {
    setCurrentPage((Array.isArray(value) ? value[0] : value) as BlueprintPage);
  };

  const handleDeviceChange = (value: string | string[]) => {
    setDeviceType((Array.isArray(value) ? value[0] : value) as DeviceType);
  };

  const getDeviceStyles = () => {
    switch (deviceType) {
      case 'mobile':
        return {
          maxWidth: '375px',
          margin: '0 auto',
          minHeight: '100vh',
          backgroundColor: 'var(--cria-bg-primary)',
          boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
          borderRadius: '0'
        };
      case 'tablet':
        return {
          maxWidth: '768px',
          margin: '0 auto',
          minHeight: '100vh',
          backgroundColor: 'var(--cria-bg-primary)',
          boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px'
        };
      case 'laptop':
        return {
          maxWidth: '1024px',
          margin: '0 auto',
          minHeight: '100vh',
          backgroundColor: 'var(--cria-bg-primary)',
          boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px'
        };
      case 'desktop':
      default:
        return {
          maxWidth: '100%',
          margin: '0',
          minHeight: '100vh',
          backgroundColor: 'var(--cria-bg-primary)',
          boxShadow: 'none',
          borderRadius: '0'
        };
    }
  };


  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'companies':
        return <Companies />;
      case 'error-500':
        return <Error500 />;
      case 'error-404':
        return <Error404 />;
      default:
        return <Companies />;
    }
  };

  return (
    <ThemeProvider>
      <div style={{ 
        minHeight: '100vh', 
        backgroundColor: 'var(--cria-bg-primary)',
        position: 'relative'
      }}>
        {/* Top Bar */}
        <div style={{
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          height: '64px',
          backgroundColor: 'var(--cria-surface-primary)',
          borderBottom: '1px solid var(--cria-border-primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 24px',
          zIndex: 1000,
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
        }}>
          {/* Left side - Back button and title */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleBackToDesignSystem}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--cria-text-secondary)'
              }}
            >
              <ArrowLeft size={16} />
              
            </Button>
            
            <div style={{ 
              height: '24px', 
              width: '1px', 
              backgroundColor: 'var(--cria-border-primary)' 
            }} />
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Monitor size={24} color="var(--cria-primary)" />
              <CriaTextTitle1>CR_IA Blueprints</CriaTextTitle1>
            </div>
          </div>

          {/* Center - Page and Device Selectors */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Dropdown
              options={pageOptions}
              value={currentPage}
              onChange={handlePageChange}
              placeholder="Select a page"
              size="md"
              variant="outlined"
              style={{ minWidth: '160px' }}
            />
            <Dropdown
              options={deviceOptions}
              value={deviceType}
              onChange={handleDeviceChange}
              placeholder="Select device"
              size="md"
              variant="outlined"
              style={{ minWidth: '140px' }}
            />
          </div>

          {/* Right side - Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* Theme Toggle */}
            <div style={{
              backgroundColor: 'var(--cria-surface-secondary)',
              borderRadius: 'var(--cria-radius-md)',
              padding: '8px',
              border: '1px solid var(--cria-border-primary)'
            }}>
              <ThemeToggle 
                variant="icon" 
                size="sm" 
                showLabel={false}
              />
            </div>

            {/* Robot Icon */}
            <Button
              variant="ghost"
              size="sm"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'var(--cria-primary)',
                color: 'white',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
              }}
              title="Agent Dev - Desenvolvimento assistido por IA"
            >
              <Robot size={20} />
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <main style={{ 
          marginTop: '64px',
          minHeight: 'calc(100vh - 64px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: deviceType === 'desktop' ? '0' : '20px',
          backgroundColor: deviceType === 'desktop' ? 'transparent' : 'var(--cria-bg-secondary)',
          position: 'relative'
        }}>
          {/* Device Preview Background Overlay */}
          {deviceType !== 'desktop' && (
            <div style={{
              position: 'fixed',
              top: '64px',
              left: '0',
              right: '0',
              bottom: '0',
              backgroundColor: 'var(--cria-gray-900)',
              zIndex: -1
            }} />
          )}
          
          <div style={getDeviceStyles()}>
            {renderCurrentPage()}
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default BlueprintsApp;