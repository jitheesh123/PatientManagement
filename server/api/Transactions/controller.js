const {
  ErrorMessage,
  SuccessMessageWithData,
} = require('../../helpers/commonFunctions');
const Transactions = require('../../model/transaction');
exports.listTransactions = async (req, res) => {
  try {
    const data = await Transactions.find();
    SuccessMessageWithData(res, data);
  } catch (e) {
    ErrorMessage(res, e.message);
  }
};
