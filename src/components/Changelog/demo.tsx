import React from 'react';
import Changelog from './Changelog';
import type { ChangelogEntry } from './Changelog';
import { Typography } from '../Typography';
import { spacing } from '../../tokens';

const sampleChangelogEntries: ChangelogEntry[] = [
  {
    id: '1',
    version: 'v0.4.001',
    date: '2024-01-15',
    type: 'minor',
    author: 'Fernando Feitosa',
    branch: 'main',
    title: 'Enhanced Component Library',
    description: 'Major improvements to the design system with new components and better accessibility.',
    changes: [
      {
        type: 'added',
        items: [
          'New Changelog component with pagination',
          'Enhanced FloatingSidebar with better positioning',
          'Improved Drawer component with proper z-index',
          'Added Backgrounds component with multiple variants'
        ]
      },
      {
        type: 'changed',
        items: [
          'Updated all components to use CRIA design tokens',
          'Improved responsive behavior across components',
          'Enhanced accessibility features'
        ]
      },
      {
        type: 'fixed',
        items: [
          'Fixed Drawer component positioning issues',
          'Resolved Backgrounds component white background problem',
          'Fixed Phosphor React icon import errors'
        ]
      }
    ]
  },
  {
    id: '2',
    version: 'v0.3.002',
    date: '2024-01-10',
    type: 'patch',
    author: 'Fernando Feitosa',
    branch: 'main',
    title: 'Bug Fixes and Improvements',
    description: 'Various bug fixes and minor improvements to existing components.',
    changes: [
      {
        type: 'fixed',
        items: [
          'Fixed Typography component line height issues',
          'Resolved Button component hover states',
          'Fixed Card component border radius consistency'
        ]
      },
      {
        type: 'changed',
        items: [
          'Improved color contrast in dark mode',
          'Updated spacing tokens for better consistency'
        ]
      }
    ]
  },
  {
    id: '3',
    version: 'v0.3.001',
    date: '2024-01-05',
    type: 'hotfix',
    author: 'Fernando Feitosa',
    branch: 'hotfix/critical-fixes',
    title: 'Critical Security Update',
    description: 'Critical security patches and urgent bug fixes.',
    changes: [
      {
        type: 'security',
        items: [
          'Fixed XSS vulnerability in Modal component',
          'Updated dependencies to latest secure versions'
        ]
      },
      {
        type: 'fixed',
        items: [
          'Fixed memory leak in NotificationCenter component',
          'Resolved infinite loop in Stepper component'
        ]
      }
    ]
  },
  {
    id: '4',
    version: 'v0.3.000',
    date: '2024-01-01',
    type: 'minor',
    author: 'Fernando Feitosa',
    branch: 'main',
    title: 'New Components and Features',
    description: 'Added several new components and enhanced existing ones.',
    changes: [
      {
        type: 'added',
        items: [
          'New Timeline component for activity feeds',
          'Added Stepper component for multi-step flows',
          'New NotificationCenter for global notifications',
          'Added CommandPalette for quick actions'
        ]
      },
      {
        type: 'changed',
        items: [
          'Enhanced Typography component with new variants',
          'Improved Button component with better states',
          'Updated Card component with new styles'
        ]
      }
    ],
    breaking: [
      'Typography component API has changed - please update your imports',
      'Button component now requires explicit variant prop'
    ]
  },
  {
    id: '5',
    version: 'v0.2.005',
    date: '2023-12-28',
    type: 'patch',
    author: 'Fernando Feitosa',
    branch: 'main',
    title: 'Performance Improvements',
    description: 'Various performance optimizations and bug fixes.',
    changes: [
      {
        type: 'changed',
        items: [
          'Optimized component rendering performance',
          'Reduced bundle size by 15%',
          'Improved tree-shaking support'
        ]
      },
      {
        type: 'fixed',
        items: [
          'Fixed memory usage in large component trees',
          'Resolved animation performance issues'
        ]
      }
    ]
  },
  {
    id: '6',
    version: 'v0.2.004',
    date: '2023-12-20',
    type: 'patch',
    author: 'Fernando Feitosa',
    branch: 'main',
    title: 'Accessibility Improvements',
    description: 'Enhanced accessibility features across all components.',
    changes: [
      {
        type: 'added',
        items: [
          'Added ARIA labels to all interactive components',
          'Improved keyboard navigation support',
          'Enhanced screen reader compatibility'
        ]
      },
      {
        type: 'changed',
        items: [
          'Updated color contrast ratios to meet WCAG standards',
          'Improved focus indicators'
        ]
      }
    ]
  },
  {
    id: '7',
    version: 'v0.2.003',
    date: '2023-12-15',
    type: 'patch',
    author: 'Fernando Feitosa',
    branch: 'main',
    title: 'Mobile Responsiveness',
    description: 'Improved mobile experience across all components.',
    changes: [
      {
        type: 'changed',
        items: [
          'Enhanced mobile touch interactions',
          'Improved responsive breakpoints',
          'Optimized component sizing for mobile devices'
        ]
      },
      {
        type: 'fixed',
        items: [
          'Fixed layout issues on small screens',
          'Resolved touch target size problems'
        ]
      }
    ]
  },
  {
    id: '8',
    version: 'v0.2.002',
    date: '2023-12-10',
    type: 'patch',
    author: 'Fernando Feitosa',
    branch: 'main',
    title: 'Design Token Updates',
    description: 'Updated design tokens and improved consistency.',
    changes: [
      {
        type: 'changed',
        items: [
          'Updated color palette with new primary colors',
          'Refined spacing scale for better consistency',
          'Improved typography scale'
        ]
      },
      {
        type: 'added',
        items: [
          'Added new shadow tokens',
          'Introduced border radius tokens'
        ]
      }
    ]
  }
];

export const ChangelogDemo: React.FC = () => {
  return (
    <div style={{ padding: spacing[6] }}>
      <div style={{ marginBottom: spacing[8] }}>
        <Typography variant="title1" style={{ marginBottom: spacing[4] }}>
          Changelog Component
        </Typography>
        <Typography variant="body" style={{ color: '#666', marginBottom: spacing[6] }}>
          A comprehensive changelog component with pagination, version tracking, and categorized changes.
        </Typography>
      </div>

      <Changelog 
        entries={sampleChangelogEntries}
        itemsPerPage={3}
        showPagination={true}
      />
    </div>
  );
};

export default ChangelogDemo;
