var express = require('express');
var router = express.Router();

const { ChangePassword } = require('./controller');
const { ValidatePassword } = require('./validation');
router.route('/').post(ValidatePassword, ChangePassword);
module.exports = router;
