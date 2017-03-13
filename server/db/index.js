const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost/codr', function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('CONNECTED to the database!!');
  }
});

module.exports = db;
