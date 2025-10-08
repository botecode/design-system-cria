import React from 'react';
import { CriaTextHeadline1, CriaTextBody1 } from '../../../components/TextTokens';
import { Card, CardContent } from '../../../components/Card';

const Assinaturas: React.FC = () => {
  return (
    <section>
      <div style={{ marginBottom: '32px' }}>
        <CriaTextHeadline1 style={{ marginBottom: '16px' }}>
          Assinaturas
        </CriaTextHeadline1>
        <CriaTextBody1>
          Gerencie os planos de assinatura da sua empresa e acompanhe os pagamentos.
        </CriaTextBody1>
      </div>

      <Card>
        <CardContent>
          <CriaTextHeadline1 style={{ fontSize: '20px', marginBottom: '16px' }}>
            Planos e Pagamentos
          </CriaTextHeadline1>
          <CriaTextBody1>
            Conteúdo de exemplo da página de assinaturas.
          </CriaTextBody1>
        </CardContent>
      </Card>
    </section>
  );
};

export default Assinaturas;
