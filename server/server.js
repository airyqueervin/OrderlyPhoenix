const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = require('./routes.js');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../public'));
app.use('/bundles', express.static(__dirname + '/../bundles'));

app.use('/api', router);

var port = process.env.port || 8080;

const server = app.listen(port, function() {
  console.log(`Orderly Phoenix listening at ${port}`);
});
