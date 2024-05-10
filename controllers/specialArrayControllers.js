const specialArray = require("../models/specialArrayModel");
const asyncHandler = require("express-async-handler");

// @desc    Get allDrugs{TradeName,ScientificName,PublicPrice}
// @route   GET /api/drugs
// @access  public
const getSpecialArrays = asyncHandler(async (req, res) => {
  const specialAr = await specialArray.find({}, {}).sort({});
  res.status(200).json(specialAr);
});

// @desc    Set drug
// @route   POST /api/drugs
// @access  public
const setSpecialArray = asyncHandler(async (req, res) => {
  const specialAr = await specialArray.create({
    content: req.body.content,
  });
  res.status(200).json(specialAr);
});

module.exports = {
  getSpecialArrays,
  setSpecialArray,
};
