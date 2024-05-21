const mongoose = require("mongoose");

const allProductsSchema = mongoose.Schema({
  pharmacyCategory: {
    type: String,
    required: [true, "Please add a value"],
  },
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
  publicPrice: {
    type: Number,
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
  parts: {
    type: Number,
  },
  size: {
    type: Number,
  },
  sizeUnit: {
    type: String,
  },
  //special
  wasfaty: {
    type: Boolean,
    default: false,
  },
  list: {
    type: Boolean,
    default: false,
  },
  vitamine: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("allProducts", allProductsSchema);
