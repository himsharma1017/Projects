const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:5000/your_database');

// Session setup
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true,
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

// Use routes
app.use(require('../BackendAPI/Routes/auth.routes'));

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
