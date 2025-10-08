import React from 'react';
import { CriaTextHeadline1, CriaTextTitle1, CriaTextBody1 } from '../../../components/TextTokens';
import { Card, CardContent } from '../../../components/Card';
import { Button } from '../../../components/Button';
import { Avatar } from '../../../components/Avatar';
import { Users, CreditCard, Buildings, Clock, User } from 'phosphor-react';
import { company, currentUser } from '../mock/company';

const Dashboard: React.FC = () => {
  // Mock data for the dashboard
  const stats = {
    totalUsers: 30,
    activeSubscriptions: 25,
    companyStatus: 'Ativa',
    lastActivity: 'Hoje'
  };

  const recentUsers = [
    { name: 'João Silva', email: 'joao@empresa.com', created_at: '2 horas atrás' },
    { name: 'Maria Santos', email: 'maria@empresa.com', created_at: '5 horas atrás' },
    { name: 'Pedro Costa', email: 'pedro@empresa.com', created_at: '1 dia atrás' },
    { name: 'Ana Oliveira', email: 'ana@empresa.com', created_at: '2 dias atrás' }
  ];

  return (
    <section data-testid="dashboard-page" style={{ padding: '16px', paddingBottom: '40px' }}>
      {/* Page Header */}
      <div style={{ marginBottom: '32px' }}>
        <CriaTextHeadline1 style={{ 
          marginBottom: '8px',
          color: 'var(--cria-text-primary)'
        }}>
          {company.name}
        </CriaTextHeadline1>
        <CriaTextBody1 style={{ 
          color: 'var(--cria-text-secondary)'
        }}>
          Visão geral da empresa
        </CriaTextBody1>
      </div>

      {/* Stats Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '16px', 
        marginBottom: '32px' 
      }}>
        {/* Total Users */}
        <Card style={{ backgroundColor: 'var(--cria-surface-secondary)' }}>
          <CardContent>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ 
                width: '32px', 
                height: '32px', 
                borderRadius: 'var(--cria-radius-md)', 
                backgroundColor: 'var(--cria-primary)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginRight: '16px'
              }}>
                <Users size={16} color="white" />
              </div>
              <div style={{ flex: 1 }}>
                <CriaTextBody1 style={{ 
                  color: 'var(--cria-text-secondary)', 
                  fontSize: '14px',
                  marginBottom: '4px'
                }}>
                  Total de Usuários
                </CriaTextBody1>
                <CriaTextTitle1 style={{ 
                  color: 'var(--cria-text-primary)', 
                  fontSize: '18px',
                  margin: 0
                }}>
                  {stats.totalUsers}
                </CriaTextTitle1>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Active Subscriptions */}
        <Card style={{ backgroundColor: 'var(--cria-surface-secondary)' }}>
          <CardContent>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ 
                width: '32px', 
                height: '32px', 
                borderRadius: 'var(--cria-radius-md)', 
                backgroundColor: 'var(--cria-success)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginRight: '16px'
              }}>
                <CreditCard size={16} color="white" />
              </div>
              <div style={{ flex: 1 }}>
                <CriaTextBody1 style={{ 
                  color: 'var(--cria-text-secondary)', 
                  fontSize: '14px',
                  marginBottom: '4px'
                }}>
                  Assinaturas Ativas
                </CriaTextBody1>
                <CriaTextTitle1 style={{ 
                  color: 'var(--cria-text-primary)', 
                  fontSize: '18px',
                  margin: 0
                }}>
                  {stats.activeSubscriptions}
                </CriaTextTitle1>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Company Status */}
        <Card style={{ backgroundColor: 'var(--cria-surface-secondary)' }}>
          <CardContent>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ 
                width: '32px', 
                height: '32px', 
                borderRadius: 'var(--cria-radius-md)', 
                backgroundColor: 'var(--cria-primary)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginRight: '16px'
              }}>
                <Buildings size={16} color="white" />
              </div>
              <div style={{ flex: 1 }}>
                <CriaTextBody1 style={{ 
                  color: 'var(--cria-text-secondary)', 
                  fontSize: '14px',
                  marginBottom: '4px'
                }}>
                  Status da Empresa
                </CriaTextBody1>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '4px 8px',
                  borderRadius: 'var(--cria-radius-full)',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  backgroundColor: 'var(--cria-success-50)',
                  color: 'var(--cria-success-700)'
                }}>
                  {stats.companyStatus}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Last Activity */}
        <Card style={{ backgroundColor: 'var(--cria-surface-secondary)' }}>
          <CardContent>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ 
                width: '32px', 
                height: '32px', 
                borderRadius: 'var(--cria-radius-md)', 
                backgroundColor: 'var(--cria-warning)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginRight: '16px'
              }}>
                <Clock size={16} color="white" />
              </div>
              <div style={{ flex: 1 }}>
                <CriaTextBody1 style={{ 
                  color: 'var(--cria-text-secondary)', 
                  fontSize: '14px',
                  marginBottom: '4px'
                }}>
                  Última Atividade
                </CriaTextBody1>
                <CriaTextTitle1 style={{ 
                  color: 'var(--cria-text-primary)', 
                  fontSize: '18px',
                  margin: 0
                }}>
                  {stats.lastActivity}
                </CriaTextTitle1>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Users Section */}
      <Card style={{ 
        backgroundColor: 'var(--cria-surface-secondary)', 
        marginBottom: '32px' 
      }}>
        <CardContent>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            marginBottom: '16px' 
          }}>
            <CriaTextTitle1 style={{ 
              color: 'var(--cria-text-primary)',
              fontSize: '18px',
              margin: 0
            }}>
              Usuários Recentes
            </CriaTextTitle1>
            <Button variant="ghost" size="sm">
              Ver todos →
            </Button>
          </div>
          
          {recentUsers.length > 0 ? (
            <div>
              {recentUsers.map((user, index) => (
                <div 
                  key={index}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    padding: '16px 0',
                    borderBottom: index < recentUsers.length - 1 ? '1px solid var(--cria-border-primary)' : 'none'
                  }}
                >
                  <Avatar 
                    size="sm" 
                    name={user.name}
                    style={{ marginRight: '16px' }}
                  />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <CriaTextBody1 style={{ 
                      color: 'var(--cria-text-primary)', 
                      fontWeight: '500',
                      marginBottom: '4px'
                    }}>
                      {user.name}
                    </CriaTextBody1>
                    <CriaTextBody1 style={{ 
                      color: 'var(--cria-text-secondary)', 
                      fontSize: '14px'
                    }}>
                      {user.email}
                    </CriaTextBody1>
                  </div>
                  <CriaTextBody1 style={{ 
                    color: 'var(--cria-text-secondary)', 
                    fontSize: '14px'
                  }}>
                    {user.created_at}
                  </CriaTextBody1>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ 
              textAlign: 'center', 
              padding: '32px 0',
              color: 'var(--cria-text-tertiary)'
            }}>
              <User size={48} style={{ margin: '0 auto 16px' }} />
              <CriaTextBody1 style={{ marginBottom: '8px' }}>
                Nenhum usuário encontrado
              </CriaTextBody1>
              <CriaTextBody1 style={{ fontSize: '14px' }}>
                Quando usuários se registrarem, eles aparecerão aqui.
              </CriaTextBody1>
            </div>
          )}
        </CardContent>
      </Card>

    </section>
  );
};

export default Dashboard;