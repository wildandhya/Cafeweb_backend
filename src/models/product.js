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
    const { menu, category_id, price } = body;
    const queryInsert = `INSERT INTO product SET menu=?, category_id=?, price=?`;
    return new Promise((resolve, reject) => {
      connection.query(queryInsert, [menu, category_id, price], (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  updateProduct: (body) => {
    const { id, menu, category_id, price } = body;
    const queryUpdate = `UPDATE product SET menu=?, category_id=?, price=? WHERE id=? `;
    return new Promise((resolve, reject) => {
      connection.query(
        queryUpdate,
        [menu, category_id, price, id],
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
  deleteProduct: (body) => {
    const { id } = body;
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
  searchByName: (menu) => {
    return new Promise((resolve, reject) => {
      const getByName = `SELECT product.id, product.menu, product.price, categories.category FROM product JOIN categories ON product.category_id = categories.id WHERE product.menu=?`;
      connection.query(getByName, [menu], (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  sortByName: () => {
    return new Promise((resolve, reject) => {
      const getByName =
        "SELECT product.id, product.menu, categories.category, product.price FROM product JOIN categories ON product.category_id = categories.id ORDER BY menu ASC ";
      connection.query(getByName, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  sortByCategory: () => {
    return new Promise((resolve, reject) => {
      const getByCategory =
        "SELECT product.id, categories.category, product.menu, product.price FROM product JOIN categories ON product.category_id = categories.id ORDER BY categories.category ASC ";
      connection.query(getByCategory, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  sortByPrice: () => {
    return new Promise((resolve, reject) => {
      const getByPrice =
        "SELECT product.price, product.menu, categories.category FROM product JOIN categories ON product.category_id = categories.id ORDER BY price ASC ";
      connection.query(getByPrice, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  sortByNewMenu: () => {
    return new Promise((resolve, reject) => {
      const getByNewMenu =
        "SELECT product.id, DATE_FORMAT(product.publish_at, '%d-%M-%Y') AS  Publish_at, product.menu, categories.category, product.price FROM `product` JOIN categories ON product.category_id = categories.id ORDER BY publish_at DESC ";
      connection.query(getByNewMenu, (err, data) => {
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
