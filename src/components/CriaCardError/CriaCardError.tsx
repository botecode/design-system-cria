import React from 'react';
import { Card, CardContent, Button } from '../../index';
import { CriaTextHeadline1, CriaTextTitle1, CriaTextBody1 } from '../TextTokens';

export interface CriaCardErrorButton {
  label: string;
  icon?: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick: () => void;
}

export interface CriaCardErrorProps {
  /**
   * Error code or number to display prominently
   */
  errorCode: string;
  /**
   * Main error title
   */
  title: string;
  /**
   * Error subtitle (optional)
   */
  subtitle?: string;
  /**
   * Error description message
   */
  message: string;
  /**
   * Image to display in the error card
   */
  image?: string;
  /**
   * Error type to determine appropriate colors (defaults to 'error')
   */
  errorType?: 'error' | 'warning' | 'info';
  /**
   * Icon background color (CSS variable or hex) - defaults to appropriate theme colors
   */
  iconBackgroundColor?: string;
  /**
   * Icon color (CSS variable or hex) - defaults to appropriate theme colors
   */
  iconColor?: string;
  /**
   * Array of action buttons (1-3 buttons)
   */
  buttons?: CriaCardErrorButton[];
  /**
   * Footer content (additional help text)
   */
  footer?: React.ReactNode;
  /**
   * Additional content sections (like popular links)
   */
  additionalContent?: React.ReactNode;
  /**
   * Custom styles for the card
   */
  style?: React.CSSProperties;
  /**
   * Custom className for the card
   */
  className?: string;
}

/**
 * CriaCardError component for displaying error pages with consistent styling
 * 
 * @example
 * ```tsx
 * <CriaCardError
 *   errorCode="404"
 *   title="Page Not Found"
 *   message="Sorry, we couldn't find the page you're looking for."
 *   image="/assets/error/404.png"
 *   errorType="warning"
 *   buttons={[
 *     { label: "Search", icon: <MagnifyingGlass size={16} />, variant: "primary", onClick: handleSearch },
 *     { label: "Go Back", icon: <ArrowLeft size={16} />, variant: "outline", onClick: handleGoBack },
 *     { label: "Go Home", icon: <House size={16} />, variant: "ghost", onClick: handleGoHome }
 *   ]}
 *   footer={<div>Try checking the URL for typos...</div>}
 * />
 * ```
 */
export const CriaCardError: React.FC<CriaCardErrorProps> = ({
  errorCode,
  title,
  subtitle,
  message,
  image,
  errorType = 'error',
  iconBackgroundColor,
  iconColor,
  buttons = [],
  footer,
  additionalContent,
  style,
  className = '',
  ...props
}) => {
  // Auto-select colors based on error type if not provided
  const getDefaultColors = (type: 'error' | 'warning' | 'info') => {
    switch (type) {
      case 'warning':
        return {
          background: 'var(--cria-warning-50)',
          color: 'var(--cria-warning-500)'
        };
      case 'info':
        return {
          background: 'var(--cria-info-50)',
          color: 'var(--cria-info-500)'
        };
      case 'error':
      default:
        return {
          background: 'var(--cria-error-50)',
          color: 'var(--cria-error-500)'
        };
    }
  };

  const defaultColors = getDefaultColors(errorType);
  const finalIconBackgroundColor = iconBackgroundColor || defaultColors.background;
  const finalIconColor = iconColor || defaultColors.color;
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
        variant="elevated"
        size="lg"
        style={{ 
          maxWidth: '600px',
          width: '100%',
          textAlign: 'center',
          padding: '48px 32px',
          ...style
        }}
        className={className}
        {...props}
      >
        <CardContent>
          {/* Error Image */}
          {image && (
            <div style={{ 
              marginBottom: '32px',
              display: 'flex',
              justifyContent: 'center'
            }}>
              <img 
                src={image} 
                alt={`${errorCode} error`}
                style={{
                  width: '200px',
                  height: '200px',
                  objectFit: 'contain'
                }}
              />
            </div>
          )}

          {/* Error Code */}
          <div style={{ marginBottom: '16px' }}>
            <CriaTextHeadline1 style={{ 
              color: 'var(--cria-text-primary)',
              fontSize: '72px',
              fontWeight: '700',
              lineHeight: '1'
            }}>
              {errorCode}
            </CriaTextHeadline1>
          </div>

          {/* Error Title */}
          <div style={{ marginBottom: subtitle ? '8px' : '16px' }}>
            <CriaTextTitle1>
              {title}
            </CriaTextTitle1>
          </div>

          {/* Error Subtitle */}
          {subtitle && (
            <div style={{ marginBottom: '16px' }}>
              <CriaTextBody1 style={{ 
                fontSize: '18px',
                fontWeight: '500'
              }}>
                {subtitle}
              </CriaTextBody1>
            </div>
          )}

          {/* Error Description */}
          <div style={{ marginBottom: '32px' }}>
            <CriaTextBody1>
              {message}
            </CriaTextBody1>
          </div>

          {/* Action Buttons */}
          {buttons.length > 0 && (
            <div style={{ 
              display: 'flex', 
              gap: '12px', 
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: footer || additionalContent ? '32px' : '0'
            }}>
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  variant={button.variant || 'primary'}
                  size={button.size || 'md'}
                  onClick={button.onClick}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  {button.icon}
                  {button.label}
                </Button>
              ))}
            </div>
          )}

          {/* Footer */}
          {footer && (
            <div style={{ 
              marginTop: '32px',
              padding: '16px',
              backgroundColor: 'var(--cria-surface-secondary)',
              borderRadius: 'var(--cria-radius-md)',
              border: '1px solid var(--cria-border-primary)'
            }}>
              {footer}
            </div>
          )}

          {/* Additional Content */}
          {additionalContent && (
            <div style={{ marginTop: '24px' }}>
              {additionalContent}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CriaCardError;
