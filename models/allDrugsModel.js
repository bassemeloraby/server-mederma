const mongoose = require("mongoose");

const allDrugsSchema = mongoose.Schema({
  TradeName: {
    type: String,
    required: [true, "Please add a value"],
  },
  ScientificName: {
    type: String,
    required: [true, "Please add a value"],
  },
  Strength: {
    type: String,
  },
  StrengthUnit: {
    type: String,
  },
});

module.exports = mongoose.model("alldrugs", allDrugsSchema);
