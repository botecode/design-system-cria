import React, { useState } from 'react';
import { PricingPage } from './PricingPage';
import { CriaTextHeadline1, CriaTextTitle1, CriaTextBody1, CriaTextBody2 } from '../TextTokens';
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
      description: 'Perfect for individuals',
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
      description: 'Best for growing teams',
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
        'Advanced security',
      ],
      ctaText: 'Start Free Trial',
      popular: true,
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For large organizations',
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: [
        'Everything in Professional',
        'Unlimited storage',
        '24/7 phone support',
        'Custom reporting',
        'SSO integration',
        'Dedicated account manager',
        'Custom training',
        'White-label options',
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
    <div style={{ padding: spacing[6], maxWidth: '1200px', margin: '0 auto' }}>
      <CriaTextHeadline1 style={{ marginBottom: spacing[4] }}>
        Pricing Page Demo
      </CriaTextHeadline1>
      
      <CriaTextBody1 style={{ marginBottom: spacing[8] }}>
        The Pricing Page component provides a comprehensive pricing display with multiple tiers, 
        billing period toggle, and interactive selection. Perfect for SaaS applications and 
        subscription-based services.
      </CriaTextBody1>

      {/* Interactive Demo Controls */}
      <Card style={{ marginBottom: spacing[8], padding: spacing[4] }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: spacing[4], flexWrap: 'wrap' }}>
          <Button onClick={resetSelection} variant="outline">
            Reset Selection
          </Button>
          {selectedTier && (
            <div style={{ display: 'flex', alignItems: 'center', gap: spacing[2] }}>
              <CriaTextBody2 style={{ color: colors.text.secondary }}>
                Selected:
              </CriaTextBody2>
              <CriaTextBody2 style={{ fontWeight: '600' }}>
                {pricingTiers.find(t => t.id === selectedTier)?.name} - 
                ${selectedPrice}/{selectedBilling === 'monthly' ? 'month' : 'year'}
              </CriaTextBody2>
            </div>
          )}
        </div>
      </Card>

      <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[8] }}>
        {/* Standard Pricing Page */}
        <Card style={{ padding: spacing[6] }}>
          <CriaTextTitle1  style={{ marginBottom: spacing[4] }}>
            Standard Pricing Page
          </CriaTextBody2>
          <PricingPage
            tiers={pricingTiers}
            onTierSelect={handleTierSelect}
            onBillingToggle={handleBillingToggle}
          />
        </Card>

        {/* Custom Title and Subtitle */}
        <Card style={{ padding: spacing[6] }}>
          <CriaTextTitle1  style={{ marginBottom: spacing[4] }}>
            Custom Title and Subtitle
          </CriaTextBody2>
          <PricingPage
            tiers={pricingTiers}
            title="Flexible Pricing Plans"
            subtitle="Choose the plan that fits your business needs"
            onTierSelect={handleTierSelect}
            onBillingToggle={handleBillingToggle}
          />
        </Card>

        {/* Euro Currency */}
        <Card style={{ padding: spacing[6] }}>
          <CriaTextTitle1  style={{ marginBottom: spacing[4] }}>
            Euro Currency Pricing
          </CriaTextBody2>
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
        <Card style={{ padding: spacing[6] }}>
          <CriaTextTitle1  style={{ marginBottom: spacing[4] }}>
            Default to Yearly Billing
          </CriaTextBody2>
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
        <Card style={{ padding: spacing[6] }}>
          <CriaTextTitle1  style={{ marginBottom: spacing[4] }}>
            Minimal Pricing (2 Tiers)
          </CriaTextBody2>
          <PricingPage
            tiers={pricingTiers.slice(0, 2)}
            title="Simple Pricing"
            subtitle="Just two plans to choose from"
            onTierSelect={handleTierSelect}
            onBillingToggle={handleBillingToggle}
          />
        </Card>

        {/* Single Tier */}
        <Card style={{ padding: spacing[6] }}>
          <CriaTextTitle1  style={{ marginBottom: spacing[4] }}>
            Single Tier Pricing
          </CriaTextBody2>
          <PricingPage
            tiers={[pricingTiers[1]]} // Just the Professional tier
            title="One Plan, All Features"
            subtitle="Everything you need in one simple plan"
            onTierSelect={handleTierSelect}
            onBillingToggle={handleBillingToggle}
          />
        </Card>

        {/* Empty State */}
        <Card style={{ padding: spacing[6] }}>
          <CriaTextTitle1  style={{ marginBottom: spacing[4] }}>
            Empty State
          </CriaTextBody2>
          <PricingPage
            tiers={[]}
            title="Pricing Coming Soon"
            subtitle="We're working on our pricing plans"
          />
        </Card>

        {/* Usage Examples */}
        <Card style={{ padding: spacing[6] }}>
          <CriaTextTitle1  style={{ marginBottom: spacing[4] }}>
            Usage Examples
          </CriaTextBody2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
            <div>
              <CriaTextBody2  style={{ marginBottom: spacing[2] }}>
                Basic Usage:
              </CriaTextBody2>
              <pre style={{
                backgroundColor: colors.background.secondary,
                padding: spacing[3],
                borderRadius: radii.md,
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
              <CriaTextBody2  style={{ marginBottom: spacing[2] }}>
                With Custom Configuration:
              </CriaTextBody2>
              <pre style={{
                backgroundColor: colors.background.secondary,
                padding: spacing[3],
                borderRadius: radii.md,
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
