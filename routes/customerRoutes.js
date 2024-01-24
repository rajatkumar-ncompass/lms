const express = require("express");
const router = express.Router();
const customerSelectController = require("../controllers/customer/select");
const customerUpdateController = require("../controllers/customer/update");
const customerInsertController = require("../controllers/customer/insert");
const customerDeleteController = require("../controllers/customer/delete");

router.get("/", customerSelectController.getCustomerData);

module.exports = router;
