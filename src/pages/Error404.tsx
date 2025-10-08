import React from 'react';
import { CriaCardError } from '../index.ts';
import { CriaTextTitle1, CriaTextBody1 } from '../components/TextTokens';
import { House } from 'phosphor-react';

const Error404: React.FC = () => {
  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <CriaCardError
      errorCode="404"
      title="Página não encontrada"
      message="Desculpe, não conseguimos encontrar a página que você procurava. Ela pode ter sido movida, excluída ou o endereço digitado pode estar incorreto."
      image="https://uploads-ssl.webflow.com/655b905d99360c01ec912345/659da4ffbe77cd70b99ce090_tv.png"
      errorType="warning"
      buttons={[
        {
          label: "Voltar para a página inicial",
          variant: "primary",
          onClick: handleGoHome
        }
      ]}
      footer={
        <CriaTextBody1 style={{ 
          fontSize: '14px'
        }}>
          Tente verificar se o endereço está certo ou use a busca para encontrar o que precisa.
        </CriaTextBody1>
      }
      additionalContent={
        <div style={{ 
          padding: '20px',
          backgroundColor: 'var(--cria-surface-primary)',
          borderRadius: 'var(--cria-radius-md)',
          border: '1px solid var(--cria-border-primary)'
        }}>
          <CriaTextTitle1 style={{ 
            marginBottom: '16px',
            fontSize: '16px'
          }}>
            Páginas Populares
          </CriaTextTitle1>
          <div style={{ 
            display: 'flex', 
            gap: '8px', 
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button 
              onClick={() => window.location.href = '/'}
              style={{
                padding: '8px 16px',
                border: 'none',
                backgroundColor: 'transparent',
                cursor: 'pointer',
                borderRadius: 'var(--cria-radius-sm)',
                fontSize: '14px'
              }}
            >
              <CriaTextBody1 style={{ fontSize: '14px' }}>Início</CriaTextBody1>
            </button>
            <button 
              onClick={() => window.location.href = '/#courses'}
              style={{
                padding: '8px 16px',
                border: 'none',
                backgroundColor: 'transparent',
                cursor: 'pointer',
                borderRadius: 'var(--cria-radius-sm)',
                fontSize: '14px'
              }}
            >
              <CriaTextBody1 style={{ fontSize: '14px' }}>Cursos</CriaTextBody1>
            </button>
            <button 
              onClick={() => window.location.href = '/#lessons'}
              style={{
                padding: '8px 16px',
                border: 'none',
                backgroundColor: 'transparent',
                cursor: 'pointer',
                borderRadius: 'var(--cria-radius-sm)',
                fontSize: '14px'
              }}
            >
              <CriaTextBody1 style={{ fontSize: '14px' }}>Aulas</CriaTextBody1>
            </button>
            <button 
              onClick={() => window.location.href = '/#settings'}
              style={{
                padding: '8px 16px',
                border: 'none',
                backgroundColor: 'transparent',
                cursor: 'pointer',
                borderRadius: 'var(--cria-radius-sm)',
                fontSize: '14px'
              }}
            >
              <CriaTextBody1 style={{ fontSize: '14px' }}>Configurações</CriaTextBody1>
            </button>
          </div>
        </div>
      }
    />
  );
};

export default Error404;
