const {
  ErrorMessage,
  SuccessMessageWithData,
} = require('../../helpers/commonFunctions');
const certificate = require('../../model/certificate');
exports.listcertificate = async (req, res) => {
  try {
    const data = await certificate.find({ patientRegId: req.user.id });
    SuccessMessageWithData(res, data);
  } catch (e) {
    ErrorMessage(res, e.message);
  }
};
