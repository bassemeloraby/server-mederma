const express = require("express");
const router = express.Router();
const { setEquipment,getEquipments ,updateEquipment,deleteEquipment} = require("../controllers/equipmentControllers");

router.route("/").get(getEquipments);
router.route("/").post(setEquipment);
router.route("/:id").patch(updateEquipment);
router.route("/:id").delete(deleteEquipment);

module.exports = router;
