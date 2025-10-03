import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Accordion, AccordionItem, AccordionHeader, AccordionContent } from '../Accordion';

describe('Accordion Component', () => {
  const mockItems = [
    {
      id: 'item1',
      header: 'First Item',
      content: 'First item content',
    },
    {
      id: 'item2',
      header: 'Second Item',
      content: 'Second item content',
    },
    {
      id: 'item3',
      header: 'Third Item',
      content: 'Third item content',
    },
  ];

  describe('Rendering', () => {
    it('should render accordion with items', () => {
      render(
        <Accordion>
          {mockItems.map((item) => (
            <AccordionItem key={item.id} id={item.id}>
              <AccordionHeader>{item.header}</AccordionHeader>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      );

      expect(screen.getByText('First Item')).toBeInTheDocument();
      expect(screen.getByText('Second Item')).toBeInTheDocument();
      expect(screen.getByText('Third Item')).toBeInTheDocument();
    });

    it('should render accordion with correct default variant', () => {
      const { container } = render(
        <Accordion>
          <AccordionItem id="item1">
            <AccordionHeader>Header</AccordionHeader>
            <AccordionContent>Content</AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      const accordion = container.querySelector('.cria-accordion');
      expect(accordion).toHaveClass('cria-accordion--default');
    });

    it('should render accordion with correct variant classes', () => {
      const { container } = render(
        <div>
          <Accordion variant="default">
            <AccordionItem id="item1">
              <AccordionHeader>Default</AccordionHeader>
              <AccordionContent>Content</AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion variant="bordered">
            <AccordionItem id="item2">
              <AccordionHeader>Bordered</AccordionHeader>
              <AccordionContent>Content</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      );

      const accordions = container.querySelectorAll('.cria-accordion');
      expect(accordions[0]).toHaveClass('cria-accordion--default');
      expect(accordions[1]).toHaveClass('cria-accordion--bordered');
    });

    it('should render accordion with correct size classes', () => {
      const { container } = render(
        <div>
          <Accordion size="sm">
            <AccordionItem id="item1">
              <AccordionHeader>Small</AccordionHeader>
              <AccordionContent>Content</AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion size="md">
            <AccordionItem id="item2">
              <AccordionHeader>Medium</AccordionHeader>
              <AccordionContent>Content</AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion size="lg">
            <AccordionItem id="item3">
              <AccordionHeader>Large</AccordionHeader>
              <AccordionContent>Content</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      );

      const accordions = container.querySelectorAll('.cria-accordion');
      expect(accordions[0]).toHaveClass('cria-accordion--sm');
      expect(accordions[1]).toHaveClass('cria-accordion--md');
      expect(accordions[2]).toHaveClass('cria-accordion--lg');
    });
  });

  describe('Interactive Behavior', () => {
    it('should expand/collapse item on click', async () => {
      const user = userEvent.setup();
      
      render(
        <Accordion>
          <AccordionItem id="item1">
            <AccordionHeader>Header</AccordionHeader>
            <AccordionContent>Content</AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      const header = screen.getByRole('button');
      const content = screen.getByText('Content');

      // Initially collapsed
      expect(content).not.toBeVisible();

      // Click to expand
      await user.click(header);
      expect(content).toBeVisible();

      // Click to collapse
      await user.click(header);
      expect(content).not.toBeVisible();
    });

    it('should support multiple open items by default', async () => {
      const user = userEvent.setup();
      
      render(
        <Accordion>
          <AccordionItem id="item1">
            <AccordionHeader>First Header</AccordionHeader>
            <AccordionContent>First Content</AccordionContent>
          </AccordionItem>
          <AccordionItem id="item2">
            <AccordionHeader>Second Header</AccordionHeader>
            <AccordionContent>Second Content</AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      const firstHeader = screen.getByRole('button', { name: 'First Header' });
      const secondHeader = screen.getByRole('button', { name: 'Second Header' });
      const firstContent = screen.getByText('First Content');
      const secondContent = screen.getByText('Second Content');

      // Expand first item
      await user.click(firstHeader);
      expect(firstContent).toBeVisible();
      expect(secondContent).not.toBeVisible();

      // Expand second item (both should be open)
      await user.click(secondHeader);
      expect(firstContent).toBeVisible();
      expect(secondContent).toBeVisible();
    });

    it('should enforce single-open mode when allowMultiple is false', async () => {
      const user = userEvent.setup();
      
      render(
        <Accordion allowMultiple={false}>
          <AccordionItem id="item1">
            <AccordionHeader>First Header</AccordionHeader>
            <AccordionContent>First Content</AccordionContent>
          </AccordionItem>
          <AccordionItem id="item2">
            <AccordionHeader>Second Header</AccordionHeader>
            <AccordionContent>Second Content</AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      const firstHeader = screen.getByRole('button', { name: 'First Header' });
      const secondHeader = screen.getByRole('button', { name: 'Second Header' });
      const firstContent = screen.getByText('First Content');
      const secondContent = screen.getByText('Second Content');

      // Expand first item
      await user.click(firstHeader);
      expect(firstContent).toBeVisible();
      expect(secondContent).not.toBeVisible();

      // Expand second item (first should close)
      await user.click(secondHeader);
      expect(firstContent).not.toBeVisible();
      expect(secondContent).toBeVisible();
    });

    it('should call onChange when item state changes', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();
      
      render(
        <Accordion onChange={handleChange}>
          <AccordionItem id="item1">
            <AccordionHeader>Header</AccordionHeader>
            <AccordionContent>Content</AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      const header = screen.getByRole('button');
      
      await user.click(header);
      expect(handleChange).toHaveBeenCalledWith(['item1']);

      await user.click(header);
      expect(handleChange).toHaveBeenCalledWith([]);
    });
  });

  describe('Accessibility', () => {
    it('should have correct ARIA attributes on headers', () => {
      render(
        <Accordion>
          <AccordionItem id="item1">
            <AccordionHeader>Header</AccordionHeader>
            <AccordionContent>Content</AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      const header = screen.getByRole('button');
      expect(header).toHaveAttribute('aria-expanded', 'false');
      expect(header).toHaveAttribute('aria-controls', 'item1-content');
    });

    it('should update aria-expanded when item is expanded', async () => {
      const user = userEvent.setup();
      
      render(
        <Accordion>
          <AccordionItem id="item1">
            <AccordionHeader>Header</AccordionHeader>
            <AccordionContent>Content</AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      const header = screen.getByRole('button');
      
      expect(header).toHaveAttribute('aria-expanded', 'false');
      
      await user.click(header);
      expect(header).toHaveAttribute('aria-expanded', 'true');
    });

    it('should have correct ARIA attributes on content panels', () => {
      render(
        <Accordion>
          <AccordionItem id="item1">
            <AccordionHeader>Header</AccordionHeader>
            <AccordionContent>Content</AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      const content = screen.getByRole('region', { hidden: true });
      expect(content).toHaveAttribute('id', 'item1-content');
      expect(content).toHaveAttribute('aria-labelledby', 'item1-header');
    });

    it('should support keyboard navigation with arrow keys', async () => {
      const user = userEvent.setup();
      
      render(
        <Accordion>
          <AccordionItem id="item1">
            <AccordionHeader>First Header</AccordionHeader>
            <AccordionContent>First Content</AccordionContent>
          </AccordionItem>
          <AccordionItem id="item2">
            <AccordionHeader>Second Header</AccordionHeader>
            <AccordionContent>Second Content</AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      const firstHeader = screen.getByRole('button', { name: 'First Header' });
      const secondHeader = screen.getByRole('button', { name: 'Second Header' });

      // Focus first header
      firstHeader.focus();
      expect(firstHeader).toHaveFocus();

      // Arrow down should move to next header
      await user.keyboard('{ArrowDown}');
      expect(secondHeader).toHaveFocus();

      // Arrow up should move to previous header
      await user.keyboard('{ArrowUp}');
      expect(firstHeader).toHaveFocus();
    });

    it('should activate item with Enter key', async () => {
      const user = userEvent.setup();
      
      render(
        <Accordion>
          <AccordionItem id="item1">
            <AccordionHeader>Header</AccordionHeader>
            <AccordionContent>Content</AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      const header = screen.getByRole('button');
      const content = screen.getByText('Content');

      header.focus();
      expect(content).not.toBeVisible();

      await user.keyboard('{Enter}');
      expect(content).toBeVisible();
    });

    it('should activate item with Space key', async () => {
      const user = userEvent.setup();
      
      render(
        <Accordion>
          <AccordionItem id="item1">
            <AccordionHeader>Header</AccordionHeader>
            <AccordionContent>Content</AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      const header = screen.getByRole('button');
      const content = screen.getByText('Content');

      header.focus();
      expect(content).not.toBeVisible();

      await user.keyboard(' ');
      expect(content).toBeVisible();
    });

    it('should have proper focus management', () => {
      render(
        <Accordion>
          <AccordionItem id="item1">
            <AccordionHeader>Header</AccordionHeader>
            <AccordionContent>Content</AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      const header = screen.getByRole('button');
      header.focus();
      expect(header).toHaveFocus();
    });
  });

  describe('Default Open Items', () => {
    it('should open items specified in defaultOpenItems', () => {
      render(
        <Accordion defaultOpenItems={['item1']}>
          <AccordionItem id="item1">
            <AccordionHeader>First Header</AccordionHeader>
            <AccordionContent>First Content</AccordionContent>
          </AccordionItem>
          <AccordionItem id="item2">
            <AccordionHeader>Second Header</AccordionHeader>
            <AccordionContent>Second Content</AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      const firstContent = screen.getByText('First Content');
      const secondContent = screen.getByText('Second Content');
      const firstHeader = screen.getByRole('button', { name: 'First Header' });

      expect(firstContent).toBeVisible();
      expect(secondContent).not.toBeVisible();
      expect(firstHeader).toHaveAttribute('aria-expanded', 'true');
    });
  });

  describe('Controlled Mode', () => {
    it('should respect openItems prop in controlled mode', () => {
      const { rerender } = render(
        <Accordion openItems={['item1']}>
          <AccordionItem id="item1">
            <AccordionHeader>First Header</AccordionHeader>
            <AccordionContent>First Content</AccordionContent>
          </AccordionItem>
          <AccordionItem id="item2">
            <AccordionHeader>Second Header</AccordionHeader>
            <AccordionContent>Second Content</AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      const firstContent = screen.getByText('First Content');
      const secondContent = screen.getByText('Second Content');

      expect(firstContent).toBeVisible();
      expect(secondContent).not.toBeVisible();

      // Update controlled state
      rerender(
        <Accordion openItems={['item2']}>
          <AccordionItem id="item1">
            <AccordionHeader>First Header</AccordionHeader>
            <AccordionContent>First Content</AccordionContent>
          </AccordionItem>
          <AccordionItem id="item2">
            <AccordionHeader>Second Header</AccordionHeader>
            <AccordionContent>Second Content</AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      expect(firstContent).not.toBeVisible();
      expect(secondContent).toBeVisible();
    });
  });
});
