const express = require("express");
const router = express.Router();
const {
  getSpecialArrays,
  setSpecialArray,
  deleteSpecialArray,
  getOneSpecialArray,
  updateSpecialArray,
} = require("../controllers/specialArrayControllers");

router.route("/").get(getSpecialArrays);
router.route("/").post(setSpecialArray);
router.route("/:id").get(getOneSpecialArray);
router.route("/:id").delete(deleteSpecialArray);
router.route("/:id").patch(updateSpecialArray);

module.exports = router;
