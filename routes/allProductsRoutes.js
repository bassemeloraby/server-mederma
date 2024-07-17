const express = require("express");
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });



const {
  setProduct,
  getProducts,
  getOneProduct,
  deleteProduct,
  updateProduct,
  filterProducts,
  uploadImage,
} = require("../controllers/allProductsControllers");

router.route("/").post(upload.single("file"),setProduct);
router.route("/").get(getProducts);
router.route("/:id").get(getOneProduct);
router.route("/:id").delete(deleteProduct);
router.route("/:id").patch(updateProduct);
router.route("/filter").get(filterProducts);
router.route("/uploadImage").post(upload.single("file"), uploadImage);

module.exports = router;
