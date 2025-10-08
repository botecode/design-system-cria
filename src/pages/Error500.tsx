import React from 'react';
import { Button, Card } from '../index.ts';
import { CriaTextHeadline1, CriaTextTitle1, CriaTextBody1 } from '../components/TextTokens';
import { Warning, ArrowLeft, ArrowClockwise, House } from 'phosphor-react';

const Error500: React.FC = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  const handleGoHome = () => {
    window.location.href = '/';
  };

  const handleGoBack = () => {
    window.history.back();
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
            backgroundColor: 'var(--cria-error-50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto'
          }}>
            <Warning size={48} color="var(--cria-error-500)" />
          </div>
        </div>

        {/* Error Code */}
        <div style={{ marginBottom: '16px' }}>
          <CriaTextHeadline1 style={{ 
            color: 'var(--cria-error-500)',
            fontSize: '72px',
            fontWeight: '700',
            lineHeight: '1'
          }}>
            500
          </CriaTextHeadline1>
        </div>

        {/* Error Title */}
        <div style={{ marginBottom: '16px' }}>
          <CriaTextTitle1>
            Internal Server Error
          </CriaTextTitle1>
        </div>

        {/* Error Description */}
        <div style={{ marginBottom: '32px' }}>
          <CriaTextBody1 style={{ color: 'var(--cria-text-secondary)' }}>
            Oops! Something went wrong on our end. We're working to fix this issue. 
            Please try again in a few moments.
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
            onClick={handleRefresh}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <ArrowClockwise size={16} />
            Try Again
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
            If this problem persists, please contact our support team or check our status page for updates.
          </CriaTextBody1>
        </div>
      </Card>
    </div>
  );
};

export default Error500;
