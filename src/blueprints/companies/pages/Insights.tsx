import React from 'react';
import { CriaTextHeadline1, CriaTextTitle1, CriaTextBody1 } from '../../../components/TextTokens';
import { Card, CardContent } from '../../../components/Card';
import { insightsMockData, onboardingLabels } from '../mock/insights';

const Insights: React.FC = () => {
  const { 
    aiExperienceSummary, 
    aiIntimacySummary, 
    objectivesSummary, 
    workAreasSummary, 
    rolesSummary, 
    dailyTasksSummary, 
    learningPreferencesSummary, 
    discoverySourceSummary,
    departmentData,
    titleData
  } = insightsMockData;

  const colors = [
    'var(--cria-primary)',
    'var(--cria-secondary)', 
    'var(--cria-accent)',
    'var(--cria-success)',
    'var(--cria-warning)',
    'var(--cria-error)',
    'var(--cria-info)'
  ];

  const renderSummarySection = (title: string, data: Record<string, number>, labels: Record<string, string>, colors: string[]) => (
    <div style={{ marginBottom: '24px' }}>
      <CriaTextTitle1 style={{ 
        marginBottom: '16px', 
        fontSize: '18px',
        color: 'var(--cria-text-primary)'
      }}>
        {title}
      </CriaTextTitle1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {Object.entries(data)
          .sort(([,a], [,b]) => b - a)
          .map(([key, count], index) => (
            <div 
              key={key}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '12px 16px',
                backgroundColor: 'var(--cria-surface-secondary)',
                borderRadius: 'var(--cria-radius-md)',
                border: '1px solid var(--cria-border-primary)',
                transition: 'all 0.2s ease'
              }}
            >
              <CriaTextBody1 style={{ 
                color: 'var(--cria-text-secondary)',
                fontSize: '14px'
              }}>
                {labels[key] || key}
              </CriaTextBody1>
              <span 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 'var(--cria-radius-full)',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  padding: '4px 8px',
                  color: 'white',
                  backgroundColor: colors[index % colors.length]
                }}
              >
                {count}
              </span>
            </div>
          ))}
      </div>
    </div>
  );

  const renderDistributionList = (title: string, data: [string, number][]) => (
    <Card style={{ 
      backgroundColor: 'var(--cria-surface-secondary)',
      border: '1px solid var(--cria-border-primary)'
    }}>
      <CardContent>
        <CriaTextTitle1 style={{ 
          marginBottom: '16px',
          fontSize: '18px',
          color: 'var(--cria-text-primary)'
        }}>
          {title}
        </CriaTextTitle1>
        {data.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {data.map(([item, count], index) => (
              <div 
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '12px 0',
                  borderBottom: index < data.length - 1 ? '1px solid var(--cria-border-primary)' : 'none'
                }}
              >
                <CriaTextBody1 style={{ 
                  color: 'var(--cria-text-secondary)',
                  fontSize: '14px',
                  fontWeight: '500'
                }}>
                  {item || 'Não informado'}
                </CriaTextBody1>
                <span 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 'var(--cria-radius-full)',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    padding: '4px 8px',
                    color: 'white',
                    backgroundColor: 'var(--cria-primary)'
                  }}
                >
                  {count}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ 
            textAlign: 'center', 
            padding: '32px 0',
            color: 'var(--cria-text-tertiary)'
          }}>
            <CriaTextBody1>Sem dados</CriaTextBody1>
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <section>
      {/* Page Header */}
      <div style={{ marginBottom: '32px' }}>
        <CriaTextHeadline1 style={{ 
          marginBottom: '8px',
          color: 'var(--cria-text-primary)'
        }}>
          Insights
        </CriaTextHeadline1>
        <CriaTextBody1 style={{ 
          color: 'var(--cria-text-secondary)'
        }}>
          Analise dados e métricas da empresa
        </CriaTextBody1>
      </div>

      {/* Onboarding Summary Section */}
      <Card style={{ 
        marginBottom: '32px',
        backgroundColor: 'var(--cria-surface-secondary)',
        border: '1px solid var(--cria-border-primary)'
      }}>
        <CardContent>
          <CriaTextTitle1 style={{ 
            marginBottom: '24px',
            fontSize: '20px',
            color: 'var(--cria-text-primary)'
          }}>
            Resumo de interesses dos alunos
          </CriaTextTitle1>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '24px' 
          }}>
            {renderSummarySection(
              '2. Quanto a IA já faz parte do seu dia a dia?',
              aiExperienceSummary,
              onboardingLabels.aiExperience,
              ['var(--cria-success)', 'var(--cria-info)', 'var(--cria-primary)', 'var(--cria-warning)', 'var(--cria-error)']
            )}
            
            {renderSummarySection(
              '3. Seu nível de intimidade com IA',
              aiIntimacySummary,
              onboardingLabels.aiIntimacy,
              ['var(--cria-primary)', 'var(--cria-secondary)', 'var(--cria-accent)', 'var(--cria-info)', 'var(--cria-success)']
            )}
            
            {renderSummarySection(
              '4. Principais objetivos com IA',
              objectivesSummary,
              onboardingLabels.objectives,
              ['var(--cria-warning)', 'var(--cria-error)', 'var(--cria-primary)', 'var(--cria-info)', 'var(--cria-success)']
            )}
            
            {renderSummarySection(
              '5. Área de atuação',
              workAreasSummary,
              onboardingLabels.workAreas,
              ['var(--cria-primary)', 'var(--cria-secondary)', 'var(--cria-accent)', 'var(--cria-info)', 'var(--cria-success)', 'var(--cria-warning)']
            )}
            
            {renderSummarySection(
              '6. Papel na área',
              rolesSummary,
              onboardingLabels.roles,
              ['var(--cria-error)', 'var(--cria-warning)', 'var(--cria-primary)', 'var(--cria-info)', 'var(--cria-success)']
            )}
            
            {renderSummarySection(
              '7. Tarefas do dia a dia',
              dailyTasksSummary,
              onboardingLabels.dailyTasks,
              ['var(--cria-error)', 'var(--cria-warning)', 'var(--cria-primary)', 'var(--cria-info)', 'var(--cria-success)']
            )}
            
            {renderSummarySection(
              '8. Preferências de aprendizado',
              learningPreferencesSummary,
              onboardingLabels.learningPreferences,
              ['var(--cria-info)', 'var(--cria-primary)', 'var(--cria-success)', 'var(--cria-warning)', 'var(--cria-error)']
            )}
            
            {renderSummarySection(
              '9. Por onde nos encontrou',
              discoverySourceSummary,
              onboardingLabels.discoverySource,
              ['var(--cria-warning)', 'var(--cria-primary)', 'var(--cria-info)', 'var(--cria-success)', 'var(--cria-error)']
            )}
          </div>
        </CardContent>
      </Card>

      {/* Distribution Lists Section */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '24px' 
      }}>
        {renderDistributionList('Distribuição por Área', departmentData)}
        {renderDistributionList('Distribuição por Cargo', titleData)}
      </div>
    </section>
  );
};

export default Insights;
