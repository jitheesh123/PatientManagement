const Disease = require('../../model/Disease');
const {
  SuccessMessageWithOutData,
  PostData,
  ErrorMessage,
  SuccessMessageWithData,
  DeleteData,
  GetData,
} = require('../../helpers/commonFunctions');

const createDisease = async (req, res) => {
  try {
    await PostData(Disease, req.body);
    SuccessMessageWithOutData(res, 'Submit successfully');
  } catch (e) {
    ErrorMessage(res, e.message);
  }
};
const listDisease = async (req, res) => {
  try {
    const data = await GetData(Disease);
    SuccessMessageWithData(res, data);
  } catch (e) {
    ErrorMessage(res, e.message);
  }
};

const DeleteDisease = async (req, res) => {
  try {
    await DeleteData(Disease, req.params.id);
    SuccessMessageWithOutData(res, 'Deleted successfully');
  } catch (e) {
    ErrorMessage(res, e.message);
  }
};
module.exports = { createDisease, listDisease, DeleteDisease };
