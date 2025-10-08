import React, { useState, useCallback } from 'react';
import { Clock, UserCircle, Wrench } from 'phosphor-react';
import { colors, spacing, radii, shadows, typography } from '../../tokens';
import { Avatar } from '../Avatar';
import { AvatarWithName } from '../Avatar';
import { CriaTextHeadline1, CriaTextBody1, CriaTextBody2, CriaTextCaption } from '../TextTokens';

export interface Instructor {
  id: string;
  name: string;
  avatarUrl?: string;
}

export interface Tool {
  id: string;
  name: string;
  icon?: string;
}

export interface Course {
  id?: string;
  slug: string;
  title: string;
  description?: string;
  thumbnailUrl?: string;
  duration?: string;
  instructors?: Instructor[];
  tools?: Tool[];
}

export interface CriaCourseCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Course data object
   */
  course: Course;
  
  /**
   * Callback when course is clicked
   */
  onCourseClick?: (course: Course) => void;
  
  /**
   * Callback when instructor is clicked
   */
  onInstructorClick?: (instructor: Instructor) => void;
  
  /**
   * Callback when tool is clicked
   */
  onToolClick?: (tool: Tool) => void;
  
  /**
   * Custom class name
   */
  className?: string;
  
  /**
   * Custom styles
   */
  style?: React.CSSProperties;
}

/**
 * CriaCourseCard - A horizontal course card component
 * 
 * Features:
 * - Horizontal layout with thumbnail on the left
 * - Course title, description, and metadata
 * - Instructor avatars with names
 * - Tool badges with icons
 * - Duration information
 * - Hover effects and transitions
 * 
 * @example
 * ```tsx
 * <CriaCourseCard
 *   course={{
 *     slug: 'react-complete',
 *     title: 'React Complete Course',
 *     description: 'Master React from basics to advanced concepts',
 *     thumbnailUrl: '/images/react-course.jpg',
 *     duration: '8 hours',
 *     instructors: [
 *       { id: '1', name: 'John Doe', avatarUrl: '/avatars/john.jpg' }
 *     ],
 *     tools: [
 *       { id: '1', name: 'React', icon: '⚛️' }
 *     ]
 *   }}
 *   onCourseClick={(course) => console.log('Course clicked:', course)}
 * />
 * ```
 */
export const CriaCourseCard: React.FC<CriaCourseCardProps> = ({
  course,
  onCourseClick,
  onInstructorClick,
  onToolClick,
  className = '',
  style,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleCardClick = useCallback(() => {
    onCourseClick?.(course);
  }, [course, onCourseClick]);

  const handleInstructorClick = useCallback((instructor: Instructor, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click from firing
    onInstructorClick?.(instructor);
  }, [onInstructorClick]);

  const handleToolClick = useCallback((tool: Tool, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click from firing
    onToolClick?.(tool);
  }, [onToolClick]);

  const cardClasses = [
    'cria-course-card',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div
      className={cardClasses}
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: colors.white,
        borderRadius: radii.lg,
        boxShadow: shadows.sm,
        overflow: 'hidden',
        display: 'flex',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        ...style,
      }}
      data-course-id={course.id}
      data-course-slug={course.slug}
      {...props}
    >
      {/* Thumbnail Section (Left 1/3) */}
      <div
        style={{
          width: '33.333%',
          flexShrink: 0,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <img
          src={course.thumbnailUrl || "https://via.placeholder.com/400x300?text=No+Image"}
          alt={course.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.3s ease-out',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            opacity: imageLoaded ? 1 : 0,
            minHeight: '200px',
          }}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageLoaded(true)}
        />
      </div>

      {/* Content Section (Right 2/3) */}
      <div
        style={{
          padding: `${spacing[8]} ${spacing[8]} ${spacing[8]} ${spacing[12]}`,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        {/* Header Section */}
        <div>
          {/* Course Title */}
          <div
            style={{
              color: colors.primary,
              fontWeight: typography.fontWeight.bold,
              letterSpacing: '0.1em',
              marginBottom: spacing[2],
              textTransform: 'uppercase',
              transition: 'color 0.3s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = colors.secondary;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = colors.primary;
            }}
          >
            <CriaTextHeadline1 as="h3">{course.title}</CriaTextHeadline1>
          </div>

          {/* Course Description */}
          <div
            style={{
              color: colors.gray[600],
              fontSize: '14px',
              lineHeight: 1.6,
              marginBottom: spacing[6],
            }}
          >
            <CriaTextBody1>
              {course.description || 'A comprehensive course designed to help you master the fundamentals and advanced concepts.'}
            </CriaTextBody1>
          </div>
        </div>

        {/* Metadata Section */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: spacing[8],
          }}
        >
          {/* Instructors Section */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: spacing[2],
                marginBottom: spacing[4],
              }}
            >
              <UserCircle
                size={20}
                color={colors.primary}
                weight="duotone"
                style={{ marginTop: '2px', flexShrink: 0 }}
              />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  gap: spacing[2],
                }}
              >
                {course.instructors?.map((instructor) => (
                  <AvatarWithName
                    key={instructor.id}
                    name={instructor.name}
                    size="sm"
                    variant="outlined"
                    clickable
                    avatarProps={{
                      src: instructor.avatarUrl,
                      alt: instructor.name,
                      size: 'sm',
                    }}
                    onClick={(e) => handleInstructorClick(instructor, e)}
                  />
                ))}
              </div>
            </div>

            {/* Duration */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: spacing[2],
              }}
            >
              <Clock
                size={20}
                color={colors.primary}
                weight="duotone"
              />
              <div
                style={{
                  color: colors.primary,
                  fontSize: '14px',
                }}
              >
                <CriaTextBody2>{course.duration || '--'}</CriaTextBody2>
              </div>
            </div>
          </div>

          {/* Tools Section */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: spacing[2],
              }}
            >
              <Wrench
                size={20}
                color={colors.primary}
                weight="duotone"
                style={{ marginTop: '2px', flexShrink: 0 }}
              />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  gap: spacing[2],
                }}
              >
                {course.tools?.map((tool) => (
                  <div
                    key={tool.id}
                    onClick={(e) => handleToolClick(tool, e)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: `${spacing[1]} ${spacing[2]}`,
                      borderRadius: radii.full,
                      fontSize: '12px',
                      fontWeight: typography.fontWeight.semiBold,
                      color: colors.primary,
                      border: `1px solid ${colors.primary}20`,
                      backgroundColor: colors.primary + '08',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = colors.primary + '15';
                      e.currentTarget.style.borderColor = colors.primary + '40';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = colors.primary + '08';
                      e.currentTarget.style.borderColor = colors.primary + '20';
                    }}
                  >
                    {tool.icon && (
                      <div
                        style={{
                          width: '20px',
                          height: '20px',
                          marginRight: spacing[1],
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '14px',
                        }}
                      >
                        <CriaTextCaption>{tool.icon}</CriaTextCaption>
                      </div>
                    )}
                    {tool.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

