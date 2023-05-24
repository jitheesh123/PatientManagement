const Joi = require('joi');
const { ErrorMessage } = require('../../helpers/commonFunctions');
const schema = Joi.object({
  Email: Joi.string().required().label('Email'),
  Password: Joi.string().required().label('Password'),
});
exports.Validatelogin = async (req, res, next) => {
  try {
    req.body = await schema.validateAsync(req.body);
    next();
  } catch (e) {
    ErrorMessage(res, e.message);
  }
};
