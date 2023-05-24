const Joi = require('joi');
const { ErrorMessage } = require('../../helpers/commonFunctions');
const schema = Joi.object({
  CurrentPassword: Joi.string().required().label('CurrentPassword'),
  NewPassword: Joi.string()
    .min(8)
    .max(30)
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/
    )
    .required()
    .label('NewPassword'),
  confirmPassword: Joi.string().required().label('confirmPassword'),
});
exports.ValidatePassword = async (req, res, next) => {
  try {
    req.body = await schema.validateAsync(req.body);
    next();
  } catch (e) {
    ErrorMessage(res, e.message);
  }
};
