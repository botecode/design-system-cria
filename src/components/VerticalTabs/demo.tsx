import React, { useState } from 'react';
import { Typography } from '../Typography';
import { VerticalTabs } from './index';
import { Card, CardContent, CardHeader } from '../Card';
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
      <Typography variant="h2" className="demo-title">
        Vertical Tabs Component
      </Typography>

      <Card className="demo-section">
        <CardHeader>
          <Typography variant="h3">Basic</Typography>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: '16px' }}>
            <VerticalTabs
              tabs={tabs}
              activeId={active}
              onChange={setActive}
              renderPanel={(id) => (
                <div style={{ padding: 16 }}>
                  <Typography variant="h4">Panel: {id}</Typography>
                  <Typography variant="body">This is the content for the {id} tab.</Typography>
                </div>
              )}
            />
          </div>
        </CardContent>
      </Card>

      <Card className="demo-section">
        <CardHeader>
          <Typography variant="h3">Without Icons</Typography>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '16px' }}>
            <VerticalTabs
              tabs={tabs.map(({ icon, ...rest }) => rest)}
              activeId={active}
              onChange={setActive}
              renderPanel={(id) => (
                <div style={{ padding: 16 }}>
                  <Typography variant="h4">Content: {id}</Typography>
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