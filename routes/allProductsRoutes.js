const express = require("express");
const router = express.Router();

const {
  setProduct,
  getProducts,
  getOneProduct,
  deleteProduct,
  updateProduct,
  filterProducts
} =require("../controllers/allProductsControllers") 

router.route("/").post(setProduct);
router.route("/").get(getProducts);
router.route("/:id").get(getOneProduct);
router.route("/:id").delete(deleteProduct);
router.route("/:id").patch(updateProduct);
router.route("/filter").get(filterProducts);

module.exports = router;
