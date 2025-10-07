import React, { useState } from 'react';
import { Scrollbar } from './Scrollbar';
import { Card, CardContent, CardHeader } from '../Card';
import { CriaTextHeadline1, CriaTextHeadline2, CriaTextTitle1, CriaTextTitle2, CriaTextBody1, CriaTextBody2 } from '../TextTokens';
import { Button } from '../Button';
import { Divider } from '../Divider';
import { spacing, colors, radii } from '../../tokens';

const ScrollbarDemo: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    setScrollPosition(event.currentTarget.scrollTop);
  };

  const generateContent = (count: number) => (
    <div>
      {Array.from({ length: count }, (_, i) => (
        <div key={i} style={{ 
          padding: spacing[4], 
          margin: `${spacing[2]} 0`, 
          backgroundColor: i % 2 === 0 ? colors.gray[100] : colors.gray[200],
          borderRadius: radii.sm,
          border: `1px solid ${colors.gray[300]}`
        }}>
          <CriaTextBody1 >
            Content Item {i + 1}
          </CriaTextBody1>
          <CriaTextBody2>
            This is some sample content to demonstrate scrolling behavior. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </CriaTextBody2>
        </div>
      ))}
    </div>
  );

  const generateHorizontalContent = () => (
    <div style={{ display: 'flex', gap: spacing[4], padding: spacing[4] }}>
      {Array.from({ length: 20 }, (_, i) => (
        <div key={i} style={{ 
          minWidth: '200px',
          padding: spacing[4], 
          backgroundColor: colors.gray[100],
          borderRadius: radii.sm,
          border: `1px solid ${colors.gray[300]}`
        }}>
          <CriaTextBody1 >
            Item {i + 1}
          </CriaTextBody1>
        </div>
      ))}
    </div>
  );

  return (
    <div style={{ padding: spacing[8] }}>
      <CriaTextHeadline1  style={{ marginBottom: spacing[8] }}>
        Scrollbar Component
      </CriaTextHeadline1>

      <CriaTextBody1 style={{ marginBottom: spacing[8] }}>
        Custom vertical scrollbar component with customizable themes, sizes, and behaviors.
      </CriaTextBody1>

      <div style={{ display: 'grid', gap: spacing[8] }}>
        {/* Basic Scrollbar Examples */}
        <Card>
          <CardHeader>
            <CriaTextTitle1 >
              Basic Scrollbar Layouts
            </CriaTextTitle1>
          </CardHeader>
          <CardContent>
            <CriaTextBody1 style={{ marginBottom: spacing[4] }}>
              Default scrollbar with vertical scrolling:
            </CriaTextBody1>
            <Scrollbar height="200px" style={{ border: `1px solid ${colors.gray[300]}`, borderRadius: radii.sm }}>
              {generateContent(15)}
            </Scrollbar>
          </CardContent>
        </Card>

        {/* Size Variations */}
        <Card>
          <CardHeader>
            <CriaTextTitle1 >
              Scrollbar Sizes
            </CriaTextTitle1>
          </CardHeader>
          <CardContent>
            <CriaTextBody1 style={{ marginBottom: spacing[4] }}>
              Different scrollbar sizes:
            </CriaTextBody1>
            
            <div style={{ marginBottom: spacing[4] }}>
              <CriaTextBody2 style={{ marginBottom: spacing[2] }}>Small Size:</CriaTextBody2>
              <Scrollbar size="sm" height="150px" style={{ border: `1px solid ${colors.gray[300]}`, borderRadius: radii.sm }}>
                {generateContent(10)}
              </Scrollbar>
            </div>
            
            <div style={{ marginBottom: spacing[4] }}>
              <CriaTextBody2 style={{ marginBottom: spacing[2] }}>Medium Size (Default):</CriaTextBody2>
              <Scrollbar size="md" height="150px" style={{ border: `1px solid ${colors.gray[300]}`, borderRadius: radii.sm }}>
                {generateContent(10)}
              </Scrollbar>
            </div>
            
            <div>
              <CriaTextBody2 style={{ marginBottom: spacing[2] }}>Large Size:</CriaTextBody2>
              <Scrollbar size="lg" height="150px" style={{ border: `1px solid ${colors.gray[300]}`, borderRadius: radii.sm }}>
                {generateContent(10)}
              </Scrollbar>
            </div>
          </CardContent>
        </Card>

        {/* Theme Variations */}
        <Card>
          <CardHeader>
            <CriaTextTitle1 >
              Scrollbar Themes
            </CriaTextTitle1>
          </CardHeader>
          <CardContent>
            <CriaTextBody1 style={{ marginBottom: spacing[4] }}>
              Different scrollbar themes:
            </CriaTextBody1>
            
            <div style={{ marginBottom: spacing[4] }}>
              <CriaTextBody2 style={{ marginBottom: spacing[2] }}>Light Theme (Default):</CriaTextBody2>
              <Scrollbar theme="light" height="150px" style={{ border: `1px solid ${colors.gray[300]}`, borderRadius: radii.sm }}>
                {generateContent(10)}
              </Scrollbar>
            </div>
            
            <div style={{ marginBottom: spacing[4], backgroundColor: colors.gray[800], padding: spacing[4], borderRadius: radii.sm }}>
              <CriaTextBody2 style={{ marginBottom: spacing[2], color: 'white' }}>Dark Theme:</CriaTextBody2>
              <Scrollbar theme="dark" height="150px" style={{ border: `1px solid ${colors.gray[600]}`, borderRadius: radii.sm }}>
                {generateContent(10)}
              </Scrollbar>
            </div>
            
            <div>
              <CriaTextBody2 style={{ marginBottom: spacing[2] }}>Auto Theme:</CriaTextBody2>
              <Scrollbar theme="auto" height="150px" style={{ border: `1px solid ${colors.gray[300]}`, borderRadius: radii.sm }}>
                {generateContent(10)}
              </Scrollbar>
            </div>
          </CardContent>
        </Card>

        {/* Smooth Scrolling */}
        <Card>
          <CardHeader>
            <CriaTextTitle1 >
              Smooth Scrolling
            </CriaTextTitle1>
          </CardHeader>
          <CardContent>
            <CriaTextBody1 style={{ marginBottom: spacing[4] }}>
              Scrollbar with smooth scrolling enabled:
            </CriaTextBody1>
            <Scrollbar 
              smooth 
              height="200px" 
              style={{ border: `1px solid ${colors.gray[300]}`, borderRadius: radii.sm }}
            >
              {generateContent(20)}
            </Scrollbar>
          </CardContent>
        </Card>

        {/* Horizontal Scrolling */}
        <Card>
          <CardHeader>
            <CriaTextTitle1 >
              Horizontal Scrolling
            </CriaTextTitle1>
          </CardHeader>
          <CardContent>
            <CriaTextBody1 style={{ marginBottom: spacing[4] }}>
              Horizontal scrollbar:
            </CriaTextBody1>
            <Scrollbar 
              horizontal 
              vertical={false}
              height="120px" 
              style={{ border: `1px solid ${colors.gray[300]}`, borderRadius: radii.sm }}
            >
              {generateHorizontalContent()}
            </Scrollbar>
          </CardContent>
        </Card>

        {/* Both Horizontal and Vertical */}
        <Card>
          <CardHeader>
            <CriaTextTitle1 >
              Both Horizontal and Vertical Scrolling
            </CriaTextTitle1>
          </CardHeader>
          <CardContent>
            <CriaTextBody1 style={{ marginBottom: spacing[4] }}>
              Scrollbar with both horizontal and vertical scrolling:
            </CriaTextBody1>
            <Scrollbar 
              horizontal 
              vertical
              height="200px" 
              style={{ border: `1px solid ${colors.gray[300]}`, borderRadius: radii.sm }}
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
            <CriaTextTitle1 >
              Custom Scrollbar Colors
            </CriaTextTitle1>
          </CardHeader>
          <CardContent>
            <CriaTextBody1 style={{ marginBottom: spacing[4] }}>
              Scrollbar with custom colors:
            </CriaTextBody1>
            <Scrollbar 
              height="200px" 
              trackColor="#e3f2fd"
              thumbColor="#2196f3"
              hoverColor="#1976d2"
              style={{ border: `1px solid ${colors.gray[300]}`, borderRadius: radii.sm }}
            >
              {generateContent(15)}
            </Scrollbar>
          </CardContent>
        </Card>

        {/* Fade Effect */}
        <Card>
          <CardHeader>
            <CriaTextTitle1 >
              Fade Effect
            </CriaTextTitle1>
          </CardHeader>
          <CardContent>
            <CriaTextBody1 style={{ marginBottom: spacing[4] }}>
              Scrollbar with fade effect (scrollbar appears on hover):
            </CriaTextBody1>
            <Scrollbar 
              fade
              height="200px" 
              style={{ border: `1px solid ${colors.gray[300]}`, borderRadius: radii.sm }}
            >
              {generateContent(15)}
            </Scrollbar>
          </CardContent>
        </Card>

        {/* Auto Height */}
        <Card>
          <CardHeader>
            <CriaTextTitle1 >
              Auto Height
            </CriaTextTitle1>
          </CardHeader>
          <CardContent>
            <CriaTextBody1 style={{ marginBottom: spacing[4] }}>
              Scrollbar with auto height (adjusts to content):
            </CriaTextBody1>
            <Scrollbar 
              autoHeight
              height="200px"
              style={{ border: `1px solid ${colors.gray[300]}`, borderRadius: radii.sm }}
            >
              {generateContent(8)}
            </Scrollbar>
          </CardContent>
        </Card>

        {/* Scroll Event Handling */}
        <Card>
          <CardHeader>
            <CriaTextTitle1 >
              Scroll Event Handling
            </CriaTextTitle1>
          </CardHeader>
          <CardContent>
            <CriaTextBody1 style={{ marginBottom: spacing[4] }}>
              Scrollbar with scroll event handling:
            </CriaTextBody1>
            <div style={{ marginBottom: spacing[4] }}>
              <CriaTextBody2>
                Scroll Position: {Math.round(scrollPosition)}px
              </CriaTextBody2>
            </div>
            <Scrollbar 
              height="200px" 
              onScroll={handleScroll}
              style={{ border: `1px solid ${colors.gray[300]}`, borderRadius: radii.sm }}
            >
              {generateContent(20)}
            </Scrollbar>
          </CardContent>
        </Card>

        {/* Real-world Examples */}
        <Card>
          <CardHeader>
            <CriaTextTitle1 >
              Real-world Examples
            </CriaTextTitle1>
          </CardHeader>
          <CardContent>
            <CriaTextBody1 style={{ marginBottom: spacing[4] }}>
              Code block with custom scrollbar:
            </CriaTextBody1>
            <Scrollbar 
              theme="dark"
              size="sm"
              height="200px"
              style={{ 
                backgroundColor: colors.gray[900], 
                borderRadius: radii.sm,
                fontFamily: 'Monaco, Menlo, Ubuntu Mono, monospace',
                fontSize: '14px'
              }}
            >
              <div style={{ padding: spacing[4], color: colors.gray[300] }}>
                <div>// React Component Example</div>
                <div>import React from 'react';</div>
                <div>import { Scrollbar } from './Scrollbar';</div>
                <div></div>
                <div>const MyComponent = () =&gt; {'{'} {'}'}</div>
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

            <CriaTextBody1 style={{ marginBottom: spacing[4] }}>
              Chat messages with smooth scrolling:
            </CriaTextBody1>
            <Scrollbar 
              smooth
              theme="auto"
              height="250px"
              style={{ 
                border: `1px solid ${colors.gray[300]}`, 
                borderRadius: radii.sm,
                backgroundColor: colors.gray[100]
              }}
            >
              <div style={{ padding: spacing[4] }}>
                {Array.from({ length: 15 }, (_, i) => (
                  <div key={i} style={{ 
                    marginBottom: spacing[4],
                    padding: '0.75rem',
                    backgroundColor: i % 2 === 0 ? '#007bff' : '#6c757d',
                    color: 'white',
                    borderRadius: '12px',
                    maxWidth: '70%',
                    marginLeft: i % 2 === 0 ? '0' : 'auto'
                  }}>
                    <CriaTextBody2>
                      Message {i + 1}: This is a sample chat message to demonstrate smooth scrolling behavior.
                    </CriaTextBody2>
                  </div>
                ))}
              </div>
            </Scrollbar>

            <Divider style={{ margin: '2rem 0' }} />

            <CriaTextBody1 style={{ marginBottom: spacing[4] }}>
              Data table with horizontal and vertical scrolling:
            </CriaTextBody1>
            <Scrollbar 
              horizontal
              vertical
              height="200px"
              style={{ 
                border: `1px solid ${colors.gray[300]}`, 
                borderRadius: radii.sm
              }}
            >
              <table style={{ 
                width: '100%', 
                minWidth: '600px',
                borderCollapse: 'collapse',
                backgroundColor: 'white'
              }}>
                <thead>
                  <tr style={{ backgroundColor: colors.gray[100] }}>
                    <th style={{ padding: '0.75rem', border: `1px solid ${colors.gray[300]}`, textAlign: 'left' }}>ID</th>
                    <th style={{ padding: '0.75rem', border: `1px solid ${colors.gray[300]}`, textAlign: 'left' }}>Name</th>
                    <th style={{ padding: '0.75rem', border: `1px solid ${colors.gray[300]}`, textAlign: 'left' }}>Email</th>
                    <th style={{ padding: '0.75rem', border: `1px solid ${colors.gray[300]}`, textAlign: 'left' }}>Role</th>
                    <th style={{ padding: '0.75rem', border: `1px solid ${colors.gray[300]}`, textAlign: 'left' }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 10 }, (_, i) => (
                    <tr key={i}>
                      <td style={{ padding: '0.75rem', border: `1px solid ${colors.gray[300]}` }}>{i + 1}</td>
                      <td style={{ padding: '0.75rem', border: `1px solid ${colors.gray[300]}` }}>User {i + 1}</td>
                      <td style={{ padding: '0.75rem', border: `1px solid ${colors.gray[300]}` }}>user{i + 1}@example.com</td>
                      <td style={{ padding: '0.75rem', border: `1px solid ${colors.gray[300]}` }}>
                        {i % 3 === 0 ? 'Admin' : i % 3 === 1 ? 'User' : 'Guest'}
                      </td>
                      <td style={{ padding: '0.75rem', border: `1px solid ${colors.gray[300]}` }}>
                        <span style={{ 
                          padding: '0.25rem 0.5rem', 
                          borderRadius: radii.sm,
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
            <CriaTextTitle1 >
              Accessibility Features
            </CriaTextTitle1>
          </CardHeader>
          <CardContent>
            <CriaTextBody1 style={{ marginBottom: spacing[4] }}>
              Scrollbar with accessibility attributes:
            </CriaTextBody1>
            <Scrollbar 
              height="200px"
              role="scrollbar"
              aria-label="Content scrollbar"
              tabIndex={0}
              style={{ border: `1px solid ${colors.gray[300]}`, borderRadius: radii.sm }}
            >
              {generateContent(15)}
            </Scrollbar>
            <CriaTextBody2 style={{ marginTop: spacing[4], color: colors.gray[500] }}>
              This scrollbar includes proper ARIA attributes and keyboard navigation support.
            </CriaTextBody2>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ScrollbarDemo;
