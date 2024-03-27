const express = require("express");
const router = express.Router();
const {
  getAllDrugs,
  getOneDrug,
  setDrug,
  deleteDrug,
  updateDrug,
} = require("../controllers/allDrugsControllers");

router.route("/").get(getAllDrugs);
router.route("/").post(setDrug);
router.route("/:id").get(getOneDrug);
router.route("/:id").delete(deleteDrug);
router.route("/:id").patch(updateDrug);

module.exports = router;
