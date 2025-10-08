import React from 'react';
import { Button, Card } from '../index.ts';
import { CriaTextHeadline1, CriaTextTitle1, CriaTextBody1 } from '../components/TextTokens';
import { MagnifyingGlass, ArrowLeft, House, ArrowClockwise } from 'phosphor-react';

const Error404: React.FC = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  const handleGoHome = () => {
    window.location.href = '/';
  };

  const handleGoBack = () => {
    window.history.back();
  };

  const handleSearch = () => {
    // Focus on search or redirect to search page
    const searchInput = document.querySelector('input[type="search"]') as HTMLInputElement;
    if (searchInput) {
      searchInput.focus();
    } else {
      // If no search input, redirect to home with search intent
      window.location.href = '/#search';
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      backgroundColor: 'var(--cria-bg-primary)'
    }}>
      <Card 
        style={{ 
          maxWidth: '600px',
          width: '100%',
          textAlign: 'center',
          padding: '48px 32px'
        }}
      >
        {/* Error Icon */}
        <div style={{ 
          marginBottom: '32px',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <div style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            backgroundColor: 'var(--cria-warning-50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto'
          }}>
            <MagnifyingGlass size={48} color="var(--cria-warning-500)" />
          </div>
        </div>

        {/* Error Code */}
        <div style={{ marginBottom: '16px' }}>
          <CriaTextHeadline1 style={{ 
            color: 'var(--cria-warning-500)',
            fontSize: '72px',
            fontWeight: '700',
            lineHeight: '1'
          }}>
            404
          </CriaTextHeadline1>
        </div>

        {/* Error Title */}
        <div style={{ marginBottom: '16px' }}>
          <CriaTextTitle1>
            Page Not Found
          </CriaTextTitle1>
        </div>

        {/* Error Description */}
        <div style={{ marginBottom: '32px' }}>
          <CriaTextBody1 style={{ color: 'var(--cria-text-secondary)' }}>
            Sorry, we couldn't find the page you're looking for. It might have been moved, 
            deleted, or you might have typed the wrong URL.
          </CriaTextBody1>
        </div>

        {/* Action Buttons */}
        <div style={{ 
          display: 'flex', 
          gap: '12px', 
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <Button
            variant="primary"
            size="md"
            onClick={handleSearch}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <MagnifyingGlass size={16} />
            Search
          </Button>
          
          <Button
            variant="outline"
            size="md"
            onClick={handleGoBack}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <ArrowLeft size={16} />
            Go Back
          </Button>
          
          <Button
            variant="ghost"
            size="md"
            onClick={handleGoHome}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <House size={16} />
            Go Home
          </Button>
        </div>

        {/* Additional Help */}
        <div style={{ 
          marginTop: '32px',
          padding: '16px',
          backgroundColor: 'var(--cria-surface-secondary)',
          borderRadius: 'var(--cria-radius-md)',
          border: '1px solid var(--cria-border-primary)'
        }}>
          <CriaTextBody1 style={{ 
            color: 'var(--cria-text-secondary)',
            fontSize: '14px'
          }}>
            Try checking the URL for typos, or use the search function to find what you're looking for.
          </CriaTextBody1>
        </div>

        {/* Popular Links Section */}
        <div style={{ 
          marginTop: '24px',
          padding: '20px',
          backgroundColor: 'var(--cria-surface-primary)',
          borderRadius: 'var(--cria-radius-md)',
          border: '1px solid var(--cria-border-primary)'
        }}>
          <CriaTextTitle1 style={{ 
            marginBottom: '16px',
            fontSize: '16px'
          }}>
            Popular Pages
          </CriaTextTitle1>
          <div style={{ 
            display: 'flex', 
            gap: '8px', 
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Button variant="ghost" size="sm" onClick={() => window.location.href = '/'}>
              Home
            </Button>
            <Button variant="ghost" size="sm" onClick={() => window.location.href = '/#about'}>
              About
            </Button>
            <Button variant="ghost" size="sm" onClick={() => window.location.href = '/#contact'}>
              Contact
            </Button>
            <Button variant="ghost" size="sm" onClick={() => window.location.href = '/#help'}>
              Help
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Error404;
