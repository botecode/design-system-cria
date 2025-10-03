import React from 'react';
import { render, screen } from '@testing-library/react';
import { TextBody, TextContent, TextContentTitle, TextContentImportant } from '../Text';

describe('Text Component', () => {
  describe('TextBody', () => {
    it('should render with correct default styles', () => {
      const { container } = render(<TextBody>Default body text</TextBody>);
      
      const element = container.querySelector('[class*="cria-text"]');
      const style = element!.getAttribute('style');
      
      // Should use body font size (16px) and regular weight
      expect(style).toContain('font-size: 16px');
      expect(style).toContain('font-weight: 400');
      expect(style).toContain('color: rgb(55, 65, 81)'); // Default dark gray
    });

    it('should render as span element by default', () => {
      const { container } = render(<TextBody>Body text</TextBody>);
      
      expect(container.querySelector('span')).toBeInTheDocument();
      expect(container.querySelector('p')).not.toBeInTheDocument();
    });

    it('should allow as prop override while preserving styles', () => {
      const { container } = render(<TextBody as="p">Body text as paragraph</TextBody>);
      
      expect(container.querySelector('p')).toBeInTheDocument();
      expect(container.querySelector('span')).not.toBeInTheDocument();
    });

    it('should apply correct CSS classes', () => {
      const { container } = render(<TextBody>Body text</TextBody>);
      
      const element = container.querySelector('[class*="cria-text"]');
      expect(element).toHaveClass('cria-text--body');
    });

    it('should support custom className', () => {
      const { container } = render(<TextBody className="custom-class">Body text</TextBody>);
      
      const element = container.querySelector('[class*="cria-text"]');
      expect(element).toHaveClass('custom-class');
    });
  });

  describe('TextContent', () => {
    it('should render with correct styles for long-form content', () => {
      const { container } = render(<TextContent>Long-form content paragraph</TextContent>);
      
      const element = container.querySelector('[class*="cria-text"]');
      const style = element!.getAttribute('style');
      
      // Should use body font size (16px) with relaxed line height
      expect(style).toContain('font-size: 16px');
      expect(style).toContain('line-height: 1.75'); // relaxed
      expect(style).toContain('color: rgb(55, 65, 81)'); // Default dark gray
    });

    it('should render as p element by default for semantic content', () => {
      const { container } = render(<TextContent>Content paragraph</TextContent>);
      
      expect(container.querySelector('p')).toBeInTheDocument();
      expect(container.querySelector('span')).not.toBeInTheDocument();
    });

    it('should allow as prop override while preserving styles', () => {
      const { container } = render(<TextContent as="div">Content as div</TextContent>);
      
      expect(container.querySelector('div')).toBeInTheDocument();
      expect(container.querySelector('p')).not.toBeInTheDocument();
    });

    it('should apply correct CSS classes', () => {
      const { container } = render(<TextContent>Content text</TextContent>);
      
      const element = container.querySelector('[class*="cria-text"]');
      expect(element).toHaveClass('cria-text--content');
    });
  });

  describe('TextContentTitle', () => {
    it('should render with correct styles for section titles', () => {
      const { container } = render(<TextContentTitle>Section Title</TextContentTitle>);
      
      const element = container.querySelector('[class*="cria-text"]');
      const style = element!.getAttribute('style');
      
      // Should use h3 font size (20px) with semiBold weight
      expect(style).toContain('font-size: 20px');
      expect(style).toContain('font-weight: 600');
      expect(style).toContain('color: rgb(55, 65, 81)'); // Default dark gray
    });

    it('should render as h3 element by default for semantic heading', () => {
      const { container } = render(<TextContentTitle>Section Title</TextContentTitle>);
      
      expect(container.querySelector('h3')).toBeInTheDocument();
      expect(container.querySelector('span')).not.toBeInTheDocument();
    });

    it('should allow as prop override while preserving styles', () => {
      const { container } = render(<TextContentTitle as="h2">Title as h2</TextContentTitle>);
      
      expect(container.querySelector('h2')).toBeInTheDocument();
      expect(container.querySelector('h3')).not.toBeInTheDocument();
    });

    it('should apply correct CSS classes', () => {
      const { container } = render(<TextContentTitle>Content title</TextContentTitle>);
      
      const element = container.querySelector('[class*="cria-text"]');
      expect(element).toHaveClass('cria-text--content-title');
    });
  });

  describe('TextContentImportant', () => {
    it('should render with correct styles for emphasized text', () => {
      const { container } = render(<TextContentImportant>Important text</TextContentImportant>);
      
      const element = container.querySelector('[class*="cria-text"]');
      const style = element!.getAttribute('style');
      
      // Should use body font size (16px) with medium weight
      expect(style).toContain('font-size: 16px');
      expect(style).toContain('font-weight: 500');
      expect(style).toContain('color: rgb(55, 65, 81)'); // Default dark gray
    });

    it('should render as span element by default', () => {
      const { container } = render(<TextContentImportant>Important text</TextContentImportant>);
      
      expect(container.querySelector('span')).toBeInTheDocument();
      expect(container.querySelector('p')).not.toBeInTheDocument();
    });

    it('should allow as prop override while preserving styles', () => {
      const { container } = render(<TextContentImportant as="strong">Important as strong</TextContentImportant>);
      
      expect(container.querySelector('strong')).toBeInTheDocument();
      expect(container.querySelector('span')).not.toBeInTheDocument();
    });

    it('should apply correct CSS classes', () => {
      const { container } = render(<TextContentImportant>Important text</TextContentImportant>);
      
      const element = container.querySelector('[class*="cria-text"]');
      expect(element).toHaveClass('cria-text--content-important');
    });
  });

  describe('Accessibility', () => {
    it('should render TextContentTitle as proper heading for screen readers', () => {
      render(<TextContentTitle>Section Title</TextContentTitle>);
      
      const heading = screen.getByRole('heading', { level: 3 });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent('Section Title');
    });

    it('should render TextContent as paragraph for screen readers', () => {
      render(<TextContent>Content paragraph</TextContent>);
      
      const paragraph = screen.getByText('Content paragraph');
      expect(paragraph.tagName).toBe('P');
    });

    it('should maintain semantic meaning when as prop is used', () => {
      render(<TextContentTitle as="h2">Title as h2</TextContentTitle>);
      
      const heading = screen.getByRole('heading', { level: 2 });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent('Title as h2');
    });

    it('should preserve accessibility when TextBody is rendered as paragraph', () => {
      render(<TextBody as="p">Body as paragraph</TextBody>);
      
      const paragraph = screen.getByText('Body as paragraph');
      expect(paragraph.tagName).toBe('P');
    });
  });

  describe('Design Token Integration', () => {
    it('should use correct font family from design tokens', () => {
      const { container } = render(<TextBody>Body text</TextBody>);
      
      const element = container.querySelector('[class*="cria-text"]');
      const style = element!.getAttribute('style');
      
      expect(style).toContain('font-family: "Cartograph CF"');
    });

    it('should use correct line height from design tokens', () => {
      const { container } = render(<TextContent>Content text</TextContent>);
      
      const element = container.querySelector('[class*="cria-text"]');
      const style = element!.getAttribute('style');
      
      expect(style).toContain('line-height: 1.75'); // relaxed from tokens
    });

    it('should use correct font sizes from design tokens', () => {
      const { container } = render(
        <div>
          <TextBody>Body text</TextBody>
          <TextContentTitle>Content title</TextContentTitle>
        </div>
      );
      
      const elements = container.querySelectorAll('[class*="cria-text"]');
      const bodyStyle = elements[0].getAttribute('style');
      const titleStyle = elements[1].getAttribute('style');
      
      expect(bodyStyle).toContain('font-size: 16px'); // body from tokens
      expect(titleStyle).toContain('font-size: 20px'); // h3 from tokens
    });
  });

  describe('Props Forwarding', () => {
    it('should forward all HTML attributes to the rendered element', () => {
      const { container } = render(
        <TextBody data-testid="text-body" id="test-id" className="custom-class">
          Body text
        </TextBody>
      );
      
      const element = container.querySelector('[class*="cria-text"]');
      expect(element).toHaveAttribute('data-testid', 'text-body');
      expect(element).toHaveAttribute('id', 'test-id');
    });

    it('should support onClick and other event handlers', () => {
      const handleClick = jest.fn();
      const { container } = render(
        <TextBody onClick={handleClick}>Clickable text</TextBody>
      );
      
      const element = container.querySelector('[class*="cria-text"]');
      element!.click();
      
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});
