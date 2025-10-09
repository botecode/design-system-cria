import React from 'react';
import { CriaTextTitle1, CriaTextTitle2, CriaTextBody1 } from '../../../components/TextTokens';
import { Card } from '../../../components/Card';
import { GraduationCap } from 'phosphor-react';

const AulasTutoriais: React.FC = () => {
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
        <GraduationCap size={48} weight="duotone" />
        <div>
          <CriaTextTitle1>Aulas-Tutoriais</CriaTextTitle1>
          <CriaTextBody1 style={{ marginTop: '0.5rem', opacity: 0.8 }}>
            Tutoriais práticos e aulas interativas
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
            🎬 Vídeo Aulas
          </CriaTextTitle2>
          <CriaTextBody1>
            Assista a aulas em vídeo com explicações detalhadas e exemplos práticos.
          </CriaTextBody1>
        </Card>

        <Card variant="elevated" style={{ padding: '1.5rem' }}>
          <CriaTextTitle2 style={{ marginBottom: '1rem' }}>
            📝 Tutoriais Escritos
          </CriaTextTitle2>
          <CriaTextBody1>
            Guias passo a passo para aprender no seu próprio ritmo.
          </CriaTextBody1>
        </Card>

        <Card variant="elevated" style={{ padding: '1.5rem' }}>
          <CriaTextTitle2 style={{ marginBottom: '1rem' }}>
            💻 Exercícios Práticos
          </CriaTextTitle2>
          <CriaTextBody1>
            Aplique seus conhecimentos com exercícios hands-on.
          </CriaTextBody1>
        </Card>
      </div>
    </div>
  );
};

export default AulasTutoriais;

