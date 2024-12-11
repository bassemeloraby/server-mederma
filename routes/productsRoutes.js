const express = require("express");
const router = express.Router();
const multer = require("multer");
const productsController = require("../controllers/productsControllers");

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Routes

// Create a new product
router.post("/", upload.single("img"), productsController.createProduct);

// Get all products
router.get("/", productsController.getAllProducts);

// Get a product by ID
router.get("/:id", productsController.getProductById);

// Update a product by ID
router.put("/:id", upload.single("img"), productsController.updateProduct);

// Delete a product by ID
router.delete("/:id", productsController.deleteProduct);

module.exports = router;
