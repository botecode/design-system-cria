import React from 'react';
import { CriaTextTitle1, CriaTextTitle2, CriaTextBody1 } from '../../../components/TextTokens';
import { Card } from '../../../components/Card';
import { BookBookmark } from 'phosphor-react';

const MinhasAulas: React.FC = () => {
  return (
    <div style={{ 
      padding: '2rem',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      {/* Header Section */}
      <div style={{ 
        marginBottom: '2rem',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem'
      }}>
        <BookBookmark size={48} weight="duotone" />
        <div>
          <CriaTextTitle1>Minhas Aulas</CriaTextTitle1>
          <CriaTextBody1 style={{ marginTop: '0.5rem', opacity: 0.8 }}>
            Acompanhe seu progresso e retome suas aulas
          </CriaTextBody1>
        </div>
      </div>

      {/* Content Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.5rem'
      }}>
        <Card variant="elevated" style={{ padding: '1.5rem' }}>
          <CriaTextTitle2 style={{ marginBottom: '1rem' }}>
            🔄 Em Andamento
          </CriaTextTitle2>
          <CriaTextBody1>
            Continue de onde parou nas suas aulas em progresso.
          </CriaTextBody1>
        </Card>

        <Card variant="elevated" style={{ padding: '1.5rem' }}>
          <CriaTextTitle2 style={{ marginBottom: '1rem' }}>
            ✅ Concluídas
          </CriaTextTitle2>
          <CriaTextBody1>
            Reveja as aulas que você já completou e consolidou.
          </CriaTextBody1>
        </Card>

        <Card variant="elevated" style={{ padding: '1.5rem' }}>
          <CriaTextTitle2 style={{ marginBottom: '1rem' }}>
            💾 Salvos
          </CriaTextTitle2>
          <CriaTextBody1>
            Acesse rapidamente suas aulas e conteúdos favoritos.
          </CriaTextBody1>
        </Card>
      </div>
    </div>
  );
};

export default MinhasAulas;

