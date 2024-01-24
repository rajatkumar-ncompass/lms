const express = require("express");
const router = express.Router();
const booksSelectController = require("../controllers/books/select");
const booksUpdateController = require("../controllers/books/update");
const booksInsertController = require("../controllers/books/insert");
const booksDeleteController = require("../controllers/books/delete");

router.get("/", booksSelectController.getBooksData);

module.exports = router;
