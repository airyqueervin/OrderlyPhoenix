const Game = require('./Game/Game.js');
const db = require('./index.js');

Game.remove({}).then(function() {
  Game.create({
    level: 1, chapter: 1, firstImage: 'firstImage', secondImage: 'secondImage', challengeText: '`<input placeholder="fill in"> apples;`', instructionText: 'Fill in the text below so that the box is labeled', learnText: 'To start coding, we need a way to save the values from our coding.', points: 25, solution: ['var'], lastLevel: false 
  }).then(function() {
    console.log('Successfully seeded into game table');
  }).catch(function(err) {
    console.log('ERROR seeding into db: ', err);
  });
});
