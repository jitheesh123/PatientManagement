var express = require('express');
var router = express.Router();

const { createProfile, listProfile } = require('./controller');
const { ValidateProfile } = require('./validation');

router.route('/').post(createProfile).get(listProfile);
module.exports = router;
