import React from 'react';
import { CriaTextHeadline1, CriaTextBody1 } from '../../../components/TextTokens';
import { Card, CardContent } from '../../../components/Card';

const Insights: React.FC = () => {
  return (
    <section>
      <div style={{ marginBottom: '32px' }}>
        <CriaTextHeadline1 style={{ marginBottom: '16px' }}>
          Insights
        </CriaTextHeadline1>
        <CriaTextBody1>
          Acompanhe métricas e insights sobre o uso da plataforma pelos seus alunos.
        </CriaTextBody1>
      </div>

      <Card>
        <CardContent>
          <CriaTextHeadline1 style={{ fontSize: '20px', marginBottom: '16px' }}>
            Métricas e Relatórios
          </CriaTextHeadline1>
          <CriaTextBody1>
            Conteúdo de exemplo da página de insights.
          </CriaTextBody1>
        </CardContent>
      </Card>
    </section>
  );
};

export default Insights;
