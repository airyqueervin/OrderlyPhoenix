const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  chapters: {
    level: Number,
    chapter: Number,
    firstImage: String,
    secondImage: String,
    challengeText: String,
    instructionText: String,
    learnText: String,
    points: Number,
    solution: Array
  }
  
});

module.exports = mongoose.model('Game', gameSchema);
