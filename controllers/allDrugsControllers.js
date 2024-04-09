const { set } = require("mongoose");
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
        NumberUnit: 1,
        PharmaceuticalForm: 1,
        ScientificDescriptionCodeRoot: 1,
        wasfaty: 1,
        list: 1,
      }
    )
    .sort({ TradeName: 1 });
  res.status(200).json(allDrug);
});

// @desc    Get one drug
// @route   GET /api/allDrugs/:id
// @access  public
const getOneDrug = asyncHandler(async (req, res) => {
  const drugs = await alldrugs.find({ _id: req.params.id });
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
      Strength: req.body.Strength,
      StrengthUnit: req.body.StrengthUnit,
      NumberUnit: req.body.NumberUnit,
      wasfaty: req.body.wasfaty,
      list: req.body.list,
    });
    res.status(200).json(drug);
  } catch (error) {
    res.status(400);
  }
});

// @desc    Delete drug
// @route   DELETE /api/allDrugs/:id
// @access  public
const deleteDrug = asyncHandler(async (req, res) => {
  // const company = await Company.findById(req.params.id)
  const drug = await alldrugs.findById(req.params.id);

  if (!drug) {
    res.status(400).json({ message: "drug not found" });
  }
  await drug.deleteOne();
  res.status(200).json({ _id: req.params.id });
});

// @desc    Update drug
// @route   PUT /api/allDrugs/:id
// @access  public
const updateDrug = asyncHandler(async (req, res) => {
  const product = await alldrugs.findById(req.params.id);
  if (!product) {
    res.status(400).json({ message: "product not found" });
  }

  const updatedDrug = await alldrugs.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedDrug);
});
// ---------------------------------------------//
// @desc    Update many drug
// @route   patch /api/allDrugs
// @access  public
const updateManyDrugs = asyncHandler(async (req, res) => {
  const filter = { wasfaty: req.body.wasfaty };
  const update = { $set: { wasfaty: "false" } };
  res.status(200).json("updateManyDrugs");
  console.log("updateManyDrugs");
  console.log(filter);
  console.log(update);
  // updateMany(filter, update, options)
  const updateMany = await alldrugs.updateMany(filter, update)
  console.log(updateMany)
});

module.exports = {
  getAllDrugs,
  getOneDrug,
  setDrug,
  deleteDrug,
  updateDrug,
  updateManyDrugs,
};
