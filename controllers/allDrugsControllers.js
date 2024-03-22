const allDrugs = require("../models/allDrugsModel");
const asyncHandler = require("express-async-handler");

// @desc    Get allDrugs{TradeName,ScientificName,PublicPrice}
// @route   GET /api/drugs
// @access  public
const getAllDrugs = asyncHandler(async (req, res) => {
  const allDrug = await allDrugs
    .find()
    .sort({ TradeName: 1 });
  res.status(200).json(allDrug);
});

// @desc    Get one drug
// @route   GET /api/drugs/:id
// @access  public
const getOneDrug = asyncHandler(async (req, res) => {
  const drugs = await allDrugs.find({ _id: req.params._id });
  if (!drugs) {
    res.status(400).json({ message: 'not found' });
  }
  res.status(200).json(drugs);
});

module.exports = {
  getAllDrugs,
  getOneDrug
};
