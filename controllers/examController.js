const ExamModel = require('../models/examModel');
const fs = require('fs');
const path = require('path');
// API: Check if nickname exists for subject and strand
const express = require('express');
const router = express.Router();

router.get('/api/leaderboard', async (req, res) => {
  const { subject, strand, nickname } = req.query;
  if (!subject || !strand || !nickname) {
    return res.json({ exists: false });
  }
  try {
    // Query leaderboard for this subject and strand
    const leaderboard = await ExamModel.getLeaderboard(subject, strand, 1000);
    const exists = leaderboard.some(entry => entry.nickname && entry.nickname.toLowerCase() === nickname.toLowerCase());
    res.json({ exists });
  } catch (error) {
    res.json({ exists: false });
  }
});


// Subject configuration
const SUBJECTS = {
  mil: {
    main:'Media and Information Literacy',
    title: 'Media and Information Summative Exam',
    icon: 'book',
    strands: [
      { name: 'EIM - B', icon: 'zap' }, // lightning bolt for Electronic Information Management
      { name: 'HE', icon: 'utensils' }  // utensils for Home Economics
    ]
  },
  physci: {
    main:'Physical Science',
    title: 'Physical Science Summative Exam',
    icon: 'atom',
    strands: [
      { name: 'GAS-A', icon: 'book-open' },   // book for General Academic Strand
      { name: 'GAS-B', icon: 'book-open' },   // book for General Academic Strand
      { name: 'CSS', icon: 'monitor' },       // computer for Computer Studies
      { name: 'EIM', icon: 'zap' }            // lightning bolt for Electronic Information Management
    ]
  }
};

// Load questions from JSON file
function loadQuestions(subject) {
  if (!SUBJECTS[subject]) return [];
  
  const questionsPath = path.join(__dirname, `../data/questions-${subject}.json`);
  try {
    const data = fs.readFileSync(questionsPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error loading ${subject} questions:`, error);
    return [];
  }
}

// Helper function to shuffle array
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Helper function to randomize question and option order
function randomizeQuestions(questions, count) {
  // Shuffle questions
  const shuffledQuestions = shuffleArray(questions);
  // If count is not provided, show all questions
  const limit = typeof count === 'number' ? count : shuffledQuestions.length;
  return shuffledQuestions.slice(0, limit).map(q => {
    // Create array with original indices
    const optionsWithIndex = q.options.map((opt, idx) => ({ text: opt, originalIdx: idx }));
    const shuffledOptions = shuffleArray(optionsWithIndex);
    // Find where the correct answer ended up
    const correctIndex = shuffledOptions.findIndex(opt => opt.originalIdx === q.correct);
    return {
      id: q.id,
      question: q.question,
      options: shuffledOptions.map(opt => opt.text),
      correct: correctIndex
    };
  });
}

// Old M.I.L Exam Questions (kept for reference, removed from export)
const milQuestions = [
  {
    question: "What does MIL stand for?",
    options: [
      "Media Internet Literacy",
      "Media and Information Literacy",
      "Modern Information Learning",
      "Media Integration Literacy"
    ],
    correct: 1
  },
  {
    question: "Which of the following is NOT a type of media?",
    options: [
      "Print Media",
      "Broadcast Media",
      "Digital Media",
      "Personal Media"
    ],
    correct: 3
  },
  {
    question: "What is the primary purpose of media literacy?",
    options: [
      "To create viral content",
      "To critically analyze and evaluate media messages",
      "To increase social media followers",
      "To learn video editing"
    ],
    correct: 1
  },
  {
    question: "Which technology is considered 'new media'?",
    options: [
      "Newspapers",
      "Radio",
      "Social Media Platforms",
      "Television"
    ],
    correct: 2
  },
  {
    question: "Information literacy helps you to:",
    options: [
      "Memorize all information",
      "Identify, locate, evaluate, and effectively use information",
      "Copy information without citing sources",
      "Avoid using technology"
    ],
    correct: 1
  }
];

const examController = {
  // Display exam start page
  showExam: (req, res) => {
    const { subject } = req.params;
    
    if (!SUBJECTS[subject]) {
      return res.status(404).send('Subject not found');
    }

    res.render('exam', { 
      main: SUBJECTS[subject].main,
      subject: subject,
      title: SUBJECTS[subject].title,
      strands: SUBJECTS[subject].strands
    });
  },

  // Submit exam and save results
  submitExam: async (req, res) => {
    try {
      const { nickname, strand, score, timeTaken, subject } = req.body;

      // Validate input
      if (!nickname || !strand || score === undefined || !timeTaken || !subject) {
        return res.status(400).json({ 
          success: false, 
          message: 'Missing required fields' 
        });
      }

      // Validate subject
      if (!SUBJECTS[subject]) {
        return res.status(400).json({ 
          success: false, 
          message: 'Invalid subject' 
        });
      }

      // Validate strand based on subject
      if (!SUBJECTS[subject].strands.map(s => s.name).includes(strand)) {
        return res.status(400).json({ 
          success: false, 
          message: 'Invalid strand for this subject' 
        });
      }

      // Save to database
      await ExamModel.saveResult(nickname, strand, parseInt(score), parseInt(timeTaken), subject);

      res.json({ 
        success: true, 
        message: 'Exam submitted successfully',
        redirectUrl: '/leaderboard'
      });
    } catch (error) {
      console.error('Error submitting exam:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Error submitting exam' 
      });
    }
  },

  // Display leaderboard
  showLeaderboard: async (req, res) => {
    const { subject } = req.params;

    if (!SUBJECTS[subject]) {
      return res.status(404).send('Subject not found');
    }

    try {
      const leaderboard = await ExamModel.getLeaderboard(subject, null, 50);
      const strands = SUBJECTS[subject].strands.map(s => s.name);
      const selectedStrand = req.query.strand || '';
      const userNickname = req.query.user || '';
      
      // Get total questions count for this subject
      const allQuestions = loadQuestions(subject);
      const totalQuestions = allQuestions.length;
      
      res.render('leaderboard', {
        leaderboard,
        subject,
        title: SUBJECTS[subject].title,
        strands,
        selectedStrand,
        userNickname,
        totalQuestions
      });
    } catch (error) {
      console.error('Error fetching leaderboard:', error);
      res.status(500).send('Error loading leaderboard');
    }
  },

  // Get questions as JSON (for AJAX requests)
  getQuestions: (req, res) => {
    const { subject } = req.query;
    
    if (!subject || !SUBJECTS[subject]) {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid or missing subject parameter' 
      });
    }

    // Load and randomize questions for the subject
    const allQuestions = loadQuestions(subject);
    const randomizedQuestions = randomizeQuestions(allQuestions);
    res.json({ questions: randomizedQuestions });
  },

  // API: Get leaderboard as JSON
  getLeaderboardJson: async (req, res) => {
    const { subject } = req.params;
    const strand = req.query.strand || null;
    if (!SUBJECTS[subject]) {
      return res.status(404).json({ success: false, message: 'Subject not found' });
    }
    try {
      const leaderboard = await ExamModel.getLeaderboard(subject, strand, 50);
      
      // Get total questions count for this subject
      const allQuestions = loadQuestions(subject);
      const totalQuestions = allQuestions.length;
      
      res.json({ success: true, leaderboard, totalQuestions });
    } catch (error) {
      console.error('Error fetching leaderboard:', error);
      res.status(500).json({ success: false, message: 'Error loading leaderboard' });
    }
  }
};

examController.router = router;
module.exports = examController;
