const express = require("express");
const router = express.Router();
const { setEquipment,getEquipments } = require("../controllers/equipmentControllers");

router.route("/").get(getEquipments);
router.route("/").post(setEquipment);

module.exports = router;
