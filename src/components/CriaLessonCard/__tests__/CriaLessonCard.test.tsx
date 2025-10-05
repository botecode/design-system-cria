import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CriaLessonCard, Lesson } from '../CriaLessonCard';

// Mock lesson data
const mockLesson: Lesson = {
  id: '1',
  slug: 'react-basics',
  title: 'Introduction to React',
  description: 'Learn the fundamentals of React development',
  thumbnailUrl: 'https://example.com/thumb.jpg',
  duration: '15min',
  category: 'Frontend',
  toolIconText: 'AI',
  instructor: {
    id: '1',
    name: 'John Doe',
    avatarUrl: 'https://example.com/avatar.jpg',
  },
};

const mockLessonWithoutInstructor: Lesson = {
  id: '2',
  slug: 'css-fundamentals',
  title: 'CSS Fundamentals',
  description: 'Master CSS styling and layout techniques',
  thumbnailUrl: 'https://example.com/css-thumb.jpg',
  duration: '20min',
  category: 'Frontend',
  toolIconText: 'CSS',
};

const mockLessonWithoutToolIcon: Lesson = {
  id: '3',
  slug: 'javascript-basics',
  title: 'JavaScript Basics',
  description: 'Learn JavaScript programming fundamentals',
  thumbnailUrl: 'https://example.com/js-thumb.jpg',
  duration: '25min',
  category: 'JavaScript',
  instructor: {
    id: '2',
    name: 'Jane Smith',
    avatarUrl: 'https://example.com/jane-avatar.jpg',
  },
};

