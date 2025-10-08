import React from 'react';
import { Version } from './Version';
import { Typography } from '../Typography';
import { CriaTextHeadline1, CriaTextTitle1, CriaTextBody1, CriaTextBody2 } from '../TextTokens';
import { Card, CardContent, CardHeader } from '../Card';
import { Grid, Row, Column } from '../Grid';
import { spacing, colors } from '../../tokens';

const VersionDemo: React.FC = () => {
  return (
    <div style={{ padding: spacing[8], minHeight: '100vh' }}>
      <div style={{ marginBottom: spacing[6] }}>
        <CriaTextHeadline1>
          Version Component
        </CriaTextHeadline1>
      </div>

      <div style={{ marginBottom: spacing[8] }}>
        <CriaTextBody1>
          A component for displaying version information with various styling options.
        </CriaTextBody1>
      </div>

      <Grid gap="lg">
        <Row>
          <Column span={12}>
            <Card style={{ marginBottom: spacing[6] }}>
              <CardHeader>
                <CriaTextTitle1>
                  Basic Version Display
                </CriaTextTitle1>
              </CardHeader>
              <CardContent>
                <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
                  <div>
                    <div style={{ marginBottom: spacing[2] }}>
                      <CriaTextTitle1>
                      Default Version
                    </CriaTextTitle1>
                    <Version />
                  </div>
                  
                  <div>
                    <div style={{ marginBottom: spacing[2] }}>
                      <CriaTextTitle1>
                      Custom Version
                    </CriaTextTitle1>
                    <Version version="1.2.3" />
                  </div>
                  
                  <div>
                    <div style={{ marginBottom: spacing[2] }}>
                      <CriaTextTitle1>
                      Different Sizes
                    </CriaTextTitle1>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[2] }}>
                      <Version size="caption" />
                      <Version size="body2" />
                      <Version size="body" />
                      <Version size="h6" />
                      <Version size="h5" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Column>
        </Row>

        <Row>
          <Column span={12}>
            <Card style={{ marginBottom: spacing[6] }}>
              <CardHeader>
                <CriaTextTitle1>
                  Version Badges
                </CriaTextTitle1>
              </CardHeader>
              <CardContent>
                <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
                  <div>
                    <div style={{ marginBottom: spacing[2] }}>
                      <CriaTextTitle1>
                      Badge Format
                    </CriaTextTitle1>
                    <Version badge />
                  </div>
                  
                  <div>
                    <div style={{ marginBottom: spacing[2] }}>
                      <CriaTextTitle1>
                      Different Variants
                    </CriaTextTitle1>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: spacing[2] }}>
                      <Version badge variant="primary" />
                      <Version badge variant="secondary" />
                      <Version badge variant="muted" />
                      <Version badge variant="success" />
                      <Version badge variant="warning" />
                      <Version badge variant="error" />
                    </div>
                  </div>
                  
                  <div>
                    <div style={{ marginBottom: spacing[2] }}>
                      <CriaTextTitle1>
                      Custom Styling
                    </CriaTextTitle1>
                    <Version 
                      badge 
                      style={{ 
                        backgroundColor: colors.primary[100], 
                        borderColor: colors.primary[300],
                        color: colors.primary[700]
                      }} 
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </Column>
        </Row>

        <Row>
          <Column span={12}>
            <Card style={{ marginBottom: spacing[6] }}>
              <CardHeader>
                <CriaTextTitle1>
                  Build Information
                </CriaTextTitle1>
              </CardHeader>
              <CardContent>
                <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
                  <div>
                    <div style={{ marginBottom: spacing[2] }}>
                      <CriaTextTitle1>
                      With Build Info
                    </CriaTextTitle1>
                    <Version showBuildInfo />
                  </div>
                  
                  <div>
                    <div style={{ marginBottom: spacing[2] }}>
                      <CriaTextTitle1>
                      Badge with Build Info
                    </CriaTextTitle1>
                    <Version badge showBuildInfo />
                  </div>
                </div>
              </CardContent>
            </Card>
          </Column>
        </Row>

        <Row>
          <Column span={12}>
            <Card style={{ marginBottom: spacing[6] }}>
              <CardHeader>
                <CriaTextTitle1>
                  Real-world Examples
                </CriaTextTitle1>
              </CardHeader>
              <CardContent>
                <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
                  <div>
                    <div style={{ marginBottom: spacing[2] }}>
                      <CriaTextTitle1>
                      Footer Version
                    </CriaTextTitle1>
                    <div style={{ 
                      padding: spacing[4], 
                      backgroundColor: colors.gray[50], 
                      borderRadius: '8px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <div style={{ color: 'var(--cria-text-muted)' }}>
                        <CriaTextBody2>
                          © 2024 CRIA Design System
                        </CriaTextBody2>
                      </div>
                      <Version variant="muted" size="caption" />
                    </div>
                  </div>
                  
                  <div>
                    <div style={{ marginBottom: spacing[2] }}>
                      <CriaTextTitle1>
                      Header Version Badge
                    </CriaTextTitle1>
                    <div style={{ 
                      padding: spacing[4], 
                      backgroundColor: colors.white, 
                      border: `1px solid ${colors.gray[200]}`,
                      borderRadius: '8px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <CriaTextTitle1>
                        CRIA Design System
                      </CriaTextTitle1>
                      <Version badge variant="primary" />
                    </div>
                  </div>
                  
                  <div>
                    <div style={{ marginBottom: spacing[2] }}>
                      <CriaTextTitle1>
                      Development Info
                    </CriaTextTitle1>
                    <div style={{ 
                      padding: spacing[4], 
                      backgroundColor: colors.warning[50], 
                      border: `1px solid ${colors.warning[200]}`,
                      borderRadius: '8px'
                    }}>
                      <div style={{ marginBottom: spacing[2] }}>
                        <CriaTextBody2>
                          Development Environment
                        </CriaTextBody2>
                      </div>
                      <Version showBuildInfo variant="warning" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Column>
        </Row>
      </Grid>
    </div>
  );
};

export default VersionDemo;
