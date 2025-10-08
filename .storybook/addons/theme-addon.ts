import { addons, types } from '@storybook/addons';
import { AddonPanel } from '@storybook/components';
import { ThemeToggle } from '../../src/components/ThemeToggle';
import React from 'react';

const ADDON_ID = 'theme-addon';
const PANEL_ID = `${ADDON_ID}/panel`;

// Register the addon
addons.register(ADDON_ID, () => {
  // Add the panel
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'Theme',
    match: ({ viewMode }) => viewMode === 'story',
    render: ({ active, key }) => (
      <AddonPanel active={active} key={key}>
        <div style={{ padding: '16px' }}>
          <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: '600' }}>
            Theme Controls
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '12px', fontWeight: '500' }}>
                Theme Toggle
              </label>
              <ThemeToggle variant="switch" showLabel />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '12px', fontWeight: '500' }}>
                Button Variant
              </label>
              <ThemeToggle variant="button" showLabel />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '12px', fontWeight: '500' }}>
                Icon Variant
              </label>
              <ThemeToggle variant="icon" />
            </div>
          </div>
        </div>
      </AddonPanel>
    ),
  });
});
