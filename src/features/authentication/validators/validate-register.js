import Joi from "joi";

const registerSchema = Joi.object({
  email: Joi.string()
    .required()
    .email({ tlds: false })
    .messages({ "string.empty": "PLUE want your Email" }),
  password: Joi.string()
    .required()
    .pattern(/^[0-9a-zA-z]{6,}$/)
    .messages({
      "string.empty": "PLUE wants your Password",
      "string.pattern.base":
        "PLUE recommended that password must be at least 6 characters and no special characters",
    }),
  firstName: Joi.string()
    .required()
    .trim()
    .messages({ "string.empty": "PLUE want your First name" }),
  lastName: Joi.string()
    .required()
    .trim()
    .messages({ "string.empty": "PLUE want your Last name" }),
  phoneNumber: Joi.string()
    .required()
    .pattern(/^[0-9]{10}$/)
    .messages({
      "string.empty": "PLUE want your Phone number",
      "string.pattern.base":
        "PLUE recommended that phone number must not be over 10 characters",
    }),
  address: Joi.string()
    .required()
    .messages({ "string.empty": "PLUE want your address" }),
});

const validateRegisterError = (input) => {
  const { error } = registerSchema.validate(input, { abortEarly: false });
  if (error) {
    const result = error.details.reduce((acc, item) => {
      acc[item.path[0]] = item.message;
      return acc;
    }, {});
    return result;
  }
};

export default validateRegisterError;
