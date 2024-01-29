const jwt = require("jsonwebtoken");
const { successMessageFunction } = require("../utils/successMessage");
const { errorMessageFunction } = require("../utils/errorMessage");

const JWT_SECRET = process.env.JWT_SECRET;
const validateCustomer = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  console.log(token);
  if (!token) {
    let errorMessage = errorMessageFunction(
      false,
      401,
      "Verification Unauthorized"
    );
    res.send(errorMessage);
  }
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      let errorMessage = errorMessageFunction(
        false,
        401,
        "Verification Unauthorized-2"
      );
      res.send(errorMessage);
    }
    next();
  });
};
module.exports = { validateCustomer };
