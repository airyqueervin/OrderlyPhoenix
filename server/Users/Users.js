var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
  username: String,
  password: String,
  gameData: {
    achievements: Number,
    level: Number
  }
});

module.exports = mongoose.model('User', User);