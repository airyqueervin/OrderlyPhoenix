const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/codr');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected to codr!
});
