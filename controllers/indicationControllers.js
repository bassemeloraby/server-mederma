const indication = require("../models/indicationModel");
const asyncHandler = require("express-async-handler");

// @desc    Get allIndication
// @route   GET /api/indications
// @access  public
const getAllIndications = asyncHandler(async (req, res) => {
  if (req.query.scientificName) {
    const indications = await indication.find(
      { SCIENTIFIC_NAME: req.query.scientificName },
      {
        INDICATION: 1,
        ICD_10_CODE: 1,
        SCIENTIFIC_NAME: 1,
        PHARMACEUTICAL_FORM: 1,
      }
    );
    res.status(200).json(indications);
    console.log(indications.length)
  } else {
    const allIndication = await indication.find(
      {},
      {
        INDICATION: 1,
        ICD_10_CODE: 1,
        SCIENTIFIC_NAME: 1,
        PHARMACEUTICAL_FORM: 1,
      }
    );
    res.status(200).json(allIndication);
    console.log(allIndication.length)
  }
});

module.exports = {
  getAllIndications,
};
