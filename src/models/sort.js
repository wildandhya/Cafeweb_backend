const connection = require("../configs/dbMysql");


const sortModel = {
    sortByName: () => {
        return new Promise((resolve, reject) => {
            const getByName = "SELECT product.id, product.menu, categories.category, product.price FROM product JOIN categories ON product.category_id = categories.id ORDER BY menu ASC ";
            connection.query(getByName, (err, data) => {
                if (!err) {
                    resolve(data)
                } else {
                    reject(err)
                }
            })
        });
    },
    sortByCategory: () => {
        return new Promise((resolve, reject) => {
            const getByCategory = "SELECT product.id, categories.category, product.menu, product.price FROM product JOIN categories ON product.category_id = categories.id ORDER BY categories.category ASC ";
            connection.query(getByCategory, (err, data) => {
                if (!err) {
                    resolve(data)
                } else {
                    reject(err)
                }
            })
        });
    },
    sortByPrice: () => {
        return new Promise((resolve, reject) => {
            const getByPrice = "SELECT product.price, product.menu, categories.category FROM product JOIN categories ON product.category_id = categories.id ORDER BY price ASC "
            connection.query(getByPrice, (err, data) => {
                if (!err) {
                    resolve(data)
                } else {
                    reject(err)
                }
            })
        });
    },
    sortByNewMenu: () => {
        return new Promise((resolve, reject) => {
            const getByNewMenu = "SELECT product.id, DATE_FORMAT(product.publish_at, '%d-%M-%Y') AS Publish_at, product.menu, categories.category, product.price FROM `product` JOIN categories ON product.category_id = categories.id ORDER BY publish_at DESC "
            connection.query(getByNewMenu, (err, data) => {
                if (!err) {
                    resolve(data)
                } else {
                    reject(err)
                }
            })
        });
    }

};

module.exports = sortModel;