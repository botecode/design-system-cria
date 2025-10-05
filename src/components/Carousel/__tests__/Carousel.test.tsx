import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Carousel } from '../Carousel';

// Mock Embla Carousel
const mockEmblaApi = {
  canScrollPrev: jest.fn(() => false),
  canScrollNext: jest.fn(() => true),
  scrollPrev: jest.fn(),
  scrollNext: jest.fn(),
  scrollTo: jest.fn(),
  selectedScrollSnap: jest.fn(() => 0),
  scrollSnapList: jest.fn(() => [0, 1, 2]),
  on: jest.fn(),
  off: jest.fn(),
  destroy: jest.fn(),
};

// Mock the entire embla-carousel-react module
jest.mock('embla-carousel-react', () => {
  const mockEmblaRef = jest.fn();
  return {
    __esModule: true,
    default: jest.fn(() => [mockEmblaRef, mockEmblaApi]),
  };
});

jest.mock('embla-carousel-autoplay', () => {
  return {
    __esModule: true,
    default: jest.fn(() => []),
  };
});

// Mock Phosphor icons
jest.mock('phosphor-react', () => ({
  CaretLeft: ({ size, ...props }: any) => <div data-testid="caret-left" {...props} />,
  CaretRight: ({ size, ...props }: any) => <div data-testid="caret-right" {...props} />,
  Circle: ({ size, ...props }: any) => <div data-testid="circle" {...props} />,
  CircleDashed: ({ size, ...props }: any) => <div data-testid="circle-dashed" {...props} />,
}));

