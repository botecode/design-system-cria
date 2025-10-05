import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NotificationCenter, Notification } from '../NotificationCenter';
import { Check, Warning, Info, X } from 'phosphor-react';

describe('NotificationCenter', () => {
  const mockNotifications = [
    {
      id: '1',
      title: 'Success Message',
      message: 'Operation completed successfully',
      type: 'success' as const,
      icon: <Check data-testid="check-icon" />,
      duration: 5000,
      dismissible: true,
    },
    {
      id: '2',
      title: 'Warning Message',
      message: 'Please check your input',
      type: 'warning' as const,
      icon: <Warning data-testid="warning-icon" />,
      duration: 0,
      dismissible: false,
    },
    {
      id: '3',
      title: 'Info Message',
      message: 'New feature available',
      type: 'info' as const,
      icon: <Info data-testid="info-icon" />,
      duration: 3000,
      dismissible: true,
    },
  ];

  const mockOnDismiss = jest.fn();
  const mockOnAction = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders with basic props', () => {
    render(
      <NotificationCenter
        notifications={mockNotifications}
        onDismiss={mockOnDismiss}
        onAction={mockOnAction}
      />
    );
    
    expect(screen.getByText('Success Message')).toBeInTheDocument();
    expect(screen.getByText('Warning Message')).toBeInTheDocument();
    expect(screen.getByText('Info Message')).toBeInTheDocument();
  });

  it('renders with different positions', () => {
    const { rerender } = render(
      <NotificationCenter
        notifications={mockNotifications}
        position="top-right"
        onDismiss={mockOnDismiss}
        onAction={mockOnAction}
      />
    );
    expect(screen.getByText('Success Message')).toBeInTheDocument();

    rerender(
      <NotificationCenter
        notifications={mockNotifications}
        position="bottom-left"
        onDismiss={mockOnDismiss}
        onAction={mockOnAction}
      />
    );
    expect(screen.getByText('Success Message')).toBeInTheDocument();
  });

  it('renders with different sizes', () => {
    const { rerender } = render(
      <NotificationCenter
        notifications={mockNotifications}
        size="sm"
        onDismiss={mockOnDismiss}
        onAction={mockOnAction}
      />
    );
    expect(screen.getByText('Success Message')).toBeInTheDocument();

    rerender(
      <NotificationCenter
        notifications={mockNotifications}
        size="lg"
        onDismiss={mockOnDismiss}
        onAction={mockOnAction}
      />
    );
    expect(screen.getByText('Success Message')).toBeInTheDocument();
  });

  it('renders with different variants', () => {
    const { rerender } = render(
      <NotificationCenter
        notifications={mockNotifications}
        variant="default"
        onDismiss={mockOnDismiss}
        onAction={mockOnAction}
      />
    );
    expect(screen.getByText('Success Message')).toBeInTheDocument();

    rerender(
      <NotificationCenter
        notifications={mockNotifications}
        variant="compact"
        onDismiss={mockOnDismiss}
        onAction={mockOnAction}
      />
    );
    expect(screen.getByText('Success Message')).toBeInTheDocument();
  });

  it('renders with custom className and style', () => {
    render(
      <NotificationCenter
        notifications={mockNotifications}
        className="custom-notifications"
        style={{ backgroundColor: 'red' }}
        onDismiss={mockOnDismiss}
        onAction={mockOnAction}
      />
    );
    
    const container = screen.getByText('Success Message').closest('.notification-center');
    expect(container).toHaveClass('custom-notifications');
    expect(container).toHaveStyle('background-color: rgb(255, 0, 0)');
  });

  it('renders with maxNotifications limit', () => {
    const manyNotifications = Array.from({ length: 10 }, (_, i) => ({
      id: `${i}`,
      title: `Notification ${i}`,
      message: `Message ${i}`,
      type: 'info' as const,
    }));

    render(
      <NotificationCenter
        notifications={manyNotifications}
        maxNotifications={3}
        onDismiss={mockOnDismiss}
        onAction={mockOnAction}
      />
    );
    
    expect(screen.getByText('Notification 0')).toBeInTheDocument();
    expect(screen.getByText('Notification 1')).toBeInTheDocument();
    expect(screen.getByText('Notification 2')).toBeInTheDocument();
    expect(screen.queryByText('Notification 3')).not.toBeInTheDocument();
  });

  it('renders with showProgress true', () => {
    render(
      <NotificationCenter
        notifications={mockNotifications}
        showProgress
        onDismiss={mockOnDismiss}
        onAction={mockOnAction}
      />
    );
    expect(screen.getByText('Success Message')).toBeInTheDocument();
  });

  it('renders with showProgress false', () => {
    render(
      <NotificationCenter
        notifications={mockNotifications}
        showProgress={false}
        onDismiss={mockOnDismiss}
        onAction={mockOnAction}
      />
    );
    expect(screen.getByText('Success Message')).toBeInTheDocument();
  });

  it('renders with showIcons true', () => {
    render(
      <NotificationCenter
        notifications={mockNotifications}
        showIcons
        onDismiss={mockOnDismiss}
        onAction={mockOnAction}
      />
    );
    expect(screen.getByTestId('check-icon')).toBeInTheDocument();
    expect(screen.getByTestId('warning-icon')).toBeInTheDocument();
    expect(screen.getByTestId('info-icon')).toBeInTheDocument();
  });

  it('renders with showIcons false', () => {
    render(
      <NotificationCenter
        notifications={mockNotifications}
        showIcons={false}
        onDismiss={mockOnDismiss}
        onAction={mockOnAction}
      />
    );
    expect(screen.queryByTestId('check-icon')).not.toBeInTheDocument();
    expect(screen.queryByTestId('warning-icon')).not.toBeInTheDocument();
    expect(screen.queryByTestId('info-icon')).not.toBeInTheDocument();
  });

  it('renders with custom notification renderer', () => {
    const CustomNotification = ({ notification }: { notification: any }) => (
      <div data-testid={`custom-notification-${notification.id}`}>
        {notification.title}
      </div>
    );
    render(
      <NotificationCenter
        notifications={mockNotifications}
        notificationRenderer={CustomNotification}
        onDismiss={mockOnDismiss}
        onAction={mockOnAction}
      />
    );
    expect(screen.getByTestId('custom-notification-1')).toBeInTheDocument();
    expect(screen.getByTestId('custom-notification-2')).toBeInTheDocument();
    expect(screen.getByTestId('custom-notification-3')).toBeInTheDocument();
  });

  it('handles dismiss events', async () => {
    render(
      <NotificationCenter
        notifications={mockNotifications}
        onDismiss={mockOnDismiss}
        onAction={mockOnAction}
      />
    );
    
    const dismissButtons = screen.getAllByLabelText('Dismiss notification');
    fireEvent.click(dismissButtons[0]);
    
    await waitFor(() => {
      expect(mockOnDismiss).toHaveBeenCalledWith('1');
    }, { timeout: 500 });
  });

  it('handles action events', () => {
    const notificationsWithActions = [
      {
        id: '1',
        title: 'Action Required',
        message: 'Click to perform action',
        type: 'info' as const,
        action: {
          label: 'View Details',
          onClick: mockOnAction,
        },
      },
    ];

    render(
      <NotificationCenter
        notifications={notificationsWithActions}
        onDismiss={mockOnDismiss}
        onAction={mockOnAction}
      />
    );
    
    fireEvent.click(screen.getByText('View Details'));
    expect(mockOnAction).toHaveBeenCalledWith('1', notificationsWithActions[0]);
  });

  it('has proper accessibility attributes', () => {
    render(
      <NotificationCenter
        notifications={mockNotifications}
        onDismiss={mockOnDismiss}
        onAction={mockOnAction}
      />
    );
    
    const container = screen.getByRole('region');
    expect(container).toHaveAttribute('aria-label', 'Notifications');
    expect(container).toHaveAttribute('aria-live', 'polite');
  });

  it('renders with different notification types', () => {
    const allTypes = [
      {
        id: '1',
        title: 'Success',
        message: 'Success message',
        type: 'success' as const,
      },
      {
        id: '2',
        title: 'Error',
        message: 'Error message',
        type: 'error' as const,
      },
      {
        id: '3',
        title: 'Warning',
        message: 'Warning message',
        type: 'warning' as const,
      },
      {
        id: '4',
        title: 'Info',
        message: 'Info message',
        type: 'info' as const,
      },
    ];

    render(
      <NotificationCenter
        notifications={allTypes}
        onDismiss={mockOnDismiss}
        onAction={mockOnAction}
      />
    );
    
    expect(screen.getByText('Success')).toBeInTheDocument();
    expect(screen.getByText('Error')).toBeInTheDocument();
    expect(screen.getByText('Warning')).toBeInTheDocument();
    expect(screen.getByText('Info')).toBeInTheDocument();
  });

  it('renders with long titles and messages', () => {
    const longNotification = [
      {
        id: '1',
        title: 'This is a very long notification title that should be handled gracefully without breaking the layout',
        message: 'This is a very long notification message that contains multiple sentences and should be displayed properly without causing any visual issues or layout problems.',
        type: 'info' as const,
      },
    ];

    render(
      <NotificationCenter
        notifications={longNotification}
        onDismiss={mockOnDismiss}
        onAction={mockOnAction}
      />
    );
    
    expect(screen.getByText('This is a very long notification title that should be handled gracefully without breaking the layout')).toBeInTheDocument();
    expect(screen.getByText('This is a very long notification message that contains multiple sentences and should be displayed properly without causing any visual issues or layout problems.')).toBeInTheDocument();
  });

  it('renders without optional props gracefully', () => {
    render(
      <NotificationCenter
        notifications={mockNotifications}
      />
    );
    
    expect(screen.getByText('Success Message')).toBeInTheDocument();
  });

  it('renders with custom duration', () => {
    const customDurationNotification = [
      {
        id: '1',
        title: 'Custom Duration',
        message: 'This notification has a custom duration',
        type: 'info' as const,
        duration: 10000,
      },
    ];

    render(
      <NotificationCenter
        notifications={customDurationNotification}
        onDismiss={mockOnDismiss}
        onAction={mockOnAction}
      />
    );
    
    expect(screen.getByText('Custom Duration')).toBeInTheDocument();
  });

  it('renders with different stack directions', () => {
    const { rerender } = render(
      <NotificationCenter
        notifications={mockNotifications}
        stackDirection="up"
        onDismiss={mockOnDismiss}
        onAction={mockOnAction}
      />
    );
    expect(screen.getByText('Success Message')).toBeInTheDocument();

    rerender(
      <NotificationCenter
        notifications={mockNotifications}
        stackDirection="down"
        onDismiss={mockOnDismiss}
        onAction={mockOnAction}
      />
    );
    expect(screen.getByText('Success Message')).toBeInTheDocument();
  });

  it('renders with different animation types', () => {
    const { rerender } = render(
      <NotificationCenter
        notifications={mockNotifications}
        animation="slide"
        onDismiss={mockOnDismiss}
        onAction={mockOnAction}
      />
    );
    expect(screen.getByText('Success Message')).toBeInTheDocument();

    rerender(
      <NotificationCenter
        notifications={mockNotifications}
        animation="fade"
        onDismiss={mockOnDismiss}
        onAction={mockOnAction}
      />
    );
    expect(screen.getByText('Success Message')).toBeInTheDocument();
  });

  it('auto-dismisses notifications with duration', async () => {
    const autoDismissNotification = [
      {
        id: '1',
        title: 'Auto Dismiss',
        message: 'This will auto dismiss',
        type: 'info' as const,
        duration: 100,
      },
    ];

    render(
      <NotificationCenter
        notifications={autoDismissNotification}
        onDismiss={mockOnDismiss}
        onAction={mockOnAction}
      />
    );
    
    expect(screen.getByText('Auto Dismiss')).toBeInTheDocument();
    
    await waitFor(() => {
      expect(mockOnDismiss).toHaveBeenCalledWith('1');
    }, { timeout: 500 });
  });
});

