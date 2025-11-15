module.exports = {
  default: {
    require: [
      'features/step_definations/*.js',
      'support/hooks.js',
      'support/world.js'
    ],
    format: [
      '@cucumber/pretty-formatter',
      //'json:reports/cucumber-report.json',
      'json:allure-results/cucumber-report.json'
    ],
    publishQuiet: true,
    timeout: 30000,
    paths: ['./features/*.feature']
  }
};
