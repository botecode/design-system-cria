import React, { useState, useCallback } from 'react';
import { Drawer } from '../../../components/Drawer';
import { Typography } from '../../../components/Typography';
import { Button } from '../../../components/Button';
import { Badge } from '../../../components/Badge';
import { AgenteTab } from './tabs';
import Tabs from '../../../components/Tabs';
import { Textarea } from '../../../components/Textarea/Textarea';
import { FileUpload } from '../../../components/FileUpload/FileUpload';
import { Robot, X, Plus, Wrench, Code } from 'phosphor-react';
import { spacing, colors, radii } from '../../../tokens';

export interface AgentDevProps {
  isOpen: boolean;
  onClose: () => void;
  position?: 'left' | 'right' | 'top' | 'bottom';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  style?: React.CSSProperties;
}

export type TabType = 'criar' | 'consertar' | 'agente';

export interface TabState {
  activeTab: TabType;
  criar: {
    selectedType: string | null;
    selectedComponent: string | null;
    prompt: string;
    images: File[];
  };
  consertar: {
    selectedType: string | null;
    selectedComponents: string[];
    description: string;
  };
  agente: {
    prs: any[];
    mergedPRs: any[];
    closedPRs: any[];
    loading: boolean;
  };
}

const AgentDev: React.FC<AgentDevProps> = ({
  isOpen,
  onClose,
  position = 'right',
  size = 'lg',
  className = '',
  style,
  ...props
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('criar');
  const [tabState, setTabState] = useState<TabState>({
    activeTab: 'criar',
    criar: {
      selectedType: null,
      selectedComponent: null,
      prompt: '',
      images: []
    },
    consertar: {
      selectedType: null,
      selectedComponents: [],
      description: ''
    },
    agente: {
      prs: [],
      mergedPRs: [],
      closedPRs: [],
      loading: false
    }
  });

  const handleTabChange = useCallback((tab: TabType) => {
    setActiveTab(tab);
    setTabState(prev => ({ ...prev, activeTab: tab }));
  }, []);

  const updateTabState = useCallback((tab: TabType, updates: Partial<TabState[TabType]>) => {
    setTabState(prev => ({
      ...prev,
      [tab]: { ...prev[tab], ...updates }
    }));
  }, []);

  const tabs = [
    {
      id: 'criar' as TabType,
      label: 'Criar',
      icon: <Plus size={20} />,
      description: 'Create new components'
    },
    {
      id: 'consertar' as TabType,
      label: 'Consertar',
      icon: <Wrench size={20} />,
      description: 'Fix existing components'
    },
    {
      id: 'agente' as TabType,
      label: 'Agente',
      icon: <Code size={20} />,
      description: 'Manage agent tasks'
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'criar':
        return (
          <div className="agent-dev__tab-content">
            <Typography variant="h3" weight="semiBold" style={{ marginBottom: spacing[4] }}>
              Criar Componente
            </Typography>
            <Typography variant="body" color="disabled" style={{ marginBottom: spacing[6] }}>
              Selecione o tipo de componente e descreva o que você gostaria de criar.
            </Typography>
            
            {/* Component Type Selection */}
            <div className="agent-dev__section">
              <Typography variant="h3" weight="medium" style={{ marginBottom: spacing[3] }}>
                Tipo de Componente
              </Typography>
              <div className="agent-dev__type-selector">
                {Object.entries(componentTypes).map(([category, types]) => (
                  <div key={category} style={{ marginBottom: spacing[3] }}>
                    <Button 
                      variant={tabState.criar.selectedType === category ? 'primary' : 'outline'} 
                      size="sm" 
                      style={{ marginBottom: spacing[2] }}
                      onClick={() => updateTabState('criar', { selectedType: category })}
                    >
                      {category}
                    </Button>
                    {tabState.criar.selectedType === category && (
                      <div style={{ marginLeft: spacing[4], display: 'flex', flexWrap: 'wrap', gap: spacing[2] }}>
                        {types.map((type) => (
                          <Button
                            key={type}
                            variant="ghost"
                            size="sm"
                            onClick={() => updateTabState('criar', { selectedComponent: type })}
                            style={{ 
                              backgroundColor: tabState.criar.selectedComponent === type ? 'var(--agent-dev-hover)' : 'transparent',
                              color: tabState.criar.selectedComponent === type ? 'var(--agent-dev-accent)' : 'var(--agent-dev-text)'
                            }}
                          >
                            {type}
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Prompt Input */}
            <div>
              <Typography variant="h3" weight="medium" style={{ marginBottom: spacing[3] }}>
                Descrição do Componente
              </Typography>
              <Textarea
                label={undefined}
                placeholder="Descreva o componente que você gostaria de criar..."
                value={tabState.criar.prompt}
                onChange={(e) => updateTabState('criar', { prompt: e.target.value })}
                rows={6}
                helperText="Seja específico, cuidaremos do resto!"
              />
            </div>

            {/* Image Upload */}
            <div>
              <Typography variant="h3" weight="medium" style={{ marginBottom: spacing[3] }}>
                Imagens de Referência (Opcional)
              </Typography>
              <FileUpload
                label="Imagens"
                description="PNG, JPG, SVG"
                accept="image/*"
                onFilesChange={() => {}}
              />
            </div>

            {/* Create Button */}
            <div className="agent-dev__actions">
              <Button
                variant="primary"
                size="lg"
                disabled={!tabState.criar.selectedType || !tabState.criar.selectedComponent || !tabState.criar.prompt.trim()}
                onClick={() => {
                  // TODO: Implement create functionality
                  console.log('Creating component:', tabState.criar);
                }}
              >
                <Plus size={16} />
                Criar Componente
              </Button>
            </div>
          </div>
        );

      case 'consertar':
        return (
          <div className="agent-dev__tab-content">
            <Typography variant="h3" weight="semiBold" style={{ marginBottom: spacing[4] }}>
              Consertar Componentes
            </Typography>
            <Typography variant="body" color="disabled" style={{ marginBottom: spacing[6] }}>
              Selecione os componentes que precisam ser corrigidos e descreva os problemas.
            </Typography>
            
            {/* Component Type Selection */}
            <div className="agent-dev__section">
              <Typography variant="h3" weight="medium" style={{ marginBottom: spacing[3] }}>
                Tipo de Componente
              </Typography>
              <div className="agent-dev__type-selector">
                {Object.entries(componentTypes).map(([category, types]) => (
                  <div key={category} style={{ marginBottom: spacing[3] }}>
                    <Button 
                      variant={tabState.consertar.selectedType === category ? 'primary' : 'outline'} 
                      size="sm" 
                      style={{ marginBottom: spacing[2] }}
                      onClick={() => updateTabState('consertar', { selectedType: category })}
                    >
                      {category}
                    </Button>
                    {tabState.consertar.selectedType === category && (
                      <div className="agent-dev__component-list">
                        {types.map((type) => (
                          <div key={type} className="agent-dev__component-item">
                            <input 
                              type="checkbox" 
                              id={`consertar-${type}`}
                              checked={tabState.consertar.selectedComponents.includes(type)}
                              onChange={(e) => {
                                const newSelected = e.target.checked
                                  ? [...tabState.consertar.selectedComponents, type]
                                  : tabState.consertar.selectedComponents.filter(c => c !== type);
                                updateTabState('consertar', { selectedComponents: newSelected });
                              }}
                            />
                            <label htmlFor={`consertar-${type}`}>{type}</label>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Fix Description */}
            <div className="agent-dev__section">
              <Typography variant="h3" weight="medium" style={{ marginBottom: spacing[3] }}>
                Descrição do Problema
              </Typography>
              <textarea
                className="agent-dev__textarea"
                placeholder="Descreva os problemas que precisam ser corrigidos..."
                value={tabState.consertar.description}
                onChange={(e) => updateTabState('consertar', { description: e.target.value })}
                rows={4}
              />
            </div>

            {/* Fix Button */}
            <div className="agent-dev__actions">
              <Button
                variant="primary"
                size="lg"
                disabled={tabState.consertar.selectedComponents.length === 0 || !tabState.consertar.description.trim()}
                onClick={() => {
                  // TODO: Implement fix functionality
                  console.log('Fixing components:', tabState.consertar);
                }}
              >
                <Wrench size={16} />
                Consertar Componentes
              </Button>
            </div>
          </div>
        );

      case 'agente':
        return <AgenteTab />;

      default:
        return null;
    }
  };

  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      position={position}
      size={size}
      variant="default"
      title="Fefo Bot"
      className={`agent-dev ${className}`}
      style={style}
      {...props}
    >
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Tabs
            items={[
              { id: 'criar', label: 'Criar', content: <div style={{ padding: spacing[6] }}>{renderTabContent()}</div> },
              { id: 'consertar', label: 'Consertar', content: <div style={{ padding: spacing[6] }}>{(() => { const prev = activeTab; const content = (() => { setActiveTab('consertar'); return renderTabContent(); })(); setActiveTab(prev); return content; })()}</div> },
              { id: 'agente', label: 'Agente', content: <div style={{ padding: spacing[6] }}><AgenteTab /></div> },
            ]}
            activeTab={activeTab}
            onChange={(id) => handleTabChange(id as TabType)}
            variant="underline"
          />
        </div>
      </div>
    </Drawer>
  );
};

// Component type mapping matching the sidebar structure
const componentTypes = {
  'Foundations': ['Typography', 'Colors', 'Text', 'Grid'],
  'Components': [
    'Button', 'Input', 'Textarea', 'Avatar', 'Checkbox', 'Switch', 'Radio Group', 
    'Dropdown', 'File Upload', 'Chat', 'Comments Section', 'Slider', 
    'Shimmer Skeleton', 'Pricing Page', 'Page Loading Progress', 'Card Selector',
    'Floating Sidebar', 'Search Filters', 'Filter Dropdown', 'Container', 
    'Scrollbar', 'Footer', 'Mega Menu', 'Command Palette', 'Carousel', 
    'Table', 'Empty State'
  ],
  'Content': ['Lesson - Cards', 'Course - Cards', 'Events - Cards', 'Trilha - Cards'],
  'Layout': [
    'Tabs', 'Accordion', 'Navigation', 'Breadcrumbs', 'Pagination', 
    'Progress Bar', 'Stepper', 'Date Picker', 'Charts', 'Divider', 
    'Row of Cards', 'Statistic / Metric Card', 'Backgrounds'
  ],
  'Feedback': [
    'Snackbar', 'Modal', 'Tooltip', 'Badge', 'Tag / Chip', 
    'Timeline / Activity Feed', 'Stepper / Wizard', 'Notification Center', 
    'Topbar', 'Drawer'
  ]
};

export default AgentDev;
