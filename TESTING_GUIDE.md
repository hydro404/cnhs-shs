# Quick Start Testing Guide

## 🚀 What Has Been Created

### ✅ Files Created:
1. **config/database.js** - MySQL connection configuration
2. **models/examModel.js** - Database operations (save results, get leaderboard)
3. **controllers/examController.js** - Exam logic with 5 M.I.L questions
4. **views/exam.ejs** - Exam interface with timer
5. **views/leaderboard.ejs** - Leaderboard display
6. **database/schema.sql** - Database schema
7. **setup-database.js** - Automatic database setup script

### ✅ Features Implemented:
- ✅ Nickname input
- ✅ Strand selection (EIM - B, HE)
- ✅ 5 Multiple choice questions about M.I.L
- ✅ 30-second timer per question
- ✅ Total time tracking
- ✅ Score calculation
- ✅ MySQL database storage
- ✅ Leaderboard sorted by score (primary) and time (secondary)
- ✅ Strand filtering

## 📋 Before You Start

### Step 1: Update .env with MySQL Password
Open `.env` and set your MySQL password:
```env
DB_PASSWORD=your_mysql_password_here
```

### Step 2: Setup Database

**Option A - Automatic (Recommended):**
```bash
node setup-database.js
```

**Option B - Manual:**
1. Open MySQL:
   ```bash
   mysql -u root -p
   ```

2. Run these commands:
   ```sql
   CREATE DATABASE cnhs_exam;
   USE cnhs_exam;
   
   CREATE TABLE exam_results (
     id INT AUTO_INCREMENT PRIMARY KEY,
     nickname VARCHAR(100) NOT NULL,
     strand ENUM('EIM - B', 'HE') NOT NULL,
     score INT NOT NULL,
     time_taken INT NOT NULL,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
     INDEX idx_score_time (score DESC, time_taken ASC),
     INDEX idx_strand (strand)
   );
   
   -- Optional: Insert test data
   INSERT INTO exam_results (nickname, strand, score, time_taken) VALUES
   ('Alice', 'EIM - B', 5, 120),
   ('Bob', 'HE', 4, 100),
   ('Charlie', 'EIM - B', 5, 90);
   ```

### Step 3: Start the Server
```bash
npm start
```

## 🧪 Testing the System

### Test 1: Take the Exam
1. Open browser: `http://localhost:3000/exam`
2. Enter nickname: "TestUser"
3. Select strand: "EIM - B"
4. Click "Start Exam"
5. Answer the 5 questions (watch the timer!)
6. View your results

### Test 2: View Leaderboard
1. Open browser: `http://localhost:3000/leaderboard`
2. Check if your result appears
3. Try filtering by strand using the dropdown

### Test 3: Timer Functionality
1. Start exam
2. Wait for timer to reach 0 on a question
3. It should auto-advance to next question

### Test 4: Leaderboard Ranking
1. Take exam multiple times with different scores
2. Check leaderboard sorts correctly:
   - Higher scores appear first
   - Same scores ranked by fastest time

## 📝 The 5 M.I.L Questions

1. **What does MIL stand for?**
   - Answer: Media and Information Literacy

2. **Which of the following is NOT a type of media?**
   - Answer: Personal Media

3. **What is the primary purpose of media literacy?**
   - Answer: To critically analyze and evaluate media messages

4. **Which technology is considered 'new media'?**
   - Answer: Social Media Platforms

5. **Information literacy helps you to:**
   - Answer: Identify, locate, evaluate, and effectively use information

## 🎮 How the Exam Works

1. **Start Page**: Enter nickname and select strand
2. **Quiz Page**: 
   - Progress bar shows question progress
   - Timer counts down from 30 seconds per question
   - Click option to select answer
   - Timer turns red and pulses at 10 seconds
   - Auto-advances when timer hits 0
3. **Results Page**: 
   - Shows final score (e.g., 4/5)
   - Shows total time taken
   - Button to view leaderboard

## 🏆 Leaderboard Ranking System

Rankings are calculated using:
```
ORDER BY score DESC, time_taken ASC
```

**Examples:**
- 5/5 in 90 seconds > 5/5 in 120 seconds
- 5/5 in 120 seconds > 4/5 in 80 seconds
- 4/5 in 100 seconds > 4/5 in 150 seconds

**Visual Features:**
- 🥇 Gold medal for 1st place
- 🥈 Silver medal for 2nd place
- 🥉 Bronze medal for 3rd place
- Strand badges (color-coded)
- Time displayed in MM:SS format

## 🔧 Customization

### Add More Questions
Edit `controllers/examController.js`:
```javascript
const milQuestions = [
  {
    question: "Your new question?",
    options: ["A", "B", "C", "D"],
    correct: 0  // index of correct answer (0-3)
  },
  // ... more questions
];
```

### Change Timer Duration
Edit `views/exam.ejs`:
```javascript
let questionTime = 30; // Change this number
```

### Add More Strands
1. Update enum in `database/schema.sql`
2. Update validation in `controllers/examController.js`
3. Add to strands array

## ⚠️ Troubleshooting

**"Access denied for user 'root'@'localhost'"**
- Set DB_PASSWORD in .env file

**"Cannot connect to MySQL"**
- Check if MySQL is running
- Verify credentials in .env

**"Database 'cnhs_exam' doesn't exist"**
- Run: `node setup-database.js`

**Questions not appearing**
- Check browser console (F12)
- Verify server is running

**Leaderboard empty**
- Complete at least one exam
- Check database has data: `SELECT * FROM exam_results;`

## 📁 Project Structure

```
cnhs-shs/
├── config/
│   └── database.js              # MySQL connection
├── controllers/
│   └── examController.js        # Exam logic + 5 questions
├── models/
│   └── examModel.js            # DB queries
├── views/
│   ├── exam.ejs                # Exam UI
│   └── leaderboard.ejs         # Leaderboard UI
├── database/
│   └── schema.sql              # Table structure
├── .env                        # DB credentials
├── server.js                   # Routes
├── setup-database.js           # DB setup script
├── EXAM_SETUP.md              # Full documentation
└── TESTING_GUIDE.md           # This file
```

## 🎯 Next Steps

1. ✅ Set MySQL password in .env
2. ✅ Run `node setup-database.js`
3. ✅ Run `npm start`
4. ✅ Test at `http://localhost:3000/exam`
5. ✅ View leaderboard at `http://localhost:3000/leaderboard`

After testing with 5 questions, you can add more questions in `controllers/examController.js`!
