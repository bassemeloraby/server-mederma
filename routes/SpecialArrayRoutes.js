const express = require("express");
const router = express.Router();
const { getSpecialArrays, setSpecialArray } = require("../controllers/specialArrayControllers");

router.route("/").get(getSpecialArrays);
router.route("/").post(setSpecialArray);


module.exports = router;
