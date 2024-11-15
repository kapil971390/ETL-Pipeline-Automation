// const { runQuery } = require('./DBHelper');
// require('dotenv').config();
// const assert = require('chai').assert;


// Feature('ETL Testing');

// Scenario('Compare Source and Target DB', async ({ I }) => {
//   // Define source and target database configurations
//   const sourceDB = {
//     host: process.env.SOURCE_DB_HOST || '127.0.0.1',
//     user: process.env.SOURCE_DB_USER || 'root',
//     password: process.env.SOURCE_DB_PASSWORD || '&&Adlerqa9713',
//     database: process.env.SOURCE_DB_NAME || 'source_db',
//   };

//   const targetDB = {
//     host: process.env.TARGET_DB_HOST || '127.0.0.1',
//     user: process.env.TARGET_DB_USER || 'root',
//     password: process.env.TARGET_DB_PASSWORD || '&&Adlerqa9713',
//     database: process.env.TARGET_DB_NAME || 'target_db',
//   };

//   // SQL Queries for both databases
//   const sourceQuery = 'SELECT * from orderPrice where price > 200';
//   const targetQuery = 'SELECT * from orderPrice where price > 200';

//   // Execute queries
//   try {
//     const sourceResult = await runQuery(sourceDB, sourceQuery);
//     const targetResult = await runQuery(targetDB, targetQuery);

//     // Get count values
//     const sourceCount = sourceResult[0].count;
//     const targetCount = targetResult[0].count;

//     console.log(`Source Count: ${sourceCount}, Target Count: ${targetCount}`);

//     // Assert equality
//     assert.strictEqual(sourceCount, targetCount, 'ETL Validation Failed: Counts do not match');
//   } catch (error) {
//     console.error('ETL test failed due to an error:', error);
//   }
// });

const { runQuery } = require('./DBHelper');
require('dotenv').config();
const assert = require('chai').assert;

Feature('ETL Testing');

Scenario('Compare Source and Target DB', async ({ I }) => {
  // Define source and target database configurations
  const sourceDB = {
    host: process.env.SOURCE_DB_HOST || '127.0.0.1',
    user: process.env.SOURCE_DB_USER || 'root',
    password: process.env.SOURCE_DB_PASSWORD || '&&Adlerqa9713',
    database: process.env.SOURCE_DB_NAME || 'source_db',
  };

  const targetDB = {
    host: process.env.TARGET_DB_HOST || '127.0.0.1',
    user: process.env.TARGET_DB_USER || 'root',
    password: process.env.TARGET_DB_PASSWORD || '&&Adlerqa9713',
    database: process.env.TARGET_DB_NAME || 'target_db',
  };

  // SQL Queries for both databases
  const sourceQuery = 'SELECT * from orderPrice where price > 200';
  const targetQuery = 'SELECT * from orderPrice where price > 200';

  // Execute queries
  try {
    const sourceResult = await runQuery(sourceDB, sourceQuery);
    const targetResult = await runQuery(targetDB, targetQuery);

    // Print the entire result for debugging
    console.log('Source Result:', sourceResult);
    console.log('Target Result:', targetResult);

    // If you need to count the number of rows returned, use:
    const sourceCount = sourceResult.length;
    const targetCount = targetResult.length;

    console.log(`Source Count: ${sourceCount}, Target Count: ${targetCount}`);

    // Assert equality
    assert.strictEqual(sourceCount, targetCount, 'ETL Validation Failed: Counts do not match');
  } catch (error) {
    console.error('ETL test failed due to an error:', error);
  }
});






