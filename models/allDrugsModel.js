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
  wasfaty: {
    type: Boolean,
    default: false,
  },
  list: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("alldrugs", allDrugsSchema);
