const express = require("express");
const mainRouter = express.Router();

const mainController = require('../controllers/main')

mainRouter.get("/", mainController.selectMenu);
mainRouter.post("/", mainController.insertMenu);
mainRouter.put("/", mainController.updateMenu);
mainRouter.delete("/", mainController.deleteMenu);

module.exports = mainRouter;