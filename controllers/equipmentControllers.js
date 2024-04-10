const equipments = require("../models/equipmentModel");
const asyncHandler = require("express-async-handler");


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
  setEquipment,
};
