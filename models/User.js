const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  uname: {
    type: String,
    trim: true,
  },
  pass: {
    type: String,
    trim: true
  }
});

module.exports = mongoose.model('User', userSchema);
