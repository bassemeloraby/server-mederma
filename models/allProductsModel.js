const mongoose = require("mongoose");

const allProductsSchema = mongoose.Schema({
  description: {
    type: String,
    required: [true, "Please add a value"],
  },
  scientificName: {
    type: String,
    // required: [true, "Please add a value"],
  },
  marketingCompany: {
    type: String,
  },
  //equipmen
  use: {
    type: String,
  },
  picLink: {
    type: String,
  },
  strength: {
    type: String,
  },
  strengthUnit: {
    type: String,
  },
  numberUnit: {
    type: Number,
  },
  size: {
    type: Number,
  },
  sizeUnit: {
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

module.exports = mongoose.model("allProducts", allProductsSchema);
