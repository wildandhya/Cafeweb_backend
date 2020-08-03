const express = require("express");
const historyRouter = express.Router();

const historyController = require('../controllers/history');


historyRouter.get("/", historyController.showHistory);
historyRouter.get("/today-income", historyController.todayIncome);
historyRouter.get("/order-this-week", historyController.totalOrderByWeek);
historyRouter.get("/income-this-year", historyController.incomeByYear);
historyRouter.get("/revenue-month", historyController.revenueByMonth);


module.exports = historyRouter;