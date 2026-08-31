require("dotenv").config();
const express = require("express");
const path = require("path");
const examController = require("./controllers/examController");
const { title } = require("process");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
  res.render("home");
});

// Exam routes
// Exam directory route
app.get("/exam", (req, res) => {
  res.render("exam-directory");
});

app.get("/exam/:subject", examController.showExam);
app.post("/exam/submit", examController.submitExam);
app.get("/leaderboard/:subject", examController.showLeaderboard);
app.get("/api/questions", examController.getQuestions);
app.get("/api/leaderboard/:subject", examController.getLeaderboardJson);

// Mount examController router for /api/leaderboard nickname check
if (examController.router) {
  app.use(examController.router);
}

// === JSON DATA (NO DATABASE NEEDED) ===
const subjects = {
  // physci: {
  //   title: "Physical Science Materials",
  //   description: "Click to download lesson modules and activities.",
  //   files: [
  //     {
  //       title: "Lesson 1",
  //       desc: "The Formation of the Elements during the Big Bang and Stellar Evolution",
  //       items: [
  //         { name: "Physical Science Lesson 1.pdf", link: "./files/physci/Physical Science Lesson 1.pdf", type: "pdf" },
  //         { name: "Physical-Science-Activity-1.pdf", link: "./files/physci/Physical-Science-Activity-1.pdf", type: "pdf" },
  //         // { name: "Physical-Science-Review", link: "./physci/mini-quiz1", type: "link" },
  //       ]
  //     },
  //     {
  //       title: "Lesson 2",
  //       desc: "Atomic Number and the Synthesis of New Elements",
  //       items: [
  //         { name: "Physical Science Lesson 2.pdf", link: "./files/physci/Physical Science Lesson 2.pdf", type: "pdf" },
  //         { name: "Physical-Science-Activity-2.pdf", link: "./files/physci/Physical-Science-Activity-2.pdf", type: "pdf" },
  //       ]
  //     },
  //     {
  //       title: "Lesson 3",
  //       desc: "Ideas of Ancient Greeks on Atoms and Elements",
  //       items: [
  //         { name: "Physical Science Lesson 3.pdf", link: "./files/physci/Physical Science Lesson 3.pdf", type: "pdf" },
  //       ]
  //     },
  //     {
  //       title: "Lesson 1 Quarter 4",
  //       desc: "Chemical Reactions",
  //       items: [
  //         { name: "Physical Science Lesson 1 Q4.pdf", link: "./files/physci/Physical Science Lesson 1 Q4.pdf", type: "pdf" },
  //       ]
  //     },
  //     {
  //       title: "Lesson 2 Quarter 4",
  //       desc: "Chemical Changes",
  //       items: [
  //         { name: "Physical Science Lesson 2 Q4.pdf", link: "./files/physci/Physical Science Lesson 2 Q4.pdf", type: "pdf" },
  //       ]
  //     },
  //     {
  //       title: "Lesson 3 Quarter 4",
  //       desc: "Mole Relationships",
  //       items: [
  //         { name: "Physical Science Lesson 3 Q4.pdf", link: "./files/physci/Physical Science Lesson 3 Q4.pdf", type: "pdf" },
  //       ]
  //     },
  //     {
  //       title: "Lesson 4 Quarter 4",
  //       desc: "Different Sources of Energy",
  //       items: [
  //         { name: "Physical Science Lesson 4 Q4.pdf", link: "./files/physci/Physical Science Lesson 4 Q4.pdf", type: "pdf" },
  //       ]
  //     }

  //   ]
  // },
  // mil:{
  //   title: "Media and Information Literacy Materials",
  //   description: "Click to download lesson modules and activities.",
  //   files: [
  //     {
  //       title: "Lesson 1",
  //       desc: "Introduction to Media and Information Literacy",
  //       items: [
  //         { name: "MIL Lesson 1.pdf", link: "./files/media/MIL Lesson 1.pdf", type: "pdf" },
  //         { name: "MIL-Activity-1.png", link: "./files/media/MIL Activity 1.png", type: "png" },
  //       ]
  //     },
  //     {
  //       title: "Lesson 2",
  //       desc: "Media, Technology, and Information Literacy",
  //       items: [
  //         { name: "MIL Lesson 2.pdf", link: "./files/media/MIL Lesson 2.pdf", type: "pdf" },
  //         { name: "MIL-Activity-2.pdf", link: "./files/media/MIL Activity 2.pdf", type: "pdf" },
  //       ]
  //     },
  //     {
  //       title: "Lesson 3",
  //       desc: "The Evolution of Traditional to New Media",
  //       items: [
  //         { name: "MIL Lesson 3.pdf", link: "./files/media/MIL Lesson 3.pdf", type: "pdf" },
  //         { name: "MIL-Activity-3.pdf", link: "./files/media/MIL Activity 3.pdf", type: "pdf" },
  //       ]
  //     },
  //     {
  //       title: "Lesson 1 - Finals",
  //       desc: "Media Sources",
  //       items: [
  //         { name: "MIL Lesson 1 - Finals.pdf", link: "./files/media/MIL Lesson 1 - Finals.pdf", type: "pdf" },
  //       ]
  //     },

  //   ]
  // }
  emtech: {
    title: "Empowerment Technologies 12 Materials",
    description: "Click to download lesson modules and activities.",
    files: [
      {
        title: "Lesson 1",
        desc: "Introduction to ICT",
        items: [
          {
            name: "EmTech Lesson 1.pdf",
            link: "./files/emtech/1-ICT and its Current State.pdf",
            type: "pdf",
          },
          // {
          //   name: "Empowerment Technologies Activity 1.pdf",
          //   link: "./files/emtech/Empowerment Technologies Activity 1.pdf",
          //   type: "pdf",
          // },
        ],
      },
      {
        title: "Lesson 2",
        desc: "Software Applications and Platforms",
        items: [
          {
            name: "EmTech Lesson 2.pdf",
            link: "./files/emtech/2-Software Applications and Platforms.pdf",
            type: "pdf",
          },
          // {
          //   name: "Empowerment Technologies Activity 1.pdf",
          //   link: "./files/emtech/Empowerment Technologies Activity 1.pdf",
          //   type: "pdf",
          // },
        ],
      },
      {
        title: "Lesson 3",
        desc: "Online Safety, Security, Ethics and Etiquette Standards",
        items: [
          {
            name: "EmTech Lesson 3.pdf",
            link: "./files/emtech/3-Online Safety, Security, Ethics and Etiquette Standards.pdf",
            type: "pdf",
          },
          // {
          //   name: "Empowerment Technologies Activity 1.pdf",
          //   link: "./files/emtech/Empowerment Technologies Activity 1.pdf",
          //   type: "pdf",
          // },
        ],
      },
      {
        title: "Lesson 4",
        desc: "Online Navigation",
        items: [
          {
            name: "EmTech Lesson 4.pdf",
            link: "./files/emtech/4-Online Navigation.pdf",
            type: "pdf",
          },
        ],
      },
      {
        title: "Lesson 5",
        desc: "Online Productivity Tool: Word",
        items: [
          {
            name: "EmTech Lesson 5.pdf",
            link: "./files/emtech/5-Productivity Tool - Word.pdf",
            type: "pdf",
          },
        ],
      },
      {
        title: "Lesson 6",
        desc: "Online Productivity Tool: Slides",
        items: [
          {
            name: "EmTech Lesson 6.pdf",
            link: "./files/emtech/6-Productivity Tool - Slides.pdf",
            type: "pdf",
          },
        ],
      },
      {
        title: "Lesson 7",
        desc: "Online Productivity Tool: Spreadsheet",
        items: [
          {
            name: "EmTech Lesson 7.pdf",
            link: "./files/emtech/7-Productivity Tool - Spreadsheet.pdf",
            type: "pdf",
          },
        ],
      }
    ],
  },

  gensci:{
    title: "General Science 11 Materials",
    description: "Click to download lesson modules and activities.",
    files: [
      {
        title: "Lesson 1",
        desc: "Physics in Daily Life",
        items: [
          {
            name: "General Science Lesson 1.pdf",
            link: "./files/gensci/GenSci-W1-1.pdf",
            type: "pdf",
          },
        ],
      },
      {
        title: "Lesson 2",
        desc: "Translational and Rotational Motion",
        items: [
          {
            name: "General Science Lesson 2.pdf",
            link: "./files/gensci/GenSci-W2.pdf",
            type: "pdf",
          },
        ],
      },
      {
        title: "Lesson 3",
        desc: "Simple and Compound Machines",
        items: [
          {
            name: "General Science Lesson 3.pdf",
            link: "./files/gensci/GenSci-W3.pdf",
            type: "pdf",
          },
          {
            name: "General Science Lesson 3 B.pdf",
            link: "./files/gensci/GenSci-W3-2.pdf",
            type: "pdf",
          },
          {
            name: "General Science Lesson 3 C.pdf",
            link: "./files/gensci/GenSci-W3-3.pdf",
            type: "pdf",
          }
        ],
      },
      {
        title: "Lesson 4",
        desc: "Fluid Mechanics",
        items: [
          {
            name: "General Science Lesson 4 A.pdf",
            link: "./files/gensci/GenSci-W4-1.pdf",
            type: "pdf",
          },
          {
            name: "General Science Lesson 4 B.pdf",
            link: "./files/gensci/GenSci-W4-2.pdf",
            type: "pdf",
          }
        ],
      },
      {
        title: "Lesson 5",
        desc: "Utilization of Electricity: Electrical Safety Practices & Risk Assessment",
        items: [
          {
            name: "General Science Lesson 5.pdf",
            link: "./files/gensci/GenSci-W5.pdf",
            type: "pdf",
          },
        ],
      },
      {
        title: "Lesson 6",
        desc: "Introduction to Waves",
        items: [
          {
            name: "General Science Lesson 6.pdf",
            link: "./files/gensci/GenSci-W6.pdf",
            type: "pdf",
          },
        ],
      }
    ],
  }
};

