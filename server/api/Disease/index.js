var express = require('express');
var router = express.Router();

const { createDisease, listDisease, DeleteDisease } = require('./controller');
const { ValidateDisease } = require('./validation');

router.route('/').get(listDisease).post(ValidateDisease, createDisease);
router.route('/:id').delete(DeleteDisease);

module.exports = router;
