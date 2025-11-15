# CI/CD Pipeline Quick Guide

## 🚀 What Happens When You Push Code

### Automatic Triggers

```
Your Push to main/master
        ↓
GitHub Actions Detected
        ↓
5 Jobs Start in Parallel/Sequence
        ↓
Tests Run on 5 Browser Combinations
        ↓
Reports Generated
        ↓
Artifacts Uploaded
        ↓
Results Available in GitHub
```

## 📊 Jobs Running

### QA Environment (Parallel)
- ✅ Chromium Test
- ✅ Firefox Test
- ✅ WebKit Test

### INT1 Environment (Parallel)
- ✅ Chromium Test
- ✅ Firefox Test

### Code Quality
- ✅ Version Check

### Report Summary
- ✅ Artifact Download
- ✅ PR Comment

### Notifications
- ✅ Status Report

## 🎯 Where to Find Results

### GitHub UI

1. **Go to Actions Tab**
   ```
   Repository → Actions → Playwright Tests - CI/CD Pipeline
   ```

2. **View Latest Run**
   - Shows all 5 jobs
   - Each job status (✅/❌)
   - Duration of each job
   - Total time

3. **View Job Logs**
   - Click any job name
   - See console output
   - View test details

4. **Download Reports**
   - Scroll to "Artifacts"
   - Download HTML reports
   - Open in browser to view

## 📈 Test Results

### Success Scenario
```
✅ test-qa [chromium] - PASSED
✅ test-qa [firefox] - PASSED
✅ test-qa [webkit] - PASSED
✅ test-int1 [chromium] - PASSED
✅ test-int1 [firefox] - PASSED
✅ quality-check - PASSED
✅ test-report-summary - PASSED
✅ notify - PASSED

Result: ALL TESTS PASSED ✅
```

### Failure Scenario
```
✅ test-qa [chromium] - PASSED
❌ test-qa [firefox] - FAILED
⊗ test-qa [webkit] - SKIPPED
```

## ⏱️ Timing

| Job | Duration |
|-----|----------|
| QA Tests (3 browsers) | 15-20 min |
| INT1 Tests (2 browsers) | 10-15 min |
| Quality Check | 1-2 min |
| Report Summary | 2-3 min |
| Notifications | <1 min |
| **Total** | **20-25 min** |

## 🔔 Notifications

### Automatic Notifications
- Email when tests fail
- Email when pipeline completes
- PR comments with results

### Manual Checks
1. Go to Actions tab
2. Click on specific run
3. View detailed logs

## 📉 Schedule

### Automatic Test Schedule
```
Every day at 10 AM UTC
   ↓
Regression tests run automatically
   ↓
Results available in morning
```

## 🔄 Manual Trigger

### Run Pipeline Manually

1. Go to **Actions** tab
2. Select **Playwright Tests - CI/CD Pipeline**
3. Click **Run workflow**
4. Choose branch (main)
5. Click **Run workflow**

Pipeline starts immediately!

## 🐛 If Tests Fail

### Step 1: Check Logs
```
Actions → Failed Run → [Job Name] → Logs
```

### Step 2: View Error
```
Scroll to error message
Note the specific step that failed
Check step name and output
```

### Step 3: Debug Locally
```powershell
# Replicate locally
cd c:\Automation\Playwright_AITesting
$env:ENV="qa"
$env:BROWSER="firefox"
npm run test
```

### Step 4: Fix and Push
```powershell
git add .
git commit -m "Fix test issue"
git push origin main
```

## 📊 Example: Viewing Allure Report

1. **Go to Actions**
2. **Click on run** (e.g., "Playwright Tests #42")
3. **Scroll to Artifacts**
4. **Download** `allure-report-qa-chromium.zip`
5. **Extract** the zip file
6. **Open** `index.html` in browser
7. **View** detailed test report

## ✅ Successful Run Checklist

- [x] All 5 jobs started
- [x] No timeouts
- [x] Tests completed
- [x] Reports generated
- [x] Artifacts uploaded
- [x] PR commented (if PR)

## 🚨 Common Issues & Solutions

### Issue: Workflow File Not Found
**Solution**: Ensure `.github/workflows/playwright.yml` exists in repo

### Issue: Tests Timeout
**Solution**: Wait longer, timeout is 60 minutes

### Issue: Artifacts Not Available
**Solution**: Wait for workflow to complete, then refresh

### Issue: Can't Download Report
**Solution**: Ensure artifact retention is still valid (30 days)

## 📋 For Pull Requests

### What Happens on PR
1. Workflow runs automatically
2. Tests execute on all environments
3. Reports generated
4. Comment added to PR showing results
5. Cannot merge until tests pass (if enabled)

### View PR Results
1. Go to **Pull Request**
2. Scroll to **Comments**
3. Find **Automated Test Results** comment
4. See artifacts links
5. Click to view reports

## 🎯 Status Badge

Add this to your README for status:
```markdown
![Tests](https://github.com/YOUR_USERNAME/Playwright-AITesting/actions/workflows/playwright.yml/badge.svg)
```

## 💡 Tips

### Tip 1: Monitor Pipeline Health
- Check Actions tab regularly
- Review failed runs immediately
- Keep success rate high

### Tip 2: Optimize Tests
- Don't commit broken tests
- Test locally before pushing
- Keep tests fast

### Tip 3: Use Artifacts
- Download reports for analysis
- Keep them for trend analysis
- Archive important reports

### Tip 4: Read Logs
- Check logs when tests fail
- Understand why failures happen
- Fix root cause, not symptoms

## 🔗 Important Links

- **Actions Dashboard**: `https://github.com/YOUR_USERNAME/Playwright-AITesting/actions`
- **Workflow File**: `.github/workflows/playwright.yml`
- **Latest Run**: `https://github.com/YOUR_USERNAME/Playwright-AITesting/actions/runs/[RUN_ID]`

## 📞 Troubleshooting

### Check Workflow Status
```
GitHub → Repository → Actions → Latest Run
```

### View Failed Job Details
```
Click on Failed Job → See error message
```

### Re-run Failed Tests
```
Click "Re-run all jobs" or "Re-run failed jobs"
```

### Cancel Running Workflow
```
Click "Cancel workflow" (if still running)
```

---

## Summary

Your CI/CD pipeline is **fully automated**:
- ✅ Runs on every push
- ✅ Tests multiple browsers
- ✅ Tests multiple environments
- ✅ Generates reports
- ✅ Comments on PRs
- ✅ Runs on schedule

**No manual intervention needed!** 🚀

Just push your code and watch the pipeline run automatically.

---

**Status**: ✅ CI/CD PIPELINE ACTIVE

Check your GitHub Actions tab to see tests running!