describe('Notification', () => {
  const mockNotification = {
    id: '1',
    title: 'Test Notification',
    message: 'Test notification message',
    type: 'info' as const,
    icon: <Info data-testid="info-icon" />,
    duration: 5000,
    dismissible: true,
  };

  const mockOnDismiss = jest.fn();
  const mockOnAction = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders with basic props', () => {
    render(
      <Notification
        notification={mockNotification}
        onDismiss={mockOnDismiss}
        onAction={mockOnAction}
      />
    );
    
    expect(screen.getByText('Test Notification')).toBeInTheDocument();
    expect(screen.getByText('Test notification message')).toBeInTheDocument();
    expect(screen.getByTestId('info-icon')).toBeInTheDocument();
  });

  it('renders with different types', () => {
    const { rerender } = render(
      <Notification
        notification={{ ...mockNotification, type: 'success' }}
        onDismiss={mockOnDismiss}
        onAction={mockOnAction}
      />
    );
    expect(screen.getByText('Test Notification')).toBeInTheDocument();

    rerender(
      <Notification
        notification={{ ...mockNotification, type: 'error' }}
        onDismiss={mockOnDismiss}
        onAction={mockOnAction}
      />
    );
    expect(screen.getByText('Test Notification')).toBeInTheDocument();
  });

  it('renders with different sizes', () => {
    const { rerender } = render(
      <Notification
        notification={mockNotification}
        size="sm"
        onDismiss={mockOnDismiss}
        onAction={mockOnAction}
      />
    );
    expect(screen.getByText('Test Notification')).toBeInTheDocument();

    rerender(
      <Notification
        notification={mockNotification}
        size="lg"
        onDismiss={mockOnDismiss}
        onAction={mockOnAction}
      />
    );
    expect(screen.getByText('Test Notification')).toBeInTheDocument();
  });

  it('renders with different variants', () => {
    const { rerender } = render(
      <Notification
        notification={mockNotification}
        variant="default"
        onDismiss={mockOnDismiss}
        onAction={mockOnAction}
      />
    );
    expect(screen.getByText('Test Notification')).toBeInTheDocument();

    rerender(
      <Notification
        notification={mockNotification}
        variant="compact"
        onDismiss={mockOnDismiss}
        onAction={mockOnAction}
      />
    );
    expect(screen.getByText('Test Notification')).toBeInTheDocument();
  });

  it('renders without icon', () => {
    const notificationWithoutIcon = {
      ...mockNotification,
      icon: undefined,
    };

    render(
      <Notification
        notification={notificationWithoutIcon}
        onDismiss={mockOnDismiss}
        onAction={mockOnAction}
      />
    );
    
    expect(screen.getByText('Test Notification')).toBeInTheDocument();
    expect(screen.queryByTestId('info-icon')).not.toBeInTheDocument();
  });

  it('renders without message', () => {
    const notificationWithoutMessage = {
      ...mockNotification,
      message: undefined,
    };

    render(
      <Notification
        notification={notificationWithoutMessage}
        onDismiss={mockOnDismiss}
        onAction={mockOnAction}
      />
    );
    
    expect(screen.getByText('Test Notification')).toBeInTheDocument();
    expect(screen.queryByText('Test notification message')).not.toBeInTheDocument();
  });

  it('renders with custom className and style', () => {
    render(
      <Notification
        notification={mockNotification}
        className="custom-notification"
        style={{ backgroundColor: 'red' }}
        onDismiss={mockOnDismiss}
        onAction={mockOnAction}
      />
    );
    
    const notification = screen.getByText('Test Notification').closest('.notification');
    expect(notification).toHaveClass('custom-notification');
    expect(notification).toHaveStyle('background-color: rgb(255, 0, 0)');
  });

  it('handles dismiss events', async () => {
    render(
      <Notification
        notification={mockNotification}
        onDismiss={mockOnDismiss}
        onAction={mockOnAction}
      />
    );
    
    fireEvent.click(screen.getByLabelText('Dismiss notification'));
    
    await waitFor(() => {
      expect(mockOnDismiss).toHaveBeenCalledWith('1');
    }, { timeout: 500 });
  });

  it('handles action events', () => {
    const notificationWithAction = {
      ...mockNotification,
      action: {
        label: 'View Details',
        onClick: mockOnAction,
      },
    };

    render(
      <Notification
        notification={notificationWithAction}
        onDismiss={mockOnDismiss}
        onAction={mockOnAction}
      />
    );
    
    fireEvent.click(screen.getByText('View Details'));
    expect(mockOnAction).toHaveBeenCalledWith('1', notificationWithAction);
  });

  it('has proper accessibility attributes', () => {
    render(
      <Notification
        notification={mockNotification}
        onDismiss={mockOnDismiss}
        onAction={mockOnAction}
      />
    );
    
    const notification = screen.getByRole('alert');
    expect(notification).toHaveAttribute('aria-live', 'polite');
  });

  it('renders with loading state', () => {
    const loadingNotification = {
      ...mockNotification,
      loading: true,
    };

    render(
      <Notification
        notification={loadingNotification}
        onDismiss={mockOnDismiss}
        onAction={mockOnAction}
      />
    );
    
    expect(screen.getByText('Test Notification')).toBeInTheDocument();
  });

  it('renders with disabled state', () => {
    const disabledNotification = {
      ...mockNotification,
      disabled: true,
    };

    render(
      <Notification
        notification={disabledNotification}
        onDismiss={mockOnDismiss}
        onAction={mockOnAction}
      />
    );
    
    expect(screen.getByText('Test Notification')).toBeInTheDocument();
  });

  it('renders with progress bar when showProgress is true', () => {
    render(
      <Notification
        notification={mockNotification}
        showProgress
        onDismiss={mockOnDismiss}
        onAction={mockOnAction}
      />
    );
    
    expect(screen.getByText('Test Notification')).toBeInTheDocument();
  });

  it('does not render dismiss button when not dismissible', () => {
    const nonDismissibleNotification = {
      ...mockNotification,
      dismissible: false,
    };

    render(
      <Notification
        notification={nonDismissibleNotification}
        onDismiss={mockOnDismiss}
        onAction={mockOnAction}
      />
    );
    
    expect(screen.queryByLabelText('Dismiss notification')).not.toBeInTheDocument();
  });
});
