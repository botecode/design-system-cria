import React, { useState } from 'react';
import { Typography } from '../Typography';
import { Button } from '../Button';
import { Card, CardHeader, CardContent } from '../Card';
import { Snackbar } from './Snackbar';

export const SnackbarDemo: React.FC = () => {
  const [snackbars, setSnackbars] = useState<Array<{
    id: string;
    message: string;
    variant: 'default' | 'success' | 'error' | 'warning' | 'info';
    position: 'top' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    open: boolean;
    title?: string;
    action?: { label: string; onClick: () => void };
    autoHideDuration?: number;
    dismissible?: boolean;
  }>>([]);

  const showSnackbar = (config: Omit<typeof snackbars[0], 'id' | 'open'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    setSnackbars(prev => [...prev, { ...config, id, open: true }]);
  };

  const closeSnackbar = (id: string) => {
    setSnackbars(prev => prev.map(snackbar => 
      snackbar.id === id ? { ...snackbar, open: false } : snackbar
    ));
    
    // Remove from array after animation
    setTimeout(() => {
      setSnackbars(prev => prev.filter(snackbar => snackbar.id !== id));
    }, 300);
  };

  return (
    <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
      <Typography variant="title1" weight="bold" style={{ marginBottom: '32px' }}>
        Snackbar Demo
      </Typography>

      <Typography variant="body" style={{ marginBottom: '32px' }}>
        Snackbars provide brief messages about app processes at the bottom of the screen. 
        They can be dismissed manually or auto-dismiss after a timeout.
      </Typography>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '32px' }}>
        <Card variant="elevated">
          <CardHeader>
            <Typography variant="h3" weight="medium">
              Basic Variants
            </Typography>
          </CardHeader>
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Button 
                variant="outline" 
                onClick={() => showSnackbar({
                  message: 'This is a default snackbar message',
                  variant: 'default',
                  position: 'top'
                })}
              >
                Default Snackbar
              </Button>
              
              <Button 
                variant="primary" 
                onClick={() => showSnackbar({
                  message: 'Operation completed successfully!',
                  variant: 'success',
                  position: 'top'
                })}
              >
                Success Snackbar
              </Button>
              
              <Button 
                variant="danger" 
                onClick={() => showSnackbar({
                  message: 'Something went wrong. Please try again.',
                  variant: 'error',
                  position: 'top'
                })}
              >
                Error Snackbar
              </Button>
              
              <Button 
                variant="warning" 
                onClick={() => showSnackbar({
                  message: 'Please check your input before proceeding.',
                  variant: 'warning',
                  position: 'top'
                })}
              >
                Warning Snackbar
              </Button>
              
              <Button 
                variant="secondary" 
                onClick={() => showSnackbar({
                  message: 'Here is some helpful information.',
                  variant: 'info',
                  position: 'top'
                })}
              >
                Info Snackbar
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card variant="elevated">
          <CardHeader>
            <Typography variant="h3" weight="medium">
              With Actions
            </Typography>
          </CardHeader>
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Button 
                variant="outline" 
                onClick={() => showSnackbar({
                  message: 'File deleted successfully',
                  variant: 'success',
                  position: 'top',
                  action: {
                    label: 'Undo',
                    onClick: () => console.log('Undo clicked')
                  }
                })}
              >
                With Undo Action
              </Button>
              
              <Button 
                variant="outline" 
                onClick={() => showSnackbar({
                  message: 'Settings saved',
                  variant: 'info',
                  position: 'top',
                  action: {
                    label: 'View',
                    onClick: () => console.log('View clicked')
                  }
                })}
              >
                With View Action
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card variant="elevated">
          <CardHeader>
            <Typography variant="h3" weight="medium">
              With Titles
            </Typography>
          </CardHeader>
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Button 
                variant="outline" 
                onClick={() => showSnackbar({
                  title: 'Upload Complete',
                  message: 'Your file has been uploaded successfully.',
                  variant: 'success',
                  position: 'top'
                })}
              >
                Success with Title
              </Button>
              
              <Button 
                variant="outline" 
                onClick={() => showSnackbar({
                  title: 'Connection Error',
                  message: 'Unable to connect to the server. Please check your internet connection.',
                  variant: 'error',
                  position: 'top'
                })}
              >
                Error with Title
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card variant="elevated">
          <CardHeader>
            <Typography variant="h3" weight="medium">
              Positioning
            </Typography>
          </CardHeader>
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Button 
                variant="outline" 
                onClick={() => showSnackbar({
                  message: 'Top positioned snackbar',
                  variant: 'info',
                  position: 'top'
                })}
              >
                Top
              </Button>
              
              <Button 
                variant="outline" 
                onClick={() => showSnackbar({
                  message: 'Bottom positioned snackbar',
                  variant: 'info',
                  position: 'bottom'
                })}
              >
                Bottom
              </Button>
              
              <Button 
                variant="outline" 
                onClick={() => showSnackbar({
                  message: 'Top-left positioned snackbar',
                  variant: 'info',
                  position: 'top-left'
                })}
              >
                Top Left
              </Button>
              
              <Button 
                variant="outline" 
                onClick={() => showSnackbar({
                  message: 'Top-right positioned snackbar',
                  variant: 'info',
                  position: 'top-right'
                })}
              >
                Top Right
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card variant="elevated">
          <CardHeader>
            <Typography variant="h3" weight="medium">
              Auto-dismiss Options
            </Typography>
          </CardHeader>
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Button 
                variant="outline" 
                onClick={() => showSnackbar({
                  message: 'This will auto-dismiss in 2 seconds',
                  variant: 'info',
                  position: 'top',
                  autoHideDuration: 2000
                })}
              >
                Quick Dismiss (2s)
              </Button>
              
              <Button 
                variant="outline" 
                onClick={() => showSnackbar({
                  message: 'This will auto-dismiss in 8 seconds',
                  variant: 'info',
                  position: 'top',
                  autoHideDuration: 8000
                })}
              >
                Slow Dismiss (8s)
              </Button>
              
              <Button 
                variant="outline" 
                onClick={() => showSnackbar({
                  message: 'This will not auto-dismiss',
                  variant: 'info',
                  position: 'top',
                  autoHideDuration: 0
                })}
              >
                No Auto-dismiss
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card variant="elevated">
          <CardHeader>
            <Typography variant="h3" weight="medium">
              Dismissible Options
            </Typography>
          </CardHeader>
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Button 
                variant="outline" 
                onClick={() => showSnackbar({
                  message: 'This can be dismissed by clicking outside',
                  variant: 'info',
                  position: 'top',
                  dismissible: true
                })}
              >
                Dismissible
              </Button>
              
              <Button 
                variant="outline" 
                onClick={() => showSnackbar({
                  message: 'This cannot be dismissed by clicking outside',
                  variant: 'info',
                  position: 'top',
                  dismissible: false
                })}
              >
                Not Dismissible
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Render all snackbars */}
      {snackbars.map(snackbar => (
        <Snackbar
          key={snackbar.id}
          message={snackbar.message}
          title={snackbar.title}
          variant={snackbar.variant}
          position={snackbar.position}
          open={snackbar.open}
          action={snackbar.action}
          autoHideDuration={snackbar.autoHideDuration}
          dismissible={snackbar.dismissible}
          onClose={() => closeSnackbar(snackbar.id)}
        />
      ))}
    </div>
  );
};
