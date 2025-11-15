/**
 * Environment utility for managing configuration
 */

const configModule = require('../config/config');

class EnvironmentManager {
  constructor() {
    this.config = configModule.config;
    this.environment = configModule.currentEnvironment;
    this.browser = process.env.BROWSER || 'chromium';
  }

  /**
   * Get current environment name
   */
  getEnvironment() {
    return this.environment.toUpperCase();
  }

  /**
   * Get base URL for current environment
   */
  getBaseURL() {
    return this.config.baseURL;
  }

  /**
   * Get credentials for current environment
   */
  getCredentials() {
    return {
      username: this.config.username,
      password: this.config.password
    };
  }

  /**
   * Get timeout for current environment
   */
  getTimeout() {
    return this.config.timeout;
  }

  /**
   * Get browser settings
   */
  getBrowserSettings() {
    return {
      headless: this.config.headless,
      browser: this.getBrowser(),
      viewport: this.config.viewport
    };
  }

  /**
   * Get current browser name
   */
  getBrowser() {
    return this.browser.toLowerCase();
  }

  /**
   * Set browser for testing
   */
  setBrowser(browserName) {
    this.browser = browserName.toLowerCase();
  }

  /**
   * Get available browsers
   */
  getAvailableBrowsers() {
    return ['chromium', 'firefox', 'webkit'];
  }

  /**
   * Print environment info
   */
  printEnvironmentInfo() {
    console.log(`\n${'='.repeat(60)}`);
    console.log(`Environment: ${this.getEnvironment()}`);
    console.log(`Base URL: ${this.getBaseURL()}`);
    console.log(`Browser: ${this.getBrowser().toUpperCase()}`);
    console.log(`Timeout: ${this.getTimeout()}ms`);
    console.log(`Headless: ${this.config.headless}`);
    console.log(`${'='.repeat(60)}\n`);
  }
}

module.exports = new EnvironmentManager();
