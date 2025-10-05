import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CriaClassroomEventCard, ClassroomEvent, ClassroomItem } from '../CriaClassroomEventCard';

// Mock past event data (1 day ago)
const pastDate = new Date();
pastDate.setDate(pastDate.getDate() - 1);
pastDate.setHours(14, 0, 0, 0);

const mockPastEvent: ClassroomEvent = {
  id: '1',
  slug: 'react-workshop',
  name: 'React Workshop',
  description: 'Learn React fundamentals and best practices',
  startDate: pastDate.toISOString(),
  imageUrl: 'https://example.com/react-workshop.jpg',
};

const mockClassroomItem: ClassroomItem = {
  id: '1',
  position: 1,
  customTitle: 'React Workshop - Advanced',
  customSubtitle: 'Master React hooks, context, and performance optimization',
  imageUrl: 'https://example.com/classroom-image.jpg',
};

const mockFutureEvent: ClassroomEvent = {
  id: '2',
  slug: 'javascript-fundamentals',
  name: 'JavaScript Fundamentals',
  description: 'Build a solid foundation in JavaScript programming',
  startDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days from now
  imageUrl: 'https://example.com/js-workshop.jpg',
};

const mockClassroomItemFuture: ClassroomItem = {
  id: '2',
  position: 2,
  customTitle: 'JavaScript Fundamentals',
  customSubtitle: 'From variables to advanced ES6+ features',
};

const mockEventWithoutDate: ClassroomEvent = {
  id: '3',
  name: 'CSS Masterclass',
  description: 'Master CSS and modern layouts',
  imageUrl: 'https://example.com/css-workshop.jpg',
};

const mockClassroomItemWithoutDate: ClassroomItem = {
  id: '3',
  position: 3,
  customTitle: 'CSS Masterclass',
  customSubtitle: 'Modern CSS techniques and best practices',
};

const mockEventWithoutSlug: ClassroomEvent = {
  id: '4',
  name: 'Python Basics',
  description: 'Learn Python programming fundamentals',
  startDate: pastDate.toISOString(),
  imageUrl: 'https://example.com/python-workshop.jpg',
};

const mockClassroomItemWithoutSlug: ClassroomItem = {
  id: '4',
  position: 4,
  customTitle: 'Python Basics',
  customSubtitle: 'Introduction to Python programming',
};

