/**
 * Global configuration handler for different environments
 */

const env = process.env.ENV || 'qa';

const config = {
  int1: {
    name: 'INT1',
    baseURL: 'https://int1.orangehrmlive.com',
    username: 'Admin',
    password: 'admin123',
    timeout: 30000,
    headless: false,
    browser: 'chromium',
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry'
  },
  qa: {
    name: 'QA',
    baseURL: 'https://opensource-demo.orangehrmlive.com',
    username: 'Admin',
    password: 'admin123',
    timeout: 30000,
    headless: false,
    browser: 'chromium',
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry'
  },
  prod: {
    name: 'PROD',
    baseURL: 'https://www.orangehrm.com',
    username: 'Admin',
    password: 'admin123',
    timeout: 30000,
    headless: true,
    browser: 'chromium',
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry'
  }
};

const selectedConfig = config[env.toLowerCase()] || config.qa;

module.exports = {
  config: selectedConfig,
  allEnvironments: config,
  currentEnvironment: env.toLowerCase()
};
