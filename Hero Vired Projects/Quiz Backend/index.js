const express = require('express');

const app = express();
const port = 5000;

app.use(express.json());

// Temporary database for user data
const tempUserData = [];

// Helper function to generate a unique ID
function generateUniqueId() {
  return Math.floor(Math.random() * 10000);
}

// Student Signup Endpoint
app.post('/api/student/signup', (req, res) => {
  const { username, password } = req.body;
  try{
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required.' });
  }
  
  // Check if the username already exists
  if (tempUserData.some((user) => user.username === username)) {
    return res.status(400).json({ message: 'Username already exists.' });
  }
  res.status(201).json({
    message:"Username does not exist already.",
    username
  })
}
catch(error){
    console.log(error,"Error from /api/student/signup");
}

  const user = {
    id: generateUniqueId(),
    username,
    password,
    role: 'student',
  };

  tempUserData.push(user);

  return res.status(201).json({ message: 'Student account created successfully.' });
});

// Student Login Endpoint
app.post('/api/student/login', async(req, res) => {
  const { username, password } = req.body;
  const user = await tempUserData.find((u) => u.username === username && u.password === password && u.role === 'student');
    try{
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials or role.', user });
  }
    
    return res.status(201).json({ message: 'Student login successful.', user });
}
    catch(error){
        console.log(error, "Error from Student Login Endpoint");
    }
});

// Admin Signup Endpoint
app.post('/api/admin/signup', (req, res) => {
  const { username, password } = req.body;
  try{
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required.' });
  }

  // Check if the username already exists
  if (tempUserData.some((user) => user.username === username)) {
    return res.status(400).json({ message: 'Username already exists.' });
  }
  res.status(201).json({
    message:"Username can be created without any hurdle.",
    username
  })
  }
  catch(error){
    console.log(error, "Error from Admin Signup Endpoint.");
  }
  const user = {
    id: generateUniqueId(),
    username,
    password,
    role: 'admin',
  };

  tempUserData.push(user);

  return res.status(201).json({ message: 'Admin account created successfully.' });
});

// Admin Login Endpoint
app.post('/api/admin/login', async(req, res) => {
  const { username, password } = req.body;
  const user = await tempUserData.find((u) => u.username === username && u.password === password && u.role === 'admin');

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials or role.' });
  }

  return res.json({ message: 'Admin login successful.', user });
});

// Mock Quiz Question Data Array
const quizQuestions = [
    {
      id: 1,
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      correctOption: 0,
    },
    {
      id: 2,
      question: 'Which planet is known as the Red Planet?',
      options: ['Mars', 'Venus', 'Jupiter', 'Mercury'],
      correctOption: 0,
    },
  ];
  
  // Admin - Add Question Endpoint
  app.post('/api/admin/add-question', (req, res) => {
    const { question, options, correctOption } = req.body;
  try{
    if (!question || !options || !correctOption) {
      return res.status(400).json({ message: 'Question, options, and correctOption are required.' });
    }
    return res.status(201).json({
        message:"All the information about question is provided.",
        question
    })
}
catch(error){
    console.log(error,"Error from Admin trying to Add Question.");
}
  
    const newQuestion = {
      id: generateUniqueId(), // Generate a unique question ID
      question,
      options,
      correctOption,
    };
  
    quizQuestions.push(newQuestion);
  
    return res.status(201).json({ message: 'Question added successfully.', question: newQuestion });
  });
  
  // Admin - Remove Question Endpoint
  app.delete('/api/admin/remove-question/:id', async(req, res) => {
    const questionId = await parseInt(req.params.id, 10);
    const index = await quizQuestions.findIndex((q) => q.id === questionId);
    try{
    if (index === -1) {
      return res.status(404).json({ message: 'Question not found.' });
    }
    return res.json({ message: 'Question removed successfully.' });
}
catch(error){
    console.log(error,"Error from Admin deleting question.");
}
    quizQuestions.splice(index, 1);
  });
  
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
