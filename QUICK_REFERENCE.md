# Quick Reference - Cross-Browser & Multi-Environment Testing

## 🚀 Quick Commands

### Single Browser (Chrome is default)
```powershell
npm run test:chrome          # Chrome only
npm run test:firefox         # Firefox only
npm run test:safari          # Safari (WebKit)
npm run test:all-browsers    # All three browsers
```

### Single Environment
```powershell
npm run test:qa              # QA environment (default)
npm run test:int1            # INT1 environment
npm run test:prod            # PROD environment
```

### Combination: Environment + Browser
```powershell
npm run test:qa:chrome       # QA on Chrome
npm run test:qa:firefox      # QA on Firefox
npm run test:qa:safari       # QA on Safari
npm run test:qa:all-browsers # QA on all browsers

npm run test:int1:chrome     # INT1 on Chrome
npm run test:prod:firefox    # PROD on Firefox
```

### With Allure Reports
```powershell
npm run test:chrome:report           # Chrome + report
npm run test:qa:firefox:report       # QA + Firefox + report
npm run test:qa:all-browsers         # QA on all browsers
npm run test:prod:chrome:report      # PROD + Chrome + report
```

## 🔧 Manual Environment Variables

### Set Environment
```powershell
$env:ENV="qa"        # QA (default)
$env:ENV="int1"      # INT1
$env:ENV="prod"      # PROD
```

### Set Browser
```powershell
$env:BROWSER="chromium"  # Chrome (default)
$env:BROWSER="firefox"   # Firefox
$env:BROWSER="webkit"    # Safari
```

### Combined
```powershell
$env:ENV="qa"
$env:BROWSER="firefox"
npm run test
```

## 📊 Complete Test Matrix

```powershell
# Test all combinations (3 environments × 3 browsers = 9 tests)
npm run test:int1:chrome:report
npm run test:int1:firefox:report
npm run test:int1:safari:report

npm run test:qa:chrome:report
npm run test:qa:firefox:report
npm run test:qa:safari:report

npm run test:prod:chrome:report
npm run test:prod:firefox:report
npm run test:prod:safari:report
```

## 📋 Available Commands

### Basic Tests
- `npm run test` - QA on Chrome (default)
- `npm run test:int1` - INT1 on Chrome
- `npm run test:qa` - QA on Chrome
- `npm run test:prod` - PROD on Chrome

### Browser-Specific
- `npm run test:chrome` - Default env on Chrome
- `npm run test:firefox` - Default env on Firefox
- `npm run test:safari` - Default env on Safari
- `npm run test:all-browsers` - All browsers on default env

### Environment + Browser
- `npm run test:qa:chrome` - QA on Chrome
- `npm run test:qa:firefox` - QA on Firefox
- `npm run test:qa:safari` - QA on Safari
- `npm run test:qa:all-browsers` - QA on all browsers
- `npm run test:int1:chrome` - INT1 on Chrome
- `npm run test:int1:firefox` - INT1 on Firefox
- `npm run test:int1:safari` - INT1 on Safari
- `npm run test:prod:chrome` - PROD on Chrome
- `npm run test:prod:firefox` - PROD on Firefox
- `npm run test:prod:safari` - PROD on Safari

### With Reports
- `npm run test:chrome:report` - Chrome + Allure report
- `npm run test:firefox:report` - Firefox + Allure report
- `npm run test:safari:report` - Safari + Allure report
- `npm run test:qa:chrome:report` - QA + Chrome + Report
- `npm run test:qa:firefox:report` - QA + Firefox + Report
- `npm run test:qa:safari:report` - QA + Safari + Report
- And more...

### Reports Only
- `npm run allure:convert` - Convert Cucumber to Allure
- `npm run allure:generate` - Generate report
- `npm run allure:open` - Open report in browser

## 🎯 Common Scenarios

### Test login on all browsers in QA
```powershell
npm run test:qa:chrome && npm run test:qa:firefox && npm run test:qa:safari
```

### Test login on Chrome across all environments
```powershell
npm run test:int1:chrome && npm run test:qa:chrome && npm run test:prod:chrome
```

### Full cross-browser testing
```powershell
npm run test:qa:all-browsers
```

### Test and generate report
```powershell
npm run test:qa:firefox:report
```

## 📊 Report Location

- Results: `allure-results/`
- Report: `allure-report/`
- View at: `http://127.0.0.1:51544` (when open)

## ℹ️ Debug Information

The console will show:
```
==================================================
Environment: QA
Base URL: https://opensource-demo.orangehrmlive.com
Browser: FIREFOX
Timeout: 30000ms
Headless: false
==================================================
```

---

**Ready to test across all browsers and environments!** 🎉
