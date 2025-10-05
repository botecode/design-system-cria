import React, { useState } from 'react';
import { RowOfCards } from './RowOfCards';
import { Card, CardHeader, CardContent } from '../Card';
import { Button } from '../Button';
import { Typography } from '../Typography';
import { Badge } from '../Badge';
import { Avatar } from '../Avatar';
import { colors, spacing } from '../../tokens';
import { Star, Users, Clock, Play } from 'phosphor-react';

/**
 * RowOfCards component demo
 */
export const RowOfCardsDemo: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Sample data for different card types
  const courseCards = [
    {
      id: '1',
      title: 'React Fundamentals',
      instructor: 'Sarah Johnson',
      rating: 4.8,
      students: 1250,
      duration: '12h 30m',
      price: '$89',
      thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=200&fit=crop',
      level: 'Beginner',
      tags: ['React', 'JavaScript', 'Frontend'],
    },
    {
      id: '2',
      title: 'Advanced TypeScript',
      instructor: 'Michael Chen',
      rating: 4.9,
      students: 890,
      duration: '15h 45m',
      price: '$129',
      thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=200&fit=crop',
      level: 'Advanced',
      tags: ['TypeScript', 'JavaScript', 'Backend'],
    },
    {
      id: '3',
      title: 'Node.js Masterclass',
      instructor: 'Emily Rodriguez',
      rating: 4.7,
      students: 2100,
      duration: '20h 15m',
      price: '$149',
      thumbnail: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=200&fit=crop',
      level: 'Intermediate',
      tags: ['Node.js', 'Backend', 'API'],
    },
    {
      id: '4',
      title: 'Vue.js Complete Guide',
      instructor: 'David Kim',
      rating: 4.6,
      students: 980,
      duration: '18h 20m',
      price: '$109',
      thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop',
      level: 'Beginner',
      tags: ['Vue.js', 'JavaScript', 'Frontend'],
    },
    {
      id: '5',
      title: 'Python Data Science',
      instructor: 'Lisa Wang',
      rating: 4.9,
      students: 3200,
      duration: '25h 10m',
      price: '$169',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
      level: 'Intermediate',
      tags: ['Python', 'Data Science', 'ML'],
    },
    {
      id: '6',
      title: 'AWS Cloud Architecture',
      instructor: 'James Wilson',
      rating: 4.8,
      students: 1560,
      duration: '22h 35m',
      price: '$189',
      thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=200&fit=crop',
      level: 'Advanced',
      tags: ['AWS', 'Cloud', 'DevOps'],
    },
    {
      id: '7',
      title: 'Docker & Kubernetes',
      instructor: 'Anna Thompson',
      rating: 4.7,
      students: 1340,
      duration: '16h 50m',
      price: '$139',
      thumbnail: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?w=400&h=200&fit=crop',
      level: 'Intermediate',
      tags: ['Docker', 'Kubernetes', 'DevOps'],
    },
    {
      id: '8',
      title: 'GraphQL APIs',
      instructor: 'Robert Davis',
      rating: 4.5,
      students: 750,
      duration: '14h 25m',
      price: '$99',
      thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop',
      level: 'Advanced',
      tags: ['GraphQL', 'API', 'Backend'],
    },
    {
      id: '9',
      title: 'React Native Mobile',
      instructor: 'Maria Garcia',
      rating: 4.8,
      students: 1890,
      duration: '19h 40m',
      price: '$159',
      thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=200&fit=crop',
      level: 'Intermediate',
      tags: ['React Native', 'Mobile', 'iOS'],
    },
    {
      id: '10',
      title: 'Machine Learning Basics',
      instructor: 'Alex Kumar',
      rating: 4.9,
      students: 2800,
      duration: '21h 15m',
      price: '$179',
      thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=200&fit=crop',
      level: 'Beginner',
      tags: ['ML', 'Python', 'AI'],
    },
    {
      id: '11',
      title: 'Cybersecurity Fundamentals',
      instructor: 'Jennifer Lee',
      rating: 4.7,
      students: 1120,
      duration: '17h 30m',
      price: '$119',
      thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=200&fit=crop',
      level: 'Beginner',
      tags: ['Security', 'Networking', 'Ethics'],
    },
    {
      id: '12',
      title: 'Blockchain Development',
      instructor: 'Kevin Park',
      rating: 4.6,
      students: 680,
      duration: '23h 55m',
      price: '$199',
      thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=200&fit=crop',
      level: 'Advanced',
      tags: ['Blockchain', 'Solidity', 'Web3'],
    },
  ];

  const renderCourseCard = (course: any) => (
    <Card 
      key={course.id}
      style={{ 
        height: '100%',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.12)';
      }}
    >
      {/* Course Thumbnail */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <img 
          src={course.thumbnail} 
          alt={course.title}
          style={{
            width: '100%',
            height: '160px',
            objectFit: 'cover',
          }}
        />
        <div style={{
          position: 'absolute',
          top: spacing[3],
          right: spacing[3],
        }}>
          <Badge variant="filled" color="primary">
            {course.level}
          </Badge>
        </div>
      </div>

      <CardContent style={{ padding: spacing[6] }}>
        {/* Course Title */}
        <Typography 
          variant="h3" 
          weight="semibold" 
          style={{ 
            marginBottom: spacing[3],
            lineHeight: 1.3,
            color: colors.text.primary,
          }}
        >
          {course.title}
        </Typography>

        {/* Instructor */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          marginBottom: spacing[4],
          gap: spacing[2],
        }}>
          <Avatar 
            size="sm"
            src={`https://ui-avatars.com/api/?name=${course.instructor}&background=7566A1&color=fff`}
          />
          <Typography variant="bodySmall" color="secondary">
            {course.instructor}
          </Typography>
        </div>

        {/* Rating and Students */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          marginBottom: spacing[4],
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: spacing[1] }}>
            <Star size={16} color={colors.warning} weight="fill" />
            <Typography variant="bodySmall" weight="medium">
              {course.rating}
            </Typography>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: spacing[1] }}>
            <Users size={16} color={colors.text.secondary} />
            <Typography variant="bodySmall" color="secondary">
              {course.students.toLocaleString()}
            </Typography>
          </div>
        </div>

        {/* Duration */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: spacing[1],
          marginBottom: spacing[4],
        }}>
          <Clock size={16} color={colors.text.secondary} />
          <Typography variant="bodySmall" color="secondary">
            {course.duration}
          </Typography>
        </div>

        {/* Tags */}
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: spacing[1],
          marginBottom: spacing[4],
        }}>
          {course.tags.slice(0, 3).map((tag: string) => (
            <Badge key={tag} variant="outlined" size="sm">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Price and Action */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
        }}>
          <Typography variant="h3" weight="bold" color="primary">
            {course.price}
          </Typography>
          <Button size="sm" variant="filled">
            <Play size={16} weight="fill" />
            Enroll
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const renderSimpleCard = (item: any) => (
    <Card key={item.id} style={{ height: '100%' }}>
      <CardHeader>
        <Typography variant="h3" weight="medium">
          {item.title}
        </Typography>
      </CardHeader>
      <CardContent>
        <Typography variant="body" color="secondary">
          {item.description}
        </Typography>
      </CardContent>
    </Card>
  );

  const simpleCards = [
    { id: '1', title: 'Feature 1', description: 'This is a simple card with basic content and styling.' },
    { id: '2', title: 'Feature 2', description: 'Another card showcasing the responsive grid layout.' },
    { id: '3', title: 'Feature 3', description: 'Cards automatically adjust to different screen sizes.' },
    { id: '4', title: 'Feature 4', description: 'Pagination controls appear when needed.' },
    { id: '5', title: 'Feature 5', description: 'Keyboard navigation is fully supported.' },
    { id: '7', title: 'Feature 7', description: 'Accessibility features are built-in.' },
    { id: '8', title: 'Feature 8', description: 'Custom styling and theming support.' },
  ];

  return (
    <div style={{ padding: spacing[8] }}>
      <div style={{ marginBottom: spacing[8] }}>
        <Typography variant="h1" weight="bold" style={{ marginBottom: spacing[4] }}>
          Row of Cards Component
        </Typography>
        <Typography variant="bodyLarge" color="secondary" style={{ marginBottom: spacing[6] }}>
          A responsive grid component that displays cards in rows with pagination support. 
          Perfect for showcasing courses, products, or any collection of items.
        </Typography>
      </div>

      {/* Course Cards Example */}
      <div style={{ marginBottom: spacing[12] }}>
        <Typography variant="h2" weight="semibold" style={{ marginBottom: spacing[6] }}>
          Course Cards (6 per page)
        </Typography>
        <RowOfCards
          cards={courseCards}
          renderCard={renderCourseCard}
          cardsPerPage={6}
          onPageChange={setCurrentPage}
          data-testid="course-cards"
        />
        <Typography variant="bodySmall" color="secondary" style={{ marginTop: spacing[4] }}>
          Current page: {currentPage} of {Math.ceil(courseCards.length / 6)}
        </Typography>
      </div>

      {/* Simple Cards Example */}
      <div style={{ marginBottom: spacing[12] }}>
        <Typography variant="h2" weight="semibold" style={{ marginBottom: spacing[6] }}>
          Simple Cards (3 per page)
        </Typography>
        <RowOfCards
          cards={simpleCards}
          renderCard={renderSimpleCard}
          cardsPerPage={3}
          data-testid="simple-cards"
        />
      </div>

      {/* Empty State Example */}
      <div style={{ marginBottom: spacing[12] }}>
        <Typography variant="h2" weight="semibold" style={{ marginBottom: spacing[6] }}>
          Empty State
        </Typography>
        <RowOfCards
          cards={[]}
          renderCard={renderSimpleCard}
          cardsPerPage={3}
          data-testid="empty-cards"
        />
      </div>

      {/* Single Card Example */}
      <div>
        <Typography variant="h2" weight="semibold" style={{ marginBottom: spacing[6] }}>
          Single Card (No Pagination)
        </Typography>
        <RowOfCards
          cards={[simpleCards[0]]}
          renderCard={renderSimpleCard}
          cardsPerPage={3}
          data-testid="single-card"
        />
      </div>
    </div>
  );
};
