const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Set EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

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
          { name: "Physical Science Lesson 1.pdf", link: "./files/physci/Physical Science Lesson 1.pdf" },
          { name: "Physical-Science-Activity-1.pdf", link: "./files/physci/Physical-Science-Activity-1.pdf" },
        ]
      },
      {
        title: "Lesson 2",
        desc: "Atomic Number and the Synthesis of New Elements",
        items: [
          { name: "Physical Science Lesson 2.pdf", link: "./files/physci/Physical Science Lesson 2.pdf" },
          { name: "Physical-Science-Activity-2.pdf", link: "./files/physci/Physical-Science-Activity-2.pdf" },
        ]
      },
      
    ]
  }
};


// === ROUTES ===
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
