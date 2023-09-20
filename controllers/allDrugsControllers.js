const allDrugs = require('../models/allDrugsModel');
const asyncHandler = require('express-async-handler');


// @desc    Get allDrugs{TradeName,ScientificName,PublicPrice}
// @route   GET /api/drugs
// @access  public
const getAllDrugs = asyncHandler(async (req, res) => {
    const allDrug = await allDrugs.find(
      {},
      { TradeName: 1, ScientificName: 1, PublicPrice: 1 }
    ).sort({ TradeName: 1 });
    res.status(200).json(allDrug);
  });



  module.exports = {
    getAllDrugs,
  };