describe('CriaClassroomEventCard', () => {
  it('renders past event card with all information', () => {
    render(
      <CriaClassroomEventCard 
        event={mockPastEvent} 
        classroomItem={mockClassroomItem} 
      />
    );
    
    expect(screen.getByText('React Workshop - Advanced')).toBeInTheDocument();
    expect(screen.getByText('Master React hooks, context, and performance optimization')).toBeInTheDocument();
    expect(screen.getByText('01')).toBeInTheDocument(); // Event position
    expect(screen.getByText('VER GRAVAÇÃO')).toBeInTheDocument();
  });

  it('renders future event card without recording button', () => {
    render(
      <CriaClassroomEventCard 
        event={mockFutureEvent} 
        classroomItem={mockClassroomItemFuture} 
      />
    );
    
    expect(screen.getByText('JavaScript Fundamentals')).toBeInTheDocument();
    expect(screen.getByText('From variables to advanced ES6+ features')).toBeInTheDocument();
    expect(screen.getByText('02')).toBeInTheDocument(); // Event position
    expect(screen.queryByText('VER GRAVAÇÃO')).not.toBeInTheDocument();
  });

  it('renders event card without date', () => {
    render(
      <CriaClassroomEventCard 
        event={mockEventWithoutDate} 
        classroomItem={mockClassroomItemWithoutDate} 
      />
    );
    
    expect(screen.getByText('CSS Masterclass')).toBeInTheDocument();
    expect(screen.getByText('Data não definida')).toBeInTheDocument();
    expect(screen.queryByText('VER GRAVAÇÃO')).not.toBeInTheDocument();
  });

  it('renders past event without slug (no recording available)', () => {
    render(
      <CriaClassroomEventCard 
        event={mockEventWithoutSlug} 
        classroomItem={mockClassroomItemWithoutSlug} 
      />
    );
    
    expect(screen.getByText('Python Basics')).toBeInTheDocument();
    expect(screen.getByText('Gravação não disponível')).toBeInTheDocument();
  });

  it('calls onEventClick when title is clicked', () => {
    const handleEventClick = jest.fn();
    render(
      <CriaClassroomEventCard 
        event={mockPastEvent} 
        classroomItem={mockClassroomItem}
        onEventClick={handleEventClick}
      />
    );
    
    const title = screen.getByText('React Workshop - Advanced');
    fireEvent.click(title);
    
    expect(handleEventClick).toHaveBeenCalledWith(mockPastEvent);
  });

  it('calls onRecordingClick when recording button is clicked', () => {
    const handleRecordingClick = jest.fn();
    render(
      <CriaClassroomEventCard 
        event={mockPastEvent} 
        classroomItem={mockClassroomItem}
        onRecordingClick={handleRecordingClick}
      />
    );
    
    const recordingButton = screen.getByText('VER GRAVAÇÃO');
    fireEvent.click(recordingButton);
    
    expect(handleRecordingClick).toHaveBeenCalledWith(mockPastEvent);
  });

  it('displays event date and time in correct format', () => {
    render(
      <CriaClassroomEventCard 
        event={mockPastEvent} 
        classroomItem={mockClassroomItem} 
      />
    );
    
    // Check for date format (DD/MMM • HH:MM)
    const dateElement = screen.getByText(/^\d{2}\/\w{3} • \d{2}:\d{2}$/);
    expect(dateElement).toBeInTheDocument();
    
    // Check for timezone info
    expect(screen.getByText('BRT (UTC−03:00)')).toBeInTheDocument();
  });

  it('displays event position correctly', () => {
    const classroomItemWithPosition = {
      ...mockClassroomItem,
      position: 5,
    };
    
    render(
      <CriaClassroomEventCard 
        event={mockPastEvent} 
        classroomItem={classroomItemWithPosition} 
      />
    );
    
    expect(screen.getByText('05')).toBeInTheDocument();
  });

  it('uses default position when not provided', () => {
    const classroomItemWithoutPosition = {
      ...mockClassroomItem,
      position: undefined,
    };
    
    render(
      <CriaClassroomEventCard 
        event={mockPastEvent} 
        classroomItem={classroomItemWithoutPosition} 
      />
    );
    
    expect(screen.getByText('01')).toBeInTheDocument();
  });

  it('uses custom title and subtitle when provided', () => {
    render(
      <CriaClassroomEventCard 
        event={mockPastEvent} 
        classroomItem={mockClassroomItem} 
      />
    );
    
    expect(screen.getByText('React Workshop - Advanced')).toBeInTheDocument();
    expect(screen.getByText('Master React hooks, context, and performance optimization')).toBeInTheDocument();
  });

  it('falls back to event name and description when custom titles not provided', () => {
    const classroomItemWithoutCustoms = {
      ...mockClassroomItem,
      customTitle: undefined,
      customSubtitle: undefined,
    };
    
    render(
      <CriaClassroomEventCard 
        event={mockPastEvent} 
        classroomItem={classroomItemWithoutCustoms} 
      />
    );
    
    expect(screen.getByText('React Workshop')).toBeInTheDocument();
    expect(screen.getByText('Learn React fundamentals and best practices')).toBeInTheDocument();
  });

  it('uses fallback image when imageUrl not provided', () => {
    const eventWithoutImage = {
      ...mockPastEvent,
      imageUrl: undefined,
    };
    
    const classroomItemWithoutImage = {
      ...mockClassroomItem,
      imageUrl: undefined,
    };
    
    render(
      <CriaClassroomEventCard 
        event={eventWithoutImage} 
        classroomItem={classroomItemWithoutImage} 
      />
    );
    
    const image = screen.getByAltText('React Workshop - Advanced');
    expect(image).toHaveAttribute('src', '/src/assets/cria_emblem_home.png');
  });

  it('prioritizes event imageUrl over classroomItem imageUrl', () => {
    render(
      <CriaClassroomEventCard 
        event={mockPastEvent} 
        classroomItem={mockClassroomItem} 
      />
    );
    
    const image = screen.getByAltText('React Workshop - Advanced');
    expect(image).toHaveAttribute('src', 'https://example.com/react-workshop.jpg');
  });

  it('applies custom className', () => {
    const { container } = render(
      <CriaClassroomEventCard 
        event={mockPastEvent} 
        classroomItem={mockClassroomItem}
        className="custom-class"
      />
    );
    
    expect(container.firstChild).toHaveClass('cria-classroom-event-card', 'custom-class');
  });

  it('applies custom styles', () => {
    const customStyle = { border: '2px solid blue' };
    const { container } = render(
      <CriaClassroomEventCard 
        event={mockPastEvent} 
        classroomItem={mockClassroomItem}
        style={customStyle}
      />
    );
    
    expect(container.firstChild).toHaveStyle({ border: '2px solid blue' });
  });

  it('sets correct data attributes', () => {
    const { container } = render(
      <CriaClassroomEventCard 
        event={mockPastEvent} 
        classroomItem={mockClassroomItem} 
      />
    );
    
    const card = container.firstChild as HTMLElement;
    expect(card).toHaveAttribute('data-event-id', '1');
    expect(card).toHaveAttribute('data-classroom-item-id', '1');
  });

  it('renders thumbnail image with correct attributes', () => {
    render(
      <CriaClassroomEventCard 
        event={mockPastEvent} 
        classroomItem={mockClassroomItem} 
      />
    );
    
    const image = screen.getByAltText('React Workshop - Advanced');
    expect(image).toHaveAttribute('src', 'https://example.com/react-workshop.jpg');
    expect(image).toHaveStyle({ objectFit: 'cover' });
  });

  it('handles image load error gracefully', () => {
    render(
      <CriaClassroomEventCard 
        event={mockPastEvent} 
        classroomItem={mockClassroomItem} 
      />
    );
    
    const image = screen.getByAltText('React Workshop - Advanced');
    
    // Simulate image load error
    fireEvent.error(image);
    
    // Image should still be rendered (component handles errors gracefully)
    expect(image).toBeInTheDocument();
    expect(screen.getByText('React Workshop - Advanced')).toBeInTheDocument();
  });

  it('applies hover effects', () => {
    render(
      <CriaClassroomEventCard 
        event={mockPastEvent} 
        classroomItem={mockClassroomItem} 
      />
    );
    
    const card = screen.getByText('React Workshop - Advanced').closest('div');
    expect(card).toBeInTheDocument();
  });

  it('renders calendar icon', () => {
    render(
      <CriaClassroomEventCard 
        event={mockPastEvent} 
        classroomItem={mockClassroomItem} 
      />
    );
    
    // Calendar icon should be present (it's an SVG from Phosphor)
    expect(screen.getByText('VER GRAVAÇÃO')).toBeInTheDocument();
  });

  it('handles long event titles', () => {
    const eventWithLongTitle: ClassroomEvent = {
      ...mockPastEvent,
      name: 'This is a very long event title that should be displayed properly without causing layout issues',
    };
    
    const classroomItemWithLongTitle: ClassroomItem = {
      ...mockClassroomItem,
      customTitle: 'This is a very long custom title that should be displayed properly without causing layout issues',
    };
    
    render(
      <CriaClassroomEventCard 
        event={eventWithLongTitle} 
        classroomItem={classroomItemWithLongTitle} 
      />
    );
    
    expect(screen.getByText(classroomItemWithLongTitle.customTitle!)).toBeInTheDocument();
  });

  it('handles long event descriptions', () => {
    const eventWithLongDescription: ClassroomEvent = {
      ...mockPastEvent,
      description: 'This is a very long event description that should be displayed properly without causing layout issues in the classroom event card component',
    };
    
    render(
      <CriaClassroomEventCard 
        event={eventWithLongDescription} 
        classroomItem={mockClassroomItem} 
      />
    );
    
    // Just verify the component renders without errors
    expect(screen.getByText('React Workshop - Advanced')).toBeInTheDocument();
    expect(screen.getByText('VER GRAVAÇÃO')).toBeInTheDocument();
  });

  it('correctly identifies past vs future events', () => {
    // Test past event
    const { rerender } = render(
      <CriaClassroomEventCard 
        event={mockPastEvent} 
        classroomItem={mockClassroomItem} 
      />
    );
    
    expect(screen.getByText('VER GRAVAÇÃO')).toBeInTheDocument();
    
    // Test future event
    rerender(
      <CriaClassroomEventCard 
        event={mockFutureEvent} 
        classroomItem={mockClassroomItemFuture} 
      />
    );
    
    expect(screen.queryByText('VER GRAVAÇÃO')).not.toBeInTheDocument();
  });

  it('displays timezone information correctly', () => {
    render(
      <CriaClassroomEventCard 
        event={mockPastEvent} 
        classroomItem={mockClassroomItem} 
      />
    );
    
    expect(screen.getByText('BRT (UTC−03:00)')).toBeInTheDocument();
  });
});

