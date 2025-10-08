import React from 'react';
import { CriaCardError } from '../index.ts';
import { CriaTextBody1 } from '../components/TextTokens';
import { Warning, House } from 'phosphor-react';

const Error500: React.FC = () => {
  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <CriaCardError
      errorCode="500"
      title="Erro interno do servidor"
      message="Ops! Algo deu errado por aqui. Estamos trabalhando para resolver o problema. Tente novamente em alguns instantes."
      icon={<Warning size={48} />}
      iconBackgroundColor="var(--cria-error-50)"
      iconColor="var(--cria-error-500)"
      errorCodeColor="var(--cria-error-500)"
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
          Se o problema persistir, entre em contato com nossa equipe de suporte ou confira a página de status para mais informações.
        </CriaTextBody1>
      }
    />
  );
};

export default Error500;
