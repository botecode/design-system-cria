import React from 'react';
import { Typography } from '../../components/Typography';
import { Button } from '../../components/Button';
import { Badge } from '../../components/Badge';

const CriaFlowEditor: React.FC = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', background: 'var(--cria-background)' }}>
      {/* Fixed Sidebar Placeholder */}
      <aside style={{ width: 256, borderRight: '1px solid var(--cria-gray-200)', background: 'var(--cria-white)' }}>
        <div style={{ padding: 16, borderBottom: '1px solid var(--cria-gray-200)' }}>
          <Typography variant="h3" weight="semiBold">CRIA Flow Editor</Typography>
          <Typography variant="caption" color="disabled">Foundation</Typography>
        </div>
        <nav style={{ padding: 16, display: 'grid', gap: 8 }}>
          <Button variant="outline" size="sm">Home</Button>
          <Button variant="outline" size="sm">Courses & Trilhas</Button>
          <Button variant="outline" size="sm">Lessons</Button>
          <Button variant="outline" size="sm">My Lessons</Button>
          <Button variant="outline" size="sm">Events</Button>
          <Button variant="outline" size="sm">Prompts</Button>
          <Button variant="outline" size="sm">Tools</Button>
        </nav>
      </aside>

      {/* Content */}
      <main style={{ flex: 1, padding: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Button variant="ghost" size="sm">← Voltar</Button>
            <Typography variant="h3" weight="semiBold">Parent Layout</Typography>
            <Badge variant="secondary">Draft</Badge>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <Button variant="outline" size="sm">Sidebar</Button>
            <Button variant="outline" size="sm">Margins</Button>
            <Button variant="outline" size="sm">Footer</Button>
            <Button variant="primary" size="sm">Salvar</Button>
          </div>
        </div>

        <div style={{ border: '1px dashed var(--cria-gray-300)', borderRadius: 'var(--cria-radius-md)', padding: 24, background: 'var(--cria-white)' }}>
          <Typography variant="body" color="disabled">Editor area placeholder. Use /IMPLEMENT_CRIA_FLOW next please to continue.</Typography>
        </div>
      </main>
    </div>
  );
};

export default CriaFlowEditor;


