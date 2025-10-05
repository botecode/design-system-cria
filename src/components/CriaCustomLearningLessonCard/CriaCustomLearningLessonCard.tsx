import React from 'react';
import { colors, spacing, typography, radii, shadows } from '../../tokens';
import { Avatar } from '../Avatar';
import { Button } from '../Button';
import Typography from '../Typography/Typography';

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
  instructors: string[];
  tools: string[];
}

export interface Course {
  id: string;
  title: string;
  instructors: Instructor[];
  tools: Tool[];
}

export interface CustomLearning {
  id: string;
  slug?: string;
  title: string;
  description: string;
  duration: string;
  imageUrl?: string;
  lessons?: Lesson[];
  courses?: Course[];
}

export interface ClassroomItem {
  id: string;
  position: number;
  customTitle?: string;
  customSubtitle?: string;
  imageUrl?: string;
}

export interface CriaCustomLearningLessonCardProps {
  customLearning: CustomLearning;
  classroomItem: ClassroomItem;
  onCardClick?: (customLearning: CustomLearning) => void;
  onInstructorClick?: (instructor: Instructor) => void;
  onToolClick?: (tool: Tool) => void;
  className?: string;
  style?: React.CSSProperties;
}

export const CriaCustomLearningLessonCard: React.FC<CriaCustomLearningLessonCardProps> = ({
  customLearning,
  classroomItem,
  onCardClick,
  onInstructorClick,
  onToolClick,
  className,
  style,
}) => {
  // Get the display title (custom title takes precedence)
  const displayTitle = classroomItem.customTitle || customLearning.title;
  
  // Get the display description (custom subtitle takes precedence)
  const displayDescription = classroomItem.customSubtitle || customLearning.description;
  
  // Get the display image (prioritize classroom item image, then custom learning image)
  const displayImage = classroomItem.imageUrl || customLearning.imageUrl || '/cria_emblem_home.png';
  
  // Collect all instructors from lessons and courses
  const allInstructors: Instructor[] = [];
  
  // Add instructors from lessons (stored as strings)
  if (customLearning.lessons) {
    customLearning.lessons.forEach(lesson => {
      if (lesson.instructors) {
        lesson.instructors.forEach(instructorName => {
          // Create a mock instructor object for display
          const mockInstructor: Instructor = {
            id: instructorName.toLowerCase().replace(/\s+/g, '-'),
            name: instructorName,
            avatarUrl: `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&sig=${Math.random()}`,
          };
          allInstructors.push(mockInstructor);
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
  
  // Remove duplicates and limit display
  const uniqueInstructors = allInstructors.filter((instructor, index, self) => 
    index === self.findIndex(i => i.id === instructor.id)
  );
  const visibleInstructors = uniqueInstructors.slice(0, 2);
  const overflowCount = Math.max(uniqueInstructors.length - visibleInstructors.length, 0);
  
  // Collect all tools from lessons and courses
  const allTools: Tool[] = [];
  
  // Add tools from lessons (stored as strings)
  if (customLearning.lessons) {
    customLearning.lessons.forEach(lesson => {
      if (lesson.tools) {
        lesson.tools.forEach(toolName => {
          // Create a mock tool object for display
          const mockTool: Tool = {
            id: toolName.toLowerCase().replace(/\s+/g, '-'),
            name: toolName,
            icon: '🔧', // Default icon
          };
          allTools.push(mockTool);
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
  
  // Remove duplicates
  const uniqueTools = allTools.filter((tool, index, self) => 
    index === self.findIndex(t => t.id === tool.id)
  );

  const handleCardClick = () => {
    if (onCardClick) {
      onCardClick(customLearning);
    }
  };

  const handleInstructorClick = (instructor: Instructor, event: React.MouseEvent) => {
    event.stopPropagation();
    if (onInstructorClick) {
      onInstructorClick(instructor);
    }
  };

  const handleToolClick = (tool: Tool, event: React.MouseEvent) => {
    event.stopPropagation();
    if (onToolClick) {
      onToolClick(tool);
    }
  };

  return (
    <div
      className={className}
      style={{
        backgroundColor: colors.white,
        borderRadius: radii.xl,
        boxShadow: shadows.lg,
        border: `1px solid ${colors.gray[100]}`,
        overflow: 'hidden',
        display: 'flex',
        transition: 'all 0.3s ease',
        cursor: onCardClick ? 'pointer' : 'default',
        ...style,
      }}
      onClick={handleCardClick}
      onMouseEnter={(e) => {
        if (onCardClick) {
          e.currentTarget.style.boxShadow = shadows['2xl'];
          e.currentTarget.style.transform = 'translateY(-2px)';
        }
      }}
      onMouseLeave={(e) => {
        if (onCardClick) {
          e.currentTarget.style.boxShadow = shadows.lg;
          e.currentTarget.style.transform = 'translateY(0)';
        }
      }}
    >
      {/* Image Section */}
      <div
        style={{
          width: '33.333%',
          flexShrink: 0,
          position: 'relative',
          overflow: 'hidden',
          minHeight: '200px',
        }}
      >
        <img
          src={displayImage}
          alt={displayTitle}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={(e) => {
            if (onCardClick) {
              e.currentTarget.style.transform = 'scale(1.1)';
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        />
        
        {/* Gradient Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.2), transparent)',
          }}
        />
        
        {/* Index Display */}
        <div
          style={{
            position: 'absolute',
            top: spacing[4],
            left: spacing[4],
          }}
        >
          <span
            style={{
              fontSize: '2.25rem', // text-4xl
              fontFamily: typography.fontFamily.sans,
              fontWeight: 600, // font-semibold
              color: colors.white,
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
            }}
          >
            {String(classroomItem.position || 1).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Content Section */}
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
        <div>
          {/* Title */}
          <div style={{ marginBottom: spacing[3] }}>
            {customLearning.slug ? (
              <Button
                variant="text"
                style={{
                  padding: 0,
                  textAlign: 'left',
                  justifyContent: 'flex-start',
                  fontSize: typography.fontSize.lg,
                  fontWeight: typography.fontWeight.semiBold,
                  color: colors.gray[900],
                  textDecoration: 'none',
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleCardClick();
                }}
              >
                {displayTitle}
              </Button>
            ) : (
              <Typography
                variant="h3"
                weight="semiBold"
                style={{
                  color: colors.gray[900],
                  marginBottom: 0,
                }}
              >
                {displayTitle}
              </Typography>
            )}
          </div>

          {/* Description */}
          <Typography
            variant="body"
            style={{
              color: colors.gray[600],
              marginBottom: spacing[4],
              lineHeight: 1.5,
            }}
          >
            {displayDescription}
          </Typography>

          {/* Instructors Row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: spacing[2],
              marginBottom: spacing[2],
            }}
          >
            {visibleInstructors.map((instructor) => (
              <div
                key={instructor.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: onInstructorClick ? 'pointer' : 'default',
                }}
                onClick={(e) => handleInstructorClick(instructor, e)}
              >
                <Avatar
                  src={instructor.avatarUrl}
                  alt={instructor.name}
                  size="sm"
                  style={{ marginRight: spacing[1] }}
                />
                <Typography
                  variant="caption"
                  style={{
                    color: colors.gray[600],
                    fontSize: typography.fontSize.xs,
                  }}
                >
                  {instructor.name}
                </Typography>
              </div>
            ))}
            {overflowCount > 0 && (
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: `${spacing[1]} ${spacing[2]}`,
                  borderRadius: radii.full,
                  backgroundColor: colors.gray[100],
                  color: colors.gray[600],
                  fontSize: typography.fontSize.xs,
                  fontWeight: typography.fontWeight.medium,
                }}
              >
                +{overflowCount}
              </span>
            )}
          </div>

          {/* Tools Row */}
          {uniqueTools.length > 0 && (
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: spacing[1],
                marginBottom: spacing[2],
              }}
            >
              {uniqueTools.slice(0, 4).map((tool) => (
                <button
                  key={tool.id}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: `${spacing[1]} ${spacing[2]}`,
                    borderRadius: radii.md,
                    backgroundColor: colors.gray[50],
                    border: `1px solid ${colors.gray[200]}`,
                    color: colors.gray[700],
                    fontSize: typography.fontSize.xs,
                    fontWeight: typography.fontWeight.medium,
                    cursor: onToolClick ? 'pointer' : 'default',
                    transition: 'all 0.2s ease',
                  }}
                  onClick={(e) => handleToolClick(tool, e)}
                  onMouseEnter={(e) => {
                    if (onToolClick) {
                      e.currentTarget.style.backgroundColor = colors.gray[100];
                      e.currentTarget.style.borderColor = colors.gray[300];
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = colors.gray[50];
                    e.currentTarget.style.borderColor = colors.gray[200];
                  }}
                >
                  {tool.icon && <span style={{ marginRight: spacing[1] }}>{tool.icon}</span>}
                  {tool.name}
                </button>
              ))}
              {uniqueTools.length > 4 && (
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: `${spacing[1]} ${spacing[2]}`,
                    borderRadius: radii.md,
                    backgroundColor: colors.gray[100],
                    color: colors.gray[600],
                    fontSize: typography.fontSize.xs,
                    fontWeight: typography.fontWeight.medium,
                  }}
                >
                  +{uniqueTools.length - 4}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: spacing[2],
          }}
        >
          {/* Duration */}
          <Typography
            variant="caption"
            style={{
              color: colors.gray[500],
              fontSize: typography.fontSize.xs,
            }}
          >
            {customLearning.duration}
          </Typography>

          {/* Category */}
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: `${spacing[1]} ${spacing[2]}`,
              borderRadius: radii.md,
              backgroundColor: colors.secondary,
              color: colors.white,
              fontSize: typography.fontSize.xs,
              fontWeight: typography.fontWeight.semiBold,
            }}
          >
            TRILHA
          </span>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default CriaCustomLearningLessonCard;
