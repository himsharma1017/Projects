const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

app.use(express.static(path.join(__dirname, '')));

const app = express();
app.use(bodyParser.json());

// Mock user and quiz question data arrays
const users = [
  { id: 1, username: 'student1', password: 'student1password', role: 'student' },
  { id: 2, username: 'student2', password: 'student2password', role: 'student' },
  { id: 3, username: 'admin1', password: 'admin1password', role: 'admin' }
];

const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        correctOption: 0
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        correctOption: 0
    },
    {
        question: "What is the largest mammal?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correctOption: 1
    }
  // ...
];

// Student and admin signup endpoints
app.post('/signup', (req, res) => {
  const { username, password, role } = req.body;
  const id = users.length + 1;
  users.push({ id, username, password, role });
  res.status(201).json({ message: 'User registered successfully' });
});

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    res.json({ message: 'Login successful', user });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Admin add question endpoint
app.post('/questions', (req, res) => {
  if (req.body.role === 'admin') {
    const { question, options, correctOption } = req.body;
    const id = quizQuestions.length + 1;
    quizQuestions.push({ id, question, options, correctOption });
    res.status(201).json({ message: 'Question added successfully' });
  } else {
    res.status(403).json({ message: 'Access denied' });
  }
});

// Admin remove question endpoint
app.delete('/questions/:id', (req, res) => {
  const questionId = parseInt(req.params.id);
  if (req.body.role === 'admin') {
    const index = quizQuestions.findIndex(q => q.id === questionId);
    if (index !== -1) {
      quizQuestions.splice(index, 1);
      res.json({ message: 'Question removed successfully' });
    } else {
      res.status(404).json({ message: 'Question not found' });
    }
  } else {
    res.status(403).json({ message: 'Access denied' });
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
