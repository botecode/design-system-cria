import React from 'react';
import { CriaCardError } from '../index.ts';
import { CriaTextBody1 } from '../components/TextTokens';
import { House } from 'phosphor-react';

const Error500: React.FC = () => {
  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <CriaCardError
      errorCode="500"
      title="Erro interno do servidor"
      message="Ops! Algo deu errado por aqui. Estamos trabalhando para resolver o problema. Tente novamente em alguns instantes."
      image="https://uploads-ssl.webflow.com/655b905d99360c01ec912345/659da4fff83368ab6b700270_typewriter.png"
      errorType="error"
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
