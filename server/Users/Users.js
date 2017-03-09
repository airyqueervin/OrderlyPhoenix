const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  gameData: {
    achievements: Number,
    level: Number
  }
});

module.exports = mongoose.model('User', userSchema);
