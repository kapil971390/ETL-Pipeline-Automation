const mysql = require('mysql2/promise');

// Function to execute query
async function runQuery(dbConfig, query) {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.execute(query);
    await connection.end();
    return rows;
  } catch (error) {
    console.error('Error executing query:', error);
    throw error; // Let the test handle the failure
  }
}

module.exports = { runQuery };

