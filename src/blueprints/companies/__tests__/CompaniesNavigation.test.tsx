import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Companies from '../Companies';
import CompaniesMainLayout from '../components/CompaniesMainLayout';

// Mock the Navigation component to avoid external dependencies
jest.mock('../../../components/Navigation', () => ({
  NavigationSidebar: ({ items, onPageChange, ...props }: any) => (
    <div data-testid="navigation-sidebar" {...props}>
      {items.map((item: any) => (
        <button
          key={item.id}
          data-testid={`nav-item-${item.id}`}
          onClick={item.onClick}
          style={{ 
            backgroundColor: item.id === props.activeRoute ? 'var(--cria-primary)' : 'transparent',
            color: item.id === props.activeRoute ? 'white' : 'var(--cria-text-primary)'
          }}
        >
          {item.icon}
          {item.label}
        </button>
      ))}
    </div>
  )
}));

// Mock the page components
jest.mock('../pages/Dashboard', () => () => <div data-testid="dashboard-page">Dashboard Page</div>);
jest.mock('../pages/Alunos', () => () => <div data-testid="alunos-page">Alunos Page</div>);
jest.mock('../pages/Assinaturas', () => () => <div data-testid="assinaturas-page">Assinaturas Page</div>);
jest.mock('../pages/Insights', () => () => <div data-testid="insights-page">Insights Page</div>);
jest.mock('../pages/Trilhas', () => () => <div data-testid="trilhas-page">Trilhas Page</div>);

describe('Companies Navigation', () => {
  beforeEach(() => {
    // Reset localStorage and URL hash before each test
    localStorage.clear();
    window.location.hash = '#/companies/dashboard';
  });

  test('renders dashboard by default', () => {
    render(<Companies />);
    expect(screen.getByTestId('dashboard-page')).toBeInTheDocument();
  });

  test('navigates to insights page when insights nav item is clicked', () => {
    render(<Companies />);
    
    // Find and click the insights navigation item
    const insightsNavItem = screen.getByTestId('nav-item-insights');
    expect(insightsNavItem).toBeInTheDocument();
    
    // Click the insights nav item
    fireEvent.click(insightsNavItem);
    
    // Should render insights page
    expect(screen.getByTestId('insights-page')).toBeInTheDocument();
    expect(screen.queryByTestId('dashboard-page')).not.toBeInTheDocument();
  });

  test('navigates to alunos page when alunos nav item is clicked', () => {
    render(<Companies />);
    
    const alunosNavItem = screen.getByTestId('nav-item-alunos');
    fireEvent.click(alunosNavItem);
    
    expect(screen.getByTestId('alunos-page')).toBeInTheDocument();
  });

  test('navigates to assinaturas page when assinaturas nav item is clicked', () => {
    render(<Companies />);
    
    const assinaturasNavItem = screen.getByTestId('nav-item-assinaturas');
    fireEvent.click(assinaturasNavItem);
    
    expect(screen.getByTestId('assinaturas-page')).toBeInTheDocument();
  });

  test('navigates to trilhas page when trilhas nav item is clicked', () => {
    render(<Companies />);
    
    const trilhasNavItem = screen.getByTestId('nav-item-trilhas');
    fireEvent.click(trilhasNavItem);
    
    expect(screen.getByTestId('trilhas-page')).toBeInTheDocument();
  });

  test('updates URL hash when navigating', () => {
    render(<Companies />);
    
    const insightsNavItem = screen.getByTestId('nav-item-insights');
    fireEvent.click(insightsNavItem);
    
    // Check if URL hash was updated
    expect(window.location.hash).toBe('#/companies/insights');
  });

  test('restores page from URL hash on initial load', () => {
    // Set URL hash to insights before rendering
    window.location.hash = '#/companies/insights';
    
    render(<Companies />);
    
    // Should render insights page based on URL
    expect(screen.getByTestId('insights-page')).toBeInTheDocument();
  });

  test('handles invalid URL hash gracefully', () => {
    // Set invalid URL hash
    window.location.hash = '#/companies/invalid';
    
    render(<Companies />);
    
    // Should fallback to dashboard
    expect(screen.getByTestId('dashboard-page')).toBeInTheDocument();
  });

  test('navigation items have correct labels', () => {
    render(<Companies />);
    
    expect(screen.getByTestId('nav-item-dashboard')).toHaveTextContent('Visão Geral');
    expect(screen.getByTestId('nav-item-alunos')).toHaveTextContent('Alunos');
    expect(screen.getByTestId('nav-item-assinaturas')).toHaveTextContent('Assinaturas');
    expect(screen.getByTestId('nav-item-insights')).toHaveTextContent('Insights');
    expect(screen.getByTestId('nav-item-trilhas')).toHaveTextContent('Trilhas');
  });

  test('active navigation item is highlighted', () => {
    render(<Companies />);
    
    // Dashboard should be active by default
    const dashboardNavItem = screen.getByTestId('nav-item-dashboard');
    expect(dashboardNavItem).toHaveStyle('background-color: var(--cria-primary)');
    
    // Click insights
    const insightsNavItem = screen.getByTestId('nav-item-insights');
    fireEvent.click(insightsNavItem);
    
    // Insights should now be active
    expect(insightsNavItem).toHaveStyle('background-color: var(--cria-primary)');
    expect(dashboardNavItem).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
  });
});
