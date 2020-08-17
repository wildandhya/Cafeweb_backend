/** @format */

const authRouter = require("express").Router();
const authController = require("../controllers/auth");

authRouter.post("/register", authController.register);
authRouter.get("/login", authController.login);

module.exports = authRouter;
