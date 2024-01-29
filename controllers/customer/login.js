const c = require("../../utils/db");
const jwt = require("jsonwebtoken");
const { successMessageFunction } = require("../../utils/successMessage");
const { errorMessageFunction } = require("../../utils/errorMessage");

const jwtKey = process.env.JWT_SECRET;

const loginCustomer = async (req, res) => {
  try {
    const { ID } = req.body;
    let sTime = performance.now();
    const query = `SELECT EXISTS (
      SELECT 1 FROM CUSTOMER_1 WHERE ID = ${ID} 
    ) AS CHECK_USER`;
    let token;
    await c.executeQuery(query).then((response) => {
      if (response[0][0]["CHECK_USER"] === 1) {
        token = jwt.sign({ ID: ID }, jwtKey, { expiresIn: "1d" });
      } else {
        let errorMessage = errorMessageFunction(false, 200, "User Not found");
        res.send(errorMessage);
      }
    });
    let eTime = performance.now();
    let tTime = eTime - sTime;
    let successResponse = successMessageFunction(
      true,
      200,
      token,
      sTime,
      eTime,
      tTime
    );
    res.send(successResponse);
  } catch (error) {
    let errorMessage = errorMessageFunction(false, 500, error);
    res.send(errorMessage);
  }
};

module.exports = {
  loginCustomer,
};
