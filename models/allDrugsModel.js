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
  PublicPrice: {
    type: Number,
  },
  picLink: {
    type: String,
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
  Size: {
    type: Number,
  },
  SizeUnit: {
    type: String,
  },
  wasfaty: {
    type: Boolean,
  },
  list: {
    type: Boolean,
  },
  vitamine: {
    type: Boolean,
  },
});

module.exports = mongoose.model("alldrugs", allDrugsSchema);
