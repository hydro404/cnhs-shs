const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Set EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("home");
});

// Static files
app.use(express.static(path.join(__dirname, "public")));

// === JSON DATA (NO DATABASE NEEDED) ===
const subjects = {
  physci: {
    title: "Physical Science Materials",
    description: "Click to download lesson modules and activities.",
    files: [
      {
        title: "Lesson 1",
        desc: "The Formation of the Elements during the Big Bang and Stellar Evolution",
        items: [
          { name: "Physical Science Lesson 1.pdf", link: "./files/physci/Physical Science Lesson 1.pdf", type: "pdf" },
          { name: "Physical-Science-Activity-1.pdf", link: "./files/physci/Physical-Science-Activity-1.pdf", type: "pdf" },
          { name: "Physical-Science-Review", link: "./physci/mini-quiz1", type: "link" },
        ]
      },
      {
        title: "Lesson 2",
        desc: "Atomic Number and the Synthesis of New Elements",
        items: [
          { name: "Physical Science Lesson 2.pdf", link: "./files/physci/Physical Science Lesson 2.pdf", type: "pdf" },
          { name: "Physical-Science-Activity-2.pdf", link: "./files/physci/Physical-Science-Activity-2.pdf", type: "pdf" },
        ]
      },
      
    ]
  }
};



// === QUIZ DATA ===
const quizData = {
  physci: {
    miniQuiz1: [
      {
        question: "Which process is defined as the creation of new atomic nuclei from nucleons?",
        options: ["Beta decay", "Nucleosynthesis", "Dissociation", "Contraction"],
        correct: 1
      },
      {
        question: "Which two elements were the primary products of Big Bang Nucleosynthesis?",
        options: ["Carbon and Oxygen", "Iron and Nickel", "Hydrogen and Helium", "Lithium and Beryllium"],
        correct: 2
      },
      {
        question: "How long after the Big Bang did neutral atoms finally form as nuclei attracted electrons?",
        options: ["3 minutes", "A few seconds", "300,000 years", "1 billion years"],
        correct: 2
      },
      {
        question: "What is a \"deuteron\" composed of?",
        options: ["Two protons", "Two neutrons", "A proton and a neutron", "A proton and an electron"],
        correct: 2
      },
      {
        question: "Elements from helium (He) to Iron (Fe) are primarily produced through which type of nucleosynthesis?",
        options: ["Big Bang Nucleosynthesis", "Stellar Nucleosynthesis", "Supernova Nucleosynthesis", "Neutron capture"],
        correct: 1
      },
      {
        question: "What happens to a star when all of its hydrogen and helium are made into heavier elements?",
        options: ["It remains stable", "The star will collapse", "It turns into a giant planet", "It cools instantly"],
        correct: 1
      },
      {
        question: "Elements beyond mass $A=56$ cannot be produced through fusion. Which process creates them?",
        options: ["Carbon burning", "Helium fusion", "Neutron-capture process", "Nuclear fission"],
        correct: 2
      },
      {
        question: "In the neutron-capture process, how is an extra neutron converted into a proton?",
        options: ["Alpha decay", "Beta decay", "Gamma emission", "Nuclear contraction"],
        correct: 1
      },
      {
        question: "What temperature can be reached during Supernova Nucleosynthesis?",
        options: ["1 million degrees Celsius", "100 billion degrees Celsius", "300,000 degrees Celsius", "10 billion degrees Celsius"],
        correct: 1
      },
      {
        question: "According to the fusion equations, what is the product of the reaction: $^{20}Ne + {}^{4}He$?",
        options: ["$^{12}C$", "$^{16}O$", "$^{24}Mg$", "$^{56}Fe$"],
        correct: 2
      },
      {
        question: "What is the collective term for protons and neutrons found in the nucleus?",
        options: ["Electrons", "Nucleons", "Photons", "Isotopes"],
        correct: 1
      },
      {
        question: "What is the product of the equation: $n + p \\rightarrow$?",
        options: ["$He + \\gamma$", "$d + \\gamma$", "$Be + \\gamma$", "$C + \\gamma$"],
        correct: 1
      },
      {
        question: "The fusion of two Carbon-12 nuclei ($^{12}C + {}^{12}C$) results in which element?",
        options: ["Helium", "Magnesium", "Iron", "Oxygen"],
        correct: 1
      },
      {
        question: "Why is $^{8}Be$ considered unstable in the helium fusion process?",
        options: ["It is too heavy", "It breaks apart as rapidly as it forms", "It only forms in cold stars", "It is a neutral atom"],
        correct: 1
      },
      {
        question: "Which range of elements is formed during Supernova Nucleosynthesis?",
        options: ["Hydrogen to Helium", "Helium to Iron", "Iron to Uranium", "Carbon to Oxygen"],
        correct: 2
      }
    ]
  }
};

// === ROUTES ===
app.get("/physci/mini-quiz1", (req, res) => {
  res.render("mini-quiz", {
    title: "Physical Science - Mini Quiz 1",
    subject: "physci",
    quizId: "miniQuiz1",
    questions: quizData.physci.miniQuiz1
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
  console.log(`Server running at http://localhost:${PORT}`)
);
