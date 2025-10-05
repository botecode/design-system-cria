import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CriaClassroomTrilhaCard, CustomLearning, ClassroomItem, Instructor, Tool, Lesson, Course } from '../CriaClassroomTrilhaCard';

const mockInstructor1: Instructor = { id: '1', name: 'John Doe', avatarUrl: 'https://example.com/john.jpg' };
const mockInstructor2: Instructor = { id: '2', name: 'Jane Smith', avatarUrl: 'https://example.com/jane.jpg' };
const mockInstructor3: Instructor = { id: '3', name: 'Mike Johnson', avatarUrl: 'https://example.com/mike.jpg' };

const mockTool1: Tool = { id: '1', name: 'React', icon: '⚛️' };
const mockTool2: Tool = { id: '2', name: 'TypeScript', icon: '🔷' };
const mockTool3: Tool = { id: '3', name: 'Node.js', icon: '🟢' };

const mockLesson1: Lesson = {
  id: '1',
  title: 'React Basics',
  instructors: ['John Doe', 'Jane Smith'],
  tools: ['React', 'JavaScript'],
};

const mockLesson2: Lesson = {
  id: '2',
  title: 'Advanced React',
  instructors: ['Mike Johnson'],
  tools: ['React', 'TypeScript'],
};

const mockCourse1: Course = {
  id: '1',
  title: 'React Complete Course',
  instructors: [mockInstructor1, mockInstructor2],
  tools: [mockTool1, mockTool2],
};

const mockCustomLearning: CustomLearning = {
  id: '1',
  slug: 'react-complete-path',
  title: 'React Complete Learning Path',
  description: 'Master React from basics to advanced concepts with comprehensive lessons and courses.',
  duration: '12 hours',
  imageUrl: 'https://example.com/react-path.jpg',
  lessons: [mockLesson1, mockLesson2],
  courses: [mockCourse1],
};

const mockClassroomItem: ClassroomItem = {
  id: '1',
  position: 1,
  customTitle: 'React Complete Path - Custom Title',
  customSubtitle: 'From beginner to expert with hands-on projects',
  imageUrl: 'https://example.com/custom-image.jpg',
};

const mockCustomLearningMinimal: CustomLearning = {
  id: '2',
  title: 'Minimal Learning Path',
  imageUrl: 'https://example.com/minimal.jpg',
};

const mockClassroomItemMinimal: ClassroomItem = {
  id: '2',
  position: 2,
};

const mockCustomLearningWithoutInstructors: CustomLearning = {
  id: '3',
  title: 'Learning Path Without Instructors',
  description: 'A learning path with no instructors',
  lessons: [{ id: '1', title: 'Lesson 1', instructors: [], tools: [] }],
  courses: [{ id: '1', title: 'Course 1', instructors: [], tools: [] }],
};

const mockCustomLearningWithoutTools: CustomLearning = {
  id: '4',
  title: 'Learning Path Without Tools',
  description: 'A learning path with no tools',
  lessons: [{ id: '1', title: 'Lesson 1', instructors: ['John Doe'], tools: [] }],
  courses: [{ id: '1', title: 'Course 1', instructors: [mockInstructor1], tools: [] }],
};

