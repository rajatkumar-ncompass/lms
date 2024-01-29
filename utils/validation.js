const Joi = require("joi");

const AuthorSchema = Joi.object({
  ID: Joi.number().required(),
  FIRST_NAME: Joi.string().required().min(2),
  LAST_NAME: Joi.string(),
});

const validateAuthor = async (req, res, next) => {
  try {
    const authors = req.body.authors;
    const validationPromises = authors.map(async (key) => {
      try {
        const value = await AuthorSchema.validateAsync(key);
      } catch (error) {
        throw error;
      }
    });
    await Promise.all(validationPromises);
    next();
  } catch (err) {
    res.status(400).send({ message: err });
  }
};

module.exports = {
  validateAuthor,
};
