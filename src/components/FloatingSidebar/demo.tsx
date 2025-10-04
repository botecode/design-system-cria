import React, { useState } from 'react';
import { FloatingSidebar, FloatingSidebarItem } from './FloatingSidebar';
import { Typography } from '../Typography';
import { Card, CardContent, CardHeader } from '../Card';
import { spacing } from '../../tokens';

export const FloatingSidebarDemo: React.FC = () => {
  const [activeItem, setActiveItem] = useState('cursos');

  const sidebarItems: FloatingSidebarItem[] = [
    { id: 'cursos', label: 'CURSOS', active: activeItem === 'cursos' },
    { id: 'aulas', label: 'AULAS & TUTORIAIS', active: activeItem === 'aulas' },
    { id: 'eventos', label: 'EVENTOS', active: activeItem === 'eventos' },
    { id: 'prompts', label: 'CATÁLOGO DE PROMPTS', active: activeItem === 'prompts' },
    { id: 'ferramentas', label: 'CAIXA DE FERRAMENTAS', active: activeItem === 'ferramentas' },
    { id: 'discord', label: 'COMUNIDADE NO DISCORD', active: activeItem === 'discord' },
  ];

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId);
  };

  const user = {
    name: 'FERNANDO FEITOSA',
    class: 'TURMA #026',
    avatar: 'https://via.placeholder.com/40x40/28DDB9/FFFFFF?text=FF',
  };

  return (
    <div style={{ padding: spacing.lg, minHeight: '100vh', background: '#f5f5f5' }}>
      <div style={{ marginBottom: spacing.xl }}>
        <Typography variant="title1" style={{ marginBottom: spacing.md }}>
          Floating Sidebar Component
        </Typography>
        <Typography variant="body" style={{ color: '#666', marginBottom: spacing.lg }}>
          A floating sidebar with emblem image, navigation items, and user profile section.
        </Typography>
      </div>

      {/* Floating Sidebar */}
      <FloatingSidebar
        title="CRIA.lab"
        items={sidebarItems.map(item => ({
          ...item,
          onClick: () => handleItemClick(item.id),
        }))}
        user={user}
        emblemImage="/src/assets/cria_emblem.png"
      />

      {/* Main Content Area */}
      <div style={{
        marginLeft: 320, // Account for sidebar width + margin
        padding: spacing.lg,
      }}>
        <Card>
          <CardHeader>
            <Typography variant="title2">Main Content Area</Typography>
          </CardHeader>
          <CardContent>
            <div style={{ marginBottom: spacing.lg }}>
              <Typography variant="caption" style={{ color: '#666', marginBottom: spacing.sm }}>
                TURMA #026
              </Typography>
              <Typography variant="title1" style={{ marginBottom: spacing.md }}>
                VAMOS CRIAR, FERNANDO?
              </Typography>
              <Typography variant="body" style={{ color: '#666' }}>
                Você tem acesso ao conteúdo através do menu lateral e aos cursos introdutórios abaixo.
              </Typography>
            </div>

            {/* Course Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: spacing.lg,
              marginBottom: spacing.xl,
            }}>
              {[
                {
                  title: 'CURSO #01 INTRO À IA',
                  description: 'Fundamentos da Inteligência Artificial e suas aplicações práticas.',
                },
                {
                  title: 'CURSO #02 PRODUTIVIDADE',
                  description: 'Técnicas avançadas para maximizar sua produtividade com IA.',
                },
                {
                  title: 'CURSO #03 CRIAÇÃO',
                  description: 'Crie conteúdo incrível usando ferramentas de IA generativa.',
                },
              ].map((course, index) => (
                <Card key={index} style={{
                  background: '#7566A1',
                  color: 'white',
                  border: 'none',
                }}>
                  <CardContent style={{ padding: spacing.lg }}>
                    <Typography variant="title3" style={{ 
                      color: 'white', 
                      marginBottom: spacing.sm,
                      fontWeight: 'bold',
                    }}>
                      {course.title}
                    </Typography>
                    <Typography variant="body" style={{ 
                      color: 'rgba(255, 255, 255, 0.9)',
                      marginBottom: spacing.md,
                    }}>
                      {course.description}
                    </Typography>
                    <button style={{
                      background: 'rgba(255, 255, 255, 0.2)',
                      color: 'white',
                      border: 'none',
                      padding: `${spacing.sm} ${spacing.md}`,
                      borderRadius: spacing.sm,
                      cursor: 'pointer',
                      fontWeight: '500',
                    }}>
                      COMEÇAR
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Attention Section */}
            <Card style={{
              border: '2px solid #7566A1',
              background: 'white',
            }}>
              <CardContent style={{ padding: spacing.lg }}>
                <Typography variant="title2" style={{ 
                  color: '#333',
                  marginBottom: spacing.md,
                  fontWeight: 'bold',
                }}>
                  ATENÇÃO!
                </Typography>
                <Typography variant="body" style={{ color: '#333', lineHeight: 1.6 }}>
                  Os alunos da Turma #026 receberam uma aula extra ao vivo sobre IA em audiovisual e criação de imagens, 
                  complementando o tutorial anterior. Enquanto a aula anterior focou em técnicas de prompt e chatbots, 
                  esta nova aula cobrirá o workflow de criação de imagens e vídeos, ferramentas, referências visuais 
                  e possibilidades reais de criação.
                </Typography>
                <Typography variant="body" style={{ 
                  color: '#333', 
                  marginTop: spacing.md,
                  fontWeight: '500',
                }}>
                  O link pra aula está aqui embaixo:
                </Typography>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FloatingSidebarDemo;
