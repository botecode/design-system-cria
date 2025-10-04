import React from 'react';

export type VerticalTabItem = {
  id: string;
  label: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactNode;
};

export interface VerticalTabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  tabs: VerticalTabItem[];
  activeId: string;
  onChange: (id: string) => void;
  renderPanel?: (id: string) => React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const VerticalTabs: React.FC<VerticalTabsProps> = ({
  tabs,
  activeId,
  onChange,
  renderPanel,
  className = '',
  style,
  ...props
}) => {
  const tabRefs = React.useRef<Array<HTMLButtonElement | null>>([]);

  const focusTabAt = (startIndex: number, direction: 1 | -1) => {
    const len = tabs.length;
    let i = startIndex;
    for (let step = 0; step < len; step++) {
      i = (i + direction + len) % len;
      const item = tabs[i];
      if (!item.disabled) {
        tabRefs.current[i]?.focus();
        break;
      }
    }
  };

  const onKeyDownTab = (e: React.KeyboardEvent, index: number, id: string, disabled?: boolean) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      focusTabAt(index, 1);
      return;
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      focusTabAt(index, -1);
      return;
    }
    if ((e.key === 'Enter' || e.key === ' ') && !disabled) {
      e.preventDefault();
      onChange(id);
    }
  };

  const containerClass = ['cria-vertical-tabs', className].filter(Boolean).join(' ');

  return (
    <div className={containerClass} style={style} {...props}>
      <div role="tablist" aria-orientation="vertical" className="cria-vertical-tabs__list">
        {tabs.map((tab, index) => {
          const selected = tab.id === activeId;
          return (
            <button
              key={tab.id}
              role="tab"
              ref={(el) => (tabRefs.current[index] = el)}
              className={[
                'cria-vertical-tabs__tab',
                selected && 'cria-vertical-tabs__tab--active',
                tab.disabled && 'cria-vertical-tabs__tab--disabled',
              ].filter(Boolean).join(' ')}
              aria-selected={selected ? 'true' : 'false'}
              aria-disabled={tab.disabled ? 'true' : undefined}
              tabIndex={tab.disabled ? -1 : selected ? 0 : -1}
              onClick={() => {
                if (!tab.disabled) onChange(tab.id);
              }}
              onKeyDown={(e) => onKeyDownTab(e, index, tab.id, tab.disabled)}
            >
              {tab.icon && <span className="cria-vertical-tabs__icon">{tab.icon}</span>}
              <span className="cria-vertical-tabs__label">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {renderPanel && (
        <div className="cria-vertical-tabs__panel">
          {renderPanel(activeId)}
        </div>
      )}
    </div>
  );
};

export default VerticalTabs;
