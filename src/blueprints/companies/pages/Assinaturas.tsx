import React, { useState } from 'react';
import { CriaTextHeadline1, CriaTextTitle1, CriaTextBody1 } from '../../../components/TextTokens';
import { Card, CardContent } from '../../../components/Card';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { Dropdown } from '../../../components/Dropdown';
import { CreditCard, Plus, PencilSimple, X, Check } from 'phosphor-react';

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
  const [isCreating, setIsCreating] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newSubscription, setNewSubscription] = useState({
    planName: '',
    subscriptionType: 'monthly' as const,
    subscriptionTierId: '',
    startsAt: new Date().toISOString().slice(0, 16),
    seats: 1
  });

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

  const subscriptionTypeOptions = [
    { value: 'monthly', label: 'Mensal' },
    { value: 'quarterly', label: 'Trimestral' },
    { value: 'semiannual', label: 'Semestral' },
    { value: 'annual', label: 'Anual' },
    { value: 'unlimited', label: 'Vitalícia' }
  ];

  const subscriptionTierOptions = [
    { value: '1', label: 'Basic' },
    { value: '2', label: 'Premium' },
    { value: '3', label: 'Enterprise' }
  ];

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
    const styles: Record<string, string> = {
      'basic': 'background: #10b981; color: white; padding: 4px 8px; border-radius: 6px; font-size: 12px; font-weight: 600;',
      'premium': 'background: #8b5cf6; color: white; padding: 4px 8px; border-radius: 6px; font-size: 12px; font-weight: 600;',
      'enterprise': 'background: #f59e0b; color: white; padding: 4px 8px; border-radius: 6px; font-size: 12px; font-weight: 600;'
    };
    return styles[tier] || 'background: #6b7280; color: white; padding: 4px 8px; border-radius: 6px; font-size: 12px; font-weight: 600;';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  const handleCreateSubscription = () => {
    if (!newSubscription.planName || !newSubscription.subscriptionTierId) return;
    
    const newSub: Subscription = {
      id: Date.now().toString(),
      planName: newSubscription.planName,
      subscriptionType: newSubscription.subscriptionType,
      subscriptionTier: subscriptionTierOptions.find(t => t.value === newSubscription.subscriptionTierId)?.label.toLowerCase() || 'basic',
      startsAt: newSubscription.startsAt,
      endsAt: new Date(new Date(newSubscription.startsAt).getTime() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // Mock end date
      seats: newSubscription.seats,
      availableSeats: newSubscription.seats
    };

    setSubscriptions([newSub, ...subscriptions]);
    setNewSubscription({
      planName: '',
      subscriptionType: 'monthly',
      subscriptionTierId: '',
      startsAt: new Date().toISOString().slice(0, 16),
      seats: 1
    });
    setIsCreating(false);
  };

  const handleEditSubscription = (id: string) => {
    setEditingId(id);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
  };

  const handleUpdateSubscription = (id: string) => {
    // Mock update logic
    setEditingId(null);
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

      {/* Create New Subscription */}
      <div style={{ marginBottom: '32px' }}>
        <Card style={{ backgroundColor: 'var(--cria-surface-secondary)' }}>
          <CardContent>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <CriaTextTitle1 style={{ color: 'var(--cria-text-primary)' }}>
                Criar Nova Assinatura
              </CriaTextTitle1>
              <Button
                variant="primary"
                onClick={() => setIsCreating(!isCreating)}
                icon={<Plus size={16} />}
              >
                {isCreating ? 'Cancelar' : 'Nova Assinatura'}
              </Button>
            </div>

            {isCreating && (
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1.2fr 1fr 1fr 1fr 0.8fr auto',
                gap: '12px',
                alignItems: 'center',
                backgroundColor: 'var(--cria-bg-secondary)',
                border: '1px solid var(--cria-border-primary)',
                borderRadius: '12px',
                padding: '12px 16px'
              }}>
                <div>
                  <label style={{
                    display: 'block',
                    color: 'var(--cria-text-secondary)',
                    fontSize: '12px',
                    marginBottom: '6px'
                  }}>
                    Nome do Plano
                  </label>
                  <Input
                    placeholder="Ex: Plano Pi"
                    value={newSubscription.planName}
                    onChange={(e) => setNewSubscription({ ...newSubscription, planName: e.target.value })}
                    style={{ width: '100%' }}
                  />
                </div>
                <div>
                  <label style={{
                    display: 'block',
                    color: 'var(--cria-text-secondary)',
                    fontSize: '12px',
                    marginBottom: '6px'
                  }}>
                    Tipo de Assinatura
                  </label>
                  <Dropdown
                    options={subscriptionTypeOptions}
                    value={newSubscription.subscriptionType}
                    onSelect={(value) => setNewSubscription({ ...newSubscription, subscriptionType: value as any })}
                    placeholder="Selecione"
                    style={{ width: '100%' }}
                  />
                </div>
                <div>
                  <label style={{
                    display: 'block',
                    color: 'var(--cria-text-secondary)',
                    fontSize: '12px',
                    marginBottom: '6px'
                  }}>
                    Escopo
                  </label>
                  <Dropdown
                    options={subscriptionTierOptions}
                    value={newSubscription.subscriptionTierId}
                    onSelect={(value) => setNewSubscription({ ...newSubscription, subscriptionTierId: value })}
                    placeholder="Selecione"
                    style={{ width: '100%' }}
                  />
                </div>
                <div>
                  <label style={{
                    display: 'block',
                    color: 'var(--cria-text-secondary)',
                    fontSize: '12px',
                    marginBottom: '6px'
                  }}>
                    Data de Início
                  </label>
                  <Input
                    type="datetime-local"
                    value={newSubscription.startsAt}
                    onChange={(e) => setNewSubscription({ ...newSubscription, startsAt: e.target.value })}
                    style={{ width: '100%' }}
                  />
                </div>
                <div>
                  <label style={{
                    display: 'block',
                    color: 'var(--cria-text-secondary)',
                    fontSize: '12px',
                    marginBottom: '6px'
                  }}>
                    Assentos
                  </label>
                  <Input
                    type="number"
                    min="1"
                    value={newSubscription.seats}
                    onChange={(e) => setNewSubscription({ ...newSubscription, seats: parseInt(e.target.value) || 1 })}
                    style={{ width: '100%' }}
                  />
                </div>
                <div>
                  <label style={{
                    display: 'block',
                    color: 'var(--cria-text-secondary)',
                    fontSize: '12px',
                    marginBottom: '6px',
                    visibility: 'hidden'
                  }}>
                    Criar
                  </label>
                  <Button
                    variant="primary"
                    onClick={handleCreateSubscription}
                    style={{ height: '42px', padding: '0 16px' }}
                  >
                    Criar
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Existing Subscriptions */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {subscriptions.map((subscription) => (
          <Card key={subscription.id} style={{ backgroundColor: 'var(--cria-surface-secondary)' }}>
            <CardContent>
              {editingId === subscription.id ? (
                // Edit Mode
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1.2fr 1fr 1fr 1fr 0.8fr auto',
                  gap: '12px',
                  alignItems: 'center',
                  backgroundColor: 'var(--cria-bg-secondary)',
                  border: '1px solid var(--cria-border-primary)',
                  borderRadius: '12px',
                  padding: '12px 16px'
                }}>
                  <div>
                    <label style={{
                      display: 'block',
                      color: 'var(--cria-text-secondary)',
                      fontSize: '12px',
                      marginBottom: '6px'
                    }}>
                      Nome do Plano
                    </label>
                    <Input
                      value={subscription.planName}
                      onChange={(e) => {
                        // Mock update logic
                      }}
                      style={{ width: '100%' }}
                    />
                  </div>
                  <div>
                    <label style={{
                      display: 'block',
                      color: 'var(--cria-text-secondary)',
                      fontSize: '12px',
                      marginBottom: '6px'
                    }}>
                      Tipo de Assinatura
                    </label>
                    <Dropdown
                      options={subscriptionTypeOptions}
                      value={subscription.subscriptionType}
                      onSelect={() => {}}
                      style={{ width: '100%' }}
                    />
                  </div>
                  <div>
                    <label style={{
                      display: 'block',
                      color: 'var(--cria-text-secondary)',
                      fontSize: '12px',
                      marginBottom: '6px'
                    }}>
                      Escopo
                    </label>
                    <Dropdown
                      options={subscriptionTierOptions}
                      value={subscription.subscriptionTier}
                      onSelect={() => {}}
                      style={{ width: '100%' }}
                    />
                  </div>
                  <div>
                    <label style={{
                      display: 'block',
                      color: 'var(--cria-text-secondary)',
                      fontSize: '12px',
                      marginBottom: '6px'
                    }}>
                      Data de Início
                    </label>
                    <Input
                      type="datetime-local"
                      value={subscription.startsAt}
                      onChange={() => {}}
                      style={{ width: '100%' }}
                    />
                  </div>
                  <div>
                    <label style={{
                      display: 'block',
                      color: 'var(--cria-text-secondary)',
                      fontSize: '12px',
                      marginBottom: '6px'
                    }}>
                      Assentos
                    </label>
                    <Input
                      type="number"
                      min="1"
                      value={subscription.seats}
                      onChange={() => {}}
                      style={{ width: '100%' }}
                    />
                  </div>
                  <div>
                    <label style={{
                      display: 'block',
                      color: 'var(--cria-text-secondary)',
                      fontSize: '12px',
                      marginBottom: '6px',
                      visibility: 'hidden'
                    }}>
                      Ações
                    </label>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                      <Button
                        variant="ghost"
                        onClick={handleCancelEdit}
                        style={{ height: '42px', padding: '0 16px' }}
                      >
                        Cancelar
                      </Button>
                      <Button
                        variant="primary"
                        onClick={() => handleUpdateSubscription(subscription.id)}
                        style={{ height: '42px', padding: '0 16px' }}
                      >
                        Atualizar
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                // View Mode
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
                  <Button
                    variant="ghost"
                    onClick={() => handleEditSubscription(subscription.id)}
                    icon={<PencilSimple size={16} />}
                    style={{ color: 'var(--cria-primary)' }}
                  >
                    Editar
                  </Button>
                </div>
              )}
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