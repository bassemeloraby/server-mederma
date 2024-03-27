const express = require("express");
const router = express.Router();
const {
  getAllDrugs,
  getOneDrug,
  setDrug,
  deleteDrug,
} = require("../controllers/allDrugsControllers");

router.route("/").get(getAllDrugs);
router.route("/").post(setDrug);
router.route("/:id").get(getOneDrug);
router.route("/:id").delete(deleteDrug);

module.exports = router;
