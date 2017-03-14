const Game = require('./Game/Game.js');
const db = require('./index.js');
const User = require('./Users/Users.js');

Game.remove({}).then(function() {
  Game.create({
    level: 1, chapter: 1, firstImage: 'https://s3-us-west-1.amazonaws.com/codr/L1I1.png', secondImage: 'https://s3-us-west-1.amazonaws.com/codr/L1I2.png', challengeText: '`<input placeholder="fill in"> apples;`', instructionText: 'Fill in the text below so that the box is labeled', learnText: 'To start coding, we need a way to save the values from our coding.', points: 25, solution: ['var'], lastLevel: false 
  }).then(function() {
    console.log('Successfully seeded level data into database');
  }).catch(function(err) {
    console.log('ERROR seeding level into db: ', err);
  });
});

User.remove({}).then(function() {
  User.create({
    username: 'franklin', password: 'turtle', 
    gameData: {
      achievements: 5,
      level: 1,
      chapter: 1
    }
  }).then(function() { 
    console.log('Successfully seeded user data into database');
  }).catch(function(err) {
    console.log('ERROR seeding user into db: ', err);
  });
});
