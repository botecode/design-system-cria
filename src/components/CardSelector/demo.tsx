import React, { useState } from 'react';
import { CardSelector } from './CardSelector';
import { CriaTextHeadline1, CriaTextTitle1, CriaTextBody1, CriaTextBody2 } from '../TextTokens';
import { Card } from '../Card';
import { Button } from '../Button';
import { colors, spacing, radii } from '../../tokens';
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
    <div style={{ padding: spacing[6], maxWidth: '1200px', margin: '0 auto' }}>
      <CriaTextHeadline1 style={{ marginBottom: spacing[4] }}>
        Card Selector Demo
      </CriaTextHeadline1>
      
      <CriaTextBody1 style={{ marginBottom: spacing[8] }}>
        The Card Selector component provides a flexible way to select from multiple options using card-based interfaces. 
        It supports both single and multi-select modes with various customization options.
      </CriaTextBody1>

      {/* Demo Controls */}
      <Card style={{ marginBottom: spacing[8], padding: spacing[4] }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: spacing[4], flexWrap: 'wrap' }}>
          <Button onClick={resetSelections} variant="outline">
            Reset All Selections
          </Button>
          <div style={{ display: 'flex', alignItems: 'center', gap: spacing[2] }}>
            <CriaTextBody2 style={{ color: colors.text.secondary }}>
              Single Selection:
            </CriaTextBody2>
            <CriaTextBody2 style={{ fontWeight: '600' }}>
              {singleSelection.length > 0 ? singleSelection[0] : 'None'}
            </CriaTextBody2>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: spacing[2] }}>
            <CriaTextBody2 style={{ color: colors.text.secondary }}>
              Multi Selection:
            </CriaTextBody2>
            <CriaTextBody2 style={{ fontWeight: '600' }}>
              {multiSelection.length > 0 ? multiSelection.join(', ') : 'None'}
            </CriaTextBody2>
          </div>
        </div>
      </Card>

        <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[12] }}>
        {/* Single Selection Example */}
        <Card style={{ padding: spacing[6] }}>
          <CriaTextTitle1  style={{ marginBottom: spacing[4] }}>
            Single Selection Mode
          </CriaTextTitle1>
          <CriaTextBody2 style={{ marginBottom: spacing[6], color: colors.text.secondary }}>
            Choose one option from the available cards. Only one selection is allowed.
          </CriaTextBody2>
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
        <Card style={{ padding: spacing[6] }}>
          <CriaTextTitle1  style={{ marginBottom: spacing[4] }}>
            Multi Selection Mode
          </CriaTextTitle1>
          <CriaTextBody2 style={{ marginBottom: spacing[6], color: colors.text.secondary }}>
            Choose multiple options from the available cards. You can select and deselect multiple items.
          </CriaTextBody2>
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
        <Card style={{ padding: spacing[6] }}>
          <CriaTextTitle1  style={{ marginBottom: spacing[4] }}>
            Pricing Plans Selection
          </CriaTextTitle1>
          <CriaTextBody2 style={{ marginBottom: spacing[6], color: colors.text.secondary }}>
            Select a pricing plan that best fits your needs. This example shows cards with pricing information.
          </CriaTextBody2>
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
        <Card style={{ padding: spacing[6] }}>
          <CriaTextTitle1  style={{ marginBottom: spacing[4] }}>
            List Layout
          </CriaTextTitle1>
          <CriaTextBody2 style={{ marginBottom: spacing[6], color: colors.text.secondary }}>
            Cards arranged in a vertical list layout with horizontal orientation.
          </CriaTextBody2>
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
        <Card style={{ padding: spacing[6] }}>
          <CriaTextTitle1  style={{ marginBottom: spacing[4] }}>
            Different Sizes
          </CriaTextTitle1>
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[6] }}>
            <div>
              <CriaTextBody2  style={{ marginBottom: spacing[3] }}>
                Small Size:
              </CriaTextBody2>
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
              <CriaTextBody2  style={{ marginBottom: spacing[3] }}>
                Medium Size (Default):
              </CriaTextBody2>
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
              <CriaTextBody2  style={{ marginBottom: spacing[3] }}>
                Large Size:
              </CriaTextBody2>
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
        <Card style={{ padding: spacing[6] }}>
          <CriaTextTitle1  style={{ marginBottom: spacing[4] }}>
            Error and Help States
          </CriaTextTitle1>
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[6] }}>
            <div>
              <CriaTextBody2  style={{ marginBottom: spacing[3] }}>
                With Error Message:
              </CriaTextBody2>
              <CardSelector
                cards={simpleCards}
                mode="single"
                error="Please select at least one option"
                variant="outlined"
                ariaLabel="Cards with error"
              />
            </div>
            <div>
              <CriaTextBody2  style={{ marginBottom: spacing[3] }}>
                With Help Text:
              </CriaTextBody2>
              <CardSelector
                cards={simpleCards}
                mode="single"
                helpText="This is helpful information about the selection"
                variant="outlined"
                ariaLabel="Cards with help text"
              />
            </div>
            <div>
              <CriaTextBody2  style={{ marginBottom: spacing[3] }}>
                Disabled State:
              </CriaTextBody2>
              <CardSelector
                cards={simpleCards}
                mode="single"
                disabled
                variant="outlined"
                ariaLabel="Disabled cards"
              />
            </div>
            <div>
              <CriaTextBody2  style={{ marginBottom: spacing[3] }}>
                Loading State:
              </CriaTextBody2>
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
        <Card style={{ padding: spacing[6] }}>
          <CriaTextTitle1  style={{ marginBottom: spacing[4] }}>
            Usage Examples
          </CriaTextTitle1>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <CriaTextBody2  style={{ marginBottom: spacing[2] }}>
                Basic Single Selection:
              </CriaTextBody2>
              <pre style={{
                backgroundColor: colors.background.secondary,
                padding: spacing[3],
                borderRadius: radii.md,
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
              <CriaTextBody2  style={{ marginBottom: spacing[2] }}>
                Multi Selection with Limits:
              </CriaTextBody2>
              <pre style={{
                backgroundColor: colors.background.secondary,
                padding: spacing[3],
                borderRadius: radii.md,
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
              <CriaTextBody2  style={{ marginBottom: spacing[2] }}>
                Custom Card Renderer:
              </CriaTextBody2>
              <pre style={{
                backgroundColor: colors.background.secondary,
                padding: spacing[3],
                borderRadius: radii.md,
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
