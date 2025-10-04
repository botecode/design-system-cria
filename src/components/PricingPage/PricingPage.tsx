import React, { useState } from 'react';
import { Card } from '../Card';
import { Button } from '../Button';
import { Badge } from '../Badge';
import { Typography } from '../Typography';
import { colors, spacing, typography } from '../../tokens';

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
        <Typography variant="h2" weight="semiBold" style={{ color: colors.text.primary }}>
          No pricing tiers available
        </Typography>
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
        <Typography 
          variant="h1" 
          weight="bold" 
          style={{ 
            marginBottom: spacing.md,
            color: colors.text.primary,
            fontSize: typography.fontSize.display,
            lineHeight: typography.lineHeight.tight,
          }}
        >
          {title}
        </Typography>
        <Typography 
          variant="h3" 
          style={{ 
            color: colors.text.secondary,
            marginBottom: spacing.xl,
          }}
        >
          {subtitle}
        </Typography>

        {/* Billing Toggle */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: spacing.md,
          marginBottom: spacing.xl,
        }}>
          <Typography 
            variant="body" 
            weight={billingPeriod === 'monthly' ? 'semiBold' : 'normal'}
            style={{ 
              color: billingPeriod === 'monthly' ? colors.primary : colors.text.secondary,
              cursor: 'pointer',
            }}
            onClick={() => handleBillingToggle('monthly')}
          >
            Monthly
          </Typography>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleBillingToggle(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
            style={{
              minWidth: '60px',
              height: '32px',
              borderRadius: '16px',
              position: 'relative',
              backgroundColor: billingPeriod === 'yearly' ? colors.primary : colors.background.primary,
              borderColor: colors.primary,
            }}
            aria-label={`Switch to ${billingPeriod === 'monthly' ? 'yearly' : 'monthly'} billing`}
          >
            <div
              style={{
                position: 'absolute',
                top: '2px',
                left: billingPeriod === 'monthly' ? '2px' : '30px',
                width: '28px',
                height: '28px',
                backgroundColor: billingPeriod === 'yearly' ? colors.white : colors.primary,
                borderRadius: '50%',
                transition: 'left 0.3s ease',
              }}
            />
          </Button>
          
          <Typography 
            variant="body" 
            weight={billingPeriod === 'yearly' ? 'semiBold' : 'normal'}
            style={{ 
              color: billingPeriod === 'yearly' ? colors.primary : colors.text.secondary,
              cursor: 'pointer',
            }}
            onClick={() => handleBillingToggle('yearly')}
          >
            Yearly
          </Typography>
          
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
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: spacing.lg,
        alignItems: 'stretch',
      }}>
        {tiers.map((tier) => {
          const price = billingPeriod === 'monthly' ? tier.monthlyPrice : tier.yearlyPrice;
          const savings = getSavings(tier.monthlyPrice, tier.yearlyPrice);
          
          return (
            <Card
              key={tier.id}
              style={{
                position: 'relative',
                padding: spacing.xl,
                textAlign: 'center',
                border: tier.popular ? `2px solid ${colors.primary}` : `1px solid ${colors.border.medium}`,
                borderRadius: '16px',
                backgroundColor: tier.popular ? colors.background.primary : colors.background.primary,
                boxShadow: tier.popular ? `0 8px 32px ${colors.primary}20` : `0 4px 16px ${colors.border.light}`,
                transform: tier.popular ? 'scale(1.05)' : 'scale(1)',
                transition: 'all 0.3s ease',
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
                      backgroundColor: colors.primary,
                      color: colors.white,
                      padding: `${spacing.xs} ${spacing.md}`,
                      borderRadius: '20px',
                      fontSize: typography.fontSize.bodySmall,
                      fontWeight: typography.fontWeight.semiBold,
                    }}
                  >
                    Most Popular
                  </Badge>
                </div>
              )}

              <div style={{ marginBottom: spacing.lg }}>
                <Typography 
                  variant="h3" 
                  weight="semiBold" 
                  style={{ 
                    marginBottom: spacing.sm,
                    color: colors.text.primary,
                  }}
                >
                  {tier.name}
                </Typography>
                <Typography 
                  variant="body" 
                  style={{ 
                    color: colors.text.secondary,
                    marginBottom: spacing.lg,
                  }}
                >
                  {tier.description}
                </Typography>

                <div style={{ marginBottom: spacing.md }}>
                  <Typography 
                    variant="h1" 
                    weight="bold" 
                    style={{ 
                      color: colors.primary,
            fontSize: typography.fontSize.display,
            lineHeight: typography.lineHeight.tight,
                      marginBottom: spacing.xs,
                    }}
                  >
                    {formatPrice(price)}
                  </Typography>
                  <Typography 
                    variant="body" 
                    style={{ 
                      color: colors.text.secondary,
                    }}
                  >
                    /{billingPeriod === 'monthly' ? 'month' : 'year'}
                  </Typography>
                </div>

                {billingPeriod === 'yearly' && savings.percentage > 0 && (
                  <Typography 
                    variant="caption" 
                    style={{ 
                      color: colors.success,
                      fontWeight: typography.fontWeight.medium,
                    }}
                  >
                    Save {savings.percentage}% (${savings.savings}/year)
                  </Typography>
                )}
              </div>

              <div style={{ marginBottom: spacing.xl }}>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  textAlign: 'left',
                }}>
                  {tier.features.map((feature, index) => (
                    <li
                      key={index}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: spacing.sm,
                        color: colors.text.primary,
                      }}
                    >
                      <div
                        style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          backgroundColor: colors.success,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginRight: spacing.sm,
                          flexShrink: 0,
                        }}
                      >
                        <span style={{ color: colors.white, fontSize: '12px', fontWeight: 'bold' }}>✓</span>
                      </div>
                      <Typography variant="body2" style={{ color: colors.text.primary }}>
                        {feature}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                variant={tier.ctaVariant || (tier.popular ? 'primary' : 'outline')}
                size="lg"
                onClick={() => handleTierSelect(tier)}
                style={{
                  width: '100%',
                  padding: `${spacing.md} ${spacing.lg}`,
                    fontSize: typography.fontSize.body,
                    fontWeight: typography.fontWeight.semiBold,
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
        borderRadius: '12px',
      }}>
        <Typography 
          variant="body" 
          style={{ 
            color: colors.text.secondary,
            marginBottom: spacing.sm,
          }}
        >
          All plans include 14-day free trial
        </Typography>
        <Typography 
          variant="caption" 
          style={{ 
            color: colors.text.tertiary,
          }}
        >
          No credit card required • Cancel anytime
        </Typography>
      </div>
    </main>
  );
};

export default PricingPage;
