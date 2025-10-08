import React, { useState } from 'react';
import { FloatingSidebar, FloatingSidebarItem } from './FloatingSidebar';
import { Typography } from '../Typography';
import { CriaTextHeadline1, CriaTextBody1 } from '../TextTokens';
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
        <div style={{ marginBottom: spacing.md }}>
          <CriaTextHeadline1>
            Floating Sidebar Component
          </CriaTextHeadline1>
        </div>
        <div style={{ color: '#666', marginBottom: spacing.lg }}>
          <CriaTextBody1>
            A floating sidebar with emblem image, navigation items, and user profile section.
          </CriaTextBody1>
        </div>
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
              <CriaTextHeadline1>
                Lorem Ipsum Content
              </CriaTextHeadline1>
            </div>
            
            <div style={{ marginBottom: spacing.md, lineHeight: 1.6 }}>
              <CriaTextBody1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </CriaTextBody1>
            </div>
            
            <div style={{ marginBottom: spacing.md, lineHeight: 1.6 }}>
              <CriaTextBody1>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </CriaTextBody1>
            </div>
            
            <div style={{ marginBottom: spacing.lg, lineHeight: 1.6 }}>
              <CriaTextBody1>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </CriaTextBody1>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FloatingSidebarDemo;
