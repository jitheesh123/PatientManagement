const vaccination = require('../../model/vaccination');
const vaccine = require('../../model/vaccine');
const transaction = require('../../model/transaction');
const hospital = require('../../model/hospital');
const signup = require('../../model/signup');
const { initiateTask, stopTask } = require('../../modules/cron/index');
const Web3 = require('web3');

const {
  SuccessMessageWithData,
  ErrorMessage,
  SuccessMessageWithOutData,
} = require('../../helpers/commonFunctions');

module.exports = {
  getVaccineList: async (req, res) => {
    try {
      const vaccineList = await vaccine.find();
      return SuccessMessageWithData(res, vaccineList);
    } catch (error) {
      return ErrorMessage(res, error);
    }
  },
  createVaccine: async (req, res) => {
    try {
      let { bookingData, transactionData } = req.body;
      const web3 = new Web3(
        'https://polygon-mumbai.g.alchemy.com/v2/mLfcskniN7Avdy38F1q4jfIReQNYZgYO'
      );

      const response = await web3.eth.getTransactionReceipt(
        transactionData.transactionHash
      );
      let hospitalData = await hospital.findOne({
        _id: bookingData.hospitalId,
      });
      let vaccineList = await vaccine.findOne({
        _id: bookingData.vaccineId,
      });
      let transactionDetails = new transaction({
        amount: '0.00',
        appointmentType: 'vaccination',
        transactionHash: transactionData.transactionHash,
        loginId: req.user.id,
      });
      const trans = await transaction.create(transactionDetails);
      bookingData.hospitalId = hospitalData._id;
      bookingData.vaccineId = vaccineList._id;
      bookingData.loginId = req.user.id;
      bookingData.date = new Date(bookingData.date).setHours(0, 0, 0, 0);

      const newData = new vaccination({
        hospitalId: bookingData.hospitalId,
        vaccineId: bookingData.vaccineId,
        LoginId: bookingData.loginId,
        date: bookingData.date,
        status: 'not-taken',
      });

      const vaccines = await vaccination.create(newData);

      const transactionOnSuccess = initiateTask('*/5 * * * * *', async () => {
        try {
          if (response.status === true) {
            const data = await transaction
              .updateOne({ _id: trans.id }, { status: true })
              .exec();
            stopTask(transactionOnSuccess, 'transactionOnSuccess');
          }
        } catch (err) {
          console.log(err);
        }
      });
      return SuccessMessageWithOutData(
        res,
        'Your Payment is success and booking is confirmed'
      );
    } catch (error) {
      return ErrorMessage(res, error.message);
    }
  },
  getEachVaccineData: async (req, res) => {
    try {
      const data = await signup.findOne({
        LoginId: req.user.id,
      });

      let vaccineData = await vaccination
        .find()
        .populate('vaccineId')
        .populate('hospitalId');

      const SignUpdata = await signup.find({
        LoginId: req.user.id,
      });
      return SuccessMessageWithData(res, { vaccineData, data: SignUpdata });
    } catch (error) {
      return ErrorMessage(res, error.message);
    }
  },
};
