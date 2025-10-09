import React, { useState, useEffect } from 'react';
import LabMainLayout from './components/LabMainLayout';
import Home from './pages/Home';
import CursosTrilhas from './pages/CursosTrilhas';
import AulasTutoriais from './pages/AulasTutoriais';
import MinhasAulas from './pages/MinhasAulas';
import Eventos from './pages/Eventos';
import CatalogoPrompts from './pages/CatalogoPrompts';
import CaixaFerramentas from './pages/CaixaFerramentas';

type LabPage = 'home' | 'cursos-trilhas' | 'aulas-tutoriais' | 'minhas-aulas' | 'eventos' | 'catalogo-prompts' | 'caixa-ferramentas';
type SidebarTheme = 'default' | 'primary' | 'secondary';

interface LabProps {
  sidebarTheme?: SidebarTheme;
}

const Lab: React.FC<LabProps> = ({ sidebarTheme = 'default' }) => {
  // Get initial page from URL hash, default to home
  const getInitialPage = (): LabPage => {
    const hash = window.location.hash;
    // Look for #/lab/page pattern
    const labMatch = hash.match(/#\/lab\/([^\/]+)/);
    if (labMatch) {
      const page = labMatch[1] as LabPage;
      const validPages = ['home', 'cursos-trilhas', 'aulas-tutoriais', 'minhas-aulas', 'eventos', 'catalogo-prompts', 'caixa-ferramentas'];
      if (validPages.includes(page)) {
        return page;
      }
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<LabPage>(getInitialPage);

  // Listen for hash changes within lab section
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const labMatch = hash.match(/#\/lab\/([^\/]+)/);
      if (labMatch) {
        const page = labMatch[1] as LabPage;
        const validPages = ['home', 'cursos-trilhas', 'aulas-tutoriais', 'minhas-aulas', 'eventos', 'catalogo-prompts', 'caixa-ferramentas'];
        if (validPages.includes(page)) {
          setCurrentPage(page);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update hash when page changes
  const handlePageChange = (page: LabPage) => {
    setCurrentPage(page);
    // Update hash to maintain state
    const newHash = `#/lab/${page}`;
    if (window.location.hash !== newHash) {
      window.location.hash = newHash;
    }
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'cursos-trilhas':
        return <CursosTrilhas />;
      case 'aulas-tutoriais':
        return <AulasTutoriais />;
      case 'minhas-aulas':
        return <MinhasAulas />;
      case 'eventos':
        return <Eventos />;
      case 'catalogo-prompts':
        return <CatalogoPrompts />;
      case 'caixa-ferramentas':
        return <CaixaFerramentas />;
      case 'home':
      default:
        return <Home />;
    }
  };

  return (
    <LabMainLayout 
      currentPage={currentPage}
      onPageChange={handlePageChange}
      sidebarTheme={sidebarTheme}
    >
      {renderCurrentPage()}
    </LabMainLayout>
  );
};

export default Lab;

