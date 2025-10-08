import React, { useState, useEffect } from 'react';
import CompaniesMainLayout from './components/CompaniesMainLayout';
import Dashboard from './pages/Dashboard';
import Alunos from './pages/Alunos';
import Assinaturas from './pages/Assinaturas';
import Insights from './pages/Insights';
import Trilhas from './pages/Trilhas';

type CompanyPage = 'dashboard' | 'alunos' | 'assinaturas' | 'insights' | 'trilhas';

const Companies: React.FC = () => {
  // Get initial page from URL hash or localStorage, default to dashboard
  const getInitialPage = (): CompanyPage => {
    const hash = window.location.hash;
    const urlPage = hash.replace('#/companies/', '') as CompanyPage;
    
    if (['dashboard', 'alunos', 'assinaturas', 'insights', 'trilhas'].includes(urlPage)) {
      return urlPage;
    }
    
    // Fallback to localStorage
    const savedPage = localStorage.getItem('companies-current-page') as CompanyPage;
    if (savedPage && ['dashboard', 'alunos', 'assinaturas', 'insights', 'trilhas'].includes(savedPage)) {
      return savedPage;
    }
    
    return 'dashboard';
  };

  const [currentPage, setCurrentPage] = useState<CompanyPage>(getInitialPage);

  // Update URL hash and localStorage when page changes
  useEffect(() => {
    const hash = `#/companies/${currentPage}`;
    window.location.hash = hash;
    localStorage.setItem('companies-current-page', currentPage);
  }, [currentPage]);

  // Listen for hash changes (back/forward buttons)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const urlPage = hash.replace('#/companies/', '') as CompanyPage;
      
      if (['dashboard', 'alunos', 'assinaturas', 'insights', 'trilhas'].includes(urlPage)) {
        setCurrentPage(urlPage);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'alunos':
        return <Alunos />;
      case 'assinaturas':
        return <Assinaturas />;
      case 'insights':
        return <Insights />;
      case 'trilhas':
        return <Trilhas />;
      case 'dashboard':
      default:
        return <Dashboard />;
    }
  };

  return (
    <CompaniesMainLayout 
      currentPage={currentPage}
      onPageChange={setCurrentPage}
    >
      {renderCurrentPage()}
    </CompaniesMainLayout>
  );
};

export default Companies;
