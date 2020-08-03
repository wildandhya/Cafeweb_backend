const sortModel = require('../models/sort')


const sortController = {
    sortByName: (req, res) => {
        sortModel.sortByName(req.body).then((data) => {
            res.json(data)
        }).catch((err) => {
            res.status(500).json(err)
        })
    },
    sortByCategory: (req, res) => {
        sortModel.sortByCategory(req.body).then((data) => {
            res.json(data)
        }).catch((err) => {
            res.status(500).json(err)
        })
    },
    ssortByPrice: (req, res) => {
        sortModel.sortByPrice(req.body).then((data) => {
            res.json(data)
        }).catch((err) => {
            res.status(500).json(err)
        })

    },
    sortByNewMenu: (req, res) => {
        sortModel.sortByNewMenu(req.body).then((data) => {
            res.json(data)
        }).catch((err) => {
            res.status(500).json(err)
        })

    }
}
module.exports = sortController;