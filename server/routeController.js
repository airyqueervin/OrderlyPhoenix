const User = require('./db/Users/Users.js');
const Game = require('./db/Game/Game.js');
const db = require('./db/index.js');

const userTest = function(req, res) {
  User.create({
    username: req.body.username
  })
  .then(function() {
    res.send('WE DID IT YYYAAAAAYYYYY!!!!');
  })
  .catch(function(err) {
    console.log('ERROR', err);
    res.send('YOU DONE GOOFED!!', err);
  });
};

module.exports.userTest = userTest;
