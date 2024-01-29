const express = require("express");
const router = express.Router();
const customerSelectController = require("../controllers/customer/select");
const customerUpdateController = require("../controllers/customer/update");
const customerInsertController = require("../controllers/customer/insert");
const customerDeleteController = require("../controllers/customer/delete");
const customerLoginController = require("../controllers/customer/login");
const customerValidator = require("../utils/authValidation");

router.get("/", customerSelectController.getCustomerData);
router.put(
  "/update",
  customerValidator.validateCustomer,
  customerUpdateController.putCustomerData
);
router.post("/login", customerLoginController.loginCustomer);

module.exports = router;
