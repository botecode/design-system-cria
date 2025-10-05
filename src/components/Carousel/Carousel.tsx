import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { CaretLeft, CaretRight, Circle, CircleDashed } from 'phosphor-react';
import { colors } from '../../tokens/colors';
import { spacing } from '../../tokens/spacing';
import { radii } from '../../tokens/radii';
import { shadows } from '../../tokens/shadows';

export interface CarouselSlide {
  id: string | number;
  [key: string]: any;
}

export interface ResponsiveConfig {
  mobile?: number;
  tablet?: number;
  desktop?: number;
}

export interface CarouselProps<T = CarouselSlide> extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Array of slide data to display
   */
  slides: T[];
  /**
   * Function to render each slide
   */
  children: (slide: T, index: number) => React.ReactNode;
  /**
   * The variant of the carousel
   * @default 'default'
   */
  variant?: 'default' | 'minimal' | 'cards';
  /**
   * The size of the carousel
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Whether to show navigation arrows
   * @default true
   */
  showArrows?: boolean;
  /**
   * Whether to show pagination dots
   * @default true
   */
  showDots?: boolean;
  /**
   * Whether to enable auto-play
   * @default false
   */
  autoPlay?: boolean;
  /**
   * Auto-play delay in milliseconds
   * @default 4000
   */
  autoPlayDelay?: number;
  /**
   * Whether to loop slides
   * @default false
   */
  loop?: boolean;
  /**
   * Number of slides to show at once
   * @default 1
   */
  slidesToShow?: number;
  /**
   * Number of slides to scroll at once
   * @default 1
   */
  slidesToScroll?: number;
  /**
   * Responsive configuration for different screen sizes
   */
  responsive?: ResponsiveConfig;
  /**
   * Custom header content
   */
  header?: React.ReactNode;
  /**
   * Custom footer content
   */
  footer?: React.ReactNode;
  /**
   * Callback when slide changes
   */
  onSlideChange?: (index: number) => void;
  /**
   * Callback when slide is clicked
   */
  onSlideClick?: (slide: T, index: number) => void;
  /**
   * Whether the carousel is in loading state
   * @default false
   */
  loading?: boolean;
  /**
   * Custom class name for the carousel
   */
  className?: string;
  /**
   * Custom style for the carousel
   */
  style?: React.CSSProperties;
}

export const Carousel = <T extends CarouselSlide>({
  slides,
  children,
  variant = 'default',
  size = 'md',
  showArrows = true,
  showDots = true,
  autoPlay = false,
  autoPlayDelay = 4000,
  loop = false,
  slidesToShow = 1,
  slidesToScroll = 1,
  responsive,
  header,
  footer,
  onSlideChange,
  onSlideClick,
  loading = false,
  className = '',
  style = {},
  ...props
}: CarouselProps<T>) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop,
      slidesToScroll,
      breakpoints: responsive ? {
        '(min-width: 768px)': { slidesToScroll: responsive.tablet || slidesToScroll },
        '(min-width: 1024px)': { slidesToScroll: responsive.desktop || slidesToScroll },
      } : undefined,
    },
    autoPlay ? [Autoplay({ delay: autoPlayDelay })] : []
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    onSlideChange?.(emblaApi.selectedScrollSnap());
  }, [emblaApi, onSlideChange]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  const handleSlideClick = useCallback((slide: T, index: number) => {
    onSlideClick?.(slide, index);
  }, [onSlideClick]);

  const classes = [
    'cria-carousel',
    `cria-carousel--${variant}`,
    `cria-carousel--size-${size}`,
    autoPlay && 'cria-carousel--autoplay',
    loop && 'cria-carousel--loop',
    responsive && 'cria-carousel--responsive',
    loading && 'cria-carousel--loading',
    className,
  ].filter(Boolean).join(' ');

  if (loading) {
    return (
      <div className={classes} style={style} {...props}>
        <div className="cria-carousel__loading">
          <div className="cria-carousel__spinner"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={classes} style={style} {...props}>
      {header && (
        <div className="cria-carousel__header">
          {header}
        </div>
      )}
      
      <div className="cria-carousel__container">
        <div className="cria-carousel__viewport" ref={emblaRef}>
          <div className="cria-carousel__container-inner">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className="cria-carousel__slide"
                onClick={() => handleSlideClick(slide, index)}
              >
                {children(slide, index)}
              </div>
            ))}
          </div>
        </div>

        {showArrows && (
          <>
            <button
              className="cria-carousel__arrow cria-carousel__arrow--prev"
              onClick={scrollPrev}
              aria-label="Previous slide"
            >
              <CaretLeft size={24} />
            </button>
            <button
              className="cria-carousel__arrow cria-carousel__arrow--next"
              onClick={scrollNext}
              aria-label="Next slide"
            >
              <CaretRight size={24} />
            </button>
          </>
        )}
      </div>

      {showDots && scrollSnaps.length > 1 && (
        <div className="cria-carousel__dots">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`cria-carousel__dot ${index === selectedIndex ? 'cria-carousel__dot--active' : ''}`}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            >
              {index === selectedIndex ? (
                <Circle size={12} weight="fill" />
              ) : (
                <CircleDashed size={12} weight="regular" />
              )}
            </button>
          ))}
        </div>
      )}

      {footer && (
        <div className="cria-carousel__footer">
          {footer}
        </div>
      )}
    </div>
  );
};
