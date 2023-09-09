const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new mongoose.Schema({
  username: 
  { type: String,
    required: true,
    unique: true },
  email: 
  { type: String, 
    required: true, 
    unique: true },
  password: 
  { type: String, 
    required: true,
    validate: {
      validator: function(password) {
        // Check if password is at least 8 characters long and contains at least one digit, one lowercase letter, one uppercase letter, and one special character
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z\d])[\S]{8,}$/.test(password);
      },
      message: 'Password must be at least 8 characters long and include one digit, one lowercase letter, one uppercase letter, and one special character.'
    }
   },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

userSchema.pre('save', async function(next) {
  try {
    if (this.isModified('password')) {
      const hashedPassword = await bcrypt.hash(this.password, 10);
      this.password = hashedPassword;
    }
    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;