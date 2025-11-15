# Cross-Browser Testing Guide

This project supports running the same test cases across multiple browsers using Playwright.

## Supported Browsers

| Browser | Engine | Command | Description |
|---------|--------|---------|-------------|
| Chrome/Chromium | Chromium | `BROWSER=chromium` | Chromium-based browsers |
| Firefox | Firefox | `BROWSER=firefox` | Mozilla Firefox |
| Safari | WebKit | `BROWSER=webkit` | Apple Safari (via WebKit) |

## Running Tests on Specific Browsers

### Single Browser Tests

#### Chrome/Chromium (Default)
```powershell
npm run test:chrome
npm run test:chrome:report
```

#### Firefox
```powershell
npm run test:firefox
npm run test:firefox:report
```

#### Safari (WebKit)
```powershell
npm run test:safari
npm run test:safari:report
```

### All Browsers
```powershell
npm run test:all-browsers
```

## Combining Environment + Browser

### QA Environment on Different Browsers

```powershell
# QA on Chrome
npm run test:qa:chrome
npm run test:qa:chrome:report

# QA on Firefox
npm run test:qa:firefox
npm run test:qa:firefox:report

# QA on Safari
npm run test:qa:safari
npm run test:qa:safari:report

# QA on All Browsers
npm run test:qa:all-browsers
```

### INT1 Environment on Different Browsers

```powershell
# INT1 on Chrome
npm run test:int1:chrome

# INT1 on Firefox
npm run test:int1:firefox

# INT1 on Safari
npm run test:int1:safari
```

### PROD Environment on Different Browsers

```powershell
# PROD on Chrome
npm run test:prod:chrome

# PROD on Firefox
npm run test:prod:firefox

# PROD on Safari
npm run test:prod:safari
```

## Using Browser Variable Directly

### Windows PowerShell
```powershell
$env:BROWSER="chromium"
npm run test

$env:BROWSER="firefox"
npm run test

$env:BROWSER="webkit"
npm run test
```

### Windows Command Prompt
```cmd
set BROWSER=chromium
npm run test

set BROWSER=firefox
npm run test

set BROWSER=webkit
npm run test
```

### Combining Environment + Browser Variables
```powershell
$env:ENV="qa"
$env:BROWSER="firefox"
npm run test

# Or with report
$env:ENV="qa"
$env:BROWSER="firefox"
npm run test && npm run allure:generate && npm run allure:open
```

## Complete Test Matrix Examples

### Test across all browsers on QA
```powershell
npm run test:qa:chrome:report
npm run test:qa:firefox:report
npm run test:qa:safari:report
```

### Test across all environments on Chrome
```powershell
npm run test:int1:chrome:report
npm run test:qa:chrome:report
npm run test:prod:chrome:report
```

### Test across all combinations (Environment × Browser)
```powershell
# QA Environment
npm run test:qa:chrome:report
npm run test:qa:firefox:report
npm run test:qa:safari:report

# INT1 Environment
npm run test:int1:chrome:report
npm run test:int1:firefox:report

# PROD Environment
npm run test:prod:chrome:report
npm run test:prod:firefox:report
```

## Using Environment Manager for Browser Info

In your test code, you can access the current browser:

```javascript
const envManager = require('./support/env-manager');

// Get browser name
console.log(envManager.getBrowser());  // 'chromium', 'firefox', or 'webkit'

// Get browser info
const browserInfo = envManager.getBrowserSettings();
console.log(browserInfo.browser);
```

## Output Location

Reports are generated in:
- Allure Results: `allure-results/`
- Allure Report: `allure-report/`

Each test run generates a new report with browser information.

## Tips

1. **Sequential Execution**: Run browsers one at a time for clearer reports
2. **Headless Mode**: Tests run in headless mode on PROD, with UI on QA/INT1
3. **Screenshots**: Captured on failure for debugging
4. **Videos**: Retained on failure for detailed analysis
5. **Traces**: Available on first retry for debugging

## Example Workflow

```powershell
# Clean reports
Remove-Item -Path allure-results -Recurse -Force -ErrorAction SilentlyContinue

# Test on Chrome
npm run test:qa:chrome

# Test on Firefox  
npm run test:qa:firefox

# Test on Safari
npm run test:qa:safari

# Generate combined report
npm run allure:generate

# Open report
npm run allure:open
```

---

**Your tests are now browser-agnostic and can run across all modern browsers!** 🚀
