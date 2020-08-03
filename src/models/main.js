const connection = require("../configs/dbMysql");

const mainModel = {
    selectMenu: () => {
        return new Promise((resolve, reject) => {
            const queryString = `SELECT product.id, product.menu, product.price, categories.category
    FROM product 
    JOIN categories ON product.category_id = categories.id`;
            connection.query(queryString, (err, data) => {
                if (!err) {
                    resolve(data)
                } else {
                    reject(err)
                }
            })
        });
    },
    insertMenu: (body) => {
        const {
            menu,
            category_id,
            price
        } = body;
        const queryInsert = `INSERT INTO product SET menu=?, category_id=?, price=?`;
        return new Promise((resolve, reject) => {
            connection.query(queryInsert, [menu, category_id, price], (err, data) => {
                if (!err) {
                    resolve(data)
                } else {
                    reject(err)
                }
            })

        })
    },
    updateMenu: (body) => {
        const {
            id,
            menu,
            category_id,
            price
        } = body;
        const queryUpdate = `UPDATE product SET menu=?, category_id=?, price=? WHERE id=? `;
        return new Promise((resolve, reject) => {
            connection.query(queryUpdate, [menu, category_id, price, id],
                (err, data) => {
                    if (!err) {
                        resolve(data)
                    } else {
                        reject(err)
                    }
                })
        })
    },
    deleteMenu: (body) => {
        const {
            id
        } = body;
        const queryDelete = "DELETE FROM product WHERE id=?";
        return new Promise((resolve, reject) => {
            connection.query(queryDelete, [id], (err, data) => {
                if (!err) {
                    resolve(data)
                } else {
                    reject(err)
                }
            })
        })
    }
}

module.exports = mainModel;