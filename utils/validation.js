const Joi = require("joi");

const AuthorSchema = Joi.object({
  ID: Joi.number().required(),
  FIRST_NAME: Joi.string().required().min(2),
  LAST_NAME: Joi.string(),
});

async function validateAuthor(req, res, next) {
  try {
    const value = await AuthorSchema.validateAsync(req.body);
    next();
  } catch (err) {
    res.status(400).send({ message: err });
  }
}



module.exports = {
  validateAuthor,
};
