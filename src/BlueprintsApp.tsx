import React, { useState } from 'react';
import { Typography, Button, ThemeProvider, ThemeToggle, Dropdown } from './index.ts';
import { CriaTextHeadline1, CriaTextTitle1, CriaTextBody1 } from './components/TextTokens';
import { ArrowLeft, Monitor, Robot, CaretDown } from 'phosphor-react';
import Error500 from './pages/Error500';
import Error404 from './pages/Error404';
import './fonts.css';

interface BlueprintsAppProps {
  onBackToDesignSystem?: () => void;
}

type BlueprintPage = 'welcome' | 'error-500' | 'error-404';

const BlueprintsApp: React.FC<BlueprintsAppProps> = ({ onBackToDesignSystem }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState<BlueprintPage>('welcome');

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
    { value: 'welcome', label: 'Welcome', icon: <Monitor size={16} /> },
    { value: 'error-500', label: 'Error 500', icon: <CaretDown size={16} /> },
    { value: 'error-404', label: 'Error 404', icon: <CaretDown size={16} /> }
  ];

  const handlePageChange = (value: string) => {
    setCurrentPage(value as BlueprintPage);
  };

  const renderWelcomePage = () => (
    <div style={{ padding: '32px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Welcome Section */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ marginBottom: '16px' }}>
            <CriaTextHeadline1>
              Blueprints Studio
            </CriaTextHeadline1>
          </div>
          <div style={{ marginBottom: '24px' }}>
            <CriaTextTitle1>
              Build your website views using our design system
            </CriaTextTitle1>
          </div>
          <div>
            <CriaTextBody1>
              Create, prototype, and build beautiful interfaces with CRIA_UI components
            </CriaTextBody1>
          </div>
        </div>

        {/* Quick Start Cards */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '24px',
          marginBottom: '48px'
        }}>
          <div style={{ 
            padding: '24px', 
            backgroundColor: 'var(--cria-surface-primary)', 
            borderRadius: 'var(--cria-radius-lg)', 
            border: '1px solid var(--cria-border-primary)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
          }}>
            <div style={{ marginBottom: '12px' }}>
              <CriaTextTitle1>
                🎨 Start from Scratch
              </CriaTextTitle1>
            </div>
            <div style={{ marginBottom: '16px' }}>
              <CriaTextBody1>
                Begin with a blank canvas and build your interface using our component library.
              </CriaTextBody1>
            </div>
            <Button variant="primary" size="md">
              Create New Blueprint
            </Button>
          </div>

          <div style={{ 
            padding: '24px', 
            backgroundColor: 'var(--cria-surface-primary)', 
            borderRadius: 'var(--cria-radius-lg)', 
            border: '1px solid var(--cria-border-primary)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
          }}>
            <div style={{ marginBottom: '12px' }}>
              <CriaTextTitle1>
                📋 Use Templates
              </CriaTextTitle1>
            </div>
            <div style={{ marginBottom: '16px' }}>
              <CriaTextBody1>
                Start with pre-built templates for common page layouts and patterns.
              </CriaTextBody1>
            </div>
            <Button variant="outline" size="md">
              Browse Templates
            </Button>
          </div>

          <div style={{ 
            padding: '24px', 
            backgroundColor: 'var(--cria-surface-primary)', 
            borderRadius: 'var(--cria-radius-lg)', 
            border: '1px solid var(--cria-border-primary)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
          }}>
            <div style={{ marginBottom: '12px' }}>
              <CriaTextTitle1>
                🔧 Import Existing
              </CriaTextTitle1>
            </div>
            <div style={{ marginBottom: '16px' }}>
              <CriaTextBody1>
                Import your existing designs and convert them to use CRIA_UI components.
              </CriaTextBody1>
            </div>
            <Button variant="outline" size="md">
              Import Project
            </Button>
          </div>
        </div>

        {/* Recent Blueprints */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ marginBottom: '24px' }}>
            <CriaTextTitle1>Recent Blueprints</CriaTextTitle1>
          </div>
          <div style={{ 
            padding: '24px', 
            backgroundColor: 'var(--cria-surface-secondary)', 
            borderRadius: 'var(--cria-radius-lg)', 
            border: '1px solid var(--cria-border-primary)',
            textAlign: 'center'
          }}>
            <CriaTextBody1 style={{ color: 'var(--cria-text-secondary)' }}>
              No blueprints yet. Create your first blueprint to get started!
            </CriaTextBody1>
          </div>
        </div>

        {/* Footer */}
        <div style={{ 
          textAlign: 'center', 
          padding: '32px 0',
          borderTop: '1px solid var(--cria-border-primary)',
          color: 'var(--cria-text-secondary)'
        }}>
          <CriaTextBody1>
            Built with ❤️ using CRIA_UI Design System
          </CriaTextBody1>
        </div>
      </div>
    </div>
  );

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'error-500':
        return <Error500 />;
      case 'error-404':
        return <Error404 />;
      case 'welcome':
      default:
        return renderWelcomePage();
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

          {/* Center - Page Selector */}
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
          minHeight: 'calc(100vh - 64px)'
        }}>
          {renderCurrentPage()}
        </main>
      </div>
    </ThemeProvider>
  );
};

export default BlueprintsApp;