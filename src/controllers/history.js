const historyModel = require('../models/history');


const historyController = {
    incomeByYear: (req, res) => {
        historyModel.incomeByYear().then((data) => {
            res.json(data);
        }).catch((err) => {
            res.json(err);
        })
    },
    showHistory: (req, res) => {
        historyModel.showHistory().then((data) => {
            res.json(data);
        }).catch((err) => {
            res.json(err);
        })
    },
    totalOrderByWeek: (req, res) => {
        historyModel.totalOrderByWeek().then((data) => {
            res.json(data);
        }).catch((err) => {
            res.json(err);
        })
    },
    todayIncome: (req, res) => {
        historyModel.todayIncome().then((data) => {
            res.json(data);
        }).catch((err) => {
            res.json(err);
        })
    },
    revenueByMonth: (req, res) => {
        historyModel.revenueByMonth().then((data) => {
            res.json(data);
        }).catch((err) => {
            res.json(err);
        })
    },
}


module.exports = historyController;