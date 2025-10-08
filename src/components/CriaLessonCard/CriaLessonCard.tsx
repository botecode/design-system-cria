import React, { useState, useCallback } from 'react';
import { Clock, User } from 'phosphor-react';
import { colors, spacing, radii, shadows, typography } from '../../tokens';
import { Avatar } from '../Avatar';
import { CriaTextBody1, CriaTextBody2 } from '../TextTokens';

export interface Lesson {
  id?: string;
  slug: string;
  title: string;
  description?: string;
  thumbnailUrl?: string;
  duration?: string;
  category?: string;
  toolIcon?: string;
  toolIconText?: string;
  instructor?: {
    id: string;
    name: string;
    avatarUrl?: string;
  };
}

export interface CriaLessonCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Lesson data object
   */
  lesson: Lesson;
  
  /**
   * Callback when lesson is clicked
   */
  onLessonClick?: (lesson: Lesson) => void;
  
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
 * CriaLessonCard - A detailed lesson card component
 * 
 * Features:
 * - Large thumbnail image (140px height)
 * - Tool icon overlay
 * - Title with description
 * - Duration with clock icon
 * - Instructor avatar
 * - Hover effects and transitions
 * 
 * @example
 * ```tsx
 * <CriaLessonCard
 *   lesson={{
 *     slug: 'react-basics',
 *     title: 'Introduction to React',
 *     description: 'Learn the fundamentals of React development',
 *     thumbnailUrl: '/images/react-thumb.jpg',
 *     duration: '15min',
 *     category: 'Frontend',
 *     toolIconText: 'AI',
 *     instructor: {
 *       id: '1',
 *       name: 'John Doe',
 *       avatarUrl: '/avatars/john.jpg'
 *     }
 *   }}
 *   onLessonClick={(lesson) => console.log('Lesson clicked:', lesson)}
 * />
 * ```
 */
export const CriaLessonCard: React.FC<CriaLessonCardProps> = ({
  lesson,
  onLessonClick,
  className = '',
  style,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleCardClick = useCallback(() => {
    onLessonClick?.(lesson);
  }, [lesson, onLessonClick]);

  const handleInstructorClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click from firing
    // Could add instructor click handler here if needed
  }, []);

  const cardClasses = [
    'cria-lesson-card',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div
      className={cardClasses}
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        width: '100%',
        height: '320px',
        background: colors.white,
        borderRadius: radii.lg,
        boxShadow: shadows.lg,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        overflow: 'hidden',
        ...style,
      }}
      data-lesson-id={lesson.id}
      data-lesson-slug={lesson.slug}
      {...props}
    >
      {/* Background Image Section (Top 140px) */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '140px',
          background: colors.gray[100],
          borderRadius: `${radii.lg} ${radii.lg} 0 0`,
          overflow: 'hidden',
        }}
      >
        <img
          src={lesson.thumbnailUrl || "https://cdn.prod.website-files.com/65870ed41744e63eb43fd116/6876c357bfbaf5d573e3dd27_AU-409Thumb2.png"}
          alt={lesson.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.3s ease-out',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            opacity: imageLoaded ? 1 : 0,
          }}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageLoaded(true)}
        />
      </div>

        {/* Tool Icon Overlay */}
      {lesson.toolIconText && (
        <div
          style={{
            position: 'absolute',
            left: spacing[4],
            top: '120px',
            width: '48px',
            height: '48px',
            zIndex: 20,
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              background: colors.secondary,
              borderRadius: radii.md,
              boxShadow: shadows.md,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: colors.text.primary,
              fontWeight: typography.fontWeight.bold,
              fontSize: '14px',
            }}
          >
            <CriaTextBody2>{lesson.toolIconText}</CriaTextBody2>
          </div>
        </div>
      )}

      {/* Text Section with Divider */}
      <div
        style={{
          position: 'absolute',
          top: '160px',
          left: 0,
          right: 0,
          background: colors.white,
          padding: `${spacing[8]} ${spacing[8]} ${spacing[6]} ${spacing[8]}`,
          height: '134px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          zIndex: 10,
        }}
      >
        {/* Title */}
        <div
          style={{
            color: colors.primary,
            fontFamily: typography.fontFamily.mono,
            fontWeight: typography.fontWeight.semiBold,
            fontSize: '14px',
            lineHeight: 1.4,
            textTransform: 'uppercase',
            marginBottom: spacing[2],
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            minHeight: '2.8em',
          }}
        >
          <CriaTextBody1>{lesson.title}</CriaTextBody1>
        </div>

        {/* Divider */}
        <div
          style={{
            width: '100%',
            height: '1px',
            background: colors.gray[200],
            marginBottom: spacing[2],
          }}
        />

        {/* Description */}
        <div
          style={{
            color: colors.gray[600],
            fontFamily: typography.fontFamily.mono,
            fontWeight: typography.fontWeight.medium,
            fontSize: '12px',
            lineHeight: 1.4,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            minHeight: '3.6em',
          }}
        >
          <CriaTextBody2>
            {lesson.description || "Uma seleção de aulas do CR_IA, escolhidas a dedo para funcionarem como seu kit de sobrevivência nos primeiros passos do mundo de IA"}
          </CriaTextBody2>
        </div>
      </div>

      {/* Bottom Section (Duration and Avatar) */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '46px',
          background: colors.white,
          borderRadius: `0 0 ${radii.lg} ${radii.lg}`,
          padding: `${spacing[2]} ${spacing[8]}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          zIndex: 10,
          borderTop: `1px solid ${colors.gray[200]}`,
        }}
      >
        {/* Duration with clock icon */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Clock size={16} color={colors.gray[600]} style={{ marginRight: spacing[1] }} />
          <div
            style={{
              color: colors.gray[700],
              fontFamily: typography.fontFamily.mono,
              fontWeight: typography.fontWeight.regular,
              fontSize: '12px',
              textTransform: 'uppercase',
            }}
          >
            <CriaTextBody2>{lesson.duration || '--'}</CriaTextBody2>
          </div>
        </div>

        {/* User avatar */}
        <div style={{ width: '25px', height: '25px' }}>
          {lesson.instructor ? (
            <div
              onClick={handleInstructorClick}
              style={{ cursor: 'pointer' }}
            >
              <Avatar
                src={lesson.instructor.avatarUrl}
                alt={lesson.instructor.name}
                size="sm"
                name={lesson.instructor.name}
                style={{
                  width: '25px',
                  height: '25px',
                  border: `2px solid ${colors.white}`,
                  boxShadow: shadows.sm,
                }}
              />
            </div>
          ) : (
            <div
              style={{
                width: '25px',
                height: '25px',
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <User size={16} color={colors.white} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
