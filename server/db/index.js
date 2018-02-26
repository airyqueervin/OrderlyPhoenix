const mongoose = require('mongoose');

// const db = mongoose.connect('mongodb://localhost/codr', function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('CONNECTED to the database!!');
//   }
// });
const db = mongoose.connect('mongodb://heroku_swfvg5p2:n08t0csqchs9t8elhm0tufj3s5@ds249418.mlab.com:49418/heroku_swfvg5p2', function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('CONNECTED to the database!!');
  }
});

module.exports = db;
