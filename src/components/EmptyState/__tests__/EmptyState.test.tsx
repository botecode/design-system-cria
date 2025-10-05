import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { EmptyState } from '../EmptyState';
import { Button } from '../../Button';
import { File, FolderOpen, MagnifyingGlass, Plus } from 'phosphor-react';

describe('EmptyState', () => {
  const defaultProps = {
    icon: <File size={48} />,
    title: 'No files found',
    description: 'Upload your first file to get started',
    action: <Button>Upload File</Button>
  };

  describe('Rendering', () => {
    it('renders with basic props', () => {
      render(<EmptyState {...defaultProps} />);
      
      expect(screen.getByText('No files found')).toBeInTheDocument();
      expect(screen.getByText('Upload your first file to get started')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Upload File' })).toBeInTheDocument();
    });

    it('renders with custom className', () => {
      const { container } = render(
        <EmptyState {...defaultProps} className="custom-class" />
      );
      
      expect(container.firstChild).toHaveClass('custom-class');
    });

    it('renders with custom style', () => {
      const { container } = render(
        <EmptyState {...defaultProps} style={{ backgroundColor: 'red' }} />
      );
      
      expect(container.firstChild).toHaveStyle('background-color: rgb(255, 0, 0)');
    });

    it('renders with data attributes', () => {
      const { container } = render(
        <EmptyState 
          {...defaultProps} 
          data-testid="empty-state" 
          data-custom="value" 
        />
      );
      
      expect(container.firstChild).toHaveAttribute('data-testid', 'empty-state');
      expect(container.firstChild).toHaveAttribute('data-custom', 'value');
    });
  });

  describe('Variants', () => {
    it('renders default variant', () => {
      const { container } = render(<EmptyState {...defaultProps} />);
      
      expect(container.firstChild).toHaveClass('cria-empty-state--default');
    });

    it('renders minimal variant', () => {
      const { container } = render(
        <EmptyState {...defaultProps} variant="minimal" />
      );
      
      expect(container.firstChild).toHaveClass('cria-empty-state--minimal');
    });

    it('renders compact variant', () => {
      const { container } = render(
        <EmptyState {...defaultProps} variant="compact" />
      );
      
      expect(container.firstChild).toHaveClass('cria-empty-state--compact');
    });

    it('renders full variant', () => {
      const { container } = render(
        <EmptyState {...defaultProps} variant="full" />
      );
      
      expect(container.firstChild).toHaveClass('cria-empty-state--full');
    });
  });

  describe('Sizes', () => {
    it('renders small size', () => {
      const { container } = render(<EmptyState {...defaultProps} size="sm" />);
      
      expect(container.firstChild).toHaveClass('cria-empty-state--size-sm');
    });

    it('renders medium size', () => {
      const { container } = render(<EmptyState {...defaultProps} size="md" />);
      
      expect(container.firstChild).toHaveClass('cria-empty-state--size-md');
    });

    it('renders large size', () => {
      const { container } = render(<EmptyState {...defaultProps} size="lg" />);
      
      expect(container.firstChild).toHaveClass('cria-empty-state--size-lg');
    });
  });

  describe('Content', () => {
    it('renders without title', () => {
      const { title, ...propsWithoutTitle } = defaultProps;
      render(<EmptyState {...propsWithoutTitle} />);
      
      expect(screen.queryByText('No files found')).not.toBeInTheDocument();
      expect(screen.getByText('Upload your first file to get started')).toBeInTheDocument();
    });

    it('renders without description', () => {
      const { description, ...propsWithoutDescription } = defaultProps;
      render(<EmptyState {...propsWithoutDescription} />);
      
      expect(screen.getByText('No files found')).toBeInTheDocument();
      expect(screen.queryByText('Upload your first file to get started')).not.toBeInTheDocument();
    });

    it('renders without action', () => {
      const { action, ...propsWithoutAction } = defaultProps;
      render(<EmptyState {...propsWithoutAction} />);
      
      expect(screen.getByText('No files found')).toBeInTheDocument();
      expect(screen.queryByRole('button', { name: 'Upload File' })).not.toBeInTheDocument();
    });

    it('renders with custom icon', () => {
      render(
        <EmptyState 
          {...defaultProps} 
          icon={<FolderOpen size={64} />}
        />
      );
      
      expect(screen.getByText('No files found')).toBeInTheDocument();
    });

    it('renders with multiple actions', () => {
      const multipleActions = (
        <div className="flex gap-2">
          <Button variant="outline">Cancel</Button>
          <Button>Upload File</Button>
        </div>
      );
      
      render(
        <EmptyState 
          {...defaultProps} 
          action={multipleActions}
        />
      );
      
      expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Upload File' })).toBeInTheDocument();
    });

    it('renders with additional content', () => {
      const additionalContent = (
        <div className="mt-4 text-sm text-gray-500">
          <p>Need help? Check out our documentation or contact support.</p>
        </div>
      );
      
      render(
        <EmptyState 
          {...defaultProps} 
          additionalContent={additionalContent}
        />
      );
      
      expect(screen.getByText('Need help? Check out our documentation or contact support.')).toBeInTheDocument();
    });
  });

  describe('Interactive', () => {
    it('handles action button clicks', () => {
      const handleClick = jest.fn();
      const actionButton = <Button onClick={handleClick}>Upload File</Button>;
      
      render(<EmptyState {...defaultProps} action={actionButton} />);
      
      fireEvent.click(screen.getByRole('button', { name: 'Upload File' }));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('handles multiple action clicks', () => {
      const handleUpload = jest.fn();
      const handleCancel = jest.fn();
      
      const multipleActions = (
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleUpload}>Upload File</Button>
        </div>
      );
      
      render(<EmptyState {...defaultProps} action={multipleActions} />);
      
      fireEvent.click(screen.getByRole('button', { name: 'Cancel' }));
      fireEvent.click(screen.getByRole('button', { name: 'Upload File' }));
      
      expect(handleCancel).toHaveBeenCalledTimes(1);
      expect(handleUpload).toHaveBeenCalledTimes(1);
    });
  });

  describe('Accessibility', () => {
    it('applies accessibility attributes', () => {
      render(
        <EmptyState 
          {...defaultProps} 
          aria-label="Empty file list"
          role="status"
        />
      );
      
      const emptyState = screen.getByRole('status');
      expect(emptyState).toHaveAttribute('aria-label', 'Empty file list');
    });

    it('has proper heading structure', () => {
      render(<EmptyState {...defaultProps} />);
      
      const title = screen.getByText('No files found');
      expect(title.tagName).toBe('H3');
    });

    it('provides keyboard navigation support', () => {
      const handleClick = jest.fn();
      const actionButton = <Button onClick={handleClick}>Upload File</Button>;
      
      render(<EmptyState {...defaultProps} action={actionButton} />);
      
      const button = screen.getByRole('button', { name: 'Upload File' });
      button.focus();
      
      expect(button).toHaveFocus();
      
      // Test that button is focusable and clickable
      fireEvent.click(button);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('supports screen reader announcements', () => {
      render(
        <EmptyState 
          {...defaultProps}
          aria-live="polite"
        />
      );
      
      const emptyState = screen.getByText('No files found').closest('[aria-live]');
      expect(emptyState).toHaveAttribute('aria-live', 'polite');
    });
  });

  describe('Custom Content', () => {
    it('renders with custom title element', () => {
      const customTitle = <h2 className="text-2xl font-bold">Custom Title</h2>;
      
      render(
        <EmptyState 
          {...defaultProps} 
          title={customTitle}
        />
      );
      
      expect(screen.getByText('Custom Title')).toBeInTheDocument();
      expect(screen.getByText('Custom Title').tagName).toBe('H2');
    });

    it('renders with custom description element', () => {
      const customDescription = (
        <div className="text-lg">
          <p>Custom description with <strong>bold text</strong></p>
        </div>
      );
      
      render(
        <EmptyState 
          {...defaultProps} 
          description={customDescription}
        />
      );
      
      expect(screen.getByText('Custom description with')).toBeInTheDocument();
      expect(screen.getByText('bold text')).toBeInTheDocument();
    });

    it('renders with complex additional content', () => {
      const complexContent = (
        <div className="space-y-2">
          <p>Here are some suggestions:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Check your internet connection</li>
            <li>Try refreshing the page</li>
            <li>Contact support if the issue persists</li>
          </ul>
        </div>
      );
      
      render(
        <EmptyState 
          {...defaultProps} 
          additionalContent={complexContent}
        />
      );
      
      expect(screen.getByText('Here are some suggestions:')).toBeInTheDocument();
      expect(screen.getByText('Check your internet connection')).toBeInTheDocument();
      expect(screen.getByText('Try refreshing the page')).toBeInTheDocument();
      expect(screen.getByText('Contact support if the issue persists')).toBeInTheDocument();
    });
  });

  describe('Edge Cases', () => {
    it('renders with empty strings', () => {
      render(
        <EmptyState 
          icon={<File size={48} />}
          title=""
          description=""
          action={<Button>Action</Button>}
        />
      );
      
      expect(screen.getByRole('button', { name: 'Action' })).toBeInTheDocument();
    });

    it('renders with null values', () => {
      const { container } = render(
        <EmptyState 
          icon={<File size={48} />}
          title={null}
          description={null}
          action={null}
        />
      );
      
      // Should still render the container with just the icon
      expect(container.firstChild).toHaveClass('cria-empty-state');
      expect(screen.queryByText('No files found')).not.toBeInTheDocument();
      expect(screen.queryByText('Upload your first file to get started')).not.toBeInTheDocument();
      expect(screen.queryByRole('button', { name: 'Upload File' })).not.toBeInTheDocument();
    });

    it('renders with undefined values', () => {
      const { container } = render(
        <EmptyState 
          icon={<File size={48} />}
          title={undefined}
          description={undefined}
          action={undefined}
        />
      );
      
      // Should still render the container with just the icon
      expect(container.firstChild).toHaveClass('cria-empty-state');
      expect(screen.queryByText('No files found')).not.toBeInTheDocument();
      expect(screen.queryByText('Upload your first file to get started')).not.toBeInTheDocument();
      expect(screen.queryByRole('button', { name: 'Upload File' })).not.toBeInTheDocument();
    });

    it('handles very long text content', () => {
      const longTitle = 'This is a very long title that might wrap to multiple lines and should be handled gracefully by the empty state component';
      const longDescription = 'This is a very long description that contains a lot of text and might wrap to multiple lines. It should be displayed properly and not break the layout of the empty state component.';
      
      render(
        <EmptyState 
          {...defaultProps}
          title={longTitle}
          description={longDescription}
        />
      );
      
      expect(screen.getByText(longTitle)).toBeInTheDocument();
      expect(screen.getByText(longDescription)).toBeInTheDocument();
    });
  });

  describe('Props combinations', () => {
    it('renders with all props combined', () => {
      const { container } = render(
        <EmptyState 
          {...defaultProps}
          variant="full"
          size="lg"
          className="custom-class"
          style={{ backgroundColor: 'blue' }}
          data-testid="combined-empty-state"
          additionalContent={<div>Additional content</div>}
        />
      );
      
      expect(container.firstChild).toHaveClass('custom-class');
      expect(container.firstChild).toHaveClass('cria-empty-state--full');
      expect(container.firstChild).toHaveClass('cria-empty-state--size-lg');
      expect(container.firstChild).toHaveStyle('background-color: rgb(0, 0, 255)');
      expect(container.firstChild).toHaveAttribute('data-testid', 'combined-empty-state');
      expect(screen.getByText('Additional content')).toBeInTheDocument();
    });
  });
});
