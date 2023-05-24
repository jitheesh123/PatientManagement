const Joi = require('joi');
const { ErrorMessage } = require('../../helpers/commonFunctions');
const schema = Joi.object({
  Name: Joi.string().min(2).max(50).required().label('Name'),

  Email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .label('Email'),
  Message: Joi.string().min(2).max(100).required().label('Message'),
});
exports.ValidateContact = async (req, res, next) => {
  try {
    req.body = await schema.validateAsync(req.body);
    next();
  } catch (e) {
    ErrorMessage(res, e.message);
  }
};
