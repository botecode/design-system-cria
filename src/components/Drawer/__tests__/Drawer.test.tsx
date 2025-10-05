import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Drawer } from '../Drawer';
import { Button } from '../../Button';
import { Typography } from '../../Typography';

// Mock components for testing
const MockContent = () => <div data-testid="drawer-content">Drawer Content</div>;
const MockHeader = () => <div data-testid="drawer-header">Drawer Header</div>;
const MockFooter = () => <div data-testid="drawer-footer">Drawer Footer</div>;

describe('Drawer', () => {
  const defaultProps = {
    isOpen: true,
    onClose: jest.fn(),
    children: <MockContent />
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Rendering', () => {
    it('renders when open', () => {
      render(<Drawer {...defaultProps} />);
      
      expect(screen.getByTestId('drawer-content')).toBeInTheDocument();
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    it('does not render when closed', () => {
      render(<Drawer {...defaultProps} isOpen={false} />);
      
      expect(screen.queryByTestId('drawer-content')).not.toBeInTheDocument();
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    it('renders with custom className and style', () => {
      const customStyle = { backgroundColor: 'rgb(255, 0, 0)' };
      render(
        <Drawer 
          {...defaultProps} 
          className="custom-drawer" 
          style={customStyle}
        />
      );
      
      const drawer = screen.getByRole('dialog');
      expect(drawer).toHaveClass('custom-drawer');
      expect(drawer).toHaveStyle('background-color: rgb(255, 0, 0)');
    });

    it('renders with different positions', () => {
      const { rerender } = render(<Drawer {...defaultProps} position="left" />);
      expect(screen.getByRole('dialog')).toHaveClass('drawer--left');

      rerender(<Drawer {...defaultProps} position="right" />);
      expect(screen.getByRole('dialog')).toHaveClass('drawer--right');

      rerender(<Drawer {...defaultProps} position="top" />);
      expect(screen.getByRole('dialog')).toHaveClass('drawer--top');

      rerender(<Drawer {...defaultProps} position="bottom" />);
      expect(screen.getByRole('dialog')).toHaveClass('drawer--bottom');
    });

    it('renders with different sizes', () => {
      const { rerender } = render(<Drawer {...defaultProps} size="sm" />);
      expect(screen.getByRole('dialog')).toHaveClass('drawer--sm');

      rerender(<Drawer {...defaultProps} size="md" />);
      expect(screen.getByRole('dialog')).toHaveClass('drawer--md');

      rerender(<Drawer {...defaultProps} size="lg" />);
      expect(screen.getByRole('dialog')).toHaveClass('drawer--lg');

      rerender(<Drawer {...defaultProps} size="xl" />);
      expect(screen.getByRole('dialog')).toHaveClass('drawer--xl');

      rerender(<Drawer {...defaultProps} size="full" />);
      expect(screen.getByRole('dialog')).toHaveClass('drawer--full');
    });

    it('renders with different variants', () => {
      const { rerender } = render(<Drawer {...defaultProps} variant="default" />);
      expect(screen.getByRole('dialog')).toHaveClass('drawer--default');

      rerender(<Drawer {...defaultProps} variant="primary" />);
      expect(screen.getByRole('dialog')).toHaveClass('drawer--primary');

      rerender(<Drawer {...defaultProps} variant="secondary" />);
      expect(screen.getByRole('dialog')).toHaveClass('drawer--secondary');
    });
  });

  describe('Header and Footer', () => {
    it('renders with header', () => {
      render(<Drawer {...defaultProps} header={<MockHeader />} />);
      
      expect(screen.getByTestId('drawer-header')).toBeInTheDocument();
    });

    it('renders with footer', () => {
      render(<Drawer {...defaultProps} footer={<MockFooter />} />);
      
      expect(screen.getByTestId('drawer-footer')).toBeInTheDocument();
    });

    it('renders with both header and footer', () => {
      render(
        <Drawer 
          {...defaultProps} 
          header={<MockHeader />} 
          footer={<MockFooter />} 
        />
      );
      
      expect(screen.getByTestId('drawer-header')).toBeInTheDocument();
      expect(screen.getByTestId('drawer-footer')).toBeInTheDocument();
    });

    it('renders with title prop', () => {
      render(<Drawer {...defaultProps} title="Test Title" />);
      
      expect(screen.getByText('Test Title')).toBeInTheDocument();
    });

    it('renders with close button when showCloseButton is true', () => {
      render(<Drawer {...defaultProps} showCloseButton={true} />);
      
      const closeButton = screen.getByRole('button', { name: /close/i });
      expect(closeButton).toBeInTheDocument();
    });

    it('does not render close button when showCloseButton is false', () => {
      render(<Drawer {...defaultProps} showCloseButton={false} />);
      
      expect(screen.queryByRole('button', { name: /close/i })).not.toBeInTheDocument();
    });
  });

  describe('Overlay and Backdrop', () => {
    it('renders with overlay when showOverlay is true', () => {
      render(<Drawer {...defaultProps} showOverlay={true} />);
      
      const overlay = screen.getByTestId('drawer-overlay');
      expect(overlay).toBeInTheDocument();
    });

    it('does not render overlay when showOverlay is false', () => {
      render(<Drawer {...defaultProps} showOverlay={false} />);
      
      expect(screen.queryByTestId('drawer-overlay')).not.toBeInTheDocument();
    });

    it('renders with custom overlay className', () => {
      render(<Drawer {...defaultProps} overlayClassName="custom-overlay" />);
      
      const overlay = screen.getByTestId('drawer-overlay');
      expect(overlay).toHaveClass('custom-overlay');
    });

    it('renders with custom overlay style', () => {
      const overlayStyle = { backgroundColor: 'rgb(0, 255, 0)' };
      render(<Drawer {...defaultProps} overlayStyle={overlayStyle} />);
      
      const overlay = screen.getByTestId('drawer-overlay');
      expect(overlay).toHaveStyle('background-color: rgb(0, 255, 0)');
    });
  });

  describe('Event Handling', () => {
    it('calls onClose when close button is clicked', async () => {
      const onClose = jest.fn();
      render(<Drawer {...defaultProps} onClose={onClose} showCloseButton={true} />);
      
      const closeButton = screen.getByRole('button', { name: /close/i });
      await userEvent.click(closeButton);
      
      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('calls onClose when overlay is clicked and closeOnOverlayClick is true', async () => {
      const onClose = jest.fn();
      render(
        <Drawer 
          {...defaultProps} 
          onClose={onClose} 
          showOverlay={true}
          closeOnOverlayClick={true}
        />
      );
      
      const overlay = screen.getByTestId('drawer-overlay');
      await userEvent.click(overlay);
      
      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('does not call onClose when overlay is clicked and closeOnOverlayClick is false', async () => {
      const onClose = jest.fn();
      render(
        <Drawer 
          {...defaultProps} 
          onClose={onClose} 
          showOverlay={true}
          closeOnOverlayClick={false}
        />
      );
      
      const overlay = screen.getByTestId('drawer-overlay');
      await userEvent.click(overlay);
      
      expect(onClose).not.toHaveBeenCalled();
    });

    it('calls onClose when Escape key is pressed and closeOnEscape is true', async () => {
      const onClose = jest.fn();
      render(<Drawer {...defaultProps} onClose={onClose} closeOnEscape={true} />);
      
      await userEvent.keyboard('{Escape}');
      
      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('does not call onClose when Escape key is pressed and closeOnEscape is false', async () => {
      const onClose = jest.fn();
      render(<Drawer {...defaultProps} onClose={onClose} closeOnEscape={false} />);
      
      await userEvent.keyboard('{Escape}');
      
      expect(onClose).not.toHaveBeenCalled();
    });

    it('does not call onClose when clicking inside drawer content', async () => {
      const onClose = jest.fn();
      render(
        <Drawer 
          {...defaultProps} 
          onClose={onClose} 
          showOverlay={true}
          closeOnOverlayClick={true}
        />
      );
      
      const content = screen.getByTestId('drawer-content');
      await userEvent.click(content);
      
      expect(onClose).not.toHaveBeenCalled();
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA attributes', () => {
      render(<Drawer {...defaultProps} title="Test Drawer" />);
      
      const dialog = screen.getByRole('dialog');
      expect(dialog).toHaveAttribute('aria-modal', 'true');
      expect(dialog).toHaveAttribute('aria-labelledby');
    });

    it('has proper focus management', () => {
      render(<Drawer {...defaultProps} />);
      
      const dialog = screen.getByRole('dialog');
      expect(dialog).toHaveAttribute('tabIndex', '-1');
    });

    it('traps focus within drawer', async () => {
      render(
        <Drawer {...defaultProps}>
          <Button>First Button</Button>
          <Button>Second Button</Button>
        </Drawer>
      );
      
      const firstButton = screen.getByRole('button', { name: 'First Button' });
      firstButton.focus();
      
      expect(firstButton).toHaveFocus();
      
      // Tab should cycle within the drawer
      await userEvent.tab();
      const secondButton = screen.getByRole('button', { name: 'Second Button' });
      expect(secondButton).toHaveFocus();
    });

    it('restores focus to trigger element when closed', async () => {
      const TriggerButton = () => {
        const [isOpen, setIsOpen] = React.useState(false);
        return (
          <>
            <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
            <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
              <MockContent />
            </Drawer>
          </>
        );
      };
      
      render(<TriggerButton />);
      
      const triggerButton = screen.getByRole('button', { name: 'Open Drawer' });
      await userEvent.click(triggerButton);
      
      expect(screen.getByTestId('drawer-content')).toBeInTheDocument();
      
      const closeButton = screen.getByRole('button', { name: /close/i });
      await userEvent.click(closeButton);
      
      await waitFor(() => {
        expect(triggerButton).toHaveFocus();
      });
    });
  });

  describe('Animation and Transitions', () => {
    it('applies animation classes', () => {
      render(<Drawer {...defaultProps} />);
      
      const drawer = screen.getByRole('dialog');
      expect(drawer).toHaveClass('drawer--animated');
    });

    it('applies custom animation duration', () => {
      render(<Drawer {...defaultProps} animationDuration={500} />);
      
      const drawer = screen.getByRole('dialog');
      expect(drawer).toHaveStyle('transition-duration: 500ms');
    });

    it('disables animations when reduced motion is preferred', () => {
      // Mock prefers-reduced-motion
      Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation(query => ({
          matches: query === '(prefers-reduced-motion: reduce)',
          media: query,
          onchange: null,
          addListener: jest.fn(),
          removeListener: jest.fn(),
          addEventListener: jest.fn(),
          removeEventListener: jest.fn(),
          dispatchEvent: jest.fn(),
        })),
      });
      
      render(<Drawer {...defaultProps} />);
      
      const drawer = screen.getByRole('dialog');
      expect(drawer).toHaveClass('drawer--no-animation');
    });
  });

  describe('Body Scroll Lock', () => {
    it('locks body scroll when lockBodyScroll is true', () => {
      render(<Drawer {...defaultProps} lockBodyScroll={true} />);
      
      expect(document.body).toHaveStyle('overflow: hidden');
    });

    it('does not lock body scroll when lockBodyScroll is false', () => {
      render(<Drawer {...defaultProps} lockBodyScroll={false} />);
      
      expect(document.body).not.toHaveStyle('overflow: hidden');
    });

    it('restores body scroll when drawer is closed', async () => {
      const { rerender } = render(<Drawer {...defaultProps} lockBodyScroll={true} />);
      
      expect(document.body).toHaveStyle('overflow: hidden');
      
      rerender(<Drawer {...defaultProps} isOpen={false} lockBodyScroll={true} />);
      
      await waitFor(() => {
        expect(document.body).not.toHaveStyle('overflow: hidden');
      });
    });
  });

  describe('Custom Content', () => {
    it('renders custom header content', () => {
      const customHeader = <div data-testid="custom-header">Custom Header</div>;
      render(<Drawer {...defaultProps} header={customHeader} />);
      
      expect(screen.getByTestId('custom-header')).toBeInTheDocument();
    });

    it('renders custom footer content', () => {
      const customFooter = <div data-testid="custom-footer">Custom Footer</div>;
      render(<Drawer {...defaultProps} footer={customFooter} />);
      
      expect(screen.getByTestId('custom-footer')).toBeInTheDocument();
    });

    it('renders children content', () => {
      render(
        <Drawer {...defaultProps}>
          <div data-testid="custom-content">Custom Content</div>
        </Drawer>
      );
      
      expect(screen.getByTestId('custom-content')).toBeInTheDocument();
    });
  });

  describe('Loading State', () => {
    it('renders with loading state', () => {
      render(<Drawer {...defaultProps} loading={true} />);
      
      expect(screen.getByRole('dialog')).toHaveClass('drawer--loading');
    });

    it('shows loading spinner when loading', () => {
      render(<Drawer {...defaultProps} loading={true} />);
      
      expect(screen.getByTestId('drawer-loading')).toBeInTheDocument();
    });
  });

  describe('Portal Rendering', () => {
    it('renders in portal when usePortal is true', () => {
      render(<Drawer {...defaultProps} usePortal={true} />);
      
      const drawer = screen.getByRole('dialog');
      expect(drawer.parentElement).toBe(document.body);
    });

    it('renders inline when usePortal is false', () => {
      const { container } = render(<Drawer {...defaultProps} usePortal={false} />);
      
      const drawer = screen.getByRole('dialog');
      expect(container.contains(drawer)).toBe(true);
    });
  });

  describe('Z-Index Management', () => {
    it('applies custom z-index', () => {
      render(<Drawer {...defaultProps} zIndex={2000} />);
      
      const drawer = screen.getByRole('dialog');
      expect(drawer).toHaveStyle('z-index: 2000');
    });

    it('applies default z-index when not specified', () => {
      render(<Drawer {...defaultProps} />);
      
      const drawer = screen.getByRole('dialog');
      expect(drawer).toHaveStyle('z-index: 9999');
    });
  });
});
