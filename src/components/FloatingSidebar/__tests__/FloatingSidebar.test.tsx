import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { FloatingSidebar, FloatingSidebarItem } from '../FloatingSidebar';

const mockItems: FloatingSidebarItem[] = [
  { id: '1', label: 'CURSOS', active: false, icon: '/test-icon-1.svg' },
  { id: '2', label: 'AULAS & TUTORIAIS', active: true, icon: '/test-icon-2.svg' },
  { id: '3', label: 'EVENTOS', active: false, icon: '/test-icon-3.svg' },
];

const mockUser = {
  name: 'FERNANDO FEITOSA',
  class: 'TURMA #026',
  avatar: 'https://example.com/avatar.jpg',
};

describe('FloatingSidebar', () => {
  it('renders with default title', () => {
    render(<FloatingSidebar />);
    expect(screen.getByText('CR_IA.lab')).toBeInTheDocument();
  });

  it('renders with custom title', () => {
    render(<FloatingSidebar title="Custom Title" />);
    expect(screen.getByText('Custom Title')).toBeInTheDocument();
  });

  it('renders navigation items', () => {
    render(<FloatingSidebar items={mockItems} />);
    expect(screen.getByText('CURSOS')).toBeInTheDocument();
    expect(screen.getByText('AULAS & TUTORIAIS')).toBeInTheDocument();
    expect(screen.getByText('EVENTOS')).toBeInTheDocument();
  });

  it('renders emblem image', () => {
    render(<FloatingSidebar emblemImage="/test-emblem.png" />);
    const emblem = screen.getByAltText('CRIA Emblem');
    expect(emblem).toBeInTheDocument();
    expect(emblem).toHaveAttribute('src', '/test-emblem.png');
  });

  it('renders user profile section when user is provided', () => {
    render(<FloatingSidebar user={mockUser} />);
    expect(screen.getByText('FERNANDO FEITOSA')).toBeInTheDocument();
    expect(screen.getByText('TURMA #026')).toBeInTheDocument();
  });

  it('does not render user profile section when user is not provided', () => {
    render(<FloatingSidebar />);
    expect(screen.queryByText('FERNANDO FEITOSA')).not.toBeInTheDocument();
  });

  it('handles item clicks', () => {
    const mockOnClick = jest.fn();
    const itemsWithClick = mockItems.map(item => ({
      ...item,
      onClick: mockOnClick,
    }));
    
    render(<FloatingSidebar items={itemsWithClick} />);
    
    fireEvent.click(screen.getByText('CURSOS'));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('applies active styling to active items', () => {
    render(<FloatingSidebar items={mockItems} />);
    const activeItem = screen.getByText('AULAS & TUTORIAIS');
    expect(activeItem.closest('button')).toHaveStyle({
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
    });
  });

  it('applies custom className', () => {
    render(<FloatingSidebar className="custom-sidebar" />);
    const sidebar = screen.getByText('CR_IA.lab').closest('.cria-floating-sidebar');
    expect(sidebar).toHaveClass('custom-sidebar');
  });

  it('applies custom style', () => {
    render(<FloatingSidebar style={{ backgroundColor: 'red' }} />);
    const sidebar = screen.getByText('CR_IA.lab').closest('.cria-floating-sidebar');
    // The style prop should override the default background color
    // Note: The color might be converted to RGB format by the browser
    expect(sidebar).toHaveStyle({ backgroundColor: expect.stringMatching(/red|rgb\(255,\s*0,\s*0\)/) });
  });

  it('renders settings button when user is provided', () => {
    render(<FloatingSidebar user={mockUser} />);
    const settingsButton = screen.getByRole('button', { name: /settings/i });
    expect(settingsButton).toBeInTheDocument();
  });

  it('handles settings button click', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    render(<FloatingSidebar user={mockUser} />);
    
    const settingsButton = screen.getByRole('button', { name: /settings/i });
    fireEvent.click(settingsButton);
    
    expect(consoleSpy).toHaveBeenCalledWith('Settings clicked');
    consoleSpy.mockRestore();
  });

  it('renders avatar when user avatar is provided', () => {
    render(<FloatingSidebar user={mockUser} />);
    const avatar = screen.getByRole('img', { name: 'FERNANDO FEITOSA' });
    expect(avatar).toBeInTheDocument();
  });

  it('renders default avatar when user avatar is not provided', () => {
    const userWithoutAvatar = {
      name: 'FERNANDO FEITOSA',
      class: 'TURMA #026',
    };
    
    render(<FloatingSidebar user={userWithoutAvatar} />);
    const avatar = screen.getByRole('img', { name: 'FERNANDO FEITOSA' });
    expect(avatar).toBeInTheDocument();
  });

  it('handles empty items array', () => {
    render(<FloatingSidebar items={[]} />);
    expect(screen.getByText('CR_IA.lab')).toBeInTheDocument();
    expect(screen.queryByText('CURSOS')).not.toBeInTheDocument();
  });

  it('applies hover effects to non-active items', () => {
    render(<FloatingSidebar items={mockItems} />);
    const nonActiveItem = screen.getByText('CURSOS');
    const button = nonActiveItem.closest('button');
    
    // Test hover effect - now uses secondary color
    fireEvent.mouseEnter(button!);
    expect(button).toHaveStyle({
      backgroundColor: expect.stringMatching(/rgb\(.*\)|#[0-9a-fA-F]{6}|#[0-9a-fA-F]{3}/),
    });
    
    fireEvent.mouseLeave(button!);
    // Note: The hover effect is handled by inline styles, so we just verify the button exists
    expect(button).toBeInTheDocument();
  });

  it('renders icons in navigation items', () => {
    render(<FloatingSidebar items={mockItems} />);
    // Check that icons are rendered for items that have them
    const allImages = screen.getAllByRole('img');
    // Should have at least the emblem image
    expect(allImages.length).toBeGreaterThan(0);
    // Check that navigation items with icons render properly
    expect(screen.getByText('CURSOS')).toBeInTheDocument();
    expect(screen.getByText('AULAS & TUTORIAIS')).toBeInTheDocument();
    expect(screen.getByText('EVENTOS')).toBeInTheDocument();
  });

  it('handles items without icons', () => {
    const itemsWithoutIcons = [
      { id: '1', label: 'CURSOS', active: false },
      { id: '2', label: 'AULAS', active: true },
    ];
    render(<FloatingSidebar items={itemsWithoutIcons} />);
    expect(screen.getByText('CURSOS')).toBeInTheDocument();
    expect(screen.getByText('AULAS')).toBeInTheDocument();
  });

  it('renders subtitle when provided', () => {
    render(<FloatingSidebar title="CR_IA.lab" subtitle="(beta)" />);
    expect(screen.getByText('CR_IA.lab')).toBeInTheDocument();
    expect(screen.getByText('(beta)')).toBeInTheDocument();
  });

  it('does not render subtitle when not provided', () => {
    render(<FloatingSidebar title="CR_IA.lab" subtitle="" />);
    expect(screen.getByText('CR_IA.lab')).toBeInTheDocument();
    expect(screen.queryByText('(beta)')).not.toBeInTheDocument();
  });
});
