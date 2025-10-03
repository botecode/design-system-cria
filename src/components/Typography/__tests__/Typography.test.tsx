import React from 'react';
import { render, screen } from '@testing-library/react';
import { Typography } from '../Typography';

describe('Typography Component Color Behavior', () => {
  describe('Default Color Behavior', () => {
    it('should use dark gray color (#374151) by default for all text variants', () => {
      const { container } = render(
        <div>
          <Typography variant="body">Default body text</Typography>
          <Typography variant="bodySmall">Default body small text</Typography>
          <Typography variant="caption">Default caption text</Typography>
          <Typography variant="h1">Default heading 1</Typography>
          <Typography variant="h2">Default heading 2</Typography>
          <Typography variant="h3">Default heading 3</Typography>
          <Typography variant="display">Default display text</Typography>
        </div>
      );

      const elements = container.querySelectorAll('[class*="cria-typography"]');
      elements.forEach(element => {
        // Check that the element has the correct inline style color
        const style = element.getAttribute('style');
        expect(style).toContain('color: rgb(55, 65, 81)'); // #374151 in RGB
      });
    });

    it('should use dark gray color for headings without explicit color prop', () => {
      const { container } = render(
        <div>
          <Typography variant="h1" weight="bold">Heading 1</Typography>
          <Typography variant="h2" weight="semiBold">Heading 2</Typography>
          <Typography variant="h3" weight="medium">Heading 3</Typography>
        </div>
      );

      const elements = container.querySelectorAll('[class*="cria-typography"]');
      elements.forEach(element => {
        // Check that the element has the correct inline style color
        const style = element.getAttribute('style');
        expect(style).toContain('color: rgb(55, 65, 81)'); // #374151 in RGB
      });
    });
  });

  describe('Title Variants Color Behavior', () => {
    it('should use Primary color (#7566A1) and be ALL CAPS for title1 variant', () => {
      const { container } = render(
        <Typography variant="title1">Title 1 - Large Title</Typography>
      );

      const element = container.querySelector('[class*="cria-typography"]');
      const style = element!.getAttribute('style');
      
      expect(style).toContain('color: rgb(117, 102, 161)'); // #7566A1 in RGB
      expect(style).toContain('text-transform: uppercase');
    });

    it('should use Primary color (#7566A1) and be ALL CAPS for title2 variant', () => {
      const { container } = render(
        <Typography variant="title2">Title 2 - Medium Title</Typography>
      );

      const element = container.querySelector('[class*="cria-typography"]');
      const style = element!.getAttribute('style');
      
      expect(style).toContain('color: rgb(117, 102, 161)'); // #7566A1 in RGB
      expect(style).toContain('text-transform: uppercase');
    });

    it('should use Primary color (#7566A1) and be ALL CAPS for title3 variant', () => {
      const { container } = render(
        <Typography variant="title3">Title 3 - Small Title</Typography>
      );

      const element = container.querySelector('[class*="cria-typography"]');
      const style = element!.getAttribute('style');
      
      expect(style).toContain('color: rgb(117, 102, 161)'); // #7566A1 in RGB
      expect(style).toContain('text-transform: uppercase');
    });

    it('should override color prop for title variants and always use Primary color', () => {
      const { container } = render(
        <Typography variant="title1" color="secondary">Title with secondary color</Typography>
      );

      const element = container.querySelector('[class*="cria-typography"]');
      const style = element!.getAttribute('style');
      
      // Should still use primary color despite color="secondary" prop
      expect(style).toContain('color: rgb(117, 102, 161)'); // #7566A1 in RGB
      expect(style).toContain('text-transform: uppercase');
    });
  });

  describe('Explicit Color Props', () => {
    it('should use Primary color when color="primary" is explicitly set', () => {
      const { container } = render(
        <Typography variant="body" color="primary">Primary colored text</Typography>
      );

      const element = container.querySelector('[class*="cria-typography"]');
      const style = element!.getAttribute('style');
      expect(style).toContain('color: rgb(117, 102, 161)'); // #7566A1 in RGB
    });

    it('should use Content color when color="content" is explicitly set', () => {
      const { container } = render(
        <Typography variant="body" color="content">Content colored text</Typography>
      );

      const element = container.querySelector('[class*="cria-typography"]');
      const style = element!.getAttribute('style');
      expect(style).toContain('color: rgb(58, 46, 82)'); // #3A2E52 in RGB
    });

    it('should use Primary Light color when color="primaryLight" is explicitly set', () => {
      const { container } = render(
        <Typography variant="body" color="primaryLight">Primary Light colored text</Typography>
      );

      const element = container.querySelector('[class*="cria-typography"]');
      const style = element!.getAttribute('style');
      expect(style).toContain('color: rgb(58, 46, 82)'); // #3A2E52 in RGB
    });

    it('should use Secondary color when color="secondary" is explicitly set', () => {
      const { container } = render(
        <Typography variant="body" color="secondary">Secondary colored text</Typography>
      );

      const element = container.querySelector('[class*="cria-typography"]');
      const style = element!.getAttribute('style');
      expect(style).toContain('color: rgb(40, 221, 185)'); // #28DDB9 in RGB
    });

    it('should use Secondary Dark color when color="secondaryDark" is explicitly set', () => {
      const { container } = render(
        <Typography variant="body" color="secondaryDark">Secondary Dark colored text</Typography>
      );

      const element = container.querySelector('[class*="cria-typography"]');
      const style = element!.getAttribute('style');
      expect(style).toContain('color: rgb(22, 123, 122)'); // #167B7A in RGB
    });

    it('should use semantic colors when explicitly set', () => {
      const { container } = render(
        <div>
          <Typography variant="body" color="success">Success text</Typography>
          <Typography variant="body" color="warning">Warning text</Typography>
          <Typography variant="body" color="error">Error text</Typography>
          <Typography variant="body" color="info">Info text</Typography>
          <Typography variant="body" color="disabled">Disabled text</Typography>
        </div>
      );

      const elements = container.querySelectorAll('[class*="cria-typography"]');
      const expectedColors = [
        'rgb(16, 185, 129)', // #10B981 - success
        'rgb(245, 158, 11)', // #F59E0B - warning
        'rgb(239, 68, 68)',  // #EF4444 - error
        'rgb(59, 130, 246)', // #3B82F6 - info
        'rgb(156, 163, 175)', // #9CA3AF - disabled
      ];

      elements.forEach((element, index) => {
        const style = element.getAttribute('style');
        expect(style).toContain(`color: ${expectedColors[index]}`);
      });
    });
  });

  describe('HTML Element Rendering', () => {
    it('should render title variants as appropriate heading elements', () => {
      const { container } = render(
        <div>
          <Typography variant="title1">Title 1</Typography>
          <Typography variant="title2">Title 2</Typography>
          <Typography variant="title3">Title 3</Typography>
        </div>
      );

      expect(container.querySelector('h1')).toBeInTheDocument();
      expect(container.querySelector('h2')).toBeInTheDocument();
      expect(container.querySelector('h3')).toBeInTheDocument();
    });

    it('should render regular variants as appropriate elements', () => {
      const { container } = render(
        <div>
          <Typography variant="h1">Heading 1</Typography>
          <Typography variant="h2">Heading 2</Typography>
          <Typography variant="h3">Heading 3</Typography>
          <Typography variant="body">Body text</Typography>
          <Typography variant="bodySmall">Body small text</Typography>
          <Typography variant="caption">Caption text</Typography>
        </div>
      );

      expect(container.querySelector('h1')).toBeInTheDocument();
      expect(container.querySelector('h2')).toBeInTheDocument();
      expect(container.querySelector('h3')).toBeInTheDocument();
      expect(container.querySelector('p')).toBeInTheDocument();
      expect(container.querySelector('span')).toBeInTheDocument();
    });
  });

  describe('CSS Classes', () => {
    it('should apply correct CSS classes for title variants', () => {
      const { container } = render(
        <div>
          <Typography variant="title1">Title 1</Typography>
          <Typography variant="title2">Title 2</Typography>
          <Typography variant="title3">Title 3</Typography>
        </div>
      );

      const elements = container.querySelectorAll('[class*="cria-typography"]');
      expect(elements[0]).toHaveClass('cria-typography--title1');
      expect(elements[1]).toHaveClass('cria-typography--title2');
      expect(elements[2]).toHaveClass('cria-typography--title3');
    });

    it('should apply correct CSS classes for color variants', () => {
      const { container } = render(
        <div>
          <Typography variant="body" color="primary">Primary</Typography>
          <Typography variant="body" color="secondary">Secondary</Typography>
          <Typography variant="body" color="success">Success</Typography>
        </div>
      );

      const elements = container.querySelectorAll('[class*="cria-typography"]');
      expect(elements[0]).toHaveClass('cria-typography--color-primary');
      expect(elements[1]).toHaveClass('cria-typography--color-secondary');
      expect(elements[2]).toHaveClass('cria-typography--color-success');
    });
  });
});
