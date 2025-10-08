import React from 'react';
import { CriaTextHeadline1, CriaTextBody1 } from '../../../components/TextTokens';
import { Card, CardContent } from '../../../components/Card';

const Alunos: React.FC = () => {
  return (
    <section>
      <div style={{ marginBottom: '32px' }}>
        <CriaTextHeadline1 style={{ marginBottom: '16px' }}>
          Alunos
        </CriaTextHeadline1>
        <CriaTextBody1>
          Gerencie os alunos da sua empresa e acompanhe o progresso deles nas trilhas de aprendizado.
        </CriaTextBody1>
      </div>

      <Card>
        <CardContent>
          <CriaTextHeadline1 style={{ fontSize: '20px', marginBottom: '16px' }}>
            Lista de Alunos
          </CriaTextHeadline1>
          <CriaTextBody1>
            Conteúdo de exemplo da página de alunos.
          </CriaTextBody1>
        </CardContent>
      </Card>
    </section>
  );
};

export default Alunos;
