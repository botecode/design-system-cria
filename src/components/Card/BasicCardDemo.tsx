import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from './Card';
import { Button } from '../Button';
import Typography from '../Typography/Typography';
import { spacing } from '../../tokens';

export const BasicCardDemo: React.FC = () => {
  return (
    <div style={{ padding: spacing.lg }}>
      <Typography variant="title1" weight="bold" style={{ marginBottom: spacing[6] }}>
        Basic Card Components
      </Typography>

      <Typography variant="body" style={{ marginBottom: spacing[6], color: spacing[6] }}>
        Standard card components with different variants and layouts.
      </Typography>

      {/* Basic Card Variants */}
      <section style={{ marginBottom: spacing[8] }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: spacing[4] }}>
          Card Variants
        </Typography>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: spacing[4] }}>
          <Card variant="default">
            <CardHeader>
              <Typography variant="h3" weight="medium">
                Card Padrão
              </Typography>
            </CardHeader>
            <CardContent>
              <Typography variant="body">
                Este é um card padrão com borda e fundo claros.
              </Typography>
            </CardContent>
          </Card>

          <Card variant="elevated">
            <CardHeader>
              <Typography variant="h3" weight="medium">
                Card Elevado
              </Typography>
            </CardHeader>
            <CardContent>
              <Typography variant="body">
                Este card tem uma sombra mais pronunciada para dar destaque.
              </Typography>
            </CardContent>
          </Card>

          <Card variant="outlined">
            <CardHeader>
              <Typography variant="h3">Outlined Card</Typography>
            </CardHeader>
            <CardContent>
              <Typography variant="body">
                This card has a prominent border and transparent background.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Card with Footer */}
      <section style={{ marginBottom: spacing[8] }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: spacing[4] }}>
          Card with Footer
        </Typography>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: spacing[4] }}>
          <Card variant="default">
            <CardHeader>
              <Typography variant="h3" weight="medium">
                Card with Actions
              </Typography>
            </CardHeader>
            <CardContent>
              <Typography variant="body">
                This card includes a footer with action buttons for user interaction.
              </Typography>
            </CardContent>
            <CardFooter>
              <div style={{ display: 'flex', gap: spacing[3], justifyContent: 'flex-end' }}>
                <Button variant="secondary" size="small">
                  Cancel
                </Button>
                <Button variant="primary" size="small">
                  Save
                </Button>
              </div>
            </CardFooter>
          </Card>

          <Card variant="elevated">
            <CardHeader>
              <Typography variant="h3" weight="medium">
                Card with Multiple Actions
              </Typography>
            </CardHeader>
            <CardContent>
              <Typography variant="body">
                This card demonstrates multiple action buttons in the footer.
              </Typography>
            </CardContent>
            <CardFooter>
              <div style={{ display: 'flex', gap: spacing[3], justifyContent: 'space-between' }}>
                <Button variant="text" size="small">
                  Learn More
                </Button>
                <div style={{ display: 'flex', gap: spacing[3] }}>
                  <Button variant="secondary" size="small">
                    Cancel
                  </Button>
                  <Button variant="primary" size="small">
                    Confirm
                  </Button>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Card Layouts */}
      <section style={{ marginBottom: spacing[8] }}>
        <Typography variant="h2" weight="semiBold" style={{ marginBottom: spacing[4] }}>
          Card Layouts
        </Typography>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: spacing[4] }}>
          <Card variant="default">
            <CardHeader>
              <Typography variant="h3" weight="medium">
                Simple Layout
              </Typography>
            </CardHeader>
            <CardContent>
              <Typography variant="body">
                A simple card with just header and content sections.
              </Typography>
            </CardContent>
          </Card>

          <Card variant="outlined">
            <CardHeader>
              <Typography variant="h3" weight="medium">
                Complete Layout
              </Typography>
            </CardHeader>
            <CardContent>
              <Typography variant="body">
                A complete card with header, content, and footer sections.
              </Typography>
            </CardContent>
            <CardFooter>
              <div style={{ display: 'flex', gap: spacing[3], justifyContent: 'flex-end' }}>
                <Button variant="primary" size="small">
                  Action
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default BasicCardDemo;
