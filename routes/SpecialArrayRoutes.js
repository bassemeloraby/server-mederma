const express = require("express");
const router = express.Router();
const { getSpecialArrays, setSpecialArray, deleteSpecialArray } = require("../controllers/specialArrayControllers");

router.route("/").get(getSpecialArrays);
router.route("/").post(setSpecialArray);
router.route("/:id").delete(deleteSpecialArray);


module.exports = router;
