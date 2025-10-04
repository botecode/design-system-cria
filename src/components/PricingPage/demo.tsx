import React, { useState } from 'react';
import { PricingPage } from './PricingPage';
import { Typography } from '../Typography';
import { Card } from '../Card';
import { Button } from '../Button';
import { colors, spacing } from '../../tokens';

export const PricingPageDemo: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [selectedBilling, setSelectedBilling] = useState<string>('monthly');
  const [selectedPrice, setSelectedPrice] = useState<number | null>(null);

  const pricingTiers = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for individuals and small projects',
      monthlyPrice: 9,
      yearlyPrice: 90,
      features: [
        'Up to 5 projects',
        '10GB storage',
        'Basic support',
        'Email notifications',
        'Mobile app access',
      ],
      ctaText: 'Get Started',
      popular: false,
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Best for growing teams and businesses',
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: [
        'Unlimited projects',
        '100GB storage',
        'Priority support',
        'Advanced analytics',
        'Team collaboration',
        'Custom integrations',
        'API access',
      ],
      ctaText: 'Start Free Trial',
      popular: true,
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For large organizations with advanced needs',
      monthlyPrice: 99,
      yearlyPrice: 990,
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
      ctaText: 'Contact Sales',
      popular: false,
      ctaVariant: 'secondary' as const,
    },
  ];

  const handleTierSelect = (tierId: string, billingPeriod: string, price: number) => {
    setSelectedTier(tierId);
    setSelectedBilling(billingPeriod);
    setSelectedPrice(price);
  };

  const handleBillingToggle = (billingPeriod: string) => {
    setSelectedBilling(billingPeriod);
  };

  const resetSelection = () => {
    setSelectedTier(null);
    setSelectedBilling('monthly');
    setSelectedPrice(null);
  };

  return (
    <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
      <Typography variant="title1" weight="bold" style={{ marginBottom: '16px' }}>
        Pricing Page Demo
      </Typography>
      
      <Typography variant="body" style={{ marginBottom: '32px' }}>
        The Pricing Page component provides a comprehensive pricing display with multiple tiers, 
        billing period toggle, and interactive selection. Perfect for SaaS applications and 
        subscription-based services.
      </Typography>

      {/* Interactive Demo Controls */}
      <Card style={{ marginBottom: '32px', padding: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <Button onClick={resetSelection} variant="outline">
            Reset Selection
          </Button>
          {selectedTier && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Typography variant="body2" color="secondary">
                Selected:
              </Typography>
              <Typography variant="body2" weight="semiBold">
                {pricingTiers.find(t => t.id === selectedTier)?.name} - 
                ${selectedPrice}/{selectedBilling === 'monthly' ? 'month' : 'year'}
              </Typography>
            </div>
          )}
        </div>
      </Card>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {/* Standard Pricing Page */}
        <Card style={{ padding: '24px' }}>
          <Typography variant="h3" weight="semiBold" style={{ marginBottom: '16px' }}>
            Standard Pricing Page
          </Typography>
          <PricingPage
            tiers={pricingTiers}
            onTierSelect={handleTierSelect}
            onBillingToggle={handleBillingToggle}
          />
        </Card>

        {/* Custom Title and Subtitle */}
        <Card style={{ padding: '24px' }}>
          <Typography variant="h3" weight="semiBold" style={{ marginBottom: '16px' }}>
            Custom Title and Subtitle
          </Typography>
          <PricingPage
            tiers={pricingTiers}
            title="Flexible Pricing Plans"
            subtitle="Choose the plan that fits your business needs"
            onTierSelect={handleTierSelect}
            onBillingToggle={handleBillingToggle}
          />
        </Card>

        {/* Euro Currency */}
        <Card style={{ padding: '24px' }}>
          <Typography variant="h3" weight="semiBold" style={{ marginBottom: '16px' }}>
            Euro Currency Pricing
          </Typography>
          <PricingPage
            tiers={pricingTiers.map(tier => ({
              ...tier,
              monthlyPrice: Math.round(tier.monthlyPrice * 0.85), // Approximate EUR conversion
              yearlyPrice: Math.round(tier.yearlyPrice * 0.85),
            }))}
            currency="€"
            title="European Pricing"
            subtitle="Pricing in Euros for European customers"
            onTierSelect={handleTierSelect}
            onBillingToggle={handleBillingToggle}
          />
        </Card>

        {/* Default to Yearly */}
        <Card style={{ padding: '24px' }}>
          <Typography variant="h3" weight="semiBold" style={{ marginBottom: '16px' }}>
            Default to Yearly Billing
          </Typography>
          <PricingPage
            tiers={pricingTiers}
            defaultBillingPeriod="yearly"
            title="Save with Yearly Plans"
            subtitle="Get 2 months free when you pay annually"
            onTierSelect={handleTierSelect}
            onBillingToggle={handleBillingToggle}
          />
        </Card>

        {/* Minimal Pricing (2 tiers) */}
        <Card style={{ padding: '24px' }}>
          <Typography variant="h3" weight="semiBold" style={{ marginBottom: '16px' }}>
            Minimal Pricing (2 Tiers)
          </Typography>
          <PricingPage
            tiers={pricingTiers.slice(0, 2)}
            title="Simple Pricing"
            subtitle="Just two plans to choose from"
            onTierSelect={handleTierSelect}
            onBillingToggle={handleBillingToggle}
          />
        </Card>

        {/* Single Tier */}
        <Card style={{ padding: '24px' }}>
          <Typography variant="h3" weight="semiBold" style={{ marginBottom: '16px' }}>
            Single Tier Pricing
          </Typography>
          <PricingPage
            tiers={[pricingTiers[1]]} // Just the Professional tier
            title="One Plan, All Features"
            subtitle="Everything you need in one simple plan"
            onTierSelect={handleTierSelect}
            onBillingToggle={handleBillingToggle}
          />
        </Card>

        {/* Empty State */}
        <Card style={{ padding: '24px' }}>
          <Typography variant="h3" weight="semiBold" style={{ marginBottom: '16px' }}>
            Empty State
          </Typography>
          <PricingPage
            tiers={[]}
            title="Pricing Coming Soon"
            subtitle="We're working on our pricing plans"
          />
        </Card>

        {/* Usage Examples */}
        <Card style={{ padding: '24px' }}>
          <Typography variant="h3" weight="semiBold" style={{ marginBottom: '16px' }}>
            Usage Examples
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <Typography variant="body2" weight="medium" style={{ marginBottom: '8px' }}>
                Basic Usage:
              </Typography>
              <pre style={{
                backgroundColor: colors.background.secondary,
                padding: '12px',
                borderRadius: '8px',
                fontSize: '14px',
                overflow: 'auto',
                color: colors.text.primary,
              }}>
{`<PricingPage
  tiers={pricingTiers}
  onTierSelect={(tierId, billing, price) => {
    console.log('Selected:', tierId, billing, price);
  }}
/>`}
              </pre>
            </div>

            <div>
              <Typography variant="body2" weight="medium" style={{ marginBottom: '8px' }}>
                With Custom Configuration:
              </Typography>
              <pre style={{
                backgroundColor: colors.background.secondary,
                padding: '12px',
                borderRadius: '8px',
                fontSize: '14px',
                overflow: 'auto',
                color: colors.text.primary,
              }}>
{`<PricingPage
  tiers={pricingTiers}
  title="Choose Your Plan"
  subtitle="Select the perfect plan for your needs"
  currency="€"
  defaultBillingPeriod="yearly"
  onTierSelect={handleTierSelect}
  onBillingToggle={handleBillingToggle}
/>`}
              </pre>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PricingPageDemo;
