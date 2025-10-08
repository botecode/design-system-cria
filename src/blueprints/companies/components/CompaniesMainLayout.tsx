import React from 'react';
import { CriaTextTitle1, CriaTextBody1 } from '../../../components/TextTokens';
import { Sidebar } from '../../../components/Sidebar';
import { ArrowLeft, House, Users, CreditCard, ChartBar, BookOpen, User } from 'phosphor-react';
import { company, currentUser } from '../mock/company';

interface CompaniesMainLayoutProps {
  children: React.ReactNode;
  currentPage?: string;
}

const CompaniesMainLayout: React.FC<CompaniesMainLayoutProps> = ({ 
  children, 
  currentPage = 'dashboard' 
}) => {
  const sidebarItems = [
    { 
      id: 'dashboard', 
      label: 'Visão Geral', 
      icon: <House size={20} />,
      content: (
        <div style={{ padding: '16px' }}>
          <CriaTextBody1>Conteúdo da Visão Geral</CriaTextBody1>
        </div>
      )
    },
    { 
      id: 'alunos', 
      label: 'Alunos', 
      icon: <Users size={20} />,
      content: (
        <div style={{ padding: '16px' }}>
          <CriaTextBody1>Conteúdo dos Alunos</CriaTextBody1>
        </div>
      )
    },
    { 
      id: 'assinaturas', 
      label: 'Assinaturas', 
      icon: <CreditCard size={20} />,
      content: (
        <div style={{ padding: '16px' }}>
          <CriaTextBody1>Conteúdo das Assinaturas</CriaTextBody1>
        </div>
      )
    },
    { 
      id: 'insights', 
      label: 'Insights', 
      icon: <ChartBar size={20} />,
      content: (
        <div style={{ padding: '16px' }}>
          <CriaTextBody1>Conteúdo dos Insights</CriaTextBody1>
        </div>
      )
    },
    { 
      id: 'trilhas', 
      label: 'Trilhas', 
      icon: <BookOpen size={20} />,
      content: (
        <div style={{ padding: '16px' }}>
          <CriaTextBody1>Conteúdo das Trilhas</CriaTextBody1>
        </div>
      )
    },
  ];

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: 'var(--cria-bg-primary)'
    }}>
      {/* CriaSidebar with secondary color */}
      <Sidebar
        items={sidebarItems}
        activeItem={currentPage}
        variant="default"
        size="lg"
        showContent={false}
        style={{
          width: '280px',
          backgroundColor: 'var(--cria-surface-secondary)',
          borderRight: '1px solid var(--cria-border-primary)',
          position: 'fixed',
          height: '100vh',
          left: 0,
          top: 0,
          zIndex: 100
        }}
      />

      {/* Main Content */}
      <main style={{
        flex: 1,
        marginLeft: '280px',
        padding: '24px',
        backgroundColor: 'var(--cria-bg-primary)',
        minHeight: '100vh'
      }}>
        {children}
      </main>
    </div>
  );
};

export default CompaniesMainLayout;
