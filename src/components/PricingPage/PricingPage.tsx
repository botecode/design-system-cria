import React, { useState } from 'react';
import { Card } from '../Card';
import { Button } from '../Button';
import { Badge } from '../Badge';
import { CriaTextHeadline1, CriaTextHeadline2, CriaTextTitle1, CriaTextTitle2, CriaTextBody1, CriaTextBody2, CriaTextCaption } from '../TextTokens';
import { colors, spacing, typography, radii } from '../../tokens';

export type BillingPeriod = 'monthly' | 'yearly';

export interface PricingTier {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  ctaText: string;
  popular?: boolean;
  ctaVariant?: 'primary' | 'secondary' | 'outline';
}

export interface PricingPageProps extends React.HTMLAttributes<HTMLElement> {
  tiers: PricingTier[];
  title?: string;
  subtitle?: string;
  currency?: string;
  defaultBillingPeriod?: BillingPeriod;
  onTierSelect?: (tierId: string, billingPeriod: BillingPeriod, price: number) => void;
  onBillingToggle?: (billingPeriod: BillingPeriod) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({
  tiers,
  title = 'Choose Your Plan',
  subtitle = 'Select the perfect plan for your needs',
  currency = '$',
  defaultBillingPeriod = 'monthly',
  onTierSelect,
  onBillingToggle,
  className = '',
  style,
  ...props
}) => {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>(defaultBillingPeriod);

  const handleBillingToggle = (period: BillingPeriod) => {
    setBillingPeriod(period);
    onBillingToggle?.(period);
  };

  const handleTierSelect = (tier: PricingTier) => {
    const price = billingPeriod === 'monthly' ? tier.monthlyPrice : tier.yearlyPrice;
    onTierSelect?.(tier.id, billingPeriod, price);
  };

  const formatPrice = (price: number) => {
    return `${currency}${price}`;
  };

  const getSavings = (monthlyPrice: number, yearlyPrice: number) => {
    const monthlyTotal = monthlyPrice * 12;
    const savings = monthlyTotal - yearlyPrice;
    const percentage = Math.round((savings / monthlyTotal) * 100);
    return { savings, percentage };
  };

  if (tiers.length === 0) {
    return (
      <main
        className={`cria-pricing-page ${className}`}
        style={{
          padding: spacing.lg,
          textAlign: 'center',
          ...style,
        }}
        {...props}
      >
        <CriaTextHeadline2 style={{ color: colors.text.primary }}>
          No pricing tiers available
        </CriaTextHeadline2>
      </main>
    );
  }

  return (
    <main
      className={`cria-pricing-page ${className}`}
      style={{
        padding: spacing.xl,
        maxWidth: '1200px',
        margin: '0 auto',
        ...style,
      }}
      role="main"
      {...props}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: spacing.xl }}>
        <CriaTextHeadline1 
          style={{ 
            marginBottom: spacing.md,
            color: colors.text.primary,
            fontSize: typography.fontSize.display,
            lineHeight: typography.lineHeight.tight,
          }}
        >
          {title}
        </CriaTextHeadline1>
        <CriaTextTitle1 
          style={{ 
            color: colors.text.secondary,
            marginBottom: spacing.xl,
          }}
        >
          {subtitle}
        </CriaTextTitle1>

