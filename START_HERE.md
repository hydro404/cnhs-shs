# 🚀 COMPLETE SETUP & TESTING INSTRUCTIONS

## ✅ What's Been Created

I've successfully created a **complete M.I.L Online Exam System** with all your requirements:

### ✨ Features Implemented:
- ✅ Nickname input
- ✅ Strand selection (EIM - B, HE)
- ✅ 5 M.I.L multiple choice questions
- ✅ 30-second timer per question
- ✅ Total time tracking
- ✅ MySQL database integration
- ✅ Leaderboard ranked by score and time
- ✅ Beautiful, responsive UI
- ✅ MVC architecture (Model, View, Controller)

### 📁 Files Created:
1. **config/database.js** - MySQL connection
2. **models/examModel.js** - Database operations
3. **controllers/examController.js** - Business logic & 5 questions
4. **views/exam.ejs** - Exam interface
5. **views/leaderboard.ejs** - Rankings display
6. **database/schema.sql** - Database schema
7. **setup-database.js** - Automated setup script
8. **Documentation files** - Complete guides

---

## 🎯 STEP-BY-STEP SETUP

### Step 1: Update MySQL Password

Open the `.env` file and set your MySQL password:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=YOUR_MYSQL_PASSWORD_HERE
DB_NAME=cnhs_exam
```

⚠️ **Important:** Replace `YOUR_MYSQL_PASSWORD_HERE` with your actual MySQL password

---

### Step 2: Setup the Database

Run this command to create the database and table:

```bash
npm run setup-db
```

**This will:**
- Create `cnhs_exam` database
- Create `exam_results` table
- Insert 5 sample records for testing
- Display success message

**Expected Output:**
```
✅ Connected to MySQL
✅ Database created
✅ Table created
✅ Sample data inserted
✅ Database setup completed successfully!
```

---

### Step 3: Start the Server

```bash
npm start
```

**Expected Output:**
```
Server running on http://localhost:3000
```

---

### Step 4: Test the System

#### 🧪 Test 1: Take the Exam
1. Open browser: `http://localhost:3000/exam`
2. Enter nickname: "TestStudent"
3. Select strand: "EIM - B"
4. Click "Start Exam"
5. Answer the 5 questions
   - Watch the timer count down
   - See it turn red at 10 seconds
   - Click answer options
6. See your results (score + time)

#### 🏆 Test 2: View Leaderboard
1. Open browser: `http://localhost:3000/leaderboard`
2. You should see:
   - Sample data (Alice, Bob, Charlie, Diana, Eve)
   - Your test result
   - Medals for top 3 (🥇🥈🥉)
   - Strand badges
3. Try the strand filter dropdown

#### ⏱️ Test 3: Timer Auto-Advance
1. Start exam again
2. DON'T select any answer
3. Wait for timer to reach 0
4. It should auto-advance to next question

---

## 📊 The 5 M.I.L Questions

Your exam includes these questions:

1. **What does MIL stand for?**
   - ✅ Media and Information Literacy

2. **Which of the following is NOT a type of media?**
   - ✅ Personal Media

3. **What is the primary purpose of media literacy?**
   - ✅ To critically analyze and evaluate media messages

4. **Which technology is considered 'new media'?**
   - ✅ Social Media Platforms

5. **Information literacy helps you to:**
   - ✅ Identify, locate, evaluate, and effectively use information

---

## 🎨 What You'll See

### Exam Page Features:
- Modern purple gradient background
- Clean white form
- Progress bar showing question completion
- Question counter (e.g., "Question 1 of 5")
- 30-second countdown timer
- Timer turns RED and PULSES at 10 seconds
- Multiple choice options with hover effects
- Selected option highlighted in purple
- Results page with score and time

### Leaderboard Features:
- 🥇 Gold medal for 1st place
- 🥈 Silver medal for 2nd place  
- 🥉 Bronze medal for 3rd place
- Color-coded strand badges (EIM-B = blue, HE = pink)
- Time displayed as MM:SS format
- Filter by strand dropdown
- "Take Exam" button to try again

---

## 🔧 How the Ranking Works

Leaderboard is sorted by:
1. **Highest score first**
2. **Fastest time** (for same scores)

**Examples:**
- Student A: 5/5 in 1:30 → Rank #1
- Student B: 5/5 in 2:00 → Rank #2  
- Student C: 4/5 in 1:00 → Rank #3

