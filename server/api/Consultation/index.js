var express = require('express');
var router = express.Router();

const {
  createConsultation,
  getConsultation,
  generateConsultationCert,
} = require('./controller');

router.route('/').get(getConsultation).post(createConsultation);
router.route('/issue-consultation').post(generateConsultationCert);

module.exports = router;
