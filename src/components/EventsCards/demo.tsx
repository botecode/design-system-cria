import React from 'react';
import { CriaClassroomFutureEventCard, ClassroomEvent, ClassroomItem } from '../CriaClassroomFutureEventCard';
import { CriaClassroomTrilhaCard, CustomLearning, ClassroomItem as TrilhaClassroomItem } from '../CriaClassroomTrilhaCard';
import { Typography } from '../Typography';
import { CriaTextHeadline1, CriaTextTitle1, CriaTextBody1 } from '../TextTokens';
import { spacing } from '../../tokens';

export const EventsCardsDemo: React.FC = () => {
  // Sample classroom future event data for CriaClassroomFutureEventCard
  const sampleClassroomEvents: { event: ClassroomEvent; classroomItem: ClassroomItem }[] = [
    {
      event: {
        id: '1',
        name: 'React Workshop',
        description: 'Learn React fundamentals and best practices with hands-on exercises',
        startDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days from now
        duration: '2H',
        eventLink: '/events/react-workshop',
        gcalendarUrl: 'https://calendar.google.com/event',
      },
      classroomItem: {
        id: '1',
        position: 1,
        customTitle: 'React Workshop - Advanced Concepts',
        customSubtitle: 'Master React hooks, context, and performance optimization',
        imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop',
      },
    },
    {
      event: {
        id: '2',
        name: 'JavaScript Deep Dive',
        description: 'Advanced JavaScript concepts including closures, prototypes, and async programming',
        startDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days from now
        duration: '3H',
        eventLink: '/events/javascript-deep-dive',
        gcalendarUrl: 'https://calendar.google.com/event',
      },
      classroomItem: {
        id: '2',
        position: 2,
        customTitle: 'JavaScript Deep Dive - ES6+ Features',
        customSubtitle: 'Explore modern JavaScript features and advanced patterns',
        imageUrl: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=300&fit=crop',
      },
    },
    {
      event: {
        id: '3',
        name: 'UI/UX Design Session',
        description: 'Learn design principles and create beautiful user interfaces',
        startDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days from now
        duration: '2.5H',
        eventLink: '/events/ui-ux-design',
        gcalendarUrl: 'https://calendar.google.com/event',
      },
      classroomItem: {
        id: '3',
        position: 3,
        customTitle: 'UI/UX Design Fundamentals',
        customSubtitle: 'Master the principles of user interface and experience design',
        imageUrl: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop',
      },
    },
  ];

  // Sample custom learning path data for CriaClassroomTrilhaCard
  const sampleCustomLearningPaths: { customLearning: CustomLearning; classroomItem: TrilhaClassroomItem }[] = [
    {
      customLearning: {
        id: '1',
        title: 'Full-Stack Development Path',
        description: 'Complete journey from frontend to backend development',
        totalLessons: 24,
        completedLessons: 8,
        estimatedHours: 120,
        instructors: [
          {
            id: '1',
            name: 'John Doe',
            avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
          },
          {
            id: '2',
            name: 'Jane Smith',
            avatarUrl: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
          },
          {
            id: '3',
            name: 'Mike Johnson',
            avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
          },
        ],
        tools: [
          { id: '1', name: 'React', icon: '⚛️' },
          { id: '2', name: 'Node.js', icon: '🟢' },
          { id: '3', name: 'MongoDB', icon: '🍃' },
          { id: '4', name: 'TypeScript', icon: '🔷' },
        ],
      },
      classroomItem: {
        id: '1',
        position: 1,
        customTitle: 'Full-Stack Development Path',
        customSubtitle: 'Master both frontend and backend development',
        imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
      },
    },
    {
      customLearning: {
        id: '2',
        title: 'Data Science & Analytics',
        description: 'Learn data analysis, visualization, and machine learning',
        totalLessons: 18,
        completedLessons: 12,
        estimatedHours: 90,
        instructors: [
          {
            id: '4',
            name: 'Sarah Wilson',
            avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
          },
          {
            id: '5',
            name: 'David Brown',
            avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
          },
        ],
        tools: [
          { id: '5', name: 'Python', icon: '🐍' },
          { id: '6', name: 'Pandas', icon: '📊' },
          { id: '7', name: 'Matplotlib', icon: '📈' },
          { id: '8', name: 'Jupyter', icon: '📓' },
        ],
      },
      classroomItem: {
        id: '2',
        position: 2,
        customTitle: 'Data Science & Analytics',
        customSubtitle: 'Transform data into actionable insights',
        imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      },
    },
    {
      customLearning: {
        id: '3',
        title: 'DevOps & Cloud Computing',
        description: 'Master deployment, monitoring, and cloud infrastructure',
        totalLessons: 15,
        completedLessons: 5,
        estimatedHours: 75,
        instructors: [
          {
            id: '6',
            name: 'Emma Davis',
            avatarUrl: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
          },
          {
            id: '7',
            name: 'Chris Evans',
            avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
          },
          {
            id: '8',
            name: 'Olivia White',
            avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
          },
        ],
        tools: [
          { id: '9', name: 'Docker', icon: '🐳' },
          { id: '10', name: 'Kubernetes', icon: '☸️' },
          { id: '11', name: 'AWS', icon: '☁️' },
          { id: '12', name: 'Terraform', icon: '🏗️' },
        ],
      },
      classroomItem: {
        id: '3',
        position: 3,
        customTitle: 'DevOps & Cloud Computing',
        customSubtitle: 'Deploy and scale applications in the cloud',
        imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
      },
    },
  ];

  const handleClassroomEventClick = (event: ClassroomEvent) => {
    console.log('Classroom event clicked:', event.name);
    alert(`Opening event: ${event.name}`);
  };

  const handleClassroomCalendarClick = (event: ClassroomEvent) => {
    console.log('Calendar clicked for event:', event.name);
    alert(`Adding to calendar: ${event.name}`);
  };

  const handleCustomLearningClick = (customLearning: CustomLearning) => {
    console.log('Custom learning path clicked:', customLearning.title);
    alert(`Opening learning path: ${customLearning.title}`);
  };

  const handleCustomLearningInstructorClick = (instructorId: string, instructorName: string) => {
    console.log(`Custom learning instructor clicked: ${instructorName} (ID: ${instructorId})`);
    alert(`Viewing instructor: ${instructorName}`);
  };

  const handleCustomLearningToolClick = (toolId: string, toolName: string) => {
    console.log(`Custom learning tool clicked: ${toolName} (ID: ${toolId})`);
    alert(`Learn more about: ${toolName}`);
  };

  return (
    <div style={{ padding: spacing.lg }}>
      <div style={{ marginBottom: spacing[6] }}>
        <CriaTextHeadline1>
          Events Cards Demo
        </CriaTextHeadline1>
      </div>

      {/* CriaClassroomFutureEventCard Component */}
      <section style={{ marginBottom: spacing[8] }}>
        <div style={{ marginBottom: spacing[4] }}>
          <CriaTextTitle1>
            CriaClassroomFutureEventCard - Event Cards with Countdown
          </CriaTextTitle1>
        </div>
        <div style={{ marginBottom: spacing[6], color: spacing[6] }}>
          <CriaTextBody1>
            Interactive event cards with live countdown timers, beautiful gradient backgrounds, and calendar integration. 
            Perfect for showcasing upcoming classroom events with real-time countdown functionality.
          </CriaTextBody1>
        </div>
        
        <div style={{ 
          display: 'flex',
          flexDirection: 'column',
          gap: spacing[6],
          marginBottom: spacing[6],
          maxWidth: '1200px'
        }}>
          {sampleClassroomEvents.map(({ event, classroomItem }) => (
            <CriaClassroomFutureEventCard
              key={event.id}
              event={event}
              classroomItem={classroomItem}
              onEventClick={handleClassroomEventClick}
              onCalendarClick={handleClassroomCalendarClick}
            />
          ))}
        </div>
      </section>

      {/* CriaClassroomTrilhaCard Component */}
      <section style={{ marginBottom: spacing[8] }}>
        <div style={{ marginBottom: spacing[4] }}>
          <CriaTextTitle1>
            CriaClassroomTrilhaCard - Learning Path Cards
          </CriaTextTitle1>
        </div>
        <div style={{ marginBottom: spacing[6], color: spacing[6] }}>
          <CriaTextBody1>
            Comprehensive learning path cards with progress tracking, instructor information, and tool badges. 
            Perfect for showcasing structured learning journeys with detailed progress and metadata.
          </CriaTextBody1>
        </div>
        
        <div style={{ 
          display: 'flex',
          flexDirection: 'column',
          gap: spacing[6],
          marginBottom: spacing[6],
          maxWidth: '1200px'
        }}>
          {sampleCustomLearningPaths.map(({ customLearning, classroomItem }) => (
            <CriaClassroomTrilhaCard
              key={customLearning.id}
              customLearning={customLearning}
              classroomItem={classroomItem}
              onClick={handleCustomLearningClick}
              onInstructorClick={handleCustomLearningInstructorClick}
              onToolClick={handleCustomLearningToolClick}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default EventsCardsDemo;
