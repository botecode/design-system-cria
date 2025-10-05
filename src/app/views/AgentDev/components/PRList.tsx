import React from 'react';
import { Typography } from '../../../../components/Typography';
import { Badge } from '../../../../components/Badge';
import { Button } from '../../../../components/Button';
import { GitHubPR } from '../../hooks/useGitHubPRs';
import { GitBranch, Calendar, User, ArrowSquareOut, CheckCircle, XCircle, Clock } from 'phosphor-react';
import { spacing } from '../../../../tokens';
import './PRList.css';

export interface PRListProps {
  prs: GitHubPR[];
  title: string;
  emptyMessage: string;
  loading?: boolean;
  onRefresh?: () => void;
  className?: string;
}

export const PRList: React.FC<PRListProps> = ({
  prs,
  title,
  emptyMessage,
  loading = false,
  onRefresh,
  className = ''
}) => {
  const getStatusIcon = (state: string) => {
    switch (state) {
      case 'merged':
        return <CheckCircle size={16} className="pr-list__status-icon pr-list__status-icon--merged" />;
      case 'closed':
        return <XCircle size={16} className="pr-list__status-icon pr-list__status-icon--closed" />;
      case 'open':
        return <Clock size={16} className="pr-list__status-icon pr-list__status-icon--open" />;
      default:
        return <Clock size={16} className="pr-list__status-icon" />;
    }
  };

  const getStatusBadge = (state: string) => {
    switch (state) {
      case 'merged':
        return <Badge variant="success" size="sm">Merged</Badge>;
      case 'closed':
        return <Badge variant="danger" size="sm">Closed</Badge>;
      case 'open':
        return <Badge variant="info" size="sm">Open</Badge>;
      default:
        return <Badge variant="secondary" size="sm">{state}</Badge>;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getLabelBadge = (label: { name: string; color: string }) => {
    const isAgentLabel = ['agent-create', 'agent-fix'].includes(label.name);
    return (
      <Badge
        key={label.name}
        variant={isAgentLabel ? 'primary' : 'secondary'}
        size="sm"
        style={{
          backgroundColor: isAgentLabel ? undefined : `#${label.color}20`,
          color: isAgentLabel ? undefined : `#${label.color}`,
          borderColor: `#${label.color}40`
        }}
      >
        {label.name}
      </Badge>
    );
  };

  if (loading) {
    return (
      <div className={`pr-list ${className}`}>
        <div className="pr-list__header">
          <Typography variant="h4" weight="medium">
            {title}
          </Typography>
          {onRefresh && (
            <Button variant="ghost" size="sm" onClick={onRefresh} disabled>
              <Clock size={16} />
              Atualizando...
            </Button>
          )}
        </div>
        <div className="pr-list__loading">
          <div className="pr-list__loading-content">
            <div className="pr-list__loading-spinner">
              <Clock size={24} className="pr-list__spinner-icon" />
            </div>
            <Typography variant="body" color="muted">
              Carregando PRs...
            </Typography>
          </div>
        </div>
      </div>
    );
  }

  if (prs.length === 0) {
    return (
      <div className={`pr-list ${className}`}>
        <div className="pr-list__header">
          <Typography variant="h4" weight="medium">
            {title}
          </Typography>
          {onRefresh && (
            <Button variant="ghost" size="sm" onClick={onRefresh}>
              <Clock size={16} />
              Atualizar
            </Button>
          )}
        </div>
        <div className="pr-list__empty">
          <Typography variant="body" color="muted">
            {emptyMessage}
          </Typography>
        </div>
      </div>
    );
  }

  return (
    <div className={`pr-list ${className}`}>
      <div className="pr-list__header">
        <Typography variant="h4" weight="medium">
          {title} ({prs.length})
        </Typography>
        {onRefresh && (
          <Button variant="ghost" size="sm" onClick={onRefresh}>
            <Clock size={16} />
            Atualizar
          </Button>
        )}
      </div>
      
      <div className="pr-list__items">
        {prs.map((pr) => (
          <div key={pr.id} className="pr-list__item">
            <div className="pr-list__item-header">
              <div className="pr-list__item-title">
                {getStatusIcon(pr.state)}
                <Typography variant="h5" weight="medium" className="pr-list__item-title-text">
                  {pr.title}
                </Typography>
              </div>
              <div className="pr-list__item-actions">
                {getStatusBadge(pr.state)}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => window.open(pr.html_url, '_blank')}
                  title="Ver no GitHub"
                >
                  <ArrowSquareOut size={16} />
                </Button>
              </div>
            </div>
            
            {pr.body && (
              <div className="pr-list__item-body">
                <Typography variant="body" color="muted">
                  {pr.body.length > 200 ? `${pr.body.substring(0, 200)}...` : pr.body}
                </Typography>
              </div>
            )}
            
            <div className="pr-list__item-labels">
              {pr.labels.map(getLabelBadge)}
            </div>
            
            <div className="pr-list__item-meta">
              <div className="pr-list__item-meta-item">
                <User size={14} />
                <Typography variant="caption" color="muted">
                  {pr.user.login}
                </Typography>
              </div>
              <div className="pr-list__item-meta-item">
                <GitBranch size={14} />
                <Typography variant="caption" color="muted">
                  {pr.head.ref} → {pr.base.ref}
                </Typography>
              </div>
              <div className="pr-list__item-meta-item">
                <Calendar size={14} />
                <Typography variant="caption" color="muted">
                  {formatDate(pr.created_at)}
                </Typography>
              </div>
              {pr.merged_at && (
                <div className="pr-list__item-meta-item">
                  <CheckCircle size={14} />
                  <Typography variant="caption" color="muted">
                    Merged: {formatDate(pr.merged_at)}
                  </Typography>
                </div>
              )}
              {pr.closed_at && !pr.merged_at && (
                <div className="pr-list__item-meta-item">
                  <XCircle size={14} />
                  <Typography variant="caption" color="muted">
                    Closed: {formatDate(pr.closed_at)}
                  </Typography>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PRList;
