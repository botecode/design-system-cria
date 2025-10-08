import React, { useState } from 'react';
import { Check, Clock, User } from 'phosphor-react';
import { colors, spacing, radii, shadows, typography } from '../../tokens';
import { Avatar } from '../Avatar';
import { Button } from '../Button';
import { CriaTextBody1, CriaTextBody2 } from '../TextTokens';

export interface Lesson {
  id?: string;
  slug: string;
  title: string;
  thumbnailUrl?: string;
  duration?: string;
  videoLength?: string;
  category?: string;
  categories?: string[];
  categoryNames?: string[];
  tools?: string[];
  progress?: number;
  completed?: boolean;
  instructor?: {
    id: string;
    name: string;
    avatarUrl?: string;
  };
  instructors?: {
    id: string;
    name: string;
    avatarUrl?: string;
  }[];
}

export interface CriaLessonCardSmallProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Lesson data object
   */
  lesson: Lesson;
  
  /**
   * Whether the lesson is completed
   */
  completed?: boolean;
  
  /**
   * Whether the lesson is in progress
   */
  inProgress?: boolean;
  
  /**
   * Tool icon URL to display
   */
  toolIconUrl?: string;
  
  /**
   * Callback when lesson is clicked
   */
  onLessonClick?: (lesson: Lesson) => void;
  
  /**
   * Callback when completion status is toggled
   */
  onToggleCompletion?: (lesson: Lesson, completed: boolean) => void;
  
  /**
   * Callback when instructor is clicked
   */
  onInstructorClick?: (instructor: Lesson['instructor']) => void;
  
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
 * Small lesson card component for displaying lesson information in a compact format
 * 
 * @example
 * ```tsx
 * <CriaLessonCardSmall
 *   lesson={{
 *     slug: 'react-basics',
 *     title: 'Introduction to React',
 *     thumbnailUrl: '/images/react-thumb.jpg',
 *     duration: '15min',
 *     category: 'Frontend',
 *     instructor: {
 *       id: '1',
 *       name: 'John Doe',
 *       avatarUrl: '/avatars/john.jpg'
 *     }
 *   }}
 *   completed={false}
 *   onLessonClick={(lesson) => console.log('Lesson clicked:', lesson)}
 *   onToggleCompletion={(lesson, completed) => console.log('Toggle completion:', completed)}
 * />
 * ```
 */
