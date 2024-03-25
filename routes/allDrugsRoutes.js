const express = require("express");
const router = express.Router();
const {
  getAllDrugs,
  getOneDrug,
  setDrug,
} = require("../controllers/allDrugsControllers");

router.route("/").get(getAllDrugs);
router.route("/").post(setDrug);
router.route("/:_id").get(getOneDrug);

module.exports = router;
