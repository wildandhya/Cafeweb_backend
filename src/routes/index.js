/** @format */

const express = require("express");
const router = express.Router();

const productRouter = require("./product");
const historyRouter = require("./history");
const authRouter = require("./auth");
// const uploadRouter = require("./upload");

// privete
router.use("/product", productRouter);
router.use("/history", historyRouter);
// router.use("/upload", uploadRouter);
// public route
router.use("/auth", authRouter);

module.exports = router;
