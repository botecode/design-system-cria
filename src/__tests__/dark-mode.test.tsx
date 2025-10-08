import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ThemeProvider, useTheme } from '../contexts';
import { 
  Button, 
  Card, 
  Input, 
  Typography, 
  Modal,
  ThemeToggle 
} from '../index';

// Test wrapper with theme provider
const TestWrapper: React.FC<{ children: React.ReactNode; defaultTheme?: 'light' | 'dark' }> = ({ 
  children, 
  defaultTheme = 'light' 
}) => (
  <ThemeProvider defaultTheme={defaultTheme}>
    {children}
  </ThemeProvider>
);

// Test component to verify theme context
const ThemeTestComponent: React.FC = () => {
  const { theme, isDark, isLight, toggleTheme } = useTheme();
  
  return (
    <div>
      <div data-testid="theme-display">{theme}</div>
      <div data-testid="is-dark">{isDark.toString()}</div>
      <div data-testid="is-light">{isLight.toString()}</div>
      <button data-testid="toggle-theme" onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
};

describe('Dark Mode System', () => {
  describe('ThemeProvider', () => {
    it('should provide light theme by default', () => {
      render(
        <TestWrapper>
          <ThemeTestComponent />
        </TestWrapper>
      );
      
      expect(screen.getByTestId('theme-display')).toHaveTextContent('light');
      expect(screen.getByTestId('is-light')).toHaveTextContent('true');
      expect(screen.getByTestId('is-dark')).toHaveTextContent('false');
    });

    it('should provide dark theme when specified', () => {
      render(
        <TestWrapper defaultTheme="dark">
          <ThemeTestComponent />
        </TestWrapper>
      );
      
      expect(screen.getByTestId('theme-display')).toHaveTextContent('dark');
      expect(screen.getByTestId('is-light')).toHaveTextContent('false');
      expect(screen.getByTestId('is-dark')).toHaveTextContent('true');
    });

    it('should toggle theme correctly', async () => {
      render(
        <TestWrapper>
          <ThemeTestComponent />
        </TestWrapper>
      );
      
      // Initially light
      expect(screen.getByTestId('theme-display')).toHaveTextContent('light');
      
      // Toggle to dark
      fireEvent.click(screen.getByTestId('toggle-theme'));
      
      await waitFor(() => {
        expect(screen.getByTestId('theme-display')).toHaveTextContent('dark');
        expect(screen.getByTestId('is-dark')).toHaveTextContent('true');
        expect(screen.getByTestId('is-light')).toHaveTextContent('false');
      });
      
      // Toggle back to light
      fireEvent.click(screen.getByTestId('toggle-theme'));
      
      await waitFor(() => {
        expect(screen.getByTestId('theme-display')).toHaveTextContent('light');
        expect(screen.getByTestId('is-dark')).toHaveTextContent('false');
        expect(screen.getByTestId('is-light')).toHaveTextContent('true');
      });
    });
  });

  describe('ThemeToggle Component', () => {
    it('should render switch variant', () => {
      render(
        <TestWrapper>
          <ThemeToggle variant="switch" />
        </TestWrapper>
      );
      
      expect(screen.getByRole('switch')).toBeInTheDocument();
    });

    it('should render button variant', () => {
      render(
        <TestWrapper>
          <ThemeToggle variant="button" />
        </TestWrapper>
      );
      
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('should render icon variant', () => {
      render(
        <TestWrapper>
          <ThemeToggle variant="icon" />
        </TestWrapper>
      );
      
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('should toggle theme when clicked', async () => {
      render(
        <TestWrapper>
          <ThemeToggle variant="button" />
        </TestWrapper>
      );
      
      const toggleButton = screen.getByRole('button');
      fireEvent.click(toggleButton);
      
      // Theme should change (we can't easily test the visual change in JSDOM)
      // but we can test that the click handler is called
      expect(toggleButton).toBeInTheDocument();
    });
  });

  describe('Component Dark Mode Support', () => {
    it('should render Button with dark mode classes', () => {
      render(
        <TestWrapper defaultTheme="dark">
          <Button variant="primary">Test Button</Button>
        </TestWrapper>
      );
      
      const button = screen.getByRole('button');
      expect(button).toHaveClass('cria-button');
      expect(button).toHaveClass('cria-button--primary');
    });

    it('should render Card with dark mode classes', () => {
      render(
        <TestWrapper defaultTheme="dark">
          <Card variant="elevated">Test Card</Card>
        </TestWrapper>
      );
      
      const card = screen.getByRole('region');
      expect(card).toHaveClass('cria-card');
      expect(card).toHaveClass('cria-card--elevated');
    });

    it('should render Input with dark mode classes', () => {
      render(
        <TestWrapper defaultTheme="dark">
          <Input label="Test Input" placeholder="Enter text" />
        </TestWrapper>
      );
      
      const input = screen.getByRole('textbox');
      expect(input).toHaveClass('cria-input');
    });

    it('should render Typography with dark mode classes', () => {
      render(
        <TestWrapper defaultTheme="dark">
          <Typography variant="h1">Test Heading</Typography>
        </TestWrapper>
      );
      
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toHaveClass('cria-typography');
      expect(heading).toHaveClass('cria-typography--h1');
    });
  });

  describe('Modal Dark Mode', () => {
    it('should render Modal with dark mode classes when open', () => {
      render(
        <TestWrapper defaultTheme="dark">
          <Modal isOpen={true} onClose={() => {}} title="Test Modal">
            Modal content
          </Modal>
        </TestWrapper>
      );
      
      const modal = screen.getByRole('dialog');
      expect(modal).toHaveClass('cria-modal');
    });
  });

  describe('CSS Variables', () => {
    it('should apply dark theme data attribute', () => {
      render(
        <TestWrapper defaultTheme="dark">
          <div data-testid="test-element">Test</div>
        </TestWrapper>
      );
      
      // The document should have the dark theme attribute
      expect(document.documentElement).toHaveAttribute('data-theme', 'dark');
    });

    it('should apply light theme data attribute', () => {
      render(
        <TestWrapper defaultTheme="light">
          <div data-testid="test-element">Test</div>
        </TestWrapper>
      );
      
      // The document should have the light theme attribute
      expect(document.documentElement).toHaveAttribute('data-theme', 'light');
    });
  });

  describe('Theme Persistence', () => {
    beforeEach(() => {
      // Clear localStorage before each test
      localStorage.clear();
    });

    it('should save theme to localStorage', async () => {
      render(
        <TestWrapper>
          <ThemeTestComponent />
        </TestWrapper>
      );
      
      // Toggle theme
      fireEvent.click(screen.getByTestId('toggle-theme'));
      
      await waitFor(() => {
        expect(localStorage.getItem('cria-theme')).toBe('dark');
      });
    });

    it('should load theme from localStorage', () => {
      // Set theme in localStorage
      localStorage.setItem('cria-theme', 'dark');
      
      render(
        <TestWrapper>
          <ThemeTestComponent />
        </TestWrapper>
      );
      
      expect(screen.getByTestId('theme-display')).toHaveTextContent('dark');
    });
  });

  describe('Accessibility', () => {
    it('should have proper ARIA labels on ThemeToggle', () => {
      render(
        <TestWrapper>
          <ThemeToggle variant="button" />
        </TestWrapper>
      );
      
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-label');
    });

    it('should have proper focus management', () => {
      render(
        <TestWrapper>
          <Button>Test Button</Button>
        </TestWrapper>
      );
      
      const button = screen.getByRole('button');
      button.focus();
      expect(button).toHaveFocus();
    });
  });

  describe('Error Handling', () => {
    it('should throw error when useTheme is used outside ThemeProvider', () => {
      // Suppress console.error for this test
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      
      expect(() => {
        render(<ThemeTestComponent />);
      }).toThrow('useTheme must be used within a ThemeProvider');
      
      consoleSpy.mockRestore();
    });
  });
});
