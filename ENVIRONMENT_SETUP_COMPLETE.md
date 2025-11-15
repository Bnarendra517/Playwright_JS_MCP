# Environment Configuration Setup - COMPLETE ✅

## Project Structure

```
config/
  ├── config.js                 # Global configuration handler
  ├── int1.config.js           # INT1 specific configuration
  ├── qa.config.js             # QA specific configuration
  └── prod.config.js           # PROD specific configuration

support/
  ├── env-manager.js           # Environment manager utility
  ├── hooks.js                  # Updated with env support
  └── world.js

page-objects/
  └── LoginPage.js             # Updated to use env config

features/
  └── step_definations/
      └── login.steps.js       # Updated with env support
```

## How It Works

1. **Set Environment Variable**: `ENV=int1`, `ENV=qa`, or `ENV=prod`
2. **Config Loader**: `config/config.js` reads the ENV variable and loads appropriate settings
3. **Environment Manager**: `support/env-manager.js` provides easy access to configuration
4. **Pages/Steps**: Use `envManager` to get dynamic URLs and credentials

## Quick Start Commands

### Run on Different Environments

```powershell
# QA Environment (Default)
npm run test
npm run test:qa
npm run test:qa:report

# INT1 Environment
npm run test:int1
npm run test:int1:report

# PROD Environment
npm run test:prod
npm run test:prod:report
```

## Configuration Details

| Property | INT1 | QA | PROD |
|----------|------|----|----|
| Base URL | https://int1.orangehrmlive.com | https://opensource-demo.orangehrmlive.com | https://www.orangehrm.com |
| Headless | false | false | true |
| Username | Admin | Admin | prod_admin |
| Password | admin123 | admin123 | prod_password_123 |
| Timeout | 30s | 30s | 30s |
| Retries | 2 | 2 | 3 |

## Using Environment Manager in Code

```javascript
const envManager = require('./support/env-manager');

// Get environment info
envManager.getEnvironment();          // 'INT1', 'QA', or 'PROD'
envManager.getBaseURL();              // Returns URL for current env
envManager.getCredentials();          // { username, password }
envManager.getTimeout();              // 30000
envManager.getBrowserSettings();      // { headless, browser, viewport }
envManager.printEnvironmentInfo();    // Logs environment details
```

## Test Execution Flow

1. **Set ENV variable** (int1, qa, or prod)
2. **Run test command**: `npm run test` or specific environment command
3. **Config loaded** based on ENV variable
4. **Tests execute** using configuration from selected environment
5. **Report generated** with environment information

## Example: Running Full Test Suite with Report

```powershell
# QA Environment
npm run test:qa:report

# INT1 Environment
npm run test:int1:report

# PROD Environment
npm run test:prod:report
```

## Next Steps

1. Update credentials in `config/` files with actual values
2. Update base URLs to point to actual environment endpoints
3. Add more test scenarios as needed
4. Extend configuration with additional properties (API keys, etc.)

✅ **Setup is complete and working!**
