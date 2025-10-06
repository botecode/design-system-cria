import React, { useState, useCallback } from 'react';
import { Drawer } from '../../../components/Drawer';
import { Typography } from '../../../components/Typography';
import { Button } from '../../../components/Button';
import { Badge } from '../../../components/Badge';
import { Switch } from '../../../components/Switch';
import { Checkbox as DSCheckbox } from '../../../components/Checkbox';
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

  // Detect current component from URL hash (e.g., #checkbox)
  const getCurrentComponentId = useCallback((): string => {
    if (typeof window === 'undefined') return '';
    const hash = window.location.hash || '';
    return hash.replace('#', '').trim();
  }, []);

  const getCurrentComponentLabel = useCallback((): string => {
    const id = getCurrentComponentId();
    if (!id) return 'Componente atual';
    // Convert kebab/camel to Title Case for display
    const words = id
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/[-_]/g, ' ')
      .split(' ')
      .filter(Boolean)
      .map(w => w.charAt(0).toUpperCase() + w.slice(1));
    return words.join(' ');
  }, [getCurrentComponentId]);

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
            
            {/* Current Component Context */}
            <div className="agent-dev__section" style={{ display: 'flex', alignItems: 'center', gap: spacing[3], marginBottom: spacing[6] }}>
              <Badge variant="secondary">{getCurrentComponentLabel()}</Badge>
              <div style={{ display: 'flex', alignItems: 'center', gap: spacing[2] }}>
                <Typography variant="body">Criar variação</Typography>
                <Switch checked={Boolean(tabState.criar.selectedComponent)} onChange={(checked) => updateTabState('criar', { selectedComponent: checked ? getCurrentComponentLabel() : null })} />
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
            <div className="agent-dev__actions" style={{ marginTop: spacing[4] }}>
              <Button
                variant="primary"
                size="lg"
                disabled={!getCurrentComponentId() || !tabState.criar.prompt.trim()}
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
            
            {/* Component List For Current Tab */}
            <div className="agent-dev__section">
              <div className="agent-dev__component-list" style={{ display: 'flex', flexDirection: 'column', gap: spacing[3] }}>
                {getCurrentComponentId().toLowerCase() === 'button' ? (
                  (() => {
                    const variants: Array<'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'> = ['primary','secondary','outline','ghost','danger'];
                    return variants.map((variantKey) => {
                      const label = `Button — ${variantKey}`;
                      const checked = tabState.consertar.selectedComponents.includes(label);
                      return (
                        <div key={variantKey} className="agent-dev__component-item" style={{ display: 'flex', alignItems: 'center', gap: spacing[3] }}>
                          <DSCheckbox
                            id={`consertar-button-${variantKey}`}
                            checked={checked}
                            label={label}
                            onChange={(checkedNext: boolean) => {
                              const newSelected = checkedNext
                                ? [...tabState.consertar.selectedComponents, label]
                                : tabState.consertar.selectedComponents.filter(c => c !== label);
                              updateTabState('consertar', { selectedComponents: newSelected });
                            }}
                          />
                          <Button variant={variantKey} size="md">Exemplo</Button>
                        </div>
                      );
                    });
                  })()
                ) : (
                  <div className="agent-dev__component-item" style={{ display: 'flex', alignItems: 'center', gap: spacing[3] }}>
                    <DSCheckbox
                      id={`consertar-${getCurrentComponentId() || 'atual'}`}
                      checked={tabState.consertar.selectedComponents.includes(getCurrentComponentLabel())}
                      label={getCurrentComponentLabel()}
                      onChange={(checked: boolean) => {
                        const type = getCurrentComponentLabel();
                        const newSelected = checked
                          ? [...tabState.consertar.selectedComponents, type]
                          : tabState.consertar.selectedComponents.filter(c => c !== type);
                        updateTabState('consertar', { selectedComponents: newSelected });
                      }}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Fix Description */}
            <div className="agent-dev__section">
              <Typography variant="h3" weight="medium" style={{ marginBottom: spacing[3] }}>
                Descrição do Problema
              </Typography>
              <Textarea
                label={undefined}
                placeholder="Descreva os problemas que precisam ser corrigidos..."
                value={tabState.consertar.description}
                onChange={(e) => updateTabState('consertar', { description: e.target.value })}
                rows={4}
              />
            </div>

            {/* Fix Button */}
            <div className="agent-dev__actions" style={{ marginTop: spacing[4] }}>
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
              { id: 'criar', label: 'Criar', content: null },
              { id: 'consertar', label: 'Consertar', content: null },
              { id: 'agente', label: 'Agente', content: null },
            ]}
            activeTab={activeTab}
            onChange={(id) => handleTabChange(id as TabType)}
            variant="underline"
            showContent={false}
          />
          <div style={{ padding: spacing[6], flex: 1, overflowY: 'auto' }}>
            {renderTabContent()}
          </div>
        </div>
      </div>
    </Drawer>
  );
};

// Removed legacy componentTypes mapping in favor of URL-hash-based context

export default AgentDev;
