import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CriaCustomLearningLessonCard, CustomLearning, ClassroomItem, Instructor, Tool } from '../CriaCustomLearningLessonCard';

// Mock data
const mockInstructor: Instructor = {
  id: '1',
  name: 'John Doe',
  avatarUrl: 'https://example.com/avatar.jpg',
};

const mockTool: Tool = {
  id: '1',
  name: 'React',
  icon: '⚛️',
};

const mockLesson = {
  id: '1',
  title: 'React Fundamentals',
  instructors: ['John Doe', 'Jane Smith'],
  tools: ['React', 'JavaScript'],
};

const mockCourse = {
  id: '1',
  title: 'React Complete Course',
  instructors: [mockInstructor],
  tools: [mockTool],
};

const mockCustomLearning: CustomLearning = {
  id: '1',
  slug: 'react-complete-path',
  title: 'React Complete Learning Path',
  description: 'Master React from basics to advanced concepts with comprehensive lessons and courses.',
  duration: '12 hours',
  imageUrl: 'https://example.com/image.jpg',
  lessons: [mockLesson],
  courses: [mockCourse],
};

const mockClassroomItem: ClassroomItem = {
  id: '1',
  position: 1,
  customTitle: 'React Complete Path - Advanced',
  customSubtitle: 'From beginner to expert with hands-on projects and real-world applications',
  imageUrl: 'https://example.com/custom-image.jpg',
};

