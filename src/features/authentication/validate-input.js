import Joi from "joi";

const postSchema = Joi.object({
  productName: Joi.string().trim().required().messages({
    "string.empty": "Product Name is required",
  }),
  gender: Joi.string().trim().required().messages({
    "string.empty": "Gender is required",
  }),
  productType: Joi.string().trim().required().messages({
    "string.empty": "Product Type is required",
  }),
  price: Joi.number().positive().required().messages({
    "number.base": "Price must be a number",
    "number.positive": "Price must be a positive number",
    "any.required": "Price is required",
  }),
  description: Joi.string().trim().required().messages({
    "string.empty": "Description is required",
  }),
  files: Joi.array().min(1).messages({
    "array.min": "At least one product image is required",
  }),
});

const validatePostInput = (input) => {
  const { error } = postSchema.validate(input, { abortEarly: false });
  if (error) {
    const result = error.details.reduce((acc, item) => {
      acc[item.path[0]] = item.message;
      return acc;
    }, {});
    return result;
  }
};

export default validatePostInput;
