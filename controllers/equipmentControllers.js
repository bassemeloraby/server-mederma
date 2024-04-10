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
      res
        .status(400)
        .json({ message: "Please add MachineName and  MachineUse field" });
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

// @desc    Update equipment
// @route   patch /api/equipments/:id
// @access  public
const updateEquipment = asyncHandler(async (req, res) => {
  const equipment = await equipments.findById(req.params.id);
  if (!equipment) {
    res.status(400).json({ message: "equipment not found" });
  }

  const updatedEquipment = await equipments.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedEquipment);
});

module.exports = {
  getEquipments,
  setEquipment,
  updateEquipment,
};
