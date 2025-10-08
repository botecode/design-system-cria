import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  console.log('Setting up visual regression testing environment...');
  
  // Launch browser for setup
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  try {
    // Navigate to the app
    await page.goto('http://localhost:3003');
    
    // Wait for the app to load
    await page.waitForLoadState('networkidle');
    
    // Verify the app is running
    const title = await page.title();
    console.log(`App loaded successfully: ${title}`);
    
    // Test theme switching
    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'light');
    });
    await page.waitForTimeout(100);
    
    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'dark');
    });
    await page.waitForTimeout(100);
    
    console.log('Theme switching verified');
    
  } catch (error) {
    console.error('Setup failed:', error);
    throw error;
  } finally {
    await browser.close();
  }
  
  console.log('Visual regression testing setup complete');
}

export default globalSetup;
