const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const webpackConfig = require('../webpack.config.js');
// const webpackParser = require('webpack-body-parser');
const User = require('./Users/Users.js');
const app = express();

const compiler = webpack(webpackConfig);

app.use(express.static(__dirname + '/../www'));

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// app.use(webpackParser.json());
// app.use(webpackParser.urlencoded({extended: false}));

app.post('/test', function(req, res) {
  console.log('REQ BODY: ', req.body);
  var testUser = new User({username: req.body.username});
  testUser.save(function(err) {
    if (err) {
      console.log('ERROR', err);
      res.send('YOU DONE GOOFED!!');
    } else {
      res.send('WE DID IT YYYAAAAAYYYYY!!!!');
    }
  });
})

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
