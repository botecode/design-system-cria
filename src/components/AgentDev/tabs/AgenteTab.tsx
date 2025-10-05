import React, { useState } from 'react';
import { Typography } from '../../Typography';
import { Button } from '../../Button';
import { Badge } from '../../Badge';
import { PRList } from '../components/PRList';
import { useGitHubPRs } from '../hooks/useGitHubPRs';
import { Refresh, GithubLogo, AlertCircle, CheckCircle, XCircle } from 'phosphor-react';
import { spacing } from '../../../tokens';
import './AgenteTab.css';

export interface AgenteTabProps {
  className?: string;
}

export const AgenteTab: React.FC<AgenteTabProps> = ({ className = '' }) => {
  const [activeSubTab, setActiveSubTab] = useState<'em-andamento' | 'em-producao' | 'recusado'>('em-andamento');
  const { prs, mergedPRs, closedPRs, loading, error, lastUpdated, refreshPRs } = useGitHubPRs();

  const subTabs = [
    {
      id: 'em-andamento' as const,
      label: 'Em Andamento',
      icon: <AlertCircle size={16} />,
      count: prs.length,
      description: 'PRs abertos e em desenvolvimento'
    },
    {
      id: 'em-producao' as const,
      label: 'Em Produção',
      icon: <CheckCircle size={16} />,
      count: mergedPRs.length,
      description: 'PRs merged e em produção'
    },
    {
      id: 'recusado' as const,
      label: 'Recusado',
      icon: <XCircle size={16} />,
      count: closedPRs.length,
      description: 'PRs fechados sem merge'
    }
  ];

  const getCurrentPRs = () => {
    switch (activeSubTab) {
      case 'em-andamento':
        return prs;
      case 'em-producao':
        return mergedPRs;
      case 'recusado':
        return closedPRs;
      default:
        return [];
    }
  };

  const getEmptyMessage = () => {
    switch (activeSubTab) {
      case 'em-andamento':
        return 'Nenhuma tarefa em andamento. Todas as PRs foram processadas!';
      case 'em-producao':
        return 'Nenhuma tarefa em produção ainda. PRs merged aparecerão aqui.';
      case 'recusado':
        return 'Nenhuma tarefa recusada. Todas as PRs foram aceitas!';
      default:
        return 'Nenhuma tarefa encontrada.';
    }
  };

  const formatLastUpdated = () => {
    if (!lastUpdated) return 'Nunca';
    const now = new Date();
    const diff = now.getTime() - lastUpdated.getTime();
    const minutes = Math.floor(diff / 60000);
    
    if (minutes < 1) return 'Agora mesmo';
    if (minutes < 60) return `${minutes} min atrás`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h atrás`;
    const days = Math.floor(hours / 24);
    return `${days}d atrás`;
  };

  return (
    <div className={`agente-tab ${className}`}>
      <div className="agente-tab__header">
        <div className="agente-tab__header-content">
          <Typography variant="h3" weight="semibold" style={{ marginBottom: spacing[2] }}>
            Status do Agente
          </Typography>
          <Typography variant="body" color="muted" style={{ marginBottom: spacing[4] }}>
            Acompanhe o status das suas solicitações de criação e correção.
          </Typography>
          
          <div className="agente-tab__stats">
            <div className="agente-tab__stat">
              <Badge variant="info" size="md">
                {prs.length} Em Andamento
              </Badge>
            </div>
            <div className="agente-tab__stat">
              <Badge variant="success" size="md">
                {mergedPRs.length} Em Produção
              </Badge>
            </div>
            <div className="agente-tab__stat">
              <Badge variant="danger" size="md">
                {closedPRs.length} Recusado
              </Badge>
            </div>
          </div>
        </div>
        
        <div className="agente-tab__header-actions">
          <Button
            variant="outline"
            size="sm"
            onClick={refreshPRs}
            disabled={loading}
            title="Atualizar PRs"
          >
            <Refresh size={16} className={loading ? 'agente-tab__refresh-icon--spinning' : ''} />
            Atualizar
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => window.open('https://github.com/fernandofeitosa/design-system-cria/pulls', '_blank')}
            title="Ver no GitHub"
          >
            <GithubLogo size={16} />
            GitHub
          </Button>
        </div>
      </div>

      {error && (
        <div className="agente-tab__error">
          <AlertCircle size={20} />
          <div>
            <Typography variant="h5" weight="medium">
              Erro ao carregar PRs
            </Typography>
            <Typography variant="body" color="muted">
              {error}
            </Typography>
          </div>
          <Button variant="outline" size="sm" onClick={refreshPRs}>
            Tentar Novamente
          </Button>
        </div>
      )}

      <div className="agente-tab__sub-tabs">
        {subTabs.map((tab) => (
          <Button
            key={tab.id}
            variant={activeSubTab === tab.id ? 'primary' : 'ghost'}
            size="sm"
            onClick={() => setActiveSubTab(tab.id)}
            className={`agente-tab__sub-tab ${activeSubTab === tab.id ? 'agente-tab__sub-tab--active' : ''}`}
            title={tab.description}
          >
            {tab.icon}
            <span>{tab.label}</span>
            {tab.count > 0 && (
              <Badge 
                variant={activeSubTab === tab.id ? 'secondary' : 'primary'} 
                size="sm"
                className="agente-tab__sub-tab-badge"
              >
                {tab.count}
              </Badge>
            )}
          </Button>
        ))}
      </div>

      <div className="agente-tab__content">
        <PRList
          prs={getCurrentPRs()}
          title={subTabs.find(tab => tab.id === activeSubTab)?.label || 'PRs'}
          emptyMessage={getEmptyMessage()}
          loading={loading}
          onRefresh={refreshPRs}
        />
      </div>

      {lastUpdated && (
        <div className="agente-tab__footer">
          <Typography variant="caption" color="muted">
            Última atualização: {formatLastUpdated()}
          </Typography>
        </div>
      )}
    </div>
  );
};

export default AgenteTab;
