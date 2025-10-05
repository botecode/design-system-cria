import React from 'react';
import { CriaCustomLearningLessonCard, CustomLearning, ClassroomItem, Instructor, Tool } from './CriaCustomLearningLessonCard';
import Typography from '../Typography/Typography';
import { spacing } from '../../tokens';

// Sample data for CriaCustomLearningLessonCard
const sampleCustomLearnings: { customLearning: CustomLearning; classroomItem: ClassroomItem }[] = [
  {
    customLearning: {
      id: '1',
      slug: 'react-complete-path',
      title: 'React Complete Learning Path',
      description: 'Master React from basics to advanced concepts with comprehensive lessons and courses.',
      duration: '12 hours',
      imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop',
      lessons: [
        {
          id: '1',
          title: 'React Fundamentals',
          instructors: ['John Doe', 'Jane Smith'],
          tools: ['React', 'JavaScript', 'JSX'],
        },
        {
          id: '2',
          title: 'Advanced React Patterns',
          instructors: ['Mike Johnson'],
          tools: ['React', 'TypeScript', 'Hooks'],
        },
      ],
      courses: [
        {
          id: '1',
          title: 'React Complete Course',
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
          ],
        },
      ],
    },
    classroomItem: {
      id: '1',
      position: 1,
      customTitle: 'React Complete Path - Advanced',
      customSubtitle: 'From beginner to expert with hands-on projects and real-world applications',
      imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop',
    },
  },
  {
    customLearning: {
      id: '2',
      slug: 'fullstack-javascript-path',
      title: 'Full-Stack JavaScript Learning Path',
      description: 'Learn to build complete web applications with JavaScript, Node.js, and modern frameworks.',
      duration: '16 hours',
      imageUrl: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=300&fit=crop',
      lessons: [
        {
          id: '1',
          title: 'JavaScript Fundamentals',
          instructors: ['Alice Brown', 'Bob Wilson', 'Charlie Davis'],
          tools: ['JavaScript', 'ES6', 'DOM'],
        },
        {
          id: '2',
          title: 'Node.js Backend',
          instructors: ['David Miller'],
          tools: ['Node.js', 'Express', 'MongoDB'],
        },
      ],
      courses: [
        {
          id: '1',
          title: 'Full-Stack JavaScript Course',
          instructors: [
            {
              id: '3',
              name: 'Alice Brown',
              avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
            },
            {
              id: '4',
              name: 'Bob Wilson',
              avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
            },
          ],
          tools: [
            {
              id: '3',
              name: 'Node.js',
              icon: '🟢',
            },
            {
              id: '4',
              name: 'Express',
              icon: '🚀',
            },
            {
              id: '5',
              name: 'MongoDB',
              icon: '🍃',
            },
          ],
        },
      ],
    },
    classroomItem: {
      id: '2',
      position: 2,
      customTitle: 'Full-Stack JavaScript Path',
      customSubtitle: 'Build complete web applications from frontend to backend',
    },
  },
  {
    customLearning: {
      id: '3',
      slug: 'ui-ux-design-path',
      title: 'UI/UX Design Learning Path',
      description: 'Master the principles of user interface and user experience design for modern applications.',
      duration: '8 hours',
      imageUrl: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop',
      lessons: [
        {
          id: '1',
          title: 'Design Principles',
          instructors: ['Sarah Wilson'],
          tools: ['Figma', 'Design Thinking'],
        },
      ],
      courses: [
        {
          id: '1',
          title: 'UI/UX Design Course',
          instructors: [
            {
              id: '5',
              name: 'Sarah Wilson',
              avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
            },
          ],
          tools: [
            {
              id: '6',
              name: 'Figma',
              icon: '🎨',
            },
            {
              id: '7',
              name: 'Adobe XD',
              icon: '📐',
            },
          ],
        },
      ],
    },
    classroomItem: {
      id: '3',
      position: 3,
      customTitle: 'UI/UX Design Mastery',
      customSubtitle: 'Create beautiful and intuitive user experiences',
    },
  },
  {
    customLearning: {
      id: '4',
      slug: 'data-science-path',
      title: 'Data Science Learning Path',
      description: 'Learn data analysis, machine learning, and visualization with Python and modern tools.',
      duration: '20 hours',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      lessons: [
        {
          id: '1',
          title: 'Python for Data Science',
          instructors: ['Emma Davis', 'James Wilson', 'Lisa Chen', 'Mark Thompson'],
          tools: ['Python', 'Pandas', 'NumPy'],
        },
        {
          id: '2',
          title: 'Machine Learning Basics',
          instructors: ['Robert Brown'],
          tools: ['Scikit-learn', 'TensorFlow'],
        },
      ],
      courses: [
        {
          id: '1',
          title: 'Data Science Complete Course',
          instructors: [
            {
              id: '6',
              name: 'Emma Davis',
              avatarUrl: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
            },
            {
              id: '7',
              name: 'James Wilson',
              avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
            },
          ],
          tools: [
            {
              id: '8',
              name: 'Python',
              icon: '🐍',
            },
            {
              id: '9',
              name: 'Jupyter',
              icon: '📊',
            },
            {
              id: '10',
              name: 'Matplotlib',
              icon: '📈',
            },
            {
              id: '11',
              name: 'Seaborn',
              icon: '🎨',
            },
            {
              id: '12',
              name: 'Pandas',
              icon: '🐼',
            },
          ],
        },
      ],
    },
    classroomItem: {
      id: '4',
      position: 4,
      customTitle: 'Data Science Mastery',
      customSubtitle: 'From data analysis to machine learning with Python',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    },
  },
];

