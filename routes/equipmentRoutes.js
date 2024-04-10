const express = require("express");
const router = express.Router();
const { setEquipment,getEquipments ,updateEquipment} = require("../controllers/equipmentControllers");

router.route("/").get(getEquipments);
router.route("/").post(setEquipment);
router.route("/:id").patch(updateEquipment);

module.exports = router;
