var express = require('express');
var router = express.Router();

const { listPatients } = require('./controller');

router.route('/').get(listPatients);
module.exports = router;
