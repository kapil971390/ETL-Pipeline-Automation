const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// Setup headless mode via environment variable
exports.config = {
  helpers: {
    Playwright: {
      url: 'http://localhost',
      browser: 'chromium',
      show: false, // Change to false if running in headless mode
    },
    MySQLHelper: {
      require: 'codeceptjs-dbhelper',
      host: process.env.SOURCE_DB_HOST || '127.0.0.1',
      database: process.env.SOURCE_DB_NAME || 'source_db',
      user: process.env.SOURCE_DB_USER || 'root',
      password: process.env.SOURCE_DB_PASSWORD || '&&Adlerqa9713',
      port: 3306
    }
  },
  tests: './*_test.js',
  output: './output',
  name: 'codeceptjs-playwright-project',
};

// Note: Replace your credentials with environment variables in the .env file
// Example: SOURCE_DB_USER='root', SOURCE_DB_PASSWORD='password123'


