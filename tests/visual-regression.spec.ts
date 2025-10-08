import { test, expect } from '@playwright/test';

// Test configuration for visual regression testing
test.describe('Dark Mode Visual Regression Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the test page
    await page.goto('http://localhost:3003');
    
    // Wait for the page to load
    await page.waitForLoadState('networkidle');
  });

  test('should match light theme screenshot', async ({ page }) => {
    // Ensure we're in light mode
    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'light');
      document.documentElement.classList.remove('dark');
    });
    
    // Wait for theme to apply
    await page.waitForTimeout(100);
    
    // Take screenshot of the entire page
    await expect(page).toHaveScreenshot('light-theme-full-page.png');
  });

  test('should match dark theme screenshot', async ({ page }) => {
    // Ensure we're in dark mode
    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.documentElement.classList.add('dark');
    });
    
    // Wait for theme to apply
    await page.waitForTimeout(100);
    
    // Take screenshot of the entire page
    await expect(page).toHaveScreenshot('dark-theme-full-page.png');
  });

  test('should match theme toggle component in light mode', async ({ page }) => {
    // Set light theme
    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'light');
      document.documentElement.classList.remove('dark');
    });
    
    // Find theme toggle component
    const themeToggle = page.locator('[data-testid="theme-toggle"]').first();
    await expect(themeToggle).toBeVisible();
    
    // Take screenshot of theme toggle
    await expect(themeToggle).toHaveScreenshot('theme-toggle-light.png');
  });

  test('should match theme toggle component in dark mode', async ({ page }) => {
    // Set dark theme
    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.documentElement.classList.add('dark');
    });
    
    // Find theme toggle component
    const themeToggle = page.locator('[data-testid="theme-toggle"]').first();
    await expect(themeToggle).toBeVisible();
    
    // Take screenshot of theme toggle
    await expect(themeToggle).toHaveScreenshot('theme-toggle-dark.png');
  });

  test('should match button components in light mode', async ({ page }) => {
    // Set light theme
    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'light');
      document.documentElement.classList.remove('dark');
    });
    
    // Find button components
    const buttonSection = page.locator('[data-testid="button-section"]');
    await expect(buttonSection).toBeVisible();
    
    // Take screenshot of buttons
    await expect(buttonSection).toHaveScreenshot('buttons-light.png');
  });

  test('should match button components in dark mode', async ({ page }) => {
    // Set dark theme
    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.documentElement.classList.add('dark');
    });
    
    // Find button components
    const buttonSection = page.locator('[data-testid="button-section"]');
    await expect(buttonSection).toBeVisible();
    
    // Take screenshot of buttons
    await expect(buttonSection).toHaveScreenshot('buttons-dark.png');
  });

  test('should match card components in light mode', async ({ page }) => {
    // Set light theme
    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'light');
      document.documentElement.classList.remove('dark');
    });
    
    // Find card components
    const cardSection = page.locator('[data-testid="card-section"]');
    await expect(cardSection).toBeVisible();
    
    // Take screenshot of cards
    await expect(cardSection).toHaveScreenshot('cards-light.png');
  });

  test('should match card components in dark mode', async ({ page }) => {
    // Set dark theme
    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.documentElement.classList.add('dark');
    });
    
    // Find card components
    const cardSection = page.locator('[data-testid="card-section"]');
    await expect(cardSection).toBeVisible();
    
    // Take screenshot of cards
    await expect(cardSection).toHaveScreenshot('cards-dark.png');
  });

  test('should match input components in light mode', async ({ page }) => {
    // Set light theme
    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'light');
      document.documentElement.classList.remove('dark');
    });
    
    // Find input components
    const inputSection = page.locator('[data-testid="input-section"]');
    await expect(inputSection).toBeVisible();
    
    // Take screenshot of inputs
    await expect(inputSection).toHaveScreenshot('inputs-light.png');
  });

  test('should match input components in dark mode', async ({ page }) => {
    // Set dark theme
    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.documentElement.classList.add('dark');
    });
    
    // Find input components
    const inputSection = page.locator('[data-testid="input-section"]');
    await expect(inputSection).toBeVisible();
    
    // Take screenshot of inputs
    await expect(inputSection).toHaveScreenshot('inputs-dark.png');
  });

  test('should match modal component in light mode', async ({ page }) => {
    // Set light theme
    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'light');
      document.documentElement.classList.remove('dark');
    });
    
    // Open modal
    await page.click('[data-testid="open-modal"]');
    await page.waitForSelector('[role="dialog"]');
    
    // Take screenshot of modal
    const modal = page.locator('[role="dialog"]');
    await expect(modal).toHaveScreenshot('modal-light.png');
  });

  test('should match modal component in dark mode', async ({ page }) => {
    // Set dark theme
    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.documentElement.classList.add('dark');
    });
    
    // Open modal
    await page.click('[data-testid="open-modal"]');
    await page.waitForSelector('[role="dialog"]');
    
    // Take screenshot of modal
    const modal = page.locator('[role="dialog"]');
    await expect(modal).toHaveScreenshot('modal-dark.png');
  });

  test('should match navigation component in light mode', async ({ page }) => {
    // Set light theme
    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'light');
      document.documentElement.classList.remove('dark');
    });
    
    // Find navigation component
    const navigation = page.locator('[data-testid="navigation"]');
    await expect(navigation).toBeVisible();
    
    // Take screenshot of navigation
    await expect(navigation).toHaveScreenshot('navigation-light.png');
  });

  test('should match navigation component in dark mode', async ({ page }) => {
    // Set dark theme
    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.documentElement.classList.add('dark');
    });
    
    // Find navigation component
    const navigation = page.locator('[data-testid="navigation"]');
    await expect(navigation).toBeVisible();
    
    // Take screenshot of navigation
    await expect(navigation).toHaveScreenshot('navigation-dark.png');
  });

  test('should match typography components in light mode', async ({ page }) => {
    // Set light theme
    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'light');
      document.documentElement.classList.remove('dark');
    });
    
    // Find typography section
    const typographySection = page.locator('[data-testid="typography-section"]');
    await expect(typographySection).toBeVisible();
    
    // Take screenshot of typography
    await expect(typographySection).toHaveScreenshot('typography-light.png');
  });

  test('should match typography components in dark mode', async ({ page }) => {
    // Set dark theme
    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.documentElement.classList.add('dark');
    });
    
    // Find typography section
    const typographySection = page.locator('[data-testid="typography-section"]');
    await expect(typographySection).toBeVisible();
    
    // Take screenshot of typography
    await expect(typographySection).toHaveScreenshot('typography-dark.png');
  });

  test('should match background components in light mode', async ({ page }) => {
    // Set light theme
    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'light');
      document.documentElement.classList.remove('dark');
    });
    
    // Find background section
    const backgroundSection = page.locator('[data-testid="background-section"]');
    await expect(backgroundSection).toBeVisible();
    
    // Take screenshot of backgrounds
    await expect(backgroundSection).toHaveScreenshot('backgrounds-light.png');
  });

  test('should match background components in dark mode', async ({ page }) => {
    // Set dark theme
    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.documentElement.classList.add('dark');
    });
    
    // Find background section
    const backgroundSection = page.locator('[data-testid="background-section"]');
    await expect(backgroundSection).toBeVisible();
    
    // Take screenshot of backgrounds
    await expect(backgroundSection).toHaveScreenshot('backgrounds-dark.png');
  });

  test('should match theme transition animation', async ({ page }) => {
    // Start in light mode
    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'light');
      document.documentElement.classList.remove('dark');
    });
    
    // Take initial screenshot
    await expect(page).toHaveScreenshot('theme-transition-start.png');
    
    // Trigger theme change
    await page.click('[data-testid="theme-toggle"]');
    
    // Wait for transition
    await page.waitForTimeout(300);
    
    // Take final screenshot
    await expect(page).toHaveScreenshot('theme-transition-end.png');
  });
});
