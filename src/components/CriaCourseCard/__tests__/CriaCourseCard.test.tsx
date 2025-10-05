import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CriaCourseCard, Course } from '../CriaCourseCard';

// Mock course data
const mockCourse: Course = {
  id: '1',
  slug: 'react-complete',
  title: 'React Complete Course',
  description: 'Master React from basics to advanced concepts',
  thumbnailUrl: 'https://example.com/react-course.jpg',
  duration: '8 hours',
  instructors: [
    {
      id: '1',
      name: 'John Doe',
      avatarUrl: 'https://example.com/john-avatar.jpg',
    },
    {
      id: '2',
      name: 'Jane Smith',
      avatarUrl: 'https://example.com/jane-avatar.jpg',
    },
  ],
  tools: [
    {
      id: '1',
      name: 'React',
      icon: '⚛️',
    },
    {
      id: '2',
      name: 'TypeScript',
      icon: '🔷',
    },
  ],
};

const mockCourseMinimal: Course = {
  id: '2',
  slug: 'css-fundamentals',
  title: 'CSS Fundamentals',
  description: 'Learn CSS from scratch',
  duration: '4 hours',
  instructors: [
    {
      id: '3',
      name: 'Mike Johnson',
    },
  ],
  tools: [
    {
      id: '3',
      name: 'CSS',
    },
  ],
};

const mockCourseWithoutInstructors: Course = {
  id: '3',
  slug: 'javascript-basics',
  title: 'JavaScript Basics',
  description: 'Introduction to JavaScript programming',
  thumbnailUrl: 'https://example.com/js-course.jpg',
  duration: '6 hours',
  tools: [
    {
      id: '4',
      name: 'JavaScript',
      icon: '🟨',
    },
  ],
};

const mockCourseWithoutTools: Course = {
  id: '4',
  slug: 'html-intro',
  title: 'HTML Introduction',
  description: 'Learn HTML markup language',
  thumbnailUrl: 'https://example.com/html-course.jpg',
  duration: '3 hours',
  instructors: [
    {
      id: '5',
      name: 'Sarah Wilson',
      avatarUrl: 'https://example.com/sarah-avatar.jpg',
    },
  ],
};

