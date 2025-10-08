import React, { useState } from 'react';
import { CriaTextHeadline1, CriaTextTitle1, CriaTextBody1 } from '../../../components/TextTokens';
import { Card, CardContent } from '../../../components/Card';
import { CreditCard } from 'phosphor-react';

interface Subscription {
  id: string;
  planName: string;
  subscriptionType: 'monthly' | 'quarterly' | 'semiannual' | 'annual' | 'unlimited';
  subscriptionTier: string;
  startsAt: string;
  endsAt: string;
  seats: number;
  availableSeats: number;
}

const Assinaturas: React.FC = () => {

  // Mock data for subscriptions
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([
    {
      id: '1',
      planName: 'Plano Pi',
      subscriptionType: 'monthly',
      subscriptionTier: 'basic',
      startsAt: '2024-01-15',
      endsAt: '2024-02-15',
      seats: 5,
      availableSeats: 3
    },
    {
      id: '2',
      planName: 'Plano Pro',
      subscriptionType: 'annual',
      subscriptionTier: 'premium',
      startsAt: '2024-01-01',
      endsAt: '2025-01-01',
      seats: 10,
      availableSeats: 7
    }
  ]);


  const getTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      'monthly': 'Mensal',
      'quarterly': 'Trimestral',
      'semiannual': 'Semestral',
      'annual': 'Anual',
      'unlimited': 'Vitalícia'
    };
    return labels[type] || type;
  };

  const getTierBadgeStyle = (tier: string) => {
    const styles: Record<string, React.CSSProperties> = {
      'basic': {
        background: '#10b981',
        color: 'white',
        padding: '4px 8px',
        borderRadius: '6px',
        fontSize: '12px',
        fontWeight: '600'
      },
      'premium': {
        background: '#8b5cf6',
        color: 'white',
        padding: '4px 8px',
        borderRadius: '6px',
        fontSize: '12px',
        fontWeight: '600'
      },
      'enterprise': {
        background: '#f59e0b',
        color: 'white',
        padding: '4px 8px',
        borderRadius: '6px',
        fontSize: '12px',
        fontWeight: '600'
      }
    };
    return styles[tier] || {
      background: '#6b7280',
      color: 'white',
      padding: '4px 8px',
      borderRadius: '6px',
      fontSize: '12px',
      fontWeight: '600'
    };
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };



  return (
    <section data-testid="assinaturas-page" style={{ padding: '24px', paddingBottom: '40px' }}>
      {/* Page Header */}
      <div style={{ marginBottom: '32px' }}>
        <CriaTextHeadline1 style={{
          marginBottom: '8px',
          color: 'var(--cria-text-primary)'
        }}>
          Assinaturas
        </CriaTextHeadline1>
        <CriaTextBody1 style={{
          color: 'var(--cria-text-secondary)'
        }}>
          Gerencie as assinaturas da empresa
        </CriaTextBody1>
      </div>


      {/* Existing Subscriptions */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {subscriptions.map((subscription) => (
          <Card key={subscription.id} style={{ backgroundColor: 'var(--cria-surface-secondary)' }}>
            <CardContent>
              {/* View Mode Only */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: 'var(--cria-bg-primary)',
                border: '1px solid var(--cria-border-primary)',
                borderRadius: '12px',
                padding: '12px 16px'
              }}>
                <div style={{
                  display: 'flex',
                  gap: '16px',
                  color: 'var(--cria-text-primary)',
                  alignItems: 'center',
                  flexWrap: 'wrap'
                }}>
                  <strong>{subscription.planName}</strong>
                  <span style={{ color: 'var(--cria-text-secondary)' }}>
                    • {getTypeLabel(subscription.subscriptionType)}
                  </span>
                  <span style={getTierBadgeStyle(subscription.subscriptionTier)}>
                    {subscription.subscriptionTier}
                  </span>
                  <span style={{ color: 'var(--cria-text-secondary)' }}>
                    • Início: {formatDate(subscription.startsAt)}
                  </span>
                  <span style={{ color: 'var(--cria-text-secondary)' }}>
                    • Fim: {formatDate(subscription.endsAt)}
                  </span>
                  <span style={{ color: 'var(--cria-text-secondary)' }}>
                    • Assentos: {subscription.seats}
                  </span>
                  <span style={{ color: 'var(--cria-text-secondary)' }}>
                    • Assentos livres: {subscription.availableSeats}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {subscriptions.length === 0 && (
        <Card style={{ backgroundColor: 'var(--cria-surface-secondary)' }}>
          <CardContent>
            <div style={{
              textAlign: 'center',
              padding: '32px 0',
              color: 'var(--cria-text-tertiary)'
            }}>
              <CreditCard size={48} style={{ marginBottom: '16px', color: 'var(--cria-text-tertiary)' }} />
              <CriaTextTitle1 style={{ marginBottom: '8px', color: 'var(--cria-text-primary)' }}>
                Nenhuma assinatura encontrada
              </CriaTextTitle1>
              <CriaTextBody1>
                Crie sua primeira assinatura para começar.
              </CriaTextBody1>
            </div>
          </CardContent>
        </Card>
      )}
    </section>
  );
};

export default Assinaturas;