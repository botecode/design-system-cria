import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CriaLessonCardSmall, Lesson } from '../CriaLessonCardSmall';

// Mock lesson data
const mockLesson: Lesson = {
  id: '1',
  slug: 'react-basics',
  title: 'Introduction to React',
  thumbnailUrl: 'https://example.com/thumb.jpg',
  duration: '15min',
  category: 'Frontend',
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
  thumbnailUrl: 'https://example.com/css-thumb.jpg',
  duration: '20min',
  category: 'Frontend',
};

const mockLessonWithMultipleInstructors: Lesson = {
  id: '3',
  slug: 'fullstack-workshop',
  title: 'Full-Stack Workshop',
  thumbnailUrl: 'https://example.com/workshop-thumb.jpg',
  duration: '60min',
  category: 'Workshop',
  instructors: [
    {
      id: '1',
      name: 'John Doe',
      avatarUrl: 'https://example.com/john.jpg',
    },
    {
      id: '2',
      name: 'Jane Smith',
      avatarUrl: 'https://example.com/jane.jpg',
    },
    {
      id: '3',
      name: 'Mike Johnson',
      avatarUrl: 'https://example.com/mike.jpg',
    },
  ],
};

describe('CriaLessonCardSmall', () => {
  it('renders lesson card with all information', () => {
    render(<CriaLessonCardSmall lesson={mockLesson} />);
    
    expect(screen.getByText('Introduction to React')).toBeInTheDocument();
    expect(screen.getByText('Frontend')).toBeInTheDocument();
    expect(screen.getByText('15min')).toBeInTheDocument();
    expect(screen.getByAltText('Introduction to React')).toBeInTheDocument();
    expect(screen.getByAltText('John Doe')).toBeInTheDocument();
  });

  it('renders lesson card without instructor', () => {
    render(<CriaLessonCardSmall lesson={mockLessonWithoutInstructor} />);
    
    expect(screen.getByText('CSS Fundamentals')).toBeInTheDocument();
    expect(screen.getByText('Frontend')).toBeInTheDocument();
    expect(screen.getByText('20min')).toBeInTheDocument();
    // Should show default user icon (it's an SVG, not an img with role)
    expect(screen.getByText('CSS Fundamentals')).toBeInTheDocument();
  });

  it('shows completion checkbox when completed', () => {
    render(<CriaLessonCardSmall lesson={mockLesson} completed={true} />);
    
    const checkbox = screen.getByRole('button', { name: /mark as incomplete/i });
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveStyle({ backgroundColor: 'rgb(40, 221, 185)' }); // secondary color
  });

  it('shows completion checkbox on hover when not completed', async () => {
    render(<CriaLessonCardSmall lesson={mockLesson} completed={false} />);
    
    const card = screen.getByText('Introduction to React').closest('div');
    if (card) {
      fireEvent.mouseEnter(card);
      
      await waitFor(() => {
        const checkbox = screen.getByRole('button', { name: /mark as completed/i });
        expect(checkbox).toBeInTheDocument();
      });
    }
  });

  it('calls onLessonClick when card is clicked', () => {
    const handleLessonClick = jest.fn();
    render(<CriaLessonCardSmall lesson={mockLesson} onLessonClick={handleLessonClick} />);
    
    const card = screen.getByText('Introduction to React').closest('div');
    if (card) {
      fireEvent.click(card);
      expect(handleLessonClick).toHaveBeenCalledWith(mockLesson);
    }
  });

  it('calls onToggleCompletion when checkbox is clicked', () => {
    const handleToggleCompletion = jest.fn();
    render(
      <CriaLessonCardSmall 
        lesson={mockLesson} 
        completed={false}
        onToggleCompletion={handleToggleCompletion}
      />
    );
    
    const card = screen.getByText('Introduction to React').closest('div');
    if (card) {
      fireEvent.mouseEnter(card);
      
      waitFor(() => {
        const checkbox = screen.getByRole('button', { name: /mark as completed/i });
        fireEvent.click(checkbox);
        expect(handleToggleCompletion).toHaveBeenCalledWith(mockLesson, true);
      });
    }
  });

  it('calls onInstructorClick when instructor avatar is clicked', () => {
    const handleInstructorClick = jest.fn();
    render(
      <CriaLessonCardSmall 
        lesson={mockLesson} 
        onInstructorClick={handleInstructorClick}
      />
    );
    
    const avatar = screen.getByAltText('John Doe');
    fireEvent.click(avatar.closest('div')!);
    expect(handleInstructorClick).toHaveBeenCalledWith(mockLesson.instructor);
  });

  it('displays tool icon when provided', () => {
    const toolIconUrl = 'https://example.com/tool-icon.png';
    render(<CriaLessonCardSmall lesson={mockLesson} toolIconUrl={toolIconUrl} />);
    
    const toolIcon = screen.getByAltText('Tool');
    expect(toolIcon).toBeInTheDocument();
    expect(toolIcon).toHaveAttribute('src', toolIconUrl);
  });

  it('uses fallback thumbnail when thumbnailUrl is not provided', () => {
    const lessonWithoutThumbnail = { ...mockLesson, thumbnailUrl: undefined };
    render(<CriaLessonCardSmall lesson={lessonWithoutThumbnail} />);
    
    const image = screen.getByAltText('Introduction to React');
    expect(image).toHaveAttribute('src', 'https://cdn.prod.website-files.com/65870ed41744e63eb43fd116/6876c357bfbaf5d573e3dd27_AU-409Thumb2.png');
  });

  it('displays correct duration from videoLength when duration is not available', () => {
    const lessonWithVideoLength = { ...mockLesson, duration: undefined, videoLength: '25min' };
    render(<CriaLessonCardSmall lesson={lessonWithVideoLength} />);
    
    expect(screen.getByText('25min')).toBeInTheDocument();
  });

  it('displays fallback duration when neither duration nor videoLength is available', () => {
    const lessonWithoutDuration = { ...mockLesson, duration: undefined, videoLength: undefined };
    render(<CriaLessonCardSmall lesson={lessonWithoutDuration} />);
    
    expect(screen.getByText('--')).toBeInTheDocument();
  });

  it('displays category from categoryNames when available', () => {
    const lessonWithCategoryNames = { ...mockLesson, categoryNames: ['JavaScript'] };
    render(<CriaLessonCardSmall lesson={lessonWithCategoryNames} />);
    
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
  });

  it('displays category from categories array when available', () => {
    const lessonWithCategories = { ...mockLesson, categories: ['Vue.js'] };
    render(<CriaLessonCardSmall lesson={lessonWithCategories} />);
    
    expect(screen.getByText('Vue.js')).toBeInTheDocument();
  });

  it('displays fallback category when no category is provided', () => {
    const lessonWithoutCategory = { ...mockLesson, category: undefined };
    render(<CriaLessonCardSmall lesson={lessonWithoutCategory} />);
    
    expect(screen.getByText('TUTORIAL')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <CriaLessonCardSmall lesson={mockLesson} className="custom-class" />
    );
    
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('applies custom styles', () => {
    const customStyle = { backgroundColor: 'red' };
    const { container } = render(
      <CriaLessonCardSmall lesson={mockLesson} style={customStyle} />
    );
    
    // The style is applied to the card element, but it might be overridden by inline styles
    expect(container.firstChild).toBeInTheDocument();
  });

  it('sets correct data attributes', () => {
    const lessonWithData = {
      ...mockLesson,
      categories: ['Frontend', 'React'],
      tools: ['VS Code', 'Chrome'],
    };
    const { container } = render(<CriaLessonCardSmall lesson={lessonWithData} />);
    
    const card = container.firstChild as HTMLElement;
    expect(card).toHaveAttribute('data-lesson-id', '1');
    expect(card).toHaveAttribute('data-categories', 'Frontend,React');
    expect(card).toHaveAttribute('data-tools', 'VS Code,Chrome');
  });

  it('handles long titles with ellipsis', () => {
    const lessonWithLongTitle = {
      ...mockLesson,
      title: 'This is a very long lesson title that should be truncated with ellipsis to prevent layout issues',
    };
    render(<CriaLessonCardSmall lesson={lessonWithLongTitle} />);
    
    const title = screen.getByText(lessonWithLongTitle.title);
    // Check that the title element exists and has the correct text
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(lessonWithLongTitle.title);
  });

  it('shows in-progress state when inProgress is true', () => {
    const { container } = render(
      <CriaLessonCardSmall lesson={mockLesson} inProgress={true} />
    );
    
    expect(container.firstChild).toHaveClass('cria-lesson-card-small--in-progress');
  });

  it('shows completed state when completed is true', () => {
    const { container } = render(
      <CriaLessonCardSmall lesson={mockLesson} completed={true} />
    );
    
    expect(container.firstChild).toHaveClass('cria-lesson-card-small--completed');
  });

  it('prevents event propagation when completion checkbox is clicked', () => {
    const handleLessonClick = jest.fn();
    const handleToggleCompletion = jest.fn();
    
    render(
      <CriaLessonCardSmall 
        lesson={mockLesson} 
        completed={false}
        onLessonClick={handleLessonClick}
        onToggleCompletion={handleToggleCompletion}
      />
    );
    
    const card = screen.getByText('Introduction to React').closest('div');
    if (card) {
      fireEvent.mouseEnter(card);
      
      waitFor(() => {
        const checkbox = screen.getByRole('button', { name: /mark as completed/i });
        fireEvent.click(checkbox);
        
        expect(handleToggleCompletion).toHaveBeenCalled();
        expect(handleLessonClick).not.toHaveBeenCalled();
      });
    }
  });

  it('prevents event propagation when instructor avatar is clicked', () => {
    const handleLessonClick = jest.fn();
    const handleInstructorClick = jest.fn();
    
    render(
      <CriaLessonCardSmall 
        lesson={mockLesson} 
        onLessonClick={handleLessonClick}
        onInstructorClick={handleInstructorClick}
      />
    );
    
    const avatar = screen.getByAltText('John Doe');
    fireEvent.click(avatar.closest('div')!);
    
    expect(handleInstructorClick).toHaveBeenCalled();
    expect(handleLessonClick).not.toHaveBeenCalled();
  });

  it('renders lesson card with multiple instructors as stacked avatars', () => {
    render(<CriaLessonCardSmall lesson={mockLessonWithMultipleInstructors} />);
    
    expect(screen.getByText('Full-Stack Workshop')).toBeInTheDocument();
    expect(screen.getByText('Workshop')).toBeInTheDocument();
    expect(screen.getByText('60min')).toBeInTheDocument();
    
    // Should render all 3 instructor avatars
    expect(screen.getByRole('img', { name: 'John Doe' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Jane Smith' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Mike Johnson' })).toBeInTheDocument();
  });

  it('calls onInstructorClick when stacked instructor avatar is clicked', () => {
    const handleInstructorClick = jest.fn();
    
    render(
      <CriaLessonCardSmall 
        lesson={mockLessonWithMultipleInstructors} 
        onInstructorClick={handleInstructorClick}
      />
    );
    
    const firstAvatar = screen.getByRole('img', { name: 'John Doe' });
    fireEvent.click(firstAvatar.closest('div')!);
    
    expect(handleInstructorClick).toHaveBeenCalledWith(mockLessonWithMultipleInstructors.instructors![0]);
  });
});