const handleCardClick = (customLearning: CustomLearning) => {
  console.log('Custom learning clicked:', customLearning.title);
  alert(`Opening learning path: ${customLearning.title}`);
};

const handleInstructorClick = (instructor: Instructor) => {
  console.log('Instructor clicked:', instructor.name);
  alert(`Viewing instructor profile: ${instructor.name}`);
};

const handleToolClick = (tool: Tool) => {
  console.log('Tool clicked:', tool.name);
  alert(`Learning about: ${tool.name}`);
};

export const CriaCustomLearningLessonCardDemo: React.FC = () => {
  return (
    <div style={{ padding: '24px', maxWidth: '1000px' }}>
      <Typography variant="title1" weight="bold" style={{ marginBottom: '32px' }}>
        Custom Learning Lesson Cards (Trilha)
      </Typography>

      <section style={{ marginBottom: '32px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          CriaCustomLearningLessonCard - Learning Path Cards
        </Typography>
        <Typography variant="body" style={{ marginBottom: '24px', color: '#6b7280' }}>
          Comprehensive learning path cards with aggregated instructors and tools from lessons and courses.
          Features custom titles/subtitles, instructor overflow handling, and interactive tool badges.
          Perfect for showcasing custom learning paths with rich metadata and comprehensive content.
        </Typography>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          marginBottom: '24px',
          maxWidth: '1200px'
        }}>
          {sampleCustomLearnings.map(({ customLearning, classroomItem }) => (
            <CriaCustomLearningLessonCard
              key={customLearning.id}
              customLearning={customLearning}
              classroomItem={classroomItem}
              onCardClick={handleCardClick}
              onInstructorClick={handleInstructorClick}
              onToolClick={handleToolClick}
            />
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Features
        </Typography>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
          <div style={{ padding: '16px', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
            <Typography variant="h3" weight="medium" style={{ marginBottom: '8px' }}>
              🎯 Custom Content
            </Typography>
            <Typography variant="body" style={{ color: '#6b7280' }}>
              Support for custom titles and subtitles that override the default learning path content.
            </Typography>
          </div>
          
          <div style={{ padding: '16px', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
            <Typography variant="h3" weight="medium" style={{ marginBottom: '8px' }}>
              👥 Instructor Aggregation
            </Typography>
            <Typography variant="body" style={{ color: '#6b7280' }}>
              Automatically collects and displays instructors from all lessons and courses with overflow handling.
            </Typography>
          </div>
          
          <div style={{ padding: '16px', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
            <Typography variant="h3" weight="medium" style={{ marginBottom: '8px' }}>
              🔧 Tool Integration
            </Typography>
            <Typography variant="body" style={{ color: '#6b7280' }}>
              Aggregates tools from lessons and courses with interactive badges and overflow indicators.
            </Typography>
          </div>
          
          <div style={{ padding: '16px', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
            <Typography variant="h3" weight="medium" style={{ marginBottom: '8px' }}>
              🎨 Visual Design
            </Typography>
            <Typography variant="body" style={{ color: '#6b7280' }}>
              Beautiful gradient overlays, hover effects, and responsive design with proper spacing.
            </Typography>
          </div>
          
          <div style={{ padding: '16px', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
            <Typography variant="h3" weight="medium" style={{ marginBottom: '8px' }}>
              📱 Responsive Layout
            </Typography>
            <Typography variant="body" style={{ color: '#6b7280' }}>
              Optimized for all screen sizes with proper image handling and content organization.
            </Typography>
          </div>
          
          <div style={{ padding: '16px', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
            <Typography variant="h3" weight="medium" style={{ marginBottom: '8px' }}>
              ♿ Accessibility
            </Typography>
            <Typography variant="body" style={{ color: '#6b7280' }}>
              Proper ARIA labels, keyboard navigation, and screen reader support for all interactive elements.
            </Typography>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CriaCustomLearningLessonCardDemo;
