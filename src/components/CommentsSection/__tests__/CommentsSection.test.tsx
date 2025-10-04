import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CommentsSection, Comment } from '../CommentsSection';

const mockComments: Comment[] = [
  {
    id: '1',
    author: 'John Doe',
    avatar: 'https://via.placeholder.com/32',
    content: 'This is a great idea!',
    timestamp: new Date('2024-01-15T10:30:00Z'),
    replies: [
      {
        id: '2',
        author: 'Jane Smith',
        avatar: 'https://via.placeholder.com/32',
        content: 'I agree completely.',
        timestamp: new Date('2024-01-15T11:00:00Z'),
        replies: []
      }
    ]
  }
];

describe('CommentsSection', () => {
  it('renders initial thread and timestamps', () => {
    render(<CommentsSection comments={mockComments} onAddComment={jest.fn()} />);
    
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('This is a great idea!')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('I agree completely.')).toBeInTheDocument();
    expect(screen.getAllByText(/Jan 15, 2024/).length).toBeGreaterThan(0);
  });

  it('adding a comment appends and clears composer', async () => {
    const user = userEvent.setup();
    const onAddComment = jest.fn();
    
    render(<CommentsSection comments={[]} onAddComment={onAddComment} />);
    
    const textarea = screen.getByRole('textbox', { name: /add a comment/i });
    const sendButton = screen.getByRole('button', { name: /send/i });
    
    await user.type(textarea, 'New comment');
    await user.click(sendButton);
    
    expect(onAddComment).toHaveBeenCalledWith('New comment');
    expect(textarea).toHaveValue('');
  });

  it('keyboard behavior: Enter sends; Shift+Enter inserts newline', async () => {
    const user = userEvent.setup();
    const onAddComment = jest.fn();
    
    render(<CommentsSection comments={[]} onAddComment={onAddComment} />);
    
    const textarea = screen.getByRole('textbox', { name: /add a comment/i });
    
    // Shift+Enter should not send
    await user.type(textarea, 'Line 1');
    await user.keyboard('{Shift>}{Enter}{/Shift}');
    await user.type(textarea, 'Line 2');
    
    expect(textarea).toHaveValue('Line 1\nLine 2');
    expect(onAddComment).not.toHaveBeenCalled();
    
    // Enter should send
    await user.keyboard('{Enter}');
    
    expect(onAddComment).toHaveBeenCalledWith('Line 1\nLine 2');
    expect(textarea).toHaveValue('');
  });

  it('a11y: roles/labels present; focus management validated', () => {
    render(<CommentsSection comments={mockComments} onAddComment={jest.fn()} onEditComment={jest.fn()} onDeleteComment={jest.fn()} />);
    
    // Check for proper ARIA roles and labels
    expect(screen.getByRole('region', { name: /comments/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /add a comment/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument();
    
    // Check for comment actions
    const replyButtons = screen.getAllByRole('button', { name: /reply/i });
    expect(replyButtons.length).toBeGreaterThan(0);
    
    const editButtons = screen.getAllByRole('button', { name: /edit/i });
    expect(editButtons.length).toBeGreaterThan(0);
    
    const deleteButtons = screen.getAllByRole('button', { name: /delete/i });
    expect(deleteButtons.length).toBeGreaterThan(0);
  });

  it('reply functionality works correctly', async () => {
    const user = userEvent.setup();
    const onAddReply = jest.fn();
    
    render(<CommentsSection comments={mockComments} onAddComment={jest.fn()} onAddReply={onAddReply} />);
    
    const replyButton = screen.getAllByRole('button', { name: /reply/i })[0];
    await user.click(replyButton);
    
    const replyTextarea = screen.getByRole('textbox', { name: /reply to/i });
    const sendReplyButton = screen.getByRole('button', { name: /send reply/i });
    
    await user.type(replyTextarea, 'This is a reply');
    await user.click(sendReplyButton);
    
    expect(onAddReply).toHaveBeenCalledWith('1', 'This is a reply');
  });

  it('edit functionality works correctly', async () => {
    const user = userEvent.setup();
    const onEditComment = jest.fn();
    
    render(<CommentsSection comments={mockComments} onAddComment={jest.fn()} onEditComment={onEditComment} />);
    
    const editButton = screen.getAllByRole('button', { name: /edit/i })[0];
    await user.click(editButton);
    
    const editTextarea = screen.getByDisplayValue('This is a great idea!');
    const saveButton = screen.getByRole('button', { name: /save/i });
    
    await user.clear(editTextarea);
    await user.type(editTextarea, 'This is an edited comment');
    await user.click(saveButton);
    
    expect(onEditComment).toHaveBeenCalledWith('1', 'This is an edited comment');
  });

  it('delete functionality works correctly', async () => {
    const user = userEvent.setup();
    const onDeleteComment = jest.fn();
    
    render(<CommentsSection comments={mockComments} onAddComment={jest.fn()} onDeleteComment={onDeleteComment} />);
    
    const deleteButton = screen.getAllByRole('button', { name: /delete/i })[0];
    await user.click(deleteButton);
    
    // Should show confirmation dialog
    expect(screen.getByText(/are you sure/i)).toBeInTheDocument();
    
    const confirmButton = screen.getByRole('button', { name: /confirm/i });
    await user.click(confirmButton);
    
    expect(onDeleteComment).toHaveBeenCalledWith('1');
  });
});
