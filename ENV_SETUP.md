# Multi-Environment Configuration Guide

This project supports running tests against multiple environments: **INT1**, **QA**, and **PROD**.

## Environment Configuration

### Default Configuration Locations
- Global config: `config/config.js`
- INT1 config: `config/int1.config.js`
- QA config: `config/qa.config.js`
- PROD config: `config/prod.config.js`

## Running Tests

### Run tests on QA (Default)
```bash
npm run test
npm run test:qa:report
```

### Run tests on INT1
```bash
npm run test:int1
npm run test:int1:report
```

### Run tests on PROD
```bash
npm run test:prod
npm run test:prod:report
```

## Setting Environment Variable

You can also set the environment variable manually:

### Windows PowerShell
```powershell
$env:ENV="int1"
npm run test

$env:ENV="qa"
npm run test

$env:ENV="prod"
npm run test
```

### Windows Command Prompt
```cmd
set ENV=int1
npm run test

set ENV=qa
npm run test

set ENV=prod
npm run test
```

### Linux/Mac
```bash
export ENV=int1
npm run test

export ENV=qa
npm run test

export ENV=prod
npm run test
```

## Configuration Details

### INT1 Environment
- **Base URL**: https://int1.orangehrmlive.com
- **Headless**: false (opens browser)
- **Credentials**: Admin / admin123
- **Retry Attempts**: 2

### QA Environment (Default)
- **Base URL**: https://opensource-demo.orangehrmlive.com
- **Headless**: false (opens browser)
- **Credentials**: Admin / admin123
- **Retry Attempts**: 2

### PROD Environment
- **Base URL**: https://www.orangehrm.com
- **Headless**: true (runs in background)
- **Credentials**: prod_admin / prod_password_123
- **Retry Attempts**: 3

## Using Environment Manager in Tests

You can use the EnvironmentManager in your step definitions:

```javascript
const envManager = require('../../support/env-manager');

// Get current environment
console.log(envManager.getEnvironment()); // INT1, QA, or PROD

// Get base URL
console.log(envManager.getBaseURL());

// Get credentials
const credentials = envManager.getCredentials();

// Get timeout
console.log(envManager.getTimeout());

// Get browser settings
const browserSettings = envManager.getBrowserSettings();

// Print environment info
envManager.printEnvironmentInfo();
```

## Generate Reports by Environment

### INT1 Report
```bash
npm run test:int1:report
```

### QA Report
```bash
npm run test:qa:report
```

### PROD Report
```bash
npm run test:prod:report
```

Each environment will generate a separate Allure report with environment information.
