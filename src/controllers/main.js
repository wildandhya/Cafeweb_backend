const mainModel = require('../models/main');


const mainController = {
    selectMenu: (req, res) => {
        mainModel.selectMenu().then((data) => {
            res.json(data);
        }).catch((err) => {
            res.json(err);
        })
    },

    insertMenu: (req, res) => {
        mainModel.insertMenu(req.body)
            .then((data) => {
                res.json(data);
            }).catch((err) => {
                res.status(500).json(err);
            })
    },

    updateMenu: (req, res) => {
        mainModel.updateMenu(req.body)
            .then((data) => {
                res.json(data);
            }).catch((err) => {
                res.status(500).json(err);
            })
    },

    deleteMenu: (req, res) => {
        mainModel.deleteMenu(req.body).then((data) => {
            res.json(data);
        }).catch((err) => {
            res.status(500).json(err);
        })
    }
}

module.exports = mainController;