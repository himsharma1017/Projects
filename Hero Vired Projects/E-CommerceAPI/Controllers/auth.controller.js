
const User = require('../Models/auth.model');

const authController = {
  signup: async (req, res) => {
    try {
      const { username, email, password } = req.body;

      const user = new User({
        username,
        email,
        password
      });

      await user.save();
      res.redirect('/dashboard'); // Redirect to dashboard after successful signup
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },

  login: async (req, res) => {
    try {
      const { username, password } = req.body;

      const user = await User.findOne({ username });

      if (user && user.password === password) {
        req.session.username = username;
        res.redirect('/dashboard'); // Redirect to dashboard after successful login
      } else {
        res.status(401).send('Unauthorized'); // Incorrect username or password
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }
};

module.exports = authController;
