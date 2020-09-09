/** @format */

const express = require("express");
const router = express.Router();

const productRouter = require("./product");
const historyRouter = require("./history");
const authRouter = require("./auth");
const transactionRouter = require("./transaction");
router.use("/", productRouter);
router.use("/", historyRouter);
router.use("/", authRouter);
router.use("/", transactionRouter);

module.exports = router;
