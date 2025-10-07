import React, { useState } from 'react';
import { CriaTextHeadline1, CriaTextBody1, CriaTextTitle1, CriaTextTitle2 } from '../TextTokens';
import { VerticalTabs } from './index';
import { Card, CardContent, CardHeader } from '../Card';
import { spacing } from '../../tokens';
import { List, Gear, Info, Article } from 'phosphor-react';

export const VerticalTabsDemo: React.FC = () => {
  const [active, setActive] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <Info size={16} /> },
    { id: 'articles', label: 'Articles', icon: <Article size={16} /> },
    { id: 'settings', label: 'Settings', icon: <Gear size={16} />, disabled: true },
    { id: 'logs', label: 'Logs', icon: <List size={16} /> },
  ];

  return (
    <div className="vertical-tabs-demo">
      <CriaTextHeadline1 className="demo-title">
        Vertical Tabs Component
      </CriaTextHeadline1>

      <Card className="demo-section">
        <CardHeader>
          <CriaTextTitle1>Basic</CriaTextTitle1>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: spacing[4] }}>
            <VerticalTabs
              tabs={tabs}
              activeId={active}
              onChange={setActive}
              renderPanel={(id) => (
                <div style={{ padding: spacing[4] }}>
                  <CriaTextTitle2>Panel: {id}</CriaTextTitle2>
                  <CriaTextBody1>This is the content for the {id} tab.</CriaTextBody1>
                </div>
              )}
            />
          </div>
        </CardContent>
      </Card>

      <Card className="demo-section">
        <CardHeader>
          <CriaTextTitle1>Without Icons</CriaTextTitle1>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: spacing[4] }}>
            <VerticalTabs
              tabs={tabs.map(({ icon, ...rest }) => rest)}
              activeId={active}
              onChange={setActive}
              renderPanel={(id) => (
                <div style={{ padding: spacing[4] }}>
                  <CriaTextTitle2>Content: {id}</CriaTextTitle2>
                </div>
              )}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VerticalTabsDemo;