describe('CriaCourseCard', () => {
  it('renders course card with all information', () => {
    render(<CriaCourseCard course={mockCourse} />);
    
    expect(screen.getByText('React Complete Course')).toBeInTheDocument();
    expect(screen.getByText('Master React from basics to advanced concepts')).toBeInTheDocument();
    expect(screen.getByText('8 hours')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('renders course card with minimal information', () => {
    render(<CriaCourseCard course={mockCourseMinimal} />);
    
    expect(screen.getByText('CSS Fundamentals')).toBeInTheDocument();
    expect(screen.getByText('Learn CSS from scratch')).toBeInTheDocument();
    expect(screen.getByText('4 hours')).toBeInTheDocument();
    expect(screen.getByText('Mike Johnson')).toBeInTheDocument();
    expect(screen.getByText('CSS')).toBeInTheDocument();
  });

  it('renders course card without instructors', () => {
    render(<CriaCourseCard course={mockCourseWithoutInstructors} />);
    
    expect(screen.getByText('JavaScript Basics')).toBeInTheDocument();
    expect(screen.getByText('Introduction to JavaScript programming')).toBeInTheDocument();
    expect(screen.getByText('6 hours')).toBeInTheDocument();
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
    // Should not show any instructor names
    expect(screen.queryByText('John Doe')).not.toBeInTheDocument();
    expect(screen.queryByText('Jane Smith')).not.toBeInTheDocument();
  });

  it('renders course card without tools', () => {
    render(<CriaCourseCard course={mockCourseWithoutTools} />);
    
    expect(screen.getByText('HTML Introduction')).toBeInTheDocument();
    expect(screen.getByText('Learn HTML markup language')).toBeInTheDocument();
    expect(screen.getByText('3 hours')).toBeInTheDocument();
    expect(screen.getByText('Sarah Wilson')).toBeInTheDocument();
    // Should not show any tool names
    expect(screen.queryByText('React')).not.toBeInTheDocument();
    expect(screen.queryByText('TypeScript')).not.toBeInTheDocument();
  });

  it('calls onCourseClick when card is clicked', () => {
    const handleCourseClick = jest.fn();
    render(<CriaCourseCard course={mockCourse} onCourseClick={handleCourseClick} />);
    
    const card = screen.getByText('React Complete Course').closest('div');
    fireEvent.click(card!);
    
    expect(handleCourseClick).toHaveBeenCalledWith(mockCourse);
  });

  it('calls onInstructorClick when instructor is clicked', () => {
    const handleInstructorClick = jest.fn();
    render(<CriaCourseCard course={mockCourse} onInstructorClick={handleInstructorClick} />);
    
    const instructorBadge = screen.getByText('John Doe');
    fireEvent.click(instructorBadge);
    
    expect(handleInstructorClick).toHaveBeenCalledWith(mockCourse.instructors![0]);
  });

  it('calls onToolClick when tool is clicked', () => {
    const handleToolClick = jest.fn();
    render(<CriaCourseCard course={mockCourse} onToolClick={handleToolClick} />);
    
    const toolBadge = screen.getByText('React');
    fireEvent.click(toolBadge);
    
    expect(handleToolClick).toHaveBeenCalledWith(mockCourse.tools![0]);
  });

  it('prevents event propagation when instructor is clicked', () => {
    const handleCourseClick = jest.fn();
    const handleInstructorClick = jest.fn();
    render(
      <CriaCourseCard 
        course={mockCourse} 
        onCourseClick={handleCourseClick}
        onInstructorClick={handleInstructorClick}
      />
    );
    
    const instructorBadge = screen.getByText('John Doe');
    fireEvent.click(instructorBadge);
    
    expect(handleInstructorClick).toHaveBeenCalled();
    expect(handleCourseClick).not.toHaveBeenCalled();
  });

  it('prevents event propagation when tool is clicked', () => {
    const handleCourseClick = jest.fn();
    const handleToolClick = jest.fn();
    render(
      <CriaCourseCard 
        course={mockCourse} 
        onCourseClick={handleCourseClick}
        onToolClick={handleToolClick}
      />
    );
    
    const toolBadge = screen.getByText('React');
    fireEvent.click(toolBadge);
    
    expect(handleToolClick).toHaveBeenCalled();
    expect(handleCourseClick).not.toHaveBeenCalled();
  });

  it('displays fallback description when not provided', () => {
    const courseWithoutDescription: Course = {
      ...mockCourse,
      description: undefined,
    };
    
    render(<CriaCourseCard course={courseWithoutDescription} />);
    
    expect(screen.getByText(/A comprehensive course designed to help you master/)).toBeInTheDocument();
  });

  it('displays fallback duration when not provided', () => {
    const courseWithoutDuration: Course = {
      ...mockCourse,
      duration: undefined,
    };
    
    render(<CriaCourseCard course={courseWithoutDuration} />);
    
    expect(screen.getByText('--')).toBeInTheDocument();
  });

  it('uses fallback thumbnail when thumbnailUrl is not provided', () => {
    render(<CriaCourseCard course={mockCourseMinimal} />);
    
    const image = screen.getByAltText('CSS Fundamentals');
    expect(image).toHaveAttribute('src', expect.stringContaining('placeholder.com'));
  });

  it('applies custom className', () => {
    const { container } = render(
      <CriaCourseCard course={mockCourse} className="custom-class" />
    );
    
    expect(container.firstChild).toHaveClass('cria-course-card', 'custom-class');
  });

  it('applies custom styles', () => {
    const customStyle = { border: '2px solid blue' };
    const { container } = render(
      <CriaCourseCard course={mockCourse} style={customStyle} />
    );
    
    expect(container.firstChild).toHaveStyle({ border: '2px solid blue' });
  });

  it('sets correct data attributes', () => {
    const { container } = render(<CriaCourseCard course={mockCourse} />);
    
    const card = container.firstChild as HTMLElement;
    expect(card).toHaveAttribute('data-course-id', '1');
    expect(card).toHaveAttribute('data-course-slug', 'react-complete');
  });

  it('renders instructor avatars when available', () => {
    render(<CriaCourseCard course={mockCourse} />);
    
    const johnAvatar = screen.getByRole('img', { name: 'John Doe' });
    const janeAvatar = screen.getByRole('img', { name: 'Jane Smith' });
    
    expect(johnAvatar).toBeInTheDocument();
    expect(janeAvatar).toBeInTheDocument();
  });

  it('renders tool icons when available', () => {
    render(<CriaCourseCard course={mockCourse} />);
    
    // Check that tool icons are rendered (they should be in spans with the icon text)
    const reactIcon = screen.getByText('⚛️');
    const typescriptIcon = screen.getByText('🔷');
    
    expect(reactIcon).toBeInTheDocument();
    expect(typescriptIcon).toBeInTheDocument();
  });

  it('applies hover effects to title', () => {
    render(<CriaCourseCard course={mockCourse} />);
    
    const title = screen.getByText('React Complete Course');
    expect(title).toBeInTheDocument();
    
    // Verify the title is interactive and has proper styling
    expect(title).toHaveStyle({ cursor: 'pointer' });
    expect(title).toHaveStyle({ textTransform: 'uppercase' });
    expect(title).toHaveStyle({ fontWeight: expect.stringContaining('700') });
  });

  it('renders thumbnail image with correct attributes', () => {
    render(<CriaCourseCard course={mockCourse} />);
    
    const image = screen.getByAltText('React Complete Course');
    expect(image).toHaveAttribute('src', 'https://example.com/react-course.jpg');
    expect(image).toHaveStyle({ objectFit: 'cover' });
  });

  it('handles multiple instructors and tools', () => {
    const courseWithManyItems: Course = {
      ...mockCourse,
      instructors: [
        { id: '1', name: 'Instructor 1' },
        { id: '2', name: 'Instructor 2' },
        { id: '3', name: 'Instructor 3' },
      ],
      tools: [
        { id: '1', name: 'Tool 1', icon: '🔧' },
        { id: '2', name: 'Tool 2', icon: '⚙️' },
        { id: '3', name: 'Tool 3', icon: '🛠️' },
      ],
    };
    
    render(<CriaCourseCard course={courseWithManyItems} />);
    
    expect(screen.getByText('Instructor 1')).toBeInTheDocument();
    expect(screen.getByText('Instructor 2')).toBeInTheDocument();
    expect(screen.getByText('Instructor 3')).toBeInTheDocument();
    expect(screen.getByText('Tool 1')).toBeInTheDocument();
    expect(screen.getByText('Tool 2')).toBeInTheDocument();
    expect(screen.getByText('Tool 3')).toBeInTheDocument();
  });

  it('handles long course titles', () => {
    const courseWithLongTitle: Course = {
      ...mockCourse,
      title: 'This is a very long course title that should still be displayed properly',
    };
    
    render(<CriaCourseCard course={courseWithLongTitle} />);
    
    expect(screen.getByText(courseWithLongTitle.title)).toBeInTheDocument();
  });

  it('handles long descriptions', () => {
    const courseWithLongDescription: Course = {
      ...mockCourse,
      description: 'This is a very long description that should be displayed properly and not cause any layout issues in the course card component',
    };
    
    render(<CriaCourseCard course={courseWithLongDescription} />);
    
    expect(screen.getByText(courseWithLongDescription.description)).toBeInTheDocument();
  });
});
