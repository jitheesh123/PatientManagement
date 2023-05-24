var express = require('express');
var router = express.Router();

const { login, GetProfile, driverSignUp } = require('./controller');
const { Validatelogin } = require('./validation');

router.route('/').post(Validatelogin, login);
router.route('/GetProfile').post(GetProfile);
module.exports = router;
