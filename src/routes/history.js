/** @format */

const express = require("express");
const historyRouter = express.Router();

const historyController = require("../controllers/history");
const checkToken = require("../helpers/middlewares/checkTokenCashier");

historyRouter.get("/", checkToken, historyController.showHistory);
historyRouter.get("/income-today", historyController.todayIncome);
historyRouter.get("/order-week", historyController.totalOrderByWeek);
historyRouter.get("/income-year", historyController.incomeByYear);
historyRouter.get("/revenue-month", historyController.revenueByMonth);
module.exports = historyRouter;