---

## 📝 Adding More Questions (After Testing)

Once you've tested with 5 questions, you can add more:

1. Open: `controllers/examController.js`
2. Find the `milQuestions` array
3. Add more questions following this format:

```javascript
{
  question: "Your question here?",
  options: [
    "Option A",
    "Option B", 
    "Option C",
    "Option D"
  ],
  correct: 1  // Index of correct answer (0, 1, 2, or 3)
}
```

---

## ⚠️ Troubleshooting

### Problem: "Access denied for user 'root'@'localhost'"
**Solution:** Update `DB_PASSWORD` in `.env` file

### Problem: Database setup fails
**Solution:** 
1. Make sure MySQL is running
2. Check credentials in `.env`
3. Try connecting to MySQL manually: `mysql -u root -p`

### Problem: Can't access /exam route
**Solution:**
1. Make sure server is running (`npm start`)
2. Check console for errors
3. Try: `http://localhost:3000/exam` (with full URL)

### Problem: Questions not displaying
**Solution:**
1. Press F12 (browser console)
2. Look for JavaScript errors
3. Verify `examController.js` has questions defined

### Problem: Leaderboard is empty
**Solution:**
1. Run `npm run setup-db` to add sample data
2. Complete at least one exam
3. Check database: `SELECT * FROM cnhs_exam.exam_results;`

### Problem: Timer not working
**Solution:**
1. Check browser console (F12)
2. Try a different browser
3. Clear cache and reload

---

## 📖 Documentation Files

I've created complete documentation for you:

1. **TESTING_GUIDE.md** - Quick start testing guide
2. **EXAM_SETUP.md** - Detailed setup instructions
3. **PROJECT_SUMMARY.md** - Complete feature overview
4. **EXAM_README.md** - User-facing README
5. **ARCHITECTURE.md** - System architecture diagrams
6. **START_HERE.md** - This file

---

## 🎯 Quick Command Reference

```bash
# Setup database (run once)
npm run setup-db

# Start server
npm start

# Development mode (auto-reload)
npm run serve

# Development with CSS watching
npm run dev
```

---

## 🌐 URLs

- **Home:** http://localhost:3000
- **Exam:** http://localhost:3000/exam
- **Leaderboard:** http://localhost:3000/leaderboard
- **API:** http://localhost:3000/api/questions

---

## ✅ Testing Checklist

Before considering it complete, verify:

- [ ] Database connects successfully
- [ ] Can access exam page
- [ ] Form accepts nickname and strand
- [ ] Questions load correctly
- [ ] Timer counts down from 30
- [ ] Timer turns red at 10 seconds
- [ ] Can select answer options
- [ ] Next button works
- [ ] Timer auto-advances at 0
- [ ] Score calculates correctly
- [ ] Time displays in MM:SS format
- [ ] Results save to database
- [ ] Leaderboard shows rankings
- [ ] Strand filter works
- [ ] Top 3 show medals
- [ ] Data persists after refresh

---

## 🎓 Next Steps

After testing with 5 questions:

1. ✅ Add more questions to `controllers/examController.js`
2. ✅ Adjust timer duration if needed (in `views/exam.ejs`)
3. ✅ Customize styling (gradients, colors)
4. ✅ Add more strands (update schema + controller)
5. ✅ Deploy to production server

---

## 💡 Tips

- **Sample Data:** The setup script adds 5 test records so you can see the leaderboard immediately
- **Testing:** Try taking the exam multiple times with different scores to see ranking changes
- **Timer:** Each question has 30 seconds - auto-advances when time expires
- **Ranking:** Higher scores rank better; same scores ranked by faster time
- **Strands:** You can filter leaderboard by strand

---

## 🎉 You're All Set!

Your M.I.L Online Exam System is **ready to use**!

**To start testing right now:**

1. Set MySQL password in `.env`
2. Run `npm run setup-db`
3. Run `npm start`
4. Visit `http://localhost:3000/exam`

**Have fun testing!** 🚀

---

## 📞 Need Help?

Check these files for more details:
- **TESTING_GUIDE.md** - Step-by-step testing
- **EXAM_SETUP.md** - Detailed setup
- **ARCHITECTURE.md** - How it works
- **PROJECT_SUMMARY.md** - Feature list

---

**Built with ❤️ for CNHS Senior High School**
**Subject: Media and Information Literacy**
**Version: 1.0.0**
