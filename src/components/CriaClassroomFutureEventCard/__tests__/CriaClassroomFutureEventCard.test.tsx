import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CriaClassroomFutureEventCard, ClassroomEvent, ClassroomItem } from '../CriaClassroomFutureEventCard';

// Mock future event data (2 days from now)
const futureDate = new Date();
futureDate.setDate(futureDate.getDate() + 2);
futureDate.setHours(14, 0, 0, 0);

const mockEvent: ClassroomEvent = {
  id: '1',
  name: 'React Workshop',
  description: 'Learn React fundamentals and best practices',
  startDate: futureDate.toISOString(),
  duration: '2H',
  eventLink: '/events/react-workshop',
  gcalendarUrl: 'https://calendar.google.com/event',
};

const mockClassroomItem: ClassroomItem = {
  id: '1',
  position: 1,
  customTitle: 'React Workshop - Advanced',
  customSubtitle: 'Advanced React concepts and patterns',
  imageUrl: 'https://example.com/react-workshop.jpg',
};

const mockEventWithoutImage: ClassroomEvent = {
  id: '2',
  name: 'JavaScript Fundamentals',
  description: 'Learn JavaScript from scratch',
  startDate: futureDate.toISOString(),
  duration: '3H',
  eventLink: '/events/javascript-fundamentals',
};

const mockClassroomItemWithoutImage: ClassroomItem = {
  id: '2',
  position: 2,
  customTitle: 'JavaScript Fundamentals',
  imageUrl: undefined,
};

const mockEventWithoutCalendar: ClassroomEvent = {
  id: '3',
  name: 'CSS Masterclass',
  description: 'Master CSS and modern layouts',
  startDate: futureDate.toISOString(),
  duration: '1.5H',
  eventLink: '/events/css-masterclass',
  gcalendarUrl: undefined,
};

const mockClassroomItemWithoutCalendar: ClassroomItem = {
  id: '3',
  position: 3,
  customTitle: 'CSS Masterclass',
};

// Mock timer to avoid flaky tests
jest.useFakeTimers();
jest.setSystemTime(new Date('2024-01-01T12:00:00Z'));

