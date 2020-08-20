/** @format */

const connection = require("../configs/dbMysql");

const productModel = {
  showProduct: () => {
    return new Promise((resolve, reject) => {
      const queryString = `SELECT product.id, product.menu, product.price, categories.category, product.image
    FROM product 
    JOIN categories ON product.category_id = categories.id`;
      connection.query(queryString, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  insertProduct: (body) => {
    const { menu, category_id, price, image } = body;
    const queryInsert = `INSERT INTO product SET menu=?, category_id=?, price=?, image=?`;
    return new Promise((resolve, reject) => {
      connection.query(
        queryInsert,
        [menu, category_id, price, image],
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
  searchByName: (name) => {
    return new Promise((resolve, reject) => {
      const getByName = `SELECT product.id, product.menu, product.price, categories.category FROM product JOIN categories ON product.category_id = categories.id WHERE product.menu LIKE "%${name}%"`;
      connection.query(getByName, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  sortMenu: (query) => {
    return new Promise((resolve, reject) => {
      const page = query.page;
      const limit = query.limit;
      const offset = (page - 1) * limit;
      const order = query.order;
      const by = query.by;
      const getByName = `SELECT product.id, product.menu, categories.category, product.price FROM product JOIN categories ON product.category_id = categories.id ORDER BY ${by} ${order} LIMIT ? OFFSET ?   `;
      connection.query(getByName, [Number(limit), offset], (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  showProduct: (page, limit) => {
    return new Promise((resolve, reject) => {
      const offset = (page - 1) * limit;
      const queryString = `SELECT product.id, product.menu, product.price, categories.category, product.image
    FROM product 
    JOIN categories ON product.category_id = categories.id LIMIT ? OFFSET ?`;
      connection.query(queryString, [Number(limit), offset], (err, data) => {
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
