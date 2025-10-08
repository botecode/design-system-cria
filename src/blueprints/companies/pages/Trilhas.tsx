import React from 'react';
import { CriaTextHeadline1, CriaTextBody1 } from '../../../components/TextTokens';
import { Card, CardContent } from '../../../components/Card';

const Trilhas: React.FC = () => {
  return (
    <section>
      <div style={{ marginBottom: '32px' }}>
        <CriaTextHeadline1 style={{ marginBottom: '16px' }}>
          Trilhas
        </CriaTextHeadline1>
        <CriaTextBody1>
          Gerencie as trilhas de aprendizado disponíveis para os alunos da sua empresa.
        </CriaTextBody1>
      </div>

      <Card>
        <CardContent>
          <CriaTextHeadline1 style={{ fontSize: '20px', marginBottom: '16px' }}>
            Trilhas de Aprendizado
          </CriaTextHeadline1>
          <CriaTextBody1>
            Conteúdo de exemplo da página de trilhas.
          </CriaTextBody1>
        </CardContent>
      </Card>
    </section>
  );
};

export default Trilhas;
