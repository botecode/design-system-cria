import React from 'react';
import { Typography } from '../../Typography';
import { Spinner, CheckCircle, XCircle, Clock } from 'phosphor-react';
import { spacing } from '../../../tokens';
import './LoadingState.css';

export interface LoadingStateProps {
  type?: 'spinner' | 'dots' | 'pulse' | 'skeleton';
  size?: 'sm' | 'md' | 'lg';
  message?: string;
  progress?: number;
  status?: 'loading' | 'success' | 'error' | 'idle';
  className?: string;
}

export const LoadingState: React.FC<LoadingStateProps> = ({
  type = 'spinner',
  size = 'md',
  message = 'Carregando...',
  progress,
  status = 'loading',
  className = ''
}) => {
  const getStatusIcon = () => {
    switch (status) {
      case 'success':
        return <CheckCircle size={24} className="loading-state__icon loading-state__icon--success" />;
      case 'error':
        return <XCircle size={24} className="loading-state__icon loading-state__icon--error" />;
      case 'loading':
        return <Clock size={24} className="loading-state__icon loading-state__icon--loading" />;
      default:
        return null;
    }
  };

  const getStatusMessage = () => {
    switch (status) {
      case 'success':
        return 'Concluído!';
      case 'error':
        return 'Erro ao carregar';
      case 'loading':
        return message;
      default:
        return message;
    }
  };

  const renderSpinner = () => (
    <div className={`loading-state__spinner loading-state__spinner--${size}`}>
      <Spinner size={size === 'sm' ? 16 : size === 'lg' ? 32 : 24} />
    </div>
  );

  const renderDots = () => (
    <div className={`loading-state__dots loading-state__dots--${size}`}>
      <div className="loading-state__dot"></div>
      <div className="loading-state__dot"></div>
      <div className="loading-state__dot"></div>
    </div>
  );

  const renderPulse = () => (
    <div className={`loading-state__pulse loading-state__pulse--${size}`}>
      <div className="loading-state__pulse-circle"></div>
    </div>
  );

  const renderSkeleton = () => (
    <div className={`loading-state__skeleton loading-state__skeleton--${size}`}>
      <div className="loading-state__skeleton-line"></div>
      <div className="loading-state__skeleton-line loading-state__skeleton-line--short"></div>
      <div className="loading-state__skeleton-line loading-state__skeleton-line--medium"></div>
    </div>
  );

  const renderLoader = () => {
    switch (type) {
      case 'dots':
        return renderDots();
      case 'pulse':
        return renderPulse();
      case 'skeleton':
        return renderSkeleton();
      default:
        return renderSpinner();
    }
  };

  return (
    <div className={`loading-state loading-state--${size} ${className}`}>
      <div className="loading-state__content">
        {status === 'loading' && renderLoader()}
        {status !== 'loading' && getStatusIcon()}
        
        <Typography 
          variant={size === 'sm' ? 'caption' : 'body'} 
          color={status === 'error' ? 'danger' : status === 'success' ? 'success' : 'muted'}
          className="loading-state__message"
        >
          {getStatusMessage()}
        </Typography>
        
        {progress !== undefined && status === 'loading' && (
          <div className="loading-state__progress">
            <div className="loading-state__progress-bar">
              <div 
                className="loading-state__progress-fill"
                style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
              ></div>
            </div>
            <Typography variant="caption" color="muted">
              {Math.round(progress)}%
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoadingState;
