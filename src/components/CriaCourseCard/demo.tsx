import React from 'react';
import { CriaCourseCard, Course } from './CriaCourseCard';
import { Typography } from '../Typography';
import { spacing } from '../../tokens';

export const CriaCourseCardDemo: React.FC = () => {
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
          name: 'Sketch',
          icon: '✏️',
        },
        {
          id: '10',
          name: 'Adobe XD',
          icon: '🎯',
        },
      ],
    },
  ];

  const handleCourseClick = (course: Course) => {
    console.log('Course clicked:', course.title);
    alert(`Opening course: ${course.title}`);
  };

  const handleInstructorClick = (instructorId: string, instructorName: string) => {
    console.log(`Instructor clicked: ${instructorName} (ID: ${instructorId})`);
    alert(`Viewing instructor: ${instructorName}`);
  };

  return (
    <div style={{ padding: spacing.lg }}>
      <Typography variant="title1" weight="bold" style={{ marginBottom: spacing[6] }}>
        Course Cards Demo
      </Typography>

      <div style={{ marginBottom: spacing[8] }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: spacing[4] }}>
          Horizontal Course Cards
        </Typography>
        <Typography variant="body" style={{ marginBottom: spacing[6], color: spacing[6] }}>
          These cards display course information in a horizontal layout with instructor avatars, course details, and tool icons.
        </Typography>
        
        <div style={{ display: 'grid', gap: spacing[6] }}>
          {sampleCourses.map((course) => (
            <CriaCourseCard
              key={course.id}
              course={course}
              onClick={handleCourseClick}
              onInstructorClick={handleInstructorClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CriaCourseCardDemo;
