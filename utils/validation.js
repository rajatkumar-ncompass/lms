const Joi = require("joi");

const AuthorSchema = Joi.object({
  ID: Joi.number().required(),
  FIRST_NAME: Joi.string().required().min(2),
  LAST_NAME: Joi.string(),
});

async function validateAuthor(req, res, next) {
  try {
    const authors = req.body.authors;
  
    for (const author of authors) {
      const { value, error } = AuthorSchema.validate(author);
      if (error) {
        throw error;
      }
    }
    next();

  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err });
  }
}

module.exports = {
  validateAuthor,
};
