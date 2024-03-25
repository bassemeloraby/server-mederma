const alldrugs = require("../models/allDrugsModel");
const asyncHandler = require("express-async-handler");

// @desc    Get allDrugs{TradeName,ScientificName,PublicPrice}
// @route   GET /api/drugs
// @access  public
const getAllDrugs = asyncHandler(async (req, res) => {
  const allDrug = await alldrugs
    .find(
      {},
      {
        TradeName: 1,
        ScientificName: 1,
        PublicPrice: 1,
        Strength: 1,
        StrengthUnit: 1,
        PharmaceuticalForm: 1,
        ScientificDescriptionCodeRoot: 1,
      }
    )
    .sort({ TradeName: 1 });
  res.status(200).json(allDrug);
});

// @desc    Get one drug
// @route   GET /api/drugs/:id
// @access  public
const getOneDrug = asyncHandler(async (req, res) => {
  const drugs = await alldrugs.find({ _id: req.params._id });
  if (!drugs) {
    res.status(400).json({ message: "not found" });
  }
  res.status(200).json(drugs);
});

// @desc    Set drug
// @route   POST /api/drugs
// @access  public
const setDrug = asyncHandler(async (req, res) => {
  try {
    if (!req.body.TradeName || !req.body.ScientificName) {
      res.status(400).json({ message: "Please add a Trade Name field" });
    }
    const drug = await alldrugs.create({
      TradeName: req.body.TradeName,
      ScientificName: req.body.ScientificName,
      
    });
    res.status(200).json(drug);
  } catch (error) {
    res.status(400);
  }
});

module.exports = {
  getAllDrugs,
  getOneDrug,
  setDrug,
};
