const express = require("express");
const router = express.Router();
const authorSelectController = require("../controllers/authors/select");
const authorUpdateController = require("../controllers/authors/update");
const authorInsertController = require("../controllers/authors/insert");
const authorDeleteController = require("../controllers/authors/delete");
const validateAuthor = require("../utils/validation");

router.get("/", authorSelectController.getAuthorData);
router.post(
  "/add",
  validateAuthor.validateAuthor,
  authorInsertController.postAuthorData
);
router.put("/update", authorUpdateController.putAuthorData);
router.delete("/delete", authorDeleteController.deleteAuthorData);

module.exports = router;
