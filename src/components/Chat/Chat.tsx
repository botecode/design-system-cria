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
  /** If true, newly added non-user ("them") messages reveal characters gradually */
  revealThem?: boolean;
  /** Milliseconds per character when revealThem is enabled (default 18ms) */
  revealSpeedMs?: number;
}

export const Chat: React.FC<ChatProps> = ({
  messages = [],
  onSend,
  typing = false,
  placeholder = 'Type a message…',
  disabled = false,
  revealThem = false,
  revealSpeedMs = 18,
  className = '',
  style,
  ...props
}) => {
  const [text, setText] = useState('');
  const logRef = useRef<HTMLDivElement>(null);
  const [revealMsgId, setRevealMsgId] = useState<string | null>(null);
  const [revealIndex, setRevealIndex] = useState(0);
  const revealTimer = useRef<number | null>(null);
  const lastRevealedId = useRef<string | null>(null);

  // Scroll to bottom on new messages
  useEffect(() => {
    const el = logRef.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, [messages, typing]);

  // Start reveal animation for the latest "them" message
  useEffect(() => {
    if (!revealThem) return;
    const last = messages[messages.length - 1];
    if (!last || last.author !== 'them') return;
    if (lastRevealedId.current === last.id) return;
    lastRevealedId.current = last.id;
    setRevealMsgId(last.id);
    setRevealIndex(0);
    if (revealTimer.current) window.clearInterval(revealTimer.current);
    revealTimer.current = window.setInterval(() => {
      setRevealIndex((i) => {
        const next = i + 1;
        if (next >= last.text.length) {
          if (revealTimer.current) window.clearInterval(revealTimer.current);
          revealTimer.current = null;
        }
        return next;
      });
    }, Math.max(5, revealSpeedMs));
    return () => {
      if (revealTimer.current) window.clearInterval(revealTimer.current);
    };
  }, [messages, revealThem, revealSpeedMs]);

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
                  {revealThem && group.author === 'them' && item.id === revealMsgId
                    ? item.text.slice(0, Math.max(0, revealIndex))
                    : item.text}
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
        <Button variant="secondary" size="sm" onClick={handleSend} disabled={disabled || !text.trim()} aria-label="Send message">
          <PaperPlaneRight size={18} />
        </Button>
      </div>
    </div>
  );
};

export default Chat;


