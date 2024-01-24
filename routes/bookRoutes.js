const express = require("express");
const routes = express.Router();
const booksSelectController = require("../controllers/books/select");
const booksUpdateController = require("../controllers/books/update");
const booksInsertController = require("../controllers/books/insert");
const booksDeleteController = require("../controllers/books/delete");

routes.get("/", booksSelectController.getBooksData);

module.exports = routes;
