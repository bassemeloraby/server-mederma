const specialArray = require("../models/specialArrayModel");
const asyncHandler = require("express-async-handler");

// @desc    Get allDrugs{TradeName,ScientificName,PublicPrice}
// @route   GET /api/drugs
// @access  public
const getSpecialArrays = asyncHandler(async (req, res) => {
  const specialAr = await specialArray.find({}, {}).sort({});
  res.status(200).json(specialAr);
});

// @desc    Get one list
// @route   GET /api/specialArrays/:id
// @access  public
const getOneSpecialArray = asyncHandler(async (req, res) => {
  const list = await specialArray.findById(req.params.id);
  if (!list) {
    res.status(400).json({ message: "not found" });
  } else {
    res.status(200).json(list);
  }
});

// @desc    Set list
// @route   POST /api/specialArrays
// @access  public
const setSpecialArray = asyncHandler(async (req, res) => {
  console.log(req.body.Description);
  const d1 = req.body.Description;
  console.log(d1);
  const listDescription = await specialArray.find({ Description: d1 });
  console.log(listDescription);
  console.log(listDescription.length);
  if (listDescription.length > 0) {
    res.status(400).json("there is a list with same description");
  } else if (!req.body.content) {
    res.status(400).json("please provide a content");
  } else {
    const specialAr = await specialArray.create({
      Description: req.body.Description,
      content: req.body.content,
    });
    res.status(200).json(specialAr);
  }
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

// @desc    Update list
// @route   patch /api/allDrugs/:id
// @access  public
const updateSpecialArray = asyncHandler(async (req, res) => {
  const specialAr = await specialArray.findById(req.params.id);
  if (!specialAr) {
    res.status(400).json({ message: "list not found" });
  }

  const updatedSpecialArray = await specialArray.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedSpecialArray);
});

module.exports = {
  getSpecialArrays,
  getOneSpecialArray,
  setSpecialArray,
  deleteSpecialArray,
  updateSpecialArray,
};
