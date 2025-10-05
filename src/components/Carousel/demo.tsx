import React, { useState } from 'react';
import { Carousel } from './Carousel';
import { Typography } from '../Typography';
import { Button } from '../Button';
import { Divider } from '../Divider';
import { Card } from '../Card';
import { Scrollbar } from '../Scrollbar';

const CarouselDemo: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample data for different carousel types
  const imageSlides = [
    {
      id: 1,
      image: 'https://picsum.photos/800/400?random=1',
      title: 'Beautiful Landscape',
      description: 'A stunning view of mountains and valleys'
    },
    {
      id: 2,
      image: 'https://picsum.photos/800/400?random=2',
      title: 'Ocean Waves',
      description: 'Peaceful ocean waves at sunset'
    },
    {
      id: 3,
      image: 'https://picsum.photos/800/400?random=3',
      title: 'Forest Path',
      description: 'A winding path through ancient trees'
    },
    {
      id: 4,
      image: 'https://picsum.photos/800/400?random=4',
      title: 'City Skyline',
      description: 'Modern architecture against the sky'
    }
  ];

  const cardSlides = [
    {
      id: 1,
      title: 'React Development',
      description: 'Learn modern React patterns and best practices',
      author: 'John Doe',
      rating: 4.8,
      price: '$99'
    },
    {
      id: 2,
      title: 'TypeScript Fundamentals',
      description: 'Master TypeScript for better JavaScript development',
      author: 'Jane Smith',
      rating: 4.9,
      price: '$79'
    },
    {
      id: 3,
      title: 'Node.js Backend',
      description: 'Build scalable server-side applications',
      author: 'Mike Johnson',
      rating: 4.7,
      price: '$129'
    },
    {
      id: 4,
      title: 'GraphQL API Design',
      description: 'Design and implement efficient GraphQL APIs',
      author: 'Sarah Wilson',
      rating: 4.6,
      price: '$89'
    }
  ];

  const textSlides = [
    {
      id: 1,
      content: 'Welcome to our amazing platform!',
      subtitle: 'Discover new possibilities'
    },
    {
      id: 2,
      content: 'Build incredible applications',
      subtitle: 'With modern tools and techniques'
    },
    {
      id: 3,
      content: 'Join thousands of developers',
      subtitle: 'Creating the future together'
    }
  ];

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <Typography variant="h1" style={{ marginBottom: '2rem' }}>
        Carousel Component
      </Typography>

      <Typography variant="body" style={{ marginBottom: '2rem', color: '#666' }}>
        A versatile carousel component built with Embla Carousel, supporting multiple variants,
        auto-play, navigation controls, and responsive design.
      </Typography>

      {/* Basic Image Carousel */}
      <section style={{ marginBottom: '3rem' }}>
        <Typography variant="h2" style={{ marginBottom: '1rem' }}>
          Basic Image Carousel
        </Typography>
        <Typography variant="body" style={{ marginBottom: '1rem' }}>
          Simple image carousel with navigation arrows and dots.
        </Typography>
        
        <Carousel
          slides={imageSlides}
          onSlideChange={(index) => setCurrentSlide(index)}
          style={{ marginBottom: '1rem' }}
        >
          {(slide) => (
            <div style={{ position: 'relative', height: '400px' }}>
              <img
                src={slide.image}
                alt={slide.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '8px'
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                color: 'white',
                padding: '2rem',
                borderRadius: '0 0 8px 8px'
              }}>
                <Typography variant="h3" style={{ color: 'white', marginBottom: '0.5rem' }}>
                  {slide.title}
                </Typography>
                <Typography variant="body" style={{ color: 'rgba(255,255,255,0.9)' }}>
                  {slide.description}
                </Typography>
              </div>
            </div>
          )}
        </Carousel>
        
        <Typography variant="caption" style={{ color: '#666' }}>
          Current slide: {currentSlide + 1} of {imageSlides.length}
        </Typography>
      </section>

      <Divider style={{ margin: '2rem 0' }} />

      {/* Cards Carousel */}
      <section style={{ marginBottom: '3rem' }}>
        <Typography variant="h2" style={{ marginBottom: '1rem' }}>
          Cards Carousel
        </Typography>
        <Typography variant="body" style={{ marginBottom: '1rem' }}>
          Carousel with card-based content and custom styling.
        </Typography>
        
        <Carousel
          variant="cards"
          slides={cardSlides}
          responsive={{ mobile: 1, tablet: 2, desktop: 3 }}
          style={{ marginBottom: '1rem' }}
        >
          {(slide) => (
            <Card style={{ height: '100%', margin: '0 0.5rem' }}>
              <div style={{ padding: '1.5rem' }}>
                <Typography variant="h4" style={{ marginBottom: '0.5rem' }}>
                  {slide.title}
                </Typography>
                <Typography variant="body" style={{ marginBottom: '1rem', color: '#666' }}>
                  {slide.description}
                </Typography>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <Typography variant="caption" style={{ color: '#888' }}>
                    by {slide.author}
                  </Typography>
                  <Typography variant="caption" style={{ color: '#888' }}>
                    ⭐ {slide.rating}
                  </Typography>
                </div>
                <Button variant="primary" style={{ width: '100%' }}>
                  Enroll for {slide.price}
                </Button>
              </div>
            </Card>
          )}
        </Carousel>
      </section>

      <Divider style={{ margin: '2rem 0' }} />

      {/* Auto-play Carousel */}
      <section style={{ marginBottom: '3rem' }}>
        <Typography variant="h2" style={{ marginBottom: '1rem' }}>
          Auto-play Carousel
        </Typography>
        <Typography variant="body" style={{ marginBottom: '1rem' }}>
          Carousel with automatic slide progression every 3 seconds.
        </Typography>
        
        <Carousel
          variant="minimal"
          autoPlay
          autoPlayDelay={3000}
          loop
          slides={textSlides}
          showArrows={false}
          style={{ 
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '12px',
            color: 'white'
          }}
        >
          {(slide) => (
            <div style={{ 
              padding: '4rem 2rem', 
              textAlign: 'center',
              minHeight: '200px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <Typography variant="h2" style={{ color: 'white', marginBottom: '1rem' }}>
                {slide.content}
              </Typography>
              <Typography variant="body" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem' }}>
                {slide.subtitle}
              </Typography>
            </div>
          )}
        </Carousel>
      </section>

      <Divider style={{ margin: '2rem 0' }} />

      {/* Different Sizes */}
      <section style={{ marginBottom: '3rem' }}>
        <Typography variant="h2" style={{ marginBottom: '1rem' }}>
          Different Sizes
        </Typography>
        
        <div style={{ display: 'grid', gap: '2rem' }}>
          {/* Small Size */}
          <div>
            <Typography variant="h3" style={{ marginBottom: '0.5rem' }}>
              Small Size
            </Typography>
            <Carousel
              size="sm"
              variant="minimal"
              slides={imageSlides.slice(0, 3)}
              showDots={false}
            >
              {(slide) => (
                <div style={{ height: '150px', position: 'relative' }}>
                  <img
                    src={slide.image}
                    alt={slide.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '4px'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: '0.5rem',
                    left: '0.5rem',
                    right: '0.5rem',
                    background: 'rgba(0,0,0,0.7)',
                    color: 'white',
                    padding: '0.5rem',
                    borderRadius: '4px',
                    fontSize: '0.875rem'
                  }}>
                    {slide.title}
                  </div>
                </div>
              )}
            </Carousel>
          </div>

          {/* Large Size */}
          <div>
            <Typography variant="h3" style={{ marginBottom: '0.5rem' }}>
              Large Size
            </Typography>
            <Carousel
              size="lg"
              slides={imageSlides.slice(0, 3)}
            >
              {(slide) => (
                <div style={{ height: '500px', position: 'relative' }}>
                  <img
                    src={slide.image}
                    alt={slide.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '12px'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                    color: 'white',
                    padding: '3rem',
                    borderRadius: '0 0 12px 12px'
                  }}>
                    <Typography variant="h2" style={{ color: 'white', marginBottom: '0.5rem' }}>
                      {slide.title}
                    </Typography>
                    <Typography variant="body" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem' }}>
                      {slide.description}
                    </Typography>
                  </div>
                </div>
              )}
            </Carousel>
          </div>
        </div>
      </section>

      <Divider style={{ margin: '2rem 0' }} />

      {/* Custom Header and Footer */}
      <section style={{ marginBottom: '3rem' }}>
        <Typography variant="h2" style={{ marginBottom: '1rem' }}>
          Custom Header and Footer
        </Typography>
        <Typography variant="body" style={{ marginBottom: '1rem' }}>
          Carousel with custom header and footer content.
        </Typography>
        
        <Carousel
          header={
            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
              <Typography variant="h3">Featured Products</Typography>
              <Typography variant="body" style={{ color: '#666' }}>
                Discover our latest collection
              </Typography>
            </div>
          }
          footer={
            <div style={{ textAlign: 'center', marginTop: '1rem' }}>
              <Button variant="secondary">View All Products</Button>
            </div>
          }
          slides={cardSlides.slice(0, 3)}
          responsive={{ mobile: 1, tablet: 2, desktop: 3 }}
        >
          {(slide) => (
            <Card style={{ height: '100%', margin: '0 0.5rem' }}>
              <div style={{ padding: '1.5rem' }}>
                <div style={{
                  width: '100%',
                  height: '120px',
                  background: 'linear-gradient(45deg, #f0f0f0, #e0e0e0)',
                  borderRadius: '8px',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem'
                }}>
                  📚
                </div>
                <Typography variant="h4" style={{ marginBottom: '0.5rem' }}>
                  {slide.title}
                </Typography>
                <Typography variant="body" style={{ marginBottom: '1rem', color: '#666' }}>
                  {slide.description}
                </Typography>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h5" style={{ color: '#007bff' }}>
                    {slide.price}
                  </Typography>
                  <Button variant="primary" size="sm">
                    Learn More
                  </Button>
                </div>
              </div>
            </Card>
          )}
        </Carousel>
      </section>

      <Divider style={{ margin: '2rem 0' }} />

      {/* Usage Examples */}
      <section>
        <Typography variant="h2" style={{ marginBottom: '1rem' }}>
          Usage Examples
        </Typography>
        
        <div style={{ display: 'grid', gap: '2rem' }}>
          <div>
            <Typography variant="h3" style={{ marginBottom: '0.5rem' }}>
              Basic Usage
            </Typography>
            <Scrollbar height="200px" style={{ border: '1px solid #dee2e6', borderRadius: '4px' }}>
              <div style={{ padding: '1rem', backgroundColor: '#f8f9fa' }}>
                <div style={{ fontFamily: 'monospace', fontSize: '0.875rem', color: '#333' }}>
                  <div>import {'{'} Carousel {'}'} from 'design-system-cria';</div>
                  <div></div>
                  <div>const slides = [</div>
                  <div>  {'{'} id: 1, content: 'Slide 1' {'}'},</div>
                  <div>  {'{'} id: 2, content: 'Slide 2' {'}'},</div>
                  <div>  {'{'} id: 3, content: 'Slide 3' {'}'}</div>
                  <div>];</div>
                  <div></div>
                  <div>const MyCarousel = () =&gt; {'{'} {'}'}</div>
                  <div>  return (</div>
                  <div>    &lt;Carousel slides={'{'}slides{'}'}&gt;</div>
                  <div>      {'{'(slide) =&gt; ('}</div>
                  <div>        &lt;div key={'{'}slide.id{'}'}&gt;</div>
                  <div>          {'{'}slide.content{'}'}</div>
                  <div>        &lt;/div&gt;</div>
                  <div>      ){'}'}</div>
                  <div>    &lt;/Carousel&gt;</div>
                  <div>  );</div>
                  <div>{'}'};</div>
                </div>
              </div>
            </Scrollbar>
          </div>

          <div>
            <Typography variant="h3" style={{ marginBottom: '0.5rem' }}>
              Advanced Configuration
            </Typography>
            <Scrollbar height="200px" style={{ border: '1px solid #dee2e6', borderRadius: '4px' }}>
              <div style={{ padding: '1rem', backgroundColor: '#f8f9fa' }}>
                <div style={{ fontFamily: 'monospace', fontSize: '0.875rem', color: '#333' }}>
                  <div>&lt;Carousel</div>
                  <div>  variant="cards"</div>
                  <div>  size="lg"</div>
                  <div>  autoPlay</div>
                  <div>  autoPlayDelay={'{'}4000{'}'}</div>
                  <div>  loop</div>
                  <div>  showArrows</div>
                  <div>  showDots</div>
                  <div>  responsive={'{'}{'}'}</div>
                  <div>    mobile: 1,</div>
                  <div>    tablet: 2,</div>
                  <div>    desktop: 3</div>
                  <div>  {'}'}</div>
                  <div>  onSlideChange={'{'(index) =&gt; console.log(index){'}'}</div>
                  <div>  onSlideClick={'{'(slide, index) =&gt; console.log(slide){'}'}</div>
                  <div>  slides={'{'}slides{'}'}</div>
                  <div>&gt;</div>
                  <div>  {'{'(slide) =&gt; &lt;SlideContent slide={'{'}slide{'}'} /&gt;{'}'}</div>
                  <div>&lt;/Carousel&gt;</div>
                </div>
              </div>
            </Scrollbar>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarouselDemo;
