import React, { useState } from 'react';
import { Scrollbar } from './index';
import { Card, CardContent, CardHeader } from '../Card';
import { Typography } from '../Typography';
import { Button } from '../Button';
import { Divider } from '../Divider';

const ScrollbarDemo: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    setScrollPosition(event.currentTarget.scrollTop);
  };

  const generateContent = (count: number) => (
    <div>
      {Array.from({ length: count }, (_, i) => (
        <div key={i} style={{ 
          padding: '1rem', 
          margin: '0.5rem 0', 
          backgroundColor: i % 2 === 0 ? '#f8f9fa' : '#e9ecef',
          borderRadius: '4px',
          border: '1px solid #dee2e6'
        }}>
          <Typography variant="body" weight="medium">
            Content Item {i + 1}
          </Typography>
          <Typography variant="bodySmall">
            This is some sample content to demonstrate scrolling behavior. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </div>
      ))}
    </div>
  );

  const generateHorizontalContent = () => (
    <div style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
      {Array.from({ length: 20 }, (_, i) => (
        <div key={i} style={{ 
          minWidth: '200px',
          padding: '1rem', 
          backgroundColor: '#f8f9fa',
          borderRadius: '4px',
          border: '1px solid #dee2e6'
        }}>
          <Typography variant="body" weight="medium">
            Item {i + 1}
          </Typography>
        </div>
      ))}
    </div>
  );

  return (
    <div style={{ padding: '2rem' }}>
      <Typography variant="h1" weight="bold" style={{ marginBottom: '2rem' }}>
        Scrollbar Component
      </Typography>

      <Typography variant="body" style={{ marginBottom: '2rem' }}>
        Custom vertical scrollbar component with customizable themes, sizes, and behaviors.
      </Typography>

      <div style={{ display: 'grid', gap: '2rem' }}>
        {/* Basic Scrollbar Examples */}
        <Card>
          <CardHeader>
            <Typography variant="h2" weight="semibold">
              Basic Scrollbar Layouts
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography variant="body" style={{ marginBottom: '1rem' }}>
              Default scrollbar with vertical scrolling:
            </Typography>
            <Scrollbar height="200px" style={{ border: '1px solid #dee2e6', borderRadius: '4px' }}>
              {generateContent(15)}
            </Scrollbar>
          </CardContent>
        </Card>

        {/* Size Variations */}
        <Card>
          <CardHeader>
            <Typography variant="h2" weight="semibold">
              Scrollbar Sizes
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography variant="body" style={{ marginBottom: '1rem' }}>
              Different scrollbar sizes:
            </Typography>
            
            <div style={{ marginBottom: '1rem' }}>
              <Typography variant="bodySmall" style={{ marginBottom: '0.5rem' }}>Small Size:</Typography>
              <Scrollbar size="sm" height="150px" style={{ border: '1px solid #dee2e6', borderRadius: '4px' }}>
                {generateContent(10)}
              </Scrollbar>
            </div>
            
            <div style={{ marginBottom: '1rem' }}>
              <Typography variant="bodySmall" style={{ marginBottom: '0.5rem' }}>Medium Size (Default):</Typography>
              <Scrollbar size="md" height="150px" style={{ border: '1px solid #dee2e6', borderRadius: '4px' }}>
                {generateContent(10)}
              </Scrollbar>
            </div>
            
            <div>
              <Typography variant="bodySmall" style={{ marginBottom: '0.5rem' }}>Large Size:</Typography>
              <Scrollbar size="lg" height="150px" style={{ border: '1px solid #dee2e6', borderRadius: '4px' }}>
                {generateContent(10)}
              </Scrollbar>
            </div>
          </CardContent>
        </Card>

        {/* Theme Variations */}
        <Card>
          <CardHeader>
            <Typography variant="h2" weight="semibold">
              Scrollbar Themes
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography variant="body" style={{ marginBottom: '1rem' }}>
              Different scrollbar themes:
            </Typography>
            
            <div style={{ marginBottom: '1rem' }}>
              <Typography variant="bodySmall" style={{ marginBottom: '0.5rem' }}>Light Theme (Default):</Typography>
              <Scrollbar theme="light" height="150px" style={{ border: '1px solid #dee2e6', borderRadius: '4px' }}>
                {generateContent(10)}
              </Scrollbar>
            </div>
            
            <div style={{ marginBottom: '1rem', backgroundColor: '#2a2a2a', padding: '1rem', borderRadius: '4px' }}>
              <Typography variant="bodySmall" style={{ marginBottom: '0.5rem', color: 'white' }}>Dark Theme:</Typography>
              <Scrollbar theme="dark" height="150px" style={{ border: '1px solid #555', borderRadius: '4px' }}>
                {generateContent(10)}
              </Scrollbar>
            </div>
            
            <div>
              <Typography variant="bodySmall" style={{ marginBottom: '0.5rem' }}>Auto Theme:</Typography>
              <Scrollbar theme="auto" height="150px" style={{ border: '1px solid #dee2e6', borderRadius: '4px' }}>
                {generateContent(10)}
              </Scrollbar>
            </div>
          </CardContent>
        </Card>

        {/* Smooth Scrolling */}
        <Card>
          <CardHeader>
            <Typography variant="h2" weight="semibold">
              Smooth Scrolling
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography variant="body" style={{ marginBottom: '1rem' }}>
              Scrollbar with smooth scrolling enabled:
            </Typography>
            <Scrollbar 
              smooth 
              height="200px" 
              style={{ border: '1px solid #dee2e6', borderRadius: '4px' }}
            >
              {generateContent(20)}
            </Scrollbar>
          </CardContent>
        </Card>

        {/* Horizontal Scrolling */}
        <Card>
          <CardHeader>
            <Typography variant="h2" weight="semibold">
              Horizontal Scrolling
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography variant="body" style={{ marginBottom: '1rem' }}>
              Horizontal scrollbar:
            </Typography>
            <Scrollbar 
              horizontal 
              vertical={false}
              height="120px" 
              style={{ border: '1px solid #dee2e6', borderRadius: '4px' }}
            >
              {generateHorizontalContent()}
            </Scrollbar>
          </CardContent>
        </Card>

        {/* Both Horizontal and Vertical */}
        <Card>
          <CardHeader>
            <Typography variant="h2" weight="semibold">
              Both Horizontal and Vertical Scrolling
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography variant="body" style={{ marginBottom: '1rem' }}>
              Scrollbar with both horizontal and vertical scrolling:
            </Typography>
            <Scrollbar 
              horizontal 
              vertical
              height="200px" 
              style={{ border: '1px solid #dee2e6', borderRadius: '4px' }}
            >
              <div style={{ width: '800px' }}>
                {generateContent(15)}
              </div>
            </Scrollbar>
          </CardContent>
        </Card>

        {/* Custom Colors */}
        <Card>
          <CardHeader>
            <Typography variant="h2" weight="semibold">
              Custom Scrollbar Colors
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography variant="body" style={{ marginBottom: '1rem' }}>
              Scrollbar with custom colors:
            </Typography>
            <Scrollbar 
              height="200px" 
              trackColor="#e3f2fd"
              thumbColor="#2196f3"
              hoverColor="#1976d2"
              style={{ border: '1px solid #dee2e6', borderRadius: '4px' }}
            >
              {generateContent(15)}
            </Scrollbar>
          </CardContent>
        </Card>

        {/* Fade Effect */}
        <Card>
          <CardHeader>
            <Typography variant="h2" weight="semibold">
              Fade Effect
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography variant="body" style={{ marginBottom: '1rem' }}>
              Scrollbar with fade effect (scrollbar appears on hover):
            </Typography>
            <Scrollbar 
              fade
              height="200px" 
              style={{ border: '1px solid #dee2e6', borderRadius: '4px' }}
            >
              {generateContent(15)}
            </Scrollbar>
          </CardContent>
        </Card>

        {/* Auto Height */}
        <Card>
          <CardHeader>
            <Typography variant="h2" weight="semibold">
              Auto Height
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography variant="body" style={{ marginBottom: '1rem' }}>
              Scrollbar with auto height (adjusts to content):
            </Typography>
            <Scrollbar 
              autoHeight
              maxHeight="200px"
              style={{ border: '1px solid #dee2e6', borderRadius: '4px' }}
            >
              {generateContent(8)}
            </Scrollbar>
          </CardContent>
        </Card>

        {/* Scroll Event Handling */}
        <Card>
          <CardHeader>
            <Typography variant="h2" weight="semibold">
              Scroll Event Handling
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography variant="body" style={{ marginBottom: '1rem' }}>
              Scrollbar with scroll event handling:
            </Typography>
            <div style={{ marginBottom: '1rem' }}>
              <Typography variant="bodySmall">
                Scroll Position: {Math.round(scrollPosition)}px
              </Typography>
            </div>
            <Scrollbar 
              height="200px" 
              onScroll={handleScroll}
              style={{ border: '1px solid #dee2e6', borderRadius: '4px' }}
            >
              {generateContent(20)}
            </Scrollbar>
          </CardContent>
        </Card>

        {/* Real-world Examples */}
        <Card>
          <CardHeader>
            <Typography variant="h2" weight="semibold">
              Real-world Examples
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography variant="body" style={{ marginBottom: '1rem' }}>
              Code block with custom scrollbar:
            </Typography>
            <Scrollbar 
              theme="dark"
              size="sm"
              height="200px"
              style={{ 
                backgroundColor: '#1e1e1e', 
                borderRadius: '4px',
                fontFamily: 'Monaco, Menlo, Ubuntu Mono, monospace',
                fontSize: '14px'
              }}
            >
              <div style={{ padding: '1rem', color: '#d4d4d4' }}>
                <div>// React Component Example</div>
                <div>import React from 'react';</div>
                <div>import { Scrollbar } from './Scrollbar';</div>
                <div></div>
                <div>const MyComponent = () => {'{'}</div>
                <div>  return (</div>
                <div>    &lt;Scrollbar height="300px"&gt;</div>
                <div>      &lt;div&gt;Content here&lt;/div&gt;</div>
                <div>    &lt;/Scrollbar&gt;</div>
                <div>  );</div>
                <div>{'}'};</div>
                <div></div>
                <div>export default MyComponent;</div>
              </div>
            </Scrollbar>

            <Divider style={{ margin: '2rem 0' }} />

            <Typography variant="body" style={{ marginBottom: '1rem' }}>
              Chat messages with smooth scrolling:
            </Typography>
            <Scrollbar 
              smooth
              theme="auto"
              height="250px"
              style={{ 
                border: '1px solid #dee2e6', 
                borderRadius: '4px',
                backgroundColor: '#f8f9fa'
              }}
            >
              <div style={{ padding: '1rem' }}>
                {Array.from({ length: 15 }, (_, i) => (
                  <div key={i} style={{ 
                    marginBottom: '1rem',
                    padding: '0.75rem',
                    backgroundColor: i % 2 === 0 ? '#007bff' : '#6c757d',
                    color: 'white',
                    borderRadius: '12px',
                    maxWidth: '70%',
                    marginLeft: i % 2 === 0 ? '0' : 'auto'
                  }}>
                    <Typography variant="bodySmall">
                      Message {i + 1}: This is a sample chat message to demonstrate smooth scrolling behavior.
                    </Typography>
                  </div>
                ))}
              </div>
            </Scrollbar>

            <Divider style={{ margin: '2rem 0' }} />

            <Typography variant="body" style={{ marginBottom: '1rem' }}>
              Data table with horizontal and vertical scrolling:
            </Typography>
            <Scrollbar 
              horizontal
              vertical
              height="200px"
              style={{ 
                border: '1px solid #dee2e6', 
                borderRadius: '4px'
              }}
            >
              <table style={{ 
                width: '100%', 
                minWidth: '600px',
                borderCollapse: 'collapse',
                backgroundColor: 'white'
              }}>
                <thead>
                  <tr style={{ backgroundColor: '#f8f9fa' }}>
                    <th style={{ padding: '0.75rem', border: '1px solid #dee2e6', textAlign: 'left' }}>ID</th>
                    <th style={{ padding: '0.75rem', border: '1px solid #dee2e6', textAlign: 'left' }}>Name</th>
                    <th style={{ padding: '0.75rem', border: '1px solid #dee2e6', textAlign: 'left' }}>Email</th>
                    <th style={{ padding: '0.75rem', border: '1px solid #dee2e6', textAlign: 'left' }}>Role</th>
                    <th style={{ padding: '0.75rem', border: '1px solid #dee2e6', textAlign: 'left' }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 10 }, (_, i) => (
                    <tr key={i}>
                      <td style={{ padding: '0.75rem', border: '1px solid #dee2e6' }}>{i + 1}</td>
                      <td style={{ padding: '0.75rem', border: '1px solid #dee2e6' }}>User {i + 1}</td>
                      <td style={{ padding: '0.75rem', border: '1px solid #dee2e6' }}>user{i + 1}@example.com</td>
                      <td style={{ padding: '0.75rem', border: '1px solid #dee2e6' }}>
                        {i % 3 === 0 ? 'Admin' : i % 3 === 1 ? 'User' : 'Guest'}
                      </td>
                      <td style={{ padding: '0.75rem', border: '1px solid #dee2e6' }}>
                        <span style={{ 
                          padding: '0.25rem 0.5rem', 
                          borderRadius: '4px',
                          backgroundColor: i % 2 === 0 ? '#d4edda' : '#f8d7da',
                          color: i % 2 === 0 ? '#155724' : '#721c24'
                        }}>
                          {i % 2 === 0 ? 'Active' : 'Inactive'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Scrollbar>
          </CardContent>
        </Card>

        {/* Accessibility Features */}
        <Card>
          <CardHeader>
            <Typography variant="h2" weight="semibold">
              Accessibility Features
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography variant="body" style={{ marginBottom: '1rem' }}>
              Scrollbar with accessibility attributes:
            </Typography>
            <Scrollbar 
              height="200px"
              role="scrollbar"
              aria-label="Content scrollbar"
              tabIndex={0}
              style={{ border: '1px solid #dee2e6', borderRadius: '4px' }}
            >
              {generateContent(15)}
            </Scrollbar>
            <Typography variant="bodySmall" style={{ marginTop: '1rem', color: '#6c757d' }}>
              This scrollbar includes proper ARIA attributes and keyboard navigation support.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ScrollbarDemo;
