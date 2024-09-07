const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const {
  setProduct,
  getProducts,
  getOneProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/allProductsControllers");

router.route("/").post(upload.single("file"), setProduct);
router.route("/").get(getProducts);
router.route("/:id").get(getOneProduct);
router.route("/:id").delete(deleteProduct);
router.route("/:id").patch(upload.single("file"),updateProduct);

module.exports = router;
