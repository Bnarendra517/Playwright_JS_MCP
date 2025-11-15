// QA Environment Configuration
module.exports = {
  environment: 'QA',
  baseURL: 'https://opensource-demo.orangehrmlive.com',
  credentials: {
    username: 'Admin',
    password: 'admin123'
  },
  timeout: 30000,
  retryAttempts: 2,
  headless: false,
  slowMo: 0
};
