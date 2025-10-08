import React, { useState } from 'react';
import { CriaTextTitle1, CriaTextBody1 } from '../../../components/TextTokens';
import { NavigationSidebar } from '../../../components/Navigation';
import { ArrowLeft, House, Users, CreditCard, ChartBar, BookOpen, User } from 'phosphor-react';
import { company, currentUser } from '../mock/company';

interface CompaniesMainLayoutProps {
  children: React.ReactNode;
  currentPage?: string;
  onPageChange?: (page: string) => void;
  sidebarTheme?: 'default' | 'primary' | 'secondary';
}

const CompaniesMainLayout: React.FC<CompaniesMainLayoutProps> = ({ 
  children, 
  currentPage = 'dashboard',
  onPageChange,
  sidebarTheme = 'default'
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const handleNavigation = (pageId: string) => {
    if (onPageChange) {
      onPageChange(pageId);
    }
  };

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const sidebarItems = [
    { 
      id: 'dashboard', 
      label: 'Visão Geral', 
      icon: <House size={20} />,
      onClick: () => handleNavigation('dashboard')
    },
    { 
      id: 'alunos', 
      label: 'Alunos', 
      icon: <Users size={20} />,
      onClick: () => handleNavigation('alunos')
    },
    { 
      id: 'assinaturas', 
      label: 'Assinaturas', 
      icon: <CreditCard size={20} />,
      onClick: () => handleNavigation('assinaturas')
    },
    { 
      id: 'insights', 
      label: 'Insights', 
      icon: <ChartBar size={20} />,
      onClick: () => handleNavigation('insights')
    },
    { 
      id: 'trilhas', 
      label: 'Trilhas', 
      icon: <BookOpen size={20} />,
      onClick: () => handleNavigation('trilhas')
    },
  ];

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: 'var(--cria-bg-primary)',
      paddingTop: '60px' // Account for topbar height
    }}>
      {/* Navigation Sidebar with default theme */}
      <NavigationSidebar
        items={sidebarItems}
        activeRoute={currentPage}
        collapsed={isCollapsed}
        onToggle={handleToggle}
        theme={sidebarTheme}
        title="CRIA Studio"
        style={{ 
          position: 'fixed',
          top: '60px', // Start below topbar
          left: 0,
          height: 'calc(100vh - 60px)', // Full height minus topbar
          zIndex: 100
        }}
      />

      {/* Main Content */}
      <main style={{
        flex: 1,
        marginLeft: isCollapsed ? '60px' : '120px', // Dynamic margin based on collapsed state
        backgroundColor: 'var(--cria-bg-primary)',
        minHeight: 'calc(100vh - 60px)', // Account for topbar
        transition: 'margin-left 0.3s ease' // Smooth transition
      }}>
        {children}
      </main>
    </div>
  );
};

export default CompaniesMainLayout;
