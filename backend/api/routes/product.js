const express = require("express");
const router = express.Router();
const ProductController = require("./../controllers/ProductController");

router.get("/", ProductController.listProducts);

router.get("/:id", ProductController.getProduct);

router.post("/", ProductController.addProduct);

router.put("/:id", ProductController.updateProduct);

router.delete("/:id", ProductController.deleteProduct);

module.exports = router;
