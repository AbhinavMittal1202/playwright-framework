import { defineConfig, devices } from '@playwright/test'
import dotenv from 'dotenv'

// Load environment variables from .env file
dotenv.config()

declare const process: any

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  use: {
    // Read base URL from environment variable, fallback to OrangeHRM demo if not set
    baseURL: process.env.BASE_URL || 'https://opensource-demo.orangehrmlive.com/',

    // Always take screenshot on failure — helps debug
    screenshot: 'only-on-failure',

    // Record video on retry — extremely useful for CI failures
    video: 'on-first-retry',

    // Record trace on retry — gives you step-by-step browser actions
    trace: 'on-first-retry',

    // Wait up to 10s for actions before failing
    actionTimeout: 10000,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
})