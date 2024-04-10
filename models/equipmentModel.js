const mongoose = require("mongoose");

const equipmentSchema = mongoose.Schema({
  MachineName: {
    type: String,
    required: [true, "Please add a value"],
  },
  MachineUse: {
    type: String,
    required: [true, "Please add a value"],
  },
});

module.exports = mongoose.model("equipment", equipmentSchema);
