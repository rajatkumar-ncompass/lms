const express = require("express");
const routes = express.Router();
const authorSelectController = require("../controllers/authors/select");
const authorUpdateController = require("../controllers/authors/update");
const authorInsertController = require("../controllers/authors/insert");
const authorDeleteController = require("../controllers/authors/delete");

routes.get("/", authorSelectController.getAuthorData);



module.exports = routes
