import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AgentDev } from '../index';

// Mock the Drawer component
jest.mock('../../Drawer', () => ({
  Drawer: ({ children, isOpen, onClose }: any) => (
    isOpen ? (
      <div data-testid="drawer" onClick={onClose}>
        {children}
      </div>
    ) : null
  )
}));

describe('AgentDev', () => {
  const defaultProps = {
    isOpen: true,
    onClose: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    render(<AgentDev {...defaultProps} />);
    expect(screen.getByTestId('drawer')).toBeInTheDocument();
  });

  it('displays the header with title and icon', () => {
    render(<AgentDev {...defaultProps} />);
    expect(screen.getByText('Agent Dev')).toBeInTheDocument();
    expect(screen.getByText('Desenvolvimento assistido por IA')).toBeInTheDocument();
  });

  it('renders all three tabs', () => {
    render(<AgentDev {...defaultProps} />);
    expect(screen.getByText('Criar')).toBeInTheDocument();
    expect(screen.getByText('Consertar')).toBeInTheDocument();
    expect(screen.getByText('Agente')).toBeInTheDocument();
  });

  it('shows Criar tab content by default', () => {
    render(<AgentDev {...defaultProps} />);
    expect(screen.getByText('Criar Componente')).toBeInTheDocument();
    expect(screen.getByText('Selecione o tipo de componente e descreva o que você gostaria de criar.')).toBeInTheDocument();
  });

  it('switches to Consertar tab when clicked', async () => {
    render(<AgentDev {...defaultProps} />);
    
    const consertarTab = screen.getByText('Consertar');
    fireEvent.click(consertarTab);
    
    await waitFor(() => {
      expect(screen.getByText('Consertar Componentes')).toBeInTheDocument();
    });
  });

  it('switches to Agente tab when clicked', async () => {
    render(<AgentDev {...defaultProps} />);
    
    const agenteTab = screen.getByText('Agente');
    fireEvent.click(agenteTab);
    
    await waitFor(() => {
      expect(screen.getByText('Agente de Desenvolvimento')).toBeInTheDocument();
    });
  });

  it('calls onClose when close button is clicked', () => {
    const onClose = jest.fn();
    render(<AgentDev {...defaultProps} onClose={onClose} />);
    
    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);
    
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('updates prompt text in Criar tab', () => {
    render(<AgentDev {...defaultProps} />);
    
    const textarea = screen.getByPlaceholderText('Descreva o componente que você gostaria de criar...');
    fireEvent.change(textarea, { target: { value: 'Test prompt' } });
    
    expect(textarea).toHaveValue('Test prompt');
  });

  it('updates description text in Consertar tab', async () => {
    render(<AgentDev {...defaultProps} />);
    
    // Switch to Consertar tab
    const consertarTab = screen.getByText('Consertar');
    fireEvent.click(consertarTab);
    
    await waitFor(() => {
      const textarea = screen.getByPlaceholderText('Descreva os problemas que precisam ser corrigidos...');
      fireEvent.change(textarea, { target: { value: 'Test description' } });
      expect(textarea).toHaveValue('Test description');
    });
  });

  it('disables create button when prompt is empty', () => {
    render(<AgentDev {...defaultProps} />);
    
    const createButton = screen.getByText('Criar Componente');
    expect(createButton).toBeDisabled();
  });

  it('disables fix button when no components selected and description is empty', async () => {
    render(<AgentDev {...defaultProps} />);
    
    // Switch to Consertar tab
    const consertarTab = screen.getByText('Consertar');
    fireEvent.click(consertarTab);
    
    await waitFor(() => {
      const fixButton = screen.getByText('Consertar Componentes');
      expect(fixButton).toBeDisabled();
    });
  });

  it('renders with custom position and size', () => {
    render(<AgentDev {...defaultProps} position="left" size="md" />);
    expect(screen.getByTestId('drawer')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<AgentDev {...defaultProps} className="custom-class" />);
    expect(screen.getByTestId('drawer')).toHaveClass('custom-class');
  });

  it('does not render when isOpen is false', () => {
    render(<AgentDev {...defaultProps} isOpen={false} />);
    expect(screen.queryByTestId('drawer')).not.toBeInTheDocument();
  });
});
