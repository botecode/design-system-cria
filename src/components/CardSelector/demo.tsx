import React, { useState } from 'react';
import { CardSelector } from './CardSelector';
import { Typography } from '../Typography';
import { Card } from '../Card';
import { Button } from '../Button';
import { colors, spacing } from '../../tokens';
import { Check, Star, Lightning, Shield, Users, Globe } from 'phosphor-react';

export const CardSelectorDemo: React.FC = () => {
  const [singleSelection, setSingleSelection] = useState<string[]>([]);
  const [multiSelection, setMultiSelection] = useState<string[]>([]);
  const [planSelection, setPlanSelection] = useState<string[]>([]);
  const [featureSelection, setFeatureSelection] = useState<string[]>([]);

  const planCards = [
    {
      id: '1',
      title: 'Starter',
      description: 'Perfect for individuals and small projects',
      value: 'starter',
      price: '$9/month',
      features: [
        'Up to 5 projects',
        '10GB storage',
        'Basic support',
        'Email notifications',
        'Mobile app access',
      ],
      badge: 'Popular',
    },
    {
      id: '2',
      title: 'Professional',
      description: 'Best for growing teams and businesses',
      value: 'professional',
      price: '$29/month',
      features: [
        'Unlimited projects',
        '100GB storage',
        'Priority support',
        'Advanced analytics',
        'Team collaboration',
        'Custom integrations',
        'API access',
      ],
      badge: 'Most Popular',
    },
    {
      id: '3',
      title: 'Enterprise',
      description: 'For large organizations with advanced needs',
      value: 'enterprise',
      price: '$99/month',
      features: [
        'Everything in Professional',
        'Unlimited storage',
        '24/7 phone support',
        'Custom reporting',
        'Advanced security',
        'SSO integration',
        'Dedicated account manager',
        'Custom training',
      ],
    },
  ];

  const featureCards = [
    {
      id: '1',
      title: 'Analytics',
      description: 'Track your performance with detailed analytics',
      value: 'analytics',
      icon: <Lightning size={24} color={colors.primary} />,
    },
    {
      id: '2',
      title: 'Security',
      description: 'Enterprise-grade security features',
      value: 'security',
      icon: <Shield size={24} color={colors.primary} />,
    },
    {
      id: '3',
      title: 'Collaboration',
      description: 'Work together with your team seamlessly',
      value: 'collaboration',
      icon: <Users size={24} color={colors.primary} />,
    },
    {
      id: '4',
      title: 'Global',
      description: 'Access from anywhere in the world',
      value: 'global',
      icon: <Globe size={24} color={colors.primary} />,
    },
  ];

  const simpleCards = [
    {
      id: '1',
      title: 'Option 1',
      description: 'This is the first option',
      value: 'option1',
    },
    {
      id: '2',
      title: 'Option 2',
      description: 'This is the second option',
      value: 'option2',
    },
    {
      id: '3',
      title: 'Option 3',
      description: 'This is the third option',
      value: 'option3',
    },
  ];

  const handleCardClick = (card: any) => {
    console.log('Card clicked:', card);
  };

  const resetSelections = () => {
    setSingleSelection([]);
    setMultiSelection([]);
    setPlanSelection([]);
    setFeatureSelection([]);
  };

  return (
    <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
      <Typography variant="title1" weight="bold" style={{ marginBottom: '16px' }}>
        Card Selector Demo
      </Typography>
      
      <Typography variant="body" style={{ marginBottom: '32px' }}>
        The Card Selector component provides a flexible way to select from multiple options using card-based interfaces. 
        It supports both single and multi-select modes with various customization options.
      </Typography>

      {/* Demo Controls */}
      <Card style={{ marginBottom: '32px', padding: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <Button onClick={resetSelections} variant="outline">
            Reset All Selections
          </Button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Typography variant="body2" color="secondary">
              Single Selection:
            </Typography>
            <Typography variant="body2" weight="semiBold">
              {singleSelection.length > 0 ? singleSelection[0] : 'None'}
            </Typography>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Typography variant="body2" color="secondary">
              Multi Selection:
            </Typography>
            <Typography variant="body2" weight="semiBold">
              {multiSelection.length > 0 ? multiSelection.join(', ') : 'None'}
            </Typography>
          </div>
        </div>
      </Card>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
        {/* Single Selection Example */}
        <Card style={{ padding: '24px' }}>
          <Typography variant="h3" weight="semiBold" style={{ marginBottom: '16px' }}>
            Single Selection Mode
          </Typography>
          <Typography variant="body2" style={{ marginBottom: '24px', color: colors.text.secondary }}>
            Choose one option from the available cards. Only one selection is allowed.
          </Typography>
          <CardSelector
            cards={simpleCards}
            mode="single"
            selectedValues={singleSelection}
            onChange={setSingleSelection}
            onCardClick={handleCardClick}
            layout="grid"
            size="md"
            spacing="md"
            variant="outlined"
            ariaLabel="Select one option"
            helpText="Click on a card to select it"
          />
        </Card>

        {/* Multi Selection Example */}
        <Card style={{ padding: '24px' }}>
          <Typography variant="h3" weight="semiBold" style={{ marginBottom: '16px' }}>
            Multi Selection Mode
          </Typography>
          <Typography variant="body2" style={{ marginBottom: '24px', color: colors.text.secondary }}>
            Choose multiple options from the available cards. You can select and deselect multiple items.
          </Typography>
          <CardSelector
            cards={featureCards}
            mode="multi"
            selectedValues={multiSelection}
            onChange={setMultiSelection}
            onCardClick={handleCardClick}
            layout="grid"
            size="lg"
            spacing="lg"
            variant="default"
            ariaLabel="Select multiple features"
            helpText="Select multiple features that you need"
            maxSelections={3}
          />
        </Card>

        {/* Pricing Plans Example */}
        <Card style={{ padding: '24px' }}>
          <Typography variant="h3" weight="semiBold" style={{ marginBottom: '16px' }}>
            Pricing Plans Selection
          </Typography>
          <Typography variant="body2" style={{ marginBottom: '24px', color: colors.text.secondary }}>
            Select a pricing plan that best fits your needs. This example shows cards with pricing information.
          </Typography>
          <CardSelector
            cards={planCards}
            mode="single"
            selectedValues={planSelection}
            onChange={setPlanSelection}
            onCardClick={handleCardClick}
            layout="grid"
            size="lg"
            spacing="lg"
            variant="elevated"
            ariaLabel="Select a pricing plan"
            helpText="Choose the plan that best fits your needs"
          />
        </Card>

        {/* List Layout Example */}
        <Card style={{ padding: '24px' }}>
          <Typography variant="h3" weight="semiBold" style={{ marginBottom: '16px' }}>
            List Layout
          </Typography>
          <Typography variant="body2" style={{ marginBottom: '24px', color: colors.text.secondary }}>
            Cards arranged in a vertical list layout with horizontal orientation.
          </Typography>
          <CardSelector
            cards={featureCards}
            mode="multi"
            selectedValues={featureSelection}
            onChange={setFeatureSelection}
            onCardClick={handleCardClick}
            layout="list"
            size="md"
            spacing="md"
            orientation="horizontal"
            variant="outlined"
            ariaLabel="Select features for list layout"
            helpText="Select features in list format"
          />
        </Card>

        {/* Different Sizes */}
        <Card style={{ padding: '24px' }}>
          <Typography variant="h3" weight="semiBold" style={{ marginBottom: '16px' }}>
            Different Sizes
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <Typography variant="body2" weight="medium" style={{ marginBottom: '12px' }}>
                Small Size:
              </Typography>
              <CardSelector
                cards={simpleCards.slice(0, 2)}
                mode="single"
                size="sm"
                spacing="sm"
                variant="outlined"
                ariaLabel="Small size cards"
              />
            </div>
            <div>
              <Typography variant="body2" weight="medium" style={{ marginBottom: '12px' }}>
                Medium Size (Default):
              </Typography>
              <CardSelector
                cards={simpleCards.slice(0, 2)}
                mode="single"
                size="md"
                spacing="md"
                variant="outlined"
                ariaLabel="Medium size cards"
              />
            </div>
            <div>
              <Typography variant="body2" weight="medium" style={{ marginBottom: '12px' }}>
                Large Size:
              </Typography>
              <CardSelector
                cards={simpleCards.slice(0, 2)}
                mode="single"
                size="lg"
                spacing="lg"
                variant="outlined"
                ariaLabel="Large size cards"
              />
            </div>
          </div>
        </Card>

        {/* Error and Help States */}
        <Card style={{ padding: '24px' }}>
          <Typography variant="h3" weight="semiBold" style={{ marginBottom: '16px' }}>
            Error and Help States
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <Typography variant="body2" weight="medium" style={{ marginBottom: '12px' }}>
                With Error Message:
              </Typography>
              <CardSelector
                cards={simpleCards}
                mode="single"
                error="Please select at least one option"
                variant="outlined"
                ariaLabel="Cards with error"
              />
            </div>
            <div>
              <Typography variant="body2" weight="medium" style={{ marginBottom: '12px' }}>
                With Help Text:
              </Typography>
              <CardSelector
                cards={simpleCards}
                mode="single"
                helpText="This is helpful information about the selection"
                variant="outlined"
                ariaLabel="Cards with help text"
              />
            </div>
            <div>
              <Typography variant="body2" weight="medium" style={{ marginBottom: '12px' }}>
                Disabled State:
              </Typography>
              <CardSelector
                cards={simpleCards}
                mode="single"
                disabled
                variant="outlined"
                ariaLabel="Disabled cards"
              />
            </div>
            <div>
              <Typography variant="body2" weight="medium" style={{ marginBottom: '12px' }}>
                Loading State:
              </Typography>
              <CardSelector
                cards={simpleCards}
                mode="single"
                loading
                variant="outlined"
                ariaLabel="Loading cards"
              />
            </div>
          </div>
        </Card>

        {/* Usage Examples */}
        <Card style={{ padding: '24px' }}>
          <Typography variant="h3" weight="semiBold" style={{ marginBottom: '16px' }}>
            Usage Examples
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <Typography variant="body2" weight="medium" style={{ marginBottom: '8px' }}>
                Basic Single Selection:
              </Typography>
              <pre style={{
                backgroundColor: colors.background.secondary,
                padding: '12px',
                borderRadius: '8px',
                fontSize: '14px',
                overflow: 'auto',
                color: colors.text.primary,
              }}>
{`<CardSelector
  cards={cards}
  mode="single"
  selectedValues={selectedValues}
  onChange={setSelectedValues}
  ariaLabel="Select one option"
/>`}
              </pre>
            </div>

            <div>
              <Typography variant="body2" weight="medium" style={{ marginBottom: '8px' }}>
                Multi Selection with Limits:
              </Typography>
              <pre style={{
                backgroundColor: colors.background.secondary,
                padding: '12px',
                borderRadius: '8px',
                fontSize: '14px',
                overflow: 'auto',
                color: colors.text.primary,
              }}>
{`<CardSelector
  cards={cards}
  mode="multi"
  selectedValues={selectedValues}
  onChange={setSelectedValues}
  maxSelections={3}
  minSelections={1}
  layout="grid"
  size="lg"
  variant="elevated"
  ariaLabel="Select multiple options"
/>`}
              </pre>
            </div>

            <div>
              <Typography variant="body2" weight="medium" style={{ marginBottom: '8px' }}>
                Custom Card Renderer:
              </Typography>
              <pre style={{
                backgroundColor: colors.background.secondary,
                padding: '12px',
                borderRadius: '8px',
                fontSize: '14px',
                overflow: 'auto',
                color: colors.text.primary,
              }}>
{`<CardSelector
  cards={cards}
  cardRenderer={(card, isSelected, isDisabled) => (
    <div className="custom-card">
      <h3>{card.title}</h3>
      <p>{card.description}</p>
      {isSelected && <Check />}
    </div>
  )}
  onChange={setSelectedValues}
/>`}
              </pre>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CardSelectorDemo;
