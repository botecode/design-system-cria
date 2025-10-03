import * as React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Snackbar } from '../Snackbar';

// Mock timers for testing auto-dismiss functionality
jest.useFakeTimers();

describe('Snackbar - TDD Tests', () => {
  beforeEach(() => {
    jest.clearAllTimers();
  });

  afterEach(() => {
    act(() => {
      jest.runOnlyPendingTimers();
    });
  });

  describe('Basic Rendering', () => {
    it('appears with message', () => {
      render(<Snackbar message="Test message" open />);
      
      expect(screen.getByText('Test message')).toBeInTheDocument();
      expect(screen.getByRole('status')).toBeInTheDocument();
    });

    it('does not render when closed', () => {
      render(<Snackbar message="Test message" open={false} />);
      
      expect(screen.queryByText('Test message')).not.toBeInTheDocument();
      expect(screen.queryByRole('status')).not.toBeInTheDocument();
    });

    it('renders with title when provided', () => {
      render(<Snackbar message="Test message" title="Test Title" open />);
      
      expect(screen.getByText('Test Title')).toBeInTheDocument();
      expect(screen.getByText('Test message')).toBeInTheDocument();
    });

    it('renders with action button when provided', () => {
      const handleAction = jest.fn();
      render(
        <Snackbar 
          message="Test message" 
          action={{ label: 'Undo', onClick: handleAction }}
          open 
        />
      );
      
      const actionButton = screen.getByRole('button', { name: 'Undo' });
      expect(actionButton).toBeInTheDocument();
    });
  });

  describe('Auto-dismiss Functionality', () => {
    it('auto-dismisses after timeout', async () => {
      const onClose = jest.fn();
      render(<Snackbar message="Test message" open autoHideDuration={1000} onClose={onClose} />);
      
      expect(screen.getByText('Test message')).toBeInTheDocument();
      
      // Fast-forward time by 1000ms
      act(() => {
        jest.advanceTimersByTime(1000);
      });
      
      await waitFor(() => {
        expect(onClose).toHaveBeenCalled();
      });
    });

    it('does not auto-dismiss when autoHideDuration is 0', () => {
      const onClose = jest.fn();
      render(<Snackbar message="Test message" open autoHideDuration={0} onClose={onClose} />);
      
      expect(screen.getByText('Test message')).toBeInTheDocument();
      
      // Fast-forward time by 5000ms
      act(() => {
        jest.advanceTimersByTime(5000);
      });
      
      expect(onClose).not.toHaveBeenCalled();
      expect(screen.getByText('Test message')).toBeInTheDocument();
    });

    it('uses default timeout when autoHideDuration is not specified', async () => {
      const onClose = jest.fn();
      render(<Snackbar message="Test message" open onClose={onClose} />);
      
      expect(screen.getByText('Test message')).toBeInTheDocument();
      
      // Fast-forward time by 4000ms (default timeout)
      act(() => {
        jest.advanceTimersByTime(4000);
      });
      
      await waitFor(() => {
        expect(onClose).toHaveBeenCalled();
      });
    });

    it('clears timeout when component unmounts', () => {
      const onClose = jest.fn();
      const { unmount } = render(<Snackbar message="Test message" open autoHideDuration={1000} onClose={onClose} />);
      
      unmount();
      
      // Fast-forward time by 1000ms
      act(() => {
        jest.advanceTimersByTime(1000);
      });
      
      expect(onClose).not.toHaveBeenCalled();
    });
  });

  describe('Manual Dismissal', () => {
    it('can be dismissed manually with close button', async () => {
      const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
      const onClose = jest.fn();
      
      render(<Snackbar message="Test message" open onClose={onClose} />);
      
      const closeButton = screen.getByRole('button', { name: /close/i });
      await user.click(closeButton);
      
      expect(onClose).toHaveBeenCalled();
    });

    it('can be dismissed by clicking action button', async () => {
      const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
      const onClose = jest.fn();
      const handleAction = jest.fn();
      
      render(
        <Snackbar 
          message="Test message" 
          action={{ label: 'Undo', onClick: handleAction }}
          open 
          onClose={onClose}
        />
      );
      
      const actionButton = screen.getByRole('button', { name: 'Undo' });
      await user.click(actionButton);
      
      expect(handleAction).toHaveBeenCalled();
      // Action button click should not automatically close the snackbar
      expect(onClose).not.toHaveBeenCalled();
    });

    it('can be dismissed by clicking outside (when dismissible)', async () => {
      const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
      const onClose = jest.fn();
      
      render(<Snackbar message="Test message" open onClose={onClose} dismissible />);
      
      // Click on the backdrop/overlay
      const backdrop = screen.getByTestId('snackbar-container');
      await user.click(backdrop);
      
      expect(onClose).toHaveBeenCalled();
    });

    it('cannot be dismissed by clicking outside when not dismissible', async () => {
      const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
      const onClose = jest.fn();
      
      render(<Snackbar message="Test message" open onClose={onClose} dismissible={false} />);
      
      // Try to click on the backdrop/overlay
      const backdrop = screen.getByTestId('snackbar-container');
      await user.click(backdrop);
      
      expect(onClose).not.toHaveBeenCalled();
    });
  });

  describe('Variants Support', () => {
    it('supports success variant', () => {
      render(<Snackbar message="Success message" variant="success" open />);
      
      const snackbar = screen.getByRole('status');
      expect(snackbar).toHaveClass('cria-snackbar--success');
    });

    it('supports error variant', () => {
      render(<Snackbar message="Error message" variant="error" open />);
      
      const snackbar = screen.getByRole('alert');
      expect(snackbar).toHaveClass('cria-snackbar--error');
    });

    it('supports info variant', () => {
      render(<Snackbar message="Info message" variant="info" open />);
      
      const snackbar = screen.getByRole('status');
      expect(snackbar).toHaveClass('cria-snackbar--info');
    });

    it('supports warning variant', () => {
      render(<Snackbar message="Warning message" variant="warning" open />);
      
      const snackbar = screen.getByRole('alert');
      expect(snackbar).toHaveClass('cria-snackbar--warning');
    });

    it('uses default variant when not specified', () => {
      render(<Snackbar message="Default message" open />);
      
      const snackbar = screen.getByRole('status');
      expect(snackbar).toHaveClass('cria-snackbar--default');
    });
  });

  describe('Positioning', () => {
    it('renders at top by default', () => {
      render(<Snackbar message="Test message" open />);
      
      const container = screen.getByTestId('snackbar-container');
      expect(container).toHaveClass('cria-snackbar-container--top');
    });

    it('renders at bottom when specified', () => {
      render(<Snackbar message="Test message" position="bottom" open />);
      
      const container = screen.getByTestId('snackbar-container');
      expect(container).toHaveClass('cria-snackbar-container--bottom');
    });

    it('renders at top-left when specified', () => {
      render(<Snackbar message="Test message" position="top-left" open />);
      
      const container = screen.getByTestId('snackbar-container');
      expect(container).toHaveClass('cria-snackbar-container--top-left');
    });

    it('renders at top-right when specified', () => {
      render(<Snackbar message="Test message" position="top-right" open />);
      
      const container = screen.getByTestId('snackbar-container');
      expect(container).toHaveClass('cria-snackbar-container--top-right');
    });

    it('renders at bottom-left when specified', () => {
      render(<Snackbar message="Test message" position="bottom-left" open />);
      
      const container = screen.getByTestId('snackbar-container');
      expect(container).toHaveClass('cria-snackbar-container--bottom-left');
    });

    it('renders at bottom-right when specified', () => {
      render(<Snackbar message="Test message" position="bottom-right" open />);
      
      const container = screen.getByTestId('snackbar-container');
      expect(container).toHaveClass('cria-snackbar-container--bottom-right');
    });
  });

  describe('Accessibility', () => {
    it('has correct role="status" for success/info messages', () => {
      render(<Snackbar message="Success message" variant="success" open />);
      
      const snackbar = screen.getByRole('status');
      expect(snackbar).toBeInTheDocument();
    });

    it('has correct role="alert" for error/warning messages', () => {
      render(<Snackbar message="Error message" variant="error" open />);
      
      const snackbar = screen.getByRole('alert');
      expect(snackbar).toBeInTheDocument();
    });

    it('supports screen reader announcement', () => {
      render(<Snackbar message="Test message" open />);
      
      const snackbar = screen.getByRole('status');
      expect(snackbar).toHaveAttribute('aria-live', 'polite');
    });

    it('uses assertive live region for error/warning', () => {
      render(<Snackbar message="Error message" variant="error" open />);
      
      const snackbar = screen.getByRole('alert');
      expect(snackbar).toHaveAttribute('aria-live', 'assertive');
    });

    it('has proper focus management', async () => {
      const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
      render(<Snackbar message="Test message" open />);
      
      const closeButton = screen.getByRole('button', { name: /close/i });
      await user.tab();
      
      expect(closeButton).toHaveFocus();
    });

    it('supports keyboard navigation', async () => {
      const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
      const onClose = jest.fn();
      
      render(<Snackbar message="Test message" open onClose={onClose} />);
      
      const closeButton = screen.getByRole('button', { name: /close/i });
      closeButton.focus();
      
      await user.keyboard('{Enter}');
      expect(onClose).toHaveBeenCalled();
    });
  });

  describe('Animation and Transitions', () => {
    it('applies enter animation class when opening', () => {
      const { rerender } = render(<Snackbar message="Test message" open={false} />);
      
      rerender(<Snackbar message="Test message" open />);
      
      const snackbar = screen.getByRole('status');
      expect(snackbar).toHaveClass('cria-snackbar--entering');
    });

    it('applies exit animation class when closing', () => {
      const { rerender } = render(<Snackbar message="Test message" open />);
      
      rerender(<Snackbar message="Test message" open={false} />);
      
      const snackbar = screen.getByRole('status');
      expect(snackbar).toHaveClass('cria-snackbar--exiting');
    });
  });

  describe('Multiple Snackbars', () => {
    it('stacks multiple snackbars correctly', () => {
      render(
        <div>
          <Snackbar message="First message" open />
          <Snackbar message="Second message" open />
        </div>
      );
      
      expect(screen.getByText('First message')).toBeInTheDocument();
      expect(screen.getByText('Second message')).toBeInTheDocument();
      
      const snackbars = screen.getAllByRole('status');
      expect(snackbars).toHaveLength(2);
    });
  });

  describe('Custom Styling', () => {
    it('applies custom className', () => {
      render(<Snackbar message="Test message" className="custom-class" open />);
      
      const snackbar = screen.getByRole('status');
      expect(snackbar).toHaveClass('custom-class');
    });

    it('applies custom styles', () => {
      render(<Snackbar message="Test message" style={{ backgroundColor: 'red' }} open />);
      
      const snackbar = screen.getByRole('status');
      expect(snackbar).toHaveStyle('background-color: rgb(255, 0, 0)');
    });
  });

  describe('Icon Support', () => {
    it('renders with icon when provided', () => {
      render(<Snackbar message="Test message" icon="✓" open />);
      
      expect(screen.getByText('✓')).toBeInTheDocument();
    });

    it('renders with default icon for success variant', () => {
      render(<Snackbar message="Success message" variant="success" open />);
      
      // Should render a checkmark icon for success
      const icon = screen.getByTestId('snackbar-icon');
      expect(icon).toBeInTheDocument();
    });

    it('renders with default icon for error variant', () => {
      render(<Snackbar message="Error message" variant="error" open />);
      
      // Should render an error icon
      const icon = screen.getByTestId('snackbar-icon');
      expect(icon).toBeInTheDocument();
    });
  });
});
