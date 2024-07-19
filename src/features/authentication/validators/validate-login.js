import Joi from "joi";

const loginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const validateLogin = (input) => {
  const { error } = loginSchema.validate(input, { abortEarly: false });

  if (error) {
    //ถ้าerrorมีค่า จะนำไปreduceเพื่อloopค่าerrorเป็นobject
    const result = error.details.reduce((acc, item) => {
      acc[item.path[0]] = item.message;
      return acc;
    }, {});
    console.dir(error);
    return result;
  }
};

export default validateLogin;
