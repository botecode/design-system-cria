import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '../Card';
import { Chat, ChatMessage } from './Chat';
import { CriaTextHeadline2, CriaTextTitle2 } from '../TextTokens';
import { Typography } from '../Typography';

export const ChatDemo: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', author: 'them', text: 'Hey! Welcome to CRIA_UI.', timestamp: new Date() },
    { id: '2', author: 'me', text: 'Hi there 👋', timestamp: new Date() },
  ]);
  const [typing, setTyping] = useState(false);
  const [sidebarMessages, setSidebarMessages] = useState<ChatMessage[]>([
    { 
      id: 's1', 
      author: 'them', 
      text: 'Check out this awesome design system!', 
      timestamp: new Date(),
      attachments: [{
        id: 'att1',
        type: 'card',
        title: 'CRIA Design System',
        description: 'A comprehensive design system with beautiful components',
        thumbnail: 'https://via.placeholder.com/280x120/7566A1/FFFFFF?text=CRIA+Design+System'
      }]
    },
    { 
      id: 's2', 
      author: 'me', 
      text: 'This looks amazing! Can you share more details?', 
      timestamp: new Date(),
      replyTo: 's1'
    },
    { 
      id: 's3', 
      author: 'them', 
      text: 'Sure! Here\'s a preview of the course:', 
      timestamp: new Date(),
      attachments: [{
        id: 'att2',
        type: 'course',
        thumbnail: '/src/assets/LORA.png',
        title: 'LORA Course',
        description: 'Learn how to build amazing design systems with modern tools and best practices',
        duration: '2h 30min',
        actionText: 'Ver Curso'
      }]
    },
    { 
      id: 's4', 
      author: 'me', 
      text: 'Perfect! This is exactly what I was looking for.', 
      timestamp: new Date(),
      replyTo: 's3'
    },
    { 
      id: 's5', 
      author: 'them', 
      text: 'Here\'s a specific lesson from the course:', 
      timestamp: new Date(),
      attachments: [{
        id: 'att3',
        type: 'lesson',
        thumbnail: '/src/assets/LORA.png',
        title: 'LORA Lesson',
        description: 'Learn how to structure your components for scalability',
        duration: '15min',
        actionText: 'Ver Aula'
      }]
    },
  ]);
  const [sidebarTyping, setSidebarTyping] = useState(false);

  const handleSend = (text: string, replyTo?: string) => {
    const next = { 
      id: String(Date.now()), 
      author: 'me' as const, 
      text, 
      timestamp: new Date(),
      replyTo
    };
    setMessages((m) => [...m, next]);
    setTyping(true);
    setTimeout(() => {
      setMessages((m) => [...m, { 
        id: String(Date.now()+1), 
        author: 'them', 
        text: 'Got it!', 
        timestamp: new Date() 
      }]);
      setTyping(false);
    }, 800);
  };

  const handleSidebarSend = (text: string, replyTo?: string) => {
    const next = { 
      id: String(Date.now()), 
      author: 'me' as const, 
      text, 
      timestamp: new Date(),
      replyTo
    };
    setSidebarMessages((m) => [...m, next]);
    setSidebarTyping(true);
    setTimeout(() => {
      setSidebarMessages((m) => [...m, { 
        id: String(Date.now()+1), 
        author: 'them', 
        text: 'Got it! Thanks for the reply.', 
        timestamp: new Date() 
      }]);
      setSidebarTyping(false);
    }, 700);
  };

  return (
    <div style={{ padding: 24, maxWidth: 900 }}>
      <CriaTextHeadline2 as="h2" style={{ marginBottom: 16 }}>Chat</CriaTextHeadline2>

      <Card>
        <CardHeader>
          <CriaTextTitle2 as="h3">Demo</CriaTextTitle2>
        </CardHeader>
        <CardContent>
          <div style={{ height: 420 }}>
            <Chat messages={messages} onSend={handleSend} typing={typing} revealThem revealSpeedMs={14} />
          </div>
        </CardContent>
      </Card>

      {/* Sidebar Chat Layout */}
      <div style={{ display: 'flex', gap: 16, marginTop: 24 }}>
        {/* Sticky left sidebar with gradient background */}
        <div
          style={{
            position: 'sticky',
            top: 16,
            alignSelf: 'flex-start',
            width: 340,
            minHeight: '70vh',
            background: '#2A1F3A', // primaryDark
            borderRadius: 12,
            padding: 12,
            overflow: 'hidden',
          }}
        >
          {/* Gradient overlay */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: '-20%',
            right: 0,
            top: '-10%',
            height: '500px',
            width: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle farthest-side, rgba(117, 102, 161, 0.15), rgba(255, 255, 255, 0))',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute',
            bottom: 0,
            right: '-20%',
            top: '-10%',
            height: '500px',
            width: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle farthest-side, rgba(117, 102, 161, 0.15), rgba(255, 255, 255, 0))',
            pointerEvents: 'none',
          }} />
          
          <div style={{ margin: '0 8px 8px 8px', position: 'relative', zIndex: 1 }}>
            <Typography variant="h3" color="inverse" weight="semiBold">Sidebar Chat</Typography>
          </div>
          <div style={{ height: 'calc(70vh - 40px)', position: 'relative', zIndex: 1 }}>
            <Chat className="cria-chat--sidebar" messages={sidebarMessages} onSend={handleSidebarSend} typing={sidebarTyping} revealThem />
          </div>
        </div>

        {/* Main content area */}
        <div style={{ flex: 1 }}>
          <Card>
            <CardHeader>
              <CriaTextTitle2 as="h3">Main Content</CriaTextTitle2>
            </CardHeader>
            <CardContent>
              <p style={{ marginBottom: 12 }}>This area represents the rest of the page. The chat on the left is sticky and stays in view while you scroll this content.</p>
              {Array.from({ length: 20 }).map((_, i) => (
                <p key={i} style={{ margin: '8px 0', color: 'var(--cria-gray-700)' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum, arcu eu porttitor ultrices, metus justo condimentum eros, vitae aliquam turpis dui id lacus.
                </p>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ChatDemo;


