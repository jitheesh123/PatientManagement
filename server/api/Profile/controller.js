const medicaldetails = require('../../model/medicalDetails');
const signup = require('../../model/signup');
const {
  SuccessMessageWithOutData,
  PostData,
  ErrorMessage,
  SuccessMessageWithData,
  GetData,
  EditData,
  DeleteData,
} = require('../../helpers/commonFunctions');

const createProfile = async (req, res) => {
  try {
    let SignUpdata = await GetData(signup, { LoginId: req.user.id });
    let MedicalData = {
      Blood: req.body.Blood,
      Height: req.body.Height,
      Weight: req.body.Weight,
      Gender: req.body.Gender,
      DiseaseName: req.body.DiseaseName,
      startedDate: req.body.startedDate,
      Remarks: req.body.Remarks,
    };
    let medicalData;
    if (SignUpdata[0].MedicalId) {
      await EditData(medicaldetails, SignUpdata[0].MedicalId, SignUpData);
    } else {
      medicalData = await PostData(medicaldetails, MedicalData);
    }
    let SignUpData = {
      Name: req.body.Name,
      PhoneNumber: req.body.PhoneNumber,
      Address: req.body.Address,
      AadharNo: req.body.AadharNo,
      Dob: req.body.Dob,
      PinCode: req.body.PinCode,
      Country: req.body.Country,
      State: req.body.State,
      MedicalId: medicalData._id,
    };

    await EditData(signup, SignUpdata[0]._id, SignUpData);

    SuccessMessageWithOutData(res, 'Profile Updated successfully');
  } catch (e) {
    ErrorMessage(res, e.message);
  }
};
const listProfile = async (req, res) => {
  try {
    const data = await signup
      .find({ LoginId: req.user.id })
      .populate(['LoginId', 'MedicalId']);
    SuccessMessageWithData(res, data);
  } catch (e) {
    ErrorMessage(res, e.message);
  }
};

module.exports = { createProfile, listProfile };
