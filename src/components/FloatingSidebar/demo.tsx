import React, { useState } from 'react';
import { FloatingSidebar, FloatingSidebarItem } from './FloatingSidebar';
import { Typography } from '../Typography';
import { Card, CardContent, CardHeader } from '../Card';
import { spacing } from '../../tokens';

export const FloatingSidebarDemo: React.FC = () => {
  const [activeItem, setActiveItem] = useState('cursos');

  const sidebarItems: FloatingSidebarItem[] = [
    { id: 'home', label: 'HOME', active: activeItem === 'home', icon: '/src/assets/sidebar/sidebar_home.svg' },
    { id: 'cursos', label: 'CURSOS & TRILHAS', active: activeItem === 'cursos', icon: '/src/assets/sidebar/sidebar_courses.svg' },
    { id: 'aulas', label: 'AULAS-TUTORIAIS', active: activeItem === 'aulas', icon: '/src/assets/sidebar/sidebar_tutorials.svg' },
    { id: 'minhas-aulas', label: 'MINHAS AULAS', active: activeItem === 'minhas-aulas', icon: '/src/assets/sidebar/sidebar_mylessons.svg' },
    { id: 'eventos', label: 'EVENTOS', active: activeItem === 'eventos', icon: '/src/assets/sidebar/sidebar_events.svg' },
    { id: 'prompts', label: 'CATÁLOGO DE PROMPTS', active: activeItem === 'prompts', icon: '/src/assets/sidebar/sidebar_prompts.svg' },
    { id: 'ferramentas', label: 'CAIXA DE FERRAMENTAS', active: activeItem === 'ferramentas', icon: '/src/assets/sidebar/sidebar_tools.svg' },
  ];

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId);
  };

  const user = {
    name: 'ADMIN',
    class: 'TURMA CR_IA',
    avatar: 'https://via.placeholder.com/40x40/28DDB9/FFFFFF?text=A',
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
        title="CR_IA.lab"
        subtitle="(beta)"
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

            {/* Show Lorem Ipsum Section */}
            <div style={{ marginTop: spacing.lg, textAlign: 'center' }}>
              <button style={{
                background: 'transparent',
                color: '#7566A1',
                border: '2px solid #7566A1',
                padding: `${spacing.sm} ${spacing.lg}`,
                borderRadius: spacing.sm,
                cursor: 'pointer',
                fontWeight: '500',
                fontSize: '14px',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#7566A1';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#7566A1';
              }}>
                Show lorem ipsum
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FloatingSidebarDemo;
