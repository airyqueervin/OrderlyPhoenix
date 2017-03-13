const express = require('express');
const app = express();
const router = express.Router();
const routeCtrl = require('./routeController');

router.post('/test', routeCtrl.userTest);

module.exports = router;
