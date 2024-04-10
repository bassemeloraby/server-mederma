const equipments = require("../models/equipmentModel");
const asyncHandler = require("express-async-handler");


// @desc    Get allDrugs{TradeName,ScientificName,PublicPrice}
// @route   GET /api/drugs
// @access  public
const getEquipments = asyncHandler(async (req, res) => {
  const allEquipments = await equipments
    .find(
      {},
      {
        MachineName: 1,
        MachineUse: 1,
      }
    )
    .sort({ MachineName: 1 });
  res.status(200).json(allEquipments);
});


// @desc    Set drug
// @route   POST /api/drugs
// @access  public
const setEquipment = asyncHandler(async (req, res) => {
  try {
    if (!req.body.MachineName || !req.body.MachineUse) {
      res.status(400).json({ message: "Please add MachineName and  MachineUse field" });
    }
    const equipment = await equipments.create({
        MachineName: req.body.MachineName,
        MachineUse: req.body.MachineUse,
    });
    res.status(200).json(equipment);
  } catch (error) {
    res.status(400);
  }
});

module.exports = {
  getEquipments,
  setEquipment,
};
