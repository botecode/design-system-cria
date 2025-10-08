import { FullConfig } from '@playwright/test';

async function globalTeardown(config: FullConfig) {
  console.log('Cleaning up visual regression testing environment...');
  
  // Clean up any test artifacts
  console.log('Visual regression testing teardown complete');
}

export default globalTeardown;
