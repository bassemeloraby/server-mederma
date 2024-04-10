const express = require("express");
const router = express.Router();
const { setEquipment } = require("../controllers/equipmentControllers");

router.route("/").post(setEquipment);

module.exports = router;
