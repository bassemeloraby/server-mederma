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
  const listDescription = await specialArray.find({
    Description: req.body.Description,
  });
  if (listDescription) {
    res.status(400).json("there is a list with same description");
  }
  if (!req.body.content) {
    res.status(200).json("please provide a content");
  }
  const specialAr = await specialArray.create({
    Description: req.body.Description,
    content: req.body.content,
  });
  res.status(200).json(specialAr);
});

// @desc    Delete equipment
// @route   DELETE /api/allDrugs/:id
// @access  public
const deleteSpecialArray = asyncHandler(async (req, res) => {
  const specialAr = await specialArray.findById(req.params.id);

  if (!specialAr) {
    res.status(400).json({ message: "specialAr not found" });
  }
  await specialAr.deleteOne();
  res.status(200).json({ _id: req.params.id });
});

module.exports = {
  getSpecialArrays,
  setSpecialArray,
  deleteSpecialArray,
};
