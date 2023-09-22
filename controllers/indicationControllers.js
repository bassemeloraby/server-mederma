const indication = require("../models/indicationModel");
const asyncHandler = require("express-async-handler");

// @desc    Get allIndication
// @route   GET /api/indications
// @access  public
const getAllIndications = asyncHandler(async (req, res) => {
  const allIndication = await indication.find();
  res.header("Access-Control-Allow-Origin", "*");
  res.status(200).json(allIndication);
});

module.exports = {
    getAllIndications,
};
