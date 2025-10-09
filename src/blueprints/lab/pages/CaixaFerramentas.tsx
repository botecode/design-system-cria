import React from 'react';
import { CriaTextTitle1, CriaTextTitle2, CriaTextBody1 } from '../../../components/TextTokens';
import { Card } from '../../../components/Card';
import { Wrench } from 'phosphor-react';

const CaixaFerramentas: React.FC = () => {
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
        <Wrench size={48} weight="duotone" />
        <div>
          <CriaTextTitle1>Caixa de Ferramentas</CriaTextTitle1>
          <CriaTextBody1 style={{ marginTop: '0.5rem', opacity: 0.8 }}>
            Ferramentas úteis para desenvolvimento e produtividade
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
            🛠️ Utilitários
          </CriaTextTitle2>
          <CriaTextBody1>
            Ferramentas práticas para facilitar seu trabalho diário.
          </CriaTextBody1>
        </Card>

        <Card variant="elevated" style={{ padding: '1.5rem' }}>
          <CriaTextTitle2 style={{ marginBottom: '1rem' }}>
            🔧 Geradores
          </CriaTextTitle2>
          <CriaTextBody1>
            Gere código, documentação e outros recursos automaticamente.
          </CriaTextBody1>
        </Card>

        <Card variant="elevated" style={{ padding: '1.5rem' }}>
          <CriaTextTitle2 style={{ marginBottom: '1rem' }}>
            📊 Analisadores
          </CriaTextTitle2>
          <CriaTextBody1>
            Analise e otimize seu código e projetos.
          </CriaTextBody1>
        </Card>
      </div>
    </div>
  );
};

export default CaixaFerramentas;

