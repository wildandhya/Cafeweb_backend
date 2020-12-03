/** @format */

const connection = require("../configs/dbMysql");

const transactionModel = {
  // POST
  addTransaction: (body) => {
    const { invoice, cashier, amount, trans } = body;
    return new Promise((resolve, reject) => {
      const qs = `INSERT INTO history SET invoice = ?, cashier = ?, amount = ?, date= NOW(); INSERT INTO orders (invoice_id, menu_id, qty) VALUES ?`;
      let order = trans.map((item) => {
        return [invoice, item.menu_id, item.qty];
      });
      console.log(body);
      console.log(order);
      connection.query(qs, [invoice, cashier, amount, order], (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
};

module.exports = transactionModel;
