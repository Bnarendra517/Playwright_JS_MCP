/**
 * Browser Configuration
 * Supported browsers: chromium, firefox, webkit (Safari)
 */

module.exports = {
  browsers: {
    chromium: {
      name: 'Chromium',
      displayName: 'Chrome/Chromium',
      description: 'Google Chrome / Chromium browser',
      enabled: true
    },
    firefox: {
      name: 'Firefox',
      displayName: 'Firefox',
      description: 'Mozilla Firefox browser',
      enabled: true
    },
    webkit: {
      name: 'WebKit',
      displayName: 'Safari',
      description: 'Apple Safari browser (via WebKit)',
      enabled: true
    }
  },

  /**
   * Get list of enabled browsers
   */
  getEnabledBrowsers() {
    return Object.keys(this.browsers).filter(
      key => this.browsers[key].enabled
    );
  },

  /**
   * Get browser info
   */
  getBrowserInfo(browserName) {
    return this.browsers[browserName.toLowerCase()];
  },

  /**
   * Check if browser is supported
   */
  isSupportedBrowser(browserName) {
    return browserName.toLowerCase() in this.browsers;
  }
};
