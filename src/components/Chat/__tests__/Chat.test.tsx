import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Chat } from '../Chat';

const baseMsgs = [
  { id: '1', author: 'them' as const, text: 'Hello', timestamp: new Date() },
  { id: '2', author: 'me' as const, text: 'Hi!', timestamp: new Date() },
];

describe('Chat', () => {
  it('renders message list', () => {
    render(<Chat messages={baseMsgs} />);
    expect(screen.getByRole('log')).toBeInTheDocument();
    expect(screen.getByText('Hello')).toBeInTheDocument();
    expect(screen.getByText('Hi!')).toBeInTheDocument();
  });

  it('sends a message on Enter', () => {
    const onSend = vi.fn();
    render(<Chat messages={baseMsgs} onSend={onSend} />);
    const textarea = screen.getByLabelText('Message composer');
    fireEvent.change(textarea, { target: { value: 'New message' } });
    fireEvent.keyDown(textarea, { key: 'Enter' });
    expect(onSend).toHaveBeenCalledWith('New message');
  });

  it('Shift+Enter adds newline', () => {
    const onSend = vi.fn();
    render(<Chat messages={baseMsgs} onSend={onSend} />);
    const textarea = screen.getByLabelText('Message composer') as HTMLTextAreaElement;
    fireEvent.change(textarea, { target: { value: 'Hello' } });
    fireEvent.keyDown(textarea, { key: 'Enter', shiftKey: true });
    expect(onSend).not.toHaveBeenCalled();
  });

  it('shows typing indicator', () => {
    render(<Chat messages={baseMsgs} typing />);
    expect(screen.getByLabelText('Typing')).toBeInTheDocument();
  });
});


