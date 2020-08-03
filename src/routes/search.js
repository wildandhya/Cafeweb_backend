const express = require("express");
const searchRouter = express.Router()
const searchController = require('../controllers/search');


searchRouter.get("/:name", searchController.searchByName);

module.exports = searchRouter;