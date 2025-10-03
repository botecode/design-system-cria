import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '../Button';

describe('Button Component', () => {
  describe('Rendering', () => {
    it('should render button with text content', () => {
      render(<Button>Click me</Button>);
      expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
    });

    it('should render button with correct default variant', () => {
      const { container } = render(<Button>Default Button</Button>);
      const button = container.querySelector('.cria-button');
      expect(button).toHaveClass('cria-button--primary');
    });

    it('should render button with correct variant classes', () => {
      const { container } = render(
        <div>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      );

      const buttons = container.querySelectorAll('.cria-button');
      expect(buttons[0]).toHaveClass('cria-button--primary');
      expect(buttons[1]).toHaveClass('cria-button--secondary');
      expect(buttons[2]).toHaveClass('cria-button--outline');
      expect(buttons[3]).toHaveClass('cria-button--ghost');
    });

    it('should render button with correct size classes', () => {
      const { container } = render(
        <div>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      );

      const buttons = container.querySelectorAll('.cria-button');
      expect(buttons[0]).toHaveClass('cria-button--sm');
      expect(buttons[1]).toHaveClass('cria-button--md');
      expect(buttons[2]).toHaveClass('cria-button--lg');
    });
  });

  describe('Interactive Behavior', () => {
    it('should call onClick handler when clicked', async () => {
      const handleClick = jest.fn();
      const user = userEvent.setup();
      
      render(<Button onClick={handleClick}>Click me</Button>);
      
      await user.click(screen.getByRole('button'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should not call onClick when disabled', async () => {
      const handleClick = jest.fn();
      const user = userEvent.setup();
      
      render(<Button onClick={handleClick} disabled>Disabled Button</Button>);
      
      await user.click(screen.getByRole('button'));
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('should show loading state', () => {
      render(<Button loading>Loading Button</Button>);
      
      const button = screen.getByRole('button');
      expect(button).toHaveClass('cria-button--loading');
      expect(button).toBeDisabled();
    });
  });

  describe('Accessibility', () => {
    it('should have correct ARIA attributes when disabled', () => {
      render(<Button disabled>Disabled Button</Button>);
      
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('disabled');
      expect(button).toHaveAttribute('aria-disabled', 'true');
    });

    it('should have correct ARIA attributes when loading', () => {
      render(<Button loading>Loading Button</Button>);
      
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('disabled');
      expect(button).toHaveAttribute('aria-disabled', 'true');
    });

    it('should be focusable when enabled', () => {
      render(<Button>Focusable Button</Button>);
      
      const button = screen.getByRole('button');
      button.focus();
      expect(button).toHaveFocus();
    });

    it('should not be focusable when disabled', () => {
      render(<Button disabled>Disabled Button</Button>);
      
      const button = screen.getByRole('button');
      button.focus();
      expect(button).not.toHaveFocus();
    });
  });

  describe('Full Width', () => {
    it('should apply full width class when fullWidth prop is true', () => {
      const { container } = render(<Button fullWidth>Full Width Button</Button>);
      
      const button = container.querySelector('.cria-button');
      expect(button).toHaveClass('cria-button--full-width');
    });

    it('should not apply full width class when fullWidth prop is false', () => {
      const { container } = render(<Button fullWidth={false}>Normal Button</Button>);
      
      const button = container.querySelector('.cria-button');
      expect(button).not.toHaveClass('cria-button--full-width');
    });
  });

  describe('Keyboard Navigation', () => {
    it('should be activated with Enter key', async () => {
      const handleClick = jest.fn();
      const user = userEvent.setup();
      
      render(<Button onClick={handleClick}>Enter Button</Button>);
      
      const button = screen.getByRole('button');
      button.focus();
      await user.keyboard('{Enter}');
      
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should be activated with Space key', async () => {
      const handleClick = jest.fn();
      const user = userEvent.setup();
      
      render(<Button onClick={handleClick}>Space Button</Button>);
      
      const button = screen.getByRole('button');
      button.focus();
      await user.keyboard(' ');
      
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});