// === QUIZ DATA ===
const quizData = {
  physci: {
    miniQuiz1: [
      {
        question:
          "Which process is defined as the creation of new atomic nuclei from nucleons?",
        options: [
          "Beta decay",
          "Nucleosynthesis",
          "Dissociation",
          "Contraction",
        ],
        correct: 1,
      },
      {
        question:
          "Which two elements were the primary products of Big Bang Nucleosynthesis?",
        options: [
          "Carbon and Oxygen",
          "Iron and Nickel",
          "Hydrogen and Helium",
          "Lithium and Beryllium",
        ],
        correct: 2,
      },
      {
        question:
          "How long after the Big Bang did neutral atoms finally form as nuclei attracted electrons?",
        options: [
          "3 minutes",
          "A few seconds",
          "300,000 years",
          "1 billion years",
        ],
        correct: 2,
      },
      {
        question: 'What is a "deuteron" composed of?',
        options: [
          "Two protons",
          "Two neutrons",
          "A proton and a neutron",
          "A proton and an electron",
        ],
        correct: 2,
      },
      {
        question:
          "Elements from helium (He) to Iron (Fe) are primarily produced through which type of nucleosynthesis?",
        options: [
          "Big Bang Nucleosynthesis",
          "Stellar Nucleosynthesis",
          "Supernova Nucleosynthesis",
          "Neutron capture",
        ],
        correct: 1,
      },
      {
        question:
          "What happens to a star when all of its hydrogen and helium are made into heavier elements?",
        options: [
          "It remains stable",
          "The star will collapse",
          "It turns into a giant planet",
          "It cools instantly",
        ],
        correct: 1,
      },
      {
        question:
          "Elements beyond mass $A=56$ cannot be produced through fusion. Which process creates them?",
        options: [
          "Carbon burning",
          "Helium fusion",
          "Neutron-capture process",
          "Nuclear fission",
        ],
        correct: 2,
      },
      {
        question:
          "In the neutron-capture process, how is an extra neutron converted into a proton?",
        options: [
          "Alpha decay",
          "Beta decay",
          "Gamma emission",
          "Nuclear contraction",
        ],
        correct: 1,
      },
      {
        question:
          "What temperature can be reached during Supernova Nucleosynthesis?",
        options: [
          "1 million degrees Celsius",
          "100 billion degrees Celsius",
          "300,000 degrees Celsius",
          "10 billion degrees Celsius",
        ],
        correct: 1,
      },
      {
        question:
          "According to the fusion equations, what is the product of the reaction: $^{20}Ne + {}^{4}He$?",
        options: ["$^{12}C$", "$^{16}O$", "$^{24}Mg$", "$^{56}Fe$"],
        correct: 2,
      },
      {
        question:
          "What is the collective term for protons and neutrons found in the nucleus?",
        options: ["Electrons", "Nucleons", "Photons", "Isotopes"],
        correct: 1,
      },
      {
        question: "What is the product of the equation: $n + p \\rightarrow$?",
        options: [
          "$He + \\gamma$",
          "$d + \\gamma$",
          "$Be + \\gamma$",
          "$C + \\gamma$",
        ],
        correct: 1,
      },
      {
        question:
          "The fusion of two Carbon-12 nuclei ($^{12}C + {}^{12}C$) results in which element?",
        options: ["Helium", "Magnesium", "Iron", "Oxygen"],
        correct: 1,
      },
      {
        question:
          "Why is $^{8}Be$ considered unstable in the helium fusion process?",
        options: [
          "It is too heavy",
          "It breaks apart as rapidly as it forms",
          "It only forms in cold stars",
          "It is a neutral atom",
        ],
        correct: 1,
      },
      {
        question:
          "Which range of elements is formed during Supernova Nucleosynthesis?",
        options: [
          "Hydrogen to Helium",
          "Helium to Iron",
          "Iron to Uranium",
          "Carbon to Oxygen",
        ],
        correct: 2,
      },
    ],
  },
};

