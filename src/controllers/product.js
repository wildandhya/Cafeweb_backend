const productModel = require('../models/product');


const productController = {
    showProduct: (req, res) => {
        productModel.showProduct().then((data) => {
            res.json(data);
        }).catch((err) => {
            res.json(err);
        })
    },

    insertProduct: (req, res) => {
        productModel.insertProduct(req.body)
            .then((data) => {
                res.json(data);
            }).catch((err) => {
                res.status(500).json(err);
            })
    },

    updateProduct: (req, res) => {
        productModel.updateProduct(req.body)
            .then((data) => {
                res.json(data);
            }).catch((err) => {
                res.status(500).json(err);
            })
    },

    deleteProduct: (req, res) => {
        productModel.deleteProduct(req.body).then((data) => {
            res.json(data);
        }).catch((err) => {
            res.status(500).json(err);
        })
    },
    searchByName: (req, res) => {
        productModel.searchByName(req.params.name).then((data) => {
            res.json(data);
        }).catch((err) => {
            res.status(500).json(err);
        })
    },
    sortByName: (req, res) => {
        productModel.sortByName(req.body).then((data) => {
            res.json(data)
        }).catch((err) => {
            res.status(500).json(err)
        })
    },
    sortByCategory: (req, res) => {
        productModel.sortByCategory(req.body).then((data) => {
            res.json(data)
        }).catch((err) => {
            res.status(500).json(err)
        })
    },
    sortByPrice: (req, res) => {
        productModel.sortByPrice(req.body).then((data) => {
            res.json(data)
        }).catch((err) => {
            res.status(500).json(err)
        })
    },
    sortByNewMenu: (req, res) => {
        productModel.sortByNewMenu(req.body).then((data) => {
            res.json(data)
        }).catch((err) => {
            res.status(500).json(err)
        })
    }
}

module.exports = productController;