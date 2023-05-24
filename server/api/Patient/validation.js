const Joi = require('joi');
const { ErrorMessage } = require('../../helpers/commonFunctions');
const schema = Joi.object({
  Email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .label('Email'),
  Password: Joi.string().required().label('Password'),
  PhoneNumber: Joi.string()
    .pattern(/^\d{1,3}\s?\d{3,14}$/)
    .required(),
  Name: Joi.string().alphanum().min(3).max(30).required(),
});
exports.ValidatePatient = async (req, res, next) => {
  try {
    req.body = await schema.validateAsync(req.body);
    next();
  } catch (e) {
    ErrorMessage(res, e.message);
  }
};
