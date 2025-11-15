const fs = require('fs');
const path = require('path');

// Read Cucumber JSON report
const cucumberReportPath = 'allure-results/cucumber-report.json';
const allureResultsDir = 'allure-results';

if (!fs.existsSync(cucumberReportPath)) {
  console.log('Cucumber report not found at', cucumberReportPath);
  process.exit(0);
}

const cucumberData = JSON.parse(fs.readFileSync(cucumberReportPath, 'utf8'));

// Convert each feature to Allure format
cucumberData.forEach((feature, featureIndex) => {
  const featureName = feature.name || 'Unknown Feature';
  
  feature.elements.forEach((scenario, scenarioIndex) => {
    const scenarioName = scenario.name || 'Unknown Scenario';
    const status = scenario.steps.some(step => step.result && step.result.status === 'failed') 
      ? 'failed' 
      : 'passed';
    
    const allureResult = {
      uuid: `${featureIndex}-${scenarioIndex}`,
      historyId: `${featureName}-${scenarioName}`,
      fullName: `${featureName} - ${scenarioName}`,
      labels: [
        { name: 'feature', value: featureName },
        { name: 'severity', value: 'normal' },
        { name: 'thread', value: 'test-thread' }
      ],
      status: status,
      stage: 'finished',
      start: Date.now(),
      stop: Date.now() + 1000,
      steps: scenario.steps.map((step, stepIndex) => ({
        name: step.name,
        status: step.result ? step.result.status : 'skipped',
        stage: 'finished',
        start: Date.now(),
        stop: Date.now() + 100
      }))
    };
    
    const fileName = `${featureIndex}-${scenarioIndex}-result.json`;
    fs.writeFileSync(path.join(allureResultsDir, fileName), JSON.stringify(allureResult));
    console.log(`Created: ${fileName}`);
  });
});

console.log('Conversion completed!');