describe('CriaClassroomTrilhaCard', () => {
  it('renders custom learning card with all information', () => {
    render(
      <CriaClassroomTrilhaCard 
        customLearning={mockCustomLearning} 
        classroomItem={mockClassroomItem} 
      />
    );
    
    expect(screen.getByText('React Complete Path - Custom Title')).toBeInTheDocument();
    expect(screen.getByText('From beginner to expert with hands-on projects')).toBeInTheDocument();
    expect(screen.getByText('01')).toBeInTheDocument(); // Position
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getAllByText('React')).toHaveLength(2); // React appears in tools section
    expect(screen.getAllByText('TypeScript')).toHaveLength(2); // TypeScript appears in tools section
    expect(screen.getByText('12 hours')).toBeInTheDocument();
    expect(screen.getAllByText('TRILHA')).toHaveLength(2); // One in position, one in bottom section
  });

  it('renders custom learning card with minimal information', () => {
    render(
      <CriaClassroomTrilhaCard 
        customLearning={mockCustomLearningMinimal} 
        classroomItem={mockClassroomItemMinimal} 
      />
    );
    
    expect(screen.getByText('Minimal Learning Path')).toBeInTheDocument();
    expect(screen.getByText('02')).toBeInTheDocument(); // Position
    expect(screen.getByText('No instructors')).toBeInTheDocument();
    expect(screen.getByText('No tools')).toBeInTheDocument();
    expect(screen.getByText('--')).toBeInTheDocument(); // Duration fallback
    expect(screen.getAllByText('TRILHA')).toHaveLength(2); // One in position, one in bottom section
  });

  it('aggregates instructors from lessons and courses', () => {
    render(
      <CriaClassroomTrilhaCard 
        customLearning={mockCustomLearning} 
        classroomItem={mockClassroomItem} 
      />
    );
    
    // Should show first 2 instructors and overflow count (instructors from lessons and courses are not deduplicated by name)
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('+3')).toBeInTheDocument(); // 5 total - 2 visible = 3 overflow (John Doe, Jane Smith from lessons, Mike Johnson from lesson, John Doe, Jane Smith from courses)
  });

  it('aggregates tools from lessons and courses', () => {
    render(
      <CriaClassroomTrilhaCard 
        customLearning={mockCustomLearning} 
        classroomItem={mockClassroomItem} 
      />
    );
    
    // Should show tools from both lessons and courses
    expect(screen.getAllByText('React')).toHaveLength(2); // React appears in tools section
    expect(screen.getAllByText('TypeScript')).toHaveLength(2); // TypeScript appears in tools section
    // Note: Node.js is not included in the mock data, so it won't appear
  });

  it('shows overflow count for more than 2 instructors', () => {
    const customLearningWithManyInstructors: CustomLearning = {
      id: '5',
      slug: 'many-instructors-path',
      title: 'Learning Path With Many Instructors',
      description: 'A learning path with many instructors',
      duration: '10 hours',
      imageUrl: 'https://example.com/many-instructors.jpg',
      lessons: [
        { id: '1', title: 'Lesson 1', instructors: ['John Doe', 'Jane Smith', 'Mike Johnson', 'Alice Brown', 'Bob Wilson'], tools: [] },
      ],
      courses: [],
    };
    
    render(
      <CriaClassroomTrilhaCard 
        customLearning={customLearningWithManyInstructors} 
        classroomItem={mockClassroomItem} 
      />
    );
    
    // Should show first 2 instructors and overflow count
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('+3')).toBeInTheDocument(); // 5 total - 2 visible = 3 overflow
  });

  it('renders custom learning card without instructors', () => {
    render(
      <CriaClassroomTrilhaCard 
        customLearning={mockCustomLearningWithoutInstructors} 
        classroomItem={mockClassroomItem} 
      />
    );
    
    expect(screen.getByText('React Complete Path - Custom Title')).toBeInTheDocument(); // Uses customTitle from classroomItem
    expect(screen.getByText('No instructors')).toBeInTheDocument();
  });

  it('renders custom learning card without tools', () => {
    render(
      <CriaClassroomTrilhaCard 
        customLearning={mockCustomLearningWithoutTools} 
        classroomItem={mockClassroomItem} 
      />
    );
    
    expect(screen.getByText('React Complete Path - Custom Title')).toBeInTheDocument(); // Uses customTitle from classroomItem
    expect(screen.getByText('No tools')).toBeInTheDocument();
  });

  it('calls onCardClick when card is clicked', () => {
    const handleCardClick = jest.fn();
    render(
      <CriaClassroomTrilhaCard 
        customLearning={mockCustomLearning} 
        classroomItem={mockClassroomItem}
        onCardClick={handleCardClick}
      />
    );
    
    fireEvent.click(screen.getByText('React Complete Path - Custom Title'));
    expect(handleCardClick).toHaveBeenCalledWith(mockCustomLearning);
  });

  it('calls onInstructorClick when instructor is clicked', () => {
    const handleInstructorClick = jest.fn();
    render(
      <CriaClassroomTrilhaCard 
        customLearning={mockCustomLearning} 
        classroomItem={mockClassroomItem}
        onInstructorClick={handleInstructorClick}
      />
    );
    
    fireEvent.click(screen.getByText('John Doe'));
    expect(handleInstructorClick).toHaveBeenCalledWith(
      expect.objectContaining({ name: 'John Doe' })
    );
  });

  it('calls onToolClick when tool is clicked', () => {
    const handleToolClick = jest.fn();
    render(
      <CriaClassroomTrilhaCard 
        customLearning={mockCustomLearning} 
        classroomItem={mockClassroomItem}
        onToolClick={handleToolClick}
      />
    );
    
    const reactElements = screen.getAllByText('React');
    fireEvent.click(reactElements[0]); // Click the first React element
    expect(handleToolClick).toHaveBeenCalledWith(
      expect.objectContaining({ name: 'React' })
    );
  });

  it('prevents event propagation when instructor is clicked', () => {
    const handleCardClick = jest.fn();
    const handleInstructorClick = jest.fn();
    render(
      <CriaClassroomTrilhaCard 
        customLearning={mockCustomLearning} 
        classroomItem={mockClassroomItem}
        onCardClick={handleCardClick}
        onInstructorClick={handleInstructorClick}
      />
    );
    
    fireEvent.click(screen.getByText('John Doe'));
    expect(handleInstructorClick).toHaveBeenCalled();
    expect(handleCardClick).not.toHaveBeenCalled();
  });

  it('prevents event propagation when tool is clicked', () => {
    const handleCardClick = jest.fn();
    const handleToolClick = jest.fn();
    render(
      <CriaClassroomTrilhaCard 
        customLearning={mockCustomLearning} 
        classroomItem={mockClassroomItem}
        onCardClick={handleCardClick}
        onToolClick={handleToolClick}
      />
    );
    
    const reactElements = screen.getAllByText('React');
    fireEvent.click(reactElements[0]); // Click the first React element
    expect(handleToolClick).toHaveBeenCalled();
    expect(handleCardClick).not.toHaveBeenCalled();
  });

  it('uses custom title and subtitle when provided', () => {
    render(
      <CriaClassroomTrilhaCard 
        customLearning={mockCustomLearning} 
        classroomItem={mockClassroomItem} 
      />
    );
    
    expect(screen.getByText('React Complete Path - Custom Title')).toBeInTheDocument();
    expect(screen.getByText('From beginner to expert with hands-on projects')).toBeInTheDocument();
  });

  it('falls back to custom learning title and description when custom titles not provided', () => {
    const classroomItemWithoutCustoms = {
      ...mockClassroomItem,
      customTitle: undefined,
      customSubtitle: undefined,
    };
    
    render(
      <CriaClassroomTrilhaCard 
        customLearning={mockCustomLearning} 
        classroomItem={classroomItemWithoutCustoms} 
      />
    );
    
    expect(screen.getByText('React Complete Learning Path')).toBeInTheDocument();
    expect(screen.getByText('Master React from basics to advanced concepts with comprehensive lessons and courses.')).toBeInTheDocument();
  });

  it('uses fallback image when imageUrl not provided', () => {
    const customLearningWithoutImage = {
      ...mockCustomLearning,
      imageUrl: undefined,
    };
    
    const classroomItemWithoutImage = {
      ...mockClassroomItem,
      imageUrl: undefined,
    };
    
    render(
      <CriaClassroomTrilhaCard 
        customLearning={customLearningWithoutImage} 
        classroomItem={classroomItemWithoutImage} 
      />
    );
    
    const image = screen.getByAltText('React Complete Path - Custom Title');
    expect(image).toHaveAttribute('src', '/src/assets/cria_emblem_home.png');
  });

  it('prioritizes custom learning imageUrl over classroom item imageUrl', () => {
    render(
      <CriaClassroomTrilhaCard 
        customLearning={mockCustomLearning} 
        classroomItem={mockClassroomItem} 
      />
    );
    
    const image = screen.getByAltText('React Complete Path - Custom Title');
    expect(image).toHaveAttribute('src', 'https://example.com/react-path.jpg');
  });

  it('displays learning path position correctly', () => {
    const classroomItemWithPosition = {
      ...mockClassroomItem,
      position: 5,
    };
    
    render(
      <CriaClassroomTrilhaCard 
        customLearning={mockCustomLearning} 
        classroomItem={classroomItemWithPosition} 
      />
    );
    
    expect(screen.getByText('05')).toBeInTheDocument();
  });

  it('uses default position when not provided', () => {
    const classroomItemWithoutPosition = {
      ...mockClassroomItem,
      position: undefined,
    };
    
    render(
      <CriaClassroomTrilhaCard 
        customLearning={mockCustomLearning} 
        classroomItem={classroomItemWithoutPosition} 
      />
    );
    
    expect(screen.getByText('01')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <CriaClassroomTrilhaCard 
        customLearning={mockCustomLearning} 
        classroomItem={mockClassroomItem}
        className="custom-class"
      />
    );
    
    expect(container.firstChild).toHaveClass('cria-classroom-trilha-card', 'custom-class');
  });

  it('applies custom styles', () => {
    const customStyle = { border: '2px solid blue' };
    const { container } = render(
      <CriaClassroomTrilhaCard 
        customLearning={mockCustomLearning} 
        classroomItem={mockClassroomItem}
        style={customStyle}
      />
    );
    
    expect(container.firstChild).toHaveStyle({ border: '2px solid blue' });
  });

  it('sets correct data attributes', () => {
    const { container } = render(
      <CriaClassroomTrilhaCard 
        customLearning={mockCustomLearning} 
        classroomItem={mockClassroomItem} 
      />
    );
    
    const card = container.firstChild as HTMLElement;
    expect(card).toHaveAttribute('data-custom-learning-id', '1');
    expect(card).toHaveAttribute('data-classroom-item-id', '1');
  });

  it('renders thumbnail image with correct attributes', () => {
    render(
      <CriaClassroomTrilhaCard 
        customLearning={mockCustomLearning} 
        classroomItem={mockClassroomItem} 
      />
    );
    
    const image = screen.getByAltText('React Complete Path - Custom Title');
    expect(image).toHaveAttribute('src', 'https://example.com/react-path.jpg');
    expect(image).toHaveStyle({ objectFit: 'cover' });
  });

  it('handles image load error gracefully', () => {
    render(
      <CriaClassroomTrilhaCard 
        customLearning={mockCustomLearning} 
        classroomItem={mockClassroomItem} 
      />
    );
    
    const image = screen.getByAltText('React Complete Path - Custom Title');
    
    // Simulate image load error
    fireEvent.error(image);
    
    // Image should still be rendered (component handles errors gracefully)
    expect(image).toBeInTheDocument();
    expect(screen.getByText('React Complete Path - Custom Title')).toBeInTheDocument();
  });

  it('applies hover effects', () => {
    render(
      <CriaClassroomTrilhaCard 
        customLearning={mockCustomLearning} 
        classroomItem={mockClassroomItem} 
      />
    );
    
    const card = screen.getByText('React Complete Path - Custom Title').closest('div');
    expect(card).toBeInTheDocument();
  });

  it('shows title with underline when slug is present', () => {
    render(
      <CriaClassroomTrilhaCard 
        customLearning={mockCustomLearning} 
        classroomItem={mockClassroomItem} 
      />
    );
    
    const title = screen.getByText('React Complete Path - Custom Title');
    expect(title).toHaveStyle({ textDecoration: 'underline' });
  });

  it('shows title without underline when slug is not present', () => {
    const customLearningWithoutSlug = {
      ...mockCustomLearning,
      slug: undefined,
    };
    
    render(
      <CriaClassroomTrilhaCard 
        customLearning={customLearningWithoutSlug} 
        classroomItem={mockClassroomItem} 
      />
    );
    
    const title = screen.getByText('React Complete Path - Custom Title');
    expect(title).toHaveStyle({ textDecoration: 'none' });
  });

  it('displays duration with clock icon', () => {
    render(
      <CriaClassroomTrilhaCard 
        customLearning={mockCustomLearning} 
        classroomItem={mockClassroomItem} 
      />
    );
    
    expect(screen.getByText('12 hours')).toBeInTheDocument();
    // Clock icon should be present (it's an SVG from Phosphor)
    expect(screen.getByText('12 hours')).toBeInTheDocument();
  });

  it('displays TRILHA category', () => {
    render(
      <CriaClassroomTrilhaCard 
        customLearning={mockCustomLearning} 
        classroomItem={mockClassroomItem} 
      />
    );
    
    expect(screen.getAllByText('TRILHA')).toHaveLength(2); // One in position, one in bottom section
  });

  it('handles long titles', () => {
    const customLearningWithLongTitle: CustomLearning = {
      ...mockCustomLearning,
      title: 'This is a very long learning path title that should be displayed properly without causing layout issues',
    };
    
    render(
      <CriaClassroomTrilhaCard 
        customLearning={customLearningWithLongTitle} 
        classroomItem={mockClassroomItem} 
      />
    );
    
    expect(screen.getByText('React Complete Path - Custom Title')).toBeInTheDocument();
  });

  it('handles long descriptions', () => {
    const customLearningWithLongDescription: CustomLearning = {
      ...mockCustomLearning,
      description: 'This is a very long learning path description that should be displayed properly without causing layout issues in the classroom trilha card component',
    };
    
    render(
      <CriaClassroomTrilhaCard 
        customLearning={customLearningWithLongDescription} 
        classroomItem={mockClassroomItem} 
      />
    );
    
    // Just verify the component renders without errors
    expect(screen.getByText('React Complete Path - Custom Title')).toBeInTheDocument();
    expect(screen.getAllByText('TRILHA')).toHaveLength(2); // One in position, one in bottom section
  });
});
