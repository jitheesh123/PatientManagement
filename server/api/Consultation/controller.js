const hospital = require('../../model/hospital');
const department = require('../../model/department');
const transaction = require('../../model/transaction');
const consultation = require('../../model/consultation');
const signup = require('../../model/signup');
const certificate = require('../../model/certificate');
const {
  SuccessMessageWithData,
  SuccessMessageWithOutData,
  ErrorMessage,
} = require('../../helpers/commonFunctions');
const { initiateTask, stopTask } = require('../../modules/cron/index');
const Web3 = require('web3');

module.exports = {
  createConsultation: async (req, res) => {
    try {
      let { bookingData, transactionData } = req.body;

      const web3 = new Web3(
        'https://polygon-mumbai.g.alchemy.com/v2/mLfcskniN7Avdy38F1q4jfIReQNYZgYO'
      );

      const response = await web3.eth.getTransactionReceipt(
        transactionData.transactionHash
      );
      let hospitalData = await hospital.findOne({
        hospitalId: bookingData.hospitalId,
      });

      let departmentData = await department.findOne({
        departmentId: bookingData.departmentId,
      });
      let transactionDetails = new transaction({
        amount: '0.00',
        appointmentType: 'consultation',
        transactionHash: transactionData.transactionHash,
        loginId: req.user.id,
      });

      const trans = await transaction.create(transactionDetails);
      bookingData.hospitalId = hospitalData.id;
      bookingData.departmentId = departmentData.id;
      bookingData.loginId = req.user.id;
      bookingData.date = new Date(bookingData.date).setHours(0, 0, 0, 0);

      const newConsult = new consultation({
        hospitalId: bookingData.hospitalId,
        departmentId: bookingData.departmentId,
        loginId: bookingData.loginId,
        date: bookingData.date,
        status: 'pending',
        transactionId: trans._id,
        time: bookingData.time,
        doctorId: bookingData.doctorId,
      });
      const consult = await consultation.create(newConsult);
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
        'Your Payment is Success and booking is Confirmed'
      );
    } catch (error) {
      return ErrorMessage(res, error);
    }
  },
  getConsultation: async (req, res) => {
    try {
      const data = await signup.findOne({
        LoginId: req.user.id,
      });
      let consultationData;
      if (data.Role === 'Admin') {
        consultationData = await consultation
          .find()
          .populate('departmentId')
          .populate('doctorId')
          .populate('hospitalId');
      } else {
        consultationData = await consultation
          .find({
            loginId: req.user.id,
          })
          .populate('departmentId')
          .populate('doctorId')
          .populate('hospitalId');
      }
      const SignUpdata = await signup.findOne({
        LoginId: consultationData[0].loginId,
      });
      return SuccessMessageWithData(res, {
        consultationData,
        data: SignUpdata,
      });
    } catch (error) {
      return ErrorMessage(res, error);
    }
  },
  generateConsultationCert: async (req, res) => {
    try {
      const { certdata } = req.body;
      // console.log(certdata);

      const web3 = new Web3(
        'https://polygon-mumbai.g.alchemy.com/v2/TDPpwSJ7kw9zMWc-3bS-Dse5O8NF4Uk_'
      );

      const response = await web3.eth.getTransactionReceipt(
        certdata.transactionHash
      );

      const consultCert = await certificate.create({
        certificateNumber: certdata.certificateNumber,
        patientName: certdata.patientName,
        patientUUID: certdata.patientUUID,
        patientRegId: certdata.patientRegId,
        doctorName: certdata.doctorName,
        consultationTime: certdata.consultationTime,
        departmentName: certdata.departmentName,
        hospitalName: certdata.hospitalName,
        issuerName: certdata.issuerName,
        issuerId: certdata.issuerId,
        issuedDateTime: certdata.issuedDateTime,
      });
      const transactions = await transaction.create({
        transactionHash: certdata.transactionHash,
        appointmentType: 'consultCertification',
        loginId: certdata.patientRegId,
        amount: '0.00',
      });

      const transactionOnSuccess = initiateTask('*/5 * * * * *', async () => {
        try {
          if (response.status === true) {
            const data = await transaction
              .updateOne({ _id: transactions.id }, { status: true })
              .exec();
            stopTask(transactionOnSuccess, 'transactionOnSuccess');
          }
        } catch (err) {
          console.log(err);
        }
      });
      return SuccessMessageWithOutData(res, 'Certificate issued');
    } catch (err) {
      ErrorMessage(res, err.message);
    }
  },
};
