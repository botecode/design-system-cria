import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { PricingPage } from '../PricingPage';

const mockPricingTiers = [
  {
    id: 'basic',
    name: 'Basic',
    description: 'Perfect for individuals',
    monthlyPrice: 9,
    yearlyPrice: 90,
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    ctaText: 'Get Started',
    popular: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'Best for teams',
    monthlyPrice: 29,
    yearlyPrice: 290,
    features: ['All Basic features', 'Feature 4', 'Feature 5', 'Feature 6'],
    ctaText: 'Start Free Trial',
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For large organizations',
    monthlyPrice: 99,
    yearlyPrice: 990,
    features: ['All Pro features', 'Feature 7', 'Feature 8', 'Feature 9', 'Feature 10'],
    ctaText: 'Contact Sales',
    popular: false,
  },
];

describe('PricingPage', () => {
  it('renders with correct pricing tiers', () => {
    render(<PricingPage tiers={mockPricingTiers} />);
    
    expect(screen.getByText('Basic')).toBeInTheDocument();
    expect(screen.getByText('Pro')).toBeInTheDocument();
    expect(screen.getByText('Enterprise')).toBeInTheDocument();
    
    expect(screen.getByText('Perfect for individuals')).toBeInTheDocument();
    expect(screen.getByText('Best for teams')).toBeInTheDocument();
    expect(screen.getByText('For large organizations')).toBeInTheDocument();
  });

  it('renders monthly pricing by default', () => {
    render(<PricingPage tiers={mockPricingTiers} />);
    
    expect(screen.getByText('$9')).toBeInTheDocument();
    expect(screen.getByText('$29')).toBeInTheDocument();
    expect(screen.getByText('$99')).toBeInTheDocument();
    
    expect(screen.getAllByText('/month').length).toBeGreaterThan(0);
  });

  it('renders yearly pricing when toggled', () => {
    render(<PricingPage tiers={mockPricingTiers} />);
    
    const yearlyToggle = screen.getByRole('button', { name: /yearly/i });
    fireEvent.click(yearlyToggle);
    
    expect(screen.getByText('$90')).toBeInTheDocument();
    expect(screen.getByText('$290')).toBeInTheDocument();
    expect(screen.getByText('$990')).toBeInTheDocument();
    
    expect(screen.getAllByText('/year').length).toBeGreaterThan(0);
  });

  it('displays popular badge for popular tier', () => {
    render(<PricingPage tiers={mockPricingTiers} />);
    
    expect(screen.getByText('Most Popular')).toBeInTheDocument();
  });

  it('renders all features for each tier', () => {
    render(<PricingPage tiers={mockPricingTiers} />);
    
    expect(screen.getByText('Feature 1')).toBeInTheDocument();
    expect(screen.getByText('Feature 2')).toBeInTheDocument();
    expect(screen.getByText('Feature 3')).toBeInTheDocument();
    expect(screen.getByText('All Basic features')).toBeInTheDocument();
    expect(screen.getByText('Feature 4')).toBeInTheDocument();
    expect(screen.getByText('All Pro features')).toBeInTheDocument();
    expect(screen.getByText('Feature 7')).toBeInTheDocument();
  });

  it('renders call-to-action buttons', () => {
    render(<PricingPage tiers={mockPricingTiers} />);
    
    expect(screen.getByText('Get Started')).toBeInTheDocument();
    expect(screen.getByText('Start Free Trial')).toBeInTheDocument();
    expect(screen.getByText('Contact Sales')).toBeInTheDocument();
  });

  it('calls onTierSelect when CTA button is clicked', () => {
    const mockOnTierSelect = jest.fn();
    render(<PricingPage tiers={mockPricingTiers} onTierSelect={mockOnTierSelect} />);
    
    const basicButton = screen.getByText('Get Started');
    fireEvent.click(basicButton);
    
    expect(mockOnTierSelect).toHaveBeenCalledWith('basic', 'monthly', 9);
  });

  it('calls onTierSelect with yearly pricing when yearly is selected', () => {
    const mockOnTierSelect = jest.fn();
    render(<PricingPage tiers={mockPricingTiers} onTierSelect={mockOnTierSelect} />);
    
    const yearlyToggle = screen.getByRole('button', { name: /yearly/i });
    fireEvent.click(yearlyToggle);
    
    const basicButton = screen.getByText('Get Started');
    fireEvent.click(basicButton);
    
    expect(mockOnTierSelect).toHaveBeenCalledWith('basic', 'yearly', 90);
  });

  it('calls onBillingToggle when billing toggle is clicked', () => {
    const mockOnBillingToggle = jest.fn();
    render(<PricingPage tiers={mockPricingTiers} onBillingToggle={mockOnBillingToggle} />);
    
    const yearlyToggle = screen.getByRole('button', { name: /yearly/i });
    fireEvent.click(yearlyToggle);
    
    expect(mockOnBillingToggle).toHaveBeenCalledWith('yearly');
  });

  it('applies custom className', () => {
    render(<PricingPage tiers={mockPricingTiers} className="custom-pricing" />);
    
    const pricingPage = screen.getByRole('main');
    expect(pricingPage).toHaveClass('cria-pricing-page', 'custom-pricing');
  });

  it('applies custom style', () => {
    render(<PricingPage tiers={mockPricingTiers} style={{ margin: '20px' }} />);
    
    const pricingPage = screen.getByRole('main');
    expect(pricingPage).toHaveStyle({ margin: '20px' });
  });

  it('renders with custom title and subtitle', () => {
    render(
      <PricingPage 
        tiers={mockPricingTiers} 
        title="Custom Pricing" 
        subtitle="Choose your plan" 
      />
    );
    
    expect(screen.getByText('Custom Pricing')).toBeInTheDocument();
    expect(screen.getByText('Choose your plan')).toBeInTheDocument();
  });

  it('a11y: pricing information announced to screen readers', () => {
    render(<PricingPage tiers={mockPricingTiers} />);
    
    const pricingPage = screen.getByRole('main');
    expect(pricingPage).toBeInTheDocument();
    
    // Check for proper heading structure
    expect(screen.getAllByRole('heading', { level: 1 }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole('heading', { level: 3 }).length).toBeGreaterThan(0);
    
    // Check for proper button roles
    const ctaButtons = screen.getAllByRole('button');
    expect(ctaButtons.length).toBeGreaterThan(0);
  });

  it('keyboard navigation works correctly', () => {
    render(<PricingPage tiers={mockPricingTiers} />);
    
    const yearlyToggle = screen.getByRole('button', { name: /yearly/i });
    yearlyToggle.focus();
    expect(yearlyToggle).toHaveFocus();
    
    fireEvent.click(yearlyToggle);
    expect(screen.getAllByText('/year').length).toBeGreaterThan(0);
  });

  it('renders with different billing periods', () => {
    render(<PricingPage tiers={mockPricingTiers} defaultBillingPeriod="yearly" />);
    
    expect(screen.getByText('$90')).toBeInTheDocument();
    expect(screen.getByText('$290')).toBeInTheDocument();
    expect(screen.getByText('$990')).toBeInTheDocument();
    expect(screen.getAllByText('/year').length).toBeGreaterThan(0);
  });

  it('handles empty tiers array', () => {
    render(<PricingPage tiers={[]} />);
    
    expect(screen.getByText('No pricing tiers available')).toBeInTheDocument();
  });

  it('renders with custom currency symbol', () => {
    render(<PricingPage tiers={mockPricingTiers} currency="€" />);
    
    expect(screen.getByText('€9')).toBeInTheDocument();
    expect(screen.getByText('€29')).toBeInTheDocument();
    expect(screen.getByText('€99')).toBeInTheDocument();
  });
});
