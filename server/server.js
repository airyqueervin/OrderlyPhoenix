const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = require('./routes.js');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../public'));
app.use('/bundles', express.static(__dirname + '/../bundles'));

app.use('/api', router);

var PORT = process.env.PORT || 8080;

const server = app.listen(PORT, function() {
  console.log(`Orderly Phoenix listening at ${PORT}`);
});
