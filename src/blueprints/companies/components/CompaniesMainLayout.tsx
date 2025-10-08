import React from 'react';
import { CriaTextTitle1 } from '../../../components/TextTokens';
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
  const menuItems = [
    { id: 'dashboard', label: 'Visão Geral', icon: <House size={20} />, href: '/companies/dashboard' },
    { id: 'alunos', label: 'Alunos', icon: <Users size={20} />, href: '/companies/alunos' },
    { id: 'assinaturas', label: 'Assinaturas', icon: <CreditCard size={20} />, href: '/companies/assinaturas' },
    { id: 'insights', label: 'Insights', icon: <ChartBar size={20} />, href: '/companies/insights' },
    { id: 'trilhas', label: 'Trilhas', icon: <BookOpen size={20} />, href: '/companies/trilhas' },
  ];

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: 'var(--cria-bg-primary)'
    }}>
      {/* Sidebar */}
      <aside style={{
        width: '280px',
        backgroundColor: 'var(--cria-surface-primary)',
        borderRight: '1px solid var(--cria-border-primary)',
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        height: '100vh',
        left: 0,
        top: 0,
        zIndex: 100
      }}>
        {/* Header Section */}
        <div style={{
          padding: '24px',
          borderBottom: '1px solid var(--cria-border-primary)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '16px'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'var(--cria-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '16px'
            }}>
              {company.name.charAt(0)}
            </div>
            <div>
              <CriaTextTitle1 style={{ fontSize: '18px', margin: 0 }}>
                {company.name}
              </CriaTextTitle1>
            </div>
          </div>
          
          <button style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 12px',
            backgroundColor: 'transparent',
            border: '1px solid var(--cria-border-primary)',
            borderRadius: 'var(--cria-radius-sm)',
            color: 'var(--cria-text-secondary)',
            cursor: 'pointer',
            fontSize: '14px',
            width: '100%'
          }}>
            <ArrowLeft size={16} />
            Voltar para o site
          </button>
        </div>

        {/* Menu Section */}
        <nav style={{ flex: 1, padding: '16px 0' }}>
          <div style={{
            padding: '0 24px 16px',
            color: 'var(--cria-text-secondary)',
            fontSize: '12px',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            MENU
          </div>
          
          <div style={{ padding: '0 12px' }}>
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  borderRadius: 'var(--cria-radius-sm)',
                  color: currentPage === item.id ? 'var(--cria-primary)' : 'var(--cria-text-primary)',
                  backgroundColor: currentPage === item.id ? 'var(--cria-primary-50)' : 'transparent',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: currentPage === item.id ? '500' : '400',
                  transition: 'all 0.2s ease',
                  marginBottom: '4px'
                }}
                onMouseEnter={(e) => {
                  if (currentPage !== item.id) {
                    e.currentTarget.style.backgroundColor = 'var(--cria-surface-secondary)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentPage !== item.id) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
                aria-current={currentPage === item.id ? 'page' : undefined}
              >
                {item.icon}
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        {/* User Section */}
        <div style={{
          padding: '16px 24px',
          borderTop: '1px solid var(--cria-border-primary)',
          backgroundColor: 'var(--cria-surface-secondary)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: 'var(--cria-secondary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '14px'
            }}>
              {currentUser.displayName.charAt(0)}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{
                fontSize: '14px',
                fontWeight: '500',
                color: 'var(--cria-text-primary)',
                marginBottom: '2px'
              }}>
                {currentUser.displayName}
              </div>
              <div style={{
                fontSize: '12px',
                color: 'var(--cria-text-secondary)',
                marginBottom: '2px'
              }}>
                {currentUser.role}
              </div>
              <div style={{
                fontSize: '11px',
                color: 'var(--cria-text-tertiary)'
              }}>
                {currentUser.email}
              </div>
            </div>
          </div>
        </div>
      </aside>

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
