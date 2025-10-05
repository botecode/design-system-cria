import React from 'react';
import { render, screen } from '@testing-library/react';
import { Backgrounds } from '../Backgrounds';
import { Typography } from '../../Typography';

// Mock components for testing
const MockContent = () => <div data-testid="background-content">Background Content</div>;

describe('Backgrounds', () => {
  const defaultProps = {
    children: <MockContent />
  };

  describe('Rendering', () => {
    it('renders with default props', () => {
      render(<Backgrounds {...defaultProps} />);
      
      expect(screen.getByTestId('background-content')).toBeInTheDocument();
      expect(screen.getByRole('region')).toBeInTheDocument();
    });

    it('renders with custom className and style', () => {
      const customStyle = { backgroundColor: 'rgb(255, 0, 0)' };
      render(
        <Backgrounds 
          {...defaultProps} 
          className="custom-background" 
          style={customStyle}
        />
      );
      
      const background = screen.getByRole('region');
      expect(background).toHaveClass('custom-background');
      expect(background).toHaveStyle('background-color: rgb(255, 0, 0)');
    });

    it('renders with different variants', () => {
      const { rerender } = render(<Backgrounds {...defaultProps} variant="plain" />);
      expect(screen.getByRole('region')).toHaveClass('backgrounds--plain');

      rerender(<Backgrounds {...defaultProps} variant="gradient" />);
      expect(screen.getByRole('region')).toHaveClass('backgrounds--gradient');

      rerender(<Backgrounds {...defaultProps} variant="pattern" />);
      expect(screen.getByRole('region')).toHaveClass('backgrounds--pattern');

      rerender(<Backgrounds {...defaultProps} variant="texture" />);
      expect(screen.getByRole('region')).toHaveClass('backgrounds--texture');
    });

    it('renders with different gradient types', () => {
      const { rerender } = render(<Backgrounds {...defaultProps} variant="gradient" gradientType="linear" />);
      expect(screen.getByRole('region')).toHaveClass('backgrounds--gradient-linear');

      rerender(<Backgrounds {...defaultProps} variant="gradient" gradientType="radial" />);
      expect(screen.getByRole('region')).toHaveClass('backgrounds--gradient-radial');

      rerender(<Backgrounds {...defaultProps} variant="gradient" gradientType="conic" />);
      expect(screen.getByRole('region')).toHaveClass('backgrounds--gradient-conic');
    });

    it('renders with different gradient directions', () => {
      const { rerender } = render(<Backgrounds {...defaultProps} variant="gradient" gradientDirection="to-right" />);
      expect(screen.getByRole('region')).toHaveClass('backgrounds--gradient-to-right');

      rerender(<Backgrounds {...defaultProps} variant="gradient" gradientDirection="to-bottom" />);
      expect(screen.getByRole('region')).toHaveClass('backgrounds--gradient-to-bottom');

      rerender(<Backgrounds {...defaultProps} variant="gradient" gradientDirection="to-bottom-right" />);
      expect(screen.getByRole('region')).toHaveClass('backgrounds--gradient-to-bottom-right');

      rerender(<Backgrounds {...defaultProps} variant="gradient" gradientDirection="45deg" />);
      expect(screen.getByRole('region')).toHaveClass('backgrounds--gradient-45deg');
    });

    it('renders with different pattern types', () => {
      const { rerender } = render(<Backgrounds {...defaultProps} variant="pattern" patternType="dots" />);
      expect(screen.getByRole('region')).toHaveClass('backgrounds--pattern-dots');

      rerender(<Backgrounds {...defaultProps} variant="pattern" patternType="grid" />);
      expect(screen.getByRole('region')).toHaveClass('backgrounds--pattern-grid');

      rerender(<Backgrounds {...defaultProps} variant="pattern" patternType="lines" />);
      expect(screen.getByRole('region')).toHaveClass('backgrounds--pattern-lines');

      rerender(<Backgrounds {...defaultProps} variant="pattern" patternType="waves" />);
      expect(screen.getByRole('region')).toHaveClass('backgrounds--pattern-waves');

      rerender(<Backgrounds {...defaultProps} variant="pattern" patternType="geometric" />);
      expect(screen.getByRole('region')).toHaveClass('backgrounds--pattern-geometric');
    });

    it('renders with different texture types', () => {
      const { rerender } = render(<Backgrounds {...defaultProps} variant="texture" textureType="paper" />);
      expect(screen.getByRole('region')).toHaveClass('backgrounds--texture-paper');

      rerender(<Backgrounds {...defaultProps} variant="texture" textureType="fabric" />);
      expect(screen.getByRole('region')).toHaveClass('backgrounds--texture-fabric');

      rerender(<Backgrounds {...defaultProps} variant="texture" textureType="metal" />);
      expect(screen.getByRole('region')).toHaveClass('backgrounds--texture-metal');

      rerender(<Backgrounds {...defaultProps} variant="texture" textureType="wood" />);
      expect(screen.getByRole('region')).toHaveClass('backgrounds--texture-wood');
    });

    it('renders with different color schemes', () => {
      const { rerender } = render(<Backgrounds {...defaultProps} colorScheme="primary" />);
      expect(screen.getByRole('region')).toHaveClass('backgrounds--color-primary');

      rerender(<Backgrounds {...defaultProps} colorScheme="secondary" />);
      expect(screen.getByRole('region')).toHaveClass('backgrounds--color-secondary');

      rerender(<Backgrounds {...defaultProps} colorScheme="neutral" />);
      expect(screen.getByRole('region')).toHaveClass('backgrounds--color-neutral');

      rerender(<Backgrounds {...defaultProps} colorScheme="accent" />);
      expect(screen.getByRole('region')).toHaveClass('backgrounds--color-accent');
    });

    it('renders with different sizes', () => {
      const { rerender } = render(<Backgrounds {...defaultProps} size="sm" />);
      expect(screen.getByRole('region')).toHaveClass('backgrounds--sm');

      rerender(<Backgrounds {...defaultProps} size="md" />);
      expect(screen.getByRole('region')).toHaveClass('backgrounds--md');

      rerender(<Backgrounds {...defaultProps} size="lg" />);
      expect(screen.getByRole('region')).toHaveClass('backgrounds--lg');

      rerender(<Backgrounds {...defaultProps} size="xl" />);
      expect(screen.getByRole('region')).toHaveClass('backgrounds--xl');

      rerender(<Backgrounds {...defaultProps} size="full" />);
      expect(screen.getByRole('region')).toHaveClass('backgrounds--full');
    });

    it('renders with different intensities', () => {
      const { rerender } = render(<Backgrounds {...defaultProps} intensity="subtle" />);
      expect(screen.getByRole('region')).toHaveClass('backgrounds--intensity-subtle');

      rerender(<Backgrounds {...defaultProps} intensity="medium" />);
      expect(screen.getByRole('region')).toHaveClass('backgrounds--intensity-medium');

      rerender(<Backgrounds {...defaultProps} intensity="bold" />);
      expect(screen.getByRole('region')).toHaveClass('backgrounds--intensity-bold');
    });
  });

  describe('Gradient Properties', () => {
    it('renders with custom gradient colors', () => {
      render(
        <Backgrounds 
          {...defaultProps} 
          variant="gradient"
          gradientColors={['#ff0000', '#00ff00', '#0000ff']}
        />
      );
      
      const background = screen.getByRole('region');
      expect(background).toHaveClass('backgrounds--gradient');
    });

    it('renders with custom gradient stops', () => {
      render(
        <Backgrounds 
          {...defaultProps} 
          variant="gradient"
          gradientStops={['0%', '50%', '100%']}
        />
      );
      
      const background = screen.getByRole('region');
      expect(background).toHaveClass('backgrounds--gradient');
    });

    it('renders with custom gradient position', () => {
      render(
        <Backgrounds 
          {...defaultProps} 
          variant="gradient"
          gradientPosition="center"
        />
      );
      
      const background = screen.getByRole('region');
      expect(background).toHaveClass('backgrounds--gradient');
    });
  });

  describe('Pattern Properties', () => {
    it('renders with custom pattern size', () => {
      render(
        <Backgrounds 
          {...defaultProps} 
          variant="pattern"
          patternSize="20px"
        />
      );
      
      const background = screen.getByRole('region');
      expect(background).toHaveClass('backgrounds--pattern');
    });

    it('renders with custom pattern opacity', () => {
      render(
        <Backgrounds 
          {...defaultProps} 
          variant="pattern"
          patternOpacity={0.5}
        />
      );
      
      const background = screen.getByRole('region');
      expect(background).toHaveClass('backgrounds--pattern');
    });

    it('renders with custom pattern color', () => {
      render(
        <Backgrounds 
          {...defaultProps} 
          variant="pattern"
          patternColor="#ff0000"
        />
      );
      
      const background = screen.getByRole('region');
      expect(background).toHaveClass('backgrounds--pattern');
    });
  });

  describe('Texture Properties', () => {
    it('renders with custom texture intensity', () => {
      render(
        <Backgrounds 
          {...defaultProps} 
          variant="texture"
          textureIntensity={0.8}
        />
      );
      
      const background = screen.getByRole('region');
      expect(background).toHaveClass('backgrounds--texture');
    });

    it('renders with custom texture scale', () => {
      render(
        <Backgrounds 
          {...defaultProps} 
          variant="texture"
          textureScale={1.5}
        />
      );
      
      const background = screen.getByRole('region');
      expect(background).toHaveClass('backgrounds--texture');
    });
  });

  describe('Animation Properties', () => {
    it('renders with animation when animated prop is true', () => {
      render(<Backgrounds {...defaultProps} animated={true} />);
      
      const background = screen.getByRole('region');
      expect(background).toHaveClass('backgrounds--animated');
    });

    it('does not render with animation when animated prop is false', () => {
      render(<Backgrounds {...defaultProps} animated={false} />);
      
      const background = screen.getByRole('region');
      expect(background).not.toHaveClass('backgrounds--animated');
    });

    it('renders with custom animation duration', () => {
      render(<Backgrounds {...defaultProps} animated={true} animationDuration={2000} />);
      
      const background = screen.getByRole('region');
      expect(background).toHaveClass('backgrounds--animated');
    });

    it('renders with custom animation delay', () => {
      render(<Backgrounds {...defaultProps} animated={true} animationDelay={500} />);
      
      const background = screen.getByRole('region');
      expect(background).toHaveClass('backgrounds--animated');
    });
  });

  describe('Overlay Properties', () => {
    it('renders with overlay when showOverlay is true', () => {
      render(<Backgrounds {...defaultProps} showOverlay={true} />);
      
      const background = screen.getByRole('region');
      expect(background).toHaveClass('backgrounds--overlay');
    });

    it('does not render with overlay when showOverlay is false', () => {
      render(<Backgrounds {...defaultProps} showOverlay={false} />);
      
      const background = screen.getByRole('region');
      expect(background).not.toHaveClass('backgrounds--overlay');
    });

    it('renders with custom overlay opacity', () => {
      render(<Backgrounds {...defaultProps} showOverlay={true} overlayOpacity={0.3} />);
      
      const background = screen.getByRole('region');
      expect(background).toHaveClass('backgrounds--overlay');
    });

    it('renders with custom overlay color', () => {
      render(<Backgrounds {...defaultProps} showOverlay={true} overlayColor="#000000" />);
      
      const background = screen.getByRole('region');
      expect(background).toHaveClass('backgrounds--overlay');
    });
  });

  describe('Responsive Properties', () => {
    it('renders with responsive behavior', () => {
      render(<Backgrounds {...defaultProps} responsive={true} />);
      
      const background = screen.getByRole('region');
      expect(background).toHaveClass('backgrounds--responsive');
    });

    it('does not render with responsive behavior when responsive is false', () => {
      render(<Backgrounds {...defaultProps} responsive={false} />);
      
      const background = screen.getByRole('region');
      expect(background).not.toHaveClass('backgrounds--responsive');
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA attributes', () => {
      render(<Backgrounds {...defaultProps} ariaLabel="Background section" />);
      
      const background = screen.getByRole('region');
      expect(background).toHaveAttribute('aria-label', 'Background section');
    });

    it('has proper role attribute', () => {
      render(<Backgrounds {...defaultProps} />);
      
      const background = screen.getByRole('region');
      expect(background).toBeInTheDocument();
    });

    it('supports custom aria attributes', () => {
      render(
        <Backgrounds 
          {...defaultProps} 
          ariaDescribedBy="background-description"
          ariaLabelledBy="background-title"
        />
      );
      
      const background = screen.getByRole('region');
      expect(background).toHaveAttribute('aria-describedby', 'background-description');
      expect(background).toHaveAttribute('aria-labelledby', 'background-title');
    });
  });

  describe('Content Rendering', () => {
    it('renders children content', () => {
      render(
        <Backgrounds {...defaultProps}>
          <div data-testid="custom-content">Custom Content</div>
        </Backgrounds>
      );
      
      expect(screen.getByTestId('custom-content')).toBeInTheDocument();
    });

    it('renders multiple children', () => {
      render(
        <Backgrounds {...defaultProps}>
          <div data-testid="content-1">Content 1</div>
          <div data-testid="content-2">Content 2</div>
        </Backgrounds>
      );
      
      expect(screen.getByTestId('content-1')).toBeInTheDocument();
      expect(screen.getByTestId('content-2')).toBeInTheDocument();
    });

    it('renders with complex nested content', () => {
      render(
        <Backgrounds {...defaultProps}>
          <div>
            <Typography variant="h1">Title</Typography>
            <Typography variant="body">Description</Typography>
          </div>
        </Backgrounds>
      );
      
      expect(screen.getByText('Title')).toBeInTheDocument();
      expect(screen.getByText('Description')).toBeInTheDocument();
    });
  });

  describe('Combined Properties', () => {
    it('renders with multiple properties combined', () => {
      render(
        <Backgrounds 
          {...defaultProps}
          variant="gradient"
          gradientType="radial"
          gradientDirection="center"
          colorScheme="primary"
          size="lg"
          intensity="bold"
          animated={true}
          showOverlay={true}
        />
      );
      
      const background = screen.getByRole('region');
      expect(background).toHaveClass('backgrounds--gradient');
      expect(background).toHaveClass('backgrounds--gradient-radial');
      expect(background).toHaveClass('backgrounds--color-primary');
      expect(background).toHaveClass('backgrounds--lg');
      expect(background).toHaveClass('backgrounds--intensity-bold');
      expect(background).toHaveClass('backgrounds--animated');
      expect(background).toHaveClass('backgrounds--overlay');
    });

    it('renders pattern with custom properties', () => {
      render(
        <Backgrounds 
          {...defaultProps}
          variant="pattern"
          patternType="dots"
          patternSize="15px"
          patternOpacity={0.7}
          patternColor="#ff0000"
          colorScheme="secondary"
        />
      );
      
      const background = screen.getByRole('region');
      expect(background).toHaveClass('backgrounds--pattern');
      expect(background).toHaveClass('backgrounds--pattern-dots');
      expect(background).toHaveClass('backgrounds--color-secondary');
    });

    it('renders texture with custom properties', () => {
      render(
        <Backgrounds 
          {...defaultProps}
          variant="texture"
          textureType="paper"
          textureIntensity={0.6}
          textureScale={2.0}
          colorScheme="neutral"
        />
      );
      
      const background = screen.getByRole('region');
      expect(background).toHaveClass('backgrounds--texture');
      expect(background).toHaveClass('backgrounds--texture-paper');
      expect(background).toHaveClass('backgrounds--color-neutral');
    });
  });

  describe('Edge Cases', () => {
    it('renders with empty children', () => {
      render(<Backgrounds>{null}</Backgrounds>);
      
      const background = screen.getByRole('region');
      expect(background).toBeInTheDocument();
    });

    it('renders with undefined props', () => {
      render(
        <Backgrounds 
          {...defaultProps}
          gradientColors={undefined}
          patternSize={undefined}
          textureIntensity={undefined}
        />
      );
      
      const background = screen.getByRole('region');
      expect(background).toBeInTheDocument();
    });

    it('handles invalid variant gracefully', () => {
      render(<Backgrounds {...defaultProps} variant={"invalid" as any} />);
      
      const background = screen.getByRole('region');
      expect(background).toBeInTheDocument();
    });
  });
});
