import React, { useState, useCallback } from 'react';
import { NotificationCenter, Notification } from './NotificationCenter';
import { Typography } from '../Typography';
import { Card, CardContent, CardHeader } from '../Card';
import { Grid, Row, Column } from '../Grid';
import { Button } from '../Button';
import { Check, Warning, Info, XCircle, Bell, Plus, Trash, Eye } from 'phosphor-react';
import { spacing, colors } from '../../tokens';

const NotificationCenterDemo: React.FC = () => {
  const [notifications, setNotifications] = useState<any[]>([]);
  const [position, setPosition] = useState<'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center'>('top-right');
  const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [variant, setVariant] = useState<'default' | 'compact'>('default');
  const [showProgress, setShowProgress] = useState(false);
  const [showIcons, setShowIcons] = useState(true);
  const [stackDirection, setStackDirection] = useState<'up' | 'down'>('down');
  const [animation, setAnimation] = useState<'slide' | 'fade' | 'scale'>('slide');

  const addNotification = useCallback((type: 'success' | 'error' | 'warning' | 'info', title: string, message: string, duration = 5000) => {
    const id = Date.now().toString();
    const newNotification = {
      id,
      title,
      message,
      type,
      duration,
      dismissible: true,
      icon: type === 'success' ? <Check /> : type === 'error' ? <XCircle /> : type === 'warning' ? <Warning /> : <Info />,
    };
    setNotifications(prev => [...prev, newNotification]);
  }, []);

  const handleDismiss = useCallback((id: string) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  }, []);

  const handleAction = useCallback((id: string, notification: any) => {
    console.log('Action clicked:', id, notification);
    // You can add custom action logic here
  }, []);

  const clearAllNotifications = useCallback(() => {
    setNotifications([]);
  }, []);

  const addSuccessNotification = () => addNotification('success', 'Success!', 'Operation completed successfully');
  const addErrorNotification = () => addNotification('error', 'Error!', 'Something went wrong. Please try again.');
  const addWarningNotification = () => addNotification('warning', 'Warning!', 'Please check your input before proceeding.');
  const addInfoNotification = () => addNotification('info', 'Info', 'Here is some useful information for you.');
  const addPersistentNotification = () => addNotification('info', 'Persistent', 'This notification will not auto-dismiss', 0);
  const addQuickNotification = () => addNotification('success', 'Quick Success', 'This will disappear quickly', 1000);

  const addNotificationWithAction = () => {
    const id = Date.now().toString();
    const newNotification = {
      id,
      title: 'Action Required',
      message: 'Click the button below to perform an action',
      type: 'info' as const,
      duration: 0,
      dismissible: true,
      icon: <Eye />,
      action: {
        label: 'View Details',
        onClick: handleAction,
      },
    };
    setNotifications(prev => [...prev, newNotification]);
  };

  return (
    <div style={{ padding: spacing[8], minHeight: '100vh' }}>
      <Typography variant="h1" weight="bold" style={{ marginBottom: spacing[6] }}>
        Notification Center
      </Typography>

      <Typography variant="body" style={{ marginBottom: spacing[8] }}>
        A component for displaying stacked toast notifications and global alerts with customizable positioning, animations, and auto-dismiss functionality.
      </Typography>

      {/* Controls */}
      <Card style={{ marginBottom: spacing[6] }}>
        <CardHeader>
          <Typography variant="h2" weight="semibold">
            Controls
          </Typography>
        </CardHeader>
        <CardContent>
          <Grid gap="md">
            <Row>
              <Column span={12}>
                <Typography variant="h3" weight="medium" style={{ marginBottom: spacing[3] }}>
                  Add Notifications
                </Typography>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: spacing[2], marginBottom: spacing[4] }}>
                  <Button variant="success" size="sm" onClick={addSuccessNotification}>
                    <Check size={16} style={{ marginRight: spacing[1] }} />
                    Success
                  </Button>
                  <Button variant="error" size="sm" onClick={addErrorNotification}>
                    <XCircle size={16} style={{ marginRight: spacing[1] }} />
                    Error
                  </Button>
                  <Button variant="warning" size="sm" onClick={addWarningNotification}>
                    <Warning size={16} style={{ marginRight: spacing[1] }} />
                    Warning
                  </Button>
                  <Button variant="info" size="sm" onClick={addInfoNotification}>
                    <Info size={16} style={{ marginRight: spacing[1] }} />
                    Info
                  </Button>
                  <Button variant="outlined" size="sm" onClick={addPersistentNotification}>
                    <Bell size={16} style={{ marginRight: spacing[1] }} />
                    Persistent
                  </Button>
                  <Button variant="outlined" size="sm" onClick={addQuickNotification}>
                    <Plus size={16} style={{ marginRight: spacing[1] }} />
                    Quick
                  </Button>
                  <Button variant="primary" size="sm" onClick={addNotificationWithAction}>
                    <Eye size={16} style={{ marginRight: spacing[1] }} />
                    With Action
                  </Button>
                </div>
              </Column>
            </Row>
            <Row>
              <Column span={12}>
                <Typography variant="h3" weight="medium" style={{ marginBottom: spacing[3] }}>
                  Configuration
                </Typography>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: spacing[4], marginBottom: spacing[4] }}>
                  <div>
                    <Typography variant="bodySmall" weight="medium" style={{ marginBottom: spacing[1] }}>
                      Position
                    </Typography>
                    <select 
                      value={position} 
                      onChange={(e) => setPosition(e.target.value as any)}
                      style={{ padding: spacing[2], borderRadius: '4px', border: `1px solid ${colors.gray[300]}` }}
                    >
                      <option value="top-right">Top Right</option>
                      <option value="top-left">Top Left</option>
                      <option value="bottom-right">Bottom Right</option>
                      <option value="bottom-left">Bottom Left</option>
                      <option value="top-center">Top Center</option>
                      <option value="bottom-center">Bottom Center</option>
                    </select>
                  </div>
                  <div>
                    <Typography variant="bodySmall" weight="medium" style={{ marginBottom: spacing[1] }}>
                      Size
                    </Typography>
                    <select 
                      value={size} 
                      onChange={(e) => setSize(e.target.value as any)}
                      style={{ padding: spacing[2], borderRadius: '4px', border: `1px solid ${colors.gray[300]}` }}
                    >
                      <option value="sm">Small</option>
                      <option value="md">Medium</option>
                      <option value="lg">Large</option>
                    </select>
                  </div>
                  <div>
                    <Typography variant="bodySmall" weight="medium" style={{ marginBottom: spacing[1] }}>
                      Variant
                    </Typography>
                    <select 
                      value={variant} 
                      onChange={(e) => setVariant(e.target.value as any)}
                      style={{ padding: spacing[2], borderRadius: '4px', border: `1px solid ${colors.gray[300]}` }}
                    >
                      <option value="default">Default</option>
                      <option value="compact">Compact</option>
                    </select>
                  </div>
                  <div>
                    <Typography variant="bodySmall" weight="medium" style={{ marginBottom: spacing[1] }}>
                      Stack Direction
                    </Typography>
                    <select 
                      value={stackDirection} 
                      onChange={(e) => setStackDirection(e.target.value as any)}
                      style={{ padding: spacing[2], borderRadius: '4px', border: `1px solid ${colors.gray[300]}` }}
                    >
                      <option value="down">Down</option>
                      <option value="up">Up</option>
                    </select>
                  </div>
                  <div>
                    <Typography variant="bodySmall" weight="medium" style={{ marginBottom: spacing[1] }}>
                      Animation
                    </Typography>
                    <select 
                      value={animation} 
                      onChange={(e) => setAnimation(e.target.value as any)}
                      style={{ padding: spacing[2], borderRadius: '4px', border: `1px solid ${colors.gray[300]}` }}
                    >
                      <option value="slide">Slide</option>
                      <option value="fade">Fade</option>
                      <option value="scale">Scale</option>
                    </select>
                  </div>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: spacing[4] }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: spacing[1] }}>
                    <input 
                      type="checkbox" 
                      checked={showProgress} 
                      onChange={(e) => setShowProgress(e.target.checked)}
                    />
                    <Typography variant="bodySmall">Show Progress</Typography>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: spacing[1] }}>
                    <input 
                      type="checkbox" 
                      checked={showIcons} 
                      onChange={(e) => setShowIcons(e.target.checked)}
                    />
                    <Typography variant="bodySmall">Show Icons</Typography>
                  </label>
                </div>
              </Column>
            </Row>
            <Row>
              <Column span={12}>
                <div style={{ display: 'flex', gap: spacing[2] }}>
                  <Button variant="outlined" size="sm" onClick={clearAllNotifications}>
                    <Trash size={16} style={{ marginRight: spacing[1] }} />
                    Clear All
                  </Button>
                  <Typography variant="bodySmall" style={{ display: 'flex', alignItems: 'center', color: colors.gray[600] }}>
                    {notifications.length} notification{notifications.length !== 1 ? 's' : ''} active
                  </Typography>
                </div>
              </Column>
            </Row>
          </Grid>
        </CardContent>
      </Card>

      {/* Examples */}
      <Card style={{ marginBottom: spacing[6] }}>
        <CardHeader>
          <Typography variant="h2" weight="semibold">
            Different Positions
          </Typography>
        </CardHeader>
        <CardContent>
          <Grid gap="md">
            <Row>
              <Column span={6}>
                <Typography variant="h3" weight="medium" style={{ marginBottom: spacing[2] }}>
                  Top Right (Default)
                </Typography>
                <NotificationCenter
                  notifications={[
                    {
                      id: '1',
                      title: 'Top Right',
                      message: 'This notification appears in the top right corner',
                      type: 'info',
                      duration: 0,
                    },
                  ]}
                  position="top-right"
                  onDismiss={handleDismiss}
                />
              </Column>
              <Column span={6}>
                <Typography variant="h3" weight="medium" style={{ marginBottom: spacing[2] }}>
                  Top Left
                </Typography>
                <NotificationCenter
                  notifications={[
                    {
                      id: '2',
                      title: 'Top Left',
                      message: 'This notification appears in the top left corner',
                      type: 'success',
                      duration: 0,
                    },
                  ]}
                  position="top-left"
                  onDismiss={handleDismiss}
                />
              </Column>
            </Row>
            <Row>
              <Column span={6}>
                <Typography variant="h3" weight="medium" style={{ marginBottom: spacing[2] }}>
                  Bottom Right
                </Typography>
                <NotificationCenter
                  notifications={[
                    {
                      id: '3',
                      title: 'Bottom Right',
                      message: 'This notification appears in the bottom right corner',
                      type: 'warning',
                      duration: 0,
                    },
                  ]}
                  position="bottom-right"
                  onDismiss={handleDismiss}
                />
              </Column>
              <Column span={6}>
                <Typography variant="h3" weight="medium" style={{ marginBottom: spacing[2] }}>
                  Bottom Left
                </Typography>
                <NotificationCenter
                  notifications={[
                    {
                      id: '4',
                      title: 'Bottom Left',
                      message: 'This notification appears in the bottom left corner',
                      type: 'error',
                      duration: 0,
                    },
                  ]}
                  position="bottom-left"
                  onDismiss={handleDismiss}
                />
              </Column>
            </Row>
          </Grid>
        </CardContent>
      </Card>

      <Card style={{ marginBottom: spacing[6] }}>
        <CardHeader>
          <Typography variant="h2" weight="semibold">
            Different Sizes
          </Typography>
        </CardHeader>
        <CardContent>
          <Grid gap="md">
            <Row>
              <Column span={4}>
                <Typography variant="h3" weight="medium" style={{ marginBottom: spacing[2] }}>
                  Small
                </Typography>
                <NotificationCenter
                  notifications={[
                    {
                      id: '5',
                      title: 'Small Notification',
                      message: 'This is a small notification',
                      type: 'info',
                      duration: 0,
                    },
                  ]}
                  size="sm"
                  onDismiss={handleDismiss}
                />
              </Column>
              <Column span={4}>
                <Typography variant="h3" weight="medium" style={{ marginBottom: spacing[2] }}>
                  Medium (Default)
                </Typography>
                <NotificationCenter
                  notifications={[
                    {
                      id: '6',
                      title: 'Medium Notification',
                      message: 'This is a medium notification',
                      type: 'success',
                      duration: 0,
                    },
                  ]}
                  size="md"
                  onDismiss={handleDismiss}
                />
              </Column>
              <Column span={4}>
                <Typography variant="h3" weight="medium" style={{ marginBottom: spacing[2] }}>
                  Large
                </Typography>
                <NotificationCenter
                  notifications={[
                    {
                      id: '7',
                      title: 'Large Notification',
                      message: 'This is a large notification with more content',
                      type: 'warning',
                      duration: 0,
                    },
                  ]}
                  size="lg"
                  onDismiss={handleDismiss}
                />
              </Column>
            </Row>
          </Grid>
        </CardContent>
      </Card>

      <Card style={{ marginBottom: spacing[6] }}>
        <CardHeader>
          <Typography variant="h2" weight="semibold">
            Different Variants
          </Typography>
        </CardHeader>
        <CardContent>
          <Grid gap="md">
            <Row>
              <Column span={6}>
                <Typography variant="h3" weight="medium" style={{ marginBottom: spacing[2] }}>
                  Default
                </Typography>
                <NotificationCenter
                  notifications={[
                    {
                      id: '8',
                      title: 'Default Variant',
                      message: 'This notification uses the default variant styling',
                      type: 'info',
                      duration: 0,
                    },
                  ]}
                  variant="default"
                  onDismiss={handleDismiss}
                />
              </Column>
              <Column span={6}>
                <Typography variant="h3" weight="medium" style={{ marginBottom: spacing[2] }}>
                  Compact
                </Typography>
                <NotificationCenter
                  notifications={[
                    {
                      id: '9',
                      title: 'Compact Variant',
                      message: 'This notification uses the compact variant styling',
                      type: 'success',
                      duration: 0,
                    },
                  ]}
                  variant="compact"
                  onDismiss={handleDismiss}
                />
              </Column>
            </Row>
          </Grid>
        </CardContent>
      </Card>

      <Card style={{ marginBottom: spacing[6] }}>
        <CardHeader>
          <Typography variant="h2" weight="semibold">
            With Progress Bar
          </Typography>
        </CardHeader>
        <CardContent>
          <NotificationCenter
            notifications={[
              {
                id: '10',
                title: 'With Progress',
                message: 'This notification shows a progress bar for auto-dismiss',
                type: 'info',
                duration: 5000,
              },
            ]}
            showProgress
            onDismiss={handleDismiss}
          />
        </CardContent>
      </Card>

      <Card style={{ marginBottom: spacing[6] }}>
        <CardHeader>
          <Typography variant="h2" weight="semibold">
            Without Icons
          </Typography>
        </CardHeader>
        <CardContent>
          <NotificationCenter
            notifications={[
              {
                id: '11',
                title: 'No Icon',
                message: 'This notification is displayed without an icon',
                type: 'info',
                duration: 0,
              },
            ]}
            showIcons={false}
            onDismiss={handleDismiss}
          />
        </CardContent>
      </Card>

      <Card style={{ marginBottom: spacing[6] }}>
        <CardHeader>
          <Typography variant="h2" weight="semibold">
            Real-world Examples
          </Typography>
        </CardHeader>
        <CardContent>
          <Grid gap="md">
            <Row>
              <Column span={12}>
                <Typography variant="h3" weight="medium" style={{ marginBottom: spacing[3] }}>
                  User Actions
                </Typography>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: spacing[2] }}>
                  <Button variant="success" size="sm" onClick={() => addNotification('success', 'Profile Updated', 'Your profile has been successfully updated')}>
                    Update Profile
                  </Button>
                  <Button variant="error" size="sm" onClick={() => addNotification('error', 'Delete Failed', 'Unable to delete item. Please try again.')}>
                    Delete Item
                  </Button>
                  <Button variant="warning" size="sm" onClick={() => addNotification('warning', 'Unsaved Changes', 'You have unsaved changes. Save before leaving.')}>
                    Leave Page
                  </Button>
                  <Button variant="info" size="sm" onClick={() => addNotification('info', 'New Feature', 'Check out our new dashboard feature!')}>
                    Show Feature
                  </Button>
                </div>
              </Column>
            </Row>
            <Row>
              <Column span={12}>
                <Typography variant="h3" weight="medium" style={{ marginBottom: spacing[3] }}>
                  System Notifications
                </Typography>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: spacing[2] }}>
                  <Button variant="outlined" size="sm" onClick={() => addNotification('success', 'Backup Complete', 'Your data has been successfully backed up to the cloud')}>
                    Backup Complete
                  </Button>
                  <Button variant="outlined" size="sm" onClick={() => addNotification('error', 'Connection Lost', 'Lost connection to server. Attempting to reconnect...')}>
                    Connection Lost
                  </Button>
                  <Button variant="outlined" size="sm" onClick={() => addNotification('warning', 'Maintenance Mode', 'System will be under maintenance from 2-4 AM')}>
                    Maintenance Alert
                  </Button>
                  <Button variant="outlined" size="sm" onClick={() => addNotification('info', 'Update Available', 'A new version is available. Click to update.')}>
                    Update Available
                  </Button>
                </div>
              </Column>
            </Row>
          </Grid>
        </CardContent>
      </Card>

      {/* Live Notification Center */}
      <NotificationCenter
        notifications={notifications}
        position={position}
        size={size}
        variant={variant}
        showProgress={showProgress}
        showIcons={showIcons}
        stackDirection={stackDirection}
        animation={animation}
        onDismiss={handleDismiss}
        onAction={handleAction}
      />
    </div>
  );
};

export default NotificationCenterDemo;
