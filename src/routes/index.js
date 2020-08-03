const express = require("express");
const router = express.Router()

const mainRouter = require('./main');
const searchRouter = require('./search');
const sortRouter = require('./sort');
const historyRouter = require('./history');



router.use("/product", mainRouter);
router.use("/product/search", searchRouter);
router.use("/product", sortRouter);
router.use("/product/history", historyRouter);

module.exports = router;