const generalScienceTermExamResults = [
  { name: "Arcabal, James Vincent", score: 41 },
  { name: "Atos, Jhon Mark", score: 41 },
  { name: "Bicamon, Renato", score: 48 },
  { name: "Garcia, Steven Gabriel", score: 38 },
  { name: "Gomez, John Patrick", score: 58 },
  { name: "Guiriba, Rheynz Chester", score: 51 },
  { name: "Gutierrez, Joshua", score: 17 },
  { name: "Inciso, Renz Andrei", score: 45 },
  { name: "Marcellana, Jhon Ed", score: 38 },
  { name: "Miranda, Jery Maison", score: 47 },
  { name: "Molenilla, Paul Cyruz", score: 56 },
  { name: "Moral, Yoven", score: 45 },
  { name: "Morcozo, Kurt", score: 48 },
  { name: "Muni, Jamil", score: 55 },
  { name: "Nabo, Khian Jay", score: 59 },
  { name: "Napili, Dominic", score: 48 },
  { name: "Navera, Arjay", score: 54 },
  { name: "Nebreja, Gil", score: null, status: "Not yet recorded" },
  { name: "Nuyda, Jhon Rheyn", score: 35 },
  { name: "Nuyles, Jan Noelle", score: 48 },
  { name: "Ovilla, John", score: 54 },
  { name: "Rabina, Jaden Cyrus", score: 42 },
  { name: "Reyes, Charles Dominic", score: 46 },
  { name: "Reyes, Curt Paulo", score: 43 },
  { name: "Samnaton, Jhied Allen", score: 54 },
  { name: "Soriaga, Dustin Paul", score: null, status: "Not yet recorded" },
  { name: "Tuiza, James", score: 45 },
  { name: "Vibar, Angelo", score: 60 },
  { name: "Camasis, Jhonna Myril", score: 56 },
  { name: "Dado, Jeah Angel", score: 28 },
  { name: "Dela Cruz, Alex Chloe", score: 55 },
  { name: "Garcia, Bea", score: 49 },
  { name: "Magdaraog, Ashley Jean", score: 50 },
  { name: "Miraran, Princes Rhean", score: 37 },
  { name: "Misolania, Reynalyn", score: 34 },
  { name: "Moresca, Kyla", score: 53 },
  { name: "Nacor, Princes Heart", score: 42 },
  { name: "Nator, Hannah Therese", score: 46 },
  { name: "Nisola, Vhench Castle", score: null, status: "Missing" },
  { name: "Novelo, Jan Kialyn", score: 26 },
  { name: "Racines, Samantha", score: 56 },
  { name: "Vibar, Charess", score: 25 },
];

