import React from 'react';
import { CriaTextHeadline1, CriaTextTitle1, CriaTextBody1 } from '../../../components/TextTokens';
import { Card, CardContent } from '../../../components/Card';
import { PieChart, DonutChart, BarChart, StackedBarChart, RadialProgressChart } from '../../../components/Charts';
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

  // Convert data to chart format
  const convertToChartData = (data: Record<string, number>, labels: Record<string, string>, colors: string[]) => {
    return Object.entries(data)
      .sort(([,a], [,b]) => b - a)
      .map(([key, count], index) => ({
        name: labels[key] || key,
        value: count,
        color: colors[index % colors.length]
      }));
  };

  const convertToBarData = (data: (string | number)[][]) => {
    return data.map(([name, value]) => ({ name: String(name), value: Number(value) }));
  };

  // Chart data
  const aiExperienceData = convertToChartData(
    aiExperienceSummary, 
    onboardingLabels.aiExperience,
    ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']
  );

  const aiIntimacyData = convertToChartData(
    aiIntimacySummary,
    onboardingLabels.aiIntimacy,
    ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']
  );

  const objectivesData = convertToChartData(
    objectivesSummary,
    onboardingLabels.objectives,
    ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']
  );

  const workAreasData = convertToChartData(
    workAreasSummary,
    onboardingLabels.workAreas,
    ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D']
  );

  const rolesData = convertToChartData(
    rolesSummary,
    onboardingLabels.roles,
    ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']
  );

  const dailyTasksData = convertToChartData(
    dailyTasksSummary,
    onboardingLabels.dailyTasks,
    ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']
  );

  const learningPreferencesData = convertToChartData(
    learningPreferencesSummary,
    onboardingLabels.learningPreferences,
    ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']
  );

  const discoverySourceData = convertToChartData(
    discoverySourceSummary,
    onboardingLabels.discoverySource,
    ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']
  );

  const departmentBarData = convertToBarData(departmentData);
  const titleBarData = convertToBarData(titleData);

  // Calculate total users for progress charts
  const totalUsers = Object.values(aiExperienceSummary).reduce((sum, count) => sum + count, 0);
  const completedOnboarding = totalUsers; // Assuming all users completed onboarding

  return (
    <section style={{ padding: '24px', paddingBottom: '40px' }}>
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

      {/* Overview Cards */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'row',
        gap: '16px', 
        marginBottom: '32px',
        flexWrap: 'wrap'
      }}>
        <Card style={{ flex: '1', minWidth: '200px' }}>
          <CardContent>
            <CriaTextTitle1 style={{ fontSize: '24px', color: 'var(--cria-primary)', marginBottom: '8px' }}>
              {totalUsers}
            </CriaTextTitle1>
            <CriaTextBody1 style={{ color: 'var(--cria-text-secondary)' }}>
              Total de Alunos
            </CriaTextBody1>
          </CardContent>
        </Card>
        <Card style={{ flex: '1', minWidth: '200px' }}>
          <CardContent>
            <CriaTextTitle1 style={{ fontSize: '24px', color: 'var(--cria-success)', marginBottom: '8px' }}>
              {completedOnboarding}
            </CriaTextTitle1>
            <CriaTextBody1 style={{ color: 'var(--cria-text-secondary)' }}>
              Onboarding Completo
            </CriaTextBody1>
          </CardContent>
        </Card>
        <Card style={{ flex: '1', minWidth: '200px' }}>
          <CardContent>
            <CriaTextTitle1 style={{ fontSize: '24px', color: 'var(--cria-warning)', marginBottom: '8px' }}>
              {Math.round((completedOnboarding / totalUsers) * 100)}%
            </CriaTextTitle1>
            <CriaTextBody1 style={{ color: 'var(--cria-text-secondary)' }}>
              Taxa de Conclusão
            </CriaTextBody1>
          </CardContent>
        </Card>
        <Card style={{ flex: '1', minWidth: '200px' }}>
          <CardContent>
            <CriaTextTitle1 style={{ fontSize: '24px', color: 'var(--cria-info)', marginBottom: '8px' }}>
              {Object.keys(workAreasSummary).length}
            </CriaTextTitle1>
            <CriaTextBody1 style={{ color: 'var(--cria-text-secondary)' }}>
              Áreas de Atuação
            </CriaTextBody1>
          </CardContent>
        </Card>
      </div>

      {/* Charts Grid - Full Width */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '20px' 
      }}>
        {/* First Row - AI Experience and Intimacy */}
        <PieChart
          title="Experiência com IA"
          data={aiExperienceData}
          height={350}
        />
        <DonutChart
          title="Intimidade com IA"
          data={aiIntimacyData}
          height={350}
        />

        {/* Second Row - Objectives and Work Areas */}
        <BarChart
          title="Objetivos com IA"
          data={objectivesData.map(item => ({ name: item.name, value: item.value }))}
          height={350}
        />
        <PieChart
          title="Áreas de Atuação"
          data={workAreasData}
          height={350}
        />

        {/* Third Row - Roles and Daily Tasks */}
        <DonutChart
          title="Papéis na Empresa"
          data={rolesData}
          height={350}
        />
        <BarChart
          title="Tarefas do Dia a Dia"
          data={dailyTasksData.map(item => ({ name: item.name, value: item.value }))}
          height={350}
        />

        {/* Fourth Row - Learning Preferences and Discovery Source */}
        <PieChart
          title="Preferências de Aprendizado"
          data={learningPreferencesData}
          height={350}
        />
        <DonutChart
          title="Canais de Descoberta"
          data={discoverySourceData}
          height={350}
        />

        {/* Fifth Row - Department and Title Distribution */}
        <BarChart
          title="Distribuição por Área"
          data={departmentBarData}
          height={350}
        />
        <BarChart
          title="Distribuição por Cargo"
          data={titleBarData}
          height={350}
        />
      </div>
    </section>
  );
};

export default Insights;
