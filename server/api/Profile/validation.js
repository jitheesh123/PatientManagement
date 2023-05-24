const Joi = require('joi');
const { ErrorMessage } = require('../../helpers/commonFunctions');
const schema = Joi.object({
  Name: Joi.string().required().min(2).max(20).messages({
    'string.empty': `Name is  required `,
  }),
  Email: Joi.string()
    .required()
    .email({ tlds: { allow: false } })
    .messages({
      'string.empty': `Email is required `,
    }),
  PhoneNumber: Joi.string()
    .required()
    .min(10)
    .max(10)
    .regex(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)
    .messages({
      'string.empty': `Phone number is required `,
      'string.pattern.base': `Invalid phone number format`,
    }),
  AadharNo: Joi.string()
    .pattern(/^\d{4}\s\d{4}\s\d{4}$/)
    .required()
    .messages({
      'string.empty': 'Aadhaar number is required',
      'string.pattern.base': 'Invalid Aadhaar number format',
    }),
  Dob: Joi.string().required().messages({
    'string.empty': `Date of birth is  required `,
  }),
  Address: Joi.string().required().messages({
    'string.empty': `Address of   required `,
  }),
  Country: Joi.string().required().messages({
    'string.empty': `Country of required `,
  }),
  State: Joi.string().required().messages({
    'string.empty': `State of  required `,
  }),
  PinCode: Joi.string()
    .pattern(/^\d{6}$/)
    .required()
    .messages({
      'string.empty': `Pincode of   required `,
    }),
  Blood: Joi.string().required().min(2).max(20).messages({
    'string.empty': `Blood is  required `,
  }),
  Height: Joi.string().required().messages({
    'string.empty': `Height is required `,
  }),
  Weight: Joi.string().required().messages({
    'string.empty': `Weight is required `,
  }),
  Gender: Joi.string().required().messages({
    'string.empty': 'Gender is required',
  }),
});
exports.ValidateProfile = async (req, res, next) => {
  try {
    req.body = await schema.validateAsync(req.body);
    next();
  } catch (e) {
    ErrorMessage(res, e.message);
  }
};
