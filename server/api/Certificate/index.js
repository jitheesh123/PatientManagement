var express = require('express');
var router = express.Router();

const { listcertificate } = require('./controller');

router.route('/').get(listcertificate);
module.exports = router;
