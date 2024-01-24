const express = require("express");
const router = express.Router();
const bookDetailsSelectController = require("../controllers/book_details/select");
const bookDetailsUpdateController = require("../controllers/book_details/update");
const bookDetailsInsertController = require("../controllers/book_details/insert");
const bookDetailsDeleteController = require("../controllers/book_details/delete");

router.get("/", bookDetailsSelectController.getBookDetails);

module.exports = router;
