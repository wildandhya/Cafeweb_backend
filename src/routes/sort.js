const express = require("express");
const sortRouter = express.Router()

const sortController = require('../controllers/sort');

sortRouter.get("/new-menu", sortController.sortByNewMenu);
sortRouter.get("/price", sortController.ssortByPrice);
sortRouter.get("/category", sortController.sortByCategory);
sortRouter.get("/name", sortController.sortByName);


module.exports = sortRouter;