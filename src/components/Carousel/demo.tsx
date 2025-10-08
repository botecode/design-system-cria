import React, { useState } from 'react';
import { Carousel } from './Carousel';
import { CriaTextHeadline1, CriaTextHeadline2, CriaTextTitle1, CriaTextTitle2, CriaTextBody1, CriaTextBody2 } from '../TextTokens';
import { Button } from '../Button';
import { Divider } from '../Divider';
import { Card } from '../Card';
import { Scrollbar } from '../Scrollbar';
import { colors, spacing } from '../../tokens';

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
      <div style={{ marginBottom: '2rem' }}>
        <CriaTextHeadline1>
          Carousel Component
        </CriaTextHeadline1>
      </div>

      <div style={{ marginBottom: '2rem', color: '#666' }}>
        <CriaTextBody1>
          A versatile carousel component built with Embla Carousel, supporting multiple variants,
          auto-play, navigation controls, and responsive design.
        </CriaTextBody1>
      </div>

      {/* Basic Image Carousel */}
      <section style={{ marginBottom: '3rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <CriaTextHeadline2>
            Basic Image Carousel
          </CriaTextHeadline2>
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <CriaTextBody1>
            Simple image carousel with navigation arrows and dots.
          </CriaTextBody1>
        </div>
        
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
                <div style={{ color: 'white', marginBottom: '0.5rem' }}>
                  <CriaTextTitle1>
                    {slide.title}
                  </CriaTextTitle1>
                </div>
                <div style={{ color: 'rgba(255,255,255,0.9)' }}>
                  <CriaTextBody1>
                    {slide.description}
                  </CriaTextBody1>
                </div>
              </div>
            </div>
          )}
        </Carousel>
        
        <div style={{ color: '#666' }}>
          <CriaTextBody2>
            Current slide: {currentSlide + 1} of {imageSlides.length}
          </CriaTextBody2>
        </div>
      </section>

      <Divider style={{ margin: '2rem 0' }} />

      {/* Cards Carousel */}
      <section style={{ marginBottom: '3rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <CriaTextHeadline2>
            Cards Carousel
          </CriaTextHeadline2>
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <CriaTextBody1>
            Carousel with card-based content and custom styling.
          </CriaTextBody1>
        </div>
        
        <Carousel
          variant="cards"
          slides={cardSlides}
          responsive={{ mobile: 1, tablet: 2, desktop: 3 }}
          style={{ marginBottom: '1rem' }}
        >
          {(slide) => (
            <Card style={{ height: '100%', margin: '0 0.5rem' }}>
              <div style={{ padding: '1.5rem' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <CriaTextTitle1>
                    {slide.title}
                  </CriaTextTitle1>
                </div>
                <div style={{ marginBottom: '1rem', color: '#666' }}>
                  <CriaTextBody1>
                    {slide.description}
                  </CriaTextBody1>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{ color: '#888' }}>
                    <CriaTextBody2>
                      by {slide.author}
                    </CriaTextBody2>
                  </div>
                  <div style={{ color: '#888' }}>
                    <CriaTextBody2>
                      ⭐ {slide.rating}
                    </CriaTextBody2>
                  </div>
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
        <div style={{ marginBottom: '1rem' }}>
          <CriaTextHeadline2>
            Auto-play Carousel
          </CriaTextHeadline2>
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <CriaTextBody1>
            Carousel with automatic slide progression every 3 seconds.
          </CriaTextBody1>
        </div>
        
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
              <div style={{ color: 'white', marginBottom: '1rem' }}>
                <CriaTextHeadline2>
                  {slide.content}
                </CriaTextHeadline2>
              </div>
              <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem' }}>
                <CriaTextBody1>
                  {slide.subtitle}
                </CriaTextBody1>
              </div>
            </div>
          )}
        </Carousel>
      </section>

      <Divider style={{ margin: '2rem 0' }} />

      {/* Different Sizes */}
      <section style={{ marginBottom: '3rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <CriaTextHeadline2>
            Different Sizes
          </CriaTextHeadline2>
        </div>
        
        <div style={{ display: 'grid', gap: '2rem' }}>
          {/* Small Size */}
          <div>
            <div style={{ marginBottom: '0.5rem' }}>
              <CriaTextTitle1>
                Small Size
              </CriaTextTitle1>
            </div>
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
            <div style={{ marginBottom: '0.5rem' }}>
              <CriaTextTitle1>
                Large Size
              </CriaTextTitle1>
            </div>
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
                    <div style={{ color: 'white', marginBottom: '0.5rem' }}>
                      <CriaTextHeadline2>
                        {slide.title}
                      </CriaTextHeadline2>
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem' }}>
                      <CriaTextBody1>
                        {slide.description}
                      </CriaTextBody1>
                    </div>
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
        <div style={{ marginBottom: '1rem' }}>
          <CriaTextHeadline2>
            Custom Header and Footer
          </CriaTextHeadline2>
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <CriaTextBody1>
            Carousel with custom header and footer content.
          </CriaTextBody1>
        </div>
        
        <Carousel
          header={
            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
              <CriaTextTitle1>Featured Products</CriaTextTitle1>
              <div style={{ color: '#666' }}>
                <CriaTextBody1>
                  Discover our latest collection
                </CriaTextBody1>
              </div>
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
                <div style={{ marginBottom: '0.5rem' }}>
                  <CriaTextTitle1>
                    {slide.title}
                  </CriaTextTitle1>
                </div>
                <div style={{ marginBottom: '1rem', color: '#666' }}>
                  <CriaTextBody1>
                    {slide.description}
                  </CriaTextBody1>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ color: '#007bff' }}>
                    <CriaTextTitle2>
                      {slide.price}
                    </CriaTextTitle2>
                  </div>
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
        <div style={{ marginBottom: '1rem' }}>
          <CriaTextHeadline2>
            Usage Examples
          </CriaTextHeadline2>
        </div>
        
        <div style={{ display: 'grid', gap: '2rem' }}>
          <div>
            <div style={{ marginBottom: '0.5rem' }}>
              <CriaTextTitle1>
                Basic Usage
              </CriaTextTitle1>
            </div>
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
                  <div>      {`(slide) => (`}</div>
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
            <div style={{ marginBottom: '0.5rem' }}>
              <CriaTextTitle1>
                Advanced Configuration
              </CriaTextTitle1>
            </div>
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
                  <div>  onSlideChange={`(index) => console.log(index)`}</div>
                  <div>  onSlideClick={`(slide, index) => console.log(slide)`}</div>
                  <div>  slides={'{'}slides{'}'}</div>
                  <div>&gt;</div>
                  <div>  {`(slide) => <SlideContent slide={slide} />`}</div>
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
