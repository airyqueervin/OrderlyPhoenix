const Game = require('./Game/Game.js');
const db = require('./index.js');
const data = require('./../../data.json');

Game.remove({}).then(function() {
  var i = 0;
  data.forEach(function(level) {
    Game.create(level)
    .then(function() {
      console.log('Successfully seeded level ' + level.level + ' data into database');
    })
    .then(function() {
      i++;
      if (i === data.length) {
        process.exit();
      }
    })
    .catch(function(err) {
      console.log('ERROR seeding level into db: ', err);
    });
  });
});
