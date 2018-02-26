const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  level: Number,
  chapter: Number,
  firstImage: String,
  secondImage: String,
  challengeText: Array,
  instructionText: String,
  learnText: String,
  points: Number,
  hint: String,
  solution: Array,
  lastLevel: Boolean
});

module.exports = mongoose.model('Game', gameSchema);
