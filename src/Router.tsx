import React, { useState, useEffect } from 'react';
import App from './App';
import BlueprintsApp from './BlueprintsApp';

type Route = 'design-system' | 'blueprints';

const Router: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<Route>('design-system');

  useEffect(() => {
    // Check URL hash for routing
    const hash = window.location.hash.slice(1);
    if (hash === 'blueprints' || hash.startsWith('companies')) {
      setCurrentRoute('blueprints');
    } else {
      setCurrentRoute('design-system');
    }
  }, []);

  useEffect(() => {
    // Listen for hash changes
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash === 'blueprints' || hash.startsWith('companies')) {
        setCurrentRoute('blueprints');
      } else {
        setCurrentRoute('design-system');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToBlueprints = () => {
    window.location.hash = '#blueprints';
    setCurrentRoute('blueprints');
  };

  const navigateToDesignSystem = () => {
    window.location.hash = '#overview';
    setCurrentRoute('design-system');
  };

  // Pass navigation functions to the apps
  if (currentRoute === 'blueprints') {
    return <BlueprintsApp onBackToDesignSystem={navigateToDesignSystem} />;
  }

  return <App onNavigateToBlueprints={navigateToBlueprints} />;
};

export default Router;
