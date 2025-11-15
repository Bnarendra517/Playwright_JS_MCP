const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

const LoginPage = require('../../page-objects/LoginPage');
const envManager = require('../../support/env-manager');

setDefaultTimeout(30000);

Given('I open the login page', async function () {
  this.page = await this.browser.newPage();
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.openURL();
});

When('I enter username {string} and password {string}', async function (username, password) {
  await this.loginPage.enterCredentials(username, password);
});

When('I enter credentials for current environment', async function () {
  const credentials = envManager.getCredentials();
  await this.loginPage.enterCredentials(credentials.username, credentials.password);
});

When('I click the login button', async function () {
  await this.loginPage.clickLogin();
});

Then('I should see the dashboard page', async function () {
  await expect(this.page).toHaveURL(/dashboard/);
});
