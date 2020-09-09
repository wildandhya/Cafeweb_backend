/** @format */

const express = require("express");
const productRouter = express.Router();

const productController = require("../controllers/product");
const checkToken = require("../helpers/middlewares/checkToken");
const fileUpload = require("../helpers/middlewares/fileUpload");


productRouter.post(
  "/",checkToken.admin,
  fileUpload.singleUpload,
  productController.addProduct
);

productRouter.get("/", productController.showProduct);
productRouter.put(
  "/:id", checkToken.admin,
  fileUpload.singleUpload,
  productController.updateProduct
);
productRouter.delete("/:id", checkToken.admin, productController.deleteProduct);

module.exports = productRouter;
