import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Button } from '../Button';
import { Typography } from '../Typography';
import { PaperPlaneRight, Paperclip, DotsThree } from 'phosphor-react';

export interface ChatMessage {
  id: string;
  author: 'me' | 'them';
  text: string;
  timestamp: Date;
}

export interface ChatProps extends React.HTMLAttributes<HTMLDivElement> {
  messages?: ChatMessage[];
  onSend?: (text: string) => void;
  typing?: boolean;
  placeholder?: string;
  disabled?: boolean;
}

export const Chat: React.FC<ChatProps> = ({
  messages = [],
  onSend,
  typing = false,
  placeholder = 'Type a message…',
  disabled = false,
  className = '',
  style,
  ...props
}) => {
  const [text, setText] = useState('');
  const logRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom on new messages
  useEffect(() => {
    const el = logRef.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, [messages, typing]);

  const handleSend = useCallback(() => {
    if (!text.trim() || disabled) return;
    onSend?.(text.trim());
    setText('');
  }, [text, onSend, disabled]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const grouped = useMemo(() => {
    const out: { key: string; author: 'me'|'them'; items: ChatMessage[] }[] = [];
    messages.forEach(m => {
      const last = out[out.length - 1];
      if (last && last.author === m.author) {
        last.items.push(m);
      } else {
        out.push({ key: `${m.author}-${m.id}`, author: m.author, items: [m] });
      }
    });
    return out;
  }, [messages]);

  return (
    <div className={["cria-chat", className].filter(Boolean).join(' ')} style={style} {...props}>
      <div
        ref={logRef}
        className="cria-chat__log"
        role="log"
        aria-live="polite"
        aria-relevant="additions"
      >
        {grouped.map(group => (
          <div key={group.key} className={["cria-chat__group", group.author === 'me' ? 'cria-chat__group--me' : 'cria-chat__group--them'].join(' ')}>
            {group.items.map(item => (
              <div key={item.id} className="cria-chat__bubble" aria-label={`${group.author === 'me' ? 'Me' : 'Them'} said ${item.text}`}>
                <Typography variant="body" color={group.author === 'me' ? 'inverse' : 'content'}>
                  {item.text}
                </Typography>
                <Typography variant="caption" color={group.author === 'me' ? 'inverse' : 'secondary'}>
                  {item.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </Typography>
              </div>
            ))}
          </div>
        ))}
        {typing && (
          <div className="cria-chat__group cria-chat__group--them" aria-live="polite">
            <div className="cria-chat__bubble cria-chat__bubble--typing" aria-label="Typing">
              <DotsThree size={24} weight="bold" />
            </div>
          </div>
        )}
      </div>

      <div className="cria-chat__composer">
        <button type="button" className="cria-chat__attach" aria-label="Add attachment" disabled={disabled}>
          <Paperclip size={18} />
        </button>
        <textarea
          className="cria-chat__textarea"
          placeholder={placeholder}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          aria-label="Message composer"
          disabled={disabled}
          rows={1}
        />
        <Button variant="primary" size="sm" onClick={handleSend} disabled={disabled || !text.trim()} aria-label="Send message">
          <PaperPlaneRight size={18} />
        </Button>
      </div>
    </div>
  );
};

export default Chat;


