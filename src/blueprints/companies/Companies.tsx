import React, { useState, useEffect } from 'react';
import CompaniesMainLayout from './components/CompaniesMainLayout';
import Dashboard from './pages/Dashboard';
import Alunos from './pages/Alunos';
import Assinaturas from './pages/Assinaturas';
import Insights from './pages/Insights';
import Trilhas from './pages/Trilhas';

type CompanyPage = 'dashboard' | 'alunos' | 'assinaturas' | 'insights' | 'trilhas';

const Companies: React.FC = () => {
  // Get initial page from URL hash, default to dashboard
  const getInitialPage = (): CompanyPage => {
    const hash = window.location.hash;
    // Look for #/companies/page pattern
    const companiesMatch = hash.match(/#\/companies\/([^\/]+)/);
    if (companiesMatch) {
      const page = companiesMatch[1] as CompanyPage;
      if (['dashboard', 'alunos', 'assinaturas', 'insights', 'trilhas'].includes(page)) {
        return page;
      }
    }
    return 'dashboard';
  };

  const [currentPage, setCurrentPage] = useState<CompanyPage>(getInitialPage);

  // Listen for hash changes within companies section
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const companiesMatch = hash.match(/#\/companies\/([^\/]+)/);
      if (companiesMatch) {
        const page = companiesMatch[1] as CompanyPage;
        if (['dashboard', 'alunos', 'assinaturas', 'insights', 'trilhas'].includes(page)) {
          setCurrentPage(page);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update hash when page changes (but don't interfere with BlueprintsApp navigation)
  const handlePageChange = (page: CompanyPage) => {
    setCurrentPage(page);
    // Update hash to maintain state
    const newHash = `#/companies/${page}`;
    if (window.location.hash !== newHash) {
      window.location.hash = newHash;
    }
  };

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
      onPageChange={handlePageChange}
    >
      {renderCurrentPage()}
    </CompaniesMainLayout>
  );
};

export default Companies;
