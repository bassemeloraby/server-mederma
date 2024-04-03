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
  NumberUnit: {
    type: Number,
  },
  wasfaty: {
    type: Boolean,
  },
  list: {
    type: Boolean,
  },
});

module.exports = mongoose.model("alldrugs", allDrugsSchema);
