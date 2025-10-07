import React, { useState, useEffect } from 'react';
import { PageLoadingProgress } from './PageLoadingProgress';
import { CriaTextHeadline1, CriaTextTitle1, CriaTextBody1, CriaTextBody2 } from '../TextTokens';
import { Card } from '../Card';
import { Button } from '../Button';
import { colors, spacing, radii } from '../../tokens';

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
    <div style={{ padding: spacing[6], maxWidth: '1200px', margin: '0 auto' }}>
      <CriaTextHeadline1 style={{ marginBottom: spacing[4] }}>
        Page Loading Progress Demo
      </CriaTextHeadline1>
      
      <CriaTextBody1 style={{ marginBottom: spacing[8] }}>
        The Page Loading Progress component provides a visual indicator for page loading states. 
        It appears at the top or bottom of the page and shows progress with smooth animations.
      </CriaTextBody1>

      {/* Interactive Demo Controls */}
      <Card style={{ marginBottom: spacing[8], padding: spacing[4] }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: spacing[4], flexWrap: 'wrap' }}>
          <Button onClick={startLoading} variant="primary" disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Start Loading Simulation'}
          </Button>
          <Button onClick={simulateProgress} variant="outline">
            Simulate Progress
          </Button>
          <div style={{ display: 'flex', alignItems: 'center', gap: spacing[2] }}>
            <CriaTextBody2 style={{ color: colors.text.secondary }}>
              Current Progress:
            </CriaTextBody2>
            <CriaTextBody2 style={{ fontWeight: '600' }}>
              {Math.round(isLoading ? progress : demoProgress)}%
            </CriaTextBody2>
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

      <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[8] }}>
        {/* Basic Progress Examples */}
        <Card style={{ padding: spacing[6] }}>
          <CriaTextTitle1  style={{ marginBottom: spacing[4] }}>
            Basic Progress Examples
          </CriaTextBody2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
            <div>
              <CriaTextBody2  style={{ marginBottom: spacing[2] }}>
                Small Progress (25%):
              </CriaTextBody2>
              <PageLoadingProgress progress={25} size="sm" />
            </div>
            <div>
              <CriaTextBody2  style={{ marginBottom: spacing[2] }}>
                Medium Progress (50%):
              </CriaTextBody2>
              <PageLoadingProgress progress={50} size="md" />
            </div>
            <div>
              <CriaTextBody2  style={{ marginBottom: spacing[2] }}>
                Large Progress (75%):
              </CriaTextBody2>
              <PageLoadingProgress progress={75} size="lg" />
            </div>
            <div>
              <CriaTextBody2  style={{ marginBottom: spacing[2] }}>
                Complete Progress (100%):
              </CriaTextBody2>
              <PageLoadingProgress progress={100} />
            </div>
          </div>
        </Card>

        {/* Color Variants */}
        <Card style={{ padding: spacing[6] }}>
          <CriaTextTitle1  style={{ marginBottom: spacing[4] }}>
            Color Variants
          </CriaTextBody2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
            <div>
              <CriaTextBody2  style={{ marginBottom: spacing[2] }}>
                Primary (Default):
              </CriaTextBody2>
              <PageLoadingProgress progress={60} color="primary" />
            </div>
            <div>
              <CriaTextBody2  style={{ marginBottom: spacing[2] }}>
                Secondary:
              </CriaTextBody2>
              <PageLoadingProgress progress={60} style={{ color: colors.text.secondary }} />
            </div>
            <div>
              <CriaTextBody2  style={{ marginBottom: spacing[2] }}>
                Success:
              </CriaTextBody2>
              <PageLoadingProgress progress={60} color="success" />
            </div>
            <div>
              <CriaTextBody2  style={{ marginBottom: spacing[2] }}>
                Warning:
              </CriaTextBody2>
              <PageLoadingProgress progress={60} color="warning" />
            </div>
            <div>
              <CriaTextBody2  style={{ marginBottom: spacing[2] }}>
                Error:
              </CriaTextBody2>
              <PageLoadingProgress progress={60} color="error" />
            </div>
          </div>
        </Card>

        {/* Thickness Variants */}
        <Card style={{ padding: spacing[6] }}>
          <CriaTextTitle1  style={{ marginBottom: spacing[4] }}>
            Thickness Variants
          </CriaTextBody2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
            <div>
              <CriaTextBody2  style={{ marginBottom: spacing[2] }}>
                Thin:
              </CriaTextBody2>
              <PageLoadingProgress progress={70} thickness="thin" />
            </div>
            <div>
              <CriaTextBody2  style={{ marginBottom: spacing[2] }}>
                Normal:
              </CriaTextBody2>
              <PageLoadingProgress progress={70} thickness="normal" />
            </div>
            <div>
              <CriaTextBody2  style={{ marginBottom: spacing[2] }}>
                Thick:
              </CriaTextBody2>
              <PageLoadingProgress progress={70} thickness="thick" />
            </div>
          </div>
        </Card>

        {/* Position Variants */}
        <Card style={{ padding: spacing[6] }}>
          <CriaTextTitle1  style={{ marginBottom: spacing[4] }}>
            Position Variants
          </CriaTextBody2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
            <div>
              <CriaTextBody2  style={{ marginBottom: spacing[2] }}>
                Top (Default):
              </CriaTextBody2>
              <PageLoadingProgress progress={80} position="top" />
            </div>
            <div>
              <CriaTextBody2  style={{ marginBottom: spacing[2] }}>
                Bottom:
              </CriaTextBody2>
              <PageLoadingProgress progress={80} position="bottom" />
            </div>
          </div>
        </Card>

        {/* Special States */}
        <Card style={{ padding: spacing[6] }}>
          <CriaTextTitle1  style={{ marginBottom: spacing[4] }}>
            Special States
          </CriaTextBody2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
            <div>
              <CriaTextBody2  style={{ marginBottom: spacing[2] }}>
                Indeterminate (Unknown Progress):
              </CriaTextBody2>
              <PageLoadingProgress indeterminate label="Loading..." />
            </div>
            <div>
              <CriaTextBody2  style={{ marginBottom: spacing[2] }}>
                Animated Progress:
              </CriaTextBody2>
              <PageLoadingProgress progress={65} animated label="Processing..." />
            </div>
            <div>
              <CriaTextBody2  style={{ marginBottom: spacing[2] }}>
                Smooth Transitions:
              </CriaTextBody2>
              <PageLoadingProgress progress={45} smooth label="Smooth loading" />
            </div>
          </div>
        </Card>

        {/* Usage Examples */}
        <Card style={{ padding: spacing[6] }}>
          <CriaTextTitle1  style={{ marginBottom: spacing[4] }}>
            Usage Examples
          </CriaTextBody2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
            <div>
              <CriaTextBody2  style={{ marginBottom: spacing[2] }}>
                Basic Usage:
              </CriaTextBody2>
              <pre style={{
                backgroundColor: colors.background.secondary,
                padding: spacing[3],
                borderRadius: radii.md,
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
              <CriaTextBody2  style={{ marginBottom: spacing[2] }}>
                Advanced Configuration:
              </CriaTextBody2>
              <pre style={{
                backgroundColor: colors.background.secondary,
                padding: spacing[3],
                borderRadius: radii.md,
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
              <CriaTextBody2  style={{ marginBottom: spacing[2] }}>
                Indeterminate Loading:
              </CriaTextBody2>
              <pre style={{
                backgroundColor: colors.background.secondary,
                padding: spacing[3],
                borderRadius: radii.md,
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
