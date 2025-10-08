import React from 'react';
import { ThemeProvider } from '../src/contexts';
import { DecoratorFn } from '@storybook/react';

export const withTheme: DecoratorFn = (Story, context) => {
  const { theme = 'light' } = context.globals;
  
  return (
    <ThemeProvider defaultTheme={theme}>
      <div 
        style={{ 
          minHeight: '100vh', 
          backgroundColor: 'var(--cria-bg-primary)', 
          color: 'var(--cria-text-primary)',
          transition: 'all var(--cria-transition-duration) var(--cria-transition-timing-function)'
        }}
      >
        <Story />
      </div>
    </ThemeProvider>
  );
};

export const withThemeToggle: DecoratorFn = (Story, context) => {
  const { theme = 'light' } = context.globals;
  
  return (
    <ThemeProvider defaultTheme={theme}>
      <div 
        style={{ 
          minHeight: '100vh', 
          backgroundColor: 'var(--cria-bg-primary)', 
          color: 'var(--cria-text-primary)',
          transition: 'all var(--cria-transition-duration) var(--cria-transition-timing-function)',
          position: 'relative'
        }}
      >
        {/* Theme Toggle in top right */}
        <div style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          zIndex: 1000
        }}>
          <ThemeToggle variant="button" showLabel />
        </div>
        <Story />
      </div>
    </ThemeProvider>
  );
};

export const withThemeComparison: DecoratorFn = (Story, context) => {
  const { theme = 'light' } = context.globals;
  
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Light Theme */}
      <div style={{ flex: 1, position: 'relative' }}>
        <ThemeProvider defaultTheme="light">
          <div 
            style={{ 
              minHeight: '100vh', 
              backgroundColor: 'var(--cria-bg-primary)', 
              color: 'var(--cria-text-primary)',
              padding: '16px',
              borderRight: '1px solid var(--cria-border-primary)'
            }}
          >
            <div style={{ 
              position: 'absolute', 
              top: '16px', 
              left: '16px', 
              fontSize: '12px', 
              fontWeight: '600',
              color: 'var(--cria-text-secondary)'
            }}>
              Light Theme
            </div>
            <div style={{ marginTop: '32px' }}>
              <Story />
            </div>
          </div>
        </ThemeProvider>
      </div>
      
      {/* Dark Theme */}
      <div style={{ flex: 1, position: 'relative' }}>
        <ThemeProvider defaultTheme="dark">
          <div 
            style={{ 
              minHeight: '100vh', 
              backgroundColor: 'var(--cria-bg-primary)', 
              color: 'var(--cria-text-primary)',
              padding: '16px'
            }}
          >
            <div style={{ 
              position: 'absolute', 
              top: '16px', 
              left: '16px', 
              fontSize: '12px', 
              fontWeight: '600',
              color: 'var(--cria-text-secondary)'
            }}>
              Dark Theme
            </div>
            <div style={{ marginTop: '32px' }}>
              <Story />
            </div>
          </div>
        </ThemeProvider>
      </div>
    </div>
  );
};
