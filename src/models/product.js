/** @format */

const connection = require("../configs/dbMysql");

const selectQuery = `SELECT product.id, product.menu, product.price, categories.category, product.image
FROM product JOIN categories ON product.category_id = categories.id`;

const productModel = {
  showProduct: (query) => {
    let queryStr = "";
    if (
      query.search === undefined ||
      query.sort_by === undefined ||
      query.order === undefined
    ) {
      const offset = (Number(query.page) - 1) * Number(query.limit);
      queryStr = `${selectQuery}`;
    } else {
      const offset = (Number(query.page) - 1) * Number(query.limit);
      queryStr = `${selectQuery} WHERE product.menu LIKE '%${query.search}%' ORDER BY ${query.sort_by} ${query.order} LIMIT ${query.limit} OFFSET ${offset}`;
    }
    return new Promise((resolve, reject) => {
      connection.query(queryStr, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },

  addProduct: (body) => {
    const { menu, category_id, price, image } = body;
    const queryInsert = `INSERT INTO product SET menu=?, image=?, price=?, category_id=?`;
    return new Promise((resolve, reject) => {
      connection.query(
        queryInsert,
        [menu, image, price, category_id],
        (err, data) => {
          if (!err) {
            resolve(data);
          } else {
            reject(err);
          }
        }
      );
    });
  },
  updateProduct: (id, body) => {
    const update_at = Date.now();
    const queryUpdate = `UPDATE product SET ? WHERE product.id= ${id} `;
    return new Promise((resolve, reject) => {
      connection.query(queryUpdate, [{ ...body, update_at }], (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  deleteProduct: (id) => {
    const queryDelete = "DELETE FROM product WHERE id=?";
    return new Promise((resolve, reject) => {
      connection.query(queryDelete, [id], (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
};

module.exports = productModel;
