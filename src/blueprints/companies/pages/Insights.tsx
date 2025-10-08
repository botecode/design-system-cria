import React from 'react';
import { CriaTextHeadline1, CriaTextTitle1, CriaTextBody1 } from '../../../components/TextTokens';
import { Card, CardContent } from '../../../components/Card';
import { Grid, Row, Column } from '../../../components/Grid';
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

  const convertToBarData = (data: [string, number][]) => {
    return data.map(([name, value]) => ({ name, value }));
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
    <section style={{ paddingBottom: '40px' }}>
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
      <Grid>
        <Row style={{ marginBottom: '32px' }}>
          <Column span={{ sm: 12, md: 6, lg: 3 }}>
            <Card>
              <CardContent>
                <CriaTextTitle1 style={{ fontSize: '24px', color: 'var(--cria-primary)', marginBottom: '8px' }}>
                  {totalUsers}
                </CriaTextTitle1>
                <CriaTextBody1 style={{ color: 'var(--cria-text-secondary)' }}>
                  Total de Alunos
                </CriaTextBody1>
              </CardContent>
            </Card>
          </Column>
          <Column span={{ sm: 12, md: 6, lg: 3 }}>
            <Card>
              <CardContent>
                <CriaTextTitle1 style={{ fontSize: '24px', color: 'var(--cria-success)', marginBottom: '8px' }}>
                  {completedOnboarding}
                </CriaTextTitle1>
                <CriaTextBody1 style={{ color: 'var(--cria-text-secondary)' }}>
                  Onboarding Completo
                </CriaTextBody1>
              </CardContent>
            </Card>
          </Column>
          <Column span={{ sm: 12, md: 6, lg: 3 }}>
            <Card>
              <CardContent>
                <CriaTextTitle1 style={{ fontSize: '24px', color: 'var(--cria-warning)', marginBottom: '8px' }}>
                  {Math.round((completedOnboarding / totalUsers) * 100)}%
                </CriaTextTitle1>
                <CriaTextBody1 style={{ color: 'var(--cria-text-secondary)' }}>
                  Taxa de Conclusão
                </CriaTextBody1>
              </CardContent>
            </Card>
          </Column>
          <Column span={{ sm: 12, md: 6, lg: 3 }}>
            <Card>
              <CardContent>
                <CriaTextTitle1 style={{ fontSize: '24px', color: 'var(--cria-info)', marginBottom: '8px' }}>
                  {Object.keys(workAreasSummary).length}
                </CriaTextTitle1>
                <CriaTextBody1 style={{ color: 'var(--cria-text-secondary)' }}>
                  Áreas de Atuação
                </CriaTextBody1>
              </CardContent>
            </Card>
          </Column>
        </Row>
      </Grid>

      {/* Charts Grid */}
      <Grid>
        {/* First Row - AI Experience and Intimacy */}
        <Row style={{ marginBottom: '32px' }}>
          <Column span={{ sm: 12, md: 6 }}>
            <PieChart
              title="Experiência com IA"
              data={aiExperienceData}
              height={400}
            />
          </Column>
          <Column span={{ sm: 12, md: 6 }}>
            <DonutChart
              title="Intimidade com IA"
              data={aiIntimacyData}
              height={400}
            />
          </Column>
        </Row>

        {/* Second Row - Objectives and Work Areas */}
        <Row style={{ marginBottom: '32px' }}>
          <Column span={{ sm: 12, md: 6 }}>
            <BarChart
              title="Objetivos com IA"
              data={objectivesData.map(item => ({ name: item.name, value: item.value }))}
              height={400}
            />
          </Column>
          <Column span={{ sm: 12, md: 6 }}>
            <PieChart
              title="Áreas de Atuação"
              data={workAreasData}
              height={400}
            />
          </Column>
        </Row>

        {/* Third Row - Roles and Daily Tasks */}
        <Row style={{ marginBottom: '32px' }}>
          <Column span={{ sm: 12, md: 6 }}>
            <DonutChart
              title="Papéis na Empresa"
              data={rolesData}
              height={400}
            />
          </Column>
          <Column span={{ sm: 12, md: 6 }}>
            <BarChart
              title="Tarefas do Dia a Dia"
              data={dailyTasksData.map(item => ({ name: item.name, value: item.value }))}
              height={400}
            />
          </Column>
        </Row>

        {/* Fourth Row - Learning Preferences and Discovery Source */}
        <Row style={{ marginBottom: '32px' }}>
          <Column span={{ sm: 12, md: 6 }}>
            <PieChart
              title="Preferências de Aprendizado"
              data={learningPreferencesData}
              height={400}
            />
          </Column>
          <Column span={{ sm: 12, md: 6 }}>
            <DonutChart
              title="Canais de Descoberta"
              data={discoverySourceData}
              height={400}
            />
          </Column>
        </Row>

        {/* Fifth Row - Department and Title Distribution */}
        <Row style={{ marginBottom: '32px' }}>
          <Column span={{ sm: 12, md: 6 }}>
            <BarChart
              title="Distribuição por Área"
              data={departmentBarData}
              height={400}
            />
          </Column>
          <Column span={{ sm: 12, md: 6 }}>
            <BarChart
              title="Distribuição por Cargo"
              data={titleBarData}
              height={400}
            />
          </Column>
        </Row>
      </Grid>
    </section>
  );
};

export default Insights;
