const express = require("express");
const router = express.Router();
const {
  getAllDrugs,
  getOneDrug,
} = require("../controllers/allDrugsControllers");

router.route("/").get(getAllDrugs);
router.route("/:_id").get(getOneDrug);

module.exports = router;
