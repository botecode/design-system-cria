import React from 'react';
import { FloatingSidebar } from '../../../components/FloatingSidebar';
import sidebarHomeIcon from '../../../assets/sidebar/sidebar_home.svg';
import sidebarCoursesIcon from '../../../assets/sidebar/sidebar_courses.svg';
import sidebarTutorialsIcon from '../../../assets/sidebar/sidebar_tutorials.svg';
import sidebarMyLessonsIcon from '../../../assets/sidebar/sidebar_mylessons.svg';
import sidebarEventsIcon from '../../../assets/sidebar/sidebar_events.svg';
import sidebarPromptsIcon from '../../../assets/sidebar/sidebar_prompts.svg';
import sidebarToolsIcon from '../../../assets/sidebar/sidebar_tools.svg';

interface LabMainLayoutProps {
  children: React.ReactNode;
  currentPage?: string;
  onPageChange?: (page: string) => void;
  sidebarTheme?: 'default' | 'primary' | 'secondary';
}

const LabMainLayout: React.FC<LabMainLayoutProps> = ({ 
  children, 
  currentPage = 'home',
  onPageChange,
  sidebarTheme = 'default'
}) => {
  const handleNavigation = (pageId: string) => {
    if (onPageChange) {
      onPageChange(pageId);
    }
  };

  const sidebarItems = [
    { 
      id: 'home', 
      label: 'HOME', 
      icon: sidebarHomeIcon,
      onClick: () => handleNavigation('home'),
      active: currentPage === 'home'
    },
    { 
      id: 'cursos-trilhas', 
      label: 'CURSOS & TRILHAS', 
      icon: sidebarCoursesIcon,
      onClick: () => handleNavigation('cursos-trilhas'),
      active: currentPage === 'cursos-trilhas'
    },
    { 
      id: 'aulas-tutoriais', 
      label: 'AULAS-TUTORIAIS', 
      icon: sidebarTutorialsIcon,
      onClick: () => handleNavigation('aulas-tutoriais'),
      active: currentPage === 'aulas-tutoriais'
    },
    { 
      id: 'minhas-aulas', 
      label: 'MINHAS AULAS', 
      icon: sidebarMyLessonsIcon,
      onClick: () => handleNavigation('minhas-aulas'),
      active: currentPage === 'minhas-aulas'
    },
    { 
      id: 'eventos', 
      label: 'EVENTOS', 
      icon: sidebarEventsIcon,
      onClick: () => handleNavigation('eventos'),
      active: currentPage === 'eventos'
    },
    { 
      id: 'catalogo-prompts', 
      label: 'CATÁLOGO DE PROMPTS', 
      icon: sidebarPromptsIcon,
      onClick: () => handleNavigation('catalogo-prompts'),
      active: currentPage === 'catalogo-prompts'
    },
    { 
      id: 'caixa-ferramentas', 
      label: 'CAIXA DE FERRAMENTAS', 
      icon: sidebarToolsIcon,
      onClick: () => handleNavigation('caixa-ferramentas'),
      active: currentPage === 'caixa-ferramentas'
    },
  ];

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: 'var(--cria-bg-primary)',
      paddingTop: '60px' // Account for topbar height
    }}>
      {/* Floating Sidebar */}
      <FloatingSidebar
        title="CR_IA.lab"
        subtitle="(beta)"
        items={sidebarItems}
        user={{
          name: 'Lab User',
          avatar: '',
          class: 'Developer'
        }}
        style={{ 
          top: '80px', // Position below topbar with some spacing
        }}
      />

      {/* Main Content Area */}
      <main style={{
        flex: 1,
        marginLeft: '320px', // Fixed margin for floating sidebar (280px width + 40px spacing)
        backgroundColor: 'var(--cria-bg-primary)',
        minHeight: 'calc(100vh - 60px)', // Account for topbar
        padding: '2rem'
      }}>
        {children}
      </main>
    </div>
  );
};

export default LabMainLayout;

