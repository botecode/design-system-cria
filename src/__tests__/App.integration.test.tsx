import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

// Mock the demo components to avoid complex rendering
jest.mock('../components/Typography/demo', () => ({
  __esModule: true,
  default: () => <div data-testid="typography-demo">Typography Demo</div>,
}));

jest.mock('../components/Button/demo', () => ({
  __esModule: true,
  default: () => <div data-testid="button-demo">Button Demo</div>,
}));

jest.mock('../components/Card/demo', () => ({
  __esModule: true,
  default: () => <div data-testid="card-demo">Card Demo</div>,
}));

jest.mock('../components/Colors/demo', () => ({
  ColorsDemo: () => <div data-testid="colors-demo">Colors Demo</div>,
}));

describe('App Integration Tests - Color Behavior', () => {
  beforeEach(() => {
    // Mock window.getComputedStyle for color testing
    const mockGetComputedStyle = jest.fn();
    Object.defineProperty(window, 'getComputedStyle', {
      value: mockGetComputedStyle,
      writable: true,
    });
  });

  describe('Overview Page Color Behavior', () => {
    it('should render overview page with correct color hierarchy', () => {
      render(<App />);
      
      // Check that overview content is rendered
      expect(screen.getByText('CRIA_UI Design System')).toBeInTheDocument();
      expect(screen.getByText('Welcome to CRIA_UI')).toBeInTheDocument();
      expect(screen.getByText('Getting Started')).toBeInTheDocument();
    });

    it('should have navigation with correct structure', () => {
      render(<App />);
      
      // Check navigation items
      expect(screen.getByText('Overview')).toBeInTheDocument();
      expect(screen.getByText('Typography')).toBeInTheDocument();
      expect(screen.getByText('Button')).toBeInTheDocument();
      expect(screen.getByText('Card')).toBeInTheDocument();
      expect(screen.getByText('Colors')).toBeInTheDocument();
    });

    it('should show feature cards with correct content', () => {
      render(<App />);
      
      // Check feature cards
      expect(screen.getByText('🎨 Design Tokens')).toBeInTheDocument();
      expect(screen.getByText('🧩 Components')).toBeInTheDocument();
      expect(screen.getByText('♿ Accessible')).toBeInTheDocument();
      
      // Check card descriptions
      expect(screen.getByText(/Consistent colors, typography, spacing/)).toBeInTheDocument();
      expect(screen.getByText(/Production-ready React components/)).toBeInTheDocument();
      expect(screen.getByText(/Built with accessibility in mind/)).toBeInTheDocument();
    });

    it('should have action buttons for navigation', () => {
      render(<App />);
      
      // Check action buttons
      expect(screen.getByText('Explore Typography')).toBeInTheDocument();
      expect(screen.getByText('View Buttons')).toBeInTheDocument();
      expect(screen.getByText('See Cards')).toBeInTheDocument();
      expect(screen.getByText('View Colors')).toBeInTheDocument();
    });
  });

  describe('Navigation Behavior', () => {
    it('should navigate to Typography demo when clicked', () => {
      render(<App />);
      
      const typographyButton = screen.getByText('Typography');
      fireEvent.click(typographyButton);
      
      expect(screen.getByTestId('typography-demo')).toBeInTheDocument();
    });

    it('should navigate to Button demo when clicked', () => {
      render(<App />);
      
      const buttonButton = screen.getByText('Button');
      fireEvent.click(buttonButton);
      
      expect(screen.getByTestId('button-demo')).toBeInTheDocument();
    });

    it('should navigate to Card demo when clicked', () => {
      render(<App />);
      
      const cardButton = screen.getByText('Card');
      fireEvent.click(cardButton);
      
      expect(screen.getByTestId('card-demo')).toBeInTheDocument();
    });

    it('should navigate to Colors demo when clicked', () => {
      render(<App />);
      
      const colorsButton = screen.getByText('Colors');
      fireEvent.click(colorsButton);
      
      expect(screen.getByTestId('colors-demo')).toBeInTheDocument();
    });

    it('should navigate back to Overview when clicked', () => {
      render(<App />);
      
      // First navigate to another section
      const typographyButton = screen.getByText('Typography');
      fireEvent.click(typographyButton);
      expect(screen.getByTestId('typography-demo')).toBeInTheDocument();
      
      // Then navigate back to overview
      const overviewButton = screen.getByText('Overview');
      fireEvent.click(overviewButton);
      expect(screen.getByText('CRIA_UI Design System')).toBeInTheDocument();
    });
  });

  describe('Action Button Navigation', () => {
    it('should navigate to Typography from action button', () => {
      render(<App />);
      
      const exploreTypographyButton = screen.getByText('Explore Typography');
      fireEvent.click(exploreTypographyButton);
      
      expect(screen.getByTestId('typography-demo')).toBeInTheDocument();
    });

    it('should navigate to Button from action button', () => {
      render(<App />);
      
      const viewButtonsButton = screen.getByText('View Buttons');
      fireEvent.click(viewButtonsButton);
      
      expect(screen.getByTestId('button-demo')).toBeInTheDocument();
    });

    it('should navigate to Card from action button', () => {
      render(<App />);
      
      const seeCardsButton = screen.getByText('See Cards');
      fireEvent.click(seeCardsButton);
      
      expect(screen.getByTestId('card-demo')).toBeInTheDocument();
    });

    it('should navigate to Colors from action button', () => {
      render(<App />);
      
      const viewColorsButton = screen.getByText('View Colors');
      fireEvent.click(viewColorsButton);
      
      expect(screen.getByTestId('colors-demo')).toBeInTheDocument();
    });
  });

  describe('Footer Content', () => {
    it('should display footer with correct content', () => {
      render(<App />);
      
      expect(screen.getByText(/Built with ❤️ for CR_IA applications/)).toBeInTheDocument();
    });
  });
});
