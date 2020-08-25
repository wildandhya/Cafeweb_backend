/** @format */

const express = require("express");
const productRouter = express.Router();

const productController = require("../controllers/product");
const checkTokenAdmin = require("../helpers/middlewares/checkTokenAdmin");
const checkTokenCashier = require("../helpers/middlewares/checkTokenCashier");
const fileUpload = require("../helpers/middlewares/fileUpload");

// productRouter.get("/", checkToken, productController.showProduct);
productRouter.post(
  "/",
  // checkTokenAdmin,
  fileUpload.singleUpload,
  productController.insertProduct
);

productRouter.get("/", productController.showProduct);
productRouter.put(
  "/:id",
  fileUpload.singleUpload,
  productController.updateProduct
);
productRouter.delete("/:id", productController.deleteProduct);
productRouter.get("/seacrh", productController.searchByName);
productRouter.get("/sort", productController.sortMenu);

module.exports = productRouter;
