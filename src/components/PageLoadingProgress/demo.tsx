import React, { useState, useEffect } from 'react';
import { PageLoadingProgress } from './PageLoadingProgress';
import { Typography } from '../Typography';
import { Card } from '../Card';
import { Button } from '../Button';
import { colors, spacing } from '../../tokens';

export const PageLoadingProgressDemo: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [demoProgress, setDemoProgress] = useState(0);

  // Simulate loading progress
  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsLoading(false);
            return 0;
          }
          return prev + Math.random() * 15;
        });
      }, 200);
      return () => clearInterval(interval);
    }
  }, [isLoading]);

  const startLoading = () => {
    setProgress(0);
    setIsLoading(true);
  };

  const simulateProgress = () => {
    setDemoProgress(0);
    const interval = setInterval(() => {
      setDemoProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 100);
  };

  return (
    <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
      <Typography variant="title1" weight="bold" style={{ marginBottom: '16px' }}>
        Page Loading Progress Demo
      </Typography>
      
      <Typography variant="body" style={{ marginBottom: '32px' }}>
        The Page Loading Progress component provides a visual indicator for page loading states. 
        It appears at the top or bottom of the page and shows progress with smooth animations.
      </Typography>

      {/* Interactive Demo Controls */}
      <Card style={{ marginBottom: '32px', padding: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <Button onClick={startLoading} variant="primary" disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Start Loading Simulation'}
          </Button>
          <Button onClick={simulateProgress} variant="outline">
            Simulate Progress
          </Button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Typography variant="body2" color="secondary">
              Current Progress:
            </Typography>
            <Typography variant="body2" weight="semiBold">
              {Math.round(isLoading ? progress : demoProgress)}%
            </Typography>
          </div>
        </div>
      </Card>

      {/* Global Loading Progress */}
      {isLoading && (
        <PageLoadingProgress 
          progress={progress} 
          label="Loading page content..."
          smooth
          animated
        />
      )}

      {/* Demo Progress */}
      {demoProgress > 0 && (
        <PageLoadingProgress 
          progress={demoProgress} 
          label="Demo progress"
          smooth
        />
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {/* Basic Progress Examples */}
        <Card style={{ padding: '24px' }}>
          <Typography variant="h3" weight="semiBold" style={{ marginBottom: '16px' }}>
            Basic Progress Examples
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <Typography variant="body2" weight="medium" style={{ marginBottom: '8px' }}>
                Small Progress (25%):
              </Typography>
              <PageLoadingProgress progress={25} size="sm" />
            </div>
            <div>
              <Typography variant="body2" weight="medium" style={{ marginBottom: '8px' }}>
                Medium Progress (50%):
              </Typography>
              <PageLoadingProgress progress={50} size="md" />
            </div>
            <div>
              <Typography variant="body2" weight="medium" style={{ marginBottom: '8px' }}>
                Large Progress (75%):
              </Typography>
              <PageLoadingProgress progress={75} size="lg" />
            </div>
            <div>
              <Typography variant="body2" weight="medium" style={{ marginBottom: '8px' }}>
                Complete Progress (100%):
              </Typography>
              <PageLoadingProgress progress={100} />
            </div>
          </div>
        </Card>

        {/* Color Variants */}
        <Card style={{ padding: '24px' }}>
          <Typography variant="h3" weight="semiBold" style={{ marginBottom: '16px' }}>
            Color Variants
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <Typography variant="body2" weight="medium" style={{ marginBottom: '8px' }}>
                Primary (Default):
              </Typography>
              <PageLoadingProgress progress={60} color="primary" />
            </div>
            <div>
              <Typography variant="body2" weight="medium" style={{ marginBottom: '8px' }}>
                Secondary:
              </Typography>
              <PageLoadingProgress progress={60} color="secondary" />
            </div>
            <div>
              <Typography variant="body2" weight="medium" style={{ marginBottom: '8px' }}>
                Success:
              </Typography>
              <PageLoadingProgress progress={60} color="success" />
            </div>
            <div>
              <Typography variant="body2" weight="medium" style={{ marginBottom: '8px' }}>
                Warning:
              </Typography>
              <PageLoadingProgress progress={60} color="warning" />
            </div>
            <div>
              <Typography variant="body2" weight="medium" style={{ marginBottom: '8px' }}>
                Error:
              </Typography>
              <PageLoadingProgress progress={60} color="error" />
            </div>
          </div>
        </Card>

        {/* Thickness Variants */}
        <Card style={{ padding: '24px' }}>
          <Typography variant="h3" weight="semiBold" style={{ marginBottom: '16px' }}>
            Thickness Variants
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <Typography variant="body2" weight="medium" style={{ marginBottom: '8px' }}>
                Thin:
              </Typography>
              <PageLoadingProgress progress={70} thickness="thin" />
            </div>
            <div>
              <Typography variant="body2" weight="medium" style={{ marginBottom: '8px' }}>
                Normal:
              </Typography>
              <PageLoadingProgress progress={70} thickness="normal" />
            </div>
            <div>
              <Typography variant="body2" weight="medium" style={{ marginBottom: '8px' }}>
                Thick:
              </Typography>
              <PageLoadingProgress progress={70} thickness="thick" />
            </div>
          </div>
        </Card>

        {/* Position Variants */}
        <Card style={{ padding: '24px' }}>
          <Typography variant="h3" weight="semiBold" style={{ marginBottom: '16px' }}>
            Position Variants
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <Typography variant="body2" weight="medium" style={{ marginBottom: '8px' }}>
                Top (Default):
              </Typography>
              <PageLoadingProgress progress={80} position="top" />
            </div>
            <div>
              <Typography variant="body2" weight="medium" style={{ marginBottom: '8px' }}>
                Bottom:
              </Typography>
              <PageLoadingProgress progress={80} position="bottom" />
            </div>
          </div>
        </Card>

        {/* Special States */}
        <Card style={{ padding: '24px' }}>
          <Typography variant="h3" weight="semiBold" style={{ marginBottom: '16px' }}>
            Special States
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <Typography variant="body2" weight="medium" style={{ marginBottom: '8px' }}>
                Indeterminate (Unknown Progress):
              </Typography>
              <PageLoadingProgress indeterminate label="Loading..." />
            </div>
            <div>
              <Typography variant="body2" weight="medium" style={{ marginBottom: '8px' }}>
                Animated Progress:
              </Typography>
              <PageLoadingProgress progress={65} animated label="Processing..." />
            </div>
            <div>
              <Typography variant="body2" weight="medium" style={{ marginBottom: '8px' }}>
                Smooth Transitions:
              </Typography>
              <PageLoadingProgress progress={45} smooth label="Smooth loading" />
            </div>
          </div>
        </Card>

        {/* Usage Examples */}
        <Card style={{ padding: '24px' }}>
          <Typography variant="h3" weight="semiBold" style={{ marginBottom: '16px' }}>
            Usage Examples
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <Typography variant="body2" weight="medium" style={{ marginBottom: '8px' }}>
                Basic Usage:
              </Typography>
              <pre style={{
                backgroundColor: colors.background.secondary,
                padding: '12px',
                borderRadius: '8px',
                fontSize: '14px',
                overflow: 'auto',
                color: colors.text.primary,
              }}>
{`<PageLoadingProgress 
  progress={75} 
  label="Loading page..." 
/>`}
              </pre>
            </div>

            <div>
              <Typography variant="body2" weight="medium" style={{ marginBottom: '8px' }}>
                Advanced Configuration:
              </Typography>
              <pre style={{
                backgroundColor: colors.background.secondary,
                padding: '12px',
                borderRadius: '8px',
                fontSize: '14px',
                overflow: 'auto',
                color: colors.text.primary,
              }}>
{`<PageLoadingProgress 
  progress={progress}
  color="success"
  size="lg"
  thickness="thick"
  position="top"
  animated
  smooth
  label="Uploading files..."
  onComplete={(progress) => console.log('Complete!')}
  onProgressChange={(progress) => setProgress(progress)}
/>`}
              </pre>
            </div>

            <div>
              <Typography variant="body2" weight="medium" style={{ marginBottom: '8px' }}>
                Indeterminate Loading:
              </Typography>
              <pre style={{
                backgroundColor: colors.background.secondary,
                padding: '12px',
                borderRadius: '8px',
                fontSize: '14px',
                overflow: 'auto',
                color: colors.text.primary,
              }}>
{`<PageLoadingProgress 
  indeterminate
  label="Please wait..."
  color="primary"
  animated
/>`}
              </pre>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PageLoadingProgressDemo;
