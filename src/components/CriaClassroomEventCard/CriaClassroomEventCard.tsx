import React, { useState, useCallback } from 'react';
import { Calendar } from 'phosphor-react';
import { colors, spacing, radii, shadows, typography } from '../../tokens';
import { Typography } from '../Typography';
import { Button } from '../Button';

export interface ClassroomEvent {
  id?: string;
  slug?: string;
  name: string;
  description?: string;
  startDate?: string | Date;
  imageUrl?: string;
}

export interface ClassroomItem {
  id: string;
  position?: number;
  customTitle?: string;
  customSubtitle?: string;
  imageUrl?: string;
}

export interface CriaClassroomEventCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Event data object
   */
  event: ClassroomEvent;
  
  /**
   * Classroom item data
   */
  classroomItem: ClassroomItem;
  
  /**
   * Callback when event is clicked
   */
  onEventClick?: (event: ClassroomEvent) => void;
  
  /**
   * Callback when recording button is clicked
   */
  onRecordingClick?: (event: ClassroomEvent) => void;
  
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
 * CriaClassroomEventCard - A past event card with recording access
 * 
 * Features:
 * - Horizontal layout with event image on the left
 * - Event details and information on the right
 * - Event position display with large numbering
 * - Date and time information with timezone awareness
 * - Recording access button for past events
 * - Hover effects and smooth transitions
 * 
 * @example
 * ```tsx
 * <CriaClassroomEventCard
 *   event={{
 *     id: '1',
 *     slug: 'react-workshop',
 *     name: 'React Workshop',
 *     description: 'Learn React fundamentals',
 *     startDate: '2024-01-15T14:00:00Z',
 *     imageUrl: '/images/react-workshop.jpg'
 *   }}
 *   classroomItem={{
 *     id: '1',
 *     position: 1,
 *     customTitle: 'React Workshop - Advanced',
 *     customSubtitle: 'Master React hooks and context'
 *   }}
 *   onEventClick={(event) => console.log('Event clicked:', event)}
 *   onRecordingClick={(event) => console.log('Recording clicked:', event)}
 * />
 * ```
 */
export const CriaClassroomEventCard: React.FC<CriaClassroomEventCardProps> = ({
  event,
  classroomItem,
  onEventClick,
  onRecordingClick,
  className = '',
  style,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleEventClick = useCallback(() => {
    onEventClick?.(event);
  }, [event, onEventClick]);

  const handleRecordingClick = useCallback(() => {
    onRecordingClick?.(event);
  }, [event, onRecordingClick]);

  // Determine image source with fallback
  const imageSource = event.imageUrl || classroomItem.imageUrl || '/src/assets/cria_emblem_home.png';

  const title = classroomItem.customTitle || event.name;
  const description = classroomItem.customSubtitle || event.description || '';

  // Format date and time
  let formattedDate = 'Data não definida';
  let formattedTime = '';
  let timezoneInfo = '';
  let isPastEvent = false;

  if (event.startDate) {
    const eventDate = new Date(event.startDate);
    const now = new Date();
    isPastEvent = eventDate < now;

    formattedDate = eventDate.toLocaleDateString('pt-BR', { 
      day: '2-digit', 
      month: 'short' 
    });
    
    formattedTime = eventDate.toLocaleTimeString('pt-BR', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });

    // Timezone info
    timezoneInfo = 'BRT (UTC−03:00)';
  }

  const cardClasses = [
    'cria-classroom-event-card',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div
      className={cardClasses}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: colors.white,
        borderRadius: radii.xl,
        boxShadow: shadows.lg,
        overflow: 'hidden',
        display: 'flex',
        border: `1px solid ${colors.gray[100]}`,
        height: '240px',
        transition: 'all 0.3s ease',
        ...style,
      }}
      data-event-id={event.id}
      data-classroom-item-id={classroomItem.id}
      {...props}
    >
      {/* Left Section - Event Image */}
      <div
        style={{
          width: '33.333%',
          flexShrink: 0,
          position: 'relative',
          overflow: 'hidden',
        }}
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
        
        {/* Event position display */}
        <div
          style={{
            position: 'absolute',
            top: spacing.md,
            left: spacing.md,
          }}
        >
          <Typography
            variant="h1"
            style={{
              fontSize: '32px',
              fontFamily: typography.fontFamily.primary,
              fontWeight: typography.fontWeight.semiBold,
              color: colors.white,
              lineHeight: 1,
            }}
          >
            {String(classroomItem.position || 1).padStart(2, '0')}
          </Typography>
        </div>
      </div>

      {/* Right Section - Content */}
      <div
        style={{
          padding: `${spacing.xs} ${spacing.md} ${spacing.md} ${spacing.md}`,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '66.667%',
        }}
      >
        {/* Event Title and Description */}
        <div>
          <Typography
            variant="h2"
            style={{
              color: colors.primary,
              fontFamily: typography.fontFamily.primary,
              fontWeight: typography.fontWeight.bold,
              fontSize: '20px',
              lineHeight: 1.2,
              marginBottom: spacing.sm,
              cursor: 'pointer',
            }}
            onClick={handleEventClick}
          >
            {title}
          </Typography>

          <Typography
            variant="body"
            style={{
              color: colors.gray[600],
              fontSize: '14px',
              lineHeight: 1.5,
              marginBottom: spacing.md,
            }}
          >
            {description}
          </Typography>

          {/* Event Date row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: spacing.sm,
              marginTop: spacing.md,
            }}
          >
            <Calendar
              size={32}
              color={colors.primary}
              weight="regular"
            />
            
            {event.startDate ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: spacing.sm }}>
                <Typography
                  variant="body"
                  style={{
                    fontSize: '18px',
                    fontFamily: typography.fontFamily.primary,
                    fontWeight: typography.fontWeight.light,
                    color: colors.primary,
                    letterSpacing: '0.05em',
                  }}
                >
                  {formattedDate} • {formattedTime}
                </Typography>
                
                <Typography
                  variant="caption"
                  style={{
                    fontSize: '12px',
                    color: colors.gray[400],
                    fontFamily: typography.fontFamily.primary,
                  }}
                >
                  {timezoneInfo}
                </Typography>
              </div>
            ) : (
              <Typography
                variant="body"
                style={{
                  fontSize: '18px',
                  fontFamily: typography.fontFamily.primary,
                  fontWeight: typography.fontWeight.light,
                  color: colors.primary,
                  letterSpacing: '0.05em',
                }}
              >
                {formattedDate}
              </Typography>
            )}
          </div>
        </div>

        {/* Action Button */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: spacing.xs }}>
          {event.startDate ? (
            isPastEvent ? (
              event.slug ? (
                <Button
                  variant="primary"
                  onClick={handleRecordingClick}
                >
                  VER GRAVAÇÃO
                </Button>
              ) : (
                <Typography
                  variant="caption"
                  style={{
                    color: colors.gray[500],
                    fontFamily: typography.fontFamily.primary,
                    fontSize: '14px',
                  }}
                >
                  Gravação não disponível
                </Typography>
              )
            ) : null
          ) : (
            <Typography
              variant="caption"
              style={{
                color: colors.gray[500],
                fontFamily: typography.fontFamily.primary,
                fontSize: '14px',
              }}
            >
              Data não definida
            </Typography>
          )}
        </div>
      </div>
    </div>
  );
};

