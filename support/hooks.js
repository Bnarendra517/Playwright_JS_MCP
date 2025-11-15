const { BeforeAll, AfterAll, After, Before } = require('@cucumber/cucumber');
const { chromium, firefox, webkit } = require('playwright');
const envManager = require('./env-manager');

// Map of browser names to Playwright browser objects
const browserFactory = {
  chromium: chromium,
  firefox: firefox,
  webkit: webkit
};

BeforeAll(async function () {
  envManager.printEnvironmentInfo();
  const browserSettings = envManager.getBrowserSettings();
  const browserName = browserSettings.browser;
  
  // Get the appropriate browser
  const browserType = browserFactory[browserName];
  if (!browserType) {
    throw new Error(`Browser "${browserName}" is not supported. Use: chromium, firefox, or webkit`);
  }
  
  global.browser = await browserType.launch({ 
    headless: browserSettings.headless 
  });
  global.browserName = browserName;
});

Before(async function () {
  this.browser = global.browser;
  this.browserName = global.browserName;
});

After(async function () {
  if (this.page) {
    await this.page.close();
  }
});

AfterAll(async function () {
  await global.browser.close();
});
