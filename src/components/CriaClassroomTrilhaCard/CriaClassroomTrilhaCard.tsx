import React, { useState, useCallback } from 'react';
import { Clock, UserCircle, Wrench } from 'phosphor-react';
import { colors, spacing, radii, shadows, typography } from '../../tokens';
import { Typography } from '../Typography';
import { Avatar } from '../Avatar';

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

export interface Lesson {
  id: string;
  title: string;
  instructors?: string[];
  tools?: string[];
}

export interface Course {
  id: string;
  title: string;
  instructors?: Instructor[];
  tools?: Tool[];
}

export interface CustomLearning {
  id?: string;
  slug?: string;
  title: string;
  description?: string;
  duration?: string;
  imageUrl?: string;
  lessons?: Lesson[];
  courses?: Course[];
}

export interface ClassroomItem {
  id: string;
  position?: number;
  customTitle?: string;
  customSubtitle?: string;
  imageUrl?: string;
}

export interface CriaClassroomTrilhaCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Custom learning data object
   */
  customLearning: CustomLearning;
  
  /**
   * Classroom item data
   */
  classroomItem: ClassroomItem;
  
  /**
   * Callback when card is clicked
   */
  onCardClick?: (customLearning: CustomLearning) => void;
  
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
 * CriaClassroomTrilhaCard - A custom learning path card
 * 
 * Features:
 * - Horizontal layout with learning path image on the left
 * - Learning path details and information on the right
 * - Position display with large numbering
 * - Aggregated instructors from lessons and courses
 * - Aggregated tools from lessons and courses
 * - Duration and category information
 * - Hover effects and smooth transitions
 * 
 * @example
 * ```tsx
 * <CriaClassroomTrilhaCard
 *   customLearning={{
 *     id: '1',
 *     slug: 'react-complete-path',
 *     title: 'React Complete Learning Path',
 *     description: 'Master React from basics to advanced concepts',
 *     duration: '12 hours',
 *     imageUrl: '/images/react-path.jpg',
 *     lessons: [{ id: '1', title: 'Lesson 1', instructors: ['John Doe'], tools: ['React'] }],
 *     courses: [{ id: '1', title: 'Course 1', instructors: [], tools: [] }]
 *   }}
 *   classroomItem={{
 *     id: '1',
 *     position: 1,
 *     customTitle: 'React Complete Path',
 *     customSubtitle: 'From beginner to expert'
 *   }}
 *   onCardClick={(learning) => console.log('Card clicked:', learning)}
 *   onInstructorClick={(instructor) => console.log('Instructor clicked:', instructor)}
 *   onToolClick={(tool) => console.log('Tool clicked:', tool)}
 * />
 * ```
 */
