# Playwright AI Testing Framework

A comprehensive test automation framework built with **Playwright** and **Cucumber.js**, supporting **multi-environment** and **cross-browser testing** with **Allure reporting**.

## 🎯 Features

### ✅ Multi-Environment Support
- **INT1** - Internal Testing Environment
- **QA** - Quality Assurance Environment
- **PROD** - Production Environment

### ✅ Cross-Browser Testing
- **Chromium** (Chrome, Edge, Brave)
- **Firefox** 
- **WebKit** (Safari)

### ✅ Advanced Reporting
- Allure Report integration
- Cucumber JSON reports
- Automatic conversion and visualization
- Test trends and analytics

### ✅ Page Object Model (POM)
- Clean separation of concerns
- Maintainable and scalable
- Easy to extend

### ✅ BDD with Cucumber
- Human-readable feature files
- Clear step definitions
- Better collaboration between QA and Developers

## 📋 Project Structure

```
├── config/
│   ├── config.js                    # Global configuration
│   ├── browsers.config.js           # Browser settings
│   ├── int1.config.js              # INT1 environment
│   ├── qa.config.js                # QA environment
│   └── prod.config.js              # PROD environment
├── features/
│   ├── login.feature               # Feature files
│   └── step_definations/
│       └── login.steps.js          # Step implementations
├── page-objects/
│   └── LoginPage.js                # Page Object Model
├── support/
│   ├── env-manager.js              # Environment utilities
│   ├── hooks.js                    # Cucumber hooks
│   └── world.js                    # Custom world
├── convert-cucumber-to-allure.js   # Report conversion script
├── cucumber.js                     # Cucumber configuration
└── package.json                    # Dependencies
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/Playwright-AITesting.git
cd Playwright-AITesting

# Install dependencies
npm install
```

### Run Tests

```bash
# Run on QA (default)
npm run test:qa

# Run on Chrome
npm run test:chrome

# Run on QA with Chrome
npm run test:qa:chrome

# Run on all browsers
npm run test:all-browsers

# Generate Allure report
npm run test:qa:report
```

## 📊 Available Commands

### Testing
```bash
npm run test                    # QA on Chrome (default)
npm run test:int1              # INT1 on Chrome
npm run test:qa                # QA on Chrome
npm run test:prod              # PROD on Chrome
```

### Browser-Specific
```bash
npm run test:chrome             # Chrome only
npm run test:firefox            # Firefox only
npm run test:safari             # Safari only
npm run test:all-browsers       # All three browsers
```

### Environment + Browser
```bash
npm run test:qa:chrome          # QA on Chrome
npm run test:qa:firefox         # QA on Firefox
npm run test:qa:safari          # QA on Safari
npm run test:qa:all-browsers    # QA on all browsers
npm run test:int1:chrome        # INT1 on Chrome
npm run test:prod:firefox       # PROD on Firefox
```

### Reporting
```bash
npm run allure:convert          # Convert Cucumber to Allure
npm run allure:generate         # Generate Allure report
npm run allure:open             # Open report in browser
npm run test:qa:report          # Test + Report
npm run test:chrome:report      # Chrome + Report
```

## 📖 Documentation

- **[QUICK_REFERENCE.md](./QUICK_REFERENCE.md)** - Quick command reference
- **[CROSS_BROWSER_TESTING.md](./CROSS_BROWSER_TESTING.md)** - Cross-browser guide
- **[ENV_SETUP.md](./ENV_SETUP.md)** - Environment configuration
- **[GITHUB_PUSH_GUIDE.md](./GITHUB_PUSH_GUIDE.md)** - GitHub push instructions

## 🔧 Configuration

### Environment Variables

```powershell
# Set environment
$env:ENV="qa"           # qa, int1, prod

# Set browser
$env:BROWSER="firefox"  # chromium, firefox, webkit
```

### Environment Configuration

Edit files in `config/` directory:
- `config/int1.config.js` - INT1 credentials and URLs
- `config/qa.config.js` - QA credentials and URLs
- `config/prod.config.js` - PROD credentials and URLs

## 🎨 Writing Tests

### Feature File Example
```gherkin
Feature: Login functionality
  Scenario: Login with valid credentials
    Given I open the login page
    When I enter username "Admin" and password "admin123"
    And I click the login button
    Then I should see the dashboard page
```

### Step Definition Example
```javascript
const { Given, When, Then } = require('@cucumber/cucumber');
const envManager = require('../support/env-manager');

Given('I open the login page', async function () {
  this.page = await this.browser.newPage();
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.openURL();
});
```

### Page Object Example
```javascript
class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = page.locator("input[name='username']");
    this.password = page.locator("input[name='password']");
    this.loginBtn = page.locator("button[type='submit']");
  }

  async openURL() {
    await this.page.goto(envManager.getBaseURL());
  }
}
```

## 📊 Reports

Reports are generated in the `allure-report/` directory after test execution.

```bash
# View report
npm run allure:open
```

The report includes:
- Test results and statistics
- Browser information
- Environment details
- Execution time
- Step-by-step logs

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 Author

Created as a comprehensive test automation framework for Playwright + Cucumber.js + Multi-Environment + Cross-Browser Testing.

## 🆘 Support

For issues, questions, or suggestions, please open an issue on GitHub.

## 🎯 Test Matrix

| Environment | Chrome | Firefox | Safari |
|-------------|--------|---------|--------|
| INT1        | ✓      | ✓       | ✓      |
| QA          | ✓      | ✓       | ✓      |
| PROD        | ✓      | ✓       | ✓      |

---

**Happy Testing!** 🚀

Made with ❤️ using Playwright, Cucumber.js, and Allure Reporting
