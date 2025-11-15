// PROD Environment Configuration
module.exports = {
  environment: 'PROD',
  baseURL: 'https://www.orangehrm.com',
  credentials: {
    username: 'prod_admin',
    password: 'prod_password_123'
  },
  timeout: 30000,
  retryAttempts: 3,
  headless: true,
  slowMo: 0
};
