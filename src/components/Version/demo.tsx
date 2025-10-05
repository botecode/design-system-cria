import React from 'react';
import { Version } from './Version';
import { Typography } from '../Typography';
import { Card, CardContent, CardHeader } from '../Card';
import { Grid, Row, Column } from '../Grid';
import { spacing, colors } from '../../tokens';

const VersionDemo: React.FC = () => {
  return (
    <div style={{ padding: spacing[8], minHeight: '100vh' }}>
      <Typography variant="h1" weight="bold" style={{ marginBottom: spacing[6] }}>
        Version Component
      </Typography>

      <Typography variant="body" style={{ marginBottom: spacing[8] }}>
        A component for displaying version information with various styling options.
      </Typography>

      <Grid gap="lg">
        <Row>
          <Column span={12}>
            <Card style={{ marginBottom: spacing[6] }}>
              <CardHeader>
                <Typography variant="h2" weight="semibold">
                  Basic Version Display
                </Typography>
              </CardHeader>
              <CardContent>
                <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
                  <div>
                    <Typography variant="h3" weight="medium" style={{ marginBottom: spacing[2] }}>
                      Default Version
                    </Typography>
                    <Version />
                  </div>
                  
                  <div>
                    <Typography variant="h3" weight="medium" style={{ marginBottom: spacing[2] }}>
                      Custom Version
                    </Typography>
                    <Version version="1.2.3" />
                  </div>
                  
                  <div>
                    <Typography variant="h3" weight="medium" style={{ marginBottom: spacing[2] }}>
                      Different Sizes
                    </Typography>
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
                <Typography variant="h2" weight="semibold">
                  Version Badges
                </Typography>
              </CardHeader>
              <CardContent>
                <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
                  <div>
                    <Typography variant="h3" weight="medium" style={{ marginBottom: spacing[2] }}>
                      Badge Format
                    </Typography>
                    <Version badge />
                  </div>
                  
                  <div>
                    <Typography variant="h3" weight="medium" style={{ marginBottom: spacing[2] }}>
                      Different Variants
                    </Typography>
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
                    <Typography variant="h3" weight="medium" style={{ marginBottom: spacing[2] }}>
                      Custom Styling
                    </Typography>
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
                <Typography variant="h2" weight="semibold">
                  Build Information
                </Typography>
              </CardHeader>
              <CardContent>
                <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
                  <div>
                    <Typography variant="h3" weight="medium" style={{ marginBottom: spacing[2] }}>
                      With Build Info
                    </Typography>
                    <Version showBuildInfo />
                  </div>
                  
                  <div>
                    <Typography variant="h3" weight="medium" style={{ marginBottom: spacing[2] }}>
                      Badge with Build Info
                    </Typography>
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
                <Typography variant="h2" weight="semibold">
                  Real-world Examples
                </Typography>
              </CardHeader>
              <CardContent>
                <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
                  <div>
                    <Typography variant="h3" weight="medium" style={{ marginBottom: spacing[2] }}>
                      Footer Version
                    </Typography>
                    <div style={{ 
                      padding: spacing[4], 
                      backgroundColor: colors.gray[50], 
                      borderRadius: '8px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <Typography variant="body2" color="muted">
                        © 2024 CRIA Design System
                      </Typography>
                      <Version variant="muted" size="caption" />
                    </div>
                  </div>
                  
                  <div>
                    <Typography variant="h3" weight="medium" style={{ marginBottom: spacing[2] }}>
                      Header Version Badge
                    </Typography>
                    <div style={{ 
                      padding: spacing[4], 
                      backgroundColor: colors.white, 
                      border: `1px solid ${colors.gray[200]}`,
                      borderRadius: '8px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <Typography variant="h4" weight="semibold">
                        CRIA Design System
                      </Typography>
                      <Version badge variant="primary" />
                    </div>
                  </div>
                  
                  <div>
                    <Typography variant="h3" weight="medium" style={{ marginBottom: spacing[2] }}>
                      Development Info
                    </Typography>
                    <div style={{ 
                      padding: spacing[4], 
                      backgroundColor: colors.warning[50], 
                      border: `1px solid ${colors.warning[200]}`,
                      borderRadius: '8px'
                    }}>
                      <Typography variant="body2" weight="medium" style={{ marginBottom: spacing[2] }}>
                        Development Environment
                      </Typography>
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
