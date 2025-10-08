import React, { useState } from 'react';
import CompaniesMainLayout from './components/CompaniesMainLayout';
import Dashboard from './pages/Dashboard';
import Alunos from './pages/Alunos';
import Assinaturas from './pages/Assinaturas';
import Insights from './pages/Insights';
import Trilhas from './pages/Trilhas';

type CompanyPage = 'dashboard' | 'alunos' | 'assinaturas' | 'insights' | 'trilhas';

const Companies: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<CompanyPage>('dashboard');

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
    <CompaniesMainLayout currentPage={currentPage}>
      {renderCurrentPage()}
    </CompaniesMainLayout>
  );
};

export default Companies;