        {/* Billing Toggle */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: spacing.md,
          marginBottom: spacing.xl,
        }}>
          <CriaTextBody1 
            style={{ 
              color: billingPeriod === 'monthly' ? colors.primary[500] : colors.text.secondary,
              cursor: 'pointer',
              fontWeight: billingPeriod === 'monthly' ? '600' : '400',
            }}
            onClick={() => handleBillingToggle('monthly')}
          >
            Monthly
          </CriaTextBody1>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleBillingToggle(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
            style={{
              minWidth: '60px',
              height: '32px',
              borderRadius: radii.lg,
              position: 'relative',
              backgroundColor: billingPeriod === 'yearly' ? colors.primary[500] : colors.background.primary,
              borderColor: colors.primary[500],
            }}
            aria-label={`Switch to ${billingPeriod === 'monthly' ? 'yearly' : 'monthly'} billing`}
          >
            <div
              style={{
                position: 'absolute',
                top: spacing[0.5],
                left: billingPeriod === 'monthly' ? spacing[0.5] : '30px',
                width: '28px',
                height: '28px',
                backgroundColor: billingPeriod === 'yearly' ? colors.white : colors.primary[500],
                borderRadius: '50%',
                transition: 'left 0.3s ease',
              }}
            />
          </Button>
          
          <CriaTextBody1 
            style={{ 
              color: billingPeriod === 'yearly' ? colors.primary[500] : colors.text.secondary,
              cursor: 'pointer',
              fontWeight: billingPeriod === 'yearly' ? '600' : '400',
            }}
            onClick={() => handleBillingToggle('yearly')}
          >
            Yearly
          </CriaTextBody1>
          
          {billingPeriod === 'yearly' && (
            <Badge 
              variant="success" 
              style={{ marginLeft: spacing.sm }}
            >
              Save up to 20%
            </Badge>
          )}
        </div>
      </div>

      {/* Pricing Tiers */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: spacing.md,
        alignItems: 'stretch',
        maxWidth: '100%',
      }}>
        {tiers.map((tier) => {
          const price = billingPeriod === 'monthly' ? tier.monthlyPrice : tier.yearlyPrice;
          const savings = getSavings(tier.monthlyPrice, tier.yearlyPrice);
          
          return (
            <Card
              key={tier.id}
              style={{
                position: 'relative',
                padding: spacing.lg,
                textAlign: 'center',
                border: tier.popular ? `2px solid ${colors.primary[500]}` : `1px solid ${colors.border.medium}`,
                borderRadius: radii.lg,
                backgroundColor: colors.background.primary,
                boxShadow: tier.popular ? `0 4px 20px ${colors.primary}15` : `0 2px 8px ${colors.border.light}`,
                transform: tier.popular ? 'scale(1.02)' : 'scale(1)',
                transition: 'all 0.2s ease',
                minHeight: '400px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {tier.popular && (
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                }}>
                  <Badge 
                    variant="primary" 
                    style={{
                      backgroundColor: colors.primary[500],
                      color: colors.white,
                      padding: `${spacing.xs} ${spacing.md}`,
                      borderRadius: radii.xl,
                      fontSize: typography.fontSize.bodySmall,
                      fontWeight: typography.fontWeight.semiBold,
                    }}
                  >
                    Most Popular
                  </Badge>
                </div>
              )}

              <div style={{ marginBottom: spacing.lg, flex: '0 0 auto' }}>
                <CriaTextTitle1 
                  style={{ 
                    marginBottom: spacing.xs,
                    color: colors.text.primary,
                    fontSize: typography.fontSize.h3,
                  }}
                >
                  {tier.name}
                </CriaTextTitle1>
                <CriaTextBody1 
                  style={{ 
                    color: colors.text.secondary,
                    marginBottom: spacing.md,
                    fontSize: typography.fontSize.bodySmall,
                  }}
                >
                  {tier.description}
                </CriaTextBody1>

                <div style={{ marginBottom: spacing.sm }}>
                  <CriaTextHeadline1 
                    style={{ 
                      color: colors.primary[500],
                      fontSize: typography.fontSize.h1,
                      lineHeight: typography.lineHeight.tight,
                      marginBottom: spacing.xs,
                    }}
                  >
                    {formatPrice(price)}
                  </CriaTextHeadline1>
                  <CriaTextBody1 
                    style={{ 
                      color: colors.text.secondary,
                      fontSize: typography.fontSize.bodySmall,
                    }}
                  >
                    /{billingPeriod === 'monthly' ? 'month' : 'year'}
                  </CriaTextBody1>
                </div>

                {billingPeriod === 'yearly' && savings.percentage > 0 && (
                  <CriaTextCaption 
                    style={{ 
                      color: colors.success[500],
                      fontWeight: typography.fontWeight.medium,
                    }}
                  >
                    Save {savings.percentage}%
                  </CriaTextCaption>
                )}
              </div>

              <div style={{ marginBottom: spacing.lg, flex: '1 1 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  textAlign: 'left',
                }}>
                  {tier.features.slice(0, 5).map((feature, index) => (
                    <li
                      key={index}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: spacing.xs,
                        color: colors.text.primary,
                      }}
                    >
                      <div
                        style={{
                          width: '16px',
                          height: '16px',
                          borderRadius: '50%',
                          backgroundColor: colors.success,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginRight: spacing.sm,
                          flexShrink: 0,
                        }}
                      >
                        <span style={{ color: colors.white, fontSize: '10px', fontWeight: 'bold' }}>✓</span>
                      </div>
                      <CriaTextBody2 style={{ color: colors.text.primary, fontSize: typography.fontSize.bodySmall }}>
                        {feature}
                      </CriaTextBody2>
                    </li>
                  ))}
                  {tier.features.length > 5 && (
                    <li style={{ marginTop: spacing.xs }}>
                      <CriaTextCaption style={{ color: colors.text.secondary, fontStyle: 'italic' }}>
                        +{tier.features.length - 5} more features
                      </CriaTextCaption>
                    </li>
                  )}
                </ul>
              </div>

              <Button
                variant={tier.ctaVariant || (tier.popular ? 'primary' : 'outline')}
                size="md"
                onClick={() => handleTierSelect(tier)}
                style={{
                  width: '100%',
                  padding: `${spacing.sm} ${spacing.md}`,
                  fontSize: typography.fontSize.bodySmall,
                  fontWeight: typography.fontWeight.semiBold,
                  flex: '0 0 auto',
                }}
              >
                {tier.ctaText}
              </Button>
            </Card>
          );
        })}
      </div>

      {/* Footer */}
      <div style={{
        textAlign: 'center',
        marginTop: spacing.xl,
        padding: spacing.lg,
        backgroundColor: colors.background.secondary,
        borderRadius: radii.lg,
      }}>
        <CriaTextBody1 
          style={{ 
            color: colors.text.secondary,
            marginBottom: spacing.sm,
          }}
        >
          All plans include 14-day free trial
        </CriaTextBody1>
        <CriaTextCaption 
          style={{ 
            color: colors.text.tertiary,
          }}
        >
          No credit card required • Cancel anytime
        </CriaTextCaption>
      </div>
    </main>
  );
};

export default PricingPage;
