const {
  ErrorMessage,
  SuccessMessageWithData,
} = require('../../helpers/commonFunctions');
const Patients = require('../../model/signup');
exports.listPatients = async (req, res) => {
  try {
    const data = await Patients.find();
    SuccessMessageWithData(res, data);
  } catch (e) {
    ErrorMessage(res, e.message);
  }
};
