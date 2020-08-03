const searchModel = require('../models/search');


const searchController = {
    searchByName: (req, res) => {
        searchModel.searchByName(req.params.name).then((data) => {
            res.json(data);
        }).catch((err) => {
            res.status(500).json(err);
        })
    }
}

module.exports = searchController;