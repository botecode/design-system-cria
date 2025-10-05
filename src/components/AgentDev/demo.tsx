import React, { useState } from 'react';
import { AgentDev } from './AgentDev';
import { Button } from '../Button';
import { Typography } from '../Typography';
import { Card } from '../Card';
import { Robot, Play, Code, Wrench } from 'phosphor-react';

const AgentDevDemo: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ padding: '24px', backgroundColor: 'var(--cria-background)', minHeight: '100vh' }}>
      <Typography variant="h1" weight="bold" style={{ marginBottom: '32px' }}>
        Agent Dev Component
      </Typography>
      
      <Typography variant="body" color="muted" style={{ marginBottom: '32px' }}>
        A comprehensive agent development interface accessible via the "Robot" icon. The interface provides three main tabs for different agent workflows: "Criar" (Create), "Consertar" (Fix), and "Agente" (Agent).
      </Typography>

      {/* Basic Usage */}
      <Card style={{ marginBottom: '32px', padding: '0' }}>
        <div style={{ padding: '16px', borderBottom: '1px solid var(--cria-border-light)' }}>
          <Typography variant="h3" weight="semibold">Basic Usage</Typography>
          <Typography variant="body" color="muted" size="sm">
            Click the button below to open the Agent Dev interface
          </Typography>
        </div>
        <div style={{ padding: '16px' }}>
          <Button
            variant="primary"
            size="lg"
            onClick={() => setIsOpen(true)}
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <Robot size={20} />
            Open Agent Dev
          </Button>
        </div>
      </Card>

      {/* Features Overview */}
      <Card style={{ marginBottom: '32px', padding: '0' }}>
        <div style={{ padding: '16px', borderBottom: '1px solid var(--cria-border-light)' }}>
          <Typography variant="h3" weight="semibold">Features Overview</Typography>
          <Typography variant="body" color="muted" size="sm">
            Three main tabs for different agent workflows
          </Typography>
        </div>
        <div style={{ padding: '16px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
          <div style={{ padding: '20px', border: '1px solid var(--cria-border-light)', borderRadius: 'var(--cria-radius-md)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--cria-primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Play size={20} color="white" />
              </div>
              <Typography variant="h4" weight="semibold">Criar</Typography>
            </div>
            <Typography variant="body" color="muted" style={{ marginBottom: '16px' }}>
              Create new components with AI assistance. Select component type, describe requirements, and upload reference images.
            </Typography>
            <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--cria-text-secondary)' }}>
              <li>Component type selection tree</li>
              <li>Rich text prompt input</li>
              <li>Image upload functionality</li>
              <li>Form validation</li>
            </ul>
          </div>

          <div style={{ padding: '20px', border: '1px solid var(--cria-border-light)', borderRadius: 'var(--cria-radius-md)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--cria-secondary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Wrench size={20} color="white" />
              </div>
              <Typography variant="h4" weight="semibold">Consertar</Typography>
            </div>
            <Typography variant="body" color="muted" style={{ marginBottom: '16px' }}>
              Fix existing components by selecting multiple components and describing the issues that need to be resolved.
            </Typography>
            <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--cria-text-secondary)' }}>
              <li>Multi-component selection</li>
              <li>Checkbox interface</li>
              <li>Problem description input</li>
              <li>Batch fix operations</li>
            </ul>
          </div>

          <div style={{ padding: '20px', border: '1px solid var(--cria-border-light)', borderRadius: 'var(--cria-radius-md)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--cria-accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Code size={20} color="white" />
              </div>
              <Typography variant="h4" weight="semibold">Agente</Typography>
            </div>
            <Typography variant="body" color="muted" style={{ marginBottom: '16px' }}>
              Manage agent tasks and track progress. View GitHub PRs with agent-fix and agent-create labels.
            </Typography>
            <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--cria-text-secondary)' }}>
              <li>GitHub PR integration</li>
              <li>Status tracking</li>
              <li>Real-time updates</li>
              <li>PR filtering by labels</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Component Types */}
      <Card style={{ marginBottom: '32px', padding: '0' }}>
        <div style={{ padding: '16px', borderBottom: '1px solid var(--cria-border-light)' }}>
          <Typography variant="h3" weight="semibold">Supported Component Types</Typography>
          <Typography variant="body" color="muted" size="sm">
            Hierarchical component type selection matching the design system structure
          </Typography>
        </div>
        <div style={{ padding: '16px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            <div>
              <Typography variant="h5" weight="medium" style={{ marginBottom: '8px' }}>Layout</Typography>
              <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--cria-text-secondary)' }}>
                <li>Card</li>
                <li>Container</li>
                <li>Grid</li>
                <li>Divider</li>
              </ul>
            </div>
            <div>
              <Typography variant="h5" weight="medium" style={{ marginBottom: '8px' }}>Forms</Typography>
              <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--cria-text-secondary)' }}>
                <li>Button</li>
                <li>Input</li>
                <li>Checkbox</li>
                <li>RadioGroup</li>
              </ul>
            </div>
            <div>
              <Typography variant="h5" weight="medium" style={{ marginBottom: '8px' }}>Navigation</Typography>
              <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--cria-text-secondary)' }}>
                <li>Sidebar</li>
                <li>Topbar</li>
                <li>Breadcrumb</li>
              </ul>
            </div>
            <div>
              <Typography variant="h5" weight="medium" style={{ marginBottom: '8px' }}>Feedback</Typography>
              <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--cria-text-secondary)' }}>
                <li>Modal</li>
                <li>Snackbar</li>
                <li>Tooltip</li>
              </ul>
            </div>
            <div>
              <Typography variant="h5" weight="medium" style={{ marginBottom: '8px' }}>Data Display</Typography>
              <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--cria-text-secondary)' }}>
                <li>Table</li>
                <li>Badge</li>
                <li>Avatar</li>
              </ul>
            </div>
            <div>
              <Typography variant="h5" weight="medium" style={{ marginBottom: '8px' }}>Content</Typography>
              <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--cria-text-secondary)' }}>
                <li>Typography</li>
                <li>Text</li>
                <li>Image</li>
              </ul>
            </div>
          </div>
        </div>
      </Card>

      {/* Future Enhancements */}
      <Card style={{ padding: '0' }}>
        <div style={{ padding: '16px', borderBottom: '1px solid var(--cria-border-light)' }}>
          <Typography variant="h3" weight="semibold">Future Enhancements</Typography>
          <Typography variant="body" color="muted" size="sm">
            Planned features for the Agent Dev interface
          </Typography>
        </div>
        <div style={{ padding: '16px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
            <div>
              <Typography variant="h5" weight="medium" style={{ marginBottom: '8px' }}>Cursor Integration</Typography>
              <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--cria-text-secondary)' }}>
                <li>Real-time agent communication</li>
                <li>Progress tracking</li>
                <li>Result display</li>
                <li>Live updates</li>
              </ul>
            </div>
            <div>
              <Typography variant="h5" weight="medium" style={{ marginBottom: '8px' }}>Advanced Features</Typography>
              <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--cria-text-secondary)' }}>
                <li>Agent history and logs</li>
                <li>Custom configurations</li>
                <li>Batch operations</li>
                <li>Export/import functionality</li>
              </ul>
            </div>
          </div>
        </div>
      </Card>

      {/* Agent Dev Drawer */}
      <AgentDev
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        position="right"
        size="lg"
      />
    </div>
  );
};

export default AgentDevDemo;
