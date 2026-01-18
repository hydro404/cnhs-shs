const db = require('./config/database');

async function testConnection() {
  try {
    console.log('Testing database connection...');
    const [rows] = await db.query('SELECT 1 + 1 AS result');
    console.log('✅ Database connection successful:', rows);
    
    console.log('\nTesting leaderboard query...');
    const [results] = await db.execute(
      'SELECT * FROM exam_results ORDER BY score DESC, time_taken ASC LIMIT 5'
    );
    console.log('✅ Leaderboard query successful:');
    console.log(results);
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Database error:', error.message);
    console.error('Full error:', error);
    process.exit(1);
  }
}

testConnection();
