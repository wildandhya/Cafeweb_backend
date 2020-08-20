/** @format */

const productModel = require("../models/product");

const formResponse = require("../helpers/forms/form");

const productController = {
  showProduct: (req, res) => {
    productModel
      .showProduct()
      .then((data) => {
        formResponse.success(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },

  insertProduct: (req, res) => {
    productModel
      .insertProduct(req.body)
      .then((data) => {
        const responData = {
          ...req.body,
          id: data.insertId,
          create_at: Date.now(),
          update_at: Date.now(),
        };
        formResponse.success(res, responData);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },

  updateProduct: (req, res) => {
    productModel
      .updateProduct(req.params.id, req.body)
      .then((data) => {
        const responData = {
          ...req.body,
          update_at: Date.now(),
        };
        formResponse.success(res, responData);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },

  deleteProduct: (req, res) => {
    productModel
      .deleteProduct(req.params.id)
      .then((data) => {
        const responData = {
          msg: "delete product success",
        };
        formResponse.success(res, responData);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
  searchByName: (req, res) => {
    productModel
      .searchByName(req.query.name)
      .then((data) => {
        formResponse.success(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
  sortMenu: (req, res) => {
    productModel
      .sortMenu(req.query)
      .then((data) => {
        formResponse.paginationSort(req, res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
  showProduct: (req, res) => {
    const { page, limit } = req.query;
    productModel
      .showProduct(page, limit)
      .then((data) => {
        formResponse.pagination(req, res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
};

module.exports = productController;
