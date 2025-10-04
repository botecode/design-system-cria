import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Button } from '../Button';
import { Typography } from '../Typography';
import { Card } from '../Card';
import { PaperPlaneRight, Paperclip, DotsThree, Play, Image, FileText, ArrowBendUpLeft } from 'phosphor-react';

export interface ChatMessage {
  id: string;
  author: 'me' | 'them';
  text: string;
  timestamp: Date;
  replyTo?: string; // ID of the message being replied to
  attachments?: ChatAttachment[];
}

export interface ChatAttachment {
  id: string;
  type: 'image' | 'video' | 'card' | 'file' | 'course' | 'lesson';
  url?: string;
  title?: string;
  description?: string;
  thumbnail?: string;
  size?: string;
  duration?: string; // for videos
  actionText?: string; // custom button text
}

export interface ChatProps extends React.HTMLAttributes<HTMLDivElement> {
  messages?: ChatMessage[];
  onSend?: (text: string, replyTo?: string) => void;
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
  const [replyingTo, setReplyingTo] = useState<ChatMessage | null>(null);
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
    onSend?.(text.trim(), replyingTo?.id);
    setText('');
    setReplyingTo(null);
  }, [text, onSend, disabled, replyingTo]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleReply = (message: ChatMessage) => {
    setReplyingTo(message);
  };

  const cancelReply = () => {
    setReplyingTo(null);
  };

  const findMessageById = (id: string) => {
    return messages.find(msg => msg.id === id);
  };

  const renderAttachment = (attachment: ChatAttachment) => {
    switch (attachment.type) {
      case 'image':
        return (
          <div style={{ marginTop: 8, borderRadius: 8, overflow: 'hidden' }}>
            <img 
              src={attachment.url} 
              alt={attachment.title || 'Image'} 
              style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
            />
            {attachment.title && (
              <div style={{ 
                padding: 12, 
                background: 'rgba(0,0,0,0.05)', 
                borderTop: '1px solid rgba(0,0,0,0.1)',
                display: 'flex',
                flexDirection: 'column',
                gap: 8
              }}>
                <div>
                  <Typography variant="body" weight="semiBold" style={{ marginBottom: 4 }}>
                    {attachment.title}
                  </Typography>
                  {attachment.description && (
                    <Typography variant="caption" color="secondary">
                      {attachment.description}
                    </Typography>
                  )}
                </div>
                <Button 
                  variant="primary" 
                  size="sm" 
                  onClick={() => {
                    // Handle course/lesson view action
                    console.log('View course/lesson:', attachment.title);
                  }}
                  style={{ alignSelf: 'flex-start' }}
                >
                  {attachment.title?.toLowerCase().includes('curso') || attachment.title?.toLowerCase().includes('course') 
                    ? 'Ver Curso' 
                    : 'Ver Aula'}
                </Button>
              </div>
            )}
          </div>
        );
      case 'video':
        return (
          <div style={{ marginTop: 8, borderRadius: 8, overflow: 'hidden', position: 'relative' }}>
            <video 
              src={attachment.url} 
              controls 
              style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
            />
            {attachment.duration && (
              <div style={{
                position: 'absolute',
                bottom: 8,
                right: 8,
                background: 'rgba(0,0,0,0.7)',
                color: 'white',
                padding: '2px 6px',
                borderRadius: 4,
                fontSize: '12px'
              }}>
                {attachment.duration}
              </div>
            )}
          </div>
        );
      case 'card':
        return (
          <div style={{ marginTop: 8 }}>
            <Card style={{ padding: 12, maxWidth: 280 }}>
              {attachment.thumbnail && (
                <img 
                  src={attachment.thumbnail} 
                  alt={attachment.title || 'Card'} 
                  style={{ width: '100%', height: 120, objectFit: 'cover', borderRadius: 4, marginBottom: 8 }}
                />
              )}
              {attachment.title && (
                <Typography variant="body" weight="semiBold" style={{ marginBottom: 4 }}>
                  {attachment.title}
                </Typography>
              )}
              {attachment.description && (
                <Typography variant="caption" color="secondary">
                  {attachment.description}
                </Typography>
              )}
            </Card>
          </div>
        );
      case 'file':
        return (
          <div style={{ 
            marginTop: 8, 
            padding: 8, 
            background: 'rgba(0,0,0,0.05)', 
            borderRadius: 6, 
            display: 'flex', 
            alignItems: 'center', 
            gap: 8 
          }}>
            <FileText size={20} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <Typography variant="body" weight="semiBold" style={{ marginBottom: 2 }}>
                {attachment.title || 'File'}
              </Typography>
              {attachment.size && (
                <Typography variant="caption" color="secondary">
                  {attachment.size}
                </Typography>
              )}
            </div>
          </div>
        );
      case 'course':
      case 'lesson':
        return (
          <div style={{ marginTop: 8, borderRadius: 8, overflow: 'hidden', border: '1px solid var(--cria-gray-200)' }}>
            {attachment.thumbnail && (
              <img 
                src={attachment.thumbnail} 
                alt={attachment.title || 'Course/Lesson'} 
                style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block' }}
              />
            )}
            <div style={{ 
              padding: 16, 
              background: 'var(--cria-white)',
              display: 'flex',
              flexDirection: 'column',
              gap: 12
            }}>
              <div>
                <Typography variant="body" weight="semiBold" style={{ marginBottom: 4, color: 'var(--cria-gray-900)' }}>
                  {attachment.title}
                </Typography>
                {attachment.description && (
                  <Typography variant="caption" style={{ color: 'var(--cria-gray-700)', marginBottom: 4, display: 'block' }}>
                    {attachment.description}
                  </Typography>
                )}
                {attachment.duration && (
                  <Typography variant="caption" style={{ color: 'var(--cria-gray-600)', marginTop: 4, display: 'block' }}>
                    Duração: {attachment.duration}
                  </Typography>
                )}
              </div>
              <Button 
                variant="primary" 
                size="sm" 
                onClick={() => {
                  // Handle course/lesson view action
                  console.log('View course/lesson:', attachment.title);
                }}
                style={{ alignSelf: 'flex-start' }}
              >
                {attachment.actionText || (attachment.type === 'course' ? 'Ver Curso' : 'Ver Aula')}
              </Button>
            </div>
          </div>
        );
      default:
        return null;
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
            {group.items.map(item => {
              const repliedMessage = item.replyTo ? findMessageById(item.replyTo) : null;
              return (
                <div key={item.id} className="cria-chat__bubble" aria-label={`${group.author === 'me' ? 'Me' : 'Them'} said ${item.text}`}>
                  {/* Reply indicator */}
                  {repliedMessage && (
                    <div style={{
                      marginBottom: 8,
                      padding: 8,
                      background: 'rgba(0,0,0,0.05)',
                      borderRadius: 6,
                      borderLeft: '3px solid var(--cria-primary)',
                      fontSize: '12px',
                      color: 'var(--cria-gray-600)'
                    }}>
                      <div style={{ fontWeight: 500, marginBottom: 2 }}>
                        Replying to {repliedMessage.author === 'me' ? 'you' : 'them'}
                      </div>
                      <div style={{ 
                        overflow: 'hidden', 
                        textOverflow: 'ellipsis', 
                        whiteSpace: 'nowrap',
                        maxWidth: '200px'
                      }}>
                        {repliedMessage.text}
                      </div>
                    </div>
                  )}
                  
                  {/* Message text */}
                  <Typography variant="body" color={group.author === 'me' ? 'inverse' : 'content'}>
                    {revealThem && group.author === 'them' && item.id === revealMsgId
                      ? item.text.slice(0, Math.max(0, revealIndex))
                      : item.text}
                  </Typography>
                  
                  {/* Attachments */}
                  {item.attachments && item.attachments.map(attachment => (
                    <div key={attachment.id}>
                      {renderAttachment(attachment)}
                    </div>
                  ))}
                  
                  {/* Message footer with timestamp and reply button */}
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    marginTop: 4,
                    gap: 8
                  }}>
                    <Typography variant="caption" color={group.author === 'me' ? 'inverse' : 'secondary'}>
                      {item.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </Typography>
                    <button
                      onClick={() => handleReply(item)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: group.author === 'me' ? 'rgba(255,255,255,0.7)' : 'var(--cria-gray-500)',
                        cursor: 'pointer',
                        padding: 2,
                        borderRadius: 4,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 4,
                        fontSize: '12px'
                      }}
                      title="Reply to this message"
                    >
                      <ArrowBendUpLeft size={12} />
                      Reply
                    </button>
                  </div>
                </div>
              );
            })}
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

      {/* Reply indicator */}
      {replyingTo && (
        <div style={{
          padding: 8,
          background: 'rgba(117, 102, 161, 0.1)',
          borderRadius: 6,
          border: '1px solid var(--cria-primary)',
          marginBottom: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 8
        }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: '12px', fontWeight: 500, color: 'var(--cria-primary)', marginBottom: 2 }}>
              Replying to {replyingTo.author === 'me' ? 'your message' : 'their message'}
            </div>
            <div style={{ 
              fontSize: '12px', 
              color: 'var(--cria-gray-600)',
              overflow: 'hidden', 
              textOverflow: 'ellipsis', 
              whiteSpace: 'nowrap'
            }}>
              {replyingTo.text}
            </div>
          </div>
          <button
            onClick={cancelReply}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--cria-gray-500)',
              cursor: 'pointer',
              padding: 4,
              borderRadius: 4,
              fontSize: '12px'
            }}
            title="Cancel reply"
          >
            ✕
          </button>
        </div>
      )}

      <div className="cria-chat__composer">
        <textarea
          className="cria-chat__textarea"
          placeholder={replyingTo ? `Reply to ${replyingTo.author === 'me' ? 'your message' : 'their message'}...` : placeholder}
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


