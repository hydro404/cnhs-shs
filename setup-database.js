const mysql = require('mysql2/promise');
require('dotenv').config();

async function setupDatabase() {
  let connection;
  
  try {
    console.log('🔄 Connecting to MySQL...');
    
    // Connect without database to create it
    connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || ''
    });
    
    console.log('✅ Connected to MySQL');
    
    // Create database
    console.log('🔄 Creating database...');
    await connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME || 'cnhs_exam'}`);
    console.log('✅ Database created');
    
    // Use database
    await connection.query(`USE ${process.env.DB_NAME || 'cnhs_exam'}`);
    
    // Create table
    console.log('🔄 Creating exam_results table...');
    await connection.query(`
      CREATE TABLE IF NOT EXISTS exam_results (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nickname VARCHAR(100) NOT NULL,
        strand ENUM('EIM - B', 'HE') NOT NULL,
        score INT NOT NULL,
        time_taken INT NOT NULL COMMENT 'Time taken in seconds',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        INDEX idx_score_time (score DESC, time_taken ASC),
        INDEX idx_strand (strand)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
    `);
    console.log('✅ Table created');
    
    // Insert sample data for testing
    console.log('🔄 Inserting sample data...');
    await connection.query(`
      INSERT INTO exam_results (nickname, strand, score, time_taken) VALUES
      ('Alice', 'EIM - B', 5, 120),
      ('Bob', 'HE', 4, 100),
      ('Charlie', 'EIM - B', 5, 90),
      ('Diana', 'HE', 3, 150),
      ('Eve', 'EIM - B', 4, 110)
    `);
    console.log('✅ Sample data inserted');
    
    console.log('\n✅ Database setup completed successfully!');
    console.log('\n📊 You can now:');
    console.log('   1. Start the server: npm start');
    console.log('   2. Visit: http://localhost:3000/exam');
    console.log('   3. View leaderboard: http://localhost:3000/leaderboard\n');
    
  } catch (error) {
    console.error('❌ Error setting up database:', error.message);
    console.error('\n📝 Please check:');
    console.error('   1. MySQL is running');
    console.error('   2. Credentials in .env file are correct');
    console.error('   3. User has permission to create databases\n');
    process.exit(1);
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}

setupDatabase();
