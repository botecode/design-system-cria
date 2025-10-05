import React, { useState } from 'react';
import { Card, CardHeader, CardContent, CardFooter } from './Card';
import { Button } from '../Button';
import Typography from '../Typography/Typography';
import { CriaLessonCardSmall, Lesson } from '../CriaLessonCardSmall';
import { CriaLessonCard, Lesson as CriaLessonCardLesson } from '../CriaLessonCard';
import { CriaCourseCard, Course, Instructor, Tool } from '../CriaCourseCard';
import { CriaClassroomFutureEventCard, ClassroomEvent, ClassroomItem } from '../CriaClassroomFutureEventCard';

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
      category: 'JavaScript',
      instructor: {
        id: '3',
        name: 'Mike Johnson',
        avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      },
    },
    {
      id: '6',
      slug: 'nodejs-backend',
      title: 'Building REST APIs with Node.js',
      thumbnailUrl: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=200&fit=crop',
      duration: '30min',
      category: 'Backend',
      instructor: {
        id: '4',
        name: 'Sarah Wilson',
        avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      },
    },
    {
      id: '7',
      slug: 'database-design',
      title: 'Database Design Principles',
      thumbnailUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
      duration: '35min',
      category: 'Database',
      instructor: {
        id: '5',
        name: 'David Brown',
        avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      },
    },
    {
      id: '8',
      slug: 'docker-containers',
      title: 'Docker and Containerization',
      thumbnailUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=200&fit=crop',
      duration: '40min',
      category: 'DevOps',
      instructor: {
        id: '6',
        name: 'Lisa Garcia',
        avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
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
      slug: 'react-fundamentals',
      title: 'React Fundamentals',
      description: 'Master the core concepts of React including components, state, and props',
      thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=200&fit=crop',
      duration: '45min',
      category: 'Frontend',
      toolIconText: 'AI',
      instructor: {
        id: '1',
        name: 'John Doe',
        avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      },
    },
    {
      id: '2',
      slug: 'advanced-css',
      title: 'Advanced CSS Techniques',
      description: 'Learn modern CSS features including Grid, Flexbox, and animations',
      thumbnailUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop',
      duration: '60min',
      category: 'Frontend',
      toolIconText: 'CSS',
      instructor: {
        id: '2',
        name: 'Jane Smith',
        avatarUrl: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      },
    },
    {
      id: '3',
      slug: 'nodejs-backend',
      title: 'Node.js Backend Development',
      description: 'Build robust backend applications with Node.js and Express',
      thumbnailUrl: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=200&fit=crop',
      duration: '90min',
      category: 'Backend',
      toolIconText: 'JS',
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

  // Sample course data for CriaCourseCard
  const sampleCourses: Course[] = [
    {
      id: '1',
      slug: 'react-complete-course',
      title: 'React Complete Course',
      description: 'Master React from basics to advanced concepts including hooks, context, and performance optimization.',
      thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop',
      duration: '8 hours',
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
      ],
      tools: [
        {
          id: '1',
          name: 'React',
          icon: '⚛️',
        },
        {
          id: '2',
          name: 'TypeScript',
          icon: '🔷',
        },
        {
          id: '3',
          name: 'Vite',
          icon: '⚡',
        },
      ],
    },
    {
      id: '2',
      slug: 'fullstack-javascript',
      title: 'Full-Stack JavaScript Development',
      description: 'Learn to build complete web applications with JavaScript, Node.js, and modern frameworks.',
      thumbnailUrl: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=300&fit=crop',
      duration: '12 hours',
      instructors: [
        {
          id: '3',
          name: 'Mike Johnson',
          avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
        },
      ],
      tools: [
        {
          id: '4',
          name: 'Node.js',
          icon: '🟢',
        },
        {
          id: '5',
          name: 'Express',
          icon: '🚀',
        },
        {
          id: '6',
          name: 'MongoDB',
          icon: '🍃',
        },
        {
          id: '7',
          name: 'Jest',
          icon: '🧪',
        },
      ],
    },
    {
      id: '3',
      slug: 'ui-ux-design',
      title: 'UI/UX Design Fundamentals',
      description: 'Master the principles of user interface and user experience design for modern applications.',
      thumbnailUrl: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop',
      duration: '6 hours',
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
        {
          id: '8',
          name: 'Figma',
          icon: '🎨',
        },
        {
          id: '9',
          name: 'Adobe XD',
          icon: '📐',
        },
        {
          id: '10',
          name: 'Sketch',
          icon: '✏️',
        },
      ],
    },
  ];

  const handleCriaCourseClick = (course: Course) => {
    console.log('CriaCourse clicked:', course.title);
    alert(`Opening course: ${course.title}`);
  };

  const handleCriaInstructorClick = (instructor: Instructor) => {
    console.log('Instructor clicked:', instructor.name);
    alert(`Viewing instructor profile: ${instructor.name}`);
  };

  const handleCriaToolClick = (tool: Tool) => {
    console.log('Tool clicked:', tool.name);
    alert(`Learning about: ${tool.name}`);
  };

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
        name: 'JavaScript Fundamentals',
        description: 'Build a solid foundation in JavaScript programming',
        startDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days from now
        duration: '3H',
        eventLink: '/events/javascript-fundamentals',
        gcalendarUrl: 'https://calendar.google.com/event',
      },
      classroomItem: {
        id: '2',
        position: 2,
        customTitle: 'JavaScript Fundamentals - Complete Course',
        customSubtitle: 'From variables to advanced ES6+ features and async programming',
        imageUrl: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=300&fit=crop',
      },
    },
    {
      event: {
        id: '3',
        name: 'UI/UX Design Workshop',
        description: 'Learn design principles and create beautiful user interfaces',
        startDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days from now
        duration: '2.5H',
        eventLink: '/events/ui-ux-workshop',
        // No calendar URL for this event
      },
      classroomItem: {
        id: '3',
        position: 3,
        customTitle: 'UI/UX Design Workshop - Modern Principles',
        customSubtitle: 'Master design thinking, user research, and prototyping techniques',
        imageUrl: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop',
      },
    },
  ];

  const handleClassroomEventClick = (event: ClassroomEvent) => {
    console.log('Classroom event clicked:', event.name);
    alert(`Opening event: ${event.name}`);
  };

  const handleClassroomCalendarClick = (event: ClassroomEvent) => {
    console.log('Classroom calendar clicked:', event.name);
    alert(`Adding to calendar: ${event.name}`);
  };

  return (
    <div style={{ padding: '24px', maxWidth: '1000px' }}>
      <Typography variant="title1" weight="bold" style={{ marginBottom: '32px' }}>
        Demo de Cards
      </Typography>

      {/* CriaLessonCardSmall Component */}
      <section style={{ marginBottom: '32px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          CriaLessonCardSmall - Lesson Cards
        </Typography>
        <Typography variant="body" style={{ marginBottom: '24px', color: '#6b7280' }}>
          Specialized lesson card component with completion tracking, instructor details, and interactive elements. 
          Features examples with 6 different instructors across various categories, including stacked instructor avatars for collaborative lessons.
        </Typography>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: '16px',
          marginBottom: '24px',
          maxWidth: '1200px'
        }}>
          {sampleLessons.map((lesson) => (
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

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
          gap: '16px' 
        }}>
          {/* Lesson with tool icon */}
          <CriaLessonCardSmall
            lesson={{
              id: '5',
              slug: 'vscode-tips',
              title: 'VS Code Productivity Tips',
              thumbnailUrl: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=200&fit=crop',
              duration: '12min',
              category: 'Tools',
              instructor: {
                id: '4',
                name: 'Emma Davis',
                avatarUrl: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
              },
            }}
            toolIconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
            completed={false}
            onLessonClick={handleLessonClick}
            onToggleCompletion={handleToggleCompletion}
            onInstructorClick={handleInstructorClick}
          />
        </div>
      </section>

      {/* CriaLessonCard Component */}
      <section style={{ marginBottom: '32px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          CriaLessonCard - Detailed Lesson Cards
        </Typography>
        <Typography variant="body" style={{ marginBottom: '24px', color: '#6b7280' }}>
          Large, detailed lesson card component with tool icons, descriptions, and comprehensive lesson information. 
          Perfect for showcasing detailed course content with rich visual elements.
        </Typography>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '24px',
          marginBottom: '24px',
          maxWidth: '1200px'
        }}>
          {sampleCriaLessons.map((lesson) => (
            <CriaLessonCard
              key={lesson.id}
              lesson={lesson}
              onLessonClick={handleCriaLessonClick}
            />
          ))}
        </div>
      </section>

      {/* CriaCourseCard Component */}
      <section style={{ marginBottom: '32px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          CriaCourseCard - Horizontal Course Cards
        </Typography>
        <Typography variant="body" style={{ marginBottom: '24px', color: '#6b7280' }}>
          Large, horizontal course card component with comprehensive course information, instructor details, and tool badges. 
          Perfect for showcasing detailed course content with rich metadata and interactive elements.
        </Typography>
        
        <div style={{ 
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          marginBottom: '24px',
          maxWidth: '1200px'
        }}>
          {sampleCourses.map((course) => (
            <CriaCourseCard
              key={course.id}
              course={course}
              onCourseClick={handleCriaCourseClick}
              onInstructorClick={handleCriaInstructorClick}
              onToolClick={handleCriaToolClick}
            />
          ))}
        </div>
      </section>

      {/* CriaClassroomFutureEventCard Component */}
      <section style={{ marginBottom: '32px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          CriaClassroomFutureEventCard - Event Cards with Countdown
        </Typography>
        <Typography variant="body" style={{ marginBottom: '24px', color: '#6b7280' }}>
          Interactive event cards with live countdown timers, beautiful gradient backgrounds, and calendar integration. 
          Perfect for showcasing upcoming classroom events with real-time countdown functionality.
        </Typography>
        
        <div style={{ 
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          marginBottom: '24px',
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

      {/* Variants */}
      <section style={{ marginBottom: '32px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Variantes
        </Typography>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
          <Card variant="default">
            <CardHeader>
              <Typography variant="h3" weight="medium">
                Card Padrão
              </Typography>
            </CardHeader>
            <CardContent>
              <Typography variant="body">
                Este é um card padrão com borda e fundo claros.
              </Typography>
            </CardContent>
          </Card>

          <Card variant="elevated">
            <CardHeader>
              <Typography variant="h3" weight="medium">
                Card Elevado
              </Typography>
            </CardHeader>
            <CardContent>
              <Typography variant="body">
                Este card tem uma sombra para profundidade e hierarquia visual.
              </Typography>
            </CardContent>
          </Card>

          <Card variant="outlined" style={{ borderColor: '#28DDB9' }}>
            <CardHeader>
              <Typography variant="h3" weight="medium">
                Card com Contorno
              </Typography>
            </CardHeader>
            <CardContent>
              <Typography variant="body">
                Este card tem uma borda proeminente e fundo transparente.
              </Typography>
            </CardContent>
          </Card>

          <Card variant="filled">
            <CardHeader>
              <Typography variant="h3" weight="medium">
                Card Preenchido
              </Typography>
            </CardHeader>
            <CardContent>
              <Typography variant="body">
                Este card tem um preenchimento sutil de cor de fundo.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sizes */}
      <section style={{ marginBottom: '32px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Tamanhos
        </Typography>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <Card size="sm" style={{ width: '200px' }}>
            <CardContent>
              <Typography variant="bodySmall">
                Card pequeno com preenchimento mínimo
              </Typography>
            </CardContent>
          </Card>

          <Card size="md" style={{ width: '250px' }}>
            <CardContent>
              <Typography variant="body">
                Card médio com preenchimento padrão
              </Typography>
            </CardContent>
          </Card>

          <Card size="lg" style={{ width: '300px' }}>
            <CardContent>
              <Typography variant="body">
                Card grande com preenchimento generoso para mais conteúdo
              </Typography>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Interactive Cards */}
      <section style={{ marginBottom: '32px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Cards Interativos
        </Typography>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
          <Card 
            interactive 
            onClick={() => alert('Card clicado!')}
            style={{ cursor: 'pointer' }}
          >
            <CardHeader>
              <Typography variant="h3" weight="medium">
                Card Clicável
              </Typography>
            </CardHeader>
            <CardContent>
              <Typography variant="body">
                Este card é interativo e responde a cliques.
              </Typography>
            </CardContent>
          </Card>

          <Card interactive disabled>
            <CardHeader>
              <Typography variant="h3" color="disabled" weight="medium">
                Card Desabilitado
              </Typography>
            </CardHeader>
            <CardContent>
              <Typography variant="body" color="disabled">
                Este card está desabilitado e não pode ser interagido.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Complex Card Examples */}
      <section style={{ marginBottom: '32px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Exemplos Complexos
        </Typography>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '16px' }}>
          {/* Product Card */}
          <Card variant="elevated">
            <CardContent>
              <div style={{ 
                height: '200px', 
                backgroundColor: '#f3f4f6', 
                borderRadius: '8px', 
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#6b7280'
              }}>
                Imagem do Produto
              </div>
              <Typography variant="h3" weight="medium" style={{ marginBottom: '8px' }}>
                Nome do Produto
              </Typography>
              <Typography variant="body" style={{ marginBottom: '16px' }}>
                Esta é uma descrição do produto que explica o que o produto faz e por que é útil.
              </Typography>
            </CardContent>
            <CardFooter>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h3" weight="bold">
                  R$ 99,99
                </Typography>
                <Button size="sm">Adicionar ao Carrinho</Button>
              </div>
            </CardFooter>
          </Card>

          {/* User Profile Card */}
          <Card variant="outlined">
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  borderRadius: '50%', 
                  backgroundColor: '#7566A1',
                  marginRight: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold'
                }}>
                  JD
                </div>
                <div>
                  <Typography variant="h3" weight="medium">
                    João Silva
                  </Typography>
                  <Typography variant="bodySmall">
                    Engenheiro de Software
                  </Typography>
                </div>
              </div>
              <Typography variant="body" style={{ marginBottom: '16px' }}>
                Apaixonado por construir grandes experiências de usuário e resolver problemas complexos.
              </Typography>
            </CardContent>
            <CardFooter>
              <div style={{ display: 'flex', gap: '8px' }}>
                <Button variant="outline" size="sm">Mensagem</Button>
                <Button size="sm">Seguir</Button>
              </div>
            </CardFooter>
          </Card>

          {/* Stats Card */}
          <Card variant="filled">
            <CardContent>
              <Typography variant="h3" weight="medium" style={{ marginBottom: '8px' }}>
                Receita Total
              </Typography>
              <Typography variant="display" weight="bold" style={{ marginBottom: '8px' }}>
                R$ 12.345
              </Typography>
              <Typography variant="bodySmall" color="success">
                ↗ +12,5% do mês passado
              </Typography>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Card with Actions */}
      <section style={{ marginBottom: '32px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Cards com Ações
        </Typography>
        <Card variant="elevated" style={{ maxWidth: '500px' }}>
          <CardHeader>
            <Typography variant="h3" weight="medium">
              Configurações
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography variant="body" style={{ marginBottom: '16px' }}>
              Gerencie suas configurações de conta e preferências.
            </Typography>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="body">Notificações por Email</Typography>
                <Button variant="outline" size="sm">Alternar</Button>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="body">Modo Escuro</Typography>
                <Button variant="outline" size="sm">Alternar</Button>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
              <Button variant="ghost" size="sm">Cancelar</Button>
              <Button size="sm">Salvar Alterações</Button>
            </div>
          </CardFooter>
        </Card>
      </section>
    </div>
  );
};

export default CardDemo;
