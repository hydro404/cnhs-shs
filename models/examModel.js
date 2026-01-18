const db = require('../config/database');

class ExamModel {
  // Save exam result to database
  static async saveResult(nickname, strand, score, timeTaken, subject = null) {
    try {
      let table = 'exam_results';
      if (subject === 'mil') table = 'mil_results';
      else if (subject === 'physci') table = 'physci_results';
      const [result] = await db.execute(
        `INSERT INTO ${table} (nickname, strand, score, time_taken, date_taken) VALUES (?, ?, ?, ?, NOW())`,
        [nickname, strand, score, timeTaken]
      );
      return result;
    } catch (error) {
      console.error('Error saving exam result:', error);
      throw error;
    }
  }

  // Get leaderboard (all strands or specific strand)
  static async getLeaderboard(subject = null, strand = null, limit = 10) {
    try {
      // Ensure limit is an integer
      const limitValue = parseInt(limit);
      let table = 'exam_results';
      if (subject === 'mil') table = 'mil_results';
      else if (subject === 'physci') table = 'physci_results';
      let query = `
        SELECT 
          nickname, 
          strand, 
          score, 
          time_taken,
          date_taken
        FROM ${table}
      `;
      const params = [];
      if (strand) {
        query += ' WHERE strand = ?';
        params.push(strand);
      }
      query += ` ORDER BY score DESC, time_taken ASC, date_taken ASC LIMIT ${limitValue}`;
      const [rows] = await db.execute(query, params);
      return rows;
    } catch (error) {
      console.error('Error fetching leaderboard:', error);
      throw error;
    }
  }

  // Get user's best score
  static async getUserBestScore(nickname) {
    try {
      const [rows] = await db.execute(
        'SELECT * FROM exam_results WHERE nickname = ? ORDER BY score DESC, time_taken ASC, date_taken ASC LIMIT 1',
        [nickname]
      );
      return rows[0] || null;
    } catch (error) {
      console.error('Error fetching user best score:', error);
      throw error;
    }
  }
}

module.exports = ExamModel;
