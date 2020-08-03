const connection = require("../configs/dbMysql");


const searchModel = {
    searchByName: (menu) => {
        return new Promise((resolve, reject) => {
            const getByName = `SELECT product.id, product.menu, product.price, categories.category FROM product 
    JOIN categories ON product.category_id = categories.id WHERE product.menu=?`;
            connection.query(getByName, [menu], (err, data) => {
                if (!err) {
                    resolve(data)
                } else {
                    reject(err)
                }
            })
        });
    }
}

module.exports = searchModel;