describe('CriaCustomLearningLessonCard', () => {
  it('renders the component with all required elements', () => {
    render(
      <CriaCustomLearningLessonCard
        customLearning={mockCustomLearning}
        classroomItem={mockClassroomItem}
      />
    );

    expect(screen.getByText('React Complete Path - Advanced')).toBeInTheDocument();
    expect(screen.getByText('From beginner to expert with hands-on projects and real-world applications')).toBeInTheDocument();
    expect(screen.getByText('12 hours')).toBeInTheDocument();
    expect(screen.getByText('TRILHA')).toBeInTheDocument();
    expect(screen.getByText('01')).toBeInTheDocument(); // Position formatted as 01
  });

  it('uses custom title and subtitle when provided', () => {
    render(
      <CriaCustomLearningLessonCard
        customLearning={mockCustomLearning}
        classroomItem={mockClassroomItem}
      />
    );

    expect(screen.getByText('React Complete Path - Advanced')).toBeInTheDocument();
    expect(screen.getByText('From beginner to expert with hands-on projects and real-world applications')).toBeInTheDocument();
  });

  it('falls back to custom learning title and description when custom values are not provided', () => {
    const classroomItemWithoutCustom: ClassroomItem = {
      id: '1',
      position: 1,
    };

    render(
      <CriaCustomLearningLessonCard
        customLearning={mockCustomLearning}
        classroomItem={classroomItemWithoutCustom}
      />
    );

    expect(screen.getByText('React Complete Learning Path')).toBeInTheDocument();
    expect(screen.getByText('Master React from basics to advanced concepts with comprehensive lessons and courses.')).toBeInTheDocument();
  });

  it('displays the correct image with proper attributes', () => {
    render(
      <CriaCustomLearningLessonCard
        customLearning={mockCustomLearning}
        classroomItem={mockClassroomItem}
      />
    );

    const image = screen.getByAltText('React Complete Path - Advanced');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://example.com/custom-image.jpg');
  });

  it('displays instructors from lessons and courses', () => {
    render(
      <CriaCustomLearningLessonCard
        customLearning={mockCustomLearning}
        classroomItem={mockClassroomItem}
      />
    );

    // Should show instructor from course
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  it('displays tools from lessons and courses', () => {
    render(
      <CriaCustomLearningLessonCard
        customLearning={mockCustomLearning}
        classroomItem={mockClassroomItem}
      />
    );

    expect(screen.getByText('React')).toBeInTheDocument();
  });

  it('handles click events correctly', () => {
    const mockOnCardClick = jest.fn();
    const mockOnInstructorClick = jest.fn();
    const mockOnToolClick = jest.fn();

    render(
      <CriaCustomLearningLessonCard
        customLearning={mockCustomLearning}
        classroomItem={mockClassroomItem}
        onCardClick={mockOnCardClick}
        onInstructorClick={mockOnInstructorClick}
        onToolClick={mockOnToolClick}
      />
    );

    // Test card click
    const card = screen.getByText('React Complete Path - Advanced').closest('div');
    fireEvent.click(card!);
    expect(mockOnCardClick).toHaveBeenCalledWith(mockCustomLearning);

    // Test instructor click
    const instructorElement = screen.getByText('John Doe');
    fireEvent.click(instructorElement);
    expect(mockOnInstructorClick).toHaveBeenCalledWith(mockInstructor);

    // Test tool click
    const toolElement = screen.getByText('React');
    fireEvent.click(toolElement);
    expect(mockOnToolClick).toHaveBeenCalledWith(mockTool);
  });

  it('prevents event propagation on instructor and tool clicks', () => {
    const mockOnCardClick = jest.fn();
    const mockOnInstructorClick = jest.fn();

    render(
      <CriaCustomLearningLessonCard
        customLearning={mockCustomLearning}
        classroomItem={mockClassroomItem}
        onCardClick={mockOnCardClick}
        onInstructorClick={mockOnInstructorClick}
      />
    );

    // Click on instructor should not trigger card click
    const instructorElement = screen.getByText('John Doe');
    fireEvent.click(instructorElement);
    
    expect(mockOnInstructorClick).toHaveBeenCalled();
    expect(mockOnCardClick).not.toHaveBeenCalled();
  });

  it('displays overflow count for instructors when there are more than 2', () => {
    const customLearningWithManyInstructors: CustomLearning = {
      ...mockCustomLearning,
      lessons: [
        {
          id: '1',
          title: 'Lesson 1',
          instructors: ['John Doe', 'Jane Smith', 'Bob Wilson', 'Alice Brown'],
          tools: [],
        },
      ],
    };

    render(
      <CriaCustomLearningLessonCard
        customLearning={customLearningWithManyInstructors}
        classroomItem={mockClassroomItem}
      />
    );

    expect(screen.getByText('+2')).toBeInTheDocument(); // 4 instructors - 2 visible = 2 overflow
  });

  it('displays overflow count for tools when there are more than 4', () => {
    const customLearningWithManyTools: CustomLearning = {
      ...mockCustomLearning,
      lessons: [
        {
          id: '1',
          title: 'Lesson 1',
          instructors: [],
          tools: ['React', 'TypeScript', 'JavaScript', 'CSS', 'HTML', 'Node.js'],
        },
      ],
    };

    render(
      <CriaCustomLearningLessonCard
        customLearning={customLearningWithManyTools}
        classroomItem={mockClassroomItem}
      />
    );

    expect(screen.getByText('+2')).toBeInTheDocument(); // 6 tools - 4 visible = 2 overflow
  });

  it('applies hover effects when onCardClick is provided', async () => {
    const mockOnCardClick = jest.fn();

    render(
      <CriaCustomLearningLessonCard
        customLearning={mockCustomLearning}
        classroomItem={mockClassroomItem}
        onCardClick={mockOnCardClick}
      />
    );

    const card = screen.getByText('React Complete Path - Advanced').closest('div');
    
    // Test hover enter
    fireEvent.mouseEnter(card!);
    await waitFor(() => {
      expect(card).toHaveStyle('transform: translateY(-2px)');
    });

    // Test hover leave
    fireEvent.mouseLeave(card!);
    await waitFor(() => {
      expect(card).toHaveStyle('transform: translateY(0px)');
    });
  });

  it('does not apply hover effects when onCardClick is not provided', () => {
    render(
      <CriaCustomLearningLessonCard
        customLearning={mockCustomLearning}
        classroomItem={mockClassroomItem}
      />
    );

    const card = screen.getByText('React Complete Path - Advanced').closest('div');
    expect(card).toHaveStyle('cursor: default');
  });

  it('formats position number with leading zero', () => {
    const classroomItemWithSingleDigit: ClassroomItem = {
      ...mockClassroomItem,
      position: 5,
    };

    render(
      <CriaCustomLearningLessonCard
        customLearning={mockCustomLearning}
        classroomItem={classroomItemWithSingleDigit}
      />
    );

    expect(screen.getByText('05')).toBeInTheDocument();
  });

  it('handles missing image gracefully', () => {
    const customLearningWithoutImage: CustomLearning = {
      ...mockCustomLearning,
      imageUrl: undefined,
    };

    const classroomItemWithoutImage: ClassroomItem = {
      ...mockClassroomItem,
      imageUrl: undefined,
    };

    render(
      <CriaCustomLearningLessonCard
        customLearning={customLearningWithoutImage}
        classroomItem={classroomItemWithoutImage}
      />
    );

    const image = screen.getByAltText('React Complete Path - Advanced');
    expect(image).toHaveAttribute('src', '/cria_emblem_home.png');
  });

  it('applies custom className and style', () => {
    const customStyle = { backgroundColor: 'red' };
    
    render(
      <CriaCustomLearningLessonCard
        customLearning={mockCustomLearning}
        classroomItem={mockClassroomItem}
        className="custom-class"
        style={customStyle}
      />
    );

    const card = screen.getByText('React Complete Path - Advanced').closest('div');
    expect(card).toHaveClass('custom-class');
    expect(card).toHaveStyle('background-color: red');
  });

  it('handles empty instructors and tools gracefully', () => {
    const customLearningEmpty: CustomLearning = {
      ...mockCustomLearning,
      lessons: [],
      courses: [],
    };

    render(
      <CriaCustomLearningLessonCard
        customLearning={customLearningEmpty}
        classroomItem={mockClassroomItem}
      />
    );

    expect(screen.getByText('React Complete Path - Advanced')).toBeInTheDocument();
    expect(screen.getByText('TRILHA')).toBeInTheDocument();
  });

  it('renders title as button when slug is provided', () => {
    render(
      <CriaCustomLearningLessonCard
        customLearning={mockCustomLearning}
        classroomItem={mockClassroomItem}
        onCardClick={() => {}}
      />
    );

    const titleButton = screen.getByRole('button', { name: 'React Complete Path - Advanced' });
    expect(titleButton).toBeInTheDocument();
  });

  it('renders title as typography when slug is not provided', () => {
    const customLearningWithoutSlug: CustomLearning = {
      ...mockCustomLearning,
      slug: undefined,
    };

    render(
      <CriaCustomLearningLessonCard
        customLearning={customLearningWithoutSlug}
        classroomItem={mockClassroomItem}
      />
    );

    expect(screen.getByText('React Complete Path - Advanced')).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'React Complete Path - Advanced' })).not.toBeInTheDocument();
  });
});
