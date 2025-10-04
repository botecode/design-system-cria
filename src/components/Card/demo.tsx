import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from './Card';
import { Button } from '../Button';
import Typography from '../Typography/Typography';

/**
 * Card component demo
 */
export const CardDemo: React.FC = () => {
  return (
    <div style={{ padding: '24px', maxWidth: '1000px' }}>
      <Typography variant="title1" weight="bold" style={{ marginBottom: '32px' }}>
        Demo de Cards
      </Typography>

      {/* Variants */}
      <section style={{ marginBottom: '32px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Variantes
        </Typography>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
          <Card variant="default">
            <CardHeader>
              <Typography variant="h3" weight="medium">
                Card Padrão
              </Typography>
            </CardHeader>
            <CardContent>
              <Typography variant="body">
                Este é um card padrão com borda e fundo claros.
              </Typography>
            </CardContent>
          </Card>

          <Card variant="elevated">
            <CardHeader>
              <Typography variant="h3" weight="medium">
                Card Elevado
              </Typography>
            </CardHeader>
            <CardContent>
              <Typography variant="body">
                Este card tem uma sombra para profundidade e hierarquia visual.
              </Typography>
            </CardContent>
          </Card>

          <Card variant="outlined">
            <CardHeader>
              <Typography variant="h3" weight="medium">
                Card com Contorno
              </Typography>
            </CardHeader>
            <CardContent>
              <Typography variant="body">
                Este card tem uma borda proeminente e fundo transparente.
              </Typography>
            </CardContent>
          </Card>

          <Card variant="filled">
            <CardHeader>
              <Typography variant="h3" weight="medium">
                Card Preenchido
              </Typography>
            </CardHeader>
            <CardContent>
              <Typography variant="body">
                Este card tem um preenchimento sutil de cor de fundo.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sizes */}
      <section style={{ marginBottom: '32px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Tamanhos
        </Typography>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <Card size="sm" style={{ width: '200px' }}>
            <CardContent>
              <Typography variant="bodySmall">
                Card pequeno com preenchimento mínimo
              </Typography>
            </CardContent>
          </Card>

          <Card size="md" style={{ width: '250px' }}>
            <CardContent>
              <Typography variant="body">
                Card médio com preenchimento padrão
              </Typography>
            </CardContent>
          </Card>

          <Card size="lg" style={{ width: '300px' }}>
            <CardContent>
              <Typography variant="body">
                Card grande com preenchimento generoso para mais conteúdo
              </Typography>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Interactive Cards */}
      <section style={{ marginBottom: '32px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Cards Interativos
        </Typography>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
          <Card 
            interactive 
            onClick={() => alert('Card clicado!')}
            style={{ cursor: 'pointer' }}
          >
            <CardHeader>
              <Typography variant="h3" weight="medium">
                Card Clicável
              </Typography>
            </CardHeader>
            <CardContent>
              <Typography variant="body">
                Este card é interativo e responde a cliques.
              </Typography>
            </CardContent>
          </Card>

          <Card interactive disabled>
            <CardHeader>
              <Typography variant="h3" color="disabled" weight="medium">
                Card Desabilitado
              </Typography>
            </CardHeader>
            <CardContent>
              <Typography variant="body" color="disabled">
                Este card está desabilitado e não pode ser interagido.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Complex Card Examples */}
      <section style={{ marginBottom: '32px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Exemplos Complexos
        </Typography>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '16px' }}>
          {/* Product Card */}
          <Card variant="elevated">
            <CardContent>
              <div style={{ 
                height: '200px', 
                backgroundColor: '#f3f4f6', 
                borderRadius: '8px', 
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#6b7280'
              }}>
                Imagem do Produto
              </div>
              <Typography variant="h3" weight="medium" style={{ marginBottom: '8px' }}>
                Nome do Produto
              </Typography>
              <Typography variant="body" style={{ marginBottom: '16px' }}>
                Esta é uma descrição do produto que explica o que o produto faz e por que é útil.
              </Typography>
            </CardContent>
            <CardFooter>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h3" weight="bold">
                  R$ 99,99
                </Typography>
                <Button size="sm">Adicionar ao Carrinho</Button>
              </div>
            </CardFooter>
          </Card>

          {/* User Profile Card */}
          <Card variant="outlined">
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  borderRadius: '50%', 
                  backgroundColor: '#7566A1',
                  marginRight: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold'
                }}>
                  JD
                </div>
                <div>
                  <Typography variant="h3" weight="medium">
                    João Silva
                  </Typography>
                  <Typography variant="bodySmall">
                    Engenheiro de Software
                  </Typography>
                </div>
              </div>
              <Typography variant="body" style={{ marginBottom: '16px' }}>
                Apaixonado por construir grandes experiências de usuário e resolver problemas complexos.
              </Typography>
            </CardContent>
            <CardFooter>
              <div style={{ display: 'flex', gap: '8px' }}>
                <Button variant="outline" size="sm">Mensagem</Button>
                <Button size="sm">Seguir</Button>
              </div>
            </CardFooter>
          </Card>

          {/* Stats Card */}
          <Card variant="filled">
            <CardContent>
              <Typography variant="h3" weight="medium" style={{ marginBottom: '8px' }}>
                Receita Total
              </Typography>
              <Typography variant="display" weight="bold" style={{ marginBottom: '8px' }}>
                R$ 12.345
              </Typography>
              <Typography variant="bodySmall" color="success">
                ↗ +12,5% do mês passado
              </Typography>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Card with Actions */}
      <section style={{ marginBottom: '32px' }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: '16px' }}>
          Cards com Ações
        </Typography>
        <Card variant="elevated" style={{ maxWidth: '500px' }}>
          <CardHeader>
            <Typography variant="h3" weight="medium">
              Configurações
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography variant="body" style={{ marginBottom: '16px' }}>
              Gerencie suas configurações de conta e preferências.
            </Typography>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="body">Notificações por Email</Typography>
                <Button variant="outline" size="sm">Alternar</Button>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="body">Modo Escuro</Typography>
                <Button variant="outline" size="sm">Alternar</Button>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
              <Button variant="ghost" size="sm">Cancelar</Button>
              <Button size="sm">Salvar Alterações</Button>
            </div>
          </CardFooter>
        </Card>
      </section>
    </div>
  );
};

export default CardDemo;
