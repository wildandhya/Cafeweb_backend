/** @format */

const transactionModel = require("../models/transaction");
const formResponse = require("../helpers/forms/form");

const transactionController = {
  addTransaction: (req, res) => {
    transactionModel
      .addTransaction(req.body)
      .then((data) => {
        const responBody = {
          ...req.body,
          msg: "order success",
        };
        formResponse.success(res, responBody);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
};

module.exports = transactionController;
