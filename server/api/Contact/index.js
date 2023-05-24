var express = require('express');
var router = express.Router();

const {
  createContact,
  listContact,
  PatchMessage,
  DeleteMessage,
} = require('./controller');
const { ValidateContact } = require('./validation');

router.route('/').get(listContact).post(ValidateContact, createContact);
router.route('/:id').patch(PatchMessage).delete(DeleteMessage);

module.exports = router;
