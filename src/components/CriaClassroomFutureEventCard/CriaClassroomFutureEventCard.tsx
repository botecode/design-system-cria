import React, { useState, useEffect, useCallback } from 'react';
import { Calendar } from 'phosphor-react';
import { colors, spacing, radii, shadows, typography } from '../../tokens';
import { Typography } from '../Typography';
import { Button } from '../Button';

export interface ClassroomEvent {
  id: string;
  name: string;
  description?: string;
  startDate: string | Date;
  duration?: string;
  eventLink?: string;
  gcalendarUrl?: string;
}

export interface ClassroomItem {
  id: string;
  position?: number;
  customTitle?: string;
  customSubtitle?: string;
  imageUrl?: string;
}

export interface CriaClassroomFutureEventCardProps extends React.HTMLAttributes<HTMLDivElement> {
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
   * Callback when calendar button is clicked
   */
  onCalendarClick?: (event: ClassroomEvent) => void;
  
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
 * CriaClassroomFutureEventCard - A future event card with countdown timer
 * 
 * Features:
 * - Horizontal layout with event image and countdown on the left
 * - Event details and information on the right
 * - Live countdown timer with days, hours, and minutes
 * - Beautiful gradient backgrounds and overlays
 * - Calendar integration button
 * - Live status indicator
 * 
 * @example
 * ```tsx
 * <CriaClassroomFutureEventCard
 *   event={{
 *     id: '1',
 *     name: 'React Workshop',
 *     description: 'Learn React fundamentals',
 *     startDate: '2024-12-25T14:00:00Z',
 *     duration: '2H',
 *     eventLink: '/events/react-workshop',
 *     gcalendarUrl: 'https://calendar.google.com/event'
 *   }}
 *   classroomItem={{
 *     id: '1',
 *     position: 1,
 *     imageUrl: '/images/react-workshop.jpg'
 *   }}
 *   onEventClick={(event) => console.log('Event clicked:', event)}
 *   onCalendarClick={(event) => console.log('Calendar clicked:', event)}
 * />
 * ```
 */
export const CriaClassroomFutureEventCard: React.FC<CriaClassroomFutureEventCardProps> = ({
  event,
  classroomItem,
  onEventClick,
  onCalendarClick,
  className = '',
  style,
  ...props
}) => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
  }>({ days: 0, hours: 0, minutes: 0 });

  const [isLive, setIsLive] = useState(false);

  // Calculate time remaining
  const calculateTimeLeft = useCallback(() => {
    const eventDate = new Date(event.startDate);
    const now = new Date();
    const difference = eventDate.getTime() - now.getTime();

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

      setTimeLeft({ days, hours, minutes });
      setIsLive(false);
    } else {
      setTimeLeft({ days: 0, hours: 0, minutes: 0 });
      setIsLive(true);
    }
  }, [event.startDate]);

  // Update countdown every minute
  useEffect(() => {
    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 60000); // Update every minute
    return () => clearInterval(interval);
  }, [calculateTimeLeft]);

  const handleEventClick = useCallback(() => {
    onEventClick?.(event);
  }, [event, onEventClick]);

  const handleCalendarClick = useCallback(() => {
    onCalendarClick?.(event);
  }, [event, onCalendarClick]);

  const title = classroomItem.customTitle || event.name;
  const description = classroomItem.customSubtitle || event.description || '';
  const eventDate = new Date(event.startDate);
  const formattedDate = eventDate.toLocaleDateString('pt-BR', { 
    day: '2-digit', 
    month: 'short' 
  });
  const formattedTime = eventDate.toLocaleTimeString('pt-BR', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: false 
  });

  const cardClasses = [
    'cria-classroom-future-event-card',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div
      className={cardClasses}
      style={{
        backgroundColor: colors.white,
        borderRadius: radii.lg,
        boxShadow: shadows.lg,
        overflow: 'hidden',
        display: 'flex',
        border: `1px solid ${colors.gray[100]}`,
        minHeight: '200px',
        ...style,
      }}
      data-event-id={event.id}
      data-classroom-item-id={classroomItem.id}
      {...props}
    >
      {/* Left Section - Event Image with Countdown */}
      <div
        style={{
          width: '33.333%',
          flexShrink: 0,
          position: 'relative',
          overflow: 'hidden',
          minHeight: '200px',
          padding: spacing[8],
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        {/* Background Image or Gradient */}
        {classroomItem.imageUrl ? (
          <img
            src={classroomItem.imageUrl}
            alt={title}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        ) : null}

        {/* Fallback Gradient Background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 50%, #14b8a6 100%)',
          }}
        />

        {/* Aquamarine Overlay with Blur Effect */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(0, 221, 185, 0.6) 0%, rgba(0, 123, 122, 0.6) 100%)',
            backdropFilter: 'blur(12px)',
          }}
        />

        {/* Background Decorations */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.3 }}>
          {/* Top right highlight */}
          <div
            style={{
              position: 'absolute',
              top: '-40px',
              right: '-40px',
              width: '128px',
              height: '128px',
              background: colors.white,
              borderRadius: '50%',
              filter: 'blur(32px)',
            }}
          />
          {/* Bottom left highlight */}
          <div
            style={{
              position: 'absolute',
              bottom: '-20px',
              left: '-20px',
              width: '80px',
              height: '80px',
              background: '#00ddb9',
              borderRadius: '50%',
              filter: 'blur(24px)',
            }}
          />
          {/* Center highlight */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '96px',
              height: '96px',
              background: 'rgba(255, 255, 255, 0.4)',
              borderRadius: '50%',
              filter: 'blur(16px)',
            }}
          />
          {/* Top left subtle highlight */}
          <div
            style={{
              position: 'absolute',
              top: spacing[4],
              left: spacing[4],
              width: '64px',
              height: '64px',
              background: 'rgba(0, 221, 185, 0.3)',
              borderRadius: '50%',
              filter: 'blur(12px)',
            }}
          />
          {/* Bottom right accent */}
          <div
            style={{
              position: 'absolute',
              bottom: spacing[4],
              right: spacing[4],
              width: '48px',
              height: '48px',
              background: 'rgba(255, 255, 255, 0.5)',
              borderRadius: '50%',
              filter: 'blur(8px)',
            }}
          />
        </div>

        {/* Event Number */}
        <div style={{ position: 'relative', zIndex: 10 }}>
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
              letterSpacing: '0.1em',
            }}
          >
            Este evento acontecerá em
          </Typography>
        </div>

        {/* Countdown Timer */}
        <div style={{ position: 'relative', zIndex: 10 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              marginBottom: spacing[1],
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <Typography
                variant="h2"
                style={{
                  fontSize: '32px',
                  fontFamily: typography.fontFamily.primary,
                  fontWeight: typography.fontWeight.bold,
                  color: colors.white,
                  lineHeight: 1,
                }}
              >
                {String(timeLeft.days).padStart(2, '0')}
              </Typography>
              <Typography
                variant="caption"
                style={{
                  fontSize: '12px',
                  fontFamily: typography.fontFamily.primary,
                  fontWeight: typography.fontWeight.medium,
                  color: colors.white,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                dias
              </Typography>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Typography
                variant="h2"
                style={{
                  fontSize: '32px',
                  fontFamily: typography.fontFamily.primary,
                  fontWeight: typography.fontWeight.bold,
                  color: colors.white,
                  lineHeight: 1,
                }}
              >
                {String(timeLeft.hours).padStart(2, '0')}
              </Typography>
              <Typography
                variant="caption"
                style={{
                  fontSize: '12px',
                  fontFamily: typography.fontFamily.primary,
                  fontWeight: typography.fontWeight.medium,
                  color: colors.white,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                horas
              </Typography>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Typography
                variant="h2"
                style={{
                  fontSize: '32px',
                  fontFamily: typography.fontFamily.primary,
                  fontWeight: typography.fontWeight.bold,
                  color: colors.white,
                  lineHeight: 1,
                }}
              >
                {String(timeLeft.minutes).padStart(2, '0')}
              </Typography>
              <Typography
                variant="caption"
                style={{
                  fontSize: '12px',
                  fontFamily: typography.fontFamily.primary,
                  fontWeight: typography.fontWeight.medium,
                  color: colors.white,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                min
              </Typography>
            </div>
          </div>
        </div>

        {/* Live Button */}
        <div style={{ position: 'relative', zIndex: 10, display: 'flex', justifyContent: 'center' }}>
          <div
            style={{
              padding: `${spacing[1]} ${spacing[4]}`,
              border: `2px solid ${colors.white}`,
              borderRadius: radii.full,
              color: colors.white,
              fontFamily: typography.fontFamily.primary,
              fontWeight: typography.fontWeight.medium,
              fontSize: '14px',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}
          >
            Ao Vivo
          </div>
        </div>
      </div>

      {/* Right Section - Content */}
      <div
        style={{
          padding: `${spacing[8]} ${spacing[8]} ${spacing[8]} ${spacing[8]}`,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '66.667%',
          minHeight: '200px',
        }}
      >
        {/* Event Title and Description */}
        <div style={{ marginBottom: spacing[4] }}>
          <Typography
            variant="h2"
            style={{
              color: colors.primary,
              fontFamily: typography.fontFamily.primary,
              fontWeight: typography.fontWeight.bold,
              fontSize: '24px',
              lineHeight: 1.2,
              marginBottom: spacing[2],
              cursor: 'pointer',
              textDecoration: 'none',
            }}
            onClick={handleEventClick}
          >
            {title}
          </Typography>
          <Typography
            variant="body"
            style={{
              color: colors.gray[600],
              fontSize: '16px',
              lineHeight: 1.5,
            }}
          >
            {description}
          </Typography>
        </div>

        {/* Event Details */}
        <div
          style={{
            display: 'flex',
            gap: spacing[8],
            marginBottom: spacing[6],
          }}
        >
          <div>
            <Typography
              variant="caption"
              style={{
                fontFamily: typography.fontFamily.primary,
                fontWeight: typography.fontWeight.bold,
                color: colors.primary,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: spacing[1],
              }}
            >
              Data
            </Typography>
            <Typography
              variant="body"
              style={{
                fontSize: '18px',
                fontFamily: typography.fontFamily.primary,
                fontWeight: typography.fontWeight.medium,
                color: colors.primary,
              }}
            >
              {formattedDate}
            </Typography>
          </div>
          <div>
            <Typography
              variant="caption"
              style={{
                fontFamily: typography.fontFamily.primary,
                fontWeight: typography.fontWeight.bold,
                color: colors.primary,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: spacing[1],
              }}
            >
              Horário
            </Typography>
            <Typography
              variant="body"
              style={{
                fontSize: '18px',
                fontFamily: typography.fontFamily.primary,
                fontWeight: typography.fontWeight.medium,
                color: colors.primary,
              }}
            >
              {formattedTime}
            </Typography>
          </div>
          <div>
            <Typography
              variant="caption"
              style={{
                fontFamily: typography.fontFamily.primary,
                fontWeight: typography.fontWeight.bold,
                color: colors.primary,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: spacing[1],
              }}
            >
              Duração
            </Typography>
            <Typography
              variant="body"
              style={{
                fontSize: '18px',
                fontFamily: typography.fontFamily.primary,
                fontWeight: typography.fontWeight.medium,
                color: colors.primary,
              }}
            >
              {event.duration || '2H'}
            </Typography>
          </div>
        </div>

        {/* Calendar Button */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: spacing[4] }}>
          {event.gcalendarUrl ? (
            <Button
              variant="primary"
              onClick={handleCalendarClick}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: spacing[1],
              }}
            >
              <Calendar size={16} />
              SALVAR NA AGENDA
            </Button>
          ) : (
            <Typography
              variant="caption"
              style={{
                color: colors.gray[500],
                fontFamily: typography.fontFamily.primary,
              }}
            >
              Link da agenda não disponível
            </Typography>
          )}
        </div>
      </div>
    </div>
  );
};

