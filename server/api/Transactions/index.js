var express = require('express');
var router = express.Router();

const { listTransactions } = require('./controller');

router.route('/').get(listTransactions);
module.exports = router;
