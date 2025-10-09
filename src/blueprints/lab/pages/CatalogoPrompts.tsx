import React from 'react';
import { CriaTextTitle1, CriaTextTitle2, CriaTextBody1 } from '../../../components/TextTokens';
import { Card } from '../../../components/Card';
import { ChatCircleText } from 'phosphor-react';

const CatalogoPrompts: React.FC = () => {
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
        <ChatCircleText size={48} weight="duotone" />
        <div>
          <CriaTextTitle1>Catálogo de Prompts</CriaTextTitle1>
          <CriaTextBody1 style={{ marginTop: '0.5rem', opacity: 0.8 }}>
            Biblioteca de prompts para IA e casos de uso
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
            🤖 Prompts de IA
          </CriaTextTitle2>
          <CriaTextBody1>
            Explore prompts otimizados para diferentes modelos de IA.
          </CriaTextBody1>
        </Card>

        <Card variant="elevated" style={{ padding: '1.5rem' }}>
          <CriaTextTitle2 style={{ marginBottom: '1rem' }}>
            📂 Categorias
          </CriaTextTitle2>
          <CriaTextBody1>
            Navegue por categorias: produtividade, criatividade, análise e mais.
          </CriaTextBody1>
        </Card>

        <Card variant="elevated" style={{ padding: '1.5rem' }}>
          <CriaTextTitle2 style={{ marginBottom: '1rem' }}>
            ⭐ Mais Populares
          </CriaTextTitle2>
          <CriaTextBody1>
            Descubra os prompts mais utilizados pela comunidade.
          </CriaTextBody1>
        </Card>
      </div>
    </div>
  );
};

export default CatalogoPrompts;

