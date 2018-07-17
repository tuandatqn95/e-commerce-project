const express = require("express");
const router = express.Router();
const CategoryController = require("./../controllers/CategoryController");

router.get("/", CategoryController.listCategories);

router.get("/:id", CategoryController.getCategory);

router.post("/", CategoryController.addCategory);

router.patch("/:id", CategoryController.updateCategory);

router.delete("/:id", CategoryController.deleteCategory);

module.exports = router;
