import React, { useState } from 'react';
import { Button } from './Button';
import { Typography } from '../Typography/Typography';

/**
 * Button component demo
 */
export const ButtonDemo: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleLoadingClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div style={{ padding: '24px', maxWidth: '800px' }}>
      <Typography variant="title1" weight="bold" style={{ marginBottom: '32px' }}>
        Button Demo
      </Typography>

      {/* Variants */}
      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontFamily: 'var(--cria-font-family)', marginBottom: '16px' }}>
          Variantes
        </h2>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button variant="primary">Primário</Button>
          <Button variant="secondary">Secundário</Button>
          <Button variant="outline">Contorno</Button>
          <Button variant="ghost">Fantasma</Button>
          <Button variant="danger">Perigo</Button>
        </div>
      </section>

      {/* Sizes */}
      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontFamily: 'var(--cria-font-family)', marginBottom: '16px' }}>
          Tamanhos
        </h2>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button size="sm">Pequeno</Button>
          <Button size="md">Médio</Button>
          <Button size="lg">Grande</Button>
        </div>
      </section>

      {/* States */}
      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontFamily: 'var(--cria-font-family)', marginBottom: '16px' }}>
          Estados
        </h2>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button>Normal</Button>
          <Button loading>Carregando</Button>
          <Button disabled>Desabilitado</Button>
          <Button loading={loading} onClick={handleLoadingClick}>
            Clique para Carregar
          </Button>
        </div>
      </section>

      {/* With Icons */}
      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontFamily: 'var(--cria-font-family)', marginBottom: '16px' }}>
          Com Ícones
        </h2>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button leftIcon="←">Voltar</Button>
          <Button rightIcon="→">Próximo</Button>
          <Button leftIcon="★" rightIcon="★">Estrela</Button>
          <Button leftIcon="📧">Email</Button>
        </div>
      </section>

      {/* Full Width */}
      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontFamily: 'var(--cria-font-family)', marginBottom: '16px' }}>
          Largura Completa
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Button fullWidth>Botão de Largura Completa</Button>
          <Button variant="outline" fullWidth>Contorno de Largura Completa</Button>
        </div>
      </section>

      {/* Hover Effects */}
      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontFamily: 'var(--cria-font-family)', marginBottom: '16px' }}>
          Efeitos de Hover
        </h2>
        <p style={{ fontFamily: 'var(--cria-font-family)', color: '#6B7280', marginBottom: '16px', fontSize: '14px' }}>
          Passe o mouse sobre os botões para ver os efeitos de hover
        </p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button variant="primary">Primário</Button>
          <Button variant="secondary">Secundário</Button>
          <Button variant="outline">Contorno</Button>
          <Button variant="ghost">Fantasma</Button>
          <Button variant="danger">Perigo</Button>
        </div>
      </section>

      {/* Interactive Examples */}
      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontFamily: 'var(--cria-font-family)', marginBottom: '16px' }}>
          Exemplos Interativos
        </h2>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button onClick={() => alert('Primário clicado!')}>Clique em Mim</Button>
          <Button variant="secondary" onClick={() => console.log('Secundário clicado!')}>
            Log no Console
          </Button>
          <Button variant="outline" onClick={() => window.open('https://example.com', '_blank')}>
            Link Externo
          </Button>
        </div>
      </section>

      {/* Accessibility */}
      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontFamily: 'var(--cria-font-family)', marginBottom: '16px' }}>
          Acessibilidade
        </h2>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button aria-label="Fechar diálogo">×</Button>
          <Button aria-describedby="help-text">Ajuda</Button>
          <Button disabled aria-label="Esta ação não está disponível">
            Indisponível
          </Button>
        </div>
        <p id="help-text" style={{ fontSize: '14px', color: '#6B7280', marginTop: '8px' }}>
          Este botão fornece informações de ajuda adicionais.
        </p>
      </section>
    </div>
  );
};

export default ButtonDemo;
