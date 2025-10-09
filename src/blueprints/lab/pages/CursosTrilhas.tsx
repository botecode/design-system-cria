import React from 'react';
import { CriaTextTitle1, CriaTextTitle2, CriaTextBody1 } from '../../../components/TextTokens';
import { Card } from '../../../components/Card';
import { BookOpen } from 'phosphor-react';

const CursosTrilhas: React.FC = () => {
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
        <BookOpen size={48} weight="duotone" />
        <div>
          <CriaTextTitle1>Cursos & Trilhas</CriaTextTitle1>
          <CriaTextBody1 style={{ marginTop: '0.5rem', opacity: 0.8 }}>
            Explore cursos e trilhas de aprendizado personalizadas
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
            📚 Cursos Disponíveis
          </CriaTextTitle2>
          <CriaTextBody1>
            Acesse uma variedade de cursos criados para desenvolver suas habilidades.
          </CriaTextBody1>
        </Card>

        <Card variant="elevated" style={{ padding: '1.5rem' }}>
          <CriaTextTitle2 style={{ marginBottom: '1rem' }}>
            🎯 Trilhas de Aprendizado
          </CriaTextTitle2>
          <CriaTextBody1>
            Siga trilhas estruturadas para alcançar seus objetivos de aprendizagem.
          </CriaTextBody1>
        </Card>

        <Card variant="elevated" style={{ padding: '1.5rem' }}>
          <CriaTextTitle2 style={{ marginBottom: '1rem' }}>
            ⭐ Recomendações
          </CriaTextTitle2>
          <CriaTextBody1>
            Cursos e trilhas recomendados com base no seu perfil.
          </CriaTextBody1>
        </Card>
      </div>
    </div>
  );
};

export default CursosTrilhas;

