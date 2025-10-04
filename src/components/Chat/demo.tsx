import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '../Card';
import { Chat, ChatMessage } from './Chat';
import { CriaTextHeadline2, CriaTextTitle2 } from '../TextTokens';

export const ChatDemo: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', author: 'them', text: 'Hey! Welcome to CRIA_UI.', timestamp: new Date() },
    { id: '2', author: 'me', text: 'Hi there 👋', timestamp: new Date() },
  ]);
  const [typing, setTyping] = useState(false);

  const handleSend = (text: string) => {
    const next = { id: String(Date.now()), author: 'me' as const, text, timestamp: new Date() };
    setMessages((m) => [...m, next]);
    setTyping(true);
    setTimeout(() => {
      setMessages((m) => [...m, { id: String(Date.now()+1), author: 'them', text: 'Got it!', timestamp: new Date() }]);
      setTyping(false);
    }, 800);
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
            <Chat messages={messages} onSend={handleSend} typing={typing} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChatDemo;


