var express = require('express');
var router = express.Router();

const {
  createPatient,
  listPatient,
  PatchPatient,
  DeletePatient,
} = require('./controller');
const { ValidatePatient } = require('./validation');

router.route('/').get(listPatient).post(ValidatePatient, createPatient);
router.route('/:id').patch(ValidatePatient, PatchPatient).delete(DeletePatient);

module.exports = router;
