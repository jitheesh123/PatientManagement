const loginModel = require('../../model/login');
const {
  SuccessMessageWithOutData,
  PostData,
  ErrorMessage,
  SuccessMessageWithData,
  GetData,
} = require('../../helpers/commonFunctions');
const signup = require('../../model/signup');
const jwt = require('jsonwebtoken');
module.exports = {
  login: async (req, res) => {
    try {
      const { Email, Password } = req.body;
      let user = await GetData(loginModel, { Email });
      if (!user[0]) {
        return ErrorMessage(res, 'Invalid email or password');
      }
      if (
        !(await loginModel.verifyPassword(
          Password,
          user[0].Password,
          user[0].salt
        ))
      ) {
        return ErrorMessage(res, 'Invalid email or password');
      }
      const accessToken = await loginModel.generateAuthTocken(user[0]);
      let SignUpData = await signup.findOne({ LoginId: user[0]._id });

      SuccessMessageWithData(
        res,
        { accessToken, Role: SignUpData.Role, SignUpData: SignUpData },
        'Login Success'
      );
    } catch (e) {
      return ErrorMessage(res, e.message);
    }
  },

  GetProfile: async (req, res) => {
    try {
      const decoded = await jwt.verify(req.body.token, 'asdasdasdasd');
      if (!decoded) {
        return ErrorMessage(res, 'Invalid Token');
      }
      if (decoded.exp < Date.now()) {
        return ErrorMessage(res, 'Token Expired');
      }

      const isUserExists = await loginModel.findOne({ _id: decoded.id });
      if (!isUserExists) {
        return ErrorMessage(res, 'Access Denied');
      }
      let matchvalidity = isUserExists.Password.concat(isUserExists.id).concat(
        isUserExists.Email
      );

      if (matchvalidity != decoded.validity) {
        return ErrorMessage(res, 'Access Denied');
      }
      let SignUpData = await signup.findOne({ LoginId: isUserExists.id });
      SuccessMessageWithData(res, {
        Role: SignUpData.Role,
        SignUpData: SignUpData,
      });
    } catch (error) {
      ErrorMessage(res, error.message);
    }
  },
};