describe('CriaClassroomFutureEventCard', () => {
  beforeEach(() => {
    jest.clearAllTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('renders event card with all information', () => {
    render(
      <CriaClassroomFutureEventCard 
        event={mockEvent} 
        classroomItem={mockClassroomItem} 
      />
    );
    
    expect(screen.getByText('React Workshop - Advanced')).toBeInTheDocument();
    expect(screen.getByText('Advanced React concepts and patterns')).toBeInTheDocument();
    expect(screen.getByText('01')).toBeInTheDocument(); // Event position
    expect(screen.getByText('Este evento acontecerá em')).toBeInTheDocument();
    expect(screen.getByText('Ao Vivo')).toBeInTheDocument();
    expect(screen.getByText('SALVAR NA AGENDA')).toBeInTheDocument();
  });

  it('renders event card without custom title and subtitle', () => {
    const eventWithoutCustoms = {
      ...mockEvent,
      name: 'Default Event Name',
      description: 'Default event description',
    };
    
    const classroomItemWithoutCustoms = {
      ...mockClassroomItem,
      customTitle: undefined,
      customSubtitle: undefined,
    };
    
    render(
      <CriaClassroomFutureEventCard 
        event={eventWithoutCustoms} 
        classroomItem={classroomItemWithoutCustoms} 
      />
    );
    
    expect(screen.getByText('Default Event Name')).toBeInTheDocument();
    expect(screen.getByText('Default event description')).toBeInTheDocument();
  });

  it('renders event card without image', () => {
    render(
      <CriaClassroomFutureEventCard 
        event={mockEventWithoutImage} 
        classroomItem={mockClassroomItemWithoutImage} 
      />
    );
    
    expect(screen.getByText('JavaScript Fundamentals')).toBeInTheDocument();
    // Should still render the gradient background
    expect(screen.getByText('Este evento acontecerá em')).toBeInTheDocument();
  });

  it('renders event card without calendar link', () => {
    render(
      <CriaClassroomFutureEventCard 
        event={mockEventWithoutCalendar} 
        classroomItem={mockClassroomItemWithoutCalendar} 
      />
    );
    
    expect(screen.getByText('CSS Masterclass')).toBeInTheDocument();
    expect(screen.getByText('Link da agenda não disponível')).toBeInTheDocument();
  });

  it('calls onEventClick when title is clicked', () => {
    const handleEventClick = jest.fn();
    render(
      <CriaClassroomFutureEventCard 
        event={mockEvent} 
        classroomItem={mockClassroomItem}
        onEventClick={handleEventClick}
      />
    );
    
    const title = screen.getByText('React Workshop - Advanced');
    fireEvent.click(title);
    
    expect(handleEventClick).toHaveBeenCalledWith(mockEvent);
  });

  it('calls onCalendarClick when calendar button is clicked', () => {
    const handleCalendarClick = jest.fn();
    render(
      <CriaClassroomFutureEventCard 
        event={mockEvent} 
        classroomItem={mockClassroomItem}
        onCalendarClick={handleCalendarClick}
      />
    );
    
    const calendarButton = screen.getByText('SALVAR NA AGENDA');
    fireEvent.click(calendarButton);
    
    expect(handleCalendarClick).toHaveBeenCalledWith(mockEvent);
  });

  it('displays countdown timer with correct format', () => {
    render(
      <CriaClassroomFutureEventCard 
        event={mockEvent} 
        classroomItem={mockClassroomItem} 
      />
    );
    
    // Check for countdown elements
    expect(screen.getByText('dias')).toBeInTheDocument();
    expect(screen.getByText('horas')).toBeInTheDocument();
    expect(screen.getByText('min')).toBeInTheDocument();
    
    // Check that numbers are displayed (they should be formatted with leading zeros)
    const countdownNumbers = screen.getAllByText(/^\d{2}$/);
    expect(countdownNumbers.length).toBeGreaterThanOrEqual(3);
  });

  it('displays event date and time in correct format', () => {
    render(
      <CriaClassroomFutureEventCard 
        event={mockEvent} 
        classroomItem={mockClassroomItem} 
      />
    );
    
    // Check for date and time labels
    expect(screen.getByText('Data')).toBeInTheDocument();
    expect(screen.getByText('Horário')).toBeInTheDocument();
    expect(screen.getByText('Duração')).toBeInTheDocument();
    
    // Check for formatted values
    expect(screen.getByText('2H')).toBeInTheDocument();
  });

  it('displays event position correctly', () => {
    const classroomItemWithPosition = {
      ...mockClassroomItem,
      position: 5,
    };
    
    render(
      <CriaClassroomFutureEventCard 
        event={mockEvent} 
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
      <CriaClassroomFutureEventCard 
        event={mockEvent} 
        classroomItem={classroomItemWithoutPosition} 
      />
    );
    
    expect(screen.getByText('01')).toBeInTheDocument();
  });

  it('displays default duration when not provided', () => {
    const eventWithoutDuration = {
      ...mockEvent,
      duration: undefined,
    };
    
    render(
      <CriaClassroomFutureEventCard 
        event={eventWithoutDuration} 
        classroomItem={mockClassroomItem} 
      />
    );
    
    expect(screen.getByText('2H')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <CriaClassroomFutureEventCard 
        event={mockEvent} 
        classroomItem={mockClassroomItem}
        className="custom-class"
      />
    );
    
    expect(container.firstChild).toHaveClass('cria-classroom-future-event-card', 'custom-class');
  });

  it('applies custom styles', () => {
    const customStyle = { border: '2px solid blue' };
    const { container } = render(
      <CriaClassroomFutureEventCard 
        event={mockEvent} 
        classroomItem={mockClassroomItem}
        style={customStyle}
      />
    );
    
    expect(container.firstChild).toHaveStyle({ border: '2px solid blue' });
  });

  it('sets correct data attributes', () => {
    const { container } = render(
      <CriaClassroomFutureEventCard 
        event={mockEvent} 
        classroomItem={mockClassroomItem} 
      />
    );
    
    const card = container.firstChild as HTMLElement;
    expect(card).toHaveAttribute('data-event-id', '1');
    expect(card).toHaveAttribute('data-classroom-item-id', '1');
  });

  it('renders thumbnail image with correct attributes', () => {
    render(
      <CriaClassroomFutureEventCard 
        event={mockEvent} 
        classroomItem={mockClassroomItem} 
      />
    );
    
    const image = screen.getByAltText('React Workshop - Advanced');
    expect(image).toHaveAttribute('src', 'https://example.com/react-workshop.jpg');
    expect(image).toHaveStyle({ objectFit: 'cover' });
  });

  it('handles image load error gracefully', () => {
    render(
      <CriaClassroomFutureEventCard 
        event={mockEvent} 
        classroomItem={mockClassroomItem} 
      />
    );
    
    const image = screen.getByAltText('React Workshop - Advanced');
    
    // Simulate image load error
    fireEvent.error(image);
    
    // Image should be hidden but component should still render
    expect(image).toHaveStyle({ display: 'none' });
    expect(screen.getByText('React Workshop - Advanced')).toBeInTheDocument();
  });

  it('updates countdown timer over time', async () => {
    render(
      <CriaClassroomFutureEventCard 
        event={mockEvent} 
        classroomItem={mockClassroomItem} 
      />
    );
    
    // Fast-forward time by 1 minute
    jest.advanceTimersByTime(60000);
    
    // The countdown should still be displayed (exact values depend on the mock time)
    expect(screen.getByText('dias')).toBeInTheDocument();
    expect(screen.getByText('horas')).toBeInTheDocument();
    expect(screen.getByText('min')).toBeInTheDocument();
  });

  it('handles past events correctly', () => {
    const pastEvent = {
      ...mockEvent,
      startDate: new Date('2023-01-01T12:00:00Z').toISOString(),
    };
    
    render(
      <CriaClassroomFutureEventCard 
        event={pastEvent} 
        classroomItem={mockClassroomItem} 
      />
    );
    
    // Should still render the component
    expect(screen.getByText('React Workshop - Advanced')).toBeInTheDocument();
    expect(screen.getByText('Ao Vivo')).toBeInTheDocument();
  });

  it('renders live status indicator', () => {
    render(
      <CriaClassroomFutureEventCard 
        event={mockEvent} 
        classroomItem={mockClassroomItem} 
      />
    );
    
    const liveButton = screen.getByText('Ao Vivo');
    expect(liveButton).toBeInTheDocument();
    expect(liveButton).toHaveStyle({
      border: '2px solid rgb(255, 255, 255)',
      color: 'rgb(255, 255, 255)',
    });
  });

  it('renders calendar button with icon', () => {
    render(
      <CriaClassroomFutureEventCard 
        event={mockEvent} 
        classroomItem={mockClassroomItem} 
      />
    );
    
    const calendarButton = screen.getByText('SALVAR NA AGENDA');
    expect(calendarButton).toBeInTheDocument();
    
    // Should contain Calendar icon
    expect(calendarButton.closest('button')).toBeInTheDocument();
  });

  it('handles long event titles', () => {
    const eventWithLongTitle = {
      ...mockEvent,
      name: 'This is a very long event title that should be displayed properly without causing layout issues',
    };
    
    const classroomItemWithLongTitle = {
      ...mockClassroomItem,
      customTitle: 'This is a very long custom title that should be displayed properly without causing layout issues',
    };
    
    render(
      <CriaClassroomFutureEventCard 
        event={eventWithLongTitle} 
        classroomItem={classroomItemWithLongTitle} 
      />
    );
    
    expect(screen.getByText(classroomItemWithLongTitle.customTitle!)).toBeInTheDocument();
  });

  it('handles long event descriptions', () => {
    const eventWithLongDescription = {
      ...mockEvent,
      description: 'This is a very long event description that should be displayed properly without causing layout issues in the classroom future event card component',
    };
    
    render(
      <CriaClassroomFutureEventCard 
        event={eventWithLongDescription} 
        classroomItem={mockClassroomItem} 
      />
    );
    
    // Just verify the component renders without errors
    expect(screen.getByText('React Workshop - Advanced')).toBeInTheDocument();
    expect(screen.getByText('Ao Vivo')).toBeInTheDocument();
  });
});
