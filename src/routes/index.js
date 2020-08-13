const express = require("express");
const router = express.Router()

const productRouter = require('./product');
const historyRouter = require('./history');



router.use("/product", productRouter);
// router.use("/product/search", searchRouter);
// router.use("/product", sortRouter);
router.use("/product/history", historyRouter);

module.exports = router;