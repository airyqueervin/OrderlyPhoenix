const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./Users/Users.js');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/test', function(req, res) {
  var testUser = new User({username: req.body.username});
  testUser.save(function(err) {
    if (err) {
      console.log('ERROR', err);
      res.send('YOU DONE GOOFED!!');
    } else {
      res.send('WE DID IT YYYAAAAAYYYYY!!!!');
    }
  });
});

app.use(express.static(__dirname + '/../www'));

mongoose.connect('mongodb://localhost/codr', function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('CONNECTED to the database!!');
  }
});

var port = process.env.port || 3000;

const server = app.listen(port, function() {
  console.log(`Orderly Phoenix listening at ${port}`);
});