describe('Carousel', () => {
  const mockSlides = [
    { id: '1', content: 'Slide 1' },
    { id: '2', content: 'Slide 2' },
    { id: '3', content: 'Slide 3' },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Rendering', () => {
    it('renders with basic props', () => {
      render(
        <Carousel slides={mockSlides}>
          {(slide) => <div key={slide.id}>{slide.content}</div>}
        </Carousel>
      );

      expect(screen.getByText('Slide 1')).toBeInTheDocument();
      expect(screen.getByText('Slide 2')).toBeInTheDocument();
      expect(screen.getByText('Slide 3')).toBeInTheDocument();
    });

    it('renders with custom className', () => {
      const { container } = render(
        <Carousel className="custom-carousel" slides={mockSlides}>
          {(slide) => <div key={slide.id}>{slide.content}</div>}
        </Carousel>
      );

      expect(container.firstChild).toHaveClass('custom-carousel');
    });

    it('renders with custom style', () => {
      const { container } = render(
        <Carousel style={{ backgroundColor: 'red' }} slides={mockSlides}>
          {(slide) => <div key={slide.id}>{slide.content}</div>}
        </Carousel>
      );

      expect(container.firstChild).toHaveStyle('background-color: red');
    });

    it('renders with data attributes', () => {
      const { container } = render(
        <Carousel data-testid="test-carousel" data-custom="value" slides={mockSlides}>
          {(slide) => <div key={slide.id}>{slide.content}</div>}
        </Carousel>
      );

      expect(container.firstChild).toHaveAttribute('data-testid', 'test-carousel');
      expect(container.firstChild).toHaveAttribute('data-custom', 'value');
    });
  });

  describe('Variants', () => {
    it('renders default variant', () => {
      const { container } = render(
        <Carousel variant="default" slides={mockSlides}>
          {(slide) => <div key={slide.id}>{slide.content}</div>}
        </Carousel>
      );

      expect(container.firstChild).toHaveClass('cria-carousel--default');
    });

    it('renders minimal variant', () => {
      const { container } = render(
        <Carousel variant="minimal" slides={mockSlides}>
          {(slide) => <div key={slide.id}>{slide.content}</div>}
        </Carousel>
      );

      expect(container.firstChild).toHaveClass('cria-carousel--minimal');
    });

    it('renders cards variant', () => {
      const { container } = render(
        <Carousel variant="cards" slides={mockSlides}>
          {(slide) => <div key={slide.id}>{slide.content}</div>}
        </Carousel>
      );

      expect(container.firstChild).toHaveClass('cria-carousel--cards');
    });
  });

  describe('Sizes', () => {
    it('renders small size', () => {
      const { container } = render(
        <Carousel size="sm" slides={mockSlides}>
          {(slide) => <div key={slide.id}>{slide.content}</div>}
        </Carousel>
      );

      expect(container.firstChild).toHaveClass('cria-carousel--size-sm');
    });

    it('renders medium size', () => {
      const { container } = render(
        <Carousel size="md" slides={mockSlides}>
          {(slide) => <div key={slide.id}>{slide.content}</div>}
        </Carousel>
      );

      expect(container.firstChild).toHaveClass('cria-carousel--size-md');
    });

    it('renders large size', () => {
      const { container } = render(
        <Carousel size="lg" slides={mockSlides}>
          {(slide) => <div key={slide.id}>{slide.content}</div>}
        </Carousel>
      );

      expect(container.firstChild).toHaveClass('cria-carousel--size-lg');
    });
  });

  describe('Navigation', () => {
    it('renders navigation arrows when showArrows is true', () => {
      render(
        <Carousel showArrows slides={mockSlides}>
          {(slide) => <div key={slide.id}>{slide.content}</div>}
        </Carousel>
      );

      expect(screen.getByTestId('caret-left')).toBeInTheDocument();
      expect(screen.getByTestId('caret-right')).toBeInTheDocument();
    });

    it('does not render navigation arrows when showArrows is false', () => {
      render(
        <Carousel showArrows={false} slides={mockSlides}>
          {(slide) => <div key={slide.id}>{slide.content}</div>}
        </Carousel>
      );

      expect(screen.queryByTestId('caret-left')).not.toBeInTheDocument();
      expect(screen.queryByTestId('caret-right')).not.toBeInTheDocument();
    });

    it('renders dots when showDots is true', () => {
      render(
        <Carousel showDots slides={mockSlides}>
          {(slide) => <div key={slide.id}>{slide.content}</div>}
        </Carousel>
      );

      expect(screen.getAllByTestId('circle')).toHaveLength(3);
    });

    it('does not render dots when showDots is false', () => {
      render(
        <Carousel showDots={false} slides={mockSlides}>
          {(slide) => <div key={slide.id}>{slide.content}</div>}
        </Carousel>
      );

      expect(screen.queryByTestId('circle')).not.toBeInTheDocument();
    });
  });

  describe('Auto-play', () => {
    it('renders with auto-play when enabled', () => {
      const { container } = render(
        <Carousel autoPlay slides={mockSlides}>
          {(slide) => <div key={slide.id}>{slide.content}</div>}
        </Carousel>
      );

      expect(container.firstChild).toHaveClass('cria-carousel--autoplay');
    });

    it('renders without auto-play when disabled', () => {
      const { container } = render(
        <Carousel autoPlay={false} slides={mockSlides}>
          {(slide) => <div key={slide.id}>{slide.content}</div>}
        </Carousel>
      );

      expect(container.firstChild).not.toHaveClass('cria-carousel--autoplay');
    });
  });

  describe('Loop', () => {
    it('renders with loop when enabled', () => {
      const { container } = render(
        <Carousel loop slides={mockSlides}>
          {(slide) => <div key={slide.id}>{slide.content}</div>}
        </Carousel>
      );

      expect(container.firstChild).toHaveClass('cria-carousel--loop');
    });

    it('renders without loop when disabled', () => {
      const { container } = render(
        <Carousel loop={false} slides={mockSlides}>
          {(slide) => <div key={slide.id}>{slide.content}</div>}
        </Carousel>
      );

      expect(container.firstChild).not.toHaveClass('cria-carousel--loop');
    });
  });

  describe('Responsive', () => {
    it('renders with responsive breakpoints', () => {
      const { container } = render(
        <Carousel responsive={{ mobile: 1, tablet: 2, desktop: 3 }} slides={mockSlides}>
          {(slide) => <div key={slide.id}>{slide.content}</div>}
        </Carousel>
      );

      expect(container.firstChild).toHaveClass('cria-carousel--responsive');
    });
  });

  describe('Accessibility', () => {
    it('applies accessibility attributes', () => {
      render(
        <Carousel 
          role="region" 
          aria-label="Image carousel"
          slides={mockSlides}
        >
          {(slide) => <div key={slide.id}>{slide.content}</div>}
        </Carousel>
      );

      expect(screen.getByRole('region')).toHaveAttribute('aria-label', 'Image carousel');
    });

    it('provides keyboard navigation support', () => {
      render(
        <Carousel slides={mockSlides}>
          {(slide) => <div key={slide.id}>{slide.content}</div>}
        </Carousel>
      );

      const carousel = screen.getByRole('region', { hidden: true });
      expect(carousel).toHaveAttribute('tabindex', '0');
    });
  });

  describe('Custom content', () => {
    it('renders custom header', () => {
      render(
        <Carousel 
          header={<div data-testid="custom-header">Custom Header</div>}
          slides={mockSlides}
        >
          {(slide) => <div key={slide.id}>{slide.content}</div>}
        </Carousel>
      );

      expect(screen.getByTestId('custom-header')).toBeInTheDocument();
    });

    it('renders custom footer', () => {
      render(
        <Carousel 
          footer={<div data-testid="custom-footer">Custom Footer</div>}
          slides={mockSlides}
        >
          {(slide) => <div key={slide.id}>{slide.content}</div>}
        </Carousel>
      );

      expect(screen.getByTestId('custom-footer')).toBeInTheDocument();
    });
  });

  describe('Edge cases', () => {
    it('handles empty slides array', () => {
      render(
        <Carousel slides={[]}>
          {(slide) => <div key={slide.id}>{slide.content}</div>}
        </Carousel>
      );

      expect(screen.queryByText('Slide 1')).not.toBeInTheDocument();
    });

    it('handles single slide', () => {
      render(
        <Carousel slides={[mockSlides[0]]}>
          {(slide) => <div key={slide.id}>{slide.content}</div>}
        </Carousel>
      );

      expect(screen.getByText('Slide 1')).toBeInTheDocument();
      expect(screen.queryByText('Slide 2')).not.toBeInTheDocument();
    });

    it('handles loading state', () => {
      const { container } = render(
        <Carousel loading slides={mockSlides}>
          {(slide) => <div key={slide.id}>{slide.content}</div>}
        </Carousel>
      );

      expect(container.firstChild).toHaveClass('cria-carousel--loading');
    });
  });

  describe('Event handlers', () => {
    it('calls onSlideChange when slide changes', () => {
      const onSlideChange = jest.fn();
      
      render(
        <Carousel onSlideChange={onSlideChange} slides={mockSlides}>
          {(slide) => <div key={slide.id}>{slide.content}</div>}
        </Carousel>
      );

      // Simulate slide change
      mockEmblaApi.on.mock.calls[0][1](0);
      expect(onSlideChange).toHaveBeenCalledWith(0);
    });

    it('calls onSlideClick when slide is clicked', () => {
      const onSlideClick = jest.fn();
      
      render(
        <Carousel onSlideClick={onSlideClick} slides={mockSlides}>
          {(slide) => <div key={slide.id}>{slide.content}</div>}
        </Carousel>
      );

      fireEvent.click(screen.getByText('Slide 1'));
      expect(onSlideClick).toHaveBeenCalledWith(mockSlides[0], 0);
    });
  });

  describe('Props combinations', () => {
    it('renders with all props combined', () => {
      const { container } = render(
        <Carousel
          variant="cards"
          size="lg"
          showArrows
          showDots
          autoPlay
          loop
          responsive={{ mobile: 1, tablet: 2, desktop: 3 }}
          className="custom-class"
          style={{ backgroundColor: 'blue' }}
          data-testid="combined-carousel"
          slides={mockSlides}
        >
          {(slide) => <div key={slide.id}>{slide.content}</div>}
        </Carousel>
      );

      expect(container.firstChild).toHaveClass('custom-class');
      expect(container.firstChild).toHaveClass('cria-carousel--cards');
      expect(container.firstChild).toHaveClass('cria-carousel--size-lg');
      expect(container.firstChild).toHaveClass('cria-carousel--autoplay');
      expect(container.firstChild).toHaveClass('cria-carousel--loop');
      expect(container.firstChild).toHaveClass('cria-carousel--responsive');
      expect(container.firstChild).toHaveStyle('background-color: blue');
      expect(container.firstChild).toHaveAttribute('data-testid', 'combined-carousel');
    });
  });
});
