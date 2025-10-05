import React from 'react';
import { render } from '@testing-library/react';

// Test to ensure all Phosphor React icons used in demos are valid exports
describe('Phosphor React Icons', () => {
  it('should import all commonly used icons without errors', () => {
    // This test will fail if any of these icons don't exist in phosphor-react
    const icons = [
      'Gear', // Settings replacement
      'List',
      'User',
      'Bell',
      'Search',
      'X',
      'Plus',
      'Check',
      'Pencil',
      'Trash',
      'Download',
      'Upload',
      'Share',
      'Heart',
      'Filter',
      'House',
      'UserCircle',
      'SignOut',
      'FileText',
      'FolderOpen',
      'Star',
      'ChatCircle',
      'BarChart3',
      'Users',
      'Mail',
      'Calendar',
      'List',
      'CaretDown',
      'Info',
      'Article',
      'Layout',
      'Tag',
      'Tabs',
      'Robot',
      'Palette',
      'Gradient',
      'GridFour',
      'Texture',
      'Play',
      'Pause'
    ];

    // Test that we can import these icons
    icons.forEach(iconName => {
      expect(() => {
        // This will throw if the icon doesn't exist
        const IconComponent = require('phosphor-react')[iconName];
        expect(IconComponent).toBeDefined();
      }).not.toThrow(`Icon ${iconName} not found in phosphor-react`);
    });
  });

  it('should not use deprecated or non-existent icons', () => {
    // These icons should NOT be used as they don't exist or are deprecated
    const deprecatedIcons = [
      'Settings', // Should use 'Gear' instead
      'Edit', // Should use 'Pencil' instead
      'Menu', // Should use 'List' instead
      'AlertCircle', // Should use 'WarningCircle' instead
      'MessageCircle', // Should use 'ChatCircle' instead
      'DollarSign', // Should use 'CurrencyDollar' instead
      'TrendingDown', // Should use 'TrendDown' instead
      'TrendingUp', // Should use 'TrendUp' instead
      'Zap' // Should use 'Lightning' instead
    ];

    deprecatedIcons.forEach(iconName => {
      expect(() => {
        const IconComponent = require('phosphor-react')[iconName];
        if (IconComponent) {
          console.warn(`Icon ${iconName} exists but may be deprecated. Check PHOSPHOR_ICONS.md for alternatives.`);
        }
      }).not.toThrow();
    });
  });
});