export const CriaLessonCardSmall: React.FC<CriaLessonCardSmallProps> = ({
  lesson,
  completed = false,
  inProgress = false,
  toolIconUrl,
  onLessonClick,
  onToggleCompletion,
  onInstructorClick,
  className = '',
  style,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Extract lesson data with fallbacks
  const lessonId = lesson.id || lesson.slug;
  const thumbnailUrl = lesson.thumbnailUrl || 'https://cdn.prod.website-files.com/65870ed41744e63eb43fd116/6876c357bfbaf5d573e3dd27_AU-409Thumb2.png';
  const duration = lesson.duration || lesson.videoLength || '--';
  
  // Get category with fallback
  const category = lesson.categoryNames?.[0] || 
                  lesson.categories?.[0] || 
                  lesson.category || 
                  'TUTORIAL';

  // Handle lesson click
  const handleLessonClick = () => {
    onLessonClick?.(lesson);
  };

  // Handle completion toggle
  const handleToggleCompletion = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleCompletion?.(lesson, !completed);
  };

  // Handle instructor click
  const handleInstructorClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onInstructorClick?.(lesson.instructor);
  };

  // Build CSS classes
  const classes = [
    'cria-lesson-card-small',
    completed && 'cria-lesson-card-small--completed',
    inProgress && 'cria-lesson-card-small--in-progress',
    className,
  ].filter(Boolean).join(' ');

  // Main card styles
  const cardStyles: React.CSSProperties = {
    backgroundColor: colors.white,
    borderRadius: radii.lg,
    boxShadow: shadows.lg,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '240px',
    height: '320px',
    border: `1px solid ${colors.border.light}`,
    cursor: onLessonClick ? 'pointer' : 'default',
    transition: 'all 0.3s ease',
    position: 'relative',
    ...style,
  };

  // Hover styles
  const hoverStyles: React.CSSProperties = isHovered ? {
    boxShadow: shadows.xl,
    transform: 'translateY(-2px)',
  } : {};

  return (
    <div
      className={classes}
      style={{ ...cardStyles, ...hoverStyles }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleLessonClick}
      data-lesson-id={lessonId}
      data-categories={lesson.categories?.join(',') || ''}
      data-tools={lesson.tools?.join(',') || ''}
      {...props}
    >
      {/* Image Section */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '140px',
        background: `linear-gradient(135deg, ${colors.gray[100]} 0%, ${colors.gray[200]} 100%)`,
        overflow: 'visible',
      }}>
        {/* Thumbnail Image */}
        <img
          src={thumbnailUrl}
          alt={lesson.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.3s ease-out',
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          }}
        />
        
        {/* Gradient Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.2) 0%, transparent 100%)',
        }} />

        {/* Completion Checkbox */}
        <div style={{
          position: 'absolute',
          top: spacing[2],
          right: spacing[2],
          zIndex: 10,
        }}>
          <Button
            variant={completed ? "primary" : "secondary"}
            size="sm"
            onClick={handleToggleCompletion}
            style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              backgroundColor: completed ? colors.secondary : 'transparent',
              borderColor: completed ? colors.secondary : colors.gray[300],
              borderWidth: completed ? '0' : '2px',
              borderStyle: 'solid',
              opacity: completed ? 1 : (isHovered ? 1 : 0),
            }}
            title={completed ? 'Mark as incomplete' : 'Mark as completed'}
            aria-label={completed ? 'Mark as incomplete' : 'Mark as completed'}
          >
            <Check
              size={completed ? 16 : 14}
              color={completed ? colors.white : colors.gray[400]}
              weight="bold"
            />
          </Button>
        </div>

        {/* Tool Icon Overlay */}
        {toolIconUrl && (
          <div style={{
            position: 'absolute',
            bottom: '-20px',
            left: spacing[4],
            zIndex: 30,
          }}>
            <img
              src={toolIconUrl}
              alt="Tool"
              style={{
                width: '56px',
                height: '56px',
                borderRadius: radii.md,
                objectFit: 'cover',
              }}
            />
          </div>
        )}
      </div>

      {/* Content Section */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: `${spacing[2]} ${spacing[4]} ${spacing[4]} ${spacing[4]}`,
        zIndex: 10,
        paddingTop: toolIconUrl ? spacing[6] : spacing[2], // Adjust for tool icon
      }}>
        {/* Title */}
        <div style={{ marginBottom: spacing[2] }}>
          <div
            style={{
              color: colors.text.primary,
              lineHeight: typography.lineHeight.tight,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              minHeight: '2.4em',
            }}
          >
            <CriaTextBody1>{lesson.title}</CriaTextBody1>
          </div>
        </div>

        {/* Category, Duration & Instructor */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[2] }}>
          {/* Category */}
          <div>
            <div
              style={{
                color: colors.primary,
                fontWeight: typography.fontWeight.medium,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              <CriaTextBody2>{category}</CriaTextBody2>
            </div>
          </div>

          {/* Duration & Instructor */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            {/* Duration */}
            <div style={{ display: 'flex', alignItems: 'center', gap: spacing[1] }}>
              <Clock size={12} color={colors.gray[500]} />
              <div
                style={{
                  color: colors.gray[600],
                  fontSize: '12px',
                }}
              >
                <CriaTextBody2>{duration}</CriaTextBody2>
              </div>
            </div>

            {/* Instructor Avatar(s) */}
            <div style={{ 
              width: lesson.instructors && lesson.instructors.length > 0 ? '80px' : '32px', 
              height: '32px', 
              position: 'relative',
              display: 'flex',
              justifyContent: 'flex-end'
            }}>
              {lesson.instructors && lesson.instructors.length > 0 ? (
                // Stacked avatars for multiple instructors
                lesson.instructors.slice(0, 3).map((instructor, index) => (
                  <div
                    key={instructor.id}
                    onClick={() => onInstructorClick?.(instructor)}
                    style={{ 
                      cursor: onInstructorClick ? 'pointer' : 'default',
                      position: 'absolute',
                      right: `${index * 8}px`,
                      zIndex: 3 - index,
                    }}
                  >
                    <Avatar
                      src={instructor.avatarUrl}
                      alt={instructor.name}
                      size="sm"
                      name={instructor.name}
                      style={{
                        width: '32px',
                        height: '32px',
                        border: `2px solid ${colors.white}`,
                        boxShadow: shadows.sm,
                      }}
                    />
                  </div>
                ))
              ) : lesson.instructor ? (
                // Single instructor - aligned to right
                <div
                  onClick={handleInstructorClick}
                  style={{ 
                    cursor: onInstructorClick ? 'pointer' : 'default',
                    position: 'absolute',
                    right: '0px'
                  }}
                >
                  <Avatar
                    src={lesson.instructor.avatarUrl}
                    alt={lesson.instructor.name}
                    size="sm"
                    name={lesson.instructor.name}
                    style={{
                      width: '32px',
                      height: '32px',
                      border: `2px solid ${colors.white}`,
                      boxShadow: shadows.sm,
                    }}
                  />
                </div>
              ) : (
                // Default user icon - aligned to right
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'absolute',
                  right: '0px'
                }}>
                  <User size={16} color={colors.white} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CriaLessonCardSmall;
