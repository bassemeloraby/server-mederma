const equipments = require("../models/equipmentModel");
const asyncHandler = require("express-async-handler");

// @desc    Get allDrugs{TradeName,ScientificName,PublicPrice}
// @route   GET /api/drugs
// @access  public
const getEquipments = asyncHandler(async (req, res) => {
  const allEquipments = await equipments
    .find(
      {},
      {}
    )
    .sort({ Description: 1 });
  res.status(200).json(allEquipments);
});

// @desc    Set drug
// @route   POST /api/drugs
// @access  public
const setEquipment = asyncHandler(async (req, res) => {
  try {
    if (req.body.email !== 'bassem@bassem.com') {
      res.status(400).json({ message: "you are not user" }); 
    }
    if (!req.body.Description) {
      res
        .status(400)
        .json({ message: "Please add Description " });
    }
    const equipment = await equipments.create({
      Description: req.body.Description,
      company: req.body.company,
      use: req.body.use,
      Price: req.body.Price,
      wasfaty: req.body.wasfaty,
      list: req.body.list,
    });
    res.status(200).json(equipment);
  } catch (error) {
    res.status(400);
  }
});

// @desc    Delete equipment
// @route   DELETE /api/allDrugs/:id
// @access  public
const deleteEquipment = asyncHandler(async (req, res) => {
  const equipment = await equipments.findById(req.params.id);

  if (!equipment) {
    res.status(400).json({ message: "equipment not found" });
  }
  await equipment.deleteOne();
  res.status(200).json({ _id: req.params.id });
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
  deleteEquipment,
  updateEquipment,
};
