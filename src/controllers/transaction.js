/** @format */

const transactionModel = require("../models/transaction");
const formResponse = require("../helpers/forms/form");

const transactionController = {
  addTransaction: (req, res) => {
    transactionModel
      .addTransaction(req.body)
      .then((data) => {
        res.JSON(data);
        // const responData = {
        // ...req.body,
        // };
        // formResponse.success(res, responData);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
};

module.exports = transactionController;
