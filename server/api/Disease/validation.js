const Joi = require('joi');
const { ErrorMessage } = require('../../helpers/commonFunctions');
const schema = Joi.object({
  DiseaseName: Joi.string().required().messages({
    'string.empty': `Disease is  required `,
  }),
  StartedDate: Joi.string().required().messages({
    'string.empty': `Date is  required `,
  }),
  Remarks: Joi.string().required().messages({
    'string.empty': `Remarks is  required `,
  }),
});
exports.ValidateDisease = async (req, res, next) => {
  try {
    req.body = await schema.validateAsync(req.body);
    next();
  } catch (e) {
    ErrorMessage(res, e.message);
  }
};