function buildDenseLeaderboard(entries) {
  const recorded = entries
    .filter((entry) => Number.isFinite(entry.score))
    .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));
  const unrecorded = entries
    .filter((entry) => !Number.isFinite(entry.score))
    .sort((a, b) => {
      const statusOrder = { "Not yet recorded": 0, Missing: 1 };
      return statusOrder[a.status] - statusOrder[b.status] || a.name.localeCompare(b.name);
    });
  const scoreCounts = recorded.reduce((counts, entry) => {
    counts[entry.score] = (counts[entry.score] || 0) + 1;
    return counts;
  }, {});
  let rank = 0;
  let previousScore = null;
  const ranked = recorded.map((entry) => {
    if (entry.score !== previousScore) rank += 1;
    previousScore = entry.score;
    return { ...entry, rank, isTied: scoreCounts[entry.score] > 1 };
  });
  return [...ranked, ...unrecorded.map((entry) => ({ ...entry, rank: null, isTied: false }))];
}

// === ROUTES ===
app.get("/physci/mini-quiz1", (req, res) => {
  res.render("mini-quiz", {
    title: "Physical Science - Mini Quiz 1",
    subject: "physci",
    quizId: "miniQuiz1",
    questions: quizData.physci.miniQuiz1,
  });
});

app.get("/movies/:id", (req, res) => {
  const movieId = req.params.id;
  res.render("movies", {
    movieId,
    tmdbApiKey: process.env.TMDB_API_KEY || "",
  });
});

app.get("/movies", (req, res) => {
  res.render("movies", {
    movieId: null,
    tmdbApiKey: process.env.TMDB_API_KEY || "",
  });
});

app.get("/gensci/reviewer", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "general-science-quizbee.html"));
});

app.get("/gensci/term-exam-results", (req, res) => {
  const results = buildDenseLeaderboard(generalScienceTermExamResults);
  res.render("term-exam-leaderboard", {
    results,
    maxScore: 60,
    totalStudents: results.length,
    recordedCount: results.filter((entry) => entry.rank !== null).length,
  });
});

app.get("/:subject", (req, res) => {
  const subjectKey = req.params.subject;

  if (!subjects[subjectKey]) return res.status(404).send("Subject not found");

  res.render("subject", {
    data: subjects[subjectKey],
    subject: subjectKey,
  });
});

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`),
);
