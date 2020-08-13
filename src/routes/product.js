const express = require("express");
const productRouter = express.Router();

const productController = require('../controllers/product')

productRouter.get("/", productController.showProduct);
productRouter.post("/", productController.insertProduct);
productRouter.put("/", productController.updateProduct);
productRouter.delete("/", productController.deleteProduct);
productRouter.get("/:name", productController.searchByName);
productRouter.get("/sort/new-menu", productController.sortByNewMenu);
productRouter.get("/sort/price", productController.sortByPrice);
productRouter.get("/sort/category", productController.sortByCategory);
productRouter.get("/sort/name", productController.sortByName);


module.exports = productRouter;