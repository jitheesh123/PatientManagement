const SignUp = require('../../model/signup');
const Login = require('../../model/login');
const {
  SuccessMessageWithOutData,
  PostData,
  ErrorMessage,
  SuccessMessageWithData,
  GetData,
  EditData,
  DeleteData,
} = require('../../helpers/commonFunctions');
const {
  GeneratePasswordAndHash,
} = require('../../modules/GeneratePasswordAndHash');
const createPatient = async (req, res) => {
  try {
    let { PasswordInPlainText, HashedPassword, salt } =
      await GeneratePasswordAndHash(req.body.Password);
    req.body.Password = HashedPassword;
    req.body.salt = salt;
    req.body.Role = 'Patient';

    const LoginData = await PostData(Login, {
      Email: req.body.Email,
      Password: req.body.Password,
      salt: req.body.salt,
    });
    await PostData(SignUp, {
      Name: req.body.Name,
      Role: req.body.Role,
      PhoneNumber: req.body.PhoneNumber,
      LoginId: LoginData.id,
    });
    SuccessMessageWithOutData(res, 'Submit successfully');
  } catch (e) {
    ErrorMessage(res, e.message);
  }
};
const listPatient = async (req, res) => {
  try {
    const data = await GetData(contact);
    SuccessMessageWithData(res, data);
  } catch (e) {
    ErrorMessage(res, e.message);
  }
};
const PatchPatient = async (req, res) => {
  try {
    await EditData(contact, req.params.id, { status: 'read' });
    SuccessMessageWithOutData(res, 'Updated successfully');
  } catch (e) {
    ErrorMessage(res, e.message);
  }
};
const DeletePatient = async (req, res) => {
  try {
    await DeleteData(contact, req.params.id);
    SuccessMessageWithOutData(res, 'Deleted successfully');
  } catch (e) {
    ErrorMessage(res, e.message);
  }
};
module.exports = { createPatient, listPatient, PatchPatient, DeletePatient };
