import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock Embla Carousel with a simpler approach
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

// Mock modules
jest.mock('embla-carousel-react', () => ({
  __esModule: true,
  default: () => [jest.fn(), mockEmblaApi],
}));

jest.mock('embla-carousel-autoplay', () => ({
  __esModule: true,
  default: () => [],
}));

jest.mock('phosphor-react', () => ({
  CaretLeft: ({ size, ...props }: any) => <div data-testid="caret-left" {...props} />,
  CaretRight: ({ size, ...props }: any) => <div data-testid="caret-right" {...props} />,
  Circle: ({ size, ...props }: any) => <div data-testid="circle" {...props} />,
  CircleDashed: ({ size, ...props }: any) => <div data-testid="circle-dashed" {...props} />,
}));

// Import after mocking
import { Carousel } from '../Carousel';

describe('Carousel - Simple Tests', () => {
  const mockSlides = [
    { id: '1', content: 'Slide 1' },
    { id: '2', content: 'Slide 2' },
    { id: '3', content: 'Slide 3' },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

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

  it('renders navigation arrows when showArrows is true', () => {
    render(
      <Carousel showArrows slides={mockSlides}>
        {(slide) => <div key={slide.id}>{slide.content}</div>}
      </Carousel>
    );

    expect(screen.getByTestId('caret-left')).toBeInTheDocument();
    expect(screen.getByTestId('caret-right')).toBeInTheDocument();
  });

  it('renders dots when showDots is true', () => {
    render(
      <Carousel showDots slides={mockSlides}>
        {(slide) => <div key={slide.id}>{slide.content}</div>}
      </Carousel>
    );

    // Should render dots container and at least one dot (the active one)
    expect(screen.getByTestId('circle')).toBeInTheDocument();
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
