const envManager = require('../support/env-manager');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = page.locator("input[name='username']");
    this.password = page.locator("input[name='password']");
    this.loginBtn = page.locator("button[type='submit']");
  }

  async openURL() {
    const baseURL = envManager.getBaseURL();
    await this.page.goto(baseURL, { waitUntil: 'networkidle', timeout: 30000 });
  }

  async enterCredentials(user, pass) {
    await this.username.fill(user.trim());  // handles leading/trailing spaces
    await this.password.fill(pass);
  }

  async clickLogin() {
    await this.loginBtn.click();
  }
}

module.exports = LoginPage;