export const CriaClassroomTrilhaCard: React.FC<CriaClassroomTrilhaCardProps> = ({
  customLearning,
  classroomItem,
  onCardClick,
  onInstructorClick,
  onToolClick,
  className = '',
  style,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleCardClick = useCallback(() => {
    onCardClick?.(customLearning);
  }, [customLearning, onCardClick]);

  const handleInstructorClick = useCallback((instructor: Instructor, e: React.MouseEvent) => {
    e.stopPropagation();
    onInstructorClick?.(instructor);
  }, [onInstructorClick]);

  const handleToolClick = useCallback((tool: Tool, e: React.MouseEvent) => {
    e.stopPropagation();
    onToolClick?.(tool);
  }, [onToolClick]);

  // Determine image source with fallback
  const imageSource = customLearning.imageUrl || classroomItem.imageUrl || '/src/assets/cria_emblem_home.png';

  const title = classroomItem.customTitle || customLearning.title;
  const description = classroomItem.customSubtitle || customLearning.description || '';

  // Aggregate instructors from lessons and courses
  const aggregateInstructors = (): Instructor[] => {
    const allInstructors: Instructor[] = [];
    
    // Add instructors from lessons (stored as strings)
    if (customLearning.lessons) {
      customLearning.lessons.forEach(lesson => {
        if (lesson.instructors) {
          lesson.instructors.forEach(instructorName => {
            // Create instructor object from name
            const instructor: Instructor = {
              id: instructorName.toLowerCase().replace(/\s+/g, '-'),
              name: instructorName,
            };
            allInstructors.push(instructor);
          });
        }
      });
    }
    
    // Add instructors from courses (stored as Instructor objects)
    if (customLearning.courses) {
      customLearning.courses.forEach(course => {
        if (course.instructors) {
          allInstructors.push(...course.instructors);
        }
      });
    }
    
    // Remove duplicates and return unique instructors
    const uniqueInstructors = allInstructors.filter((instructor, index, self) => 
      index === self.findIndex(i => i.id === instructor.id)
    );
    
    return uniqueInstructors;
  };

  // Aggregate tools from lessons and courses
  const aggregateTools = (): Tool[] => {
    const allTools: Tool[] = [];
    
    // Add tools from lessons (stored as strings)
    if (customLearning.lessons) {
      customLearning.lessons.forEach(lesson => {
        if (lesson.tools) {
          lesson.tools.forEach(toolName => {
            // Create tool object from name
            const tool: Tool = {
              id: toolName.toLowerCase().replace(/\s+/g, '-'),
              name: toolName,
            };
            allTools.push(tool);
          });
        }
      });
    }
    
    // Add tools from courses (stored as Tool objects)
    if (customLearning.courses) {
      customLearning.courses.forEach(course => {
        if (course.tools) {
          allTools.push(...course.tools);
        }
      });
    }
    
    // Remove duplicates and return unique tools
    const uniqueTools = allTools.filter((tool, index, self) => 
      index === self.findIndex(t => t.id === tool.id)
    );
    
    return uniqueTools;
  };

  const instructors = aggregateInstructors();
  const tools = aggregateTools();
  const visibleInstructors = instructors.slice(0, 2);
  const overflowInstructorsCount = Math.max(instructors.length - visibleInstructors.length, 0);

  const cardClasses = [
    'cria-classroom-trilha-card',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div
      className={cardClasses}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: colors.white,
        borderRadius: radii.lg,
        boxShadow: shadows.lg,
        overflow: 'hidden',
        display: 'flex',
        border: `1px solid ${colors.gray[100]}`,
        minHeight: '200px',
        transition: 'all 0.3s ease',
        cursor: onCardClick ? 'pointer' : 'default',
        ...style,
      }}
      data-custom-learning-id={customLearning.id}
      data-classroom-item-id={classroomItem.id}
      {...props}
    >
      {/* Left Section - Learning Path Image */}
      <div
        style={{
          width: '33.333%',
          flexShrink: 0,
          position: 'relative',
          overflow: 'hidden',
          minHeight: '200px',
        }}
        onClick={handleCardClick}
      >
        <img
          src={imageSource}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            transition: 'transform 0.3s ease',
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
            opacity: imageLoaded ? 1 : 0,
          }}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageLoaded(true)}
        />
        
        {/* Gradient overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.2) 0%, transparent 100%)',
          }}
        />
        
        {/* Learning path position display */}
        <div
          className="learning-path-position"
          style={{
            position: 'absolute',
            top: spacing[4],
            left: spacing[4],
          }}
        >
          <Typography
            variant="h1"
            style={{
              fontSize: '48px',
              fontFamily: typography.fontFamily.primary,
              fontWeight: typography.fontWeight.bold,
              color: colors.white,
              lineHeight: 1,
              marginBottom: spacing[1],
            }}
          >
            {String(classroomItem.position || 1).padStart(2, '0')}
          </Typography>
          <Typography
            variant="caption"
            style={{
              fontFamily: typography.fontFamily.primary,
              fontWeight: typography.fontWeight.medium,
              color: colors.white,
              textTransform: 'uppercase',
              fontSize: '12px',
              letterSpacing: '0.1em',
            }}
          >
            TRILHA
          </Typography>
        </div>
      </div>

      {/* Right Section - Content */}
      <div
        style={{
          padding: `${spacing[2]} ${spacing[4]} ${spacing[4]} ${spacing[4]}`,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '66.667%',
          minHeight: '200px',
        }}
      >
        {/* Header Section */}
        <div>
          {/* Learning Path Title */}
          <Typography
            variant="h2"
            style={{
              color: colors.primary,
              fontFamily: typography.fontFamily.primary,
              fontWeight: typography.fontWeight.bold,
              fontSize: '20px',
              lineHeight: 1.2,
              marginBottom: spacing[2],
              cursor: 'pointer',
              textDecoration: customLearning.slug ? 'underline' : 'none',
              textDecorationColor: 'transparent',
              transition: 'all 0.3s ease',
            }}
            onClick={handleCardClick}
            onMouseEnter={(e) => {
              if (customLearning.slug) {
                e.currentTarget.style.textDecorationColor = colors.primary;
              }
            }}
            onMouseLeave={(e) => {
              if (customLearning.slug) {
                e.currentTarget.style.textDecorationColor = 'transparent';
              }
            }}
          >
            {title}
          </Typography>

          {/* Learning Path Description */}
          <Typography
            variant="body"
            style={{
              color: colors.gray[600],
              fontSize: '14px',
              lineHeight: 1.5,
              marginBottom: spacing[4],
            }}
          >
            {description}
          </Typography>

          {/* Instructors Section */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: spacing[2],
              marginTop: spacing[4],
              marginBottom: spacing[2],
            }}
          >
            {instructors.length > 0 ? (
              <>
                {visibleInstructors.map((instructor) => (
                  <div
                    key={instructor.id}
                    onClick={(e) => handleInstructorClick(instructor, e)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: `${spacing[1]} ${spacing[3]}`,
                      borderRadius: radii.full,
                      fontSize: typography.fontSize.caption,
                      fontWeight: typography.fontWeight.semiBold,
                      border: `1px solid ${colors.primaryLight}`,
                      color: colors.primary,
                      backgroundColor: colors.primaryLighter,
                      cursor: onInstructorClick ? 'pointer' : 'default',
                      flexShrink: 0,
                    }}
                  >
                    {instructor.avatarUrl && (
                      <Avatar
                        src={instructor.avatarUrl}
                        alt={instructor.name}
                        size="xs"
                        name={instructor.name}
                        style={{ width: '20px', height: '20px', marginRight: spacing[2] }}
                      />
                    )}
                    {instructor.name}
                  </div>
                ))}
                {overflowInstructorsCount > 0 && (
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: `${spacing[1]} ${spacing[2]}`,
                      borderRadius: radii.full,
                      backgroundColor: colors.gray[100],
                      color: colors.gray[600],
                      fontSize: typography.fontSize.caption,
                      fontWeight: typography.fontWeight.medium,
                      flexShrink: 0,
                    }}
                  >
                    +{overflowInstructorsCount}
                  </span>
                )}
              </>
            ) : (
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: `${spacing[1]} ${spacing[3]}`,
                  borderRadius: radii.full,
                  backgroundColor: colors.gray[100],
                  color: colors.gray[600],
                  fontSize: typography.fontSize.caption,
                  fontWeight: typography.fontWeight.medium,
                }}
              >
                No instructors
              </span>
            )}
          </div>

          {/* Tools Section */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: spacing[3],
              marginBottom: spacing[4],
            }}
          >
            <Wrench size={20} color={colors.primary} style={{ marginTop: spacing[1], flexShrink: 0 }} />
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: spacing[2],
              }}
            >
              {tools.length > 0 ? (
                tools.map((tool) => (
                  <span
                    key={tool.id}
                    onClick={(e) => handleToolClick(tool, e)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: `${spacing[1]} ${spacing[3]}`,
                      borderRadius: radii.full,
                      fontSize: typography.fontSize.caption,
                      fontWeight: typography.fontWeight.semiBold,
                      border: `1px solid ${colors.primaryLight}`,
                      color: colors.primary,
                      backgroundColor: colors.primaryLighter,
                      cursor: onToolClick ? 'pointer' : 'default',
                    }}
                  >
                    {tool.icon && (
                      <span style={{ width: '20px', height: '20px', marginRight: spacing[2], display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {tool.icon}
                      </span>
                    )}
                    {tool.name}
                  </span>
                ))
              ) : (
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: `${spacing[1]} ${spacing[3]}`,
                    borderRadius: radii.full,
                    fontSize: typography.fontSize.caption,
                    fontWeight: typography.fontWeight.semiBold,
                    border: `1px solid ${colors.gray[300]}`,
                    color: colors.gray[600],
                    backgroundColor: colors.gray[100],
                  }}
                >
                  No tools
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: spacing[2],
          }}
        >
          {/* Duration */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Clock size={16} color={colors.primary} style={{ marginRight: spacing[1] }} />
            <Typography
              variant="caption"
              style={{
                color: colors.primary,
                fontSize: '12px',
                fontFamily: typography.fontFamily.primary,
                fontWeight: typography.fontWeight.medium,
              }}
            >
              {customLearning.duration || '--'}
            </Typography>
          </div>

          {/* Category */}
          <Typography
            variant="caption"
            style={{
              color: colors.primary,
              fontSize: '12px',
              fontFamily: typography.fontFamily.primary,
              fontWeight: typography.fontWeight.bold,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}
          >
            TRILHA
          </Typography>

          {/* Empty div for spacing */}
          <div></div>
        </div>
      </div>
    </div>
  );
};