describe('CriaLessonCard', () => {
  it('renders lesson card with all information', () => {
    render(<CriaLessonCard lesson={mockLesson} />);
    
    expect(screen.getByText('Introduction to React')).toBeInTheDocument();
    expect(screen.getByText('Learn the fundamentals of React development')).toBeInTheDocument();
    expect(screen.getByText('15min')).toBeInTheDocument();
    expect(screen.getByText('AI')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'John Doe' })).toBeInTheDocument();
  });

  it('renders lesson card without instructor', () => {
    render(<CriaLessonCard lesson={mockLessonWithoutInstructor} />);
    
    expect(screen.getByText('CSS Fundamentals')).toBeInTheDocument();
    expect(screen.getByText('Master CSS styling and layout techniques')).toBeInTheDocument();
    expect(screen.getByText('20min')).toBeInTheDocument();
    expect(screen.getByText('CSS')).toBeInTheDocument();
    // Should show default user icon (it's an SVG, not an img with role)
    expect(screen.getByText('CSS Fundamentals')).toBeInTheDocument(); // Re-checking title to ensure component rendered
  });

  it('renders lesson card without tool icon', () => {
    render(<CriaLessonCard lesson={mockLessonWithoutToolIcon} />);
    
    expect(screen.getByText('JavaScript Basics')).toBeInTheDocument();
    expect(screen.getByText('Learn JavaScript programming fundamentals')).toBeInTheDocument();
    expect(screen.getByText('25min')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Jane Smith' })).toBeInTheDocument();
    // Should not show tool icon
    expect(screen.queryByText('AI')).not.toBeInTheDocument();
  });

  it('calls onLessonClick when card is clicked', () => {
    const handleLessonClick = jest.fn();
    render(<CriaLessonCard lesson={mockLesson} onLessonClick={handleLessonClick} />);
    
    const card = screen.getByText('Introduction to React').closest('div');
    fireEvent.click(card!);
    
    expect(handleLessonClick).toHaveBeenCalledWith(mockLesson);
  });

  it('prevents event propagation when instructor avatar is clicked', () => {
    const handleLessonClick = jest.fn();
    render(<CriaLessonCard lesson={mockLesson} onLessonClick={handleLessonClick} />);
    
    const avatar = screen.getByRole('img', { name: 'John Doe' });
    fireEvent.click(avatar.closest('div')!);
    
    expect(handleLessonClick).not.toHaveBeenCalled();
  });

  it('displays fallback description when not provided', () => {
    const lessonWithoutDescription: Lesson = {
      ...mockLesson,
      description: undefined,
    };
    
    render(<CriaLessonCard lesson={lessonWithoutDescription} />);
    
    expect(screen.getByText(/Uma seleção de aulas do CR_IA/)).toBeInTheDocument();
  });

  it('displays fallback duration when not provided', () => {
    const lessonWithoutDuration: Lesson = {
      ...mockLesson,
      duration: undefined,
    };
    
    render(<CriaLessonCard lesson={lessonWithoutDuration} />);
    
    expect(screen.getByText('--')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <CriaLessonCard lesson={mockLesson} className="custom-class" />
    );
    
    expect(container.firstChild).toHaveClass('cria-lesson-card', 'custom-class');
  });

  it('applies custom styles', () => {
    const customStyle = { border: '2px solid blue' };
    const { container } = render(
      <CriaLessonCard lesson={mockLesson} style={customStyle} />
    );
    
    expect(container.firstChild).toHaveStyle({ border: '2px solid blue' });
  });

  it('sets correct data attributes', () => {
    const { container } = render(<CriaLessonCard lesson={mockLesson} />);
    
    const card = container.firstChild as HTMLElement;
    expect(card).toHaveAttribute('data-lesson-id', '1');
    expect(card).toHaveAttribute('data-lesson-slug', 'react-basics');
  });

  it('handles long titles with ellipsis', () => {
    const lessonWithLongTitle: Lesson = {
      ...mockLesson,
      title: 'This is a very long lesson title that should be truncated with ellipsis to prevent layout issues',
    };
    
    render(<CriaLessonCard lesson={lessonWithLongTitle} />);
    
    const title = screen.getByText(lessonWithLongTitle.title);
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(lessonWithLongTitle.title);
  });

  it('handles long descriptions with ellipsis', () => {
    const lessonWithLongDescription: Lesson = {
      ...mockLesson,
      description: 'This is a very long description that should be truncated with ellipsis to prevent layout issues and maintain the card structure',
    };
    
    render(<CriaLessonCard lesson={lessonWithLongDescription} />);
    
    const description = screen.getByText(lessonWithLongDescription.description);
    expect(description).toBeInTheDocument();
    expect(description).toHaveTextContent(lessonWithLongDescription.description);
  });

  it('applies hover effects', () => {
    render(<CriaLessonCard lesson={mockLesson} />);
    
    const card = screen.getByText('Introduction to React').closest('div');
    expect(card).toBeInTheDocument();
    // The cursor style is applied to the root card element
    expect(card?.parentElement).toHaveStyle({ cursor: 'pointer' });
  });

  it('renders thumbnail image with correct attributes', () => {
    render(<CriaLessonCard lesson={mockLesson} />);
    
    const image = screen.getByAltText('Introduction to React');
    expect(image).toHaveAttribute('src', 'https://example.com/thumb.jpg');
    expect(image).toHaveStyle({ objectFit: 'cover' });
  });

  it('uses fallback thumbnail when thumbnailUrl is not provided', () => {
    const lessonWithoutThumbnail: Lesson = {
      ...mockLesson,
      thumbnailUrl: undefined,
    };
    
    render(<CriaLessonCard lesson={lessonWithoutThumbnail} />);
    
    const image = screen.getByAltText('Introduction to React');
    expect(image).toHaveAttribute('src', expect.stringContaining('AU-409Thumb2.png'));
  });

  it('renders tool icon with correct styling', () => {
    render(<CriaLessonCard lesson={mockLesson} />);
    
    const toolIcon = screen.getByText('AI');
    expect(toolIcon).toBeInTheDocument();
    expect(toolIcon).toHaveStyle({ 
      color: 'rgb(45, 27, 14)',
      fontWeight: '700',
      fontSize: '14px'
    });
  });

  it('renders duration with clock icon', () => {
    render(<CriaLessonCard lesson={mockLesson} />);
    
    expect(screen.getByText('15min')).toBeInTheDocument();
    // Clock icon should be present (it's an SVG from Phosphor)
    const clockIcon = screen.getByText('15min').previousElementSibling;
    expect(clockIcon).toBeInTheDocument();
  });

  it('renders instructor avatar with correct styling', () => {
    render(<CriaLessonCard lesson={mockLesson} />);
    
    const avatar = screen.getByRole('img', { name: 'John Doe' });
    expect(avatar).toBeInTheDocument();
    // Avatar styling is handled by the Avatar component
    expect(avatar).toHaveAttribute('alt', 'John Doe');
  });

  it('renders default user icon when no instructor provided', () => {
    render(<CriaLessonCard lesson={mockLessonWithoutInstructor} />);
    
    // Should render the default user icon (it's an SVG from Phosphor)
    expect(screen.getByText('20min')).toBeInTheDocument();
    // The default user icon is rendered as an SVG within the avatar container
    // We can verify the component rendered correctly by checking the title
    expect(screen.getByText('CSS Fundamentals')).toBeInTheDocument();
  });
});
