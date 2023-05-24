const {
  GetData,
  ErrorMessage,
  PostData,
  SuccessMessageWithOutData,
  EditData,
} = require('../../helpers/commonFunctions');

const login = require('../../model/login');
const {
  GeneratePasswordAndHash,
} = require('../../modules/GeneratePasswordAndHash');

module.exports = {
  ChangePassword: async (req, res) => {
    const data = await GetData(login, { _id: req.user.id });
    if (!data[0]) {
      ErrorMessage(res, 'You dont have the permission to change the password');
    }
    const VerifyPassword = await login.verifyPassword(
      req.body.CurrentPassword,
      data[0].Password,
      data[0].salt
    );
    if (!VerifyPassword) {
      return ErrorMessage(res, 'You entered the Wrong Password');
    } else {
      let { HashedPassword, salt } = await GeneratePasswordAndHash(
        req.body.NewPassword
      );
      await EditData(login, req.user.id, { salt, Password: HashedPassword });
      SuccessMessageWithOutData(res, 'Password Updated Successfully');
    }
  },
};
