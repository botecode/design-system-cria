import React from 'react';
import { Typography } from '../../components/Typography';
import { Button } from '../../components/Button';
import { Badge } from '../../components/Badge';
import { ParentLayoutEditor } from './ParentLayoutEditor';
import { PageEditor } from './PageEditor';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'courses', label: 'Courses & Trilhas' },
  { id: 'lessons', label: 'Lessons' },
  { id: 'my-lessons', label: 'My Lessons' },
  { id: 'events', label: 'Events' },
  { id: 'prompts', label: 'Prompts' },
  { id: 'tools', label: 'Tools' }
] as const;

type SectionId = typeof sections[number]['id'];

const CriaFlowEditor: React.FC = () => {
  const [activeSection, setActiveSection] = React.useState<SectionId>('home');
  const [mode, setMode] = React.useState<'parent' | 'page'>('parent');

  React.useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const s = q.get('section') as SectionId | null;
    const m = q.get('mode') as 'parent' | 'page' | null;
    if (s && sections.some(sec => sec.id === s)) setActiveSection(s);
    if (m === 'parent' || m === 'page') setMode(m);
  }, []);

  const navigate = (next: Partial<{ section: SectionId; mode: 'parent' | 'page' }>) => {
    const params = new URLSearchParams(window.location.search);
    if (next.section) params.set('section', next.section);
    if (next.mode) params.set('mode', next.mode);
    window.history.replaceState(null, '', `/cria-flow-editor?${params.toString()}`);
  };

  const handleSelectSection = (id: SectionId) => {
    setActiveSection(id);
    setMode('page');
    navigate({ section: id, mode: 'page' });
  };

  return (
    <div style={{ display: 'flex', height: '100vh', background: 'var(--cria-background)' }}>
      {/* Fixed Sidebar Placeholder */}
      <aside style={{ width: 256, borderRight: '1px solid var(--cria-gray-200)', background: 'var(--cria-white)' }}>
        <div style={{ padding: 16, borderBottom: '1px solid var(--cria-gray-200)' }}>
          <Typography variant="h3" weight="semiBold">CRIA Flow Editor</Typography>
          <Typography variant="caption" color="disabled">Foundation</Typography>
        </div>
        <nav style={{ padding: 16, display: 'grid', gap: 8 }}>
          {sections.map((s) => (
            <Button
              key={s.id}
              variant={activeSection === s.id ? 'primary' : 'outline'}
              size="sm"
              onClick={() => handleSelectSection(s.id)}
            >
              {s.label}
            </Button>
          ))}
        </nav>
      </aside>

      {/* Content */}
      <main style={{ flex: 1, padding: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setMode('parent');
                navigate({ mode: 'parent' });
              }}
            >
              ← Voltar
            </Button>
            <Typography variant="h3" weight="semiBold">
              {mode === 'parent' ? 'Parent Layout' : `Page: ${sections.find(s => s.id === activeSection)?.label}`}
            </Typography>
            <Badge variant="secondary">Draft</Badge>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <Button variant="outline" size="sm">Sidebar</Button>
            <Button variant="outline" size="sm">Margins</Button>
            <Button variant="outline" size="sm">Footer</Button>
            <Button variant="primary" size="sm">Salvar</Button>
          </div>
        </div>

        {mode === 'parent' ? (
          <div style={{ border: '1px solid var(--cria-gray-200)', borderRadius: 'var(--cria-radius-md)', padding: 24, background: 'var(--cria-white)' }}>
            <ParentLayoutEditor />
          </div>
        ) : (
          <div style={{ border: '1px solid var(--cria-gray-200)', borderRadius: 'var(--cria-radius-md)', padding: 24, background: 'var(--cria-white)' }}>
            <PageEditor page={sections.find(s => s.id === activeSection)?.label || 'Page'} />
          </div>
        )}
      </main>
    </div>
  );
};

export default CriaFlowEditor;


