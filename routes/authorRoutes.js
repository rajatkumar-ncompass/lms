const express = require("express");
const router = express.Router();
const authorSelectController = require("../controllers/authors/select");
const authorUpdateController = require("../controllers/authors/update");
const authorInsertController = require("../controllers/authors/insert");
const authorDeleteController = require("../controllers/authors/delete");

router.get("/", authorSelectController.getAuthorData);
router.post("/add", authorInsertController.postAuthorData);
router.put("/update", authorUpdateController.putAuthorData);
router.delete("/delete", authorDeleteController.deleteAuthorData);

module.exports = router;
