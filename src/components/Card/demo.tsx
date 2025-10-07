import React, { useState } from 'react';
import { Card, CardHeader, CardContent, CardFooter } from './Card';
import { Button } from '../Button';
import { CriaTextHeadline1, CriaTextHeadline2, CriaTextBody1, CriaTextBody2, CriaTextTitle1, CriaTextTitle2 } from '../TextTokens';
import { CriaLessonCardSmall, Lesson } from '../CriaLessonCardSmall';
import { CriaLessonCard, Lesson as CriaLessonCardLesson } from '../CriaLessonCard';
import { spacing, colors } from '../../tokens';

/**
 * Card component demo
 */
export const CardDemo: React.FC = () => {
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set(['1', '3', '6']));

  // Sample lesson data for CriaLessonCardSmall with 3 different instructors
  const sampleLessons: Lesson[] = [
    {
      id: '1',
      slug: 'react-basics',
      title: 'Introduction to React',
      thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=200&fit=crop',
      duration: '15min',
      category: 'Frontend',
      instructor: {
        id: '1',
        name: 'John Doe',
        avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      },
    },
    {
      id: '2',
      slug: 'css-fundamentals',
      title: 'CSS Fundamentals and Modern Layouts',
      thumbnailUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop',
      duration: '20min',
      category: 'Frontend',
      instructor: {
        id: '2',
        name: 'Jane Smith',
        avatarUrl: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      },
    },
    {
      id: '3',
      slug: 'javascript-es6',
      title: 'JavaScript ES6+ Features',
      thumbnailUrl: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=200&fit=crop',
      duration: '25min',
      category: 'Frontend',
      instructor: {
        id: '3',
        name: 'Mike Johnson',
        avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      },
    },
    {
      id: '4',
      slug: 'git-workflow',
      title: 'Git Workflow Best Practices',
      thumbnailUrl: 'https://images.unsplash.com/photo-1584949080480-fd112f687692?w=400&h=200&fit=crop',
      duration: '30min',
      category: 'DevOps',
      instructor: {
        id: '4',
        name: 'Emma Davis',
        avatarUrl: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      },
    },
    {
      id: '5',
      slug: 'vscode-tips',
      title: 'VS Code Productivity Tips',
      thumbnailUrl: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=200&fit=crop',
      duration: '12min',
      category: 'Tools',
      instructor: {
        id: '5',
        name: 'Chris Evans',
        avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      },
    },
    {
      id: '6',
      slug: 'design-principles',
      title: 'Design Principles for Developers',
      thumbnailUrl: 'https://images.unsplash.com/photo-1504384764586-bb4be8f53b13?w=400&h=200&fit=crop',
      duration: '18min',
      category: 'Design',
      instructor: {
        id: '6',
        name: 'Olivia White',
        avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      },
    },
    {
      id: '7',
      slug: 'nodejs-backend',
      title: 'Building REST APIs with Node.js',
      thumbnailUrl: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=200&fit=crop',
      duration: '30min',
      category: 'Backend',
      instructor: {
        id: '7',
        name: 'Sarah Wilson',
        avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      },
    },
    {
      id: '8',
      slug: 'database-design',
      title: 'Database Design Principles',
      thumbnailUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
      duration: '35min',
      category: 'Database',
      instructor: {
        id: '8',
        name: 'David Brown',
        avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      },
    },
    {
      id: '9',
      slug: 'fullstack-project',
      title: 'Full-Stack Project Workshop',
      thumbnailUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop',
      duration: '60min',
      category: 'Workshop',
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
    },
  ];

  const handleLessonClick = (lesson: Lesson) => {
    console.log('Lesson clicked:', lesson.title);
    alert(`Opening lesson: ${lesson.title}`);
  };

  const handleToggleCompletion = (lesson: Lesson, completed: boolean) => {
    console.log('Toggle completion:', lesson.title, completed);
    setCompletedLessons(prev => {
      const newSet = new Set(prev);
      if (completed) {
        newSet.add(lesson.id!);
      } else {
        newSet.delete(lesson.id!);
      }
      return newSet;
    });
  };

  const handleInstructorClick = (instructor: Lesson['instructor']) => {
    if (instructor) {
      console.log('Instructor clicked:', instructor.name);
      alert(`Viewing instructor profile: ${instructor.name}`);
    }
  };

  // Sample lesson data for CriaLessonCard
  const sampleCriaLessons: CriaLessonCardLesson[] = [
    {
      id: '1',
      slug: 'react-advanced',
      title: 'Advanced React Patterns',
      description: 'Dive deep into advanced React concepts like render props, HOCs, and custom hooks for building scalable applications.',
      thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=300&fit=crop',
      duration: '45min',
      category: 'Frontend',
      progress: 75,
      completed: false,
      instructor: {
        id: '1',
        name: 'John Doe',
        avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      },
    },
    {
      id: '2',
      slug: 'state-management',
      title: 'State Management with Redux Toolkit',
      description: 'Learn modern state management using Redux Toolkit, including RTK Query for data fetching and caching.',
      thumbnailUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=300&fit=crop',
      duration: '60min',
      category: 'Frontend',
      progress: 100,
      completed: true,
      instructor: {
        id: '2',
        name: 'Jane Smith',
        avatarUrl: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      },
    },
    {
      id: '3',
      slug: 'performance-optimization',
      title: 'React Performance Optimization',
      description: 'Techniques and best practices to optimize the rendering performance of your React applications.',
      thumbnailUrl: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=600&h=300&fit=crop',
      duration: '30min',
      category: 'Performance',
      progress: 50,
      completed: false,
      instructor: {
        id: '3',
        name: 'Mike Johnson',
        avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      },
    },
  ];

  const handleCriaLessonClick = (lesson: CriaLessonCardLesson) => {
    console.log('CriaLesson clicked:', lesson.title);
    alert(`Opening lesson: ${lesson.title}`);
  };

  return (
    <div style={{ padding: spacing[6], maxWidth: '1000px' }}>
      <CriaTextHeadline1 style={{ marginBottom: spacing[8] }}>
        Lesson Cards
      </CriaTextHeadline1>


      {/* CriaLessonCardSmall Component */}
      <section style={{ marginBottom: spacing[8] }}>
        <CriaTextHeadline2 style={{ marginBottom: spacing[4] }}>
          CriaLessonCardSmall - Lesson Cards
        </CriaTextHeadline2>
        <CriaTextBody1 style={{ marginBottom: spacing[6], color: colors.gray[500] }}>
          Specialized lesson card component with completion tracking, instructor details, and interactive elements. 
          Features examples with different instructors across various categories, including stacked instructor avatars for collaborative lessons.
        </CriaTextBody1>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: spacing[4],
          marginBottom: spacing[6],
          maxWidth: '1200px'
        }}>
          {sampleLessons.slice(0, 4).map((lesson) => (
            <CriaLessonCardSmall
              key={lesson.id}
              lesson={lesson}
              completed={completedLessons.has(lesson.id!)}
              onLessonClick={handleLessonClick}
              onToggleCompletion={handleToggleCompletion}
              onInstructorClick={handleInstructorClick}
            />
          ))}
        </div>
      </section>

      {/* CriaLessonCard Component */}
      <section style={{ marginBottom: spacing[8] }}>
        <CriaTextHeadline2 style={{ marginBottom: spacing[4] }}>
          CriaLessonCard - Detailed Lesson Cards
        </CriaTextHeadline2>
        <CriaTextBody1 style={{ marginBottom: spacing[6], color: colors.gray[500] }}>
          Large, detailed lesson card component with tool icons, descriptions, and comprehensive lesson information. 
          Perfect for showcasing detailed course content with rich visual elements.
        </CriaTextBody1>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: spacing[6],
          marginBottom: spacing[6],
          maxWidth: '1200px'
        }}>
          {sampleCriaLessons.slice(0, 2).map((lesson) => (
            <CriaLessonCard
              key={lesson.id}
              lesson={lesson}
              onLessonClick={handleCriaLessonClick}
            />
          ))}
        </div>
      </section>

      {/* Variants */}
      <section style={{ marginBottom: spacing[8] }}>
        <CriaTextHeadline2 style={{ marginBottom: spacing[4] }}>
          Variantes
        </CriaTextHeadline2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: spacing[4] }}>
          <Card variant="default">
            <CardHeader>
              <CriaTextTitle1>
                Card Padrão
              </CriaTextTitle1>
            </CardHeader>
            <CardContent>
              <CriaTextBody1>
                Este é um card padrão com borda e fundo claros.
              </CriaTextBody1>
            </CardContent>
          </Card>

          <Card variant="elevated">
            <CardHeader>
              <CriaTextTitle1>
                Card Elevado
              </CriaTextTitle1>
            </CardHeader>
            <CardContent>
              <CriaTextBody1>
                Este card tem uma sombra mais pronunciada para dar destaque.
              </CriaTextBody1>
            </CardContent>
          </Card>

          <Card variant="outlined">
            <CardHeader>
              <CriaTextTitle1>Outlined Card</CriaTextTitle1>
            </CardHeader>
            <CardContent>
              <CriaTextBody1>
                This card has a prominent border and transparent background.
              </CriaTextBody1>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default CardDemo;