import React from 'react';
import { CriaTextHeadline1, CriaTextBody1 } from '../../../components/TextTokens';
import { Card, CardContent } from '../../../components/Card';

const Dashboard: React.FC = () => {
  return (
    <section>
      <div style={{ marginBottom: '32px' }}>
        <CriaTextHeadline1 style={{ marginBottom: '16px' }}>
          Visão Geral
        </CriaTextHeadline1>
        <CriaTextBody1>
          Bem-vindo ao painel da empresa. Aqui você pode gerenciar alunos, assinaturas e acompanhar insights.
        </CriaTextBody1>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '24px'
      }}>
        <Card>
          <CardContent>
            <CriaTextHeadline1 style={{ fontSize: '24px', marginBottom: '8px' }}>
              📊 Estatísticas
            </CriaTextHeadline1>
            <CriaTextBody1>
              Conteúdo de exemplo do painel da empresa.
            </CriaTextBody1>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <CriaTextHeadline1 style={{ fontSize: '24px', marginBottom: '8px' }}>
              👥 Alunos Ativos
            </CriaTextHeadline1>
            <CriaTextBody1>
              Gerenciamento de alunos e trilhas de aprendizado.
            </CriaTextBody1>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <CriaTextHeadline1 style={{ fontSize: '24px', marginBottom: '8px' }}>
              💳 Assinaturas
            </CriaTextHeadline1>
            <CriaTextBody1>
              Controle de planos e pagamentos.
            </CriaTextBody1>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Dashboard;
